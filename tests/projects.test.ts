import { describe, expect, it } from 'vitest';
import { isPublished, isVisibleOnHome, publishedProjects, visibleProjects, PENDING, type Project } from '../src/data/projects';
import { sectionNumbers } from '../src/i18n/utils';

const complete = {
  title: 'Caso',
  summary: 'Resumen',
  context: 'Contexto completo del caso.',
  role: 'Rol completo.',
  decision: 'Decisión técnica explicada.',
  result: 'Resultado descrito.',
  precision: 'Medido en producción.',
  note: 'Nota.',
};

const build = (overrides: Partial<Project> = {}, contentOverrides: Partial<typeof complete> = {}): Project => ({
  id: 'parking',
  year: '2025',
  stack: ['TypeScript'],
  links: {},
  published: true,
  visibleOnHome: true,
  content: {
    es: { ...complete, ...contentOverrides },
    en: { ...complete, ...contentOverrides },
  },
  ...overrides,
});

describe('isPublished', () => {
  it('publica un caso con todos los campos completos', () => {
    expect(isPublished(build())).toBe(true);
  });

  it('no publica si la marca published está en false', () => {
    expect(isPublished(build({ published: false }))).toBe(false);
  });

  it('no publica si un campo sigue pendiente', () => {
    expect(isPublished(build({}, { decision: PENDING }))).toBe(false);
  });

  it('no publica si un campo está vacío', () => {
    expect(isPublished(build({}, { result: '   ' }))).toBe(false);
  });

  it('no publica si falta el año', () => {
    expect(isPublished(build({ year: '' }))).toBe(false);
  });

  it('no publica si el stack está vacío', () => {
    expect(isPublished(build({ stack: [] }))).toBe(false);
  });

  it('no publica si un idioma está incompleto aunque el otro esté bien', () => {
    const project = build();
    project.content.en = { ...project.content.en, precision: PENDING };
    expect(isPublished(project)).toBe(false);
  });
});

describe('isVisibleOnHome', () => {
  it('muestra la tarjeta con contenido completo y visibleOnHome en true', () => {
    expect(isVisibleOnHome(build())).toBe(true);
  });

  it('oculta la tarjeta si visibleOnHome está en false', () => {
    expect(isVisibleOnHome(build({ visibleOnHome: false }))).toBe(false);
  });

  it('oculta la tarjeta si el contenido está incompleto aunque visibleOnHome sea true', () => {
    expect(isVisibleOnHome(build({}, { decision: PENDING }))).toBe(false);
  });

  it('oculta la tarjeta si el caso no está publicado', () => {
    expect(isVisibleOnHome(build({ published: false }))).toBe(false);
  });
});

describe('estado actual de los datos', () => {
  it('ningún caso se publica ni se muestra todavía', () => {
    expect(publishedProjects()).toEqual([]);
    expect(visibleProjects()).toEqual([]);
  });
});

describe('sectionNumbers', () => {
  it('numera de 1 a 4 cuando hay proyectos visibles', () => {
    expect(sectionNumbers(true)).toEqual({ projects: 1, about: 2, method: 3, contact: 4 });
  });

  it('renumera sin proyectos: proyectos en 0, método en 2 y contacto en 3', () => {
    expect(sectionNumbers(false)).toEqual({ projects: 0, about: 1, method: 2, contact: 3 });
  });
});
