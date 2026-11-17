---
slug: what-are-fibonacci-time-zones
title: What are Fibonacci time zones?
description: Vertical lines spaced a Fibonacci number of bars from a chosen start. How Fibonacci time zones are drawn, a worked count, and their limits.
query: what are fibonacci time zones
pillar: fibonacci-guide
publish: 2028-01-07
reviewed: 17 November 2026
guides: [fibonacci-time-zones, fibonacci-fan, swing-highs-lows]
siblings: [what-is-a-fibonacci-fan]
value: [table, example, verdict]
---

Fibonacci time zones are vertical lines placed a Fibonacci number of bars after a chosen starting point: 1, 2, 3, 5, 8, 13, 21, 34, 55, 89 bars and so on. They mark dates when, in theory, a swing high or low might be more likely. They are much less used than price retracements, and there is little evidence that they help.

## How they are drawn

[Fibonacci time zones](/fibonacci-time-zones/) need only one input: a starting bar, usually a major [swing high or low](/swing-highs-lows/). The tool then draws a vertical line at each Fibonacci count of bars after that start. Many platforms let you set a second point to define the unit, so the first gap can be one bar, one day, or a larger block.

Price plays no part in the calculation. The lines say "when", never "where".

## Worked example: counting the zones

A swing low prints on bar 0 of a daily chart. Counting trading days, the zone lines fall on:

| Fibonacci number | Bar of the line | Gap from the previous line |
|---|---|---|
| 1 | 1 | 1 |
| 2 | 2 | 1 |
| 3 | 3 | 1 |
| 5 | 5 | 2 |
| 8 | 8 | 3 |
| 13 | 13 | 5 |
| 21 | 21 | 8 |
| 34 | 34 | 13 |
| 55 | 55 | 21 |
| 89 | 89 | 34 |

The early lines are packed together, so almost any bar in the first two weeks is on or next to one. Later, the gaps widen and each line becomes a more specific claim. Some platforms start the count at 0 and draw a line on the starting bar too; others skip the repeated 1. Check yours.

## How traders read them

- A line arriving while price is near a [Fibonacci price level](/answers/how-to-draw-fibonacci-retracements/) is sometimes treated as a sign a turn is more likely.
- Some traders use them as a reminder to review an open trade rather than as a signal.
- Others combine them with a [Fibonacci fan](/fibonacci-fan/), which mixes price and time in one tool.

## Why they are less used

**The start point decides everything.** Move the start by one bar and every line moves. Two traders with different swing choices get different zone dates.

**Early lines cover most bars.** Six of the first 13 bars carry a line (bars 1, 2, 3, 5, 8 and 13), and bar 0 does too on some platforms, so a turn in that window is likely to land on one.

**Counting is ambiguous.** Calendar days, trading days and bars on a 24-hour market give different counts for the same period. Weekends and holidays shift the dates.

**Testing is thin.** We know of no independent, rules-based study showing that turns cluster on Fibonacci time zones more than on other evenly or randomly spaced dates. A fair test would compare them with lines at non-Fibonacci counts from the same start points.

## Using them without fooling yourself

- Fix the start-point rule in advance, such as "the lowest low of the last 100 bars".
- Decide whether you count trading days or calendar days, and keep to it.
- Treat a line as a time to look, not a time to act.
- Plan any trade in R as usual: the entry, first stop and size come from price, not from the time zone.

## Verdict

Fibonacci time zones mark bars a Fibonacci count after a chosen start. They are simple to draw but depend entirely on the start bar and the counting method, and the early lines are so close together that they appear to hit often by chance. They are a minor tool with no established edge; most traders who use Fibonacci at all stick to price levels.
