import type { Dict } from './types';

export const es: Dict = {
  meta: {
    title: 'Alexander Villalva — Ingeniero de software full stack · Ecuador',
    description:
      'Ingeniero de software full stack en Ecuador. Construyo aplicaciones web completas: modelo de datos, API, interfaz y despliegue.',
  },
  a11y: { skip: 'Saltar al contenido', menu: 'Menú' },
  nav: { projects: 'Proyectos', about: 'Sobre mí', cta: 'Hablemos' },
  hero: {
    eyebrow: 'Ingeniería de software',
    title: ['Software', 'que aguanta', 'producción.'],
    lead: 'Soy Alexander Villalva. Desarrollo aplicaciones web completas: modelo de datos, API, interfaz y despliegue.',
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
    heading: 'Sobre mí',
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
      'Trabajo con decisiones explícitas y alcance acordado.',
    ],
    stack: { daily: 'Uso a diario', known: 'Conozco' },
    cta: { email: 'Escríbeme', github: 'GitHub', linkedin: 'LinkedIn' },
  },
  method: {
    label: 'Cómo trabajo',
    heading: 'Cómo trabajo',
    steps: [
      {
        title: 'Defino el alcance',
        body: 'Acordamos qué se construye y qué no, y las decisiones quedan por escrito.',
      },
      {
        title: 'Construyo lo simple',
        body: 'Elijo la solución más simple que resuelve el problema y resiste producción, sin abstracciones que aún no hacen falta.',
      },
      {
        title: 'Entrego documentado',
        body: 'Cada entrega incluye configuración, puesta en marcha y criterios de verificación para que otra persona pueda operarla.',
      },
      {
        title: 'Aviso de riesgos a tiempo',
        body: 'Comunico los riesgos técnicos desde el principio, antes de que se conviertan en deuda.',
      },
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
      errorValidation:
        'Revisa los campos y la casilla de privacidad. No se ha borrado nada de lo que escribiste.',
      errorRate:
        'Has enviado varios mensajes seguidos. Espera un minuto y vuelve a intentarlo; lo escrito sigue aquí.',
      errorNetwork:
        'No se pudo conectar con el servidor. Comprueba tu conexión y vuelve a intentarlo; lo escrito sigue aquí.',
      noscript: 'El formulario necesita JavaScript activo. Escríbeme a hola@alexandervillalva.uk.',
      consent: {
        lead: 'Acepto el',
        link: 'aviso de privacidad',
        tail: 'y el tratamiento de mis datos para responder a este mensaje.',
      },
      altLead: 'Si prefieres no usar el formulario, escríbeme a',
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
