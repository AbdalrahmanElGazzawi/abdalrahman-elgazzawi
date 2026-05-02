import { axes } from "@/content/site";
import { Section } from "./Section";

export function Methodology() {
  return (
    <Section id="methodology" label="04 · How The Engine Works" accent="The methodology, on one page.">
      <div className="panel bg-deep border border-gold px-6 py-9 text-center my-6">
        <div className="text-gold text-[11px] font-bold tracking-[0.25em] uppercase mb-4 gold-text">Final Price</div>
        <div className="font-serif text-[clamp(20px,2.4vw,28px)] leading-[1.5]">
          <span className="text-muted muted-text">MAX(</span>
          <span className="text-paper italic">SocialPrice</span>
          <span className="text-muted muted-text">,</span>{" "}
          <span className="text-paper italic">AuthorityFloor</span>
          <span className="text-muted muted-text">)</span>{" "}
          <span className="text-gold font-medium gold-text">×</span>{" "}
          <span className="text-paper italic">ConfidenceCap</span>{" "}
          <span className="text-gold font-medium gold-text">×</span>{" "}
          <span className="text-muted muted-text">(1 +</span>{" "}
          <span className="text-paper italic">RightsUplift</span>
          <span className="text-muted muted-text">)</span>
        </div>
      </div>
      <div className="label-eyebrow text-center">The 9-axis engine</div>
      <div className="grid grid-cols-3 sm:grid-cols-3 md:grid-cols-9 gap-2 mt-4">
        {axes.map((a, i) => (
          <div key={a} className="panel bg-deep border border-hairline px-1.5 py-4 text-center">
            <div className="font-serif italic text-gold text-[13px] gold-text">{String(i + 1).padStart(2, "0")}</div>
            <div className="text-paper text-[11px] font-semibold mt-2">{a}</div>
          </div>
        ))}
      </div>
      <p className="text-muted text-[13px] italic text-center mt-6 muted-text">
        Five base-rate methods (CPM · CPE · Comparables · Authority · Tier baseline) feed the MAX. Multipliers apply at quote time, never baked in.
      </p>
    </Section>
  );
}
