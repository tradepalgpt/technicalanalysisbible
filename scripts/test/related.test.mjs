// Richer related blocks (to-do #488 spec item 6): never an empty list, only live links.
import { test } from 'node:test';
import assert from 'node:assert/strict';
import fs from 'node:fs';
import path from 'node:path';

const DIST = path.resolve(import.meta.dirname, '..', '..', 'dist');
const ok = fs.existsSync(path.join(DIST, 'index.html'));
const pages = (dir) => fs.readdirSync(path.join(DIST, dir)).filter((d) => fs.existsSync(path.join(DIST, dir, d, 'index.html'))).map((d) => fs.readFileSync(path.join(DIST, dir, d, 'index.html'), 'utf8'));

test('no related heading is followed by an empty list', { skip: !ok && 'build first' }, () => {
  for (const dir of ['compare', 'glossary']) for (const h of pages(dir)) assert.doesNotMatch(h, /<h[23][^>]*>[^<]*<\/h[23]><ul><\/ul>/);
});
test('comparison pages link on to other comparisons; glossary pages to related terms', { skip: !ok && 'build first' }, () => {
  assert.ok(pages('compare').filter((h) => h.includes('<h3>More comparisons</h3>')).length > 5);
  assert.ok(pages('glossary').filter((h) => h.includes('<h3>Related terms</h3>')).length > 10);
});
test('previous / next links point at pages that exist', { skip: !ok && 'build first' }, () => {
  if (!fs.existsSync(path.join(DIST, 'answers'))) return;
  for (const h of pages('answers')) for (const m of h.matchAll(/rel="(?:prev|next)" href="([^"]+)"/g)) assert.ok(fs.existsSync(path.join(DIST, m[1], 'index.html')), m[1]);
});
