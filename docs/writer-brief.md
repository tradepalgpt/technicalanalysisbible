# Writer brief (for Sonnet batch writers)

You write guides for Technical Analysis Bible. Read this whole brief and the model guide `content/items/rsi.md` before writing.

## Your batch
You get 10 rows from `data/master-list.md`: name, slug, type, market states, purposes. Write one file per row: `content/items/{slug}.md`. Do not change the name, slug, type, states or purposes.

## File shape
Front matter exactly like `rsi.md` (slug, name, aka, type, states, weak_states, purposes, inventor, year, default_settings, pairs_with, related, compare, glossary, wave, reviewed). `reviewed` is today's date in the form "14 November 2026". Every slug in `pairs_with` and `related` must exist in `data/master-list.md`.

Body, in this order:
1. Quick answer paragraph (30 to 80 words, no heading)
2. `## At a glance` (two-column table)
3. `## What is {name}?` (or "What are")
4. `## Formula` (indicators) or `## How it is drawn` / `## How it is identified` (patterns, candles, methods). Include a worked example with small round numbers.
5. `## How to read it`
6. `## Best market states`
7. `## Settings` (indicators) or `## Confirmation rules` (patterns)
8. `## Common mistakes` (4 to 6 bullets)
9. `## Pairs well with` (3 to 5 items, linked as `[Name](/slug/)`)
10. `## Sources` (bullet list)
11. `## FAQ` (4 to 6 questions, each `**Question?**` on its own line, answer below, 30 to 80 words)

Do NOT write a Related section, a risk note or a "last reviewed" line. The site adds these.

Length: 750 to 1,600 words (candlesticks 500 to 1,000).

## Facts
- Formulas and default settings must be the standard published ones. If platforms differ, say so.
- Only cite books and papers you are certain exist, with correct author and year. If unsure, leave it out. Never invent a source, a statistic or a win rate.
- If you are unsure of a fact, write `TODO-VERIFY` next to it. The build refuses to publish it until a person checks it.

## Voice
Plain English, UK spelling, short sentences. Define a term the first time. Neutral and honest: say when a tool is weak. No hype, no advice ("you should buy"), no broker names.

Banned (the build rejects them): ever-evolving, delve, game-changer, holy grail, guaranteed, risk-free, secret weapon, "it is important to note", "in conclusion", supercharge, skyrocket, never fails, 100% accurate, and similar filler.

## Finish
Run `npm run check`. Fix every ERROR. Warnings about pages not written yet are fine.
