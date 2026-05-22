import type { Operator } from '../types/calculator'

const MAX = 999_999_999

function applyOp(a: number, b: number, op: Operator): number {
  if (op === '+') return a + b
  if (op === '-') return a - b
  if (op === '*') return a * b
  if (op === '/') return b !== 0 ? a / b : NaN
  return a % b
}

export function calculate(a: number, b: number, op: Operator): number | 'ERROR' {
  const result = applyOp(a, b, op)
  if (!isFinite(result) || isNaN(result)) return 'ERROR'
  if (op === '-' && result < 0) return 'ERROR'
  if (Math.abs(result) > MAX) return 'ERROR'
  return result
}
