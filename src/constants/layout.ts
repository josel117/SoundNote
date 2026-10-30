/**
 * Visual design constants for SoundNote's comic-border aesthetic.
 * Import these values instead of hardcoding magic numbers in components.
 */

export const BORDER = {
  /** Thickness of the comic-style outer border */
  width: 3,
  /** Standard corner radius for cards */
  radius: 16,
  /** Tight corner radius for small chips/badges */
  radiusSm: 8,
  /** Fully rounded (pill shape) */
  radiusFull: 9999,
} as const;

export const SHADOW = {
  /** Comic-style hard offset shadow (no blur) */
  comic: {
    shadowColor: '#1A1A1A',
    shadowOffset: { width: 4, height: 4 },
    shadowOpacity: 1,
    shadowRadius: 0,
    elevation: 6,
  },
  /** Softer shadow for subtle depth */
  soft: {
    shadowColor: '#000000',
    shadowOffset: { width: 2, height: 2 },
    shadowOpacity: 0.15,
    shadowRadius: 4,
    elevation: 3,
  },
} as const;

export const SPACING = {
  xs: 4,
  sm: 8,
  md: 16,
  lg: 24,
  xl: 32,
  xxl: 48,
} as const;

export const FONT_SIZE = {
  xs: 11,
  sm: 13,
  md: 15,
  lg: 18,
  xl: 22,
  xxl: 28,
  display: 36,
} as const;

