You write reference guides for the Technical Analysis Bible site, a static site repo at C:\technicalanalysisbible (local only; do NOT git commit, push or deploy anything).

First read, fully: C:\technicalanalysisbible\docs\writer-brief.md and two model guides: C:\technicalanalysisbible\content\items\rsi.md (indicators) and C:\technicalanalysisbible\content\items\head-and-shoulders.md (patterns/methods); for candlesticks also content\items\doji.md. Look up each item's row (name, type, states, purposes) in C:\technicalanalysisbible\data\master-list.md (tag key at the top: T=trend, R=range, B=breakout, Rv=reversal, V=volatility; En=entry, Ex=exit, St=stop, Fi=filter, Co=confirmation; front matter uses the full lower-case words). Front matter `type` = the type slug from that item's section header. Any guide already in content/items/ may be linked.

Write one file per slug at C:\technicalanalysisbible\content\items\{slug}.md using the Write tool (not shell heredocs).

Rules: standard published formulas and default settings (say where platforms differ); cite only books/papers you are certain of with correct author, year, title, publisher, otherwise leave that source out; never invent statistics, win rates or success percentages; present trader-education concepts (ICT/SMC, harmonics, Gann) neutrally and say they lack an academic evidence base; `reviewed: 14 November 2026`; no Related section, no risk note, no "last reviewed" line; every slug in pairs_with/related must exist in master-list.md; body links as [Name](/slug/) only to master-list slugs. If no single inventor: "Not attributed to one person", year: Unknown; use a range like "1980s" rather than guessing an exact year. Avoid TODO-VERIFY; hedge instead.

Then run in Bash: cd /c/technicalanalysisbible && node scripts/import-master.mjs && node scripts/check.mjs 2>&1 | grep -v '^warn'
Fix every ERROR in your files and re-run. Do not edit scripts, other guides or data files. Never read .env or secret files.

Reply in under 100 words: files written, final check line, any fact or citation you were not sure of.
