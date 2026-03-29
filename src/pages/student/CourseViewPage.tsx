import { useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import { Avatar } from '../../components/common/Avatar/Avatar';
import { SearchField } from '../../components/layout/SearchField/SearchField';
import { getSession } from '../../features/auth/authStorage';
import { studentCourses } from '../../data/studentCourses';
import { useAuth } from '../../features/auth/useAuth';
import styles from './CourseViewPage.module.css';

function CheckIcon() {
  return (
    <svg width="14" height="14" viewBox="0 0 14 14" fill="none">
      <circle cx="7" cy="7" r="7" fill="#99E038" />
      <path d="M3.5 7.5L5.5 9.5L10.5 4.5" stroke="#414141" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

function CurrentIcon() {
  return (
    <svg width="14" height="14" viewBox="0 0 14 14" fill="none">
      <circle cx="7" cy="7" r="6.5" stroke="#B4B4B4" />
    </svg>
  );
}

function PendingIcon() {
  return (
    <svg width="14" height="14" viewBox="0 0 14 14" fill="none">
      <circle cx="7" cy="7" r="6.5" stroke="#B4B4B4" />
    </svg>
  );
}

export function CourseViewPage() {
  const { courseId } = useParams<{ courseId: string }>();
  const session = getSession();
  const { signOut } = useAuth();
  const course = studentCourses.find(c => c.id === courseId) || studentCourses[0];

  const allLessons = course.modules.flatMap(m => m.lessons);
  const defaultLesson = allLessons.find(l => l.status === 'current') || allLessons[0];
  const [activeLesson, setActiveLesson] = useState(defaultLesson);
  const [activeTab, setActiveTab] = useState<'Notes' | 'Downloads'>('Notes');

  return (
    <div className={styles.shell}>
      {/* Left panel: course outline sidebar */}
      <aside className={styles.courseSidebar}>
        <div className={styles.sidebarBrand}>
          <div className={styles.brandIcon}>L</div>
          <div className={styles.brandText}>
            <span className={styles.brandName}>Learnova</span>
            <span className={styles.brandSub}>Global education</span>
          </div>
        </div>

        <div className={styles.courseOutline}>
          <Link to="/student/courses" className={styles.backLink}>
            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <line x1="19" y1="12" x2="5" y2="12" /><polyline points="12 19 5 12 12 5" />
            </svg>
            Back to courses
          </Link>

          <h2 className={styles.courseTitle}>{course.title}</h2>

          <div className={styles.moduleList}>
            {course.modules.map((mod) => (
              <div key={mod.id} className={styles.moduleGroup}>
                <div className={styles.moduleHeader}>
                  <div>
                    <span className={styles.moduleSubtitle}>{mod.subtitle}</span>
                    <div className={styles.moduleTitle}>{mod.title}</div>
                  </div>
                  <svg width="10" height="5" viewBox="0 0 10 5" fill="none">
                    <path d="M0.5 4.5L5 0.5L9.5 4.5" stroke="#787878" strokeMiterlimit="16" strokeLinecap="round" strokeLinejoin="round" />
                  </svg>
                </div>
                <div className={styles.lessonList}>
                  {mod.lessons.map((lesson) => {
                    const isActive = activeLesson?.id === lesson.id;
                    const isCompleted = lesson.status === 'completed';
                    const isCurrent = lesson.status === 'current';
                    return (
                      <button
                        key={lesson.id}
                        type="button"
                        className={`${styles.lessonItem} ${isActive ? styles.lessonActive : ''}`}
                        onClick={() => setActiveLesson(lesson)}
                      >
                        <span className={`${styles.lessonStatus} ${isCompleted ? styles.statusCompleted : isCurrent ? styles.statusCurrent : styles.statusPending}`}>
                          {isCompleted ? <CheckIcon /> : isCurrent ? <CurrentIcon /> : <PendingIcon />}
                        </span>
                        <div className={styles.lessonMeta}>
                          <span className={styles.lessonName}>{lesson.title}</span>
                          <span className={styles.lessonDuration}>
                            Video
                            <svg width="2" height="2" viewBox="0 0 2 2" fill="none"><circle cx="1" cy="1" r="1" fill="#D9D9D9"/></svg>
                            {lesson.duration}
                          </span>
                        </div>
                      </button>
                    );
                  })}
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className={styles.sidebarFooter}>
          <button type="button" className={styles.logoutBtn} onClick={signOut}>
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round">
              <path d="M9 21H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h4" /><polyline points="16 17 21 12 16 7" /><line x1="21" y1="12" x2="9" y2="12" />
            </svg>
            Logout
          </button>
        </div>
      </aside>

      {/* Right: topbar + main content */}
      <div className={styles.mainArea}>
        {/* Topbar */}
        <header className={styles.topbar}>
          <div className={styles.topbarLeft}>
            <SearchField />
          </div>
          <div className={styles.topbarRight}>
            <button type="button" className={styles.notifBtn} aria-label="Notifications">
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M18 8A6 6 0 0 0 6 8c0 7-3 9-3 9h18s-3-2-3-9" />
                <path d="M13.73 21a2 2 0 0 1-3.46 0" />
              </svg>
            </button>
            <div className={styles.userMeta}>
              <div className={styles.userInfo}>
                <span className={styles.userName}>{session?.name.split(' ')[0]} C.</span>
                <span className={styles.userRole}>Student</span>
              </div>
              <Avatar src={session?.avatar || ''} alt={session?.name || ''} size="lg" />
            </div>
          </div>
        </header>

        {/* Content */}
        <div className={styles.content}>
          {/* Video Player */}
          <div className={styles.playerArea}>
            <div className={styles.videoWrapper}>
              <img src={course.thumbnail} alt={course.title} className={styles.videoImg} />
              <button type="button" className={styles.playButton} aria-label="Play video">
                <svg width="22" height="22" viewBox="0 0 24 24" fill="currentColor">
                  <polygon points="5 3 19 12 5 21 5 3" />
                </svg>
              </button>
            </div>

            <div className={styles.videoMeta}>
              <h2 className={styles.lessonTitle}>{activeLesson?.title || 'Lesson Overview'}</h2>
              <button type="button" className={styles.saveNoteBtn}>
                <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M19 21H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h11l5 5v11a2 2 0 0 1-2 2z" /><polyline points="17 21 17 13 7 13 7 21" /><polyline points="7 3 7 8 15 8" />
                </svg>
                Save Note
              </button>
            </div>

            <div className={styles.tabBar}>
              {(['Notes', 'Downloads'] as const).map(tab => (
                <button
                  key={tab}
                  type="button"
                  className={`${styles.tabBtn} ${activeTab === tab ? styles.tabActive : ''}`}
                  onClick={() => setActiveTab(tab)}
                >
                  {tab}
                </button>
              ))}
            </div>

            <div className={styles.tabContent}>
              {activeTab === 'Notes' && (
                <p className={styles.notesText}>
                  Lorem ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.
                </p>
              )}
              {activeTab === 'Downloads' && (
                <p className={styles.notesText}>No downloads available for this lesson.</p>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
