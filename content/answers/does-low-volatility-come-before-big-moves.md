---
slug: does-low-volatility-come-before-big-moves
title: "Does low volatility come before big moves?"
description: Low volatility often gives way to higher volatility, because volatility clusters and reverts to its average. Why that is, and why it never tells you direction.
query: does low volatility come before big moves
pillar: volatility-guide
publish: 2028-03-08
reviewed: 17 November 2026
guides: [bollinger-squeeze, historical-volatility, atr]
siblings: [what-is-a-bollinger-squeeze, what-is-the-ttm-squeeze]
value: [table, example, verdict]
---

Often, but not on a timetable and not in a known direction. Volatility tends to revert towards its longer-run average, so an unusually quiet spell is more likely to be followed by a busier one than by an even quieter one, but the quiet can last for weeks and the move that follows can go either way.

## Why traders believe it

Two well-documented features of market volatility support the idea.

1. **Clustering.** Quiet days tend to follow quiet days and busy days follow busy ones. Benoit Mandelbrot described this in cotton prices in 1963. Robert Engle's ARCH model (1982) and Tim Bollerslev's GARCH model (1986) were built to capture it, and Engle shared the 2003 Nobel prize in economics partly for this work.
2. **Mean reversion of volatility.** In those models, volatility is pulled back towards a long-run level over time. Very low readings tend to rise; very high readings tend to fall.

Put together, a quiet cluster eventually ends, and when it ends volatility usually rises. That is the idea behind every squeeze indicator, from the [Bollinger squeeze](/bollinger-squeeze/) to the TTM squeeze.

## What the idea does not say

| Claim | Supported? |
|---|---|
| Very low volatility tends not to last forever | Yes, it is what mean reversion means |
| A quiet spell is followed by a busier one at some point | Generally, yes |
| The busier spell starts soon | No, there is no timetable |
| The move will be up (or down) | No, volatility has no direction |
| Every quiet spell ends in a big trend | No, some end in choppy, wide ranges |

The direction part is the one traders most often get wrong. A market can break out of a quiet range upwards, downwards, or both in turn. Bollinger's "head fake" describes the common case where the first move out of a squeeze reverses into the real one.

## A worked illustration

These [ATR](/atr/) readings are made up to show how a quiet spell reads, not taken from a market.

| Week | 14-day ATR | ATR vs its 1-year average of 1.50 |
|---|---|---|
| 1 | 1.40 | 93% |
| 2 | 1.10 | 73% |
| 3 | 0.85 | 57% |
| 4 | 0.80 | 53% |
| 5 | 0.82 | 55% |
| 6 | 1.35 | 90% |
| 7 | 1.90 | 127% |

Weeks 3 to 5 are a quiet cluster: ATR is around half its normal level. Mean reversion suggests it is more likely to rise than keep falling, and in this illustration it does, in weeks 6 and 7. The table says nothing about whether price rose or fell in those weeks. It could equally have been a sharp drop as a sharp rally.

## Why it is hard to trade on its own

- **Timing.** A quiet spell can last far longer than expected. Trades placed early sit and wait, or get stopped out by small noise.
- **Direction.** You still need a separate method to choose long or short.
- **Stops.** Quiet markets tempt tight stops. 1R is the distance from your side-correct fill to the first stop, times size, so a tight stop means a large size. When volatility returns, a fast move or gap through that stop makes the loss bigger than -1R, with commission on top. Stops only tighten after entry; they never widen.

## Measuring it properly

If you want to know how often quiet spells in your market were followed by busier ones, you need to test it: define "quiet" in advance (for example ATR in the lowest fifth of its past year), define "big move", and count across many years and markets, without tuning the rules on the same data you report. This site has not run that study, so we give no figure. Our approach to testing is set out in [methods](/methods/). [Historical volatility](/historical-volatility/) gives a percent-based reading if you want to compare markets.

## Verdict

Yes in the loose sense: low volatility tends to give way to higher volatility because volatility clusters and reverts to its average. No in the sense traders often want: it does not tell you when, and it never tells you which way. Use quiet spells to plan, not to predict, and keep the stop and 1R fixed when the move finally arrives.

More in [the volatility guide](/guide/volatility-guide/).
