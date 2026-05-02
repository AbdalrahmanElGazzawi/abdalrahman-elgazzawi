export const site = {
  name: "Abdalrahman ElGazzawi",
  shortName: "Abdalrahman ElGazzawi",
  nickname: "Koge",
  role: "Esports Marketing Manager · Team Falcons",
  tagline: "Esports & Gaming Operator",
  taglineSub: "Commercial Strategy · Partnerships · Marketing · Operations",
  bio: "Commercial operator across the esports lifecycle. 10+ years across MENA and global markets. Currently building Falcons' commercial stack — pricing methodology, agency framework, deal pipeline.",
  location: "Riyadh · Cairo",
  yearsLine: "10+ years across esports & gaming.",
  opsLine: "Operating across MENA & global markets.",
  email: "a.faroukbiz2@gmail.com",
  phone: "+966 53 296 2163",
  linkedin: "https://linkedin.com/in/elgazzwi",
  linkedinDisplay: "linkedin.com/in/elgazzwi",
  url: process.env.NEXT_PUBLIC_SITE_URL ?? "https://abdalrahman-elgazzawi.vercel.app",
  ogImage: "/api/og",
};

export const numbers = [
  { n: "10+",  l: "Years across\nthe esports lifecycle" },
  { n: "200",  l: "Talents priced\nin the Falcons rate book" },
  { n: "778+", l: "Deliverables shipped\nat Esports World Cup" },
  { n: "78+",  l: "Brands pitched\nacross 5 agencies" },
  { n: "5M+",  l: "Viewers reached\nby campaigns delivered" },
];

export const range = [
  { num: "I",   title: "Commercial Strategy",      body: "Pricing methodology, rate-card design, market audit, revenue modeling, sponsorship valuation." },
  { num: "II",  title: "Partnerships & Accounts",  body: "Brand onboarding, contract negotiation, agency management, sponsorship activation." },
  { num: "III", title: "Marketing & Activations",  body: "Talent campaigns, broadcast and social workstreams, sponsor delivery, community ecosystems." },
  { num: "IV",  title: "Operations & Delivery",    body: "Agile sprints, JIRA workflows, vendor management, cross-functional coordination, technical QA." },
];

export const falconsPillars = [
  { tag: "Methodology",  title: "Source of Truth v1.0",      body: "Authored canonical 15-section pricing methodology — 200 talents, S/1/2/3/4 tiers, calibrated against FaZe / Cloud9 / T1 / NRG / 100T / Karmine / NAVI / Fnatic via Newzoo, Nielsen, Shikenso, Influencity, WME/CAA agency practice." },
  { tag: "Framework v5.0", title: "Agency Partner Pack",     body: "Architected 140-page commercial governance: 4-phase Brand Investment Model (SAR 25K → 10M+), 13 counterparty tracks, Approval Matrix, Clause Library, Activation/Renewal/Crisis Playbooks. KSA law, SCCA Riyadh." },
  { tag: "Mandates OS",   title: "Pipeline · ~SAR 2.3M",     body: "Built bilingual (Arabic + English) hub-and-spoke pipeline tool tracking active mandates by game, type, and execution status — Player Campaigns, Sponsor Mandates, IP, Team Campaigns, Event Appearances." },
  { tag: "Closed Deal",   title: "Sony INZONE × Falcons",    body: "Closed USD 11.2K Sony INZONE sponsorship via Ruder Finn Atteline — 5 creators (Abu Najd, Madv, Spyerfrog, Oden, xsma333), 12 deliverables, full INZONE product seeding, KSA discount-code mechanic." },
];

export const axes = [
  "Engagement", "Audience", "Seasonality", "Content Type",
  "Language", "Authority", "Rights", "Multi-Platform", "Floor",
];

export const phases = [
  { num: "I",   floor: "SAR 25K+",  title: "Advertising",                body: "Single-asset placements. Rate-card driven. CPM/CPC floor rates. The on-ramp for emerging brands and short-cycle tactical buys." },
  { num: "II",  floor: "SAR 250K+", title: "Sponsorship",                body: "Multi-asset, multi-month. Tiered architecture. Rights bundle, asset inventory, performance bonuses. Where most ecosystem-active brands land." },
  { num: "III", floor: "SAR 1.5M+", title: "Partnership",                body: "Co-marketing depth. Year-round integration. Standard partnership inventory. Strategic alignment between brand and Falcons IP." },
  { num: "IV",  floor: "SAR 10M+",  title: "Equity / Title / Naming",    body: "Title sponsorship, naming rights, equity participation. The C-suite tier. Multi-year, deep co-investment, strategic territory." },
];

