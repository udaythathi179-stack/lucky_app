package com.tuneus.auth.service;

import com.tuneus.auth.config.AuthProperties;
import jakarta.servlet.http.HttpServletResponse;
import org.springframework.http.HttpHeaders;
import org.springframework.http.ResponseCookie;
import org.springframework.stereotype.Service;

import java.time.Duration;

@Service
public class RefreshCookieService {

    private final AuthProperties properties;

    public RefreshCookieService(AuthProperties properties) {
        this.properties = properties;
        if ("None".equalsIgnoreCase(properties.cookieSameSite()) && !properties.cookieSecure()) {
            throw new IllegalStateException("COOKIE_SECURE must be true when COOKIE_SAME_SITE is None");
        }
    }

    public void setRefreshCookie(HttpServletResponse response, String token) {
        addCookie(response, token, properties.refreshTokenTtl());
    }

    public void clearRefreshCookie(HttpServletResponse response) {
        addCookie(response, "", Duration.ZERO);
    }

    public String cookieName() {
        return properties.cookieName();
    }

    private void addCookie(HttpServletResponse response, String value, Duration maxAge) {
        ResponseCookie cookie = ResponseCookie.from(properties.cookieName(), value)
                .httpOnly(true)
                .secure(properties.cookieSecure())
                .sameSite(properties.cookieSameSite())
                .path("/api/auth")
                .maxAge(maxAge)
                .build();
        response.addHeader(HttpHeaders.SET_COOKIE, cookie.toString());
    }
}
