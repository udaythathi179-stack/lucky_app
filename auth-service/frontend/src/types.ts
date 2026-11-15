export type AuthProvider = 'google' | 'email';

export interface User {
  id: string;
  name: string;
  email: string;
  pictureUrl?: string | null;
  provider: AuthProvider;
  createdAt: string;
  lastLoginAt?: string | null;
}

export interface AuthResponse {
  accessToken: string;
  tokenType: string;
  expiresIn: number;
  user: User;
}

export type RefreshResponse = AuthResponse;

export interface ApiErrorBody {
  code?: string;
  message?: string;
  timestamp?: string;
}
