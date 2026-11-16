---
slug: best-moving-average-for-day-trading
title: What is the best moving average for day trading?
description: No single moving average is best for day trading. How the common intraday choices compare, how bar size changes a period, and a plain way to choose.
query: best moving average for day trading
pillar: moving-averages
publish: 2027-04-23
reviewed: 16 November 2026
guides: [exponential-moving-average, vwap, time-frames, hull-moving-average]
siblings: [best-ema-for-scalping, 9-ema-vs-20-ema]
value: [table, example, verdict]
---

There is no single best moving average for day trading. The most common choices are a 9 or 20 EMA on 5-minute charts, often next to VWAP. What matters more than the type is that the period suits your bar size and holding time, and that you avoid using it in choppy midday trading.

## Why "best" is the wrong question

Every average trades smoothness for delay. A fast line catches turns early and gets shaken by noise. A slow line ignores noise and turns late. A day trader holding for twenty minutes needs a different balance from one holding for four hours. So the useful question is: which average fits the move you are trying to catch?

There is also no evidence we know of that one intraday period beats its neighbours in a way you can rely on. A 9 EMA and a 10 EMA on a 5-minute chart are almost the same line. Choosing between them is not where an edge comes from.

## What day traders commonly use

| Choice | Typical chart | What it does well | Weak spot |
|---|---|---|---|
| 9 EMA | 1 to 5 minutes | Hugs price; shows short pushes | Crosses constantly in chop |
| 20 or 21 EMA | 5 to 15 minutes | Trend line for pullbacks | Late at turns on 1-minute charts |
| 50 EMA or SMA | 5 to 15 minutes | Session trend context | Rarely tested in quiet sessions |
| 200 SMA | 5 minutes | Multi-day context | Long warm-up; can be far from price |
| [VWAP](/vwap/) | Any intraday | The session's volume-weighted "fair" price | Resets daily; weak early in the session |
| [Hull](/hull-moving-average/) | 1 to 5 minutes | Fast turns, smooth line | Overshoots; whips in ranges |

These are conventions, not findings. The [exponential moving average](/exponential-moving-average/) dominates because it reacts quickly and because the 9, 20 and 21 have become shared reference points.

## VWAP is not a moving average, but it often does the job

VWAP is the average price of the session so far, weighted by volume. It starts fresh each day and has no fixed window. Many day traders treat it as their main line because it answers a direct question: is price above or below where most of today's volume traded? An EMA does not know where the session started. VWAP does.

A common pairing is VWAP for session bias plus a 9 or 20 EMA for the short-term trend. See [VWMA vs VWAP](/answers/vwma-vs-vwap/) for how VWAP differs from a volume-weighted moving average.

## Bar size changes what a period means

On a 5-minute chart, a 20-period average covers 100 minutes. On a 1-minute chart, it covers 20 minutes. On a 15-minute chart, five hours. The same number describes three different trends. See [time frames](/time-frames/).

A simple conversion helps when you want the "same" line on a different chart: periods × bar minutes = the span in minutes. A 20 EMA on 5-minute bars spans about 100 minutes, so roughly a 100 EMA on 1-minute bars or a 7 EMA on 15-minute bars. The lines will not match exactly, but they describe a similar slice of time.

| Line | 1-minute | 5-minute | 15-minute |
|---|---|---|---|
| About 20 minutes | 20 | 4 | 1 to 2 |
| About 100 minutes | 100 | 20 | 7 |
| About one stock session (6.5 h) | 390 | 78 | 26 |

## The midday problem

Intraday averages share a weak spot: the quiet hours. In many markets, volume and range are highest near the open and close and lower in the middle of the session. In the quiet stretch, price drifts sideways and a short EMA crosses back and forth. Each cross can look like a signal.

Common filters traders use:

- Only take signals when the average itself is sloping, not flat.
- Only trade in the direction of the session's position against VWAP.
- Skip signals when the recent range is small compared with the day's average range.

Each filter cuts trades. That is the point.

## A worked example in R

A trader uses a 5-minute chart, a 20 EMA and VWAP. Rule: in a session where price is above VWAP and the 20 EMA is rising, buy a pullback to the 20 EMA that ends with a bullish close.

- 10:20: price is 251.40, above VWAP at 249.80. The 20 EMA is 250.90 and rising.
- 10:35: price dips to 250.70, then the bar closes at 251.10.
- Entry: 251.10. Stop: below the dip and a small buffer, 250.50. Risk = 0.60 = 1R.
- Target: the morning high at 252.30, a gain of 1.20, or 2R.

Costs matter more in day trading than anywhere else. If the spread and commission together cost 0.06 per share, that is a tenth of the risk on every trade. Over many trades that adds up. Any rule should be judged after costs.

## How to choose

1. Decide your holding time (for example, 15 to 60 minutes).
2. Pick a bar size where that holding time is roughly 5 to 20 bars.
3. Pick a common average that changes direction about as often as you want to change your mind. On most setups that ends up as a 9 or 20 EMA.
4. Add VWAP if you trade a single session.
5. Fix the choice and judge it over many trades, with a written rule, before changing anything.

## Verdict

For most day traders, a 9 or 20 EMA on a 5-minute chart, read alongside VWAP, is a sensible default. It is not the best because it is magic; it is reasonable because it fits a typical holding time and is widely watched. The type of average matters less than the bar size, the filter for quiet hours and the costs. More detail on types is in [the moving averages guide](/guide/moving-averages/).
