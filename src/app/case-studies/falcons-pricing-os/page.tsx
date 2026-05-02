import { CaseStudyPage, type CaseStudy } from "@/components/CaseStudyTemplate";
import { PricingOSDiagram } from "@/components/diagrams/StackDiagram";

const cs: CaseStudy = {
  eyebrow: "Product · Internal app · 2026",
  title: "From spreadsheet logic to a quote-lifecycle product.",
  outcome: "Internal Next.js + Supabase + Vercel application turning a 15-section pricing methodology into a live quote engine with role-scoped permissions and an end-to-end audit trail.",
  role: "Product owner · Engineer · Designer",
  timeframe: "Mar 2026 — Present",
  tags: ["Next.js","Supabase","Postgres RLS","Quote lifecycle","Internal tooling"],
  context:
    "The pricing methodology and agency framework existed as documents. They worked, but every quote still ran through Google Sheets and chat threads. The translation cost — from rate-book intent to actual quote pack — was eating margin and creating drift.",
  problem:
    "A 15-section methodology only delivers value when it runs the same way every time, on every quote, by every operator. Documents don't enforce themselves. We needed the methodology embedded in the tool that produces the artifact.",
  myRole:
    "Solo product owner. I wrote the methodology, designed the schema, built the front-end, shipped the migrations, deployed the app.",
  systemSections: [
    { eyebrow: "Module · Roster", title: "200-talent rate book in production",
      bullets: ["Talents tiered S / 1 / 2 / 3 / 4 across players, content creators, influencers.","Per-talent metadata: platform mix, audience market, language, rate-source confidence.","Live audit trail — every rate change versioned with rationale.","Quarterly methodology-refresh checklist enforced via UI flags."] },
    { eyebrow: "Module · Quote Builder", title: "Methodology applied at quote time",
      bullets: ["Campaign brief → talent selection → deliverable lines → multiplier stack → final quote.","Five base methods (CPM · CPE · Comparables · Authority · Tier baseline) feeding a MAX.","Nine multipliers applied at quote time — never baked into base.","Multi-currency: SAR canonical, USD toggle locked at the Saudi peg."] },
    { eyebrow: "Module · Client Portal", title: "External-facing quote pack",
      bullets: ["Tokenised client URL — no login friction for the brand side.","Read-only quote pack with line-item breakdown.","Deliverable schedule and rights summary in one view.","Confidentiality controls on internal margin annotations."] },
    { eyebrow: "Module · Admin & Audit", title: "Postgres RLS across four roles",
      bullets: ["Role-scoped permissions: admin · sales · finance · viewer.","Sales sees its pipeline, finance sees its margins, admin sees the lot.","Every insert/update logged for audit defence.","CI/CD via GitHub → Vercel — production rebuild within 90 seconds of merge."] },
  ],
  process: [
    "Schema-first — designed the Postgres tables for talent, campaign, deliverable, multiplier, and quote before writing a single component.",
    "RLS policies before features — wrote the row-level-security rules first so the role boundary was the foundation, not an afterthought.",
    "Methodology in code — translated each of the 15 sections of the pricing document into a typed function or component, traceable to the source paragraph.",
    "Production-only — no staging shadow, no demo data. Every deploy went to the live URL, gated by RLS for non-admin roles.",
    "Migrations as governance — every schema change committed as a numbered migration, reviewed alongside the methodology updates.",
    "Continuous deployment — GitHub main → Vercel production, ~90 seconds. Reverts are git-revert.",
  ],
  impact: [
    { n: "020",       l: "production migrations applied" },
    { n: "200",       l: "talents managed in roster" },
    { n: "4 roles",   l: "RLS-enforced permissions" },
    { n: "~90 sec",   l: "merge → production deploy" },
  ],
  proves:
    "Hybrid commercial-technical operating in production. I can write SQL, design pricing logic, ship a Next.js app, and run the pipeline that uses it — without handing off between functions.",
  visual: <PricingOSDiagram />,
};

export const metadata = {
  title: "Falcons Pricing OS — Case study",
  description: "Building the internal Next.js + Supabase + Vercel app that runs Team Falcons' quote lifecycle — schema, RLS, modules, deploy.",
};

export default function Page() {
  return (
    <CaseStudyPage cs={cs}
      prev={{ href: "/case-studies/team-falcons-commercial-stack", title: "Team Falcons Commercial Stack" }}
      next={{ href: "/case-studies/sony-inzone-team-falcons", title: "Sony INZONE × Team Falcons" }} />
  );
}
