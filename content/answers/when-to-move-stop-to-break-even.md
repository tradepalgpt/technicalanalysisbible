---
slug: when-to-move-stop-to-break-even
title: "When should you move your stop to break-even?"
description: Common break-even triggers, what a break-even stop really costs once spread and commission are counted, and the trade-off it makes.
query: when to move stop loss to break even
pillar: stop-losses-and-risk-guide
publish: 2027-08-13
reviewed: 16 November 2026
guides: [break-even-stop, stop-loss, trailing-stop]
siblings: [what-is-a-trailing-stop, should-you-move-your-stop-loss-further-away]
value: [table, example, verdict]
---

Common rules move the stop to break-even once price has gone 1R in your favour, or once it clears the next swing point. There is no correct trigger: moving early protects more trades from a full loss but stops out more trades that would have gone on to win.

## What a break-even stop is

A [break-even stop](/break-even-stop/) is a [stop loss](/stop-loss/) moved to the entry price after the trade has moved in your favour. It is a tightening move, so it fits the rule that stops only move closer to price after entry, never further away.

The catch is in the name. A stop at the exact entry price does not break even. Spread and commission were paid on the way in and are paid again on the way out, and the exit may slip. A stop at entry usually closes the trade at a small loss.

## Worked example: the real cost

- Buy at 100.00 with a stop at 98.00. 1R = 2.00 per share.
- Spread plus commission for the round trip: 0.06 per share = 0.03R.
- Price rises to 102.00 (+1R). The trader moves the stop.

| New stop | Exit price if hit | Net per share after 0.06 costs | Result in R |
|---|---|---|---|
| 100.00 (entry) | 100.00 | -0.06 | -0.03R |
| 100.06 (entry + costs) | 100.06 | 0.00 | 0.00R |
| 100.10 | 100.10 | +0.04 | +0.02R |
| 101.00 (half way) | 101.00 | +0.94 | +0.47R |

If the stop fills with 0.04 of slippage, the "break-even" stop at 100.00 gives -0.10 per share, or -0.05R. A true break-even stop sits at entry plus costs, with some allowance for slippage.

## Common triggers

| Trigger | How it works | Trade-off |
|---|---|---|
| After +1R | Move to entry plus costs once open profit equals the initial risk | Simple and testable; ignores structure |
| After a new swing | Move once price makes a new swing high (long) and pulls back | Fits the chart; slower to trigger |
| After a set number of bars | Move after N bars if the trade is in profit | Links the move to time, not price |
| Past a level | Move once price closes beyond the nearest resistance | Waits for the obvious barrier to clear |
| Never | Keep the initial stop until target or a trailing exit | Full losses more often; fewer winners cut short |

## The trade-off in R

Moving to break-even changes the shape of results. Some trades that would have lost -1R now close near 0R. Some trades that would have dipped back to entry and then gone on to +2R now close near 0R too. Whether the swap helps depends on how often each happens in your market and timeframe, and that can only be measured by testing in R.

A simple way to see it: suppose one trade dips back to entry before reaching its +2R target, and another dips back to entry and then goes on to hit the original stop.

| Trade | No break-even move | Break-even at +1R (entry + costs) |
|---|---|---|
| A: dips to entry, then hits +2R target | +2R (less costs) | 0R |
| B: dips to entry, then hits original stop | -1R (plus costs) | 0R |

If A-type trades are more common than B-type trades in your sample, the break-even move costs you. If B-type are more common, it helps. We have not tested this yet, and published results differ by market and method, so no general answer is given here.

## Good practice

- Set the break-even rule before entry, so it is not an emotional decision mid-trade.
- Place the stop at entry plus costs, not at entry.
- Leave room for normal noise. Moving to break-even when price is only a fraction of an ATR above entry invites an early exit.
- Never move the stop back down after moving it up. That is widening, and it is a mistake.
- Consider a [trailing stop](/trailing-stop/) instead if you want to lock in gains progressively rather than in one jump.

## Common mistakes

- Calling a stop at entry "no risk". Costs and gaps still apply.
- Moving to break-even within a bar or two of entry, so most trades close at about 0R.
- Counting break-even exits as wins in your stats.
- Moving the stop back down after a break-even exit "nearly happened".

## Verdict

Moving to break-even is a reasonable tightening rule, often triggered at +1R or after a new swing. Put the stop at entry plus costs, decide the trigger in advance and test it in R. It reduces full losses but also cuts some winners short; only your own tested results can say which effect is bigger.
