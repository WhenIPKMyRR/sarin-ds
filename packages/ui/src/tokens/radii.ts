export const radii = {
  none: '0px',
  sm:   '0.25rem',   // 4px
  md:   '0.375rem',  // 6px  — inputs, badges
  lg:   '0.5rem',    // 8px  — botões, cards pequenos
  xl:   '1rem',      // 16px — Card, SectionContainer, SideMenu
  full: '9999px',    // círculo — Menu icon, Avatar
} as const

export type RadiiToken = typeof radii