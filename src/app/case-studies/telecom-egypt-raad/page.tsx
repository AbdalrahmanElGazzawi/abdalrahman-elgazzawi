import { CaseStudyPage, type CaseStudy } from "@/components/CaseStudyTemplate";
import { RaadDiagram } from "@/components/diagrams/StackDiagram";

const cs: CaseStudy = {
  eyebrow: "Esports Specialist · 2021",
  title: "Telecom Egypt RA'AD — esports infrastructure.",
  outcome: "Stood up a national-telco esports operation in months, not years. Concept-to-construction planning for a new esports venue at a sporting club. PMPL playoff bootcamp at Telecom HQ deployed in under a week. KPI/KRI scorecard framework shipped.",
  role: "Esports Specialist — Operations",
  timeframe: "Mar 2021 — Oct 2021",
  tags: ["Venue construction","PMPL bootcamp","KPI/KRI structure","Vendor coordination"],
  context:
    "Telecom Egypt — Egypt's national fixed-line and broadband operator — entered esports through RA'AD, its sponsored team and operational arm. The mission required physical infrastructure, operational discipline, and a credible competitive presence inside months.",
  problem:
    "Telco-led esports operations fail when they're treated as marketing decoration. A real operation needs venues, bootcamp infrastructure, performance scorecards, and vendor coordination — built fast, built right, audit-ready from day one.",
  myRole:
    "Esports Specialist — Operations. Went beyond scope: directed venue concept and sizing, stood up the PMPL bootcamp infrastructure, built the KPI/KRI structure that ran the team's performance reviews. Earned trust through initiative.",
  systemSections: [
    { eyebrow: "Build 01", title: "Esports venue at sporting club",
      bullets: ["Directed concept design, sizing, and construction planning for a new esports venue inside a major sporting club.","Bridged commercial intent with physical buildout requirements.","Worked across construction, IT, and broadcast vendors to define the spec.","Delivered as a permanent venue — not a temporary popup."] },
    { eyebrow: "Build 02", title: "PMPL playoff bootcamp — Telecom HQ",
      bullets: ["Set up a complete PUBG Mobile Pro League playoff bootcamp at Telecom HQ in under a week.","Full infrastructure readiness — power, network, hardware, broadcast.","Coordinated across internal facilities, IT, and external vendors.","Bootcamp ran the playoff cycle without a single infrastructure incident."] },
    { eyebrow: "Operations", title: "KPI/KRI scorecard framework",
      bullets: ["Established team performance KPIs and KRIs from scratch.","Improved budget-utilisation through tighter vendor coordination.","Replaced ad-hoc reporting with a standing scorecard cadence.","Process redesign cleaned up the team's day-to-day discipline."] },
    { eyebrow: "Trust", title: "Beyond scope — earned mandate",
      bullets: ["Stepped in beyond the formal Esports Specialist role to fill operational gaps.","Built trust with both Team RA'AD leadership and Telecom Egypt operations.","The combination of competitive credibility and operational discipline opened the venue + bootcamp scope.","Set the pattern for how I take on commercial systems work today."] },
  ],
  process: [
    "Mapped Team RA'AD's operational gaps — what was working, what was leaking, what was missing entirely.",
    "Designed the esports venue from competitive requirements backwards — players, broadcast, audience.",
    "Stood up the PMPL bootcamp on a one-week timeline by parallelising vendor coordination.",
    "Built KPI/KRI scorecards by translating competitive expectations into measurable team-level metrics.",
    "Tightened vendor relationships — fewer suppliers, clearer scopes, better pricing.",
    "Documented everything so the systems outlasted the engagement.",
  ],
  impact: [
    { n: "1 venue",   l: "concept-to-construction shipped" },
    { n: "<7 days",   l: "PMPL bootcamp deployment" },
    { n: "Scorecards", l: "KPI/KRI framework live" },
    { n: "Trust",     l: "earned beyond formal scope" },
  ],
  proves:
    "Earliest evidence of shipping esports infrastructure end-to-end — not just running campaigns, but designing the physical and operational systems competitive esports actually needs to function.",
  visual: <RaadDiagram />,
};

export const metadata = {
  title: "Telecom Egypt RA'AD — Esports Infrastructure — Case study",
  description: "Esports Specialist at Telecom Egypt's RA'AD — venue construction, PMPL bootcamp, KPI/KRI scorecards, vendor coordination.",
};

export default function Page() {
  return (
    <CaseStudyPage cs={cs}
      prev={{ href: "/case-studies/true-gaming-leap", title: "True Gaming — LEAP, Awards, brand activations" }} />
  );
}
