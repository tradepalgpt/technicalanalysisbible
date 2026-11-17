// Home page tidy (to-do #488): guides grouped by type, nothing lost.
import { test } from 'node:test';
import assert from 'node:assert/strict';
import fs from 'node:fs';
import path from 'node:path';

const ROOT = path.resolve(import.meta.dirname, '..', '..');
const home = path.join(ROOT, 'dist', 'index.html');
test('home links every published guide, groups them by type, one h1, search box', { skip: !fs.existsSync(home) && 'run npm run build first' }, () => {
  const h = fs.readFileSync(home, 'utf8');
  for (const f of fs.readdirSync(path.join(ROOT, 'content', 'items')).filter((x) => x.endsWith('.md'))) {
    assert.ok(h.includes(`href="/${f.slice(0, -3)}/"`), `home has no link to ${f}`);
  }
  assert.ok((h.match(/<details class="group">/g) || []).length >= 10);
  assert.equal((h.match(/<h1[\s>]/g) || []).length, 1);
  assert.match(h, /<form class="search" role="search" action="\/search\/">/);
  assert.doesNotMatch(h, /Guides so far/);
});
