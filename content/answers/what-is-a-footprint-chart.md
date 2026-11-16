---
slug: what-is-a-footprint-chart
title: "What is a footprint chart?"
description: A footprint chart shows the volume traded at the bid and ask at each price inside every bar. How to read one, a worked example, and what it costs to use.
query: what is a footprint chart
pillar: volume-and-order-flow-guide
publish: 2027-10-11
reviewed: 16 November 2026
guides: [footprint-chart, volume-delta, volume-profile]
siblings: [what-is-delta-in-order-flow, can-retail-traders-use-order-flow]
value: [table, example, verdict]
---

A footprint chart splits each candle into price rows and shows how much traded at the bid and at the ask on every row. It combines a candlestick, a small volume profile and order-flow delta in one view, so you can see where inside the bar the trading happened.

## What a footprint shows

A normal candle shows four prices and one volume number. A [footprint chart](/footprint-chart/) opens the candle up. For each price the bar traded at, it shows two numbers:

- Volume traded at the bid (aggressive sellers hitting resting buy orders), usually on the left.
- Volume traded at the ask (aggressive buyers lifting resting sell orders), usually on the right.

The difference on each row is the row's delta, and the sum over all rows is the bar's [volume delta](/volume-delta/). Many platforms also mark the row with the most volume, which works like a tiny [volume profile](/volume-profile/) point of control for that bar.

## Worked example

One five-minute bar on a futures contract, ticks of 0.01:

| Price | Bid volume | Ask volume | Row delta (ask - bid) |
|---|---|---|---|
| 50.04 | 40 | 180 | +140 |
| 50.03 | 120 | 260 | +140 |
| 50.02 | 80 | 310 | +230 |
| 50.01 | 410 | 150 | -260 |
| 50.00 | 220 | 60 | -160 |
| Total | 870 | 960 | +90 |

Total volume is 870 + 960 = 1,830. Bar delta is +90: aggression was close to balanced overall. But the rows tell a sharper story. Sellers were aggressive at the bottom (50.00 and 50.01), and buyers took over from 50.02 up. The heaviest row is 50.01, with 560 traded.

## Imbalances

Many footprint tools highlight "imbalances", usually by comparing diagonally: ask volume at one price against bid volume one tick lower, because a buyer lifting 50.03 is trading against the seller who would have hit 50.02. A common default ratio is 3 to 1, though it is a setting, not a standard.

| Ask at price | Bid one tick lower | Ratio | Imbalance at 3:1? |
|---|---|---|---|
| 50.04: 180 | 50.03: 120 | 1.50 | No |
| 50.03: 260 | 50.02: 80 | 3.25 | Yes, buying |
| 50.02: 310 | 50.01: 410 | 0.76 | No |
| 50.01: 150 | 50.00: 220 | 0.68 | No |

Only 50.03 shows a buying imbalance at the 3:1 setting. Change the ratio to 1.5 and 50.04 would also flag. Change to horizontal comparison and the results differ again.

## Common footprint readings

| Pattern | Typical reading |
|---|---|
| Stacked imbalances (three or more in a row) | Strong one-sided aggression across several prices |
| Large volume at the bar's extreme with little follow-through | Absorption: aggression met by passive orders |
| Very low volume at the high or low | The move ran out of participants: "unfinished" or "finished" auction, depending on the school |
| Delta opposite to the bar's direction | Price moved against the aggressors |

These are standard order-flow ideas taught in many courses. They describe the bar; none of them is a tested edge on its own, and readings vary by school.

## What it takes to use one

- **Data.** Footprints need tick-by-tick trades with bid and ask. That is available for exchange-traded futures and some stocks, usually through a paid data feed.
- **Software.** Most charting packages need an add-on or a specialist platform.
- **Market.** On spot forex there is no central tape, so a footprint shows one feed only. On crypto it shows one exchange only.
- **Time.** Footprints are dense. Reading them well takes screen time, and they are mainly used on short timeframes.

For the wider question, see [can retail traders use order flow?](/answers/can-retail-traders-use-order-flow/).

## Common mistakes

- Treating every imbalance as a signal. On busy markets imbalances appear constantly.
- Ignoring the settings: ratio, comparison direction and minimum volume all change what is flagged.
- Using footprints on data without real bid/ask classification.
- Reading the footprint without context such as trend, level and time of day.

## Verdict

A footprint chart shows the bid and ask volume at each price inside each bar, so you can see where aggression and absorption happened. It is the most detailed view of order flow most traders will use. It needs good exchange data and practice, its signals depend on settings, and it describes what happened rather than predicting what comes next.
