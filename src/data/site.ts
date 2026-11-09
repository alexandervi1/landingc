import type { ProjectId, SocialId } from '../i18n/types';

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

// EDITAR: contenido de ejemplo. Cambia títulos/resúmenes en src/i18n/{es,en}.ts
// y el stack/href aquí. href '' oculta el enlace "Ver caso".
export const projects: { id: ProjectId; year: string; stack: string[]; href: string }[] = [
  { id: 'parking', year: '2025', stack: ['PHP', 'Laravel', 'MongoDB'], href: '' },
  { id: 'mariscos', year: '2025', stack: ['PHP', 'MySQL'], href: '' },
  { id: 'unity', year: '2024', stack: ['C#', 'Unity', 'Blender'], href: '' },
];
