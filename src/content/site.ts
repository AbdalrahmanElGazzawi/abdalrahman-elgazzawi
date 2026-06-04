// Single source of truth — repositioned for broad commercial roles.
// Esports/gaming is a differentiator, not a cage.

export const site = {
  name: "Abdalrahman ElGazzawi",
  nickname: "Koge",
  role: "Commercial Partnerships & Campaign Operations Professional",
  headline: "Commercial Partnerships · Account Management · Campaign Operations",
  positioning: "I help brands, agencies, teams, and entertainment businesses turn commercial ideas into priced, packaged, and delivered campaigns.",
  email: "abdghazzawi1@gmail.com",
  phone: "+966 53 296 2163",
  phoneDisplay: "+966 53 296 2163",
  whatsapp: "https://wa.me/966532962163",
  whatsappDisplay: "+966 53 296 2163",
  linkedin: "https://linkedin.com/in/elgazzwi",
  linkedinDisplay: "linkedin.com/in/elgazzwi",
  url: process.env.NEXT_PUBLIC_SITE_URL ?? "https://abdalrahman-elgazzawi.vercel.app",
  ogImage: "/api/og",
  location: "Based in Cairo, Egypt · Open to Riyadh, GCC, Remote & Global",
};

export const hero = {
  eyebrow: "Commercial partnerships · Campaign operations",
  headline: ["Commercial partnerships,", "campaign operations,", "and sponsorship delivery."],
  sub: "I help brands, agencies, teams, and entertainment businesses turn commercial ideas into priced, packaged, and delivered campaigns — from proposals and rights packaging to partner coordination, workflow systems, and proof of delivery.",
  meta: "Based in Cairo, Egypt · Open to Riyadh, GCC, Remote & Global opportunities",
  cta: {
    primary:   { label: "Download General CV", href: "/downloads/Abdalrahman_ElGazzawi_General_CV.pdf" },
    secondary: { label: "Download Esports CV", href: "/downloads/Abdalrahman_ElGazzawi_Esports_CV.pdf" },
    tertiary:  { label: "View case studies",   href: "/#work" },
    quaternary:{ label: "Contact me",          href: "mailto:abdghazzawi1@gmail.com?subject=Commercial%20partnerships%20%26%20campaign%20operations%20enquiry" },
  },
};

// LinkedIn summary anchored to broader positioning.
export const aboutCopy = `I am a commercial partnerships and campaign operations professional based in Cairo, Egypt, with experience across esports, sports, entertainment, agencies, technology brands, and MENA market activations. My work focuses on turning commercial objectives into structured proposals, pricing models, sponsorship packages, campaign workflows, stakeholder alignment, and measurable delivery.`;

export const summary = `I'm a multi-disciplinary consultant and operator who helps organizations turn strategy into execution across commercial growth, partnerships, go-to-market planning, and delivery operations. I've led end-to-end partnership and sponsorship delivery, managed cross-functional teams and external agencies, and built workflow systems (Agile/JIRA) that improve speed, quality, and accountability. Recent work includes delivering 778+ commercial assets with full contractual fulfillment and supporting campaigns reaching 5M+ viewers.`;

// Trust strip — 6 metrics, no unverified claims.
export const proof = [
  { n: "10+",       l: "Years across commercial & gaming" },
  { n: "778+",      l: "Commercial deliverables shipped" },
  { n: "5M+",       l: "Viewers reached" },
  { n: "78+",       l: "Brands pitched" },
  { n: "147",       l: "LEAP Expo contacts captured" },
  { n: "GLG",       l: "Council Member · 2025 — Present" },
];

