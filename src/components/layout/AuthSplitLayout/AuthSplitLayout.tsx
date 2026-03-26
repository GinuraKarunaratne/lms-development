import type { ReactNode } from 'react';
import styles from './AuthSplitLayout.module.css';

interface AuthSplitLayoutProps {
  imageUrl: string;
  imageAlt: string;
  children: ReactNode;
}

export function AuthSplitLayout({ imageUrl, imageAlt, children }: AuthSplitLayoutProps) {
  return (
    <div className={styles.layout}>
      <div className={styles.imagePanel}>
        <div className={styles.brandOverlay}>L</div>
        <img
          src={imageUrl}
          alt={imageAlt}
          className={styles.image}
          loading="eager"
        />
      </div>
      <div className={styles.formPanel}>
        <div className={styles.formContent}>
          {children}
        </div>
      </div>
    </div>
  );
}
