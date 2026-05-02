import { proof } from "@/content/site";

export function MetricStrip() {
  return (
    <section className="border-t border-hairline bg-deep/30">
      <div className="container-page py-12 sm:py-14">
        <div className="flex items-center justify-between mb-8">
          <div className="eyebrow">// Proof bar</div>
          <div className="hidden sm:block text-[11px] font-mono text-muted tracking-[0.18em] uppercase">8 metrics · all verifiable</div>
        </div>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-px bg-hairline border border-hairline">
          {proof.map((p) => (
            <div key={p.l} className="bg-bg p-5 sm:p-6 lift relative group">
              <div className="font-serif italic text-[28px] sm:text-[34px] text-gold tab-nums leading-none">{p.n}</div>
              <div className="mt-3 text-muted text-[12px] sm:text-[13px] leading-[1.5]">{p.l}</div>
              <div aria-hidden className="absolute top-0 left-0 h-px w-0 bg-gold transition-all duration-500 group-hover:w-full" />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
