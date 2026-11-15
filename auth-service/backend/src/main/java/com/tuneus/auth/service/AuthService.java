package com.tuneus.auth.service;

import com.tuneus.auth.config.AuthProperties;
import com.tuneus.auth.dto.LoginRequest;
import com.tuneus.auth.dto.RegisterRequest;
import com.tuneus.auth.entity.AuthProvider;
import com.tuneus.auth.entity.RefreshToken;
import com.tuneus.auth.entity.User;
import com.tuneus.auth.exception.ApiException;
import com.tuneus.auth.repository.RefreshTokenRepository;
import com.tuneus.auth.repository.UserRepository;
import org.springframework.http.HttpStatus;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import java.time.Instant;
import java.util.Locale;
import java.util.Optional;
import java.util.UUID;

@Service
public class AuthService {

    private final UserRepository userRepository;
    private final RefreshTokenRepository refreshTokenRepository;
    private final GoogleTokenVerifier googleTokenVerifier;
    private final TokenService tokenService;
    private final PasswordEncoder passwordEncoder;
    private final AuthProperties properties;
    private final String dummyPasswordHash;

    public AuthService(UserRepository userRepository,
                       RefreshTokenRepository refreshTokenRepository,
                       GoogleTokenVerifier googleTokenVerifier,
                       TokenService tokenService,
                       PasswordEncoder passwordEncoder,
                       AuthProperties properties) {
        this.userRepository = userRepository;
        this.refreshTokenRepository = refreshTokenRepository;
        this.googleTokenVerifier = googleTokenVerifier;
        this.tokenService = tokenService;
        this.passwordEncoder = passwordEncoder;
        this.properties = properties;
        this.dummyPasswordHash = passwordEncoder.encode(UUID.randomUUID().toString());
    }

    @Transactional
    public AuthSession loginWithGoogle(String idToken, String userAgent, String ipAddress) {
        GoogleUserInfo profile = googleTokenVerifier.verify(idToken);
        User user = resolveGoogleUser(profile);
        applyGoogleProfile(user, profile);
        user = userRepository.save(user);
        return createSession(user, UUID.randomUUID().toString(), userAgent, ipAddress);
    }

    @Transactional
    public AuthSession register(RegisterRequest request, String userAgent, String ipAddress) {
        String email = normalizeEmail(request.email());
        if (userRepository.existsByEmailIgnoreCase(email)) {
            throw new ApiException(HttpStatus.CONFLICT, "email_in_use",
                    "An account with this email address already exists");
        }

        User user = new User();
        user.setEmail(email);
        user.setName(truncate(request.name().trim(), 120));
        user.setProvider(AuthProvider.EMAIL);
        user.setPasswordHash(passwordEncoder.encode(request.password()));
        user.setEnabled(true);
        user.setLastLoginAt(Instant.now());
        user = userRepository.save(user);

        return createSession(user, UUID.randomUUID().toString(), userAgent, ipAddress);
    }

    @Transactional
    public AuthSession login(LoginRequest request, String userAgent, String ipAddress) {
        String email = normalizeEmail(request.email());
        Optional<User> existing = userRepository.findByEmailIgnoreCase(email);
        User user = existing.orElse(null);

        String hash = user != null && user.getPasswordHash() != null
                ? user.getPasswordHash()
                : dummyPasswordHash;
        boolean passwordMatches = passwordEncoder.matches(request.password(), hash);
        if (user == null || user.getPasswordHash() == null || !passwordMatches) {
            throw new ApiException(HttpStatus.UNAUTHORIZED, "invalid_credentials",
                    "Email or password is incorrect");
        }
        if (!user.isEnabled()) {
            throw new ApiException(HttpStatus.FORBIDDEN, "account_disabled", "This account is disabled");
        }

        if (passwordEncoder.upgradeEncoding(user.getPasswordHash())) {
            user.setPasswordHash(passwordEncoder.encode(request.password()));
        }
        user.setLastLoginAt(Instant.now());
        user = userRepository.save(user);

        return createSession(user, UUID.randomUUID().toString(), userAgent, ipAddress);
    }

