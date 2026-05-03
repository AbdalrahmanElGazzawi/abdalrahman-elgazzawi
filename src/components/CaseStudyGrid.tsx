import Link from "next/link";
import { caseStudies } from "@/content/site";
import { Section } from "./Section";

export function CaseStudyGrid() {
  return (
    <Section
      id="case-studies"
      eyebrow="// Case studies"
      title="Systems built."
      accent="Outcomes shipped."
      sub="Four flagship engagements where commercial methodology, governance, and tooling met live deal flow. Public-safe summaries — full deal data sanitized."
    >
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 lg:gap-5">
        {caseStudies.map((cs) => (
          <Link key={cs.slug} href={`/case-studies/${cs.slug}`}
            className="group panel lift relative p-6 sm:p-7 flex flex-col">
            <div className="flex items-center justify-between text-[10px] font-mono tracking-[0.18em] uppercase">
              <span className="text-gold">{cs.eyebrow}</span>
              <span className="text-muted">{cs.timeframe}</span>
            </div>
            <h3 className="mt-4 font-serif text-[26px] sm:text-[28px] leading-[1.1] text-paper">{cs.title}</h3>
            <p className="mt-3 text-muted text-[14px] sm:text-[15px] leading-[1.6]">{cs.subtitle}</p>

            {/* Sanitized artifact placeholder visual */}
            <div aria-hidden className="mt-5 h-[110px] border border-rule/70 bg-deep/50 relative overflow-hidden">
              <div className="absolute inset-0 grid-bg opacity-50" />
              <div className="absolute inset-x-3 top-3 h-[2px] bg-gradient-to-r from-gold/0 via-gold/60 to-gold/0" />
              <div className="absolute inset-x-3 bottom-3 flex items-center gap-2 text-[9px] font-mono text-muted tracking-[0.14em] uppercase">
                <span className="text-gold">●</span> ARTIFACT // {cs.tags[0]}
              </div>
              <div className="absolute right-3 top-3 text-[9px] font-mono text-muted tracking-[0.14em] uppercase">
                v1 · sanitized
              </div>
            </div>

            <div className="mt-5 flex flex-wrap gap-1.5">
              {cs.tags.map((t) => (
                <span key={t} className="text-[10px] font-mono tracking-[0.1em] uppercase border border-rule/80 text-muted px-2 py-1">
                  {t}
                </span>
              ))}
            </div>

            <p className="mt-5 text-paper/85 text-[13px] sm:text-[14px] leading-[1.6]">{cs.outcome}</p>

            <div className="mt-6 flex items-center justify-between text-[12px] font-mono tracking-[0.12em] uppercase">
              <span className="text-muted">{cs.role}</span>
              <span className="text-gold inline-flex items-center gap-2 transition-transform group-hover:translate-x-0.5">View case study →</span>
            </div>
          </Link>
        ))}
      </div>
    </Section>
  );
}
