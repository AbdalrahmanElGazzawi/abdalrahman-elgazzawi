import Link from "next/link";
import { site, arc, competitiveCred } from "@/content/site";

export const metadata = { title: "About", description: "About Abdalrahman ElGazzawi — origin, career arc, and competitive credibility." };

function Nav() {
  return (
    <header className="sticky top-0 z-50 bg-bg/85 backdrop-blur-md border-b border-hairline">
      <div className="container-page h-16 flex items-center justify-between">
        <Link href="/" className="text-[15px] font-medium tracking-tight"><span className="font-serif italic text-[18px] mr-1">A.</span>ElGazzawi<span className="text-dim mx-2">·</span><span className="text-muted text-[13px]">Koge</span></Link>
        <Link href="/" className="text-[12px] font-mono uppercase tracking-[0.06em] text-muted hover:text-paper">← Home</Link>
      </div>
    </header>
  );
}

function Footer() {
  return (
    <footer className="border-t border-hairline">
      <div className="container-page py-12 flex flex-col md:flex-row items-start md:items-center justify-between gap-4">
        <p className="text-[13px] text-muted">© {new Date().getFullYear()} {site.name}.</p>
        <p className="text-[13px] text-muted"><span className="font-serif italic">Designed and built by Koge.</span></p>
      </div>
    </footer>
  );
}

export default function About() {
  return (
    <>
      <Nav />
      <main>
        <section className="border-b border-hairline">
          <div className="container-page py-20 sm:py-28">
            <div className="eyebrow">// About</div>
            <h1 className="mt-4 font-serif text-display-m sm:text-display-l leading-[0.98] max-w-[18ch]">
              Operator with<br /><em className="italic text-gold">commercial scar tissue</em>.
            </h1>
            <p className="mt-7 max-w-[60ch] text-paper/85 text-[16px] sm:text-[18px] leading-[1.7]">
              Commercial partnerships and campaign-operations professional with 10+ years scaling sponsorship, brand activations, and integrated campaigns across MENA gaming, esports, sports, entertainment, and technology. Damascus origin · Cairo base · Riyadh frequent.
            </p>
          </div>
        </section>

        <section className="border-b border-hairline py-20">
          <div className="container-page max-w-[760px]">
            <div className="eyebrow">// Career arc</div>
            <p className="mt-4 font-serif italic text-[28px] sm:text-[34px] text-paper leading-[1.3]">{arc}</p>
          </div>
        </section>

        <section className="py-20">
          <div className="container-page">
            <div className="eyebrow">// Esports-native</div>
            <h2 className="mt-3 font-serif text-display-s sm:text-display-m max-w-[24ch] leading-[1.05]">
              Competitor <em className="italic text-gold">before</em> commercial.
            </h2>
            <p className="mt-7 max-w-[60ch] text-muted text-[15px] leading-[1.7]">{competitiveCred.intro}</p>
            <ul className="mt-10 grid grid-cols-1 md:grid-cols-2 gap-px bg-hairline border border-hairline">
              {competitiveCred.ranks.map((r) => (
                <li key={r.game} className="bg-panel p-5 sm:p-6">
                  <div className="text-[11px] font-mono text-gold tracking-[0.18em] uppercase">{r.game}</div>
                  <div className="mt-2 font-serif italic text-[18px] text-paper">{r.rank}</div>
                </li>
              ))}
            </ul>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
