import type { Config } from "tailwindcss";

const config: Config = {
  content: ["./src/**/*.{ts,tsx,mdx}", "./content/**/*.{md,mdx}"],
  theme: {
    extend: {
      colors: {
        bg:       "#FAF8F3",
        panel:    "#FFFFFF",
        deep:     "#F2EFE8",
        paper:    "#0A0A0A",
        gold:     { DEFAULT: "#0B2340", soft: "#14305C", deep: "#081A33" },
        green:    { DEFAULT: "#1F6B47", deep: "#0E2A1F", soft: "#3FA972", glow: "#0B2340" },
        muted:    "#545458",
        dim:      "#7A7A7E",
        hairline: "#E8E4DC",
        rule:     "#D4CFC2",
      },
      fontFamily: {
        sans:  ["var(--font-inter)", "ui-sans-serif", "system-ui"],
        serif: ["var(--font-instrument)", "Georgia", "serif"],
        mono:  ["var(--font-jbm)", "ui-monospace", "SFMono-Regular", "Menlo", "monospace"],
      },
      fontSize: {
        "eyebrow":   ["11px", { lineHeight: "1.2", letterSpacing: "0.28em" }],
        "label":     ["12px", { lineHeight: "1.4", letterSpacing: "0.18em" }],
        "display-s": ["clamp(28px, 3.6vw, 44px)", { lineHeight: "1.05", letterSpacing: "-0.015em" }],
        "display-m": ["clamp(36px, 5vw, 64px)",  { lineHeight: "1.02", letterSpacing: "-0.02em" }],
        "display-l": ["clamp(48px, 7.2vw, 96px)", { lineHeight: "0.98", letterSpacing: "-0.022em" }],
      },
      maxWidth: { content: "1280px", prose: "68ch" },
      boxShadow: {
        "panel": "0 1px 0 rgba(11,35,64,0.02) inset, 0 30px 60px -30px rgba(11,35,64,0.12)",
        "gold-ring": "0 0 0 1px rgba(11,35,64,0.18), 0 20px 40px -20px rgba(11,35,64,0.12)",
      },
      keyframes: {
        fadeUp:   { "0%": { opacity: "0", transform: "translateY(12px)" }, "100%": { opacity: "1", transform: "translateY(0)" } },
        drawLine: { "0%": { strokeDashoffset: "1000" }, "100%": { strokeDashoffset: "0" } },
      },
      animation: {
        "fade-up":   "fadeUp 0.7s cubic-bezier(.2,.7,.2,1) both",
        "draw-line": "drawLine 1.6s cubic-bezier(.4,0,.2,1) forwards",
      },
    },
  },
  plugins: [],
};
export default config;
