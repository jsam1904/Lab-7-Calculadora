import type { Meta, StoryObj } from '@storybook/react'
import { Button } from './Button'

const meta: Meta<typeof Button> = {
  component: Button,
  args: { onClick: () => {} },
  decorators: [(Story) => <div style={{ padding: 16, background: '#1c1c1e' }}><Story /></div>],
}
export default meta
type Story = StoryObj<typeof Button>

export const Number: Story = { args: { label: '5', variant: 'number' } }
export const Operator: Story = { args: { label: '+', variant: 'operator' } }
export const Action: Story = { args: { label: 'AC', variant: 'action' } }
export const Equals: Story = { args: { label: '=', variant: 'equals' } }
export const Wide: Story = { args: { label: '0', variant: 'number', wide: true }, decorators: [
  (Story) => <div style={{ width: 148, padding: 16, background: '#1c1c1e' }}><Story /></div>,
] }
