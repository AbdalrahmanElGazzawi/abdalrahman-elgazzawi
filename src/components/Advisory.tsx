import Image from "next/image";
import { advisory } from "@/content/site";

export function Advisory() {
  return (
    <section id="advisory" className="border-t border-hairline py-20 sm:py-24 lg:py-[100px]">
      <div className="container-page">
        <div className="label-eyebrow mb-6">09 · Selected Work</div>
        <h2 className="font-serif text-display-sm font-medium">Advisory & adjacent.</h2>
        <div className="text-gold text-[13px] font-semibold tracking-[0.08em] mt-2">GLG · MOBALYTICS · TELECOM EGYPT · 2021 — Present</div>
        <div className="gold-rule mt-4 mb-8" />
        {advisory.map((row) => (
          <div key={row.num} className="grid grid-cols-[50px_1fr_80px] sm:grid-cols-[80px_1fr_100px] gap-4 sm:gap-6 py-7 border-b border-hairline last:border-none items-start">
            <div className="font-serif italic text-gold text-[28px] sm:text-[38px] leading-none gold-text">{row.num}</div>
            <div>
              <h3 className="font-serif text-[20px] sm:text-[22px] mb-1">{row.title}</h3>
              <div className="text-gold text-[11px] tracking-[0.1em] mb-2.5 gold-text">{row.meta}</div>
              <p className="text-muted text-[14px] leading-[1.55] muted-text">{row.body}</p>
            </div>
            <div className="hidden sm:block">
              {row.logo && <Image src={row.logo} alt={row.title} width={80} height={60} className="max-w-[80px] max-h-[60px] object-contain opacity-85 bg-paper/95 rounded p-1" />}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
