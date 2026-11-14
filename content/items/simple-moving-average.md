---
slug: simple-moving-average
name: Simple Moving Average (SMA)
aka: [SMA, simple moving average, arithmetic moving average]
type: moving-average
states: [trend]
weak_states: [range]
purposes: [filter, entry, confirmation]
inventor: Not attributed to one person (long-standing statistical method)
year: Unknown
default_settings: "No single default; 20, 50 and 200 periods are the most watched"
pairs_with: [exponential-moving-average, support-and-resistance, adx, volume]
related: [exponential-moving-average, weighted-moving-average, moving-average-crossover, golden-cross, death-cross, moving-average-ribbon, hull-moving-average]
compare: [ema-vs-sma, ichimoku-vs-moving-averages, vwap-vs-moving-average]
glossary: [lagging-indicator, smoothing, lookback-period, crossover, trend, whipsaw]
wave: 1
reviewed: 14 November 2026
---

The Simple Moving Average (SMA) is the plain average of the last N closing prices, redrawn on every bar. It smooths out day-to-day noise so the direction of the trend is easier to see. Traders use it as a trend filter, as dynamic support or resistance, and in crossover systems. It lags price by design.

## At a glance

| | |
|---|---|
| Type | Moving average (trend filter) |
| Best market states | Trend |
| Weak in | Sideways ranges, where price keeps crossing it |
| Best uses | Trend filter, entry timing, confirmation |
| Default settings | None fixed; 20, 50 and 200 periods are the most watched |
| Created by | No single inventor; a standard statistical average |
| Leading or lagging | Lagging (built only from past closes) |

## What is the Simple Moving Average?

An average of recent prices tells you where price has been "on average" over a set window. The word "moving" means the window slides forward by one bar each time, dropping the oldest price and adding the newest. Joined up, those averages form a smooth line over the chart.

"Simple" means every price in the window counts equally. A close from 50 bars ago has the same weight as today's close. That makes the line easy to understand and easy to calculate, and it is the version most people mean when they say "the 200-day moving average".

Because the line is built only from past data, it always trails price. A longer window gives a smoother line that lags more; a shorter window follows price closely but is noisier. The SMA does not predict anything. It describes the recent average and its slope.

## Formula

SMA = (sum of the last N closes) / N

When a new bar closes, the oldest close drops out and the newest one is added.

**Worked example.** A 5-period SMA with the last five closes of 10, 12, 11, 13 and 14:
Sum = 10 + 12 + 11 + 13 + 14 = 60
SMA = 60 / 5 = **12**

The next close is 15. The window now holds 12, 11, 13, 14 and 15. Sum = 65, so SMA = 65 / 5 = **13**. The 10 has dropped out, which is why the SMA can jump when a very old, very high or low price leaves the window.

Most platforms apply the SMA to closing prices by default, but you can apply it to highs, lows or the typical price (high + low + close, divided by 3).

## How to read it

**Slope.** A rising SMA suggests an uptrend; a falling one, a downtrend; a flat one, no clear trend. The slope matters more than any single price touch.

**Price above or below.** Price closing above a rising SMA is usually read as bullish, and below a falling SMA as bearish. Many traders use the 200-period SMA as a simple dividing line between "bullish territory" and "bearish territory".

**Dynamic support and resistance.** In a steady trend, price often pulls back to a widely watched SMA such as the 50 or 200 and bounces. This happens partly because many traders watch the same line. It is a tendency, not a rule, and price often slices through.

**Crossovers.** When a short SMA crosses a longer one, some traders read it as a trend change. See [Moving average crossover](/moving-average-crossover/), [Golden cross](/golden-cross/) and [Death cross](/death-cross/).

**Distance from the average.** When price is far above its SMA, it is stretched. Some traders expect a pullback toward the line, but a stretched market can stay stretched for a long time.

## Best market states

**Trends (best).** In a smooth trend, price stays on one side of the SMA and the line gives a clear picture of direction.

**Ranges (weak).** In a sideways market price crosses the SMA again and again. Each cross looks like a signal and most of them lose money. These false signals are called whipsaws. A tool such as [ADX](/adx/) can tell you when the market is not trending.

**Reversals.** The SMA turns only after the reversal has begun, so it confirms a change late rather than catching it.

**Volatility.** Sudden large moves pull the average sharply, and again when the big bar drops out of the window. Gaps can leave price far from the line.

## Settings

| Setting | Period | What it does |
|---|---|---|
| Short-term | 5 to 20 | Follows price closely. More signals and more noise. Popular with short-term traders |
| Medium-term | 50 | A widely watched intermediate trend line on daily charts |
| Long-term | 100 to 200 | Very smooth. Slow to react. The 200 is the best-known long-term trend line |

There is no correct period. The most useful periods are often the ones many other people watch, because that is where reactions tend to cluster. Test any setting on the market and time frame you trade. The same period on a 5-minute chart and a daily chart describes very different spans of time.

Compared with the [Exponential moving average](/exponential-moving-average/), the SMA reacts more slowly and is smoother, because it gives no extra weight to recent prices.

## Common mistakes

- Treating every touch of the line as a bounce. Price often goes through it.
- Using it in a ranging market, where it generates repeated false signals.
- Hunting for the "perfect" period by fitting it to past data.
- Forgetting that it lags. By the time price has crossed it, much of the move may be done.
- Mixing periods across time frames without noticing that a 50-period average on a 1-hour chart is not a 50-day average.
- Ignoring the slope and using only the price-above or price-below rule.

## Pairs well with

- **[Exponential moving average](/exponential-moving-average/)**: use a faster EMA for timing and a slower SMA for the bigger trend.
- **[Support and resistance](/support-and-resistance/)**: an SMA that lines up with a horizontal level gives a stronger zone.
- **[ADX](/adx/)**: a low ADX warns that moving average signals are likely to whipsaw.
- **[Volume](/volume/)**: a move through the average on heavy volume carries more weight than one on thin volume.

## Sources

- Murphy, John J. (1999). *Technical Analysis of the Financial Markets*. New York Institute of Finance.
- Kirkpatrick, Charles D. and Dahlquist, Julie R. (2006). *Technical Analysis: The Complete Resource for Financial Market Technicians*. FT Press.

## FAQ

**What is the difference between SMA and EMA?**
The SMA weights every price in the window equally. The EMA weights recent prices more, so it reacts faster and lags less. The EMA is more sensitive but also gives more false signals. See [EMA vs SMA](/compare/ema-vs-sma/).

**Which SMA period is best?**
No period is best in every market. The 20, 50 and 200 are the most watched, which gives them some self-fulfilling influence. Pick the period that suits your time frame and test it on past data without over-fitting.

**Is the 200-day SMA a buy or sell signal?**
Not by itself. Price above a rising 200-day SMA is read as a healthy long-term trend, and below it as a weak one. Treat it as a background filter, not a trigger, and combine it with price structure.

**Does the SMA work in a sideways market?**
Poorly. Price keeps crossing a flat SMA, giving many false signals. A flat, tangled average is itself useful information: it tells you the market has no clear trend.

**Is the SMA a leading or lagging indicator?**
Lagging. It is calculated only from past prices, so it follows price rather than predicting it. Longer periods lag more than shorter ones.
