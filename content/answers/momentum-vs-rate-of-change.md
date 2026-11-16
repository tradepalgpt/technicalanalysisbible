---
slug: momentum-vs-rate-of-change
title: "Momentum vs rate of change: are they the same?"
description: Momentum and rate of change draw the same shape on one chart but differ in units. Momentum is in price points, ROC in per cent, which matters across markets.
query: momentum vs rate of change
pillar: rsi-and-momentum-oscillators
publish: 2027-04-14
reviewed: 16 November 2026
guides: [momentum-indicator, rate-of-change, ppo, macd]
siblings: [macd-vs-rsi-which-to-use, how-many-oscillators-should-you-use]
value: [chart, table, example, verdict]
chart: rate-of-change
---

Almost. Momentum is today's close minus the close n bars ago, in price points. Rate of change is the same difference divided by the old close, in per cent. On one chart over a short period they have nearly the same shape. They differ when you compare markets, or a market whose price has changed a lot.

## The two formulas

**[Momentum](/momentum-indicator/)** = close - close n bars ago.

**[Rate of change (ROC)](/rate-of-change/)** = 100 x (close - close n bars ago) / close n bars ago.

ROC is momentum divided by the old close, times 100. The old close changes slowly from bar to bar, so on a single chart over a few months the two lines rise and fall together.

A third version adds to the confusion. Some platforms plot momentum as a ratio:

Momentum (ratio) = 100 x close / close n bars ago

That line centres on 100 instead of 0. It is ROC plus 100. If your platform's "Momentum" hovers around 100, it is this version.

| | Momentum (difference) | Momentum (ratio) | Rate of change |
|---|---|---|---|
| Formula | C - C(n) | 100 x C / C(n) | 100 x (C - C(n)) / C(n) |
| Units | Price points | Per cent of old price | Per cent change |
| Centre line | 0 | 100 | 0 |
| Default period | 10 (some 14) | 10 (some 14) | 12 (some 9 or 10) |
| Comparable across markets | No | Yes | Yes |

## A worked example: two markets

Two shares both rise over 10 days.

- **Share A** goes from 10.00 to 11.00.
- **Share B** goes from 1,000 to 1,010.

| | Share A | Share B |
|---|---|---|
| Momentum (10) | +1.00 | +10.00 |
| ROC (10) | +10.0% | +1.0% |

Momentum says Share B moved ten times as fast. ROC says Share A did. ROC's answer is the one most traders mean: Share A's holders made 10 per cent; Share B's made 1 per cent. Momentum in price points is only meaningful within one market at one price level.

## The same problem within one market over time

A share that traded at 20 five years ago and trades at 200 today has momentum readings ten times larger now for the same percentage moves. A momentum chart over that span looks as if the stock has become wildly more volatile. ROC would show the moves at their true relative size.

This is why ROC is generally the more useful of the two for long histories. It is the same reason [PPO](/ppo/) exists alongside [MACD](/macd/): MACD is in price units, PPO in per cent.

## What they share

Both have the same weakness: they compare today with exactly one bar in the past. Two things move the line:

1. Today's close changes.
2. The bar n bars ago drops out and a new one takes its place.

The second one is the "drop-off effect". Suppose a share jumped 8 per cent on one day, ten days ago. Today, that day drops out of the 10-day comparison and ROC falls sharply, even if today's price did not change. A trader reading the dip as "momentum fading" is reading the anniversary of an old move.

Ways traders deal with this:

- **Smoothing.** A moving average of ROC or momentum softens the drop-off.
- **Longer periods.** The jump still happens, but it is a smaller share of the total.
- **Averaged oscillators.** MACD, PPO and the true strength index compare averages rather than single bars, so no single old bar dominates.

## How they are read

Both are unbounded and centred on zero (or 100 for the ratio version).

- **Above zero:** price is higher than n bars ago. Below zero: lower.
- **Rising:** the move over the window is getting larger. Falling: smaller.
- **Zero-line cross:** price has crossed its level of n bars ago.
- **Divergence:** a new price high with a lower ROC peak means the latest n-bar move was smaller than the previous one.

There are no fixed overbought or oversold levels. For ROC, some traders mark the extremes the market has reached in the past year and treat readings near them as stretched. Those levels are specific to each market and change over time.

## Which to use

| You want to | Use |
|---|---|
| Compare the speed of different markets | ROC |
| Look at a long history with large price changes | ROC |
| See the raw point move on one chart, for one short period | Momentum (difference) |
| Match a platform's built-in indicator centred on 100 | Momentum (ratio) |

In practice, ROC does everything momentum does and also works across markets and time. Momentum in points survives mostly because it is the simplest possible calculation and is built into older platforms.

## Verdict

Momentum and rate of change are the same idea in different units: points against per cent. On one chart over a short span they look the same. Across markets or long histories only ROC gives fair comparisons, so it is the better default. Both suffer from the drop-off effect of comparing with a single old bar; if that bothers you, an averaged oscillator such as PPO is the natural next step. Our [pillar guide](/guide/rsi-and-momentum-oscillators/) places both within the wider family.
