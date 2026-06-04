// src/app/downloads/page.tsx
import { Nav } from "@/components/Nav";
import { Footer } from "@/components/Footer";
import { Section } from "@/components/Section";
import { downloads } from "@/content/site";

export const metadata = {
  title: "Downloads",
  description: "CV downloads — general commercial and esports/gaming formats.",
};

export default function DownloadsPage() {
  return (
    <>
      <Nav />
      <main>
        <Section
          eyebrow="Downloads"
          title="Two formats,"
          accent="one operator."
          sub="Pick the framing that fits the role. ATS-friendly Word and PDF versions."
          topRule={false}
        >
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {downloads.map((d) => (
              <a key={d.href} href={d.href} className="panel lift p-6 sm:p-8 block">
                <div className="eyebrow">CV</div>
                <div className="text-paper text-[22px] sm:text-[24px] font-bold mt-2 tracking-tight">{d.label}</div>
                <div className="text-muted text-[14px] mt-2 leading-[1.6]">{d.description}</div>
                <div className="mt-4 text-gold font-semibold text-[13px]">Download PDF ↓</div>
              </a>
            ))}
          </div>
        </Section>
      </main>
      <Footer />
    </>
  );
}
