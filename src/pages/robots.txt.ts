import type { APIRoute } from 'astro';

export const GET: APIRoute = ({ site }) => {
  const base = site ?? new URL('https://alexandervillalva.uk');
  const body = `User-agent: *
Allow: /

Sitemap: ${new URL('/sitemap.xml', base).href}
`;

  return new Response(body, {
    headers: { 'content-type': 'text/plain; charset=utf-8' },
  });
};
