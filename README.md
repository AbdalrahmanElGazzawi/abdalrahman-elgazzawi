# Abdalrahman ElGazzawi · Portfolio

Personal portfolio for senior commercial roles in esports & gaming.
Built with Next.js 16 (App Router) · React 19 · TypeScript · Tailwind CSS · Supabase · Resend.

## Local dev

Requires Node.js 20.9 or newer.

```bash
npm install
cp .env.example .env.local   # fill in any keys you need
npm run dev                  # http://localhost:3000
```

Before pushing:

```bash
npm run typecheck
npm run lint
npm run build
```

## Update your content

Most site content lives in `src/content/site.ts`. Edit it and push to `main`
to redeploy. See `HANDOVER.md` for the other places you'll touch.
