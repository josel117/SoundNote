import { View, Text, TouchableOpacity, StyleSheet, ScrollView } from 'react-native';
import { useTheme } from '../../src/theme/useTheme';
import { BORDER, SHADOW, SPACING, FONT_SIZE } from '../../src/constants/layout';
import type { ThemeName } from '../../src/types/theme.types';

/**
 * Temporary home screen — showcases the 8 theme palettes.
 * Will be replaced by the actual Now Playing screen in a later iteration.
 */
export default function HomeScreen() {
  const { theme, themeName, setTheme, availableThemes } = useTheme();
  const { colors } = theme;

  return (
    <View style={[styles.container, { backgroundColor: colors.background }]}>
      {/* Header */}
      <View style={styles.header}>
        <Text style={[styles.title, { color: colors.text }]}>🎵 SoundNote</Text>
        <Text style={[styles.subtitle, { color: colors.secondary }]}>
          Theme: {theme.name}
        </Text>
      </View>

      {/* Theme Picker */}
      <ScrollView contentContainerStyle={styles.grid}>
        {availableThemes.map((name: ThemeName) => {
          const isActive = name === themeName;
          return (
            <TouchableOpacity
              key={name}
              onPress={() => setTheme(name)}
              style={[
                styles.themeChip,
                {
                  backgroundColor: colors.card,
                  borderColor: colors.text,
                  ...(isActive ? SHADOW.comic : {}),
                },
              ]}
              activeOpacity={0.8}
            >
              <Text style={[styles.chipText, { color: colors.text }]}>
                {isActive ? '✓ ' : ''}{name}
              </Text>
            </TouchableOpacity>
          );
        })}
      </ScrollView>

      {/* Preview Card */}
      <View
        style={[
          styles.previewCard,
          {
            backgroundColor: colors.card,
            borderColor: colors.text,
            ...SHADOW.comic,
          },
        ]}
      >
        <Text style={[styles.cardTitle, { color: colors.text }]}>Preview Card</Text>
        <Text style={[styles.cardSub, { color: colors.secondary }]}>
          Accent · {colors.secondary}
        </Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: SPACING.xxl,
    paddingHorizontal: SPACING.md,
  },
  header: {
    marginBottom: SPACING.lg,
    alignItems: 'center',
  },
  title: {
    fontSize: FONT_SIZE.xxl,
    fontWeight: '900',
    letterSpacing: 1,
  },
  subtitle: {
    fontSize: FONT_SIZE.sm,
    marginTop: SPACING.xs,
  },
  grid: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    gap: SPACING.sm,
    paddingBottom: SPACING.lg,
    justifyContent: 'center',
  },
  themeChip: {
    paddingHorizontal: SPACING.md,
    paddingVertical: SPACING.sm,
    borderRadius: BORDER.radius,
    borderWidth: BORDER.width,
  },
  chipText: {
    fontSize: FONT_SIZE.sm,
    fontWeight: '700',
  },
  previewCard: {
    borderRadius: BORDER.radius,
    borderWidth: BORDER.width,
    padding: SPACING.lg,
    marginBottom: SPACING.xl,
    alignItems: 'center',
  },
  cardTitle: {
    fontSize: FONT_SIZE.xl,
    fontWeight: '900',
  },
  cardSub: {
    fontSize: FONT_SIZE.sm,
    marginTop: SPACING.xs,
  },
});

