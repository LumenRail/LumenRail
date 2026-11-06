import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        ophir: {
          50: "#f4ffe0",
          100: "#e9ffc0",
          200: "#d9ff62",
          300: "#c3f33e",
          400: "#a9dc28",
          500: "#83b91c",
          600: "#638f14",
          700: "#4d7113",
          800: "#3d5814",
          900: "#334915",
          950: "#1e2b12",
        },
        stellar: {
          DEFAULT: "#35d6c1",
          dark: "#159b91",
          light: "#8af3df",
        },
      },
      animation: {
        "pulse-slow": "pulse 3s cubic-bezier(0.4, 0, 0.6, 1) infinite",
        "slide-up": "slideUp 0.3s ease-out",
        "fade-in": "fadeIn 0.3s ease-out",
      },
      keyframes: {
        slideUp: {
          "0%": { transform: "translateY(10px)", opacity: "0" },
          "100%": { transform: "translateY(0)", opacity: "1" },
        },
        fadeIn: {
          "0%": { opacity: "0" },
          "100%": { opacity: "1" },
        },
      },
    },
  },
  plugins: [],
};

export default config;
