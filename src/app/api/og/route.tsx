import { ImageResponse } from "next/og";

export const runtime = "edge";

export async function GET() {
  return new ImageResponse(
    (
      <div style={{
        width: "100%", height: "100%",
        background: "linear-gradient(135deg, #0E0F12 0%, #16171B 100%)",
        display: "flex", flexDirection: "column", padding: "80px 96px",
        color: "#F4F1EB", fontFamily: "serif",
      }}>
        <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between", color: "#C9A961", fontSize: 18, letterSpacing: 4, textTransform: "uppercase", fontWeight: 700, fontFamily: "sans-serif" }}>
          <span>Portfolio · 2026</span>
          <span>Riyadh · Cairo</span>
        </div>
        <div style={{ width: 90, height: 3, background: "#C9A961", marginTop: 36 }} />
        <div style={{ display: "flex", flexDirection: "column", marginTop: 32 }}>
          <div style={{ fontSize: 96, lineHeight: 1, fontWeight: 500, letterSpacing: -1 }}>Abdalrahman</div>
          <div style={{ fontSize: 96, lineHeight: 1, fontStyle: "italic", color: "#C9A961" }}>ElGazzawi.</div>
        </div>
        <div style={{ marginTop: 48, fontSize: 30, color: "#F4F1EB", fontFamily: "sans-serif", fontWeight: 600 }}>
          Esports & Gaming Operator
        </div>
        <div style={{ marginTop: 8, fontSize: 22, color: "#8A8A90", fontFamily: "sans-serif" }}>
          Commercial Strategy · Partnerships · Marketing · Operations
        </div>
        <div style={{ marginTop: "auto", display: "flex", justifyContent: "space-between", alignItems: "flex-end", color: "#8A8A90", fontSize: 20, fontFamily: "sans-serif" }}>
          <div style={{ display: "flex", flexDirection: "column" }}>
            <div style={{ color: "#C9A961", fontWeight: 700, letterSpacing: 4, fontSize: 16, textTransform: "uppercase" }}>Currently</div>
            <div style={{ marginTop: 6, color: "#F4F1EB", fontFamily: "serif", fontStyle: "italic", fontSize: 28 }}>Esports Marketing Manager · Team Falcons</div>
          </div>
          <div style={{ color: "#F4F1EB", fontFamily: "serif", fontStyle: "italic", fontSize: 22 }}>10+ years.</div>
        </div>
      </div>
    ),
    { width: 1200, height: 630 }
  );
}
