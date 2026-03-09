import { Center, Spinner, SpinnerProps } from '@chakra-ui/react'
import { colors } from '../../tokens'

export interface LoaderProps extends SpinnerProps {
  fullScreen?: boolean
}

export const Loader = ({ fullScreen, ...props }: LoaderProps) => {
  return (
    <Center
      w='full'
      h={fullScreen ? '100vh' : 'full'}
    >
      <Spinner
        color={colors.text.primary}
        {...props}
      />
    </Center>
  )
}