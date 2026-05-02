import { falconsPillars } from "@/content/site";
import { Section } from "./Section";

export function Falcons() {
  return (
    <section id="falcons" className="border-t border-hairline py-20 sm:py-24 lg:py-[100px]">
      <div className="container-page">
        <div className="label-eyebrow mb-6">03 · Selected Work · Current</div>
        <h2 className="font-serif text-display-sm font-medium">Team Falcons.</h2>
        <div className="text-gold text-[13px] font-semibold tracking-[0.08em] mt-2">
          Esports Marketing Manager · Riyadh · 2026 — Present
        </div>
        <div className="gold-rule mt-4 mb-6" />
        <p className="font-serif italic text-[18px] text-paper max-w-[920px] mb-12">
          “Built the rate book the org needed — defensible against FaZe / Cloud9 / T1 / NRG, codified into product, contract, and live commercial pipeline.”
        </p>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3.5">
          {falconsPillars.map((p) => (
            <div key={p.title} className="panel bg-deep border border-hairline p-7 sm:p-7">
              <div className="text-gold text-[10px] font-bold tracking-[0.2em] uppercase mb-3.5 gold-text">{p.tag}</div>
              <h3 className="font-serif italic text-[22px] leading-tight text-paper mb-4">{p.title}</h3>
              <div className="w-8 h-0.5 bg-gold mb-4" />
              <p className="text-muted text-[13px] leading-[1.55] muted-text">{p.body}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
