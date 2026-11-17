// Built-site checker: walks dist/**/*.html and fails on broken links, bad anchors, duplicate ids,
// h1 count, missing viewport/title/description, and orphan pages. No dependencies.
// Usage: node scripts/check-dist.mjs [--allow-orphan=/path/ ...]   (DIST env var overrides the folder; a trailing * allows a prefix)
import fs from 'node:fs';
import path from 'node:path';
import { fileURLToPath } from 'node:url';

const here = path.dirname(fileURLToPath(import.meta.url));
const DIST = path.resolve(process.env.DIST || path.join(here, '..', 'dist'));
const allow = new Set(process.argv.filter((a) => a.startsWith('--allow-orphan=')).map((a) => a.slice(15)));

function walk(dir, out = []) {
  for (const e of fs.readdirSync(dir, { withFileTypes: true })) {
    const p = path.join(dir, e.name);
    if (e.isDirectory()) walk(p, out); else out.push(p);
  }
  return out;
}
const toUrl = (file) => {
  const rel = path.relative(DIST, file).split(path.sep).join('/');
  if (rel === 'index.html') return '/';
  if (rel.endsWith('/index.html')) return '/' + rel.slice(0, -10);
  return '/' + rel;
};
// Map a site URL path to a file in dist, or null.
function resolve(u) {
  const clean = decodeURIComponent(u);
  const base = path.join(DIST, clean);
  if (!base.startsWith(DIST)) return null;
  const tries = clean.endsWith('/') ? [path.join(base, 'index.html')] : [base, path.join(base, 'index.html')];
  for (const t of tries) if (fs.existsSync(t) && fs.statSync(t).isFile()) return t;
  return null;
}
const normUrl = (u) => (u.endsWith('/index.html') ? u.slice(0, -10) : u);

if (!fs.existsSync(DIST)) { console.error(`check-dist: ${DIST} not found (run the build first)`); process.exit(1); }
const files = walk(DIST).filter((f) => f.endsWith('.html'));
const errors = [];
const err = (page, msg) => errors.push(`${page}: ${msg}`);
const pages = new Map(); // url -> { html, ids:Set, header, rest }

for (const f of files) {
  const html = fs.readFileSync(f, 'utf8');
  const noScript = html.replace(/<script[\s\S]*?<\/script>/gi, '').replace(/<style[\s\S]*?<\/style>/gi, '');
  const header = (noScript.match(/<header[\s\S]*?<\/header>/i) || [''])[0];
  const rest = header ? noScript.replace(header, '') : noScript;
  const ids = new Map();
  for (const m of noScript.matchAll(/<[a-z][^>]*?\sid="([^"]*)"/gi)) ids.set(m[1], (ids.get(m[1]) || 0) + 1);
  pages.set(toUrl(f), { html, noScript, ids, header, rest, file: f });
}

let linkCount = 0;
const inbound = new Map(); // url -> Set of source urls (non-header)
const headerLinked = new Set();
for (const [url, pg] of pages) {
  const { noScript, ids, header, rest } = pg;
  if (url === '/404.html') { /* standalone page; same rules apply */ }
  const h1 = (noScript.match(/<h1[\s>]/gi) || []).length;
  if (h1 !== 1) err(url, `expected 1 <h1>, found ${h1}`);
  for (const [id, n] of ids) if (n > 1) err(url, `duplicate id "${id}" (${n}x)`);
  if (!/<meta[^>]+name="viewport"/i.test(noScript)) err(url, 'missing viewport meta');
  if (!/<title>\s*\S[\s\S]*?<\/title>/i.test(noScript)) err(url, 'missing or empty <title>');
  if (!/<meta[^>]+name="description"[^>]+content="\s*\S/i.test(noScript)) err(url, 'missing or empty description');

  for (const m of noScript.matchAll(/\s(href|src)="([^"]*)"/gi)) {
    const raw = m[2].replace(/&amp;/g, '&');
    if (raw.startsWith('#')) {
      linkCount++;
      const frag = raw.slice(1);
      if (frag && !ids.has(frag)) err(url, `fragment "#${frag}" has no matching id on this page`);
      continue;
    }
    if (!raw.startsWith('/') || raw.startsWith('//')) continue;
    linkCount++;
    const [pathPart, frag] = raw.split('#');
    const target = pathPart.split('?')[0];
    if (target.startsWith('/cdn-cgi/')) continue;
    const file = resolve(target);
    if (!file) { err(url, `dead ${m[1]} ${raw}`); continue; }
    if (frag && file.endsWith('.html')) {
      const tp = pages.get(toUrl(file));
      if (tp && !tp.ids.has(decodeURIComponent(frag))) err(url, `link ${raw}: no id "${frag}" on target page`);
    }
    if (m[1].toLowerCase() === 'href' && file.endsWith('.html')) {
      const tu = toUrl(file);
      if (tu !== url) {
        const inHeader = header.includes(m[0]);
        const inRest = rest.includes(m[0]);
        if (inHeader) headerLinked.add(tu);
        if (inRest) { if (!inbound.has(tu)) inbound.set(tu, new Set()); inbound.get(tu).add(url); }
      }
    }
  }
}

// Orphans: every sitemap URL needs an inbound link from another page's body/footer.
// Index pages that are in the header nav count as reachable through the header.
const sm = path.join(DIST, 'sitemap.xml');
if (fs.existsSync(sm)) {
  const xml = fs.readFileSync(sm, 'utf8');
  for (const m of xml.matchAll(/<loc>([^<]+)<\/loc>/g)) {
    let u;
    try { u = new URL(m[1]).pathname; } catch { continue; }
    u = normUrl(u);
    if (u === '/' || allow.has(u) || [...allow].some((a) => a.endsWith('*') && u.startsWith(a.slice(0, -1)))) continue;
    const file = resolve(u);
    if (!file) { err('sitemap.xml', `lists ${u} but no such page in dist`); continue; }
    const tu = toUrl(file);
    const n = inbound.get(tu)?.size || 0;
    const isIndex = headerLinked.has(tu) && /\/$/.test(tu) && tu.split('/').filter(Boolean).length === 1;
    if (!n && !isIndex) err('sitemap.xml', `orphan page ${tu} (no inbound link from another page's content or footer)`);
  }
} else err('sitemap.xml', 'missing');

console.log(`check-dist: ${pages.size} pages, ${linkCount} internal links, ${errors.length} errors`);
for (const e of errors.slice(0, 200)) console.error('  ' + e);
if (errors.length > 200) console.error(`  ... and ${errors.length - 200} more`);
process.exit(errors.length ? 1 : 0);
