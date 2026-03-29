import { useState } from 'react';
import { AppShell } from '../../components/layout/AppShell/AppShell';
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

export function StudentDashboardPage() {
  const session = getSession();
  const [activeDay, setActiveDay] = useState(0);
  const displayCourses = studentCourses.slice(0, 4);
  const daySchedule = schedule.filter((e) => e.dayIndex === activeDay);

  return (
    <AppShell
      role="student"
      userName={session?.name.split(' ')[0] + ' C.' || 'Student'}
      userRole="Student"
      userAvatar={session?.avatar || ''}
    >
      <div className={styles.layout}>
        {/* Left: Main content */}
        <div style={{ display: 'flex', flexDirection: 'column', gap: '24px' }}>
          {/* Welcome Card */}
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
              <div className={styles.metricCard}>
                <span className={styles.metricIcon}>
                  <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round">
                    <circle cx="12" cy="8" r="7" /><polyline points="8.21 13.89 7 23 12 20 17 23 15.79 13.88" />
                  </svg>
                </span>
                <span className={styles.metricLabel}>Credits</span>
                <div className={styles.metricValue}>124</div>
              </div>

              <div className={styles.metricCard}>
                <span className={styles.metricIcon}>
                  <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round">
                    <circle cx="12" cy="12" r="10" /><polyline points="12 6 12 12 16 14" />
                  </svg>
                </span>
                <span className={styles.metricLabel}>Efficiency</span>
                <div className={styles.metricValue}>12.5H</div>
              </div>

              <div className={styles.metricCard}>
                <span className={styles.metricIcon}>
                  <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round">
                    <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2" />
                  </svg>
                </span>
                <span className={styles.metricLabel}>Ranking</span>
                <div className={styles.metricValue}>#12 Top Decile</div>
              </div>
            </div>
          </div>

          {/* Continue the journey */}
          <div>
            <div className={styles.sectionHeader}>
              <h2 className={styles.sectionTitle}>Continue the journey</h2>
              <div className={styles.subtitleRow}>
                <p className={styles.sectionSubtitle}>
                  Resume your active courses and continue building your skills. Track your progress and complete modules to unlock new content.
                </p>
                <span className={styles.exploreLink}>
                  Explore More
                  <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <polyline points="9 18 15 12 9 6" />
                  </svg>
                </span>
              </div>
            </div>
            <div className={styles.courseGrid}>
              {displayCourses.map((course) => (
                <CourseCard key={course.id} course={course} />
              ))}
            </div>
          </div>
        </div>

        {/* Right: Schedule Rail */}
        <div className={styles.scheduleRail}>
          <div className={styles.scheduleHeader}>
            <div>
              <h3 className={styles.scheduleTitle}>Upcoming Lectures</h3>
              <p className={styles.scheduleSub}>Your weekly Schedule</p>
            </div>
            <span className={styles.calendarIcon}>
              <svg width="32" height="32" viewBox="0 0 32 32" fill="none">
                <rect x="0.4" y="0.4" width="31.2" height="31.2" rx="4.4" fill="#E8FBCE" />
                <rect x="0.4" y="0.4" width="31.2" height="31.2" rx="4.4" stroke="#DDF4BE" strokeWidth="0.8" />
                <path d="M19.6 8V11.2M12.4 8V11.2" stroke="#60A500" strokeLinecap="round" strokeLinejoin="round" />
                <path d="M21.6 9.6H10.4C9.516 9.6 8.8 10.316 8.8 11.2V22.4C8.8 23.284 9.516 24 10.4 24H21.6C22.484 24 23.2 23.284 23.2 22.4V11.2C23.2 10.316 22.484 9.6 21.6 9.6Z" stroke="#60A500" strokeLinecap="round" strokeLinejoin="round" />
                <path d="M8.8 14.4H23.2" stroke="#60A500" strokeLinecap="round" strokeLinejoin="round" />
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
                <span className={styles.dayName}>{wd.day}</span>
                <span className={styles.dayNumber}>{wd.num}</span>
              </button>
            ))}
          </div>

          <div className={styles.scheduleList}>
            {daySchedule.length > 0 ? (
              daySchedule.map((entry) => (
                <ScheduleCard key={entry.id} entry={entry} />
              ))
            ) : (
              <div className={styles.emptyDay}>No lectures scheduled</div>
            )}
          </div>
        </div>
      </div>
    </AppShell>
  );
}
