---
slug: what-is-a-measured-move
title: What is a measured move?
description: A measured move assumes the next leg of a move will roughly equal an earlier one. The two common versions, how to draw them, and a worked example in R.
query: what is a measured move in trading
pillar: chart-patterns
publish: 2027-02-26
reviewed: 16 November 2026
guides: [measured-move, abcd-pattern, profit-target]
siblings: [how-to-calculate-chart-pattern-price-target, bull-flag-vs-pennant]
value: [table, example, verdict]
---

A measured move is a price projection that assumes a coming move will be about as large as an earlier one. It is used in two ways: projecting a pattern's height from its breakout, and projecting a second leg equal to the first after a pullback. It is a rough guide to size, not a forecast.

## The idea

Markets often move in legs: a push, a pause, another push. The [measured move](/measured-move/) assumes the legs will be roughly similar in size. If price rose 10 points, paused, and is now rising again, a measured move projects another 10 points from the end of the pause.

The idea is old. It appears in Edwards and Magee's *Technical Analysis of Stock Trends* and in most chart-pattern books since. It is a rule of thumb that gives traders a starting point for a target.

## The two common versions

| Version | What you measure | Where you project from | Example |
|---|---|---|---|
| Pattern height | The height of a pattern at its widest point | The breakout point | Head-to-neckline height projected from the neckline break |
| Equal legs | The first leg of a move | The end of the pullback | First rise of 10, pullback, second rise projected as 10 |

The equal-legs version is also called a measured move up (or down), an [ABCD pattern](/abcd-pattern/), or "leg one equals leg two". Some traders use a Fibonacci extension instead, such as projecting 1.618 times the first leg, which turns the same idea into a range of targets.

The pattern-height version is covered in full in our answer on [calculating a chart pattern's price target](/answers/how-to-calculate-chart-pattern-price-target/), with a table for each pattern.

## Flags: both versions at once

A flag shows both ideas. The pole is the first leg. The flag is the pause. The measured target is the pole length added to the breakout of the flag. That is pattern height and equal legs combined. The [bull flag vs pennant](/answers/bull-flag-vs-pennant/) answer works through one.

## Worked example in R

This is an illustration with round numbers, not a real trade.

An index fund rises from 200 to 230 over six weeks (leg A to B: 30 points). It pulls back to 218 over three weeks (B to C). It then starts rising again and closes above a small trendline at 222.

- Measured move: C + (B − A) = 218 + 30 = 248.
- Entry at next open: 222.50.
- Stop below the pullback low: 217.50. Risk: 5.00.
- Reward to the measured target: 25.50. **5.1R.**

That looks generous. Now check what stands between entry and target:

- The prior high at 230 is a likely pause. Reward to 230: 7.50, **1.5R.**
- A round number at 240 might slow things. Reward to 240: 17.50, **3.5R.**

A common plan is to take part of the position near the first obstacle, move the stop to break-even, and hold the rest towards the measured target. The [profit target](/profit-target/) guide and the [scaling out](/scaling-out/) guide cover the options.

## How accurate is it?

Not very, taken as an exact price. Legs vary a lot in length. Strong trends often produce second legs that run well past the first; weak ones fall short. A measured move tells you the size of move that would be normal if the market kept the same rhythm. That is useful for planning, especially for deciding whether a trade is worth taking in R. It is not a price where the market will stop.

We have not tested measured moves. Thomas Bulkowski's *Encyclopedia of Chart Patterns* reports how often pattern targets were reached in US stocks under his rules; we do not quote those figures here.

## Common mistakes

- **Measuring the wrong leg.** Use the leg that belongs to the current move, not the whole trend since the last major low. Measuring from too far back inflates the target.
- **Holding to the target no matter what.** If price stalls at an obvious level well before the target, the measured move does not override what the chart is showing.
- **Ignoring the stop.** A distant target with a wide stop can still be worth less than 1R.
- **Using it in a range.** Equal legs assume a trend. In a sideways market, the "second leg" usually stops at the range edge.

## Measured moves and time

Some traders also measure time: if the first leg took six weeks, they expect the second to take a similar time. That is weaker still, and many writers treat it as a loose guide at best.

## Verdict

A measured move is a simple way to estimate how far a move might go: either the pattern's height projected from the break, or a second leg equal to the first. It is a planning tool for judging a trade in R, not a forecast of where price will stop. Check the levels in between, decide in advance how you will exit, and do not let a distant target override what price is doing. See the [chart patterns guide](/guide/chart-patterns/) for measured targets on each pattern.
