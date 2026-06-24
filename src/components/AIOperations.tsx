import Image from "next/image";
import { aiOperations } from "@/content/site";

export function AIOperations() {
  const { intro, thesis, tools, shipped } = aiOperations;
  return (
    <section id="ai" className="scroll-mt-20 bg-bg">
      <div className="container-page py-24 md:py-32">
        <p className="eyebrow mb-5">AI-augmented operations</p>
        <h2 className="text-display-s sm:text-display-m font-light leading-[1.05] max-w-[900px]">
          {intro.split(" I build it ")[0]} I build it<br />
          {intro.split(" I build it ")[1]}
        </h2>
        <p className="mt-6 max-w-[680px] text-[15px] md:text-[16px] text-muted italic leading-[1.7]">
          {thesis}
        </p>

        {/* Tools row */}
        <div className="mt-14 panel p-8 md:p-12">
          <p className="text-[10px] tracking-[0.32em] uppercase text-muted mb-7">Stack</p>
          <div className="grid grid-cols-2 sm:grid-cols-5 gap-x-10 gap-y-8 items-center">
            {tools.map((t) => (
              <div key={t.slug} className="flex flex-col items-center gap-3">
                <div className="relative h-10 w-full opacity-75 hover:opacity-100 transition-opacity">
                  <Image src={`/brands/${t.slug}.svg`} alt={t.name} fill sizes="120px" className="object-contain" />
                </div>
                <span className="text-[12px] italic text-paper/85">{t.name}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Shipped tooling */}
        <div className="mt-10 grid grid-cols-1 md:grid-cols-3 gap-px bg-hairline border border-hairline">
          {shipped.map((s, i) => (
            <article key={s.label} className="bg-panel p-7 lift">
              <span className="text-[10px] tracking-[0.22em] uppercase text-gold">0{i + 1} · Shipped</span>
              <h3 className="mt-4 italic text-[22px] text-paper leading-tight font-normal">{s.label}</h3>
              <p className="mt-3 text-[13px] text-muted leading-[1.6]">{s.note}</p>
              {s.url && (
                <a href={s.url} target="_blank" rel="noopener noreferrer"
                   className="mt-5 inline-flex items-center gap-1.5 text-[12px] tracking-[0.16em] uppercase text-gold hover:text-paper transition-colors">
                  Live demo <span aria-hidden>↗</span>
                </a>
              )}
            </article>
          ))}
        </div>
      </div>
      <div className="container-page"><div className="h-px bg-gold/25" /></div>
    </section>
  );
}
