import { competitiveCred } from "@/content/site";

export function CompetitiveCred() {
  return (
    <section id="competitive" className="border-t border-hairline py-20 sm:py-24 lg:py-28 bg-deep/30">
      <div className="container-page grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-16 items-start">
        <div className="lg:col-span-5">
          <div className="eyebrow">// Esports-native</div>
          <h2 className="mt-4 font-serif text-display-s sm:text-display-m leading-[1.05]">
            Competitor before<br />commercial.
          </h2>
          <p className="mt-6 text-paper text-[15px] sm:text-[16px] leading-[1.7] max-w-prose">{competitiveCred.intro}</p>
          <p className="mt-4 text-muted text-[13px] font-mono">// Earliest gaming chapter — Damascus internet café, 2012.</p>
        </div>
        <div className="lg:col-span-7">
          <ul className="grid grid-cols-1 sm:grid-cols-2 gap-px bg-hairline border border-hairline">
            {competitiveCred.ranks.map((r) => (
              <li key={r.game} className="bg-bg p-5 lift">
                <div className="flex items-start justify-between gap-3">
                  <div className="min-w-0">
                    <div className="font-serif italic text-[16px] sm:text-[17px] text-paper leading-tight">{r.game}</div>
                    <div className="mt-2 text-[12px] sm:text-[13px] font-mono text-gold tab-nums">{r.rank}</div>
                  </div>
                  <span aria-hidden className="text-gold/50 text-[11px] font-mono tracking-[0.18em] shrink-0">●</span>
                </div>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}
