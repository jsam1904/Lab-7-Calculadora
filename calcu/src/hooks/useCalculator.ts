import { useReducer } from 'react'
import type { CalculatorState, Operator, ButtonAction } from '../types/calculator'
import { calculate } from '../utils/calculate'
import { formatResult, limitInput } from '../utils/format'

type Action =
  | { type: 'DIGIT'; value: string }
  | { type: 'DECIMAL' }
  | { type: 'TOGGLE_SIGN' }
  | { type: 'OPERATOR'; op: Operator }
  | { type: 'EQUALS' }
  | { type: 'CLEAR' }
  | { type: 'BACKSPACE' }

const initial: CalculatorState = { display: '0', pendingOp: null, pendingValue: null, waitingForOperand: false }
const errState = (): CalculatorState => ({ ...initial, display: 'ERROR' })

function handleOperator(state: CalculatorState, op: Operator): CalculatorState {
  const current = parseFloat(state.display)
  if (state.pendingOp && !state.waitingForOperand) {
    const r = calculate(state.pendingValue!, current, state.pendingOp)
    if (r === 'ERROR') return errState()
    const display = formatResult(r)
    if (display === 'ERROR') return errState()
    return { display, pendingOp: op, pendingValue: r, waitingForOperand: true }
  }
  return { ...state, pendingOp: op, pendingValue: current, waitingForOperand: true }
}

function handleEquals(state: CalculatorState): CalculatorState {
  if (!state.pendingOp || state.pendingValue === null) return state
  const r = calculate(state.pendingValue, parseFloat(state.display), state.pendingOp)
  if (r === 'ERROR') return errState()
  const display = formatResult(r)
  const finalDisplay = display === 'ERROR' ? 'ERROR' : display
  return { display: finalDisplay, pendingOp: null, pendingValue: null, waitingForOperand: true }
}

function reducer(state: CalculatorState, action: Action): CalculatorState {
  switch (action.type) {
    case 'DIGIT': {
      if (state.waitingForOperand) return { ...state, display: action.value, waitingForOperand: false }
      return { ...state, display: limitInput(state.display, action.value) }
    }
    case 'DECIMAL': {
      if (state.waitingForOperand) return { ...state, display: '0.', waitingForOperand: false }
      if (state.display.includes('.') || state.display.length >= 9) return state
      return { ...state, display: state.display + '.' }
    }
    case 'TOGGLE_SIGN': {
      if (state.display === '0' || state.display === 'ERROR') return state
      if (state.display.startsWith('-')) return { ...state, display: state.display.slice(1) }
      if (state.display.length >= 9) return state
      return { ...state, display: '-' + state.display }
    }
    case 'OPERATOR': return handleOperator(state, action.op)
    case 'EQUALS': return handleEquals(state)
    case 'CLEAR': return initial
    case 'BACKSPACE': {
      if (state.waitingForOperand || state.display === 'ERROR') return state
      const next = state.display.length > 1 ? state.display.slice(0, -1) : '0'
      return { ...state, display: next }
    }
    default: return state
  }
}

export function useCalculator() {
  const [state, dispatch] = useReducer(reducer, initial)

  function dispatchAction(action: ButtonAction) {
    if (action.kind === 'digit') dispatch({ type: 'DIGIT', value: action.value })
    else if (action.kind === 'decimal') dispatch({ type: 'DECIMAL' })
    else if (action.kind === 'toggle_sign') dispatch({ type: 'TOGGLE_SIGN' })
    else if (action.kind === 'operator') dispatch({ type: 'OPERATOR', op: action.op })
    else if (action.kind === 'equals') dispatch({ type: 'EQUALS' })
    else if (action.kind === 'clear') dispatch({ type: 'CLEAR' })
    else if (action.kind === 'backspace') dispatch({ type: 'BACKSPACE' })
  }

  return { display: state.display, dispatchAction }
}
