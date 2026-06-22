"use client";

// Bespoke SVG artwork for case studies without real photos.
// Each piece is a typography + geometric composition in brand palette.
// Dark luxury aesthetic — warm black bg, gold accent, cream type.

const BG = "#F7F6F2";
const GOLD = "#0F6B4E";
const PAPER = "#F0EAE0";
const MUTED = "#3A3530";

export function FalconsCommercialArt() {
  return (
    <svg viewBox="0 0 1600 1000" xmlns="http://www.w3.org/2000/svg" className="w-full h-full">
      <defs>
        <linearGradient id="fbg1" x1="0" y1="0" x2="1" y2="1">
          <stop offset="0" stopColor="#1C1814" />
          <stop offset="1" stopColor="#F7F6F2" />
        </linearGradient>
        <radialGradient id="fglow1" cx="0.7" cy="0.3" r="0.6">
          <stop offset="0" stopColor={GOLD} stopOpacity="0.18" />
          <stop offset="1" stopColor={GOLD} stopOpacity="0" />
        </radialGradient>
      </defs>
      <rect width="1600" height="1000" fill="url(#fbg1)" />
      <rect width="1600" height="1000" fill="url(#fglow1)" />
      {/* hairline grid */}
      <g stroke={MUTED} strokeWidth="0.5" opacity="0.5">
        {[160, 320, 480, 640, 800, 960, 1120, 1280, 1440].map((x) => (
          <line key={`v${x}`} x1={x} y1="0" x2={x} y2="1000" />
        ))}
        {[200, 400, 600, 800].map((y) => (
          <line key={`h${y}`} x1="0" y1={y} x2="1600" y2={y} />
        ))}
      </g>
      {/* 8-stage commercial OS — labels around a center type lockup */}
      {["INTAKE","RIGHTS","PRICING","APPROVAL","PROPOSAL","DELIVERY","PROOF","RENEWAL"].map((s, i) => {
        const cx = 1600/2, cy = 1000/2; const r = 380;
        const a = (i / 8) * Math.PI * 2 - Math.PI/2;
        const x = cx + Math.cos(a) * r;
        const y = cy + Math.sin(a) * r;
        return (
          <g key={s}>
            <circle cx={x} cy={y} r="3" fill={GOLD} />
            <text x={x} y={y + 24} textAnchor="middle" fill={PAPER} fontFamily="Cormorant Garamond, serif" fontSize="14" letterSpacing="4">{s}</text>
          </g>
        );
      })}
      {/* Center lockup */}
      <text x="800" y="480" textAnchor="middle" fill={PAPER} fontFamily="Cormorant Garamond, serif" fontWeight="300" fontSize="80" letterSpacing="-1">TEAM FALCONS</text>
      <text x="800" y="540" textAnchor="middle" fill={GOLD} fontFamily="Cormorant Garamond, serif" fontStyle="italic" fontSize="36" letterSpacing="0.5">commercial stack</text>
      <text x="800" y="610" textAnchor="middle" fill={MUTED} fontFamily="Cormorant Garamond, serif" fontSize="14" letterSpacing="6">METHODOLOGY · FRAMEWORK · PIPELINE · TOOLING</text>
      {/* Connecting lines */}
      <g stroke={GOLD} strokeWidth="0.5" opacity="0.3" fill="none">
        <circle cx="800" cy="500" r="380" />
        <circle cx="800" cy="500" r="280" />
      </g>
    </svg>
  );
}

export function PricingOSArt() {
  return (
    <svg viewBox="0 0 1600 1000" xmlns="http://www.w3.org/2000/svg" className="w-full h-full">
      <defs>
        <linearGradient id="pbg1" x1="0" y1="0" x2="1" y2="1">
          <stop offset="0" stopColor="#1C1814" />
          <stop offset="1" stopColor="#F7F6F2" />
        </linearGradient>
      </defs>
      <rect width="1600" height="1000" fill="url(#pbg1)" />
      {/* Radial pricing formula visualization */}
      <g transform="translate(800, 500)">
        {[60, 120, 180, 240, 300, 360].map((r) => (
          <circle key={r} cx="0" cy="0" r={r} stroke={GOLD} strokeWidth="0.4" opacity="0.4" fill="none" />
        ))}
        {/* Nine axes radiating outward */}
        {["Engagement","Audience","Seasonality","Format","Language","Authority","Rights","Multi-Platform","Floor"].map((axis, i) => {
          const a = (i / 9) * Math.PI * 2 - Math.PI/2;
          const x1 = Math.cos(a) * 50;
          const y1 = Math.sin(a) * 50;
          const x2 = Math.cos(a) * 380;
          const y2 = Math.sin(a) * 380;
          const tx = Math.cos(a) * 410;
          const ty = Math.sin(a) * 410;
          return (
            <g key={axis}>
              <line x1={x1} y1={y1} x2={x2} y2={y2} stroke={GOLD} strokeWidth="0.6" opacity="0.5" />
              <circle cx={x2} cy={y2} r="4" fill={GOLD} />
              <text x={tx} y={ty + 5} textAnchor="middle" fill={PAPER} fontFamily="Cormorant Garamond, serif" fontSize="14" letterSpacing="2">{axis}</text>
            </g>
          );
        })}
        {/* Center formula */}
        <text x="0" y="-8" textAnchor="middle" fill={PAPER} fontFamily="Cormorant Garamond, serif" fontStyle="italic" fontSize="22" letterSpacing="1">Final Price =</text>
        <text x="0" y="20" textAnchor="middle" fill={GOLD} fontFamily="Cormorant Garamond, serif" fontSize="16" letterSpacing="0.5">MAX( Social, Authority ) × Cap × (1 + Rights)</text>
      </g>
      {/* Title */}
      <text x="80" y="120" fill={PAPER} fontFamily="Cormorant Garamond, serif" fontSize="60" fontWeight="300" letterSpacing="-0.5">FALCONS</text>
      <text x="80" y="170" fill={GOLD} fontFamily="Cormorant Garamond, serif" fontStyle="italic" fontSize="36">Pricing OS</text>
      <text x="80" y="880" fill={MUTED} fontFamily="Cormorant Garamond, serif" fontSize="14" letterSpacing="4">METHODOLOGY · ENGINE · DEFENSIBILITY</text>
    </svg>
  );
}

