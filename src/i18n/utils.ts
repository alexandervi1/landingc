import type { Locale } from './types';
import { es } from './es';
import { en } from './en';

export const dicts = { es, en } as const;
export const localePath = (locale: Locale): string => (locale === 'es' ? '/' : '/en/');

/** Numera las secciones según cuáles se rendericen. 0 significa que no se muestra. */
export function sectionNumbers(hasProjects: boolean): { projects: number; about: number; contact: number } {
  return hasProjects
    ? { projects: 1, about: 2, contact: 3 }
    : { projects: 0, about: 1, contact: 2 };
}
