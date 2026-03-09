import type { Meta, StoryObj } from '@storybook/react'
import { Result } from './Result'

const meta: Meta<typeof Result> = {
  title: 'Components/Result',
  component: Result,
}
export default meta

type Story = StoryObj<typeof Result>

export const Error: Story = {
  args: {
    status: 'error',
    title: 'Erro ao carregar dados',
    description: 'Ocorreu um erro inesperado. Tente novamente.',
    label: 'Tentar novamente',
    'aria-label': 'tentar novamente',
    onRefetch: () => {},
  }
}

export const Warning: Story = {
  args: {
    status: 'warning',
    title: 'Atenção',
    description: 'Alguns dados podem estar desatualizados.',
    label: 'Atualizar',
    'aria-label': 'atualizar dados',
    onRefetch: () => {},
  }
}