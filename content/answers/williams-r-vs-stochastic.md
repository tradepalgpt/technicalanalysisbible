---
slug: williams-r-vs-stochastic
title: "Williams %R vs stochastic: what is the difference?"
description: Williams %R is the fast stochastic's %K turned upside down, from 0 to -100. A worked example proves it, and shows what the smoothing and scale change.
query: williams %r vs stochastic
pillar: rsi-and-momentum-oscillators
publish: 2027-04-05
reviewed: 16 November 2026
guides: [williams-r, stochastic-oscillator, rsi]
siblings: [fast-vs-slow-stochastic, rsi-vs-stochastic-which-is-better]
value: [chart, table, example, verdict]
chart: williams-r
---

Williams %R and the fast stochastic's %K are the same line on different scales: %R = %K - 100. %R runs from 0 to -100 and is usually shown unsmoothed with no signal line; the stochastic most platforms show is the slow version, smoothed twice. The real difference is the smoothing, not the idea.

## The two formulas

**Fast stochastic %K** (George Lane):

%K = 100 x (close - lowest low) / (highest high - lowest low)

**[Williams %R](/williams-r/)** (Larry Williams):

%R = -100 x (highest high - close) / (highest high - lowest low)

Both use the same 14-bar high and low. %K measures the close's distance from the bottom of the range; %R measures its distance from the top, as a negative number.

## A worked example

The 14-bar high is 120, the low is 100, and the close is 114.

- %K = 100 x (114 - 100) / (120 - 100) = 100 x 14 / 20 = **70**
- %R = -100 x (120 - 114) / 20 = -100 x 6 / 20 = **-30**

70 - 100 = -30. Always. Since (close - low) + (high - close) = (high - low), the two fractions always add up to one, and %R is %K shifted down by 100.

So on a chart, fast %K and %R have exactly the same shape. Only the numbers on the scale differ.

## What actually differs

| | Williams %R | Stochastic (as usually shown) |
|---|---|---|
| Scale | 0 to -100 | 0 to 100 |
| Usual levels | -20 (overbought) / -80 (oversold) | 80 / 20 |
| Main line | Raw, unsmoothed | Slow %K: 3-bar average of raw %K |
| Signal line | None by default | %D: 3-bar average of slow %K |
| Default period | 14 | 14, 3, 3 |
| Speed | Same as fast %K | About one smoothing step slower |
| Typical use | Extremes, quick turns | %K/%D crosses, extremes |

The levels match: -20 on %R is 80 on %K, and -80 is 20.

So the practical difference is that most people compare %R with the **slow** stochastic, because that is the default. Against the slow version, %R is faster and noisier, simply because it has not been smoothed. Against the fast %K, there is no difference at all. [Fast vs slow stochastic](/answers/fast-vs-slow-stochastic/) explains the smoothing steps.

## Does the scale matter?

Only for readability. Some traders find the inverted scale awkward: "overbought" is near the top, at 0, and the numbers are negative. Some platforms show %R from 0 to 100 instead of 0 to -100, which makes it look identical to fast %K in every respect. Check which version you are reading before comparing levels with someone else.

## How Williams used it

Larry Williams' own use, as commonly described, focused on %R's extremes as signs of strength rather than as reversal signals: a market that keeps closing near the top of its range is strong. Many traders today use it the opposite way, as an overbought and oversold timing tool in ranges. Both readings come from the same number. Which one is right depends on whether the market is trending (where staying near the top is strength) or ranging (where it is a stretch towards the edge). The [stochastic](/stochastic-oscillator/) has exactly the same split.

## A single-line view

The one real advantage of %R is simplicity. A slow stochastic has two lines, and many users trade the %K/%D crosses. Those crosses happen often, especially mid-range, and most of them mean little. %R has one line and no crosses to watch. A trader who only cares whether the close is near the top or bottom of the range gets that in a single line.

If you want smoothing without two lines, you can apply a short moving average to %R yourself. At that point you have rebuilt the slow stochastic's %K on an inverted scale.

## Compared with RSI

Both %R and the stochastic look at the close's position in the high-low range. [RSI](/rsi/) looks at the balance of gains and losses between closes and ignores highs and lows. So the real choice for most traders is not %R or stochastic, which are one indicator, but range-position (either of those) or gain-loss balance (RSI). [RSI vs stochastic: which is better?](/answers/rsi-vs-stochastic-which-is-better/) covers that choice.

## Verdict

Williams %R and the stochastic are one idea. %R is the fast stochastic's %K minus 100: same shape, inverted scale, no smoothing, no signal line. Against the usual slow stochastic, %R is faster and noisier for that reason alone. Use %R if you want one clean line; use the slow stochastic if you want smoothing and a signal line. Never put both on one chart expecting confirmation: it is the same number twice.
