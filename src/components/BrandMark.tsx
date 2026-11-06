import type { SVGProps } from "react";

export function BrandMark({ className = "h-9 w-9" }: SVGProps<SVGSVGElement>) {
  return (
    <svg className={className} viewBox="0 0 40 40" fill="none" aria-hidden="true">
      <rect width="40" height="40" rx="12" fill="url(#lumenrail-gradient)" />
      <path d="M11 12.5h18M11 20h18M11 27.5h18" stroke="#07110f" strokeWidth="2.4" strokeLinecap="round" />
      <circle cx="15" cy="12.5" r="2.4" fill="#F4FFB8" />
      <circle cx="25" cy="20" r="2.4" fill="#F4FFB8" />
      <circle cx="18" cy="27.5" r="2.4" fill="#F4FFB8" />
      <defs>
        <linearGradient id="lumenrail-gradient" x1="7" y1="4" x2="34" y2="37" gradientUnits="userSpaceOnUse">
          <stop stopColor="#D9FF62" />
          <stop offset="1" stopColor="#35D6C1" />
        </linearGradient>
      </defs>
    </svg>
  );
}
