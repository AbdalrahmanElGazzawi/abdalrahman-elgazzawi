// src/app/about/page.tsx
import { Nav } from "@/components/Nav";
import { Footer } from "@/components/Footer";
import { Section } from "@/components/Section";
import { site, aboutCopy, experience, education, certifications, languages, topSkills, competitiveCred } from "@/content/site";

export const metadata = {
  title: "About",
  description: "Commercial partnerships and campaign operations professional based in Cairo, Egypt — open to Riyadh, GCC, remote, and global roles.",
};

export default function AboutPage() {
  return (
    <>
      <Nav />
      <main>
        <Section
          id="about"
          eyebrow="About"
          title="Commercial partnerships &"
          accent="campaign operations."
          topRule={false}
        >
          <p className="text-paper/90 text-[17px] sm:text-[18px] leading-[1.7] max-w-prose">
            {aboutCopy}
          </p>
          <p className="mt-4 text-muted text-[14px] max-w-prose">
            Based in <span className="text-paper font-semibold">{site.location.split("·")[0].trim()}</span>. Open to Riyadh, GCC, Remote, and Global opportunities.
          </p>
        </Section>

        <Section id="experience" eyebrow="Experience" title="Roles" accent="and what shipped.">
          <ol className="space-y-8 list-none">
            {experience.map((e, i) => (
              <li key={i} className="panel p-6 sm:p-7">
                <div className="flex flex-wrap items-baseline justify-between gap-2">
                  <div>
                    <div className="text-paper font-bold text-[18px] sm:text-[19px]">{e.role}</div>
                    <div className="text-gold font-semibold text-[14px] mt-0.5">{e.company}</div>
                  </div>
                  <div className="text-muted text-[12px] font-semibold uppercase tracking-wider">{e.years}{e.location ? " · " + e.location : ""}</div>
                </div>
                <p className="mt-3 text-paper/85 text-[14px] leading-[1.65]">{e.impact}</p>
                {e.proof.length > 0 && (
                  <ul className="mt-3 space-y-1 list-disc pl-5">
                    {e.proof.map((p, j) => (
                      <li key={j} className="text-muted text-[13px] leading-[1.6]">{p}</li>
                    ))}
                  </ul>
                )}
              </li>
            ))}
          </ol>
        </Section>

        <Section id="education" eyebrow="Education · Certifications · Languages · Skills" title="Background." accent="">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="panel p-6">
              <div className="eyebrow mb-3">Education</div>
              <ul className="space-y-2 list-none">
                {education.map((e, i) => (
                  <li key={i} className="text-[14px]">
                    <span className="text-paper font-semibold">{e.school}</span>
                    <span className="text-muted"> — {e.degree}{(e as any).years ? ` (${(e as any).years})` : ""}</span>
                  </li>
                ))}
              </ul>
            </div>
            <div className="panel p-6">
              <div className="eyebrow mb-3">Certifications</div>
              <ul className="space-y-1 list-none">
                {certifications.map((c, i) => (
                  <li key={i} className="text-muted text-[14px]">· {c}</li>
                ))}
              </ul>
            </div>
            <div className="panel p-6">
              <div className="eyebrow mb-3">Languages</div>
              <ul className="space-y-1 list-none">
                {languages.map((l, i) => (
                  <li key={i} className="text-[14px]"><span className="text-paper font-semibold">{l.name}</span> <span className="text-muted">— {l.level}</span></li>
                ))}
              </ul>
            </div>
            <div className="panel p-6">
              <div className="eyebrow mb-3">Top skills</div>
              <div className="flex flex-wrap gap-1.5">
                {topSkills.map((s) => (
                  <span key={s} className="text-[12px] font-medium border border-rule/80 text-paper px-2 py-1">{s}</span>
                ))}
              </div>
            </div>
          </div>
        </Section>

        <Section id="competitive" eyebrow="Differentiator" title="Lifetime in" accent="competitive games.">
          <p className="text-muted text-[14px] mb-6 max-w-prose">{competitiveCred.intro}</p>
          <ul className="grid grid-cols-1 sm:grid-cols-2 gap-3 list-none">
            {competitiveCred.ranks.map((r) => (
              <li key={r.game} className="panel p-4">
                <div className="text-paper font-semibold text-[14px]">{r.game}</div>
                <div className="text-gold text-[13px] mt-0.5">{r.rank}</div>
              </li>
            ))}
          </ul>
        </Section>
      </main>
      <Footer />
    </>
  );
}
