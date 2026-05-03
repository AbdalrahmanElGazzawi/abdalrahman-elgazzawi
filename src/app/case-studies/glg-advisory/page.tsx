import { CaseStudyPage, type CaseStudy } from "@/components/CaseStudyTemplate";
import { GLGDiagram } from "@/components/diagrams/StackDiagram";

const cs: CaseStudy = {
  eyebrow: "Council Member · April 2025 — Present",
  title: "GLG — esports & gaming subject-matter expert.",
  outcome: "On-call advisor to institutional investors and global enterprises through GLG's expert network. Topic coverage spans esports leagues, competitive franchises, MENA gaming dynamics, and Vision-2030 investment intelligence.",
  role: "Council Member — Gaming, Esports & AI",
  timeframe: "April 2025 — Present (1+ year)",
  tags: ["Expert advisory","Market intelligence","MENA gaming","Investor briefings"],
  context:
    "GLG (Gerson Lehrman Group) is the world's largest expert-network platform — connecting institutional investors, consulting firms, and global enterprises with subject-matter experts for paid consultations. Council Members are vetted, retained, and engaged on demand.",
  problem:
    "Investors and enterprises looking at the esports and gaming category — especially the MENA chapter — need primary-source intelligence from operators who actually run the commercial side. Public reports lag the reality. Conference panels are sales pitches. Real intelligence comes from people who price the deals and build the systems.",
  myRole:
    "Vetted Council Member since April 2025. Engaged for paid phone consultations and written briefings on esports leagues, competitive sports/fighting franchises, and MENA gaming market dynamics. All client engagements are confidential under GLG's network terms — content of consultations is not disclosed publicly.",
  systemSections: [
    { eyebrow: "Topic 01", title: "Esports leagues",
      bullets: ["Tournament-circuit structures across major titles.","ESL · Faceit ecosystem dynamics.","Commercial models for league operators and sponsorship rights holders.","Saudi & Gulf league-level investment landscape."] },
    { eyebrow: "Topic 02", title: "Competitive sports & fighting franchises",
      bullets: ["EA Sports FC competitive scene.","Madden NFL competitive ecosystem.","Sports-game commercial models distinct from FPS / MOBA models.","Audience and rights-holder structures."] },
    { eyebrow: "Topic 03", title: "MENA market dynamics",
      bullets: ["KSA · Egypt · UAE market structure and growth drivers.","Vision 2030 gaming investment landscape.","Saudi Esports Federation IP and EWC commercial structure.","Regional creator economy and language-uplift dynamics."] },
    { eyebrow: "Topic 04", title: "Commercial models",
      bullets: ["Pricing methodology for talent, IP, and rights packages.","Sponsorship architecture across the 4-phase brand investment ladder.","Activation models that connect to measurable retail conversion.","Agency and counterparty governance across the commercial stack."] },
  ],
  process: [
    "GLG vetting and onboarding as Council Member in April 2025.",
    "Project briefs surfaced through GLG's matching system based on declared expertise areas.",
    "Phone consultations conducted under standard NDA — typical 30-60 minute calls with named clients.",
    "Written briefings delivered for in-depth projects requiring structured intelligence.",
    "All payment, scheduling, and client routing handled through GLG's platform.",
    "Recurring engagement signals client value of the expertise — repeat bookings drive Council Member retention.",
  ],
  impact: [
    { n: "1+ yr",   l: "Council Member tenure" },
    { n: "Paid",    l: "expert engagement basis" },
    { n: "Multi-topic", l: "esports · sports games · MENA" },
    { n: "Retained", l: "for ongoing project pipeline" },
  ],
  proves:
    "Expertise validated by an enterprise-grade expert network — institutional clients pay for the same intelligence that informs the commercial work elsewhere on this site.",
  visual: <GLGDiagram />,
};

export const metadata = {
  title: "GLG Advisory — Case study",
  description: "Council Member at GLG — paid expert advisory for institutional investors and enterprises on esports, competitive franchises, and MENA gaming market dynamics.",
};

export default function Page() {
  return (
    <CaseStudyPage cs={cs}
      prev={{ href: "/case-studies/team-falcons-commercial-stack", title: "Team Falcons Commercial Stack" }}
      next={{ href: "/case-studies/sony-inzone-team-falcons", title: "Sony INZONE × Team Falcons" }} />
  );
}
