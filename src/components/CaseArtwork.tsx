"use client";

// Editorial diagrams for case studies without real photos.
// Light theme — warm off-white bg, ink lines, single forest accent.

const BG     = "#FFFFFF";
const INK    = "#0F0F0F";
const MUTED  = "#6B6B6B";
const ACCENT = "#0F6B4E";

export function FalconsCommercialArt() {
  return (
    <svg viewBox="0 0 1600 1000" xmlns="http://www.w3.org/2000/svg" className="w-full h-full">
      <rect width="1600" height="1000" fill={BG} />
      {/* hairline grid — very subtle */}
      <g stroke={INK} strokeWidth="0.5" opacity="0.06">
        {[160, 320, 480, 640, 800, 960, 1120, 1280, 1440].map((x) => (
          <line key={`v${x}`} x1={x} y1="0" x2={x} y2="1000" />
        ))}
        {[200, 400, 600, 800].map((y) => (
          <line key={`h${y}`} x1="0" y1={y} x2="1600" y2={y} />
        ))}
      </g>
      {/* radial guides */}
      <g stroke={ACCENT} strokeWidth="0.6" opacity="0.18" fill="none">
        <circle cx="800" cy="500" r="380" />
        <circle cx="800" cy="500" r="280" />
      </g>
      {/* 8-stage commercial OS */}
      {["INTAKE","RIGHTS","PRICING","APPROVAL","PROPOSAL","DELIVERY","PROOF","RENEWAL"].map((s, i) => {
        const cx = 800, cy = 500, r = 380;
        const a = (i / 8) * Math.PI * 2 - Math.PI/2;
        const x = cx + Math.cos(a) * r;
        const y = cy + Math.sin(a) * r;
        return (
          <g key={s}>
            <circle cx={x} cy={y} r="5" fill={ACCENT} />
            <text x={x} y={y + 28} textAnchor="middle" fill={INK} fontFamily="'Newsreader', serif" fontSize="15" letterSpacing="4" fontWeight="500">{s}</text>
          </g>
        );
      })}
      <text x="800" y="470" textAnchor="middle" fill={INK} fontFamily="'Newsreader', serif" fontWeight="400" fontSize="84" letterSpacing="-1">TEAM FALCONS</text>
      <text x="800" y="540" textAnchor="middle" fill={ACCENT} fontFamily="'Newsreader', serif" fontStyle="italic" fontWeight="400" fontSize="40" letterSpacing="0.5">commercial stack</text>
      <text x="800" y="610" textAnchor="middle" fill={MUTED} fontFamily="'Newsreader', serif" fontSize="14" letterSpacing="6">METHODOLOGY · FRAMEWORK · PIPELINE · TOOLING</text>
    </svg>
  );
}

export function PricingOSArt() {
  return (
    <svg viewBox="0 0 1600 1000" xmlns="http://www.w3.org/2000/svg" className="w-full h-full">
      <rect width="1600" height="1000" fill={BG} />
      <g transform="translate(800, 500)">
        {[120, 200, 280, 360].map((r) => (
          <circle key={r} cx="0" cy="0" r={r} stroke={INK} strokeWidth="0.5" opacity="0.08" fill="none" />
        ))}
        {["Engagement","Audience","Seasonality","Format","Language","Authority","Rights","Multi-Platform","Floor"].map((axis, i) => {
          const a = (i / 9) * Math.PI * 2 - Math.PI/2;
          const x1 = Math.cos(a) * 50;
          const y1 = Math.sin(a) * 50;
          const x2 = Math.cos(a) * 360;
          const y2 = Math.sin(a) * 360;
          const tx = Math.cos(a) * 400;
          const ty = Math.sin(a) * 400;
          return (
            <g key={axis}>
              <line x1={x1} y1={y1} x2={x2} y2={y2} stroke={ACCENT} strokeWidth="0.8" opacity="0.45" />
              <circle cx={x2} cy={y2} r="5" fill={ACCENT} />
              <text x={tx} y={ty + 5} textAnchor="middle" fill={INK} fontFamily="'Newsreader', serif" fontSize="14" letterSpacing="2" fontWeight="500">{axis}</text>
            </g>
          );
        })}
        <text x="0" y="-8" textAnchor="middle" fill={INK} fontFamily="'Newsreader', serif" fontStyle="italic" fontSize="24" letterSpacing="1">Final Price =</text>
        <text x="0" y="22" textAnchor="middle" fill={ACCENT} fontFamily="'Newsreader', serif" fontSize="16" letterSpacing="0.5" fontWeight="500">MAX( Social, Authority ) × Cap × (1 + Rights)</text>
      </g>
      <text x="80" y="110" fill={INK} fontFamily="'Newsreader', serif" fontSize="58" fontWeight="500" letterSpacing="-0.5">FALCONS</text>
      <text x="80" y="160" fill={ACCENT} fontFamily="'Newsreader', serif" fontStyle="italic" fontSize="34">Pricing OS</text>
      <text x="80" y="900" fill={MUTED} fontFamily="'Newsreader', serif" fontSize="13" letterSpacing="4">METHODOLOGY · ENGINE · DEFENSIBILITY</text>
    </svg>
  );
}

