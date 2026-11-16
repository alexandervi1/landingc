import { describe, expect, it } from 'vitest';
import { isTheme, nextTheme, resolveTheme } from '../src/lib/theme';

describe('resolucion de tema', () => {
  it('respeta la eleccion guardada por encima del sistema', () => {
    expect(resolveTheme('light', false)).toBe('light');
    expect(resolveTheme('dark', true)).toBe('dark');
  });

  it('sigue al sistema cuando no hay eleccion guardada', () => {
    expect(resolveTheme(null, true)).toBe('light');
    expect(resolveTheme(null, false)).toBe('dark');
  });

  it('ignora valores guardados que no son un tema', () => {
    expect(resolveTheme('auto', true)).toBe('light');
    expect(resolveTheme('', false)).toBe('dark');
    expect(resolveTheme('LIGHT', false)).toBe('dark');
  });

  it('alterna entre los dos temas', () => {
    expect(nextTheme('light')).toBe('dark');
    expect(nextTheme('dark')).toBe('light');
  });

  it('solo acepta los dos identificadores de tema', () => {
    expect(isTheme('light')).toBe(true);
    expect(isTheme('dark')).toBe(true);
    expect(isTheme('system')).toBe(false);
    expect(isTheme(null)).toBe(false);
    expect(isTheme(undefined)).toBe(false);
  });
});
