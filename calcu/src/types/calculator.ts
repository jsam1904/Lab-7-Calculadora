export type Operator = '+' | '-' | '*' | '/' | '%'

export type ButtonVariant = 'number' | 'operator' | 'action' | 'equals'

export type ButtonAction =
  | { kind: 'digit'; value: string }
  | { kind: 'decimal' }
  | { kind: 'toggle_sign' }
  | { kind: 'operator'; op: Operator }
  | { kind: 'equals' }
  | { kind: 'clear' }

export interface ButtonDef {
  label: string
  variant: ButtonVariant
  wide?: boolean
  action: ButtonAction
}

export interface CalculatorState {
  display: string
  pendingOp: Operator | null
  pendingValue: number | null
  waitingForOperand: boolean
}
