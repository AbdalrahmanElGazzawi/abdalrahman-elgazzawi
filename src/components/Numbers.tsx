import { numbers } from "@/content/site";
import { Section } from "./Section";

export function Numbers() {
  return (
    <Section id="numbers" label="01 · At a glance" accent="A career, by the numbers.">
      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4 mt-8">
        {numbers.map((c) => (
          <div key={c.n} className="panel relative bg-deep border border-hairline px-5 py-8 text-center">
            <span className="absolute top-0 inset-x-0 h-0.5 bg-gold" />
            <div className="font-serif italic text-[56px] leading-none text-paper mb-4 font-medium gold-text">{c.n}</div>
            <div className="text-muted text-[13px] leading-snug whitespace-pre-line muted-text">{c.l}</div>
          </div>
        ))}
      </div>
    </Section>
  );
}
