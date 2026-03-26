import type { ScheduleEntry } from '../../../types/course';
import styles from './ScheduleCard.module.css';

interface ScheduleCardProps {
  entry: ScheduleEntry;
}

export function ScheduleCard({ entry }: ScheduleCardProps) {
  return (
    <div className={styles.card}>
      <div className={styles.inner}>
        <div className={styles.topRow}>
          <span className={styles.time}>{entry.time}</span>
          <span className={styles.typeBadge}>{entry.type}</span>
        </div>
        <div className={styles.bottomRow}>
          <span className={styles.title}>{entry.title}</span>
          <svg width="6" height="12" viewBox="0 0 6 12" fill="none">
            <path d="M0.5 0.5L5.5 6L0.5 11.5" stroke="#787878" strokeMiterlimit="16" strokeLinecap="round" strokeLinejoin="round" />
          </svg>
        </div>
      </div>
    </div>
  );
}
