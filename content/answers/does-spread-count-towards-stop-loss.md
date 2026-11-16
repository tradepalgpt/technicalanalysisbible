---
slug: does-spread-count-towards-stop-loss
title: "Does spread count towards your stop loss?"
description: Yes. The spread is paid on every trade and can trigger stops your chart never touched. How it affects 1R, longs, shorts and sizing.
query: does spread count towards stop loss
pillar: stop-losses-and-risk-guide
publish: 2027-08-20
reviewed: 16 November 2026
guides: [stop-loss, position-sizing, structure-stop]
siblings: [what-is-1r-in-trading, why-does-my-stop-loss-keep-getting-hit]
value: [table, example, verdict]
---

Yes. The spread is a real cost on every trade. Because 1R is measured from the real fill, and a long fills at the ask, the spread sits inside 1R through the fill price, so every stopped-out loss is bigger than the chart distance suggests. It can also trigger a stop that the price on your chart never reached, especially on short trades.

## Why the chart hides the spread

Most charts show the bid price. But you buy at the ask, which is higher, and sell at the bid. The gap between them is the spread.

- A **long** trade buys at the ask. Its [stop loss](/stop-loss/) is a sell order, so it triggers and fills on the bid.
- A **short** trade sells at the bid. Its stop is a buy order, so it triggers and fills on the ask, which is not drawn on a bid chart.

So a long trade starts the spread behind the chart. A short trade's stop can be hit when the ask touches it, even if the bid line on your chart stayed below.

## Worked example: a long trade

A trader on a dollar account sees EUR/USD at 1.0850 on the chart (the bid). The ask is 1.0851, a 1 pip spread. Commission is 7 dollars per lot round turn. The plan: buy, with a stop at 1.0820, risking 100 dollars (1R).

The trader measures 30 pips from the chart and sizes for that: 100 / (30 x 10) = 0.33 lots.

What actually happens:

- Buy fills at the ask, 1.0851. That fill fixes 1R: 31 pips x 3.30 dollars per pip = 102.30 dollars. The spread is inside 1R through the fill price.
- Stop sells at the bid, 1.0820. Loss on price = 102.30 dollars = exactly -1R.
- Commission comes on top: 7 x 0.33 = 2.31 dollars. Total loss = 104.61 dollars = -1.02R.

The R record is honest, but the money is not what the trader planned: 1R turned out to be 102.30, not 100, because the sizing ignored the spread. Over 40 losing trades, that is about 92 dollars more at risk than the plan said.

Sized from the real fill: the fill will be 31 pips from the stop, so size = 100 / (31 x 10) = 0.3226, rounded down to 0.32 lots. 1R = 31 x 3.20 = 99.20 dollars. A clean stop-out loses exactly that, -1R, plus 2.24 dollars of commission on top (101.44 dollars in all, -1.02R).

Some traders size a little smaller so commission fits the budget too: 100 / (31 x 10 + 7) = 0.315, rounded down to 0.31 lots. That lowers the money at risk; it does not change what 1R is. 1R is now 31 x 3.10 = 96.10 dollars, a clean stop-out is still exactly -1R, and commission of 2.17 still comes on top (98.27 dollars, -1.02R). [Position sizing](/position-sizing/) from the real fill is what keeps 1R at the money you meant to risk.

## Worked example: a short trade

The bid chart shows a swing high at 1.0880. A trader shorts and places the stop at 1.0882, 2 pips above the high, as a [structure stop](/structure-stop/).

- On a normal 1 pip spread, the stop triggers when the ask reaches 1.0882, which means the bid is at 1.0881. That is just above the high, as planned.
- At the daily rollover, the spread widens to 5 pips for a few minutes. Now the ask reaches 1.0882 when the bid is only 1.0877. The stop is hit, and the chart shows the bid never got back to the swing high.

Nothing was wrong with the broker. The stop was hit on the ask, which the chart does not draw. The buffer of 2 pips was smaller than the spread at that hour.

## How big is the spread in R?

The same spread is a very different share of the risk depending on the chart stop distance.

| Chart stop distance | 1 pip spread, compared with the stop | 2 pip spread | 3 pip spread |
|---|---|---|---|
| 10 pips | 0.10R | 0.20R | 0.30R |
| 20 pips | 0.05R | 0.10R | 0.15R |
| 50 pips | 0.02R | 0.04R | 0.06R |
| 100 pips | 0.01R | 0.02R | 0.03R |

Tight stops make the spread a large share of every trade. A strategy with a 10 pip chart stop and a 2 pip spread pays a spread worth a fifth of its chart risk on every trade before commission, win or lose.

## What to do about it

1. **Measure 1R from the real fill.** For a long, from the ask at entry to the bid at the stop.
2. **Size from the fill-to-stop distance.** 1R = that distance x size, with nothing added. Commission is shown on top of the result, and slippage and gaps are recorded as they happen. If you like, size a little smaller to allow for them; that lowers the money at risk without changing what 1R is.
3. **Add the spread to short stops.** Place the stop beyond the level by at least the normal spread plus a buffer.
4. **Know when spreads widen.** Rollover, thin hours and news releases often widen spreads. Plan the buffer for the trading hours you hold through.
5. **Show the ask line.** Most platforms can draw it. It makes the short-side risk visible.

Never widen the stop after entry to dodge a spread spike. Build the buffer in before entry and size for it.

## Common mistakes

- Measuring stop distance from the bid chart for a long trade and forgetting you bought at the ask.
- Placing a short stop exactly at the swing high on a bid chart.
- Recording a stop-out as -1R when commission, slippage or a gap made it -1.02R or worse.
- Testing a strategy on bid-only data with no spread, which makes every trade look better.

## Verdict

The spread always counts. It is paid on every trade, it enlarges every loss and it can trigger short stops your chart never shows touched. Measure 1R from the real, side-correct fill so the spread sits inside it, show commission on top, and give short stops a buffer bigger than the widest spread you are likely to hold through.
