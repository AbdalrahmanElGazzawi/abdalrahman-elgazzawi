import type { Config } from "tailwindcss";

const config: Config = {
  content: ["./src/**/*.{ts,tsx,mdx}", "./content/**/*.{md,mdx}"],
  theme: {
    extend: {
      colors: {
        // Warmer, less "luxury template": dark espresso, cream paper, muted clay accent
        bg:       "#15110D",
        panel:    "#1B1611",
        deep:     "#221C16",
        paper:    "#EFE7D9",
        gold:     { DEFAULT: "#C99A55", soft: "#D9B077", deep: "#8C6A33" },
        green:    { DEFAULT: "#5C8B6F", deep: "#1F3A2C", soft: "#7BB291", glow: "#A3DABA" },
        muted:    "#998E7E",
        dim:      "#665C50",
        hairline: "#2E2620",
        rule:     "#3D332B",
      },
      fontFamily: {
        sans:  ["var(--font-inter)", "ui-sans-serif", "system-ui", "-apple-system", "sans-serif"],
        serif: ["var(--font-newsreader)", "Newsreader", "Georgia", "Charter", "Cambria", "serif"],
        mono:  ["ui-monospace", "SFMono-Regular", "Menlo", "monospace"],
      },
      fontSize: {
        eyebrow:   ["11px",  { lineHeight: "1.2",  letterSpacing: "0.06em" }],
        "display-s": ["clamp(28px, 3.6vw, 40px)",  { lineHeight: "1.12", letterSpacing: "-0.012em" }],
        "display-m": ["clamp(34px, 4.8vw, 56px)",  { lineHeight: "1.05", letterSpacing: "-0.018em" }],
        "display-l": ["clamp(40px, 6.4vw, 76px)",  { lineHeight: "1.02", letterSpacing: "-0.022em" }],
      },
      maxWidth: { content: "1240px", prose: "62ch" },
      borderRadius: { panel: "10px" },
    },
  },
  plugins: [],
};
export default config;
