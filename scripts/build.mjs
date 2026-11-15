// Static site generator: content + catalogue -> dist/
import fs from 'node:fs';
import path from 'node:path';
import { marked } from 'marked';
import { ROOT, SITE, STATES, PURPOSES, STATE_BY_SLUG, PURPOSE_BY_SLUG, loadCatalogue, loadItems, loadDir, parseFrontMatter, readJSON, esc } from './lib.mjs';

const DIST = path.join(ROOT, 'dist');
fs.rmSync(DIST, { recursive: true, force: true });
const cat = loadCatalogue();
const bySlug = Object.fromEntries(cat.items.map((i) => [i.slug, i]));
const typeName = Object.fromEntries(cat.types.map((t) => [t.slug, t.name]));
const items = loadItems();
const pub = Object.fromEntries(items.map((i) => [i.data.slug, i]));
const adCfg = readJSON(path.join(ROOT, 'shared', 'ads', 'ic-markets.json'));
const adJs = fs.readFileSync(path.join(ROOT, 'shared', 'ads', 'partner-ad.js'), 'utf8');
const BUILD_DATE = new Date().toISOString().slice(0, 10);
const sitemap = [];

const RISK_NOTE = 'Educational only, not advice. Indicators describe past prices and do not predict the future. Trading leveraged products such as CFDs carries a high risk of losing money rapidly; most retail CFD accounts lose money.';

function write(rel, html) {
  const p = path.join(DIST, rel);
  fs.mkdirSync(path.dirname(p), { recursive: true });
  fs.writeFileSync(p, html);
}
function page(urlPath, html, { index = true } = {}) {
  write(urlPath === '/' ? 'index.html' : path.join(urlPath, 'index.html'), html);
  if (index) sitemap.push(urlPath);
}
const abs = (p) => SITE.url + p;
const link = (slug, text) => pub[slug] ? `<a href="/${slug}/">${esc(text ?? bySlug[slug]?.name ?? slug)}</a>` : `<span class="soon" title="Coming soon">${esc(text ?? bySlug[slug]?.name ?? slug)}</span>`;
const adSlot = (size, cls = '') => `<div class="partner-ad ${cls}" data-ad-size="${size}" data-ad-config="${esc(JSON.stringify(adCfg))}"></div>`;
const ld = (o) => `<script type="application/ld+json">${JSON.stringify(o).replace(/</g, '\\u003c')}</script>`;
const crumbsLd = (list) => ({ '@context': 'https://schema.org', '@type': 'BreadcrumbList', itemListElement: list.map(([n, u], i) => ({ '@type': 'ListItem', position: i + 1, name: n, item: abs(u) })) });
const crumbsHtml = (list) => `<nav class="crumbs" aria-label="Breadcrumb">${list.map(([n, u], i) => i === list.length - 1 ? `<span>${esc(n)}</span>` : `<a href="${u}">${esc(n)}</a>`).join(' <span aria-hidden="true">›</span> ')}</nav>`;

