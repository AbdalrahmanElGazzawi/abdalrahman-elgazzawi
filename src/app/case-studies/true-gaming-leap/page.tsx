import { CaseStudyPage, type CaseStudy } from "@/components/CaseStudyTemplate";
import { TrueGamingDiagram } from "@/components/diagrams/StackDiagram";

const cs: CaseStudy = {
  eyebrow: "Project Manager · BD · 2023 — 2024",
  title: "True Gaming — LEAP Expo, Awards SOP, brand activations.",
  outcome: "147 contacts captured at LEAP Expo · 6 new clients onboarded · TrueGaming Awards Event SOP rebuilt for venue, logistics, sponsor integration · activation response time cut significantly.",
  role: "Project Manager · Business Development",
  timeframe: "Aug 2023 — Apr 2024",
  tags: ["LEAP Expo","Awards SOP","Brand activations","JIRA cadence"],
  media: [
    { type: "photo", src: "/work/true-gaming-leap.jpg",              alt: "LEAP booth - True Gaming",      caption: "147 contacts captured, 6 new clients onboarded.", tag: "Booth" },
    { type: "photo", src: "/photos/keynote-leap.jpg",                alt: "LEAP keynote stage",            caption: "Industry surface for partner pitch traffic.", tag: "Event" },
    { type: "doc",   src: "/work/artifact-truegaming-onepager.jpg",  alt: "Senior Commercial Partnerships one-pager", caption: "Personal value-prop one-pager. PDF, 1 page.", tag: "One-pager" },
  ],
  context:
    "True Gaming is a Riyadh-based gaming and esports marketing agency working with global tier-1 endemic brands. The agency holds activation responsibility for partners across LEAP, in-house events, and ongoing brand campaigns. I joined as Project Manager / BD with both pitch and delivery scope.",
  problem:
    "Agency-side activation work fails when there isn't a tight system for booth strategy, sponsor integration, and post-event follow-up. Contacts get lost, sponsor obligations slip, and the next pitch starts from scratch. The agency needed disciplined PM cadence layered onto creative output.",
  myRole:
    "Owned the PM and BD layer — set the cadence, structured the workflows on JIRA, ran the booths, captured the contacts, and cleaned up the delivery side of the brand activation chain.",
  systemSections: [
    { eyebrow: "Activation 01", title: "LEAP Expo — TrueGaming booth",
      bullets: ["Showcased esports solutions at TrueGaming's booth at LEAP, Riyadh's flagship tech expo.","147 contacts captured — disciplined lead-capture and qualification flow.","6 new clients onboarded directly from the post-event follow-through.","Booth strategy bridged commercial pitch and technical demo."] },
    { eyebrow: "Activation 02", title: "TrueGaming Awards — venue & sponsor SOP",
      bullets: ["Oversaw venue selection, logistics, and complete project implementation on JIRA.","Sponsor integration end-to-end — from inventory to delivery to reporting.","Project tracked for management visibility and post-event audit.","Reusable SOP shipped for future agency events."] },
    { eyebrow: "Activation 03", title: "Brand activations — Nvidia, Microsoft, ASUS, AstraNova",
      bullets: ["Led activations for tier-1 endemic gaming brands across digital and physical platforms.","Product positioning, brand integrity, and on-ground execution.","Cut activation response time significantly through cleaner workflow.","Sprint cadence and stakeholder alignment for technical-partner campaigns."] },
    { eyebrow: "System", title: "JIRA-cadenced delivery",
      bullets: ["Standard sprint cadence applied across creative + activation + delivery.","Stakeholder alignment baked into the workflow, not bolted on.","Project visibility for management without status-meeting overhead.","Replaced ad-hoc chat-thread coordination with one source of truth."] },
  ],
  process: [
    "Audited existing activation workflows — identified where contacts and sponsor obligations were leaking.",
    "Designed booth strategy and lead-capture flow for LEAP Expo before the event opened.",
    "Stood up JIRA-based PM cadence for the Awards Event — venue, logistics, sponsor inventory all in one tracker.",
    "Ran tier-1 brand activations as PM — Nvidia, Microsoft, ASUS, AstraNova — sprint-cadence delivery through close.",
    "Closed the loop on every booth contact — qualification, follow-up, conversion.",
    "Documented everything as reusable SOPs so the agency kept the gains after the engagement.",
  ],
  impact: [
    { n: "147", l: "LEAP Expo contacts captured" },
    { n: "6",   l: "new clients onboarded" },
    { n: "4",   l: "tier-1 brands activated" },
    { n: "JIRA", l: "PM cadence shipped" },
  ],
  proves:
    "Agency-side delivery muscle — the discipline to run multiple tier-1 brand activations simultaneously through JIRA cadence, capture leads cleanly at expo scale, and convert them into recurring agency clients.",
  visual: <TrueGamingDiagram />,
};

export const metadata = {
  title: "True Gaming — LEAP, Awards, brand activations — Case study",
  description: "Agency-side PM and BD work at True Gaming — 147 LEAP contacts, 6 new clients, brand activations for Nvidia / Microsoft / ASUS / AstraNova.",
};

export default function Page() {
  return (
    <CaseStudyPage cs={cs}
      prev={{ href: "/case-studies/esports-world-cup", title: "Esports World Cup — Commercial Delivery" }}
      next={{ href: "/case-studies/telecom-egypt-raad", title: "Telecom Egypt RA'AD — esports infrastructure" }} />
  );
}
