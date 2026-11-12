import { beforeEach, describe, expect, it, vi } from 'vitest';

// El Worker lee `caches.default` al cargar el módulo: se sustituye antes del import.
const store = new Map<string, Response>();
const fakeCache = {
  async match(key: Request | string) {
    return store.get(typeof key === 'string' ? key : key.url);
  },
  async put(key: Request | string, response: Response) {
    store.set(typeof key === 'string' ? key : key.url, response);
  },
};

vi.stubGlobal('caches', { default: fakeCache });

// Import dinámico intencional: el Worker resuelve `caches.default` al evaluar el
// módulo, así que el stub debe existir antes de cargarlo. Un import estático
// evaluaría el Worker primero y el caché quedaría indefinido.
const { handleContact } = await import('../worker/index');

const env = {
  ASSETS: { fetch: async () => new Response('') },
  RESEND_API_KEY: 'test-key',
  CONTACT_TO: 'destino@example.com',
  CONTACT_FROM: 'Origen <origen@example.com>',
};

const ctx = { waitUntil: () => {} };

const valid = {
  name: 'Alexander',
  email: 'alex@example.com',
  message: 'Mensaje suficientemente largo para pasar la validación.',
  website: '',
  consent: '1',
  elapsed: 9000,
};

const post = (body: unknown, ip = '1.1.1.1') =>
  new Request('https://example.com/api/contact', {
    method: 'POST',
    headers: { 'content-type': 'application/json', 'cf-connecting-ip': ip },
    body: JSON.stringify(body),
  });

const mockResend = (status = 200) => {
  const spy = vi.fn(async (_url: string, _init: RequestInit) => new Response('{}', { status }));
  vi.stubGlobal('fetch', spy);
  return spy;
};

beforeEach(() => {
  store.clear();
  mockResend();
});

describe('handleContact', () => {
  it('rechaza métodos distintos de POST', async () => {
    const response = await handleContact(
      new Request('https://example.com/api/contact', { method: 'GET' }),
      env,
      ctx
    );

    expect(response.status).toBe(405);
    expect(response.headers.get('allow')).toBe('POST');
  });

  it('responde ok y no envía nada cuando el honeypot viene relleno', async () => {
    const spy = mockResend();
    const response = await handleContact(post({ ...valid, website: 'spam' }), env, ctx);

    expect(response.status).toBe(200);
    expect(await response.json()).toEqual({ ok: true });
    expect(spy).not.toHaveBeenCalled();
  });

  it('responde ok y no envía nada cuando el formulario se rellena demasiado rápido', async () => {
    const spy = mockResend();
    const response = await handleContact(post({ ...valid, elapsed: 500 }), env, ctx);

    expect(response.status).toBe(200);
    expect(spy).not.toHaveBeenCalled();
  });

  it('rechaza un email inválido', async () => {
    const spy = mockResend();
    const response = await handleContact(post({ ...valid, email: 'no-es-email' }), env, ctx);

    expect(response.status).toBe(422);
    expect(spy).not.toHaveBeenCalled();
  });

  it('rechaza un mensaje demasiado corto', async () => {
    const response = await handleContact(post({ ...valid, message: 'corto' }), env, ctx);
    expect(response.status).toBe(422);
  });

  it('rechaza el envío sin consentimiento', async () => {
    const spy = mockResend();
    const response = await handleContact(post({ ...valid, consent: '' }), env, ctx);

    expect(response.status).toBe(422);
    expect(await response.json()).toEqual({ error: 'consent_required' });
    expect(spy).not.toHaveBeenCalled();
  });

  it('rechaza el envío con consentimiento falso', async () => {
    const spy = mockResend();
    const response = await handleContact(post({ ...valid, consent: 'false' }), env, ctx);

    expect(response.status).toBe(422);
    expect(spy).not.toHaveBeenCalled();
  });

  it('rechaza un cuerpo que no es JSON', async () => {
    const response = await handleContact(
      new Request('https://example.com/api/contact', {
        method: 'POST',
        headers: { 'content-type': 'application/json' },
        body: 'no json',
      }),
      env,
      ctx
    );

    expect(response.status).toBe(400);
  });

  it('envía el correo con los datos del formulario', async () => {
    const spy = mockResend();
    const response = await handleContact(post(valid), env, ctx);

    expect(response.status).toBe(200);
    expect(spy).toHaveBeenCalledTimes(1);

    const [url, init] = spy.mock.calls[0];
    expect(url).toBe('https://api.resend.com/emails');

    const payload = JSON.parse(String(init.body));
    expect(payload.to).toEqual(['destino@example.com']);
    expect(payload.reply_to).toBe('alex@example.com');
    expect(payload.from).toBe('Origen <origen@example.com>');
    expect(payload.text).toContain(valid.message);
  });

  it('devuelve 502 cuando el proveedor de correo falla', async () => {
    mockResend(500);
    const response = await handleContact(post(valid), env, ctx);

    expect(response.status).toBe(502);
    expect(await response.json()).toEqual({ error: 'send_failed' });
  });

  it('devuelve 503 cuando no hay clave configurada', async () => {
    const response = await handleContact(post(valid), { ...env, RESEND_API_KEY: undefined }, ctx);

    expect(response.status).toBe(503);
    expect(await response.json()).toEqual({ error: 'not_configured' });
  });

  it('limita a un envío por minuto desde la misma IP', async () => {
    const first = await handleContact(post(valid, '2.2.2.2'), env, ctx);
    const second = await handleContact(post(valid, '2.2.2.2'), env, ctx);

    expect(first.status).toBe(200);
    expect(second.status).toBe(429);
    expect(await second.json()).toEqual({ error: 'rate_limited' });
  });

  it('no limita direcciones IP distintas', async () => {
    const first = await handleContact(post(valid, '3.3.3.3'), env, ctx);
    const second = await handleContact(post(valid, '4.4.4.4'), env, ctx);

    expect(first.status).toBe(200);
    expect(second.status).toBe(200);
  });
});
