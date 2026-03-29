import type { Course } from '../types/course';

const THUMBNAILS = [
  'https://images.unsplash.com/photo-1498050108023-c5249f4df085?w=500&h=400&fit=crop',
  'https://images.unsplash.com/photo-1515879218367-8466d910aaa4?w=500&h=400&fit=crop',
  'https://images.unsplash.com/photo-1516321318423-f06f85e504b3?w=500&h=400&fit=crop',
  'https://images.unsplash.com/photo-1555949963-aa79dcee981c?w=500&h=400&fit=crop',
  'https://images.unsplash.com/photo-1587620962725-abab7fe55159?w=500&h=400&fit=crop',
  'https://images.unsplash.com/photo-1461749280684-dccba630e2f6?w=500&h=400&fit=crop',
];

export const studentCourses: Course[] = [
  {
    id: 'course-1',
    title: "Beginner's Guide to Become a Professional Front-End Developer",
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
    title: "Beginner's Guide to Become a Professional UI/UX Designer",
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
    description: 'Learn CI/CD pipelines, Docker containers, and automated deployment workflows used by top engineering teams.',
    category: 'DevOps',
    thumbnail: THUMBNAILS[2],
    progress: 88,
    instructor: {
      name: 'Sara Mitchell',
      avatar: 'https://api.dicebear.com/9.x/adventurer/svg?seed=Sara',
      role: 'Senior Engineer',
    },
    modules: [],
  },
  {
    id: 'course-7',
    title: "Python for Data Science and Machine Learning",
    description: 'Master Python libraries like NumPy, Pandas and Scikit-learn to build real-world data science projects.',
    category: 'Data Science',
    thumbnail: THUMBNAILS[3],
    progress: 22,
    instructor: {
      name: 'Dr. Anika Patel',
      avatar: 'https://api.dicebear.com/9.x/adventurer/svg?seed=Anika',
      role: 'Data Scientist',
    },
    modules: [
      {
        id: 'mod-5',
        title: 'Python Fundamentals for Data',
        subtitle: 'Module 1',
        lessons: [
          { id: 'lesson-17', title: 'Setting Up Python Environment', type: 'video', duration: '6 min', status: 'completed' },
          { id: 'lesson-18', title: 'NumPy Arrays & Operations', type: 'video', duration: '10 min', status: 'current' },
          { id: 'lesson-19', title: 'Pandas DataFrames', type: 'video', duration: '12 min', status: 'pending' },
        ],
      },
    ],
  },
  {
    id: 'course-8',
    title: "Figma Advanced: Design Systems & Prototyping",
    description: 'Build scalable design systems in Figma with components, variables, and auto-layout for production-ready workflows.',
    category: 'UI/UX Design',
    thumbnail: THUMBNAILS[4],
    progress: 55,
    instructor: {
      name: 'Lena Voss',
      avatar: 'https://api.dicebear.com/9.x/adventurer/svg?seed=Lena',
      role: 'Lead Designer',
    },
    modules: [],
  },
  {
    id: 'course-9',
    title: "Full-Stack Development with Next.js & PostgreSQL",
    description: 'Build complete full-stack web applications using Next.js App Router, server actions, and a PostgreSQL database.',
    category: 'Full Stack',
    thumbnail: THUMBNAILS[5],
    progress: 8,
    instructor: {
      name: 'James Okafor',
      avatar: 'https://api.dicebear.com/9.x/adventurer/svg?seed=James',
      role: 'Full-Stack Lead',
    },
    modules: [],
  },
];
