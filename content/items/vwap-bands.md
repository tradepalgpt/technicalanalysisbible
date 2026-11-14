---
slug: vwap-bands
name: VWAP Bands
aka: [VWAP standard deviation bands, VWAP deviation bands]
type: volume
states: [range, volatility]
weak_states: [trend]
purposes: [entry, exit]
inventor: Not attributed to one person
year: Unknown
default_settings: "VWAP with bands at 1, 2 and 3 standard deviations; resets each session"
pairs_with: [vwap, support-and-resistance, volume-profile, atr]
related: [vwap, anchored-vwap, bollinger-bands, standard-deviation, value-area, point-of-control]
compare: [vwap-vs-moving-average, vwap-vs-anchored-vwap]
glossary: [standard-deviation, mean, volatility]
wave: 2
reviewed: 14 November 2026
---

VWAP Bands draw lines above and below the volume-weighted average price (VWAP), usually at one, two and three standard deviations. They show how far price has stretched from the session's average traded price. Traders use them to find stretched moves in ranges and to set exits and targets around VWAP.

## At a glance

| | |
|---|---|
| Type | Volume-based channel |
| Best market states | Range, volatility |
| Weak in | Strong one-way trends |
| Best uses | Entry, exit |
| Default settings | VWAP with bands at 1, 2 and 3 standard deviations, reset each session |
| Created by | Not attributed to one person (year unknown) |
| Leading or lagging | Lagging: built from past prices and volume |

## What are VWAP Bands?

VWAP is the average price of a session weighted by volume. See [VWAP](/vwap/). It tells you where most of the money has traded. VWAP Bands add an envelope around that line, like [Bollinger Bands](/bollinger-bands/) do around a moving average.

The bands are placed at multiples of a standard deviation (a measure of how far prices spread from their average). A price at the +2 band is two standard deviations above VWAP: unusually far from the session average. The idea is that VWAP acts as a "fair price" and the bands show how stretched price is from it.

There is no single inventor, and implementations differ. Some tools weight the deviation by volume, others use a simple deviation of price from VWAP. The bands are a convention. They are not statistical probability limits, because intraday prices do not follow a neat bell-shaped curve, so the usual "95% of prices fall inside two deviations" rule does not hold reliably here.

## Formula

For each bar, with typical price = (high + low + close) / 3:

1. Cumulative VWAP = cumulative sum of (typical price x volume) / cumulative volume
2. Volume-weighted variance = cumulative sum of (volume x typical price squared) / cumulative volume - VWAP squared
3. Standard deviation (SD) = square root of the variance
4. Upper band k = VWAP + k x SD; lower band k = VWAP - k x SD, with k = 1, 2, 3

**Worked example.** Suppose after some bars VWAP is 100.00 and the volume-weighted standard deviation is 0.50.
Upper band 1 = 100.50; upper band 2 = 101.00; upper band 3 = 101.50
Lower band 1 = 99.50; lower band 2 = 99.00; lower band 3 = 98.50
If price reaches 101.00, it sits at the +2 band, two deviations above the session's average traded price.

Platforms differ. Some use a simple standard deviation of price around VWAP, some offer a percentage-based band, and some let you anchor the start point (see [Anchored VWAP](/anchored-vwap/)). Standard VWAP resets at the start of each session, so on a new day the bands start narrow and widen as more data arrives.

## How to read it

**VWAP as the mean.** In a balanced market price tends to oscillate around VWAP. The first bands often mark normal swings.

**Outer bands as stretch.** Price at the +2 or -2 band is stretched. In ranges, traders look for a pause or a move back toward VWAP, often treating the band as a place to take profit or watch for reversal signs.

**Targets.** A trade from the lower band back toward VWAP uses VWAP as the first target. This is a common practice, not a rule.

**Walks along the band.** In a strong trend, price can hug the first or second band for a long time. That is trend strength, not an invitation to fade.

**Early in the session.** The bands are narrow and unstable in the first minutes, so signals are less trustworthy until enough volume has traded.

**Band width.** Wider bands mean more dispersion in price during the session, which is a rough reading of volatility.

## Best market states

**Ranges (best).** Where price rotates around fair value, the bands map out likely turning zones and give clear places for entries and exits.

**Volatility (useful).** Band width shows how stretched the session is, and helps size stops and targets.

**Reversals (mixed).** An outer-band touch can precede a reversal, but only with other signs such as a rejection candle or a level.

**Trends and breakouts (weak).** In strong trends, price keeps pressing against outer bands. Fading them loses money until the trend breaks.

## Settings

| Setting | Value | What it does |
|---|---|---|
| Band multiples | 1, 2, 3 (default) | Common set; some tools show only 1 and 2 |
| Reset | Daily (default) | Weekly, monthly or custom anchors give longer-term versions |
| Price source | Typical price or close | Most tools use typical price (high + low + close) / 3 |
| Deviation type | Volume-weighted or simple | The weighted version follows the formula above |

A wider multiple (such as 3) gives fewer but more extreme touches. A narrower one gives more signals, with more noise.

## Common mistakes

- Treating the bands as support and resistance that must hold. They are ranges of stretch, not walls.
- Fading the outer band in a strong trend.
- Reading the bands in the first minutes of a session, when they are very narrow.
- Assuming a 2-deviation touch means a fixed probability of reversal.
- Using intraday VWAP on daily charts, where the reset logic does not apply, or forgetting to anchor properly.
- Using it on markets with poor volume data, such as spot forex (see [Tick Volume](/tick-volume/)).

## Pairs well with

- **[VWAP](/vwap/)**: the centre line the bands are built around.
- **[Support and resistance](/support-and-resistance/)**: a band touch at a known level has more weight.
- **[Volume Profile](/volume-profile/)**: shows where volume clustered, to compare with VWAP-based zones.
- **[ATR](/atr/)**: helps size stops against the band width.

## Sources

- Murphy, John J. (1999). *Technical Analysis of the Financial Markets*. New York Institute of Finance. (Background on volume and band indicators; VWAP bands themselves are a modern platform feature, not a book formula.)

## FAQ

**What do VWAP bands show?**
They show how far price has moved from the session's volume-weighted average, in units of standard deviation. A touch of the outer band means price is stretched compared with the average traded price.

**Are VWAP bands the same as Bollinger Bands?**
They are similar in shape but not in construction. Bollinger Bands use a moving average of closing prices; VWAP bands use a volume-weighted average that resets each session. They behave differently, especially early in the session.

**Does price always return to VWAP?**
No. In a balanced market it often does, but in a strong trend price can stay on one side of VWAP all session. Plan for that case with a stop.

**What are the best VWAP band settings?**
The common default is 1, 2 and 3 standard deviations, reset daily. There is no proven best set. Test settings on your own market and avoid tuning them to fit past data.

**Can I use VWAP bands on forex?**
With care. Spot forex has no true volume, so the weights come from tick counts. The result is an approximation. Futures contracts on currencies have real volume and fit better.
