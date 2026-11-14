---
slug: dmi
name: Directional Movement Index (DMI, +DI/-DI)
aka: [DMI, +DI and -DI, Directional Indicators, Directional Movement System]
type: trend
states: [trend]
weak_states: [range]
purposes: [entry, filter]
inventor: J. Welles Wilder Jr.
year: 1978
default_settings: "14 periods; +DI and -DI lines, usually shown with ADX"
pairs_with: [adx, atr, support-and-resistance, exponential-moving-average]
related: [aroon, vortex-indicator, parabolic-sar, choppiness-index, trend-intensity-index]
compare: []
glossary: [trend, crossover, smoothing, lookback-period]
wave: 2
reviewed: 14 November 2026
---

The Directional Movement Index (DMI) measures the direction of a trend using two lines: +DI for upward pressure and -DI for downward pressure. When +DI is above -DI, buyers have been moving price further than sellers, and the reverse. The [ADX](/adx/) is derived from these two lines.

## At a glance

| | |
|---|---|
| Type | Trend indicator (directional) |
| Best market states | Trends |
| Weak in | Ranges, where the lines cross repeatedly |
| Best uses | Entry (crossovers), filter |
| Default settings | 14 periods |
| Created by | J. Welles Wilder Jr., 1978 |
| Leading or lagging | Lagging |

## What is the Directional Movement Index?

Wilder introduced the system in his 1978 book *New Concepts in Technical Trading Systems*, the same book that introduced RSI, ATR and Parabolic SAR. The core idea is **directional movement**: how much of today's range lies outside yesterday's range, up or down.

If today's high is above yesterday's high by more than today's low is below yesterday's low, the move counts as upward. If the reverse, downward. These moves are smoothed and divided by the Average True Range ([ATR](/atr/)) to make them comparable across markets.

The result is two lines:

- **+DI (plus directional indicator):** upward movement as a percentage of true range.
- **-DI (minus directional indicator):** downward movement as a percentage of true range.

The name DMI is sometimes used for just these two lines and sometimes for the whole set including ADX. Many platforms plot all three together.

## Formula

For each bar:

1. Up move = today's high - yesterday's high. Down move = yesterday's low - today's low.
2. +DM = up move if it is larger than the down move and above 0; otherwise 0.
3. -DM = down move if it is larger than the up move and above 0; otherwise 0.
4. True Range (TR) = the largest of high - low, |high - previous close| and |low - previous close|.
5. Smooth +DM, -DM and TR over 14 periods using Wilder's smoothing: new value = previous value - (previous value / 14) + current value.
6. +DI = 100 x smoothed +DM / smoothed TR
7. -DI = 100 x smoothed -DM / smoothed TR

**Worked example.** Yesterday's range was high 100, low 96. Today's high is 103 and low is 98.
Up move = 103 - 100 = 3. Down move = 96 - 98 = -2, which is below zero, so counts as 0.
+DM = 3 and -DM = 0.
True range = the largest of 103 - 98 = 5, |103 - 99| (assuming previous close 99) = 4, |98 - 99| = 1, so TR = 5.

If, after smoothing, +DM is 2.4 and TR is 8, then +DI = 100 x 2.4 / 8 = **30**. If smoothed -DM is 1.2, -DI = 100 x 1.2 / 8 = **15**.

Platforms differ in the details of Wilder's smoothing and how they start the first value, so readings can differ a little. The ADX is then the smoothed average of |+DI - -DI| / (+DI + -DI) x 100.

## How to read it

**Direction.** +DI above -DI means buyers have dominated the recent movement. -DI above +DI means sellers have.

**Crossover.** Wilder's basic signal is a crossover. +DI crossing above -DI is a bullish signal and -DI crossing above +DI is bearish. Wilder paired this with an "extreme point rule": on the crossover day, take the high (for a buy) as a reference and only enter if price later exceeds it. This reduces false crossovers.

**Gap between the lines.** A wide gap shows a strong directional move. A narrow gap shows a weak or fading one.

**With ADX.** Many traders only take DI crossovers when ADX is above about 20 or 25, which shows the market is trending. Crossovers while ADX is low tend to whip back and forth.

**Levels.** The lines range from 0 to 100, but in practice they usually sit between 10 and 40. There is no standard overbought or oversold level.

## Best market states

**Trends (best).** DI crossovers followed by a rising ADX describe the start of a trend well, though with lag.

**Ranges (weak).** The two lines cross many times in a sideways market, producing a string of false signals.

**Breakouts (mixed).** A breakout often pushes one line sharply up and the other down, which is a useful confirmation, but the signal usually arrives after part of the move.

**Reversals (lagging).** The lines cross after a turn is already in progress.

**Volatility.** Because the lines are scaled by true range, they adjust for volatility, but large gaps can create sudden spikes.

## Settings

| Setting | What it does |
|---|---|
| 7 to 10 | Faster; more crossovers and more false signals |
| 14 (default) | Wilder's original; the standard setting on nearly all platforms |
| 20 to 28 | Slower and smoother; fewer signals |

Because Wilder designed the system with a 14-bar period, keep it unless you have tested another value on your market. The same period applies to the ADX if you use it.

## Common mistakes

- Trading every DI crossover without checking ADX.
- Treating a rise in +DI as a buy signal when the move is only a short spike.
- Confusing the DMI with the ADX. The DI lines give direction; ADX gives strength only.
- Ignoring Wilder's extreme point rule, which was meant to filter weak crossovers.
- Using DMI in a sideways market and being repeatedly stopped out.
- Changing the period often.

## Pairs well with

- **[ADX](/adx/)**: shows whether the market is trending enough for the DI crossover to matter.
- **[ATR](/atr/)**: the DI lines are scaled by true range, and ATR is useful for sizing stops.
- **[Support and resistance](/support-and-resistance/)**: a crossover that happens at a key level carries more weight.
- **[Exponential moving average](/exponential-moving-average/)**: a trend filter that confirms the DI direction.

## Sources

- Wilder, J. Welles Jr. (1978). *New Concepts in Technical Trading Systems*. Trend Research.
- Murphy, John J. (1999). *Technical Analysis of the Financial Markets*. New York Institute of Finance.

## FAQ

**What does DMI stand for?**
DMI stands for Directional Movement Index. It was created by J. Welles Wilder Jr. in 1978. The name is used both for the pair of +DI and -DI lines and for the wider system that includes the ADX.

**What is the difference between DMI and ADX?**
The DI lines show direction: +DI for upward pressure, -DI for downward. The ADX is calculated from them and shows trend strength without direction. Most charts plot all three together.

**What is a good DMI setting?**
Wilder's 14 periods is the standard and the default on most platforms. Shorter values give faster signals with more noise, and longer ones are smoother but slower. Test any change on your own market.

**How do you trade DMI crossovers?**
A common rule is to treat +DI crossing above -DI as bullish and the reverse as bearish, but only when ADX is rising or above about 20 to 25. Wilder also described an extreme point rule to reduce false signals.

**Does the DMI work in sideways markets?**
Not well. With no trend, +DI and -DI cross back and forth and each crossover tends to fail. A low ADX is usually the warning to ignore crossovers.