// FOUR highlighted case studies — broader frame.
export const caseStudies = [
  {
    slug: "team-falcons-commercial-stack",
    eyebrow: "Fixed-term consultancy · Feb–May 2026",
    title: "Building a commercial partnership and campaign operations stack for Team Falcons.",
    subtitle: "Fixed-term engagement supporting partnership packaging, sponsorship activation, pricing logic, campaign operations, and commercial workflow setup across brand, creator, player, and esports opportunities.",
    role: "Commercial Partnerships Consultant, Fixed-Term Contract",
    timeframe: "Feb 2026 — May 2026",
    location: "Cairo · Riyadh · Remote",
    tags: ["Partnership packaging", "Sponsorship activation", "Pricing logic", "Campaign operations"],
    outcome: "Supported a 12-partner commercial pipeline across gaming hardware, tech, automotive, fintech, software, creator/player campaigns, and brand-led activations. Advanced a seven-figure partnership opportunity through proposal, pricing, rights packaging, partner alignment, and contract-stage preparation. Operated the closed Sony INZONE 2026 campaign end-to-end.",
    artifacts: ["Partner trackers", "Rate-card structures", "Campaign hubs", "RACI + SOPs"],
    image: "/img/case-falcons.svg",
    accent: "gold",
    proofBullets: [
      "Supported a 12-partner commercial pipeline across gaming hardware, technology, automotive, fintech, software, creator/player campaigns, and brand-led activations.",
      "Advanced a seven-figure partnership opportunity through proposal development, pricing logic, rights packaging, partner alignment, campaign architecture, and contract-stage preparation.",
      "Operated the closed Sony INZONE 2026 campaign end to end — coordinating creator briefs, bilingual EN/AR copy, product seeding, agency timelines, content feedback, approvals, and launch readiness.",
      "Built reusable operating assets: partner trackers, rate-card structures, campaign hubs, RACI models, SOPs, and approval workflows.",
      "Translated brand objectives into executable activation concepts across esports, talent, content, product, and community touchpoints.",
    ],
  },
  {
    slug: "esports-world-cup",
    eyebrow: "SPORTFIVE · Senior Account Management · 9 months",
    title: "Esports World Cup — enterprise-scale commercial delivery.",
    subtitle: "Apr–Dec 2024. Account management, sponsor activation, rights fulfillment, and delivery governance at the world's largest esports event.",
    role: "Consultant — Senior Account Management",
    timeframe: "Apr 2024 — Dec 2024",
    location: "Riyadh, Saudi Arabia",
    tags: ["Sponsor delivery", "Rights fulfillment", "Account management", "Delivery governance"],
    outcome: "778+ sponsor/commercial/social/broadcast deliverables shipped with full contractual fulfillment. 5M+ viewers reached. 78+ brands pitched across 5 agencies. 6 new clients onboarded. Contributed to portfolio growth and accelerated sponsorship acquisition through SEF IP commercial roadmap.",
    artifacts: ["Sponsor tracking SOP", "QA standards", "SEF IP roadmap", "Agency coordination"],
    image: "/img/hero.jpg",
    accent: "green",
    proofBullets: [
      "778+ sponsor / commercial / social / broadcast deliverables shipped with full contractual fulfillment.",
      "Campaigns reached 5M+ viewers across EWC channels.",
      "Pitched 78+ brands across 5 commercial agencies; 6 new clients onboarded.",
      "Spearheaded SEF IP commercial roadmap accelerating sponsorship acquisition; contributed to portfolio growth.",
      "Owned account-management QA, rights fulfillment, stakeholder coordination, and reporting cadences.",
    ],
  },
  {
    slug: "true-gaming-leap",
    eyebrow: "True Gaming · PM / BD · 9 months",
    title: "True Gaming — LEAP, Awards, and tier-1 brand activations.",
    subtitle: "Aug 2023 – Apr 2024. Activated Nvidia, Microsoft, ASUS, AstraNova through agency-side execution discipline.",
    role: "Project Manager · Business Development",
    timeframe: "Aug 2023 — Apr 2024",
    location: "Riyadh, Saudi Arabia",
    tags: ["LEAP Expo", "Brand activations", "Agency delivery", "JIRA cadence"],
    outcome: "147 contacts captured at LEAP Expo · 6 new clients onboarded · TrueGaming Awards SOP rebuilt · activation response time cut through JIRA-cadenced delivery.",
    artifacts: ["LEAP booth strategy", "Awards SOP", "JIRA-cadenced delivery", "Brand activation playbook"],
    image: "/img/case-leap.svg",
    accent: "neutral",
    proofBullets: [
      "Worked with Nvidia, Microsoft, AstraNova, ASUS, and other publishers on gaming & esports marketing and commercial activations.",
      "LEAP Expo Riyadh: 147 contacts captured, 6 new clients onboarded.",
      "Rebuilt TrueGaming Awards SOP — venue, logistics, sponsor integration on JIRA cadence.",
      "Activation response time materially reduced through workflow discipline.",
    ],
  },
  {
    slug: "glg-advisory",
    eyebrow: "GLG Council Member · 2025 — Present",
    title: "GLG — gaming, esports & AI expert network.",
    subtitle: "Paid advisory for institutional investors and global enterprises on esports leagues, competitive franchises, and MENA gaming dynamics.",
    role: "Council Member — Gaming, Esports & AI",
    timeframe: "Apr 2025 — Present",
    location: "Remote",
    tags: ["Expert advisory", "Market intelligence", "MENA gaming"],
    outcome: "On-call subject-matter expert for institutional investors and global enterprises. Topic coverage: esports leagues, competitive franchises, MENA gaming market dynamics.",
    artifacts: ["Phone consultations", "Written briefings", "Vision-2030 gaming intelligence"],
    image: "/img/case-glg.svg",
    accent: "gold",
    proofBullets: [
      "Paid expert engagements for institutional investors and global enterprises.",
      "Topic coverage: esports leagues, competitive sports/fighting franchises, MENA gaming.",
      "Phone consultations and written briefings; client identities confidential under network terms.",
    ],
  },
];

