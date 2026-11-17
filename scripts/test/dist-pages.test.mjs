// Asserts on the real built dist/ (skips when dist/ is absent). Works for both a normal and a PREVIEW_DATE build.
import test from 'node:test';
import assert from 'node:assert/strict';
import fs from 'node:fs';
import path from 'node:path';
import { fileURLToPath } from 'node:url';

const DIST = path.join(path.dirname(fileURLToPath(import.meta.url)), '..', '..', 'dist');
const has = fs.existsSync(path.join(DIST, 'index.html'));
const read = (p) => fs.readFileSync(path.join(DIST, p), 'utf8');
const header = (html) => html.match(/<header[\s\S]*?<\/header>/)[0];
const current = (html) => [...header(html).matchAll(/<a href="([^"]+)" aria-current="page">([^<]*)</g)];

test('home page marks no current section', { skip: !has }, () => {
  assert.equal(current(read('index.html')).length, 0);
});

test('A-Z page marks exactly A-Z as current', { skip: !has }, () => {
  const c = current(read('a-z/index.html'));
  assert.equal(c.length, 1);
  assert.equal(c[0][1], '/a-z/');
});

test('Guides link appears in the header only when a pillar is live', { skip: !has }, () => {
  const live = fs.existsSync(path.join(DIST, 'guide', 'index.html'));
  assert.equal(header(read('index.html')).includes('href="/guide/"'), live);
});

test('every page has a skip link as the first body element', { skip: !has }, () => {
  assert.match(read('index.html'), /<body>\s*<a class="skip" href="#main">/);
  assert.match(read('404.html'), /<body>\s*<a class="skip" href="#main">/);
});

test('footer links to Methods and the reading list', { skip: !has }, () => {
  const foot = read('index.html').match(/<footer[\s\S]*?<\/footer>/)[0];
  assert.ok(foot.includes('href="/methods/"'));
  assert.ok(foot.includes('href="/reading/"'));
});

test('404 page offers browse links', { skip: !has }, () => {
  const h = read('404.html');
  for (const u of ['/market/', '/use/', '/type/', '/glossary/', '/a-z/']) assert.ok(h.includes(`href="${u}"`), u);
});
