import type { User } from '../types/user';

export const users: User[] = [
  {
    id: 'student-1',
    name: 'Pubudu Chandima',
    email: 'student@learnova.app',
    role: 'student',
    avatar: 'https://api.dicebear.com/9.x/adventurer/svg?seed=Pubudu',
    subtitle: 'Student',
  },
  {
    id: 'instructor-1',
    name: 'Alexander Davon',
    email: 'instructor@learnova.app',
    role: 'instructor',
    avatar: 'https://api.dicebear.com/9.x/adventurer/svg?seed=Alexander',
    subtitle: 'Instructor',
  },
];
