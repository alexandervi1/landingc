import type { Dict } from './types';

export const es: Dict = {
  meta: {
    title: 'Alexander Villalva — Ingeniero de Software',
    description:
      'Ingeniero de software. Diseño y construyo aplicaciones web full-stack: modelo de datos, API, interfaz y despliegue.',
  },
  a11y: { skip: 'Saltar al contenido' },
  nav: { projects: 'Proyectos', about: 'Sobre mí', contact: 'Contacto', cta: 'Hablemos' },
  hero: {
    eyebrow: 'Ingeniería de software — ESPOCH',
    title: ['Software', 'que aguanta', 'producción.'],
    lead: 'Soy Alexander Villalva. Diseño y construyo aplicaciones web de punta a punta: modelo de datos, API, interfaz y despliegue.',
    ctaPrimary: 'Ver proyectos',
    ctaSecondary: 'Contacto',
    terminal: {
      label: 'stack — zsh',
      blocks: [
        { cmd: 'whoami', out: 'alexander villalva — ing. de software' },
        { cmd: 'stack --core', out: 'typescript · node · postgres · docker' },
        { cmd: 'status', out: 'disponible para proyectos — 2026' },
      ],
    },
  },
  projects: {
    label: '01 — Proyectos',
    heading: 'Trabajo reciente',
    intro: 'Sistemas que he llevado de la idea a producción.',
    link: 'Ver caso',
    items: {
      gestion: {
        title: 'Sistema de gestión operativa',
        summary:
          'Plataforma interna con autenticación, roles, reportes y facturación. Placeholder: reemplaza este texto en src/i18n/es.ts.',
      },
      analitica: {
        title: 'Panel de analítica',
        summary:
          'Tablero de métricas con filtros, exportación y actualización en vivo. Placeholder: reemplaza este texto en src/i18n/es.ts.',
      },
      api: {
        title: 'API de integración',
        summary:
          'Capa de servicios para conectar sistemas externos con validación y reintentos. Placeholder: reemplaza este texto en src/i18n/es.ts.',
      },
    },
  },
  about: {
    label: '02 — Sobre mí',
    heading: 'Cómo trabajo',
    paragraphs: [
      'Ingeniero de software titulado en la ESPOCH. Trabajo de extremo a extremo: entiendo el problema, modelo los datos, escribo la API, construyo la interfaz y dejo el sistema desplegado y observable.',
      'Prefiero sistemas simples y explícitos antes que abstracciones prematuras. Cada decisión técnica tiene que poder explicarse en una frase y sostenerse en producción.',
    ],
    groups: [
      { label: 'Lenguajes', items: ['TypeScript', 'JavaScript', 'Python', 'SQL'] },
      { label: 'Backend', items: ['Node.js', 'REST', 'PostgreSQL', 'Redis'] },
      { label: 'Frontend', items: ['Astro', 'React', 'Tailwind CSS'] },
      { label: 'Infraestructura', items: ['Docker', 'Git', 'Linux', 'CI/CD'] },
    ],
  },
  contact: {
    label: '03 — Contacto',
    heading: '¿Construimos algo?',
    lead: 'Abierto a proyectos, colaboraciones y posiciones full-stack. Respondo en menos de 24 horas.',
    emailCta: 'alexandervrd2@gmail.com',
    socials: [
      { label: 'GitHub', href: '#' },
      { label: 'LinkedIn', href: '#' },
      { label: 'CV', href: '#' },
    ],
  },
  footer: { rights: '© 2026 Alexander Villalva', location: 'Quito, Ecuador', built: 'Astro + Tailwind' },
};
