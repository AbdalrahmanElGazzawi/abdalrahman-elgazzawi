import Link from "next/link";
import { Nav } from "@/components/Nav";
import { Footer } from "@/components/Footer";

export const metadata = {
  title: "Team Falcons — Pricing OS, Framework v5, Mandates",
  description: "How I built Team Falcons' commercial stack: Source-of-Truth pricing methodology, 140-page Agency Framework v5.0, bilingual mandates pipeline, Sony INZONE close.",
};

export default function FalconsCaseStudy() {
  return (
    <>
      <Nav />
      <main>
        <header className="border-b border-hairline">
          <div className="container-page py-16 sm:py-24">
            <div className="text-gold text-[11px] font-bold tracking-[0.25em] uppercase mb-4">Case Study · 2026</div>
            <h1 className="font-serif text-[clamp(40px,6vw,72px)] leading-[1.0] tracking-[-0.01em]">
              Team Falcons.<br/>
              <span className="text-gold italic">The commercial stack.</span>
            </h1>
            <div className="mt-8 grid grid-cols-2 md:grid-cols-4 gap-6 max-w-[820px]">
              <Stat n="200" l="talents priced" />
              <Stat n="140 pp" l="agency framework" />
              <Stat n="~SAR 2.3M" l="active pipeline" />
              <Stat n="USD 11.2K" l="Sony INZONE closed" />
            </div>
          </div>
        </header>

        <Section eyebrow="01 · The brief" title="Build the rate book the org needed.">
          <P>
            When I joined Team Falcons in January 2026, the commercial side of the org needed three things at once:
            a <em>defensible</em> rate book for 200 talents, a <em>governance framework</em> brand partners and agencies could read, and a <em>live pipeline tool</em> that survived contact with day-to-day deal flow. None of these could ship in isolation — pricing decisions had to thread through to contract templates, which had to thread through to the pipeline tracker.
          </P>
          <P>
            The benchmark was the global tier-1 orgs — FaZe, Cloud9, T1, NRG, 100T — calibrated for the MENA market.
            The output had to be: defensible against external audits, codified into product, and live in a system that anyone in the org could pick up and run.
          </P>
        </Section>

        <Section eyebrow="02 · Pricing — Source of Truth v1.0" title="200 talents · 5 base methods · 9 axes.">
          <P>
            I authored the canonical 15-section pricing methodology document — the single artifact every quote, every contract, every dispute resolves to. It encodes five base-rate methods (CPM, CPE, Comparables, Authority, Tier baseline) feeding a MAX, then layers nine multipliers at quote time, never baked into the base.
          </P>
          <pre className="font-serif italic text-[clamp(16px,2vw,22px)] leading-[1.6] bg-deep border border-gold/40 p-6 my-8 whitespace-pre-wrap">
{`Final Price = MAX(SocialPrice, AuthorityFloor)
              × ConfidenceCap
              × (1 + RightsUplift)`}
          </pre>
          <P>
            Calibration sources: Newzoo audience data, Nielsen Esports valuation, Shikenso brand-impact measurement, Influencity creator analytics, plus WME / CAA agency practice. Tier baselines locked at the SAR equivalent of competitor tier-1 rates for the MENA market — never cheap, never indefensible.
          </P>
          <Bullet>15-section methodology document committed to the repo as canonical source-of-truth.</Bullet>
          <Bullet>200 talents tiered S / 1 / 2 / 3 / 4 across players, content creators, and influencers.</Bullet>
          <Bullet>Per-talent benchmark sheet auditing current rate vs realistic mid vs verdict.</Bullet>
          <Bullet>Methodology refresh cycle — quarterly re-pricing trigger when the underlying multiplier basis moves.</Bullet>
        </Section>

        <Section eyebrow="03 · Agency Framework v5.0" title="140 pages of commercial governance.">
          <P>
            The Agency Partner Pack is how Falcons partners actually buy. It frames every relationship in one of four phases — Advertising (SAR 25K+), Sponsorship (250K+), Partnership (1.5M+), Equity / Title (10M+) — and routes every counterparty through 13 tracks (Direct Brand, Creative Agency, Media Agency, Talent-Rep, Publisher, Broadcast, Government, Tech, etc.).
          </P>
          <P>
            Inside the framework: an Approval Matrix that defines who signs what at what value, a Clause Library codifying the contractual positions Falcons defends, and three playbooks (Activation, Renewal, Crisis). KSA-governed. SCCA Riyadh arbitration.
          </P>
          <Bullet><strong>4-Phase Brand Investment Model</strong> — every deal traces to one phase, no exceptions.</Bullet>
          <Bullet><strong>13 counterparty tracks</strong> — agencies, publishers, federations, broadcast, gov.</Bullet>
          <Bullet><strong>Approval matrix + clause library</strong> — codified positions for legal, commercial, ops.</Bullet>
          <Bullet><strong>Activation · Renewal · Crisis</strong> — playbooks for what happens after signature.</Bullet>
        </Section>

        <Section eyebrow="04 · Pipeline & product" title="Falcons Pricing OS — quote lifecycle in production.">
          <P>
            The methodology and framework are encoded into a Next.js + Supabase + Vercel internal web app — Postgres with row-level-security, a quote builder that walks sales through Campaign → Build → Summary, full multi-currency (SAR canonical, USD toggle at the locked Saudi peg of 3.75), and a bilingual Arabic/English mandates tracker.
          </P>
          <Bullet>Live RLS-enforced Postgres backend on Supabase (eu-central-1) — 200 active talents, 020 migrations applied.</Bullet>
          <Bullet>Quote builder UI — campaign brief, deliverable line items, rights uplift, automatic methodology lookup.</Bullet>
          <Bullet>Mandates OS — bilingual hub-and-spoke pipeline, ~SAR 2.3M tracked across player campaigns, sponsor mandates, IP, team campaigns, event appearances.</Bullet>
          <Bullet>Vercel auto-deploy from GitHub main — production rebuild within ~2 minutes of merge.</Bullet>
        </Section>

        <Section eyebrow="05 · Closed deal" title="Sony INZONE × Team Falcons — USD 11.2K, 5 creators, 12 deliverables.">
          <P>
            Closed via Ruder Finn Atteline in December 2025. Five Saudi creators — Abu Najd, Madv, Spyerfrog, Oden, xsma333. Twelve deliverables across Reels, Stories, and YouTube content. Full INZONE product seeding, plus a KSA-only 20% discount-code mechanic that linked the campaign to measurable retail conversion.
          </P>
          <P>
            This was the first deal scoped, priced, contracted, and shipped end-to-end on the new methodology. Every line item traceable. Every multiplier defensible. Audit-ready by default.
          </P>
        </Section>

        <Section eyebrow="06 · Active pipeline · ~SAR 2.3M" title="What's running right now.">
          <ul className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-6">
            {[
              { tag: "Multi-Division",   t: "GameSir × NODWIN",          d: "Apex + FGC + COD multi-division proposal · v5 master working book." },
              { tag: "Partnership",      t: "HADO × Team Falcons",       d: "Multi-iteration pricing workbook · phase 1 proposal in review." },
              { tag: "Sponsorship Deck", t: "Falcons Philippines M5",    d: "M5 World Champions sponsorship deck · MLBB ecosystem." },
              { tag: "Sponsorship Deck", t: "Falcons Vega SEA · MLBB",   d: "First-of-its-kind female roster commercial deck · SEA market." },
              { tag: "Creator Brief",    t: "Madv × INZONE / NVIDIA AR", d: "Creator briefs and AR scripts for tier-1 endemic activations." },
            ].map((p) => (
              <li key={p.t} className="panel bg-deep border border-hairline p-6">
                <div className="text-gold text-[10px] font-bold tracking-[0.2em] uppercase">{p.tag}</div>
                <h4 className="font-serif italic text-[20px] mt-1.5">{p.t}</h4>
                <p className="text-muted text-[13px] mt-2">{p.d}</p>
              </li>
            ))}
          </ul>
        </Section>

        <section className="border-t border-hairline py-20">
          <div className="container-page text-center">
            <div className="text-gold text-[11px] font-bold tracking-[0.25em] uppercase mb-4">Want the full version?</div>
            <h2 className="font-serif text-[clamp(28px,4vw,42px)]">Happy to walk through the engine on a call.</h2>
            <div className="mt-8 flex flex-wrap gap-4 justify-center">
              <Link href="/#contact" className="inline-flex items-center gap-2 bg-gold text-bg px-7 py-3.5 text-[12px] font-bold tracking-[0.15em] uppercase hover:bg-gold-soft">Get in touch</Link>
              <Link href="/" className="inline-flex items-center gap-2 border border-hairline text-paper px-7 py-3.5 text-[12px] font-bold tracking-[0.15em] uppercase hover:border-gold">← Back to portfolio</Link>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}

function Section({ eyebrow, title, children }: { eyebrow: string; title: string; children: React.ReactNode }) {
  return (
    <section className="border-t border-hairline py-16 sm:py-20">
      <div className="container-page max-w-[920px]">
        <div className="text-gold text-[11px] font-bold tracking-[0.25em] uppercase mb-4">{eyebrow}</div>
        <h2 className="font-serif text-[clamp(28px,4vw,42px)] leading-[1.15] tracking-[-0.005em]">{title}</h2>
        <div className="gold-rule mt-4 mb-8" />
        <div className="space-y-5">{children}</div>
      </div>
    </section>
  );
}
function P({ children }: { children: React.ReactNode }) {
  return <p className="text-paper text-[16px] leading-[1.75] max-w-[760px]">{children}</p>;
}
function Bullet({ children }: { children: React.ReactNode }) {
  return (
    <p className="relative pl-6 text-paper text-[15px] leading-[1.65] max-w-[760px]">
      <span aria-hidden className="absolute left-0 text-gold">—</span>{children}
    </p>
  );
}
function Stat({ n, l }: { n: string; l: string }) {
  return (
    <div>
      <div className="font-serif italic text-gold text-[28px] sm:text-[36px] leading-none">{n}</div>
      <div className="text-muted text-[12px] mt-2 leading-snug">{l}</div>
    </div>
  );
}
