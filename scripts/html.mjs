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
