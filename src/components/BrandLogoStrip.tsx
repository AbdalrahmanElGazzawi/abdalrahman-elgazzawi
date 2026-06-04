import Image from "next/image";
import { brandLogos } from "@/content/site";
import { Section } from "./Section";

export function BrandLogoStrip() {
  return (
    <Section
      id="brands"
      eyebrow="Brands & partners"
      title="Closed, delivered,"
      accent="pitched."
      sub="A sample of brands and partners across the career — closed deals, agency-delivered campaigns, and federation engagements."
    >
      <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-7 gap-4 items-center">
        {brandLogos.map((b) => (
          <div
            key={b.name}
            className="relative aspect-[3/2] panel flex items-center justify-center p-4 grayscale opacity-70 hover:opacity-100 hover:grayscale-0 transition-all duration-300"
            title={b.name}
          >
            <Image
              src={b.src}
              alt={b.name}
              fill
              className="object-contain p-4"
              sizes="180px"
            />
          </div>
        ))}
      </div>
      <p className="mt-6 text-muted text-[13px] text-center">
        Full brand map at <a href="/about" className="text-gold hover:text-gold-soft underline underline-offset-4">/about</a>. Logos shown only where official usage is permitted.
      </p>
    </Section>
  );
}
