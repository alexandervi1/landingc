import { describe, expect, it } from 'vitest';
import { experimental_AstroContainer as AstroContainer } from 'astro/container';
import Nav from '../src/components/Nav.astro';
import About from '../src/components/About.astro';
import Contact from '../src/components/Contact.astro';
import Projects from '../src/components/Projects.astro';
import { es } from '../src/i18n/es';
import { en } from '../src/i18n/en';
import { visibleProjects } from '../src/data/projects';

/** Secciones de la portada que sirven de destino a las anclas del menú. */
const homeSections = async (dict: typeof es, locale: 'es' | 'en') => {
  const container = await AstroContainer.create();
  const parts = [
    await container.renderToString(About, { props: { dict, number: 1 } }),
    await container.renderToString(Contact, { props: { dict, locale, number: 3 } }),
  ];
  if (visibleProjects().length > 0) {
    parts.push(await container.renderToString(Projects, { props: { dict, locale, number: 2 } }));
  }
  return parts.join('');
};

describe('menu de navegacion', () => {
  it('no deja anclas relativas que se rompen fuera de la portada', async () => {
    const container = await AstroContainer.create();
    const html = await container.renderToString(Nav, { props: { dict: es, locale: 'es' } });

    expect(html).not.toMatch(/href="#/);
  });

  it('resuelve cada ancla contra la portada del idioma actual', async () => {
    const container = await AstroContainer.create();

    for (const [dict, locale, base] of [
      [es, 'es', '/'],
      [en, 'en', '/en/'],
    ] as const) {
      const html = await container.renderToString(Nav, { props: { dict, locale } });
      const hashes = [...html.matchAll(/href="([^"]*#[^"]*)"/g)].map((match) => match[1]);

      expect(hashes.length).toBeGreaterThan(0);
      for (const href of hashes) {
        expect(href.startsWith(base)).toBe(true);
      }
    }
  });

  it('cada ancla del menu apunta a una seccion que existe en la portada', async () => {
    const container = await AstroContainer.create();

    for (const [dict, locale] of [
      [es, 'es'],
      [en, 'en'],
    ] as const) {
      const nav = await container.renderToString(Nav, { props: { dict, locale } });
      const ids = [...nav.matchAll(/href="[^"#]*#([^"]+)"/g)].map((match) => match[1]);
      const home = await homeSections(dict, locale);

      expect(ids.length).toBeGreaterThan(0);
      for (const id of ids) {
        expect(home).toContain(`id="${id}"`);
      }
    }
  });

  it('mantiene la marca y el selector de idioma en la portada correcta', async () => {
    const container = await AstroContainer.create();
    const htmlEs = await container.renderToString(Nav, { props: { dict: es, locale: 'es' } });
    const htmlEn = await container.renderToString(Nav, { props: { dict: en, locale: 'en' } });

    expect(/<a class="brand"[^>]*href="([^"]*)"/.exec(htmlEs)?.[1]).toBe('/');
    expect(/<a class="brand"[^>]*href="([^"]*)"/.exec(htmlEn)?.[1]).toBe('/en/');
    expect(htmlEs).toMatch(/href="\/"[^>]*aria-current="page"/);
    expect(htmlEn).toMatch(/href="\/en\/"[^>]*aria-current="page"/);
  });
});
