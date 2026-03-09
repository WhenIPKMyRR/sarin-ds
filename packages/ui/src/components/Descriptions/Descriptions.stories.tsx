import type { Meta, StoryObj } from '@storybook/react'
import { Descriptions } from './Descriptions'

const meta: Meta<typeof Descriptions> = {
  title: 'Components/Descriptions',
  component: Descriptions,
}
export default meta

type Story = StoryObj<typeof Descriptions>

export const Default: Story = {
  args: {
    items: [
      { label: 'Nome', value: 'João da Silva' },
      { label: 'Idade', value: '28 anos' },
      { label: 'Email', value: 'joao@email.com' },
      { label: 'Telefone', value: '(11) 99999-9999' },
    ]
  }
}

export const Bordered: Story = {
  args: {
    bordered: true,
    items: [
      { label: 'Nome', value: 'João da Silva' },
      { label: 'Idade', value: '28 anos' },
      { label: 'Endereço', value: 'Rua das Flores, 123', span: 2 },
    ]
  }
}

export const TresColunas: Story = {
  args: {
    columns: 3,
    items: [
      { label: 'Nome', value: 'João' },
      { label: 'Sobrenome', value: 'Silva' },
      { label: 'Idade', value: '28' },
      { label: 'Cidade', value: 'São Paulo' },
      { label: 'Estado', value: 'SP' },
      { label: 'País', value: 'Brasil' },
    ]
  }
}