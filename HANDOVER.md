# Portfolio · How to keep it updated

## TL;DR: the places you'll touch

1. **`src/content/site.ts`**: most of the site's content. Homepage case-study
   cards (`caseStudies`), the brand lists, the About page (experience,
   education, certifications, languages, skills), nav links, CV downloads, and
   contact details. Edit it and push to `main`. Vercel rebuilds in ~90 seconds.
2. **`src/app/case-studies/<slug>/page.tsx`**: each case study. Most use the
   shared `CaseStudyPage` template (`src/components/CaseStudyTemplate.tsx`);
   the Team Falcons and Esports World Cup pages read their copy from
   `caseStudies` in `site.ts`.
3. **`src/app/notes/<slug>/page.tsx`**: each note essay is one TSX file.
   To add a new one: copy the existing folder, rename the slug, edit the
   prose, and add the metadata to `src/content/notes.ts` (the sitemap picks
   it up from there).

### Adding a case study

- Create `src/app/case-studies/<slug>/page.tsx` (copy an existing one).
- To show it as a homepage card, add it to `caseStudies` in `site.ts` and its
  photo to `heroImages` in `src/app/page.tsx`.
- If it isn't a homepage card but is linked from another case study, add the
  slug to `linkedCaseStudies` in `src/app/sitemap.ts`.
- Build page metadata with `pageMetadata()` from `src/lib/metadata.ts` so the
  page gets its own canonical URL and share preview.

## How a deploy happens

You push to `main` on **github.com/AbdalrahmanElGazzawi/abdalrahman-elgazzawi**,
Vercel auto-deploys to **abdalrahman-elgazzawi.vercel.app** within ~90 seconds.
There's no preview/staging branch: `main` is production. If you want a
preview, push a branch and Vercel auto-creates a preview URL.

## How to push from your laptop

Once, set up a local clone (Node.js 20.9 or newer):

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
npm run typecheck && npm run lint   # catches mistakes before Vercel does
git add -A
git commit -m "tweak: update case study copy"
git push origin main
# Vercel deploys automatically. Open the deploy log at vercel.com if you want to watch.
```

## Where the env vars live

Two surfaces: `.env.local` (local dev only, gitignored) and Vercel project
settings (production). The contact form needs at least one delivery channel:

- `RESEND_API_KEY`: get one at resend.com.
- `CONTACT_TO_EMAIL`: defaults to the site email in `site.ts` if unset.
- `CONTACT_FROM_EMAIL`: defaults to Resend's `onboarding@resend.dev`; swap to
  an address on your own domain once you verify it in Resend.

Optional Supabase (for storing form submissions in a `messages` table):

- `NEXT_PUBLIC_SUPABASE_URL`
- `NEXT_PUBLIC_SUPABASE_ANON_KEY`
- `SUPABASE_SERVICE_ROLE_KEY`

If neither Resend nor Supabase is configured, the form is hidden on `/contact`
(visitors still get the email address and the mailto cards) and `/api/contact`
returns an error instead of pretending the message was sent. After adding the
keys in Vercel, redeploy so the form appears.

## Stack

Next.js 16 (App Router, Turbopack) · React 19 · TypeScript · Tailwind CSS 3 ·
`next/og` for the Open Graph image · Resend for email · Supabase for the
optional message log · Vercel Analytics + Speed Insights enabled.

## Common edits

- **Change your portrait:** replace `public/photos/portrait.jpg`.
- **Change the homepage brand logos:** edit the `featured` list in the
  `Brands` section of `src/app/page.tsx` (SVGs live in `public/brands/`).
- **Change the OG image (the social-share preview):** edit
  `src/app/api/og/route.tsx`. It renders to a static PNG at build time;
  visit `/api/og` in your browser to preview.
- **Add a downloadable file:** drop it into `public/downloads/` and add an
  entry to `downloads` in `src/content/site.ts`.
- **Update a CV:** edit the `.docx` in `public/downloads/`, then export it to
  PDF with the same file name (the current PDFs were exported from
  LibreOffice Writer). `/resume` redirects to the General CV PDF.

## Things deliberately left for v2

- MDX-native notes (currently TSX-per-note; works fine, easy to upgrade).
- Login-gated deep Falcons numbers page (the SAR 17.6M audit, methodology
  engine internals). Add when you have a recruiter who wants the deep dive.
- Custom domain. Buy one at a registrar (`.com`, `.dev`, `.gg`), add it to the
  Vercel project settings, and update the DNS records per Vercel's
  instructions.

Built by Claude · 2026-05-02 · updated 2026-10-12
