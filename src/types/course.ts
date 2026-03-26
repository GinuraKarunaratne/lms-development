export type LessonStatus = 'completed' | 'current' | 'pending';
export type ContentType = 'video' | 'quiz' | 'document' | 'reading';

export interface Lesson {
  id: string;
  title: string;
  type: ContentType;
  duration: string;
  status: LessonStatus;
}

export interface CourseModule {
  id: string;
  title: string;
  subtitle: string;
  lessons: Lesson[];
}

export interface Course {
  id: string;
  title: string;
  description: string;
  category: string;
  thumbnail: string;
  progress: number;
  instructor: {
    name: string;
    avatar: string;
    role: string;
  };
  modules: CourseModule[];
}

export interface ScheduleEntry {
  id: string;
  dayIndex: number;
  time: string;
  title: string;
  type: string;
}

export interface CourseSection {
  id: string;
  title: string;
  description?: string;
  items: CourseContentItem[];
}

export interface CourseContentItem {
  id: string;
  type: ContentType;
  title: string;
}
