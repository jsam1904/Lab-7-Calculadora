import styles from './Display.module.css'

interface Props {
  value: string
}

export function Display({ value }: Props) {
  const isSmall = value.length > 6
  return (
    <div className={styles.display}>
      <span className={`${styles.value}${isSmall ? ` ${styles.small}` : ''}`}>
        {value}
      </span>
    </div>
  )
}
