package com.tuneus.auth.dto;

import com.tuneus.auth.service.AuthSession;

public record AuthResponse(
        String accessToken,
        String tokenType,
        long expiresIn,
        UserResponse user
) {
    public static AuthResponse from(AuthSession session) {
        return new AuthResponse(
                session.accessToken(),
                "Bearer",
                session.expiresIn(),
                UserResponse.from(session.user())
        );
    }
}
