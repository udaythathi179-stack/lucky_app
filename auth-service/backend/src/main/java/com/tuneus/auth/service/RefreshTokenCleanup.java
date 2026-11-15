package com.tuneus.auth.service;

import com.tuneus.auth.repository.RefreshTokenRepository;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.scheduling.annotation.Scheduled;
import org.springframework.stereotype.Component;
import org.springframework.transaction.annotation.Transactional;

import java.time.Duration;
import java.time.Instant;

@Component
public class RefreshTokenCleanup {

    private static final Logger log = LoggerFactory.getLogger(RefreshTokenCleanup.class);

    private final RefreshTokenRepository refreshTokenRepository;

    public RefreshTokenCleanup(RefreshTokenRepository refreshTokenRepository) {
        this.refreshTokenRepository = refreshTokenRepository;
    }

    @Scheduled(fixedDelayString = "PT6H")
    @Transactional
    public void purgeStaleTokens() {
        Instant cutoff = Instant.now().minus(Duration.ofDays(1));
        int removed = refreshTokenRepository.deleteStale(cutoff);
        if (removed > 0) {
            log.info("Removed {} expired or revoked refresh tokens", removed);
        }
    }
}
