---
slug: tema
name: Triple EMA (TEMA)
aka: [TEMA, Triple Exponential Moving Average]
type: moving-average
states: [trend]
weak_states: [range]
purposes: [entry, filter]
inventor: Patrick G. Mulloy
year: 1994
default_settings: "Platform dependent, commonly 20 periods on the close"
pairs_with: [exponential-moving-average, dema, adx, atr]
related: [hull-moving-average, weighted-moving-average, kama, simple-moving-average, moving-average-crossover]
compare: [hull-ma-vs-ema]
glossary: [lagging-indicator, smoothing, lookback-period, crossover, trend, whipsaw]
wave: 2
reviewed: 14 November 2026
---

The Triple Exponential Moving Average (TEMA) is a fast moving average that combines three layers of EMA to cancel most of the lag of a normal EMA. It follows price very closely and turns early, but it is noisy and overshoots. Traders use it for quick trend reads and entry timing.

## At a glance

| | |
|---|---|
| Type | Moving average (trend-following, low lag) |
| Best market states | Trend |
| Weak in | Ranges, where it flips often |
| Best uses | Entry timing, trend filter |
| Default settings | Varies by platform; 20 is common |
| Created by | Patrick G. Mulloy, 1994 |
| Leading or lagging | Lagging, but less than the EMA or the DEMA of the same length |

## What is the Triple EMA?

The TEMA is a close relative of the [DEMA](/dema/). Patrick Mulloy described both in 1994 in *Technical Analysis of Stocks & Commodities*. The DEMA removes some lag by combining an EMA with an EMA of that EMA. The TEMA goes a step further and adds a third layer.

The name can mislead. It is not an EMA applied three times, which would make a very slow line. The three layers are mixed using fixed weights (3, minus 3 and 1) so that the lag in each layer cancels out much of the lag in the others.

The result sits very near price and changes direction early. The cost is noise: small price wiggles show up as bends in the line. The TEMA suits traders who value speed and accept more false signals.

## Formula

Let EMA1 = EMA(price, n), EMA2 = EMA(EMA1, n) and EMA3 = EMA(EMA2, n), all with the same period n.

TEMA = 3 x EMA1 - 3 x EMA2 + EMA3

Each EMA uses a smoothing factor of 2 / (n + 1).

**Worked example.** On the latest bar, suppose EMA1 = 100, EMA2 = 98 and EMA3 = 97.

TEMA = 3 x 100 - 3 x 98 + 97 = 300 - 294 + 97 = **103**

In a rising market each layer trails the one before it, so EMA1 is above EMA2 and EMA2 is above EMA3. The formula pushes the result up toward, and sometimes past, current price. Compare this with the DEMA from the same figures: 2 x 100 - 98 = 102.

Note: because three EMAs are chained, the first values depend on how each platform seeds the calculation. Early values can differ between software, and settle after the line has had several multiples of the period to warm up.

## How to read it

**Direction.** A rising TEMA suggests upward momentum; a falling one, downward. The slope tends to change sooner than with the EMA or DEMA.

**Price against the line.** Price above the TEMA hints at buyer control; below, seller control. Because the line hugs price, crossings are frequent.

**Crossovers.** Two TEMAs of different lengths crossing, or price crossing one TEMA, is a fast version of a [moving average crossover](/moving-average-crossover/). Expect a lot of signals, many of them false in quiet markets.

**Overshoot.** After a sharp move, the TEMA can run past price, then snap back. This comes from the weighting, not from new information.

**Turning points.** The line bending early is a sign that momentum has changed, not a guarantee that the trend has ended.

## Best market states

**Trends (best).** In a steady move, the TEMA stays close to price and signals changes of direction earlier than slower averages.

**Ranges (weak).** In sideways trade it whipsaws. A tool such as [ADX](/adx/) can help show when there is not enough trend to use it.

**Breakouts and reversals.** It reacts quickly after a sharp move, so it can confirm a change early. It cannot predict one.

**Volatility.** Large bars make the TEMA swing widely. A longer period reduces this.

## Settings

| Setting | Period | What it does |
|---|---|---|
| Short | 8 to 14 | Very fast; frequent direction changes |
| Medium | 20 | A common starting point |
| Long | 50 to 200 | Slower trend view; still faster than a simple average |

Defaults differ across platforms. A TEMA of period n is noticeably faster and noisier than an EMA of period n, so a longer TEMA is often used to get a smoothness similar to a shorter EMA. Test your choice on the market and time frame you trade.

## Common mistakes

- Reading "triple" as "three times smoother". It means faster and noisier.
- Calculating an EMA of an EMA of an EMA and calling it TEMA. The right formula uses 3, minus 3 and 1 weights.
- Trading every crossing in quiet, sideways markets.
- Treating early turns as predictions.
- Comparing values across platforms with different seeding or periods.
- Cutting the period after each loss until it fits old data.

## Pairs well with

- **[Exponential moving average](/exponential-moving-average/)**: the base it builds on; plotting both shows how much lag is removed.
- **[DEMA](/dema/)**: the two-layer version; comparing them shows the effect of the third layer.
- **[ADX](/adx/)**: tells you whether the market is trending enough to use a fast average.
- **[ATR](/atr/)**: sets a stop distance from price volatility, which a fast average cannot do.

## Sources

- Mulloy, Patrick G. (1994). "Smoothing Data with Less Lag". *Technical Analysis of Stocks & Commodities*, February 1994.
- Murphy, John J. (1999). *Technical Analysis of the Financial Markets*. New York Institute of Finance. (General reference on moving averages.)
- Kirkpatrick, Charles D. and Dahlquist, Julie R. (2006). *Technical Analysis: The Complete Resource for Financial Market Technicians*. FT Press. (General reference on moving averages.)

## FAQ

**What is the TEMA formula?**
TEMA = 3 x EMA - 3 x EMA(EMA) + EMA(EMA(EMA)). Calculate an EMA of price, an EMA of that, and an EMA of that again, all with the same period. Then combine them with weights of 3, minus 3 and 1.

**Is TEMA the same as three EMAs?**
No. It is a single line made by combining three chained EMAs. Plotting three separate EMAs shows three lines; the TEMA is one line built from them to reduce lag.

**Is TEMA better than EMA?**
It is faster, with less lag, but it is also noisier and overshoots. Whether that suits you depends on your approach. Test it against an EMA on your market.

**What is the best TEMA period?**
There is no best value. Twenty is a common default. Shorter periods are faster and noisier. Longer periods are smoother. Test on the market and time frame you actually trade.

**What is the difference between TEMA and DEMA?**
The DEMA uses two layers: 2 x EMA - EMA(EMA). The TEMA uses three layers. For the same period, the TEMA usually sits closer to price and is a little more sensitive. See [DEMA](/dema/).
