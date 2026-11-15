import { useEffect, useState, type FormEvent } from 'react';
import { Link } from 'react-router-dom';
import { useAuth } from '../auth/AuthContext';
import { AuthLayout } from '../components/AuthLayout';
import { GoogleSignInButton } from '../components/GoogleSignInButton';

export function LoginPage() {
  const { login, loginWithGoogle, error, clearError, busy } = useAuth();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [localError, setLocalError] = useState<string | null>(null);

  useEffect(() => {
    clearError();
    return () => clearError();
  }, [clearError]);

  const handleSubmit = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setLocalError(null);
    if (!email.trim() || !password) {
      setLocalError('Enter your email address and password.');
      return;
    }
    try {
      await login(email.trim(), password);
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
      title="Welcome back"
      subtitle="Sign in to continue to your Tuneus account."
      footer={
        <span>
          New to Tuneus? <Link to="/register">Create an account</Link>
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
        <span>or continue with email</span>
      </div>

      <form className="auth-form" onSubmit={handleSubmit} noValidate>
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
            autoComplete="current-password"
            placeholder="Enter your password"
            value={password}
            onChange={(event) => setPassword(event.target.value)}
            disabled={busy}
            required
          />
        </label>

        <button type="submit" className="primary-button" disabled={busy}>
          {busy ? 'Signing in...' : 'Sign in'}
        </button>
      </form>

      <p className="form-note">
        Google sign-in uses the official Google Identity Services account chooser. Your Google
        password is never shared with Tuneus.
      </p>
    </AuthLayout>
  );
}
