export function StackDiagram() {
  return (
    <figure aria-label="Falcons commercial stack — methodology, framework, mandates, app">
      <svg viewBox="0 0 800 360" xmlns="http://www.w3.org/2000/svg" className="w-full h-auto block panel">
        <defs>
          <linearGradient id="layerGrad" x1="0" y1="0" x2="0" y2="1">
            <stop offset="0%" stopColor="#0F6B4E" stopOpacity="0.15" />
            <stop offset="100%" stopColor="#0F6B4E" stopOpacity="0" />
          </linearGradient>
        </defs>
        <rect x="0" y="0" width="800" height="360" fill="#101218" />
        <text x="20" y="24" fontFamily="ui-monospace, monospace" fontSize="10" fill="#7E8088" letterSpacing="2">// FALCONS COMMERCIAL STACK</text>
        {[
          { y: 50,  label: "QUOTE LIFECYCLE APP",  sub: "Pricing OS · Roster · Quote Builder · Client Portal · Admin", c: "#5BD394" },
          { y: 130, label: "MANDATES OS",          sub: "Bilingual pipeline · ~SAR 2.3M tracked · campaigns · sponsors · IP · events", c: "#0F6B4E" },
          { y: 210, label: "AGENCY FRAMEWORK v5",  sub: "140 pages · 4-phase model · 13 counterparty tracks · clause library · playbooks", c: "#0F6B4E" },
          { y: 290, label: "PRICING SOURCE OF TRUTH v1.0", sub: "15 sections · 200 talents · 5 base methods · 9 multipliers", c: "#0F6B4E" },
        ].map((row, i) => (
          <g key={i}>
            <rect x="40" y={row.y - 30} width="720" height="60" fill="#161922" stroke="#2A2D36" />
            <rect x="40" y={row.y - 30} width="720" height="60" fill="url(#layerGrad)" />
            <circle cx="60" cy={row.y} r="4" fill={row.c} />
            <text x="76" y={row.y - 5} fontFamily="ui-monospace, monospace" fontSize="11" fill={row.c} letterSpacing="2">{row.label}</text>
            <text x="76" y={row.y + 13} fontFamily="ui-monospace, monospace" fontSize="10" fill="#7E8088">{row.sub}</text>
            <text x="745" y={row.y + 4} textAnchor="end" fontFamily="ui-monospace, monospace" fontSize="9" fill="#5C5E66">{`L${4 - i}`}</text>
          </g>
        ))}
        <text x="780" y="345" textAnchor="end" fontFamily="ui-monospace, monospace" fontSize="9" fill="#5C5E66" letterSpacing="2">SHIPPED · DEFENSIBLE · LIVE</text>
      </svg>
      <figcaption className="mt-3 text-[11px] font-mono text-muted">// Stack architecture — public-safe representation. Full rate tables and counterparty rows omitted.</figcaption>
    </figure>
  );
}

