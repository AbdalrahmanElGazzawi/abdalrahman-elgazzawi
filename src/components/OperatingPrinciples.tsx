import { principles } from "@/content/site";
import { Section } from "./Section";

export function OperatingPrinciples() {
  return (
    <Section id="principles" eyebrow="// Operating principles" title="How the work" accent="actually gets done.">
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-px bg-hairline border border-hairline">
        {principles.map((p) => (
          <article key={p.n} className="bg-bg p-7 sm:p-8 lift">
            <div className="font-serif italic text-gold text-[40px] leading-none">{p.n}</div>
            <h3 className="mt-4 font-serif text-[22px] sm:text-[24px] leading-[1.2] text-paper">{p.title}</h3>
            <p className="mt-3.5 text-muted text-[14px] sm:text-[15px] leading-[1.65]">{p.body}</p>
          </article>
        ))}
      </div>
    </Section>
  );
}
