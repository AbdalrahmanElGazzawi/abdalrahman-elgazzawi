import { education, certs, languages } from "@/content/site";
import { Section } from "./Section";

export function Foundations() {
  return (
    <Section id="foundations" label="14 · Education & Languages" accent="Foundations.">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
        <div>
          <div className="text-gold text-[11px] font-bold tracking-[0.2em] uppercase mb-2 gold-text">Education</div>
          <div className="w-7 h-0.5 bg-gold mb-5" />
          {education.map((e) => (
            <div key={e.h} className="mb-5">
              <h3 className="font-serif text-[19px] mb-1">{e.h}</h3>
              <div className="text-muted text-[13px] muted-text">{e.sub}</div>
            </div>
          ))}
          <div className="text-gold text-[11px] font-bold tracking-[0.2em] uppercase mb-2 mt-8 gold-text">Certifications</div>
          <div className="w-7 h-0.5 bg-gold mb-3.5" />
          <div className="font-serif text-paper text-[16px] leading-[1.6]">{certs}</div>
        </div>
        <div>
          <div className="text-gold text-[11px] font-bold tracking-[0.2em] uppercase mb-2 gold-text">Languages</div>
          <div className="w-7 h-0.5 bg-gold mb-5" />
          {languages.map((l) => (
            <div key={l.name} className="mb-6">
              <div className="flex justify-between items-baseline mb-2">
                <div className="font-serif text-[19px]">{l.name}</div>
                <div className="text-gold text-[11px] font-bold tracking-[0.15em] uppercase gold-text">{l.level}</div>
              </div>
              <div className="h-1 bg-hairline rounded-sm">
                <div className="h-full bg-gold rounded-sm transition-all" style={{ width: `${l.pct}%` }} />
              </div>
            </div>
          ))}
        </div>
      </div>
    </Section>
  );
}
