import type { Meta, StoryObj } from '@storybook/react'
import { Text } from '@chakra-ui/react'
import { List } from './List'

/** Lista com divider entre os itens. Recebe array de ReactNode. */
const meta: Meta<typeof List> = {
  title: 'Components/List',
  component: List,
}
export default meta

type Story = StoryObj<typeof List>

export const Default: Story = {
  args: {
    items: [
      <Text color='white'>Item 1</Text>,
      <Text color='white'>Item 2</Text>,
      <Text color='white'>Item 3</Text>,
    ]
  }
}