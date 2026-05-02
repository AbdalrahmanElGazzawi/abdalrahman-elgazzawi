import { ImageResponse } from "next/og";

export const runtime = "edge";

export async function GET() {
  return new ImageResponse(
    (
      <div style={{
        width: "100%", height: "100%",
        background: "linear-gradient(135deg, #0A0B0E 0%, #101218 100%)",
        display: "flex", flexDirection: "column", padding: "70px 88px",
        color: "#F4F1EB", fontFamily: "serif", position: "relative",
      }}>
        {/* Top rule */}
        <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between", color: "#C9A961", fontSize: 16, letterSpacing: 4, textTransform: "uppercase", fontWeight: 700, fontFamily: "monospace" }}>
          <span>// COMMERCIAL OPERATING SYSTEMS</span>
          <span>RIYADH · CAIRO</span>
        </div>
        <div style={{ width: 90, height: 2, background: "#C9A961", marginTop: 30 }} />

        {/* Headline */}
        <div style={{ display: "flex", flexDirection: "column", marginTop: 28 }}>
          <div style={{ fontSize: 84, lineHeight: 1, fontWeight: 500, letterSpacing: -1, color: "#F4F1EB" }}>Esports revenue,</div>
          <div style={{ fontSize: 84, lineHeight: 1, fontStyle: "italic", color: "#C9A961" }}>made defensible.</div>
        </div>

        <div style={{ marginTop: 38, fontSize: 26, color: "#F4F1EB", fontFamily: "sans-serif", fontWeight: 600, maxWidth: 920 }}>
          Pricing methodology · Sponsorship architecture · Agency governance · Pipeline control
        </div>

        {/* Footer */}
        <div style={{ marginTop: "auto", display: "flex", justifyContent: "space-between", alignItems: "flex-end", color: "#7E8088", fontSize: 18, fontFamily: "monospace" }}>
          <div style={{ display: "flex", flexDirection: "column" }}>
            <div style={{ color: "#C9A961", fontWeight: 700, letterSpacing: 4, fontSize: 14, textTransform: "uppercase" }}>// CURRENTLY</div>
            <div style={{ marginTop: 8, color: "#F4F1EB", fontFamily: "serif", fontStyle: "italic", fontSize: 26 }}>Esports Marketing Manager · Team Falcons</div>
          </div>
          <div style={{ display: "flex", flexDirection: "column", alignItems: "flex-end" }}>
            <div style={{ color: "#5BD394", fontFamily: "monospace", fontSize: 14, letterSpacing: 2 }}>● 200 talents · 778+ EWC deliverables</div>
            <div style={{ marginTop: 6, color: "#F4F1EB", fontFamily: "serif", fontStyle: "italic", fontSize: 22 }}>Abdalrahman ElGazzawi</div>
          </div>
        </div>
      </div>
    ),
    { width: 1200, height: 630 }
  );
}
