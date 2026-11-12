import type { SocialId } from '../i18n/types';

export const site = {
  name: 'Alexander Villalva',
  role: 'Ingeniero de Software',
  email: 'hola@alexandervillalva.uk',
  location: 'Riobamba, Ecuador',
  city: 'Riobamba',
  country: 'EC',
};

// EDITAR: enlaces reales de perfiles. Deja '' para ocultar el elemento.
export const links: Record<SocialId, string> = {
  github: 'https://github.com/alexandervi1',
  linkedin: 'https://www.linkedin.com/in/alexander-villalva-655a18424/',
};

// EDITAR: 'daily' = uso a diario, 'known' = conozco.
export type StackTier = 'daily' | 'known';

export const stack: { name: string; tier: StackTier }[] = [
  { name: 'JavaScript / TypeScript', tier: 'daily' },
  { name: 'Python', tier: 'daily' },
  { name: 'SQL', tier: 'daily' },
  { name: 'Node.js', tier: 'daily' },
  { name: 'FastAPI', tier: 'daily' },
  { name: 'REST', tier: 'daily' },
  { name: 'React', tier: 'daily' },
  { name: 'Next.js', tier: 'daily' },
  { name: 'Astro', tier: 'daily' },
  { name: 'Tailwind CSS', tier: 'daily' },
  { name: 'HTML/CSS', tier: 'daily' },
  { name: 'Docker', tier: 'daily' },
  { name: 'Git', tier: 'daily' },
  { name: 'CI/CD', tier: 'daily' },
  { name: 'IA aplicada: RAG y LLM locales', tier: 'daily' },
  { name: 'PHP', tier: 'known' },
  { name: 'Laravel', tier: 'known' },
  { name: 'C#', tier: 'known' },
  { name: 'MySQL', tier: 'known' },
  { name: 'MariaDB', tier: 'known' },
  { name: 'SQLite', tier: 'known' },
  { name: 'Blender', tier: 'known' },
];
