---
slug: hull-moving-average
name: Hull Moving Average
aka: [HMA, Hull MA]
type: moving-average
states: [trend]
weak_states: [range]
purposes: [entry, filter]
inventor: Alan Hull
year: 2005
default_settings: "Platform dependent, commonly 9 to 21 periods on the close"
pairs_with: [weighted-moving-average, exponential-moving-average, adx, atr]
related: [dema, tema, kama, simple-moving-average, moving-average-crossover]
compare: [hull-ma-vs-ema]
glossary: [lagging-indicator, smoothing, lookback-period, crossover, trend, whipsaw]
wave: 2
reviewed: 14 November 2026
---

The Hull Moving Average (HMA) is a fast, smooth moving average built from three weighted moving averages. It was designed to cut the lag of a normal average without making the line jagged. Traders use it to read trend direction early and as an entry filter, though it still turns after price.

## At a glance

| | |
|---|---|
| Type | Moving average (trend-following, low lag) |
| Best market states | Trend |
| Weak in | Ranges, where it flips often |
| Best uses | Entry timing, trend filter |
| Default settings | Varies by platform; 9 and 21 are common |
| Created by | Alan Hull, 2005 |
| Leading or lagging | Lagging, but with much less delay than a simple average |

## What is the Hull Moving Average?

Every ordinary moving average has a trade-off. A longer one is smooth but late. A shorter one is quick but noisy. Alan Hull published his version in 2005 as a way to get a smooth line that also reacts quickly.

The trick is to build it from [weighted moving averages](/weighted-moving-average/). First, a fast average is doubled and a slow one subtracted. That cancels much of the lag but makes the line twitchy. A second, short weighted average over the square root of the period then smooths the result.

The outcome often hugs price tightly and turns soon after price does. It is popular for judging direction at a glance, because the line changes slope early.

It has no memory of a "true" signal, though. Reducing lag this much means the HMA can overshoot at turns and flip direction on small pullbacks.

## Formula

Let n be the period and WMA(x, k) mean a weighted moving average of series x over k periods.

HMA(n) = WMA( 2 x WMA(price, n/2) - WMA(price, n), sqrt(n) )

Steps:
1. Calculate WMA over half the period, n/2.
2. Calculate WMA over the full period, n.
3. Make a raw series: 2 x (half-period WMA) - (full-period WMA).
4. Smooth the raw series with a WMA over the square root of n.

Half and square-root values are rounded to whole numbers.

**Worked example.** Use n = 4, so n/2 = 2 and sqrt(n) = 2. Closes: 9, 10, 12, 14, 16 (oldest to newest).

Latest bar (closes 10, 12, 14, 16):
- WMA(2) = (1 x 14 + 2 x 16) / 3 = 15.33
- WMA(4) = (1 x 10 + 2 x 12 + 3 x 14 + 4 x 16) / 10 = 14.00
- Raw = 2 x 15.33 - 14.00 = 16.67

Previous bar (closes 9, 10, 12, 14):
- WMA(2) = (1 x 12 + 2 x 14) / 3 = 13.33
- WMA(4) = (1 x 9 + 2 x 10 + 3 x 12 + 4 x 14) / 10 = 12.10
- Raw = 2 x 13.33 - 12.10 = 14.57

HMA = WMA(raw, 2) = (1 x 14.57 + 2 x 16.67) / 3 = **15.97**

The latest close is 16, so the HMA sits very close to price.

## How to read it

**Slope.** The simplest use is colour or direction: rising means up, falling means down. Many chart packages colour the line by slope. A turn in slope is the signal.

**Price against the line.** Price above a rising HMA suggests buyers are in control. Price below a falling HMA suggests sellers.

**Crossovers.** Two HMAs of different lengths crossing can be used as a [moving average crossover](/moving-average-crossover/). Because both are fast, expect many crossings.

**Filtering.** Some traders only take trades in the direction of a longer HMA and use a shorter one for timing.

**Overshoot.** The subtraction step lets the line push past price at sharp turns. A brief overshoot is a known side effect rather than a signal.

## Best market states

**Trends (best).** In a clear trend the HMA follows price closely and turns early at the end of a leg, which gives a quicker read than slower averages.

**Ranges (weak).** In sideways trade the line changes slope constantly. Each slope change looks like a signal and most will fail. Check [ADX](/adx/) or the shape of price before trusting turns.

**Breakouts and reversals.** The HMA will turn quickly after a sharp move, but because it is still built from past data it cannot call the turn in advance. Treat a slope change as confirmation that something has started.

**Volatility.** Fast markets with large bars make the HMA swing more. Using a longer period in volatile conditions reduces false flips.

## Settings

| Setting | Period | What it does |
|---|---|---|
| Short | 9 | Very responsive; more slope changes |
| Medium | 16 to 21 | A common balance on daily charts |
| Long | 50 to 100 | Smoother view of the larger trend |

Defaults differ between platforms, so check which period a chart is using before comparing results. The period is rounded for the half-length and square-root steps, so odd lengths may give slightly different values in different software. Test any setting on the market and time frame you trade.

## Common mistakes

- Treating the quick turn as a prediction. It is still built from past prices.
- Trading every slope change in a sideways market.
- Ignoring overshoot at sharp turns and reading it as a new trend.
- Using a very short period and then being surprised by the noise.
- Comparing HMA values between platforms without checking rounding and settings.
- Choosing the period that looks best on old data, then assuming it will work going forward.

## Pairs well with

- **[Weighted moving average](/weighted-moving-average/)**: the HMA is made of these, so knowing the WMA explains how the HMA behaves.
- **[Exponential moving average](/exponential-moving-average/)**: a common comparison; plot both to see how much earlier the HMA turns.
- **[ADX](/adx/)**: helps tell a trending market, where HMA slope changes matter, from a ranging one.
- **[ATR](/atr/)**: sizes a stop in price terms rather than relying on the moving average itself.

## Sources

- Kirkpatrick, Charles D. and Dahlquist, Julie R. (2006). *Technical Analysis: The Complete Resource for Financial Market Technicians*. FT Press. (General reference on moving averages.)
- Murphy, John J. (1999). *Technical Analysis of the Financial Markets*. New York Institute of Finance. (General reference on moving averages.)

## FAQ

**What is the formula for the Hull Moving Average?**
HMA(n) = WMA( 2 x WMA(price, n/2) - WMA(price, n), sqrt(n) ). You take a half-length and full-length weighted average, double the first and subtract the second, then smooth the result with a weighted average over the square root of n.

**Is the Hull Moving Average better than the EMA?**
It turns earlier and is smoother than an EMA of similar length, but it also overshoots and flips more. Neither is better in every case. Test both on your market before choosing.

**What is the best Hull Moving Average setting?**
No single setting is best. Nine and 21 are common, with longer lengths for the bigger trend. The right value depends on the time frame and how much noise you can accept, so test it.

**Does the Hull Moving Average repaint?**
Once a bar closes its value is fixed. On a live bar the value moves as price moves, like any moving average. Some software lets the colour change as the slope turns, which can look like repainting but is just the live bar updating.

**Can I use the Hull Moving Average in ranges?**
It works poorly there. The line changes direction often when price moves sideways, creating many false signals. A trend-strength tool such as ADX can help you avoid using it in those conditions.
