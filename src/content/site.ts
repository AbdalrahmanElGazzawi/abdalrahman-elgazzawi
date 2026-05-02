// Single source of truth for all content. Edit here, push, deploy.

export const site = {
  name: "Abdalrahman ElGazzawi",
  nickname: "Koge",
  role: "Esports Marketing Manager · Team Falcons",
  positioning: "I build commercial operating systems for esports organizations.",
  email: "a.faroukbiz2@gmail.com",
  phone: "+966 53 296 2163",
  linkedin: "https://linkedin.com/in/elgazzwi",
  linkedinDisplay: "linkedin.com/in/elgazzwi",
  url: process.env.NEXT_PUBLIC_SITE_URL ?? "https://abdalrahman-elgazzawi.vercel.app",
  ogImage: "/api/og",
  location: "Riyadh · Cairo",
};

export const hero = {
  eyebrow: "Esports commercial systems · 2026",
  headline: ["Esports revenue,", "made defensible."],
  sub: "Commercial operating systems for elite esports — pricing methodology, sponsorship architecture, agency governance, partner pipeline, activation delivery, and proof.",
  meta: "Riyadh · Cairo · MENA & global gaming markets",
  cta: { primary: { label: "View flagship case study", href: "/case-studies/team-falcons-commercial-stack" },
         secondary: { label: "Contact", href: "/contact" },
         tertiary: { label: "Download résumé", href: "/downloads/Abdalrahman_ElGazzawi_Resume_2026.pdf" } },
};

// 8-stage commercial OS map (used in HeroCommandMap SVG)
export const osStages = [
  { code: "01", k: "Intake",     d: "Brief, audience, fit" },
  { code: "02", k: "Rights",     d: "Talent, IP, scope" },
  { code: "03", k: "Pricing",    d: "Methodology, math" },
  { code: "04", k: "Approval",   d: "Matrix, sign-off" },
  { code: "05", k: "Proposal",   d: "Deck, contract, pack" },
  { code: "06", k: "Delivery",   d: "Activation, QA" },
  { code: "07", k: "Proof",      d: "Reporting, attribution" },
  { code: "08", k: "Renewal",    d: "Expand, defend" },
];

// Proof bar — 8 high-impact metrics
export const proof = [
  { n: "10+",       l: "Years across esports & gaming" },
  { n: "200",       l: "Talents priced in the rate book" },
  { n: "778+",      l: "EWC partner deliverables shipped" },
  { n: "78+",       l: "Brands pitched across 5 agencies" },
  { n: "5M+",       l: "Viewers reached by managed campaigns" },
  { n: "~SAR 2.3M", l: "Active commercial pipeline tracked" },
  { n: "USD 11.2K", l: "Sony INZONE × Falcons closed" },
  { n: "SAR 17.6M", l: "Annual exposure surfaced in audit" },
];

// Core thesis flow — 8 nodes
export const thesisFlow = [
  "Audience","Talent","Rights","Pricing","Partner","Activation","Proof","Renewal",
];

// Featured case studies — 4 flagship
export const caseStudies = [
  {
    slug: "team-falcons-commercial-stack",
    eyebrow: "Flagship · 2026",
    title: "Team Falcons Commercial Stack",
    subtitle: "Pricing, rights, agency governance, and pipeline control for elite esports commercial operations.",
    role: "Esports Marketing Manager",
    timeframe: "Jan 2026 — Present",
    tags: ["Pricing methodology","Agency framework","Mandates OS","Pipeline control"],
    outcome: "End-to-end commercial operating system — methodology, framework, and pipeline tool — codified into one defensible stack.",
    artifacts: ["Pricing Source of Truth v1.0","200-talent rate book","140-page Agency Partner Framework v5.0","4-phase Brand Investment Model","13 counterparty tracks","Bilingual Mandates OS","Falcons Pricing OS"],
  },
  {
    slug: "falcons-pricing-os",
    eyebrow: "Product · 2026",
    title: "Falcons Pricing OS",
    subtitle: "From spreadsheet logic to an internal quote-lifecycle product.",
    role: "Product owner & engineer",
    timeframe: "Mar 2026 — Present",
    tags: ["Next.js","Supabase","Postgres RLS","Quote lifecycle"],
    outcome: "Internal web app turning a 15-section methodology into a live quote engine with role-scoped permissions.",
    artifacts: ["Roster module","Quote builder","Client portal","Sales activity log","Admin tooling","Postgres RLS — admin/sales/finance/viewer roles","Formula-based pricing logic"],
  },
  {
    slug: "sony-inzone-team-falcons",
    eyebrow: "Closed deal · Dec 2025",
    title: "Sony INZONE × Team Falcons",
    subtitle: "Closed and activated a creator-led KSA sponsorship via Ruder Finn Atteline.",
    role: "Commercial lead",
    timeframe: "Q4 2025",
    tags: ["KSA market","Creator activation","Discount mechanic","Brand seeding"],
    outcome: "USD 11.2K closed, 5 creators, 12 deliverables, full product seeding, KSA discount-code mechanic linking campaign to retail conversion.",
    artifacts: ["Scoped via methodology","Contracted on Framework v5","Activated through Mandates OS","Performance-tracked end-to-end"],
  },
  {
    slug: "esports-world-cup",
    eyebrow: "Senior Consultant · 2024",
    title: "Esports World Cup — Commercial Delivery",
    subtitle: "High-volume partner delivery across marketing, social, and broadcast for the world's largest esports event.",
    role: "Senior Consultant — SPORTFIVE",
    timeframe: "Apr 2024 — Dec 2024",
    tags: ["Account management","Sponsor delivery","Brand & technical QA","78+ brands"],
    outcome: "778+ partner deliverables shipped · 5M+ viewers reached · 78+ brands pitched · 6 clients onboarded · 20% revenue growth.",
    artifacts: ["End-to-end sponsorship activation","Brand & technical QA standards","Six-figure brand deal management","Cross-team commercial delivery"],
  },
];

