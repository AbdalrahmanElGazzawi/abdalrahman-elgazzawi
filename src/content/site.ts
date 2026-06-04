// Single source of truth. Edit here, push, deploy.

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
  location: "Riyadh · Cairo · Damascus origin",
};

export const hero = {
  eyebrow: "Esports commercial systems · 2026",
  headline: ["Esports revenue,", "made defensible."],
  sub: "Commercial operating systems for elite esports — pricing methodology, sponsorship architecture, agency governance, partner pipeline, activation delivery, and proof.",
  meta: "Riyadh · Cairo · MENA & global gaming markets",
  cta: { primary:   { label: "View case studies", href: "/#case-studies" },
         secondary: { label: "Contact", href: "/contact" },
         tertiary:  { label: "Ways to collaborate", href: "/#collaborate" } },
};

// 8-stage commercial OS map (HeroCommandMap)
export const osStages = [
  { code: "01", k: "Intake",   d: "Brief, audience, fit" },
  { code: "02", k: "Rights",   d: "Talent, IP, scope" },
  { code: "03", k: "Pricing",  d: "Methodology, math" },
  { code: "04", k: "Approval", d: "Matrix, sign-off" },
  { code: "05", k: "Proposal", d: "Deck, contract, pack" },
  { code: "06", k: "Delivery", d: "Activation, QA" },
  { code: "07", k: "Proof",    d: "Reporting, attribution" },
  { code: "08", k: "Renewal",  d: "Expand, defend" },
];

// Proof bar — 8 metrics, broader (less Falcons-only)
export const proof = [
  { n: "10+",       l: "Years across esports & gaming" },
  { n: "778+",      l: "EWC partner deliverables shipped" },
  { n: "78+",       l: "Brands pitched across 5 agencies" },
  { n: "5M+",       l: "Viewers reached by managed campaigns" },
  { n: "147",       l: "Contacts captured at LEAP Expo" },
  { n: "200",       l: "Talents priced in Falcons rate book" },
  { n: "USD 11.2K", l: "Sony INZONE × Falcons closed" },
  { n: "GLG",       l: "Council Member · 2025 — Present" },
];

// Core thesis — 8-node flow
export const thesisFlow = ["Audience","Talent","Rights","Pricing","Partner","Activation","Proof","Renewal"];

