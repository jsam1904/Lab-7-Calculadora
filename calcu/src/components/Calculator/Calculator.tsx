import { useCalculator } from '../../hooks/useCalculator'
import { Display } from '../Display/Display'
import { Keyboard } from '../Keyboard/Keyboard'
import styles from './Calculator.module.css'

export function Calculator() {
  const { display, dispatchAction } = useCalculator()
  return (
    <div className={styles.calculator}>
      <Display value={display} />
      <Keyboard onAction={dispatchAction} />
    </div>
  )
}
