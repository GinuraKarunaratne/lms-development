import { useState } from 'react';
import { AppShell } from '../../components/layout/AppShell/AppShell';
import { Tabs } from '../../components/common/Tabs/Tabs';
import { CourseCard } from '../../components/course/CourseCard/CourseCard';
import { getSession } from '../../features/auth/authStorage';
import { studentCourses } from '../../data/studentCourses';
import styles from './CoursesPage.module.css';

const TABS = ['All Courses', 'My Courses', 'In Progress', 'Completed', 'Saved'];

export function CoursesPage() {
  const session = getSession();
  const [activeTab, setActiveTab] = useState(TABS[0]);

  let filteredCourses = studentCourses;
  if (activeTab === 'In Progress') {
    filteredCourses = studentCourses.filter(c => c.progress > 0 && c.progress < 100);
  } else if (activeTab === 'Completed') {
    filteredCourses = studentCourses.filter(c => c.progress === 100);
  } else if (activeTab === 'My Courses') {
    filteredCourses = studentCourses; // Mock logic
  } else if (activeTab === 'Saved') {
    filteredCourses = []; // Mock logic
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
          <h1 className={styles.title}>Courses</h1>
          <Tabs
            tabs={TABS}
            activeTab={activeTab}
            onTabChange={setActiveTab}
          />
        </div>

        {filteredCourses.length > 0 ? (
          <div className={styles.grid}>
            {filteredCourses.map((course) => (
              <CourseCard key={course.id} course={course} />
            ))}
          </div>
        ) : (
          <div className={styles.emptyState}>
            No courses found for {activeTab}.
          </div>
        )}
      </div>
    </AppShell>
  );
}
