import { useNavigate } from 'react-router-dom';
import { AppShell } from '../../components/layout/AppShell/AppShell';
import { Button } from '../../components/common/Button/Button';
import { getSession } from '../../features/auth/authStorage';
import { instructorEnrollments, instructorMetrics } from '../../data/instructorCourses';
import styles from './InstructorDashboardPage.module.css';

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
        <div>
          <div className={styles.welcome}>
            <div className={styles.welcomeHeader}>
              <div>
                <div className={styles.welcomeGreeting}>Welcome back!</div>
                <div className={styles.welcomeName}>{session?.name || 'Instructor'}</div>
              </div>
              <div className={styles.activeBadge}>
                <span className={styles.activeDot} />
                {instructorMetrics.activeUsers} Active users
              </div>
            </div>
            
            <div className={styles.metrics}>
              <div className={styles.metricCard}>
                <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" style={{color: '#8b5cf6'}}>
                  <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2" /><circle cx="9" cy="7" r="4" /><path d="M23 21v-2a4 4 0 0 0-3-3.87" /><path d="M16 3.13a4 4 0 0 1 0 7.75" />
                </svg>
                <div className={styles.metricContent}>
                  <div className={styles.metricValue}>{instructorMetrics.students}</div>
                  <div className={styles.metricLabel}>My Students</div>
                </div>
              </div>
              <div className={styles.metricCard}>
                <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" style={{color: '#f59e0b'}}>
                  <path d="M2 3h6a4 4 0 0 1 4 4v14a3 3 0 0 0-3-3H2z" /><path d="M22 3h-6a4 4 0 0 0-4 4v14a3 3 0 0 1 3-3h7z" />
                </svg>
                <div className={styles.metricContent}>
                  <div className={styles.metricValue}>{instructorMetrics.courses}</div>
                  <div className={styles.metricLabel}>My Courses</div>
                </div>
              </div>
              <div className={styles.metricCard}>
                <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" style={{color: '#10b981'}}>
                  <line x1="12" y1="1" x2="12" y2="23" /><path d="M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6" />
                </svg>
                <div className={styles.metricContent}>
                  <div className={styles.metricValue}>{instructorMetrics.revenue}</div>
                  <div className={styles.metricLabel}>Total Revenue</div>
                </div>
              </div>
            </div>
          </div>

          <div style={{ marginTop: 'var(--space-8)' }}>
            <h2 className={styles.sectionTitle}>Recent Enrollments</h2>
            <div style={{ overflowX: 'auto' }}>
              <table className={styles.enrollmentTable}>
                <thead>
                  <tr>
                    <th>Course Title</th>
                    <th>Course ID</th>
                    <th>Date</th>
                  </tr>
                </thead>
                <tbody>
                  {instructorEnrollments.map(enr => (
                    <tr key={enr.id}>
                      <td style={{ fontWeight: 'var(--font-weight-medium)' }}>{enr.courseTitle}</td>
                      <td className={styles.courseId}>{enr.courseId}</td>
                      <td>{enr.date}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </div>

        <div className={styles.rail}>
          <div className={styles.quickActions}>
            <h3 className={styles.railTitle}>Quick Actions</h3>
            <div className={styles.actionsList}>
              <button className={styles.actionButton}>
                View My Students
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><polyline points="9 18 15 12 9 6" /></svg>
              </button>
              <button className={styles.actionButton}>
                View Analytics
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><polyline points="9 18 15 12 9 6" /></svg>
              </button>
              <button className={styles.actionButton}>
                Issue Certificate
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><polyline points="9 18 15 12 9 6" /></svg>
              </button>
              <button className={styles.actionButton}>
                Message Students
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><polyline points="9 18 15 12 9 6" /></svg>
              </button>
            </div>
            
            <div className={styles.ctaWrapper}>
              <Button fullWidth onClick={() => navigate('/instructor/courses/new')}>
                Create Course +
              </Button>
            </div>
          </div>
        </div>
      </div>
    </AppShell>
  );
}
