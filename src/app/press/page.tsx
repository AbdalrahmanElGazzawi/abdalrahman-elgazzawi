import Link from "next/link";
import { Nav } from "@/components/Nav";
import { Footer } from "@/components/Footer";

export const metadata = { title: "Press kit" };

export default function PressPage() {
  return (
    <>
      <Nav />
      <main className="container-page py-20 sm:py-24">
        <div className="label-eyebrow mb-6">Press kit</div>
        <h1 className="font-serif text-display-sm font-medium">For journalists & event organisers.</h1>
        <div className="gold-rule mt-4 mb-8" />
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-10">
          <section className="lg:col-span-2">
            <h2 className="font-serif italic text-[24px] text-paper mb-3">Short bio · 80 words</h2>
            <p className="text-paper text-[15px] leading-[1.7] mb-10 max-w-[680px]">
              Abdalrahman ElGazzawi (Koge) is a commercial operator across the esports and gaming lifecycle, with 10+ years across MENA and global markets. He is currently Esports Marketing Manager at Team Falcons in Riyadh, where he authored the team’s pricing methodology, 140-page Agency Framework v5.0, and the bilingual mandates pipeline. Earlier roles include SPORTFIVE on the Esports World Cup commercial cycle and BD work for Nvidia, Microsoft and ASUS at True Gaming.
            </p>
            <h2 className="font-serif italic text-[24px] text-paper mb-3">One-line bio</h2>
            <p className="text-paper text-[15px] leading-[1.7] mb-10 max-w-[680px]">
              Esports & Gaming Operator — commercial strategy, partnerships, marketing, operations. Currently at Team Falcons.
            </p>
            <h2 className="font-serif italic text-[24px] text-paper mb-3">Speaking topics</h2>
            <ul className="text-paper text-[15px] leading-[1.7] list-disc pl-5 max-w-[680px]">
              <li>Pricing methodology in esports — why most rate cards don’t survive contact with reality.</li>
              <li>The 4-phase Brand Investment Model: from advertising on-ramp to equity participation.</li>
              <li>Saudi Vision 2030, Gamers8, and the EWC: what changed in MENA esports commercial.</li>
              <li>Hybrid commercial-technical operating: when sales and product are the same job.</li>
            </ul>
          </section>
          <aside>
            <h2 className="font-serif italic text-[24px] text-paper mb-3">Files</h2>
            <ul className="space-y-2 text-[14px]">
              <li><Link className="text-gold hover:underline" href="/downloads/Abdalrahman_ElGazzawi_Resume_2026.pdf">Résumé (PDF)</Link></li>
              <li><Link className="text-gold hover:underline" href="/downloads/Abdalrahman_ElGazzawi_Portfolio_2026.pdf">Full portfolio (PDF)</Link></li>
              <li><Link className="text-gold hover:underline" href="/downloads/Abdalrahman_ElGazzawi_Portfolio_OnePage.html">Single-page HTML</Link></li>
              <li><Link className="text-gold hover:underline" href="/img/hero.jpg">Headshot — stage</Link></li>
              <li><Link className="text-gold hover:underline" href="/img/contact.jpg">Headshot — desk</Link></li>
            </ul>
            <h2 className="font-serif italic text-[24px] text-paper mt-10 mb-3">Contact</h2>
            <p className="text-paper text-[14px]">Email: <a className="text-gold hover:underline" href="mailto:abdghazzawi1@gmail.com">abdghazzawi1@gmail.com</a></p>
          </aside>
        </div>
      </main>
      <Footer />
    </>
  );
}
