import { useState, type FormEvent } from 'react';
import { Link } from 'react-router-dom';
import { AuthSplitLayout } from '../../components/layout/AuthSplitLayout/AuthSplitLayout';
import { InputField } from '../../components/common/InputField/InputField';
import { Button } from '../../components/common/Button/Button';
import { Checkbox } from '../../components/common/Checkbox/Checkbox';
import { Divider } from '../../components/common/Divider/Divider';
import { useAuth } from '../../features/auth/useAuth';
import styles from './SignInPage.module.css';

const AUTH_IMAGE = 'https://images.unsplash.com/photo-1503676260728-1c00da094a0b?w=800&h=1200&fit=crop';
const INSTRUCTOR_CREDS = { email: 'instructor@learnova.app', password: 'Instructor123!' };

export function SignInPage() {
  const { signIn } = useAuth();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [remember, setRemember] = useState(false);
  const [errors, setErrors] = useState<Record<string, string>>({});
  const [authError, setAuthError] = useState('');

  function validate(): boolean {
    const newErrors: Record<string, string> = {};
    if (!email.trim()) newErrors.email = 'Email is required';
    if (!password.trim()) newErrors.password = 'Password is required';
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  }

  function handleSubmit(e: FormEvent) {
    e.preventDefault();
    setAuthError('');
    if (!validate()) return;

    const error = signIn(email, password);
    if (error) setAuthError(error);
  }

  function handleInstructorSignIn() {
    setEmail(INSTRUCTOR_CREDS.email);
    setPassword(INSTRUCTOR_CREDS.password);
    setAuthError('');
    setErrors({});
  }

  return (
    <AuthSplitLayout imageUrl={AUTH_IMAGE} imageAlt="Student studying outdoors">
      <div className={styles.page}>
        <h1 className={styles.title}>Welcome back!</h1>
        <p className={styles.subtitle}>Sign in to your account to continue</p>

        <form className={styles.form} onSubmit={handleSubmit} noValidate>
          <InputField
            label="Email"
            type="email"
            placeholder="Enter your email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            error={errors.email}
          />
          <InputField
            label="Password"
            type="password"
            placeholder="Enter your password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            error={errors.password}
          />

          <div className={styles.formRow}>
            <Checkbox
              label="Remember Me"
              checked={remember}
              onChange={setRemember}
            />
            <a href="#" className={styles.forgotLink}>Forget Password?</a>
          </div>

          {authError && <p className={styles.error}>{authError}</p>}

          <Button type="submit" variant="primary" fullWidth>
            Sign in
          </Button>
        </form>

        <Divider label="Or Continue as" />

        <button
          type="button"
          className={styles.instructorButton}
          onClick={handleInstructorSignIn}
        >
          Instructor Sign in
        </button>

        <p className={styles.footer}>
          Don't have an account?{' '}
          <Link to="/create-account" className={styles.link}>Sign up here</Link>
        </p>
      </div>
    </AuthSplitLayout>
  );
}
