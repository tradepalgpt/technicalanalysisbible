---
slug: should-you-move-your-stop-loss-further-away
title: "Should you ever move your stop loss further away?"
description: No. Widening a stop after entry raises your risk beyond 1R. The maths of what it does to losses and expectancy, and what to do instead.
query: should you move your stop loss further away
pillar: stop-losses-and-risk-guide
publish: 2027-08-11
reviewed: 16 November 2026
guides: [stop-loss, break-even-stop, trailing-stop]
siblings: [when-to-move-stop-to-break-even, mental-stop-vs-hard-stop]
value: [table, example, verdict]
---

No. Once a trade is open, a stop should only move closer to price, never further away. Widening it raises the loss beyond the 1R you planned, and the trade you are now in is not the trade you sized.

## Why widening breaks the plan

A [stop loss](/stop-loss/) does two jobs. It marks the price where your trade idea is wrong, and it fixes the size of the position. Position size is worked out from the stop distance: size = money at risk / loss per unit. Move the stop further away and the loss per unit grows while the size stays the same. The money at risk goes up.

Widening a stop does not make the trade less risky. It makes it more risky, at the moment you are least able to judge it calmly.

## Worked example

Account 10,000, risk 1% = 100.

- Filled at 100.00, stop at 98.00. Loss per share at the stop = 2.00, so size = 100 / 2.00 = 50 shares. 1R = 50 x 2.00 = 100, fixed at the fill. Commission is 0.06 per share round trip, shown on top of the result. A clean stop-out is exactly -1R (100), or 103 with commission (-1.03R).
- Price falls to 98.50. The trader moves the stop to 96.00 "to give it room".

| Stop | Loss per share on price | Loss on 50 shares | In original R (1R = 100) | With 0.06 commission on top |
|---|---|---|---|---|
| 98.00 (planned) | 2.00 | 100.00 | -1.00R | -1.03R |
| 97.00 | 3.00 | 150.00 | -1.50R | -1.53R |
| 96.00 | 4.00 | 200.00 | -2.00R | -2.03R |
| 94.00 | 6.00 | 300.00 | -3.00R | -3.03R |

If price then falls to 96.00, the trader loses 200 on price, plus 3 of commission: 203, about twice what the plan allowed. 1R stays at 100, because it was fixed at the fill.

## What it does to expectancy

Take a strategy with a 40% win rate, wins of +2R and losses of -1R.

Expectancy = 0.4 x 2 - 0.6 x 1 = +0.2R per trade.

Now suppose that on every loser the trader widens the stop and the loss becomes -2R:

Expectancy = 0.4 x 2 - 0.6 x 2 = -0.4R per trade.

A strategy that made money now loses it, with the same entries. Sometimes widening "saves" a trade that comes back. But the losses it creates are bigger than the losses it avoids, and they arrive in the trades that were already going wrong.

## The arguments for widening, and the answers

| Argument | Answer |
|---|---|
| "The stop was too tight, it will get hit by noise." | Then it was placed badly. Fix the method for the next trade, for example with an ATR-based distance and smaller size. |
| "Volatility has risen." | Rising volatility means the trade is riskier, so the case for a smaller loss is stronger, not weaker. |
| "There is a better level just below." | That level should have been chosen before entry. If the idea is still good, close the trade and re-enter later with a new stop and a new, smaller size. |
| "I am sure it will turn." | Being sure is not new information. The stop is there for the times you are wrong. |

## What to do instead

1. **Place the stop properly at entry.** Put it beyond the level that proves the idea wrong, with a buffer, and size from that distance.
2. **Accept the loss when it is hit.** A clean full stop is exactly -1R, with commission shown on top, which is what you planned.
3. **Re-enter if the setup returns.** A new trade gets a new stop and a new size. That keeps each trade at 1R.
4. **Only tighten after entry.** Moving the stop to a [break-even stop](/break-even-stop/) or using a [trailing stop](/trailing-stop/) reduces risk. Those moves are fine. Moving it away is not.

## The one change that is not widening

Some brokers widen spreads at quiet times or around news, and a stop can be triggered by a spike in the spread. The fix is to plan for that before entry: place the stop with enough buffer to cover a normal spread spike and size for it. It is not a reason to move a stop away once the trade is running.

## Common mistakes

- Cancelling the stop "just for now" during a fast move.
- Widening a stop and then adding to the position, which raises risk twice.
- Recording a widened loss as -1R because it was "one trade". Record the real loss in original R.
- Calling a widened stop a "mental stop". It is no stop.

## Verdict

Never move a stop further away after entry. It turns a planned 1R loss into 1.5R, 2R or more, and it can turn a strategy with a positive expectancy into a losing one. If a stop was placed badly, learn from it on the next trade. Stops only ever tighten.
