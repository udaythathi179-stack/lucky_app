import { useEffect, useState, type FormEvent } from 'react';
import { Link } from 'react-router-dom';
import { useAuth } from '../auth/AuthContext';
import { AuthLayout } from '../components/AuthLayout';
import { GoogleSignInButton } from '../components/GoogleSignInButton';

export function RegisterPage() {
  const { register, loginWithGoogle, error, clearError, busy } = useAuth();
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [localError, setLocalError] = useState<string | null>(null);

  useEffect(() => {
    clearError();
    return () => clearError();
  }, [clearError]);

  const handleSubmit = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setLocalError(null);

    if (!name.trim() || !email.trim() || !password) {
      setLocalError('Enter your name, email address, and password.');
      return;
    }
    if (password.length < 8) {
      setLocalError('Password must be at least 8 characters.');
      return;
    }
    if (password !== confirmPassword) {
      setLocalError('Passwords do not match.');
      return;
    }

    try {
      await register(name.trim(), email.trim(), password);
    } catch {
      setLocalError(null);
    }
  };

  const handleGoogle = async (credential: string) => {
    setLocalError(null);
    await loginWithGoogle(credential);
  };

  const visibleError = localError ?? error;

  return (
    <AuthLayout
      title="Create your account"
      subtitle="Register with Google or email to start listening in studio quality."
      footer={
        <span>
          Already have an account? <Link to="/login">Sign in</Link>
        </span>
      }
    >
      {visibleError && (
        <div className="alert error" role="alert">
          {visibleError}
        </div>
      )}

      <GoogleSignInButton onCredential={handleGoogle} disabled={busy} />

      <div className="divider">
        <span>or register with email</span>
      </div>

      <form className="auth-form" onSubmit={handleSubmit} noValidate>
        <label className="field">
          <span>Full name</span>
          <input
            type="text"
            name="name"
            autoComplete="name"
            placeholder="Your name"
            value={name}
            onChange={(event) => setName(event.target.value)}
            disabled={busy}
            maxLength={120}
            required
          />
        </label>

        <label className="field">
          <span>Email address</span>
          <input
            type="email"
            name="email"
            autoComplete="email"
            placeholder="you@example.com"
            value={email}
            onChange={(event) => setEmail(event.target.value)}
            disabled={busy}
            required
          />
        </label>

        <label className="field">
          <span>Password</span>
          <input
            type="password"
            name="password"
            autoComplete="new-password"
            placeholder="At least 8 characters"
            value={password}
            onChange={(event) => setPassword(event.target.value)}
            disabled={busy}
            minLength={8}
            maxLength={72}
            required
          />
        </label>

        <label className="field">
          <span>Confirm password</span>
          <input
            type="password"
            name="confirmPassword"
            autoComplete="new-password"
            placeholder="Repeat your password"
            value={confirmPassword}
            onChange={(event) => setConfirmPassword(event.target.value)}
            disabled={busy}
            maxLength={72}
            required
          />
        </label>

        <button type="submit" className="primary-button" disabled={busy}>
          {busy ? 'Creating account...' : 'Create account'}
        </button>
      </form>

      <p className="form-note">
        Choosing Continue with Google creates your Tuneus account automatically using your verified
        Google name, email address, and profile picture.
      </p>
    </AuthLayout>
  );
}
