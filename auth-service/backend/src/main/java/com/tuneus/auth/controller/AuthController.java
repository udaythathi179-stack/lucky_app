package com.tuneus.auth.controller;

import com.tuneus.auth.config.AuthProperties;
import com.tuneus.auth.dto.AuthConfigResponse;
import com.tuneus.auth.dto.AuthResponse;
import com.tuneus.auth.dto.GoogleLoginRequest;
import com.tuneus.auth.dto.LoginRequest;
import com.tuneus.auth.dto.MessageResponse;
import com.tuneus.auth.dto.RefreshResponse;
import com.tuneus.auth.dto.RegisterRequest;
import com.tuneus.auth.dto.UserResponse;
import com.tuneus.auth.exception.ApiException;
import com.tuneus.auth.service.AuthService;
import com.tuneus.auth.service.AuthSession;
import com.tuneus.auth.service.RefreshCookieService;
import com.tuneus.auth.util.RequestUtils;
import jakarta.servlet.http.Cookie;
import jakarta.servlet.http.HttpServletRequest;
import jakarta.servlet.http.HttpServletResponse;
import jakarta.validation.Valid;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.security.core.Authentication;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequestMapping("/api/auth")
public class AuthController {

    private static final String CSRF_HEADER = "X-Requested-With";
    private static final String CSRF_HEADER_VALUE = "XMLHttpRequest";

    private final AuthService authService;
    private final RefreshCookieService refreshCookieService;
    private final AuthProperties properties;

    public AuthController(AuthService authService,
                          RefreshCookieService refreshCookieService,
                          AuthProperties properties) {
        this.authService = authService;
        this.refreshCookieService = refreshCookieService;
        this.properties = properties;
    }

    @PostMapping("/google")
    public ResponseEntity<AuthResponse> googleLogin(@Valid @RequestBody GoogleLoginRequest request,
                                                    HttpServletRequest httpRequest,
                                                    HttpServletResponse httpResponse) {
        AuthSession session = authService.loginWithGoogle(
                request.idToken(),
                RequestUtils.userAgent(httpRequest),
                RequestUtils.clientIp(httpRequest)
        );
        refreshCookieService.setRefreshCookie(httpResponse, session.refreshToken());
        return ResponseEntity.ok(AuthResponse.from(session));
    }

    @PostMapping("/register")
    public ResponseEntity<AuthResponse> register(@Valid @RequestBody RegisterRequest request,
                                                 HttpServletRequest httpRequest,
                                                 HttpServletResponse httpResponse) {
        AuthSession session = authService.register(
                request,
                RequestUtils.userAgent(httpRequest),
                RequestUtils.clientIp(httpRequest)
        );
        refreshCookieService.setRefreshCookie(httpResponse, session.refreshToken());
        return ResponseEntity.ok(AuthResponse.from(session));
    }

    @PostMapping("/login")
    public ResponseEntity<AuthResponse> login(@Valid @RequestBody LoginRequest request,
                                              HttpServletRequest httpRequest,
                                              HttpServletResponse httpResponse) {
        AuthSession session = authService.login(
                request,
                RequestUtils.userAgent(httpRequest),
                RequestUtils.clientIp(httpRequest)
        );
        refreshCookieService.setRefreshCookie(httpResponse, session.refreshToken());
        return ResponseEntity.ok(AuthResponse.from(session));
    }

    @PostMapping("/refresh")
    public ResponseEntity<RefreshResponse> refresh(HttpServletRequest httpRequest,
                                                   HttpServletResponse httpResponse) {
        requireCsrfHeader(httpRequest);
        AuthSession session = authService.refresh(
                readRefreshCookie(httpRequest),
                RequestUtils.userAgent(httpRequest),
                RequestUtils.clientIp(httpRequest)
        );
        refreshCookieService.setRefreshCookie(httpResponse, session.refreshToken());
        return ResponseEntity.ok(RefreshResponse.from(session));
    }

    @PostMapping("/logout")
    public ResponseEntity<MessageResponse> logout(HttpServletRequest httpRequest,
                                                  HttpServletResponse httpResponse) {
        requireCsrfHeader(httpRequest);
        authService.logout(readRefreshCookie(httpRequest));
        refreshCookieService.clearRefreshCookie(httpResponse);
        return ResponseEntity.ok(new MessageResponse("Signed out successfully"));
    }

    @GetMapping("/me")
    public ResponseEntity<UserResponse> me(Authentication authentication) {
        String userId = (String) authentication.getPrincipal();
        return ResponseEntity.ok(UserResponse.from(authService.getCurrentUser(userId)));
    }

    @GetMapping("/config")
    public ResponseEntity<AuthConfigResponse> config() {
        return ResponseEntity.ok(new AuthConfigResponse(
                properties.googleClientId(),
                properties.issuer(),
                properties.audience()
        ));
    }

    private void requireCsrfHeader(HttpServletRequest request) {
        if (!CSRF_HEADER_VALUE.equalsIgnoreCase(request.getHeader(CSRF_HEADER))) {
            throw new ApiException(HttpStatus.FORBIDDEN, "csrf_validation_failed",
                    "Missing required request header");
        }
    }

    private String readRefreshCookie(HttpServletRequest request) {
        Cookie[] cookies = request.getCookies();
        if (cookies == null) {
            return null;
        }
        for (Cookie cookie : cookies) {
            if (refreshCookieService.cookieName().equals(cookie.getName())) {
                return cookie.getValue();
            }
        }
        return null;
    }
}
