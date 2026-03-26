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
      return <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><polygon points="5 3 19 12 5 21 5 3" /></svg>;
    case 'quiz':
      return <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><circle cx="12" cy="12" r="10" /><path d="M9.09 9a3 3 0 0 1 5.83 1c0 2-3 3-3 3" /><line x1="12" y1="17" x2="12.01" y2="17" /></svg>;
    case 'document':
      return <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z" /><polyline points="14 2 14 8 20 8" /></svg>;
    case 'reading':
      return <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M2 3h6a4 4 0 0 1 4 4v14a3 3 0 0 0-3-3H2z" /><path d="M22 3h-6a4 4 0 0 0-4 4v14a3 3 0 0 1 3-3h7z" /></svg>;
    default:
      return null;
  }
}

export function SectionCard({ section, onAddContent, onRemove }: SectionCardProps) {
  return (
    <div className={styles.card}>
      <div className={styles.header}>
        <div className={styles.titleArea}>
          <div className={styles.dragHandle}>
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <line x1="8" y1="6" x2="21" y2="6" /><line x1="8" y1="12" x2="21" y2="12" /><line x1="8" y1="18" x2="21" y2="18" /><line x1="3" y1="6" x2="3.01" y2="6" /><line x1="3" y1="12" x2="3.01" y2="12" /><line x1="3" y1="18" x2="3.01" y2="18" />
            </svg>
          </div>
          <div>
            <h3 className={styles.title}>{section.title}</h3>
            {section.description && <p className={styles.description}>{section.description}</p>}
          </div>
        </div>
        <div className={styles.actions}>
          <button type="button" className={styles.iconButton} onClick={() => onRemove(section.id)} aria-label="Delete section">
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <polyline points="3 6 5 6 21 6" /><path d="M19 6v14a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V6m3 0V4a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2" />
            </svg>
          </button>
        </div>
      </div>
      
      <div className={styles.content}>
        {section.items.length > 0 && (
          <div className={styles.itemsList}>
            {section.items.map((item) => (
              <div key={item.id} className={styles.item}>
                <div className={styles.itemLeft}>
                  <div className={styles.itemIcon}>{getItemIcon(item.type)}</div>
                  <div className={styles.itemTitle}>{item.title}</div>
                </div>
                <div className={styles.actions}>
                  <button type="button" className={styles.iconButton} aria-label="Edit item">
                    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                      <path d="M11 4H4a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2v-7" /><path d="M18.5 2.5a2.121 2.121 0 0 1 3 3L12 15l-4 1 1-4 9.5-9.5z" />
                    </svg>
                  </button>
                </div>
              </div>
            ))}
          </div>
        )}
        
        <div style={{ alignSelf: 'flex-start' }}>
          <ContentTypeDropdown
            onSelect={(type) => {
              // Normally this would open another modal to get the item title, 
              // for mock purposes we'll give it a generic localized title.
              const defaultTitles: Record<ContentType, string> = {
                video: 'New Video Lesson',
                quiz: 'New Quiz Assessment',
                document: 'New Document Resource',
                reading: 'New Reading Article'
              };
              onAddContent(section.id, type, defaultTitles[type]);
            }}
          />
        </div>
      </div>
    </div>
  );
}
