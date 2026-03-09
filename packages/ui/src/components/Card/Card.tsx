import { Card as ChakraCard } from '@chakra-ui/react'
import { colors } from '../../tokens'

export interface CardProps {
  header?: React.ReactElement | string
  footer?: React.ReactElement
  children: React.ReactNode
  size?: 'sm' | 'md' | 'lg'
}

export const Card = ({ header, footer, children, size = 'md' }: CardProps) => {
  return (
    <ChakraCard.Root
      size={size}
      bg={colors.surface.base}
      borderColor={colors.border.default}
      borderWidth='1px'
    >
      {header && (
        <ChakraCard.Header color={colors.text.primary}>
          {header}
        </ChakraCard.Header>
      )}
      <ChakraCard.Body color={colors.text.secondary}>
        {children}
      </ChakraCard.Body>
      {footer && (
        <ChakraCard.Footer>
          {footer}
        </ChakraCard.Footer>
      )}
    </ChakraCard.Root>
  )
}