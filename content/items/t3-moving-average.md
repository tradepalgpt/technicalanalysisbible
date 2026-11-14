---
slug: t3-moving-average
name: T3 Moving Average (Tillson)
aka: [T3, Tillson T3, T3 MA]
type: moving-average
states: [trend]
weak_states: [range]
purposes: [filter]
inventor: Tim Tillson
year: 1998
default_settings: "5 periods; volume factor 0.7"
pairs_with: [exponential-moving-average, rsi, adx, support-and-resistance]
related: [exponential-moving-average, dema, tema, zlema, hull-moving-average, alma, kama]
compare: []
glossary: [smoothing, lookback-period, lagging-indicator, trend, whipsaw]
wave: 3
reviewed: 14 November 2026
---

The T3 Moving Average is a very smooth moving average by Tim Tillson, built by running an EMA-based filter three times. It tries to remove the lag that normally comes with heavy smoothing. A setting called the volume factor, with a default of 0.7, controls how much lag is cut and how much overshoot is allowed. Traders use it as a trend filter.

## At a glance

| | |
|---|---|
| Type | Moving average (multi-pass smoothing) |
| Best market states | Trend |
| Weak in | Ranges, and sharp reversals where it can overshoot |
| Best uses | Trend filter |
| Default settings | 5 periods, volume factor 0.7 |
| Created by | Tim Tillson, 1998 |
| Leading or lagging | Lagging, but with less lag than an EMA of equal smoothness |

## What is the T3 Moving Average?

Smoothing price more makes a line look cleaner, but it also makes the line later. A common way to smooth is to take an average of an average, as with the double EMA (DEMA) and triple EMA (TEMA). Those methods also try to cancel the extra lag.

Tim Tillson's T3 takes this idea further. It builds a unit called a generalised DEMA (GD), and then applies GD three times. A parameter called the **volume factor** (v) sets how strongly the lag-cancelling term is applied. The name is confusing: it has nothing to do with trading volume. At v = 0, T3 is just an EMA applied three times. At v = 1, it behaves like a TEMA-style line with the most lag cancelled and the most overshoot.

The default of 0.7 sits between the two. The result is a line that is smoother than a regular EMA and still keeps up with price reasonably well. Tillson described it in 1998.

## Formula

Let alpha = 2 / (N + 1) be the usual EMA smoothing factor, and v the volume factor (default 0.7).

1. GD(x) = EMA(x) x (1 + v) - EMA(EMA(x)) x v
2. T3 = GD(GD(GD(price)))

In practice it is calculated with six EMAs in a row (e1 is an EMA of price, e2 an EMA of e1, and so on up to e6). Then:

T3 = c1 x e6 + c2 x e5 + c3 x e4 + c4 x e3

with
c1 = -v^3
c2 = 3 x v^2 + 3 x v^3
c3 = -6 x v^2 - 3 x v - 3 x v^3
c4 = 1 + 3 x v + v^3 + 3 x v^2

With v = 0.7: c1 = -0.343, c2 = 2.499, c3 = -6.069, c4 = 4.913. The four weights sum to 1.

**Worked example (one GD step).** Suppose the EMA of price is 100 and the EMA of that EMA is 98, with v = 0.7.
GD = 100 x 1.7 - 98 x 0.7 = 170 - 68.6 = **101.4**

The result, 101.4, is above the EMA of 100. The extra term pushes the line toward price, which is how the lag is cut. The T3 repeats that step three times.

Note: some platforms use a default period of 8 instead of 5. The six-EMA form is equivalent to the three-pass form.

## How to read it

**Slope and colour.** A rising T3 shows an uptrend and a falling one a downtrend. Many platforms colour the line by slope.

**Price against the line.** Price above the T3 is the bullish arrangement; below is bearish. This is used as a filter.

**Crossovers.** Price or a fast T3 crossing a slow T3 is read as a trend change. The smooth line produces fewer crossings than a fast EMA, but each one comes with some delay.

**Overshoot.** After a sharp reversal, the line can continue a little past the turn before it reverses. The higher the volume factor, the more this happens.

**Dynamic support and resistance.** In orderly trends, price sometimes pulls back near the line. Treat it as a loose pattern.

## Best market states

**Trends (best).** The line follows a steady trend smoothly with limited lag.

**Ranges (weak).** The smooth line crosses price less often than a fast average, but it still produces false signals when price chops sideways.

**Reversals.** Because of overshoot, the line may not turn exactly when price does. It confirms a turn late.

**Volatility.** A single large move shifts the line through all six EMA stages, but the effect is spread out, so the line looks steady. This can hide how far price has moved from it.

## Settings

| Setting | Value | What it does |
|---|---|---|
| Period | 5 (default); 8 on some platforms | Sets alpha for each EMA. Longer is smoother and later |
| Volume factor | 0.7 (default) | Higher cuts more lag but overshoots more; 0 is a plain triple EMA pass |

Because T3 is already smooth, short periods are common. Increasing the period past 20 gives a very slow line. Test any change on your own market and time frame.

## Common mistakes

- Confusing the volume factor with trading volume. It is only a tuning constant.
- Setting the volume factor outside the usual 0 to 1 range, where the overshoot grows fast.
- Expecting zero lag. The line is faster than an equally smooth EMA, not instant.
- Using it in ranges and treating each cross as a signal.
- Comparing T3 values between platforms that use different default periods.
- Changing period and volume factor to fit past data.

## Pairs well with

- **[Exponential moving average](/exponential-moving-average/)**: shows how much faster the T3 is than a plain EMA.
- **[RSI](/rsi/)**: gives a momentum check on a T3 turn.
- **[ADX](/adx/)**: shows whether the market trends enough for a smooth line to help.
- **[Support and resistance](/support-and-resistance/)**: adds price-based context to the line.

## Sources

- Murphy, John J. (1999). *Technical Analysis of the Financial Markets*. New York Institute of Finance. (General background on moving averages; it does not describe the T3.)

## FAQ

**What are the default T3 settings?**
Many platforms use a period of 5 and a volume factor of 0.7. Others use a period of 8. Check your platform's defaults before comparing lines from different tools.

**Does the T3 volume factor relate to trading volume?**
No. The name is misleading. It is a constant that sets how much lag-cancelling is applied. At 0 you get an EMA passed three times, and at higher values the line follows price more closely but overshoots more.

**Is T3 better than the EMA or TEMA?**
It is designed to be smoother than an EMA at a similar speed, with the volume factor setting how much overshoot is allowed. That does not prove better results in trading. Compare it with an EMA and a TEMA on your own data.

**Who created the T3 moving average?**
Tim Tillson, in 1998. He built it from the generalised DEMA idea, which applies a lag-cancelling term to a double EMA, and applied it three times.

**Does the T3 repaint?**
A closed bar's value does not change once it is set. Like other averages, the live bar's value moves as the price updates. The T3 can overshoot during a turn, which can look like a change but is part of how it is built.
