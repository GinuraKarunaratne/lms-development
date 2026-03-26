import { Badge } from '../../common/Badge/Badge';
import type { ScheduleEntry } from '../../../types/course';
import styles from './ScheduleCard.module.css';

interface ScheduleCardProps {
  entry: ScheduleEntry;
}

export function ScheduleCard({ entry }: ScheduleCardProps) {
  return (
    <div className={styles.card}>
      <div className={styles.info}>
        <span className={styles.time}>{entry.time}</span>
        <span className={styles.title}>{entry.title}</span>
      </div>
      <Badge label={entry.type} variant="muted" />
      <span className={styles.arrow}>
        <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <polyline points="9 18 15 12 9 6" />
        </svg>
      </span>
    </div>
  );
}