// SIX flagship case studies — Falcons no longer dominant
export const caseStudies = [
  {
    slug: "team-falcons-commercial-stack",
    eyebrow: "Current · Esports Marketing Manager",
    title: "Team Falcons — commercial stack.",
    subtitle: "Authoring the commercial layer of a tier-1 esports organisation in Riyadh.",
    role: "Esports Marketing Manager",
    timeframe: "2026 — Present",
    tags: ["Pricing","Framework","Pipeline","Internal tooling"],
    outcome: "Building the commercial operating system that runs Falcons' partner activations end-to-end — methodology, framework, pipeline, internal tooling.",
    artifacts: ["Pricing methodology","Agency framework","Mandates pipeline","Internal pricing app"],
  },
  {
    slug: "falcons-pricing-os",
    eyebrow: "Product · Internal app · 2026",
    title: "Falcons Pricing OS.",
    subtitle: "Spreadsheet logic translated into a quote-lifecycle product — Next.js + Supabase + Vercel.",
    role: "Product owner · Engineer",
    timeframe: "Mar 2026 — Present",
    tags: ["Next.js","Supabase","Postgres RLS","Quote lifecycle"],
    outcome: "Internal web app — roster, quote builder, client portal, sales log, role-scoped Postgres RLS — running production quotes for a tier-1 esports org.",
    artifacts: ["Schema-first design","Methodology in code","Role-scoped permissions","CI/CD via GitHub → Vercel"],
  },

  {
    slug: "glg-advisory",
    eyebrow: "Council Member · April 2025 — Present",
    title: "GLG — esports & gaming expertise.",
    subtitle: "Paid advisory for global enterprises through GLG's expert network.",
    role: "Council Member — Gaming, Esports & AI",
    timeframe: "2025 — Present",
    tags: ["Expert advisory","Market intelligence","MENA gaming","Investor briefings"],
    outcome: "On-call subject-matter expert for institutional investors and global enterprises on esports leagues, competitive franchises, and MENA gaming market dynamics.",
    artifacts: ["Phone consultations","Written briefings","Vision-2030 gaming intelligence"],
  },
  {
    slug: "sony-inzone-team-falcons",
    eyebrow: "Closed deal · Q4 2025",
    title: "Sony INZONE × Team Falcons.",
    subtitle: "Closed and activated a creator-led KSA sponsorship via Ruder Finn Atteline.",
    role: "Commercial lead",
    timeframe: "Q4 2025",
    tags: ["KSA market","Creator activation","Discount mechanic"],
    outcome: "USD 11.2K closed · 5 Saudi creators · 12 deliverables · KSA discount-code mechanic linking campaign to retail conversion.",
    artifacts: ["Methodology applied","Framework v5 contracted","Mandates OS tracked","End-to-end attribution"],
  },
  {
    slug: "esports-world-cup",
    eyebrow: "Senior Consultant · 2024",
    title: "Esports World Cup — commercial delivery.",
    subtitle: "Owned partner delivery and SEF commercial roadmap at SPORTFIVE.",
    role: "Senior Account Manager — SPORTFIVE",
    timeframe: "Apr 2024 — Dec 2024",
    tags: ["EWC","SEF","Sponsor delivery","Commercial roadmap"],
    outcome: "778+ deliverables · 5M+ viewers · 78+ brands pitched · 6 clients onboarded · 25% revenue growth · SEF IP commercial roadmap accelerating sponsorship acquisition.",
    artifacts: ["Sponsor tracking SOP","Brand & technical QA standards","SEF IP commercial roadmap","Multi-agency coordination"],
  },
  {
    slug: "true-gaming-leap",
    eyebrow: "Project Manager · BD · 2023 — 2024",
    title: "True Gaming — LEAP, Awards, brand activations.",
    subtitle: "Activated Nvidia, Microsoft, ASUS, AstraNova through agency-side execution discipline.",
    role: "Project Manager · Business Development",
    timeframe: "Aug 2023 — Apr 2024",
    tags: ["LEAP Expo","Awards SOP","Brand activations","JIRA cadence"],
    outcome: "147 contacts captured at LEAP Expo · 6 new clients onboarded · TrueGaming Awards SOP rebuilt · activation response time cut significantly.",
    artifacts: ["LEAP booth strategy","Awards venue & sponsor SOP","JIRA-cadenced delivery","Brand activation playbook"],
  },
  {
    slug: "telecom-egypt-raad",
    eyebrow: "Esports Specialist · 2021",
    title: "Telecom Egypt RA'AD — esports infrastructure.",
    subtitle: "Stood up a national-telco esports operation in months, not years.",
    role: "Esports Specialist — Operations",
    timeframe: "Mar 2021 — Oct 2021",
    tags: ["Venue construction","PMPL bootcamp","KPI/KRI structure","Vendor coordination"],
    outcome: "Concept-to-construction planning for new esports venue at sporting club · PMPL playoff bootcamp setup at Telecom HQ in under a week · KPI/KRI framework shipped · budget-utilisation gains.",
    artifacts: ["Venue concept & sizing","Bootcamp infrastructure","Performance scorecards","Vendor coordination"],
  },
];

// Pricing engine — formula + 9 axes (still on homepage but as one of many sections)
export const pricingEngine = {
  formula: { left: "Final Price", right: "MAX(SocialPrice, AuthorityFloor) × ConfidenceCap × (1 + RightsUplift)" },
  bases: ["CPM","CPE","Comparables","Authority","Tier baseline"],
  axes: [
    { n: "01", k: "Engagement",     d: "Real audience interaction over follower vanity." },
    { n: "02", k: "Audience",       d: "Geography, language, value-segment fit." },
    { n: "03", k: "Seasonality",    d: "Tournament cycles, launches, regional moments." },
    { n: "04", k: "Content Type",   d: "Reel, post, stream, IRL, story, full video." },
    { n: "05", k: "Language",       d: "Arabic, English, regional uplift logic." },
    { n: "06", k: "Authority",      d: "Earned credibility within a vertical or game." },
    { n: "07", k: "Rights",         d: "Usage windows, exclusivity, edit rights." },
    { n: "08", k: "Multi-Platform", d: "Cross-channel package economics." },
    { n: "09", k: "Floor",          d: "Authority-derived minimum to defend." },
  ],
};

// 4-phase Brand Investment Model
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

// Operating principles — senior tone
export const principles = [
  { n: "01", title: "Defensibility over speed.",
    body: "Every rate, recommendation, and commercial position should trace back to source logic. If the math cannot be shown, the work is not finished." },
  { n: "02", title: "Methodology, then motion.",
    body: "Build the engine first — pricing, rights, playbook, governance, pipeline. Then move fast without creating commercial debt." },
  { n: "03", title: "Half technical, half commercial.",
    body: "Writing SQL, designing pricing logic, managing stakeholders, and closing deals are not separate muscles. They are one operating system." },
];

