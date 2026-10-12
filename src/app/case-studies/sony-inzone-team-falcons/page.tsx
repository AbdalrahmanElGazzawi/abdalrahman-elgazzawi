import { CaseStudyPage, type CaseStudy } from "@/components/CaseStudyTemplate";
import { SonyDiagram } from "@/components/diagrams/StackDiagram";
import { pageMetadata } from "@/lib/metadata";

const cs: CaseStudy = {
  eyebrow: "Campaign operations · KSA · 2026",
  title: "Sony INZONE × Team Falcons.",
  outcome: "Operated the closed Sony INZONE 2026 campaign end-to-end: creator briefs, bilingual EN/AR copy, product seeding, agency timelines, content feedback, approvals, and launch readiness. Five creators, twelve deliverables, KSA market.",
  role: "Campaign operations, Team Falcons consultancy",
  timeframe: "2026",
  tags: ["KSA market","Creator activation","Bilingual EN/AR","Product seeding","Agency coordination"],
  media: [
    { type: "photo", src: "/work/sony-inzone-team-falcons.jpg", alt: "Sony INZONE x Team Falcons", caption: "Closed 2026 campaign, operated end-to-end. KSA market.", tag: "Campaign" },
  ],
  context:
    "Sony INZONE, Sony's gaming peripherals line, ran a creator-led campaign in Saudi Arabia with Team Falcons creators, coordinated with the brand's agency, Ruder Finn Atteline. The partnership was closed; the job was to run the campaign so it shipped on time and on brief.",
  problem:
    "Creator campaigns slip when briefs are loose, copy isn't localised, product arrives late, and approvals stall between brand, agency, and talent. Every one of those handoffs needed an owner.",
  myRole:
    "Operated the campaign end-to-end as part of my fixed-term consultancy with Team Falcons: creator briefs, bilingual EN/AR copy, product seeding, agency timelines, content feedback, approvals, and launch readiness.",
  systemSections: [
    { eyebrow: "Scope", title: "Five creators, twelve deliverables, full seeding",
      bullets: ["Five Saudi creators: Abu Najd · Madv · Spyerfrog · Oden · xsma333.","Twelve deliverables across Reels, Stories, and YouTube content.","Full INZONE product seeding, with units in creators' hands ahead of activation.","KSA-only campaign so content connected directly to local retail."] },
    { eyebrow: "Briefs & copy", title: "Creator briefs and bilingual copy",
      bullets: ["Creator briefs for each talent and deliverable.","Bilingual EN/AR campaign copy.","Content feedback rounds with creators before submission."] },
    { eyebrow: "Agency & approvals", title: "Timelines, feedback, sign-off",
      bullets: ["Ran timelines with the brand's agency, Ruder Finn Atteline.","Managed approval rounds between brand, agency, and creators.","Tracked launch readiness across every deliverable."] },
    { eyebrow: "Conversion", title: "20% KSA discount-code mechanic",
      bullets: ["Each creator carried a unique 20% KSA discount code.","Codes routed through INZONE's KSA retail flow.","Linked creator content to measurable retail conversion."] },
  ],
  process: [
    "Started from the closed scope: five creators, twelve deliverables, KSA market.",
    "Wrote creator briefs and bilingual EN/AR copy.",
    "Coordinated product seeding so units reached creators ahead of activation.",
    "Ran agency timelines, content feedback, and approval rounds.",
    "Distributed a unique 20% KSA discount code to each creator.",
    "Brought every deliverable to launch readiness.",
  ],
  impact: [
    { n: "5",       l: "creators activated" },
    { n: "12",      l: "deliverables" },
    { n: "EN / AR", l: "bilingual campaign copy" },
    { n: "20%",     l: "KSA discount-code mechanic" },
  ],
  proves:
    "End-to-end campaign operations on a live brand partnership: briefs, localisation, seeding, agency coordination, and approvals, delivered to launch.",
  visual: <SonyDiagram />,
};

export const metadata = pageMetadata({
  title: "Sony INZONE × Team Falcons · Case study",
  description: "Operating the closed Sony INZONE 2026 creator campaign in KSA with Team Falcons: briefs, bilingual copy, product seeding, agency timelines, approvals.",
  path: "/case-studies/sony-inzone-team-falcons",
});

export default function Page() {
  return (
    <CaseStudyPage cs={cs}
      prev={{ href: "/case-studies/falcons-pricing-os", title: "Falcons Pricing OS" }}
      next={{ href: "/case-studies/esports-world-cup", title: "Esports World Cup: commercial delivery" }} />
  );
}
