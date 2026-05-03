# Portfolio v3.0 — De-Falconsed, more cases, new fonts, esports-native

**Live:** https://abdalrahman-elgazzawi.vercel.app
**Date:** 2026-05-03
**Source materials added:** LinkedIn Profile PDF · public portfolio PPTX · GLG payments screenshot

## What changed in v3 (vs v2)

### Positioning rebalance
- Falcons content compressed; **5 of 7 case studies are non-Falcons** now.
- New "Competitor before commercial" section — sober treatment of competitive gaming achievements (Top 10 Warzone, Rank 1 HoN, Top 25 WoW, Top 100 Super People, Top 200 PUBG, Top 500 Dota 1).
- Earliest gaming chapter (Damascus internet café 2012) added to the about page.
- Damascus origin now in `site.location` — humanises the story without leading with it.

### Three new case studies added
- **/case-studies/glg-advisory** — Council Member at GLG, paid expert consultations on esports leagues, sports/fighting franchises, MENA market dynamics. Content sanitized: topic areas only, no client identities, no payment amounts.
- **/case-studies/true-gaming-leap** — LEAP Expo (147 contacts, 6 new clients), Awards Event SOP, Nvidia/Microsoft/ASUS/AstraNova activations. Concrete numbers throughout.
- **/case-studies/telecom-egypt-raad** — National telco esports infrastructure: venue construction at sporting club, PMPL bootcamp at Telecom HQ in <1 week, KPI/KRI scorecards.

### Existing case studies refined
- Team Falcons commercial stack — stays but **homepage card de-emphasized** (less SAR-amount detail in the surface card; full detail on the dedicated page).
- Sony INZONE — unchanged, still proof-of-close.
- EWC — added SEF IP commercial roadmap detail from the PPTX.
- Falcons Pricing OS — kept as separate technical-product proof.

### Font swap
- **Cormorant Garamond → Fraunces** (variable serif with optical-size and SOFT axes).
- Reads more "Bloomberg / Stripe" than "wedding invitation."
- Inter (body) and JetBrains Mono (system labels) kept.
- Same fallback chain (Georgia for serif, system-ui for sans).

### New proof points surfaced
- 147 LEAP Expo contacts (was missing)
- 6 new clients onboarded at LEAP (was missing)
- 25% revenue growth at EWC/SPORTFIVE (was 20% — corrected from PPTX)
- GLG Council Member tenure — April 2025 to present (1+ year)
- AstraNova added to True Gaming brand list
- HSC (Heliopolis Sporting Club) added to brand pipeline list
- Adrenaline (Damascus internet café) added as earliest gaming chapter

### Brand involvement updated
- Added: AstraNova, RA'AD Esports, HSC (Heliopolis Sporting Club), Adrenaline (Damascus)
- All categorised by actual depth (Closed/Delivered/Pitched/Ecosystem)

## Confidentiality treatment

### What's now exposed (public-safe)
- GLG council membership + topic areas (esports leagues, sports games, MENA)
- Specific franchise names referenced as topic areas only (ESL, Faceit, EA Sports FC, Madden) — these are public IPs, not client names
- LEAP Expo numbers (147 contacts, 6 new clients) — already in your public PPTX
- Competitive gaming achievements — your own personal record
- Damascus origin — already in your LinkedIn, fine to reference

### What's actively hidden
- GLG client identities — never named (would breach network terms)
- GLG payment amounts — visible only in your private GLG payments page, not on the site
- Specific consultation content — not disclosed
- All Falcons internal rates, methodology specifics, individual talent rates
- Pipeline rows by brand name + stage
- Any negotiation-specific detail beyond Sony INZONE public summary
- Any HSC sponsorship package detail (mentioned in PPTX as personal initiative — kept high-level)

### What I deliberately did NOT pull from the PPTX
- The 73 embedded media files in the PPTX include some that look like brand collateral or internal screenshots — I avoided pulling any of them since I can't verify rights/sanitisation status without your review.
- If you'd like specific PPTX images on the site, name the slide and I'll extract that one image.

## Limitations of this round

### What I couldn't access
- **Your Gmail (abdghazzawi1@gmail.com)** — Cowork has a Gmail connector but it's not authed in this session. To deep-search your inbox, you'd need to:
  1. Open Cowork settings → Connectors → Gmail
  2. Authenticate with your Google account
  3. Tell me to use it — I'd then search for "esports", "sponsorship", "GLG", "Falcons" etc. and pull achievement evidence.
- **The two Google Drive folder links** — I have no Drive connector authed. Same fix: connect Drive, then I can read the folders.
- **Your local computer (other folders)** — only the falcons-pricing-web folder is mounted. To access other folders (e.g. Documents, Downloads, your portfolio archive), use the request-folder action and approve a path.

### Recommended next inputs from you
1. **EWC event photos** — if you have any from the floor, panels, or with the team, drop them and I'll add a tasteful EWC visual.
2. **Sanitized Falcons screenshots** — quote builder UI with rates blurred or replaced. Single highest-leverage asset add.
3. **One or two TrueGaming LEAP photos** — booth shot, contact-capture moment.
4. **HSC sponsorship package one-pager** if it's public-shareable — would be a strong case-study addition.
5. **Any speaking-engagement photos** for the about page.

## Routes (current)

- `/` — homepage with 7 case-study cards + competitive cred strip
- `/about` — refreshed with Damascus origin + competitive backstory
- `/contact` — segmented + form
- `/case-studies/team-falcons-commercial-stack`
- `/case-studies/falcons-pricing-os`
- `/case-studies/glg-advisory` ← NEW
- `/case-studies/sony-inzone-team-falcons`
- `/case-studies/esports-world-cup`
- `/case-studies/true-gaming-leap` ← NEW
- `/case-studies/telecom-egypt-raad` ← NEW
- `/downloads`, `/press`, `/notes`, `/notes/the-rate-book-the-org-needed`, `/resume`
- `/api/og`, `/sitemap.xml`, `/robots.txt`
- 301: `/work/falcons` → `/case-studies/team-falcons-commercial-stack`

## Next steps to keep strengthening

1. Authenticate the Gmail connector → I can deep-search for more achievements / brand wins / press mentions you've forgotten.
2. Authenticate the Google Drive connector → I can audit the two folders you linked.
3. Drop any sanitised Falcons screenshot — biggest believability lift.
4. Buy a domain (recommend `koge.gg`, `elgazzawi.dev`, or `elgazzawi.gg`).
5. Add Resend API key → contact form goes live.
6. Run Lighthouse polish pass once content is final.
