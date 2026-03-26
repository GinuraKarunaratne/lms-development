import styles from './Divider.module.css';

interface DividerProps {
  label?: string;
}

export function Divider({ label }: DividerProps) {
  return (
    <div className={styles.divider}>
      <span className={styles.line} />
      {label && <span className={styles.label}>{label}</span>}
      <span className={styles.line} />
    </div>
  );
}
