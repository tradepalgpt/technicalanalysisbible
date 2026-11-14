// Turns data/master-list.md tables into data/catalogue.json (the site's item index).
import fs from 'node:fs';
import path from 'node:path';
import { ROOT, STATES, PURPOSES } from './lib.mjs';

const md = fs.readFileSync(path.join(ROOT, 'data', 'master-list.md'), 'utf8');
const types = [];
const items = {};
let type = null;

for (const line of md.split(/\r?\n/)) {
  const h = line.match(/^## \d+\. (.+?) \(type: ([a-z-]+)\)/);
  if (h) { type = { slug: h[2], name: h[1] }; types.push(type); continue; }
  if (/^## /.test(line)) { type = null; continue; }
  if (!type || !line.startsWith('| ') || line.startsWith('| Name') || line.startsWith('|---')) continue;
  const c = line.split('|').slice(1, -1).map((s) => s.trim());
  if (c.length < 5) continue;
  const [name, slug, st, pu, wave] = c;
  const states = st.split(',').map((s) => s.trim()).filter(Boolean).map((k) => {
    if (!STATES[k]) throw new Error(`Unknown state ${k} on ${slug}`); return STATES[k][0];
  });
  const purposes = pu.split(',').map((s) => s.trim()).filter(Boolean).map((k) => {
    if (!PURPOSES[k]) throw new Error(`Unknown purpose ${k} on ${slug}`); return PURPOSES[k][0];
  });
  const clean = name.replace(/\s*\(see [^)]+\)$/, '');
  if (items[slug]) { if (!items[slug].types.includes(type.slug)) items[slug].types.push(type.slug); continue; }
  items[slug] = { slug, name: clean, types: [type.slug], states, purposes, wave: Number(wave) };
}

const out = { types, items: Object.values(items).sort((a, b) => a.name.localeCompare(b.name)) };
fs.writeFileSync(path.join(ROOT, 'data', 'catalogue.json'), JSON.stringify(out, null, 1));
console.log(`catalogue: ${out.items.length} items, ${types.length} types`);
