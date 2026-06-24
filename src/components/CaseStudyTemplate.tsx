import Link from "next/link";
import Image from "next/image";
import type { ReactNode } from "react";
import { ConfidentialityNote } from "./ConfidentialityNote";
import { MediaGallery, type MediaItem } from "./MediaGallery";
import { site } from "@/content/site";

export interface CaseStudy {
  eyebrow: string; title: string; outcome: string; role: string; timeframe: string; tags: string[];
  context: string; problem: string; myRole: string;
  systemSections: { eyebrow: string; title: string; bullets: string[] }[];
  process: string[]; impact: { n: string; l: string }[];
  proves: string;
  visual?: ReactNode;
  heroImage?: { src: string; alt: string };
  media?: MediaItem[];
}

function Nav() {
  return (
    <header className="sticky top-0 z-50 bg-bg/85 backdrop-blur-md border-b border-hairline">
      <div className="container-page h-16 flex items-center justify-between">
        <Link href="/" className="text-[15px] font-medium tracking-tight font-sans">
          <span className="font-serif italic text-[18px] mr-1">A.</span>
          ElGazzawi <span className="text-dim mx-2">·</span>
          <span className="text-muted text-[13px]">Koge</span>
        </Link>
        <Link href="/#case-studies" className="text-[12px] font-mono uppercase tracking-[0.06em] text-muted hover:text-paper">← All case studies</Link>
      </div>
    </header>
  );
}

function Footer() {
  return (
    <footer className="border-t border-hairline">
      <div className="container-page py-12 flex flex-col md:flex-row items-start md:items-center justify-between gap-4">
        <p className="text-[13px] text-muted">© {new Date().getFullYear()} {site.name}.</p>
        <p className="text-[13px] text-muted"><span className="font-serif italic">Designed and built by Koge.</span><span className="mx-2 text-dim">·</span>Instrument Serif &amp; Inter.</p>
      </div>
    </footer>
  );
}