export const archivedCaseStudies = [
  {
    slug: "sony-inzone-team-falcons",
    eyebrow: "Closed campaign · 2026",
    title: "Sony INZONE × Team Falcons — closed 2026 campaign.",
    subtitle: "End-to-end campaign operation under the Falcons consultancy engagement.",
    role: "Commercial / campaign operations lead",
    timeframe: "2026",
    tags: ["KSA market", "Creator activation", "Bilingual EN/AR"],
    outcome: "Closed Sony INZONE 2026 campaign operated end-to-end: creator briefs, bilingual EN/AR copy, product seeding, agency timelines, content feedback, approvals, and launch readiness.",
    artifacts: [],
  },
  {
    slug: "telecom-egypt-raad",
    eyebrow: "Telecom Egypt · Esports Specialist · 2021",
    title: "Telecom Egypt RA'AD — esports infrastructure.",
    subtitle: "National-telco esports operation built end-to-end.",
    role: "Esports Specialist — Operations",
    timeframe: "Mar 2021 — Oct 2021",
    tags: ["Venue", "PMPL bootcamp", "KPI/KRI"],
    outcome: "Concept-to-construction planning for a new esports venue; PMPL playoff bootcamp at Telecom HQ in under a week.",
    artifacts: [],
  },
];

export const brandLogos = [
  { name: "Saudi Aramco",  src: "/img/brand-aramco.png" },
  { name: "Telecom Egypt", src: "/img/brand-telecom-egypt.png" },
  { name: "True Gaming",   src: "/img/logo-truegaming.png" },
  { name: "Vanguard",      src: "/img/logo-vanguard.png" },
  { name: "Mobalytics",    src: "/img/logo-mobalytics.png" },
  { name: "ArabHardware",  src: "/img/brand-arabhardware.png" },
  { name: "Saudi eLeague", src: "/img/brand-saudi-eleagues.png" },
];

