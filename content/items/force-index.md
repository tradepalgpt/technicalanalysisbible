---
slug: force-index
name: Force Index
aka: [Elder Force Index, FI]
type: volume
states: [trend, reversal]
weak_states: [range]
purposes: [confirmation]
inventor: Alexander Elder
year: 1993
default_settings: "13-period EMA of force (2-period for short-term)"
pairs_with: [exponential-moving-average, divergence, volume, support-and-resistance]
related: [elders-force-index, on-balance-volume, accumulation-distribution, money-flow-index, ease-of-movement, price-volume-trend]
compare: []
glossary: [momentum, oscillator, divergence]
wave: 2
reviewed: 14 November 2026
---

The Force Index is a volume-based oscillator that multiplies the change in price by the volume of the bar. A large positive reading means price rose on heavy volume; a large negative reading means it fell on heavy volume. Traders smooth it with a moving average and use it to confirm trends and spot divergences.

## At a glance

| | |
|---|---|
| Type | Volume oscillator |
| Best market states | Trend, reversal |
| Weak in | Ranges |
| Best uses | Confirmation |
| Default settings | 13-period EMA (2-period for short-term timing) |
| Created by | Alexander Elder, 1993 |
| Leading or lagging | Mostly lagging; the raw 1-period value is immediate |

## What is the Force Index?

Elder's idea is that the power behind a move depends on three things: how far price moved, in which direction, and how much volume backed it. A big move on small volume is weak. A small move on huge volume is also notable. Multiplying the price change by volume puts all three in one number.

Elder introduced it in his book *Trading for a Living* (1993). The raw one-bar version is jumpy, so he smoothed it with an exponential moving average. A short version (2 periods) is used for timing entries within a trend; a longer version (13 periods) is used to judge the broader balance of buyers and sellers.

A related page, [Elder's Force Index](/elders-force-index/), covers the entry-focused use. This page covers the indicator itself.

## Formula

1. Raw Force Index = (Close today - Close yesterday) x Volume today
2. Force Index(n) = n-period EMA of the raw Force Index

**Worked example.** Yesterday's close was 50, today's is 52, volume is 1,000.
Raw Force Index = (52 - 50) x 1,000 = **+2,000**
If tomorrow closes at 51 on volume of 600, raw force = (51 - 52) x 600 = -600.

The smoothing then uses the standard EMA formula, with multiplier 2 / (n + 1). For n = 13 that is 2 / 14 = about 0.143.

Platform differences: most use an EMA. Some offer a simple moving average. Volume is real volume in stocks and futures but tick volume in spot forex.

## How to read it

**Zero line.** Positive force suggests buyers control; negative suggests sellers. The 13-period version crossing zero is a slow trend-direction check.

**Short-term timing in a trend.** A common use is to look for 2-period force dipping below zero during an uptrend (a pullback) and treat the turn back up as a possible entry in the trend direction. The opposite applies in a downtrend.

**Divergence.** Price makes a new high while 13-period force makes a lower high, or price makes a new low while force holds higher. It suggests the move is losing power. It is a warning, not a timing signal. See [Divergence](/divergence/).

**Spikes.** A very large force reading often comes on a climactic bar. Some traders see it as exhaustion, others as continuation, so context matters.

**Scale.** Force Index values depend on the price and volume of the instrument, so there are no fixed overbought and oversold levels. Compare with the indicator's own recent history.

## Best market states

**Trends (good).** Pullbacks to zero in the 2-period version fit a trend-following approach.

**Reversals (good, with care).** Divergences near key levels are the most watched signal.

**Ranges (weak).** The line crosses zero often with little meaning.

**Breakouts (mixed).** A large spike on a breakout bar suggests participation, but spikes also appear on exhaustion.

**Volatility.** Large volatile bars create large spikes, which can swamp smaller signals.

## Settings

| Setting | Period | What it does |
|---|---|---|
| Short | 2 | Very quick; used for timing pullbacks within a trend |
| Default | 13 | Elder's usual medium-term setting; judges buyer-seller balance |
| Long | 21 to 50 | Smoother, slower, fewer zero crosses |

Shorter periods give more signals and more noise. Because values scale with volume, there are no universal threshold levels. Test any setting on the market and time frame you trade.

## Common mistakes

- Using fixed overbought and oversold levels. The scale depends on the instrument.
- Using the raw 1-period value as a signal. It is very noisy.
- Trusting it on markets with poor volume data.
- Treating spikes as automatic reversal or continuation signals.
- Trading zero crosses in a sideways market.
- Using the 2-period version against the trend.

## Pairs well with

- **[Exponential moving average](/exponential-moving-average/)**: sets the trend direction so short-term force dips are read in context.
- **[Divergence](/divergence/)**: the most common way to read the 13-period line.
- **[Volume](/volume/)**: raw volume shows whether a spike is unusual.
- **[Support and resistance](/support-and-resistance/)**: force signals mean more at known levels.

## Sources

- Elder, Alexander (1993). *Trading for a Living*. John Wiley & Sons.
- Colby, Robert W. (2003). *The Encyclopedia of Technical Market Indicators*, 2nd edition. McGraw-Hill.
- Murphy, John J. (1999). *Technical Analysis of the Financial Markets*. New York Institute of Finance.

## FAQ

**What does the Force Index measure?**
It measures the power behind a price move by multiplying the change in close by the bar's volume. Big moves on big volume give big readings. The sign shows direction: positive means price rose, negative means it fell.

**What is the best Force Index setting?**
Elder used 2 periods for short-term timing and 13 for the broader balance of buyers and sellers. Those are the usual defaults. Other values work too, but test them on your own market and time frame.

**Is Force Index leading or lagging?**
It is built from past price and volume, so it lags, more so with longer smoothing. Divergences can suggest weakening earlier than price shows, but they are not timing signals.

**Can I use the Force Index on forex?**
It runs, but spot forex volume is usually tick volume, which counts price updates rather than amount traded. That makes the readings a rougher guide than on stocks or futures.

**How is the Force Index different from OBV?**
OBV adds or subtracts whole-bar volume depending on direction. The Force Index multiplies volume by the size of the price change, so a large move counts more than a tiny one. It is smoothed, while OBV is a running total.
