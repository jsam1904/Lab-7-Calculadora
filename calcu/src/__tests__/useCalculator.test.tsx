import { describe, it, expect } from 'vitest'
import { renderHook, act } from '@testing-library/react'
import { useCalculator } from '../hooks/useCalculator'
import type { ButtonAction } from '../types/calculator'

function setup() {
  return renderHook(() => useCalculator())
}

function dispatch(rendered: ReturnType<typeof setup>, ...actions: ButtonAction[]) {
  act(() => { actions.forEach((a) => rendered.result.current.dispatchAction(a)) })
}

describe('useCalculator', () => {
  it('initializes with display "0"', () => {
    expect(setup().result.current.display).toBe('0')
  })

  it('replaces 0 when first digit is entered', () => {
    const h = setup()
    dispatch(h, { kind: 'digit', value: '5' })
    expect(h.result.current.display).toBe('5')
  })

  it('concatenates multiple digits', () => {
    const h = setup()
    dispatch(h, { kind: 'digit', value: '1' }, { kind: 'digit', value: '2' }, { kind: 'digit', value: '3' })
    expect(h.result.current.display).toBe('123')
  })

  it('limits display to 9 characters', () => {
    const h = setup()
    dispatch(h, ...Array.from({ length: 12 }, () => ({ kind: 'digit' as const, value: '1' })))
    expect(h.result.current.display.length).toBeLessThanOrEqual(9)
  })

  it('computes addition', () => {
    const h = setup()
    dispatch(h,
      { kind: 'digit', value: '5' }, { kind: 'operator', op: '+' },
      { kind: 'digit', value: '3' }, { kind: 'equals' },
    )
    expect(h.result.current.display).toBe('8')
  })

  it('computes subtraction with positive result', () => {
    const h = setup()
    dispatch(h,
      { kind: 'digit', value: '9' }, { kind: 'operator', op: '-' },
      { kind: 'digit', value: '4' }, { kind: 'equals' },
    )
    expect(h.result.current.display).toBe('5')
  })

  it('shows ERROR on negative subtraction result', () => {
    const h = setup()
    dispatch(h,
      { kind: 'digit', value: '3' }, { kind: 'operator', op: '-' },
      { kind: 'digit', value: '9' }, { kind: 'equals' },
    )
    expect(h.result.current.display).toBe('ERROR')
  })

  it('chains operations and auto-calculates', () => {
    const h = setup()
    dispatch(h,
      { kind: 'digit', value: '5' }, { kind: 'operator', op: '+' },
      { kind: 'digit', value: '3' }, { kind: 'operator', op: '*' },
      { kind: 'digit', value: '2' }, { kind: 'equals' },
    )
    expect(h.result.current.display).toBe('16')
  })

  it('toggles sign of a positive number', () => {
    const h = setup()
    dispatch(h, { kind: 'digit', value: '5' }, { kind: 'toggle_sign' })
    expect(h.result.current.display).toBe('-5')
  })

  it('untoggle sign restores positive', () => {
    const h = setup()
    dispatch(h, { kind: 'digit', value: '5' }, { kind: 'toggle_sign' }, { kind: 'toggle_sign' })
    expect(h.result.current.display).toBe('5')
  })

  it('clears to 0', () => {
    const h = setup()
    dispatch(h, { kind: 'digit', value: '5' }, { kind: 'clear' })
    expect(h.result.current.display).toBe('0')
  })

  it('handles decimal input', () => {
    const h = setup()
    dispatch(h,
      { kind: 'digit', value: '3' }, { kind: 'decimal' },
      { kind: 'digit', value: '1' }, { kind: 'digit', value: '4' },
    )
    expect(h.result.current.display).toBe('3.14')
  })

  it('ignores duplicate decimal point', () => {
    const h = setup()
    dispatch(h, { kind: 'digit', value: '3' }, { kind: 'decimal' }, { kind: 'decimal' })
    expect(h.result.current.display).toBe('3.')
  })

  it('shows ERROR when result exceeds 999999999', () => {
    const h = setup()
    dispatch(h,
      { kind: 'digit', value: '9' }, { kind: 'digit', value: '9' }, { kind: 'digit', value: '9' },
      { kind: 'digit', value: '9' }, { kind: 'digit', value: '9' }, { kind: 'digit', value: '9' },
      { kind: 'digit', value: '9' }, { kind: 'digit', value: '9' }, { kind: 'digit', value: '9' },
      { kind: 'operator', op: '+' },
      { kind: 'digit', value: '1' }, { kind: 'equals' },
    )
    expect(h.result.current.display).toBe('ERROR')
  })

  it('does not allow equals without prior operator', () => {
    const h = setup()
    dispatch(h, { kind: 'digit', value: '5' }, { kind: 'equals' })
    expect(h.result.current.display).toBe('5')
  })

  it('resets display after ERROR and entering a new digit', () => {
    const h = setup()
    dispatch(h, { kind: 'clear' }, { kind: 'digit', value: '7' })
    expect(h.result.current.display).toBe('7')
  })

  it('computes division', () => {
    const h = setup()
    dispatch(h,
      { kind: 'digit', value: '8' }, { kind: 'operator', op: '/' },
      { kind: 'digit', value: '4' }, { kind: 'equals' },
    )
    expect(h.result.current.display).toBe('2')
  })

  it('computes modulo', () => {
    const h = setup()
    dispatch(h,
      { kind: 'digit', value: '1' }, { kind: 'digit', value: '0' },
      { kind: 'operator', op: '%' },
      { kind: 'digit', value: '3' }, { kind: 'equals' },
    )
    expect(h.result.current.display).toBe('1')
  })
})
