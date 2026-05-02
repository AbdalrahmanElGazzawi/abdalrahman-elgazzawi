import { CaseStudyPage, type CaseStudy } from "@/components/CaseStudyTemplate";
import { EWCDiagram } from "@/components/diagrams/StackDiagram";

const cs: CaseStudy = {
  eyebrow: "Senior Consultant · SPORTFIVE · 2024",
  title: "Esports World Cup — commercial delivery at scale.",
  outcome: "778+ partner deliverables shipped · 5M+ viewers reached · 78+ brands pitched across 5 agency partners · 6 clients onboarded · 20% revenue growth from tightened account-management execution.",
  role: "Senior Consultant — Account Management & Partnerships",
  timeframe: "Apr 2024 — Dec 2024",
  tags: ["EWC","SPORTFIVE","Saudi Esports Federation","Account management","Brand & technical QA"],
  context:
    "The Esports World Cup is the world's largest esports event — Riyadh, hundreds of millions of dollars of prize pool, dozens of titles, hundreds of partners, global broadcast. SPORTFIVE held commercial responsibility on the partnership side. I owned commercial delivery for that surface.",
  problem:
    "High-volume sponsor delivery breaks at the seams between sales, marketing, social, broadcast, and brand QA. A deliverable misses a window or a brand asset breaks a standard, and the entire partnership conversation suffers — even if every other deliverable shipped clean.",
  myRole:
    "Owned commercial delivery for the partnership surface — operated across internal teams, agencies, and tier-1 sponsors, set the standards, ran the deliverables.",
  systemSections: [
    { eyebrow: "Volume", title: "778+ deliverables across the activation surface",
      bullets: ["Marketing assets across web, paid, owned, earned.","Social calendar across Falcons + tournament + sponsor brand handles.","Broadcast integrations — segments, lower-thirds, asset packs, talent reads.","Every deliverable tracked, scoped, scheduled, QA'd."] },
    { eyebrow: "Standards", title: "Brand & technical QA across every channel",
      bullets: ["Brand guidelines enforced across 78+ partners and 5 agencies.","Technical asset QA standards — sizing, format, codec, naming.","Cross-channel consistency for brands appearing in marketing, social, AND broadcast simultaneously.","Approval-matrix discipline before assets went live."] },
    { eyebrow: "Pitch", title: "78+ brands pitched in collaboration with five agencies",
      bullets: ["Co-managed pitch effort across multiple agency partners.","Brought commercial-side expertise to translate brand interest into structured proposals.","Six-figure brand deals co-managed end-to-end through close.","Six clients onboarded inside the cycle."] },
    { eyebrow: "Execution", title: "20% revenue growth from execution discipline",
      bullets: ["Tightened account-management cadence across the partnership surface.","Closed activation gaps that were costing renewal conversations.","Sponsorship activation timelines and stakeholder alignment ran from one source of truth.","Revenue lift was an outcome of execution, not headcount."] },
  ],
  process: [
    "Mapped the partnership surface — every brand, every channel, every deliverable, every owner.",
    "Set the QA bar before the volume hit — brand and technical asset standards documented and enforced from day one.",
    "Built a single activation cadence across marketing, social, broadcast — same rhythm, same source of truth.",
    "Co-managed pitch effort with agencies — brought the commercial frame to brand conversations, not just creative.",
    "Closed the loop on every deliverable — scope, schedule, ship, audit. No \"it's somewhere\" answers.",
    "Reported through to client and federation on commercial KPIs — not vanity reach numbers.",
  ],
  impact: [
    { n: "778+", l: "partner deliverables shipped" },
    { n: "5M+",  l: "viewers reached" },
    { n: "78+",  l: "brands pitched · 5 agencies" },
    { n: "20%",  l: "revenue growth" },
  ],
  proves:
    "I can hold the commercial spine of a global-scale esports event — volume, standards, multi-agency coordination, brand discipline — and convert it into measurable revenue lift, not just impressions.",
  visual: <EWCDiagram />,
};

export const metadata = {
  title: "Esports World Cup — Commercial Delivery — Case study",
  description: "Owning commercial delivery for the EWC partnership surface at SPORTFIVE — 778+ deliverables, 5M+ viewers, 78+ brands, 20% revenue growth.",
};

export default function Page() {
  return (
    <CaseStudyPage cs={cs}
      prev={{ href: "/case-studies/sony-inzone-team-falcons", title: "Sony INZONE × Team Falcons" }} />
  );
}
