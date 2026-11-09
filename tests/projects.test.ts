import { describe, expect, it } from 'vitest';
import { isPublished, publishedProjects, PENDING, type Project } from '../src/data/projects';

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

describe('publishedProjects', () => {
  it('hoy no devuelve ningún caso porque falta la decisión técnica y la precisión', () => {
    expect(publishedProjects()).toEqual([]);
  });
});
