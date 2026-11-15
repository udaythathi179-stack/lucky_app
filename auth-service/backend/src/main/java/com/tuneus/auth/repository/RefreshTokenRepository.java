package com.tuneus.auth.repository;

import com.tuneus.auth.entity.RefreshToken;
import jakarta.persistence.LockModeType;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Lock;
import org.springframework.data.jpa.repository.Modifying;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;

import java.time.Instant;
import java.util.Optional;

public interface RefreshTokenRepository extends JpaRepository<RefreshToken, String> {

    @Lock(LockModeType.PESSIMISTIC_WRITE)
    @Query("select r from RefreshToken r join fetch r.user where r.tokenHash = :tokenHash")
    Optional<RefreshToken> findByTokenHashForUpdate(@Param("tokenHash") String tokenHash);

    @Modifying
    @Query("update RefreshToken r set r.revoked = true, r.revokedAt = :now " +
            "where r.familyId = :familyId and r.revoked = false")
    int revokeFamily(@Param("familyId") String familyId, @Param("now") Instant now);

    @Modifying
    @Query("delete from RefreshToken r where r.expiresAt < :cutoff " +
            "or (r.revoked = true and r.revokedAt < :cutoff)")
    int deleteStale(@Param("cutoff") Instant cutoff);
}
