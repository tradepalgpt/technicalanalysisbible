---
slug: elder-ray-index
name: Elder-Ray Index (Bull/Bear Power)
aka: [Elder-Ray, Bull Power and Bear Power]
type: momentum-oscillator
states: [trend]
weak_states: [range]
purposes: [entry, confirmation]
inventor: Alexander Elder
year: 1993
default_settings: "13-period EMA; Bull Power and Bear Power plotted as two histograms"
pairs_with: [exponential-moving-average, macd-histogram, support-and-resistance, adx]
related: [force-index, awesome-oscillator, balance-of-power, momentum-indicator]
compare: []
glossary: [oscillator, momentum, divergence, lookback-period]
wave: 3
reviewed: 14 November 2026
---

The Elder-Ray Index splits each bar's power into two parts: how far the high reaches above a 13-period exponential moving average (Bull Power) and how far the low falls below it (Bear Power). Traders use it inside a trend to time pullback entries and to check whether buyers or sellers are gaining or losing ground.

## At a glance

| | |
|---|---|
| Type | Momentum oscillator |
| Best market states | Trend |
| Weak in | Ranges |
| Best uses | Entry timing, confirmation |
| Default settings | 13-period EMA |
| Created by | Alexander Elder, 1993 |
| Leading or lagging | Mostly lagging; divergences can warn early |

## What is the Elder-Ray Index?

Dr Alexander Elder described the tool in his book *Trading for a Living* (1993). He uses a 13-period exponential moving average (EMA) as a measure of the market's consensus of value. The highest price of a bar shows how far buyers (bulls) could push above that consensus. The lowest price shows how far sellers (bears) could drag price below it.

Bull Power is the high minus the EMA. Bear Power is the low minus the EMA. Plotted as histograms around a zero line, they show the balance of power bar by bar. The name comes from the idea of an X-ray of the market's inner strength.

Elder does not present it as a stand-alone system. He pairs it with a trend filter, typically the direction of the EMA itself.

## Formula

1. Calculate a 13-period EMA of the close.
2. Bull Power = High - EMA
3. Bear Power = Low - EMA

**Worked example.** The 13-period EMA is 100. The bar has a high of 103 and a low of 98.
Bull Power = 103 - 100 = **+3**
Bear Power = 98 - 100 = **-2**

Bull Power is normally positive in an uptrend and Bear Power negative, so the useful signals are in the changes rather than the sign. Some platforms plot only one of the two, or let you change the EMA length.

## How to read it

The common reading follows Elder's trend-plus-pullback logic, described here as a general method rather than a rule.

**Uptrend, looking for entries.** When the EMA is rising, Bear Power is usually below zero. A dip in Bear Power that then turns up, while still negative, is read as sellers failing to push far below the average. Traders may treat that as a pullback entry in the trend.

**Downtrend, looking for entries.** When the EMA is falling, Bull Power is usually above zero. A rise in Bull Power that then turns down, while still positive, is read as buyers failing to lift price far above the average.

**Divergence.** Price makes a new high but Bull Power makes a lower high. This suggests the buyers' push is weakening. The mirror case applies to Bear Power and new lows. Divergence is a warning, not a timing signal.

**Zero line.** Bull Power below zero means even the bar's high is under the EMA. Bear Power above zero means even the low is above it. Both are signs of strong one-sided control.

## Best market states

**Trends (best).** The tool is built around a trend. The EMA slope tells you the direction, and the histograms help time entries on pullbacks.

**Ranges (weak).** In a sideways market the EMA is flat and price crosses it often. Both histograms flip sign constantly and give little direction.

**Reversals and breakouts.** Divergences near a major level can hint at a turn, but this is not what the tool was designed for. In a breakout, one histogram usually expands sharply, which confirms strength rather than predicting it.

**Volatility.** The raw values are in price units, so they grow in volatile markets. Comparing readings across different periods of volatility is hard without scaling.

## Settings

| Setting | EMA length | What it does |
|---|---|---|
| Short | 8 to 10 | Faster, more signals, more noise |
| Default | 13 | Elder's standard |
| Long | 21 to 26 | Smoother, slower, better on higher time frames |

Elder also suggests using a longer-term chart (a weekly view when trading daily, for example) to set the trend direction, then using the daily Elder-Ray for timing. The 13 length is a convention rather than a proven optimum.

## Common mistakes

- Using it in a sideways market where the EMA is flat.
- Buying every dip in Bear Power without checking that the EMA is rising.
- Comparing raw values across markets with very different price levels.
- Reading a single bar instead of the direction of a few bars.
- Ignoring support, resistance and the larger trend.
- Treating divergence as an exact timing signal.

## Pairs well with

- **[Exponential moving average](/exponential-moving-average/)**: the 13 EMA is the base of the tool, and a longer EMA can set the larger trend.
- **[MACD histogram](/macd-histogram/)**: Elder commonly pairs it with trend and momentum tools; agreement strengthens the view.
- **[Support and resistance](/support-and-resistance/)**: a pullback signal at a known level is more meaningful than one in open space.
- **[ADX](/adx/)**: confirms that a trend exists before you rely on pullback signals.

## Sources

- Elder, Alexander (1993). *Trading for a Living*. John Wiley & Sons.

## FAQ

**What do Bull Power and Bear Power mean?**
Bull Power is the bar's high minus the EMA, showing how far buyers pushed above average value. Bear Power is the low minus the EMA, showing how far sellers pushed below it. Together they show who held more power in that bar.

**What is the default Elder-Ray setting?**
A 13-period exponential moving average. Elder uses that length in his writing, and most platforms default to it. You can change it, but 13 is the convention.

**Can I use Elder-Ray alone?**
It is not meant to be used alone. Elder pairs it with a trend direction, usually the EMA slope. Without that context the histograms give mixed messages, especially in ranges.

**How is it different from MACD?**
MACD compares two moving averages of the close. Elder-Ray compares the high and the low with one average, so it shows how far each side pushed in a bar. They answer different questions and can be used together.

**Does it work on all time frames?**
It can be plotted on any, since it needs only highs, lows and closes. Elder suggests checking a higher time frame first for trend direction. Results depend on the market and how often it trends.
