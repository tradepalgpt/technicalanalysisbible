---
slug: hull-moving-average-vs-ema
title: "Hull moving average vs EMA: what is the difference?"
description: The Hull moving average vs the EMA - how each is built, why Hull turns sooner and overshoots, a worked turn, and when each one tends to suit.
query: hull moving average vs ema
pillar: moving-averages
publish: 2027-05-10
reviewed: 16 November 2026
guides: [hull-moving-average, exponential-moving-average, weighted-moving-average]
siblings: [which-moving-average-has-the-least-lag, sma-vs-ema-which-is-better]
value: [chart, table, example, verdict]
chart: hull-moving-average
---

The Hull moving average turns sooner than an EMA of the same period and stays fairly smooth, because it projects recent movement forward. The price of that speed is overshoot: at a sharp turn, Hull swings past price before coming back. The EMA is slower but never overshoots.

## How each is built

The [exponential moving average](/exponential-moving-average/) closes a fixed fraction of the gap to price each bar: k = 2 / (N + 1). It always sits between its old value and the latest close. It can lag, but it can never get ahead of price.

The [Hull moving average](/hull-moving-average/), published by Alan Hull in 2005, is built from three [weighted moving averages](/weighted-moving-average/):

1. Work out a WMA of half the period: WMA(N/2).
2. Work out a WMA of the full period: WMA(N).
3. Make a "raw" line: 2 × WMA(N/2) − WMA(N).
4. Smooth the raw line with a WMA of length √N.

For a 16-period Hull: WMA(8), WMA(16), raw = 2 × WMA(8) − WMA(16), then a WMA(4) of the raw line.

Step 3 is the trick. The fast WMA is closer to price than the slow one. Doubling the fast one and subtracting the slow one pushes the line further in the direction of the move, roughly cancelling the lag. Step 4 then smooths the result, because the raw line is jumpy.

## A worked turn

Here is a simplified look at step 3 alone. Suppose price has been rising and then flattens.

| Bar | Close | WMA(N/2) | WMA(N) | Raw: 2 × fast − slow |
|---|---|---|---|---|
| Rising | 110 | 108 | 104 | 112 |
| Flat | 110 | 109.5 | 106 | 113 |
| Flat | 110 | 110 | 107.5 | 112.5 |
| Flat | 110 | 110 | 109 | 111 |
| Flat | 110 | 110 | 110 | 110 |

The values are rounded and illustrative. Look at the raw line. While price is rising, it sits ahead of the fast WMA and even above price (112 vs 110). When price flattens at 110, the raw line keeps going above 110 for a few bars before settling. That is overshoot. Hull's final smoothing step softens it, but does not remove it.

An EMA in the same situation would approach 110 from below and never go above it. Slower, but no false move.

## Side-by-side comparison

| | EMA | Hull |
|---|---|---|
| Built from | One exponential update | Three WMAs combined, then smoothed |
| Lag at the same period | Moderate | Low |
| Smoothness | Moderate | Fairly smooth for its speed |
| Overshoot at turns | Never | Yes |
| Behaviour in ranges | Flattens, crosses price often | Wiggles with the range; turns often |
| Settings | Period | Period (√N and N/2 follow from it) |
| Platform differences | Seed and history | How N/2 and √N are rounded for odd periods |
| Common use | Trend lines, MACD, pullbacks | Fast trend direction, colour-change signals |

## Reading a Hull line

Many traders read Hull by its slope or colour: rising is up, falling is down, and a change of direction is the signal. Because it turns quickly, that signal comes earlier than an EMA's. In a clean trend, that is a real advantage.

In a range, the same speed becomes a cost. A Hull line will turn up and down with each swing, giving signals that reverse within a few bars. An EMA in the same range flattens and makes price cross it repeatedly, which is also a problem, but a different one.

## What the chart shows

Our chart shows a Hull moving average drawn by our own indicator code on real daily data. Look at the turns: Hull changes direction close to the price turn, and at sharp reversals you can see it swing a little past price. It is a teaching example, chosen to show behaviour clearly, not a test of Hull as a signal.

## When each tends to suit

- **EMA:** when you want a line that never gets ahead of price, such as a trailing exit or a pullback zone. Also when you want to match common reference lines (the 20 or 50 EMA).
- **Hull:** when you want an early read on direction in a market that trends cleanly, and you accept some false turns.

Using Hull as a trailing stop is risky: because it overshoots, it can sit above price in an uptrend's pause and trigger an exit that an EMA would not.

## Lower lag is not a free lunch

Hull's lower lag comes from extrapolation: it assumes recent movement continues. When it does, Hull wins. When it does not, Hull is wrong in a way an EMA cannot be. This is true of all low-lag averages: see [which moving average has the least lag](/answers/which-moving-average-has-the-least-lag/).

## Verdict

Hull is faster and smoother than you might expect, and it overshoots at turns. The EMA is slower and never gets ahead of price. Neither is better in general. Hull tends to suit early trend reads in clean markets; the EMA suits trailing exits and shared reference lines. More on low-lag types in [the moving averages guide](/guide/moving-averages/).
