import type { ScheduleEntry } from '../types/course';

export const schedule: ScheduleEntry[] = [
  { id: 'sched-0-1', dayIndex: 0, time: '09:00 AM', title: 'Front End Architecture', type: 'Lecture' },
  { id: 'sched-0-2', dayIndex: 0, time: '11:30 AM', title: 'UI Component Design', type: 'Workshop' },
  { id: 'sched-0-3', dayIndex: 0, time: '02:00 PM', title: 'JavaScript Deep Dive', type: 'Lecture' },
  { id: 'sched-0-4', dayIndex: 0, time: '04:00 PM', title: 'Code Review Session', type: 'Lab' },

  { id: 'sched-1-1', dayIndex: 1, time: '10:00 AM', title: 'React Hooks & Patterns', type: 'Lecture' },
  { id: 'sched-1-2', dayIndex: 1, time: '01:00 PM', title: 'TypeScript Fundamentals', type: 'Workshop' },
  { id: 'sched-1-3', dayIndex: 1, time: '03:30 PM', title: 'API Integration', type: 'Lab' },

  { id: 'sched-2-1', dayIndex: 2, time: '09:00 AM', title: 'CSS Grid & Flexbox', type: 'Lecture' },
  { id: 'sched-2-2', dayIndex: 2, time: '11:00 AM', title: 'Accessibility Best Practices', type: 'Workshop' },
  { id: 'sched-2-3', dayIndex: 2, time: '02:30 PM', title: 'Performance Optimization', type: 'Lecture' },
  { id: 'sched-2-4', dayIndex: 2, time: '04:30 PM', title: 'Project Q&A', type: 'Lab' },

  { id: 'sched-3-1', dayIndex: 3, time: '10:30 AM', title: 'Database Design Principles', type: 'Lecture' },
  { id: 'sched-3-2', dayIndex: 3, time: '01:30 PM', title: 'UX Research Methods', type: 'Workshop' },

  { id: 'sched-4-1', dayIndex: 4, time: '09:00 AM', title: 'Capstone Project Work', type: 'Lab' },
  { id: 'sched-4-2', dayIndex: 4, time: '03:00 PM', title: 'Weekly Wrap-up Review', type: 'Lecture' },

  { id: 'sched-5-1', dayIndex: 5, time: '11:00 AM', title: 'Open Office Hours', type: 'Lab' },
];
