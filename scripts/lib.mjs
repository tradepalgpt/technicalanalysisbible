// Shared helpers: front matter, catalogue, constants.
import fs from 'node:fs';
import path from 'node:path';

export const ROOT = path.resolve(path.dirname(new URL(import.meta.url).pathname.replace(/^\/([A-Z]:)/, '$1')), '..');
export const SITE = {
  brand: 'Technical Analysis Bible',
  domain: 'technicalanalysisbible.com',
  url: 'https://technicalanalysisbible.com',
  contact: 'hello@technicalanalysisbible.com',
};

export const STATES = {
  T: ['trend', 'Trending markets'],
  R: ['range', 'Ranging markets'],
  B: ['breakout', 'Breakouts'],
  Rv: ['reversal', 'Reversals'],
  V: ['volatility', 'Volatile markets'],
};
export const PURPOSES = {
  En: ['entry', 'Entries'],
  Ex: ['exit', 'Exits'],
  St: ['stop', 'Stop losses'],
  Fi: ['filter', 'Filters'],
  Co: ['confirmation', 'Confirmation'],
};
export const STATE_BY_SLUG = Object.fromEntries(Object.values(STATES).map(([s, n]) => [s, n]));
export const PURPOSE_BY_SLUG = Object.fromEntries(Object.values(PURPOSES).map(([s, n]) => [s, n]));

// Minimal YAML subset: key: value, key: [a, b], quoted strings.
export function parseFrontMatter(src) {
  const m = src.match(/^---\r?\n([\s\S]*?)\r?\n---\r?\n?/);
  if (!m) return { data: {}, body: src };
  const data = {};
  for (const raw of m[1].split(/\r?\n/)) {
    const line = raw.replace(/\s+#.*$/, '');
    const kv = line.match(/^([A-Za-z_][\w-]*):\s*(.*)$/);
    if (!kv) continue;
    let v = kv[2].trim();
    if (v.startsWith('[') && v.endsWith(']')) {
      v = v.slice(1, -1).split(',').map((s) => unq(s.trim())).filter(Boolean);
    } else {
      v = unq(v);
      if (/^\d+$/.test(v)) v = Number(v);
    }
    data[kv[1]] = v;
  }
  return { data, body: src.slice(m[0].length) };
}
function unq(s) {
  return s.replace(/^"(.*)"$/, '$1').replace(/^'(.*)'$/, '$1');
}

export function readJSON(p) {
  return JSON.parse(fs.readFileSync(p, 'utf8'));
}

export function loadCatalogue() {
  return readJSON(path.join(ROOT, 'data', 'catalogue.json'));
}

export function loadItems() {
  const dir = path.join(ROOT, 'content', 'items');
  return fs.readdirSync(dir).filter((f) => f.endsWith('.md')).sort().map((f) => {
    const src = fs.readFileSync(path.join(dir, f), 'utf8');
    const { data, body } = parseFrontMatter(src);
    return { file: f, data, body };
  });
}

export const esc = (s) => String(s ?? '').replace(/[&<>"']/g, (c) => ({ '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&#39;' }[c]));

export const REQUIRED_SECTIONS = [
  ['At a glance'],
  ['What is', 'What are'],
  ['Formula', 'How it is drawn', 'How it is identified', 'How it works'],
  ['How to read it', 'How to trade it', 'How to use it'],
  ['Best market states'],
  ['Settings', 'Confirmation rules'],
  ['Common mistakes'],
  ['Pairs well with'],
  ['Sources'],
  ['FAQ'],
];

export const BANNED_PHRASES = [
  'ever-evolving', 'in the world of trading', 'in today\'s fast-paced', 'delve', 'unlock the', 'game-changer',
  'game changer', 'holy grail', 'guaranteed', 'risk-free', 'can\'t lose', 'secret weapon', 'navigate the complex',
  'it is important to note', 'in conclusion', 'tapestry', 'embark on', 'look no further', 'supercharge',
  'skyrocket', '100% accurate', 'never fails', 'TODO-VERIFY', 'should be checked', 'magazine archive', 'check the book', 'needs verifying',
];
