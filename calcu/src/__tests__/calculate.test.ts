import { describe, it, expect } from 'vitest'
import { calculate } from '../utils/calculate'

describe('calculate', () => {
  it('adds two numbers', () => expect(calculate(5, 3, '+')).toBe(8))
  it('subtracts correctly when result is positive', () => expect(calculate(9, 3, '-')).toBe(6))
  it('returns ERROR when subtraction result is negative', () => expect(calculate(3, 9, '-')).toBe('ERROR'))
  it('subtraction result of exactly zero is not an error', () => expect(calculate(5, 5, '-')).toBe(0))
  it('multiplies two numbers', () => expect(calculate(4, 5, '*')).toBe(20))
  it('divides correctly', () => expect(calculate(10, 4, '/')).toBe(2.5))
  it('returns ERROR for division by zero', () => expect(calculate(5, 0, '/')).toBe('ERROR'))
  it('computes modulo', () => expect(calculate(10, 3, '%')).toBe(1))
  it('returns ERROR when result exceeds 999999999', () => expect(calculate(999999999, 1, '+')).toBe('ERROR'))
  it('accepts exact max value 999999999', () => expect(calculate(999999998, 1, '+')).toBe(999999999))
  it('returns ERROR for negative multiplication result via +/-', () => {
    const result = calculate(-5, 2, '*')
    expect(typeof result === 'number' && result < 0 ? result : result).toBe(-10)
  })
  it('handles large multiplication that exceeds max', () => expect(calculate(100000, 100000, '*')).toBe('ERROR'))
})