export function PricingOSDiagram() {
  return (
    <figure aria-label="Pricing OS — modules, roles, data flow">
      <svg viewBox="0 0 800 380" xmlns="http://www.w3.org/2000/svg" className="w-full h-auto block panel">
        <rect x="0" y="0" width="800" height="380" fill="#101218" />
        <text x="20" y="24" fontFamily="ui-monospace, monospace" fontSize="10" fill="#7E8088" letterSpacing="2">// FALCONS PRICING OS · ARCHITECTURE</text>
        {[
          { x: 60,  label: "INPUTS",  rows: [{ k: "Roster", d: "200 talents · tiered" }, { k: "Brief", d: "Brand · audience · scope" }, { k: "Rights", d: "Window · territory · usage" }], c: "#5BD394" },
          { x: 320, label: "ENGINE",  rows: [{ k: "Methodology v1", d: "5 base methods" }, { k: "9-axis multipliers", d: "Quote-time logic" }, { k: "Approval matrix", d: "Role-scoped sign-off" }], c: "#0F6B4E" },
          { x: 580, label: "OUTPUTS", rows: [{ k: "Quote pack", d: "Client-ready" }, { k: "Mandate row", d: "Pipeline appended" }, { k: "Audit trail", d: "Postgres RLS log" }], c: "#5BD394" },
        ].map((col, ci) => (
          <g key={col.label}>
            <text x={col.x + 80} y="65" textAnchor="middle" fontFamily="ui-monospace, monospace" fontSize="11" fill={col.c} letterSpacing="3">{col.label}</text>
            <line x1={col.x} y1="78" x2={col.x + 160} y2="78" stroke={col.c} opacity="0.5" />
            {col.rows.map((r, ri) => (
              <g key={r.k}>
                <rect x={col.x} y={95 + ri * 70} width="160" height="55" fill="#161922" stroke="#2A2D36" />
                <text x={col.x + 12} y={115 + ri * 70} fontFamily="Georgia, serif" fontStyle="italic" fontSize="14" fill="#F4F1EB">{r.k}</text>
                <text x={col.x + 12} y={132 + ri * 70} fontFamily="ui-monospace, monospace" fontSize="9" fill="#7E8088">{r.d}</text>
              </g>
            ))}
            {ci < 2 && (
              <g>
                <line x1={col.x + 165} y1="200" x2={col.x + 250} y2="200" stroke="#0F6B4E" strokeWidth="1" />
                <polygon points={`${col.x + 250},196 ${col.x + 258},200 ${col.x + 250},204`} fill="#0F6B4E" />
              </g>
            )}
          </g>
        ))}
        <text x="400" y="335" textAnchor="middle" fontFamily="ui-monospace, monospace" fontSize="9" fill="#5C5E66" letterSpacing="2">NEXT.JS · SUPABASE · POSTGRES RLS · VERCEL · TYPESCRIPT · TAILWIND</text>
        <text x="400" y="355" textAnchor="middle" fontFamily="ui-monospace, monospace" fontSize="9" fill="#5BD394" letterSpacing="2">● LIVE · ROLES: ADMIN · SALES · FINANCE · VIEWER</text>
      </svg>
      <figcaption className="mt-3 text-[11px] font-mono text-muted">// Architecture sketch. Internal table schemas, row-level rules, and live deal data omitted.</figcaption>
    </figure>
  );
}

export function SonyDiagram() {
  return (
    <figure aria-label="Sony INZONE × Team Falcons — deal flow">
      <svg viewBox="0 0 800 320" xmlns="http://www.w3.org/2000/svg" className="w-full h-auto block panel">
        <rect x="0" y="0" width="800" height="320" fill="#101218" />
        <text x="20" y="24" fontFamily="ui-monospace, monospace" fontSize="10" fill="#7E8088" letterSpacing="2">// SONY INZONE × TEAM FALCONS · DEAL FLOW</text>
        {[
          { x: 80,  label: "BRIEF",      d: "via Ruder Finn Atteline" },
          { x: 220, label: "PRICING",    d: "Methodology v1 applied" },
          { x: 360, label: "CONTRACT",   d: "Framework v5 clauses" },
          { x: 500, label: "ACTIVATION", d: "5 creators · 12 deliverables" },
          { x: 640, label: "CONVERSION", d: "20% KSA discount-code" },
        ].map((s, i) => (
          <g key={s.label}>
            <rect x={s.x - 60} y="100" width="120" height="80" fill="#161922" stroke="#0F6B4E" />
            <text x={s.x} y="128" textAnchor="middle" fontFamily="ui-monospace, monospace" fontSize="10" fill="#0F6B4E" letterSpacing="2">{`0${i + 1}`}</text>
            <text x={s.x} y="148" textAnchor="middle" fontFamily="Georgia, serif" fontStyle="italic" fontSize="15" fill="#F4F1EB">{s.label}</text>
            <text x={s.x} y="167" textAnchor="middle" fontFamily="ui-monospace, monospace" fontSize="8" fill="#7E8088">{s.d}</text>
            {i < 4 && <line x1={s.x + 60} y1="140" x2={s.x + 80} y2="140" stroke="#0F6B4E" strokeWidth="1" />}
          </g>
        ))}
        <text x="400" y="65" textAnchor="middle" fontFamily="Georgia, serif" fontStyle="italic" fontSize="22" fill="#0F6B4E">USD 11.2K · 5 creators · 12 deliverables</text>
        <text x="400" y="83" textAnchor="middle" fontFamily="ui-monospace, monospace" fontSize="9" fill="#7E8088" letterSpacing="2">CLOSED · DECEMBER 2025</text>
        <text x="400" y="225" textAnchor="middle" fontFamily="ui-monospace, monospace" fontSize="10" fill="#5BD394" letterSpacing="2">// CREATORS</text>
        <text x="400" y="247" textAnchor="middle" fontFamily="Georgia, serif" fontStyle="italic" fontSize="14" fill="#F4F1EB">Abu Najd · Madv · Spyerfrog · Oden · xsma333</text>
        <text x="400" y="280" textAnchor="middle" fontFamily="ui-monospace, monospace" fontSize="9" fill="#5C5E66" letterSpacing="2">CAMPAIGN MAPPED END-TO-END THROUGH FALCONS COMMERCIAL STACK</text>
      </svg>
      <figcaption className="mt-3 text-[11px] font-mono text-muted">// Public summary. Negotiation detail and contractual terms intentionally omitted.</figcaption>
    </figure>
  );
}

