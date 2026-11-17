import test from 'node:test';
import assert from 'node:assert/strict';
import { slugify, addHeadingIds, tocHtml, insertBeforeFirstBlock } from '../html.mjs';

test('slugify is lower-case and stable', () => {
  assert.equal(slugify('Common Mistakes'), 'common-mistakes');
  assert.equal(slugify('What is the RSI?'), 'what-is-the-rsi');
  assert.equal(slugify('Q &amp; A'), 'q-a');
});

test('duplicate headings get suffixes', () => {
  const { html, heads } = addHeadingIds('<h2>FAQ</h2><p>x</p><h2>FAQ</h2><h2>FAQ</h2>');
  assert.deepEqual(heads.map((h) => h.id), ['faq', 'faq-2', 'faq-3']);
  assert.match(html, /<h2 id="faq-2">FAQ<\/h2>/);
});

test('links and entities give clean labels', () => {
  const { heads } = addHeadingIds('<h2>The <a href="/rsi/">RSI</a> &amp; MACD</h2>');
  assert.equal(heads[0].text, 'The RSI & MACD');
  assert.equal(heads[0].id, 'the-rsi-macd');
});

test('html with no h2 is unchanged', () => {
  const src = '<p>hello</p><h3>x</h3>';
  const r = addHeadingIds(src);
  assert.equal(r.html, src);
  assert.deepEqual(r.heads, []);
});

test('reserved ids are not handed out', () => {
  assert.equal(addHeadingIds('<h2>Related</h2>', { reserved: ['related'] }).heads[0].id, 'related-2');
});

test('toc renders full list and compact row', () => {
  const heads = [{ id: 'a', text: 'A & B' }];
  assert.match(tocHtml(heads), /<h2>Contents<\/h2><ol><li><a href="#a">A &amp; B<\/a>/);
  assert.match(tocHtml(heads, { inline: true }), /class="toc toc--inline".*On this page/);
  assert.equal(tocHtml([]), '');
});

test('insertBeforeFirstBlock goes before the earliest block', () => {
  assert.equal(insertBeforeFirstBlock('<p>q</p><div class="partner-ad x"></div><h2 id="a">A</h2>', 'T'), '<p>q</p>T<div class="partner-ad x"></div><h2 id="a">A</h2>');
});
