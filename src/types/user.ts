import type { Role } from './app';

export interface User {
  id: string;
  name: string;
  email: string;
  role: Role;
  avatar: string;
  subtitle: string;
}
