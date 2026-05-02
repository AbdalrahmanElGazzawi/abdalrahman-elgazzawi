import Image from "next/image";
import { site } from "@/content/site";

export function Hero() {
  return (
    <section className="relative overflow-hidden">
      <div
        aria-hidden="true"
        className="absolute right-0 top-0 bottom-0 w-[55%] sm:w-[45%] bg-cover bg-center opacity-[0.18] sm:opacity-[0.28] -z-0"
        style={{ backgroundImage: "url('/img/hero.jpg')" }}
      />
      <div className="absolute inset-0 -z-0 bg-gradient-to-r from-bg via-bg/85 to-transparent" />
      <div className="container-page relative grid grid-cols-1 lg:grid-cols-[1.3fr_1fr] gap-10 lg:gap-16 items-center min-h-[88vh] py-12 sm:py-20">
        <div>
          <div className="label-eyebrow mb-4">Portfolio · 2026</div>
          <div className="gold-rule mb-6" />
          <h1 className="font-serif text-display font-medium leading-[0.95] tracking-[-0.01em]">
            Abdalrahman
            <span className="block text-gold italic">ElGazzawi.</span>
          </h1>
          <p className="mt-8 text-[15px] font-semibold tracking-[0.04em]">{site.tagline}</p>
          <p className="mt-1.5 text-[13px] text-muted tracking-[0.04em]">{site.taglineSub}</p>
          <div className="mt-9 pl-[18px] border-l-2 border-gold">
            <div className="text-gold text-[11px] font-bold tracking-[0.2em] uppercase mb-2">{site.location}</div>
            <div className="font-serif italic text-[22px] leading-snug">{site.yearsLine}</div>
            <div className="text-[13px] text-muted italic mt-1">{site.opsLine}</div>
          </div>
        </div>
        <div className="lg:justify-self-end">
          <div className="relative w-full max-w-[420px] aspect-[5/7] mx-auto bg-[#1A1B1F] rounded overflow-hidden shadow-[0_30px_60px_-20px_rgba(0,0,0,0.6)] ring-1 ring-hairline">
            <Image src="/img/hero.jpg" alt="Abdalrahman ElGazzawi on stage" fill priority sizes="(max-width: 768px) 280px, 420px" className="object-cover object-[center_20%]" />
          </div>
          <div className="mt-3 text-[11px] text-muted italic tracking-[0.08em] text-center">Riyadh, KSA · Industry stage</div>
        </div>
      </div>
    </section>
  );
}