export function SonyINZONEArt() {
  return (
    <svg viewBox="0 0 1600 1000" xmlns="http://www.w3.org/2000/svg" className="w-full h-full">
      <defs>
        <linearGradient id="sbg1" x1="0" y1="0" x2="1" y2="1">
          <stop offset="0" stopColor="#1C1814" />
          <stop offset="1" stopColor="#F7F6F2" />
        </linearGradient>
        <radialGradient id="sglow" cx="0.5" cy="0.5" r="0.5">
          <stop offset="0" stopColor={GOLD} stopOpacity="0.22" />
          <stop offset="1" stopColor={GOLD} stopOpacity="0" />
        </radialGradient>
      </defs>
      <rect width="1600" height="1000" fill="url(#sbg1)" />
      <rect width="1600" height="1000" fill="url(#sglow)" />
      {/* Big italic display */}
      <text x="800" y="430" textAnchor="middle" fill={PAPER} fontFamily="Cormorant Garamond, serif" fontWeight="300" fontSize="180" letterSpacing="-4">Sony</text>
      <text x="800" y="540" textAnchor="middle" fill={GOLD} fontFamily="Cormorant Garamond, serif" fontStyle="italic" fontSize="80" letterSpacing="0.5">× INZONE × Falcons</text>
      <line x1="500" y1="600" x2="1100" y2="600" stroke={GOLD} strokeWidth="0.5" />
      <text x="800" y="650" textAnchor="middle" fill={MUTED} fontFamily="Cormorant Garamond, serif" fontSize="16" letterSpacing="8">CLOSED · BILINGUAL · CREATOR-LED</text>
      {/* Corner labels */}
      <text x="80" y="80" fill={MUTED} fontFamily="Cormorant Garamond, serif" fontSize="12" letterSpacing="3">Q1-Q2 2026</text>
      <text x="1520" y="80" textAnchor="end" fill={MUTED} fontFamily="Cormorant Garamond, serif" fontSize="12" letterSpacing="3">CASE FILE 04</text>
    </svg>
  );
}

export function GLGArt() {
  return (
    <svg viewBox="0 0 1600 1000" xmlns="http://www.w3.org/2000/svg" className="w-full h-full">
      <defs>
        <linearGradient id="gbg1" x1="0" y1="0" x2="1" y2="1">
          <stop offset="0" stopColor="#1C1814" />
          <stop offset="1" stopColor="#F7F6F2" />
        </linearGradient>
      </defs>
      <rect width="1600" height="1000" fill="url(#gbg1)" />
      {/* Topic nodes on a horizontal arc */}
      {["ESPORTS LEAGUES","COMPETITIVE FRANCHISES","MENA DYNAMICS","COMMERCIAL MODELS"].map((t, i) => {
        const xs = [320, 720, 1120, 1450];
        const x = i < 4 ? (i === 0 ? 280 : i === 1 ? 660 : i === 2 ? 1040 : 1420) : 0;
        return (
          <g key={t}>
            <circle cx={x} cy="650" r="6" fill={GOLD} />
            <line x1={x} y1="650" x2={x} y2="740" stroke={GOLD} strokeWidth="0.5" />
            <text x={x} y="770" textAnchor="middle" fill={PAPER} fontFamily="Cormorant Garamond, serif" fontSize="13" letterSpacing="3">{t}</text>
          </g>
        );
      })}
      <line x1="240" y1="650" x2="1480" y2="650" stroke={GOLD} strokeWidth="0.5" opacity="0.4" />
      {/* Big italic */}
      <text x="800" y="380" textAnchor="middle" fill={PAPER} fontFamily="Cormorant Garamond, serif" fontWeight="300" fontSize="140" letterSpacing="-2">GLG</text>
      <text x="800" y="470" textAnchor="middle" fill={GOLD} fontFamily="Cormorant Garamond, serif" fontStyle="italic" fontSize="40">Council Member</text>
      <text x="800" y="520" textAnchor="middle" fill={MUTED} fontFamily="Cormorant Garamond, serif" fontSize="14" letterSpacing="6">PAID ADVISORY · INSTITUTIONAL CLIENTS</text>
      <text x="800" y="900" textAnchor="middle" fill={MUTED} fontFamily="Cormorant Garamond, serif" fontSize="12" letterSpacing="4">APRIL 2025 — PRESENT</text>
    </svg>
  );
}
