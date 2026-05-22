import type { ButtonVariant } from '../../types/calculator'
import styles from './Button.module.css'

interface Props { label: string; variant: ButtonVariant; onClick: () => void; wide?: boolean }

export function Button({ label, variant, onClick, wide }: Props) {
  const cls = `${styles.btn} ${styles[variant]}${wide ? ` ${styles.wide}` : ''}`
  return (
    <button type="button" className={cls} onClick={onClick}>
      {label}
    </button>
  )
}
