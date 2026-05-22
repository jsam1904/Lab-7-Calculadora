import type { Meta, StoryObj } from '@storybook/react'
import { Keyboard } from './Keyboard'

const meta: Meta<typeof Keyboard> = {
  component: Keyboard,
  args: { onAction: () => {} },
  decorators: [(Story) => <div style={{ background: '#1c1c1e', padding: 20, display: 'inline-block' }}><Story /></div>],
}
export default meta
type Story = StoryObj<typeof Keyboard>

export const Default: Story = {}
