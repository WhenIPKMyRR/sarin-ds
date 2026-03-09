export const typography = {
  fontFamily: {
    sans: 'Inter, system-ui, sans-serif',
    mono: 'JetBrains Mono, Fira Code, monospace',
  },
  fontSize: {
    xxs:   '0.625rem',   // 10px
    xs:    '0.75rem',    // 12px  — ListItem, DataTable cells
    sm:    '0.875rem',   // 14px  — DataTable search, SideMenu
    md:    '1rem',       // 16px  — ListItemContent title
    lg:    '1.125rem',   // 18px
    xl:    '1.25rem',    // 20px
    '2xl': '1.5rem',     // 24px  — CardHeader
    '3xl': '1.875rem',   // 30px
  },
  fontWeight: {
    regular:  400,
    medium:   500,
    semibold: 600,
    bold:     700,
  },
} as const

export type TypographyToken = typeof typography