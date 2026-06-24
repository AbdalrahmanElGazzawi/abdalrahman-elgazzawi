import Link from "next/link";
import { hero, site } from "@/content/site";

export function Hero() {
  return (
    <section className="relative overflow-hidden">
      <div aria-hidden className="absolute inset-0 grid-bg opacity-60" />
      <div className="container-page relative pt-20 sm:pt-24 lg:pt-28 pb-16 sm:pb-20 lg:pb-24">
        <div className="max-w-4xl">
          <div className="eyebrow mb-6">{hero.eyebrow}</div>
          <h1 className="font-serif text-display-l text-paper leading-[1.04] font-normal">
            {hero.headline[0]}<br />
            <span className="italic text-paper/95">{hero.headline[1]}</span><br />
            {hero.headline[2]}
          </h1>
          <p className="mt-7 text-paper/85 text-[18px] sm:text-[20px] leading-[1.65] max-w-[58ch] font-serif">{hero.sub}</p>
          <p className="mt-3 text-muted text-[14px] sm:text-[15px]">{hero.meta}</p>
          <div className="mt-10 flex flex-wrap gap-3">
            <a href={hero.cta.primary.href} className="inline-flex items-center gap-2 bg-gold text-bg px-5 py-3 text-[14px] font-medium hover:bg-gold-soft transition-colors min-h-[44px] rounded-sm">
              {hero.cta.primary.label}
            </a>
            <a href={hero.cta.secondary.href} className="inline-flex items-center gap-2 border border-gold/60 text-gold px-5 py-3 text-[14px] font-medium hover:bg-gold hover:text-bg transition-colors min-h-[44px] rounded-sm">
              {hero.cta.secondary.label}
            </a>
            <Link href={hero.cta.tertiary.href} className="inline-flex items-center gap-2 border border-rule text-paper px-5 py-3 text-[14px] font-medium hover:border-gold hover:text-gold transition-colors min-h-[44px] rounded-sm">
              {hero.cta.tertiary.label}
            </Link>
            <a href={hero.cta.quaternary.href} className="inline-flex items-center gap-2 text-muted px-2 py-3 text-[14px] font-medium hover:text-paper transition-colors min-h-[44px]">
              {hero.cta.quaternary.label}
            </a>
          </div>
          <div className="mt-8 flex flex-wrap gap-x-6 gap-y-2 text-[14px] text-muted">
            <a href={"mailto:" + site.email} className="hover:text-paper">{site.email}</a>
            <span aria-hidden className="text-rule">·</span>
            <a href={site.whatsapp} target="_blank" rel="noopener noreferrer" className="hover:text-paper">WhatsApp {site.whatsappDisplay}</a>
            <span aria-hidden className="text-rule">·</span>
            <a href={site.linkedin} target="_blank" rel="noopener noreferrer" className="hover:text-paper">{site.linkedinDisplay}</a>
          </div>
        </div>
      </div>
    </section>
  );
}
