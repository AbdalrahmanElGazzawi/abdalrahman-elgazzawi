import Image from "next/image";
import Link from "next/link";
import {
  site, hero, proof, caseStudies, brandInvolvement, principles,
  waysToCollaborate, federationAdvisory,
} from "@/content/site";

// Hero images per case-study slug. inlined for build resilience.
// Drop more files at /public/work/<slug>.jpg as you have them.
const heroImages: Record<string, string | undefined> = {
  "esports-world-cup":              "/photos/ewc-card.jpg",          // real photo: EWC Grand Final stage
  "true-gaming-leap":               "/photos/leap-keynote-card.jpg", // real photo: LEAP keynote (TG was the LEAP engagement)
  "telecom-egypt-raad":             "/work/raad-facility.jpg",       // real photo: RA'AD facility
  "sony-inzone-team-falcons":       undefined,                       // bespoke SVG art
  "team-falcons-commercial-stack":  undefined,                       // bespoke SVG (the commercial stack diagram IS the artifact)
  "falcons-pricing-os":             undefined,                       // bespoke SVG art
  "glg-advisory":                   undefined,                       // bespoke SVG art (advisory work, not event-based)
};
import {
  FalconsCommercialArt, PricingOSArt, SonyINZONEArt, GLGArt,
} from "@/components/CaseArtwork";
import { LiveCampaigns } from "@/components/LiveCampaigns";
// import { AIOperations } from "@/components/AIOperations";
import { Moments } from "@/components/Moments";

// Map slug → bespoke SVG art (for cards without real photos)
const caseArt: Record<string, React.ReactNode | undefined> = {
  "team-falcons-commercial-stack":  <FalconsCommercialArt />,
  "falcons-pricing-os":             <PricingOSArt />,
  "sony-inzone-team-falcons":       <SonyINZONEArt />,
  "glg-advisory":                   <GLGArt />,
};

export default function Page() {
  return (
    <>
      <Nav />
      <main>
        <Hero />
        <TrustStrip />
        <SelectedWork />
        <LiveCampaigns />
        <Moments />
        <Federation />
        <Brands />
        <HowIWork />
        <Collaborate />
        <Contact />
      </main>
      <Footer />
    </>
  );
}

function Nav() {
  return (
    <header className="sticky top-0 z-50 bg-bg/80 backdrop-blur-md border-b border-hairline">
      <div className="container-page h-16 flex items-center justify-between">
        <Link href="/" className="text-[18px] tracking-tight">
          <span className="italic font-light text-gold">A.</span> <span className="font-light">ElGazzawi</span>
        </Link>
        <nav className="hidden md:flex items-center gap-8 text-[14px] tracking-wide text-muted">
          <a href="#work" className="hover:text-paper transition-colors">Work</a>
          <a href="#how" className="hover:text-paper transition-colors">How I work</a>
          <a href="#collaborate" className="hover:text-paper transition-colors">Collaborate</a>
          <a href={`mailto:${site.email}`} className="inline-flex items-center rounded-full bg-gold text-bg px-5 py-2 text-[13px] tracking-wide hover:bg-gold-soft transition-colors">Email me</a>
        </nav>
      </div>
    </header>
  );
}

