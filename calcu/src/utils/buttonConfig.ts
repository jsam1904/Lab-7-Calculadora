import type { ButtonDef } from '../types/calculator'

export const BUTTONS: ButtonDef[] = [
  { label: '⌫', variant: 'action', action: { kind: 'backspace' } },
  { label: 'AC', variant: 'action', action: { kind: 'clear' } },
  { label: '%', variant: 'operator', action: { kind: 'operator', op: '%' } },
  { label: '÷', variant: 'operator', action: { kind: 'operator', op: '/' } },
  { label: '7', variant: 'number', action: { kind: 'digit', value: '7' } },
  { label: '8', variant: 'number', action: { kind: 'digit', value: '8' } },
  { label: '9', variant: 'number', action: { kind: 'digit', value: '9' } },
  { label: '×', variant: 'operator', action: { kind: 'operator', op: '*' } },
  { label: '4', variant: 'number', action: { kind: 'digit', value: '4' } },
  { label: '5', variant: 'number', action: { kind: 'digit', value: '5' } },
  { label: '6', variant: 'number', action: { kind: 'digit', value: '6' } },
  { label: '−', variant: 'operator', action: { kind: 'operator', op: '-' } },
  { label: '1', variant: 'number', action: { kind: 'digit', value: '1' } },
  { label: '2', variant: 'number', action: { kind: 'digit', value: '2' } },
  { label: '3', variant: 'number', action: { kind: 'digit', value: '3' } },
  { label: '+', variant: 'operator', action: { kind: 'operator', op: '+' } },
  { label: '±', variant: 'action', action: { kind: 'toggle_sign' } },
  { label: '0', variant: 'number', wide: true, action: { kind: 'digit', value: '0' } },
  { label: '.', variant: 'number', action: { kind: 'decimal' } },
  { label: '=', variant: 'equals', action: { kind: 'equals' } },
]
