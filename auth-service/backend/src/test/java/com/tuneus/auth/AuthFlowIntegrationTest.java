package com.tuneus.auth;

import com.fasterxml.jackson.databind.JsonNode;
import com.fasterxml.jackson.databind.ObjectMapper;
import com.tuneus.auth.entity.User;
import com.tuneus.auth.repository.UserRepository;
import com.tuneus.auth.service.GoogleTokenVerifier;
import com.tuneus.auth.service.GoogleUserInfo;
import jakarta.servlet.http.Cookie;
import org.junit.jupiter.api.Test;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.autoconfigure.web.servlet.AutoConfigureMockMvc;
import org.springframework.boot.test.context.SpringBootTest;
import org.springframework.http.HttpHeaders;
import org.springframework.http.MediaType;
import org.springframework.test.context.ActiveProfiles;
import org.springframework.test.context.bean.override.mockito.MockitoBean;
import org.springframework.test.web.servlet.MockMvc;
import org.springframework.test.web.servlet.MvcResult;

import java.util.Optional;

import static org.assertj.core.api.Assertions.assertThat;
import static org.mockito.BDDMockito.given;
import static org.springframework.test.web.servlet.request.MockMvcRequestBuilders.get;
import static org.springframework.test.web.servlet.request.MockMvcRequestBuilders.post;
import static org.springframework.test.web.servlet.result.MockMvcResultMatchers.jsonPath;
import static org.springframework.test.web.servlet.result.MockMvcResultMatchers.status;

@SpringBootTest
@AutoConfigureMockMvc
@ActiveProfiles("test")
class AuthFlowIntegrationTest {

    private static final String CSRF_HEADER = "X-Requested-With";
    private static final String CSRF_VALUE = "XMLHttpRequest";

    @Autowired
    private MockMvc mockMvc;

    @Autowired
    private ObjectMapper objectMapper;

    @Autowired
    private UserRepository userRepository;

    @MockitoBean
    private GoogleTokenVerifier googleTokenVerifier;

    @Test
    void registerLoginRefreshAndReuseDetectionFlow() throws Exception {
        String registerBody = """
                {
                  "name": "Test Listener",
                  "email": "listener@example.com",
                  "password": "StrongPass123!"
                }
                """;

        MvcResult registerResult = mockMvc.perform(post("/api/auth/register")
                        .contentType(MediaType.APPLICATION_JSON)
                        .content(registerBody))
                .andExpect(status().isOk())
                .andExpect(jsonPath("$.accessToken").isNotEmpty())
                .andExpect(jsonPath("$.user.email").value("listener@example.com"))
                .andExpect(jsonPath("$.user.provider").value("email"))
                .andReturn();

        String accessToken = json(registerResult).get("accessToken").asText();
        Cookie firstRefreshCookie = refreshCookie(registerResult);

        mockMvc.perform(get("/api/auth/me")
                        .header(HttpHeaders.AUTHORIZATION, "Bearer " + accessToken))
                .andExpect(status().isOk())
                .andExpect(jsonPath("$.email").value("listener@example.com"));

        MvcResult refreshResult = mockMvc.perform(post("/api/auth/refresh")
                        .cookie(firstRefreshCookie)
                        .header(CSRF_HEADER, CSRF_VALUE))
                .andExpect(status().isOk())
                .andExpect(jsonPath("$.accessToken").isNotEmpty())
                .andExpect(jsonPath("$.user.email").value("listener@example.com"))
                .andReturn();

        Cookie secondRefreshCookie = refreshCookie(refreshResult);
        assertThat(secondRefreshCookie.getValue()).isNotEqualTo(firstRefreshCookie.getValue());

        mockMvc.perform(post("/api/auth/refresh")
                        .cookie(firstRefreshCookie)
                        .header(CSRF_HEADER, CSRF_VALUE))
                .andExpect(status().isUnauthorized())
                .andExpect(jsonPath("$.code").value("refresh_token_reused"));

        mockMvc.perform(post("/api/auth/refresh")
                        .cookie(secondRefreshCookie)
                        .header(CSRF_HEADER, CSRF_VALUE))
                .andExpect(status().isUnauthorized());
    }

