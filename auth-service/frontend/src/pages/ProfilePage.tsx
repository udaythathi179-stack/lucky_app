import { useState } from 'react';
import { useAuth } from '../auth/AuthContext';
import { BrandMark } from '../components/BrandMark';

function formatDate(value?: string | null): string {
  if (!value) {
    return 'Not available';
  }
  const date = new Date(value);
  if (Number.isNaN(date.getTime())) {
    return 'Not available';
  }
  return new Intl.DateTimeFormat(undefined, {
    dateStyle: 'medium',
    timeStyle: 'short',
  }).format(date);
}

function initials(name: string): string {
  return name
    .split(/\s+/)
    .filter(Boolean)
    .slice(0, 2)
    .map((part) => part.charAt(0).toUpperCase())
    .join('');
}

export function ProfilePage() {
  const { user, logout, busy, refreshSession } = useAuth();
  const [imageFailed, setImageFailed] = useState(false);
  const [refreshing, setRefreshing] = useState(false);
  const [refreshMessage, setRefreshMessage] = useState<string | null>(null);

  if (!user) {
    return null;
  }

  const handleLogout = async () => {
    await logout();
  };

  const handleRefresh = async () => {
    setRefreshing(true);
    setRefreshMessage(null);
    const refreshed = await refreshSession();
    setRefreshing(false);
    setRefreshMessage(
      refreshed
        ? 'Secure session refreshed successfully.'
        : 'Session could not be refreshed. Please sign in again.',
    );
  };

  return (
    <div className="profile-shell">
      <header className="profile-topbar">
        <div className="brand-lockup">
          <BrandMark size={38} />
          <div>
            <span className="brand-name">TUNEUS</span>
            <span className="brand-sub">Account Center</span>
          </div>
        </div>
        <div className="profile-topbar-actions">
          <span className="session-pill">
            <span className="status-dot" aria-hidden="true" />
            Secure session
          </span>
          <button type="button" className="ghost-button" onClick={handleLogout} disabled={busy}>
            {busy ? 'Signing out...' : 'Sign out'}
          </button>
        </div>
      </header>

      <main className="profile-main">
        <section className="profile-card">
          <div className="profile-identity">
            <div className="avatar-frame">
              {user.pictureUrl && !imageFailed ? (
                <img
                  src={user.pictureUrl}
                  alt={`${user.name} profile`}
                  referrerPolicy="no-referrer"
                  onError={() => setImageFailed(true)}
                />
              ) : (
                <span className="avatar-initials">{initials(user.name)}</span>
              )}
            </div>

            <div className="profile-heading">
              <span className={`provider-badge ${user.provider}`}>
                {user.provider === 'google' ? 'Google verified account' : 'Email account'}
              </span>
              <h1>{user.name}</h1>
              <p className="profile-email">{user.email}</p>
            </div>
          </div>

          <div className="profile-grid">
            <div>
              <span>Sign-in method</span>
              <strong>{user.provider === 'google' ? 'Google Identity Services' : 'Email and password'}</strong>
            </div>
            <div>
              <span>Account created</span>
              <strong>{formatDate(user.createdAt)}</strong>
            </div>
            <div>
              <span>Last sign in</span>
              <strong>{formatDate(user.lastLoginAt)}</strong>
            </div>
            <div>
              <span>Account ID</span>
              <strong className="mono">{user.id}</strong>
            </div>
          </div>

          <div className="profile-actions">
            <button
              type="button"
              className="secondary-button"
              onClick={handleRefresh}
              disabled={refreshing}
            >
              {refreshing ? 'Refreshing...' : 'Refresh secure session'}
            </button>
            <button
              type="button"
              className="danger-button"
              onClick={handleLogout}
              disabled={busy}
            >
              {busy ? 'Signing out...' : 'Sign out of this device'}
            </button>
          </div>

          {refreshMessage && (
            <p className="refresh-message" role="status">
              {refreshMessage}
            </p>
          )}
        </section>

        <section className="security-card">
          <h2>Session security</h2>
          <ul className="security-details">
            <li>
              <span>Access token</span>
              <p>Short-lived JWT signed by the backend and kept in memory only.</p>
            </li>
            <li>
              <span>Refresh token</span>
              <p>Rotating token stored in an HttpOnly, SameSite cookie that JavaScript cannot read.</p>
            </li>
            <li>
              <span>Google verification</span>
              <p>
                ID token signature, issuer, audience, expiration, and verified email are checked by
                the backend before an account is created or signed in.
              </p>
            </li>
          </ul>
        </section>
      </main>
    </div>
  );
}