function layout({ title, desc, path: p, body, jsonld = [], noindex = false, sidebar = false }) {
  return `<!doctype html>
<html lang="en-GB">
<head>
<meta charset="utf-8">
<meta name="viewport" content="width=device-width, initial-scale=1">
<title>${esc(title)}</title>
<meta name="description" content="${esc(desc)}">
<link rel="canonical" href="${abs(p)}">
${noindex ? '<meta name="robots" content="noindex, follow">' : ''}
<meta property="og:type" content="article"><meta property="og:title" content="${esc(title)}"><meta property="og:description" content="${esc(desc)}"><meta property="og:url" content="${abs(p)}"><meta property="og:site_name" content="${SITE.brand}">
<link rel="stylesheet" href="/assets/site.css">
<link rel="icon" href="/favicon.svg" type="image/svg+xml">
${jsonld.map(ld).join('\n')}
</head>
<body>
<header class="top"><div class="wrap"><a class="brand" href="/">Technical Analysis <b>Bible</b></a>
<nav class="mainnav"><a href="/a-z/">A–Z</a><a href="/market/">By market</a><a href="/use/">By use</a><a href="/type/">By type</a><a href="/compare/">Compare</a><a href="/glossary/">Glossary</a></nav></div></header>
<div class="wrap ${sidebar ? 'withside' : ''}">
<main id="main">${body}</main>
${sidebar ? `<aside class="side">${adSlot('300x600', 'sticky')}</aside>` : ''}
</div>
<footer class="foot"><div class="wrap">
<p class="risk"><strong>Risk warning:</strong> ${RISK_NOTE} <a href="/risk-warning/">Read the full risk warning</a>.</p>
<p>${SITE.brand} is free and supported by advertising. Some links are affiliate links: we may earn a commission at no cost to you. As an Amazon Associate we earn from qualifying purchases. <a href="/advertising-disclosure/">How we make money</a>.</p>
<nav><a href="/about/">About</a> · <a href="/how-we-write/">How we write</a> · <a href="/risk-warning/">Risk warning</a> · <a href="/advertising-disclosure/">Advertising</a> · <a href="/privacy/">Privacy</a> · <a href="/terms/">Terms</a></nav>
<p class="small">© ${new Date().getFullYear()} ${SITE.brand}</p>
</div></footer>
<script>${adJs}</script>
</body></html>`;
}

const compares = loadDir('compare');
const glossary = loadDir('glossary');
const cmpPub = Object.fromEntries(compares.map((c) => [c.data.slug, c]));
const glPub = Object.fromEntries(glossary.map((g) => [g.data.slug, g]));

function rewriteLinks(html) {
  return html
    .replace(/<a href="\/([a-z0-9-]+)\/">([\s\S]*?)<\/a>/g, (m, slug, text) => (bySlug[slug] && !pub[slug]) ? `<span class="soon" title="Coming soon">${text}</span>` : m)
    // Comparison and glossary links stay plain text until that page exists.
    .replace(/<a href="\/compare\/([a-z0-9-]+)\/">([\s\S]*?)<\/a>/g, (m, s, t) => cmpPub[s] ? m : `<span class="soon" title="Coming soon">${t}</span>`)
    .replace(/<a href="\/glossary\/([a-z0-9-]+)\/">([\s\S]*?)<\/a>/g, (m, s, t) => glPub[s] ? m : `<span class="soon" title="Coming soon">${t}</span>`);
}
// ---------- charts (rendered by C:\indicator-lab, synced into media/charts) ----------
const CHART_DIR = path.join(ROOT, 'media', 'charts');
const CHARTS = fs.existsSync(path.join(CHART_DIR, 'manifest.json')) ? JSON.parse(fs.readFileSync(path.join(CHART_DIR, 'manifest.json'), 'utf8')) : {};
for (const [slug, c] of Object.entries(CHARTS)) {
  if (!fs.existsSync(path.join(CHART_DIR, c.file))) { console.warn(`chart missing, skipped: ${c.file}`); delete CHARTS[slug]; continue; }
  const head = fs.readFileSync(path.join(CHART_DIR, c.file), 'utf8').slice(0, 600);
  const w = parseFloat(head.match(/width="([\d.]+)pt"/)?.[1] || 720), h = parseFloat(head.match(/height="([\d.]+)pt"/)?.[1] || 400);
  c.w = 1000; c.h = Math.round(1000 * h / w);
}
function figureHtml(c) {
  return `<figure class="chart"><img src="/charts/${esc(c.file)}" width="${c.w}" height="${c.h}" loading="lazy" decoding="async" alt="${esc(c.alt)}">`
    + `<figcaption>${esc(c.caption)} <span class="credit">Chart drawn with our own indicator code on real ${esc(c.credit.split(',')[0])} prices.</span></figcaption></figure>`;
}
// ---------- Amazon Associates links (only books a person has checked on Amazon) ----------
const AMZ = fs.existsSync(path.join(ROOT, 'data', 'amazon-books.json')) ? JSON.parse(fs.readFileSync(path.join(ROOT, 'data', 'amazon-books.json'), 'utf8')) : { books: [] };
const AMZ_TAG = AMZ._tag || 'tabib05-20';
const AMZ_BOOKS = AMZ.books.filter((b) => b.verified && /^[0-9A-Z]{10}$/.test(b.asin)).sort((a, b) => b.title.length - a.title.length);
const AMZ_NOTE = '<p class="amz-note">As an Amazon Associate we earn from qualifying purchases. Book links go to Amazon.</p>';
function amazonLinks(html) {
  let used = false;
  for (const b of AMZ_BOOKS) {
    const t = esc(b.title);
    const url = `https://www.amazon.com/dp/${b.asin}?tag=${AMZ_TAG}`;
    const plain = `<em>${t}</em>`;
    if (html.includes(plain)) {
      used = true;
      html = html.split(plain).join(`<a href="${url}" rel="sponsored nofollow noopener" target="_blank">${plain}</a>`);
    }
  }
  return { html, used };
}
const cmpTitle = (s) => cmpPub[s]?.data.title || s;
const glTerm = (s) => glPub[s]?.data.term || s;

