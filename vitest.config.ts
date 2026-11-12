import { getViteConfig } from 'astro/config';

// Solo aporta el plugin de Astro para poder importar componentes .astro en los
// tests. Vitest ya descubre `tests/**/*.test.ts` por convención.
export default getViteConfig({});
