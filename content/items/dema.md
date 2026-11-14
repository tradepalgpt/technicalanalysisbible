---
slug: dema
name: Double EMA (DEMA)
aka: [DEMA, Double Exponential Moving Average]
type: moving-average
states: [trend]
weak_states: [range]
purposes: [entry, filter]
inventor: Patrick G. Mulloy
year: 1994
default_settings: "Platform dependent, commonly 20 periods on the close"
pairs_with: [exponential-moving-average, tema, adx, atr]
related: [hull-moving-average, weighted-moving-average, kama, simple-moving-average, moving-average-crossover]
compare: [hull-ma-vs-ema]
glossary: [lagging-indicator, smoothing, lookback-period, crossover, trend, whipsaw]
wave: 2
reviewed: 14 November 2026
---

The Double Exponential Moving Average (DEMA) is a moving average that tries to remove some of the lag of a normal EMA. It does this by using an EMA of an EMA to estimate the lag and subtract it. The result follows price more closely but is noisier. Traders use it for faster trend reads and entry timing.

## At a glance

| | |
|---|---|
| Type | Moving average (trend-following, reduced lag) |
| Best market states | Trend |
| Weak in | Ranges, where it flips often |
| Best uses | Entry timing, trend filter |
| Default settings | Varies by platform; 20 is common |
| Created by | Patrick G. Mulloy, 1994 |
| Leading or lagging | Lagging, but with less delay than an EMA of the same length |

## What is the Double EMA?

The [exponential moving average](/exponential-moving-average/) already reacts faster than a simple average, but it still trails price. Patrick Mulloy described the DEMA in a 1994 article in *Technical Analysis of Stocks & Commodities* to cut that delay.

The name is misleading. A DEMA is not simply an EMA applied twice, which would be even slower. Instead, it calculates an EMA, then an EMA of that EMA, and uses the gap between them as an estimate of how much the line is lagging. It adds that estimate back to the first EMA by doubling it and subtracting the second.

The effect is a line that sits nearer to price and turns sooner. The price of that speed is extra noise and some overshoot at turns. It is a more aggressive tool than a plain EMA and fits traders who want faster reactions.

## Formula

Let EMA1 = EMA(price, n) and EMA2 = EMA(EMA1, n), both with the same period n.

DEMA = 2 x EMA1 - EMA2

The EMA itself uses a smoothing factor of 2 / (n + 1): EMA = previous EMA + factor x (price - previous EMA).

**Worked example.** Suppose that on the latest bar EMA1 = 100 and EMA2 = 98.

DEMA = 2 x 100 - 98 = **102**

The gap of 2 between the two EMAs is the estimated lag. In a rising market, EMA2 trails EMA1, so doubling EMA1 and subtracting EMA2 pushes the line up toward price.

Note: because the formula needs an EMA of an EMA, early values depend on how a platform seeds the calculation. Values on the first bars can differ between software, and settle after a few multiples of the period.

## How to read it

**Direction.** A rising DEMA indicates upward pressure; a falling one, downward. The slope tends to change a little sooner than a regular EMA's.

**Price against the line.** Price above the DEMA suggests buyers are ahead; below suggests sellers.

**Crossovers.** A fast DEMA crossing a slower one, or price crossing a DEMA, is a quick signal. It is a variation of the [moving average crossover](/moving-average-crossover/), with more crossings than slower averages give.

**Pullback guide.** In an established trend, traders watch whether pullbacks hold near the DEMA. Because the line hugs price, this is a tight reference and can be broken by routine noise.

**Overshoot.** At sharp reversals the DEMA can briefly shoot beyond price. This is a side effect of the lag correction rather than information.

## Best market states

**Trends (best).** In a clear trend, the lower lag helps you see direction change earlier than with a regular EMA.

**Ranges (weak).** In sideways markets the line twitches up and down. Faster averages produce more false signals, called whipsaws. Use a trend-strength tool such as [ADX](/adx/) to judge whether a trend exists.

**Breakouts and reversals.** The DEMA reacts quickly after a sharp move but cannot call the turn in advance. Treat a turn in the line as confirmation, not a forecast.

**Volatility.** In wide, fast markets the DEMA moves a lot. A longer period dampens this.

## Settings

| Setting | Period | What it does |
|---|---|---|
| Short | 8 to 14 | Very responsive; frequent direction changes |
| Medium | 20 | A common starting point |
| Long | 50 to 200 | Slower trend view; the lag correction matters more here |

Defaults differ across platforms, and the DEMA with period n is not as smooth as an EMA with period n. Many traders use a longer DEMA to get similar smoothness to a shorter EMA. As always, test the length on the market and time frame you actually trade.

## Common mistakes

- Thinking "double" means twice as smooth. It means less lag and more noise.
- Applying an EMA twice and calling it a DEMA. The formula is 2 x EMA - EMA of EMA.
- Trading every crossing in a sideways market.
- Expecting the lower lag to predict reversals.
- Comparing values between platforms without checking the seed and the period.
- Swapping settings after each loss until it fits old data.

## Pairs well with

- **[Exponential moving average](/exponential-moving-average/)**: the base it improves on; plotting both shows the lag reduction directly.
- **[TEMA](/tema/)**: the triple version of the same idea, faster still.
- **[ADX](/adx/)**: shows whether a trend exists, which is where the DEMA works best.
- **[ATR](/atr/)**: sets a stop distance from price volatility rather than from the average.

## Sources

- Mulloy, Patrick G. (1994). "Smoothing Data with Faster Moving Averages". *Technical Analysis of Stocks & Commodities*, January 1994.
- Murphy, John J. (1999). *Technical Analysis of the Financial Markets*. New York Institute of Finance. (General reference on moving averages.)
- Kirkpatrick, Charles D. and Dahlquist, Julie R. (2006). *Technical Analysis: The Complete Resource for Financial Market Technicians*. FT Press. (General reference on moving averages.)

## FAQ

**What is the DEMA formula?**
DEMA = 2 x EMA - EMA(EMA). You calculate an EMA of price, then an EMA of that EMA, using the same period. Double the first and subtract the second. The second EMA acts as a measure of the lag.

**Is the DEMA the same as applying an EMA twice?**
No. An EMA of an EMA is smoother but slower. The DEMA uses that double-smoothed line only as a correction, subtracting it from twice the first EMA to reduce the lag.

**Is DEMA better than EMA?**
It reacts sooner but is noisier and can overshoot at turns. Whether that helps depends on your style and the market. Neither is better in every case, so test both.

**What is the best DEMA period?**
There is no best value. Twenty is a common default; shorter periods give quicker, noisier signals, and longer ones give a smoother view of the trend. Test on your own market and time frame.

**What is the difference between DEMA and TEMA?**
Both aim to cut lag. TEMA uses three layers of EMA: 3 x EMA - 3 x EMA(EMA) + EMA(EMA(EMA)). It is usually a little faster and noisier than the DEMA of the same period. See [TEMA](/tema/).