// Falcons reframed as fixed-term, ENDED.
export const experience = [
  { role: "Commercial Partnerships Consultant, Fixed-Term Contract", company: "Team Falcons", years: "Feb 2026 — May 2026 · Fixed-term engagement", location: "Cairo · Riyadh · Remote",
    impact: "Supported partnership packaging, sponsorship activation, pricing logic, campaign operations, and commercial workflow setup across brand, creator, player, and esports opportunities.",
    proof: [
      "Supported a 12-partner commercial pipeline across gaming hardware, tech, automotive, fintech, software, creator/player, and brand-led activations",
      "Advanced a seven-figure partnership opportunity through proposal, pricing, rights packaging, partner alignment, and contract-stage prep",
      "Operated the closed Sony INZONE 2026 campaign end-to-end",
      "Built partner trackers, rate-card structures, campaign hubs, RACI models, SOPs, and approval workflows",
    ],
    current: false,
  },
  { role: "Council Member — Gaming, Esports & AI", company: "GLG (Gerson Lehrman Group)", years: "Apr 2025 — Present", location: "Remote",
    impact: "Paid expert advisory for institutional investors on esports leagues and MENA gaming dynamics.",
    proof: [
      "On-call subject-matter expert for institutional investors and global enterprises",
      "Phone consultations + written briefings",
      "Client identities confidential under network terms",
    ],
    current: true,
  },
  { role: "Consultant (Senior Account Management)", company: "SPORTFIVE — EWC / Saudi Esports Federation", years: "Apr 2024 — Dec 2024 · 9 months", location: "Riyadh, Saudi Arabia",
    impact: "Senior Account Manager for Saudi Esports Federation Sponsorship & Partnership; supported EWC Commercial Department.",
    proof: [
      "778+ sponsor / commercial / social / broadcast deliverables shipped with full contractual fulfillment",
      "Led EWC social strategy + sponsor and influencer campaigns reaching 5M+ viewers",
      "Partnered with 5 commercial agencies to pitch 78+ brands; 6 new clients onboarded",
      "Spearheaded SEF IP commercial roadmap accelerating sponsorship acquisition; contributed to portfolio growth",
      "Owned account-management QA, rights fulfillment, stakeholder coordination, reporting cadences",
    ],
  },
  { role: "Project Manager · Business Development", company: "True Gaming", years: "Aug 2023 — Apr 2024 · 9 months", location: "Riyadh, Saudi Arabia",
    impact: "Activated tier-1 endemic brands through JIRA-cadenced agency delivery.",
    proof: [
      "Worked with Nvidia, Microsoft, ASUS, AstraNova on gaming & esports marketing and commercial activations",
      "LEAP Expo: 147 contacts captured, 6 new clients onboarded",
      "Rebuilt TrueGaming Awards SOP — venue, logistics, sponsor integration on JIRA",
    ],
  },
  { role: "Esports Specialist", company: "Vanguard", years: "May 2023 — Jul 2023 · 3 months", location: "Riyadh, Saudi Arabia",
    impact: "Gamers8 / Saudi Esports League — proposal review and festival area planning.",
    proof: [
      "Reviewed 50+ proposals globally for the Gamers8 festival area",
      "Player-zone concept design and visitor-journey flows",
    ],
  },
  { role: "Gaming Specialist — Content & SEO", company: "Mobalytics", years: "Feb 2022 — Sep 2022 · 8 months", location: "Remote",
    impact: "Lifted SEO performance through deep-dive game guides.",
    proof: ["Lost Ark vertical content strategy", "Organic-reach growth on guide-driven content"],
  },
  { role: "Esports Specialist — Operations (RA'AD)", company: "Telecom Egypt", years: "Mar 2021 — Oct 2021 · 8 months", location: "Cairo, Egypt",
    impact: "Built national-telco esports operation end-to-end.",
    proof: [
      "Esports venue concept-to-construction planning",
      "PMPL playoff bootcamp built at Telecom HQ in under 7 days",
      "KPI/KRI scorecard framework",
    ],
  },
  { role: "Marketing Operations Specialist", company: "Sevan Jewelry", years: "Jan 2020 — Mar 2021 · 1 yr 3 mo", location: "—",
    impact: "Marketing operations across digital and community channels.", proof: [],
  },
  { role: "Business Development Specialist", company: "Shanghai Wanyoo Information Technology Co. Ltd", years: "Mar 2017 — Sep 2018 · 1 yr 7 mo", location: "Shanghai, China",
    impact: "Esports-stakeholder BD; ROI frameworks for pro players.", proof: [],
  },
  { role: "Prime Beta Tester · QA Lead", company: "S2 Games, LLC", years: "Mar 2015 — Apr 2017 · 2 yr 2 mo", location: "Remote",
    impact: "Heroes of Newerth Prime Beta Tester; 10-person QA squad lead.", proof: [],
  },
  { role: "Internet Café Admin", company: "Adrenaline", years: "2012 — 2014 · 2 years", location: "Damascus, Syria",
    impact: "Earliest gaming-ops chapter.", proof: [],
  },
];

export const education = [
  { school: "Universitat Autònoma de Barcelona", degree: "Bachelor's degree, Communication and Media Studies" },
  { school: "DM Arts Academy", degree: "Diploma, Marketing", years: "2019 — 2020" },
  { school: "Arab Academy for Science, Technology and Maritime Transport", degree: "Bachelor's degree, Mass Communication / Media Studies" },
];

