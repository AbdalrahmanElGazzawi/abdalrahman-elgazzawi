import { CaseStudyPage, type CaseStudy } from "@/components/CaseStudyTemplate";

const cs: CaseStudy = {
  eyebrow: "Federation advisory · 2026",
  title: "Egyptian Football Association × FIFAe.",
  outcome: "Co-authored Egypt's 2026 FIFAe programme — commercial, marketing, and master plans — plus the governance roadmap and funding strategy to take the national eFootball squad from registration to the FIFAe World Cup.",
  role: "Commercial & Strategy Consultant · Federation advisory",
  timeframe: "2026",
  tags: ["Federation strategy", "Commercial planning", "Governance & compliance", "Funding strategy"],
  context:
    "The Egyptian Football Association holds Egypt's FIFAe (FIFA eFootball) rights under its member-association agreement with FIFA. Going into 2026, the federation needed a credible, fundable, compliance-safe plan to field and finance a competitive national eFootball squad — turning an official mandate into a real operating programme.",
  problem:
    "A national FIFAe programme fails without three things at once: a funding model that doesn't rest on a single sponsor, a marketing plan that builds a real player pipeline, and airtight compliance with FIFA's rules. Get any one wrong and the federation risks its eligibility, its budget, or its credibility.",
  myRole:
    "Co-authored the federation's 2026 FIFAe programme end to end — the commercial and funding model, the marketing and player pipeline, the master plan and calendar, and the governance rulebook that keeps every event inside FIFA's terms.",
  systemSections: [
    { eyebrow: "Plan 01", title: "Commercial & funding model",
      bullets: [
        "Authored the 2026 Commercial Plan — the revenue and partnership model for Egypt's national FIFAe programme.",
        "Structured a multi-source funding strategy so the programme doesn't depend on any single backer.",
        "Packaged a Trade & Marketing Rights inventory and a vendor-ready investment deck to bring partners in.",
        "Built the model to stay fundable even when a primary sponsor declines.",
      ] },
    { eyebrow: "Plan 02", title: "Marketing & player pipeline",
      bullets: [
        "Authored the 2026 Marketing Plan — audience strategy and a talent-identification pipeline.",
        "Designed domestic-trial promotion and the route from open trials to a competitive national squad.",
        "Aligned the marketing calendar to the competitive calendar so activity compounds toward qualification.",
      ] },
    { eyebrow: "Plan 03", title: "Master plan & 17-step calendar",
      bullets: [
        "Authored the 2026 Master Plan — a 17-step master calendar with owners, deadlines, and status.",
        "Mapped the full path: registration to domestic trials to Africa regional qualifier to the FIFAe World Cup.",
        "Turned an official-but-inactive mandate into an executable operating programme.",
      ] },
    { eyebrow: "Governance", title: "MOU to operational rulebook",
      bullets: [
        "Translated the FIFA x eFootball member-association agreement into an operational compliance rulebook.",
        "Codified platform and format rules, athlete eligibility, insurance thresholds, and sponsor-conflict screening.",
        "Sequenced the FIFA approval and filing timeline so every event stays inside the rules.",
      ] },
  ],
  process: [
    "Audited the FIFA x eFootball agreement and Egypt's prior-cycle performance to define the reset.",
    "Authored the Commercial, Marketing, and Master plans as one coherent stack.",
    "Built the funding strategy — a multi-leg model so the programme is financeable under uncertainty.",
    "Codified the governance rulebook from the MOU — eligibility, insurance, sponsor screening, filings.",
    "Packaged the investment deck and rights inventory for partner outreach.",
    "Sequenced the master calendar from registration through the World Cup with clear owners and deadlines.",
  ],
  impact: [
    { n: "3", l: "core plans co-authored — commercial, marketing, master" },
    { n: "17-step", l: "master calendar — registration to World Cup" },
    { n: "Multi-source", l: "funding strategy for the year-1 programme" },
    { n: "Federation", l: "national governing body — advisory engagement" },
  ],
  proves:
    "Federation-tier commercial strategy — I can take an official-but-inactive mandate and turn it into a funded, compliant, executable programme: the commercial model, the marketing pipeline, the governance rulebook, and the calendar, authored as one stack.",
};

export const metadata = {
  title: "Egyptian Football Association × FIFAe — Case study",
  description:
    "Co-authored Egypt's 2026 FIFAe programme — commercial, marketing, and master plans, a governance/compliance rulebook, and a multi-source funding strategy for the national eFootball squad.",
};

export default function Page() {
  return (
    <CaseStudyPage cs={cs}
      prev={{ href: "/case-studies/glg-advisory", title: "GLG — gaming, esports & AI expert network" }}
      next={{ href: "/case-studies/team-falcons-commercial-stack", title: "Team Falcons — commercial partnership & campaign stack" }} />
  );
}
