import type { Locale, ProjectId } from '../i18n/types';

/** Marca de campo pendiente. Un caso con esta marca nunca se publica. */
export const PENDING = '[COMPLETAR]';

export interface ProjectContent {
  title: string;
  summary: string;
  context: string;
  role: string;
  decision: string;
  result: string;
  precision: string;
  note?: string;
}

export interface Project {
  id: ProjectId;
  year: string;
  stack: string[];
  links: { demo?: string; repo?: string };
  /** Intención explícita de publicar. La página solo existe si además el contenido está completo. */
  published: boolean;
  content: Record<Locale, ProjectContent>;
}

export const projects: Project[] = [
  {
    id: 'parking',
    year: '2025',
    stack: ['PHP', 'Laravel', 'MongoDB'],
    links: {},
    published: false,
    content: {
      es: {
        title: 'Módulo de cobro y reporte para servicio de parking',
        summary:
          'Módulo dentro de la app de una empresa para digitalizar el cobro y el reporte de su servicio de parking.',
        context:
          'El cobro y el reporte se hacían en papel: cada cobrador debía trasladarse a la empresa para entregar el reporte del día.',
        role: 'Backend, frontend y base de datos. Vistas responsivas para cobrar y reportar desde el móvil, con acceso separado para administradores y trabajadores sobre el login existente.',
        decision: PENDING,
        result:
          'El reporte dejó de exigir el desplazamiento a la empresa; la administración consulta la operación del día desde la app.',
        precision: PENDING,
        note: 'Trabajo para cliente. Nombre, métricas y detalles internos omitidos por confidencialidad.',
      },
      en: {
        title: 'Billing and reporting module for a parking service',
        summary: 'Module inside a company app that digitised billing and reporting for its parking service.',
        context:
          'Billing and reporting were done on paper: every collector had to travel to the company to hand in the day’s report.',
        role: 'Backend, frontend and database. Responsive views to bill and report from mobile, with separate access for administrators and workers on top of the existing login.',
        decision: PENDING,
        result:
          'Reporting no longer requires travelling to the company; management checks the day’s operation from the app.',
        precision: PENDING,
        note: 'Client work. Name, metrics and internal details omitted for confidentiality.',
      },
    },
  },
  {
    id: 'mariscos',
    year: '2025',
    stack: ['PHP', 'MySQL'],
    links: {},
    published: false,
    content: {
      es: {
        title: 'Tienda en línea y panel de administración para un comercio de mariscos',
        summary:
          'Proyecto de la materia Ingeniería de Software: tienda de venta y panel administrativo para un comercio local.',
        context:
          'El comercio necesitaba un canal de venta en línea y una forma centralizada de administrar productos, ventas y usuarios.',
        role: 'Proyecto en equipo con otro desarrollador. Diseñamos la base de datos entre ambos, trabajamos en módulos separados y depuramos en conjunto. Implementado en PHP puro con MySQL: tienda para el cliente y panel con gestión de ventas, usuarios y catálogo.',
        decision: PENDING,
        result: 'Un sistema funcional con los dos frentes: compra para el cliente y operación para el administrador.',
        precision: PENDING,
        note: 'Proyecto académico en equipo. Nombre del comercio omitido.',
      },
      en: {
        title: 'Online store and admin panel for a seafood business',
        summary: 'Software Engineering course project: storefront and admin panel for a local business.',
        context:
          'The business needed an online sales channel and a centralised way to manage products, sales and users.',
        role: 'Team project with another developer. We designed the database together, worked on separate modules and debugged as a pair. Implemented in plain PHP with MySQL: storefront for the customer and a panel for sales, users and catalogue management.',
        decision: PENDING,
        result: 'A working system with both sides: purchase for the customer and operations for the administrator.',
        precision: PENDING,
        note: 'Academic team project. Business name omitted.',
      },
    },
  },
  {
    id: 'unity',
    year: '2024',
    stack: ['C#', 'Unity', 'Blender'],
    links: {},
    published: false,
    content: {
      es: {
        title: 'Juego interactivo para parques de energía hidroeléctrica',
        summary: 'Experiencia interactiva sobre energía renovable para clientes del sector hidroeléctrico.',
        context:
          'Clientes del sector hidroeléctrico necesitaban una experiencia interactiva sobre energía renovable para sus parques.',
        role: 'Proyecto en equipo con otro ingeniero. Construí los escenarios de la hidroeléctrica y de una instalación de paneles solares, y programé en C# la lógica y las acciones que los hacen funcionar. Parte del modelado 3D se hizo en Blender.',
        decision: PENDING,
        result: 'Experiencia interactiva entregada a los clientes del proyecto.',
        precision: PENDING,
        note: 'Trabajo para cliente. Nombre y detalles omitidos por confidencialidad.',
      },
      en: {
        title: 'Interactive game for hydroelectric energy parks',
        summary: 'Interactive experience about renewable energy for clients in the hydroelectric sector.',
        context:
          'Clients in the hydroelectric sector needed an interactive experience about renewable energy for their parks.',
        role: 'Team project with another engineer. I built the hydroelectric and solar panel scenarios and programmed their logic and interactions in C#. Part of the 3D modelling was done in Blender.',
        decision: PENDING,
        result: 'Interactive experience delivered to the project clients.',
        precision: PENDING,
        note: 'Client work. Name and details omitted for confidentiality.',
      },
    },
  },
];

const filled = (value: string | undefined): boolean =>
  typeof value === 'string' && value.trim() !== '' && !value.includes(PENDING);

/** Campos que deben existir en ambos idiomas para generar la página del caso. */
export const REQUIRED_FIELDS = ['title', 'context', 'role', 'decision', 'result', 'precision'] as const;

export function isPublished(project: Project): boolean {
  if (!project.published) return false;
  if (!filled(project.year) || project.stack.length === 0) return false;

  return Object.values(project.content).every((content) =>
    REQUIRED_FIELDS.every((field) => filled(content[field]))
  );
}

export const publishedProjects = (): Project[] => projects.filter(isPublished);

export const projectPath = (project: Project, locale: Locale): string =>
  locale === 'es' ? `/proyectos/${project.id}` : `/en/projects/${project.id}`;
