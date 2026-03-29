export interface EnrollmentEntry {
  id: string;
  courseTitle: string;
  courseId: string;
  date: string;
}

export const instructorEnrollments: EnrollmentEntry[] = [
  { id: 'enr-1', courseTitle: "Beginner's Guide to Become a Professional Front-End Developer", courseId: '#1234422', date: '12/01/2026' },
  { id: 'enr-2', courseTitle: 'UI/UX Fundamentals', courseId: '#1234422', date: '12/01/2026' },
  { id: 'enr-3', courseTitle: 'UI/UX Fundamentals', courseId: '#1234422', date: '12/01/2026' },
];

export const instructorMetrics = {
  students: 324,
  courses: 83,
  revenue: '$8,450.25',
  activeUsers: 1785,
};
