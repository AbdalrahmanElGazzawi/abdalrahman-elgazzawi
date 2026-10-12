import Link from "next/link";
import { Nav } from "@/components/Nav";
import { Footer } from "@/components/Footer";
import { notes } from "@/content/notes";
import { pageMetadata } from "@/lib/metadata";

export const metadata = pageMetadata({
  title: "Notes",
  description: "Notes on esports commercial strategy, pricing methodology, and operating in MENA.",
  path: "/notes",
});

export default function NotesIndex() {
  return (
    <>
      <Nav />
      <main className="container-page py-20 sm:py-24">
        <div className="eyebrow mb-6">Writing · Notes</div>
        <h1 className="font-serif text-display-s font-medium">Notes.</h1>
        <div className="h-px w-16 bg-gold mt-4 mb-6" />
        <p className="text-muted text-[15px] max-w-[640px] mb-12">Short essays on esports commercial strategy, pricing methodology, and operating across MENA.</p>
        <ul className="grid gap-6">
          {notes.map((n) => (
            <li key={n.slug}>
              <Link href={`/notes/${n.slug}`} className="block panel bg-deep border border-hairline border-l-[3px] border-l-gold p-7 hover:border-gold transition-colors">
                <div className="text-gold text-[10px] font-bold tracking-[0.2em] uppercase">{n.date} · {n.readTime}</div>
                <h2 className="font-serif italic text-[26px] mt-2">{n.title}</h2>
                <p className="text-muted text-[14px] mt-3 max-w-[680px]">{n.summary}</p>
                <div className="text-gold text-[12px] font-semibold mt-4 tracking-[0.1em] uppercase">Read →</div>
              </Link>
            </li>
          ))}
        </ul>
      </main>
      <Footer />
    </>
  );
}
