import Image from "next/image";
import Link from "next/link";
import { site, hero, proof, caseStudies, brandInvolvement, principles, waysToCollaborate, federationAdvisory, navLinks } from "@/content/site";

const caseHeroImages: Record<string, string> = {
  "esports-world-cup":              "/work/esports-world-cup.jpg",
  "true-gaming-leap":               "/work/true-gaming-leap.jpg",
  "telecom-egypt-raad":             "/work/telecom-egypt-raad.jpg",
  "sony-inzone-team-falcons":       "/work/sony-inzone-team-falcons.jpg",
  "team-falcons-commercial-stack":  "/work/team-falcons-commercial-stack.jpg",
};

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
    <header className="sticky top-0 z-50 bg-bg/80 backdrop-blur-md border-b border-hairline">
      <div className="container-page h-16 flex items-center justify-between">
        <Link href="/" className="text-[15px] font-medium tracking-tight">
          <span className="font-serif italic text-[18px] mr-1">A.</span>ElGazzawi
          <span className="text-dim mx-2">·</span><span className="text-muted text-[13px] font-light">Koge</span>
        </Link>
        <nav className="hidden md:flex items-center gap-8 text-[13px] text-muted font-light">
          {navLinks.filter(l => !l.href.includes("competitive") && !l.href.includes("methodology") && !l.href.includes("tiers")).map((l) => (
            <a key={l.href} href={l.href} className="hover:text-paper transition-colors">{l.label}</a>
          ))}
          <a href={`mailto:${site.email}`} className="inline-flex items-center gap-1.5 rounded-full bg-paper text-bg px-4 py-2 text-[12px] font-medium tracking-wide hover:bg-gold transition-colors">Email me →</a>
        </nav>
      </div>
    </header>
  );
}

function Hero() {
  return (
    <section className="relative overflow-hidden">
      <div aria-hidden className="pointer-events-none absolute inset-0 opacity-[0.04] mix-blend-multiply"
        style={{ backgroundImage: "url(\"data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' width='280' height='280'><filter id='n'><feTurbulence type='fractalNoise' baseFrequency='0.85' numOctaves='2' stitchTiles='stitch'/></filter><rect width='100%' height='100%' filter='url(%23n)' opacity='0.85'/></svg>\")" }} />
      <div className="relative container-page pt-24 md:pt-44 pb-24 md:pb-36">
        <p className="eyebrow mb-10 md:mb-16">Commercial Partnerships  ·  Campaign Operations  ·  MENA</p>
        <h1 className="font-serif text-[52px] md:text-[112px] leading-[1.0] tracking-[-0.025em] font-normal max-w-[1100px]">
          Sponsorship.<br/>Activation.<br/><em className="italic text-gold">Delivered.</em>
        </h1>
        <div className="mt-12 md:mt-16 flex flex-wrap gap-3">
          <a href={`mailto:${site.email}`} className="inline-flex items-center gap-2 rounded-full bg-paper text-bg px-6 py-3.5 text-[13px] font-medium tracking-wide hover:bg-gold transition-colors">Email me</a>
          <a href="#work" className="inline-flex items-center gap-2 rounded-full border border-paper/15 px-6 py-3.5 text-[13px] font-medium tracking-wide text-paper hover:border-paper hover:bg-paper/[0.03] transition-colors">Selected work</a>
        </div>
        <div className="mt-16 md:mt-24 flex items-center gap-3 text-[13px] text-muted font-light">
          <span className="inline-block h-1.5 w-1.5 rounded-full bg-gold" aria-hidden />
          Cairo · Open to Riyadh, GCC, Remote, Global
        </div>
      </div>
      <div className="container-page"><div className="h-px bg-gold/15" /></div>
    </section>
  );
}

function TrustStrip() {
  const showFirst = proof.slice(0, 4);
  return (
    <section className="bg-bg">
      <div className="container-page py-20 md:py-24">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-y-14 gap-x-8">
          {showFirst.map((m) => (
            <div key={m.l}>
              <div className="font-serif text-[44px] md:text-[64px] leading-none tracking-[-0.025em] text-paper tab-nums">{m.n}</div>
              <div className="mt-4 text-[13px] font-light text-muted leading-snug max-w-[200px]">{m.l}</div>
            </div>
          ))}
        </div>
      </div>
      <div className="container-page"><div className="h-px bg-gold/15" /></div>
    </section>
  );
}

