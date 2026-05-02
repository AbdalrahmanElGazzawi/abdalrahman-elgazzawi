import { phases } from "@/content/site";
import { Section } from "./Section";

export function Phases() {
  return (
    <Section
      id="phases"
      label="05 · The Commercial Spine"
      accent="4-phase brand investment model."
      lead="From Falcons Framework v5.0 — Agency Partner Pack. Every brand, every counterparty, every deal traces to one of these four phases."
    >
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3.5">
        {phases.map((p) => (
          <div key={p.num} className="panel bg-deep border border-hairline p-7 relative">
            <div className="flex justify-between items-start mb-7">
              <div className="font-serif italic text-gold text-[56px] leading-none gold-text">{p.num}</div>
              <div className="text-gold text-[11px] font-bold tracking-[0.15em] gold-text">{p.floor}</div>
            </div>
            <h3 className="font-serif text-[24px] leading-[1.15] text-paper mb-4 min-h-[56px]">{p.title}</h3>
            <div className="w-8 h-0.5 bg-gold mb-4" />
            <p className="text-muted text-[13px] leading-[1.55] muted-text">{p.body}</p>
          </div>
        ))}
      </div>
      <p className="text-muted text-[13px] italic text-center mt-8 muted-text">
        Plus 13 counterparty tracks: Direct Brand · Creative · Media · Talent-Rep · Publisher · Broadcast · Government · Tech · and more.
      </p>
    </Section>
  );
}
