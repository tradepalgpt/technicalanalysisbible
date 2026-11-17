---
slug: do-fibonacci-levels-work
title: Do Fibonacci levels actually work?
description: There is no solid independent evidence that Fibonacci levels predict turns. Why they seem to work, the arithmetic of near misses, and how to test them fairly.
query: do fibonacci levels actually work
pillar: fibonacci-guide
publish: 2028-01-03
reviewed: 17 November 2026
guides: [fibonacci-retracement, support-and-resistance, confluence]
siblings: [which-fibonacci-levels-matter-most, fibonacci-vs-support-and-resistance]
value: [table, example, verdict]
---

There is no solid, independent evidence that Fibonacci levels predict where price will turn better than other levels would. They seem to work partly because many traders watch them, and partly because five levels spread across a move leave price close to one of them much of the time.

## Why they seem to work

| Reason | What happens |
|---|---|
| Attention | Many traders place orders near 38.2%, 50% and 61.8%, so some reaction there is plausible whatever the numbers are. |
| Coverage | Five levels in one swing leave little space where price is "not near a level". |
| Swing choice | The trader picks the swing; after a turn it is easy to find a swing that puts a level at the turn. |
| Overlap | Fibonacci levels often fall close to round numbers, old highs and lows, or moving averages. |
| Memorable examples | Turns at a level are shared and remembered; moves straight through are forgotten. |

None of these needs the Fibonacci ratios to have special power. They would make any fixed set of levels look useful.

## Worked example: the coverage problem

Take the five standard [Fibonacci retracement](/fibonacci-retracement/) levels, 0.236, 0.382, 0.5, 0.618 and 0.786, on a move scaled from 0 to 1. Count a turn as "at a level" if it is within a tolerance of one of them. Because the levels do not overlap at these tolerances, the share of the range covered is just five times twice the tolerance:

| Tolerance either side | Share of the 0 to 1 range near a level |
|---|---|
| 1% of the move | 10% |
| 2% of the move | 20% |
| 3% of the move | 30% |
| 5% of the move | 50% |

At a 5% tolerance, which is generous but common in casual chart reading, half of every possible pullback depth counts as "at a Fibonacci level". If pullback depths were completely random within the swing, half of them would still look like Fibonacci turns. That is the baseline any claim has to beat.

## What testing would need

A fair test fixes everything before looking at the outcome:

1. **A mechanical swing rule**, so the swing is not chosen after the turn. Our [swing points](/swing-highs-lows/) guide covers objective definitions.
2. **A fixed tolerance**, stated in advance.
3. **A random-level baseline:** the same test with levels placed at random depths, or shifted away from the Fibonacci values, on the same swings.
4. **Results in R** with costs, comparing Fibonacci entries with the baseline entries.
5. **Enough examples** across markets and years, with a period held back and read once.

Our [methods page](/methods/) sets out how we handle tests like this. We have not yet published a Fibonacci test of our own, so we quote no figure here.

## What the published research says

Academic work on technical analysis has mostly tested moving-average and breakout rules rather than Fibonacci levels. Studies of Fibonacci levels specifically are few, small, and use different swing rules, so they do not give a figure we can responsibly quote. The honest position is "not established".

## How traders use them anyway

Many traders treat Fibonacci levels as a way to organise a chart, not as forecasts: a consistent way to mark where a pullback is shallow, normal or deep, to set a [support or resistance](/support-and-resistance/) zone, and to plan a stop and target in R. Used that way, the level does not need to "work"; the risk control does the work. Looking for [confluence](/confluence/) with other levels is another common approach, with the same coverage problem.

## Verdict

Fibonacci levels have not been shown to predict turns. Their apparent success is well explained by attention, coverage and hindsight swing choice. They can still be a tidy way to plan entries, stops and targets, but any claim that they work should be judged against a random-level baseline.