function SelectedWork() {
  return (
    <section id="case-studies" className="scroll-mt-20">
      <div className="container-page pt-28 md:pt-36 pb-12">
        <p className="eyebrow mb-6">Selected Work</p>
        <h2 className="font-serif text-display-m sm:text-display-l leading-[1.0] max-w-[800px]">
          Campaigns that <em className="italic text-gold">closed</em>.
        </h2>
      </div>
      <div className="container-page pb-20 md:pb-32">
        <div className="grid md:grid-cols-2 gap-8 md:gap-12">
          {caseStudies.map((c, i) => {
            const heroSrc = caseHeroImages[c.slug];
            return (
              <Link key={c.slug} href={`/case-studies/${c.slug}`} className="group block relative">
                <div className="relative aspect-[16/10] overflow-hidden rounded-[14px] border border-paper/10 bg-gold">
                  <div className="absolute inset-0" style={{ background: `linear-gradient(135deg, #0B2340 0%, #14305C 55%, #1A1F2E 100%)` }} aria-hidden />
                  {heroSrc && (
                    <Image src={heroSrc} alt={c.title} fill sizes="(min-width: 768px) 50vw, 100vw" className="object-cover transition-transform duration-[900ms] ease-out group-hover:scale-[1.04]" />
                  )}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/55 via-black/0 to-black/0 pointer-events-none" aria-hidden />
                  <div className="absolute top-5 left-5 font-serif italic text-bg/85 text-[18px]">0{i + 1}</div>
                  <div className="absolute bottom-6 left-6 right-6">
                    <h3 className="font-serif text-[24px] md:text-[32px] tracking-[-0.015em] leading-tight text-bg">{c.title}</h3>
                    <p className="mt-2 text-[12px] text-bg/70 font-light tracking-wide">{c.timeframe}</p>
                  </div>
                </div>
              </Link>
            );
          })}
        </div>
      </div>
      <div className="container-page"><div className="h-px bg-gold/15" /></div>
    </section>
  );
}

