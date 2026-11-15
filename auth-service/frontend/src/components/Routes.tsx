import type { ReactNode } from 'react';
import { Navigate } from 'react-router-dom';
import { useAuth } from '../auth/AuthContext';
import { BrandMark } from './BrandMark';

export function FullPageLoader({ label }: { label: string }) {
  return (
    <div className="full-page-loader" role="status" aria-live="polite">
      <BrandMark size={56} />
      <span className="spinner large" aria-hidden="true" />
      <p>{label}</p>
    </div>
  );
}

export function ProtectedRoute({ children }: { children: ReactNode }) {
  const { user, initializing } = useAuth();

  if (initializing) {
    return <FullPageLoader label="Restoring your secure session..." />;
  }
  if (!user) {
    return <Navigate to="/login" replace />;
  }
  return <>{children}</>;
}

export function PublicOnlyRoute({ children }: { children: ReactNode }) {
  const { user, initializing } = useAuth();

  if (initializing) {
    return <FullPageLoader label="Checking your session..." />;
  }
  if (user) {
    return <Navigate to="/home" replace />;
  }
  return <>{children}</>;
}
