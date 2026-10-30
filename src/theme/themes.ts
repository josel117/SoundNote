import type { Theme, ThemeName } from '../types/theme.types';

/**
 * All 8 SoundNote palettes.
 * Light themes: PinkVelvet, MatchaLatte, LavenderDream, ButterAndCream
 * Dark  themes: MidnightDark, Burgundy, DeepOcean, DarkRetro
 */
export const themes: Record<ThemeName, Theme> = {
  // ─── Light Themes ─────────────────────────────────────────────────────────
  PinkVelvet: {
    name: 'Pink Velvet',
    mode: 'light',
    colors: {
      background: '#FDF2F4',
      card: '#FFB6C1',
      text: '#1A1A1A',
      secondary: '#E75480',
    },
  },
  MatchaLatte: {
    name: 'Matcha Latte',
    mode: 'light',
    colors: {
      background: '#F4F7F4',
      card: '#A3C1AD',
      text: '#2C3E30',
      secondary: '#5A8A6A',
    },
  },
  LavenderDream: {
    name: 'Lavender Dream',
    mode: 'light',
    colors: {
      background: '#F8F5FA',
      card: '#D0BFFF',
      text: '#221C35',
      secondary: '#7C4DFF',
    },
  },
  ButterAndCream: {
    name: 'Butter & Cream',
    mode: 'light',
    colors: {
      background: '#FFFDF5',
      card: '#FFEE93',
      text: '#2D2B2A',
      secondary: '#C8A000',
    },
  },

  // ─── Dark Themes ──────────────────────────────────────────────────────────
  MidnightDark: {
    name: 'Midnight Dark',
    mode: 'dark',
    colors: {
      background: '#121214',
      card: '#2A2A2E',
      text: '#FFFFFF',
      secondary: '#FF2A85',
    },
  },
  Burgundy: {
    name: 'Burgundy',
    mode: 'dark',
    colors: {
      background: '#1A1518',
      card: '#6B3A45',
      text: '#F5EBEF',
      secondary: '#FF85A1',
    },
  },
  DeepOcean: {
    name: 'Deep Ocean',
    mode: 'dark',
    colors: {
      background: '#0F172A',
      card: '#1E293B',
      text: '#F8FAFC',
      secondary: '#38BDF8',
    },
  },
  DarkRetro: {
    name: 'Dark Retro',
    mode: 'dark',
    colors: {
      background: '#1C1917',
      card: '#292524',
      text: '#F5F5F4',
      secondary: '#FBBF24',
    },
  },
};

export const DEFAULT_THEME: ThemeName = 'MidnightDark';

