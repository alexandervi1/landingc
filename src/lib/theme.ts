export type Theme = 'light' | 'dark';

export const STORAGE_KEY = 'theme';

export const isTheme = (value: unknown): value is Theme => value === 'light' || value === 'dark';

/** Elección explícita del usuario; si no hay, se sigue la preferencia del sistema. */
export const resolveTheme = (stored: string | null, prefersLight: boolean): Theme =>
  isTheme(stored) ? stored : prefersLight ? 'light' : 'dark';

export const nextTheme = (current: Theme): Theme => (current === 'light' ? 'dark' : 'light');
