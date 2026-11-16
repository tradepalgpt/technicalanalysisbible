// Show the publishing calendar: what is live, what goes out each week, and gaps in the drip.
//   npm run schedule            (from today)
//   PREVIEW_DATE=2027-01-01 npm run schedule
import { loadPosts, TODAY, isoWeek, longDate } from './posts.mjs';

const { pillars, answers } = loadPosts();
const all = [...pillars.map((p) => ({ ...p.data, kind: 'PILLAR' })), ...answers.map((a) => ({ ...a.data, kind: 'answer' }))]
  .filter((p) => p.publish).sort((a, b) => a.publish.localeCompare(b.publish));
const live = all.filter((p) => p.publish <= TODAY);
const next = all.filter((p) => p.publish > TODAY);
console.log(`Today ${longDate(TODAY)}: ${live.length} live, ${next.length} scheduled.`);
const weeks = {};
for (const p of next) (weeks[isoWeek(p.publish)] ||= []).push(p);
let prev = null;
for (const [w, list] of Object.entries(weeks)) {
  if (prev) {
    const gap = (Date.parse(list[0].publish) - Date.parse(prev)) / 864e5;
    if (gap > 7) console.log(`  !! ${Math.round(gap)}-day gap with nothing scheduled`);
  }
  console.log(`\n${w}`);
  for (const p of list) console.log(`  ${p.publish}  ${p.kind.padEnd(6)}  ${p.title}${p.kind === 'answer' ? `  [${p.pillar}]` : ''}`);
  prev = list.at(-1).publish;
}
if (next.length) {
  const last = next.at(-1).publish;
  const days = (Date.parse(last) - Date.parse(TODAY)) / 864e5;
  console.log(`\nQueue runs to ${longDate(last)} (${Math.round(days)} days).${days < 42 ? ' Under six weeks left: write the next pillar.' : ''}`);
} else console.log('\nNothing scheduled: write the next pillar.');
