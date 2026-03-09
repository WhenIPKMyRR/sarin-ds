import type { Meta, StoryObj } from '@storybook/react'
import { Button } from './Button'

/** Botão base do DS. Suporta todas as props do Chakra UI ButtonProps. */
const meta: Meta<typeof Button> = {
  title: 'Components/Button',
  component: Button,
  argTypes: {
    size: {
      control: { type: 'select' },
      options: ['xs', 'sm', 'md', 'lg'],
    },
    variant: {
      control: { type: 'select' },
      options: ['outline', 'solid', 'ghost', 'link'],
    },
    disabled: {
      control: { type: 'boolean' },
    },
    loading: {
      control: { type: 'boolean' },
    },
  },
}
export default meta

type Story = StoryObj<typeof Button>

export const Default: Story = {
  args: {
    children: 'Clique aqui',
    'aria-label': 'botão padrão',
  }
}

export const Sizes: Story = {
  render: () => (
    <div style={{ display: 'flex', gap: '8px', alignItems: 'center' }}>
      <Button aria-label='xs' size='xs'>Extra small</Button>
      <Button aria-label='sm' size='sm'>Small</Button>
      <Button aria-label='md' size='md'>Medium</Button>
      <Button aria-label='lg' size='lg'>Large</Button>
    </div>
  )
}

export const Variants: Story = {
  render: () => (
    <div style={{ display: 'flex', gap: '8px', alignItems: 'center' }}>
      <Button aria-label='outline' variant='outline'>Outline</Button>
      <Button aria-label='solid' variant='solid'>Solid</Button>
      <Button aria-label='ghost' variant='ghost'>Ghost</Button>
    </div>
  )
}

export const Disabled: Story = {
  args: {
    children: 'Indisponível',
    'aria-label': 'botão desabilitado',
    disabled: true,
  }
}

export const Loading: Story = {
  args: {
    children: 'Carregando',
    'aria-label': 'botão carregando',
    loading: true,
  }
}