import Link from "next/link";
import { Nav } from "@/components/Nav";
import { Footer } from "@/components/Footer";

export const metadata = { title: "Downloads" };

const files = [
  { href: "/downloads/Abdalrahman_ElGazzawi_Resume_2026.pdf",        title: "Résumé · 2026 (PDF)",          desc: "Two-page ATS-friendly résumé.",                                          size: "76 KB" },
  { href: "/downloads/Abdalrahman_ElGazzawi_Resume_2026.docx",       title: "Résumé · 2026 (DOCX)",         desc: "Editable Word version of the résumé.",                                  size: "13 KB" },
  { href: "/downloads/Abdalrahman_ElGazzawi_Portfolio_2026.pdf",     title: "Full Portfolio · 2026 (PDF)",  desc: "Long-form portfolio document — every project, every chapter.",          size: "1.3 MB" },
  { href: "/downloads/Abdalrahman_ElGazzawi_Portfolio_OnePage.html", title: "Single-Page Portfolio (HTML)", desc: "Self-contained single-file HTML portfolio with embedded photos & logos.", size: "970 KB" },
];

export default function Downloads() {
  return (
    <>
      <Nav />
      <main className="container-page py-20 sm:py-24">
        <div className="label-eyebrow mb-6">For recruiters & partners</div>
        <h1 className="font-serif text-display-sm font-medium">Downloads.</h1>
        <div className="gold-rule mt-4 mb-6" />
        <p className="text-muted text-[15px] max-w-[640px] mb-12">
          Everything in one place — résumé, full portfolio document, single-page HTML. Right-click → Save As, or just open and print.
        </p>
        <ul className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {files.map((f) => (
            <li key={f.href}>
              <a href={f.href} download className="block panel bg-deep border border-hairline border-l-[3px] border-l-gold p-6 hover:border-gold transition-colors">
                <div className="text-gold text-[10px] font-bold tracking-[0.2em] uppercase">{f.size}</div>
                <h3 className="font-serif italic text-[22px] mt-2">{f.title}</h3>
                <p className="text-muted text-[13px] mt-2">{f.desc}</p>
                <div className="text-gold text-[12px] font-semibold mt-4 tracking-[0.1em] uppercase">Download →</div>
              </a>
            </li>
          ))}
        </ul>
        <div className="mt-12">
          <Link href="/" className="text-gold hover:underline text-[13px] tracking-[0.08em] uppercase">← Back to portfolio</Link>
        </div>
      </main>
      <Footer />
    </>
  );
}
