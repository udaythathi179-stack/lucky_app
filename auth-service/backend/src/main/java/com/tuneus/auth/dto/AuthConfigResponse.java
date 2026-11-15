package com.tuneus.auth.dto;

public record AuthConfigResponse(
        String googleClientId,
        String issuer,
        String audience
) {
}
