import test from 'node:test';
import assert from 'node:assert/strict';
import fs from 'node:fs';
import os from 'node:os';
import path from 'node:path';
import { spawnSync } from 'node:child_process';
import { fileURLToPath } from 'node:url';

const CHECK = path.join(path.dirname(fileURLToPath(import.meta.url)), '..', 'check-dist.mjs');
const page = (title, body, header = '') => `<!doctype html><html><head><meta charset="utf-8"><meta name="viewport" content="width=device-width"><title>${title}</title><meta name="description" content="d"></head><body><header>${header}</header><main id="main">${body}</main></body></html>`;
function fixture(files) {
  const dir = fs.mkdtempSync(path.join(os.tmpdir(), 'cd-'));
  for (const [p, c] of Object.entries(files)) {
    fs.mkdirSync(path.dirname(path.join(dir, p)), { recursive: true });
    fs.writeFileSync(path.join(dir, p), c);
  }
  return dir;
}
const sitemap = (urls) => `<urlset>${urls.map((u) => `<url><loc>https://x.test${u}</loc></url>`).join('')}</urlset>`;
const run = (dir, args = []) => spawnSync(process.execPath, [CHECK, ...args], { env: { ...process.env, DIST: dir }, encoding: 'utf8' });

test('clean site passes', () => {
  const dir = fixture({
    'index.html': page('Home', '<h1>Home</h1><a href="/a/">A</a><a href="#main">top</a>', '<a href="/a/">A</a>'),
    'a/index.html': page('A', '<h1 id="t">A</h1><a href="/#main">home</a>'),
    'sitemap.xml': sitemap(['/', '/a/']),
  });
  const r = run(dir);
  assert.equal(r.status, 0, r.stderr);
  assert.match(r.stdout, /2 pages/);
});

test('broken site fails with each problem named', () => {
  const dir = fixture({
    'index.html': page('Home', '<h1>Home</h1><a href="/a/">A</a><a href="/missing/">x</a>'),
    'a/index.html': page('A', '<h1>A</h1><h1>B</h1><a href="/#nope">f</a><p id="d"></p><p id="d"></p>'),
    'lonely/index.html': page('Lonely', '<h1>L</h1>'),
    'sitemap.xml': sitemap(['/', '/a/', '/lonely/']),
  });
  const r = run(dir);
  assert.equal(r.status, 1);
  assert.match(r.stderr, /dead href \/missing\//);
  assert.match(r.stderr, /no id "nope"/);
  assert.match(r.stderr, /expected 1 <h1>, found 2/);
  assert.match(r.stderr, /duplicate id "d"/);
  assert.match(r.stderr, /orphan page \/lonely\//);
});

test('--allow-orphan silences a named orphan', () => {
  const dir = fixture({
    'index.html': page('Home', '<h1>Home</h1>'),
    'lonely/index.html': page('Lonely', '<h1>L</h1>'),
    'sitemap.xml': sitemap(['/', '/lonely/']),
  });
  assert.equal(run(dir).status, 1);
  assert.equal(run(dir, ['--allow-orphan=/lonely/']).status, 0);
});
