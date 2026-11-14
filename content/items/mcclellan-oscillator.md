---
slug: mcclellan-oscillator
name: McClellan Oscillator
aka: [McClellan breadth oscillator]
type: breadth-sentiment
states: [reversal]
weak_states: [range]
purposes: [confirmation]
inventor: Sherman and Marian McClellan
year: 1960s
default_settings: "19-day and 39-day exponential averages of net advances (smoothing constants 0.10 and 0.05)"
pairs_with: [advance-decline-line, mcclellan-summation-index, trin, new-highs-new-lows]
related: [mcclellan-summation-index, advance-decline-line, trin, new-highs-new-lows, zweig-breadth-thrust, hindenburg-omen]
compare: []
glossary: [oscillator, divergence, smoothing, momentum]
wave: 3
reviewed: 14 November 2026
---

The McClellan Oscillator is a breadth indicator that measures the speed of change in how many stocks are rising or falling. It subtracts a slow average of net advancing issues from a fast one, and swings around zero. Traders use it to confirm turns in an index and to spot momentum building or fading under the surface.

## At a glance

| | |
|---|---|
| Type | Breadth momentum oscillator |
| Best market states | Reversals |
| Weak in | Quiet ranges and thin markets |
| Best uses | Confirmation of turns and breadth momentum |
| Default settings | 19-day and 39-day exponential averages of net advances |
| Created by | Sherman and Marian McClellan, 1960s |
| Leading or lagging | Mixed; swings in breadth momentum can show up before price turns |

## What is the McClellan Oscillator?

Each day on an exchange such as the NYSE, some stocks advance and some decline. The difference is called net advances (advancing issues minus declining issues). The McClellan Oscillator smooths this daily figure two ways and takes the gap between the smoothed lines. In effect, it is a MACD-style indicator applied to breadth.

When the gap is positive, breadth has been improving at a faster rate than its longer trend. When negative, breadth has been weakening. The reading shows momentum in breadth, not the level of breadth itself.

The oscillator is credited to Sherman and Marian McClellan, who developed it in the 1960s. It is closely tied to the [McClellan Summation Index](/mcclellan-summation-index/), which is the running total of its values.

## Formula

1. Net advances = advancing issues minus declining issues, each day.
2. 19-day exponential average of net advances (smoothing constant 0.10, a roughly 19-day exponential average).
3. 39-day exponential average of net advances (smoothing constant 0.05, a roughly 39-day exponential average).
4. McClellan Oscillator = 19-day average minus 39-day average.

**Worked example.** Suppose today's 19-day average of net advances is 120 and the 39-day average is 90.
Oscillator = 120 - 90 = **30**

A reading above zero means the fast average is above the slow one. A reading below zero means the opposite.

**Ratio-adjusted version.** Many platforms first divide net advances by total issues traded (advances plus declines), often multiplied by 1,000, so the readings stay comparable as the number of listed stocks changes. Ratio-adjusted values are on a different scale from the raw version. Check which version your platform plots before using fixed levels.

## How to read it

**Zero line.** Above zero shows rising breadth momentum; below zero shows falling momentum. A cross of zero is a basic confirmation signal.

**Extremes.** Large positive or negative readings mean breadth momentum is stretched. Many traders watch for turns from these extremes. The values that count as extreme depend on the version and on the market.

**Divergence.** If an index makes a new high but the oscillator makes a lower high, fewer stocks are driving the rise. This is a warning of fading breadth, not a timing signal.

**Breadth thrust.** A sudden jump from a low reading to a high one can indicate a burst of broad buying. Some traders watch for this at market lows.

## Best market states

**Reversals (best).** Divergences and extreme readings are most useful near turning points, alongside price signals.

**Trends (useful).** Staying above zero in a rising market supports the trend; repeated failures to rise above zero in a bounce can warn of weakness.

**Ranges (weak).** In quiet, sideways markets the oscillator crosses zero often and gives many small signals.

**Volatility.** Sharp, wide-ranging days can push the oscillator to extremes quickly, so wait for price to confirm.

## Settings

| Setting | Choice | Effect |
|---|---|---|
| Default | 19 and 39 days (0.10 and 0.05) | The original form |
| Faster | Shorter averages | More signals and more noise |
| Slower | Longer averages | Fewer signals, later turns |
| Version | Raw or ratio-adjusted | Changes the scale of readings and levels |

Most platforms offer the default. If you change it, keep the same settings across your tests.

## Common mistakes

- Using fixed levels without checking whether the platform plots the raw or ratio-adjusted version.
- Treating a zero-line cross as a trade signal on its own.
- Assuming a divergence will turn price soon. Divergences can last a long time.
- Using it on an index with too few stocks, where breadth data is unreliable.
- Confusing the oscillator with the summation index, which is the running total of its values.

## Pairs well with

- **[Advance-decline line](/advance-decline-line/)**: the cumulative breadth line, from which the oscillator takes its input.
- **[McClellan Summation Index](/mcclellan-summation-index/)**: a slower view built by adding up the oscillator.
- **[TRIN (Arms Index)](/trin/)**: adds volume to breadth for another view of buying and selling pressure.
- **[New Highs - New Lows](/new-highs-new-lows/)**: another check on whether participation supports a trend.

## Sources

- Murphy, John J. (1999). *Technical Analysis of the Financial Markets*. New York Institute of Finance. (Covers breadth indicators including the McClellan Oscillator and Summation Index.)

## FAQ

**What is the McClellan Oscillator?**
It is a breadth indicator that subtracts a 39-day exponential average of net advancing stocks from a 19-day one. It shows whether breadth momentum is rising or falling and is used to confirm index moves.

**What do McClellan Oscillator levels mean?**
Above zero means breadth momentum is positive; below zero means negative. Large readings in either direction mean momentum is stretched. What counts as large depends on the version and the market, so check your own platform.

**What is the difference between raw and ratio-adjusted versions?**
The raw version uses net advances as they are. The ratio-adjusted version divides by the number of issues traded so values remain comparable over time. Their scales differ, so levels from one do not apply to the other.

**What is the difference between the oscillator and the Summation Index?**
The oscillator measures the short to medium-term momentum of breadth. The Summation Index adds the oscillator's values cumulatively, giving a slower view of the broader trend in breadth.

**Does it work on indices other than the NYSE?**
It can be applied wherever advance and decline data exist, such as other exchanges or index components. Reliability depends on having enough stocks to make the data meaningful.
