import { waysToCollaborate } from "@/content/site";

export function WaysToCollaborate() {
  const { intro, items, disclosure } = waysToCollaborate;
  return (
    <section id="collaborate" className="border-t border-hairline py-20 sm:py-24 lg:py-28">
      <div className="container-page">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-16 items-end mb-12">
          <div className="lg:col-span-8">
            <div className="eyebrow">// Ways to collaborate</div>
            <h2 className="mt-4 font-serif text-display-s sm:text-display-m leading-[1.05]">
              Four shapes of engagement.<br />
              <span className="text-gold italic">Full-time leads.</span>
            </h2>
          </div>
          <div className="lg:col-span-4">
            <p className="text-muted text-[14px] sm:text-[15px] leading-[1.7]">{intro}</p>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-px bg-hairline border border-hairline">
          {items.map((it, i) => (
            <article key={it.label} className="bg-bg p-7 sm:p-8 lift">
              <div className="flex items-center justify-between gap-4 mb-4">
                <span className="font-mono text-[10px] tracking-[0.18em] uppercase text-gold">
                  {`0${i + 1}  ·  ${it.eyebrow}`}
                </span>
              </div>
              <h3 className="font-serif italic text-[22px] text-paper leading-tight">{it.label}</h3>
              <div className="mt-3 text-[11px] font-mono tracking-[0.14em] uppercase text-muted">
                {it.shape}
              </div>
              <p className="mt-5 text-paper/90 text-[14px] leading-[1.65]">{it.body}</p>
            </article>
          ))}
        </div>

        <p className="mt-7 text-[12px] font-mono text-muted leading-[1.5]">
          // {disclosure}
        </p>
      </div>
    </section>
  );
}
