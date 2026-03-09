import type { Meta, StoryObj } from '@storybook/react'
import { Text } from '@chakra-ui/react'
import { Tabs } from './Tabs'

/** Tabs com lazy mount. Recebe array de items com label, value e content. */
const meta: Meta<typeof Tabs> = {
  title: 'Components/Tabs',
  component: Tabs,
}
export default meta

type Story = StoryObj<typeof Tabs>

export const Default: Story = {
  args: {
    items: [
      { label: 'Aba 1', value: 'tab-1', content: <Text color='white'>Conteúdo da aba 1</Text> },
      { label: 'Aba 2', value: 'tab-2', content: <Text color='white'>Conteúdo da aba 2</Text> },
      { label: 'Aba 3', value: 'tab-3', content: <Text color='white'>Conteúdo da aba 3</Text> },
    ]
  }
}