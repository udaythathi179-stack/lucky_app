package com.tuneus.auth.service;

import com.tuneus.auth.entity.User;

import java.time.Instant;

public record AuthSession(
        String accessToken,
        long expiresIn,
        String refreshToken,
        Instant refreshExpiresAt,
        User user
) {
}
