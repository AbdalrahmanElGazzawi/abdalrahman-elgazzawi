import { methodologyBlurb } from "@/content/site";
import { Section } from "./Section";

export function MethodologyCallout() {
  return (
    <Section
      id="how-i-work"
      eyebrow={methodologyBlurb.eyebrow}
      title="Clarify,"
      accent="structure, ship."
      sub={methodologyBlurb.body}
    >
      <div className="grid grid-cols-2 lg:grid-cols-4 gap-3">
        {methodologyBlurb.bullets.map((b, i) => (
          <div key={b} className="panel p-5">
            <div className="text-[11px] font-semibold uppercase tracking-wider text-gold">
              Step 0{i + 1}
            </div>
            <div className="text-paper text-[18px] sm:text-[20px] font-semibold mt-2">{b}</div>
          </div>
        ))}
      </div>
    </Section>
  );
}
