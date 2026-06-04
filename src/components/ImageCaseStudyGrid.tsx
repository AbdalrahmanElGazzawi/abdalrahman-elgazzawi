import Link from "next/link";
import Image from "next/image";
import { caseStudies } from "@/content/site";
import { Section } from "./Section";

export function ImageCaseStudyGrid() {
  return (
    <Section
      id="work"
      eyebrow="Selected work"
      title="Strategy"
      accent="into execution."
      sub="Four engagements where commercial strategy met live delivery."
    >
      <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
        {caseStudies.map((cs) => (
          <Link
            key={cs.slug}
            href={`/case-studies/${cs.slug}`}
            className="group panel lift relative overflow-hidden flex flex-col"
          >
            <div className="relative h-[200px] sm:h-[220px] w-full bg-deep overflow-hidden border-b border-rule/70">
              {cs.image ? (
                <Image
                  src={cs.image}
                  alt={cs.title}
                  fill
                  className="object-cover opacity-85 group-hover:opacity-100 group-hover:scale-[1.02] transition-all duration-500"
                  sizes="(min-width: 768px) 50vw, 100vw"
                />
              ) : (
                <div className="absolute inset-0 grid-bg opacity-60" />
              )}
              <div className="absolute inset-0 bg-gradient-to-t from-bg via-bg/40 to-transparent" />
              <div className="absolute top-3 left-3 right-3 flex items-center justify-between text-[11px] font-semibold uppercase tracking-wider">
                <span className="text-gold bg-bg/70 backdrop-blur px-2 py-1">{cs.eyebrow}</span>
                <span className="text-paper bg-bg/70 backdrop-blur px-2 py-1">{cs.timeframe}</span>
              </div>
            </div>

            <div className="p-6 sm:p-7 flex flex-col flex-1">
              <h3 className="text-[22px] sm:text-[24px] font-bold tracking-tight text-paper leading-tight">
                {cs.title}
              </h3>
              <p className="mt-3 text-muted text-[14px] leading-[1.6]">{cs.subtitle}</p>

              <div className="mt-4 flex flex-wrap gap-1.5">
                {cs.tags.slice(0, 4).map((t) => (
                  <span
                    key={t}
                    className="text-[11px] font-medium border border-rule/80 text-muted px-2 py-1"
                  >
                    {t}
                  </span>
                ))}
              </div>

              <p className="mt-4 text-paper/85 text-[14px] leading-[1.6] line-clamp-3">
                {cs.outcome}
              </p>

              <div className="mt-auto pt-5 flex items-center justify-between text-[13px] font-medium">
                <span className="text-muted">{cs.role}</span>
                <span className="text-gold inline-flex items-center gap-2 transition-transform group-hover:translate-x-0.5">
                  Read case →
                </span>
              </div>
            </div>
          </Link>
        ))}
      </div>
    </Section>
  );
}
