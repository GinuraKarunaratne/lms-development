import { Button } from '../../common/Button/Button';
import styles from './EmptyStateBanner.module.css';

interface EmptyStateBannerProps {
  onAdd: () => void;
}

export function EmptyStateBanner({ onAdd }: EmptyStateBannerProps) {
  return (
    <div className={styles.banner}>
      <div className={styles.icon}>
        <svg width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2" />
        </svg>
      </div>
      <h3 className={styles.title}>No sections added yet</h3>
      <p className={styles.description}>
        Add at least one section to start building your course outline. You can add videos, quizzes, and reading materials to each section.
      </p>
      <div style={{ marginTop: 'var(--space-2)' }}>
        <Button variant="accent" onClick={onAdd}>
          + Add Section
        </Button>
      </div>
    </div>
  );
}
