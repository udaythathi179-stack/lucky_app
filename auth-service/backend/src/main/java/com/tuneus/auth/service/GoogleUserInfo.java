package com.tuneus.auth.service;

public record GoogleUserInfo(
        String sub,
        String email,
        String name,
        String picture,
        boolean emailVerified
) {
}
