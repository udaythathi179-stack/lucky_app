import { Link } from 'react-router-dom';
import { useAuth } from '../auth/AuthContext';
import { BrandMark } from '../components/BrandMark';

function initials(name: string): string {
  return name
    .split(/\s+/)
    .filter(Boolean)
    .slice(0, 2)
    .map((part) => part.charAt(0).toUpperCase())
    .join('');
}

export function TuneusHomePage() {
  const { user, logout, busy } = useAuth();

  if (!user) {
    return null;
  }

  const firstName = user.name.trim().split(/\s+/)[0] || 'listener';

  const handleLogout = async () => {
    await logout();
  };

  return (
    <div className="tuneus-app-shell">
      <header className="tuneus-app-topbar">
        <div className="brand-lockup">
          <BrandMark size={38} />
          <div>
            <span className="brand-name">TUNEUS</span>
            <span className="brand-sub">Music</span>
          </div>
        </div>

        <nav className="tuneus-app-nav" aria-label="Primary">
          <Link to="/home" className="active" aria-current="page">
            Home
          </Link>
          <Link to="/profile">Account</Link>
        </nav>

        <div className="tuneus-app-user">
          <Link to="/profile" className="tuneus-avatar-link" title="Account details">
            {user.pictureUrl ? (
              <img src={user.pictureUrl} alt={`${user.name} profile`} referrerPolicy="no-referrer" />
            ) : (
              <span className="tuneus-avatar-initials">{initials(user.name)}</span>
            )}
          </Link>
          <button type="button" className="ghost-button" onClick={handleLogout} disabled={busy}>
            {busy ? 'Signing out...' : 'Sign out'}
          </button>
        </div>
      </header>

      <main className="tuneus-home-main">
        <section className="tuneus-home-welcome">
          <span className="eyebrow">WELCOME TO TUNEUS</span>
          <h1>Hi {firstName}. Your music space is ready.</h1>
          <p>
            You are signed in securely. This is your neutral home page, ready for your music.
          </p>
          <div className="tuneus-home-actions">
            <Link to="/profile" className="secondary-button">
              Account details
            </Link>
            <button type="button" className="danger-button" onClick={handleLogout} disabled={busy}>
              {busy ? 'Signing out...' : 'Sign out'}
            </button>
          </div>
        </section>

        <section className="tuneus-neutral-panel" aria-label="Music workspace">
          <span className="tuneus-neutral-icon" aria-hidden="true">
            <svg viewBox="0 0 24 24" width="34" height="34" fill="none">
              <path
                d="M9 18V5l11-2v13M9 18a3 3 0 1 1-3-3 3 3 0 0 1 3 3Zm11-2a3 3 0 1 1-3-3 3 3 0 0 1 3 3Z"
                stroke="currentColor"
                strokeWidth="1.8"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </span>
          <h2>Nothing playing yet</h2>
          <p>Your Tuneus home is clear and ready.</p>
        </section>
      </main>
    </div>
  );
}
