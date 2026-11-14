---
slug: trix
name: TRIX
aka: [Triple Exponential Average, TRIX oscillator]
type: trend
states: [trend]
weak_states: [range]
purposes: [filter, confirmation]
inventor: Jack Hutson
year: 1980s
default_settings: "15 periods; 9-period signal line (varies by platform)"
pairs_with: [macd, exponential-moving-average, adx, support-and-resistance]
related: [dema, tema, rate-of-change, know-sure-thing, schaff-trend-cycle, detrended-price-oscillator]
compare: []
glossary: [momentum, oscillator, smoothing, divergence, crossover]
wave: 3
reviewed: 14 November 2026
---

TRIX is the one-bar percentage change of a triple-smoothed exponential moving average. The three rounds of smoothing remove much of the short-term noise, so TRIX shows only the larger swings. It oscillates around zero: above zero suggests rising momentum in the smoothed trend, below zero falling.

## At a glance

| | |
|---|---|
| Type | Trend / momentum indicator |
| Best market states | Trend |
| Weak in | Ranges |
| Best uses | Trend filter, confirmation |
| Default settings | 15 periods, often with a 9-period signal line |
| Created by | Jack Hutson, 1980s |
| Leading or lagging | Lagging, because of the triple smoothing |

## What is TRIX?

Jack Hutson was the founder of *Technical Analysis of Stocks & Commodities* magazine, and TRIX is generally credited to him in the early 1980s. The name comes from "triple exponential".

The idea is to filter out cycles shorter than the chosen period. A normal EMA still shows many small wiggles. Smoothing it twice more, and then taking the rate of change, leaves a slow oscillator that turns only when the underlying trend changes pace.

TRIX has two parts: the smoothing and the rate of change. The smoothing removes noise. The rate of change turns the slow line into an oscillator centred on zero. The result is not the triple EMA itself, and it should not be confused with the [TEMA](/tema/), which is a different formula built to reduce lag.

## Formula

1. EMA1 = EMA of the close over n periods (default 15).
2. EMA2 = EMA of EMA1 over n periods.
3. EMA3 = EMA of EMA2 over n periods.
4. **TRIX = 100 x (EMA3 today - EMA3 yesterday) / EMA3 yesterday**
5. Signal line = EMA of TRIX, usually 9 periods.

**Worked example.** Suppose the triple-smoothed EMA3 was 200.00 yesterday and 200.40 today.

TRIX = 100 x (200.40 - 200.00) / 200.00 = 100 x 0.002 = **0.20**

TRIX of +0.20 means the triple-smoothed average rose by 0.2 percent in one bar.

Note: some platforms scale TRIX differently (for example multiplying by 10,000 instead of 100) or apply the calculation to the logarithm of the price. The shape is the same, but the numbers differ.

## How to read it

**Zero line.** TRIX above zero means the triple-smoothed average is rising; below zero, falling. A cross of zero shows a change in direction of the smoothed trend.

**Signal line crossover.** TRIX crossing above its signal line suggests momentum is improving. Crossing below suggests it is fading. These cross more often than the zero line does.

**Divergence.** Price making a higher high while TRIX makes a lower high is a warning that momentum is fading. Divergences can last a long time before price turns.

**Slope.** A rising TRIX, even below zero, shows that the fall in the smoothed trend is slowing.

**Lag.** Because of the heavy smoothing, TRIX turns well after the price does. It is a confirming tool, not an early one.

## Best market states

**Trends (best).** In a steady trend, TRIX stays on one side of zero and moves smoothly, so it is a clear filter.

**Ranges (weak).** The smoothing helps here, because short swings are removed, but the line hovers near zero and crossovers give little.

**Reversals.** TRIX confirms a reversal late. Divergences are the only early hint, and they are not reliable timing signals.

**Breakouts.** A sharp breakout moves the triple EMA only slowly, so TRIX responds with a delay.

**Volatility.** The percentage scale makes TRIX values easier to compare across prices than raw momentum, though volatile markets still swing it more.

## Settings

| Setting | Period | What it does |
|---|---|---|
| Short | 5 to 9 | Faster, more crossovers, still smoother than ROC |
| Default | 15 | A usual starting point; widely used on daily charts |
| Long | 20 to 30 | Very smooth; slow to react |
| Signal line | 9 | EMA of TRIX for crossover signals |

Hutson's original periods are described in different ways in different sources, and platforms use their own defaults, so values and signal timing differ across software. Because the smoothing happens three times, the effective lag is much larger than the number suggests. A 15-period TRIX turns more slowly than a 15-period EMA.

## Common mistakes

- Confusing TRIX with the TEMA. They share the idea of three EMAs, but give different results.
- Expecting early signals. The triple smoothing makes it late.
- Trading every zero cross in a sideways market.
- Comparing values from platforms that scale TRIX differently.
- Treating divergence as a timing trigger.
- Using extremely short periods and losing the smoothing benefit.

## Pairs well with

- **[MACD](/macd/)**: a related smoothed momentum indicator; agreement adds weight to a signal.
- **[Exponential moving average](/exponential-moving-average/)**: shows the price trend that TRIX is a rate of change of.
- **[ADX](/adx/)**: indicates whether the market is trending enough for TRIX to be useful.
- **[Support and resistance](/support-and-resistance/)**: puts a TRIX turn in context with price structure.

## Sources

- Achelis, Steven B. (2001). *Technical Analysis from A to Z* (2nd ed.). McGraw-Hill.
- Murphy, John J. (1999). *Technical Analysis of the Financial Markets*. New York Institute of Finance. (Background on moving averages and momentum.)

## FAQ

**What does TRIX stand for?**
It stands for triple exponential. The indicator takes an exponential moving average of an exponential moving average of an exponential moving average, then measures its one-bar percentage change.

**What is the best TRIX setting?**
Many platforms use 15 periods with a 9-period signal line. Shorter settings are faster and noisier, and longer ones smoother and later. Test on your own market and time frame.

**Is TRIX the same as TEMA?**
No. TEMA is a moving average built to cut lag. TRIX is an oscillator made from three stacked EMAs and a rate of change, and it lags more because of the heavy smoothing.

**Is TRIX a leading indicator?**
No. It is built from smoothed past prices and so trails the market. Divergence can give an early hint, but it is only a warning.

**Does TRIX work in sideways markets?**
Not well. It stays near zero and crosses often. Using a trend-strength tool such as ADX helps you ignore it when there is no trend.
