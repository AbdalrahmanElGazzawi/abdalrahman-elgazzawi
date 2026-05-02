import { experience, arc } from "@/content/site";
import { Section } from "./Section";

export function ExperienceTimeline() {
  return (
    <Section
      id="experience"
      eyebrow="// Experience"
      title="A career arc, not a résumé dump."
      accent={arc}
      sub="10+ years across the lifecycle. Each role added a layer to the operating system — QA built the eye for systems, BD added commercial muscle, marketing brought audience logic, ops added delivery rigor, strategy connected them all."
    >
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-px bg-hairline border border-hairline">
        {experience.map((e) => (
          <article key={`${e.company}-${e.years}`} className="bg-bg p-6 sm:p-7 lift relative">
            {e.current && (
              <div className="absolute top-0 right-0 bg-green/20 text-green-glow text-[9px] font-mono tracking-[0.18em] uppercase px-2 py-1 border-l border-b border-green/40">● Current</div>
            )}
            <div className="text-[10px] font-mono text-gold tracking-[0.16em] uppercase">{e.years}</div>
            <h3 className="mt-3 font-serif italic text-[20px] text-paper leading-tight">{e.role}</h3>
            <div className="mt-1 text-[13px] text-muted font-mono">{e.company}</div>
            <p className="mt-4 text-paper/85 text-[13px] leading-[1.6]">{e.impact}</p>
            <ul className="mt-4 space-y-1.5 text-[12px]">
              {e.proof.map((p) => (
                <li key={p} className="flex items-start gap-2 text-muted">
                  <span aria-hidden className="text-gold mt-[5px] shrink-0">—</span>
                  <span>{p}</span>
                </li>
              ))}
            </ul>
          </article>
        ))}
      </div>
    </Section>
  );
}
