// Worker de Cloudflare: expone /api/contact y delega el resto a los assets
// estáticos generados por Astro.
interface Env {
  ASSETS: { fetch(request: Request): Promise<Response> };
  RESEND_API_KEY?: string;
  CONTACT_TO?: string;
  CONTACT_FROM?: string;
}

interface Ctx {
  waitUntil(promise: Promise<unknown>): void;
}

const CONTACT_PATH = '/api/contact';
const RATE_WINDOW_MS = 60 * 1000;
const MIN_FILL_MS = 3000;
const MAX_NAME = 80;
const MAX_MESSAGE = 2000;
const MIN_MESSAGE = 20;
const EMAIL_PATTERN = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/;

// Cloudflare expone `caches.default`; el lib DOM no declara esa propiedad.
const cacheStorage = globalThis.caches as (CacheStorage & { default?: Cache }) | undefined;
const cache = cacheStorage?.default;

const json = (body: unknown, status = 200): Response =>
  new Response(JSON.stringify(body), {
    status,
    headers: {
      'content-type': 'application/json; charset=utf-8',
      'cache-control': 'no-store',
    },
  });

const readField = (body: Record<string, unknown>, key: string): string => {
  const value = body[key];
  return typeof value === 'string' ? value.trim() : '';
};

export async function handleContact(request: Request, env: Env, ctx: Ctx): Promise<Response> {
  if (request.method !== 'POST') {
    return new Response('Method Not Allowed', { status: 405, headers: { allow: 'POST' } });
  }

  const contentType = request.headers.get('content-type') ?? '';
  const isFormPost = contentType.includes('application/x-www-form-urlencoded');
  const done = () => Response.redirect(new URL('/#contacto', request.url).href, 303);

  let body: Record<string, unknown>;
  if (isFormPost) {
    const entries = await request.formData();
    body = Object.fromEntries(entries.entries());
  } else {
    const parsed: unknown = await request.json().catch(() => null);
    if (!parsed || typeof parsed !== 'object') return json({ error: 'invalid_body' }, 400);
    // JSON del propio formulario: tras comprobar que es un objeto, se leen campos con guardas.
    body = parsed as Record<string, unknown>;
  }

  const name = readField(body, 'name').slice(0, MAX_NAME);
  const email = readField(body, 'email').slice(0, 200);
  const message = readField(body, 'message').slice(0, MAX_MESSAGE);
  const honeypot = readField(body, 'website');
  const elapsed = Number(body.elapsed);

  // Bot: campo trampa relleno o envío demasiado rápido. Respuesta idéntica a la de éxito.
  const tooFast = !isFormPost && (!Number.isFinite(elapsed) || elapsed < MIN_FILL_MS);
  if (honeypot !== '' || tooFast) {
    return isFormPost ? done() : json({ ok: true });
  }

  if (name.length < 2 || !EMAIL_PATTERN.test(email) || message.length < MIN_MESSAGE) {
    return isFormPost ? done() : json({ error: 'invalid_fields' }, 422);
  }

  // Consentimiento explícito: la casilla debe llegar marcada.
  const consent = readField(body, 'consent');
  if (consent !== '1' && consent !== 'true' && consent !== 'on') {
    return isFormPost ? done() : json({ error: 'consent_required' }, 422);
  }

  const ip = request.headers.get('cf-connecting-ip') ?? 'unknown';
  const rateKey = new Request(`https://contact-rate.internal/${encodeURIComponent(ip)}`);
  if (cache && (await cache.match(rateKey))) {
    return isFormPost ? done() : json({ error: 'rate_limited' }, 429);
  }
  if (cache) {
    ctx.waitUntil(
      cache.put(
        rateKey,
        new Response('1', { headers: { 'cache-control': `max-age=${RATE_WINDOW_MS / 1000}` } })
      )
    );
  }

  const apiKey = env.RESEND_API_KEY;
  if (!apiKey) return isFormPost ? done() : json({ error: 'not_configured' }, 503);

  const to = env.CONTACT_TO ?? 'hola@alexandervillalva.uk';
  const from = env.CONTACT_FROM ?? 'Alexander Villalva <hola@alexandervillalva.uk>';

  const sent = await fetch('https://api.resend.com/emails', {
    method: 'POST',
    headers: { authorization: `Bearer ${apiKey}`, 'content-type': 'application/json' },
    body: JSON.stringify({
      from,
      to: [to],
      reply_to: email,
      subject: `Contacto web — ${name}`,
      text: `${message}\n\n— ${name} <${email}>`,
    }),
  });

  if (!sent.ok) {
    console.warn('contact: Resend respondió', sent.status, await sent.text());
    return isFormPost ? done() : json({ error: 'send_failed' }, 502);
  }

  return isFormPost ? done() : json({ ok: true });
}

export default {
  async fetch(request: Request, env: Env, ctx: Ctx): Promise<Response> {
    const { pathname } = new URL(request.url);
    if (pathname === CONTACT_PATH) return handleContact(request, env, ctx);
    return env.ASSETS.fetch(request);
  },
};
