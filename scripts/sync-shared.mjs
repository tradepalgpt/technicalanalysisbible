// Copies C:\shared-assets into ./shared. With --verify, fails if the copy has drifted.
import fs from 'node:fs';
import path from 'node:path';
import { ROOT } from './lib.mjs';

const SRC = process.env.SHARED_ASSETS || 'C:/shared-assets';
const DEST = path.join(ROOT, 'shared');
const FILES = ['ads/ic-markets.json', 'ads/house-cards.json', 'ads/partner-ad.js', 'legal/risk-warning.md', 'legal/advertising-disclosure.md', 'legal/privacy.md', 'legal/terms.md', 'styles/tokens.css'];
const verify = process.argv.includes('--verify');

let drift = 0;
for (const f of FILES) {
  const from = path.join(SRC, f);
  const to = path.join(DEST, f);
  if (!fs.existsSync(from)) { if (verify) continue; throw new Error(`missing shared file ${from}`); }
  const a = fs.readFileSync(from);
  if (verify) {
    if (!fs.existsSync(to) || !a.equals(fs.readFileSync(to))) { console.error(`drift: ${f} (run npm run sync-shared)`); drift++; }
  } else {
    fs.mkdirSync(path.dirname(to), { recursive: true });
    fs.writeFileSync(to, a);
  }
}
if (verify && drift) process.exit(1);
console.log(verify ? 'shared: in sync' : `shared: copied ${FILES.length} files`);
