import Link from "next/link";
import { hero, osStages, site } from "@/content/site";

export function Hero() {
  return (
    <section className="relative overflow-hidden">
      <div aria-hidden className="absolute inset-0 grid-bg opacity-[0.6]" />
      <div aria-hidden className="absolute inset-x-0 top-0 h-[1px] bg-gradient-to-r from-transparent via-gold/40 to-transparent" />
      <div aria-hidden className="absolute -right-24 top-1/4 w-[600px] h-[600px] rounded-full bg-green/[0.08] blur-3xl pointer-events-none" />
      <div aria-hidden className="absolute -left-24 bottom-0 w-[500px] h-[500px] rounded-full bg-gold/[0.05] blur-3xl pointer-events-none" />

      <div className="container-page relative pt-14 sm:pt-20 lg:pt-24 pb-20 sm:pb-24 lg:pb-28">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
          {/* LEFT — copy */}
          <div className="lg:col-span-5 xl:col-span-5">
            <div className="eyebrow mb-6">{hero.eyebrow}</div>
            <h1 className="font-serif text-display-l font-medium leading-[0.95]">
              <span className="block">{hero.headline[0]}</span>
              <span className="block text-gold italic">{hero.headline[1]}</span>
            </h1>
            <p className="mt-7 text-paper/90 text-[16px] sm:text-[17px] leading-[1.65] max-w-[52ch]">
              {hero.sub}
            </p>
            <p className="mt-4 text-muted text-[13px] font-mono tracking-[0.04em]">{hero.meta}</p>

            <div className="mt-9 flex flex-wrap gap-3">
              <Link href={hero.cta.primary.href}
                className="group inline-flex items-center gap-2.5 bg-gold text-bg px-5 py-3.5 text-[12px] font-semibold tracking-[0.14em] uppercase font-mono hover:bg-gold-soft transition-colors min-h-[44px]">
                {hero.cta.primary.label} <span aria-hidden className="transition-transform group-hover:translate-x-0.5">→</span>
              </Link>
              <Link href={hero.cta.secondary.href}
                className="inline-flex items-center gap-2 border border-rule text-paper px-5 py-3.5 text-[12px] font-semibold tracking-[0.14em] uppercase font-mono hover:border-gold hover:text-gold transition-colors min-h-[44px]">
                {hero.cta.secondary.label}
              </Link>
              <Link href={hero.cta.tertiary.href}
                className="inline-flex items-center gap-2 text-muted px-5 py-3.5 text-[12px] font-semibold tracking-[0.14em] uppercase font-mono hover:text-paper transition-colors min-h-[44px]">
                {hero.cta.tertiary.label}
              </Link>
            </div>

            <div className="mt-10 pl-5 border-l border-gold/40">
              <div className="text-[11px] font-mono tracking-[0.18em] uppercase text-gold">Currently</div>
              <div className="mt-1.5 font-serif italic text-[18px] text-paper">Esports Marketing Manager · Team Falcons</div>
              <div className="mt-1 text-[12px] text-muted font-mono">{site.location}</div>
            </div>
          </div>

          {/* RIGHT — Command Map SVG */}
          <div className="lg:col-span-7 xl:col-span-7">
            <CommandMap />
          </div>
        </div>
      </div>
    </section>
  );
}

