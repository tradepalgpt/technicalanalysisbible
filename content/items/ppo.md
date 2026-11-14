---
slug: ppo
name: Percentage Price Oscillator (PPO)
aka: [PPO, Percentage Price Oscillator]
type: momentum-oscillator
states: [trend]
weak_states: [range]
purposes: [confirmation]
inventor: Not attributed to one person
year: Unknown
default_settings: "12, 26, 9 (fast EMA, slow EMA, signal EMA)"
pairs_with: [exponential-moving-average, adx, support-and-resistance, rsi]
related: [macd, apo, macd-histogram, true-strength-index, rate-of-change]
compare: [macd-vs-ppo]
glossary: [oscillator, momentum, divergence, smoothing, lookback-period]
wave: 3
reviewed: 14 November 2026
---

The Percentage Price Oscillator (PPO) is the MACD expressed as a percentage. It shows the gap between a fast and a slow exponential moving average as a share of the slow one, with a signal line and histogram. Because it is a percentage, readings can be compared across markets and across time, which plain MACD cannot do.

## At a glance

| | |
|---|---|
| Type | Momentum oscillator |
| Best market states | Trend |
| Weak in | Ranges |
| Best uses | Confirmation |
| Default settings | 12, 26, 9 |
| Created by | Not attributed to one person (a percentage form of Gerald Appel's MACD) |
| Leading or lagging | Lagging (built from moving averages) |

## What is the PPO?

The [MACD](/macd/) subtracts a 26-period exponential moving average (EMA) from a 12-period one. The result is in price units. A MACD value of 2 means something very different on a stock priced at 20 than on one priced at 400.

The PPO fixes this by dividing the gap by the slow EMA. A reading of 1.5 means the fast average is 1.5% above the slow average, whatever the price. That makes it better for scanning many markets, ranking them, or comparing a market's momentum now with its momentum years ago, when the price level was different.

Gerald Appel created the MACD in the late 1970s. The PPO is a straightforward variation with no clearly credited single inventor, so this guide does not name one. The [Absolute Price Oscillator (APO)](/apo/) is the same calculation without the percentage step.

## Formula

PPO = (EMA fast - EMA slow) / EMA slow x 100
Signal line = 9-period EMA of the PPO
Histogram = PPO - Signal line

Defaults are 12 for the fast EMA and 26 for the slow EMA.

**Worked example.** The 12-period EMA is 105 and the 26-period EMA is 100.
PPO = (105 - 100) / 100 x 100 = **5**

If the signal line is 4, the histogram is 5 - 4 = **+1**.

If the same prices were 10 times larger (1,050 and 1,000), MACD would be 50 but the PPO would still be 5.

## How to read it

**Zero line.** PPO above zero means the fast average is above the slow one, which is an uptrend by this measure. Below zero is a downtrend. A cross of zero is the same event as the two EMAs crossing.

**Signal line crossover.** When the PPO crosses above its signal line, momentum is picking up; below, it is fading. In a trending market these are used as confirmation of an existing view.

**Histogram.** The bars show the gap between the PPO and its signal. Shrinking bars warn that momentum is slowing before the lines cross.

**Divergence.** Price makes a new high but the PPO makes a lower high, or the mirror at lows. It shows momentum fading but can run a long time before price turns.

**Cross-market comparison.** Because it is in percent, the highest PPO readings on a scan show which markets have the strongest relative momentum.

## Best market states

**Trends (best).** Moving-average-based tools show their value when price moves in one direction for a while. The PPO stays on one side of zero and the signal crossovers confirm continuation.

**Ranges (weak).** In sideways markets the averages tangle and the PPO crosses zero and the signal line repeatedly. This produces many whipsaws.

**Reversals.** Divergence and a cross of the signal line at a major level may help, but the indicator lags, so entries come late.

**Breakouts and volatility.** A breakout can push the PPO sharply away from zero, which confirms strength. It does not measure volatility directly.

## Settings

| Setting | Values | What it does |
|---|---|---|
| Fast period | 12 | Shorter reacts faster |
| Slow period | 26 | Longer smooths more |
| Signal period | 9 | Smoothing of the PPO line |

The 12, 26, 9 set comes from MACD and is the default on most platforms. Shorter sets such as 5, 13, 1 are used for faster signals but produce more noise. Some platforms scale by the slow EMA while others use the fast one or offer a choice, so check the formula before comparing values.

## Common mistakes

- Comparing PPO and MACD values directly. They are on different scales.
- Trading every signal-line cross in a range.
- Reading zero-line crosses as early signals when they lag.
- Ignoring price structure and support and resistance.
- Changing the periods to fit past data.
- Assuming a high PPO means a market is about to reverse.

## Pairs well with

- **[Exponential moving average](/exponential-moving-average/)**: a longer EMA frames the larger trend.
- **[ADX](/adx/)**: a rising ADX supports trusting trend signals.
- **[Support and resistance](/support-and-resistance/)**: shows where confirmation matters most.
- **[RSI](/rsi/)**: a second view of momentum that is bounded and does not use averages of price level.

## Sources

- Appel, Gerald (2005). *Technical Analysis: Power Tools for Active Investors*. Financial Times Prentice Hall. (Appel is the creator of MACD, on which the PPO is based.)
- Murphy, John J. (1999). *Technical Analysis of the Financial Markets*. New York Institute of Finance. (Covers MACD and related oscillators.)

## FAQ

**What is the difference between PPO and MACD?**
MACD is the fast EMA minus the slow EMA, in price units. The PPO divides that by the slow EMA and multiplies by 100, so it is a percentage. The shapes of the lines are very similar; only the scale changes. See [MACD vs PPO](/compare/macd-vs-ppo/).

**When is the PPO better than MACD?**
When you compare different markets, or one market over a long period in which the price level changed a lot. Percent values are comparable across those cases, while MACD values are not.

**What are the default PPO settings?**
12, 26 and 9: a 12-period fast EMA, a 26-period slow EMA and a 9-period signal EMA. These are carried over from MACD and are the defaults on most platforms.

**Does the PPO work in ranges?**
Not well. The averages sit close together and keep crossing, so the PPO whipsaws around zero. It is better as a trend and momentum confirmation tool.

**Is the PPO a leading indicator?**
No. It is built from moving averages of past prices, so it lags. The histogram can warn of slowing momentum before the lines cross, but it does not forecast direction.
