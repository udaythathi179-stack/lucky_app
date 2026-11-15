import type { ApiErrorBody } from '../types';

const API_BASE_URL = (import.meta.env.VITE_API_BASE_URL ?? '').replace(/\/$/, '');

export class ApiError extends Error {
  readonly status: number;
  readonly code: string;

  constructor(status: number, code: string, message: string) {
    super(message);
    this.name = 'ApiError';
    this.status = status;
    this.code = code;
  }
}

function endpoint(path: string): string {
  return `${API_BASE_URL}${path}`;
}

async function readBody(response: Response): Promise<unknown> {
  const contentType = response.headers.get('content-type') ?? '';
  if (!contentType.includes('application/json')) {
    return null;
  }
  try {
    return await response.json();
  } catch {
    return null;
  }
}

async function parseResponse<T>(response: Response): Promise<T> {
  const body = await readBody(response);
  if (!response.ok) {
    const errorBody = (body ?? {}) as ApiErrorBody;
    throw new ApiError(
      response.status,
      errorBody.code ?? 'request_failed',
      errorBody.message ?? `Request failed with status ${response.status}`,
    );
  }
  return body as T;
}

export async function apiPost<T>(
  path: string,
  payload?: unknown,
  headers: Record<string, string> = {},
): Promise<T> {
  let response: Response;
  try {
    response = await fetch(endpoint(path), {
      method: 'POST',
      credentials: 'include',
      headers: {
        'Content-Type': 'application/json',
        ...headers,
      },
      body: payload === undefined ? undefined : JSON.stringify(payload),
    });
  } catch {
    throw new ApiError(
      0,
      'network_error',
      'Unable to reach the authentication server. Please check your connection and try again.',
    );
  }
  return parseResponse<T>(response);
}

export async function apiGet<T>(path: string, accessToken: string): Promise<T> {
  let response: Response;
  try {
    response = await fetch(endpoint(path), {
      method: 'GET',
      credentials: 'include',
      headers: {
        Authorization: `Bearer ${accessToken}`,
      },
    });
  } catch {
    throw new ApiError(
      0,
      'network_error',
      'Unable to reach the authentication server. Please check your connection and try again.',
    );
  }
  return parseResponse<T>(response);
}
