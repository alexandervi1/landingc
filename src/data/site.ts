import type { ProjectId } from '../i18n/types';

export const site = {
  name: 'Alexander Villalva',
  role: 'Ingeniero de Software',
  email: 'alexandervrd2@gmail.com',
  location: 'Quito, Ecuador',
};

// EDITAR: contenido de ejemplo. Cambia títulos/resúmenes en src/i18n/{es,en}.ts
// y el stack/href aquí.
export const projects: { id: ProjectId; year: string; stack: string[]; href: string }[] = [
  { id: 'gestion', year: '2026', stack: ['TypeScript', 'PostgreSQL', 'Docker'], href: '#' },
  { id: 'analitica', year: '2025', stack: ['Astro', 'Tailwind', 'SQL'], href: '#' },
  { id: 'api', year: '2025', stack: ['Node.js', 'REST', 'Redis'], href: '#' },
];
