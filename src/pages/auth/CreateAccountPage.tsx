import { useState, type FormEvent } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { AuthSplitLayout } from '../../components/layout/AuthSplitLayout/AuthSplitLayout';
import { SegmentedControl } from '../../components/common/SegmentedControl/SegmentedControl';
import { InputField } from '../../components/common/InputField/InputField';
import { Button } from '../../components/common/Button/Button';
import { Divider } from '../../components/common/Divider/Divider';
import styles from './CreateAccountPage.module.css';

const AUTH_IMAGE = 'https://images.unsplash.com/photo-1503676260728-1c00da094a0b?w=800&h=1200&fit=crop';

export function CreateAccountPage() {
  const navigate = useNavigate();
  const [role, setRole] = useState('student');
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [errors, setErrors] = useState<Record<string, string>>({});

  function validate(): boolean {
    const newErrors: Record<string, string> = {};
    if (!name.trim()) newErrors.name = 'Name is required';
    if (!email.trim()) newErrors.email = 'Email is required';
    else if (!/\S+@\S+\.\S+/.test(email)) newErrors.email = 'Enter a valid email';
    if (!password.trim()) newErrors.password = 'Password is required';
    else if (password.length < 6) newErrors.password = 'Password must be at least 6 characters';
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  }

  function handleSubmit(e: FormEvent) {
    e.preventDefault();
    if (validate()) {
      navigate('/sign-in');
    }
  }

  return (
    <AuthSplitLayout imageUrl={AUTH_IMAGE} imageAlt="Student studying outdoors">
      <div className={styles.page}>
        <h1 className={styles.title}>Create an account</h1>
        <p className={styles.subtitle}>Create an account to continue</p>

        <div className={styles.roleToggle}>
          <SegmentedControl
            segments={[
              { label: 'Student', value: 'student' },
              { label: 'Instructor', value: 'instructor', disabled: true },
            ]}
            value={role}
            onChange={setRole}
          />
        </div>

        <form className={styles.form} onSubmit={handleSubmit} noValidate>
          <InputField
            label="Name"
            placeholder="Enter your name"
            value={name}
            onChange={(e) => setName(e.target.value)}
            error={errors.name}
          />
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

          <Button type="submit" variant="primary" fullWidth>
            Sign up
          </Button>
        </form>

        <Divider label="Or Continue as" />

        <button type="button" className={styles.socialButton}>
          <svg className={styles.socialIcon} viewBox="0 0 24 24">
            <path d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92a5.06 5.06 0 0 1-2.2 3.32v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.1z" fill="#4285F4" />
            <path d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z" fill="#34A853" />
            <path d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z" fill="#FBBC05" />
            <path d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z" fill="#EA4335" />
          </svg>
          Continue with Google
        </button>

        <p className={styles.footer}>
          Already have an account?{' '}
          <Link to="/sign-in" className={styles.link}>Sign in here</Link>
        </p>
      </div>
    </AuthSplitLayout>
  );
}
