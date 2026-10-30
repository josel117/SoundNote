/**
 * Theme type definitions for SoundNote.
 * Defines the shape of a theme palette and the available theme names.
 */

export type ThemeMode = 'light' | 'dark';

export interface ThemeColors {
  /** Main screen background */
  background: string;
  /** Card / surface background */
  card: string;
  /** Primary text and border color */
  text: string;
  /** Accent / secondary color (mainly used in dark themes) */
  secondary: string;
}

export interface Theme {
  name: string;
  mode: ThemeMode;
  colors: ThemeColors;
}

export type ThemeName =
  | 'PinkVelvet'
  | 'MatchaLatte'
  | 'LavenderDream'
  | 'ButterAndCream'
  | 'MidnightDark'
  | 'Burgundy'
  | 'DeepOcean'
  | 'DarkRetro';

