import React, { createContext, useContext, type ReactNode } from 'react';
import { themes } from './themes';
import { useThemeStore } from '../store/theme.store';
import type { Theme, ThemeName } from '../types/theme.types';

// ─── Context Shape ────────────────────────────────────────────────────────────

interface ThemeContextValue {
  /** The currently active theme object (colors + mode) */
  theme: Theme;
  /** The key name of the active theme */
  themeName: ThemeName;
  /** Switch to a different palette by name */
  setTheme: (name: ThemeName) => void;
  /** All available theme names for rendering a picker */
  availableThemes: ThemeName[];
}

// ─── Context ──────────────────────────────────────────────────────────────────

const ThemeContext = createContext<ThemeContextValue | undefined>(undefined);

// ─── Provider ─────────────────────────────────────────────────────────────────

interface ThemeProviderProps {
  children: ReactNode;
}

/**
 * Wraps the app and provides the active theme via context.
 * Reads and writes from Zustand store for persistence across renders.
 */
export function ThemeProvider({ children }: ThemeProviderProps) {
  const { themeName, setThemeName } = useThemeStore();

  const value: ThemeContextValue = {
    theme: themes[themeName],
    themeName,
    setTheme: (name) => setThemeName(name),
    availableThemes: Object.keys(themes) as ThemeName[],
  };

  return <ThemeContext.Provider value={value}>{children}</ThemeContext.Provider>;
}

// ─── Hook ─────────────────────────────────────────────────────────────────────

/**
 * Access the active theme and the setter from any component.
 *
 * @example
 * const { theme, setTheme } = useTheme();
 * <View style={{ backgroundColor: theme.colors.background }} />
 */
export function useTheme(): ThemeContextValue {
  const ctx = useContext(ThemeContext);
  if (!ctx) {
    throw new Error('useTheme must be used within a <ThemeProvider>');
  }
  return ctx;
}
