import styles from './SearchField.module.css';

export function SearchField() {
  return (
    <div className={styles.searchField}>
      <span className={styles.searchIcon}>
        <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <circle cx="11" cy="11" r="8" />
          <line x1="21" y1="21" x2="16.65" y2="16.65" />
        </svg>
      </span>
      <input
        type="text"
        className={styles.input}
        placeholder="Search Resources"
        aria-label="Search Resources"
      />
    </div>
  );
}
