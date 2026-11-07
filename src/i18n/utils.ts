import type { Locale } from './types';
import { es } from './es';
import { en } from './en';

export const dicts = { es, en } as const;
export const localePath = (locale: Locale): string => (locale === 'es' ? '/' : '/en/');
