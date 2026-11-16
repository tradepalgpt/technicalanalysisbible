---
slug: win-rate-needed-at-1-to-2-risk-reward
title: "What win rate do you need at 1:2 risk-reward?"
description: At 1:2 you break even at a 33.3% win rate before costs. With costs it is higher. The formula, the table and a worked example in R.
query: what win rate do you need for 1:2 risk reward
pillar: stop-losses-and-risk-guide
publish: 2027-08-06
reviewed: 16 November 2026
guides: [risk-reward-ratio, stop-loss]
siblings: [what-is-a-good-risk-reward-ratio, what-is-expectancy-in-trading]
value: [table, example, verdict]
---

At 1:2 risk-reward you break even at a 33.3% win rate, before costs. Once spread, commission and slippage are counted, the real break-even rate is higher, often somewhere in the mid to high 30s depending on how big costs are compared with your stop.

## The formula

With a [risk-reward ratio](/risk-reward-ratio/) of 1:W, a win pays +W R and a loss costs -1R. At the break-even win rate p, the expected result is zero:

p x W - (1 - p) x 1 = 0, so p = 1 / (1 + W)

At 1:2, p = 1 / 3 = 33.3%. You need to win one trade in three just to stand still.

Costs change both sides. If each round trip costs c R:

- a win nets 2 - c
- a loss costs 1 + c
- break-even p = (1 + c) / (1 + 2) = (1 + c) / 3

## Break-even win rate at 1:2 by cost

| Costs per trade (in R) | Net win | Net loss | Break-even win rate |
|---|---|---|---|
| 0 | +2.00R | -1.00R | 33.3% |
| 0.05R | +1.95R | -1.05R | 35.0% |
| 0.10R | +1.90R | -1.10R | 36.7% |
| 0.20R | +1.80R | -1.20R | 40.0% |

A cost of 0.2R sounds high, but it happens easily with tight stops. A 2 pip spread on a 10 pip [stop loss](/stop-loss/) is already 0.2R before commission.

## Expectancy at different win rates

Expectancy is the average result per trade in R. At 1:2:

Expectancy = p x (2 - c) - (1 - p) x (1 + c)

| Win rate | Expectancy, no costs | Expectancy, costs 0.1R |
|---|---|---|
| 30% | -0.10R | -0.20R |
| 33.3% | 0.00R | -0.10R |
| 35% | +0.05R | -0.05R |
| 40% | +0.20R | +0.10R |
| 45% | +0.35R | +0.25R |
| 50% | +0.50R | +0.40R |

A 35% win rate at 1:2 looks like a small edge on paper. With 0.1R of costs it loses money.

## Worked example

A trader takes 100 trades at 1:2 with a 38% win rate. Each round trip costs 0.08R.

- Wins: 38 x (2 - 0.08) = 38 x 1.92 = +72.96R
- Losses: 62 x (1 + 0.08) = 62 x 1.08 = -66.96R
- Net: +6.00R over 100 trades, or +0.06R per trade.

The break-even rate for this trader is (1 + 0.08) / 3 = 36%. A 38% win rate is only 2 percentage points above it. A small fall in win rate, or a small rise in costs, would wipe out the edge. Before costs the same trades would show +14R, which is why ignoring costs gives such a misleading picture.

## What the formula assumes

- **Every win is exactly 2R.** In practice some wins are taken early, at 1.2R or 1.6R, and that lowers the average win. Use your real average win in R, not the planned one.
- **Every loss is exactly -1R, with costs on top.** Gaps and slippage push some losses beyond that. Record them as they happened.
- **The stop is never widened.** If a stop is moved further away after entry, the loss is bigger than 1R and the whole table is wrong. Stops only tighten.

For a mix of win sizes, use the general expectancy formula: average win x win rate - average loss x loss rate.

## Common mistakes

- Treating 33.3% as the target. It is the floor where you make nothing.
- Counting a trade closed at +0.5R as a "win" at 2R in your stats.
- Ignoring costs because they "only" cost a pip or two.
- Judging a win rate from 20 trades. Small samples swing a lot.

## Verdict

At 1:2 the break-even win rate is 33.3% before costs and (1 + c) / 3 with costs. Measure your real average win and loss in R, include every cost, and compare your actual win rate against that higher bar. A comfortable margin above it matters more than the ratio itself.
