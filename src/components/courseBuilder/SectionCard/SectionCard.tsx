import { useState } from 'react';
import { ContentTypeDropdown } from '../ContentTypeDropdown/ContentTypeDropdown';
import type { CourseSection, ContentType } from '../../../features/courseBuilder/courseBuilder.types';
import styles from './SectionCard.module.css';

interface SectionCardProps {
  section: CourseSection;
  onAddContent: (sectionId: string, type: ContentType, title: string) => void;
  onRemove: (sectionId: string) => void;
}

function getItemIcon(type: ContentType) {
  switch (type) {
    case 'video':
      return <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><polygon points="5 3 19 12 5 21 5 3" /></svg>;
    case 'quiz':
      return <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><circle cx="12" cy="12" r="10" /><path d="M9.09 9a3 3 0 0 1 5.83 1c0 2-3 3-3 3" /><line x1="12" y1="17" x2="12.01" y2="17" /></svg>;
    case 'document':
      return <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z" /><polyline points="14 2 14 8 20 8" /></svg>;
    case 'reading':
      return <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M2 3h6a4 4 0 0 1 4 4v14a3 3 0 0 0-3-3H2z" /><path d="M22 3h-6a4 4 0 0 0-4 4v14a3 3 0 0 1 3-3h7z" /></svg>;
    default:
      return null;
  }
}

export function SectionCard({ section, onAddContent, onRemove }: SectionCardProps) {
  const [collapsed, setCollapsed] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const lessonCount = section.items.length;

  return (
    <div className={styles.card}>
      {/* Header row */}
      <div className={styles.header}>
        <div className={styles.headerLeft}>
          {/* Drag handle */}
          <span className={styles.dragHandle}>
            <svg width="14" height="14" viewBox="0 0 10 16" fill="currentColor">
              <circle cx="2" cy="2" r="1.5" /><circle cx="8" cy="2" r="1.5" />
              <circle cx="2" cy="8" r="1.5" /><circle cx="8" cy="8" r="1.5" />
              <circle cx="2" cy="14" r="1.5" /><circle cx="8" cy="14" r="1.5" />
            </svg>
          </span>

          {/* Collapse chevron */}
          <button
            type="button"
            className={`${styles.collapseBtn} ${collapsed ? styles.collapsedChevron : ''}`}
            onClick={() => setCollapsed(!collapsed)}
            aria-label={collapsed ? 'Expand section' : 'Collapse section'}
          >
            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
              <polyline points="6 9 12 15 18 9" />
            </svg>
          </button>

          {/* Title */}
          <span className={styles.title}>Section 1: {section.title}</span>

          {/* Lessons badge */}
          <span className={styles.lessonBadge}>
            {lessonCount} {lessonCount === 1 ? 'lesson' : 'lessons'}
          </span>
        </div>

        {/* Three-dot menu */}
        <div className={styles.menuWrap}>
          <button
            type="button"
            className={styles.menuBtn}
            onClick={() => setMenuOpen(!menuOpen)}
            aria-label="Section options"
          >
            <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
              <circle cx="12" cy="5" r="1.5" /><circle cx="12" cy="12" r="1.5" /><circle cx="12" cy="19" r="1.5" />
            </svg>
          </button>
          {menuOpen && (
            <div className={styles.menu}>
              <button type="button" className={`${styles.menuItem} ${styles.menuItemDanger}`} onClick={() => { onRemove(section.id); setMenuOpen(false); }}>
                Delete section
              </button>
            </div>
          )}
        </div>
      </div>

      {/* Body: description + meta */}
      {!collapsed && (
        <>
          {(section.description || true) && (
            <div className={styles.meta}>
              {section.description && <p className={styles.description}>{section.description}</p>}
              <span className={styles.duration}>
                <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <circle cx="12" cy="12" r="10" /><polyline points="12 6 12 12 16 14" />
                </svg>
                0min
              </span>
            </div>
          )}

          {/* Content area */}
          <div className={styles.content}>
            {section.items.length > 0 ? (
              <div className={styles.itemsList}>
                {section.items.map((item) => (
                  <div key={item.id} className={styles.item}>
                    <div className={styles.itemLeft}>
                      <span className={styles.itemIcon}>{getItemIcon(item.type)}</span>
                      <span className={styles.itemTitle}>{item.title}</span>
                    </div>
                    <button type="button" className={styles.itemEditBtn} aria-label="Edit item">
                      <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                        <path d="M11 4H4a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2v-7" /><path d="M18.5 2.5a2.121 2.121 0 0 1 3 3L12 15l-4 1 1-4 9.5-9.5z" />
                      </svg>
                    </button>
                  </div>
                ))}
              </div>
            ) : (
              <div className={styles.emptyState}>
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                  <circle cx="12" cy="12" r="10" /><line x1="12" y1="8" x2="12" y2="12" /><line x1="12" y1="16" x2="12.01" y2="16" />
                </svg>
                <span>No Lessons in this section yet</span>
              </div>
            )}
          </div>

          {/* Add Content button */}
          <ContentTypeDropdown
            onSelect={(type) => {
              const defaultTitles: Record<ContentType, string> = {
                video: 'New Video Lesson',
                quiz: 'New Quiz Assessment',
                document: 'New Document Resource',
                reading: 'New Reading Article',
              };
              onAddContent(section.id, type, defaultTitles[type]);
            }}
          />
        </>
      )}
    </div>
  );
}
