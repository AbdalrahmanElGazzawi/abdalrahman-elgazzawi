import Image from "next/image";
import Link from "next/link";
import {
  site, caseStudies, brandInvolvement, principles,
  waysToCollaborate, federationAdvisory,
} from "@/content/site";

// Hero images per case-study slug. inlined for build resilience.
// Drop more files at /public/work/<slug>.jpg as you have them.
const heroImages: Record<string, string | undefined> = {
  "esports-world-cup":              "/work/esports-world-cup.jpg",
  "true-gaming-leap":               "/work/true-gaming-leap.jpg",
  "telecom-egypt-raad":             "/work/telecom-egypt-raad.jpg",
  "sony-inzone-team-falcons":       "/work/sony-inzone-team-falcons.jpg",
  "team-falcons-commercial-stack":  "/photos/falcons-keynote.jpg",
  "falcons-pricing-os":             "/photos/falcons-keynote.jpg",
  "glg-advisory":                   "/photos/glg-card.jpg",
};
// CaseArtwork imports removed: every case now has a real photo via heroImages.
import { LiveCampaigns } from "@/components/LiveCampaigns";
import { Moments } from "@/components/Moments";

const caseArt: Record<string, React.ReactNode | undefined> = {};

// Real, sourced metrics (Path Forward proof-of-value + CVs). Safe to publish.
const ledger = [
  { n: "12",    l: "Partner pipeline progressed at Falcons" },
  { n: "7-fig", l: "Partnership opportunity advanced to contract stage" },
  { n: "778+",  l: "EWC commercial deliverables shipped" },
  { n: "5M+",   l: "Viewers reached across EWC campaigns" },
  { n: "78+",   l: "Brands pitched across 5 agencies" },
  { n: "6",     l: "New clients onboarded at True Gaming" },
  { n: "147",   l: "Contacts captured at LEAP Expo" },
  { n: "50+",   l: "Gamers8 proposals reviewed at Vanguard" },
];

const foundation = [
  {
    ix: "01 — Pricing methodology",
    title: "Pricing Engine v8 & Creator Rate Card v3",
    body: "Talent-tier × deliverable × territory × authority multipliers — a bilingual, talent-tiered rate card engineered to price at a premium to Western benchmarks through cultural-access and audience-overlap math.",
    tags: ["Pricing Engine v8", "Rate Card v3", "EN / AR"],
  },
  {
    ix: "02 — Framework architecture",
    title: "Agency Framework v5 — 91 pages",
    body: "A multi-phase brand investment model with governance, rights packaging, and KSA-compliant engagement terms — paired with a 21-page Agency Engagement Agreement and Sponsorship OS onboarding architecture.",
    tags: ["91-pp framework", "Governance", "Rights packaging"],
  },
  {
    ix: "03 — Pipeline & outreach",
    title: "Master Hub & Lead Tracker v2",
    body: "A bilingual command center running a 12-deal pipeline with 27 logged meetings on a weekly cadence — governed by RACI v4 and an SLA operating model, advancing a seven-figure partnership opportunity to contract stage.",
    tags: ["12-deal pipeline", "RACI v4", "EN / AR"],
  },
  {
    ix: "04 — Shipped product",
    title: "Falcons Pricing OS — live in production",
    body: "A Next.js + Supabase + Vercel internal app covering the full quote lifecycle — roster, builder, client portal, sales log, and admin — deployed to production with role-based permissions.",
    tags: ["Next.js", "Supabase", "Production"],
  },
];

export default function Page() {
  return (
    <>
      <Nav />
      <main>
        <Hero />
        <Ledger />
        <SelectedWork />
        <Artifacts />
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
        <Link href="/" className="text-[16px] font-semibold tracking-tight text-paper">
          Abdalrahman <span className="text-gold">ElGazzawi</span>
        </Link>
        <nav className="hidden md:flex items-center gap-8 text-[14px] tracking-wide text-muted">
          <a href="#foundation" className="hover:text-paper transition-colors">What I build</a>
          <a href="#work" className="hover:text-paper transition-colors">Work</a>
          <a href="#campaigns" className="hover:text-paper transition-colors">Campaigns</a>
          <a href={`mailto:${site.email}`} className="inline-flex items-center rounded-full bg-gold text-panel px-5 py-2 text-[13px] tracking-wide hover:bg-accent-soft transition-colors">Email me</a>
        </nav>
      </div>
    </header>
  );
}