export function EWCDiagram() {
  return (
    <figure aria-label="EWC commercial delivery — scale view">
      <svg viewBox="0 0 800 320" xmlns="http://www.w3.org/2000/svg" className="w-full h-auto block panel">
        <rect x="0" y="0" width="800" height="320" fill="#101218" />
        <text x="20" y="24" fontFamily="ui-monospace, monospace" fontSize="10" fill="#7E8088" letterSpacing="2">// EWC · COMMERCIAL DELIVERY · SCALE</text>
        {[
          { x: 60,  v: "778+", l: "DELIVERABLES" },
          { x: 230, v: "5M+",  l: "VIEWERS REACHED" },
          { x: 400, v: "78+",  l: "BRANDS PITCHED" },
          { x: 570, v: "20%",  l: "REVENUE GROWTH" },
        ].map((m) => (
          <g key={m.l}>
            <rect x={m.x} y="60" width="170" height="120" fill="#161922" stroke="#2A2D36" />
            <line x1={m.x} y1="60" x2={m.x + 170} y2="60" stroke="#0F6B4E" strokeWidth="2" />
            <text x={m.x + 85} y="115" textAnchor="middle" fontFamily="Georgia, serif" fontStyle="italic" fontSize="42" fill="#0F6B4E">{m.v}</text>
            <text x={m.x + 85} y="160" textAnchor="middle" fontFamily="ui-monospace, monospace" fontSize="10" fill="#7E8088" letterSpacing="2">{m.l}</text>
          </g>
        ))}
        <text x="400" y="220" textAnchor="middle" fontFamily="ui-monospace, monospace" fontSize="10" fill="#5BD394" letterSpacing="2">// CHANNELS</text>
        <text x="400" y="245" textAnchor="middle" fontFamily="Georgia, serif" fontStyle="italic" fontSize="16" fill="#F4F1EB">Marketing · Social · Broadcast · QA standards</text>
        <text x="400" y="285" textAnchor="middle" fontFamily="ui-monospace, monospace" fontSize="9" fill="#5C5E66" letterSpacing="2">CO-MANAGED ACROSS 5 AGENCY PARTNERS · 6 CLIENTS ONBOARDED</text>
      </svg>
      <figcaption className="mt-3 text-[11px] font-mono text-muted">// Public summary of EWC commercial role at SPORTFIVE.</figcaption>
    </figure>
  );
}

