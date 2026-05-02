import { principles } from "@/content/site";
import { Section } from "./Section";

export function Principles() {
  return (
    <Section id="principles" label="11 · Operating Principles" accent="How I work.">
      <div className="mt-8">
        {principles.map((p) => (
          <div key={p.n} className="grid grid-cols-[60px_1fr] sm:grid-cols-[80px_1fr] gap-6 py-6 border-b border-hairline last:border-none items-start">
            <div className="font-serif italic text-gold text-[28px] gold-text">{p.n}</div>
            <div>
              <h3 className="font-serif text-[22px] sm:text-[24px] mb-2">{p.title}</h3>
              <p className="text-muted text-[14px] muted-text">{p.body}</p>
            </div>
          </div>
        ))}
      </div>
    </Section>
  );
}
