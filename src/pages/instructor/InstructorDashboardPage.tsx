import { useNavigate } from 'react-router-dom';
import { AppShell } from '../../components/layout/AppShell/AppShell';
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
        {/* Left: main content */}
        <div className={styles.main}>

          {/* Welcome Card */}
          <div className={styles.welcome}>
            <div className={styles.welcomeTop}>
              <div>
                <div className={styles.welcomeGreeting}>Welcome back!</div>
                <div className={styles.welcomeName}>{session?.name || 'Instructor'}</div>
              </div>
              <div className={styles.activeBadge}>
                <span className={styles.activeDot} />
                {instructorMetrics.activeUsers.toLocaleString()} Active Users
              </div>
            </div>

            <div className={styles.metrics}>
              {/* My Students */}
              <div className={styles.metricCard}>
                <span className={styles.metricIcon}>
                  <svg width="22" height="22" viewBox="0 0 20 20" fill="none">
                    <path d="M8.75 12.9167C8.75 12.2264 9.28967 11.6667 9.95533 11.6667H10.0447C10.7103 11.6667 11.25 12.2264 11.25 12.9167C11.25 13.6071 10.7103 14.1667 10.0447 14.1667H9.95533C9.28967 14.1667 8.75 13.6071 8.75 12.9167Z" stroke="currentColor" strokeWidth="1.25"/>
                    <path d="M9.99992 18.3333C12.9915 18.3333 15.4166 15.9082 15.4166 12.9167C15.4166 9.92512 12.9915 7.5 9.99992 7.5C7.00838 7.5 4.58325 9.92512 4.58325 12.9167C4.58325 15.9082 7.00838 18.3333 9.99992 18.3333Z" stroke="currentColor" strokeWidth="1.25"/>
                    <path d="M7.49992 7.91675L4.58325 1.66675" stroke="currentColor" strokeWidth="1.25" strokeLinecap="round" strokeLinejoin="round"/>
                    <path d="M12.5 7.91675L15.4167 1.66675" stroke="currentColor" strokeWidth="1.25" strokeLinecap="round" strokeLinejoin="round"/>
                    <path d="M12.5001 1.66675L11.6667 3.75008" stroke="currentColor" strokeWidth="1.25" strokeLinecap="round" strokeLinejoin="round"/>
                    <path d="M10.4167 7.50008L7.91675 1.66675" stroke="currentColor" strokeWidth="1.25" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                </span>
                <span className={styles.metricLabel}>My Students</span>
                <div className={styles.metricValue}>{instructorMetrics.students}</div>
              </div>

              {/* My Courses */}
              <div className={styles.metricCard}>
                <span className={styles.metricIcon}>
                  <svg width="22" height="22" viewBox="0 0 20 20" fill="none">
                    <path d="M10.0001 18.3334C5.39767 18.3334 1.66675 14.6024 1.66675 10.0001C1.66675 5.39771 5.39771 1.66675 10.0001 1.66675C13.7315 1.66675 16.8548 4.11916 17.9167 7.50008H15.8334" stroke="currentColor" strokeWidth="1.25" strokeLinecap="round" strokeLinejoin="round"/>
                    <path d="M10 6.66675V10.0001L11.6667 11.6667" stroke="currentColor" strokeWidth="1.25" strokeLinecap="round" strokeLinejoin="round"/>
                    <path d="M18.2959 10.8333C18.3207 10.5591 18.3333 10.2811 18.3333 10M12.5 18.3333C12.7847 18.2397 13.0628 18.1303 13.3333 18.0065M17.3255 14.1667C17.4863 13.857 17.6296 13.5361 17.7542 13.2052M15.1604 16.8577C15.4474 16.6201 15.7193 16.3632 15.974 16.0887" stroke="currentColor" strokeWidth="1.25" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                </span>
                <span className={styles.metricLabel}>My Courses</span>
                <div className={styles.metricValue}>{instructorMetrics.courses}</div>
              </div>

              {/* Total Revenue */}
              <div className={styles.metricCard}>
                <span className={styles.metricIcon}>
                  <svg width="22" height="22" viewBox="0 0 20 20" fill="none">
                    <path d="M10 10V15" stroke="currentColor" strokeWidth="1.25" strokeLinejoin="round"/>
                    <path d="M13.3331 18.3333H6.66675C6.66675 16.4925 8.15914 15 10 15C11.8409 15 13.3332 16.4924 13.3331 18.3333Z" stroke="currentColor" strokeWidth="1.25" strokeLinejoin="round"/>
                    <path d="M4.16675 1.66675H15.8334V4.16675C15.8334 7.38841 13.2217 10.0001 10.0001 10.0001C6.77842 10.0001 4.16675 7.38841 4.16675 4.16675V1.66675Z" stroke="currentColor" strokeWidth="1.25" strokeLinecap="round" strokeLinejoin="round"/>
                    <path d="M4.16675 4.16675H1.66675C1.66675 6.66675 2.50008 8.33341 3.75008 9.16675" stroke="currentColor" strokeWidth="1.25" strokeLinecap="round" strokeLinejoin="round"/>
                    <path d="M15.8333 4.16675H18.3333C18.3333 6.66675 17.4999 8.33341 16.2499 9.16675" stroke="currentColor" strokeWidth="1.25" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                </span>
                <span className={styles.metricLabel}>Total Revenue</span>
                <div className={styles.metricValue}>{instructorMetrics.revenue}</div>
              </div>
            </div>
          </div>

          {/* Recent Enrollments */}
          <div className={styles.enrollmentsSection}>
            <h2 className={styles.sectionTitle}>Recent Enrollments</h2>
            <p className={styles.sectionSub}>Join to start learning the latest trends and essential</p>

            <div className={styles.enrollmentList}>
              {instructorEnrollments.map(enr => (
                <div key={enr.id} className={styles.enrollmentItem}>
                  <div className={styles.enrollmentIcon}>
                    <svg width="28" height="28" viewBox="0 0 28 28" fill="none">
                      <path d="M22.1557 22.1668H22.1668M22.1557 22.1668C21.4293 22.8872 20.1127 22.7078 19.1894 22.7078C18.0561 22.7078 17.5103 22.9295 16.7015 23.7383C16.0128 24.4271 15.0895 25.6668 14.0002 25.6668C12.9108 25.6668 11.9875 24.4271 11.2988 23.7383C10.49 22.9295 9.94424 22.7078 8.8109 22.7078C7.88762 22.7078 6.57104 22.8872 5.84457 22.1668C5.11227 21.4407 5.29249 20.1186 5.29249 19.1894C5.29249 18.0151 5.03568 17.4752 4.19944 16.6389C2.95549 15.395 2.33352 14.773 2.3335 14.0002C2.33351 13.2272 2.95547 12.6053 4.1994 11.3614C4.9459 10.6149 5.29249 9.87516 5.29249 8.8109C5.29249 7.88759 5.11307 6.57099 5.8335 5.84451C6.55966 5.11224 7.8817 5.29247 8.81092 5.29247C9.87515 5.29247 10.6149 4.9459 11.3613 4.19943C12.6053 2.95547 13.2272 2.3335 14.0002 2.3335C14.7731 2.3335 15.395 2.95547 16.6389 4.19943C17.3852 4.94574 18.1249 5.29247 19.1894 5.29247C20.1127 5.29247 21.4294 5.11304 22.1559 5.8335C22.8881 6.55966 22.7078 7.88168 22.7078 8.8109C22.7078 9.98517 22.9647 10.5251 23.8009 11.3614C25.0449 12.6053 25.6668 13.2272 25.6668 14.0002C25.6668 14.773 25.0449 15.395 23.8009 16.6389C22.9646 17.4752 22.7078 18.0151 22.7078 19.1894C22.7078 20.1186 22.8881 21.4407 22.1557 22.1668Z" stroke="#60A500" strokeWidth="1.75"/>
                      <path d="M10.5 15.0419L12.6 16.9168L17.5 11.0835" stroke="#60A500" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round"/>
                    </svg>
                  </div>
                  <div className={styles.enrollmentContent}>
                    <div className={styles.enrollmentTitleRow}>
                      <div className={styles.enrollmentTitle}>{enr.courseTitle}</div>
                      <svg width="5" height="9" viewBox="0 0 5 9" fill="none" style={{ flexShrink: 0 }}>
                        <path d="M0.5 0.5L4.5 4.5L0.5 8.5" stroke="#979797" strokeWidth="0.75" strokeLinecap="round" strokeLinejoin="round"/>
                      </svg>
                    </div>
                    <div className={styles.enrollmentMetaRow}>
                      <span className={styles.enrollmentId}>{enr.courseId}</span>
                      <span className={styles.enrollmentDate}>{enr.date}</span>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Right: Quick Actions */}
        <div className={styles.rail}>
          <div className={styles.quickActions}>
            <h3 className={styles.railTitle}>Quick Actions</h3>
            <div className={styles.actionsGrid}>
              <button type="button" className={styles.actionBtn}>
                <svg width="12" height="12" viewBox="0 0 12 12" fill="none">
                  <path d="M8.5 4.25C8.5 2.86929 7.3807 1.75 6 1.75C4.61929 1.75 3.5 2.86929 3.5 4.25C3.5 5.6307 4.61929 6.75 6 6.75C7.3807 6.75 8.5 5.6307 8.5 4.25Z" stroke="#414141" strokeWidth="0.75" strokeLinecap="round" strokeLinejoin="round"/>
                  <path d="M9.5 10.25C9.5 8.317 7.933 6.75 6 6.75C4.06701 6.75 2.5 8.317 2.5 10.25" stroke="#414141" strokeWidth="0.75" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
                <span>View My Students</span>
              </button>
              <button type="button" className={styles.actionBtn}>
                <svg width="12" height="12" viewBox="0 0 12 12" fill="none">
                  <path d="M3.5 8.5V6.5M6 8.5V3.5M8.5 8.5V5.5" stroke="#414141" strokeWidth="0.75" strokeLinecap="round" strokeLinejoin="round"/>
                  <path d="M10.75 2.25V9.75C10.75 10.3023 10.3023 10.75 9.75 10.75H2.25C1.69771 10.75 1.25 10.3023 1.25 9.75V2.25C1.25 1.69771 1.69771 1.25 2.25 1.25H9.75C10.3023 1.25 10.75 1.69771 10.75 2.25Z" stroke="#414141" strokeWidth="0.75" strokeLinejoin="round"/>
                </svg>
                <span>View Analytics</span>
              </button>
              <button type="button" className={styles.actionBtn}>
                <svg width="12" height="12" viewBox="0 0 12 12" fill="none">
                  <path d="M5.49999 11H2C1.44771 11 0.999995 10.5523 1 10L1.00007 1.99999C1.00007 1.44771 1.44779 1 2.00007 1H8.99999C9.55229 1 9.99999 1.44771 9.99999 2V3.25" stroke="#414141" strokeWidth="0.75" strokeLinecap="round" strokeLinejoin="round"/>
                  <path d="M4 4H7.5M4 6.5H5.5" stroke="#414141" strokeWidth="0.75" strokeLinecap="round"/>
                  <path d="M8.25 8.18635L7.5 11L9.25 10L11 11L10.25 8.18635M11 6.75C11 7.7165 10.2165 8.5 9.25 8.5C8.2835 8.5 7.5 7.7165 7.5 6.75C7.5 5.7835 8.2835 5 9.25 5C10.2165 5 11 5.7835 11 6.75Z" stroke="#414141" strokeWidth="0.75" strokeLinejoin="round"/>
                </svg>
                <span>Issue Certificate</span>
              </button>
              <button type="button" className={styles.actionBtn}>
                <svg width="12" height="12" viewBox="0 0 12 12" fill="none">
                  <path d="M7.25 3.75C7.25 2.36929 6.1307 1.25 4.75 1.25C3.36929 1.25 2.25 2.36929 2.25 3.75C2.25 5.1307 3.36929 6.25 4.75 6.25C6.1307 6.25 7.25 5.1307 7.25 3.75Z" stroke="#414141" strokeWidth="0.75" strokeLinecap="round" strokeLinejoin="round"/>
                  <path d="M1.25 9.75C1.25 7.817 2.81701 6.25 4.75 6.25C5.2868 6.25 5.79535 6.37085 6.25 6.5868" stroke="#414141" strokeWidth="0.75" strokeLinecap="round" strokeLinejoin="round"/>
                  <path d="M9 10C9.46465 10 9.8701 9.7465 10.0855 9.3702M9 10C8.53535 10 8.1299 9.7465 7.9145 9.3702M9 10V10.75M10.0855 9.3702L10.75 9.7499M10.0855 9.3702C10.1902 9.18745 10.25 8.9757 10.25 8.75C10.25 8.52425 10.1902 8.31245 10.0855 8.12965M7.9145 9.3702L7.25 9.7499M7.9145 9.3702C7.8098 9.18745 7.75 8.9757 7.75 8.75C7.75 8.52425 7.80985 8.31245 7.91455 8.12965M9 7.5C9.4646 7.5 9.87 7.75345 10.0855 8.12965M9 7.5C8.5354 7.5 8.13 7.75345 7.91455 8.12965M9 7.5V6.75M10.0855 8.12965L10.75 7.7499M7.91455 8.12965L7.25 7.7499" stroke="#414141" strokeWidth="0.75" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
                <span>Message Students</span>
              </button>
            </div>
            <button type="button" className={styles.createBtn} onClick={() => navigate('/instructor/courses/new')}>
              <svg width="12" height="12" viewBox="0 0 12 12" fill="none">
                <path d="M6 2V10M10 6H2" stroke="white" strokeWidth="0.75" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
              <span>Create course</span>
            </button>
          </div>
        </div>
      </div>
    </AppShell>
  );
}
