// Static site generator: content + catalogue -> dist/
import fs from 'node:fs';
import path from 'node:path';
import { marked } from 'marked';
import { loadPosts, longDate } from './posts.mjs';
import { ROOT, SITE, STATES, PURPOSES, STATE_BY_SLUG, PURPOSE_BY_SLUG, loadCatalogue, loadItems, loadDir, parseFrontMatter, readJSON, esc } from './lib.mjs';
import { addHeadingIds, tocHtml, insertBeforeFirstBlock, linkGlossary } from './html.mjs';
import { loadVideos, mediaHtml, videoLd, VIDEO_JS } from './video.mjs';

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
// Scheduled posts: only those whose publish date has passed are built (scripts/posts.mjs).
const POSTS = loadPosts();
// Videos (data/videos.json): nothing shows until an entry has a YouTube id or a file URL.
const { videos: VIDEOS, errors: videoErrors } = loadVideos(ROOT);
if (videoErrors.length) { console.error(`data/videos.json problems:\n  ${videoErrors.join('\n  ')}`); process.exit(1); }
const livePillar = Object.fromEntries(POSTS.livePillars.map((p) => [p.data.slug, p]));
const liveAnswer = Object.fromEntries(POSTS.liveAnswers.map((a) => [a.data.slug, a]));
const answersByGuide = {};   // guide slug -> live answers that link to it ("Questions traders ask" box)
for (const a of POSTS.liveAnswers) for (const g of [].concat(a.data.guides || [])) (answersByGuide[g] ||= []).push(a);
const pillarsByGuide = {};
for (const p of POSTS.livePillars) for (const g of [].concat(p.data.cluster || [])) (pillarsByGuide[g] ||= []).push(p);
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
// Ad slots are server-rendered with one of our own project cards (works with JavaScript off and when ads
// are blocked or not allowed); partner-ad.js swaps in the IC Markets ad only when it may show.
const HOUSE = JSON.parse(fs.readFileSync(path.join(ROOT, 'shared', 'ads', 'house-cards.json'), 'utf8'));
let houseN = 0;
function houseCard() {
  const c = HOUSE.cards[houseN++ % HOUSE.cards.length];
  return `<div class="partner-ad__box"><span class="partner-ad__label">${esc(HOUSE.label)}</span>`
    + `<a class="partner-ad__link" href="${esc(c.url)}" target="_blank" rel="noopener"><strong>${esc(c.title)}</strong>`
    + `<span class="partner-ad__body">${esc(c.body)}</span><span class="partner-ad__cta">${esc(c.cta)} →</span></a></div>`;
}
const adSlot = (size, cls = '') => `<div class="partner-ad house-card ${cls}" data-ad-size="${size}" data-ad-config="${esc(JSON.stringify(adCfg))}">${houseCard()}</div>`;
const ld = (o) => `<script type="application/ld+json">${JSON.stringify(o).replace(/</g, '\\u003c')}</script>`;
const crumbsLd = (list) => ({ '@context': 'https://schema.org', '@type': 'BreadcrumbList', itemListElement: list.map(([n, u], i) => ({ '@type': 'ListItem', position: i + 1, name: n, item: abs(u) })) });
const crumbsHtml = (list) => `<nav class="crumbs" aria-label="Breadcrumb">${list.map(([n, u], i) => i === list.length - 1 ? `<span>${esc(n)}</span>` : `<a href="${u}">${esc(n)}</a>`).join(' <span aria-hidden="true">›</span> ')}</nav>`;