export function SonyINZONEArt() {
  return (
    <svg viewBox="0 0 1600 1000" xmlns="http://www.w3.org/2000/svg" className="w-full h-full">
      <rect width="1600" height="1000" fill={BG} />
      <text x="800" y="430" textAnchor="middle" fill={INK} fontFamily="'Newsreader', serif" fontWeight="400" fontSize="200" letterSpacing="-6">Sony</text>
      <text x="800" y="540" textAnchor="middle" fill={ACCENT} fontFamily="'Newsreader', serif" fontStyle="italic" fontWeight="400" fontSize="78" letterSpacing="0.5">× INZONE × Falcons</text>
      <line x1="500" y1="600" x2="1100" y2="600" stroke={ACCENT} strokeWidth="0.8" />
      <text x="800" y="650" textAnchor="middle" fill={MUTED} fontFamily="'Newsreader', serif" fontSize="15" letterSpacing="8">CLOSED · BILINGUAL · CREATOR-LED</text>
      <text x="80" y="80" fill={MUTED} fontFamily="'Newsreader', serif" fontSize="12" letterSpacing="3">Q1-Q2 2026</text>
      <text x="1520" y="80" textAnchor="end" fill={MUTED} fontFamily="'Newsreader', serif" fontSize="12" letterSpacing="3">CASE FILE 04</text>
    </svg>
  );
}

export function GLGArt() {
  return (
    <svg viewBox="0 0 1600 1000" xmlns="http://www.w3.org/2000/svg" className="w-full h-full">
      <rect width="1600" height="1000" fill={BG} />
      <text x="800" y="380" textAnchor="middle" fill={INK} fontFamily="'Newsreader', serif" fontWeight="400" fontSize="160" letterSpacing="-3">GLG</text>
      <text x="800" y="470" textAnchor="middle" fill={ACCENT} fontFamily="'Newsreader', serif" fontStyle="italic" fontSize="42">Council Member</text>
      <text x="800" y="520" textAnchor="middle" fill={MUTED} fontFamily="'Newsreader', serif" fontSize="14" letterSpacing="6">PAID ADVISORY · INSTITUTIONAL CLIENTS</text>
      {[["ESPORTS LEAGUES",260],["COMPETITIVE FRANCHISES",660],["MENA DYNAMICS",1040],["COMMERCIAL MODELS",1420]].map(([t, x]) => (
        <g key={t as string}>
          <circle cx={x as number} cy="660" r="7" fill={ACCENT} />
          <line x1={x as number} y1="660" x2={x as number} y2="730" stroke={ACCENT} strokeWidth="0.6" opacity="0.55" />
          <text x={x as number} y="760" textAnchor="middle" fill={INK} fontFamily="'Newsreader', serif" fontSize="13" letterSpacing="3" fontWeight="500">{t as string}</text>
        </g>
      ))}
      <line x1="220" y1="660" x2="1480" y2="660" stroke={INK} strokeWidth="0.5" opacity="0.15" />
      <text x="800" y="900" textAnchor="middle" fill={MUTED} fontFamily="'Newsreader', serif" fontSize="12" letterSpacing="4">APRIL 2025 — PRESENT</text>
    </svg>
  );
}
