import type { ReactNode } from 'react';
import { BrandMark } from './BrandMark';

interface AuthLayoutProps {
  title: string;
  subtitle: string;
  children: ReactNode;
  footer?: ReactNode;
}

export function AuthLayout({ title, subtitle, children, footer }: AuthLayoutProps) {
  return (
    <div className="auth-shell">
      <aside className="auth-brand-panel">
        <div className="brand-lockup">
          <BrandMark size={48} />
          <div>
            <span className="brand-name">TUNEUS</span>
            <span className="brand-sub">Secure Account</span>
          </div>
        </div>

        <div className="brand-copy">
          <span className="eyebrow">STUDIO AUTHENTICATION</span>
          <h1>Your music. Your account. Protected.</h1>
          <p>
            Sign in with the official Google account chooser or use email and password. Every
            session is verified by the backend and secured with rotating tokens.
          </p>
        </div>

        <ul className="security-list">
          <li>
            <span className="security-dot" aria-hidden="true" />
            Google ID tokens verified against Google public keys
          </li>
          <li>
            <span className="security-dot" aria-hidden="true" />
            Short-lived JWT access tokens
          </li>
          <li>
            <span className="security-dot" aria-hidden="true" />
            Refresh tokens stored in HttpOnly cookies
          </li>
        </ul>

        <p className="brand-footnote">Tuneus Studio Audio Platform</p>
      </aside>

      <main className="auth-form-panel">
        <div className="auth-card">
          <div className="mobile-brand">
            <BrandMark size={40} />
            <span className="brand-name">TUNEUS</span>
          </div>

          <header className="auth-card-header">
            <h2>{title}</h2>
            <p>{subtitle}</p>
          </header>

          {children}

          {footer && <div className="auth-footer">{footer}</div>}
        </div>
      </main>
    </div>
  );
}
