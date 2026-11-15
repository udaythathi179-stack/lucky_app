package com.tuneus.auth.service;

import com.tuneus.auth.config.AuthProperties;
import com.tuneus.auth.exception.InvalidGoogleTokenException;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Qualifier;
import org.springframework.security.oauth2.jwt.Jwt;
import org.springframework.security.oauth2.jwt.JwtDecoder;
import org.springframework.security.oauth2.jwt.JwtException;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Locale;

@Service
public class GoogleTokenVerifier {

    public static final String GOOGLE_JWKS_URI = "https://www.googleapis.com/oauth2/v3/certs";

    private static final Logger log = LoggerFactory.getLogger(GoogleTokenVerifier.class);

    private final JwtDecoder googleJwtDecoder;
    private final AuthProperties properties;

    public GoogleTokenVerifier(@Qualifier("googleJwtDecoder") JwtDecoder googleJwtDecoder,
                               AuthProperties properties) {
        this.googleJwtDecoder = googleJwtDecoder;
        this.properties = properties;
    }

    public GoogleUserInfo verify(String idToken) {
        if (idToken == null || idToken.isBlank()) {
            throw new InvalidGoogleTokenException("Google credential is required");
        }

        try {
            Jwt jwt = googleJwtDecoder.decode(idToken);

            String subject = jwt.getSubject();
            if (subject == null || subject.isBlank()) {
                throw new InvalidGoogleTokenException("Google token is missing the subject claim");
            }

            String email = jwt.getClaimAsString("email");
            if (email == null || email.isBlank()) {
                throw new InvalidGoogleTokenException("Google account did not provide an email address");
            }

            Object emailVerifiedClaim = jwt.getClaim("email_verified");
            boolean emailVerified = Boolean.TRUE.equals(emailVerifiedClaim)
                    || "true".equalsIgnoreCase(String.valueOf(emailVerifiedClaim));
            if (!emailVerified) {
                throw new InvalidGoogleTokenException("Google account email address is not verified");
            }

            List<String> audience = jwt.getAudience();
            String authorizedParty = jwt.getClaimAsString("azp");
            if (audience != null && audience.size() > 1
                    && !properties.googleClientId().equals(authorizedParty)) {
                throw new InvalidGoogleTokenException("Google token authorized party does not match this application");
            }
            if (authorizedParty != null && !properties.googleClientId().equals(authorizedParty)) {
                throw new InvalidGoogleTokenException("Google token authorized party does not match this application");
            }

            String name = jwt.getClaimAsString("name");
            if (name == null || name.isBlank()) {
                name = email.substring(0, email.indexOf('@'));
            }

            return new GoogleUserInfo(
                    subject,
                    email.toLowerCase(Locale.ROOT).trim(),
                    name,
                    jwt.getClaimAsString("picture"),
                    true
            );
        } catch (InvalidGoogleTokenException exception) {
            throw exception;
        } catch (JwtException | IllegalArgumentException exception) {
            log.warn("Google ID token verification failed: {}", exception.getMessage());
            throw new InvalidGoogleTokenException("Google sign-in could not be verified. Please try again.", exception);
        }
    }
}
