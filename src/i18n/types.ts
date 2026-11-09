export const locales = ['es', 'en'] as const;
export type Locale = (typeof locales)[number];
export type ProjectId = 'parking' | 'mariscos' | 'unity';
export type SocialId = 'github' | 'linkedin';

export interface Dict {
  meta: { title: string; description: string };
  a11y: { skip: string; menu: string };
  nav: { projects: string; about: string; contact: string; cta: string };
  hero: {
    eyebrow: string;
    title: [string, string, string];
    lead: string;
    ctaPrimary: string;
    ctaSecondary: string;
    terminal: { label: string; blocks: { cmd: string; out: string }[] };
  };
  projects: {
    label: string;
    heading: string;
    intro: string;
    link: string;
    items: Record<
      ProjectId,
      { title: string; summary: string; details?: { label: string; value: string }[]; note?: string }
    >;
  };
  about: {
    label: string;
    heading: string;
    photoAlt: string;
    facts: { label: string; value: string }[];
    paragraphs: string[];
    groups: { label: string; items: string[] }[];
  };
  // Notas: cuando existan artículos propios, añadir aquí un bloque `notes`
  // y una sección <Notes /> entre Projects y Contact en ambas páginas.
  contact: {
    label: string;
    heading: string;
    lead: string;
    emailCta: string;
    form: {
      name: string;
      email: string;
      message: string;
      submit: string;
      sending: string;
      success: string;
      error: string;
      noscript: string;
      consent: { lead: string; link: string };
    };
    socials: { id: SocialId; label: string }[];
  };
  footer: { rights: string; location: string; built: string; privacy: string };
}
