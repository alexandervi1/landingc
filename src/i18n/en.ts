import type { Dict } from './types';

export const en: Dict = {
  meta: {
    title: 'Alexander Villalva — Software Engineer',
    description:
      'Software engineer. I design and build full-stack web applications: data model, API, interface and deployment.',
  },
  a11y: { skip: 'Skip to content' },
  nav: { projects: 'Projects', about: 'About', contact: 'Contact', cta: "Let's talk" },
  hero: {
    eyebrow: 'Software engineering — ESPOCH',
    title: ['Software', 'that holds up', 'in production.'],
    lead: 'I am Alexander Villalva. I design and build web applications end to end: data model, API, interface and deployment.',
    ctaPrimary: 'See projects',
    ctaSecondary: 'Contact',
    terminal: {
      label: 'stack — zsh',
      blocks: [
        { cmd: 'whoami', out: 'alexander villalva — software engineer' },
        { cmd: 'stack --core', out: 'typescript · node · postgres · docker' },
        { cmd: 'status', out: 'available for projects — 2026' },
      ],
    },
  },
  projects: {
    label: '01 — Projects',
    heading: 'Recent work',
    intro: 'Systems I have taken from idea to production.',
    link: 'View case',
    items: {
      gestion: {
        title: 'Operations management system',
        summary:
          'Internal platform with authentication, roles, reporting and billing. Placeholder: replace this text in src/i18n/en.ts.',
      },
      analitica: {
        title: 'Analytics dashboard',
        summary: 'Metrics dashboard with filters, export and live updates. Placeholder: replace this text in src/i18n/en.ts.',
      },
      api: {
        title: 'Integration API',
        summary: 'Service layer connecting external systems with validation and retries. Placeholder: replace this text in src/i18n/en.ts.',
      },
    },
  },
  about: {
    label: '02 — About',
    heading: 'How I work',
    paragraphs: [
      'Software engineer, ESPOCH graduate. I work end to end: understand the problem, model the data, write the API, build the interface, and leave the system deployed and observable.',
      'I prefer simple, explicit systems over premature abstraction. Every technical decision has to fit in one sentence and survive production.',
    ],
    groups: [
      { label: 'Languages', items: ['TypeScript', 'JavaScript', 'Python', 'SQL'] },
      { label: 'Backend', items: ['Node.js', 'REST', 'PostgreSQL', 'Redis'] },
      { label: 'Frontend', items: ['Astro', 'React', 'Tailwind CSS'] },
      { label: 'Infrastructure', items: ['Docker', 'Git', 'Linux', 'CI/CD'] },
    ],
  },
  contact: {
    label: '03 — Contact',
    heading: 'Shall we build something?',
    lead: 'Open to projects, collaborations and full-stack roles. I reply within 24 hours.',
    emailCta: 'alexandervrd2@gmail.com',
    socials: [
      { label: 'GitHub', href: '#' },
      { label: 'LinkedIn', href: '#' },
      { label: 'Resume', href: '#' },
    ],
  },
  footer: { rights: '© 2026 Alexander Villalva', location: 'Quito, Ecuador', built: 'Astro + Tailwind' },
};