function Hero() {
  return (
    <section className="relative overflow-hidden bg-bg">
      <div aria-hidden className="absolute inset-0 pointer-events-none grid-bg opacity-40" />
      <div className="relative container-page pt-20 md:pt-28 pb-16 md:pb-20">
        <div className="mb-10 flex items-center gap-4">
          <div className="relative h-14 w-14 sm:h-16 sm:w-16 overflow-hidden rounded-full ring-1 ring-hairline shrink-0">
            <Image src="/photos/portrait.jpg" alt="Abdalrahman ElGazzawi" fill priority sizes="64px" className="object-cover" />
          </div>
          <div>
            <div className="text-[14px] sm:text-[15px] text-paper font-medium">Abdalrahman ElGazzawi</div>
            <p className="text-[13px] text-muted mt-0.5">Commercial Partnerships · MENA · Cairo / Riyadh</p>
          </div>
        </div>
        <h1 className="font-serif text-[42px] sm:text-[60px] md:text-[80px] leading-[1.02] tracking-[-0.022em] font-normal max-w-[15ch] text-paper">
          Writes the methodology. Ships the product. <em className="italic text-gold">Closes the deal.</em>
        </h1>
        <p className="mt-8 max-w-[640px] text-[16px] md:text-[18px] text-muted leading-[1.6]">
          A hybrid commercial operator. I build the pricing, packaging, and campaign systems behind partnerships — then close on them. Recent work with Aramco, PepsiCo, Sony, NVIDIA, Adidas, and Mastercard.
        </p>
        <div className="mt-10 flex flex-wrap gap-3">
          <a href={`mailto:${site.email}`} className="inline-flex items-center rounded-full bg-gold text-panel px-7 py-3 text-[14px] font-medium tracking-wide hover:bg-accent-soft transition-colors">Email me</a>
          <a href="#foundation" className="inline-flex items-center rounded-full border border-hairline text-paper bg-panel px-7 py-3 text-[14px] font-medium tracking-wide hover:border-gold hover:text-gold transition-colors">What I build</a>
          <a href="#work" className="inline-flex items-center rounded-full border border-hairline text-paper bg-panel px-7 py-3 text-[14px] font-medium tracking-wide hover:border-gold hover:text-gold transition-colors">Selected work</a>
        </div>
      </div>
    </section>
  );
}

