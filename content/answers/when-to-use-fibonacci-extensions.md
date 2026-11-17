---
slug: when-to-use-fibonacci-extensions
title: When do you use a Fibonacci extension instead of a retracement?
description: Use a retracement to find where a pullback may stop, and an extension to find where the next leg may reach. When each fits, with a worked example.
query: when to use fibonacci extension vs retracement
pillar: fibonacci-guide
publish: 2027-12-22
reviewed: 17 November 2026
guides: [fibonacci-retracement, fibonacci-extension, profit-target]
siblings: [how-to-calculate-fibonacci-extensions, how-to-draw-fibonacci-retracements]
value: [table, example, verdict]
---

Use a retracement while price is pulling back inside a move, to mark where the pullback might stop. Use an extension once the pullback looks finished and price is moving on, to mark where the next leg might reach. Retracements are mostly used for entries and stops; extensions mostly for targets.

## Definitions first

The definitions themselves are set out side by side in our [Fibonacci retracement vs extension comparison](/compare/fibonacci-retracement-vs-extension/). This answer is about timing: which tool fits which stage of a trade.

## The stage of the move decides the tool

A trend move is usually drawn as three points: the start of the move (A), the end of the first leg (B) and the end of the pullback (C).

| Stage | What you know | Tool | Typical question |
|---|---|---|---|
| Leg A to B just finished | A and B | [Fibonacci retracement](/fibonacci-retracement/) on A to B | How far might price pull back? |
| Pullback under way | A and B, C not yet fixed | Retracement | Is the pullback holding at 38.2%, 50% or 61.8%? |
| Pullback finished, C fixed | A, B and C | Three-point [Fibonacci extension](/fibonacci-extension/) | How far might the next leg go? |
| Price above B, no usable pullback | A and B only | Two-point extension of A to B | Where are levels beyond the old high? |
| Trade open, managing the exit | Entry, stop, levels | Extensions as [profit targets](/profit-target/) | Where to take some or all off? |

## Worked example

A rise runs from A = 100 to B = 150, then pulls back to C = 130.

**Retracement stage.** The A to B move is 50. A 38.2% pullback would reach 150 - 0.382 x 50 = 130.9, and the actual low at 130 is just below it. While price was falling, those levels were the ones to watch.

**Extension stage.** Once C at 130 holds and price turns up, the retracement has done its job. The extension now projects the A to B leg from C:

Target = C + ratio x (B - A)

| Ratio | Calculation | Level |
|---|---|---|
| 1.0 | 130 + 1.0 x 50 | 180.0 |
| 1.272 | 130 + 1.272 x 50 | 193.6 |
| 1.618 | 130 + 1.618 x 50 | 210.9 |
| 2.618 | 130 + 2.618 x 50 | 260.9 |

The 1.0 level is the equal-leg target, the same idea as a [measured move](/answers/what-is-a-measured-move/).

## In R terms

Suppose a long fills at 131.00 (the ask, so the spread is already in the price) with a first stop at 127.00, below C. 1R is 4.00 per unit times the position size. The extension levels then translate into reward multiples before costs:

- 180.0: (180.0 - 131.0) / 4.0 = 12.25R
- 193.6: (193.6 - 131.0) / 4.0 = 15.65R

Those figures show how far each level is from entry in units of risk. They are not forecasts, and distant levels are reached less often than near ones. If the stop is hit cleanly the result is exactly -1R, with commission on top and any slippage or gap making it worse. After the fill the stop may only be tightened.

## When neither fits

- **No clear swing.** In a sideways range, both tools depend entirely on which swing you pick.
- **The pullback goes past 78.6%.** Many traders treat the move as broken; a fresh swing is needed.
- **Price is far beyond 2.618.** Extensions can be drawn further, but there is little textbook basis for more levels.

## Verdict

Retracements answer "where might the pullback end?" and extensions answer "where might the next leg reach?". Switch from one to the other when the pullback low (or high) is fixed. Both tools are only as good as the swing points behind them.