// Career arc
export const arc = "Competitor → QA → BD → Marketing → Operations → Strategy → Commercial Systems";

export const experience = [
  { role: "Esports Marketing Manager", company: "Team Falcons", years: "2026 — Present", impact: "Building the commercial operating system: pricing, framework, mandates pipeline, internal tooling.",
    proof: ["Authored full commercial stack — methodology, framework, mandates OS","Internal Pricing OS shipped to production (Next.js + Supabase)","Activation OS SOP + 200-idea themed deck for partner activations","Player Marketing Engine + Roster Announcement collateral"], current: true },
  { role: "Council Member — Gaming, Esports & AI", company: "GLG (Gerson Lehrman Group)", years: "2025 — Present", impact: "Paid expert advisory for institutional investors on esports & MENA gaming.",
    proof: ["Topic areas: leagues, sports/fighting franchises, MENA","Vision-2030 gaming intelligence briefings","Confidential client engagements under network terms"] },
  { role: "Senior Consultant — Account Mgmt", company: "SPORTFIVE — EWC / Saudi Esports Federation", years: "Apr 2024 — Dec 2024", impact: "Owned commercial delivery for the world's largest esports event + SEF IP commercial roadmap.",
    proof: ["778+ deliverables, 5M+ viewers, 78+ brands pitched","25% revenue growth from tightened account-mgmt execution","SEF IP commercial roadmap accelerating sponsorship acquisition","Sponsor tracking & reporting SOP across EWC channels","EWC 2024 Closing Ceremony Marcom Plan","Saudi eLeague — End-of-Sponsorship reporting"] },
  { role: "Project Manager & BD", company: "True Gaming", years: "Aug 2023 — Apr 2024", impact: "Activated tier-1 endemic brands through JIRA-cadenced delivery.",
    proof: ["LEAP Expo: 147 contacts, 6 new clients onboarded","TrueGaming Awards SOP — venue, logistics, sponsor integration on JIRA","Brand activations: Nvidia · Microsoft · ASUS · AstraNova","Activation response time cut significantly"] },
  { role: "Esports Specialist — Gamers8", company: "Vanguard", years: "May 2023 — Jul 2023", impact: "Filtered Gamers8 partner proposals + designed festival-area concepts.",
    proof: ["Reviewed 50+ proposals from across the world for Gamers8 festival area","Player-zone concept design and visitor-journey optimisation","Bridged commercial pitch and technical delivery for sponsor activations"] },
  { role: "Esports Specialist — Operations", company: "RA'AD Esports / Telecom Egypt", years: "Mar 2021 — Oct 2021", impact: "Built esports infrastructure end-to-end — venue, bootcamp, scorecards.",
    proof: ["Esports venue — concept · sizing · construction planning at sporting club","PMPL playoff bootcamp at Telecom HQ — full infrastructure in <7 days","KPI/KRI scorecard framework + 30% budget-efficiency gains","Personal initiative: HSC (Heliopolis SC) sponsorship package design"] },
  { role: "Gaming Specialist — Content & SEO", company: "Mobalytics", years: "Feb 2022 — Sep 2022", impact: "Lifted SEO performance through deep-dive game guides.",
    proof: ["Lost Ark vertical — content strategy and SEO publishing workflow","Organic-reach growth on guide-driven content"] },
  { role: "Earlier — QA / BD / Marketing / Internet Café", company: "S2 Games · Wanyoo · Sevan Jewelry · Adrenaline (Damascus)", years: "2012 — 2021", impact: "Range across the lifecycle — gaming-cafe ops, QA, BD, marketing operations.",
    proof: ["S2 Games — Prime Beta Tester, 10-person QA squad lead (Heroes of Newerth)","Wanyoo Cairo — esports-stakeholder BD, ROI frameworks for pro players","Adrenaline (Damascus) — internet café admin, earliest gaming-ops chapter","Sevan Jewelry — marketing operations across digital + community"] },
];

