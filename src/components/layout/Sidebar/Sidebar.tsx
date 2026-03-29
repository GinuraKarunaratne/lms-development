import { useState } from 'react';
import type { ReactNode } from 'react';
import { NavLink, useLocation } from 'react-router-dom';
import { useAuth } from '../../../features/auth/useAuth';
import type { Role } from '../../../types/app';
import styles from './Sidebar.module.css';

interface SidebarProps {
  role: Role;
  isOpen: boolean;
  onClose: () => void;
  collapsed: boolean;
  onCollapsedChange: (collapsed: boolean) => void;
}

interface NavItem {
  label: string;
  path: string;
  icon: string;
  children?: { label: string; path: string; icon: string }[];
}

const studentNav: NavItem[] = [
  { label: 'Dashboard', path: '/student/dashboard', icon: 'dashboard' },
  { label: 'Courses', path: '/student/courses', icon: 'courses' },
  { label: 'Classrooms', path: '#', icon: 'classrooms' },
  { label: 'Competency', path: '#', icon: 'competency' },
  { label: 'Achievements', path: '#', icon: 'achievements' },
  { label: 'Community', path: '#', icon: 'community' },
];

const instructorNav: NavItem[] = [
  { label: 'Dashboard', path: '/instructor/dashboard', icon: 'dashboard' },
  {
    label: 'Data',
    path: '#',
    icon: 'data',
    children: [
      { label: 'Users', path: '#', icon: 'users' },
      { label: 'Invoices', path: '#', icon: 'invoices' },
    ],
  },
  { label: 'Content', path: '#', icon: 'content' },
  { label: 'Customization', path: '#', icon: 'customization' },
  { label: 'Analytics', path: '#', icon: 'analytics' },
];

function NavIcon({ name }: { name: string }) {
  const icons: Record<string, ReactNode> = {
    dashboard: (
      <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round">
        <rect x="3" y="3" width="7" height="7" rx="1" /><rect x="14" y="3" width="7" height="7" rx="1" /><rect x="3" y="14" width="7" height="7" rx="1" /><rect x="14" y="14" width="7" height="7" rx="1" />
      </svg>
    ),
    courses: (
      <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round">
        <path d="M2 3h6a4 4 0 0 1 4 4v14a3 3 0 0 0-3-3H2z" /><path d="M22 3h-6a4 4 0 0 0-4 4v14a3 3 0 0 1 3-3h7z" />
      </svg>
    ),
    classrooms: (
      <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round">
        <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2" /><circle cx="9" cy="7" r="4" /><path d="M23 21v-2a4 4 0 0 0-3-3.87" /><path d="M16 3.13a4 4 0 0 1 0 7.75" />
      </svg>
    ),
    competency: (
      <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round">
        <polyline points="22 12 18 12 15 21 9 3 6 12 2 12" />
      </svg>
    ),
    achievements: (
      <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round">
        <circle cx="12" cy="8" r="7" /><polyline points="8.21 13.89 7 23 12 20 17 23 15.79 13.88" />
      </svg>
    ),
    community: (
      <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round">
        <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z" />
      </svg>
    ),
    data: (
      <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round">
        <ellipse cx="12" cy="5" rx="9" ry="3" /><path d="M21 12c0 1.66-4 3-9 3s-9-1.34-9-3" /><path d="M3 5v14c0 1.66 4 3 9 3s9-1.34 9-3V5" />
      </svg>
    ),
    users: (
      <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round">
        <path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2" /><circle cx="12" cy="7" r="4" />
      </svg>
    ),
    invoices: (
      <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round">
        <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z" /><polyline points="14 2 14 8 20 8" /><line x1="16" y1="13" x2="8" y2="13" /><line x1="16" y1="17" x2="8" y2="17" />
      </svg>
    ),
    content: (
      <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round">
        <rect x="2" y="3" width="20" height="14" rx="2" /><line x1="8" y1="21" x2="16" y2="21" /><line x1="12" y1="17" x2="12" y2="21" />
      </svg>
    ),
    customization: (
      <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round">
        <line x1="4" y1="21" x2="4" y2="14" /><line x1="4" y1="10" x2="4" y2="3" /><line x1="12" y1="21" x2="12" y2="12" /><line x1="12" y1="8" x2="12" y2="3" /><line x1="20" y1="21" x2="20" y2="16" /><line x1="20" y1="12" x2="20" y2="3" /><line x1="1" y1="14" x2="7" y2="14" /><line x1="9" y1="8" x2="15" y2="8" /><line x1="17" y1="16" x2="23" y2="16" />
      </svg>
    ),
    analytics: (
      <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round">
        <line x1="18" y1="20" x2="18" y2="10" /><line x1="12" y1="20" x2="12" y2="4" /><line x1="6" y1="20" x2="6" y2="14" />
      </svg>
    ),
    logout: (
      <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round">
        <path d="M9 21H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h4" /><polyline points="16 17 21 12 16 7" /><line x1="21" y1="12" x2="9" y2="12" />
      </svg>
    ),
    chevronLeft: (
      <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <polyline points="15 18 9 12 15 6" />
      </svg>
    ),
    chevronRight: (
      <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <polyline points="9 18 15 12 9 6" />
      </svg>
    ),
    chevronDown: (
      <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <polyline points="6 9 12 15 18 9" />
      </svg>
    ),
  };
  return icons[name] || null;
}

