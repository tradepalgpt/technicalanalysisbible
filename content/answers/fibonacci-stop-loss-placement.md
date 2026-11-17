---
slug: fibonacci-stop-loss-placement
title: Where do you put a stop loss with Fibonacci?
description: Common Fibonacci stops go beyond the next level or beyond the swing extreme. How each choice changes 1R and position size, worked in R with costs on top.
query: fibonacci stop loss placement
pillar: fibonacci-guide
publish: 2028-01-05
reviewed: 17 November 2026
guides: [stop-loss, fibonacci-retracement, position-sizing, structure-stop]
siblings: [what-is-the-golden-pocket, do-fibonacci-levels-work]
value: [table, example, verdict]
---

The usual textbook places for a stop with a Fibonacci entry are just beyond the next deeper level (often 78.6%) or just beyond the swing extreme the retracement was drawn from. A stop beyond the swing is the most logical, because if price breaks it the swing itself has failed, but it is also the widest.

## The three common choices

For a long entered near the 61.8% [Fibonacci retracement](/fibonacci-retracement/) of a rise:

| Stop placement | Logic | Main weakness |
|---|---|---|
| Just below the entry level (tight) | Small 1R, large size | Ordinary noise around a level often hits it |
| Just below the 78.6% level | Deep retracements still count as a pullback | 78.6% is popular, so stops cluster there |
| Just below the swing low | Below it, the swing used to draw the levels is broken | Widest stop, smallest size |

The last choice is a [structure stop](/structure-stop/): it sits where the chart idea is wrong, not at an arbitrary distance.

## Worked example: same entry, three stops

A rise runs from 100 to 200. The 61.8% retracement is 138.2. A buy limit fills at 138.45 (the ask, so the spread is inside the fill). The trader wants 1R to be 100 in money and sizes the position from the stop distance, as in [position sizing](/position-sizing/).

| Stop | Stop price | Distance from fill | Size for 1R = 100 |
|---|---|---|---|
| Below 61.8% | 135.40 | 3.05 | 32.79 units |
| Below 78.6% (121.4) | 120.90 | 17.55 | 5.70 units |
| Below the swing low (100) | 99.50 | 38.95 | 2.57 units |

The money at risk is the same in all three. What changes is how far price can move before the trade is wrong, and how much each point of profit is worth.

## Worked example: results in R

Take the middle choice and round the size to 10 units, so 1R = (138.45 - 120.90) x 10 = 175.50. Commission is 4 for the round trip.

| Outcome | Exit | Price result | Before commission | After commission |
|---|---|---|---|---|
| Target at the old high, exit at bid | 199.95 | +615.00 | +3.50R | +3.48R |
| Stop hit cleanly | 120.90 | -175.50 | -1.00R | -1.02R |
| Market gaps below stop, fills at 118.00 | 118.00 | -204.50 | -1.17R | -1.19R |

A clean stop is exactly -1R. Commission is shown on top, and the gap makes the loss worse than -1R. None of this is discounted from the loss, and it is recorded as it happened.

## Rules that keep Fibonacci stops honest

- **Set the stop before entry.** If the stop moves before the fill, re-issue the plan with a new 1R and size.
- **Only tighten after the fill.** If you widen a stop from 120.90 to 99.50 after entry, a full loss is about -2.2R of the original plan.
- **Leave room beyond popular levels.** Many traders place stops a little past 78.6% or the swing extreme; a few ticks beyond is common, and the right buffer depends on the market's normal range. An [ATR-style buffer](/stop-loss/) is one way to set it.
- **Trailing is optional.** Some traders move the stop under each new higher swing low as the trade progresses. That only ever tightens.

## Common mistakes

- Placing the stop exactly on a Fibonacci line, where many other stops sit.
- Choosing the tight stop to get a big size, then widening it when price comes close.
- Measuring 1R from the chart price instead of the actual fill, so a clean stop loses more than 1R on paper.
- Picking the stop after seeing where price went.

## Verdict

A stop beyond the swing extreme matches the logic of the retracement best; a stop beyond 78.6% is a common middle ground; a stop just past the entry level is tight and easily hit. Size the trade from whichever you choose so 1R stays fixed in money, never widen it after the fill, and count costs and gaps on top.
