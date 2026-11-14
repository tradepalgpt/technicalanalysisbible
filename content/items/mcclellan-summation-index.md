---
slug: mcclellan-summation-index
name: McClellan Summation Index
aka: [Summation Index, MSI]
type: breadth-sentiment
states: [trend]
weak_states: [range]
purposes: [filter]
inventor: Sherman and Marian McClellan
year: 1960s
default_settings: "Running total of the McClellan Oscillator"
pairs_with: [mcclellan-oscillator, advance-decline-line, new-highs-new-lows, moving-average-crossover]
related: [mcclellan-oscillator, advance-decline-line, trin, new-highs-new-lows, percent-above-moving-average]
compare: []
glossary: [trend, oscillator, smoothing]
wave: 3
reviewed: 14 November 2026
---

The McClellan Summation Index is a breadth indicator built by adding up the daily values of the McClellan Oscillator. It gives a slower, smoother view of whether participation in a market is improving or weakening. Traders use it as a trend filter for the broader market and to spot divergences against an index.

## At a glance

| | |
|---|---|
| Type | Breadth trend indicator |
| Best market states | Trend |
| Weak in | Sideways markets; slow to turn |
| Best uses | Filter for the market's underlying direction |
| Default settings | Cumulative total of the McClellan Oscillator |
| Created by | Sherman and Marian McClellan, 1960s |
| Leading or lagging | Mostly lagging, though its slopes and divergences can warn of change |

## What is the McClellan Summation Index?

The [McClellan Oscillator](/mcclellan-oscillator/) tells you whether breadth momentum is positive or negative. The Summation Index keeps a running total of those readings. When the oscillator stays positive, the index climbs. When it stays negative, the index falls.

Because it accumulates, the Summation Index changes slowly. It works like a longer-term view of the same breadth data, in the way that the [advance-decline line](/advance-decline-line/) accumulates daily net advances. The difference is that the Summation Index accumulates a smoothed momentum reading, not the raw daily count.

It was developed by Sherman and Marian McClellan in the 1960s, alongside the oscillator.

## Formula

Summation Index (today) = Summation Index (yesterday) + McClellan Oscillator (today)

The starting value differs between platforms. Some start at zero. Others start at a base such as 1,000 and use the ratio-adjusted oscillator. This changes the level but not the shape of the line.

**Worked example.** Yesterday the index was 200 and today's McClellan Oscillator is +30.
Summation Index = 200 + 30 = **230**

If the next day's oscillator is -20, the index falls to 230 - 20 = **210**.

A common variant is built from a ratio-adjusted oscillator, which is scaled to the number of issues, so the numbers differ from the raw version. Check what your platform plots.

## How to read it

**Direction.** A rising Summation Index means breadth momentum has stayed positive. A falling one means it has stayed negative.

**Zero or base line.** Some traders watch for the index to cross above or below its starting line (zero in some versions). Crossing up is read as improving breadth.

**Extremes.** Very high or very low readings mark stretched breadth. The values that count as extreme depend on the version used.

**Turns.** Traders watch for the index to change direction after an extreme, and to cross a moving average of itself.

**Divergence.** If the stock index makes a new high but the Summation Index does not, fewer stocks are taking part in the rally. It is a warning, not a signal to act on its own.

## Best market states

**Trends (best).** The index shows whether the broad market's rise or fall has wide support.

**Reversals (useful).** Turns from extremes and divergences can mark change, but the index is slow, so signals often come after price has moved.

**Ranges (weak).** In sideways markets, the index drifts and gives little direction.

**Volatility.** Sharp swings in the oscillator feed straight into the total, so the line can lurch during stress.

## Settings

| Setting | Choice | Effect |
|---|---|---|
| Version | Raw or ratio-adjusted oscillator | Changes the scale |
| Starting value | Zero or a base such as 1,000 | Changes the level only |
| Smoothing | Optional moving average of the index | Helps spot turns, adds lag |

There is no tunable period in the index itself. The settings come from the McClellan Oscillator underneath.

## Common mistakes

- Comparing levels from platforms that start at different values or use different versions.
- Treating the index as fast. It lags, and turns often appear after price moves.
- Expecting precise timing from a divergence.
- Forgetting that the index depends on the number of listed issues. Ratio-adjusted versions are more comparable over long periods.
- Using it on a short window, where the starting value dominates.

## Pairs well with

- **[McClellan Oscillator](/mcclellan-oscillator/)**: the short-term input; see how fast breadth is changing.
- **[Advance-decline line](/advance-decline-line/)**: another cumulative breadth line to compare against.
- **[New Highs - New Lows](/new-highs-new-lows/)**: an independent check on participation.
- **[Moving average crossover](/moving-average-crossover/)**: a simple way to define turns in the index.

## Sources

- Murphy, John J. (1999). *Technical Analysis of the Financial Markets*. New York Institute of Finance. (Covers breadth indicators including the McClellan Oscillator and Summation Index.)

## FAQ

**What is the McClellan Summation Index?**
It is the running total of the McClellan Oscillator. When breadth momentum stays positive, the index rises; when it stays negative, it falls. It gives a slower, smoother view of breadth trends than the oscillator.

**How is the Summation Index calculated?**
Add today's McClellan Oscillator value to yesterday's Summation Index. The starting point varies by platform: some begin at zero, others at a base such as 1,000, and some use a ratio-adjusted oscillator.

**Is the Summation Index a leading indicator?**
Mostly it lags, because it is a running total. Divergences against a stock index can give an early warning that participation is narrowing, but timing is loose.

**What is the difference between the Summation Index and the advance-decline line?**
The advance-decline line adds up raw daily net advances. The Summation Index adds up the McClellan Oscillator, which is a smoothed difference between two averages of net advances. The result is a smoother line that reacts differently to short bursts.

**What levels matter on the Summation Index?**
That depends on the version and starting value. Many traders watch the zero or base line, extremes relative to the index's own history, and changes of direction. Avoid copying levels from a different version.
