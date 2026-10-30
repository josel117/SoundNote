import { create } from 'zustand';
import type { ThemeName } from '../types/theme.types';
import { DEFAULT_THEME } from '../theme/themes';

/**
 * Zustand store for persisting the user's chosen theme across sessions.
 * The ThemeContext reads from / writes to this store.
 */
interface ThemeStoreState {
  themeName: ThemeName;
  setThemeName: (name: ThemeName) => void;
}

export const useThemeStore = create<ThemeStoreState>((set) => ({
  themeName: DEFAULT_THEME,
  setThemeName: (name) => set({ themeName: name }),
}));

