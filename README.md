# technicalanalysisbible.com

Free, ad-supported reference to technical indicators and trading methods. Own brand, separate from TFT and HoleyProfit. Plan: `C:\c_team\projects\technicalanalysisbible\PLAN.md`.

## Commands
- `npm run sync-shared`: copy legal text, ad config and style tokens from `C:\shared-assets`
- `npm run check`: quality gate (sections, word counts, banned phrases, links, FAQ, sources, shared drift)
- `npm run build`: catalogue + check + build to `dist/`
- `npm run serve`: preview `dist/` at http://localhost:4321 (pretends to be outside the UK so ads show)

## Layout
- `data/master-list.md`: the ~350 items with tags (source of truth); becomes `data/catalogue.json`
- `content/items/*.md`: one guide per item (template: `docs/writer-brief.md`)
- `content/pages/*.md`: about, how we write
- `shared/`: synced copy of `C:\shared-assets` (edit there, never here)
- `scripts/`: generator (one dependency: marked)

## Hosting (not done; needs Dean)
Cloudflare Pages: build command `npm run build`, output `dist`. The country check for ads uses Cloudflare's `/cdn-cgi/trace`, so ads only appear once the site is on Cloudflare.

## Before launch
- Fill `risk_loss_pct` in `C:\shared-assets\ads\ic-markets.json` from IC Markets' current published figure
- Lawyer read of the legal pages
- Expand hub intros to 150 to 250 words (`data/hub-intros.json`)
- Set up the contact mailbox (hello@technicalanalysisbible.com)
