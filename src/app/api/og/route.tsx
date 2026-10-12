import { ImageResponse } from "next/og";
import { site } from "@/content/site";

// Social share card. Rendered once at build time and served as a static PNG.
export const dynamic = "force-static";

// Matches the site theme in tailwind.config.ts.
const INK = "#0F0F0F";
const NAVY = "#0A1F3D";
const MUTED = "#666666";
const BG = "#F6F7F9";
const HAIRLINE = "#E1E4EA";

export async function GET() {
  return new ImageResponse(
    (
      <div style={{
        width: "100%", height: "100%",
        display: "flex", flexDirection: "column", padding: "72px 88px",
        background: BG, color: INK,
      }}>
        <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", fontSize: 24, color: MUTED }}>
          <span style={{ color: INK, fontWeight: 700 }}>{site.name}</span>
          <span>Cairo · Riyadh · Remote</span>
        </div>
        <div style={{ width: 96, height: 4, background: NAVY, marginTop: 36 }} />

        <div style={{ display: "flex", flexDirection: "column", marginTop: 44, fontSize: 80, lineHeight: 1.05, letterSpacing: -2, fontWeight: 700 }}>
          <span>Commercial partnerships</span>
          <span style={{ color: NAVY }}>and campaign operations.</span>
        </div>

        <div style={{ display: "flex", marginTop: 36, fontSize: 25, color: MUTED, lineHeight: 1.4 }}>
          Team Falcons · Esports World Cup via SPORTFIVE · Sony INZONE · True Gaming · GLG
        </div>

        <div style={{
          marginTop: "auto", display: "flex", justifyContent: "space-between", alignItems: "center",
          borderTop: `1px solid ${HAIRLINE}`, paddingTop: 24, fontSize: 22, color: MUTED,
        }}>
          <span>{site.url.replace(/^https?:\/\//, "")}</span>
          <span>Open to Riyadh, GCC, Remote & Global</span>
        </div>
      </div>
    ),
    { width: 1200, height: 630 },
  );
}