export const certifications = [
  "Business Development Consulting",
  "Account Management: Maintaining Relationships",
  "Canva Essentials",
  "Negotiation Skills",
  "Basic Tournament Administration Course",
];

export const languages = [
  { name: "Arabic",  level: "Native / Bilingual" },
  { name: "English", level: "Full Professional" },
  { name: "Spanish", level: "Elementary" },
];

export const topSkills = ["Commercial Partnerships", "Account Management", "Campaign Operations", "Sponsorship Activation", "Project Delivery", "Copywriting", "SEO Copywriting"];

export const competitiveCred = {
  intro: "Differentiator, not headline. Lifetime in competitive gaming gives me operator intuition for what audiences actually pay attention to.",
  ranks: [
    { game: "Call of Duty: Warzone",        rank: "Top 10 world wins · 6 seasons" },
    { game: "Heroes of Newerth (HoN)",      rank: "Rank 1 world leaderboard · 3 seasons" },
    { game: "WoW Elemental Shaman (PvE)",   rank: "Top 25 world · BfA S1 & Shadowlands S5" },
    { game: "Super People",                 rank: "Top 100 · S1, S2, S3" },
    { game: "PUBG (Steam)",                 rank: "Top 200 EU FPP · Top 300 EU TPP" },
    { game: "Dota 1 (Garena)",              rank: "Top 500 world support" },
  ],
};

export const contactCtas = [
  { audience: "For brands & agencies", q: "Building a partnership, activation, or sponsorship programme?",
    body: "Proposal development, pricing logic, rights packaging, campaign architecture, end-to-end delivery.",
    subject: "Brand / agency — partnership enquiry" },
  { audience: "For teams, federations, events", q: "Need commercial operations or account-management leadership?",
    body: "Sponsor delivery, rights fulfillment, account governance, SOPs, and workflow systems at enterprise scale.",
    subject: "Team / federation — commercial ops enquiry" },
  { audience: "For employers & recruiters", q: "Hiring for partnerships, account management, campaign ops, or commercial roles?",
    body: "Open to full-time roles in Riyadh, GCC, remote, or global. Cross-industry: gaming, sports, entertainment, tech, agencies.",
    subject: "Employer enquiry — full-time role" },
];

export const methodologyBlurb = {
  eyebrow: "How I work",
  title: "Clarify, structure, ship.",
  body: "I'm especially useful when the problem is messy: clarifying priorities, structuring offers, aligning stakeholders, and getting results on time.",
  bullets: ["Clarify priorities", "Structure offers", "Align stakeholders", "Ship results"],
};

export const tiers = [
  { phase: "I",   floor: "Entry",   name: "Advertising",  what: "Single-asset placements at rate-card.",            who: "Tactical short-cycle buys.",  logic: "CPM/CPC floor.",        bundle: "Single-channel · 30-day.",       governance: "Lightweight approval." },
  { phase: "II",  floor: "Growth",  name: "Sponsorship",  what: "Multi-asset, multi-month agreement.",              who: "Mid-funnel investment.",      logic: "Tiered architecture.",   bundle: "Cross-channel · season-long.",   governance: "Director sign-off." },
  { phase: "III", floor: "Strategic", name: "Partnership", what: "Year-round co-marketing depth.",                  who: "Strategic brands.",           logic: "Joint KPIs.",            bundle: "Always-on · multi-team.",        governance: "C-suite sign-off." },
  { phase: "IV",  floor: "Equity",  name: "Title / Naming",     what: "Title sponsorship, naming rights, equity.", who: "Territory partners.",         logic: "Exclusivity premium.",   bundle: "Naming · presence · category.",  governance: "Board approval." },
];

export const principles = [
  { n: "01", title: "Clarify before you ship.",   body: "Most messes are unclear priorities. Naming the real ask is half the work." },
  { n: "02", title: "Structure beats speed.",     body: "Build the offer, the framework, the cadence. Then move fast without commercial debt." },
  { n: "03", title: "Half commercial, half ops.", body: "Closing deals and shipping deliverables are not separate muscles. They are one operating system." },
];