// Brands & partners — categorized by involvement level
export const brandInvolvement = [
  { tier: "Closed / directly managed", color: "gold",
    items: ["Sony INZONE","Team Falcons","Ruder Finn Atteline","True Gaming","SPORTFIVE","Esports World Cup","Saudi Esports Federation"] },
  { tier: "Delivered / supported", color: "green",
    items: ["Nvidia","Microsoft","ASUS","AstraNova","Lenovo Legion","Saudi Aramco","Gamers8","Mobalytics","Telecom Egypt","RA'AD Esports"] },
  { tier: "Pitched / pipeline / strategy", color: "neutral",
    items: ["GameSir","NODWIN","STC","Mobily","HADO","Saudi eLeagues","ArabHardware","HSC (Heliopolis Sporting Club)"] },
  { tier: "Ecosystem affiliations", color: "neutral",
    items: ["GLG (Gerson Lehrman Group)","Egyptian Esports Federation","Egypt Football Association","Vanguard","S2 Games","Wanyoo","Adrenaline (Damascus)"] },
];

// Competitive gaming credibility — tasteful sober treatment
export const competitiveCred = {
  intro: "Competitor before commercial. Fifteen-plus years inside the games — top global rankings across six titles. The commercial logic comes from understanding what audiences actually pay attention to.",
  ranks: [
    { game: "Call of Duty: Warzone",        rank: "Top 10 world wins · 6 seasons" },
    { game: "Heroes of Newerth (HoN)",      rank: "Rank 1 world leaderboard · 3 seasons" },
    { game: "World of Warcraft (Elemental Shaman PvE)", rank: "Top 25 world · BfA S1 & Shadowlands S5" },
    { game: "Super People",                  rank: "Top 100 leaderboard · S1, S2, S3" },
    { game: "PUBG (Steam)",                  rank: "Top 200 EU FPP · Top 300 EU TPP" },
    { game: "Dota 1 (Garena)",               rank: "Top 500 world support player" },
  ],
};

// Contact — segmented CTAs
export const contactCtas = [
  { audience: "For esports organizations", q: "Need pricing, rights, or commercial operating systems?",
    body: "Source-of-truth methodology, agency framework, mandates pipeline, internal tooling.",
    subject: "Esports org — commercial systems enquiry" },
  { audience: "For brands & agencies", q: "Need a defensible MENA esports sponsorship model?",
    body: "Tiered architecture, KSA market read, activation that connects to retail conversion.",
    subject: "Brand / agency — MENA sponsorship enquiry" },
  { audience: "For employers", q: "Hiring for commercial, partnerships, or revenue operations?",
    body: "Senior commercial leadership across the esports lifecycle. Hybrid technical-commercial.",
    subject: "Employer enquiry — senior commercial role" },
];

// Federation & ecosystem advisory — three trust-tier engagements
export const federationAdvisory = {
  intro: "Trust at the federation tier. Three engagements where the brief is commercial intelligence and structural design — not execution.",
  items: [
    {
      org: "GLG (Gerson Lehrman Group)",
      tag: "Council Member · 2025 — Present",
      role: "Subject-matter expert",
      body: "On-call for institutional investors and global enterprises. Topic coverage: esports leagues, competitive sports/fighting franchises, MENA gaming market dynamics.",
      meta: "Paid expert engagements · client identities confidential under network terms",
      colorClass: "gold",
    },
    {
      org: "Egypt Football Association × FIFAe",
      tag: "2026 cycle · co-author",
      role: "Commercial + marketing architect",
      body: "Co-authored the 2026 commercial plan, marketing plan, and master plan for Egypt's FIFAe presence. Federation-tier mandate at one of MENA's largest football institutions.",
      meta: "Signed MA Agreement · 2026 cycle live",
      colorClass: "green",
    },
    {
      org: "Egyptian Esports Federation",
      tag: "Advisory engagement · 2026",
      role: "Strategic advisor",
      body: "Advisory engagement on commercial packaging, partnership architecture, and ENC program activation. Non-executive, scope-disciplined, conflict-of-interest managed.",
      meta: "Part-time advisory · package and partnership focus",
      colorClass: "neutral",
    },
  ],
};

