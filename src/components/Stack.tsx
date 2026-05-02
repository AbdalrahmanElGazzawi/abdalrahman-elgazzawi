import { stack } from "@/content/site";
import { Section } from "./Section";

export function Stack() {
  return (
    <Section id="stack" label="12 · Tools & Stack" accent="The stack I work in.">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-6">
        {stack.map((s) => (
          <div key={s.lab} className="panel bg-deep border border-hairline px-7 py-6">
            <div className="text-gold text-[11px] font-bold tracking-[0.2em] uppercase mb-2 gold-text">{s.lab}</div>
            <div className="w-7 h-0.5 bg-gold mb-3" />
            <div className="font-serif text-[16px] text-paper leading-[1.5]">{s.items}</div>
          </div>
        ))}
      </div>
    </Section>
  );
}
