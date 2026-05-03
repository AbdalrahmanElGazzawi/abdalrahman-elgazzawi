import { selectedProjects } from "@/content/site";

export function SelectedProjects() {
  return (
    <section id="projects" className="border-t border-hairline py-20 sm:py-24 lg:py-28">
      <div className="container-page">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-16 items-end mb-12">
          <div className="lg:col-span-8">
            <div className="eyebrow">// Selected projects · archive</div>
            <h2 className="mt-4 font-serif text-display-s sm:text-display-m leading-[1.05]">
              Beyond the case studies.<br /><span className="text-gold italic">Twelve more shipped artifacts.</span>
            </h2>
          </div>
          <div className="lg:col-span-4">
            <p className="text-muted text-[14px] sm:text-[15px] leading-[1.7]">
              Concrete artifacts mined from across the career — operating SOPs, strategy briefs, sponsorship packages, marcom plans. Public-safe summaries; full documents stay private.
            </p>
          </div>
        </div>

        <ul className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-px bg-hairline border border-hairline">
          {selectedProjects.map((p) => (
            <li key={p.title} className="bg-bg p-6 lift">
              <div className="flex items-baseline justify-between gap-3 mb-3">
                <span className="text-[10px] font-mono text-gold tracking-[0.18em] uppercase">{p.era}</span>
                <span className="text-[9px] font-mono text-muted tracking-[0.14em] uppercase border border-rule/80 px-1.5 py-0.5">{p.tag}</span>
              </div>
              <h3 className="font-serif italic text-[18px] text-paper leading-tight">{p.title}</h3>
              <p className="mt-3 text-muted text-[13px] leading-[1.6]">{p.body}</p>
            </li>
          ))}
        </ul>
        <p className="mt-7 text-[12px] font-mono text-muted">// Twelve of many. Selected for breadth across roles, formats, and counterparties.</p>
      </div>
    </section>
  );
}
