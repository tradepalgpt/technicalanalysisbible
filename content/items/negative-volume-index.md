---
slug: negative-volume-index
name: Negative Volume Index
aka: [NVI]
type: volume
states: [trend]
weak_states: [range]
purposes: [filter]
inventor: Paul L. Dysart Jr. (popularised by Norman Fosback)
year: 1930s
default_settings: "Start at 1,000; 255-day EMA as the trend line on daily charts"
pairs_with: [positive-volume-index, exponential-moving-average, on-balance-volume, volume]
related: [positive-volume-index, price-volume-trend, accumulation-distribution, on-balance-volume, ease-of-movement, force-index]
compare: []
glossary: [smoothing, lookback-period, trend, divergence]
wave: 3
reviewed: 14 November 2026
---

The Negative Volume Index (NVI) is a cumulative line that changes only on days when volume is lower than the day before. The idea is that quieter days reflect the actions of better-informed traders, so price moves on those days are worth tracking. Traders compare the line with a long moving average as a slow trend filter.

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

## What is the Negative Volume Index?

The index looks only at days when volume falls compared with the previous day. On those days it records the percentage change in price. On days when volume rises or stays the same, it does nothing.

The reasoning behind it is a market-folklore idea: that busy, high-volume days are driven by the crowd, while quiet days are when well-informed participants quietly accumulate or distribute. If that were true, price moves on falling volume would carry more information. This is a theory from the early days of technical analysis. It should be treated as an idea to test, not a settled fact, and this page does not give any performance figures for it.

The index is usually credited to Paul L. Dysart Jr. in the 1930s, and it was later popularised by Norman Fosback, who paired it with a long moving average. Sources give slightly different accounts of who did what, so the attribution above is stated in general terms. The sister indicator, the [Positive Volume Index](/positive-volume-index/), does the opposite: it moves only on days when volume rises.

## Formula

1. Start the index at a base value, usually 1,000.
2. For each new bar: if today's volume is lower than yesterday's,
   NVI = previous NVI + previous NVI x (Close today - Close yesterday) / Close yesterday
3. If today's volume is higher than or equal to yesterday's, NVI = previous NVI (no change).
4. Optionally, plot a long EMA of NVI (255 periods on daily bars is the common choice).

**Worked example.** NVI starts at 1,000. Close yesterday is 50.
Day 1: Close 51, volume lower than yesterday. Change = (51 - 50) / 50 = 2%. NVI = 1,000 + 1,000 x 0.02 = **1,020**.
Day 2: Close 53, volume higher than Day 1. NVI stays **1,020**, even though price rose.
Day 3: Close 52.47, volume lower than Day 2. Change = (52.47 - 53) / 53 = -1%. NVI = 1,020 - 10.2 = **1,009.8**.

Platform differences: the base value, the starting date and the smoothing line vary. The base value changes only the scale, not the shape.

## How to read it

**Against its long average.** The common reading is NVI above its 255-day EMA as a sign of a favourable long-term backdrop, and below as an unfavourable one. This is a slow filter that flips rarely.

**Direction of the line.** A rising NVI means price has been rising on low-volume days. A falling NVI means price has been falling on low-volume days.

**Divergence with price.** Price makes a new high while NVI does not. This suggests the advance has not been supported by quiet-day gains. See [Divergence](/divergence/). Like all divergences, it is a warning only.

**Paired with PVI.** Many traders view NVI and PVI together, reading NVI as the "informed" line and PVI as the "crowd" line. Whether that split is useful is a matter of testing, not something proven by the formula.

**Scale.** The index is cumulative and depends on the start date and base value, so only its direction and its position against its average carry meaning.

## Best market states

**Trends (best fit).** It is a slow, long-term filter, so it suits long trends on daily or weekly charts.

**Ranges (weak).** In a range the line wanders and crosses its average often, with little information.

**Reversals (mixed).** Divergence with price may warn of a turn, but timing is poor because of the heavy smoothing.

**Breakouts (poor fit).** Breakouts usually happen on high volume, which this index ignores.

**Volatility.** Volatile days are often high-volume days, so they do not move this index. Quiet periods dominate it.

## Settings

| Setting | Period | What it does |
|---|---|---|
| Medium | 50 to 100 EMA | More flips between above and below, more noise |
| Default | 255 EMA (daily) | The commonly cited long-term setting, roughly one trading year |
| Longer | 300 or more | Very slow; few signals |

The 255-day figure roughly corresponds to a trading year. On intraday charts or in markets that trade around the clock, it needs rethinking. Volume must also be consistent, which makes it unreliable on spot forex tick volume.

## Common mistakes

- Using it on short time frames, where it was never meant to work.
- Treating the "informed trader" idea as proven fact.
- Comparing index values from different start dates.
- Using tick volume in spot forex as though it were traded volume.
- Expecting timely entry signals from a deliberately slow filter.
- Ignoring that it freezes on every rising-volume day, which can be most days in some markets.

## Pairs well with

- **[Positive Volume Index](/positive-volume-index/)**: the other half of the pair, covering high-volume days.
- **[Exponential moving average](/exponential-moving-average/)**: the long EMA that the index is compared with.
- **[On-Balance Volume](/on-balance-volume/)**: a different cumulative volume view; agreement strengthens a reading.
- **[Volume](/volume/)**: the raw volume bars give context for which days the index moved.

## Sources

- Fosback, Norman G. (1976). *Stock Market Logic*. Institute for Econometric Research.
- Achelis, Steven B. (2000). *Technical Analysis from A to Z*, 2nd edition. McGraw-Hill. (Reference entry on the Negative Volume Index.)

## FAQ

**What does the Negative Volume Index measure?**
It tracks the cumulative percentage price change on days when volume fell compared with the previous day, and ignores other days. It is meant to show what price does on quiet days.

**Why does the index only move on low-volume days?**
The idea is that quiet days reflect informed traders, while busy days reflect the crowd. That is a long-standing theory in technical analysis, not a proven fact, so test it before relying on it.

**What is the 255-day EMA used for?**
It is the usual trend line for the index on daily charts. NVI above it is read as a favourable backdrop, and below it as an unfavourable one. The length is roughly one trading year.

**How is NVI different from PVI?**
NVI changes only when volume falls from the previous day. PVI changes only when volume rises. Together they split the price record into quiet days and busy days.

**Can I use NVI on intraday charts?**
It was designed for daily data and a long smoothing period. On intraday charts the volume pattern changes through the day, so a filter built this way is much less meaningful.
