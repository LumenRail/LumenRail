"use client";
// SPDX-License-Identifier: MIT


import { WalletButton } from "./WalletButton";
import { NotificationCenter } from "./NotificationCenter";
import { useTheme } from "@/hooks/useTheme";

export function Header() {
  const { toggle, resolved } = useTheme();
  const isDark = resolved === "dark";

  return (
    <header className="sticky top-0 z-30 h-20 bg-[#f4f7f2]/85 dark:bg-[#08110f]/85 backdrop-blur-xl border-b border-[#dce7df] dark:border-[#20352f]">
      <div className="flex items-center justify-between h-full px-4 md:px-6">
        {/* Left: Page title / breadcrumb area */}
        <div className="flex items-center gap-4">
          <h2 className="text-sm font-medium text-gray-500 dark:text-gray-400 hidden md:block">
            <span className="text-[#718278] dark:text-[#91a69b]">Workspace</span>
            <span className="text-[#c1cec4] dark:text-[#40594e]">/</span>
            <span className="text-[#12201c] dark:text-[#e8f0e8]">Operations</span>
          </h2>
        </div>

        {/* Right: Notifications + Theme toggle + Wallet button */}
        <div className="flex items-center gap-2 md:gap-3">
          <NotificationCenter />
          {/* Dark mode toggle */}
          <button
            onClick={toggle}
            aria-label={isDark ? "Switch to light mode" : "Switch to dark mode"}
            title={isDark ? "Switch to light mode" : "Switch to dark mode"}
            className="p-2 rounded-lg text-gray-500 dark:text-gray-400 hover:bg-gray-100 dark:hover:bg-gray-800 hover:text-gray-700 dark:hover:text-gray-200 transition-colors"
          >
            {isDark ? (
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-5 h-5">
                <path strokeLinecap="round" strokeLinejoin="round" d="M12 3v2.25m6.364.386l-1.591 1.591M21 12h-2.25m-.386 6.364l-1.591-1.591M12 18.75V21m-4.773-4.227l-1.591 1.591M5.25 12H3m4.227-4.773L5.636 5.636M15.75 12a3.75 3.75 0 11-7.5 0 3.75 3.75 0 017.5 0z" />
              </svg>
            ) : (
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-5 h-5">
                <path strokeLinecap="round" strokeLinejoin="round" d="M21.752 15.002A9.718 9.718 0 0118 15.75c-5.385 0-9.75-4.365-9.75-9.75 0-1.33.266-2.597.748-3.752A9.753 9.753 0 003 11.25C3 16.635 7.365 21 12.75 21a9.753 9.753 0 009.002-5.998z" />
              </svg>
            )}
          </button>
          <WalletButton />
        </div>
      </div>
    </header>
  );
}
