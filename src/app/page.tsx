import Image from "next/image";
import Link from "next/link";
import {
  site, hero, proof, caseStudies, brandInvolvement, principles,
  waysToCollaborate, federationAdvisory, contactCtas, navLinks,
} from "@/content/site";

export default function Page() {
  return (
    <>
      <Nav />
      <main>
        <Hero />
        <TrustStrip />
        <SelectedWork />
        <FederationAdvisorySection />
        <BrandsSection />
        <HowIWorkSection />
        <WaysToCollaborateSection />
        <ContactSection />
      </main>
      <Footer />
    </>
  );
}

function Nav() {
  return (
    <header className="sticky top-0 z-50 bg-bg/85 backdrop-blur-md border-b border-hairline">
      <div className="container-page h-16 flex items-center justify-between">
        <Link href="/" className="text-[15px] font-medium tracking-tight font-sans">
          <span className="font-serif italic text-[18px] mr-1">A.</span>
          ElGazzawi
          <span className="text-dim mx-2">·</span>
          <span className="text-muted text-[13px]">Koge</span>
        </Link>
        <nav className="hidden md:flex items-center gap-7 text-[12px] font-mono uppercase tracking-[0.06em] text-muted">
          {navLinks.filter(l => !l.href.includes("competitive")).map((l) => (
            <a key={l.href} href={l.href} className="hover:text-paper transition-colors">{l.label}</a>
          ))}
          <a href={`mailto:${site.email}`} className="inline-flex items-center gap-1.5 rounded-full bg-paper text-bg px-4 py-2 text-[11px] font-medium tracking-[0.04em] hover:bg-gold transition-colors">
            EMAIL ME →
          </a>
        </nav>
      </div>
    </header>
  );
}

function Hero() {
  return (
    <section className="relative overflow-hidden">
      <div aria-hidden className="pointer-events-none absolute inset-0 opacity-[0.05] mix-blend-multiply"
        style={{ backgroundImage: "url(\"data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' width='280' height='280'><filter id='n'><feTurbulence type='fractalNoise' baseFrequency='0.85' numOctaves='2' stitchTiles='stitch'/></filter><rect width='100%' height='100%' filter='url(%23n)' opacity='0.85'/></svg>\")" }} />
      <div className="relative container-page pt-20 md:pt-40 pb-20 md:pb-32">
        <p className="eyebrow mb-10 md:mb-14">Commercial Partnerships  ·  Campaign Operations  ·  Sponsorship Delivery</p>
        <h1 className="font-serif text-[44px] md:text-[88px] leading-[1.02] tracking-[-0.02em] font-normal max-w-[1000px]">
          Commercial partnerships,<br/>campaign operations,<br/>and <em className="italic text-gold">sponsorship delivery</em>.
        </h1>
        <p className="mt-10 md:mt-14 max-w-[640px] text-[16px] md:text-[19px] leading-[1.6] text-muted font-normal">
          I help brands, agencies, teams, and entertainment businesses turn commercial ideas into priced, packaged, and delivered campaigns — from proposals and rights packaging to partner coordination, workflow systems, and proof of delivery.
        </p>
        <div className="mt-10 md:mt-14 flex flex-wrap gap-3">
          <a href={`mailto:${site.email}`} className="inline-flex items-center gap-2 rounded-full bg-paper text-bg px-5 py-3 text-[13px] font-mono font-medium tracking-[0.04em] uppercase hover:bg-gold transition-colors">EMAIL ME</a>
          <a href="#work" className="inline-flex items-center gap-2 rounded-full border border-paper/15 px-5 py-3 text-[13px] font-mono font-medium tracking-[0.04em] uppercase text-paper hover:border-paper hover:bg-paper/[0.03] transition-colors">SELECTED WORK</a>
          <a href="#collaborate" className="inline-flex items-center gap-2 rounded-full border border-paper/15 px-5 py-3 text-[13px] font-mono font-medium tracking-[0.04em] uppercase text-paper hover:border-paper hover:bg-paper/[0.03] transition-colors">WAYS TO COLLABORATE</a>
        </div>
        <div className="mt-14 md:mt-20 flex items-center gap-3 text-[13px] text-muted font-mono">
          <span className="inline-block h-1.5 w-1.5 rounded-full bg-gold" aria-hidden />
          Based in Cairo, Egypt  ·  Open to Riyadh, GCC, Remote, and Global opportunities
        </div>
      </div>
      <div className="container-page"><div className="h-px bg-gold/15" /></div>
    </section>
  );
}

