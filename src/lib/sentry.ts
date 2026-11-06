// SPDX-License-Identifier: MIT

/**
 * Error tracking integration point.
 * In production, replace with a real Sentry/DataDog/LogRocket integration.
 */

interface ErrorContext {
  component?: string;
  userId?: string;
  url?: string;
  tags?: Record<string, string>;
  extra?: Record<string, unknown>;
}

export function captureError(error: Error, context?: ErrorContext): void {
  if (process.env.NODE_ENV === "production") {
    // Production: send to error tracking service
    // Sentry.captureException(error, { tags: context?.tags, extra: context?.extra });
    console.error("[LumenRail]", {
      name: error.name,
      message: error.message,
      stack: error.stack,
      ...context,
    });
  } else {
    console.error("[LumenRail Dev]", error);
  }
}

export function captureMessage(message: string, level: "info" | "warning" | "error" = "info"): void {
  if (process.env.NODE_ENV === "production") {
    // Sentry.captureMessage(message, level);
    console.log(`[LumenRail ${level}]`, message);
  }
}

/**
 * Set user context for error tracking (Stellar address for anonymous users).
 */
export function setUserContext(publicKey: string): void {
  try {
    // Sentry.setUser({ id: publicKey });
    if (typeof window !== "undefined") {
      window.sessionStorage.setItem("ophir-user-id", publicKey);
    }
  } catch {
    // Silently ignore in SSR
  }
}
