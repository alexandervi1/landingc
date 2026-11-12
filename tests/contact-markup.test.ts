import { describe, expect, it } from 'vitest';
import { experimental_AstroContainer as AstroContainer } from 'astro/container';
import Contact from '../src/components/Contact.astro';
import { es } from '../src/i18n/es';
import { en } from '../src/i18n/en';

const render = async (dict: typeof es, locale: 'es' | 'en') => {
  const container = await AstroContainer.create();
  return container.renderToString(Contact, { props: { dict, locale, number: 3 } });
};

describe('marcado del formulario de contacto', () => {
  it('oculta el honeypot a lectores de pantalla y lo saca del orden de tabulación', async () => {
    const html = await render(es, 'es');
    const block = /<div class="hp"[^>]*>([\s\S]*?)<\/div>/.exec(html);

    expect(block).not.toBeNull();
    expect(block![0]).toContain('aria-hidden="true"');

    const input = /<input[^>]*name="website"[^>]*>/.exec(block![1]);
    expect(input).not.toBeNull();
    expect(input![0]).toContain('tabindex="-1"');
    expect(input![0]).toContain('autocomplete="off"');
    expect(input![0]).not.toContain('required');
  });

  it('exige consentimiento con una casilla desmarcada por defecto', async () => {
    for (const [dict, locale] of [
      [es, 'es'],
      [en, 'en'],
    ] as const) {
      const html = await render(dict, locale);
      const input = /<input[^>]*name="consent"[^>]*>/.exec(html);

      expect(input).not.toBeNull();
      expect(input![0]).toContain('type="checkbox"');
      expect(input![0]).toContain('required');
      expect(input![0]).not.toContain('checked');
    }
  });

  it('expone un mensaje distinto para validación, límite y red', async () => {
    const html = await render(es, 'es');
    const form = /<form[^>]*>/.exec(html)?.[0] ?? '';

    expect(form).toContain('data-str-error-validation');
    expect(form).toContain('data-str-error-rate');
    expect(form).toContain('data-str-error-network');
  });

  it('anuncia el estado completo a lectores de pantalla', async () => {
    const html = await render(es, 'es');
    const status = /<p class="form-status"[^>]*>/.exec(html)?.[0] ?? '';

    expect(status).toContain('aria-live="polite"');
    expect(status).toContain('aria-atomic="true"');
  });
});
