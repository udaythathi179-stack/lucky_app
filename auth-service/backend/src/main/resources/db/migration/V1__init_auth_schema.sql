CREATE TABLE users (
    id VARCHAR(36) NOT NULL,
    email VARCHAR(320) NOT NULL,
    name VARCHAR(120) NOT NULL,
    picture_url VARCHAR(1024) NULL,
    provider VARCHAR(20) NOT NULL,
    google_sub VARCHAR(255) NULL,
    password_hash VARCHAR(100) NULL,
    enabled BIT(1) NOT NULL DEFAULT b'1',
    created_at DATETIME(6) NOT NULL,
    last_login_at DATETIME(6) NULL,
    PRIMARY KEY (id),
    UNIQUE KEY uk_users_email (email),
    UNIQUE KEY uk_users_google_sub (google_sub)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

CREATE TABLE refresh_tokens (
    id VARCHAR(36) NOT NULL,
    user_id VARCHAR(36) NOT NULL,
    family_id VARCHAR(36) NOT NULL,
    token_hash VARCHAR(64) NOT NULL,
    expires_at DATETIME(6) NOT NULL,
    revoked BIT(1) NOT NULL DEFAULT b'0',
    created_at DATETIME(6) NOT NULL,
    revoked_at DATETIME(6) NULL,
    user_agent VARCHAR(512) NULL,
    ip_address VARCHAR(64) NULL,
    PRIMARY KEY (id),
    UNIQUE KEY uk_refresh_token_hash (token_hash),
    KEY idx_refresh_user (user_id),
    KEY idx_refresh_family (family_id),
    KEY idx_refresh_expires (expires_at),
    CONSTRAINT fk_refresh_user FOREIGN KEY (user_id) REFERENCES users (id) ON DELETE CASCADE
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;
