import { Link } from 'react-router-dom';
import { Button } from '../../common/Button/Button';
import styles from './BuilderToolbar.module.css';

export function BuilderToolbar() {
  return (
    <div className={styles.toolbar}>
      <div className={styles.left}>
        <Link to="/instructor/dashboard" style={{ color: 'var(--color-text-muted)' }}>
          <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <line x1="19" y1="12" x2="5" y2="12" /><polyline points="12 19 5 12 12 5" />
          </svg>
        </Link>
        <h1 className={styles.title}>Create New Course</h1>
      </div>
      <div className={styles.right}>
        <Button variant="ghost">Save Draft</Button>
        <Button variant="secondary">Preview</Button>
        <Button variant="primary">Create Course</Button>
      </div>
    </div>
  );
}
