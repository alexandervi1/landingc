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
    label: '01 — Proyectos',
    heading: 'Trabajo reciente',
    intro: 'Proyectos que he llevado de la idea a entrega.',
    link: 'Ver caso',
    items: {
      parking: {
        title: 'Módulo de cobro y reporte para servicio de parking',
        summary:
          'Módulo dentro de la app de una empresa para digitalizar el cobro y el reporte de su servicio de parking.',
        details: [
          {
            label: 'Contexto',
            value:
              'El cobro y el reporte se hacían en papel: cada cobrador debía trasladarse a la empresa para entregar el reporte del día.',
          },
          {
            label: 'Lo que construí',
            value:
              'Backend, frontend y base de datos. Vistas responsivas para cobrar y reportar desde el móvil, con acceso separado para administradores y trabajadores sobre el login existente.',
          },
          {
            label: 'Resultado',
            value:
              'El reporte dejó de exigir el desplazamiento a la empresa; la administración consulta la operación del día desde la app.',
          },
        ],
        note: 'Trabajo para cliente. Nombre, métricas y detalles internos omitidos por confidencialidad.',
      },
      mariscos: {
        title: 'Tienda en línea y panel de administración para un comercio de mariscos',
        summary:
          'Proyecto de la materia Ingeniería de Software: tienda de venta y panel administrativo para un comercio local.',
        details: [
          {
            label: 'Contexto',
            value:
              'El comercio necesitaba un canal de venta en línea y una forma centralizada de administrar productos, ventas y usuarios.',
          },
          {
            label: 'Lo que construí',
            value:
              'Proyecto en equipo con otro desarrollador. Diseñamos la base de datos entre ambos, trabajamos en módulos separados y depuramos en conjunto. Implementado en PHP puro con MySQL: tienda para el cliente y panel con gestión de ventas, usuarios y catálogo.',
          },
          {
            label: 'Resultado',
            value:
              'Un sistema funcional con los dos frentes: compra para el cliente y operación para el administrador.',
          },
        ],
        note: 'Proyecto académico en equipo. Nombre del comercio omitido.',
      },
      unity: {
        title: 'Juego interactivo para parques de energía hidroeléctrica',
        summary: 'Experiencia interactiva sobre energía renovable para clientes del sector hidroeléctrico.',
        details: [
          {
            label: 'Contexto',
            value:
              'Clientes del sector hidroeléctrico necesitaban una experiencia interactiva sobre energía renovable para sus parques.',
          },
          {
            label: 'Lo que construí',
            value:
              'Proyecto en equipo con otro ingeniero. Construí los escenarios de la hidroeléctrica y de una instalación de paneles solares, y programé en C# la lógica y las acciones que los hacen funcionar. Parte del modelado 3D se hizo en Blender.',
          },
          {
            label: 'Resultado',
            value: 'Experiencia interactiva entregada a los clientes del proyecto.',
          },
        ],
        note: 'Trabajo para cliente. Nombre y detalles omitidos por confidencialidad.',
      },
    },
  },
  about: {
    label: '02 — Sobre mí',
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
    label: '03 — Contacto',
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
