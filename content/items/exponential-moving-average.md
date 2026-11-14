---
slug: exponential-moving-average
name: Exponential Moving Average (EMA)
aka: [EMA, exponentially weighted moving average, EWMA]
type: moving-average
states: [trend]
weak_states: [range]
purposes: [filter, entry, confirmation]
inventor: Not attributed to one person (exponential smoothing method)
year: Unknown
default_settings: "No single default; 9, 12, 21, 26, 50 and 200 periods are common"
pairs_with: [simple-moving-average, rsi, macd, support-and-resistance]
related: [simple-moving-average, weighted-moving-average, hull-moving-average, dema, tema, smoothed-moving-average, moving-average-crossover]
compare: [ema-vs-sma, hull-ma-vs-ema, ichimoku-vs-moving-averages]
glossary: [lagging-indicator, smoothing, lookback-period, crossover, trend, whipsaw]
wave: 1
reviewed: 14 November 2026
---

The Exponential Moving Average (EMA) is a moving average that gives more weight to recent prices, so it reacts faster than a simple average of the same length. Traders use it to judge trend direction, as a dynamic support or resistance line and as a building block for indicators such as MACD. It still lags price.

## At a glance

| | |
|---|---|
| Type | Moving average (trend filter) |
| Best market states | Trend |
| Weak in | Sideways ranges, where its speed creates extra false signals |
| Best uses | Trend filter, entry timing, confirmation |
| Default settings | None fixed; 9, 12, 21, 26, 50 and 200 periods are common |
| Created by | No single inventor; a standard exponential smoothing method |
| Leading or lagging | Lagging, but less so than the simple moving average |

## What is the Exponential Moving Average?

Like every moving average, the EMA smooths price into a line. The difference is how it treats old data. A simple average counts every price in its window equally and then drops the oldest one. The EMA instead gives the newest price the biggest weight and lets older prices fade gradually, without ever dropping out completely.

The result is a line that hugs price more closely and turns sooner. That is why traders who want earlier signals often prefer it. The price of that speed is more noise: the line reacts to short-lived moves, so it gives more false signals in choppy markets.

The EMA is also the engine inside other tools. [MACD](/macd/) is built from two EMAs, and many bands and channels use an EMA as their centre line.

## Formula

1. Multiplier k = 2 / (N + 1), where N is the period.
2. EMA today = (close today x k) + (EMA yesterday x (1 - k))

The very first EMA value has no previous EMA to build on, so most platforms start it with a simple average of the first N closes, or with the first close. This is why the first few values can differ between platforms; they converge after enough bars.

**Worked example.** A 9-period EMA. k = 2 / (9 + 1) = 0.2.
Yesterday's EMA = 50. Today's close = 55.
EMA today = (55 x 0.2) + (50 x 0.8) = 11 + 40 = **51**

If today's close had been 45, the EMA would be (45 x 0.2) + (50 x 0.8) = 9 + 40 = 49. Price moved 5 points either way and the EMA moved only 1 point, but it moved in the right direction.

## How to read it

**Slope and position.** A rising EMA with price above it points to an uptrend; a falling EMA with price below it, a downtrend. A flat, tangled EMA says there is no clear trend.

**Dynamic support and resistance.** In trends, price often pulls back to an EMA such as the 20 or 50 and resumes. This is a tendency, not a rule. A deep pullback through the line weakens the idea.

**Pullback entries.** Some traders wait for price to dip to a rising EMA in an uptrend and then enter when price turns up again, with a stop below the pullback low.

**Crossovers.** A fast EMA crossing a slow EMA (for example 12 and 26, or 50 and 200) is read as a change in trend. See [Moving average crossover](/moving-average-crossover/). Because the EMA is faster, its crossovers come earlier than SMA crossovers and are also more prone to whipsaws.

**Stacked EMAs.** Several EMAs lined up in order (fast above medium above slow) and all rising show a strong, orderly trend.

## Best market states

**Trends (best).** The EMA stays close to price in a trend and gives a clean reference line for pullbacks.

**Ranges (weak).** In a sideways market the EMA flips direction often and price crosses it repeatedly. The extra speed that helps in a trend makes this worse.

**Reversals.** The EMA turns sooner than an SMA but still only after price has moved. It confirms rather than predicts.

**Volatility.** Sharp spikes pull the EMA more than they pull an SMA, then the effect fades. Gaps can leave price well away from the line.

## Settings

| Setting | Period | What it does |
|---|---|---|
| Short-term | 8 to 21 | Hugs price. Used for pullback entries and short-term trend. The 9, 12 and 21 are common |
| Medium-term | 26 to 50 | A balance of speed and smoothness. The 12 and 26 are MACD's defaults |
| Long-term | 100 to 200 | Slow, smooth trend filter. The 200 is widely watched |

Platforms may use slightly different starting values, so an EMA can differ in its first bars between charting packages. After a few hundred bars the difference is negligible.

A shorter period means a larger multiplier k, so the line reacts more strongly to each new price. A longer period means a smaller k and a smoother line.

## Common mistakes

- Assuming a faster average is always better. Speed brings more false signals.
- Using EMA crossovers in a sideways market.
- Treating the line as a hard floor or ceiling. Price often goes through it.
- Changing the period after every loss until it fits past data.
- Comparing EMA values across platforms without checking how each starts its calculation.
- Entering on a pullback to the EMA without a stop or a reason the trend should continue.

## Pairs well with

- **[Simple moving average](/simple-moving-average/)**: a slow SMA as the trend filter and a faster EMA for timing.
- **[RSI](/rsi/)**: take RSI pullback signals only in the direction of the EMA trend.
- **[MACD](/macd/)**: built from EMAs, so it shows their crossover and momentum in one panel.
- **[Support and resistance](/support-and-resistance/)**: an EMA that sits on a horizontal level makes a stronger zone.

## Sources

- Murphy, John J. (1999). *Technical Analysis of the Financial Markets*. New York Institute of Finance.
- Kirkpatrick, Charles D. and Dahlquist, Julie R. (2006). *Technical Analysis: The Complete Resource for Financial Market Technicians*. FT Press.

## FAQ

**Is EMA better than SMA?**
Neither is better in every case. The EMA reacts faster and lags less, which helps in trends but gives more false signals in ranges. The SMA is smoother and slower. See [EMA vs SMA](/compare/ema-vs-sma/).

**What does the 200 EMA tell you?**
It shows the long-term trend. Price above a rising 200 EMA is read as a healthy uptrend, and below a falling one as a downtrend. It is a background filter, not a trade signal on its own.

**How do you calculate the EMA multiplier?**
The multiplier is 2 divided by (period + 1). For a 9-period EMA it is 2 / 10 = 0.2. Each new EMA is the new close times the multiplier plus the old EMA times one minus the multiplier.

**Which EMA settings are best for day trading?**
There is no single best set. Many day traders watch the 9 and 21 for short-term trend and the 50 or 200 for context. Test any choice on your own market and time frame before relying on it.

**Does the EMA ever completely forget old prices?**
Mathematically, no. Old prices keep a tiny weight that shrinks with each bar. In practice their effect becomes negligible after several times the period.
