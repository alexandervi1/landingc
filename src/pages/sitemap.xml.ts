import type { APIRoute } from 'astro';
import { publishedProjects, projectPath } from '../data/projects';

export const GET: APIRoute = ({ site }) => {
  const base = site ?? new URL('https://alexandervillalva.uk');

  const pages = [
    { path: '/', es: '/', en: '/en/' },
    { path: '/privacidad', es: '/privacidad', en: '/en/privacy' },
    { path: '/en/', es: '/', en: '/en/' },
    { path: '/en/privacy', es: '/privacidad', en: '/en/privacy' },
  ];

  for (const project of publishedProjects()) {
    const es = projectPath(project, 'es');
    const en = projectPath(project, 'en');
    pages.push({ path: es, es, en }, { path: en, es, en });
  }

  const urls = pages.map((page) => {
    const loc = new URL(page.path, base).href;
    const alternates = [
      `    <xhtml:link rel="alternate" hreflang="es" href="${new URL(page.es, base).href}" />`,
      `    <xhtml:link rel="alternate" hreflang="en" href="${new URL(page.en, base).href}" />`,
      `    <xhtml:link rel="alternate" hreflang="x-default" href="${new URL(page.es, base).href}" />`,
    ].join('\n');

    return `  <url>\n    <loc>${loc}</loc>\n${alternates}\n  </url>`;
  });

  const xml = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9" xmlns:xhtml="http://www.w3.org/1999/xhtml">
${urls.join('\n')}
</urlset>
`;

  return new Response(xml, {
    headers: { 'content-type': 'application/xml; charset=utf-8' },
  });
};