function Ledger() {
  return (
    <section className="bg-bg border-t border-hairline">
      <div className="container-page">
        <div className="grid grid-cols-2 md:grid-cols-4">
          {ledger.map((m, i) => (
            <div key={m.l} className={`py-7 md:py-8 px-1 md:px-5 border-hairline ${i % 4 !== 3 ? "md:border-r" : ""} ${i % 2 === 0 ? "border-r md:border-r" : ""} ${i < ledger.length - (ledger.length % 4 || 4) ? "border-b" : "border-b md:border-b-0"}`}>
              <div className="font-mono text-[26px] md:text-[32px] leading-none tracking-[-0.01em] tab-nums text-gold">{m.n}</div>
              <div className="mt-3 text-[12.5px] text-muted leading-snug max-w-[20ch]">{m.l}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}


function SelectedWork() {
  return (
    <section id="work" className="scroll-mt-20">
      <div className="container-page pt-24 md:pt-32 pb-12">
        <p className="eyebrow mb-5">Selected work</p>
        <h2 className="font-serif text-[34px] sm:text-[48px] md:text-[56px] max-w-[760px] font-normal leading-[1.05] tracking-[-0.015em] text-paper">
          Live campaigns. Real partners. <em className="italic font-normal text-gold">Work that shipped.</em>
        </h2>
      </div>
      <div className="container-page pb-24">
        <div className="grid md:grid-cols-2 gap-6 md:gap-10">
          {caseStudies.map((c, i) => {
            const img = heroImages?.[c.slug];
            const art = caseArt[c.slug];
            return (
              <Link key={c.slug} href={`/case-studies/${c.slug}`} className="group block">
                <div className="relative aspect-[16/10] overflow-hidden rounded-[10px] border border-hairline bg-panel transition-all duration-300 group-hover:border-gold/70 group-hover:shadow-[0_18px_50px_-30px_rgba(10,31,61,0.35)]">
                  {img ? (
                    <Image src={img} alt={c.title} fill sizes="(min-width: 768px) 50vw, 100vw"
                      className="object-cover object-top transition-transform duration-700 group-hover:scale-[1.03]" />
                  ) : art ? (
                    <div className="absolute inset-0">{art}</div>
                  ) : (
                    <div className="absolute inset-0 bg-deep" />
                  )}
                  <div className="absolute top-4 left-5 italic text-[16px] tracking-wider text-paper/55 mix-blend-multiply">0{i + 1}</div>
                  <div className="absolute top-4 right-5 inline-flex items-center rounded-full bg-panel/95 backdrop-blur text-paper text-[10px] px-3 py-1.5 tracking-[0.16em] uppercase border border-hairline shadow-sm">{c.timeframe}</div>
                  <div className="absolute bottom-4 right-4 h-10 w-10 rounded-full bg-gold text-panel inline-flex items-center justify-center opacity-0 translate-y-1 group-hover:opacity-100 group-hover:translate-y-0 transition-all duration-300 pointer-events-none shadow-md">
                    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><line x1="7" y1="17" x2="17" y2="7" /><polyline points="9 7 17 7 17 15" /></svg>
                  </div>
                </div>
                <div className="pt-5">
                  <p className="text-[11px] uppercase tracking-[0.22em] text-muted">{c.eyebrow}</p>
                  <h3 className="mt-3 font-serif text-[20px] md:text-[24px] tracking-[-0.005em] leading-snug text-paper font-normal">{c.title}</h3>
                  <div className="mt-4 inline-flex items-center gap-2 text-[12px] tracking-[0.16em] uppercase text-gold group-hover:gap-3 transition-all font-semibold">
                    Read case file <span aria-hidden>→</span>
                  </div>
                </div>
              </Link>
            );
          })}
        </div>
      </div>
      <div className="container-page"><div className="h-px bg-hairline" /></div>
    </section>
  );
}

function Federation() {
  const { items } = federationAdvisory;
  return (
    <section id="federation" className="scroll-mt-20 bg-bg">
      <div className="container-page py-24 md:py-32">
        <p className="eyebrow mb-5">Federation & advisory</p>
        <h2 className="font-serif text-display-s sm:text-display-m font-normal leading-[1.05] max-w-[800px] text-paper">
          Trust at the <em className="italic text-gold">federation tier.</em>
        </h2>
        <div className="mt-14 grid grid-cols-1 md:grid-cols-3 gap-px bg-hairline border border-hairline rounded-panel overflow-hidden">
          {items.map((it) => (
            <article key={it.org} className="bg-panel p-7 sm:p-8 lift border-l-2 border-l-gold">
              <span className="text-[10px] tracking-[0.22em] uppercase text-gold">{it.tag}</span>
              <h3 className="mt-4 font-serif italic text-[22px] text-paper leading-tight font-normal">{it.org}</h3>
              <p className="mt-4 text-paper/80 text-[15px] leading-[1.65]">{it.body}</p>
            </article>
          ))}
        </div>
      </div>
      <div className="container-page"><div className="h-px bg-hairline" /></div>
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
        <div className="mb-14 panel p-10 md:p-16">
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-x-12 gap-y-10 items-center justify-items-center">
            {featured.map((l) => (
              <div key={l.alt} className="relative h-12 md:h-16 w-full max-w-[200px] opacity-70 hover:opacity-100 transition-opacity">
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
      <div className="container-page"><div className="h-px bg-hairline" /></div>
    </section>
  );
}

function HowIWork() {
  return (
    <section id="how" className="scroll-mt-20">
      <div className="container-page py-24 md:py-32">
        <p className="eyebrow mb-5">How I work</p>
        <h2 className="font-serif text-display-s sm:text-display-m font-normal leading-[1.05] max-w-[860px] text-paper">
          Clarify. Build. <em className="italic text-gold">Ship.</em>
        </h2>
        <div className="mt-16 grid md:grid-cols-3 gap-12">
          {principles.map((s) => (
            <div key={s.n} className="relative pt-6">
              <div className="absolute top-0 left-0 h-px w-16 bg-gold" aria-hidden />
              <div className="font-mono text-[14px] text-gold mb-3">{s.n}</div>
              <h3 className="font-serif text-[28px] md:text-[34px] tracking-[-0.01em] leading-[1.1] font-normal text-paper">{s.title}</h3>
            </div>
          ))}
        </div>
      </div>
      <div className="container-page"><div className="h-px bg-hairline" /></div>
    </section>
  );
}

function Collaborate() {
  const { items, disclosure } = waysToCollaborate;
  return (
    <section id="collaborate" className="scroll-mt-20 bg-bg">
      <div className="container-page py-24 md:py-32">
        <p className="eyebrow mb-5">Ways to collaborate</p>
        <h2 className="font-serif text-display-s sm:text-display-m font-normal leading-[1.05] max-w-[860px] text-paper">
          Four shapes. <em className="italic text-gold">Full-time leads.</em>
        </h2>
        <div className="mt-14 grid grid-cols-1 md:grid-cols-2 gap-px bg-hairline border border-hairline rounded-panel overflow-hidden">
          {items.map((it, i) => (
            <article key={it.label} className="bg-panel p-8 lift">
              <span className="text-[10px] tracking-[0.22em] uppercase text-gold">0{i + 1} · {it.eyebrow}</span>
              <h3 className="mt-4 font-serif italic text-[26px] text-paper leading-tight font-normal">{it.label}</h3>
              <div className="mt-3 text-[12px] tracking-[0.18em] uppercase text-muted">{it.shape}</div>
            </article>
          ))}
        </div>
        <p className="mt-7 text-[13px] italic text-muted">{disclosure}</p>
      </div>
      <div className="container-page"><div className="h-px bg-hairline" /></div>
    </section>
  );
}

function Contact() {
  return (
    <section id="contact" className="scroll-mt-20 bg-bg">
      <div className="container-page py-28 md:py-40">
        <p className="eyebrow mb-5">Contact</p>
        <h2 className="font-serif text-[44px] md:text-[80px] leading-[1.02] tracking-[-0.02em] max-w-[900px] font-normal text-paper">
          Have a brief? <em className="italic text-gold">Email me directly.</em>
        </h2>
        <div className="mt-14">
          <a href={`mailto:${site.email}`} className="font-serif text-[32px] md:text-[56px] tracking-[-0.02em] underline-offset-[8px] decoration-[1px] decoration-gold/40 hover:decoration-gold hover:text-gold transition-colors italic font-normal text-paper">
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
        <p className="text-[14px] text-muted"><span className="italic">Designed and built by Koge</span> · Newsreader</p>
      </div>
    </footer>
  );
}

function Artifacts() {
  const items = [
    {
      src: "/work/artifact-truegaming-onepager.jpg",
      title: "Senior Commercial Partnerships one-pager",
      caption: "Personal value-prop one-pager. Hand-built. PDF, 1 page.",
      tag: "One-pager",
    },
    {
      src: "/work/artifact-ewc-welcome.jpg",
      title: "Esports World Cup — welcome deck",
      caption: "Cover from the EWC commercial welcome deck. Public-facing.",
      tag: "Deck",
    },
    {
      src: "/work/ewc-honor.jpg",
      title: "EWC sponsor activations",
      caption: "Sponsor surfaces across the EWC venue. Riyadh, 2024.",
      tag: "Activation",
    },
    {
      src: "/work/ewc-sponsors.jpg",
      title: "Sponsor delivery floor",
      caption: "On-the-ground delivery of contracted assets at scale.",
      tag: "Delivery",
    },
  ];
  return (
    <section id="artifacts" className="scroll-mt-20 bg-bg border-t border-hairline">
      <div className="container-page py-24 md:py-32">
        <p className="eyebrow mb-5">Artifacts</p>
        <h2 className="font-serif text-[34px] sm:text-[48px] md:text-[52px] max-w-[20ch] font-normal leading-[1.06] tracking-[-0.015em] text-paper">
          The work itself. <em className="italic text-gold">Not a description of the work.</em>
        </h2>
        <p className="mt-6 max-w-[60ch] text-[16px] text-muted leading-[1.65]">
          A small sample of decks, one-pagers, and sponsor-floor moments. Internal partner data and rate numbers redacted by default.
        </p>
        <div className="mt-12 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {items.map((it) => (
            <figure key={it.src} className="group">
              <div className="relative aspect-[3/4] overflow-hidden rounded-[10px] border border-hairline bg-panel">
                <Image
                  src={it.src}
                  alt={it.title}
                  fill
                  sizes="(min-width:1024px) 25vw, (min-width:640px) 50vw, 100vw"
                  className="object-cover transition-transform duration-500 group-hover:scale-[1.03]"
                />
                <span className="absolute top-3 left-3 text-[10px] uppercase tracking-[0.18em] bg-panel/95 border border-hairline rounded-full px-2.5 py-1 text-muted">{it.tag}</span>
              </div>
              <figcaption className="mt-4">
                <div className="text-[14px] text-paper font-medium leading-snug">{it.title}</div>
                <div className="text-[12.5px] text-muted mt-1 leading-snug">{it.caption}</div>
              </figcaption>
            </figure>
          ))}
        </div>
      </div>
    </section>
  );
}
