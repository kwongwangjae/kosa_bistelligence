package com.springbootexample.auth.jwt;

import java.nio.charset.StandardCharsets;
import java.time.Instant;
import java.util.Date;

import javax.crypto.SecretKey;

import org.springframework.stereotype.Component;

import com.springbootexample.auth.config.JwtProperties;
import com.springbootexample.database.entity.Member;

import io.jsonwebtoken.Claims;
import io.jsonwebtoken.Jwts;
import io.jsonwebtoken.security.Keys;
import jakarta.annotation.PostConstruct;
import lombok.RequiredArgsConstructor;

@Component
@RequiredArgsConstructor
public class JwtTokenProvider {
	private static final String TOKEN_TYPE = "access";

	private final JwtProperties jwtProperties;
	private SecretKey secretKey;

	@PostConstruct
	public void init() {
		if (jwtProperties.getSecretKey() == null || jwtProperties.getSecretKey().length() < 32) {
			throw new IllegalStateException("app.jwt.secret-key 는 32자 이상이어야 합니다.");
		}
		secretKey = Keys.hmacShaKeyFor(jwtProperties.getSecretKey().getBytes(StandardCharsets.UTF_8));
	}

	public String createAccessToken(Member member) {
		Instant now = Instant.now();
		return Jwts.builder()
			.subject(member.getMid())
			.issuer(jwtProperties.getIssuer())
			.claim("role", member.getMrole())
			.claim("tokenType", TOKEN_TYPE)
			.issuedAt(Date.from(now))
			.expiration(Date.from(now.plusSeconds(jwtProperties.getAccessTokenExpirationSeconds())))
			.signWith(secretKey)
			.compact();
	}

	public Claims parseAccessToken(String accessToken) {
		return Jwts.parser()
			.verifyWith(secretKey)
			.build()
			.parseSignedClaims(accessToken)
			.getPayload();
	}

	public boolean isAccessToken(Claims claims) {
		return TOKEN_TYPE.equals(claims.get("tokenType", String.class));
	}
}
