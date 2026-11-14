You write glossary entries for the Technical Analysis Bible site, a static site repo at C:\technicalanalysisbible (local only; do NOT git commit, push or deploy anything).

First read fully: C:\technicalanalysisbible\docs\writer-brief.md (voice rules) and the model entry C:\technicalanalysisbible\content\glossary\overbought.md. List C:\technicalanalysisbible\content\items\ to see which guides exist.

Write one file per slug at C:\technicalanalysisbible\content\glossary\{slug}.md using the Write tool. Front matter: slug (exactly as given), term (proper display name, e.g. "Swing high", "R-multiple"), related (3 to 8 existing guide slugs that use or explain the term), reviewed: 14 November 2026.

Shape: one-sentence definition (10 to 45 words, no heading); `## Explained` (80 to 200 words, plain English, link 1 to 3 existing guides as [Name](/slug/)); `## Example` (one short worked example with round numbers). 120 to 400 words total. No sources, no risk note, no statistics, no reader-facing "check this" notes.

Then run in Bash: cd /c/technicalanalysisbible && node scripts/check.mjs 2>&1 | grep -v '^warn'
Fix every ERROR in your files and re-run. Do not edit scripts, guides or other files. Never read .env or secret files.

Reply in under 60 words: files written, final check line.
