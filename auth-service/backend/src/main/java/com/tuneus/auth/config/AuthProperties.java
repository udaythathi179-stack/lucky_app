package com.tuneus.auth.config;

import jakarta.validation.constraints.NotBlank;
import jakarta.validation.constraints.NotNull;
import org.springframework.boot.context.properties.ConfigurationProperties;
import org.springframework.validation.annotation.Validated;

import java.time.Duration;

@Validated
@ConfigurationProperties(prefix = "app.auth")
public record AuthProperties(
        @NotBlank String jwtSecret,
        @NotBlank String issuer,
        @NotBlank String audience,
        @NotNull Duration accessTokenTtl,
        @NotNull Duration refreshTokenTtl,
        @NotBlank String cookieName,
        boolean cookieSecure,
        @NotBlank String cookieSameSite,
        @NotBlank String googleClientId
) {
    public AuthProperties {
        requirePositive(accessTokenTtl, "app.auth.access-token-ttl");
        requirePositive(refreshTokenTtl, "app.auth.refresh-token-ttl");
    }

    private static void requirePositive(Duration value, String property) {
        if (value != null && (value.isZero() || value.isNegative())) {
            throw new IllegalArgumentException(property + " must be a positive duration");
        }
    }
}
