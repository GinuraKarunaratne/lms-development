import { Avatar } from '../../common/Avatar/Avatar';
import { SearchField } from '../SearchField/SearchField';
import styles from './Topbar.module.css';

interface TopbarProps {
  userName: string;
  userRole: string;
  userAvatar: string;
  onMenuToggle: () => void;
}

export function Topbar({ userName, userRole, userAvatar, onMenuToggle }: TopbarProps) {
  return (
    <header className={styles.topbar}>
      <div className={styles.left}>
        <button
          type="button"
          className={styles.hamburger}
          onClick={onMenuToggle}
          aria-label="Toggle navigation menu"
        >
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <line x1="3" y1="12" x2="21" y2="12" />
            <line x1="3" y1="6" x2="21" y2="6" />
            <line x1="3" y1="18" x2="21" y2="18" />
          </svg>
        </button>
        <SearchField />
      </div>

      <div className={styles.right}>
        <button
          type="button"
          className={styles.notificationBtn}
          aria-label="Notifications"
        >
          <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <path d="M18 8A6 6 0 0 0 6 8c0 7-3 9-3 9h18s-3-2-3-9" />
            <path d="M13.73 21a2 2 0 0 1-3.46 0" />
          </svg>
        </button>

        <div className={styles.userMeta}>
          <div className={styles.userInfo}>
            <span className={styles.userName}>{userName}</span>
            <span className={styles.userRole}>{userRole}</span>
          </div>
          <Avatar src={userAvatar} alt={userName} size="lg" />
        </div>
      </div>
    </header>
  );
}