export const closedDeal = {
  tag: "Closed",
  title: "Sony INZONE × Team Falcons",
  via: "via Ruder Finn Atteline · Dec 2025",
  stats: [
    { k: "USD 11.2K", v: "deal value to Falcons" },
    { k: "5",         v: "creators activated" },
    { k: "12",        v: "deliverables shipped" },
    { k: "20%",       v: "KSA discount-code mechanic" },
  ],
  creators: "Abu Najd · Madv · Spyerfrog · Oden · xsma333",
};

export const pipeline = [
  { tag: "Multi-Division",   title: "GameSir × NODWIN",         body: "Apex + FGC + COD multi-division proposal · v5 master working book" },
  { tag: "Partnership",      title: "HADO × Team Falcons",      body: "Multi-iteration pricing workbook · phase 1 proposal in review" },
  { tag: "Sponsorship Deck", title: "Falcons Philippines M5",   body: "M5 World Champions sponsorship deck · MLBB ecosystem" },
  { tag: "Sponsorship Deck", title: "Falcons Vega SEA · MLBB",  body: "First-of-its-kind female roster commercial deck · SEA market" },
  { tag: "Creator Brief",    title: "Madv × INZONE / NVIDIA AR", body: "Creator briefs and AR scripts for tier-1 endemic activations" },
];

export const ewc = {
  role: "Senior Consultant",
  blurb: "Account Management & Partnerships — owning commercial delivery for the world's largest esports event.",
  owned: [
    "Partnership operations across internal teams, agencies, tier-1 sponsors.",
    "Brand and technical asset QA standards across marketing, social, broadcast.",
    "Six-figure brand deals — co-managed end-to-end through close.",
    "Sponsorship activation timelines and stakeholder alignment.",
  ],
  stats: [
    { n: "778+", l: "partner deliverables shipped across marketing, social, broadcast" },
    { n: "5M+",  l: "viewers reached by campaigns under direct management" },
    { n: "78+",  l: "brands pitched in collaboration with five agency partners" },
    { n: "20%",  l: "revenue growth driven by tightened account-management execution" },
  ],
};

export const bdCards = [
  { logo: "/img/logo-truegaming.png", title: "True Gaming", role: "Project Manager & Business Development", dates: "AUG 2023 — APR 2024", bullets: [
    "Streamlined creative and technical pipelines using JIRA workflows.",
    "Led activations for Nvidia, Microsoft, ASUS — product positioning, brand integrity, on-ground execution.",
    "Sprint cadence and stakeholder alignment for technical-partner campaigns.",
  ]},
  { logo: "/img/logo-vanguard.png", title: "Vanguard", role: "Esports Specialist — Gamers8", dates: "MAY 2023 — JUL 2023", bullets: [
    "Qualified Gamers8 partner proposals on technical feasibility and audience fit.",
    "Designed interactive zone concepts to optimize player journey at MENA's flagship festival.",
    "Bridged commercial pitch and technical delivery for sponsor activations.",
  ]},
];

export const advisory = [
  { num: "01", title: "GLG (Gerson Lehrman Group)", meta: "Council Member — Gaming, Esports & AI · 2025 — Present", body: "Advise institutional investors and tech vendors on MENA esports market trends, commercial models, Saudi Vision 2030 gaming-investment opportunities.", logo: null },
  { num: "02", title: "Mobalytics", meta: "Gaming Specialist — Content & SEO · 2022", body: "Produced deep-dive Lost Ark guides; supported SEO-driven publishing workflows lifting content performance and organic reach.", logo: "/img/logo-mobalytics.png" },
  { num: "03", title: "Telecom Egypt — RA'AD Esports", meta: "Esports Specialist — Operations · 2021", body: "Established team performance KPIs/KRIs; improved budget utilization through tighter vendor coordination and process redesign.", logo: "/img/logo-telecom-egypt.png" },
];

