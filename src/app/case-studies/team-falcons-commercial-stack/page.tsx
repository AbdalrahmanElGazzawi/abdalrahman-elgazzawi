import { CaseStudyPage, type CaseStudy } from "@/components/CaseStudyTemplate";
import { StackDiagram } from "@/components/diagrams/StackDiagram";

const cs: CaseStudy = {
  eyebrow: "Flagship · Team Falcons · 2026",
  title: "The commercial stack a tier-1 esports org needed.",
  outcome: "An end-to-end commercial operating system — pricing methodology, agency framework, and live pipeline tool — codified into one defensible, auditable stack.",
  role: "Esports Marketing Manager · Author",
  timeframe: "Jan 2026 — Present",
  tags: ["Pricing methodology","Agency framework","Mandates OS","Pipeline control","Internal tooling"],
  context:
    "Team Falcons is a tier-1 global esports organization headquartered in Riyadh — Saudi Arabia’s flagship competitive presence and a strategic Vision-2030 cultural asset. The commercial side of the org needed three things at once: a defensible rate book for 200 talents, a governance framework that brand partners and agencies could read, and a live pipeline tool that survived contact with day-to-day deal flow.",
  problem:
    "Pricing decisions, contract templates, and pipeline tracking lived in disconnected places. Quotes were hard to defend against external audit. Agencies had no canonical framework to reference. Pipeline data lived in chat threads and spreadsheets that drifted out of sync within a week.",
  myRole:
    "Author and operator of the entire commercial stack. Wrote the methodology, designed the framework, built the tool, ran the deals.",
  systemSections: [
    { eyebrow: "Layer 1 · Methodology", title: "Pricing Source of Truth v1.0",
      bullets: ["15-section canonical methodology document — committed to the repo as source of truth.","200 talents tiered S / 1 / 2 / 3 / 4 across players, content creators, and influencers.","Calibrated against FaZe / Cloud9 / T1 / NRG / 100T / Karmine / NAVI / Fnatic via Newzoo, Nielsen, Shikenso, Influencity, WME/CAA practice.","Five base rate methods (CPM · CPE · Comparables · Authority · Tier baseline) feeding a MAX. Multipliers apply at quote time, never baked in."] },
    { eyebrow: "Layer 2 · Framework", title: "Agency Partner Pack v5.0 — 140 pages",
      bullets: ["4-phase Brand Investment Model: Advertising (SAR 25K+) → Sponsorship (250K+) → Partnership (1.5M+) → Equity (10M+).","13 counterparty tracks: Direct Brand, Creative, Media, PR, Talent-Rep, Publisher, Broadcast, Government, Tech, Telco, Federation, Distributor, Strategic Investor.","Approval Matrix · Clause Library · Activation Playbook · Renewal Playbook · Crisis Playbook.","KSA-governed under SCCA Riyadh arbitration."] },
    { eyebrow: "Layer 3 · Pipeline", title: "Bilingual Mandates OS",
      bullets: ["Hub-and-spoke pipeline tracker — Arabic + English.","Tracks ~SAR 2.3M of active commercial mandates by game, type, execution status.","Categories: Player Campaigns · Sponsor Mandates · IP · Team Campaigns · Event Appearances.","Standing artifact for sales conversations — not a chat-thread snapshot."] },
    { eyebrow: "Layer 4 · Product", title: "Falcons Pricing OS — internal app",
      bullets: ["Next.js + Supabase + Vercel internal web app.","Roster · Quote Builder · Client Portal · Sales Log · Admin tooling.","Postgres row-level security across admin / sales / finance / viewer roles.","Auto-deploy on push — production rebuild within ~90 seconds of merge."] },
  ],
  process: [
    "Audit first — surveyed every active rate, contract, and pipeline row to map the actual commercial surface area before designing a single new artifact.",
    "Methodology before tool — wrote the 15-section pricing document as canonical text first, so the engineering decisions later were translation, not invention.",
    "Framework as governance, not paperwork — designed the 4-phase model so every partner conversation traces to one phase, every clause to one playbook.",
    "Built the Mandates OS in production-style — bilingual hub-and-spoke, real categories, real states. No mock data, no demo flow.",
    "Shipped the Pricing OS as a live Next.js app with RLS-enforced permissions — sales sees its world, finance sees its world, admin sees the lot.",
    "Continuous calibration — quarterly methodology refresh trigger, audit memos versioned in the repo alongside the migrations.",
  ],
  impact: [
    { n: "200",       l: "talents priced & tiered" },
    { n: "140 pp",    l: "agency framework shipped" },
    { n: "~SAR 2.3M", l: "active pipeline tracked" },
    { n: "020",       l: "production migrations deployed" },
  ],
  proves:
    "I can walk into a tier-1 esports organisation, audit the commercial surface area, design the methodology, write the framework, ship the tool, and run the pipeline — all four layers, in one stack, in production.",
  visual: <StackDiagram />,
};

export const metadata = {
  title: "Team Falcons Commercial Stack — Case study",
  description: "How I built Team Falcons' four-layer commercial operating system: pricing methodology, agency framework, mandates OS, and internal pricing app.",
};

export default function Page() {
  return (
    <CaseStudyPage cs={cs}
      next={{ href: "/case-studies/falcons-pricing-os", title: "Falcons Pricing OS" }} />
  );
}
