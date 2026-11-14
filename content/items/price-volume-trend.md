---
slug: price-volume-trend
name: Price Volume Trend
aka: [PVT, Volume Price Trend, VPT]
type: volume
states: [trend]
weak_states: [range]
purposes: [confirmation]
inventor: Not attributed to one person
year: Unknown
default_settings: "No period; cumulative line, often with a moving average signal line"
pairs_with: [on-balance-volume, divergence, exponential-moving-average, volume]
related: [on-balance-volume, accumulation-distribution, chaikin-money-flow, force-index, ease-of-movement, negative-volume-index]
compare: []
glossary: [divergence, smoothing, momentum, trend]
wave: 3
reviewed: 14 November 2026
---

The Price Volume Trend (PVT) is a cumulative line that adds a slice of each bar's volume, scaled by the percentage change in price. It is similar to On-Balance Volume but gives more credit to big price moves and less to tiny ones. Traders use it to confirm trends and watch for divergence.

## At a glance

| | |
|---|---|
| Type | Volume indicator (cumulative) |
| Best market states | Trend |
| Weak in | Ranges |
| Best uses | Confirmation |
| Default settings | No period; some platforms add a signal line |
| Created by | Not attributed to one person |
| Leading or lagging | Lagging; a running total of past bars |

## What is the Price Volume Trend?

[On-Balance Volume](/on-balance-volume/) adds the whole day's volume if price closed up and subtracts it if price closed down. That treats a one-cent rise and a five-per-cent rise the same. Price Volume Trend fixes this by weighting the volume by the percentage change in price. A big move on heavy volume adds a lot. A tiny move adds very little.

The result is a running total whose direction shows whether volume has been supporting up-moves or down-moves. As with all cumulative volume lines, the absolute value is arbitrary, because it depends on where the series starts. What matters is the direction, the slope and how the line compares with price.

The indicator is often listed as the Volume Price Trend (VPT) on some platforms. The two names refer to the same calculation. No single inventor is generally agreed, and sources do not give a clear first publication, so none is stated here.

## Formula

PVT = previous PVT + Volume x (Close today - Close yesterday) / Close yesterday

The series needs a start value. Most platforms start at zero or at the first bar's volume. This changes the level but not the shape.

**Worked example.** Start PVT at 0. Close yesterday is 100.
Day 1: Close 102, volume 5,000. Change = (102 - 100) / 100 = 0.02.
PVT = 0 + 5,000 x 0.02 = **+100**.
Day 2: Close 100.98, volume 8,000. Change = (100.98 - 102) / 102 = -0.01.
PVT = 100 + 8,000 x (-0.01) = 100 - 80 = **+20**.
Day 3: Close 100.98, volume 6,000. Change is 0, so PVT stays **+20**.

Compare with OBV on the same days: it would add 5,000, subtract 8,000, then add nothing, giving -3,000. The two lines tell the same broad story with different weighting.

Platform differences: starting value and optional smoothing differ. A few platforms use the previous bar's close as the divisor, which is the standard form above.

## How to read it

**Direction of the line.** A rising PVT means volume has been backing up-moves. A falling PVT means it has been backing down-moves.

**Trend confirmation.** In an uptrend, you want PVT to make higher highs along with price. If both rise together, volume agrees with the trend.

**Divergence.** Price makes a new high but PVT does not, or price makes a new low but PVT holds higher. This suggests volume is not backing the move. See [Divergence](/divergence/). It is a warning, not a timing signal.

**Signal line.** Some traders add a moving average of PVT. PVT crossing above its average is read as improving volume support; below as weakening. This produces many signals in sideways markets.

**Trendline breaks.** A trendline drawn on the PVT line itself can break before price does, though this is subjective and not reliable on its own.

**Scale.** There are no fixed levels. Only the shape and its agreement with price matter.

## Best market states

**Trends (best fit).** A rising PVT in an uptrend shows volume is on the side of the move.

**Ranges (weak).** The line drifts and crosses its average with little meaning.

**Reversals (mixed).** Divergences at major levels can warn, but they can also last a long time.

**Breakouts (mixed).** A breakout with PVT making a new high at the same time is better supported. A single huge-volume bar can still distort the line.

**Volatility.** Large percentage moves on heavy volume can dominate the cumulative total and hide earlier action.

## Settings

PVT has no period. The choices are:

| Choice | Options | What it does |
|---|---|---|
| Start value | Zero or first-bar volume | Shifts the level; the shape is unchanged |
| Signal line | None, or a moving average of 10 to 21 | Adds crossover signals; more noise with shorter periods |
| Data | Real volume or tick volume | Real volume in stocks and futures is better than tick volume in spot forex |

Because the line is cumulative, the start date of your data matters when you compare highs and lows.

## Common mistakes

- Reading the absolute value instead of the slope and its agreement with price.
- Treating a signal-line cross as a stand-alone entry.
- Using it on spot forex tick volume as if it were traded size.
- Comparing highs on charts that start at different dates.
- Assuming it always beats OBV. The two differ in weighting, not in quality.
- Letting one huge-volume bar mislead the whole line.

## Pairs well with

- **[On-Balance Volume](/on-balance-volume/)**: a similar line with different weighting; two views of the same idea.
- **[Divergence](/divergence/)**: the main way these lines are read.
- **[Exponential moving average](/exponential-moving-average/)**: sets the trend so you take only agreeing signals.
- **[Volume](/volume/)**: raw bars show which days drove the line.

## Sources

- Achelis, Steven B. (2000). *Technical Analysis from A to Z*, 2nd edition. McGraw-Hill. (Reference entry on the Price and Volume Trend.)
- Murphy, John J. (1999). *Technical Analysis of the Financial Markets*. New York Institute of Finance. (Background on volume and On-Balance Volume.)

## FAQ

**What is the Price Volume Trend?**
It is a cumulative line that adds volume scaled by the percentage price change each bar. It shows whether volume has been backing up-moves or down-moves, and gives larger moves more weight than tiny ones.

**How is PVT different from OBV?**
OBV adds or subtracts the full volume depending only on whether the close rose or fell. PVT scales the volume by the size of the percentage move, so a large price change counts for much more than a small one.

**Is PVT the same as VPT?**
Yes. Some platforms call it Volume Price Trend. The calculation is the same, so you can use them interchangeably.

**Does PVT have a default period?**
No. It is a running total with no lookback. The only settings are the starting value and whether you add a moving average signal line.

**Can PVT predict a reversal?**
It cannot predict one. Divergence between PVT and price can warn that volume is not backing a move, but such divergences can last a long time. Wait for a price signal at a level before acting.
