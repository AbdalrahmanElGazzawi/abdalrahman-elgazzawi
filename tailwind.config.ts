import type { Config } from "tailwindcss";

const config: Config = {
  content: ["./src/**/*.{ts,tsx,mdx}", "./content/**/*.{md,mdx}"],
  theme: {
    extend: {
      colors: {
        bg: "#0E0F12",
        panel: "#16171B",
        deep: "#1A1B1F",
        paper: "#F4F1EB",
        gold: { DEFAULT: "#C9A961", soft: "#D9BD80" },
        muted: "#8A8A90",
        hairline: "#26272B",
      },
      fontFamily: {
        sans: ["var(--font-inter)", "ui-sans-serif", "system-ui"],
        serif: ["var(--font-cormorant)", "Georgia", "serif"],
      },
      fontSize: {
        "display-sm": ["clamp(36px, 5vw, 56px)", { lineHeight: "1.1", letterSpacing: "-0.01em" }],
        "display":   ["clamp(48px, 7vw, 88px)",  { lineHeight: "0.95", letterSpacing: "-0.01em" }],
      },
      maxWidth: { content: "1200px" },
      keyframes: {
        fadeUp: { "0%": { opacity: "0", transform: "translateY(12px)" }, "100%": { opacity: "1", transform: "translateY(0)" } },
      },
      animation: { "fade-up": "fadeUp 0.7s cubic-bezier(.2,.7,.2,1) both" },
    },
  },
  plugins: [],
};
export default config;
