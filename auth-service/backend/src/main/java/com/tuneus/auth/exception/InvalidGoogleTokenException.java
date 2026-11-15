package com.tuneus.auth.exception;

import org.springframework.http.HttpStatus;

public class InvalidGoogleTokenException extends ApiException {

    public InvalidGoogleTokenException(String message) {
        super(HttpStatus.UNAUTHORIZED, "invalid_google_token", message);
    }

    public InvalidGoogleTokenException(String message, Throwable cause) {
        super(HttpStatus.UNAUTHORIZED, "invalid_google_token", message);
        initCause(cause);
    }
}
