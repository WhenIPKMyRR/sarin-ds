import { List as ChakraList } from '@chakra-ui/react'
import { colors } from '../../tokens'

export interface ListProps {
  items: React.ReactNode[]
}

export const List = ({ items }: ListProps) => {
  return (
    <ChakraList.Root gap={4}>
      {items.map((item, index) => (
        <ChakraList.Item
          key={index}
          color={colors.text.primary}
          borderBottom={index < items.length - 1 ? `0.5px solid ${colors.border.muted}` : 'none'}
          pb={index < items.length - 1 ? 4 : 0}
        >
          {item}
        </ChakraList.Item>
      ))}
    </ChakraList.Root>
  )
}