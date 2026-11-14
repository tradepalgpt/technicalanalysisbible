---
slug: relative-volume
name: Relative Volume (RVOL)
aka: [RVOL, relative volume ratio]
type: volume
states: [breakout]
weak_states: [range]
purposes: [filter, confirmation]
inventor: Not attributed to one person
year: Unknown
default_settings: "Current volume divided by the average of the last 20 to 50 bars (or the same time of day over recent days)"
pairs_with: [volume, breakout-trading, opening-range-breakout, support-and-resistance]
related: [volume, vwma, on-balance-volume, volume-oscillator, volume-climax, vwap]
compare: []
glossary: [breakout, liquidity, lookback-period]
wave: 2
reviewed: 14 November 2026
---

Relative Volume (RVOL) compares the volume traded now with what is normal for that market. A reading of 1.0 means average activity, 2.0 means twice the average, 0.5 means half. Traders use it as a filter to find markets that are unusually busy and to confirm that a breakout has real participation behind it.

## At a glance

| | |
|---|---|
| Type | Volume indicator |
| Best market states | Breakout |
| Weak in | Quiet ranges |
| Best uses | Filter, confirmation |
| Default settings | Current volume / average volume over 20 to 50 bars |
| Created by | Not attributed to one person (year unknown) |
| Leading or lagging | Coincident: it describes activity that is happening now |

## What is Relative Volume?

Raw volume is hard to judge on its own. Is 800,000 shares a lot? It depends on the stock. For one share price it is a quiet day, for another it is a rush. Relative volume solves this by turning volume into a ratio against the usual level.

The idea is old and has no single inventor. Traders have always compared today's volume with recent volume. The name "RVOL" is common in stock scanners, where traders sort the market by how unusual the volume is.

There are two common versions. The first compares the current bar with the average of the last N bars. The second, often used for day trading, compares volume so far today with the average volume at the same time of day over the past several days. The second version is fairer, because volume is naturally heavy at the open and close and light at lunchtime.

## Formula

**Simple version (bar by bar):**

RVOL = current bar volume / average volume of the last N bars

**Time-of-day version:**

RVOL = volume so far today / average volume traded by the same time on the previous N days

**Worked example.** The average volume over the last 20 bars is 10,000. The current bar shows 25,000.
RVOL = 25,000 / 10,000 = **2.5**

The market is trading 2.5 times its normal activity. If the average were 50,000 instead, the same 25,000 bars would give 0.5, a quiet reading.

Platforms differ. Some use a simple average, some an exponential one, and some exclude the current bar from the average. Scanner sites also define "normal" differently (10 days, 30 days, 50 days). Check the definition before comparing numbers between tools.

## How to read it

**Around 1.0.** Normal activity. Nothing unusual is going on.

**Above 1.5 to 2.** Unusually active. Something is drawing attention: news, an earnings release, a key level being tested. Many scanners flag 2 or more as "in play". These are common rules of thumb, not fixed standards.

**Above 3 and higher.** A very heavy session. This often goes with news, gaps or a climax. Heavy volume can mean strong conviction, or the end of a move (see [Volume Climax](/volume-climax/)). The ratio does not say which.

**Below 0.5.** Thin activity. Moves on thin volume are easier to reverse and often lack follow-through.

**Breakout confirmation.** A close beyond a range or a key level on high relative volume suggests many participants took part. A breakout on low relative volume is more likely to fail, though this is a tendency and not a rule.

**Direction.** RVOL says nothing about direction. A 3.0 reading can come with a big rally or a big fall. Always read it together with price.

## Best market states

**Breakouts (best).** This is where relative volume earns its place. Compare the volume on the breakout bar with the average: strong participation adds weight to the move.

**Trends (useful).** Healthy trends often show rising activity in the direction of the move and quieter pullbacks. RVOL can help see that pattern.

**Reversals (mixed).** Very high readings at the end of a long move can mark exhaustion, but they can also mark the start of a strong new leg. Context decides.

**Ranges (weak).** Volume in a range is usually quiet and random. Spikes are often noise.

**Markets without true volume.** In spot forex there is no central volume figure, so RVOL is built from [tick volume](/tick-volume/), which is only an approximation.

## Settings

| Setting | Lookback | What it does |
|---|---|---|
| Short | 10 bars | Reacts fast to changes in activity; the average itself is noisy |
| Default | 20 to 50 bars | A stable idea of "normal" for most markets |
| Long | 100 bars or more | Compares against the long-run norm; slow to adapt after a change |
| Time-of-day | 5 to 20 days | Best for intraday; removes the open and close effect |

A longer average gives a steadier baseline. A shorter one adapts faster but can be dragged up by a single spike.

## Common mistakes

- Treating high RVOL as bullish. It only shows interest, not direction.
- Comparing a morning bar with an all-day average, which makes the open always look busy. Use the time-of-day version for intraday work.
- Ignoring scheduled events such as earnings, index rebalancing or option expiry, which inflate volume without a trading reason.
- Using a fixed threshold (such as 2.0) on every market. Typical spikes differ by market and instrument.
- Using RVOL on thinly traded markets, where one large order can distort the ratio.
- Using spot forex tick counts as if they were true traded volume.

## Pairs well with

- **[Volume](/volume/)**: the raw bars that RVOL is built from; check both.
- **[Breakout trading](/breakout-trading/)**: RVOL gives a measurable test for whether a breakout has participation.
- **[Opening range breakout](/opening-range-breakout/)**: time-of-day RVOL suits the first hour of trading.
- **[Support and resistance](/support-and-resistance/)**: high activity at a known level is more meaningful than in empty space.

## Sources

- Murphy, John J. (1999). *Technical Analysis of the Financial Markets*. New York Institute of Finance. (General treatment of volume and its role in confirming price moves.)

## FAQ

**What is a good relative volume?**
There is no official number. Many stock scanners use 1.5 to 2 or above as a sign of unusual interest, but the right threshold depends on the market and the time frame. Test your own cut-off on the instruments you actually trade.

**Is relative volume the same as volume?**
No. Volume is the raw count of shares or contracts traded. Relative volume divides that count by a normal level, so you can tell whether it is high or low for that market. It makes different instruments comparable.

**Does high relative volume mean a breakout will succeed?**
No. It raises the chance that many participants are involved, but breakouts with heavy volume still fail. Treat it as one piece of evidence beside price structure, the bigger trend and your stop placement.

**How do I calculate RVOL for the same time of day?**
Take the volume traded from the open until now. Average the volume traded over the same window on the past 10 or 20 days. Divide today's figure by that average. Many charting tools and scanners do this for you.

**Does RVOL work in forex?**
Only loosely. Spot forex has no single central volume feed, so charts use tick counts as a stand-in. RVOL built from [tick volume](/tick-volume/) can still show relative activity, but it is less exact than on exchange-traded markets.
