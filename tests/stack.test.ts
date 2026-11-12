import { describe, expect, it } from 'vitest';
import { experimental_AstroContainer as AstroContainer } from 'astro/container';
import About from '../src/components/About.astro';
import { es } from '../src/i18n/es';
import { stack } from '../src/data/site';

const render = async () => {
  const container = await AstroContainer.create();
  return container.renderToString(About, { props: { dict: es, number: 1 } });
};

const daily = stack.filter((item) => item.tier === 'daily').map((item) => item.name);
const known = stack.filter((item) => item.tier === 'known').map((item) => item.name);

describe('chips del stack', () => {
  it('muestra el nombre de cada tecnología daily como texto visible', async () => {
    const html = await render();
    for (const name of daily) {
      expect(html).toContain(`>${name}</li>`);
    }
  });

  it('muestra el nombre de cada tecnología known como texto visible', async () => {
    const html = await render();
    for (const name of known) {
      expect(html).toContain(`>${name}</li>`);
    }
  });

  it('no usa enlaces, botones ni tabindex en los chips', async () => {
    const html = await render();
    const markup = [...html.matchAll(/<ul class="chips[\s\S]*?<\/ul>/g)]
      .map((match) => match[0])
      .join('');

    expect(markup.length).toBeGreaterThan(0);
    expect(markup).not.toContain('<a ');
    expect(markup).not.toContain('<button');
    expect(markup).not.toContain('tabindex');
  });

  it('separa los dos niveles en listas distintas', async () => {
    const html = await render();
    expect(html).toContain('class="chips chips-daily"');
    expect(html).toContain('class="chips chips-known"');
  });
});
