package com.springbootexample.exception;

import java.time.LocalDateTime;
import java.util.LinkedHashMap;
import java.util.List;
import java.util.Map;

import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.http.converter.HttpMessageNotReadableException;
import org.springframework.validation.BindException;
import org.springframework.web.bind.MethodArgumentNotValidException;
import org.springframework.web.bind.MissingServletRequestParameterException;
import org.springframework.web.bind.annotation.ExceptionHandler;
import org.springframework.web.bind.annotation.RestControllerAdvice;
import org.springframework.web.method.annotation.MethodArgumentTypeMismatchException;

import jakarta.servlet.http.HttpServletRequest;
import jakarta.validation.ConstraintViolationException;
import lombok.extern.slf4j.Slf4j;

@Slf4j
@RestControllerAdvice
public class GlobalExceptionHandler {

	@ExceptionHandler(MethodArgumentNotValidException.class)
	public ResponseEntity<Map<String, Object>> handleMethodArgumentNotValidException(
		MethodArgumentNotValidException exception,
		HttpServletRequest request
	) {
		return ResponseEntity.badRequest()
			.body(errorBody(
				HttpStatus.BAD_REQUEST,
				"요청 값 검증에 실패했습니다.",
				request.getRequestURI(),
				toValidationErrors(exception)
			));
	}

	@ExceptionHandler(BindException.class)
	public ResponseEntity<Map<String, Object>> handleBindException(BindException exception, HttpServletRequest request) {
		return ResponseEntity.badRequest()
			.body(errorBody(
				HttpStatus.BAD_REQUEST,
				"요청 값 검증에 실패했습니다.",
				request.getRequestURI(),
				toValidationErrors(exception)
			));
	}

	@ExceptionHandler(ConstraintViolationException.class)
	public ResponseEntity<Map<String, Object>> handleConstraintViolationException(
		ConstraintViolationException exception,
		HttpServletRequest request
	) {
		List<Map<String, String>> validationErrors = exception.getConstraintViolations()
			.stream()
			.map(violation -> validationError(
				violation.getPropertyPath().toString(),
				violation.getMessage()
			))
			.toList();

		return ResponseEntity.badRequest()
			.body(errorBody(
				HttpStatus.BAD_REQUEST,
				"요청 값 검증에 실패했습니다.",
				request.getRequestURI(),
				validationErrors
			));
	}

	@ExceptionHandler(MissingServletRequestParameterException.class)
	public ResponseEntity<Map<String, Object>> handleMissingServletRequestParameterException(
		MissingServletRequestParameterException exception,
		HttpServletRequest request
	) {
		String message = "%s 파라미터는 필수입니다.".formatted(exception.getParameterName());

		return ResponseEntity.badRequest()
			.body(errorBody(HttpStatus.BAD_REQUEST, message, request.getRequestURI()));
	}

	@ExceptionHandler(MethodArgumentTypeMismatchException.class)
	public ResponseEntity<Map<String, Object>> handleMethodArgumentTypeMismatchException(
		MethodArgumentTypeMismatchException exception,
		HttpServletRequest request
	) {
		String requiredType = exception.getRequiredType() == null
			? "올바른"
			: exception.getRequiredType().getSimpleName();
		String message = "%s 값은 %s 타입이어야 합니다.".formatted(exception.getName(), requiredType);

		return ResponseEntity.badRequest()
			.body(errorBody(HttpStatus.BAD_REQUEST, message, request.getRequestURI()));
	}

	@ExceptionHandler(HttpMessageNotReadableException.class)
	public ResponseEntity<Map<String, Object>> handleHttpMessageNotReadableException(
		HttpMessageNotReadableException exception,
		HttpServletRequest request
	) {
		return ResponseEntity.badRequest()
			.body(errorBody(HttpStatus.BAD_REQUEST, "요청 본문을 읽을 수 없습니다.", request.getRequestURI()));
	}

	@ExceptionHandler(IllegalArgumentException.class)
	public ResponseEntity<Map<String, Object>> handleIllegalArgumentException(
		IllegalArgumentException exception,
		HttpServletRequest request
	) {
		return ResponseEntity.badRequest()
			.body(errorBody(HttpStatus.BAD_REQUEST, exception.getMessage(), request.getRequestURI()));
	}

	@ExceptionHandler(Exception.class)
	public ResponseEntity<Map<String, Object>> handleException(Exception exception, HttpServletRequest request) {
		log.error("Unhandled exception", exception);

		return ResponseEntity.internalServerError()
			.body(errorBody(
				HttpStatus.INTERNAL_SERVER_ERROR,
				"서버 내부 오류가 발생했습니다.",
				request.getRequestURI()
			));
	}

	private List<Map<String, String>> toValidationErrors(BindException exception) {
		return exception.getBindingResult()
			.getFieldErrors()
			.stream()
			.map(fieldError -> validationError(
				fieldError.getField(),
				fieldError.getDefaultMessage()
			))
			.toList();
	}

	private Map<String, Object> errorBody(HttpStatus status, String message, String path) {
		return errorBody(status, message, path, List.of());
	}

	private Map<String, Object> errorBody(
		HttpStatus status,
		String message,
		String path,
		List<Map<String, String>> validationErrors
	) {
		Map<String, Object> body = new LinkedHashMap<>();
		body.put("timestamp", LocalDateTime.now());
		body.put("status", status.value());
		body.put("error", status.getReasonPhrase());
		body.put("message", message);
		body.put("path", path);
		body.put("validationErrors", validationErrors);
		return body;
	}

	private Map<String, String> validationError(String field, String message) {
		Map<String, String> error = new LinkedHashMap<>();
		error.put("field", field);
		error.put("message", message);
		return error;
	}
}
