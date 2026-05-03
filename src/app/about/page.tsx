import Image from "next/image";
import { Nav } from "@/components/Nav";
import { Footer } from "@/components/Footer";
import { ConfidentialityNote } from "@/components/ConfidentialityNote";

export const metadata = {
  title: "About — Abdalrahman ElGazzawi",
  description: "Background, operating philosophy, and how I work — Abdalrahman ElGazzawi (Koge), esports commercial systems operator.",
};

export default function About() {
  return (
    <>
      <Nav />
      <main>
        <header className="border-b border-hairline">
          <div className="container-page py-16 sm:py-20 lg:py-24 grid grid-cols-1 lg:grid-cols-12 gap-10 items-end">
            <div className="lg:col-span-7">
              <div className="eyebrow mb-4">// About</div>
              <h1 className="font-serif text-display-m sm:text-display-l leading-[0.95]">
                A commercial operator,<br /><span className="text-gold italic">not a creative one.</span>
              </h1>
              <p className="mt-7 text-paper text-[16px] sm:text-[17px] leading-[1.7] max-w-prose">
                Ten-plus years across the esports lifecycle — QA, BD, marketing, operations, strategy. The current chapter is commercial systems: pricing methodology, sponsorship architecture, agency governance, and the internal tooling that runs them.
              </p>
            </div>
            <div className="lg:col-span-5">
              <div className="relative aspect-[5/6] max-w-[360px] ml-auto">
                <Image src="/img/hero.jpg" alt="Abdalrahman ElGazzawi on stage at an industry event" fill sizes="(max-width: 768px) 280px, 360px" className="object-cover object-[center_20%]" />
                <div aria-hidden className="absolute inset-0 ring-1 ring-hairline pointer-events-none" />
              </div>
              <div className="text-[11px] font-mono text-muted mt-3 tracking-[0.06em] text-right">// Riyadh · Industry stage</div>
            </div>
          </div>
        </header>

        <section className="border-t border-hairline py-16 sm:py-20">
          <div className="container-page grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-16">
            <div className="lg:col-span-4">
              <div className="eyebrow">// Operating philosophy</div>
              <h2 className="mt-3 font-serif text-display-s">Three rules.</h2>
            </div>
            <div className="lg:col-span-8 space-y-7 max-w-[58ch]">
              <Block n="01" t="Defensibility over speed." b="Every rate, recommendation, and commercial position should trace back to source logic. If the math cannot be shown, the work is not finished." />
              <Block n="02" t="Methodology, then motion." b="Build the engine first — pricing, rights, playbook, governance, pipeline. Then move fast without creating commercial debt." />
              <Block n="03" t="Half technical, half commercial." b="Writing SQL, designing pricing logic, managing stakeholders, and closing deals are not separate muscles. They are one operating system." />
            </div>
          </div>
        </section>

        <section className="border-t border-hairline py-16 sm:py-20 bg-deep/30">
          <div className="container-page grid grid-cols-1 lg:grid-cols-12 gap-10 items-start">
            <div className="lg:col-span-5">
              <div className="relative aspect-[4/3] max-w-[460px]">
                <Image src="/img/contact.jpg" alt="Abdalrahman ElGazzawi at the desk — operating mode" fill sizes="(max-width: 768px) 320px, 460px" className="object-cover" />
                <div aria-hidden className="absolute inset-0 ring-1 ring-hairline pointer-events-none" />
              </div>
              <div className="text-[11px] font-mono text-muted mt-3 tracking-[0.06em]">// Operating mode</div>
            </div>
            <div className="lg:col-span-7">
              <div className="eyebrow">// Background</div>
              <h2 className="mt-3 font-serif text-display-s">From QA to commercial systems.</h2>
              <p className="mt-6 text-paper text-[15px] sm:text-[16px] leading-[1.7] max-w-prose">
                Originally from Damascus. Now operating between Riyadh and Cairo. Started inside the games as a competitor — Top 10 world Warzone wins, Rank 1 world Heroes of Newerth — before moving into the commercial side. The earliest commercial chapter was an internet café in Damascus.
              </p>
              <p className="mt-4 text-paper text-[15px] sm:text-[16px] leading-[1.7] max-w-prose">
                QA at S2 Games taught the technical floor of how games actually ship. BD and operations across Cairo and Riyadh — Wanyoo, Telecom Egypt's RA'AD Esports (where I directed venue construction and stood up a PMPL bootcamp in under a week), Vanguard for Gamers8, True Gaming for Nvidia / Microsoft / ASUS / AstraNova activations.
              </p>
              <p className="mt-4 text-paper text-[15px] sm:text-[16px] leading-[1.7] max-w-prose">
                Joined SPORTFIVE for the EWC commercial cycle — owned partner delivery at scale across 778+ deliverables, 78+ brands, five agencies. Now at Team Falcons authoring the commercial stack and shipping the internal tools that run it.
              </p>
              <div className="mt-7 flex flex-wrap gap-x-8 gap-y-2 text-[13px] font-mono text-muted">
                <span><span className="text-gold">●</span> Arabic — Native</span>
                <span><span className="text-gold">●</span> English — Fluent</span>
                <span><span className="text-gold">●</span> Spanish — Basic</span>
              </div>
              <div className="mt-3 text-[12px] font-mono text-muted">B.A. Communication & Media Studies — Universitat Autònoma de Barcelona / AAST</div>
            </div>
          </div>
        </section>

        <section className="border-t border-hairline py-16">
          <div className="container-page max-w-[820px]">
            <ConfidentialityNote />
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}

function Block({ n, t, b }: { n: string; t: string; b: string }) {
  return (
    <div className="grid grid-cols-[60px_1fr] gap-5">
      <div className="font-mono text-[12px] text-gold tracking-[0.18em] pt-1">{n}</div>
      <div>
        <h3 className="font-serif text-[20px] sm:text-[22px] text-paper">{t}</h3>
        <p className="mt-2 text-muted text-[14px] sm:text-[15px] leading-[1.7]">{b}</p>
      </div>
    </div>
  );
}
