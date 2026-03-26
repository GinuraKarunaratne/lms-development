import { useNavigate } from 'react-router-dom';
import { AppShell } from '../../components/layout/AppShell/AppShell';
import { Button } from '../../components/common/Button/Button';
import { getSession } from '../../features/auth/authStorage';
import { instructorEnrollments, instructorMetrics } from '../../data/instructorCourses';
import styles from './InstructorDashboardPage.module.css';

const QUICK_ACTIONS = [
  { label: 'View My Students', icon: 'users' },
  { label: 'View Analytics', icon: 'analytics' },
  { label: 'Issue Certificate', icon: 'certificate' },
  { label: 'Message Students', icon: 'message' },
];

export function InstructorDashboardPage() {
  const session = getSession();
  const navigate = useNavigate();

  return (
    <AppShell
      role="instructor"
      userName={session?.name || 'Instructor'}
      userRole="Instructor"
      userAvatar={session?.avatar || ''}
    >
      <div className={styles.layout}>
        {/* Left: main content */}
        <div>
          {/* Welcome Card */}
          <div className={styles.welcome}>
            <div className={styles.welcomeHeader}>
              <div>
                <div className={styles.welcomeGreeting}>Welcome back!</div>
                <div className={styles.welcomeName}>{session?.name || 'Instructor'}</div>
              </div>
              <div className={styles.activeBadge}>
                <span className={styles.activeDot} />
                {instructorMetrics.activeUsers.toLocaleString()} Active users
              </div>
            </div>

            <div className={styles.metrics}>
              <div className={styles.metricCard}>
                <div className={styles.metricIconWrap} style={{ color: '#8b5cf6' }}>
                  <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2" /><circle cx="9" cy="7" r="4" /><path d="M23 21v-2a4 4 0 0 0-3-3.87" /><path d="M16 3.13a4 4 0 0 1 0 7.75" />
                  </svg>
                </div>
                <div className={styles.metricContent}>
                  <div className={styles.metricValue}>{instructorMetrics.students}</div>
                  <div className={styles.metricLabel}>My Students</div>
                </div>
              </div>

              <div className={styles.metricCard}>
                <div className={styles.metricIconWrap} style={{ color: '#f59e0b' }}>
                  <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M2 3h6a4 4 0 0 1 4 4v14a3 3 0 0 0-3-3H2z" /><path d="M22 3h-6a4 4 0 0 0-4 4v14a3 3 0 0 1 3-3h7z" />
                  </svg>
                </div>
                <div className={styles.metricContent}>
                  <div className={styles.metricValue}>{instructorMetrics.courses}</div>
                  <div className={styles.metricLabel}>My Courses</div>
                </div>
              </div>

              <div className={styles.metricCard}>
                <div className={styles.metricIconWrap} style={{ color: '#10b981' }}>
                  <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round">
                    <line x1="12" y1="1" x2="12" y2="23" /><path d="M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6" />
                  </svg>
                </div>
                <div className={styles.metricContent}>
                  <div className={styles.metricValue}>{instructorMetrics.revenue}</div>
                  <div className={styles.metricLabel}>Total Revenue</div>
                </div>
              </div>
            </div>
          </div>

          {/* Recent Enrollments */}
          <div className={styles.enrollmentsSection}>
            <h2 className={styles.sectionTitle}>Recent Enrollments</h2>
            <p className={styles.sectionSub}>Start teaching courses to start getting enrollments</p>

            <div className={styles.enrollmentList}>
              {instructorEnrollments.map(enr => (
                <div key={enr.id} className={styles.enrollmentItem}>
                  <div className={styles.enrollmentIcon}>
                    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                      <path d="M2 3h6a4 4 0 0 1 4 4v14a3 3 0 0 0-3-3H2z" /><path d="M22 3h-6a4 4 0 0 0-4 4v14a3 3 0 0 1 3-3h7z" />
                    </svg>
                  </div>
                  <div className={styles.enrollmentInfo}>
                    <div className={styles.enrollmentTitle}>{enr.courseTitle}</div>
                    <div className={styles.enrollmentId}>{enr.courseId}</div>
                  </div>
                  <div className={styles.enrollmentDate}>{enr.date}</div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Right rail */}
        <div className={styles.rail}>
          <div className={styles.quickActions}>
            <h3 className={styles.railTitle}>Quick Actions</h3>
            <div className={styles.actionsGrid}>
              {QUICK_ACTIONS.map(action => (
                <button key={action.label} type="button" className={styles.actionBtn}>
                  {action.label}
                </button>
              ))}
            </div>
            <div className={styles.ctaWrapper}>
              <Button variant="primary" fullWidth onClick={() => navigate('/instructor/courses/new')}>
                Create course +
              </Button>
            </div>
          </div>
        </div>
      </div>
    </AppShell>
  );
}
