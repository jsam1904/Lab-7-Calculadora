import type { Meta, StoryObj } from '@storybook/react'
import { Calculator } from './Calculator'

const centered = {
  background: '#000', minHeight: '100vh',
  display: 'flex', alignItems: 'center', justifyContent: 'center',
}

const meta: Meta<typeof Calculator> = {
  component: Calculator,
  decorators: [(Story) => <div style={centered}><Story /></div>],
}
export default meta
type Story = StoryObj<typeof Calculator>

export const Default: Story = {}
