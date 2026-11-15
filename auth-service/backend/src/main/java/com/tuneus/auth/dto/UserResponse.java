package com.tuneus.auth.dto;

import com.tuneus.auth.entity.User;

import java.time.Instant;
import java.util.Locale;

public record UserResponse(
        String id,
        String name,
        String email,
        String pictureUrl,
        String provider,
        Instant createdAt,
        Instant lastLoginAt
) {
    public static UserResponse from(User user) {
        return new UserResponse(
                user.getId(),
                user.getName(),
                user.getEmail(),
                user.getPictureUrl(),
                user.getProvider().name().toLowerCase(Locale.ROOT),
                user.getCreatedAt(),
                user.getLastLoginAt()
        );
    }
}
