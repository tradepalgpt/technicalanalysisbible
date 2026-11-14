---
slug: rate-of-change
name: Rate of Change (ROC)
aka: [ROC, Price Rate of Change, PROC]
type: momentum-oscillator
states: [trend, reversal]
weak_states: [range]
purposes: [confirmation, filter]
inventor: Not attributed to one person
year: Unknown
default_settings: "12 periods (some platforms use 9 or 10), zero line"
pairs_with: [exponential-moving-average, support-and-resistance, adx, trendline]
related: [momentum-indicator, rsi, macd, coppock-curve, know-sure-thing]
compare: []
glossary: [momentum, oscillator, divergence, lookback-period]
wave: 2
reviewed: 14 November 2026
---

Rate of Change (ROC) measures the percentage difference between the latest close and the close a set number of bars ago. It oscillates around zero: positive values mean price is higher than before, negative values lower. Because it is a percentage, readings can be compared across markets. Traders use it to confirm trends and filter trades.

## At a glance

| | |
|---|---|
| Type | Momentum oscillator |
| Best market states | Trend, reversal |
| Weak in | Ranges |
| Best uses | Confirmation, filter |
| Default settings | 12 periods (varies by platform), zero line |
| Created by | Not attributed to one person, year unknown |
| Leading or lagging | Slightly lagging, but turns ahead of price in many cases because it measures speed |

## What is Rate of Change?

Rate of Change answers a direct question: by what percentage has price moved over the last n bars? It is the percentage version of the [Momentum Indicator](/momentum-indicator/), which shows the same change in price units.

No single inventor is recorded for it. Percentage change over a window is a basic calculation used in finance for a very long time, and the indicator form appears in standard textbooks such as John Murphy's *Technical Analysis of the Financial Markets* (1999).

The same measure is used in academic work on price momentum, though the settings there are usually months rather than days. The two uses share a formula but not a goal: the chart tool looks for short-term momentum shifts, while the academic work studies portfolios.

ROC is also a building block for other tools, such as the Coppock Curve and the Know Sure Thing, which combine several ROC readings.

## Formula

ROC = (current close - close n bars ago) / close n bars ago x 100

**Worked example.** With n = 12, suppose the latest close is 110 and the close 12 bars ago was 100.
ROC = (110 - 100) / 100 x 100 = **+10**

So price is 10% higher than 12 bars ago.

If a later bar closes at 95 against a close of 100 twelve bars before:
ROC = (95 - 100) / 100 x 100 = **-5**

Note: some platforms scale it as a ratio (current close / earlier close x 100) with a centre line at 100. The default period varies: 12 is a common standard, but 9 and 10 are also used as defaults in some charting packages.

## How to read it

**Zero line.** ROC above zero means price is higher than n bars ago; below zero, lower. A move across zero says the n-bar direction has changed. It is a slow signal.

**Rising and falling.** ROC rising shows upward speed is increasing. A rising ROC that is still below zero means price is lower than n bars ago but the fall is slowing. A flattening ROC from a high reading means a rally is losing pace.

**Extremes.** ROC has no fixed top or bottom. Traders judge extremes by comparing with past peaks and troughs on the same market. A reading far above the usual range can mark a stretched move, but in a strong trend it can stay stretched for a long time.

**Divergence.** If price makes a higher high while ROC makes a lower high, upward momentum is fading. This is a warning and often takes many bars to play out.

**Filter use.** Some traders use ROC above zero as a simple filter that allows only long trades, and below zero for short trades only.

**Ranking.** Because it is a percentage, ROC can be used to rank markets by recent strength, which is common in rotation and scanning approaches.

## Best market states

**Trends (best).** In a steady trend, ROC stays mainly on one side of zero, and dips towards zero show pullbacks.

**Reversals (fair).** Divergence and a zero cross can warn of a turn, ideally with a price trigger such as a trendline break.

**Ranges (weak).** In sideways markets ROC crosses zero often with small values. Each cross looks like a signal but price goes nowhere.

**Breakouts.** A breakout often creates a sharp rise in ROC. It confirms strength but does not tell you if the move will last.

**Volatility.** ROC is a raw percentage and is not adjusted for volatility, so quieter and more volatile markets give very different ranges of values.

## Settings

| Setting | Period | What it does |
|---|---|---|
| Short | 5 to 9 | Fast, many zero crosses, noisier |
| Default | 12 (varies) | A common standard for daily charts |
| Long | 25 to 50 | Smoother, shows larger swings, slower |

A short period compares price with a very recent bar, so ROC reacts quickly and flips often. A long period tracks the bigger move. Test your setting on the market and time frame you use. The period should match the swing length you want to measure.

## Common mistakes

- Reading a high ROC as a sell signal on its own. In a strong trend it can remain high for a long time.
- Using it in a sideways market, where zero crosses give little.
- Forgetting the "drop-out" effect: when a large old bar leaves the window, ROC can jump even though price today barely moved.
- Comparing ROC values from different period settings as if they were the same.
- Using it as the only signal without a price level or stop plan.
- Treating the percentage as a forecast of the next move.

## Pairs well with

- **[Exponential moving average](/exponential-moving-average/)**: the EMA shows trend direction, ROC shows its speed.
- **[Support and resistance](/support-and-resistance/)**: slowing ROC at a known level adds context.
- **[ADX](/adx/)**: confirms whether a trend is present.
- **[Trendline](/trendline/)**: a ROC divergence plus a trendline break is a common combined signal.

## Sources

- Murphy, John J. (1999). *Technical Analysis of the Financial Markets*. New York Institute of Finance.

## FAQ

**What does Rate of Change tell you?**
It tells you the percentage change in price over the last n bars. Positive means price is higher than n bars ago, and negative means lower. The slope shows whether upward or downward speed is increasing or fading.

**What is a good ROC setting?**
A period of 12 is a common standard, and 9 or 10 appear as defaults on some platforms. Shorter values are quicker but noisier. Test on your own market and time frame, because no period is best everywhere.

**Is ROC the same as Momentum?**
They are close. Momentum is the raw price difference; ROC is that difference as a percentage of the earlier price. ROC makes it easier to compare different markets, while the shapes on one chart look almost the same.

**How do you use ROC for divergence?**
Compare swing highs or lows in price with those in ROC. If price makes a new high but ROC makes a lower high, upward momentum is weakening. It is an early warning and not a precise signal.

**Does ROC work on all markets?**
Yes, it needs only a price series. How useful it is depends on whether that market trends. In ranges, zero crosses are frequent and mostly unreliable.

**Is ROC overbought above a certain level?**
There is no fixed level. ROC is unbounded, so you compare the current value with its own history on that market. In a strong trend it can remain at high values for a long time.
