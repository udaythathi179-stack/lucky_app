package com.tuneus.auth.util;

import jakarta.servlet.http.HttpServletRequest;

public final class RequestUtils {

    private RequestUtils() {
    }

    public static String clientIp(HttpServletRequest request) {
        String forwardedFor = request.getHeader("X-Forwarded-For");
        if (forwardedFor != null && !forwardedFor.isBlank()) {
            return trimTo(forwardedFor.split(",")[0].trim(), 64);
        }
        return trimTo(request.getRemoteAddr(), 64);
    }

    public static String userAgent(HttpServletRequest request) {
        return trimTo(request.getHeader("User-Agent"), 512);
    }

    private static String trimTo(String value, int maxLength) {
        if (value == null) {
            return "";
        }
        return value.length() <= maxLength ? value : value.substring(0, maxLength);
    }
}
