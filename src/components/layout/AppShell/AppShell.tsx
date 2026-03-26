import { useState, type ReactNode } from 'react';
import { Sidebar } from '../Sidebar/Sidebar';
import { Topbar } from '../Topbar/Topbar';
import type { Role } from '../../../types/app';
import styles from './AppShell.module.css';

interface AppShellProps {
  role: Role;
  userName: string;
  userRole: string;
  userAvatar: string;
  children: ReactNode;
}

export function AppShell({ role, userName, userRole, userAvatar, children }: AppShellProps) {
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const [sidebarCollapsed, setSidebarCollapsed] = useState(false);

  const sidebarW = sidebarCollapsed ? 'var(--sidebar-collapsed-width)' : 'var(--sidebar-width)';

  return (
    <div
      className={styles.shell}
      style={{ '--sidebar-w': sidebarW } as React.CSSProperties}
    >
      <Sidebar
        role={role}
        isOpen={sidebarOpen}
        onClose={() => setSidebarOpen(false)}
        collapsed={sidebarCollapsed}
        onCollapsedChange={setSidebarCollapsed}
      />
      <Topbar
        userName={userName}
        userRole={userRole}
        userAvatar={userAvatar}
        onMenuToggle={() => setSidebarOpen((prev) => !prev)}
      />
      <main className={styles.main}>
        <div className={styles.content}>
          {children}
        </div>
      </main>
    </div>
  );
}
