import type { Dict } from './types';

export const es: Dict = {
  meta: {
    title: 'Alexander Villalva — Ingeniero de Software',
    description:
      'Ingeniero de software. Desarrollo aplicaciones y sistemas con rigurosidad técnica y buenas prácticas de ingeniería de software.',
  },
  a11y: { skip: 'Saltar al contenido', menu: 'Menú' },
  nav: { projects: 'Proyectos', about: 'Sobre mí', contact: 'Contacto', cta: 'Hablemos' },
  hero: {
    eyebrow: 'Ingeniería de software',
    title: ['Software', 'que aguanta', 'producción.'],
    lead: 'Soy Alexander Villalva. Desarrollo aplicaciones y sistemas con rigurosidad técnica y buenas prácticas de ingeniería de software.',
    ctaPrimary: 'Ver proyectos',
    ctaSecondary: 'Contacto',
    terminal: {
      label: 'stack — zsh',
      blocks: [
        { cmd: 'whoami', out: 'alexander villalva — ing. de software' },
        { cmd: 'stack --core', out: 'full stack · javascript/typescript · node · sql' },
        { cmd: 'status', out: 'freelance · remoto — 2026' },
      ],
    },
  },
  projects: {
    label: 'Proyectos',
    heading: 'Trabajo reciente',
    intro: 'Proyectos que he llevado de la idea a entrega.',
    link: 'Ver caso',
    labels: {
      context: 'Contexto',
      role: 'Lo que construí',
      decision: 'Decisión técnica',
      result: 'Resultado',
      precision: 'Precisión del dato',
      stack: 'Stack',
      year: 'Año',
      links: 'Enlaces',
    },
  },
  about: {
    label: 'Sobre mí',
    heading: 'Cómo trabajo',
    photoAlt:
      'Alexander Villalva de perfil, con abrigo y gafas de sol, frente a una ciudad al atardecer.',
    facts: [
      { label: 'Experiencia', value: 'Freelance desde 2024, en equipo con otros desarrolladores' },
      { label: 'Modalidad', value: 'Remoto · UTC-5' },
      { label: 'Ubicación', value: 'Riobamba, Ecuador' },
      { label: 'Idiomas', value: 'Español nativo · Inglés en preparación para B2' },
      { label: 'Disponibilidad', value: 'Abierto a proyectos freelance' },
    ],
    paragraphs: [
      'Ingeniero de software. Cubro el ciclo completo —definición del problema, modelo de datos, API, interfaz y despliegue— y entrego sistemas que otra persona puede operar y mantener.',
      'Trabajo con decisiones explícitas y alcance acordado. Prefiero la solución más simple que resuelve el problema y resiste producción antes que una abstracción que todavía no se necesita.',
      'Dejo cada entrega documentada: configuración, puesta en marcha y criterios de verificación. Los riesgos técnicos los comunico temprano, no cuando ya se han convertido en deuda.',
    ],
    groups: [
      { label: 'Lenguajes', items: ['JavaScript / TypeScript', 'PHP', 'C#', 'Python', 'SQL'] },
      { label: 'Backend', items: ['Node.js', 'Laravel', 'Express', 'REST', 'Prisma'] },
      {
        label: 'Bases de datos',
        items: ['PostgreSQL', 'MySQL', 'MariaDB', 'SQL Server', 'SQLite', 'MongoDB', 'Redis'],
      },
      { label: 'Frontend', items: ['Astro', 'React', 'Next.js', 'Tailwind CSS', 'HTML/CSS'] },
      { label: '3D / Interactivo', items: ['Unity', 'Blender'] },
      { label: 'Infraestructura', items: ['Docker', 'Git', 'Linux', 'CI/CD'] },
    ],
  },
  contact: {
    label: 'Contacto',
    heading: '¿Construimos algo?',
    lead: 'Abierto a proyectos freelance y colaboraciones remotas. Respondo en menos de 24 horas.',
    emailCta: 'hola@alexandervillalva.uk',
    form: {
      name: 'Nombre',
      email: 'Email',
      message: 'Mensaje',
      submit: 'Enviar mensaje',
      sending: 'Enviando…',
      success: 'Mensaje enviado. Te respondo en menos de 24 horas.',
      error: 'No se pudo enviar. Escríbeme a hola@alexandervillalva.uk.',
      noscript: 'El formulario necesita JavaScript activo. Escríbeme a hola@alexandervillalva.uk.',
      consent: { lead: 'Al enviar, aceptas el', link: 'aviso de privacidad' },
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
    privacy: 'Privacidad',
  },
};
