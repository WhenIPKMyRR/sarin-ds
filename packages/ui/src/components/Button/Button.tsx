import { Button as ButtonChakra, ButtonProps as ChakraButtonProps } from '@chakra-ui/react'
import { colors } from '../../tokens'

export interface ButtonProps extends ChakraButtonProps {
  children: string | React.ReactElement
  'aria-label': string
}

export const Button = ({ children, ...props }: ButtonProps) => {
  return (
    <ButtonChakra
      size='sm'
      variant='outline'
      bg={colors.surface.input}
      color={colors.text.secondary}
      _hover={{
        bg: colors.text.primary,
        color: '#000000'
      }}
      {...props}
    >
      {children}
    </ButtonChakra>
  )
}