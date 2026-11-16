---
slug: why-does-my-stop-loss-keep-getting-hit
title: "Why does my stop loss keep getting hit?"
description: The usual reasons stops get hit too often, from stops inside normal noise to obvious levels and spread, and what each fix costs in R.
query: why does my stop loss keep getting hit
pillar: stop-losses-and-risk-guide
publish: 2027-09-01
reviewed: 16 November 2026
guides: [stop-loss, atr-stop, structure-stop, normalized-atr]
siblings: [how-to-set-an-atr-stop-loss, does-spread-count-towards-stop-loss]
value: [chart, table, example, verdict]
chart: normalized-atr
---

Most often, the stop sits inside the market's normal noise: closer than one typical bar's range, right on an obvious level, or without room for the spread. The fix is to place it beyond the noise and cut the position size, not to widen it after entry.

## First, some stops are meant to be hit

A [stop loss](/stop-loss/) is hit whenever a trade is wrong. Even a sound strategy with a 40% win rate is stopped out on 60% of trades. So the question is not whether stops get hit, but whether they get hit by noise in trades that then go on to work. That pattern, stopped out and then price goes your way, is the one to fix.

## Reason 1: the stop is inside normal noise

The [Average True Range](/atr/) measures how far price usually moves in one bar. A stop closer than a fraction of that can be hit by an ordinary bar.

Example: a share with an ATR of 1.20, a 100 risk per trade, and 0.05 per share of commission shown on top of each result.

| Distance from fill to stop | In ATR | Shares (100 / distance, rounded down) | 1R (clean stop-out) | Commission compared with 1R |
|---|---|---|---|---|
| 0.30 | 0.25 x ATR | 333 | 99.90 | 16.7% |
| 0.60 | 0.5 x ATR | 166 | 99.60 | 8.3% |
| 1.20 | 1 x ATR | 83 | 99.60 | 4.2% |
| 2.40 | 2 x ATR | 41 | 98.40 | 2.1% |
| 3.60 | 3 x ATR | 27 | 97.20 | 1.4% |

Every row risks about the same money, and a clean stop-out in every row is exactly -1R before commission. The tight stops do not risk less money; they just get hit by smaller moves, and costs eat a bigger share of each trade. An [ATR stop](/atr-stop/) sets the distance from volatility so it sits outside a normal bar. [Normalised ATR](/normalized-atr/) (ATR divided by price) lets you compare that noise across markets with very different prices.

## Reason 2: the stop is on an obvious level

A stop exactly at a round number, or a tick below a clear swing low, sits where many other stops sit. Price often trades through such levels briefly before turning. A [structure stop](/structure-stop/) goes beyond the level with a buffer, so a brief poke through does not trigger it.

## Reason 3: the spread

On a bid chart, a short's stop triggers on the ask, which is higher than the line you see. Spreads also widen at rollover, in thin hours and around news. A stop with a 2 pip buffer can be hit by a 5 pip spread without the bid ever reaching it.

## Reason 4: entries far from the level

If you enter well away from support, the stop must either go below support (a wide stop, small size) or above it (inside noise). Entering nearer the level allows a stop beyond it at a reasonable distance.

## Reason 5: the timeframe mismatch

A stop set from a 5-minute chart, on a trade based on the daily chart, will be hit by intraday swings that mean nothing on the daily. Place the stop on the timeframe that justified the trade.

## Reason 6: news and gaps

Stops held through results, data releases or weekends can be hit by moves no sensible distance would survive. That is a risk to plan for with size and timing.

## Worked example

A trader buys at 50.00 with a stop at 49.70, 0.30 away, on a share with an ATR of 1.20. Size: 285 shares, loss if stopped 99.75 (1R).

A normal pullback of half an ATR, 0.60, takes price to 49.40. The stop is hit. Then price rallies to 52.00.

Redo the plan with a stop beyond the recent swing low at 48.60, so 1.40 away:

- Loss per share = 1.40 + 0.05 = 1.45. Size = 100 / 1.45 = 68.97, rounded down to 68 shares.
- Loss if stopped = 68 x 1.45 = 98.60, still about 1R.
- The 0.60 pullback does not reach the stop. At 52.00, net gain = (52.00 - 50.00 - 0.05) x 68 = 132.60, or +1.33R.

The wider stop did not raise the risk. It lowered the size. That is the only correct way to "give a trade more room": at entry, with smaller size. Moving an existing stop further away after entry raises the risk and is a mistake.

## What not to do

- Do not widen the stop after entry. That changes 1R mid-trade.
- Do not remove the stop. A missing stop is not "never hit"; it is unlimited loss.
- Do not keep the tight stop and add size. That makes commission an even bigger share of each result.

## Verdict

Stops that keep getting hit usually sit inside normal noise, on an obvious level, or without room for the spread. Place the stop beyond the level, with a buffer measured against ATR, decide it before entry and size down so 1R stays at the money you meant to risk. Then accept that a fair share of stops will still be hit, because some trades are simply wrong.