function TrustStrip() {
  return (
    <section className="bg-bg">
      <div className="container-page py-16 md:py-20">
        <p className="eyebrow mb-10">// Selected proof</p>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-y-12 gap-x-8">
          {proof.map((m) => (
            <div key={m.l}>
              <div className="font-serif text-[40px] md:text-[52px] leading-none tracking-[-0.02em] text-paper tab-nums">{m.n}</div>
              <div className="mt-3 text-[13px] font-medium text-paper leading-snug">{m.l}</div>
            </div>
          ))}
        </div>
        <p className="mt-12 md:mt-14 text-[13px] md:text-[14px] text-muted leading-snug font-mono">
          // Across 8+ industries · gaming · esports · sports · telecom · hardware · publishers · federations · entertainment
        </p>
      </div>
      <div className="container-page"><div className="h-px bg-gold/15" /></div>
    </section>
  );
}

function SelectedWork() {
  return (
    <section id="case-studies" className="scroll-mt-20">
      <div className="container-page pt-24 md:pt-32 pb-10 md:pb-14">
        <div className="flex items-end justify-between flex-wrap gap-6">
          <div>
            <p className="eyebrow mb-5">// Selected work</p>
            <h2 className="font-serif text-display-s sm:text-display-m leading-[1.05] max-w-[760px]">
              Live campaigns, shipped systems,<br /><em className="italic text-gold">and partnerships that closed</em>.
            </h2>
          </div>
          <p className="text-[13px] text-muted max-w-[280px] font-mono">// {caseStudies.length} flagship engagements. Each opens a full case file.</p>
        </div>
      </div>
      <div className="container-page pb-16 md:pb-24">
        <div className="grid md:grid-cols-2 gap-6 md:gap-10">
          {caseStudies.map((c, i) => (
            <Link key={c.slug} href={`/case-studies/${c.slug}`} className="group block relative">
              <div className="relative aspect-[16/10] overflow-hidden rounded-[14px] border border-paper/10 bg-gold">
                <div className="absolute inset-0" style={{ background: `linear-gradient(135deg, #0B2340 0%, #14305C 55%, #1A1F2E 100%)` }} aria-hidden />
                <div className="absolute inset-0 bg-gradient-to-t from-black/45 via-black/0 to-black/0 pointer-events-none" aria-hidden />
                <div className="absolute top-5 left-5 font-serif italic text-bg/85 text-[18px]">0{i + 1}</div>
                <div className="absolute top-5 right-5 inline-flex items-center gap-2 rounded-full bg-bg/95 text-paper text-[10px] font-mono font-medium px-3 py-1.5 tracking-[0.08em] uppercase">{c.timeframe}</div>
                <div className="absolute bottom-6 left-6 right-6">
                  <h3 className="font-serif text-[22px] md:text-[30px] tracking-[-0.01em] leading-tight text-bg">{c.title}</h3>
                </div>
              </div>
              <div className="pt-6 md:pt-8">
                <p className="eyebrow">{c.eyebrow}</p>
                <p className="mt-4 text-[15px] text-paper/80 leading-[1.65] max-w-[560px]">{c.outcome}</p>
                <div className="mt-5 flex flex-wrap gap-2">
                  {c.tags.map((t) => (
                    <span key={t} className="inline-flex items-center rounded-full border border-paper/12 px-3 py-1 text-[11px] text-muted tracking-wide font-mono">{t}</span>
                  ))}
                </div>
                <div className="mt-6 inline-flex items-center gap-1.5 text-[12px] font-mono font-medium uppercase tracking-[0.08em] text-paper group-hover:text-gold transition-colors">
                  READ CASE FILE <span className="transition-transform group-hover:translate-x-1" aria-hidden>→</span>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>
      <div className="container-page"><div className="h-px bg-gold/15" /></div>
    </section>
  );
}

function FederationAdvisorySection() {
  const { intro, items } = federationAdvisory;
  return (
    <section id="federation" className="scroll-mt-20 bg-bg">
      <div className="container-page py-24 md:py-32">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-16 items-end mb-12">
          <div className="lg:col-span-8">
            <p className="eyebrow">// Federation & advisory</p>
            <h2 className="mt-4 font-serif text-display-s sm:text-display-m leading-[1.05]">
              Trust at the<br /><span className="text-gold italic">federation tier.</span>
            </h2>
          </div>
          <div className="lg:col-span-4"><p className="text-muted text-[14px] sm:text-[15px] leading-[1.7]">{intro}</p></div>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-px bg-hairline border border-hairline">
          {items.map((it) => (
            <article key={it.org} className="bg-panel p-7 sm:p-8 lift border-l-2 border-l-gold">
              <div className="flex items-center gap-2.5 mb-4">
                <span className="w-1.5 h-1.5 rounded-full bg-gold" aria-hidden />
                <span className="text-[10px] font-mono tracking-[0.18em] uppercase text-gold">{it.tag}</span>
              </div>
              <h3 className="font-serif italic text-[22px] text-paper leading-tight">{it.org}</h3>
              <div className="mt-1.5 text-[12px] font-mono text-muted">{it.role}</div>
              <p className="mt-5 text-paper/85 text-[14px] leading-[1.65]">{it.body}</p>
              <div className="mt-6 pt-4 border-t border-hairline text-[11px] font-mono text-muted leading-[1.5]">{it.meta}</div>
            </article>
          ))}
        </div>
        <p className="mt-7 text-[12px] font-mono text-muted">// Federation engagements named with permission. Client identities and consultation content remain confidential.</p>
      </div>
      <div className="container-page"><div className="h-px bg-gold/15" /></div>
    </section>
  );
}

function BrandsSection() {
  const featured = [
    { src: "/brands/sony.svg",   alt: "Sony" },
    { src: "/brands/nvidia.svg", alt: "NVIDIA" },
    { src: "/brands/asus.svg",   alt: "ASUS" },
    { src: "/brands/lenovo.svg", alt: "Lenovo" },
  ];
  return (
    <section id="brands" className="bg-bg">
      <div className="container-page py-16 md:py-20">
        <p className="eyebrow mb-8">// Brands & partners</p>
        <div className="mb-10 sm:mb-12 border-y border-hairline">
          <div className="py-7 sm:py-9 grid grid-cols-2 sm:grid-cols-4 gap-x-8 sm:gap-x-12 gap-y-6 items-center">
            {featured.map((l) => (
              <div key={l.alt} className="relative h-7 sm:h-8 opacity-60 hover:opacity-100 transition-opacity duration-300">
                <Image src={l.src} alt={l.alt} fill sizes="(min-width: 640px) 200px, 50vw" className="object-contain object-left" style={{ filter: "invert(1) brightness(0.15)" }} />
              </div>
            ))}
          </div>
        </div>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-5">
          {brandInvolvement.map((cat) => (
            <div key={cat.tier} className="panel border-l-2 border-l-gold p-6 sm:p-7">
              <div className="flex items-center gap-2.5 mb-5">
                <span className="w-1.5 h-1.5 rounded-full bg-gold" aria-hidden />
                <span className="text-[10px] font-mono tracking-[0.18em] uppercase text-gold">{cat.tier}</span>
              </div>
              <ul className="flex flex-wrap gap-1.5">
                {cat.items.map((item) => (
                  <li key={item} className="text-[12px] sm:text-[13px] font-mono border border-hairline text-paper px-2.5 py-1.5 hover:border-gold/60 transition-colors">{item}</li>
                ))}
              </ul>
            </div>
          ))}
        </div>
        <p className="mt-6 text-[12px] font-mono text-muted tracking-[0.04em]">// Brand names referenced as past involvement only. Logo marks shown only where official asset usage is publicly permitted.</p>
      </div>
      <div className="container-page"><div className="h-px bg-gold/15" /></div>
    </section>
  );
}

function HowIWorkSection() {
  return (
    <section id="how" className="scroll-mt-20">
      <div className="container-page py-24 md:py-32">
        <p className="eyebrow mb-5">// How I work</p>
        <h2 className="font-serif text-display-s sm:text-display-m leading-[1.05] max-w-[860px]">
          Clarify the commercial question. Build the operating system. <em className="italic text-gold">Ship.</em>
        </h2>
        <div className="mt-16 md:mt-20 grid md:grid-cols-3 gap-12 md:gap-14">
          {principles.map((s) => (
            <div key={s.n} className="relative pt-6">
              <div className="absolute top-0 left-0 h-px w-16 bg-gold" aria-hidden />
              <div className="font-serif italic text-[20px] text-gold mb-3">{s.n}</div>
              <h3 className="font-serif text-[26px] md:text-[32px] tracking-[-0.01em] leading-[1.1]">{s.title}</h3>
              <p className="mt-4 text-[15px] md:text-[16px] leading-[1.7] text-muted">{s.body}</p>
            </div>
          ))}
        </div>
      </div>
      <div className="container-page"><div className="h-px bg-gold/15" /></div>
    </section>
  );
}

function WaysToCollaborateSection() {
  const { intro, items, disclosure } = waysToCollaborate;
  return (
    <section id="collaborate" className="scroll-mt-20 bg-bg">
      <div className="container-page py-24 md:py-32">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-16 items-end mb-12">
          <div className="lg:col-span-8">
            <p className="eyebrow">// Ways to collaborate</p>
            <h2 className="mt-4 font-serif text-display-s sm:text-display-m leading-[1.05]">
              Four shapes of engagement.<br /><span className="text-gold italic">Full-time leads.</span>
            </h2>
          </div>
          <div className="lg:col-span-4"><p className="text-muted text-[14px] sm:text-[15px] leading-[1.7]">{intro}</p></div>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-px bg-hairline border border-hairline">
          {items.map((it, i) => (
            <article key={it.label} className="bg-panel p-7 sm:p-8 lift">
              <div className="flex items-center justify-between gap-4 mb-4">
                <span className="font-mono text-[10px] tracking-[0.18em] uppercase text-gold">{`0${i + 1}  ·  ${it.eyebrow}`}</span>
              </div>
              <h3 className="font-serif italic text-[22px] text-paper leading-tight">{it.label}</h3>
              <div className="mt-3 text-[11px] font-mono tracking-[0.14em] uppercase text-muted">{it.shape}</div>
              <p className="mt-5 text-paper/85 text-[14px] leading-[1.65]">{it.body}</p>
            </article>
          ))}
        </div>
        <p className="mt-7 text-[12px] font-mono text-muted leading-[1.5]">// {disclosure}</p>
      </div>
      <div className="container-page"><div className="h-px bg-gold/15" /></div>
    </section>
  );
}

function ContactSection() {
  return (
    <section id="contact" className="scroll-mt-20 bg-bg">
      <div className="container-page py-28 md:py-40">
        <p className="eyebrow mb-5">// Contact</p>
        <h2 className="font-serif text-[40px] md:text-[72px] leading-[1.02] tracking-[-0.02em] max-w-[900px]">
          Have a brief, a partnership, or a role to fill? <em className="italic text-gold">Email me directly.</em>
        </h2>
        <div className="mt-14 md:mt-16">
          <p className="eyebrow mb-4">// Email</p>
          <a href={`mailto:${site.email}`}
            className="font-serif text-[28px] md:text-[48px] tracking-[-0.02em] underline-offset-[6px] decoration-[1px] decoration-gold/30 hover:decoration-gold hover:text-gold transition-colors">
            {site.email}
          </a>
        </div>
        <div className="mt-12 grid grid-cols-1 md:grid-cols-3 gap-4">
          {contactCtas.map((c) => (
            <a key={c.audience} href={`mailto:${site.email}?subject=${encodeURIComponent(c.subject)}`}
              className="panel lift p-6 sm:p-7 group block">
              <div className="text-[10px] font-mono text-gold tracking-[0.18em] uppercase">{c.audience}</div>
              <h3 className="mt-3 font-serif italic text-[20px] text-paper leading-tight">{c.q}</h3>
              <p className="mt-3 text-muted text-[13px] leading-[1.6]">{c.body}</p>
              <div className="mt-6 text-[11px] font-mono tracking-[0.14em] uppercase text-gold group-hover:translate-x-0.5 transition-transform inline-flex items-center gap-2">
                EMAIL ME DIRECTLY →
              </div>
            </a>
          ))}
        </div>
        <div className="mt-10 flex flex-wrap items-center gap-x-8 gap-y-4 text-[13px] font-mono">
          <a href={`mailto:${site.email}`} className="text-paper hover:text-gold transition-colors">{site.email}</a>
          <span className="text-muted">·</span>
          <a href={site.linkedin} className="text-paper hover:text-gold transition-colors">{site.linkedinDisplay}</a>
          <span className="text-muted">·</span>
          <Link href="/contact" className="text-paper hover:text-gold transition-colors">/contact (form)</Link>
        </div>
      </div>
    </section>
  );
}

function Footer() {
  return (
    <footer className="border-t border-hairline">
      <div className="container-page py-12 flex flex-col md:flex-row items-start md:items-center justify-between gap-4">
        <p className="text-[13px] text-muted">© {new Date().getFullYear()} {site.name}.  ·  All rights reserved.</p>
        <p className="text-[13px] text-muted">
          <span className="font-serif italic">Designed and built by Koge.</span>
          <span className="mx-2 text-dim">·</span>
          Instrument Serif &amp; Inter.
        </p>
      </div>
    </footer>
  );
}
