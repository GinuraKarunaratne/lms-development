import { useState } from 'react';
import { DropdownMenu, type DropdownItem } from '../../common/DropdownMenu/DropdownMenu';
import type { ContentType } from '../../../types/course';
import styles from './ContentTypeDropdown.module.css';

interface ContentTypeDropdownProps {
  onSelect: (type: ContentType) => void;
}

const CONTENT_TYPES: { id: ContentType; label: string; icon: JSX.Element }[] = [
  {
    id: 'video',
    label: 'Video Lesson',
    icon: (
      <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <rect x="2" y="2" width="20" height="20" rx="2.18" ry="2.18" /><line x1="7" y1="2" x2="7" y2="22" /><line x1="17" y1="2" x2="17" y2="22" /><line x1="2" y1="12" x2="22" y2="12" /><line x1="2" y1="7" x2="7" y2="7" /><line x1="2" y1="17" x2="7" y2="17" /><line x1="17" y1="17" x2="22" y2="17" /><line x1="17" y1="7" x2="22" y2="7" />
      </svg>
    ),
  },
  {
    id: 'quiz',
    label: 'Quiz',
    icon: (
      <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z" /><polyline points="14 2 14 8 20 8" /><path d="M9 15L11 17L15 13" />
      </svg>
    ),
  },
  {
    id: 'document',
    label: 'Document',
    icon: (
      <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z" /><polyline points="14 2 14 8 20 8" /><line x1="16" y1="13" x2="8" y2="13" /><line x1="16" y1="17" x2="8" y2="17" /><polyline points="10 9 9 9 8 9" />
      </svg>
    ),
  },
  {
    id: 'reading',
    label: 'Reading / Article',
    icon: (
      <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M2 3h6a4 4 0 0 1 4 4v14a3 3 0 0 0-3-3H2z" /><path d="M22 3h-6a4 4 0 0 0-4 4v14a3 3 0 0 1 3-3h7z" />
      </svg>
    ),
  },
];

export function ContentTypeDropdown({ onSelect }: ContentTypeDropdownProps) {
  const [isOpen, setIsOpen] = useState(false);

  const items: DropdownItem[] = CONTENT_TYPES.map((type) => ({
    id: type.id,
    label: (
      <span className={styles.itemLabel}>
        <span className={styles.itemIcon}>{type.icon}</span>
        <span className={styles.itemText}>{type.label}</span>
      </span>
    ),
    onClick: () => onSelect(type.id),
  }));

  const trigger = (
    <button type="button" className={styles.trigger}>
      <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <line x1="12" y1="5" x2="12" y2="19" />
        <line x1="5" y1="12" x2="19" y2="12" />
      </svg>
      Add Content
    </button>
  );

  return (
    <DropdownMenu
      trigger={trigger}
      items={items}
      isOpen={isOpen}
      onClose={() => setIsOpen(false)}
      onToggle={() => setIsOpen((prev) => !prev)}
    />
  );
}
