import { ewc } from "@/content/site";

export function EWC() {
  return (
    <section id="work" className="border-t border-hairline py-20 sm:py-24 lg:py-[100px]">
      <div className="container-page">
        <div className="label-eyebrow mb-6">07 · Selected Work</div>
        <h2 className="font-serif text-display-sm font-medium">Esports World Cup.</h2>
        <div className="text-gold text-[13px] font-semibold tracking-[0.08em] mt-2">SPORTFIVE · Saudi Esports Federation · 2024</div>
        <div className="gold-rule mt-4 mb-8" />
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12">
          <div>
            <h3 className="font-serif italic text-[28px] mb-3.5">{ewc.role}</h3>
            <p className="text-muted text-[15px] mb-8 muted-text">{ewc.blurb}</p>
            <div className="text-gold text-[11px] font-bold tracking-[0.25em] uppercase mb-3.5 gold-text">What I owned</div>
            <ul className="list-none">
              {ewc.owned.map((o) => (
                <li key={o} className="py-3 border-b border-hairline text-[14px]">{o}</li>
              ))}
            </ul>
          </div>
          <div className="panel bg-deep border border-hairline border-t-2 border-t-gold p-8">
            {ewc.stats.map((s) => (
              <div key={s.n} className="grid grid-cols-[100px_1fr] gap-6 py-4 border-b border-hairline last:border-none items-start">
                <div className="font-serif italic text-[32px] text-gold gold-text">{s.n}</div>
                <div className="text-paper text-[13px] leading-[1.5] pt-1.5">{s.l}</div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