function CommandMap() {
  return (
    <figure aria-label="Commercial operating system flow — Intake to Renewal" className="relative">
      <div className="absolute -top-3 left-0 right-0 flex items-center justify-between text-[10px] font-mono tracking-[0.18em] uppercase text-muted">
        <span className="text-gold">// COMMERCIAL OPERATING SYSTEM</span>
        <span>v1.0 · live</span>
      </div>
      <svg viewBox="0 0 720 460" xmlns="http://www.w3.org/2000/svg" className="w-full h-auto block">
        <defs>
          <linearGradient id="goldFlow" x1="0" y1="0" x2="1" y2="0">
            <stop offset="0%" stopColor="#C9A961" stopOpacity="0.0" />
            <stop offset="40%" stopColor="#C9A961" stopOpacity="0.7" />
            <stop offset="60%" stopColor="#C9A961" stopOpacity="0.7" />
            <stop offset="100%" stopColor="#C9A961" stopOpacity="0.0" />
          </linearGradient>
          <linearGradient id="greenFlow" x1="0" y1="0" x2="0" y2="1">
            <stop offset="0%" stopColor="#5BD394" stopOpacity="0.0" />
            <stop offset="50%" stopColor="#5BD394" stopOpacity="0.5" />
            <stop offset="100%" stopColor="#5BD394" stopOpacity="0.0" />
          </linearGradient>
          <pattern id="dots" width="20" height="20" patternUnits="userSpaceOnUse">
            <circle cx="1" cy="1" r="0.7" fill="#C9A961" opacity="0.18" />
          </pattern>
          <filter id="glow"><feGaussianBlur stdDeviation="1.4" result="b" /><feMerge><feMergeNode in="b" /><feMergeNode in="SourceGraphic" /></feMerge></filter>
        </defs>

        {/* Outer frame */}
        <rect x="0.5" y="0.5" width="719" height="459" fill="#101218" stroke="#1F2128" />
        <rect x="0.5" y="0.5" width="719" height="459" fill="url(#dots)" />

        {/* Frame chrome */}
        <line x1="0" y1="36" x2="720" y2="36" stroke="#1F2128" />
        <line x1="0" y1="424" x2="720" y2="424" stroke="#1F2128" />
        <text x="16" y="23" fontFamily="ui-monospace, monospace" fontSize="9" fill="#7E8088" letterSpacing="2">INTAKE → RENEWAL · 8-STAGE PIPELINE</text>
        <text x="704" y="23" textAnchor="end" fontFamily="ui-monospace, monospace" fontSize="9" fill="#7E8088" letterSpacing="2">SAR 2.3M ACTIVE</text>
        <text x="16" y="446" fontFamily="ui-monospace, monospace" fontSize="9" fill="#7E8088" letterSpacing="2">// PRICING · RIGHTS · APPROVAL · DELIVERY · PROOF</text>
        <text x="704" y="446" textAnchor="end" fontFamily="ui-monospace, monospace" fontSize="9" fill="#5BD394" letterSpacing="2">● LIVE</text>

        {/* Horizontal rail */}
        <line x1="60" y1="230" x2="660" y2="230" stroke="#2A2D36" />
        <line x1="60" y1="230" x2="660" y2="230" stroke="url(#goldFlow)" strokeWidth="1.5" />

        {/* 8 stage nodes — positioned on a single timeline */}
        {[
          { x: 90,  k: "Intake",    c: "01" },
          { x: 168, k: "Rights",    c: "02" },
          { x: 246, k: "Pricing",   c: "03", highlight: true },
          { x: 324, k: "Approval",  c: "04" },
          { x: 402, k: "Proposal",  c: "05" },
          { x: 480, k: "Delivery",  c: "06" },
          { x: 558, k: "Proof",     c: "07" },
          { x: 636, k: "Renewal",   c: "08" },
        ].map((s) => (
          <g key={s.k}>
            {/* connector tick */}
            <line x1={s.x} y1="222" x2={s.x} y2="238" stroke={s.highlight ? "#C9A961" : "#2A2D36"} />
            {/* node */}
            <circle cx={s.x} cy="230" r={s.highlight ? 8 : 6} fill="#101218" stroke={s.highlight ? "#C9A961" : "#5C5E66"} strokeWidth={s.highlight ? 2 : 1.2} filter={s.highlight ? "url(#glow)" : undefined} />
            {/* code above */}
            <text x={s.x} y="200" textAnchor="middle" fontFamily="ui-monospace, monospace" fontSize="10" fill={s.highlight ? "#C9A961" : "#7E8088"} letterSpacing="1.5">{s.c}</text>
            {/* label below */}
            <text x={s.x} y="262" textAnchor="middle" fontFamily="Georgia, serif" fontStyle="italic" fontSize="14" fill="#F4F1EB">{s.k}</text>
          </g>
        ))}

        {/* Flow inputs from top — Audience / Talent / Brand */}
        {[
          { x: 168, label: "AUDIENCE" },
          { x: 246, label: "TALENT" },
          { x: 324, label: "BRAND" },
        ].map((c) => (
          <g key={c.label}>
            <line x1={c.x} y1="60" x2={c.x} y2="220" stroke="url(#greenFlow)" strokeDasharray="2 4" />
            <text x={c.x} y="50" textAnchor="middle" fontFamily="ui-monospace, monospace" fontSize="9" fill="#5BD394" letterSpacing="1.5">{c.label}</text>
          </g>
        ))}

        {/* Branched outputs to bottom — Activation / Reporting / Renewal */}
        {[
          { x: 480, label: "ACTIVATE" },
          { x: 558, label: "REPORT" },
          { x: 636, label: "DEFEND" },
        ].map((c) => (
          <g key={c.label}>
            <line x1={c.x} y1="240" x2={c.x} y2="400" stroke="url(#greenFlow)" strokeDasharray="2 4" />
            <text x={c.x} y="412" textAnchor="middle" fontFamily="ui-monospace, monospace" fontSize="9" fill="#5BD394" letterSpacing="1.5">{c.label}</text>
          </g>
        ))}

        {/* Side tag — rate book reference */}
        <g>
          <rect x="58" y="74" width="170" height="64" fill="#161922" stroke="#2A2D36" />
          <text x="68" y="90" fontFamily="ui-monospace, monospace" fontSize="9" fill="#7E8088" letterSpacing="2">// RATE BOOK</text>
          <text x="68" y="110" fontFamily="Georgia, serif" fontStyle="italic" fontSize="20" fill="#C9A961">200 talents</text>
          <text x="68" y="128" fontFamily="ui-monospace, monospace" fontSize="9" fill="#7E8088">S · 1 · 2 · 3 · 4 tiers</text>
        </g>

        {/* Side tag — framework */}
        <g>
          <rect x="492" y="74" width="170" height="64" fill="#161922" stroke="#2A2D36" />
          <text x="502" y="90" fontFamily="ui-monospace, monospace" fontSize="9" fill="#7E8088" letterSpacing="2">// FRAMEWORK v5</text>
          <text x="502" y="110" fontFamily="Georgia, serif" fontStyle="italic" fontSize="20" fill="#C9A961">140 pages</text>
          <text x="502" y="128" fontFamily="ui-monospace, monospace" fontSize="9" fill="#7E8088">13 counterparty tracks</text>
        </g>

        {/* Bottom tag — pipeline value */}
        <g>
          <rect x="275" y="332" width="170" height="64" fill="#161922" stroke="#2A2D36" />
          <text x="285" y="348" fontFamily="ui-monospace, monospace" fontSize="9" fill="#7E8088" letterSpacing="2">// MANDATES OS</text>
          <text x="285" y="368" fontFamily="Georgia, serif" fontStyle="italic" fontSize="20" fill="#C9A961">~SAR 2.3M</text>
          <text x="285" y="386" fontFamily="ui-monospace, monospace" fontSize="9" fill="#7E8088">bilingual pipeline live</text>
        </g>
      </svg>
      <figcaption className="mt-3 text-[11px] font-mono text-muted tracking-[0.04em]">
        // Commercial logic shown in simplified public form. Internal rates and private pipeline rows omitted.
      </figcaption>
    </figure>
  );
}
