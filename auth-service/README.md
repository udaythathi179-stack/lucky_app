# Tuneus Google Authentication Platform

A standalone, production-oriented authentication stack that adds **Sign in with Google** and **email/password** authentication without changing the existing Tuneus application.

- Backend: Spring Boot 3.4, Java 21, Spring Security, Spring Data JPA, Flyway, MySQL 8
- Frontend: React 18, TypeScript, Vite
- Google: Google Identity Services (GIS), official Google account chooser
- Sessions: signed JWT access tokens + rotating, hashed refresh tokens in HttpOnly cookies

The existing root application (`frontend/`, `backend/`, `database/`) is untouched.

---

## 1. Architecture

```text
auth-service/
  backend/    Spring Boot authentication API
  frontend/   React + TypeScript + Vite sign-in experience
  docker-compose.yml   MySQL + backend + frontend
```

Authentication flow:

1. The React page renders the **official Google-rendered button** through Google Identity Services.
2. Clicking `Continue with Google` opens Google's real account chooser popup. Users can select an existing Google account or choose `Use another account`.
3. Google returns a signed **ID token (credential)** to the frontend.
4. The frontend sends the ID token to `POST /api/auth/google`.
5. The backend verifies:
   - signature against Google's published JWKS
   - issuer (`accounts.google.com` or `https://accounts.google.com`)
   - audience (your Google OAuth Web Client ID)
   - expiration and not-before timestamps
   - verified email claim
   - authorized party (`azp`) when present
6. The backend finds the user by Google subject (`sub`) or email.
   - Existing user: sign in and link the Google subject if the account was email/password.
   - New user: create the account automatically with the verified Google name, email, and picture.
7. The backend issues:
   - a short-lived signed JWT access token
   - a cryptographically random refresh token, stored only as a SHA-256 hash in MySQL
   - the refresh token is sent in an `HttpOnly`, `SameSite` cookie
8. The frontend keeps the access token in memory only and refreshes it automatically before expiration or through the refresh cookie after a page reload.
9. The profile page displays the Google profile picture, name, and email.

The Google client secret is **not used and not required** for the ID-token flow. Never place a Google client secret in frontend code.

---

## 2. Prerequisites

- Java 21+
- Maven 3.9+
- Node.js 20+
- MySQL 8 (or Docker)

---

## 3. Google Cloud Console setup

