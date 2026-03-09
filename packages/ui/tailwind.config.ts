import { colors, spacing, radii, typography } from './src/tokens'

export default {
  content: ['./src/**/*.{ts,tsx}'],
  theme: {
    extend: {
      colors: {
        surface:  colors.surface,
        border:   colors.border,
        text:     colors.text,
        feedback: colors.feedback,
        brand:    colors.brand,
      },
      spacing:      spacing,
      borderRadius: radii,
      fontFamily:   typography.fontFamily,
      fontSize:     typography.fontSize,
      fontWeight:   typography.fontWeight,
    },
  },
}