export const arc = "Café admin → BD → QA → Gaming Specialist → BD/PM → Senior Account Mgmt → Council Member → Commercial Partnerships Consultant";

export const brandInvolvement = [
  { tier: "Closed / directly managed", color: "gold",   items: ["Sony INZONE (2026)","Team Falcons","Ruder Finn Atteline","True Gaming","SPORTFIVE","Esports World Cup","Saudi Esports Federation"] },
  { tier: "Delivered / supported",     color: "green",  items: ["Nvidia","Microsoft","ASUS","AstraNova","Saudi Aramco","Gamers8","Mobalytics","Telecom Egypt"] },
  { tier: "Pipeline / pitched",        color: "neutral",items: ["STC","Mobily","HADO","Saudi eLeagues","ArabHardware"] },
  { tier: "Ecosystem affiliations",    color: "neutral",items: ["GLG (Gerson Lehrman Group)","Egyptian Esports Federation","Egypt Football Association","Vanguard","S2 Games","Wanyoo","Adrenaline (Damascus)"] },
];

export const federationAdvisory = {
  intro: "Federation-tier engagements where the brief is commercial intelligence and structural design, not execution.",
  items: [
    { org: "GLG (Gerson Lehrman Group)", tag: "Council Member · 2025 — Present", role: "Subject-matter expert", body: "On-call for institutional investors and global enterprises across esports leagues and MENA gaming.", meta: "Paid expert engagements · client identities confidential", colorClass: "gold" },
    { org: "Egypt Football Association × FIFAe", tag: "2026 cycle · co-author", role: "Commercial + marketing architect", body: "Co-authored the 2026 commercial, marketing, and master plans for Egypt's FIFAe presence.", meta: "Signed MA Agreement · 2026 cycle live", colorClass: "green" },
    { org: "Egyptian Esports Federation", tag: "Advisory · 2026", role: "Strategic advisor", body: "Advisory on commercial packaging, partnership architecture, and ENC program activation.", meta: "Part-time advisory · package focus", colorClass: "neutral" },
  ],
};

export const selectedProjects = [
  { era: "Falcons · 2026",   title: "Partner trackers + rate-card structures",   body: "Reusable operating assets for partner pipeline and pricing logic.", tag: "Operating model" },
  { era: "Falcons · 2026",   title: "RACI + SOPs + approval workflows",          body: "Workflow design for campaign sign-off and delivery cadence.",      tag: "Process" },
  { era: "Falcons · 2026",   title: "Sony INZONE 2026 campaign operation",       body: "End-to-end bilingual EN/AR creator activation, launched.",         tag: "Campaign ops" },
  { era: "SPORTFIVE · 2024", title: "Sponsor delivery SOP across EWC channels",  body: "Reporting + QA cadence across 778+ deliverables.",                tag: "SOP" },
  { era: "SPORTFIVE · 2024", title: "SEF IP commercial roadmap",                 body: "Commercialisation plan for Saudi Esports Federation IP.",         tag: "Roadmap" },
  { era: "True Gaming · 2024", title: "TrueGaming Awards Event SOP",             body: "Venue, logistics, sponsor integration on JIRA.",                  tag: "Event SOP" },
  { era: "True Gaming · 2024", title: "LEAP Expo booth strategy",                body: "Booth design + lead-capture flow. 147 contacts, 6 clients.",      tag: "Lead capture" },
  { era: "Telecom Egypt · 2021", title: "HSC Sponsorship Package",               body: "Sponsorship package for Heliopolis Sporting Club.",               tag: "Sponsorship" },
];

export const navLinks = [
  { href: "/#work",       label: "Work" },
  { href: "/#brands",     label: "Brands" },
  { href: "/about",       label: "About" },
  { href: "/downloads",   label: "Downloads" },
  { href: "/contact",     label: "Contact" },
];

export const downloads = [
  { label: "General Commercial CV", href: "/downloads/Abdalrahman_ElGazzawi_General_CV.pdf", description: "Cross-industry CV — partnerships, account management, campaign operations." },
  { label: "Esports / Gaming CV",   href: "/downloads/Abdalrahman_ElGazzawi_Esports_CV.pdf", description: "Esports & gaming focused one-pager." },
];

export const confidentialityNote = "Sele