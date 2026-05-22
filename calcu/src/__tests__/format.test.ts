import { describe, it, expect } from 'vitest'
import { formatResult, limitInput } from '../utils/format'

describe('formatResult', () => {
  it('returns integer as string when within 9 chars', () => expect(formatResult(123)).toBe('123'))
  it('returns max integer 999999999', () => expect(formatResult(999999999)).toBe('999999999'))
  it('returns ERROR for integer exceeding 9 digits', () => expect(formatResult(1000000000)).toBe('ERROR'))
  it('truncates decimal to fit 9 chars', () => {
    const r = formatResult(1 / 3)
    expect(r.length).toBeLessThanOrEqual(9)
    expect(r).not.toBe('ERROR')
  })
  it('returns ERROR when decimal integer part fills 9 chars', () =>
    expect(formatResult(100000000.5)).toBe('ERROR'))
  it('handles negative numbers within limit', () => expect(formatResult(-12345)).toBe('-12345'))
})

describe('limitInput', () => {
  it('replaces 0 with new digit', () => expect(limitInput('0', '5')).toBe('5'))
  it('concatenates digits', () => expect(limitInput('12', '3')).toBe('123'))
  it('stops at 9 chars', () => expect(limitInput('123456789', '0')).toBe('123456789'))
  it('allows up to exactly 9 chars', () => expect(limitInput('12345678', '9')).toBe('123456789'))
})