export function CaseStudyPage({ cs, prev, next }: {
  cs: CaseStudy;
  prev?: { href: string; title: string };
  next?: { href: string; title: string };
}) {
  return (
    <>
      <Nav />
      <main>
        <header className="relative border-b border-hairline">
          <div className="container-page relative py-16 sm:py-20 lg:py-24">
            <Link href="/#case-studies" className="text-[11px] font-mono tracking-[0.18em] uppercase text-muted hover:text-gold inline-flex items-center gap-1.5">← All case studies</Link>
            <div className="mt-6 eyebrow">// {cs.eyebrow}</div>
            <h1 className="mt-3 font-serif text-display-m sm:text-display-l leading-[0.98] max-w-[16ch]">{cs.title}</h1>
            <p className="mt-7 text-paper/85 text-[17px] sm:text-[19px] leading-[1.55] max-w-[60ch] font-serif italic">{cs.outcome}</p>
            <div className="mt-10 flex flex-wrap gap-x-10 gap-y-4 text-[12px] font-mono">
              <Meta k="Role" v={cs.role} />
              <Meta k="Timeframe" v={cs.timeframe} />
              <Meta k="Discipline" v={cs.tags.join(" · ")} />
            </div>
          </div>
        </header>

        {cs.heroImage && (
          <section className="border-b border-hairline bg-deep/40">
            <div className="container-page py-8 sm:py-10">
              <div className="relative aspect-[16/7] sm:aspect-[16/6] w-full overflow-hidden ring-1 ring-hairline rounded-[12px]">
                <Image src={cs.heroImage.src} alt={cs.heroImage.alt} fill priority sizes="(max-width: 1280px) 100vw, 1280px" className="object-cover" />
              </div>
              <div className="mt-3 text-[11px] font-mono text-muted tracking-[0.06em]">// {cs.heroImage.alt}</div>
            </div>
          </section>
        )}

        <section className="border-t border-hairline py-16 sm:py-20">
          <div className="container-page grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-16">
            <div className="lg:col-span-4">
              <div className="eyebrow">// 01 · Context</div>
              <h2 className="mt-3 font-serif text-display-s">The setup.</h2>
            </div>
            <div className="lg:col-span-8 space-y-6">
              <P>{cs.context}</P>
              <div className="border-l-2 border-gold/60 pl-5">
                <div className="text-[11px] font-mono text-gold tracking-[0.18em] uppercase">// The problem</div>
                <p className="mt-2 text-paper text-[16px] sm:text-[17px] leading-[1.7]">{cs.problem}</p>
              </div>
              <div>
                <div className="text-[11px] font-mono text-muted tracking-[0.18em] uppercase">// My role</div>
                <p className="mt-2 text-paper text-[15px] leading-[1.7]">{cs.myRole}</p>
              </div>
            </div>
          </div>
        </section>

        {cs.visual && (
          <section className="border-t border-hairline py-12 sm:py-16 bg-deep/40">
            <div className="container-page">
              <div className="eyebrow mb-5">// Artifact</div>
              {cs.visual}
            </div>
          </section>
        )}

        <section className="border-t border-hairline py-16 sm:py-20">
          <div className="container-page">
            <div className="eyebrow">// 02 · System built</div>
            <h2 className="mt-3 font-serif text-display-s sm:text-display-m max-w-[20ch]">What was actually shipped.</h2>
            <div className="mt-12 grid grid-cols-1 md:grid-cols-2 gap-px bg-hairline border border-hairline">
              {cs.systemSections.map((sec) => (
                <div key={sec.title} className="bg-panel p-6 sm:p-7 lift">
                  <div className="text-[10px] font-mono text-gold tracking-[0.18em] uppercase">{sec.eyebrow}</div>
                  <h3 className="mt-3 font-serif italic text-[22px] text-paper">{sec.title}</h3>
                  <ul className="mt-4 space-y-2.5 text-[14px]">
                    {sec.bullets.map((b) => (
                      <li key={b} className="flex items-start gap-3 text-paper/80 leading-[1.6]">
                        <span aria-hidden className="text-gold mt-[7px] shrink-0">—</span><span>{b}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>
        </section>

        {cs.media && cs.media.length > 0 && (
          <MediaGallery items={cs.media} />
        )}

        <section className="border-t border-hairline py-16 sm:py-20">
          <div className="container-page grid grid-cols-1 lg:grid-cols-12 gap-10">
            <div className="lg:col-span-4">
              <div className="eyebrow">// 03 · Execution</div>
              <h2 className="mt-3 font-serif text-display-s">How it shipped.</h2>
            </div>
            <ol className="lg:col-span-8 space-y-5">
              {cs.process.map((p, i) => (
                <li key={i} className="grid grid-cols-[60px_1fr] gap-5 items-start border-l-2 border-hairline pl-5">
                  <span className="font-mono text-[11px] text-gold tracking-[0.18em]">STEP {String(i + 1).padStart(2, "0")}</span>
                  <span className="text-paper text-[15px] leading-[1.7]">{p}</span>
                </li>
              ))}
            </ol>
          </div>
        </section>

        <section className="border-t border-hairline py-16 sm:py-20 bg-deep/40">
          <div className="container-page">
            <div className="eyebrow">// 04 · Impact</div>
            <h2 className="mt-3 font-serif text-display-s sm:text-display-m">By the numbers.</h2>
            <div className="mt-10 grid grid-cols-2 md:grid-cols-4 gap-px bg-hairline border border-hairline">
              {cs.impact.map((m) => (
                <div key={m.l} className="bg-panel p-6 sm:p-7">
                  <div className="font-serif italic text-gold text-[28px] sm:text-[34px] tab-nums leading-none">{m.n}</div>
                  <div className="mt-3 text-muted text-[12px] sm:text-[13px] leading-[1.5]">{m.l}</div>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="border-t border-hairline py-16">
          <div className="container-page">
            <div className="text-center max-w-[640px] mx-auto">
              <div className="eyebrow">// Next move</div>
              <h2 className="mt-3 font-serif text-display-s">Want the live walkthrough?</h2>
              <p className="mt-4 text-muted text-[15px]">Happy to walk through the engine, the framework, or the pipeline on a call.</p>
              <div className="mt-7 flex flex-wrap gap-3 justify-center">
                <a href={`mailto:${site.email}`} className="bg-paper text-bg px-6 py-3.5 text-[12px] font-semibold tracking-[0.14em] uppercase font-mono hover:bg-gold transition-colors min-h-[44px] inline-flex items-center rounded-full">Email me →</a>
                <Link href="/#case-studies" className="border border-hairline text-paper px-6 py-3.5 text-[12px] font-semibold tracking-[0.14em] uppercase font-mono hover:border-gold hover:text-gold transition-colors min-h-[44px] inline-flex items-center rounded-full">All case studies</Link>
              </div>
            </div>
            {(prev || next) && (
              <div className="mt-16 grid grid-cols-1 md:grid-cols-2 gap-4">
                {prev ? (
                  <Link href={prev.href} className="panel lift p-5 group">
                    <div className="text-[11px] font-mono text-muted tracking-[0.14em] uppercase">← Previous</div>
                    <div className="mt-2 font-serif italic text-[18px] text-paper group-hover:text-gold transition-colors">{prev.title}</div>
                  </Link>
                ) : <div />}
                {next ? (
                  <Link href={next.href} className="panel lift p-5 text-right group">
                    <div className="text-[11px] font-mono text-muted tracking-[0.14em] uppercase">Next →</div>
                    <div className="mt-2 font-serif italic text-[18px] text-paper group-hover:text-gold transition-colors">{next.title}</div>
                  </Link>
                ) : <div />}
              </div>
            )}
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}

function Meta({ k, v }: { k: string; v: string }) {
  return (
    <div>
      <div className="text-[10px] text-gold tracking-[0.18em] uppercase">{k}</div>
      <div className="mt-1 text-paper text-[13px]">{v}</div>
    </div>
  );
}

function P({ children }: { children: ReactNode }) {
  return <p className="text-paper/85 text-[15px] sm:text-[16px] leading-[1.75]">{children}</p>;
}
