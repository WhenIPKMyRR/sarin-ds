import { Center, Text, Button, Stack, Image } from '@chakra-ui/react'
import { colors } from '../../tokens'

const DEFAULT_IMAGE = 'https://gw.alipayobjects.com/zos/antfincdn/ZHrcdLPrvN/empty.svg'

export interface EmptyProps {
  image?: string
  description?: string
  labelButton?: string
  onClick?: () => void
}

export const Empty = ({
  image = DEFAULT_IMAGE,
  description = 'Sem dados para mostrar',
  labelButton = 'Adicionar',
  onClick,
}: EmptyProps) => {
  return (
    <Center w='full' h='full'>
      <Stack align='center' gap={3}>
        <Image src={image} alt='empty' maxW='120px' />
        <Text color={colors.text.primary}>{description}</Text>
        {onClick && (
          <Button size='sm' onClick={onClick}>
            {labelButton}
          </Button>
        )}
      </Stack>
    </Center>
  )
}