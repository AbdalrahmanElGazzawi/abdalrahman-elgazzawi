import type { Config } from "tailwindcss";

// Light theme. Off-white paper. Near-black ink. One restrained accent (deep navy).
// Single premium navy accent. Built like Linear / Stripe / Pitch — confident and quiet.
const config: Config = {
  content: ["./src/**/*.{ts,tsx,mdx}", "./content/**/*.{md,mdx}"],
  theme: {
    extend: {
      colors: {
        bg:       "#F6F7F9",   // warm off-white paper
        panel:    "#FFFFFF",   // clean card surface
        deep:     "#E9EBEF",   // subtle alt panel
        paper:    "#0F0F0F",   // near-black ink (renamed semantically; "paper" stays for API compat)
        ink:      "#0F0F0F",
        accent:   { DEFAULT: "#0A1F3D", soft: "#1E40AF", deep: "#061735" },  // deep navy
        // Back-compat aliases so older components don't break:
        gold:     { DEFAULT: "#0A1F3D", soft: "#1E40AF", deep: "#061735" },
        green:    { DEFAULT: "#0A1F3D", deep: "#061735", soft: "#1E40AF", glow: "#1E40AF" },
        muted:    "#666666",
        dim:      "#999999",
        hairline: "#E1E4EA",
        rule:     "#CDD2DA",
      },
      fontFamily: {
        sans:  ["var(--font-inter)", "ui-sans-serif", "system-ui", "-apple-system", "Segoe UI", "Roboto", "sans-serif"],
        serif: ["var(--font-newsreader)", "Georgia", "Charter", "serif"],
        mono:  ["ui-monospace", "SFMono-Regular", "Menlo", "monospace"],
      },
      fontSize: {
        eyebrow:   ["12px", { lineHeight: "1.2", letterSpacing: "0.04em" }],
        "display-s": ["clamp(28px, 3.6vw, 40px)",  { lineHeight: "1.12", letterSpacing: "-0.018em" }],
        "display-m": ["clamp(34px, 4.8vw, 56px)",  { lineHeight: "1.05", letterSpacing: "-0.022em" }],
        "display-l": ["clamp(44px, 7.5vw, 96px)",  { lineHeight: "0.98", letterSpacing: "-0.03em"  }],
      },
      maxWidth: { content: "1200px", prose: "62ch" },
      borderRadius: { panel: "6px" },
    },
  },
  plugins: [],
};
export default config;
