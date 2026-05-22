const MAX_LEN = 9

export function formatResult(n: number): string {
  const simple = String(n)
  if (simple.length <= MAX_LEN) return simple
  if (Number.isInteger(n)) return 'ERROR'
  const intPart = String(Math.trunc(n))
  const available = MAX_LEN - intPart.length - 1
  if (available <= 0) return 'ERROR'
  const fixed = n.toFixed(available)
  return fixed.length <= MAX_LEN ? fixed : 'ERROR'
}

export function limitInput(current: string, digit: string): string {
  if (current === '0') return digit
  if (current.length >= MAX_LEN) return current
  return current + digit
}
