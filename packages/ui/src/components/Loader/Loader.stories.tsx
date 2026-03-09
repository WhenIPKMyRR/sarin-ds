import type { Meta, StoryObj } from '@storybook/react'
import { Loader } from './Loader'

/** Indicador de carregamento centralizado. Usado em estados de loading de páginas e formulários. */
const meta: Meta<typeof Loader> = {
  title: 'Components/Loader',
  component: Loader,
  argTypes: {
    size: {
      control: { type: 'select' },
      options: ['xs', 'sm', 'md', 'lg', 'xl'],
    },
    fullScreen: {
      control: { type: 'boolean' },
    },
  },
}
export default meta

type Story = StoryObj<typeof Loader>

export const Default: Story = {
  args: { size: 'md' }
}

export const Small: Story = {
  args: { size: 'sm' }
}

export const Large: Story = {
  args: {
    size: 'xl',
    fullScreen: true
  }
}

export const FullScreen: Story = {
  args: { size: 'md', fullScreen: true }
}