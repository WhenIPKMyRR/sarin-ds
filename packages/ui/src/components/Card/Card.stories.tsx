import type { Meta, StoryObj } from '@storybook/react'
import { Text } from '@chakra-ui/react'
import { Card } from './Card'

/** Card com suporte a header e footer opcionais. */
const meta: Meta<typeof Card> = {
  title: 'Components/Card',
  component: Card,
}
export default meta

type Story = StoryObj<typeof Card>

export const Default: Story = {
  args: {
    children: <Text color='white'>Conteúdo do card</Text>,
  }
}

export const ComHeader: Story = {
  args: {
    header: 'Título do Card',
    children: <Text color='white'>Conteúdo do card</Text>,
  }
}

export const ComHeaderEFooter: Story = {
  args: {
    header: 'Título do Card',
    children: <Text color='white'>Conteúdo do card</Text>,
    footer: <Text color='white'>Rodapé</Text>,
  }
}