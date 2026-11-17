// Automatic glossary links (scripts/html.mjs linkGlossary, to-do #488).
import { test } from 'node:test';
import assert from 'node:assert/strict';
import { linkGlossary } from '../html.mjs';

const T = [{ slug: 'oscillator', term: 'Oscillator' }, { slug: 'trailing-stop', term: 'Trailing stop' }, { slug: 'swing-high', term: 'Swing high' },
  { slug: 'overbought', term: 'Overbought' }, { slug: 'stop', term: 'Stop' }, { slug: 'oversold', term: 'Oversold' }];
const strip = (h) => h.replace(/<a class="gl" href="[^"]+">([^<]*)<\/a>/g, '$1');
const q = '<p>Quick answer about an oscillator.</p>';

test('first mention only, original casing kept, plural allowed', () => {
  const out = linkGlossary(`${q}<p>Each Oscillator is fine. Oscillators again.</p><p>One more oscillator.</p>`, T);
  assert.equal((out.match(/class="gl"/g) || []).length, 1);
  assert.match(out, /<a class="gl" href="\/glossary\/oscillator\/">Oscillator<\/a> is fine/);
  assert.match(linkGlossary(`${q}<p>Two oscillators.</p>`, T), />oscillators<\/a>/);
});

test('the quick-answer paragraph is never touched', () => {
  assert.equal(linkGlossary(q, T), q);
});

test('never inside links, headings, table headers, code, figcaptions or coming-soon spans', () => {
  const h = `${q}<h2>Oscillator</h2><p><a href="/x/">oscillator</a> <code>oscillator</code> <span class="soon">oscillator</span></p><table><tr><th>Overbought</th></tr></table><figure><figcaption>oversold</figcaption></figure>`;
  assert.equal(linkGlossary(h, T), h);
});

test('longest term wins, whole words only, plain-English words left alone', () => {
  const out = linkGlossary(`${q}<p>Use a trailing stop. A swing highway is not a swing high.</p>`, T);
  assert.match(out, />trailing stop<\/a>/);
  assert.doesNotMatch(out, /glossary\/stop\//);
  assert.match(out, /swing highway is not a <a class="gl" href="\/glossary\/swing-high\/">swing high<\/a>/);
});

test('max per page respected, self never linked', () => {
  const body = `${q}<ul><li>oscillator overbought oversold swing high</li></ul>`;
  assert.equal((linkGlossary(body, T, { max: 2 }).match(/class="gl"/g) || []).length, 2);
  assert.doesNotMatch(linkGlossary(body, T, { self: 'overbought' }), /glossary\/overbought\//);
});

test('text is never changed: stripping the links gives the input back exactly', () => {
  const h = `${q}<p>An <strong>oscillator</strong> reads overbought &amp; oversold.</p><ul><li>Swing high &gt; swing low</li></ul><td>x</td>`;
  const out = linkGlossary(h, T);
  assert.notEqual(out, h);
  assert.equal(strip(out), h);
});
