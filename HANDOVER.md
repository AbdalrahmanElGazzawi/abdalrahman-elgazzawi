# Portfolio · How to keep it updated

## TL;DR — three places you'll touch

1. **`src/content/site.ts`** — the single source of truth for *all* homepage
   content. Hero copy, the five "by the numbers" cards, the Falcons pillars,
   the methodology axes, the four investment phases, the Sony INZONE closed
   deal, the active pipeline, EWC stats, BD cards, advisory rows, earlier
   chapters, principles, stack, brand list, education/languages, contact info.
   Edit it and push to `main`. Vercel rebuilds in ~90 seconds.
2. **`src/app/work/falcons/page.tsx`** — the deeper Falcons case study. Long-
   form prose. Edit directly.
3. **`src/app/notes/<slug>/page.tsx`** — each note essay is one TSX file.
   To add a new one: copy the existing folder, rename the slug, edit the
   prose, and add the metadata to `src/content/notes.ts`.

## How a deploy happens

You push to `main` on **github.com/AbdalrahmanElGazzawi/abdalrahman-elgazzawi**,
Vercel auto-deploys to **abdalrahman-elgazzawi.vercel.app** within ~90 seconds.
There's no preview/staging branch — `main` is production. If you want a
preview, push a branch and Vercel auto-creates a preview URL.

## How to push from your laptop

Once, set up a local clone:

```bash
cd ~/Documents
git clone https://github.com/AbdalrahmanElGazzawi/abdalrahman-elgazzawi.git
cd abdalrahman-elgazzawi
npm install
npm run dev   # http://localhost:3000
```

To make a change:

```bash
# edit src/content/site.ts (or any other file)
git add -A
git commit -m "tweak: update Falcons pipeline numbers"
git push origin main
# Vercel deploys automatically. Open the deploy log at vercel.com if you want to watch.
```

## Where the env vars live

Two surfaces: `.env.local` (local dev only, gitignored) and Vercel project
settings (production). The contact form needs:

- `RESEND_API_KEY` — get one free at resend.com (3,000 emails/mo free tier).
- `CONTACT_TO_EMAIL` — defaults to `a.faroukbiz2@gmail.com` if unset.
- `CONTACT_FROM_EMAIL` — Resend gives you `onboarding@resend.dev` to start;
  swap to your domain once you verify it.

Optional Supabase (for storing form submissions in a DB):

- `NEXT_PUBLIC_SUPABASE_URL`
- `NEXT_PUBLIC_SUPABASE_ANON_KEY`
- `SUPABASE_SERVICE_ROLE_KEY`

If neither is set, the contact form still works visually — it just doesn't
deliver anywhere. Add the keys when you're ready.

## Stack

Next.js 14 (App Router) · TypeScript · Tailwind CSS · `next/og` for the
auto-generated Open Graph image · Resend for email · Supabase for the
optional message log · Vercel Analytics + Speed Insights enabled.

## Common edits

- **Change your hero photo:** drop a new `hero.jpg` into `public/img/`.
  Same for `contact.jpg`.
- **Add a brand to the logo strip:** drop a PNG into `public/img/` named
  `brand-foo.png`, then add it to `brandLogos` in `src/content/site.ts`.
- **Change the OG image (the social-share preview):** edit
  `src/app/api/og/route.tsx`. It's a React component that renders to PNG
  at deploy time — visit `/api/og` in your browser to preview.
- **Add a downloadable file:** drop it into `public/downloads/` and add an
  entry to the `files` array in `src/app/downloads/page.tsx`.

## Things deliberately left for v2

- MDX-native notes (currently TSX-per-note — works fine, easy to upgrade).
- Login-gated deep Falcons numbers page (the SAR 17.6M audit, methodology
  engine internals). Add when you have a recruiter who wants the deep dive.
- Custom domain. Buy at Namecheap or Porkbun (~$10-40/yr for `.com`,
  `.dev`, `.gg`); add it to the Vercel project settings, swap the DNS
  record per Vercel's instructions.

— Built by Claude · 2026-05-02
