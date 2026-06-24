import { federationAdvisory } from "@/content/site";

const dotColors: Record<string, string> = {
  gold:    "bg-gold",
  green:   "bg-green-glow",
  neutral: "bg-muted",
};
const tagColors: Record<string, string> = {
  gold:    "text-gold border-l-gold",
  green:   "text-green-glow border-l-green-glow",
  neutral: "text-muted border-l-rule",
};

export function FederationAdvisory() {
  const { intro, items } = federationAdvisory;
  return (
    <section id="federation" className="border-t border-hairline py-20 sm:py-24 lg:py-28">
      <div className="container-page">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-16 items-end mb-12">
          <div className="lg:col-span-8">
            <div className="eyebrow">// Federation & advisory</div>
            <h2 className="mt-4 font-serif text-display-s sm:text-display-m leading-[1.05]">
              Trust at the<br />federation tier.
            </h2>
          </div>
          <div className="lg:col-span-4">
            <p className="text-muted text-[14px] sm:text-[15px] leading-[1.7]">{intro}</p>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-px bg-hairline border border-hairline">
          {items.map((it) => {
            const dot = dotColors[it.colorClass] ?? dotColors.neutral;
            const tag = tagColors[it.colorClass] ?? tagColors.neutral;
            return (
              <article key={it.org} className={`bg-bg p-7 sm:p-8 lift border-l-2 ${tag.split(" ")[1]}`}>
                <div className="flex items-center gap-2.5 mb-4">
                  <span className={`w-1.5 h-1.5 rounded-full ${dot}`} aria-hidden />
                  <span className={`text-[10px] font-mono tracking-[0.18em] uppercase ${tag.split(" ")[0]}`}>{it.tag}</span>
                </div>
                <h3 className="font-serif italic text-[22px] text-paper leading-tight">{it.org}</h3>
                <div className="mt-1.5 text-[12px] font-mono text-muted">{it.role}</div>
                <p className="mt-5 text-paper/90 text-[14px] leading-[1.65]">{it.body}</p>
                <div className="mt-6 pt-4 border-t border-hairline text-[11px] font-mono text-muted leading-[1.5]">{it.meta}</div>
              </article>
            );
          })}
        </div>

        <p className="mt-7 text-[12px] font-mono text-muted">// Federation engagements named with permission. Specific client identities, project content, and consultation specifics are confidential.</p>
      </div>
    </section>
  );
}
