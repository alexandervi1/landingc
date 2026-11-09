import type { Dict } from './types';

export const en: Dict = {
  meta: {
    title: 'Alexander Villalva — Software Engineer',
    description:
      'Software engineer. I build applications and systems with technical rigour and solid software engineering practices.',
  },
  a11y: { skip: 'Skip to content', menu: 'Menu' },
  nav: { projects: 'Projects', about: 'About', contact: 'Contact', cta: "Let's talk" },
  hero: {
    eyebrow: 'Software engineering',
    title: ['Software', 'that holds up', 'in production.'],
    lead: 'I am Alexander Villalva. I build applications and systems with technical rigour and solid software engineering practices.',
    ctaPrimary: 'See projects',
    ctaSecondary: 'Contact',
    terminal: {
      label: 'stack — zsh',
      blocks: [
        { cmd: 'whoami', out: 'alexander villalva — software engineer' },
        { cmd: 'stack --core', out: 'full stack · javascript/typescript · node · sql' },
        { cmd: 'status', out: 'freelance · remote — 2026' },
      ],
    },
  },
  projects: {
    label: '01 — Projects',
    heading: 'Recent work',
    intro: 'Projects I have taken from idea to delivery.',
    link: 'View case',
    items: {
      parking: {
        title: 'Billing and reporting module for a parking service',
        summary: 'Module inside a company app that digitised billing and reporting for its parking service.',
        details: [
          {
            label: 'Context',
            value:
              'Billing and reporting were done on paper: every collector had to travel to the company to hand in the day’s report.',
          },
          {
            label: 'What I built',
            value:
              'Backend, frontend and database. Responsive views to bill and report from mobile, with separate access for administrators and workers on top of the existing login.',
          },
          {
            label: 'Result',
            value:
              'Reporting no longer requires travelling to the company; management checks the day’s operation from the app.',
          },
        ],
        note: 'Client work. Name, metrics and internal details omitted for confidentiality.',
      },
      mariscos: {
        title: 'Online store and admin panel for a seafood business',
        summary: 'Software Engineering course project: storefront and admin panel for a local business.',
        details: [
          {
            label: 'Context',
            value:
              'The business needed an online sales channel and a centralised way to manage products, sales and users.',
          },
          {
            label: 'What I built',
            value:
              'Team project with another developer. We designed the database together, worked on separate modules and debugged as a pair. Implemented in plain PHP with MySQL: storefront for the customer and a panel for sales, users and catalogue management.',
          },
          {
            label: 'Result',
            value:
              'A working system with both sides: purchase for the customer and operations for the administrator.',
          },
        ],
        note: 'Academic team project. Business name omitted.',
      },
      unity: {
        title: 'Interactive game for hydroelectric energy parks',
        summary: 'Interactive experience about renewable energy for clients in the hydroelectric sector.',
        details: [
          {
            label: 'Context',
            value:
              'Clients in the hydroelectric sector needed an interactive experience about renewable energy for their parks.',
          },
          {
            label: 'What I built',
            value:
              'Team project with another engineer. I built the hydroelectric and solar panel scenarios and programmed their logic and interactions in C#. Part of the 3D modelling was done in Blender.',
          },
          {
            label: 'Result',
            value: 'Interactive experience delivered to the project clients.',
          },
        ],
        note: 'Client work. Name and details omitted for confidentiality.',
      },
    },
  },
  about: {
    label: '02 — About',
    heading: 'How I work',
    photoAlt:
      'Alexander Villalva in profile, wearing a coat and sunglasses, against a city skyline at sunset.',
    facts: [
      { label: 'Experience', value: 'Freelance since 2024, working alongside other developers' },
      { label: 'Work mode', value: 'Remote · UTC-5' },
      { label: 'Location', value: 'Riobamba, Ecuador' },
      { label: 'Languages', value: 'Spanish native · English preparing for B2' },
      { label: 'Availability', value: 'Open to freelance projects' },
    ],
    paragraphs: [
      'Software engineer. I cover the full lifecycle — problem definition, data model, API, interface and deployment — and deliver systems someone else can operate and maintain.',
      'I work with explicit decisions and agreed scope. I prefer the simplest solution that solves the problem and holds up in production over an abstraction we do not need yet.',
      'Every delivery is documented: configuration, setup and verification criteria. I raise technical risks early, not once they have already become debt.',
    ],
    groups: [
      { label: 'Languages', items: ['JavaScript / TypeScript', 'PHP', 'C#', 'Python', 'SQL'] },
      { label: 'Backend', items: ['Node.js', 'Laravel', 'Express', 'REST', 'Prisma'] },
      {
        label: 'Databases',
        items: ['PostgreSQL', 'MySQL', 'MariaDB', 'SQL Server', 'SQLite', 'MongoDB', 'Redis'],
      },
      { label: 'Frontend', items: ['Astro', 'React', 'Next.js', 'Tailwind CSS', 'HTML/CSS'] },
      { label: '3D / Interactive', items: ['Unity', 'Blender'] },
      { label: 'Infrastructure', items: ['Docker', 'Git', 'Linux', 'CI/CD'] },
    ],
  },
  contact: {
    label: '03 — Contact',
    heading: 'Shall we build something?',
    lead: 'Open to freelance projects and remote collaborations. I reply within 24 hours.',
    emailCta: 'hola@alexandervillalva.uk',
    form: {
      name: 'Name',
      email: 'Email',
      message: 'Message',
      submit: 'Send message',
      sending: 'Sending…',
      success: 'Message sent. I reply within 24 hours.',
      error: 'Could not send. Email me at hola@alexandervillalva.uk.',
      noscript: 'The form needs JavaScript. Email me at hola@alexandervillalva.uk.',
      consent: { lead: 'By sending, you accept the', link: 'privacy notice' },
    },
    socials: [
      { id: 'github', label: 'GitHub' },
      { id: 'linkedin', label: 'LinkedIn' },
    ],
  },
  footer: {
    rights: '© 2026 Alexander Villalva',
    location: 'Riobamba, Ecuador',
    built: 'Astro + Tailwind',
    privacy: 'Privacy',
  },
};
