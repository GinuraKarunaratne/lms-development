import { useState, type JSX } from 'react';
import { AppShell } from '../../components/layout/AppShell/AppShell';
import { MetricCard } from '../../components/common/MetricCard/MetricCard';
import { CourseCard } from '../../components/course/CourseCard/CourseCard';
import { ScheduleCard } from '../../components/course/ScheduleCard/ScheduleCard';
import { getSession } from '../../features/auth/authStorage';
import { studentCourses } from '../../data/studentCourses';
import { schedule } from '../../data/schedule';
import styles from './StudentDashboardPage.module.css';

const WEEK_DAYS = [
  { day: 'Mon', num: 26 },
  { day: 'Tue', num: 27 },
  { day: 'Wed', num: 28 },
  { day: 'Thu', num: 29 },
  { day: 'Fri', num: 30 },
  { day: 'Sat', num: 31 },
];

function MetricIcon({ type }: { type: string }) {
  const icons: Record<string, JSX.Element> = {
    credits: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <circle cx="12" cy="8" r="7" /><polyline points="8.21 13.89 7 23 12 20 17 23 15.79 13.88" />
      </svg>
    ),
    efficiency: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <circle cx="12" cy="12" r="10" /><polyline points="12 6 12 12 16 14" />
      </svg>
    ),
    ranking: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2" />
      </svg>
    ),
  };
  return icons[type] || null;
}

export function StudentDashboardPage() {
  const session = getSession();
  const [activeDay, setActiveDay] = useState(0);
  const displayCourses = studentCourses.slice(0, 2);

  return (
    <AppShell
      role="student"
      userName={session?.name.split(' ')[0] + ' C.' || 'Student'}
      userRole="Student"
      userAvatar={session?.avatar || ''}
    >
      <div className={styles.layout}>
        <div>
          <div className={styles.welcome}>
            <div className={styles.welcomeHeader}>
              <div>
                <div className={styles.welcomeGreeting}>Welcome back!</div>
                <div className={styles.welcomeName}>{session?.name || 'Student'}</div>
              </div>
              <div className={styles.activeBadge}>
                <span className={styles.activeDot} />
                3 Active courses
              </div>
            </div>
            <div className={styles.metrics}>
              <MetricCard icon={<MetricIcon type="credits" />} label="Credits" value={124} />
              <MetricCard icon={<MetricIcon type="efficiency" />} label="Efficiency" value="12.5H" />
              <MetricCard icon={<MetricIcon type="ranking" />} label="Ranking" value="#12 Top Decile" />
            </div>
          </div>

          <div style={{ marginTop: 'var(--space-8)' }}>
            <div className={styles.sectionHeader}>
              <div>
                <h2 className={styles.sectionTitle}>Continue the journey</h2>
                <p className={styles.sectionSubtitle}>
                  Resume your active courses and continue building your skills. Track your progress and complete modules to unlock new content.
                </p>
              </div>
              <span className={styles.exploreLink}>
                Explore More
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <polyline points="9 18 15 12 9 6" />
                </svg>
              </span>
            </div>
            <div className={styles.courseGrid}>
              {displayCourses.map((course) => (
                <CourseCard key={course.id} course={course} />
              ))}
            </div>
          </div>
        </div>

        <div className={styles.scheduleRail}>
          <div className={styles.scheduleHeader}>
            <div>
              <h3 className={styles.scheduleTitle}>Upcoming Lectures</h3>
              <p className={styles.scheduleSub}>Your weekly Schedule</p>
            </div>
            <span className={styles.calendarIcon}>
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <rect x="3" y="4" width="18" height="18" rx="2" ry="2" /><line x1="16" y1="2" x2="16" y2="6" /><line x1="8" y1="2" x2="8" y2="6" /><line x1="3" y1="10" x2="21" y2="10" />
              </svg>
            </span>
          </div>

          <div className={styles.weekDays}>
            {WEEK_DAYS.map((wd, i) => (
              <button
                key={wd.day}
                type="button"
                className={`${styles.dayChip} ${i === activeDay ? styles.active : ''}`}
                onClick={() => setActiveDay(i)}
              >
                {wd.day}
                <span className={styles.dayNumber}>{wd.num}</span>
              </button>
            ))}
          </div>

          <div className={styles.scheduleList}>
            {schedule.map((entry) => (
              <ScheduleCard key={entry.id} entry={entry} />
            ))}
          </div>
        </div>
      </div>
    </AppShell>
  );
}
