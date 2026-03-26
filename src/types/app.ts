export type Role = 'student' | 'instructor';

export interface AuthSession {
  email: string;
  role: Role;
  name: string;
  avatar: string;
}