    @Test
    void refreshRequiresCsrfHeader() throws Exception {
        MvcResult registerResult = mockMvc.perform(post("/api/auth/register")
                        .contentType(MediaType.APPLICATION_JSON)
                        .content("""
                                {
                                  "name": "CSRF Listener",
                                  "email": "csrf@example.com",
                                  "password": "StrongPass123!"
                                }
                                """))
                .andExpect(status().isOk())
                .andReturn();

        mockMvc.perform(post("/api/auth/refresh")
                        .cookie(refreshCookie(registerResult)))
                .andExpect(status().isForbidden())
                .andExpect(jsonPath("$.code").value("csrf_validation_failed"));
    }

    @Test
    void googleLoginCreatesAccountWithVerifiedProfile() throws Exception {
        given(googleTokenVerifier.verify("valid-google-credential")).willReturn(
                new GoogleUserInfo(
                        "google-subject-123",
                        "google.listener@example.com",
                        "Google Listener",
                        "https://lh3.googleusercontent.com/a/profile-picture",
                        true
                )
        );

        mockMvc.perform(post("/api/auth/google")
                        .contentType(MediaType.APPLICATION_JSON)
                        .content("""
                                { "idToken": "valid-google-credential" }
                                """))
                .andExpect(status().isOk())
                .andExpect(jsonPath("$.user.email").value("google.listener@example.com"))
                .andExpect(jsonPath("$.user.name").value("Google Listener"))
                .andExpect(jsonPath("$.user.provider").value("google"))
                .andExpect(jsonPath("$.user.pictureUrl").value(
                        "https://lh3.googleusercontent.com/a/profile-picture"))
                .andExpect(jsonPath("$.accessToken").isNotEmpty());

        Optional<User> created = userRepository.findByEmailIgnoreCase("google.listener@example.com");
        assertThat(created).isPresent();
        assertThat(created.get().getGoogleSub()).isEqualTo("google-subject-123");
    }

    @Test
    void googleLoginLinksExistingEmailAccount() throws Exception {
        MvcResult registerResult = mockMvc.perform(post("/api/auth/register")
                        .contentType(MediaType.APPLICATION_JSON)
                        .content("""
                                {
                                  "name": "Existing Listener",
                                  "email": "existing@example.com",
                                  "password": "StrongPass123!"
                                }
                                """))
                .andExpect(status().isOk())
                .andReturn();

        String existingUserId = json(registerResult).get("user").get("id").asText();

        given(googleTokenVerifier.verify("existing-google-credential")).willReturn(
                new GoogleUserInfo(
                        "google-subject-existing",
                        "existing@example.com",
                        "Existing Google Listener",
                        "https://lh3.googleusercontent.com/a/existing",
                        true
                )
        );

        mockMvc.perform(post("/api/auth/google")
                        .contentType(MediaType.APPLICATION_JSON)
                        .content("""
                                { "idToken": "existing-google-credential" }
                                """))
                .andExpect(status().isOk())
                .andExpect(jsonPath("$.user.id").value(existingUserId))
                .andExpect(jsonPath("$.user.email").value("existing@example.com"))
                .andExpect(jsonPath("$.user.provider").value("google"));
    }

    @Test
    void rejectsInvalidGoogleCredential() throws Exception {
        given(googleTokenVerifier.verify("invalid-google-credential"))
                .willThrow(new com.tuneus.auth.exception.InvalidGoogleTokenException(
                        "Google sign-in could not be verified. Please try again."));

        mockMvc.perform(post("/api/auth/google")
                        .contentType(MediaType.APPLICATION_JSON)
                        .content("""
                                { "idToken": "invalid-google-credential" }
                                """))
                .andExpect(status().isUnauthorized())
                .andExpect(jsonPath("$.code").value("invalid_google_token"));
    }

    private JsonNode json(MvcResult result) throws Exception {
        return objectMapper.readTree(result.getResponse().getContentAsString());
    }

    private Cookie refreshCookie(MvcResult result) {
        Cookie cookie = result.getResponse().getCookie("tuneus_refresh");
        assertThat(cookie).isNotNull();
        return cookie;
    }
}