function Hero() {
  return (
    <section className="relative overflow-hidden bg-bg">
      {/* Clean dark hero. subtle radial gold glow, no photo */}
      <div aria-hidden className="absolute inset-0 pointer-events-none">
        <div className="absolute inset-0" style={{ background: "radial-gradient(ellipse 80% 60% at 50% 0%, rgba(201,169,97,0.10) 0%, rgba(201,169,97,0.04) 30%, transparent 65%)" }} />
        <div className="absolute inset-0" style={{ background: "radial-gradient(ellipse 50% 40% at 85% 100%, rgba(201,169,97,0.06) 0%, transparent 50%)" }} />
        <div className="absolute inset-x-0 bottom-0 h-px bg-gradient-to-r from-transparent via-gold/30 to-transparent" />
      </div>
      <div className="relative container-page pt-24 md:pt-40 pb-24 md:pb-32">
        {/* Portrait + name lockup */}
        <div className="mb-10 flex items-center gap-4">
          <div className="relative h-14 w-14 sm:h-16 sm:w-16 overflow-hidden rounded-full ring-2 ring-gold/70 shrink-0">
            <Image src="/photos/portrait.jpg" alt="Abdalrahman ElGazzawi" fill priority sizes="64px" className="object-cover" />
          </div>
          <div>
            <div className="text-[14px] sm:text-[15px] text-paper font-light">Abdalrahman ElGazzawi</div>
            <p className="eyebrow !mb-0 !mt-1">{hero.eyebrow}</p>
          </div>
        </div>
        <h1 className="text-[52px] md:text-[112px] leading-[0.96] tracking-[-0.025em] font-light max-w-[1100px]">
          I run commercial<br/>partnerships and<br/><em className="italic font-normal text-gold">campaigns.</em>
        </h1>
        <p className="mt-8 max-w-[680px] text-[15px] md:text-[17px] text-muted italic leading-[1.6]">
          {hero.sub}
        </p>
        <div className="mt-14 flex flex-wrap gap-3">
          <a href={`mailto:${site.email}`} className="inline-flex items-center rounded-full bg-gold text-bg px-7 py-3.5 text-[15px] tracking-wide hover:bg-gold-soft transition-colors">Email me</a>
          <a href="#work" className="inline-flex items-center rounded-full border border-paper/15 px-7 py-3.5 text-[15px] tracking-wide hover:border-paper transition-colors">Selected work</a>
          <a href="#campaigns" className="inline-flex items-center rounded-full border border-paper/15 px-7 py-3.5 text-[15px] tracking-wide hover:border-paper transition-colors">Live campaigns</a>
        </div>
      </div>
      <div className="container-page relative"><div className="h-px bg-gold/25" /></div>
    </section>
  );
}

function TrustStrip() {
  return (
    <section className="bg-bg">
      <div className="container-page py-16 md:py-24">
        <p className="eyebrow mb-12">Proof</p>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-y-14 gap-x-8">
          {proof.map((m) => (
            <div key={m.l}>
              <div className="text-[44px] md:text-[60px] leading-none tracking-[-0.02em] tab-nums font-light text-gold">{m.n}</div>
              <div className="mt-4 text-[15px] text-muted leading-snug">{m.l}</div>
            </div>
          ))}
        </div>
      </div>
      <div className="container-page"><div className="h-px bg-gold/25" /></div>
    </section>
  );
}

function SelectedWork() {
  return (
    <section id="work" className="scroll-mt-20">
      <div className="container-page pt-24 md:pt-32 pb-12">
        <p className="eyebrow mb-5">Selected work</p>
        <h2 className="text-display-s sm:text-display-m max-w-[760px] font-light leading-[1.05]">
          Live campaigns. Real partners.<br/><em className="italic text-gold">Work that shipped.</em>
        </h2>
      </div>
      <div className="container-page pb-24">
        <div className="grid md:grid-cols-2 gap-6 md:gap-10">
          {caseStudies.map((c, i) => {
            const img = heroImages?.[c.slug];
            const art = caseArt[c.slug];
            return (
              <Link key={c.slug} href={`/case-studies/${c.slug}`} className="group block">
                <div className="relative aspect-[16/10] overflow-hidden rounded-[14px] border border-paper/10 bg-deep ring-1 ring-gold/0 group-hover:ring-gold/40 transition-all duration-300">
                  {img ? (
                    <>
                      <Image src={img} alt={c.title} fill sizes="(min-width: 768px) 50vw, 100vw"
                        className="object-cover object-top transition-transform duration-700 group-hover:scale-105" />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/15 to-transparent pointer-events-none" />
                    </>
                  ) : art ? (
                    <div className="absolute inset-0">{art}</div>
                  ) : (
                    <div className="absolute inset-0" style={{ background: `linear-gradient(135deg, #1C1814 0%, #0F0D0B 100%)` }} />
                  )}

                  {/* Index number. top-left */}
                  <div className="absolute top-5 left-5 italic text-paper/70 text-[18px] tracking-wider">0{i + 1}</div>

                  {/* Timeframe badge. top-right */}
                  <div className="absolute top-5 right-5 inline-flex items-center rounded-full bg-bg/85 backdrop-blur text-paper text-[11px] px-3 py-1.5 tracking-[0.16em] uppercase border border-paper/10">{c.timeframe}</div>

                  {/* Gold arrow signpost. bottom-right corner, animated on hover */}
                  <div className="absolute bottom-5 right-5 h-12 w-12 rounded-full bg-gold/95 text-bg inline-flex items-center justify-center text-[20px] font-light shadow-lg shadow-bg/40 transition-all duration-300 group-hover:scale-110 group-hover:bg-gold pointer-events-none">
                    <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><line x1="7" y1="17" x2="17" y2="7" /><polyline points="9 7 17 7 17 15" /></svg>
                  </div>

                  {img && (
                    <div className="absolute bottom-6 left-6 right-20">
                      <h3 className="text-[22px] md:text-[28px] tracking-[-0.01em] leading-tight text-paper font-light drop-shadow-[0_2px_8px_rgba(0,0,0,0.6)]">{c.title}</h3>
                    </div>
                  )}
                </div>
                <div className="pt-6">
                  <p className="text-[12px] uppercase tracking-[0.22em] text-muted">{c.eyebrow}</p>
                  {!img && (
                    <h3 className="mt-3 text-[22px] tracking-[-0.01em] text-paper font-light">{c.title}</h3>
                  )}
                  <div className="mt-4 inline-flex items-center gap-2 text-[13px] tracking-[0.14em] uppercase text-gold group-hover:text-paper transition-colors font-medium">
                    Read case file <span className="transition-transform duration-300 group-hover:translate-x-1.5" aria-hidden>→</span>
                  </div>
                </div>
              </Link>
            );
          })}
        </div>
      </div>
      <div className="container-page"><div className="h-px bg-gold/25" /></div>
    </section>
  );
}

