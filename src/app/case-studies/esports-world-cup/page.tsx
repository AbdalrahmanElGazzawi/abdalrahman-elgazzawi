// src/app/case-studies/esports-world-cup/page.tsx
import { Nav } from "@/components/Nav";
import { Footer } from "@/components/Footer";
import { Section } from "@/components/Section";
import { caseStudies } from "@/content/site";

const cs = caseStudies.find((c) => c.slug === "esports-world-cup")!;

export const metadata = {
  title: cs.title,
  description: cs.subtitle,
};

export default function SportfiveCaseStudy() {
  return (
    <>
      <Nav />
      <main>
        <Section
          eyebrow={cs.eyebrow}
          title="Enterprise-scale"
          accent="commercial delivery."
          sub={cs.subtitle}
          topRule={false}
        >
          {/* Metric strip */}
          <div className="grid grid-cols-2 sm:grid-cols-5 gap-3 mb-8">
            {[
              ["778+", "Deliverables"],
              ["5M+",  "Viewers"],
              ["78+",  "Brands pitched"],
              ["5",    "Agencies"],
              ["6",    "New clients"],
            ].map(([n, l]) => (
              <div key={l} className="panel p-4 text-center">
                <div className="text-gold text-[24px] font-bold tab-nums">{n}</div>
                <div className="text-muted text-[11px] font-medium uppercase tracking-wider mt-1">{l}</div>
              </div>
            ))}
          </div>

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
      </main>
      <Footer />
    </>
  );
}
