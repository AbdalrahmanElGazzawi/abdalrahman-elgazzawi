import Image from "next/image";
import { brandInvolvement } from "@/content/site";
import { Section } from "./Section";

// Featured logos — only brands where official asset usage is publicly permitted.
// Sony / NVIDIA / ASUS / Lenovo (public press-kit equivalents via simpleicons.org).
// Rendered paper-tone, full-opacity at default; restrained, not a logo wall.
const featuredLogos: { src: string; alt: string; ratio: number }[] = [
  { src: "/brands/sony.svg",   alt: "Sony",   ratio: 5.4 },
  { src: "/brands/nvidia.svg", alt: "NVIDIA", ratio: 5.6 },
  { src: "/brands/asus.svg",   alt: "ASUS",   ratio: 5.4 },
  { src: "/brands/lenovo.svg", alt: "Lenovo", ratio: 4.8 },
];

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
      {/* Featured logos — restrained marquee row, paper tone, public-permission only */}
      <div className="mb-10 sm:mb-12 border-y border-hairline">
        <div className="py-7 sm:py-9 grid grid-cols-2 sm:grid-cols-4 gap-x-8 sm:gap-x-12 gap-y-6 items-center">
          {featuredLogos.map((l) => (
            <div key={l.alt} className="relative h-7 sm:h-8 opacity-65 hover:opacity-100 transition-opacity duration-300">
              <Image
                src={l.src}
                alt={l.alt}
                fill
                sizes="(min-width: 640px) 200px, 50vw"
                className="object-contain object-left"
              />
            </div>
          ))}
        </div>
      </div>

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
        // Brand names referenced as past involvement only. Logo marks shown only where official asset usage is publicly permitted.
      </p>
    </Section>
  );
}
