import Image from "next/image";
import { bdCards } from "@/content/site";

export function BD() {
  return (
    <section id="bd" className="border-t border-hairline py-20 sm:py-24 lg:py-[100px]">
      <div className="container-page">
        <div className="label-eyebrow mb-6">08 · Selected Work</div>
        <h2 className="font-serif text-display-sm font-medium">Tier-1 BD chapter.</h2>
        <div className="text-gold text-[13px] font-semibold tracking-[0.08em] mt-2">TRUE GAMING · VANGUARD · RIYADH · 2023 — 2024</div>
        <div className="gold-rule mt-4 mb-8" />
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-4">
          {bdCards.map((c) => (
            <div key={c.title} className="panel bg-deep border border-hairline border-l-[3px] border-l-gold p-7 sm:p-8 relative">
              <div className="absolute top-6 right-6 w-14 h-14 bg-paper/95 rounded p-2">
                <Image src={c.logo} alt={c.title} width={56} height={56} className="w-full h-full object-contain" />
              </div>
              <h3 className="font-serif text-[28px] mb-2 pr-20">{c.title}</h3>
              <div className="font-serif italic text-gold text-[16px] mb-1 gold-text">{c.role}</div>
              <div className="text-muted text-[11px] tracking-[0.1em] mb-6 muted-text">{c.dates}</div>
              <ul className="list-none space-y-3">
                {c.bullets.map((b) => (
                  <li key={b} className="relative pl-5 text-paper text-[14px] leading-[1.5]">
                    <span className="absolute left-0 text-gold gold-text">—</span>{b}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
