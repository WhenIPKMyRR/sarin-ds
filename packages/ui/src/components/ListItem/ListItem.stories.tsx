import type { Meta, StoryObj } from '@storybook/react'
import { FiUser } from 'react-icons/fi'
import { ListItemContent, ListItemIcon, ListItemSubtext } from './ListItem'

const meta: Meta = {
  title: 'Components/ListItem',
}
export default meta

export const Content: StoryObj = {
  render: () => (
    <ListItemContent title='Nome completo' text='João da Silva' />
  )
}

export const Icon: StoryObj = {
  render: () => (
    <ListItemIcon icon={<FiUser size={24} color='white' />} />
  )
}

export const Subtext: StoryObj = {
  render: () => (
    <ListItemSubtext subtext='Atualizado há 2 horas' />
  )
}

export const Completo: StoryObj = {
  render: () => (
    <div style={{ display: 'flex', alignItems: 'center', gap: 12 }}>
      <ListItemIcon icon={<FiUser size={24} color='white' />} />
      <div style={{ flex: 1 }}>
        <ListItemContent title='João da Silva' text='28 anos' />
        <ListItemSubtext subtext='Atualizado há 2 horas' />
      </div>
    </div>
  )
}