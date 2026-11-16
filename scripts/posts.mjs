// Pillars (/guide/{slug}/) and answer posts (/answers/{slug}/), released on their `publish` date.
// The build only includes posts whose publish date has passed, so batches written today drip out over months.
// Preview a future date with: PREVIEW_DATE=2027-02-01 npm run build   (never deploy a preview build)
import { loadDir } from './lib.mjs';

export const TODAY = process.env.PREVIEW_DATE || new Date().toISOString().slice(0, 10);
export const VALUE_ITEMS = ['data', 'chart', 'example', 'verdict', 'table'];   // CONTENT-STRATEGY.md section 2
export const PILLAR_MIN_WORDS = 8000;
export const ANSWER_WORDS = [600, 1500];
export const ANSWERS_PER_WEEK_MAX = 5;

const isDate = (s) => /^\d{4}-\d{2}-\d{2}$/.test(String(s || ''));
const live = (p) => isDate(p.data.publish) && p.data.publish <= TODAY;

export function loadPosts() {
  const pillars = loadDir('guide');
  const answers = loadDir('answers');
  return {
    pillars, answers,
    livePillars: pillars.filter(live),
    liveAnswers: answers.filter(live).sort((a, b) => a.data.publish.localeCompare(b.data.publish) || a.data.slug.localeCompare(b.data.slug)),
  };
}

// "2026-11-24" -> "24 November 2026"
export function longDate(iso) {
  const [y, m, d] = iso.split('-').map(Number);
  return `${d} ${['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'][m - 1]} ${y}`;
}

export function isoWeek(iso) {
  const d = new Date(iso + 'T00:00:00Z');
  const day = (d.getUTCDay() + 6) % 7;
  d.setUTCDate(d.getUTCDate() - day + 3);
  const y = d.getUTCFullYear();
  const w = 1 + Math.round(((d - Date.UTC(y, 0, 4)) / 86400000 - 3 + ((new Date(Date.UTC(y, 0, 4)).getUTCDay() + 6) % 7)) / 7);
  return `${y}-W${String(w).padStart(2, '0')}`;
}

export { isDate };
