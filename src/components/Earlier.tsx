import { earlier } from "@/content/site";
import { Section } from "./Section";

export function Earlier() {
  return (
    <Section id="earlier" label="10 · Earlier Chapters" accent="How I learned the lifecycle.">
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-8 relative">
        <div aria-hidden className="hidden md:block absolute top-[165px] left-[5%] right-[5%] h-px bg-hairline" />
        {earlier.map((c) => (
          <div key={c.org} className="text-center relative">
            <div className="text-gold text-[11px] font-bold tracking-[0.2em] mb-3 gold-text">{c.yr}</div>
            <div className="font-serif text-[24px] text-paper mb-1.5">{c.org}</div>
            <div className="font-serif italic text-muted text-[14px] mb-6 muted-text">{c.role}</div>
            <div className="w-3.5 h-3.5 rounded-full bg-gold mx-auto mb-6 border-[3px] border-bg relative z-10" />
            <p className="text-paper text-[13px] leading-[1.55]">{c.note}</p>
          </div>
        ))}
      </div>
      <p className="text-center mt-14 text-muted italic font-serif text-[16px] muted-text">
        Range, accumulated.   QA → BD → Marketing → Operations → Strategy.
      </p>
    </Section>
  );
}
