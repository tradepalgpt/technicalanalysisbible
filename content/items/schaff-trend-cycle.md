---
slug: schaff-trend-cycle
name: Schaff Trend Cycle
aka: [STC, Schaff Trend Cycle (STC)]
type: trend
states: [trend]
weak_states: [range]
purposes: [entry]
inventor: Doug Schaff
year: 2000s
default_settings: "MACD 23/50; cycle length 10; smoothing 0.5; levels 25 and 75"
pairs_with: [exponential-moving-average, adx, support-and-resistance, macd]
related: [stochastic-oscillator, know-sure-thing, trix, rsi]
compare: []
glossary: [oscillator, overbought, oversold, smoothing]
wave: 3
reviewed: 14 November 2026
---

The Schaff Trend Cycle (STC) takes a MACD and runs it through two rounds of Stochastic-style scaling and smoothing. The result is a fast 0 to 100 oscillator that is meant to turn sooner than MACD while still following the trend. Traders use readings above 75 and below 25 as zones and look for exits from them as entry timing.

## At a glance

| | |
|---|---|
| Type | Trend indicator (cycle oscillator) |
| Best market states | Trend |
| Weak in | Ranges |
| Best uses | Entry timing |
| Default settings | MACD 23/50, cycle 10, factor 0.5, levels 25 / 75 |
| Created by | Doug Schaff, 2000s |
| Leading or lagging | Faster than MACD, but still built from past prices |

## What is the Schaff Trend Cycle?

MACD is a trend tool, but it is unbounded and can be slow. The Stochastic Oscillator is bounded between 0 and 100 and quick, but it is built from raw price. Doug Schaff's idea was to apply the Stochastic calculation to the MACD line, so the output keeps the trend content of MACD but gets the bounded, quicker feel of a Stochastic.

The method is usually dated to the 2000s, and Schaff is credited as its author. Public descriptions are mostly in charting-software documentation and trader articles, so details such as the smoothing method can vary between platforms.

The outcome is a line that spends most of its time near 0 or 100 and moves between them with sharp swings. That shape is deliberate: it is meant to show cycles within a trend.

## Formula

A commonly published version:

1. MACD = EMA(23) of close minus EMA(50) of close.
2. First stochastic: %K1 = 100 x (MACD - lowest MACD over 10 bars) / (highest MACD over 10 bars - lowest MACD over 10 bars).
3. Smooth it: %D1 = previous %D1 + 0.5 x (%K1 - previous %D1).
4. Second stochastic: apply the same stochastic formula to %D1 over 10 bars, giving %K2.
5. Smooth again: **STC** = previous STC + 0.5 x (%K2 - previous STC).

**Worked example (one step).** Suppose over the last 10 bars the MACD ranged from -2.0 to +3.0 and now stands at +1.0.

%K1 = 100 x (1.0 - (-2.0)) / (3.0 - (-2.0)) = 100 x 3 / 5 = **60**

If the previous %D1 was 50, then %D1 = 50 + 0.5 x (60 - 50) = **55**.

The same steps are repeated on %D1 to reach the STC.

Note: platforms differ in the smoothing, in how they handle a zero range, and in the default periods, so STC values do not match exactly across software.

## How to read it

**Zones.** Above 75 is treated as a strong or high zone; below 25 as a low zone. Because the STC is built from MACD, these are not true overbought and oversold levels in the way an RSI reading is read. They mark where the cycle sits.

**Exits from the zones.** A common approach is to look for the STC rising up through 25 (a possible long entry) or falling down through 75 (a possible short entry or exit). These are the most-quoted signals.

**Direction of the slope.** A rising STC suggests the current cycle is up. A falling one, down. Many traders only take signals in line with the bigger trend.

**Time spent at extremes.** In a strong trend the STC can sit near 100 or 0 for long stretches. A long stay there is a sign of persistence, not an automatic warning.

**Divergence.** Some users compare STC extremes with price extremes. As with other oscillators, divergences can persist for a long time.

## Best market states

**Trends (best).** The tool was designed for trending conditions, where its MACD core captures direction and the scaling shows the timing of pullbacks.

**Ranges (weak).** In sideways markets the MACD hovers near zero and the STC swings fully between 0 and 100 with little meaning. The result is a lot of signals with no follow-through.

**Reversals.** The STC turns quickly, which can look like early warning. It also turns early in pullbacks that do not end the trend.

**Breakouts.** A breakout usually pushes the STC to an extreme and keeps it there. That shows strength; it is not a sell signal.

**Volatility.** The scaling removes the price units, so comparisons across markets are easier than with raw MACD.

## Settings

| Setting | Values | What it does |
|---|---|---|
| Fast / slow EMA | 23 / 50 | The MACD inside the STC; longer than the usual 12 / 26 |
| Cycle length | 10 | Lookback of each Stochastic step |
| Smoothing factor | 0.5 | Controls how much each new value changes the line |
| Levels | 25 and 75 | Zone boundaries |

Shortening the EMAs or the cycle length makes the STC faster and noisier. Lengthening them gives fewer swings. Some platforms use 12 / 26 for the EMAs; others use 23 / 50. Be aware which one you are using when you read results from other people.

## Common mistakes

- Treating 75 and 25 as automatic sell and buy levels.
- Using it in a range, where it flips between extremes.
- Taking every cross of the levels without checking the larger trend.
- Comparing screenshots from platforms that use different settings.
- Assuming the speed means it predicts turns. It reacts quickly but is still built from past prices.
- Optimising the periods to past data.

## Pairs well with

- **[Exponential moving average](/exponential-moving-average/)**: a slow EMA gives the trend, and the STC times pullbacks within it.
- **[ADX](/adx/)**: confirms the market is trending enough for the STC to work.
- **[Support and resistance](/support-and-resistance/)**: shows where an STC signal sits relative to price structure.
- **[MACD](/macd/)**: the STC is built on it, so comparing both helps explain each swing.

## Sources

- Appel, Gerald (2005). *Technical Analysis: Power Tools for Active Investors*. FT Press. (Background on MACD, the basis of the STC.)
- Murphy, John J. (1999). *Technical Analysis of the Financial Markets*. New York Institute of Finance. (Background on stochastic-style oscillators.)

## FAQ

**What is the Schaff Trend Cycle?**
It is an oscillator that applies a Stochastic-style calculation, twice, to the MACD line. The output runs between 0 and 100 and is meant to give faster trend timing than MACD alone.

**What are the standard STC settings?**
A commonly published set is MACD 23 and 50, a cycle length of 10 and a smoothing factor of 0.5, with levels at 25 and 75. Platforms differ, so check yours.

**How do you trade the Schaff Trend Cycle?**
A common approach is to look for the line rising through 25 for a possible long and falling through 75 for a possible short, but only in the direction of the larger trend. Entries still need a stop and a plan.

**Is the STC better than MACD?**
It reacts faster and is bounded, which many find easier to read. The price of that is more signals and more false ones. Neither is better in general.

**Does the STC work in ranging markets?**
Not well. It swings between extremes with little meaning. A trend-strength check such as ADX helps you decide when to ignore it.
