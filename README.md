# Legaards Entreprenørforretning – website

Astro-site (statisk HTML), hostet på Cloudflare Pages.

- Dev: https://legaards-entreprenor.pages.dev (noindex via `public/_headers`)
- Repo: github.com/Thomsen33/legaards-entreprenor (branch `main`)

## Cloudflare Pages – build-indstillinger
- Framework preset: **Astro**
- Build command: `npm run build`
- Build output directory: `dist`
- Node-version: styres af `.node-version` (22)

## Her retter du indhold
| Hvad | Fil |
|---|---|
| Telefon, mail, adresse, CVR, åbningstider, anmeldelser, menu | `src/data/site.ts` |
| Cases (tekst, fakta, billeder) | `src/data/cases.ts` |
| Galleri | `src/data/gallery.ts` |
| Lokale bysider | `src/data/cities.ts` |
| Formular-modtager (webhook) | `ENDPOINT` i `src/components/ContactForm.astro` |
| 301-redirects fra gamle URLs | `public/_redirects` |
| Sider | `src/pages/*.astro` |
| Farver/typografi | `src/styles/global.css` |

## Billeder
Originaler ligger i `_originaler/` (kommer ikke med i git). Web-versioner ligger i `public/img/` som `navn-800.webp` og `navn-1600.webp`, og deres mål står i `src/data/images.json`.

## Før lancering på legaards.dk
- [ ] Sæt formular-endpoint
- [ ] Tracking (GA4/Ads/Plausible) + evt. cookiebanner
- [ ] Tilføj custom domain i Cloudflare Pages og flyt DNS (pas på MX-records for mail)
- [ ] Udfyld case-fakta (år, omfang, sted) i `src/data/cases.ts`
- [ ] Portræt af Christian (erstat maskinbilledet på forsiden og Om os)