1. Open [Google Cloud Console](https://console.cloud.google.com/).
2. Create or select a project.
3. Configure the OAuth consent screen (External is fine for testing).
4. Go to **APIs & Services → Credentials → Create Credentials → OAuth client ID**.
5. Choose **Web application**.
6. Add authorized JavaScript origins:
   - `http://localhost:5173` (Vite dev server)
   - `http://localhost:8081` (Docker frontend)
   - Your production origin, e.g. `https://app.example.com`
7. Copy the **Client ID**. It looks like `1234567890-abc.apps.googleusercontent.com`.
8. Set the same Client ID in both:
   - backend `GOOGLE_CLIENT_ID`
   - frontend `VITE_GOOGLE_CLIENT_ID`

No client secret is needed for this implementation.

---

## 4. Database

The backend uses Flyway. The migration is at:

```text
backend/src/main/resources/db/migration/V1__init_auth_schema.sql
```

It creates:

- `users` — email, name, picture, provider, Google subject, optional password hash
- `refresh_tokens` — hashed refresh token, expiry, revocation, token family

Create the database manually:

```sql
CREATE DATABASE tuneus_auth CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;
CREATE USER 'tuneus'@'%' IDENTIFIED BY 'tuneus';
GRANT ALL PRIVILEGES ON tuneus_auth.* TO 'tuneus'@'%';
FLUSH PRIVILEGES;
```

Or start MySQL with Docker:

```bash
docker compose up -d mysql
```

---

## 5. Run locally

### 5.1 Backend

PowerShell:

```powershell
$env:JWT_SECRET = "replace-with-output-of-openssl-rand-base64-48"
$env:GOOGLE_CLIENT_ID = "your-client-id.apps.googleusercontent.com"
$env:DB_URL = "jdbc:mysql://localhost:3306/tuneus_auth?useSSL=false&allowPublicKeyRetrieval=true&serverTimezone=UTC&characterEncoding=utf8"
$env:DB_USERNAME = "tuneus"
$env:DB_PASSWORD = "tuneus"
mvn spring-boot:run
```

macOS/Linux:

```bash
export JWT_SECRET="$(openssl rand -base64 48)"
export GOOGLE_CLIENT_ID="your-client-id.apps.googleusercontent.com"
export DB_URL="jdbc:mysql://localhost:3306/tuneus_auth?useSSL=false&allowPublicKeyRetrieval=true&serverTimezone=UTC&characterEncoding=utf8"
export DB_USERNAME=tuneus
export DB_PASSWORD=tuneus
mvn spring-boot:run
```

The API listens on `http://localhost:8080`.

Generate a JWT secret:

```bash
openssl rand -base64 48
```

`JWT_SECRET` must be at least 32 bytes.

### 5.2 Frontend

```bash
cd frontend
cp .env.example .env
```

Edit `.env`:

```dotenv
VITE_GOOGLE_CLIENT_ID=your-client-id.apps.googleusercontent.com
VITE_API_BASE_URL=
```

Leave `VITE_API_BASE_URL` empty to use the Vite proxy (`/api` → `http://localhost:8080`).

```bash
npm install
npm run dev
```

Open `http://localhost:5173`.

---

## 6. Docker

Create `auth-service/.env`:

```dotenv
JWT_SECRET=replace-with-openssl-rand-base64-48
GOOGLE_CLIENT_ID=your-client-id.apps.googleusercontent.com
```

Build and start everything:

```bash
docker compose up --build
```

Open `http://localhost:8081`.

The frontend Nginx container proxies `/api` to the backend, so cookies are first-party.

---

## 7. API

| Method | Path | Description |
| --- | --- | --- |
| `GET` | `/api/auth/config` | Public Google Client ID and token issuer/audience |
| `POST` | `/api/auth/google` | Verify a Google ID token and create/sign in the user |
| `POST` | `/api/auth/register` | Email/password registration |
| `POST` | `/api/auth/login` | Email/password login |
| `POST` | `/api/auth/refresh` | Rotate refresh token and issue a new access token |
| `POST` | `/api/auth/logout` | Revoke the refresh token and clear the cookie |
| `GET` | `/api/auth/me` | Current profile (requires `Authorization: Bearer <jwt>`) |
| `GET` | `/api/health` | Health check |

`POST /api/auth/google` request:

```json
{
  "idToken": "eyJhbGciOiJSUzI1NiIs..."
}
```

Successful response:

```json
{
  "accessToken": "eyJhbGciOiJIUzI1NiIs...",
  "tokenType": "Bearer",
  "expiresIn": 3600,
  "user": {
    "id": "7a9f...",
    "name": "Google User",
    "email": "user@gmail.com",
    "pictureUrl": "https://lh3.googleusercontent.com/...",
    "provider": "google",
    "createdAt": "2026-11-15T10:00:00Z",
    "lastLoginAt": "2026-11-15T10:00:00Z"
  }
}
```

Refresh and logout require:

```http
X-Requested-With: XMLHttpRequest
```

This custom header, together with the `SameSite` cookie and CORS allowlist, mitigates CSRF against cookie-backed refresh/logout endpoints.

---

## 8. Security notes

- Google ID token signature verification uses Google's JWKS endpoint with Nimbus JOSE caching.
- Issuer, audience, expiration, verified email, and `azp` are validated server-side.
- The backend never trusts profile data sent directly by the frontend.
- Access tokens are signed with HMAC-SHA256 using a 32+ byte secret and are stored in memory only.
- Refresh tokens are 512-bit random values; only their SHA-256 hashes are stored in MySQL.
- Refresh tokens rotate on every refresh. Reuse of a revoked token revokes the entire token family.
- Refresh cookies are `HttpOnly`, `SameSite=Strict` by default, scoped to `/api/auth`, and `Secure` in production (`COOKIE_SECURE=true`).
- Email/password accounts use BCrypt hashing with cost 12.
- Login uses a dummy hash for unknown emails to reduce timing-based account enumeration.
- The API is stateless; CSRF is handled through the refresh cookie design and explicit header requirement.
- Security headers include frame denial, no-sniff, no-referrer, and HSTS.
- Google Client Secrets are never used by the frontend and are not required by this ID-token flow.
- For distributed deployments, add centralized rate limiting (API gateway, Redis, or similar) to authentication endpoints.
- Always terminate TLS at the edge and set `COOKIE_SECURE=true` in production.

---

## 9. Tests

```bash
cd backend
mvn test
```

The integration tests use H2 in MySQL compatibility mode and cover:

- email registration, JWT profile access, refresh rotation, reuse detection
- CSRF header enforcement on refresh
- Google account creation from a verified profile
- linking an existing email account to Google
- rejection of invalid Google credentials

Frontend checks:

```bash
cd frontend
npm run typecheck
npm run build
```

---

## 10. Troubleshooting

**`invalid_client` or `origin_mismatch`**
- Verify `VITE_GOOGLE_CLIENT_ID` exactly matches the backend `GOOGLE_CLIENT_ID`.
- Add the exact page origin (`http://localhost:5173`) to Authorized JavaScript Origins.
- Wait a few minutes after changing Google Cloud settings.

**The Google account chooser does not open**
- Confirm `https://accounts.google.com/gsi/client` is reachable.
- Check the browser console for blockages by extensions or popup blockers.
- Make sure the button is rendered by GIS; the implementation intentionally does not use a custom imitation popup.

**`invalid_google_token`**
- The ID token was expired, had the wrong audience, used an unverified email, or was not issued by Google.
- Check backend clock synchronization and `GOOGLE_CLIENT_ID`.

**Session disappears after reload**
- In local development, use the Vite proxy with `VITE_API_BASE_URL` empty so the refresh cookie is first-party.
- If the frontend and API are on different sites, set `COOKIE_SAME_SITE=None`, `COOKIE_SECURE=true`, use HTTPS, and include both origins in `CORS_ALLOWED_ORIGINS`.

**`JWT_SECRET must be at least 32 bytes`**
- Generate a secret with `openssl rand -base64 48` and set `JWT_SECRET`.
