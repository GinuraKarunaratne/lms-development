import { useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import { AppShell } from '../../components/layout/AppShell/AppShell';
import { Avatar } from '../../components/common/Avatar/Avatar';
import { Button } from '../../components/common/Button/Button';
import { getSession } from '../../features/auth/authStorage';
import { studentCourses } from '../../data/studentCourses';
import styles from './CourseViewPage.module.css';

function PlayIcon() {
  return (
    <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor">
      <polygon points="5 3 19 12 5 21 5 3" />
    </svg>
  );
}

function CheckIcon() {
  return (
    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round">
      <polyline points="20 6 9 17 4 12" />
    </svg>
  );
}

function CircleIcon() {
  return (
    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
      <circle cx="12" cy="12" r="10" />
    </svg>
  );
}

export function CourseViewPage() {
  const { courseId } = useParams<{ courseId: string }>();
  const session = getSession();
  const course = studentCourses.find(c => c.id === courseId) || studentCourses[0];

  // Find first non-completed or default to first lesson
  const allLessons = course.modules.flatMap(m => m.lessons);
  const defaultLesson = allLessons.find(l => l.status === 'current') || allLessons[0];
  const [activeLesson, setActiveLesson] = useState(defaultLesson);

  if (!course) {
    return (
      <AppShell role="student" userName={session?.name || ''} userRole="Student" userAvatar={session?.avatar || ''}>
        <div>Course not found</div>
      </AppShell>
    );
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
          <div className={styles.titleArea}>
            <Link to="/student/courses" className={styles.backLink}>
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <line x1="19" y1="12" x2="5" y2="12" /><polyline points="12 19 5 12 12 5" />
              </svg>
              Back to Courses
            </Link>
            <h1 className={styles.title}>{course.title}</h1>
            <div className={styles.instructorInfo}>
              <Avatar src={course.instructor.avatar} alt={course.instructor.name} size="sm" />
              <div>
                <div className={styles.instructorName}>{course.instructor.name}</div>
                <div className={styles.instructorRole}>{course.instructor.role}</div>
              </div>
            </div>
          </div>
          <Button variant="secondary">Rate Course</Button>
        </div>

        <div className={styles.content}>
          <div className={styles.playerArea}>
            <div className={styles.videoWrapper}>
              <img src={course.thumbnail} alt={course.title} className={styles.videoImg} />
              <button type="button" className={styles.playButton} aria-label="Play video">
                <PlayIcon />
              </button>
            </div>
            
            <div className={styles.videoMeta}>
              <div>
                <h2 className={styles.lessonTitle}>{activeLesson?.title || 'Lesson Overview'}</h2>
                <p className={styles.lessonDesc}>
                  Learn the fundamental concepts in this detailed video lesson. Make sure to complete the quiz afterwards.
                </p>
              </div>
            </div>
          </div>

          <aside className={styles.modulesRail}>
            <h3 className={styles.railHeader}>Course Outline</h3>
            {course.modules.length > 0 ? (
              course.modules.map(mod => (
                <div key={mod.id} className={styles.module}>
                  <div>
                    <div className={styles.moduleSubtitle}>{mod.subtitle}</div>
                    <div className={styles.moduleHeader}>{mod.title}</div>
                  </div>
                  <div>
                    {mod.lessons.map(lesson => {
                      const isActive = activeLesson?.id === lesson.id;
                      const isCompleted = lesson.status === 'completed';
                      return (
                        <div
                          key={lesson.id}
                          className={`${styles.lesson} ${isActive ? styles.active : ''} ${isCompleted ? styles.completed : ''}`}
                          onClick={() => setActiveLesson(lesson)}
                          role="button"
                          tabIndex={0}
                          onKeyDown={(e) => e.key === 'Enter' && setActiveLesson(lesson)}
                        >
                          <span className={styles.lessonIcon}>
                            {isCompleted ? <CheckIcon /> : <CircleIcon />}
                          </span>
                          <div className={styles.lessonInfo}>
                            <div className={styles.lessonName}>{lesson.title}</div>
                            <div className={styles.lessonTime}>{lesson.duration}</div>
                          </div>
                        </div>
                      );
                    })}
                  </div>
                </div>
              ))
            ) : (
              <div style={{ color: 'var(--color-text-muted)', fontSize: 'var(--text-sm)' }}>
                No modules available currently.
              </div>
            )}
          </aside>
        </div>
      </div>
    </AppShell>
  );
}
