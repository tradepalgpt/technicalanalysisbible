// Copies rendered charts from C:\indicator-lab\out\charts into ./media/charts (committed here,
// so the site builds without indicator-lab). With --verify, fails if the copy has drifted.
import fs from 'node:fs';
import path from 'node:path';
import { ROOT } from './lib.mjs';

const SRC = process.env.INDICATOR_LAB_CHARTS || 'C:/indicator-lab/out/charts';
const DEST = path.join(ROOT, 'media', 'charts');
const verify = process.argv.includes('--verify');
if (!fs.existsSync(SRC)) { if (verify) process.exit(0); throw new Error(`no charts at ${SRC} (run render_all.py in indicator-lab)`); }
const files = fs.readdirSync(SRC).filter((f) => f.endsWith('.svg') || f === 'manifest.json');
let drift = 0;
fs.mkdirSync(DEST, { recursive: true });
for (const f of files) {
  const a = fs.readFileSync(path.join(SRC, f));
  const to = path.join(DEST, f);
  if (verify) { if (!fs.existsSync(to) || !a.equals(fs.readFileSync(to))) { console.error(`chart drift: ${f}`); drift++; } }
  else fs.writeFileSync(to, a);
}
if (drift) process.exit(1);
console.log(verify ? 'charts: in sync' : `charts: copied ${files.length} files`);
