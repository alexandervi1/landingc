export const locales = ['es', 'en'] as const;
export type Locale = (typeof locales)[number];
export type ProjectId = 'gestion' | 'analitica' | 'api';

export interface Dict {
  meta: { title: string; description: string };
  a11y: { skip: string };
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
    items: Record<ProjectId, { title: string; summary: string }>;
  };
  about: { label: string; heading: string; paragraphs: string[]; groups: { label: string; items: string[] }[] };
  contact: { label: string; heading: string; lead: string; emailCta: string; socials: { label: string; href: string }[] };
  footer: { rights: string; location: string; built: string };
}
