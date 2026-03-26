import type { Course } from '../types/course';

const THUMBNAILS = [
  'https://images.unsplash.com/photo-1498050108023-c5249f4df085?w=600&h=400&fit=crop',
  'https://images.unsplash.com/photo-1515879218367-8466d910aaa4?w=600&h=400&fit=crop',
  'https://images.unsplash.com/photo-1516321318423-f06f85e504b3?w=600&h=400&fit=crop',
];

export const studentCourses: Course[] = [
  {
    id: 'course-1',
    title: "Beginner's Guide to Becoming a Professional Frontend Developer",
    description: 'Join to start learning the latest trends and steps to learn frontend development',
    category: 'Frontend',
    thumbnail: THUMBNAILS[0],
    progress: 45,
    instructor: {
      name: 'Martin Fransesco',
      avatar: 'https://api.dicebear.com/9.x/adventurer/svg?seed=Martin',
      role: 'Mentor',
    },
    modules: [
      {
        id: 'mod-1',
        title: 'React Fundamentals to become a front end god',
        subtitle: 'Module 1',
        lessons: [
          { id: 'lesson-1', title: 'Get Started', type: 'video', duration: '5 min', status: 'completed' },
          { id: 'lesson-2', title: 'Setting Up Your Environment', type: 'video', duration: '8 min', status: 'completed' },
          { id: 'lesson-3', title: 'JSX and Components', type: 'video', duration: '12 min', status: 'completed' },
        ],
      },
      {
        id: 'mod-2',
        title: 'Next.Js for a better future',
        subtitle: 'Module 2',
        lessons: [
          { id: 'lesson-4', title: 'Get Started', type: 'video', duration: '5 min', status: 'completed' },
          { id: 'lesson-5', title: 'Welcome to module 2', type: 'video', duration: '5 min', status: 'current' },
          { id: 'lesson-6', title: 'Server Components', type: 'video', duration: '5 min', status: 'pending' },
          { id: 'lesson-7', title: 'Routing in Next.js', type: 'video', duration: '5 min', status: 'pending' },
          { id: 'lesson-8', title: 'Data Fetching Patterns', type: 'video', duration: '5 min', status: 'pending' },
          { id: 'lesson-9', title: 'Deployment Strategies', type: 'video', duration: '5 min', status: 'pending' },
          { id: 'lesson-10', title: 'Project Architecture', type: 'video', duration: '5 min', status: 'pending' },
        ],
      },
    ],
  },
  {
    id: 'course-2',
    title: "Beginner's Guide to Becoming a Professional UI/UX Designer",
    description: 'Join to start learning the latest trends and steps to learn frontend development',
    category: 'UI/UX Design',
    thumbnail: THUMBNAILS[1],
    progress: 30,
    instructor: {
      name: 'Martin Fransesco',
      avatar: 'https://api.dicebear.com/9.x/adventurer/svg?seed=Martin',
      role: 'Mentor',
    },
    modules: [
      {
        id: 'mod-3',
        title: 'Design Thinking Foundations',
        subtitle: 'Module 1',
        lessons: [
          { id: 'lesson-11', title: 'Introduction to UX', type: 'video', duration: '6 min', status: 'completed' },
          { id: 'lesson-12', title: 'User Research Methods', type: 'video', duration: '10 min', status: 'current' },
          { id: 'lesson-13', title: 'Wireframing Basics', type: 'video', duration: '8 min', status: 'pending' },
        ],
      },
    ],
  },
  {
    id: 'course-3',
    title: "Mastering TypeScript for Modern Web Applications",
    description: 'Join to start learning the latest trends and steps to learn frontend development',
    category: 'Frontend',
    thumbnail: THUMBNAILS[2],
    progress: 72,
    instructor: {
      name: 'Martin Fransesco',
      avatar: 'https://api.dicebear.com/9.x/adventurer/svg?seed=Martin',
      role: 'Mentor',
    },
    modules: [
      {
        id: 'mod-4',
        title: 'TypeScript Essentials',
        subtitle: 'Module 1',
        lessons: [
          { id: 'lesson-14', title: 'Types and Interfaces', type: 'video', duration: '7 min', status: 'completed' },
          { id: 'lesson-15', title: 'Generics Deep Dive', type: 'video', duration: '9 min', status: 'completed' },
          { id: 'lesson-16', title: 'Advanced Patterns', type: 'video', duration: '11 min', status: 'current' },
        ],
      },
    ],
  },
  {
    id: 'course-4',
    title: "Building Scalable REST APIs with Node.js",
    description: 'Join to start learning the latest trends and steps to learn frontend development',
    category: 'Frontend',
    thumbnail: THUMBNAILS[0],
    progress: 15,
    instructor: {
      name: 'Martin Fransesco',
      avatar: 'https://api.dicebear.com/9.x/adventurer/svg?seed=Martin',
      role: 'Mentor',
    },
    modules: [],
  },
  {
    id: 'course-5',
    title: "CSS Grid and Flexbox Masterclass",
    description: 'Join to start learning the latest trends and steps to learn frontend development',
    category: 'Frontend',
    thumbnail: THUMBNAILS[1],
    progress: 60,
    instructor: {
      name: 'Martin Fransesco',
      avatar: 'https://api.dicebear.com/9.x/adventurer/svg?seed=Martin',
      role: 'Mentor',
    },
    modules: [],
  },
  {
    id: 'course-6',
    title: "Modern DevOps Practices for Frontend Teams",
    description: 'Join to start learning the latest trends and steps to learn frontend development',
    category: 'Frontend',
    thumbnail: THUMBNAILS[2],
    progress: 88,
    instructor: {
      name: 'Martin Fransesco',
      avatar: 'https://api.dicebear.com/9.x/adventurer/svg?seed=Martin',
      role: 'Mentor',
    },
    modules: [],
  },
];