function Federation() {
  const { items } = federationAdvisory;
  return (
    <section id="federation" className="scroll-mt-20 bg-bg">
      <div className="container-page py-24 md:py-32">
        <p className="eyebrow mb-5">Federation & advisory</p>
        <h2 className="text-display-s sm:text-display-m font-light leading-[1.05] max-w-[800px]">
          Trust at the<br/><em className="italic text-gold">federation tier.</em>
        </h2>
        <div className="mt-14 grid grid-cols-1 md:grid-cols-3 gap-px bg-hairline border border-hairline">
          {items.map((it) => (
            <article key={it.org} className="bg-panel p-7 sm:p-8 lift border-l-2 border-l-gold">
              <span className="text-[10px] tracking-[0.22em] uppercase text-gold">{it.tag}</span>
              <h3 className="mt-4 italic text-[22px] text-paper leading-tight font-normal">{it.org}</h3>
              <p className="mt-4 text-paper/80 text-[15px] leading-[1.65]">{it.body}</p>
            </article>
          ))}
        </div>
      </div>
      <div className="container-page"><div className="h-px bg-gold/25" /></div>
    </section>
  );
}

function Brands() {
  const featured = [
    { src: "/brands/sony.svg",   alt: "Sony" },
    { src: "/brands/nvidia.svg", alt: "NVIDIA" },
    { src: "/brands/asus.svg",   alt: "ASUS" },
    { src: "/brands/lenovo.svg", alt: "Lenovo" },
  ];
  return (
    <section id="brands" className="bg-bg">
      <div className="container-page py-16 md:py-24">
        <p className="eyebrow mb-10">Brands & partners</p>
        {/* BIG logo strip on a dark panel */}
        <div className="mb-14 panel p-10 md:p-16">
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-x-12 gap-y-10 items-center justify-items-center">
            {featured.map((l) => (
              <div key={l.alt} className="relative h-12 md:h-16 w-full max-w-[200px] opacity-80 hover:opacity-100 transition-opacity">
                <Image src={l.src} alt={l.alt} fill sizes="200px" className="object-contain" />
              </div>
            ))}
          </div>
        </div>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-5">
          {brandInvolvement.map((cat) => (
            <div key={cat.tier} className="panel border-l-2 border-l-gold p-6 sm:p-7">
              <span className="text-[10px] tracking-[0.22em] uppercase text-gold">{cat.tier}</span>
              <ul className="mt-5 flex flex-wrap gap-1.5">
                {cat.items.map((it) => (
                  <li key={it} className="text-[13px] border border-hairline text-paper px-2.5 py-1.5 hover:border-gold/60 hover:text-gold transition-colors">{it}</li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
      <div className="container-page"><div className="h-px bg-gold/25" /></div>
    </section>
  );
}

function HowIWork() {
  return (
    <section id="how" className="scroll-mt-20">
      <div className="container-page py-24 md:py-32">
        <p className="eyebrow mb-5">How I work</p>
        <h2 className="text-display-s sm:text-display-m font-light leading-[1.05] max-w-[860px]">
          Clarify. Build. <em className="italic text-gold">Ship.</em>
        </h2>
        <div className="mt-16 grid md:grid-cols-3 gap-12">
          {principles.map((s) => (
            <div key={s.n} className="relative pt-6">
              <div className="absolute top-0 left-0 h-px w-16 bg-gold" aria-hidden />
              <div className="italic text-[18px] text-gold mb-3">{s.n}</div>
              <h3 className="text-[28px] md:text-[34px] tracking-[-0.01em] leading-[1.1] font-light">{s.title}</h3>
            </div>
          ))}
        </div>
      </div>
      <div className="container-page"><div className="h-px bg-gold/25" /></div>
    </section>
  );
}

function Collaborate() {
  const { items, disclosure } = waysToCollaborate;
  return (
    <section id="collaborate" className="scroll-mt-20 bg-bg">
      <div className="container-page py-24 md:py-32">
        <p className="eyebrow mb-5">Ways to collaborate</p>
        <h2 className="text-display-s sm:text-display-m font-light leading-[1.05] max-w-[860px]">
          Four shapes.<br/><em className="italic text-gold">Full-time leads.</em>
        </h2>
        <div className="mt-14 grid grid-cols-1 md:grid-cols-2 gap-px bg-hairline border border-hairline">
          {items.map((it, i) => (
            <article key={it.label} className="bg-panel p-8 lift">
              <span className="text-[10px] tracking-[0.22em] uppercase text-gold">0{i+1} · {it.eyebrow}</span>
              <h3 className="mt-4 italic text-[26px] text-paper leading-tight font-normal">{it.label}</h3>
              <div className="mt-3 text-[12px] tracking-[0.18em] uppercase text-muted">{it.shape}</div>
            </article>
          ))}
        </div>
        <p className="mt-7 text-[13px] italic text-muted">{disclosure}</p>
      </div>
      <div className="container-page"><div className="h-px bg-gold/25" /></div>
    </section>
  );
}

function Contact() {
  return (
    <section id="contact" className="scroll-mt-20 bg-bg">
      <div className="container-page py-28 md:py-40">
        <p className="eyebrow mb-5">Contact</p>
        <h2 className="text-[44px] md:text-[80px] leading-[1.02] tracking-[-0.02em] max-w-[900px] font-light">
          Have a brief? <em className="italic text-gold">Email me directly.</em>
        </h2>
        <div className="mt-14">
          <a href={`mailto:${site.email}`} className="text-[32px] md:text-[56px] tracking-[-0.02em] underline-offset-[8px] decoration-[1px] decoration-gold/40 hover:decoration-gold hover:text-gold transition-colors italic font-light">
            {site.email}
          </a>
        </div>
        <div className="mt-14 flex flex-wrap gap-x-8 gap-y-3 text-[14px] text-muted">
          <a href={site.linkedin} className="hover:text-paper transition-colors">{site.linkedinDisplay}</a>
          <span>·</span>
          <span>Cairo, Egypt</span>
          <span>·</span>
          <span>Open to Riyadh / GCC / Remote / Global</span>
        </div>
      </div>
    </section>
  );
}

function Footer() {
  return (
    <footer className="border-t border-hairline">
      <div className="container-page py-12 flex flex-col md:flex-row items-start md:items-center justify-between gap-4">
        <p className="text-[14px] text-muted">© {new Date().getFullYear()} {site.name}</p>
        <p className="text-[14px] text-muted"><span className="italic">Designed and built by Koge</span> · Cormorant Garamond</p>
      </div>
    </footer>
  );
}
