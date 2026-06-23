// src/app/case-studies/team-falcons-commercial-stack/page.tsx
import { Nav } from "@/components/Nav";
import { Footer } from "@/components/Footer";
import { Section } from "@/components/Section";
import { MediaGallery } from "@/components/MediaGallery";
import { caseStudies } from "@/content/site";

const cs = caseStudies.find((c) => c.slug === "team-falcons-commercial-stack")!;

export const metadata = {
  title: cs.title,
  description: cs.subtitle,
};

export default function FalconsCaseStudy() {
  return (
    <>
      <Nav />
      <main>
        <Section
          eyebrow={cs.eyebrow}
          title="Building a commercial partnership and"
          accent="campaign operations stack for Team Falcons."
          sub={cs.subtitle}
          topRule={false}
        >
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mb-8">
            <div className="panel p-4">
              <div className="eyebrow mb-2">Role</div>
              <div className="text-paper font-semibold text-[15px]">{cs.role}</div>
            </div>
            <div className="panel p-4">
              <div className="eyebrow mb-2">Dates</div>
              <div className="text-paper font-semibold text-[15px]">{cs.timeframe}</div>
            </div>
            <div className="panel p-4">
              <div className="eyebrow mb-2">Location</div>
              <div className="text-paper font-semibold text-[15px]">{cs.location}</div>
            </div>
          </div>

          <div className="panel p-6 sm:p-7">
            <div className="eyebrow mb-4">Impact</div>
            <ul className="space-y-3 list-none">
              {cs.proofBullets!.map((b, i) => (
                <li key={i} className="text-paper/90 text-[15px] leading-[1.65] pl-5 relative">
                  <span className="absolute left-0 top-2 w-2 h-2 bg-gold" />
                  {b}
                </li>
              ))}
            </ul>
          </div>

          <div className="mt-6 flex flex-wrap gap-1.5">
            {cs.tags.map((t) => (
              <span key={t} className="text-[12px] font-medium border border-rule/80 text-muted px-2 py-1">{t}</span>
            ))}
          </div>
        </Section>
        <MediaGallery
          items={[
            { type: "photo", src: "/work/team-falcons-commercial-stack.jpg", alt: "Team Falcons brand surface", caption: "Riyadh, 2026. Fixed-term commercial partnerships engagement.", tag: "Engagement" },
            { type: "photo", src: "/photos/falcons-card.jpg", alt: "Team Falcons context", caption: "Tier-1 esports organisation, Saudi Arabia.", tag: "Context" },
          ]}
          title="Engagement surface."
          accent="Internal artifacts withheld by contract."
        />
      </main>
      <Footer />
    </>
  );
}
