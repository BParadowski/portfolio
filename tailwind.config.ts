import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    container: {
      screens: {
        sm: "640px",
        md: "768px",
        lg: "1024px",
        xl: "1280px",
        "2xl": "1280px",
      },
      center: true,
      padding: { DEFAULT: "1.5rem", sm: "2.5rem", lg: "4rem", "2xl": "6rem" },
    },
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic": "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
        dots: "url('/dots.svg')",
      },
      colors: {
        reddish: "#df585b",
        purpleish: "#683f5f",
      },
      boxShadow: {
        heroBg:
          "-2rem 0 2rem 2rem rgb(255,255,255, 0.65), 2rem 0 2rem rgb(255,255,255, 0.65), inset 500rem 500rem rgb(255,255,255, 0.65)",
        heroBgMobile: "inset 0 -3rem  3rem 2rem rgb(255,255,255, 0.85), inset 0 3rem  3rem rgb(255,255,255, 0.85)",
      },
      animation: {
        "spin-slow": "spin 12s linear infinite",
        "spin-slower": "spin 16s linear infinite",
      },
    },
  },
  safelist: ["text-xs", "align-super"],
  plugins: [],
};
export default config;
