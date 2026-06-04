import Link from "next/link";
import { hero, site } from "@/content/site";

export function Hero() {
  return (
    <section className="relative overflow-hidden">
      <div aria-hidden className="absolute inset-0 grid-bg opacity-50" />
      <div aria-hidden className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-gold/40 to-transparent" />
      <div className="container-page relative pt-16 sm:pt-20 lg:pt-24 pb-16 sm:pb-20 lg:pb-24">
        <div className="max-w-4xl">
          <div className="eyebrow mb-5">{hero.eyebrow}</div>
          <h1 className="text-display-l font-extrabold tracking-tight text-paper leading-[1.04]">
            {hero.headline[0]}<br />
            {hero.headline[1]}<br />
            <span className="text-gold">{hero.headline[2]}</span>
          </h1>
          <p className="mt-6 text-paper/85 text-[17px] sm:text-[19px] leading-[1.6] max-w-[62ch]">{hero.sub}</p>
          <p className="mt-4 text-muted text-[13px] sm:text-[14px]">{hero.meta}</p>
          <div className="mt-8 flex flex-wrap gap-3">
            <a href={hero.cta.primary.href} className="inline-flex items-center gap-2 bg-gold text-bg px-5 py-3 text-[14px] font-semibold hover:bg-gold-soft transition-colors min-h-[44px]">
              {hero.cta.primary.label} ↓
            </a>
            <a href={hero.cta.secondary.href} className="inline-flex items-center gap-2 border border-gold text-gold px-5 py-3 text-[14px] font-semibold hover:bg-gold hover:text-bg transition-colors min-h-[44px]">
              {hero.cta.secondary.label} ↓
            </a>
            <Link href={hero.cta.tertiary.href} className="inline-flex items-center gap-2 border border-rule text-paper px-5 py-3 text-[14px] font-semibold hover:border-gold hover:text-gold transition-colors min-h-[44px]">
              {hero.cta.tertiary.label}
            </Link>
            <a href={hero.cta.quaternary.href} className="inline-flex items-center gap-2 text-muted px-2 py-3 text-[14px] font-medium hover:text-paper transition-colors min-h-[44px]">
              {hero.cta.quaternary.label} →
            </a>
          </div>
          <div className="mt-6 flex flex-wrap gap-x-6 gap-y-2 text-[13px] text-muted">
            <a href={"mailto:" + site.email} className="hover:text-paper">
              <span className="text-gold">✉</span> {site.email}
            </a>
            <a href={site.whatsapp} target="_blank" rel="noopener noreferrer" className="hover:text-paper">
              <span className="text-gold">●</span> WhatsApp · {site.whatsappDisplay}
            </a>
            <a href={site.linkedin} target="_blank" rel="noopener noreferrer" className="hover:text-paper">
              <span className="text-gold">in</span> {site.linkedinDisplay}
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
