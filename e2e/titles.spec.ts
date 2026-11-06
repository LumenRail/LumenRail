import { test, expect } from "@playwright/test";

/**
 * Every route sets a dynamic `document.title` via `usePageTitle` (mirroring
 * the `%s | LumenRail` metadata template). These checks assert the browser
 * tab title is non-default (not the layout's "LumenRail — Stellar Payment
 * Orchestration") on key routes.
 */
const ROUTE_TITLES: Record<string, RegExp> = {
  "/": /Treasury Dashboard \| LumenRail/,
  "/payments": /^Payments \| LumenRail$/,
  "/batches": /^Batch Payments \| LumenRail$/,
  "/batches/new": /^New Batch Payment \| LumenRail$/,
  "/send": /^Send Payment \| LumenRail$/,
  "/webhooks": /^Webhooks \| LumenRail$/,
  "/recurring": /^Recurring Payments \| LumenRail$/,
  "/requests": /^Payment Requests \| LumenRail$/,
  "/contracts": /^Smart Contracts \| LumenRail$/,
  "/analytics": /^Analytics \| LumenRail$/,
  "/events": /^Event Stream \| LumenRail$/,
  "/audit-log": /^Audit Log \| LumenRail$/,
  "/hooks": /^Notification Hooks \| LumenRail$/,
  "/rbac": /^Access Control \(RBAC\) \| LumenRail$/,
  "/fee-config": /^Fee Configuration \| LumenRail$/,
  "/refunds": /^Refunds \| LumenRail$/,
  "/timelock": /^Timelock \| LumenRail$/,
  "/policy-versions": /^Policy Versions \| LumenRail$/,
  "/multisig": /^Multisig \| LumenRail$/,
  "/governance": /^Governance \| LumenRail$/,
};

test.describe("Dynamic page titles", () => {
  for (const [path, titlePattern] of Object.entries(ROUTE_TITLES)) {
    test(`${path} sets a non-default page title`, async ({ page }) => {
      await page.goto(path);
      // Titles are applied client-side after hydration — allow time in production.
      await expect(page).toHaveTitle(titlePattern, { timeout: 15000 });
    });
  }
});
