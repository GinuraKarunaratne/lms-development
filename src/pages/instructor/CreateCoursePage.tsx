import { useState } from 'react';
import { AppShell } from '../../components/layout/AppShell/AppShell';
import { SectionCard } from '../../components/courseBuilder/SectionCard/SectionCard';
import { AddSectionModal } from '../../components/courseBuilder/AddSectionModal/AddSectionModal';
import { useCourseBuilder } from '../../features/courseBuilder/useCourseBuilder';
import { getSession } from '../../features/auth/authStorage';
import styles from './CreateCoursePage.module.css';

export function CreateCoursePage() {
  const session = getSession();
  const [isModalOpen, setIsModalOpen] = useState(false);
  const { sections, addSection, addContentItem, removeSection } = useCourseBuilder();

  function handleSaveSection(title: string, description: string) {
    addSection(title, description);
  }

  return (
    <AppShell
      role="instructor"
      userName={session?.name || 'Instructor'}
      userRole="Instructor"
      userAvatar={session?.avatar || ''}
    >
      <div className={styles.page}>
        {/* Toolbar */}
        <div className={styles.toolbar}>
          <h1 className={styles.pageTitle}>Create New Course</h1>
          <div className={styles.toolbarActions}>
            <button type="button" className={styles.toolbarBtn}>
              <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M19 21H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h11l5 5v11a2 2 0 0 1-2 2z" /><polyline points="17 21 17 13 7 13 7 21" /><polyline points="7 3 7 8 15 8" />
              </svg>
              Save Draft
            </button>
            <button type="button" className={styles.toolbarBtn}>
              <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z" /><circle cx="12" cy="12" r="3" />
              </svg>
              Preview
            </button>
            <button type="button" className={styles.toolbarBtnPrimary}>
              Create Course
            </button>
          </div>
        </div>

        {/* Builder area */}
        <div className={styles.builderArea}>
          {/* Add Section always-visible button */}
          <button
            type="button"
            className={styles.addSectionBtn}
            onClick={() => setIsModalOpen(true)}
          >
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
              <line x1="12" y1="5" x2="12" y2="19" /><line x1="5" y1="12" x2="19" y2="12" />
            </svg>
            Add Section
          </button>

          {sections.length === 0 ? (
            /* Amber empty state banner */
            <div className={styles.emptyBanner}>
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <circle cx="12" cy="12" r="10" /><line x1="12" y1="8" x2="12" y2="12" /><line x1="12" y1="16" x2="12.01" y2="16" />
              </svg>
              <span>Add at least one section to start building your curriculum</span>
            </div>
          ) : (
            <div className={styles.sectionList}>
              {sections.map(section => (
                <SectionCard
                  key={section.id}
                  section={section}
                  onAddContent={addContentItem}
                  onRemove={removeSection}
                />
              ))}
            </div>
          )}
        </div>
      </div>

      <AddSectionModal
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
        onSave={handleSaveSection}
      />
    </AppShell>
  );
}
