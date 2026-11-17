// Pure HTML helpers (no file access) so they can be unit tested.

const decode = (s) => s.replace(/&amp;/g, '&').replace(/&lt;/g, '<').replace(/&gt;/g, '>').replace(/&quot;/g, '"').replace(/&#0?39;/g, "'");
const escHtml = (s) => s.replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;').replace(/"/g, '&quot;');

export function slugify(text) {
  return decode(text).toLowerCase().replace(/[^a-z0-9]+/g, '-').replace(/^-+|-+$/g, '') || 'section';
}

// Adds a unique id to every plain <h2> in rendered html. Returns { html, heads: [{ id, text }] }.
// `reserved` ids are never handed out (e.g. ids the page builder adds itself).
export function addHeadingIds(html, { reserved = [] } = {}) {
  const used = new Set(reserved);
  const heads = [];
  const out = html.replace(/<h2>([\s\S]*?)<\/h2>/g, (m, inner) => {
    const text = decode(inner.replace(/<[^>]+>/g, '')).replace(/\s+/g, ' ').trim();
    const base = slugify(text);
    let id = base;
    for (let n = 2; used.has(id); n++) id = `${base}-${n}`;
    used.add(id);
    heads.push({ id, text });
    return `<h2 id="${id}">${inner}</h2>`;
  });
  return { html: out, heads };
}

// Contents list. Pillars keep the full "Contents" list; other pages get a compact "On this page" row.
export function tocHtml(heads, { inline = false, label = inline ? 'On this page' : 'Contents' } = {}) {
  if (!heads.length) return '';
  if (inline) return `<nav class="toc toc--inline" aria-label="${escHtml(label)}"><b>${escHtml(label)}:</b> ${heads.map((h) => `<a class="chip" href="#${h.id}">${escHtml(h.text)}</a>`).join(' ')}</nav>`;
  return `<nav class="toc" aria-label="${escHtml(label)}"><h2>${escHtml(label)}</h2><ol>${heads.map((h) => `<li><a href="#${h.id}">${escHtml(h.text)}</a></li>`).join('')}</ol></nav>`;
}

// Insert `fragment` before the first h2, ad slot or figure (whichever comes first); append if none.
export function insertBeforeFirstBlock(html, fragment) {
  const m = /<h2[\s>]|<div class="partner-ad|<figure/.exec(html);
  return m ? html.slice(0, m.index) + fragment + html.slice(m.index) : html + fragment;
}

// ---------- automatic glossary links (to-do #488) ----------
// Plain-English words that are glossary terms but would link far too often in running text.
export const GLOSSARY_NO_AUTOLINK = new Set(['range', 'trend', 'volume', 'gap', 'spread', 'leverage', 'liquidity', 'momentum', 'volatility', 'support', 'resistance', 'breakout', 'pullback', 'candle', 'timeframe', 'signal', 'stop',
  'close', 'mean', 'session', 'noise', 'channel', 'auction', 'delta', 'tick', 'envelope', 'distribution', 'extension', 'projection', 'confirmation', 'reversal', 'rejection', 'imbalance', 'regression', 'smoothing', 'convergence', 'crossover', 'consolidation', 'indecision', 'retest', 'squeeze']);
const SKIP_TAGS = new Set(['a', 'h1', 'h2', 'h3', 'h4', 'h5', 'h6', 'code', 'pre', 'th', 'figcaption', 'script', 'style', 'nav', 'button', 'label', 'summary']);
const TEXT_TAGS = new Set(['p', 'li', 'td', 'dd']);
const reEsc = (s) => s.replace(/[.*+?^${}()|[\]\\]/g, '\\$&');

// Links the first mention of each glossary term in body text: whole words, case-insensitive,
// optional plural "s", longest term first, at most `max` per page, never the page itself.
// Only text inside <p>, <li>, <td>, <dd> that is not inside a skipped element is touched,
// and the first paragraph (the quick answer) is left alone. Text is never changed: stripping
// the added <a class="gl"> tags gives back the input exactly.
export function linkGlossary(html, terms, { self = null, max = 6, skipFirstParagraph = true } = {}) {
  const list = terms.filter((t) => t.slug !== self && t.term.length >= 4 && !GLOSSARY_NO_AUTOLINK.has(t.term.toLowerCase()))
    .sort((a, b) => b.term.length - a.term.length);
  if (!list.length || max <= 0) return html;
  const re = new RegExp(`(?<![A-Za-z0-9-])(${list.map((t) => reEsc(t.term)).join('|')})s?(?![A-Za-z0-9-])`, 'gi');
  const bySlugLower = new Map(list.map((t) => [t.term.toLowerCase(), t.slug]));
  const done = new Set();
  let added = 0;
  const stack = [];
  let skip = 0;
  let paragraphs = 0;
  let inFirstP = false;
  const parts = html.split(/(<[^>]+>)/);
  for (let i = 0; i < parts.length; i++) {
    const part = parts[i];
    if (!part) continue;
    if (part[0] === '<') {
      const m = /^<(\/)?([a-zA-Z0-9]+)([^>]*)>$/.exec(part);
      if (!m || part.startsWith('<!')) continue;
      const [, close, rawName, attrs] = m;
      const name = rawName.toLowerCase();
      if (/\/$/.test(attrs) || ['br', 'img', 'hr', 'input', 'meta', 'link', 'source', 'track', 'wbr'].includes(name)) continue;
      const special = SKIP_TAGS.has(name) || /class="[^"]*\b(soon|toc|partner-ad|house-card|chip)\b/.test(attrs) || /type="application\/ld\+json"/.test(attrs);
      if (!close) {
        stack.push({ name, special });
        if (special) skip++;
        if (name === 'p' && stack.length === 1) { paragraphs++; inFirstP = paragraphs === 1 && skipFirstParagraph; }
      } else {
        for (let k = stack.length - 1; k >= 0; k--) {
          if (stack[k].name !== name) continue;
          for (const e of stack.splice(k)) if (e.special) skip--;
          break;
        }
        if (name === 'p') inFirstP = false;
      }
      continue;
    }
    if (skip || inFirstP || added >= max || !stack.some((e) => TEXT_TAGS.has(e.name))) continue;
    parts[i] = part.replace(re, (whole, term) => {
      const slug = bySlugLower.get(term.toLowerCase());
      if (added >= max || done.has(slug)) return whole;
      done.add(slug);
      added++;
      return `<a class="gl" href="/glossary/${slug}/">${whole}</a>`;
    });
  }
  return parts.join('');
}
