// Site search (src/search.js + /assets/search.json, to-do #488).
import { test } from 'node:test';
import assert from 'node:assert/strict';
import fs from 'node:fs';
import path from 'node:path';

const ROOT = path.resolve(import.meta.dirname, '..', '..');
const tabRank = new Function(fs.readFileSync(path.join(ROOT, 'src', 'search.js'), 'utf8') + '\nreturn tabRank;')();
const rows = [['Relative Strength Index (RSI)', '/rsi/', 'guide', 'RSI'], ['Connors RSI', '/connors-rsi/', 'guide', ''],
  ['Head and shoulders', '/head-and-shoulders/', 'guide', ''], ['Best RSI period for swing trading', '/answers/x/', 'answer', ''], ['Oversold', '/glossary/oversold/', 'term', '']];

test('every typed word must match the title or aka', () => {
  assert.deepEqual(tabRank(rows, 'head shoulders').map((r) => r[1]), ['/head-and-shoulders/']);
  assert.deepEqual(tabRank(rows, ''), []);
  assert.deepEqual(tabRank(rows, 'zzz'), []);
});

test('the main guide for a short name comes first; words match from their start only', () => {
  const r = tabRank([...rows, ['Mean Reversion', '/mean-reversion/', 'guide', 'reversion to the mean']], 'rsi').map((x) => x[1]);
  assert.equal(r[0], '/rsi/');
  assert.ok(!r.includes('/mean-reversion/'));
  assert.ok(r.indexOf('/connors-rsi/') > 0);
});

test('at most 30 results', () => {
  const many = Array.from({ length: 50 }, (_, i) => [`Moving average ${i}`, `/m${i}/`, 'guide', '']);
  assert.equal(tabRank(many, 'moving').length, 30);
});

const DIST = path.join(ROOT, 'dist');
test('built search.json: every url exists, no scheduled posts, search page is noindex and not in the sitemap', { skip: !fs.existsSync(path.join(DIST, 'assets', 'search.json')) && 'run npm run build first' }, () => {
  const data = JSON.parse(fs.readFileSync(path.join(DIST, 'assets', 'search.json'), 'utf8'));
  assert.ok(data.length > 300);
  for (const [title, url] of data) {
    assert.ok(title, url);
    assert.ok(fs.existsSync(path.join(DIST, url, 'index.html')), `missing page for ${url}`);
  }
  const html = fs.readFileSync(path.join(DIST, 'search', 'index.html'), 'utf8');
  assert.match(html, /noindex/);
  assert.doesNotMatch(fs.readFileSync(path.join(DIST, 'sitemap.xml'), 'utf8'), /\/search\//);
});
