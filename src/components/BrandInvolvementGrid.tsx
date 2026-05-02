import { brandInvolvement } from "@/content/site";
import { Section } from "./Section";

const tierStyles: Record<string, { dot: string; tag: string; ring: string }> = {
  gold:    { dot: "bg-gold",          tag: "text-gold",         ring: "border-l-gold" },
  green:   { dot: "bg-green-glow",    tag: "text-green-glow",   ring: "border-l-green-glow" },
  neutral: { dot: "bg-muted",         tag: "text-muted",        ring: "border-l-rule" },
};

export function BrandInvolvementGrid() {
  return (
    <Section
      id="brands"
      eyebrow="// Brands & partners"
      title="Categorised by"
      accent="actual involvement."
      sub="Logo walls hide what really happened. This map separates closed deals from delivery work, pitched pipeline, and ecosystem ties — so the credibility is unambiguous."
    >
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-5">
        {brandInvolvement.map((cat) => {
          const s = tierStyles[cat.color] ?? tierStyles.neutral;
          return (
            <div key={cat.tier} className={`panel border-l-2 ${s.ring} p-6 sm:p-7`}>
              <div className="flex items-center gap-2.5 mb-5">
                <span className={`w-1.5 h-1.5 rounded-full ${s.dot}`} aria-hidden />
                <span className={`text-[10px] font-mono tracking-[0.18em] uppercase ${s.tag}`}>{cat.tier}</span>
              </div>
              <ul className="flex flex-wrap gap-1.5">
                {cat.items.map((item) => (
                  <li key={item} className="text-[12px] sm:text-[13px] font-mono border border-rule/80 text-paper px-2.5 py-1.5 hover:border-gold/60 transition-colors">
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          );
        })}
      </div>
      <p className="mt-6 text-[12px] font-mono text-muted tracking-[0.04em]">
        // Brand names referenced as past involvement only. Logos shown only where official asset usage is permitted.
      </p>
    </Section>
  );
}
