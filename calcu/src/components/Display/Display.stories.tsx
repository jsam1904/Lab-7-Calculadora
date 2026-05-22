import type { Meta, StoryObj } from '@storybook/react'
import { Display } from './Display'

const meta: Meta<typeof Display> = {
  component: Display,
  decorators: [(Story) => <div style={{ background: '#1c1c1e', width: 336 }}><Story /></div>],
}
export default meta
type Story = StoryObj<typeof Display>

export const Default: Story = { args: { value: '0' } }
export const Integer: Story = { args: { value: '12345' } }
export const MaxLength: Story = { args: { value: '123456789' } }
export const Decimal: Story = { args: { value: '3.141592' } }
export const Negative: Story = { args: { value: '-42' } }
export const Error: Story = { args: { value: 'ERROR' } }
