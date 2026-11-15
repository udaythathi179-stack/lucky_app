import {
  createContext,
  useCallback,
  useContext,
  useEffect,
  useMemo,
  useRef,
  useState,
  type ReactNode,
} from 'react';
import { ApiError, apiPost } from '../api/client';
import { disableGoogleAutoSelect } from '../lib/google';
import type { AuthResponse, RefreshResponse, User } from '../types';

const REFRESH_LOCK_NAME = 'tuneus-auth-refresh';

interface LockManagerLike {
  request<T>(name: string, callback: () => Promise<T>): Promise<T>;
}

interface AuthContextValue {
  user: User | null;
  accessToken: string | null;
  initializing: boolean;
  busy: boolean;
  error: string | null;
  clearError: () => void;
  login: (email: string, password: string) => Promise<void>;
  register: (name: string, email: string, password: string) => Promise<void>;
  loginWithGoogle: (credential: string) => Promise<void>;
  logout: () => Promise<void>;
  refreshSession: () => Promise<boolean>;
}

const AuthContext = createContext<AuthContextValue | undefined>(undefined);

function toMessage(error: unknown): string {
  if (error instanceof ApiError) {
    return error.message;
  }
  if (error instanceof Error) {
    return error.message;
  }
  return 'Something went wrong. Please try again.';
}

export function AuthProvider({ children }: { children: ReactNode }) {
  const [user, setUser] = useState<User | null>(null);
  const [accessToken, setAccessToken] = useState<string | null>(null);
  const [initializing, setInitializing] = useState(true);
  const [busy, setBusy] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const refreshTimerRef = useRef<number | null>(null);
  const refreshInFlightRef = useRef<Promise<boolean> | null>(null);
  const refreshSessionRef = useRef<(() => Promise<boolean>) | null>(null);

  const clearTimer = useCallback(() => {
    if (refreshTimerRef.current !== null) {
      window.clearTimeout(refreshTimerRef.current);
      refreshTimerRef.current = null;
    }
  }, []);

  const clearSession = useCallback(() => {
    clearTimer();
    setUser(null);
    setAccessToken(null);
  }, [clearTimer]);

  const applySession = useCallback(
    (session: AuthResponse) => {
      setUser(session.user);
      setAccessToken(session.accessToken);
      clearTimer();

      const refreshInSeconds = Math.max(30, session.expiresIn - 60);
      refreshTimerRef.current = window.setTimeout(() => {
        void refreshSessionRef.current?.();
      }, refreshInSeconds * 1000);
    },
    [clearTimer],
  );

  const doRefresh = useCallback(async (): Promise<boolean> => {
    try {
      const session = await apiPost<RefreshResponse>('/api/auth/refresh', undefined, {
        'X-Requested-With': 'XMLHttpRequest',
      });
      applySession(session);
      return true;
    } catch (refreshError) {
      if (
        refreshError instanceof ApiError &&
        (refreshError.status === 401 || refreshError.status === 403)
      ) {
        clearSession();
      }
      return false;
    }
  }, [applySession, clearSession]);

  const refreshSession = useCallback(async (): Promise<boolean> => {
    if (refreshInFlightRef.current) {
      return refreshInFlightRef.current;
    }

    const execute = async (): Promise<boolean> => {
      const lockManager = (navigator as Navigator & { locks?: LockManagerLike }).locks;
      if (lockManager?.request) {
        return lockManager.request(REFRESH_LOCK_NAME, doRefresh);
      }
      return doRefresh();
    };

    const promise = execute().finally(() => {
      refreshInFlightRef.current = null;
    });
    refreshInFlightRef.current = promise;
    return promise;
  }, [doRefresh]);

  useEffect(() => {
    refreshSessionRef.current = refreshSession;
  }, [refreshSession]);

  useEffect(() => {
    let active = true;
    void refreshSession().finally(() => {
      if (active) {
        setInitializing(false);
      }
    });
    return () => {
      active = false;
      clearTimer();
    };
  }, [refreshSession, clearTimer]);

  const runAuth = useCallback(
    async (request: () => Promise<AuthResponse>): Promise<void> => {
      setBusy(true);
      setError(null);
      try {
        const session = await request();
        applySession(session);
      } catch (authError) {
        setError(toMessage(authError));
        throw authError;
      } finally {
        setBusy(false);
      }
    },
    [applySession],
  );

  const login = useCallback(
    (email: string, password: string) =>
      runAuth(() => apiPost<AuthResponse>('/api/auth/login', { email, password })),
    [runAuth],
  );

  const register = useCallback(
    (name: string, email: string, password: string) =>
      runAuth(() => apiPost<AuthResponse>('/api/auth/register', { name, email, password })),
    [runAuth],
  );

  const loginWithGoogle = useCallback(
    (credential: string) =>
      runAuth(() => apiPost<AuthResponse>('/api/auth/google', { idToken: credential })),
    [runAuth],
  );

  const logout = useCallback(async (): Promise<void> => {
    setBusy(true);
    try {
      await apiPost('/api/auth/logout', undefined, {
        'X-Requested-With': 'XMLHttpRequest',
      });
    } catch {
      void 0;
    } finally {
      disableGoogleAutoSelect();
      clearSession();
      setError(null);
      setBusy(false);
    }
  }, [clearSession]);

  const clearError = useCallback(() => setError(null), []);

  const value = useMemo<AuthContextValue>(
    () => ({
      user,
      accessToken,
      initializing,
      busy,
      error,
      clearError,
      login,
      register,
      loginWithGoogle,
      logout,
      refreshSession,
    }),
    [
      user,
      accessToken,
      initializing,
      busy,
      error,
      clearError,
      login,
      register,
      loginWithGoogle,
      logout,
      refreshSession,
    ],
  );

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
}

export function useAuth(): AuthContextValue {
  const context = useContext(AuthContext);
  if (!context) {
    throw new Error('useAuth must be used inside AuthProvider');
  }
  return context;
}
