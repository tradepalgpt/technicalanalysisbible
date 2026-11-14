// Pre-build quality gate. Errors stop the build; warnings are printed.
import { execFileSync } from 'node:child_process';
import path from 'node:path';
import { ROOT, loadCatalogue, loadItems, loadDir, COMPARE_SECTIONS, GLOSSARY_SECTIONS, REQUIRED_SECTIONS, BANNED_PHRASES, STATE_BY_SLUG, PURPOSE_BY_SLUG } from './lib.mjs';

const cat = loadCatalogue();
const bySlug = Object.fromEntries(cat.items.map((i) => [i.slug, i]));
const items = loadItems();
const published = new Set(items.map((i) => i.data.slug));
const errors = [];
const warns = [];
const E = (f, m) => errors.push(`${f}: ${m}`);
const W = (f, m) => warns.push(`${f}: ${m}`);

try {
  execFileSync(process.execPath, [path.join(ROOT, 'scripts', 'sync-shared.mjs'), '--verify'], { stdio: 'pipe' });
} catch (e) { errors.push('shared assets drifted from C:/shared-assets: run npm run sync-shared'); }

const titles = new Set();
for (const { file, data: d, body } of items) {
  const f = file;
  for (const k of ['slug', 'name', 'type', 'states', 'purposes', 'pairs_with', 'related', 'reviewed']) if (d[k] == null || d[k] === '') E(f, `missing front matter "${k}"`);
  if (d.slug && file !== `${d.slug}.md`) E(f, `file name must be ${d.slug}.md`);
  if (d.slug && !bySlug[d.slug]) E(f, `slug "${d.slug}" not in master list`);
  if (titles.has(d.name)) E(f, `duplicate name ${d.name}`); titles.add(d.name);
  for (const s of [].concat(d.states || [], d.weak_states || [])) if (!STATE_BY_SLUG[s]) E(f, `unknown market state "${s}"`);
  for (const p of [].concat(d.purposes || [])) if (!PURPOSE_BY_SLUG[p]) E(f, `unknown purpose "${p}"`);
  for (const k of ['pairs_with', 'related']) for (const s of [].concat(d[k] || [])) {
    if (!bySlug[s]) E(f, `${k} "${s}" is not in the master list`);
    else if (!published.has(s)) W(f, `${k} "${s}" not written yet (shown unlinked)`);
  }
  if (!/^\d{1,2} [A-Z][a-z]+ \d{4}$/.test(String(d.reviewed || ''))) E(f, 'reviewed must be like "14 November 2026"');

  // Quick answer = first paragraph before any heading.
  const quick = body.split(/\n## /)[0].trim();
  const qw = quick.split(/\s+/).filter(Boolean).length;
  if (qw < 30 || qw > 80) E(f, `quick answer is ${qw} words (want 30-80)`);

  // Section order.
  const heads = [...body.matchAll(/^## (.+)$/gm)].map((m) => m[1].trim());
  let pos = -1;
  for (const alts of REQUIRED_SECTIONS) {
    const i = heads.findIndex((h) => alts.some((a) => h.startsWith(a)));
    if (i === -1) E(f, `missing section "${alts[0]}"`);
    else if (i < pos) E(f, `section "${heads[i]}" out of order`);
    else pos = i;
  }
  if (heads.some((h) => h === 'Related')) E(f, 'remove "Related": it is generated from front matter');
  if (/Educational only, not advice/i.test(body)) E(f, 'remove the risk note: it is added automatically');
  if (/Last reviewed:/i.test(body)) E(f, 'remove "Last reviewed": it comes from front matter');

  const words = body.split(/\s+/).filter(Boolean).length;
  const minW = d.type === 'candlestick' ? 500 : 750;
  if (words < minW) E(f, `${words} words (min ${minW})`);
  if (words > 2200) W(f, `${words} words, long`);

  const low = body.toLowerCase();
  for (const b of BANNED_PHRASES) if (low.includes(b.toLowerCase())) E(f, `banned phrase "${b}"`);

  const faq = body.split(/^## FAQ\s*$/m)[1] || '';
  const qs = (faq.match(/^\*\*.+\?\*\*\s*$/gm) || []).length;
  if (qs < 4) E(f, `FAQ has ${qs} questions (min 4)`);
  const src = (body.split(/^## Sources\s*$/m)[1] || '').split(/^## /m)[0];
  if (!/^- .+/m.test(src)) E(f, 'Sources has no entries');

  for (const m of body.matchAll(/\]\(\/([a-z0-9-]+)\/\)/g)) {
    if (!bySlug[m[1]]) E(f, `link to /${m[1]}/ is not a master-list item`);
    else if (!published.has(m[1])) W(f, `link to /${m[1]}/ not written yet (shown unlinked)`);
  }
}


// ---------- comparison and glossary pages ----------
const cmpSlugs = new Set(loadDir('compare').map((c) => c.data.slug));
const glSlugs = new Set(loadDir('glossary').map((g) => g.data.slug));
function common(f, d, body, sections, minW, maxW) {
  if (!/^\d{1,2} [A-Z][a-z]+ \d{4}$/.test(String(d.reviewed || ''))) E(f, 'reviewed must be like "14 November 2026"');
  const heads = [...body.matchAll(/^## (.+)$/gm)].map((m) => m[1].trim());
  let pos = -1;
  for (const alts of sections) {
    const i = heads.findIndex((h, k) => k > pos && alts.some((a) => h.startsWith(a)));
    if (i === -1) E(f, `missing section "${alts[0]}"`); else pos = i;
  }
  const words = body.split(/\s+/).filter(Boolean).length;
  if (words < minW) E(f, `${words} words (min ${minW})`);
  if (words > maxW) W(f, `${words} words, long`);
  const low = body.toLowerCase();
  for (const b of BANNED_PHRASES) if (low.includes(b.toLowerCase())) E(f, `banned phrase "${b}"`);
  for (const m of body.matchAll(/\]\(\/([a-z0-9-]+)\/\)/g)) if (!bySlug[m[1]]) E(f, `link to /${m[1]}/ is not a guide`);
  for (const m of body.matchAll(/\]\(\/glossary\/([a-z0-9-]+)\/\)/g)) if (!glSlugs.has(m[1])) W(f, `glossary link ${m[1]} not written`);
  for (const m of body.matchAll(/\]\(\/compare\/([a-z0-9-]+)\/\)/g)) if (!cmpSlugs.has(m[1])) W(f, `compare link ${m[1]} not written`);
}
for (const { file: f, data: d, body } of loadDir('compare')) {
  for (const k of ['slug', 'title', 'a', 'b', 'reviewed']) if (!d[k]) E(f, `missing front matter "${k}"`);
  if (d.slug && f !== `${d.slug}.md`) E(f, `file name must be ${d.slug}.md`);
  for (const k of ['a', 'b']) if (d[k] && !published.has(d[k])) E(f, `${k} "${d[k]}" is not a written guide`);
  const qw = body.split(/\n## /)[0].trim().split(/\s+/).filter(Boolean).length;
  if (qw < 25 || qw > 90) E(f, `verdict is ${qw} words (want 25-90)`);
  const qs = ((body.split(/^## FAQ\s*$/m)[1] || '').match(/^\*\*.+\?\*\*\s*$/gm) || []).length;
  if (qs < 3) E(f, `FAQ has ${qs} questions (min 3)`);
  common(f, d, body, COMPARE_SECTIONS, 450, 1400);
}
for (const { file: f, data: d, body } of loadDir('glossary')) {
  for (const k of ['slug', 'term', 'reviewed']) if (!d[k]) E(f, `missing front matter "${k}"`);
  if (d.slug && f !== `${d.slug}.md`) E(f, `file name must be ${d.slug}.md`);
  for (const s of [].concat(d.related || [])) if (!published.has(s)) E(f, `related "${s}" is not a written guide`);
  const qw = body.split(/\n## /)[0].trim().split(/\s+/).filter(Boolean).length;
  if (qw < 10 || qw > 45) E(f, `definition is ${qw} words (want 10-45)`);
  common(f, d, body, GLOSSARY_SECTIONS, 120, 450);
}

for (const w of warns) console.warn('warn  ' + w);
for (const e of errors) console.error('ERROR ' + e);
console.log(`check: ${items.length} pages, ${errors.length} errors, ${warns.length} warnings`);
if (errors.length) process.exit(1);
