---
slug: positive-volume-index
name: Positive Volume Index
aka: [PVI]
type: volume
states: [trend]
weak_states: [range]
purposes: [filter]
inventor: Paul L. Dysart Jr. (popularised by Norman Fosback)
year: 1930s
default_settings: "Start at 1,000; 255-day EMA as the trend line on daily charts"
pairs_with: [negative-volume-index, exponential-moving-average, on-balance-volume, volume]
related: [negative-volume-index, price-volume-trend, accumulation-distribution, on-balance-volume, ease-of-movement, force-index]
compare: []
glossary: [smoothing, lookback-period, trend, divergence]
wave: 3
reviewed: 14 November 2026
---

The Positive Volume Index (PVI) is a cumulative line that changes only on days when volume is higher than the day before. The idea is that busy days reflect the crowd, so the line tracks what price does when the crowd is most active. It is usually compared with a long moving average as a slow trend filter.

## At a glance

| | |
|---|---|
| Type | Volume index (cumulative) |
| Best market states | Trend |
| Weak in | Ranges |
| Best uses | Filter |
| Default settings | Start at 1,000; 255-day EMA of the index |
| Created by | Paul L. Dysart Jr., 1930s; popularised by Norman Fosback |
| Leading or lagging | Lagging; designed as a slow, long-term gauge |

## What is the Positive Volume Index?

PVI is the mirror image of the [Negative Volume Index](/negative-volume-index/). It looks only at days when volume rises compared with the previous day. On those days it records the percentage change in price. On days when volume falls or stays the same, it stays flat.

The reasoning comes from an old market idea. Busy, rising-volume days are said to be driven by the crowd, such as uninformed or momentum-following participants, while quiet days are the work of better-informed traders. On that view, PVI shows what the crowd is doing. This is a theory, not a settled fact. Treat it as something to test, and note that this page gives no performance figures for it.

It is usually credited to Paul L. Dysart Jr. in the 1930s and was later popularised by Norman Fosback, who paired it with a long moving average. Sources describe the history in slightly different ways, so the attribution is stated in general terms.

Because volume often rises on strong moves, PVI tends to track broad price swings more closely than NVI does. Many of the largest bars arrive on rising volume, and those bars feed straight into the index.

## Formula

1. Start the index at a base value, usually 1,000.
2. For each new bar: if today's volume is higher than yesterday's,
   PVI = previous PVI + previous PVI x (Close today - Close yesterday) / Close yesterday
3. If today's volume is lower than or equal to yesterday's, PVI = previous PVI (no change).
4. Optionally, plot a long EMA of PVI (255 periods on daily bars is the common choice).

**Worked example.** PVI starts at 1,000. Close yesterday is 50.
Day 1: Close 52, volume higher than yesterday. Change = (52 - 50) / 50 = 4%. PVI = 1,000 + 1,000 x 0.04 = **1,040**.
Day 2: Close 51.48, volume lower than Day 1. PVI stays **1,040** even though price fell.
Day 3: Close 52.5, volume higher than Day 2. Change = (52.5 - 51.48) / 51.48 = about 2%. PVI = 1,040 + 1,040 x 0.02 = about **1,060.8**.

Platform differences: the base value, starting date and smoothing line vary. The base value changes only the scale.

## How to read it

**Against its long average.** The common reading is PVI above its 255-day EMA as a sign of strong crowd participation behind a rising market, and below as the reverse. It flips rarely.

**Direction of the line.** A rising PVI means price has been rising on days of increasing volume. A falling PVI means it has been falling on such days.

**Divergence with price.** Price makes a new high while PVI does not. That suggests the highest-volume days are no longer driving the advance. See [Divergence](/divergence/). Treat it as a warning only.

**Paired with NVI.** NVI and PVI are often viewed together. Reading them as "informed" and "crowd" lines is a convention from the indicator's history. Whether the split carries useful information should be tested on your own market and data.

**Scale.** The index is cumulative and depends on the start date and base value, so only its direction and its position against its average carry meaning.

## Best market states

**Trends (best fit).** It is a long-term filter, so it suits sustained trends on daily or weekly charts.

**Ranges (weak).** In a range the line wanders and crosses its average often, with no clear message.

**Reversals (mixed).** Divergence may warn of a turn, but heavy smoothing means poor timing.

**Breakouts (mixed).** Breakouts often come on rising volume, which does feed PVI, but the slow average responds late.

**Volatility.** Volatile days with rising volume move the index strongly, so it can swing sharply in turbulent markets.

## Settings

| Setting | Period | What it does |
|---|---|---|
| Medium | 50 to 100 EMA | More flips above and below, more noise |
| Default | 255 EMA (daily) | The commonly cited long-term setting, roughly one trading year |
| Longer | 300 or more | Very slow; few signals |

The 255 figure roughly corresponds to a trading year on daily bars. On intraday charts, the pattern of volume through the day makes a "rising volume" comparison far less meaningful.

## Common mistakes

- Using it on intraday charts where volume follows a daily cycle.
- Treating the "crowd versus informed" idea as proven fact.
- Comparing index values with different start dates or base values.
- Using spot forex tick volume as if it were traded volume.
- Expecting timely entries from a slow filter.
- Ignoring that the index does nothing on every day when volume does not rise.

## Pairs well with

- **[Negative Volume Index](/negative-volume-index/)**: the other half of the pair, covering quiet days.
- **[Exponential moving average](/exponential-moving-average/)**: the long EMA that the index is compared with.
- **[On-Balance Volume](/on-balance-volume/)**: a different cumulative volume view to cross-check.
- **[Volume](/volume/)**: the raw bars show which days fed the index.

## Sources

- Fosback, Norman G. (1976). *Stock Market Logic*. Institute for Econometric Research.
- Achelis, Steven B. (2000). *Technical Analysis from A to Z*, 2nd edition. McGraw-Hill. (Reference entry on the Positive Volume Index.)

## FAQ

**What does the Positive Volume Index measure?**
It tracks the cumulative percentage price change on days when volume rose compared with the previous day, and ignores other days. It is meant to show what price does when trading is busier than yesterday.

**How is PVI different from NVI?**
PVI moves only when volume rises. NVI moves only when volume falls. Used together, they split price changes into busy days and quiet days.

**Does PVI follow the crowd?**
That is the traditional idea: rising-volume days are said to reflect crowd behaviour. It is a theory from the early days of technical analysis, not a proven fact, so test it on your own data.

**What is the usual PVI trend line?**
A 255-day EMA of the index on daily charts, which is about one trading year. PVI above the line is read as a favourable backdrop, below it as unfavourable. The length is a convention.

**Can PVI be used on forex?**
It can be calculated from tick volume, but tick volume only counts price changes. It may not match traded size, so the result is less trustworthy than on stocks or futures.
