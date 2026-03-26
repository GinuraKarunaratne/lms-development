import { useState } from 'react';
import { AppShell } from '../../components/layout/AppShell/AppShell';
import { CourseCard } from '../../components/course/CourseCard/CourseCard';
import { getSession } from '../../features/auth/authStorage';
import { studentCourses } from '../../data/studentCourses';
import styles from './CoursesPage.module.css';

const TABS = ['Active', 'Completed', 'Explore'] as const;
type Tab = typeof TABS[number];

export function CoursesPage() {
  const session = getSession();
  const [activeTab, setActiveTab] = useState<Tab>('Active');

  let filteredCourses = studentCourses;
  if (activeTab === 'Active') {
    filteredCourses = studentCourses.filter(c => c.progress > 0 && c.progress < 100);
  } else if (activeTab === 'Completed') {
    filteredCourses = studentCourses.filter(c => c.progress === 100);
  } else if (activeTab === 'Explore') {
    filteredCourses = studentCourses;
  }

  return (
    <AppShell
      role="student"
      userName={session?.name.split(' ')[0] + ' C.' || 'Student'}
      userRole="Student"
      userAvatar={session?.avatar || ''}
    >
      <div className={styles.page}>
        <div className={styles.header}>
          <h1 className={styles.title}>Continue the journey</h1>
          <div className={styles.tabs} role="tablist">
            {TABS.map((tab) => (
              <button
                key={tab}
                type="button"
                role="tab"
                aria-selected={activeTab === tab}
                className={`${styles.tab} ${activeTab === tab ? styles.tabActive : ''}`}
                onClick={() => setActiveTab(tab)}
              >
                {tab}
              </button>
            ))}
          </div>
        </div>

        {filteredCourses.length > 0 ? (
          <div className={styles.grid}>
            {filteredCourses.map((course) => (
              <CourseCard key={course.id} course={course} />
            ))}
          </div>
        ) : (
          <div className={styles.emptyState}>
            No courses found for "{activeTab}".
          </div>
        )}
      </div>
    </AppShell>
  );
}
