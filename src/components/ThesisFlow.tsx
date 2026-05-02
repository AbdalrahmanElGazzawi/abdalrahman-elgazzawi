import { thesisFlow } from "@/content/site";
import { Section } from "./Section";

export function ThesisFlow() {
  return (
    <Section
      id="thesis"
      eyebrow="// Core thesis"
      title="Esports revenue breaks when pricing,"
      accent="rights, talent, and delivery live in separate places."
      sub="My work connects them into one commercial operating system. One source of truth for rates. One framework for partners. One pipeline for what's live, what's renewing, what's at risk."
    >
      <div className="mt-2">
        <div className="hair-rule mb-10" />
        <ol className="grid grid-cols-2 sm:grid-cols-4 lg:grid-cols-8 gap-px bg-hairline border border-hairline" aria-label="Commercial OS connected layers">
          {thesisFlow.map((node, i) => (
            <li key={node} className="bg-bg p-5 relative group transition-colors hover:bg-deep/60">
              <div className="text-[10px] font-mono text-gold tracking-[0.18em] uppercase">{String(i + 1).padStart(2, "0")}</div>
              <div className="mt-2 font-serif italic text-[18px] text-paper">{node}</div>
              {i < 7 && <div aria-hidden className="hidden lg:block absolute top-1/2 right-[-1px] -translate-y-1/2 w-2 h-px bg-gold/40" />}
            </li>
          ))}
        </ol>
      </div>
    </Section>
  );
}
