import type { Config } from "tailwindcss";

const config: Config = {
  content: ["./src/**/*.{ts,tsx,mdx}", "./content/**/*.{md,mdx}"],
  theme: {
    extend: {
      colors: {
        bg:       "#0A0B0E",
        panel:    "#101218",
        deep:     "#161922",
        paper:    "#F4F1EB",
        gold:     { DEFAULT: "#C9A961", soft: "#D9BD80", deep: "#8E7437" },
        green:    { DEFAULT: "#1F6B47", deep: "#0E2A1F", soft: "#3FA972", glow: "#5BD394" },
        muted:    "#7E8088",
        dim:      "#5C5E66",
        hairline: "#1F2128",
        rule:     "#2A2D36",
      },
      fontFamily: {
        sans:  ["var(--font-inter)", "ui-sans-serif", "system-ui"],
        serif: ["var(--font-cormorant)", "Georgia", "serif"],
        mono:  ["var(--font-jbm)", "ui-monospace", "SFMono-Regular", "Menlo", "monospace"],
      },
      fontSize: {
        "eyebrow":   ["11px", { lineHeight: "1.2", letterSpacing: "0.22em" }],
        "label":     ["12px", { lineHeight: "1.4", letterSpacing: "0.18em" }],
        "display-s": ["clamp(28px, 3.6vw, 44px)", { lineHeight: "1.05", letterSpacing: "-0.01em" }],
        "display-m": ["clamp(36px, 5vw, 64px)",  { lineHeight: "1.02", letterSpacing: "-0.015em" }],
        "display-l": ["clamp(48px, 7.2vw, 96px)", { lineHeight: "0.95", letterSpacing: "-0.02em" }],
      },
      maxWidth: { content: "1280px", prose: "68ch" },
      boxShadow: {
        "panel": "0 1px 0 rgba(255,255,255,0.04) inset, 0 30px 60px -30px rgba(0,0,0,0.7)",
        "gold-ring": "0 0 0 1px rgba(201,169,97,0.35), 0 20px 40px -20px rgba(201,169,97,0.18)",
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
