export const colors = {
  surface: {
    base:    '#2e2e2e',      // Card, Table, DataTable bg
    overlay: '#242424',      // Modal, Drawer, ImagePreview bg
    subtle:  '#2121219c',    // SectionContainer, SectionWrapper, SideMenu bg
    input:   '#474747',      // SelectAutocomplete, Option bg
    search:  '#414141',      // DataTable search input bg
    dark:    '#1a202c',      // SelectAutocomplete selected option bg
  },

  border: {
    default: '#e2e8f070',    // Card, Drawer, Modal, Table, SectionHeader
    subtle:  '#80808069',    // SectionContainer, SectionWrapper, SideMenu
    muted:   '#3e3d3f80',    // List divider
    input:   '#686767',      // SelectAutocomplete, DataTable input
  },

  text: {
    primary:   '#ffffff',    // Headings, labels, conteúdo principal
    secondary: '#c7c7c7',    // Subtextos, placeholders, descriptions
  },

  feedback: {
    error:   '#ef4444',
    warning: '#f59e0b',
    success: '#22c55e',
    info:    '#3b82f6',
  },

  brand: {
    primary: '#3b82f6',      // blue.500 — TabIndicator, botões de ação
    danger:  '#e53e3e',      // red.600 — ModalConfirm delete
  },
} as const

export type ColorToken    = typeof colors
export type SurfaceColor  = keyof typeof colors.surface
export type TextColor     = keyof typeof colors.text
export type FeedbackColor = keyof typeof colors.feedback