// Selected projects archive — historical work beyond the 7 case studies
// Each is a real artifact from the operator's career. Public-safe summaries.
export const selectedProjects = [
  { era: "Falcons · 2026",   title: "Activation OS — SOP suite",        body: "Standard operating procedures for partner-led activations from brief to delivery to reporting.", tag: "Internal SOP" },
  { era: "Falcons · 2026",   title: "200 Ideas Themed Deck",            body: "Library of 200 partner-activation concepts themed by category, game, and brand-fit. Used as a sales-conversation accelerator.", tag: "Concept library" },
  { era: "Falcons · 2026",   title: "Player Marketing Engine",          body: "Spreadsheet-driven framework for orchestrating per-player content cadence, sponsor obligations, and performance reporting.", tag: "Operating model" },
  { era: "Falcons · 2026",   title: "Roster Announcement collateral",   body: "End-to-end visual + copy package for major roster reveals — cohesive across web, social, broadcast.", tag: "Collateral" },
  { era: "Independent · 2026", title: "Egypt Digital Football Control Tower", body: "Strategic brief + operating model proposing an integrated commercial control tower for Egyptian football's digital surface.", tag: "Strategy brief" },
  { era: "SPORTFIVE · 2024", title: "EWC 2024 Closing Ceremony Marcom Plan", body: "Communications plan for the closing ceremony of the world's largest esports event — coordinated marketing, social, broadcast workstreams.", tag: "Marcom plan" },
  { era: "SPORTFIVE · 2024", title: "Saudi eLeague — End-of-Sponsorship reporting", body: "Wrapped sponsor-side reporting and renewal-conversation foundation for the ALJ × Saudi eLeague cycle.", tag: "Sponsor reporting" },
  { era: "SPORTFIVE · 2024", title: "SEF IP commercial roadmap",        body: "Commercialisation plan for Saudi Esports Federation Major IP — accelerating sponsor acquisition.", tag: "Roadmap" },
  { era: "True Gaming · 2024", title: "TrueGaming Awards Event SOP",     body: "Venue selection, logistics, sponsor integration, and full project tracking on JIRA — a reusable agency event playbook.", tag: "Event SOP" },
  { era: "True Gaming · 2024", title: "LEAP Expo booth strategy",        body: "Booth design + lead-capture flow for Riyadh's flagship tech expo. 147 contacts, 6 new clients converted.", tag: "Booth + leads" },
  { era: "Telecom Egypt · 2021", title: "HSC Sponsorship Package",       body: "Personal-initiative sponsorship package for Heliopolis Sporting Club — one of Egypt's most prestigious sporting institutions.", tag: "Sponsorship pkg" },
  { era: "Telecom Egypt · 2021", title: "Esports vs Traditional Marketing — mind map", body: "Mind-map deliverable comparing esports marketing to traditional team marketing — used to onboard non-endemic stakeholders.", tag: "Strategy artifact" },
];

export const navLinks = [
  { href: "/#case-studies", label: "Case studies" },
  { href: "/#methodology",  label: "Methodology" },
  { href: "/#tiers",        label: "Tiers" },
  { href: "/#federation",   label: "Advisory" },
  { href: "/#competitive",  label: "Esports-native" },
  { href: "/#collaborate",  label: "Collaborate" },
  { href: "/about",         label: "About" },
  { href: "/contact",       label: "Contact" },
];


// Ways to collaborate — four shapes of engagement.
// Full-time leads. Shape (not fees) shown. Rate cards on request.
export const waysToCollaborate = {
  intro: "Four shapes of engagement, full-time leads. Engagement shape shown openly; rate cards and terms shared in reply to direct inquiries.",
  items: [
    {
      label: "Full-Time Roles",
      eyebrow: "Primary",
      shape: "Standard hiring process",
      body: "Open to senior seats in commercial partnerships, brand marketing, account management, sponsorship activation, and commercial operations. MENA · GCC · Nordic · EU · US · Remote.",
    },
    {
      label: "Fractional / Part-Time",
      eyebrow: "2-3 days / week",
      shape: "3-month minimum · Quarterly retainer",
      body: "Senior commercial leadership for growth-stage gaming, esports, sports, or entertainment companies that need partnerships and campaign-operations leverage without a full headcount.",
    },
    {
      label: "Project-Based",
      eyebrow: "Bounded scope, fixed fee",
      shape: "30-90 day engagements · Quoted per brief",
      body: "Specific outcomes — sponsorship strategy, GTM build, commercial operating system, partnership pitch architecture, federation roadmap, or bilingual EN / AR campaign design.",
    },
    {
      label: "Advisory & Board",
      eyebrow: "Ongoing strategic counsel",
      shape: "Quarterly retainer · Monthly cadence",
      body: "MENA gaming market, esports partnerships, federation and publisher strategy, AI-augmented commercial operations. Council Member at GLG since 2025.",
    },
  ],
  disclosure: "Rate cards and engagement terms shared in reply to direct inquiries. Fixed-fee for projects; retainer for fractional and advisory.",
};

export const confidentialityNote = "Selected details are simplified or sanitized for confidentiality. Internal rates, partner negotiations, GLG client identities, and private pipeline data are intentionally omitted from this public portfolio.";
