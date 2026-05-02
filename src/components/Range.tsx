import { range } from "@/content/site";
import { Section } from "./Section";

export function Range() {
  return (
    <Section id="range" label="02 · Operating Range" title={<>Four disciplines.<br /></>} accent="One operator.">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-6">
        {range.map((q) => (
          <div key={q.num} className="panel bg-deep border border-hairline border-l-[3px] border-l-gold p-7 sm:p-8">
            <div className="font-serif italic text-gold text-[14px] tracking-[0.1em] mb-2 gold-text">{q.num}</div>
            <h3 className="font-serif text-[26px] mb-3.5 text-paper">{q.title}</h3>
            <p className="text-muted text-[14px] muted-text">{q.body}</p>
          </div>
        ))}
      </div>
    </Section>
  );
}
