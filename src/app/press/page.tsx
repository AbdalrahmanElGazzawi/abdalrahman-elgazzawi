import { Nav } from "@/components/Nav";
import { Footer } from "@/components/Footer";
import { site } from "@/content/site";
import { pageMetadata } from "@/lib/metadata";

export const metadata = pageMetadata({
  title: "Press kit",
  description: "Bios, speaking topics, headshots, and files for journalists and event organisers.",
  path: "/press",
});

export default function PressPage() {
  return (
    <>
      <Nav />
      <main className="container-page py-20 sm:py-24">
        <div className="eyebrow mb-6">Press kit</div>
        <h1 className="font-serif text-display-s font-medium">For journalists & event organisers.</h1>
        <div className="h-px w-16 bg-gold mt-4 mb-8" />
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-10">
          <section className="lg:col-span-2">
            <h2 className="font-serif italic text-[24px] text-paper mb-3">Short bio</h2>
            <p className="text-paper text-[15px] leading-[1.7] mb-10 max-w-[680px]">
              Abdalrahman ElGazzawi (Koge) runs commercial partnerships and campaign operations for brands, agencies, teams, and entertainment businesses, with ten plus years across esports, sports, entertainment, and MENA market work. Most recently he completed a fixed-term commercial partnerships consultancy with Team Falcons (Feb to May 2026), where he operated the closed Sony INZONE 2026 campaign end-to-end. Earlier roles include senior account management for SPORTFIVE on the Esports World Cup, and project management and business development at True Gaming with Nvidia, Microsoft, and ASUS. He has been a GLG Council Member since 2025.
            </p>
            <h2 className="font-serif italic text-[24px] text-paper mb-3">One-line bio</h2>
            <p className="text-paper text-[15px] leading-[1.7] mb-10 max-w-[680px]">
              Commercial partnerships and campaign operations across esports, sports, and entertainment. Based in Cairo, open to Riyadh, GCC, remote, and global roles.
            </p>
            <h2 className="font-serif italic text-[24px] text-paper mb-3">Speaking topics</h2>
            <ul className="text-paper text-[15px] leading-[1.7] list-disc pl-5 max-w-[680px]">
              <li>Pricing methodology in esports: why most rate cards don’t survive contact with reality.</li>
              <li>The 4-phase Brand Investment Model: from advertising on-ramp to equity participation.</li>
              <li>Saudi Vision 2030, Gamers8, and the EWC: what changed in MENA esports commercial.</li>
              <li>Hybrid commercial-technical operating: when sales and product are the same job.</li>
            </ul>
          </section>
          <aside>
            <h2 className="font-serif italic text-[24px] text-paper mb-3">Files</h2>
            <ul className="space-y-2 text-[14px]">
              <li><a className="text-gold hover:underline" href="/downloads/Abdalrahman_ElGazzawi_General_CV.pdf">General Commercial CV (PDF)</a></li>
              <li><a className="text-gold hover:underline" href="/downloads/Abdalrahman_ElGazzawi_Esports_CV.pdf">Esports / Gaming CV (PDF)</a></li>
              <li><a className="text-gold hover:underline" href="/img/hero.jpg">Headshot (stage)</a></li>
              <li><a className="text-gold hover:underline" href="/img/contact.jpg">Headshot (desk)</a></li>
            </ul>
            <h2 className="font-serif italic text-[24px] text-paper mt-10 mb-3">Contact</h2>
            <p className="text-paper text-[14px]">Email: <a className="text-gold hover:underline" href={`mailto:${site.email}`}>{site.email}</a></p>
          </aside>
        </div>
      </main>
      <Footer />
    </>
  );
}
