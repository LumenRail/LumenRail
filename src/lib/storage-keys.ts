// SPDX-License-Identifier: MIT

/**
 * localStorage and sessionStorage key constants.
 * Prevents typos and makes it easy to find all storage usage.
 */

export const STORAGE_KEYS = {
  /** LumenRail theme preference ("light" | "dark") */
  THEME: "lumenrail-theme",
  /** Wallet session (publicKey, network, lastConnected) */
  WALLET_SESSION: "lumenrail-wallet-session",
  /** Address book entries */
  ADDRESS_BOOK: "lumenrail-address-book",
  /** Feature flag overrides (dev only) */
  FEATURE_FLAG_PREFIX: "ff_",
  /** Current app version for cache busting */
  APP_VERSION: "lumenrail-version",
  /** A/B test experiment assignments */
  AB_TEST_PREFIX: "ab_",
  /** Wallet connected flag */
  WALLET_CONNECTED: "lumenrail-wallet-connected",
  /** In-app notification center data & read status */
  NOTIFICATIONS: "lumenrail-notifications",
  NOTIFICATIONS_READ: "lumenrail-notifications-read",
} as const;