export function GLGDiagram() {
  return (
    <figure aria-label="GLG advisory — topic coverage map">
      <svg viewBox="0 0 800 360" xmlns="http://www.w3.org/2000/svg" className="w-full h-auto block panel">
        <rect x="0" y="0" width="800" height="360" fill="#101218" />
        <text x="20" y="24" fontFamily="ui-monospace, monospace" fontSize="10" fill="#7E8088" letterSpacing="2">// GLG ADVISORY · TOPIC COVERAGE</text>
        <text x="780" y="24" textAnchor="end" fontFamily="ui-monospace, monospace" fontSize="9" fill="#5BD394" letterSpacing="2">● COUNCIL MEMBER · 2025 — PRESENT</text>

        {/* Center node — "Esports & Gaming SME" */}
        <circle cx="400" cy="180" r="70" fill="#161922" stroke="#0F6B4E" strokeWidth="1.5" />
        <text x="400" y="170" textAnchor="middle" fontFamily="ui-monospace, monospace" fontSize="9" fill="#0F6B4E" letterSpacing="2">SUBJECT-MATTER</text>
        <text x="400" y="186" textAnchor="middle" fontFamily="Georgia, serif" fontStyle="italic" fontSize="18" fill="#F4F1EB">EXPERT</text>
        <text x="400" y="204" textAnchor="middle" fontFamily="ui-monospace, monospace" fontSize="9" fill="#7E8088" letterSpacing="2">ESPORTS · GAMING · MENA</text>

        {/* 6 topic spokes */}
        {[
          { x: 80,  y: 80,  k: "ESPORTS LEAGUES", d: "ESL · Faceit ecosystem" },
          { x: 720, y: 80,  k: "COMPETITIVE FRANCHISES", d: "EA Sports FC · Madden" },
          { x: 80,  y: 280, k: "MENA MARKET DYNAMICS", d: "KSA · Egypt · UAE" },
          { x: 720, y: 280, k: "VISION-2030 GAMING", d: "Saudi gaming investment" },
          { x: 400, y: 50,  k: "INVESTOR INTELLIGENCE", d: "Institutional briefings" },
          { x: 400, y: 320, k: "COMMERCIAL MODELS", d: "Pricing · sponsorship" },
        ].map((t) => (
          <g key={t.k}>
            <line x1="400" y1="180" x2={t.x} y2={t.y} stroke="#2A2D36" strokeDasharray="3 4" />
            <rect x={t.x - 90} y={t.y - 18} width="180" height="36" fill="#161922" stroke="#2A2D36" />
            <text x={t.x} y={t.y - 3} textAnchor="middle" fontFamily="ui-monospace, monospace" fontSize="9" fill="#0F6B4E" letterSpacing="1.5">{t.k}</text>
            <text x={t.x} y={t.y + 11} textAnchor="middle" fontFamily="ui-monospace, monospace" fontSize="8" fill="#7E8088">{t.d}</text>
          </g>
        ))}
      </svg>
      <figcaption className="mt-3 text-[11px] font-mono text-muted">// Topic areas only. GLG client identities, project specifics, and consultation content are confidential under network terms.</figcaption>
    </figure>
  );
}

