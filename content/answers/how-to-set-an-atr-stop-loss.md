---
slug: how-to-set-an-atr-stop-loss
title: "How do you set an ATR stop loss?"
description: Measure the Average True Range, multiply it, and place the stop that far from entry. A worked ATR calculation, sizing and common multiples.
query: how to set atr stop loss
pillar: stop-losses-and-risk-guide
publish: 2027-08-09
reviewed: 16 November 2026
guides: [atr-stop, atr, position-sizing, volatility-stop]
siblings: [chandelier-exit-vs-atr-trailing-stop, why-does-my-stop-loss-keep-getting-hit]
value: [chart, table, example, verdict]
chart: atr
---

Take the Average True Range (ATR), multiply it by a chosen number, often between 1.5 and 3, and place the stop that distance below entry for a long or above it for a short. Then size the position so that the distance from your fill to the stop, times the size, is the money you chose to risk. That is 1R, with nothing added.

## What an ATR stop is

An [ATR stop](/atr-stop/) is a [volatility stop](/volatility-stop/): its distance grows when the market swings more and shrinks when it calms down. The [Average True Range](/atr/), from J. Welles Wilder's 1978 book *New Concepts in Technical Trading Systems*, measures how far price typically moves in one bar, gaps included. A stop a few ATRs away sits outside the normal noise, so ordinary bar-to-bar movement is less likely to hit it.

## Step 1: work out the true range

For each bar, the true range is the largest of:

- high - low
- the gap between the high and the previous close
- the gap between the low and the previous close

The last two catch gaps, which a plain high-low range misses.

## Step 2: average it

Wilder's ATR uses 14 bars and a smoothed average. To keep the sums short, this example uses 5 bars and a simple average, which shows the same idea.

| Bar | High | Low | Close | High - low | High - prior close | Low - prior close | True range |
|---|---|---|---|---|---|---|---|
| 1 | 101.0 | 99.0 | 100.5 | | | | |
| 2 | 102.0 | 100.0 | 101.5 | 2.0 | 1.5 | 0.5 | 2.0 |
| 3 | 103.5 | 101.0 | 103.0 | 2.5 | 2.0 | 0.5 | 2.5 |
| 4 | 103.5 | 101.5 | 102.0 | 2.0 | 0.5 | 1.5 | 2.0 |
| 5 | 105.0 | 103.5 | 104.5 | 1.5 | 3.0 | 1.5 | 3.0 |
| 6 | 105.5 | 103.0 | 105.0 | 2.5 | 1.0 | 1.5 | 2.5 |

The two gap columns show the size of the gap, ignoring its direction. Bar 5 gapped up: its own range is 1.5, but measured from bar 4's close of 102.0 to its high of 105.0 it covered 3.0, so its true range is 3.0.

ATR over bars 2 to 6 = (2.0 + 2.5 + 2.0 + 3.0 + 2.5) / 5 = 12.0 / 5 = 2.4.

With Wilder's smoothing, each new ATR = (previous ATR x (n - 1) + today's true range) / n. If bar 7 has a true range of 2.0, the new 5-bar ATR is (2.4 x 4 + 2.0) / 5 = 2.32.

## Step 3: place the stop

A trader buys at the bar 6 close of 105.0 and chooses 2 x ATR.

- Stop distance = 2 x 2.4 = 4.8
- Stop = 105.0 - 4.8 = 100.2

For a short, the stop would go above entry: 105.0 + 4.8 = 109.8.

## Step 4: size the trade

Account 10,000, risk 1% = 100. Measure the stop distance from the real fill (the ask, for a long), so the spread is already inside it.

- Loss per share at the stop = 4.8
- Size = 100 / 4.8 = 20.8, rounded down to 20 shares
- 1R = 20 x 4.8 = 96.00, fixed at the fill. A clean stop-out loses exactly that: -1R
- Commission (say 0.05 per share round trip, 1.00 in all) is shown on top of the result, never added to 1R. Slippage and gaps are recorded as they happen

[Position sizing](/position-sizing/) is what keeps a wide ATR stop from becoming a big risk. A wider stop means fewer shares, not more money at risk.

## Choosing the multiple

| Multiple | Distance with ATR of 2.4 | How it behaves |
|---|---|---|
| 1 x ATR | 2.4 | Inside normal noise; hit often by ordinary swings |
| 1.5 x ATR | 3.6 | Tight; suits short holding periods |
| 2 x ATR | 4.8 | A common middle setting |
| 3 x ATR | 7.2 | Wide; common for trend trades and trailing stops |

There is no best multiple. Larger multiples are hit less often by noise but each loss is a bigger price move, so the position is smaller and the target in R is further away. Test any multiple in R, with costs, before relying on it.

## Fix it, then only tighten

Set the ATR stop at entry and leave it, or move it only in your favour. If ATR rises after you enter, do not recalculate and push the stop further away. That widens 1R after entry and turns a planned -1R loss into something larger. A rising ATR is a reason to trade smaller next time, not to loosen this stop.

To normalise ATR across markets with very different prices, some traders divide it by price (normalised ATR). That is useful for comparing volatility, but the stop itself is still placed in price units.

## Common mistakes

- Using a high-low range and missing gaps.
- Picking a multiple, then cutting the size less than the wider stop needs, so 1R grows.
- Recalculating the stop wider as ATR rises.
- Ignoring structure. An ATR stop that lands just above an obvious swing low may be better moved a little beyond it, and the size cut to match.

## Verdict

An ATR stop is entry minus (multiple x ATR) for a long, plus for a short. It adapts to volatility, it is simple to test and it pairs naturally with position sizing. Fix it at entry, tighten it only in your favour, and measure the results in R with all costs included.
