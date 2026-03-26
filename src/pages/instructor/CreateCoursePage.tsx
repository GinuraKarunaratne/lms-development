import { useState } from 'react';
import { AppShell } from '../../components/layout/AppShell/AppShell';
import { BuilderToolbar } from '../../components/courseBuilder/BuilderToolbar/BuilderToolbar';
import { SectionCard } from '../../components/courseBuilder/SectionCard/SectionCard';
import { EmptyStateBanner } from '../../components/courseBuilder/EmptyStateBanner/EmptyStateBanner';
import { AddSectionModal } from '../../components/courseBuilder/AddSectionModal/AddSectionModal';
import { Button } from '../../components/common/Button/Button';
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
        <BuilderToolbar />
        
        <div className={styles.builderArea}>
          {sections.length === 0 ? (
            <EmptyStateBanner onAdd={() => setIsModalOpen(true)} />
          ) : (
            <>
              {sections.map(section => (
                <SectionCard
                  key={section.id}
                  section={section}
                  onAddContent={addContentItem}
                  onRemove={removeSection}
                />
              ))}
              
              <div style={{ marginTop: 'var(--space-6)', display: 'flex', justifyContent: 'center' }}>
                <Button variant="secondary" onClick={() => setIsModalOpen(true)}>
                  + Add New Section
                </Button>
              </div>
            </>
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