export function Sidebar({ role, isOpen, onClose, collapsed, onCollapsedChange }: SidebarProps) {
  const location = useLocation();
  const { signOut } = useAuth();
  const navItems = role === 'student' ? studentNav : instructorNav;
  const [expandedItems, setExpandedItems] = useState<string[]>(['Data']);

  function toggleExpand(label: string) {
    setExpandedItems(prev =>
      prev.includes(label) ? prev.filter(l => l !== label) : [...prev, label]
    );
  }

  return (
    <>
      {isOpen && <div className={styles.overlay} onClick={onClose} />}
      <aside className={`${styles.sidebar} ${isOpen ? styles.open : ''} ${collapsed ? styles.collapsed : ''}`}>
        <div className={styles.brand}>
          <div className={styles.brandIcon}>L</div>
          {!collapsed && (
            <div className={styles.brandText}>
              <span className={styles.brandName}>Learnova</span>
              <span className={styles.brandSub}>Global education</span>
            </div>
          )}
        </div>

        <nav className={styles.nav}>
          {navItems.map((item) => {
            const isExpanded = expandedItems.includes(item.label);
            const hasChildren = !!item.children;

            if (item.path === '#') {
              return (
                <div key={item.label}>
                  <button
                    type="button"
                    className={`${styles.navItem} ${
                      item.children?.some((c) => location.pathname.startsWith(c.path)) ? styles.active : ''
                    }`}
                    onClick={() => hasChildren && toggleExpand(item.label)}
                    title={collapsed ? item.label : undefined}
                  >
                    <span className={styles.navIcon}>
                      <NavIcon name={item.icon} />
                    </span>
                    {!collapsed && <span className={styles.navLabel}>{item.label}</span>}
                    {!collapsed && hasChildren && (
                      <span className={`${styles.chevron} ${isExpanded ? styles.chevronOpen : ''}`}>
                        <NavIcon name="chevronDown" />
                      </span>
                    )}
                  </button>
                  {hasChildren && isExpanded && !collapsed && (
                    <div className={styles.subNav}>
                      {item.children!.map((child) => (
                        <div key={child.label} className={styles.subItem}>
                          <span className={styles.navIcon}>
                            <NavIcon name={child.icon} />
                          </span>
                          <span>{child.label}</span>
                        </div>
                      ))}
                    </div>
                  )}
                </div>
              );
            }

            return (
              <NavLink
                key={item.label}
                to={item.path}
                className={({ isActive }) =>
                  `${styles.navItem} ${isActive ? styles.active : ''}`
                }
                onClick={onClose}
                title={collapsed ? item.label : undefined}
              >
                <span className={styles.navIcon}>
                  <NavIcon name={item.icon} />
                </span>
                {!collapsed && <span className={styles.navLabel}>{item.label}</span>}
              </NavLink>
            );
          })}
        </nav>

        <div className={styles.footer}>
          <button
            type="button"
            className={styles.logoutBtn}
            onClick={signOut}
            title={collapsed ? 'Logout' : undefined}
          >
            <span className={styles.navIcon}>
              <NavIcon name="logout" />
            </span>
            {!collapsed && <span className={styles.navLabel}>Logout</span>}
          </button>

          <button
            type="button"
            className={styles.collapseBtn}
            onClick={() => onCollapsedChange(!collapsed)}
            aria-label={collapsed ? 'Expand sidebar' : 'Collapse sidebar'}
          >
            {collapsed ? <NavIcon name="chevronRight" /> : <NavIcon name="chevronLeft" />}
          </button>
        </div>
      </aside>
    </>
  );
}