function FederationAdvisorySection() {
  const { items } = federationAdvisory;
  return (
    <section id="federation" className="scroll-mt-20 bg-bg">
      <div className="container-page py-24 md:py-32">
        <p className="eyebrow mb-6">Advisory</p>
        <h2 className="font-serif text-display-s sm:text-display-m leading-[1.05]">
          Trust at the<br /><span className="text-gold italic">federation tier.</span>
        </h2>
        <div className="mt-14 grid grid-cols-1 md:grid-cols-3 gap-px bg-hairline border border-hairline">
          {items.map((it) => (
            <article key={it.org} className="bg-panel p-8 lift">
              <h3 className="font-serif italic text-[22px] text-paper leading-tight">{it.org}</h3>
              <div className="mt-2 text-[12px] text-muted font-light">{it.role}</div>
              <p className="mt-6 text-paper/80 text-[14px] leading-[1.65] font-light">{it.body}</p>
            </article>
          ))}
        </div>
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
      <div className="container-page py-20 md:py-24">
        <p className="eyebrow mb-10">Brands</p>
        <div className="border-y border-hairline">
          <div className="py-10 grid grid-cols-2 sm:grid-cols-4 gap-x-12 gap-y-8 items-center">
            {featured.map((l) => (
              <div key={l.alt} className="relative h-8 opacity-60 hover:opacity-100 transition-opacity duration-300">
                <Image src={l.src} alt={l.alt} fill sizes="(min-width: 640px) 200px, 50vw" className="object-contain object-left" />
              </div>
            ))}
          </div>
        </div>
        <div className="mt-12 grid grid-cols-1 lg:grid-cols-2 gap-6">
          {brandInvolvement.map((cat) => (
            <div key={cat.tier} className="panel border-l-2 border-l-gold p-7">
              <span className="text-[10px] uppercase tracking-[0.22em] text-gold font-medium">{cat.tier}</span>
              <ul className="mt-5 flex flex-wrap gap-1.5">
                {cat.items.map((item) => (
                  <li key={item} className="text-[13px] font-light border border-hairline text-paper px-3 py-1.5 hover:border-gold/60 transition-colors">{item}</li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
      <div className="container-page"><div className="h-px bg-gold/15" /></div>
    </section>
  );
}

function HowIWorkSection() {
  return (
    <section id="how" className="scroll-mt-20">
      <div className="container-page py-24 md:py-32">
        <p className="eyebrow mb-6">How I work</p>
        <h2 className="font-serif text-display-s sm:text-display-m leading-[1.05] max-w-[800px]">
          Clarify. Build. <em className="italic text-gold">Ship.</em>
        </h2>
        <div className="mt-16 grid md:grid-cols-3 gap-12">
          {principles.map((s) => (
            <div key={s.n} className="relative pt-6">
              <div className="absolute top-0 left-0 h-px w-16 bg-gold" aria-hidden />
              <div className="font-serif italic text-[18px] text-gold mb-3">{s.n}</div>
              <h3 className="font-serif text-[26px] md:text-[30px] tracking-[-0.01em] leading-[1.1]">{s.title}</h3>
            </div>
          ))}
        </div>
      </div>
      <div className="container-page"><div className="h-px bg-gold/15" /></div>
    </section>
  );
}

function WaysToCollaborateSection() {
  const { items, disclosure } = waysToCollaborate;
  return (
    <section id="collaborate" className="scroll-mt-20 bg-bg">
      <div className="container-page py-24 md:py-32">
        <p className="eyebrow mb-6">Ways to Collaborate</p>
        <h2 className="font-serif text-display-s sm:text-display-m leading-[1.05]">
          Four shapes.<br /><span className="text-gold italic">Full-time leads.</span>
        </h2>
        <div className="mt-14 grid grid-cols-1 md:grid-cols-2 gap-px bg-hairline border border-hairline">
          {items.map((it, i) => (
            <article key={it.label} className="bg-panel p-8 lift">
              <span className="text-[10px] uppercase tracking-[0.22em] text-gold font-medium">{`0${i + 1}  ·  ${it.eyebrow}`}</span>
              <h3 className="mt-4 font-serif italic text-[24px] text-paper leading-tight">{it.label}</h3>
              <div className="mt-3 text-[12px] uppercase tracking-[0.18em] text-muted font-light">{it.shape}</div>
            </article>
          ))}
        </div>
        <p className="mt-8 text-[13px] text-muted font-light italic max-w-[680px]">{disclosure}</p>
      </div>
      <div className="container-page"><div className="h-px bg-gold/15" /></div>
    </section>
  );
}

function ContactSection() {
  return (
    <section id="contact" className="scroll-mt-20 bg-bg">
      <div className="container-page py-28 md:py-40">
        <p className="eyebrow mb-6">Contact</p>
        <h2 className="font-serif text-[44px] md:text-[88px] leading-[1.0] tracking-[-0.025em] max-w-[1000px]">
          Email me <em className="italic text-gold">directly.</em>
        </h2>
        <div className="mt-14">
          <a href={`mailto:${site.email}`} className="font-serif text-[28px] md:text-[56px] tracking-[-0.025em] underline-offset-[8px] decoration-[1px] decoration-gold/30 hover:decoration-gold hover:text-gold transition-colors">{site.email}</a>
        </div>
        <div className="mt-10 flex flex-wrap items-center gap-x-8 gap-y-3 text-[14px] font-light">
          <a href={site.linkedin} className="text-paper hover:text-gold transition-colors">{site.linkedinDisplay}</a>
          <span className="text-dim">·</span>
          <Link href="/contact" className="text-paper hover:text-gold transition-colors">Form</Link>
        </div>
      </div>
    </section>
  );
}

function Footer() {
  return (
    <footer className="border-t border-hairline">
      <div className="container-page py-12 flex flex-col md:flex-row items-start md:items-center justify-between gap-4">
        <p className="text-[13px] text-muted font-light">© {new Date().getFullYear()} {site.name}.</p>
        <p className="text-[13px] text-muted font-light"><span className="font-serif italic">By Koge.</span><span className="mx-2 text-dim">·</span>Instrument Serif &amp; Inter.</p>
      </div>
    </footer>
  );
}
