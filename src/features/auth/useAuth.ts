import { useMemo, useCallback } from 'react';
import { useNavigate } from 'react-router-dom';
import type { AuthSession } from '../../types/app';
import { getSession, saveSession, clearSession } from './authStorage';
import { matchCredentials } from './credentials';

export function useAuth() {
  const navigate = useNavigate();

  const session: AuthSession | null = useMemo(() => getSession(), []);

  const signIn = useCallback(
    (email: string, password: string): string | null => {
      const result = matchCredentials(email, password);
      if (!result) return 'Invalid email or password';

      const newSession: AuthSession = {
        email: result.user.email,
        role: result.role,
        name: result.user.name,
        avatar: result.user.avatar,
      };

      saveSession(newSession);

      if (result.role === 'student') {
        navigate('/student/dashboard');
      } else {
        navigate('/instructor/dashboard');
      }

      return null;
    },
    [navigate]
  );

  const signOut = useCallback(() => {
    clearSession();
    navigate('/sign-in');
  }, [navigate]);

  return { session, signIn, signOut };
}
