import { useEffect, useRef, useState } from 'react';
import { loadGoogleIdentityServices } from '../lib/google';

interface GoogleSignInButtonProps {
  onCredential: (credential: string) => Promise<void>;
  onCancel?: () => void;
  disabled?: boolean;
}

export function GoogleSignInButton({
  onCredential,
  onCancel,
  disabled = false,
}: GoogleSignInButtonProps) {
  const containerRef = useRef<HTMLDivElement>(null);
  const credentialHandlerRef = useRef(onCredential);
  const cancelHandlerRef = useRef(onCancel);
  const pendingRef = useRef(false);
  const focusTimerRef = useRef<number | null>(null);
  const [status, setStatus] = useState<'loading' | 'ready' | 'error'>('loading');
  const [message, setMessage] = useState<string | null>(null);
  const [reloadKey, setReloadKey] = useState(0);

  const clientId = (import.meta.env.VITE_GOOGLE_CLIENT_ID ?? '').trim();

  useEffect(() => {
    credentialHandlerRef.current = onCredential;
  }, [onCredential]);

  useEffect(() => {
    cancelHandlerRef.current = onCancel;
  }, [onCancel]);

  useEffect(() => {
    const handleWindowFocus = () => {
      if (!pendingRef.current) {
        return;
      }
      if (focusTimerRef.current !== null) {
        window.clearTimeout(focusTimerRef.current);
      }
      focusTimerRef.current = window.setTimeout(() => {
        if (pendingRef.current) {
          pendingRef.current = false;
          setMessage('Google sign-in was cancelled. You can try again anytime.');
          cancelHandlerRef.current?.();
        }
      }, 1800);
    };

    window.addEventListener('focus', handleWindowFocus);
    return () => {
      window.removeEventListener('focus', handleWindowFocus);
      if (focusTimerRef.current !== null) {
        window.clearTimeout(focusTimerRef.current);
      }
    };
  }, []);

  useEffect(() => {
    let cancelled = false;

    if (!clientId) {
      setStatus('error');
      setMessage(
        'Google sign-in is not configured. Set VITE_GOOGLE_CLIENT_ID to your Google OAuth Web Client ID.',
      );
      return;
    }

    setStatus('loading');
    setMessage(null);

    loadGoogleIdentityServices()
      .then(() => {
        if (cancelled) {
          return;
        }
        const google = window.google;
        const host = containerRef.current;
        if (!google?.accounts?.id || !host) {
          setStatus('error');
          setMessage('Google Identity Services is unavailable in this browser.');
          return;
        }

        google.accounts.id.initialize({
          client_id: clientId,
          auto_select: false,
          cancel_on_tap_outside: true,
          ux_mode: 'popup',
          use_fedcm_for_prompt: true,
          callback: (response) => {
            pendingRef.current = false;
            if (focusTimerRef.current !== null) {
              window.clearTimeout(focusTimerRef.current);
              focusTimerRef.current = null;
            }
            if (!response.credential) {
              cancelHandlerRef.current?.();
              return;
            }
            setMessage(null);
            void credentialHandlerRef.current(response.credential).catch(() => undefined);
          },
        });

        host.innerHTML = '';
        const availableWidth = host.clientWidth > 0 ? host.clientWidth : 320;
        google.accounts.id.renderButton(host, {
          type: 'standard',
          theme: 'outline',
          size: 'large',
          text: 'continue_with',
          shape: 'pill',
          logo_alignment: 'left',
          width: Math.max(200, Math.min(360, availableWidth)),
          locale: 'en',
          click_listener: () => {
            pendingRef.current = true;
            setMessage(null);
          },
        });
        setStatus('ready');
      })
      .catch((loadError: unknown) => {
        if (cancelled) {
          return;
        }
        setStatus('error');
        setMessage(
          loadError instanceof Error
            ? loadError.message
            : 'Unable to load Google sign-in. Please try again.',
        );
      });

    return () => {
      cancelled = true;
      if (containerRef.current) {
        containerRef.current.innerHTML = '';
      }
    };
  }, [clientId, reloadKey]);

  return (
    <div className="google-signin">
      <div
        className={`google-button-slot${disabled ? ' is-disabled' : ''}`}
        aria-busy={disabled || status === 'loading'}
      >
        <div ref={containerRef} className="google-button-host" />
        {status === 'loading' && (
          <div className="google-button-placeholder">
            <span className="spinner" aria-hidden="true" />
            Loading Google sign-in...
          </div>
        )}
      </div>

      {status === 'error' && (
        <div className="google-signin-error" role="alert">
          <span>{message}</span>
          <button type="button" className="text-button" onClick={() => setReloadKey((key) => key + 1)}>
            Retry
          </button>
        </div>
      )}

      {status !== 'error' && message && (
        <p className="google-signin-message" role="status">
          {message}
        </p>
      )}

      <p className="google-signin-hint">
        The official Google account chooser opens so you can pick an existing account or use another
        account.
      </p>
    </div>
  );
}
