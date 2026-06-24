"use client";
import { useState } from "react";
import { tiers } from "@/content/site";

export function CommercialTierTabs() {
  const [active, setActive] = useState(0);
  const t = tiers[active];

  return (
    <section id="tiers" className="border-t border-hairline py-20 sm:py-24 lg:py-28">
      <div className="container-page">
        <div className="eyebrow mb-5">// Commercial spine</div>
        <h2 className="font-serif text-display-s sm:text-display-m max-w-[22ch]">
          One spine. Four phases.<br />From advertising on-ramp to equity territory.
        </h2>
        <p className="text-muted text-[15px] sm:text-[16px] mt-5 max-w-prose leading-[1.7]">
          Every brand, every counterparty, every deal traces to one of four phases of the Brand Investment Model. The framework decides who signs, what's bundled, and how it's governed.
        </p>

        <div className="mt-12 grid grid-cols-1 lg:grid-cols-12 gap-8">
          {/* Tabs */}
          <div className="lg:col-span-4">
            <div role="tablist" aria-label="Brand Investment Model phases" className="flex flex-col">
              {tiers.map((tier, i) => {
                const isActive = active === i;
                return (
                  <button
                    key={tier.phase}
                    role="tab"
                    aria-selected={isActive}
                    aria-controls={`tier-panel-${i}`}
                    id={`tier-tab-${i}`}
                    onClick={() => setActive(i)}
                    className={`text-left border-l-2 transition-all py-5 px-5 ${isActive ? "border-l-gold bg-deep" : "border-l-rule hover:border-l-gold/60 hover:bg-deep/40"}`}
                  >
                    <div className="flex items-baseline justify-between gap-3">
                      <div className="flex items-baseline gap-3">
                        <span className={`font-serif italic text-[28px] leading-none ${isActive ? "text-gold" : "text-muted"}`}>{tier.phase}</span>
                        <span className={`font-serif italic text-[20px] leading-none ${isActive ? "text-paper" : "text-muted"}`}>{tier.name}</span>
                      </div>
                      <span className={`text-[10px] font-mono tracking-[0.14em] ${isActive ? "text-gold" : "text-muted"}`}>{tier.floor}</span>
                    </div>
                  </button>
                );
              })}
            </div>
          </div>

          {/* Panel */}
          <div className="lg:col-span-8">
            <div role="tabpanel" id={`tier-panel-${active}`} aria-labelledby={`tier-tab-${active}`} className="panel p-6 sm:p-8 min-h-[440px]">
              <div className="flex items-center justify-between text-[10px] font-mono tracking-[0.18em] uppercase">
                <span className="text-gold">PHASE {t.phase} · {t.name.toUpperCase()}</span>
                <span className="text-muted">{t.floor}</span>
              </div>
              <h3 className="mt-4 font-serif italic text-[24px] sm:text-[28px] text-paper">{t.what}</h3>

              <dl className="mt-7 grid grid-cols-1 sm:grid-cols-2 gap-x-8 gap-y-6">
                <Field k="Who it's for" v={t.who} />
                <Field k="Commercial logic" v={t.logic} />
                <Field k="Typical asset bundle" v={t.bundle} />
                <Field k="Governance implication" v={t.governance} />
              </dl>

              <div className="mt-8 pt-5 border-t border-hairline flex items-center justify-between text-[11px] font-mono tracking-[0.14em] uppercase">
                <span className="text-muted">// 13 counterparty tracks attached</span>
                <span className="text-gold">Direct · Creative · Media · PR · Talent-Rep · Publisher · …</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function Field({ k, v }: { k: string; v: string }) {
  return (
    <div>
      <dt className="text-[10px] font-mono text-gold tracking-[0.18em] uppercase">{k}</dt>
      <dd className="mt-2 text-paper text-[14px] sm:text-[15px] leading-[1.65]">{v}</dd>
    </div>
  );
}
