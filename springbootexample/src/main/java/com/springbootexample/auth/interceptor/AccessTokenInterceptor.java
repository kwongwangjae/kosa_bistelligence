package com.springbootexample.auth.interceptor;

import java.io.IOException;
import java.util.Map;

import org.springframework.core.annotation.AnnotatedElementUtils;
import org.springframework.http.HttpHeaders;
import org.springframework.http.HttpStatus;
import org.springframework.http.MediaType;
import org.springframework.stereotype.Component;
import org.springframework.web.method.HandlerMethod;
import org.springframework.web.servlet.HandlerInterceptor;

import com.fasterxml.jackson.databind.ObjectMapper;
import com.springbootexample.auth.annotation.CheckAccessToken;
import com.springbootexample.auth.jwt.JwtTokenProvider;

import io.jsonwebtoken.Claims;
import io.jsonwebtoken.JwtException;
import jakarta.servlet.http.HttpServletRequest;
import jakarta.servlet.http.HttpServletResponse;
import lombok.RequiredArgsConstructor;

@Component
@RequiredArgsConstructor
public class AccessTokenInterceptor implements HandlerInterceptor {
	private static final String BEARER_PREFIX = "Bearer ";

	private final JwtTokenProvider jwtTokenProvider;
	private final ObjectMapper objectMapper;

	@Override
	public boolean preHandle(HttpServletRequest request, HttpServletResponse response, Object handler) throws Exception {
		if (!(handler instanceof HandlerMethod handlerMethod)) {
			return true;
		}

		if (!requiresAccessToken(handlerMethod)) {
			return true;
		}

		String accessToken = resolveAccessToken(request);
		if (accessToken == null || accessToken.isBlank()) {
			writeUnauthorized(response, "AccessToken 이 필요합니다.");
			return false;
		}

		try {
			Claims claims = jwtTokenProvider.parseAccessToken(accessToken);
			if (!jwtTokenProvider.isAccessToken(claims)) {
				writeUnauthorized(response, "유효한 AccessToken 이 아닙니다.");
				return false;
			}

			request.setAttribute("accessTokenClaims", claims);
			request.setAttribute("accessTokenMid", claims.getSubject());
			request.setAttribute("accessTokenRole", claims.get("role", String.class));
			return true;
		} catch (JwtException | IllegalArgumentException e) {
			writeUnauthorized(response, "AccessToken 검증에 실패했습니다.");
			return false;
		}
	}

	private boolean requiresAccessToken(HandlerMethod handlerMethod) {
		return AnnotatedElementUtils.hasAnnotation(handlerMethod.getMethod(), CheckAccessToken.class)
			|| AnnotatedElementUtils.hasAnnotation(handlerMethod.getBeanType(), CheckAccessToken.class);
	}

	private String resolveAccessToken(HttpServletRequest request) {
		String authorization = request.getHeader(HttpHeaders.AUTHORIZATION);
		if (authorization != null && authorization.startsWith(BEARER_PREFIX)) {
			return authorization.substring(BEARER_PREFIX.length());
		}

		String accessToken = request.getHeader("accessToken");
		if (accessToken == null || accessToken.isBlank()) {
			return null;
		}
		if (accessToken.startsWith(BEARER_PREFIX)) {
			return accessToken.substring(BEARER_PREFIX.length());
		}
		return accessToken;
	}

	private void writeUnauthorized(HttpServletResponse response, String message) throws IOException {
		response.setStatus(HttpStatus.UNAUTHORIZED.value());
		response.setContentType(MediaType.APPLICATION_JSON_VALUE);
		response.setCharacterEncoding("UTF-8");
		objectMapper.writeValue(response.getWriter(), Map.of(
			"status", HttpStatus.UNAUTHORIZED.value(),
			"message", message
		));
	}
}