    @Transactional(noRollbackFor = ApiException.class)
    public AuthSession refresh(String rawRefreshToken, String userAgent, String ipAddress) {
        if (rawRefreshToken == null || rawRefreshToken.isBlank()) {
            throw new ApiException(HttpStatus.UNAUTHORIZED, "missing_refresh_token",
                    "Your session has expired. Please sign in again.");
        }

        String tokenHash = tokenService.hashRefreshToken(rawRefreshToken);
        RefreshToken stored = refreshTokenRepository.findByTokenHashForUpdate(tokenHash)
                .orElseThrow(() -> new ApiException(HttpStatus.UNAUTHORIZED, "invalid_refresh_token",
                        "Your session has expired. Please sign in again."));

        Instant now = Instant.now();
        if (stored.isRevoked()) {
            refreshTokenRepository.revokeFamily(stored.getFamilyId(), now);
            throw new ApiException(HttpStatus.UNAUTHORIZED, "refresh_token_reused",
                    "Your session is no longer valid. Please sign in again.");
        }
        if (!stored.getExpiresAt().isAfter(now)) {
            throw new ApiException(HttpStatus.UNAUTHORIZED, "refresh_token_expired",
                    "Your session has expired. Please sign in again.");
        }

        User user = stored.getUser();
        if (!user.isEnabled()) {
            throw new ApiException(HttpStatus.FORBIDDEN, "account_disabled", "This account is disabled");
        }

        stored.setRevoked(true);
        stored.setRevokedAt(now);
        refreshTokenRepository.save(stored);

        return createSession(user, stored.getFamilyId(), userAgent, ipAddress);
    }

    @Transactional
    public void logout(String rawRefreshToken) {
        if (rawRefreshToken == null || rawRefreshToken.isBlank()) {
            return;
        }
        String tokenHash = tokenService.hashRefreshToken(rawRefreshToken);
        refreshTokenRepository.findByTokenHashForUpdate(tokenHash).ifPresent(stored -> {
            if (!stored.isRevoked()) {
                stored.setRevoked(true);
                stored.setRevokedAt(Instant.now());
                refreshTokenRepository.save(stored);
            }
        });
    }

    @Transactional(readOnly = true)
    public User getCurrentUser(String userId) {
        return userRepository.findById(userId)
                .filter(User::isEnabled)
                .orElseThrow(() -> new ApiException(HttpStatus.UNAUTHORIZED, "account_unavailable",
                        "Your account is no longer available"));
    }

    private User resolveGoogleUser(GoogleUserInfo profile) {
        Optional<User> byGoogleSubject = userRepository.findByGoogleSub(profile.sub());
        if (byGoogleSubject.isPresent()) {
            User user = byGoogleSubject.get();
            if (!user.getEmail().equalsIgnoreCase(profile.email())) {
                userRepository.findByEmailIgnoreCase(profile.email()).ifPresent(conflict -> {
                    if (!conflict.getId().equals(user.getId())) {
                        throw new ApiException(HttpStatus.CONFLICT, "email_in_use",
                                "This email address is already linked to another account");
                    }
                });
                user.setEmail(profile.email());
            }
            return user;
        }

        Optional<User> byEmail = userRepository.findByEmailIgnoreCase(profile.email());
        if (byEmail.isPresent()) {
            User user = byEmail.get();
            if (user.getGoogleSub() != null && !user.getGoogleSub().equals(profile.sub())) {
                throw new ApiException(HttpStatus.CONFLICT, "account_conflict",
                        "This email address is already linked to a different Google account");
            }
            user.setGoogleSub(profile.sub());
            user.setProvider(AuthProvider.GOOGLE);
            return user;
        }

        User user = new User();
        user.setEmail(profile.email());
        user.setName(truncate(profile.name(), 120));
        user.setPictureUrl(truncate(profile.picture(), 1024));
        user.setProvider(AuthProvider.GOOGLE);
        user.setGoogleSub(profile.sub());
        user.setEnabled(true);
        return user;
    }

    private void applyGoogleProfile(User user, GoogleUserInfo profile) {
        if (profile.name() != null && !profile.name().isBlank()) {
            user.setName(truncate(profile.name(), 120));
        }
        if (profile.picture() != null && !profile.picture().isBlank()) {
            user.setPictureUrl(truncate(profile.picture(), 1024));
        }
        user.setLastLoginAt(Instant.now());
    }

    private AuthSession createSession(User user, String familyId, String userAgent, String ipAddress) {
        TokenService.AccessToken accessToken = tokenService.createAccessToken(user);
        String rawRefreshToken = tokenService.generateRefreshToken();

        RefreshToken refreshToken = new RefreshToken();
        refreshToken.setUser(user);
        refreshToken.setFamilyId(familyId);
        refreshToken.setTokenHash(tokenService.hashRefreshToken(rawRefreshToken));
        refreshToken.setExpiresAt(tokenService.refreshTokenExpiry());
        refreshToken.setUserAgent(userAgent);
        refreshToken.setIpAddress(ipAddress);
        refreshTokenRepository.save(refreshToken);

        return new AuthSession(
                accessToken.token(),
                accessToken.expiresIn(),
                rawRefreshToken,
                refreshToken.getExpiresAt(),
                user
        );
    }

    private static String normalizeEmail(String email) {
        return email.toLowerCase(Locale.ROOT).trim();
    }

    private static String truncate(String value, int maxLength) {
        if (value == null) {
            return null;
        }
        return value.length() <= maxLength ? value : value.substring(0, maxLength);
    }
}
