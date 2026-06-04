// Live campaigns — Instagram + TikTok + YouTube embeds.
// Each item proves the campaign shipped: real views, real reach, real handle.
const campaigns = [
  {
    type: "instagram" as const,
    id: "DYpnOXKMdm5",
    title: "Spy × NVIDIA RTX 50 — Frames Win Games",
    handle: "@spyerfrog · Falcons player",
    meta: "124 likes · Q2 2026",
  },
  {
    type: "instagram" as const,
    id: "DYfElgkog_o",
    title: "Sony INZONE × Saudi Creator",
    handle: "@itmadv · #INZONEBySony",
    meta: "2.1K likes · Q1 2026",
  },
  {
    type: "instagram" as const,
    id: "DYhI-iFsqzj",
    title: "Sony INZONE × Saudi Creator",
    handle: "@xsma333 · #DesignedToWin",
    meta: "1.7K likes · Q1 2026",
  },
  {
    type: "instagram" as const,
    id: "DW6t8x3iGb3",
    isReel: true,
    title: "Sony INZONE — Arabic Reel",
    handle: "@spyerfrog · Falcons player",
    meta: "INZONE M3 launch · Q1 2026",
  },
  {
    type: "tiktok" as const,
    id: "7609041299567578375",
    handle: "@k2nn8",
    title: "TikTok Activation",
    meta: "Falcons / partner content",
  },
  {
    type: "youtube" as const,
    id: "qIXmQVjFM6o",
    title: "Falcons CDL Watch Party — Riyadh",
    handle: "Abu Najd · Falcons content",
    meta: "43K views · 6h 53m · Jan 2026",
  },
];

export function LiveCampaigns() {
  return (
    <section id="campaigns" className="scroll-mt-20 bg-bg">
      <div className="container-page py-24 md:py-32">
        <p className="eyebrow mb-5">Live campaigns</p>
        <h2 className="text-display-s sm:text-display-m max-w-[900px] font-light leading-[1.05]">
          Campaigns I operated,<br /><em className="italic text-gold">live in market.</em>
        </h2>
        <p className="mt-6 text-[14px] italic text-muted max-w-[640px]">
          Sony INZONE × Team Falcons (creator-led, bilingual EN/AR). NVIDIA RTX × Spy. Falcons broadcast & CDL.
        </p>
        <div className="mt-14 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {campaigns.map((c, i) => {
            const src =
              c.type === "instagram"
                ? `https://www.instagram.com/${c.isReel ? "reel" : "p"}/${c.id}/embed/captioned/`
                : c.type === "tiktok"
                ? `https://www.tiktok.com/embed/v2/${c.id}`
                : `https://www.youtube.com/embed/${c.id}`;
            const ratio = c.type === "tiktok" || (c.type === "instagram" && (c.isReel || true))
              ? c.type === "youtube" ? "aspect-video" : "aspect-[9/16]"
              : "aspect-video";
            // Force YouTube to 16:9, IG/TikTok to 9:16 portrait
            const wrapperRatio = c.type === "youtube" ? "aspect-video" : "aspect-[9/16]";
            return (
              <article key={`${c.type}-${c.id}`} className="group">
                <div className={`relative ${wrapperRatio} overflow-hidden rounded-[14px] border border-hairline bg-deep`}>
                  <iframe
                    src={src}
                    title={c.title}
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                    allowFullScreen
                    loading="lazy"
                    className="absolute inset-0 w-full h-full"
                    scrolling="no"
                  />
                </div>
                <div className="mt-4">
                  <p className="text-[10px] tracking-[0.22em] uppercase text-gold">{`0${i+1} · ${c.type === "youtube" ? "YouTube" : c.type === "tiktok" ? "TikTok" : c.isReel ? "Instagram Reel" : "Instagram"}`}</p>
                  <h3 className="mt-3 italic text-[20px] text-paper leading-tight font-normal">{c.title}</h3>
                  <p className="mt-1 text-[13px] text-muted">{c.handle}</p>
                  <p className="mt-3 text-[12px] uppercase tracking-[0.16em] text-dim">{c.meta}</p>
                </div>
              </article>
            );
          })}
        </div>
      </div>
      <div className="container-page"><div className="h-px bg-gold/25" /></div>
    </section>
  );
}
