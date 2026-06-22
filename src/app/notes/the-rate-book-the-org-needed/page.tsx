import Link from "next/link";
import { Nav } from "@/components/Nav";
import { Footer } from "@/components/Footer";
import { notes } from "@/content/notes";

const slug = "the-rate-book-the-org-needed";
const note = notes.find((n) => n.slug === slug)!;

export const metadata = { title: note.title, description: note.summary };

export default function Note() {
  return (
    <>
      <Nav />
      <main className="container-page py-20 sm:py-24 max-w-[760px]">
        <div className="text-gold text-[11px] font-bold tracking-[0.25em] uppercase mb-4">{note.date} · {note.readTime}</div>
        <h1 className="font-serif text-[clamp(34px,5vw,52px)] leading-[1.1]">{note.title}</h1>
        <div className="gold-rule mt-5 mb-10" />
        <article className="prose-essay">
          <p>Most esports rate cards don’t survive contact with reality. They look fine in a slide deck, until a brand asks <em>how did you get to that number?</em> — and the answer is some version of <em>it’s what we’ve always charged</em>. That isn’t a rate card; that’s a number with a price next to it.</p>
          <p>When I joined Team Falcons in January, the org needed something different: a rate book that could survive an external audit. Defensible against the global tier-1 benchmarks — FaZe, Cloud9, T1, NRG, 100T — calibrated for MENA. Codified into product, contract, and live pipeline. Audit-ready by default.</p>

          <h2>The five base methods</h2>
          <p>The trap with single-method pricing is that no one method covers every talent. Pure CPM falls apart for streamers (engagement isn’t views). Pure comparables fall apart in markets without comparables. Pure authority pricing rewards the wrong thing.</p>
          <p>So we run all five — CPM, CPE, Comparables, Authority, Tier baseline — and take the MAX. Whichever method produces the highest defensible number wins. The MAX isn’t a hack; it’s how we say <em>this is the price our most rigorous method supports</em>.</p>

          <h2>The nine axes</h2>
          <p>Then we layer nine multipliers at quote time — Engagement, Audience, Seasonality, Content Type, Language, Authority, Rights, Multi-Platform, and a Floor. Multipliers apply at quote time, never baked into the base. That’s the discipline: a base rate is the floor of what a talent is worth in a vacuum; multipliers price the actual deal in front of you.</p>

          <h2>What this unlocked</h2>
          <p>Three things, in order. First, every quote became traceable — you can ask any number on a Falcons quote <em>show your work</em>, and the work shows up. Second, every contract trace-back to one of four phases in the Agency Framework — Advertising (SAR 25K+), Sponsorship (250K+), Partnership (1.5M+), Equity (10M+). Third, the live pipeline tool — Mandates OS — became real, because there was finally a defensible thing to put in it.</p>

          <h2>The takeaway</h2>
          <p>Pricing methodology isn’t a backroom artifact. It’s the thing that lets sales walk into a brand conversation with a defensible position, that lets contracts ship without legal asking <em>where did this number come from</em>, and that lets the org grow without rebuilding the rate card every quarter.</p>
          <p>If you’re building one — start with the MAX. Layer multipliers at quote time. Trace every line back to a source. Don’t cheap out on the methodology document; that’s the audit-defence.</p>
        </article>
        <div className="mt-16 text-center">
          <Link href="/notes" className="text-gold text-[12px] tracking-[0.1em] uppercase font-semibold hover:underline">← All notes</Link>
        </div>
      </main>
      <Footer />
      <style>{`
        .prose-essay > * + * { margin-top: 1.4em; }
        .prose-essay p { color: var(--paper); font-size: 17px; line-height: 1.78; }
        .prose-essay h2 { font-family: var(--font-fraunces), Georgia, serif; font-style: italic; font-size: 28px; line-height: 1.2; margin-top: 2.4em; color: var(--paper); }
        .prose-essay em { color: #2E8B6E; font-style: italic; }
        .prose-essay strong { color: var(--paper); }
      `}</style>
    </>
  );
}
