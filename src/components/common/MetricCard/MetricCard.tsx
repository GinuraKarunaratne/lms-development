import type { ReactNode } from 'react';
import styles from './MetricCard.module.css';

interface MetricCardProps {
  icon: ReactNode;
  label: string;
  value: string | number;
}

export function MetricCard({ icon, label, value }: MetricCardProps) {
  return (
    <div className={styles.card}>
      <div className={styles.content}>
        <div className={styles.label}>
          <div className={styles.icon}>{icon}</div>
          <span>{label}</span>
        </div>
        <span className={styles.value}>{value}</span>
      </div>
    </div>
  );
}