export function TrueGamingDiagram() {
  return (
    <figure aria-label="True Gaming — LEAP Expo + Awards SOP + brand activations">
      <svg viewBox="0 0 800 360" xmlns="http://www.w3.org/2000/svg" className="w-full h-auto block panel">
        <rect x="0" y="0" width="800" height="360" fill="#101218" />
        <text x="20" y="24" fontFamily="ui-monospace, monospace" fontSize="10" fill="#7E8088" letterSpacing="2">// TRUE GAMING · 2023 — 2024 · AGENCY-SIDE EXECUTION</text>

        {/* Three pillars: LEAP · Awards · Brand activations */}
        {[
          { x: 60,  title: "LEAP EXPO",        rows: [{ k: "147", v: "contacts captured" }, { k: "6", v: "new clients onboarded" }, { k: "1", v: "booth strategy" }] },
          { x: 300, title: "AWARDS EVENT SOP", rows: [{ k: "Venue", v: "selection & logistics" }, { k: "Sponsor", v: "integration via JIRA" }, { k: "PM", v: "complete delivery" }] },
          { x: 540, title: "BRAND ACTIVATIONS", rows: [{ k: "Nvidia", v: "" }, { k: "Microsoft", v: "" }, { k: "ASUS · AstraNova", v: "" }] },
        ].map((p) => (
          <g key={p.title}>
            <rect x={p.x} y="60" width="200" height="240" fill="#161922" stroke="#2A2D36" />
            <line x1={p.x} y1="60" x2={p.x + 200} y2="60" stroke="#0F6B4E" strokeWidth="2" />
            <text x={p.x + 100} y="86" textAnchor="middle" fontFamily="ui-monospace, monospace" fontSize="11" fill="#0F6B4E" letterSpacing="2">{p.title}</text>
            {p.rows.map((row, ri) => (
              <g key={ri}>
                <text x={p.x + 16} y={130 + ri * 56} fontFamily="Georgia, serif" fontStyle="italic" fontSize={row.k.length > 10 ? "16" : "22"} fill="#F4F1EB">{row.k}</text>
                {row.v && <text x={p.x + 16} y={150 + ri * 56} fontFamily="ui-monospace, monospace" fontSize="9" fill="#7E8088">{row.v}</text>}
              </g>
            ))}
          </g>
        ))}

        <text x="400" y="335" textAnchor="middle" fontFamily="ui-monospace, monospace" fontSize="9" fill="#5C5E66" letterSpacing="2">JIRA-CADENCED · STAKEHOLDER-ALIGNED · RESPONSE-TIME OPTIMISED</text>
      </svg>
      <figcaption className="mt-3 text-[11px] font-mono text-muted">// Public summary of agency-side commercial work.</figcaption>
    </figure>
  );
}

export function RaadDiagram() {
  return (
    <figure aria-label="RA'AD Esports / Telecom Egypt — esports infrastructure">
      <svg viewBox="0 0 800 360" xmlns="http://www.w3.org/2000/svg" className="w-full h-auto block panel">
        <rect x="0" y="0" width="800" height="360" fill="#101218" />
        <text x="20" y="24" fontFamily="ui-monospace, monospace" fontSize="10" fill="#7E8088" letterSpacing="2">// RA'AD ESPORTS · TELECOM EGYPT · 2021</text>

        {/* Three blocks: Venue · Bootcamp · Operations */}
        {[
          { x: 60,  title: "ESPORTS VENUE",   sub: "Sporting club", rows: ["Concept design","Sizing & layout","Construction planning"] },
          { x: 300, title: "PMPL BOOTCAMP",   sub: "<7 days setup", rows: ["Telecom HQ deployment","Full infrastructure","Playoff-ready"] },
          { x: 540, title: "OPERATIONS",      sub: "KPI/KRI built", rows: ["Performance scorecards","Vendor coordination","Budget utilisation"] },
        ].map((p) => (
          <g key={p.title}>
            <rect x={p.x} y="60" width="200" height="240" fill="#161922" stroke="#0F6B4E" strokeWidth="1" />
            <text x={p.x + 100} y="90" textAnchor="middle" fontFamily="ui-monospace, monospace" fontSize="11" fill="#0F6B4E" letterSpacing="2">{p.title}</text>
            <text x={p.x + 100} y="108" textAnchor="middle" fontFamily="ui-monospace, monospace" fontSize="9" fill="#5BD394" letterSpacing="2">{p.sub}</text>
            {p.rows.map((r, ri) => (
              <g key={ri}>
                <line x1={p.x + 20} y1={150 + ri * 36} x2={p.x + 30} y2={150 + ri * 36} stroke="#0F6B4E" />
                <text x={p.x + 36} y={154 + ri * 36} fontFamily="ui-monospace, monospace" fontSize="10" fill="#F4F1EB">{r}</text>
              </g>
            ))}
          </g>
        ))}

        <text x="400" y="335" textAnchor="middle" fontFamily="ui-monospace, monospace" fontSize="9" fill="#5C5E66" letterSpacing="2">EARLIEST EVIDENCE OF SHIPPING ESPORTS INFRASTRUCTURE END-TO-END</text>
      </svg>
      <figcaption className="mt-3 text-[11px] font-mono text-muted">// Public summary of national-telco esports build-out.</figcaption>
    </figure>
  );
}
