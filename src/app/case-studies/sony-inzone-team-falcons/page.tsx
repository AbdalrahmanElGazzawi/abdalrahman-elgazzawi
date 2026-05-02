import { CaseStudyPage, type CaseStudy } from "@/components/CaseStudyTemplate";
import { SonyDiagram } from "@/components/diagrams/StackDiagram";

const cs: CaseStudy = {
  eyebrow: "Closed deal · KSA · December 2025",
  title: "Sony INZONE × Team Falcons.",
  outcome: "Closed and activated a creator-led KSA sponsorship via Ruder Finn Atteline — USD 11.2K, 5 creators, 12 deliverables, full INZONE product seeding, KSA-only 20% discount-code mechanic linking the campaign to measurable retail conversion.",
  role: "Commercial lead — scope, price, contract, activation, measurement",
  timeframe: "Q4 2025",
  tags: ["KSA market","Creator activation","Discount mechanic","Brand seeding","Direct-response measurement"],
  context:
    "Sony INZONE — Sony's gaming peripherals line — wanted to land a credible KSA presence ahead of regional retail expansion. They came in via Ruder Finn Atteline. The brief asked for credibility with Saudi gaming creators and a measurable connection to retail movement.",
  problem:
    "Creator deals in MENA frequently leak value because pricing isn't defensible, deliverables aren't specced tight enough, and activation has no link to measurable conversion. The brand pays for awareness it can't audit.",
  myRole:
    "Owned the deal end-to-end — scoped the activation, priced it through the methodology, contracted it through Framework v5, ran the activation through Mandates OS, and built the KSA discount mechanic that closed the conversion loop.",
  systemSections: [
    { eyebrow: "Scope", title: "Five creators, twelve deliverables, full seeding",
      bullets: ["Five Saudi creators — Abu Najd · Madv · Spyerfrog · Oden · xsma333.","Twelve deliverables across Reels, Stories, and YouTube content.","Full INZONE product seeding — physical units shipped to creators ahead of activation.","KSA-only mechanic so the campaign connected directly to local retail."] },
    { eyebrow: "Price", title: "Methodology v1 applied — defensible end-to-end",
      bullets: ["Each creator priced through the methodology — not by negotiation feel.","Multipliers applied transparently: language, audience, content type, rights window.","Methodology document attached as the contractual reference for pricing rationale.","Margin protected. Audit-ready by default."] },
    { eyebrow: "Contract & activation", title: "Framework v5 clauses + Mandates OS tracking",
      bullets: ["Contract built on Framework v5 standard clause library.","Activation managed through Mandates OS — every deliverable a tracked row.","Brand approval workflow respected the framework's approval matrix.","Real-time visibility for the brand without exposing internal margins."] },
    { eyebrow: "Conversion", title: "20% KSA discount-code mechanic",
      bullets: ["Each creator received a unique 20% KSA discount code.","Codes routed through INZONE's KSA retail flow.","Direct attribution from creator → code use → retail conversion.","Closed the activation loop — moved campaign from \"impressions\" to \"units moved\"."] },
  ],
  process: [
    "Briefed by Ruder Finn Atteline — assessed brand fit, creator fit, KSA-market specifics.",
    "Priced each creator through the methodology — produced a defensible quote pack with line-item rationale.",
    "Negotiated within the framework — used standard clauses, raised exceptions only where the brief warranted.",
    "Booked through Mandates OS — activation became a tracked row with deliverable checklist, deadline, status.",
    "Created and distributed unique KSA discount codes for each creator — built the retail-conversion bridge.",
    "Reported through to brand and agency on impressions, engagement, and code-redemption — closing the activation loop.",
  ],
  impact: [
    { n: "USD 11.2K", l: "deal value to Falcons" },
    { n: "5",         l: "creators activated" },
    { n: "12",        l: "deliverables shipped" },
    { n: "20%",       l: "KSA discount-code mechanic" },
  ],
  proves:
    "I can take a brand brief and walk it through every layer of the commercial stack — methodology to contract to activation to measurable conversion — without dropping the rationale at any handoff.",
  visual: <SonyDiagram />,
};

export const metadata = {
  title: "Sony INZONE × Team Falcons — Case study",
  description: "Closing and activating a creator-led KSA sponsorship for Sony INZONE via Ruder Finn Atteline — methodology, contract, activation, retail conversion.",
};

export default function Page() {
  return (
    <CaseStudyPage cs={cs}
      prev={{ href: "/case-studies/falcons-pricing-os", title: "Falcons Pricing OS" }}
      next={{ href: "/case-studies/esports-world-cup", title: "Esports World Cup — Commercial Delivery" }} />
  );
}
