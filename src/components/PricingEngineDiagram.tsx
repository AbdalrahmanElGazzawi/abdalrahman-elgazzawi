import { pricingEngine } from "@/content/site";
import { Section } from "./Section";
import { ConfidentialityNote } from "./ConfidentialityNote";

export function PricingEngineDiagram() {
  const { formula, bases, axes } = pricingEngine;
  // 9 axes positioned around a 3-ring radial — 4 top, 1 left, 3 bottom, 1 right
  // For maintainability we compute positions from index
  const cx = 230, cy = 230, r = 180;
  const positions = axes.map((_, i) => {
    const angle = (-Math.PI / 2) + (i * (2 * Math.PI / 9));
    return { x: cx + r * Math.cos(angle), y: cy + r * Math.sin(angle), angle };
  });

  return (
    <Section
      id="methodology"
      eyebrow="// Methodology"
      title="Five base methods."
      accent="Nine pricing axes. One defensible price."
      sub="Pricing methodology authored from scratch and calibrated against tier-1 global benchmarks. Multipliers apply at quote time, never baked into the base — every line traceable, every multiplier defensible."
    >
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-14 items-start">
        {/* LEFT — Radial diagram */}
        <figure aria-label="Pricing engine — 5 base methods feeding 9 multipliers" className="relative">
          <div className="absolute -top-3 left-0 right-0 flex items-center justify-between text-[10px] font-mono tracking-[0.18em] uppercase text-muted">
            <span className="text-gold">// PRICING ENGINE</span>
            <span>9 axes · 5 bases</span>
          </div>
          <svg viewBox="0 0 460 460" xmlns="http://www.w3.org/2000/svg" className="w-full h-auto block panel">
            <defs>
              <radialGradient id="centerGlow" cx="50%" cy="50%" r="50%">
                <stop offset="0%"  stopColor="#C9A961" stopOpacity="0.35" />
                <stop offset="60%" stopColor="#C9A961" stopOpacity="0.05" />
                <stop offset="100%" stopColor="#C9A961" stopOpacity="0" />
              </radialGradient>
            </defs>
            <rect x="0" y="0" width="460" height="460" fill="#101218" />
            {/* concentric rings */}
            {[60, 110, 160, 200].map((rr) => (
              <circle key={rr} cx={cx} cy={cy} r={rr} fill="none" stroke="#1F2128" strokeDasharray={rr === 200 ? "0" : "2 4"} />
            ))}
            <circle cx={cx} cy={cy} r="80" fill="url(#centerGlow)" />
            {/* center label — formula glyph */}
            <g>
              <text x={cx} y={cy - 14} textAnchor="middle" fontFamily="ui-monospace, monospace" fontSize="9" fill="#7E8088" letterSpacing="2">FINAL PRICE</text>
              <text x={cx} y={cy + 8} textAnchor="middle" fontFamily="Georgia, serif" fontStyle="italic" fontSize="22" fill="#C9A961">MAX</text>
              <text x={cx} y={cy + 28} textAnchor="middle" fontFamily="ui-monospace, monospace" fontSize="9" fill="#5C5E66">× CAP × (1 + RIGHTS)</text>
            </g>
            {/* spokes + nodes */}
            {axes.map((a, i) => {
              const p = positions[i];
              return (
                <g key={a.k}>
                  <line x1={cx} y1={cy} x2={p.x} y2={p.y} stroke="#2A2D36" strokeWidth="0.8" />
                  <circle cx={p.x} cy={p.y} r="20" fill="#161922" stroke="#C9A961" strokeWidth="1" />
                  <text x={p.x} y={p.y - 1} textAnchor="middle" fontFamily="ui-monospace, monospace" fontSize="9" fill="#C9A961" letterSpacing="1">{a.n}</text>
                  <text x={p.x} y={p.y + 11} textAnchor="middle" fontFamily="ui-monospace, monospace" fontSize="7" fill="#7E8088" letterSpacing="0.5">{a.k.toUpperCase().slice(0, 8)}</text>
                </g>
              );
            })}
          </svg>
          <figcaption className="mt-3 text-[11px] font-mono text-muted tracking-[0.04em]">
            // Visualisation of methodology structure. Internal multiplier values intentionally omitted.
          </figcaption>
        </figure>

        {/* RIGHT — Formula + bases + axes legend */}
        <div>
          {/* Formula card */}
          <div className="panel p-6 sm:p-7">
            <div className="text-[10px] font-mono text-gold tracking-[0.18em] uppercase">// FORMULA</div>
            <div className="mt-3 font-serif italic text-[18px] sm:text-[22px] leading-[1.45] text-paper">
              <span className="text-muted not-italic">{formula.left} =</span>{" "}
              <span className="text-gold">{formula.right}</span>
            </div>
          </div>

          {/* Five base methods */}
          <div className="mt-5">
            <div className="text-[10px] font-mono text-muted tracking-[0.18em] uppercase">// 5 base methods feeding the MAX</div>
            <div className="mt-3 grid grid-cols-5 gap-1.5">
              {bases.map((b, i) => (
                <div key={b} className="border border-rule/80 bg-deep/40 px-2 py-3 text-center">
                  <div className="text-[9px] font-mono text-gold tracking-[0.14em]">0{i + 1}</div>
                  <div className="mt-1.5 text-[11px] sm:text-[12px] text-paper font-serif italic leading-tight">{b}</div>
                </div>
              ))}
            </div>
          </div>

          {/* Axes legend */}
          <div className="mt-7">
            <div className="text-[10px] font-mono text-muted tracking-[0.18em] uppercase">// 9 multiplier axes</div>
            <ul className="mt-3 grid grid-cols-1 gap-px bg-hairline border border-hairline">
              {axes.map((a) => (
                <li key={a.k} className="bg-bg px-4 py-3 grid grid-cols-[36px_120px_1fr] gap-3 items-baseline">
                  <span className="font-mono text-[10px] text-gold tracking-[0.14em]">{a.n}</span>
                  <span className="font-serif italic text-[15px] text-paper">{a.k}</span>
                  <span className="text-muted text-[12px] leading-[1.5]">{a.d}</span>
                </li>
              ))}
            </ul>
          </div>

          <ConfidentialityNote className="mt-6" />
        </div>
      </div>
    </Section>
  );
}
