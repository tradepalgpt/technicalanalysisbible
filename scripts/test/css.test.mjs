import test from 'node:test';
import assert from 'node:assert/strict';
import fs from 'node:fs';
import path from 'node:path';
import { fileURLToPath } from 'node:url';

const css = fs.readFileSync(path.join(path.dirname(fileURLToPath(import.meta.url)), '..', '..', 'src', 'site.css'), 'utf8');

test('every class the build emits has at least one rule', () => {
  for (const c of ['toc', 'related', 'hero', 'prose', 'skip', 'tablewrap', 'chart', 'az', 'chip', 'cards', 'list']) {
    assert.match(css, new RegExp(`\.${c}(?![\w-])`), `no rule for .${c}`);
  }
});

test('no raw hex colours except the chart image background', () => {
  const hex = css.split('\n').filter((l) => /#[0-9a-f]{3,8}\b/i.test(l));
  assert.deepEqual(hex.filter((l) => !l.startsWith('.chart img')), []);
});
