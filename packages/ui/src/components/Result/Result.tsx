import { Alert, Stack, Text } from '@chakra-ui/react'
import { Button } from '../Button'
import { colors } from '../../tokens'

export interface ResultProps {
  title: string
  description: string
  label: string
  'aria-label': string
  onRefetch: () => void
  status?: 'error' | 'warning' | 'info' | 'success'
}

export const Result = ({
  title,
  description,
  label,
  'aria-label': ariaLabel,
  onRefetch,
  status = 'error',
}: ResultProps) => {
  return (
    <Alert.Root
      status={status}
      flexDirection='column'
      alignItems='center'
      justifyContent='center'
      textAlign='center'
      minH='200px'
      bg='transparent'
    >
      <Alert.Indicator boxSize='38px' mb={4} />
      <Stack align='center' gap={2}>
        <Alert.Title color={colors.text.primary} fontSize='md'>
          {title}
        </Alert.Title>
        <Alert.Description color={colors.text.secondary} fontSize='xs' maxW='sm' lineHeight={1.5}>
          {description}
        </Alert.Description>
        <Button aria-label={ariaLabel} onClick={onRefetch} mt={2}>
          {label}
        </Button>
      </Stack>
    </Alert.Root>
  )
}