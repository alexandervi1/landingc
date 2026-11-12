import type { Locale } from './types';
import { es } from './es';
import { en } from './en';

export const dicts = { es, en } as const;
export const localePath = (locale: Locale): string => (locale === 'es' ? '/' : '/en/');

/** Numera las secciones según cuáles se rendericen. 0 significa que no se muestra. */
export function sectionNumbers(hasProjects: boolean): {
  projects: number;
  about: number;
  method: number;
  contact: number;
} {
  return hasProjects
    ? { projects: 1, about: 2, method: 3, contact: 4 }
    : { projects: 0, about: 1, method: 2, contact: 3 };
}
