import { proof } from "@/content/site";

export function TrustStrip() {
  return (
    <section className="border-y border-hairline bg-deep/30">
      <div className="container-page py-6 sm:py-8">
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-4 sm:gap-6">
          {proof.map((p) => (
            <div key={p.l} className="text-center sm:text-left">
              <div className="text-gold text-[22px] sm:text-[26px] font-bold tracking-tight tab-nums">{p.n}</div>
              <div className="text-muted text-[11px] font-medium uppercase tracking-wider mt-1 leading-snug">{p.l}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