// Pricing engine — formula + 9 axes (visualized as radial in component)
export const pricingEngine = {
  formula: { left: "Final Price", right: "MAX(SocialPrice, AuthorityFloor) × ConfidenceCap × (1 + RightsUplift)" },
  bases: ["CPM","CPE","Comparables","Authority","Tier baseline"],
  axes: [
    { n: "01", k: "Engagement",     d: "Real audience interaction over follower vanity." },
    { n: "02", k: "Audience",       d: "Geography, language, and value-segment fit." },
    { n: "03", k: "Seasonality",    d: "Tournament cycles, launches, regional moments." },
    { n: "04", k: "Content Type",   d: "Reel, post, stream, IRL, story, full video." },
    { n: "05", k: "Language",       d: "Arabic, English, regional uplift logic." },
    { n: "06", k: "Authority",      d: "Earned credibility within a vertical or game." },
    { n: "07", k: "Rights",         d: "Usage windows, exclusivity, edit rights." },
    { n: "08", k: "Multi-Platform", d: "Cross-channel package economics." },
    { n: "09", k: "Floor",          d: "Authority-derived minimum to defend." },
  ],
};

// 4-phase Brand Investment Model — interactive tier component
export const tiers = [
  { phase: "I",   floor: "SAR 25K+",  name: "Advertising",
    what: "Single-asset placements at rate-card.",
    who:  "Emerging brands, tactical short-cycle buys, on-ramp partners.",
    logic: "CPM/CPC floor rates feed a defensible price per impression or interaction.",
    bundle: "Single-channel placement · 30-day window · standard usage rights.",
    governance: "Lightweight approval. Sales-tier sign-off. Standard templates." },
  { phase: "II",  floor: "SAR 250K+", name: "Sponsorship",
    what: "Multi-asset, multi-month commercial agreement.",
    who:  "Brand teams active across the ecosystem, mid-funnel investment.",
    logic: "Tiered architecture — rights bundle + asset inventory + performance bonuses.",
    bundle: "Cross-channel package · season-long · talent + content + activation.",
    governance: "Director sign-off. Activation playbook attached. Renewal review at 60 days." },
  { phase: "III", floor: "SAR 1.5M+", name: "Partnership",
    what: "Year-round co-marketing depth and strategic alignment.",
    who:  "Strategic brands integrating with Falcons IP across the calendar.",
    logic: "Standard partnership inventory · co-marketing calendar · joint-KPI structure.",
    bundle: "Always-on integration · multi-team scope · joint-press · co-content.",
    governance: "C-suite sign-off. Quarterly partnership review. Crisis playbook activated by default." },
  { phase: "IV",  floor: "SAR 10M+",  name: "Equity / Title / Naming",
    what: "Title sponsorship, naming rights, or equity participation.",
    who:  "Strategic territory partners. Multi-year, board-level commitment.",
    logic: "Strategic-territory pricing — exclusivity premium + multi-year commit + governance share.",
    bundle: "Naming · presence · category exclusivity · co-investment structure.",
    governance: "Board approval. Legal-led structuring. Multi-year governance cadence." },
];

// 13 counterparty tracks (referenced in framework section)
export const counterpartyTracks = [
  "Direct Brand","Creative Agency","Media Agency","PR Agency","Talent-Rep","Publisher",
  "Broadcaster","Government","Tech / Endemic","Telco","Federation","Distributor","Strategic Investor",
];

