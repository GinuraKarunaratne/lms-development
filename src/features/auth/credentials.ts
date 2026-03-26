import type { Role } from '../../types/app';
import { users } from '../../data/users';

interface Credential {
  email: string;
  password: string;
  role: Role;
}

const credentials: Credential[] = [
  { email: 'student@learnova.app', password: 'Student123!', role: 'student' },
  { email: 'instructor@learnova.app', password: 'Instructor123!', role: 'instructor' },
];

export function matchCredentials(email: string, password: string) {
  const match = credentials.find(
    (c) => c.email === email && c.password === password
  );
  if (!match) return null;

  const user = users.find((u) => u.email === match.email);
  if (!user) return null;

  return { role: match.role, user };
}
