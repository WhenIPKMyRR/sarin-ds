import { Tabs as ChakraTabs } from '@chakra-ui/react'
import { colors } from '../../tokens'

export interface TabsProps {
  items: {
    label: string
    value: string
    content: React.ReactNode
  }[]
  defaultValue?: string
  lazyMount?: boolean
  unmountOnExit?: boolean
}

export const Tabs = ({ items, defaultValue, lazyMount = true, unmountOnExit = true }: TabsProps) => {
  return (
    <ChakraTabs.Root
      defaultValue={defaultValue ?? items[0]?.value}
      lazyMount={lazyMount}
      unmountOnExit={unmountOnExit}
    >
      <ChakraTabs.List color={colors.text.secondary}>
        {items.map((tab) => (
          <ChakraTabs.Trigger
            key={tab.value}
            value={tab.value}
            _selected={{ color: colors.text.primary, borderColor: colors.brand.primary }}
          >
            {tab.label}
          </ChakraTabs.Trigger>
        ))}
      </ChakraTabs.List>
      {items.map((tab) => (
        <ChakraTabs.Content key={tab.value} value={tab.value}>
          {tab.content}
        </ChakraTabs.Content>
      ))}
    </ChakraTabs.Root>
  )
}