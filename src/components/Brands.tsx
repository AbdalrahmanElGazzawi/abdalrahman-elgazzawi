import Image from "next/image";
import { brandLogos, brandFlags, brandText } from "@/content/site";
import { Section } from "./Section";

export function Brands() {
  return (
    <Section id="brands" label="13 · Brands & Partners" accent="Worked with, pitched to, delivered for.">
      <div className="bg-paper rounded p-5 sm:p-7 grid grid-cols-3 sm:grid-cols-3 md:grid-cols-9 gap-3.5 items-center my-8">
        {brandLogos.map((b) => (
          <div key={b.alt} className="bg-bg p-3.5 rounded text-center min-h-[76px] flex items-center justify-center">
            <Image src={b.src} alt={b.alt} width={120} height={56} className="w-full h-14 object-contain" />
          </div>
        ))}
        {brandFlags.map((f) => (
          <div key={f.l1} className={`px-1.5 py-3.5 rounded text-center min-h-[76px] flex flex-col justify-center ${f.kind === "efa" ? "bg-[#C8102E]" : "bg-[#0E5E2C]"}`}>
            <div className="text-white text-[11px] font-bold tracking-[0.08em] whitespace-pre-line leading-tight">{f.l1}</div>
            <div className="text-white text-[9px] italic mt-1">{f.l2}</div>
          </div>
        ))}
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-8">
        {brandText.map((b) => (
          <div key={b.lab}>
            <div className="text-gold text-[11px] font-bold tracking-[0.2em] uppercase mb-3 gold-text">{b.lab}</div>
            <div className="w-7 h-0.5 bg-gold mb-3.5" />
            <div className="font-serif text-[17px] text-paper leading-[1.5]">{b.list}</div>
          </div>
        ))}
      </div>
      <div className="mt-8 text-center text-muted text-[13px] italic muted-text">
        Plus 78+ brands pitched and onboarded across five agencies during the EWC commercial cycle.
      </div>
    </Section>
  );
}
