import Image from "next/image";

export type MediaItem = {
  type: "photo" | "doc" | "video";
  src: string;            // image path OR video URL
  poster?: string;        // for videos: thumbnail image path
  alt: string;
  caption?: string;
  tag?: string;
  href?: string;          // external link (e.g. YouTube)
  aspect?: "16/9" | "4/3" | "3/4" | "1/1";
};

export function MediaGallery({
  items,
  eyebrow = "Evidence",
  title = "Photos, decks, deliverables.",
  accent = "What it actually looked like.",
}: {
  items: MediaItem[];
  eyebrow?: string;
  title?: string;
  accent?: string;
}) {
  if (!items?.length) return null;
  return (
    <section className="border-t border-hairline py-16 sm:py-20">
      <div className="container-page">
        <p className="eyebrow mb-4">{eyebrow}</p>
        <h2 className="font-serif text-display-s sm:text-display-m max-w-[24ch] text-paper font-normal leading-[1.06]">
          {title} <span className="text-paper">{accent}</span>
        </h2>
        <div className="mt-12 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {items.map((it, i) => {
            const aspect =
              it.aspect ||
              (it.type === "doc" ? "3/4" : it.type === "video" ? "16/9" : "4/3");
            const aspectClass = {
              "16/9": "aspect-video",
              "4/3":  "aspect-[4/3]",
              "3/4":  "aspect-[3/4]",
              "1/1":  "aspect-square",
            }[aspect];
            const Inner = (
              <>
                <div className={`relative ${aspectClass} overflow-hidden rounded-[8px] border border-hairline bg-panel`}>
                  {it.type === "video" && it.poster ? (
                    <Image src={it.poster} alt={it.alt} fill sizes="(min-width:1024px) 33vw, (min-width:640px) 50vw, 100vw" className="object-cover transition-transform duration-500 group-hover:scale-[1.02]" />
                  ) : (
                    <Image src={it.src} alt={it.alt} fill sizes="(min-width:1024px) 33vw, (min-width:640px) 50vw, 100vw" className="object-cover transition-transform duration-500 group-hover:scale-[1.02]" />
                  )}
                  {it.tag && (
                    <span className="absolute top-3 left-3 text-[10px] uppercase tracking-[0.16em] bg-panel/95 border border-hairline rounded-full px-2.5 py-1 text-muted">
                      {it.tag}
                    </span>
                  )}
                  {it.type === "video" && (
                    <span className="absolute inset-0 grid place-items-center pointer-events-none">
                      <span className="h-14 w-14 rounded-full bg-paper/90 text-bg grid place-items-center shadow-md">
                        <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true"><path d="M8 5v14l11-7z"/></svg>
                      </span>
                    </span>
                  )}
                </div>
                {(it.alt || it.caption) && (
                  <figcaption className="mt-3">
                    {it.alt && <div className="text-[14px] text-paper font-medium leading-snug">{it.alt}</div>}
                    {it.caption && <div className="text-[12.5px] text-muted mt-1 leading-snug">{it.caption}</div>}
                  </figcaption>
                )}
              </>
            );
            return it.href ? (
              <a key={i} href={it.href} target="_blank" rel="noopener noreferrer" className="group block">{Inner}</a>
            ) : (
              <figure key={i} className="group">{Inner}</figure>
            );
          })}
        </div>
      </div>
    </section>
  );
}
