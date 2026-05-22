import { Button } from '../Button/Button'
import { BUTTONS } from '../../utils/buttonConfig'
import type { ButtonAction } from '../../types/calculator'
import styles from './Keyboard.module.css'

interface Props { onAction: (action: ButtonAction) => void }

export function Keyboard({ onAction }: Props) {
  return (
    <div className={styles.keyboard}>
      {BUTTONS.map((btn) => (
        <Button key={btn.label} label={btn.label} variant={btn.variant}
          wide={btn.wide} onClick={() => onAction(btn.action)} />
      ))}
    </div>
  )
}
