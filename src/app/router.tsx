import { createBrowserRouter, Navigate, Outlet } from 'react-router-dom';
import { getSession } from '../features/auth/authStorage';
import type { Role } from '../types/app';

/* Page imports */
import { CreateAccountPage } from '../pages/auth/CreateAccountPage';
import { SignInPage } from '../pages/auth/SignInPage';
import { StudentDashboardPage } from '../pages/student/StudentDashboardPage';
import { CoursesPage } from '../pages/student/CoursesPage';
import { CourseViewPage } from '../pages/student/CourseViewPage';
import { InstructorDashboardPage } from '../pages/instructor/InstructorDashboardPage';
import { CreateCoursePage } from '../pages/instructor/CreateCoursePage';

function RoleGuard({ allowedRole }: { allowedRole: Role }) {
  const session = getSession();
  if (!session) return <Navigate to="/sign-in" replace />;
  if (session.role !== allowedRole) {
    return <Navigate to={`/${session.role}/dashboard`} replace />;
  }
  return <Outlet />;
}

function AuthRedirect() {
  const session = getSession();
  if (session) {
    return <Navigate to={`/${session.role}/dashboard`} replace />;
  }
  return <Outlet />;
}

export const router = createBrowserRouter([
  {
    path: '/',
    element: <Navigate to="/sign-in" replace />,
  },
  {
    element: <AuthRedirect />,
    children: [
      { path: '/create-account', element: <CreateAccountPage /> },
      { path: '/sign-in', element: <SignInPage /> },
    ],
  },
  {
    element: <RoleGuard allowedRole="student" />,
    children: [
      { path: '/student/dashboard', element: <StudentDashboardPage /> },
      { path: '/student/courses', element: <CoursesPage /> },
      { path: '/student/courses/:courseId', element: <CourseViewPage /> },
    ],
  },
  {
    element: <RoleGuard allowedRole="instructor" />,
    children: [
      { path: '/instructor/dashboard', element: <InstructorDashboardPage /> },
      { path: '/instructor/courses/new', element: <CreateCoursePage /> },
    ],
  },
]);