const NAV = () => [
  ...(POSTS.livePillars.length ? [['/guide/', 'Guides']] : []),
  ['/a-z/', 'A–Z'], ['/market/', 'By market'], ['/use/', 'By use'], ['/type/', 'By type'], ['/compare/', 'Compare'],
  ...(POSTS.liveAnswers.length ? [['/answers/', 'Answers']] : []),
  ['/glossary/', 'Glossary'],
  ['/search/', 'Search'],
];
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
<a class="skip" href="#main">Skip to content</a>
<header class="top"><div class="wrap"><a class="brand" href="/">Technical Analysis <b>Bible</b></a>
<nav class="mainnav" aria-label="Main">${NAV().map(([href, label]) => `<a href="${href}"${p === href || (p.startsWith(href) && href !== '/') ? ' aria-current="page"' : ''}>${label}</a>`).join('')}</nav></div></header>
<div class="wrap ${sidebar ? 'withside' : ''}">
<main id="main">${body}</main>
${sidebar ? `<aside class="side">${adSlot('300x600', 'sticky')}</aside>` : ''}
</div>
<footer class="foot"><div class="wrap">
<p class="risk"><strong>Risk warning:</strong> ${RISK_NOTE} <a href="/risk-warning/">Read the full risk warning</a>.</p>
<p>${SITE.brand} is free and supported by advertising. Some links are affiliate links: we may earn a commission at no cost to you. As an Amazon Associate we earn from qualifying purchases. <a href="/advertising-disclosure/">How we make money</a>.</p>
<nav>${AMZ_BOOKS.length ? '<a href="/reading/">Reading list</a> · ' : ''}<a href="/methods/">Methods</a> · <a href="/about/">About</a> · <a href="/how-we-write/">How we write</a> · <a href="/risk-warning/">Risk warning</a> · <a href="/advertising-disclosure/">Advertising</a> · <a href="/privacy/">Privacy</a> · <a href="/terms/">Terms</a></nav>
<p class="small">© ${new Date().getFullYear()} ${SITE.brand}</p>
</div></footer>
<script>${adJs}</script>${body.includes('data-yt=') ? `
<script>${VIDEO_JS}</script>` : ''}
</body></html>`;
}

const compares = loadDir('compare');
const glossary = loadDir('glossary');
const cmpPub = Object.fromEntries(compares.map((c) => [c.data.slug, c]));
const glPub = Object.fromEntries(glossary.map((g) => [g.data.slug, g]));
// First mention of each glossary term in body text links to its definition (scripts/html.mjs).
const GL_TERMS = glossary.map((g) => ({ slug: g.data.slug, term: g.data.term }));
const gl = (html, opts) => linkGlossary(html, GL_TERMS, opts);

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

const CITED = fs.existsSync(path.join(ROOT, 'data', 'books-cited.json')) ? JSON.parse(fs.readFileSync(path.join(ROOT, 'data', 'books-cited.json'), 'utf8')) : [];
const CITED_BY = Object.fromEntries(CITED.map((c) => [c.title, new Set(c.used)]));
const amzUrl = (b) => `https://www.amazon.com/dp/${b.asin}?tag=${AMZ_TAG}`;
const bookLi = (b) => `<li><a href="${amzUrl(b)}" rel="sponsored nofollow noopener" target="_blank"><em>${esc(b.title)}</em></a> <small>${esc((b.cite.match(/^[^(]+\(\d{4}\)/) || [b.cite.split('.')[0]])[0])}</small></li>`;
function readingFor(slugs, n = 3) {
  const set = new Set(slugs);
  return AMZ_BOOKS.map((b) => [b, [...(CITED_BY[b.title] || [])].filter((s) => set.has(s)).length]).filter(([, k]) => k > 0)
    .sort((a, b) => b[1] - a[1]).slice(0, n).map(([b]) => b);
}
function readingBox(slugs) {
  const bs = readingFor(slugs);
  return bs.length ? `<section class="reading"><h2>Further reading</h2><ul>${bs.map(bookLi).join('')}</ul>${AMZ_NOTE}</section>` : '';
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

// "On this page" jump row: inserted after the quick answer, before the first ad/figure/heading. Skipped under 4 headings.
function jumpRow(html, heads) {
  const all = [...heads, { id: 'related', text: 'Related' }];
  return all.length < 4 ? html : insertBeforeFirstBlock(html, tocHtml(all, { inline: true }));
}

// ---------- item pages ----------
for (const { data: d, body } of items) {
  const c = bySlug[d.slug];
  const primaryType = c.types[0];
  const p = `/${d.slug}/`;
  const quick = body.split(/\n## /)[0].trim().replace(/\s+/g, ' ');
  const hid = addHeadingIds(gl(rewriteLinks(marked.parse(body))), { reserved: ['related'] });
  let html = hid.html;
  // Ads: one text unit before the formula/drawing section, one before "Pairs well with".
  let n = 0;
  html = html.replace(/<h2[^>]*>(Formula|How it is|How it works)/, (m) => (n++ ? m : adSlot('text') + m));
  html = html.replace(/<h2[^>]*>Pairs well with/, (m) => adSlot('text') + m);
  html = html.replace(/<table>/g, '<div class="tablewrap"><table>').replace(/<\/table>/g, '</table></div>');
  const amz = amazonLinks(html);
  html = amz.html;
  if (amz.used) html = html.replace(/(<h2[^>]*>FAQ)/, AMZ_NOTE + '$1');
  const chart = CHARTS[d.slug];
  if (chart || VIDEOS[p]) html = html.replace(/<h2[^>]*>What (is|are)/, (m) => mediaHtml(VIDEOS[p], chart && figureHtml(chart)) + m);

  const related = [...new Set([].concat(d.related || []))];
  const tags = `<p class="tags"><span>Best in:</span> ${[].concat(d.states).map((s) => `<a class="chip" href="/market/${s}/">${esc(STATE_BY_SLUG[s])}</a>`).join(' ')} <span>Used for:</span> ${[].concat(d.purposes).map((s) => `<a class="chip" href="/use/${s}/">${esc(PURPOSE_BY_SLUG[s])}</a>`).join(' ')}</p>`;
  const cmpLinks = [].concat(d.compare || []).filter((s) => cmpPub[s]);
  for (const c of compares) if ((c.data.a === d.slug || c.data.b === d.slug) && !cmpLinks.includes(c.data.slug)) cmpLinks.push(c.data.slug);
  const glLinks = [].concat(d.glossary || []).filter((s) => glPub[s]);
  const relatedHtml = `<section class="related"><h2 id="related">Related</h2><ul>${related.map((s) => `<li>${link(s)}</li>`).join('')}</ul>`
    + (cmpLinks.length ? `<h3>Compare</h3><ul>${cmpLinks.map((s) => `<li><a href="/compare/${s}/">${esc(cmpTitle(s))}</a></li>`).join('')}</ul>` : '')
    + (glLinks.length ? `<h3>Key terms</h3><p>${glLinks.map((s) => `<a class="chip" href="/glossary/${s}/">${esc(glTerm(s))}</a>`).join(' ')}</p>` : '')
    + (pillarsByGuide[d.slug] ? `<h3>Complete guide</h3><ul>${pillarsByGuide[d.slug].map((x) => `<li><a href="/guide/${x.data.slug}/">${esc(x.data.title)}</a></li>`).join('')}</ul>` : '')
    + (answersByGuide[d.slug] ? `<h3>Questions traders ask</h3><ul>${answersByGuide[d.slug].map((x) => `<li><a href="/answers/${x.data.slug}/">${esc(x.data.title)}</a></li>`).join('')}</ul>` : '')
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
    ...(VIDEOS[p] ? [videoLd(VIDEOS[p], abs(p))] : []),
  ];
  html = jumpRow(html, hid.heads);
  const bodyHtml = `${crumbsHtml(crumbs)}<article class="item"><h1>${esc(d.name)}</h1>${tags}${html}${relatedHtml}
<p class="reviewed">Last reviewed: ${esc(d.reviewed)}</p></article>`;
  page(p, layout({ title, desc: quick.slice(0, 155).replace(/\s\S*$/, '') + '…', path: p, body: bodyHtml, jsonld, sidebar: true }));
}

// ---------- comparison pages ----------
for (const { data: d, body } of compares) {
  const p = `/compare/${d.slug}/`;
  const quick = body.split(/\n## /)[0].trim().replace(/\s+/g, ' ');
  const hid = addHeadingIds(gl(rewriteLinks(marked.parse(body))), { reserved: ['related'] });
  let html = hid.html.replace(/<table>/g, '<div class="tablewrap"><table>').replace(/<\/table>/g, '</table></div>');
  html = html.replace(/<h2[^>]*>Using both/, (m) => adSlot('text') + m);
  const faq = parseFaq(body);
  const crumbs = [['Home', '/'], ['Compare', '/compare/'], [d.title, p]];
  const guides = `<section class="related"><h2 id="related">Full guides</h2><ul><li>${link(d.a)}</li><li>${link(d.b)}</li></ul></section>`;
  const jsonld = [
    { '@context': 'https://schema.org', '@type': 'TechArticle', headline: d.title, description: quick, url: abs(p), dateModified: BUILD_DATE, inLanguage: 'en-GB',
      author: { '@type': 'Organization', name: SITE.brand, url: SITE.url }, publisher: { '@type': 'Organization', name: SITE.brand, url: SITE.url },
      about: [d.a, d.b].map((s) => ({ '@type': 'DefinedTerm', name: bySlug[s]?.name || s, url: abs(`/${s}/`) })) },
    { '@context': 'https://schema.org', '@type': 'FAQPage', mainEntity: faq.map((f) => ({ '@type': 'Question', name: f.q, acceptedAnswer: { '@type': 'Answer', text: f.a } })) },
    crumbsLd(crumbs),
  ];
  page(p, layout({ title: `${d.title}: differences and when to use each | ${SITE.brand}`, desc: quick.slice(0, 155).replace(/\s\S*$/, '') + '…', path: p, jsonld, sidebar: true,
    body: `${crumbsHtml(crumbs)}<article class="item"><h1>${esc(d.title)}</h1>${jumpRow(html, hid.heads)}${guides}<p class="reviewed">Last reviewed: ${esc(d.reviewed)}</p></article>` }));
}
if (compares.length) page('/compare/', layout({ title: `Indicator comparisons | ${SITE.brand}`, desc: 'Side-by-side comparisons of popular technical indicators and patterns: how they differ and when to use each.', path: '/compare/',
  jsonld: [crumbsLd([['Home', '/'], ['Compare', '/compare/']])],
  body: `${crumbsHtml([['Home', '/'], ['Compare', '/compare/']])}<h1>Comparisons</h1><p class="lead">Side-by-side guides for tools people often mix up or choose between.</p><ul class="list">${[...compares].sort((a, b) => a.data.title.localeCompare(b.data.title)).map((c) => `<li><a href="/compare/${c.data.slug}/">${esc(c.data.title)}</a></li>`).join('')}</ul>` }));

// ---------- glossary ----------
for (const { data: d, body } of glossary) {
  const p = `/glossary/${d.slug}/`;
  const def = body.split(/\n## /)[0].trim().replace(/\s+/g, ' ');
  const html = gl(rewriteLinks(marked.parse(body)), { self: d.slug, max: 3 });
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
function hub({ p, title, h1, intro, list, crumbs, extra = '' }) {
  const live = list.filter((i) => pub[i.slug]).length;
  const jsonld = [
    { '@context': 'https://schema.org', '@type': 'CollectionPage', name: h1, url: abs(p), description: intro,
      mainEntity: { '@type': 'ItemList', itemListElement: list.filter((i) => pub[i.slug]).map((i, k) => ({ '@type': 'ListItem', position: k + 1, url: abs(`/${i.slug}/`), name: i.name })) } },
    crumbsLd(crumbs),
  ];
  const paras = intro.split(/\n\n+/).map((t, i) => `<p${i ? '' : ' class="lead"'}>${esc(t)}</p>`).join('');
  const desc = intro.split(/\n\n+/)[0].length > 158 ? intro.split(/\n\n+/)[0].slice(0, 155).replace(/\s\S*$/, '') + '…' : intro.split(/\n\n+/)[0];
  const body = `${crumbsHtml(crumbs)}<h1>${esc(h1)}</h1>${paras}${extra}<p class="count">${list.length} guides.</p>${itemList(list)}${readingBox(list.map((i) => i.slug))}`;
  page(p, layout({ title, desc, path: p, body, jsonld, noindex: live < 3 }), { index: live >= 3 });
}

const HUB_INTROS = JSON.parse(fs.readFileSync(path.join(ROOT, 'data', 'hub-intros.json'), 'utf8'));
for (const t of cat.types) {
  const list = cat.items.filter((i) => i.types.includes(t.slug));
  hub({ p: `/type/${t.slug}/`, title: `${t.name}: every one explained | ${SITE.brand}`, h1: t.name, intro: HUB_INTROS.type?.[t.slug] || `Every ${t.name.toLowerCase()} explained in plain English: what each one is, how it is calculated, how to read it and when it works best.`, list, crumbs: [['Home', '/'], ['By type', '/type/'], [t.name, `/type/${t.slug}/`]] });
}
for (const [, [s, nm]] of Object.entries(STATES)) {
  const list = cat.items.filter((i) => i.states.includes(s));
  // Narrower pages (market state x use) get a link from their market hub, so none is an orphan.
  const crossUses = Object.values(PURPOSES).filter(([u]) => list.filter((i) => i.purposes.includes(u) && pub[i.slug]).length >= 3);
  const extra = crossUses.length ? `<p class="tags"><span>Narrow it down:</span> ${crossUses.map(([u, un]) => `<a class="chip" href="/market/${s}/${u}/">${esc(un)}</a>`).join(' ')}</p>` : '';
  hub({ p: `/market/${s}/`, title: `Best indicators and methods for ${nm.toLowerCase()} | ${SITE.brand}`, h1: `Best for ${nm.toLowerCase()}`, intro: HUB_INTROS.market?.[s] || `Indicators, patterns and methods that work best in ${nm.toLowerCase()}.`, list, crumbs: [['Home', '/'], ['By market', '/market/'], [nm, `/market/${s}/`]], extra });
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

// ---------- pillars (/guide/) and answer posts (/answers/), live ones only ----------
function postLinks(html) {
  return rewriteLinks(html)
    .replace(/<a href="\/answers\/([a-z0-9-]+)\/">([\s\S]*?)<\/a>/g, (m, s, t) => liveAnswer[s] ? m : t)     // not out yet: plain text
    .replace(/<a href="\/guide\/([a-z0-9-]+)\/">([\s\S]*?)<\/a>/g, (m, s, t) => livePillar[s] ? m : t)
    .replace(/<table>/g, '<div class="tablewrap"><table>').replace(/<\/table>/g, '</table></div>');
}
const articleLd = (d, p, type = 'Article') => ({ '@context': 'https://schema.org', '@type': type, headline: d.title, description: d.description, url: abs(p),
  datePublished: d.publish, dateModified: d.updated || d.publish, inLanguage: 'en-GB',
  author: { '@type': 'Organization', name: SITE.brand, url: SITE.url }, publisher: { '@type': 'Organization', name: SITE.brand, url: SITE.url } });
const dates = (d) => `<p class="reviewed">Published ${esc(longDate(d.publish))}${d.updated ? ` · Updated ${esc(longDate(d.updated))}` : ''} · Last reviewed: ${esc(d.reviewed)}</p>`;

for (const { data: d, body } of POSTS.livePillars) {
  const p = `/guide/${d.slug}/`;
  let html = gl(postLinks(marked.parse(body)));
  const hid = addHeadingIds(html, { reserved: ['related'] });
  html = hid.html;
  const toc = tocHtml([...hid.heads, { id: 'related', text: 'Guides in this topic' }]);
  let ads = 0;
  html = html.replace(/<h2 id="[^"]*">/g, (m) => (++ads % 4 === 0 ? adSlot('text') + m : m));
  const chart = d.chart && CHARTS[d.chart];
  if (chart || VIDEOS[p]) html = mediaHtml(VIDEOS[p], chart && figureHtml(chart)) + html;
  const answers = POSTS.liveAnswers.filter((a) => a.data.pillar === d.slug);
  const crumbs = [['Home', '/'], ['Complete guides', '/guide/'], [d.title, p]];
  const more = `<section class="related"><h2 id="related">Guides in this topic</h2><ul>${[].concat(d.cluster).map((s) => `<li>${link(s)}</li>`).join('')}</ul>`
    + (answers.length ? `<h3>Questions traders ask</h3><ul>${answers.map((a) => `<li><a href="/answers/${a.data.slug}/">${esc(a.data.title)}</a></li>`).join('')}</ul>` : '') + `</section>`;
  page(p, layout({ title: `${d.title} | ${SITE.brand}`, desc: d.description, path: p, sidebar: true,
    jsonld: [articleLd(d, p), crumbsLd(crumbs), ...(VIDEOS[p] ? [videoLd(VIDEOS[p], abs(p))] : [])],
    body: `${crumbsHtml(crumbs)}<article class="item pillar"><h1>${esc(d.title)}</h1>${toc}${html}${more}${dates(d)}</article>` }));
}
if (POSTS.livePillars.length) page('/guide/', layout({ title: `Complete guides | ${SITE.brand}`, desc: 'Long-form guides that tie each family of indicators and patterns together, with our own charts and data.', path: '/guide/',
  jsonld: [crumbsLd([['Home', '/'], ['Complete guides', '/guide/']])],
  body: `${crumbsHtml([['Home', '/'], ['Complete guides', '/guide/']])}<h1>Complete guides</h1><p class="lead">One long guide per big topic: how the pieces fit, how to choose between them, worked examples and our own data.</p><ul class="list">${POSTS.livePillars.map((x) => `<li><a href="/guide/${x.data.slug}/">${esc(x.data.title)}</a></li>`).join('')}</ul>` }));

for (const { data: d, body } of POSTS.liveAnswers) {
  const p = `/answers/${d.slug}/`;
  const hid = addHeadingIds(gl(postLinks(marked.parse(body))), { reserved: ['related'] });
  let html = hid.html;
  html = html.replace(/(<h2[^>]*>)/, (m) => adSlot('text') + m);
  const chart = d.chart && CHARTS[d.chart];
  if (chart || VIDEOS[p]) html = html.replace(/(<h2[^>]*>)/, (m) => mediaHtml(VIDEOS[p], chart && figureHtml(chart)) + m);
  html = jumpRow(html, hid.heads);
  const quick = body.split(/\n## /)[0].trim().replace(/\s+/g, ' ').replace(/\[([^\]]+)\]\([^)]+\)/g, '$1').replace(/[*_]/g, '');
  const pil = livePillar[d.pillar];
  const sibs = [].concat(d.siblings || []).filter((s) => liveAnswer[s]);
  const crumbs = [['Home', '/'], ['Answers', '/answers/'], [d.title, p]];
  const more = `<section class="related"><h2 id="related">Read next</h2><ul>${pil ? `<li><a href="/guide/${pil.data.slug}/">${esc(pil.data.title)}</a></li>` : ''}${[].concat(d.guides).map((s) => `<li>${link(s)}</li>`).join('')}${sibs.map((s) => `<li><a href="/answers/${s}/">${esc(liveAnswer[s].data.title)}</a></li>`).join('')}</ul></section>`;
  page(p, layout({ title: `${d.title} | ${SITE.brand}`, desc: d.description, path: p, sidebar: true,
    jsonld: [articleLd(d, p), { '@context': 'https://schema.org', '@type': 'FAQPage', mainEntity: [{ '@type': 'Question', name: d.title, acceptedAnswer: { '@type': 'Answer', text: quick } }] }, crumbsLd(crumbs), ...(VIDEOS[p] ? [videoLd(VIDEOS[p], abs(p))] : [])],
    body: `${crumbsHtml(crumbs)}<article class="item answer"><h1>${esc(d.title)}</h1>${html}${more}${dates(d)}</article>` }));
}
if (POSTS.liveAnswers.length) {
  const groups = [...new Set(POSTS.liveAnswers.map((a) => a.data.pillar))];
  page('/answers/', layout({ title: `Trading questions answered | ${SITE.brand}`, desc: 'Short, direct answers to the questions traders ask about indicators, patterns and methods, with our own charts and data.', path: '/answers/',
    jsonld: [crumbsLd([['Home', '/'], ['Answers', '/answers/']])],
    body: `${crumbsHtml([['Home', '/'], ['Answers', '/answers/']])}<h1>Questions answered</h1><p class="lead">One question per page, answered in the first two sentences.</p>${groups.map((g) => `<h2>${esc(livePillar[g]?.data.title || g)}</h2><ul class="list">${POSTS.liveAnswers.filter((a) => a.data.pillar === g).reverse().map((a) => `<li><a href="/answers/${a.data.slug}/">${esc(a.data.title)}</a> <small>${esc(longDate(a.data.publish))}</small></li>`).join('')}</ul>`).join('')}` }));
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
${POSTS.livePillars.length ? `<h2>Complete guides</h2><ul class="list">${POSTS.livePillars.map((x) => `<li><a href="/guide/${x.data.slug}/">${esc(x.data.title)}</a></li>`).join('')}</ul>` : ''}
${POSTS.liveAnswers.length ? `<h2>Latest answers</h2><ul class="list">${POSTS.liveAnswers.slice(-6).reverse().map((a) => `<li><a href="/answers/${a.data.slug}/">${esc(a.data.title)}</a></li>`).join('')}</ul><p><a href="/answers/">All answers</a></p>` : ''}
<h2>Guides so far</h2><ul class="list">${latest.map((d) => `<li>${link(d.slug, d.name)}</li>`).join('')}</ul>` }));

// Reading list (only books checked on Amazon)
if (AMZ_BOOKS.length) {
  const byUse = [...AMZ_BOOKS].sort((a, b) => (CITED_BY[b.title]?.size || 0) - (CITED_BY[a.title]?.size || 0));
  page('/reading/', layout({ title: `Best technical analysis books | ${SITE.brand}`, desc: 'The technical analysis books our guides cite most often, from classic references to specialist titles.', path: '/reading/',
    jsonld: [crumbsLd([['Home', '/'], ['Reading list', '/reading/']])],
    body: `${crumbsHtml([['Home', '/'], ['Reading list', '/reading/']])}<article class="prose"><h1>Technical analysis reading list</h1><p class="lead">The books our guides cite most, in order of how many guides rely on them. We list them for their content; links go to Amazon.</p><ol class="list">${byUse.map((b) => bookLi(b).replace('</small></li>', ` · cited in ${CITED_BY[b.title]?.size || 0} guides</small></li>`)).join('')}</ol>${AMZ_NOTE}</article>` }));
}

// 404
write('404.html', layout({ title: `Page not found | ${SITE.brand}`, desc: 'Page not found.', path: '/404/', noindex: true, body: `<h1>Page not found</h1><p>That page does not exist, or it has not been published yet. Try one of these:</p><ul class="list"><li><a href="/a-z/">A to Z index</a></li><li><a href="/market/">Browse by market</a></li><li><a href="/use/">Browse by use</a></li><li><a href="/type/">Browse by type</a></li><li><a href="/glossary/">Glossary</a></li></ul>` }));

// Assets, robots, sitemap, llms.txt, headers
fs.mkdirSync(path.join(DIST, 'assets'), { recursive: true });
fs.writeFileSync(path.join(DIST, 'assets', 'site.css'), fs.readFileSync(path.join(ROOT, 'shared', 'styles', 'tokens.css'), 'utf8') + '\n' + fs.readFileSync(path.join(ROOT, 'src', 'site.css'), 'utf8'));
fs.copyFileSync(path.join(ROOT, 'src', 'favicon.svg'), path.join(DIST, 'favicon.svg'));
// ---------- search (to-do #488): live pages only, never scheduled posts ----------
{
  const rows = [
    ...items.map(({ data: d }) => [d.name, `/${d.slug}/`, 'guide', [].concat(d.aka || []).join(' ')]),
    ...glossary.map(({ data: d }) => [d.term, `/glossary/${d.slug}/`, 'term', '']),
    ...compares.map(({ data: d }) => [d.title, `/compare/${d.slug}/`, 'comparison', '']),
    ...POSTS.livePillars.map(({ data: d }) => [d.title, `/guide/${d.slug}/`, 'complete guide', '']),
    ...POSTS.liveAnswers.map(({ data: d }) => [d.title, `/answers/${d.slug}/`, 'answer', '']),
  ];
  fs.writeFileSync(path.join(DIST, 'assets', 'search.json'), JSON.stringify(rows));
  fs.copyFileSync(path.join(ROOT, 'src', 'search.js'), path.join(DIST, 'assets', 'search.js'));
  page('/search/', layout({ title: `Search | ${SITE.brand}`, desc: 'Search every guide, term, comparison and answer.', path: '/search/', noindex: true,
    body: `${crumbsHtml([['Home', '/'], ['Search', '/search/']])}<h1>Search</h1><form class="search" role="search" action="/search/" onsubmit="return false"><label for="q">Search guides, terms and answers</label><input id="q" name="q" type="search" autocomplete="off" placeholder="For example RSI or head and shoulders"></form><p id="search-note" class="count" aria-live="polite"></p><ul id="results" class="list"></ul><noscript><p>Search needs JavaScript. Use the <a href="/a-z/">A to Z</a> or the <a href="/glossary/">glossary</a>.</p></noscript><script src="/assets/search.js" defer></script>` }), { index: false });
}
if (fs.existsSync(CHART_DIR)) fs.cpSync(CHART_DIR, path.join(DIST, 'charts'), { recursive: true, filter: (f) => !f.endsWith('manifest.json') });
fs.copyFileSync(path.join(ROOT, 'src', '_headers'), path.join(DIST, '_headers'));
write('robots.txt', `User-agent: *\nAllow: /\nDisallow: /search/\nDisallow: /*?*\n\n# AI search tools are welcome to read and quote this site.\nUser-agent: GPTBot\nAllow: /\nUser-agent: ClaudeBot\nAllow: /\nUser-agent: PerplexityBot\nAllow: /\nUser-agent: Google-Extended\nAllow: /\n\nSitemap: ${abs('/sitemap.xml')}\n`);
write('sitemap.xml', `<?xml version="1.0" encoding="UTF-8"?>\n<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">\n${sitemap.map((u) => `<url><loc>${abs(u)}</loc><lastmod>${BUILD_DATE}</lastmod></url>`).join('\n')}\n</urlset>\n`);
write('llms.txt', `# ${SITE.brand}\n\n> A free, plain-English reference to technical indicators, chart patterns, candlesticks and trading methods. Every guide uses the same sections: quick answer, at a glance, what it is, formula, how to read it, best market states, settings, common mistakes, pairs well with, related, sources, FAQ.\n\n## Browse\n- [A to Z](${abs('/a-z/')})\n- [By market state](${abs('/market/')})\n- [By use](${abs('/use/')})\n- [By type](${abs('/type/')})\n\n${POSTS.livePillars.length ? `## Complete guides\n${POSTS.livePillars.map((x) => `- [${x.data.title}](${abs(`/guide/${x.data.slug}/`)})`).join('\n')}\n\n` : ''}${POSTS.liveAnswers.length ? `## Answers\n${POSTS.liveAnswers.map((x) => `- [${x.data.title}](${abs(`/answers/${x.data.slug}/`)})`).join('\n')}\n\n` : ''}## Guides\n${latest.map((d) => `- [${d.name}](${abs(`/${d.slug}/`)})`).join('\n')}\n\n## Notes\n- Educational only, not financial advice. See ${abs('/risk-warning/')}\n`);
console.log(`build: ${sitemap.length} indexable pages, ${items.length} guides -> dist/`);