function parseFaq(body) {
  const sec = (body.split(/^## FAQ\s*$/m)[1] || '').split(/^## /m)[0];
  const out = [];
  const parts = sec.split(/^\*\*(.+\?)\*\*\s*$/m);
  for (let i = 1; i < parts.length; i += 2) out.push({ q: parts[i].trim(), a: parts[i + 1].trim().replace(/\[([^\]]+)\]\([^)]+\)/g, '$1').replace(/[*_]/g, '') });
  return out;
}

// ---------- item pages ----------
for (const { data: d, body } of items) {
  const c = bySlug[d.slug];
  const primaryType = c.types[0];
  const p = `/${d.slug}/`;
  const quick = body.split(/\n## /)[0].trim().replace(/\s+/g, ' ');
  let html = rewriteLinks(marked.parse(body));
  // Ads: one text unit before the formula/drawing section, one before "Pairs well with".
  let n = 0;
  html = html.replace(/<h2[^>]*>(Formula|How it is|How it works)/, (m) => (n++ ? m : adSlot('text') + m));
  html = html.replace(/<h2[^>]*>Pairs well with/, (m) => adSlot('text') + m);
  html = html.replace(/<table>/g, '<div class="tablewrap"><table>').replace(/<\/table>/g, '</table></div>');
  const amz = amazonLinks(html);
  html = amz.html;
  if (amz.used) html = html.replace(/(<h2[^>]*>FAQ)/, AMZ_NOTE + '$1');
  const chart = CHARTS[d.slug];
  if (chart) html = html.replace(/<h2[^>]*>What (is|are)/, (m) => figureHtml(chart) + m);

  const related = [...new Set([].concat(d.related || []))];
  const tags = `<p class="tags"><span>Best in:</span> ${[].concat(d.states).map((s) => `<a class="chip" href="/market/${s}/">${esc(STATE_BY_SLUG[s])}</a>`).join(' ')} <span>Used for:</span> ${[].concat(d.purposes).map((s) => `<a class="chip" href="/use/${s}/">${esc(PURPOSE_BY_SLUG[s])}</a>`).join(' ')}</p>`;
  const cmpLinks = [].concat(d.compare || []).filter((s) => cmpPub[s]);
  for (const c of compares) if ((c.data.a === d.slug || c.data.b === d.slug) && !cmpLinks.includes(c.data.slug)) cmpLinks.push(c.data.slug);
  const glLinks = [].concat(d.glossary || []).filter((s) => glPub[s]);
  const relatedHtml = `<section class="related"><h2>Related</h2><ul>${related.map((s) => `<li>${link(s)}</li>`).join('')}</ul>`
    + (cmpLinks.length ? `<h3>Compare</h3><ul>${cmpLinks.map((s) => `<li><a href="/compare/${s}/">${esc(cmpTitle(s))}</a></li>`).join('')}</ul>` : '')
    + (glLinks.length ? `<h3>Key terms</h3><p>${glLinks.map((s) => `<a class="chip" href="/glossary/${s}/">${esc(glTerm(s))}</a>`).join(' ')}</p>` : '')
    + `</section>`;
  const faq = parseFaq(body);
  const crumbs = [['Home', '/'], [typeName[primaryType], `/type/${primaryType}/`], [d.name, p]];
  const title = `${d.name}: what it is, formula, how to use it | ${SITE.brand}`;
  const jsonld = [
    { '@context': 'https://schema.org', '@type': 'TechArticle', headline: d.name, description: quick, url: abs(p), dateModified: BUILD_DATE, inLanguage: 'en-GB',
      author: { '@type': 'Organization', name: SITE.brand, url: SITE.url }, publisher: { '@type': 'Organization', name: SITE.brand, url: SITE.url },
      about: { '@type': 'DefinedTerm', name: d.name, alternateName: d.aka, description: quick, inDefinedTermSet: abs('/a-z/') },
      ...(chart ? { image: { '@type': 'ImageObject', url: abs(`/charts/${chart.file}`), caption: chart.caption, width: chart.w, height: chart.h } } : {}) },
    { '@context': 'https://schema.org', '@type': 'FAQPage', mainEntity: faq.map((f) => ({ '@type': 'Question', name: f.q, acceptedAnswer: { '@type': 'Answer', text: f.a } })) },
    crumbsLd(crumbs),
  ];
  const bodyHtml = `${crumbsHtml(crumbs)}<article class="item"><h1>${esc(d.name)}</h1>${tags}${html}${relatedHtml}
<p class="reviewed">Last reviewed: ${esc(d.reviewed)}</p></article>`;
  page(p, layout({ title, desc: quick.slice(0, 155).replace(/\s\S*$/, '') + '…', path: p, body: bodyHtml, jsonld, sidebar: true }));
}

// ---------- comparison pages ----------
for (const { data: d, body } of compares) {
  const p = `/compare/${d.slug}/`;
  const quick = body.split(/\n## /)[0].trim().replace(/\s+/g, ' ');
  let html = rewriteLinks(marked.parse(body)).replace(/<table>/g, '<div class="tablewrap"><table>').replace(/<\/table>/g, '</table></div>');
  html = html.replace(/<h2[^>]*>Using both/, (m) => adSlot('text') + m);
  const faq = parseFaq(body);
  const crumbs = [['Home', '/'], ['Compare', '/compare/'], [d.title, p]];
  const guides = `<section class="related"><h2>Full guides</h2><ul><li>${link(d.a)}</li><li>${link(d.b)}</li></ul></section>`;
  const jsonld = [
    { '@context': 'https://schema.org', '@type': 'TechArticle', headline: d.title, description: quick, url: abs(p), dateModified: BUILD_DATE, inLanguage: 'en-GB',
      author: { '@type': 'Organization', name: SITE.brand, url: SITE.url }, publisher: { '@type': 'Organization', name: SITE.brand, url: SITE.url },
      about: [d.a, d.b].map((s) => ({ '@type': 'DefinedTerm', name: bySlug[s]?.name || s, url: abs(`/${s}/`) })) },
    { '@context': 'https://schema.org', '@type': 'FAQPage', mainEntity: faq.map((f) => ({ '@type': 'Question', name: f.q, acceptedAnswer: { '@type': 'Answer', text: f.a } })) },
    crumbsLd(crumbs),
  ];
  page(p, layout({ title: `${d.title}: differences and when to use each | ${SITE.brand}`, desc: quick.slice(0, 155).replace(/\s\S*$/, '') + '…', path: p, jsonld, sidebar: true,
    body: `${crumbsHtml(crumbs)}<article class="item"><h1>${esc(d.title)}</h1>${html}${guides}<p class="reviewed">Last reviewed: ${esc(d.reviewed)}</p></article>` }));
}
if (compares.length) page('/compare/', layout({ title: `Indicator comparisons | ${SITE.brand}`, desc: 'Side-by-side comparisons of popular technical indicators and patterns: how they differ and when to use each.', path: '/compare/',
  jsonld: [crumbsLd([['Home', '/'], ['Compare', '/compare/']])],
  body: `${crumbsHtml([['Home', '/'], ['Compare', '/compare/']])}<h1>Comparisons</h1><p class="lead">Side-by-side guides for tools people often mix up or choose between.</p><ul class="list">${[...compares].sort((a, b) => a.data.title.localeCompare(b.data.title)).map((c) => `<li><a href="/compare/${c.data.slug}/">${esc(c.data.title)}</a></li>`).join('')}</ul>` }));

// ---------- glossary ----------
for (const { data: d, body } of glossary) {
  const p = `/glossary/${d.slug}/`;
  const def = body.split(/\n## /)[0].trim().replace(/\s+/g, ' ');
  const html = rewriteLinks(marked.parse(body));
  const rel = [].concat(d.related || []);
  const crumbs = [['Home', '/'], ['Glossary', '/glossary/'], [d.term, p]];
  const jsonld = [
    { '@context': 'https://schema.org', '@type': 'DefinedTerm', name: d.term, description: def, url: abs(p), inDefinedTermSet: { '@type': 'DefinedTermSet', name: `${SITE.brand} glossary`, url: abs('/glossary/') } },
    crumbsLd(crumbs),
  ];
  page(p, layout({ title: `${d.term}: meaning in trading | ${SITE.brand}`, desc: def.slice(0, 155).replace(/\s\S*$/, '') + '…', path: p, jsonld,
    body: `${crumbsHtml(crumbs)}<article class="item"><h1>${esc(d.term)}</h1>${html}${rel.length ? `<section class="related"><h2>Guides that use this term</h2><ul>${rel.map((s) => `<li>${link(s)}</li>`).join('')}</ul></section>` : ''}<p class="reviewed">Last reviewed: ${esc(d.reviewed)}</p></article>` }));
}
if (glossary.length) {
  const sorted = [...glossary].sort((a, b) => a.data.term.localeCompare(b.data.term));
  page('/glossary/', layout({ title: `Trading glossary | ${SITE.brand}`, desc: 'Plain-English definitions of technical analysis and trading terms.', path: '/glossary/',
    jsonld: [{ '@context': 'https://schema.org', '@type': 'DefinedTermSet', name: `${SITE.brand} glossary`, url: abs('/glossary/'), hasDefinedTerm: sorted.map((g) => ({ '@type': 'DefinedTerm', name: g.data.term, url: abs(`/glossary/${g.data.slug}/`) })) }, crumbsLd([['Home', '/'], ['Glossary', '/glossary/']])],
    body: `${crumbsHtml([['Home', '/'], ['Glossary', '/glossary/']])}<h1>Glossary</h1><p class="lead">Plain-English definitions of the terms used across our guides.</p><ul class="list">${sorted.map((g) => `<li><a href="/glossary/${g.data.slug}/">${esc(g.data.term)}</a></li>`).join('')}</ul>` }));
}

// ---------- hubs ----------
function itemList(list) {
  const sorted = [...list].sort((a, b) => (pub[b.slug] ? 1 : 0) - (pub[a.slug] ? 1 : 0) || a.wave - b.wave || a.name.localeCompare(b.name));
  return `<ul class="list">${sorted.map((i) => `<li>${link(i.slug, i.name)} <small>${i.states.map((s) => STATE_BY_SLUG[s]).join(', ')}</small></li>`).join('')}</ul>`;
}
function hub({ p, title, h1, intro, list, crumbs }) {
  const live = list.filter((i) => pub[i.slug]).length;
  const jsonld = [
    { '@context': 'https://schema.org', '@type': 'CollectionPage', name: h1, url: abs(p), description: intro,
      mainEntity: { '@type': 'ItemList', itemListElement: list.filter((i) => pub[i.slug]).map((i, k) => ({ '@type': 'ListItem', position: k + 1, url: abs(`/${i.slug}/`), name: i.name })) } },
    crumbsLd(crumbs),
  ];
  const paras = intro.split(/\n\n+/).map((t, i) => `<p${i ? '' : ' class="lead"'}>${esc(t)}</p>`).join('');
  const desc = intro.split(/\n\n+/)[0].length > 158 ? intro.split(/\n\n+/)[0].slice(0, 155).replace(/\s\S*$/, '') + '…' : intro.split(/\n\n+/)[0];
  const body = `${crumbsHtml(crumbs)}<h1>${esc(h1)}</h1>${paras}<p class="count">${list.length} guides.</p>${itemList(list)}`;
  page(p, layout({ title, desc, path: p, body, jsonld, noindex: live < 3 }), { index: live >= 3 });
}

const HUB_INTROS = JSON.parse(fs.readFileSync(path.join(ROOT, 'data', 'hub-intros.json'), 'utf8'));
for (const t of cat.types) {
  const list = cat.items.filter((i) => i.types.includes(t.slug));
  hub({ p: `/type/${t.slug}/`, title: `${t.name}: every one explained | ${SITE.brand}`, h1: t.name, intro: HUB_INTROS.type?.[t.slug] || `Every ${t.name.toLowerCase()} explained in plain English: what each one is, how it is calculated, how to read it and when it works best.`, list, crumbs: [['Home', '/'], ['By type', '/type/'], [t.name, `/type/${t.slug}/`]] });
}
for (const [, [s, nm]] of Object.entries(STATES)) {
  const list = cat.items.filter((i) => i.states.includes(s));
  hub({ p: `/market/${s}/`, title: `Best indicators and methods for ${nm.toLowerCase()} | ${SITE.brand}`, h1: `Best for ${nm.toLowerCase()}`, intro: HUB_INTROS.market?.[s] || `Indicators, patterns and methods that work best in ${nm.toLowerCase()}.`, list, crumbs: [['Home', '/'], ['By market', '/market/'], [nm, `/market/${s}/`]] });
  for (const [, [u, un]] of Object.entries(PURPOSES)) {
    const cross = list.filter((i) => i.purposes.includes(u));
    if (cross.filter((i) => pub[i.slug]).length < 3) continue;
    hub({ p: `/market/${s}/${u}/`, title: `${un} in ${nm.toLowerCase()}: best methods | ${SITE.brand}`, h1: `${un} in ${nm.toLowerCase()}`, intro: HUB_INTROS.cross?.[`${s}-${u}`] || `Methods traders use for ${un.toLowerCase()} in ${nm.toLowerCase()}.`, list: cross, crumbs: [['Home', '/'], ['By market', '/market/'], [nm, `/market/${s}/`], [un, `/market/${s}/${u}/`]] });
  }
}
for (const [, [u, un]] of Object.entries(PURPOSES)) {
  const list = cat.items.filter((i) => i.purposes.includes(u));
  hub({ p: `/use/${u}/`, title: `Indicators and methods for ${un.toLowerCase()} | ${SITE.brand}`, h1: `For ${un.toLowerCase()}`, intro: HUB_INTROS.use?.[u] || `Tools traders use for ${un.toLowerCase()}.`, list, crumbs: [['Home', '/'], ['By use', '/use/'], [un, `/use/${u}/`]] });
}

// Index-of-hubs pages
const simpleIndex = (p, h1, intro, links, crumbs) => page(p, layout({ title: `${h1} | ${SITE.brand}`, desc: intro, path: p,
  body: `${crumbsHtml(crumbs)}<h1>${esc(h1)}</h1><p class="lead">${esc(intro)}</p><ul class="cards">${links.map(([u, n, k]) => `<li><a href="${u}"><b>${esc(n)}</b><small>${k} guides</small></a></li>`).join('')}</ul>`, jsonld: [crumbsLd(crumbs)] }));
simpleIndex('/market/', 'Browse by market state', 'Pick the kind of market you are trading and see which tools suit it.', Object.values(STATES).map(([s, n]) => [`/market/${s}/`, n, cat.items.filter((i) => i.states.includes(s)).length]), [['Home', '/'], ['By market', '/market/']]);
simpleIndex('/use/', 'Browse by use', 'Pick the job you need done (entry, exit, stop, filter or confirmation) and see which tools do it.', Object.values(PURPOSES).map(([s, n]) => [`/use/${s}/`, n, cat.items.filter((i) => i.purposes.includes(s)).length]), [['Home', '/'], ['By use', '/use/']]);
simpleIndex('/type/', 'Browse by type', 'Indicators, chart patterns, candlesticks, price action and trading schools, grouped by type.', cat.types.map((t) => [`/type/${t.slug}/`, t.name, cat.items.filter((i) => i.types.includes(t.slug)).length]), [['Home', '/'], ['By type', '/type/']]);

// A–Z
const letterOf = (i) => (i.name.match(/[A-Za-z]/)?.[0] || 'A').toUpperCase();
const letters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ'.split('');
const azNav = `<nav class="az">${letters.map((L) => cat.items.some((i) => letterOf(i) === L) ? `<a href="/a-z/${L.toLowerCase()}/">${L}</a>` : `<span>${L}</span>`).join('')}</nav>`;
page('/a-z/', layout({ title: `Technical indicators A to Z | ${SITE.brand}`, desc: `Every technical indicator, chart pattern, candlestick and trading method from A to Z: ${cat.items.length} entries in plain English.`, path: '/a-z/',
  body: `${crumbsHtml([['Home', '/'], ['A–Z', '/a-z/']])}<h1>Technical analysis A to Z</h1><p class="lead">All ${cat.items.length} indicators, patterns and methods, in alphabetical order.</p>${azNav}${letters.map((L) => { const l = cat.items.filter((i) => letterOf(i) === L); return l.length ? `<h2 id="${L}">${L}</h2>${itemList(l)}` : ''; }).join('')}`,
  jsonld: [crumbsLd([['Home', '/'], ['A–Z', '/a-z/']])] }));
for (const L of letters) {
  const l = cat.items.filter((i) => letterOf(i) === L);
  if (!l.length) continue;
  const p = `/a-z/${L.toLowerCase()}/`;
  const live = l.filter((i) => pub[i.slug]).length;
  page(p, layout({ title: `Indicators and patterns starting with ${L} | ${SITE.brand}`, desc: `Technical indicators, chart patterns and methods beginning with ${L}.`, path: p, noindex: live < 3,
    body: `${crumbsHtml([['Home', '/'], ['A–Z', '/a-z/'], [L, p]])}<h1>Starting with ${L}</h1>${azNav}${itemList(l)}`, jsonld: [crumbsLd([['Home', '/'], ['A–Z', '/a-z/'], [L, p]])] }), { index: live >= 3 });
}

// Static pages (shared legal + own pages)
const fill = (s) => s.replaceAll('{{BRAND}}', SITE.brand).replaceAll('{{DOMAIN}}', SITE.domain).replaceAll('{{CONTACT}}', SITE.contact);
const staticPages = [
  ['risk-warning', path.join(ROOT, 'shared', 'legal', 'risk-warning.md')],
  ['advertising-disclosure', path.join(ROOT, 'shared', 'legal', 'advertising-disclosure.md')],
  ['privacy', path.join(ROOT, 'shared', 'legal', 'privacy.md')],
  ['terms', path.join(ROOT, 'shared', 'legal', 'terms.md')],
  ...fs.readdirSync(path.join(ROOT, 'content', 'pages')).filter((f) => f.endsWith('.md')).map((f) => [f.replace(/\.md$/, ''), path.join(ROOT, 'content', 'pages', f)]),
];
for (const [slug, file] of staticPages) {
  const { data, body } = parseFrontMatter(fill(fs.readFileSync(file, 'utf8')));
  const p = `/${slug}/`;
  page(p, layout({ title: `${data.title} | ${SITE.brand}`, desc: data.description || `${data.title} for ${SITE.brand}.`, path: p,
    body: `${crumbsHtml([['Home', '/'], [data.title, p]])}<article class="prose"><h1>${esc(data.title)}</h1>${marked.parse(body)}<p class="reviewed">Last updated: ${esc(data.reviewed || '')}</p></article>`, jsonld: [crumbsLd([['Home', '/'], [data.title, p]])] }));
}

// Home
const homeLd = [
  { '@context': 'https://schema.org', '@type': 'WebSite', name: SITE.brand, url: SITE.url, inLanguage: 'en-GB' },
  { '@context': 'https://schema.org', '@type': 'Organization', name: SITE.brand, url: SITE.url, logo: abs('/favicon.svg') },
];
const latest = items.map((i) => i.data);
page('/', layout({ title: `${SITE.brand}: every technical indicator and trading method explained`, desc: 'A free, plain-English reference to every technical indicator, chart pattern, candlestick and trading method: what it is, the formula, how to read it and when it works.', path: '/', jsonld: homeLd,
  body: `<section class="hero"><h1>Every technical indicator and trading method, explained</h1><p class="lead">A free reference to ${cat.items.length} indicators, chart patterns, candlesticks and methods. Every guide answers the same questions in the same place: what it is, the formula, how to read it, when it works and the mistakes to avoid.</p></section>
<h2>Browse by market</h2><ul class="cards">${Object.values(STATES).map(([s, n]) => `<li><a href="/market/${s}/"><b>${n}</b></a></li>`).join('')}</ul>
<h2>Browse by use</h2><ul class="cards">${Object.values(PURPOSES).map(([s, n]) => `<li><a href="/use/${s}/"><b>${n}</b></a></li>`).join('')}</ul>
<h2>Browse by type</h2><ul class="cards">${cat.types.map((t) => `<li><a href="/type/${t.slug}/"><b>${esc(t.name)}</b></a></li>`).join('')}</ul>
<h2>A to Z</h2>${azNav}
<h2>Guides so far</h2><ul class="list">${latest.map((d) => `<li>${link(d.slug, d.name)}</li>`).join('')}</ul>` }));

// 404
write('404.html', layout({ title: `Page not found | ${SITE.brand}`, desc: 'Page not found.', path: '/404/', noindex: true, body: `<h1>Page not found</h1><p>Try the <a href="/a-z/">A to Z index</a>.</p>` }));

// Assets, robots, sitemap, llms.txt, headers
fs.mkdirSync(path.join(DIST, 'assets'), { recursive: true });
fs.writeFileSync(path.join(DIST, 'assets', 'site.css'), fs.readFileSync(path.join(ROOT, 'shared', 'styles', 'tokens.css'), 'utf8') + '\n' + fs.readFileSync(path.join(ROOT, 'src', 'site.css'), 'utf8'));
fs.copyFileSync(path.join(ROOT, 'src', 'favicon.svg'), path.join(DIST, 'favicon.svg'));
if (fs.existsSync(CHART_DIR)) fs.cpSync(CHART_DIR, path.join(DIST, 'charts'), { recursive: true, filter: (f) => !f.endsWith('manifest.json') });
fs.copyFileSync(path.join(ROOT, 'src', '_headers'), path.join(DIST, '_headers'));
write('robots.txt', `User-agent: *\nAllow: /\nDisallow: /search/\nDisallow: /*?*\n\n# AI search tools are welcome to read and quote this site.\nUser-agent: GPTBot\nAllow: /\nUser-agent: ClaudeBot\nAllow: /\nUser-agent: PerplexityBot\nAllow: /\nUser-agent: Google-Extended\nAllow: /\n\nSitemap: ${abs('/sitemap.xml')}\n`);
write('sitemap.xml', `<?xml version="1.0" encoding="UTF-8"?>\n<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">\n${sitemap.map((u) => `<url><loc>${abs(u)}</loc><lastmod>${BUILD_DATE}</lastmod></url>`).join('\n')}\n</urlset>\n`);
write('llms.txt', `# ${SITE.brand}\n\n> A free, plain-English reference to technical indicators, chart patterns, candlesticks and trading methods. Every guide uses the same sections: quick answer, at a glance, what it is, formula, how to read it, best market states, settings, common mistakes, pairs well with, related, sources, FAQ.\n\n## Browse\n- [A to Z](${abs('/a-z/')})\n- [By market state](${abs('/market/')})\n- [By use](${abs('/use/')})\n- [By type](${abs('/type/')})\n\n## Guides\n${latest.map((d) => `- [${d.name}](${abs(`/${d.slug}/`)})`).join('\n')}\n\n## Notes\n- Educational only, not financial advice. See ${abs('/risk-warning/')}\n`);
console.log(`build: ${sitemap.length} indexable pages, ${items.length} guides -> dist/`);