// Operating principles — senior tone
export const principles = [
  { n: "01", title: "Defensibility over speed.",
    body: "Every rate, recommendation, and commercial position should trace back to source logic. If the math cannot be shown, the work is not finished." },
  { n: "02", title: "Methodology, then motion.",
    body: "Build the engine first — pricing, rights, playbook, governance, pipeline. Then move fast without creating commercial debt." },
  { n: "03", title: "Half technical, half commercial.",
    body: "Writing SQL, designing pricing logic, managing stakeholders, and closing deals are not separate muscles. They are one operating system." },
];

// Career arc — compressed timeline
export const arc = "QA → BD → Marketing → Operations → Strategy → Commercial Systems";

export const experience = [
  { role: "Esports Marketing Manager", company: "Team Falcons", years: "2026 — Present", impact: "Authored full commercial stack — pricing, framework, mandates OS, internal pricing app.",
    proof: ["200-talent rate book","Pricing OS shipped to production"], current: true },
  { role: "Senior Consultant", company: "SPORTFIVE — EWC / Saudi Esports Federation", years: "2024", impact: "Owned commercial delivery for the world's largest esports event.",
    proof: ["778+ deliverables, 5M+ viewers","78+ brands pitched, 20% revenue growth"] },
  { role: "Project Manager & BD", company: "True Gaming", years: "2023 — 2024", impact: "Activated Nvidia, Microsoft, ASUS through JIRA-cadenced delivery.",
    proof: ["Tier-1 endemic activations","Sprint-cadence stakeholder ops"] },
  { role: "Esports Specialist — Gamers8", company: "Vanguard", years: "2023", impact: "Qualified Gamers8 sponsor proposals and shaped player-zone concepts.",
    proof: ["Technical-feasibility filtering","Interactive-zone design"] },
  { role: "Esports Specialist — Operations", company: "RA'AD Esports / Telecom Egypt", years: "2021", impact: "Built KPI/KRI structure and tightened vendor coordination.",
    proof: ["Performance scorecards","Budget-utilization gains"] },
  { role: "Council Member — Gaming, Esports & AI", company: "GLG", years: "2025 — Present", impact: "Advise institutional investors on MENA esports market structure.",
    proof: ["Vision 2030 gaming intelligence","Investor briefings"] },
  { role: "Gaming Specialist — Content & SEO", company: "Mobalytics", years: "2022", impact: "Lifted SEO performance through deep-dive game guides.",
    proof: ["Lost Ark vertical","Organic-reach growth"] },
  { role: "Earlier — QA / BD / Marketing", company: "S2 Games · Wanyoo · Sevan Jewelry", years: "2015 — 2021", impact: "Range-building across the lifecycle — QA, BD, marketing ops.",
    proof: ["10-person QA squad lead","ROI frameworks for pro players"] },
];

// Brands & partners — categorized by involvement level
export const brandInvolvement = [
  { tier: "Closed / directly managed", color: "gold",
    items: ["Sony INZONE","Team Falcons","Ruder Finn Atteline","True Gaming","SPORTFIVE","Esports World Cup","Saudi Esports Federation"] },
  { tier: "Delivered / supported", color: "green",
    items: ["Nvidia","Microsoft","ASUS","Lenovo Legion","Saudi Aramco","Gamers8","Mobalytics","Telecom Egypt"] },
  { tier: "Pitched / pipeline / strategy", color: "neutral",
    items: ["GameSir","NODWIN","STC","Mobily","HADO","Saudi eLeagues","ArabHardware"] },
  { tier: "Ecosystem affiliations", color: "neutral",
    items: ["GLG (Gerson Lehrman Group)","Egyptian Esports Federation","Egypt Football Association","Vanguard","S2 Games","Wanyoo"] },
];

// Contact — segmented CTAs
export const contactCtas = [
  { audience: "For esports organizations", q: "Need pricing, rights, or commercial operating systems?",
    body: "Source-of-truth methodology, agency framework, mandates OS, internal pricing tooling.",
    subject: "Esports org — commercial systems enquiry" },
  { audience: "For brands & agencies", q: "Need a defensible MENA esports sponsorship model?",
    body: "Tiered architecture, KSA market read, activation that connects to retail conversion.",
    subject: "Brand / agency — MENA sponsorship enquiry" },
  { audience: "For employers", q: "Hiring for commercial, partnerships, or revenue operations?",
    body: "Senior commercial leadership across the esports lifecycle. Hybrid technical-commercial.",
    subject: "Employer enquiry — senior commercial role" },
];

export const navLinks = [
  { href: "/#case-studies", label: "Case studies" },
  { href: "/#methodology",  label: "Methodology" },
  { href: "/#tiers",        label: "Tiers" },
  { href: "/#experience",   label: "Experience" },
  { href: "/about",         label: "About" },
  { href: "/contact",       label: "Contact" },
];

export const confidentialityNote = "Selected details are simplified or sanitized for confidentiality. Internal rates, partner negotiations, and private pipeline data are intentionally omitted from this public portfolio.";
