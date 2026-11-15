package com.tuneus.auth.dto;

import com.tuneus.auth.service.AuthSession;

public record RefreshResponse(
        String accessToken,
        String tokenType,
        long expiresIn,
        UserResponse user
) {
    public static RefreshResponse from(AuthSession session) {
        return new RefreshResponse(
                session.accessToken(),
                "Bearer",
                session.expiresIn(),
                UserResponse.from(session.user())
        );
    }
}
