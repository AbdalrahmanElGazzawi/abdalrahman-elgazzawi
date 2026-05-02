import { closedDeal, pipeline } from "@/content/site";
import { Section } from "./Section";

export function Pipeline() {
  return (
    <Section id="pipeline" label="06 · Pipeline & Closed" accent="Deals I've closed. Pipeline I'm running.">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {/* Closed */}
        <div className="panel bg-deep border border-hairline p-8 sm:p-9">
          <div className="text-gold text-[11px] font-bold tracking-[0.2em] uppercase mb-4 gold-text">{closedDeal.tag}</div>
          <h3 className="font-serif text-[28px] leading-[1.15] mb-2">{closedDeal.title}</h3>
          <div className="text-gold text-[12px] italic tracking-[0.04em] mb-4 gold-text">{closedDeal.via}</div>
          <div className="w-8 h-0.5 bg-gold mb-6" />
          <dl className="grid grid-cols-[auto_1fr] gap-x-5 gap-y-3">
            {closedDeal.stats.map((s) => (
              <div key={s.k} className="contents">
                <dt className="font-serif italic text-[24px] text-gold gold-text">{s.k}</dt>
                <dd className="text-paper text-[13px] self-center">{s.v}</dd>
              </div>
            ))}
          </dl>
          <div className="mt-6 text-muted text-[12px] italic muted-text">{closedDeal.creators}</div>
        </div>
        {/* Active pipeline */}
        <div className="panel bg-deep border border-hairline p-8 sm:p-9">
          <div className="text-gold text-[11px] font-bold tracking-[0.2em] uppercase mb-4 gold-text">Active Pipeline · ~SAR 2.3M</div>
          <ul className="flex flex-col gap-4">
            {pipeline.map((row) => (
              <li key={row.title} className="border-b border-hairline pb-3.5 last:border-none last:pb-0">
                <div className="text-gold text-[9px] font-bold tracking-[0.2em] uppercase gold-text">{row.tag}</div>
                <h4 className="font-serif italic text-[18px] text-paper my-1">{row.title}</h4>
                <p className="text-muted text-[12px] muted-text">{row.body}</p>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </Section>
  );
}