export const earlier = [
  { yr: "2015 — 2017", org: "S2 Games",      role: "QA Tester / Prime Beta Tester",   note: "Led a 10-person testing squad; bug-tracking workflows on pre-release titles. Learned the technical floor of how games actually ship." },
  { yr: "2017 — 2018", org: "Wanyoo (Cairo)", role: "Business Development Specialist", note: "Built esports-stakeholder relationships; ROI frameworks for professional players. First commercial muscle." },
  { yr: "2020 — 2021", org: "Sevan Jewelry", role: "Marketing Operations Specialist",  note: "Digital campaigns supporting 100+ sales; community growth across non-gaming verticals. Adjacent rep at brand & ops." },
];

export const principles = [
  { n: "01", title: "Defensibility over speed.",        body: "Every rate, every recommendation, every commercial position should trace back to a source. If I can't show the math, I haven't done the work yet." },
  { n: "02", title: "Methodology, then motion.",        body: "Build the engine first — the rate book, the playbook, the framework. Then ship at speed. Without methodology, fast becomes expensive." },
  { n: "03", title: "Half technical, half commercial.", body: "Writing SQL, designing pricing logic, and closing six-figure deals are the same job. The product is whatever the client buys, end-to-end." },
];

export const stack = [
  { lab: "Delivery & PM",     items: "JIRA · Confluence · Trello · Notion · Slack · Discord" },
  { lab: "Commercial & Ops",  items: "Excel / Sheets · Salesforce-class CRMs · Zoho · MS 365 · Google Workspace" },
  { lab: "Product & Data",    items: "SQL · Postgres / Supabase · Next.js · Vercel · GitHub · Markdown / Notion docs" },
  { lab: "Esports-Specific",  items: "Newzoo · Nielsen Esports · Shikenso · Influencity · StreamElements" },
];

export const brandLogos = [
  { src: "/img/brand-aramco.png",          alt: "Saudi Aramco" },
  { src: "/img/brand-telecom-egypt.png",   alt: "Telecom Egypt" },
  { src: "/img/brand-saudi-eleagues.png",  alt: "Saudi eLeagues" },
  { src: "/img/logo-truegaming.png",       alt: "True Gaming" },
  { src: "/img/logo-vanguard.png",         alt: "Vanguard" },
  { src: "/img/brand-arabhardware.png",    alt: "ArabHardware" },
  { src: "/img/logo-mobalytics.png",       alt: "Mobalytics" },
];

export const brandFlags = [
  { kind: "efa" as const, l1: "EGYPT FA",          l2: "Football Association" },
  { kind: "eef" as const, l1: "EGYPTIAN E-SPORTS", l2: "Federation" },
];

export const brandText = [
  { lab: "Tech · Endemic · Telco",            list: "Nvidia · Microsoft · ASUS · Sony INZONE · STC · Mobily · Lenovo Legion · GameSir · NODWIN" },
  { lab: "Esports Ecosystem & Federations",   list: "Saudi Esports Federation · Egyptian Esports Federation · Egypt Football Association · SPORTFIVE · Esports World Cup · Gamers8 · Team Falcons · Ruder Finn Atteline · True Gaming · Vanguard · GLG · Mobalytics · S2 Games · Wanyoo · HADO" },
];

export const education = [
  { h: "B.A., Communication & Media Studies", sub: "Universitat Autònoma de Barcelona · AAST" },
  { h: "Diploma, Marketing",                  sub: "DM Arts Academy" },
];

export const certs = "Business Development Consulting (2025) · Account Management — Maintaining Relationships · Negotiation Skills · Basic Tournament Administration";

export const languages = [
  { name: "Arabic",  level: "Native", pct: 100 },
  { name: "English", level: "Fluent", pct: 92 },
  { name: "Spanish", level: "Basic",  pct: 40 },
];

export const navLinks = [
  { href: "#falcons",     label: "Falcons" },
  { href: "#methodology", label: "Methodology" },
  { href: "#pipeline",    label: "Pipeline" },
  { href: "#work",        label: "Work" },
  { href: "#brands",      label: "Brands" },
  { href: "#contact",     label: "Contact" },
];
