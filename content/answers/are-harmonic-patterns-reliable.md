---
slug: are-harmonic-patterns-reliable
title: Are harmonic patterns reliable?
description: Harmonic patterns look precise, but wide tolerances, many variants and chosen examples make their reliability hard to judge. How to use them more honestly.
query: are harmonic patterns reliable
pillar: chart-patterns
publish: 2027-02-19
reviewed: 16 November 2026
guides: [harmonic-patterns, gartley-pattern, fibonacci-retracement, confluence]
siblings: [do-chart-patterns-work, how-to-calculate-chart-pattern-price-target]
value: [table, example, verdict, chart]
chart: harmonic-patterns
---

Their reliability is not established. Harmonic patterns look precise because they use Fibonacci ratios, but the tolerances are wide, there are many named variants, and the examples people share are chosen after the fact. Used as a way to find a price zone where several levels cluster, they can be useful; as standalone forecasts, treat them with caution.

## What harmonic patterns are

[Harmonic patterns](/harmonic-patterns/) are swing patterns defined by ratios. A typical one has five points, X, A, B, C and D. Each leg must be a set fraction of an earlier leg, using [Fibonacci retracements](/fibonacci-retracement/) and extensions. The last point, D, is the "potential reversal zone" where a turn is expected.

The [Gartley](/gartley-pattern/) takes its name from H.M. Gartley's *Profits in the Stock Market* (1935), though the Fibonacci rules now attached to it came decades later from other writers, notably Larry Pesavento and Scott Carney. Carney's *Harmonic Trading* books set out the bat, crab and other variants.

## Why they look reliable

- **Precision.** Ratios such as 0.618 and 0.786 make the pattern feel measured rather than drawn.
- **A defined zone.** D gives an exact area to watch, an obvious stop just beyond it, and targets based on the CD leg.
- **Good examples.** Every book and video is full of patterns that turned at D almost to the tick.

## Why the reliability is hard to judge

| Problem | What happens | Effect |
|---|---|---|
| Wide tolerances | Each ratio has a band around it, and authors use different bands | Many swing sets qualify |
| Many variants | Gartley, bat, butterfly, crab, shark, cypher, and more | Almost any swing sequence fits one of them |
| Swing choice | Which swing is X, and how big a swing counts, is up to the trader | Same chart, different patterns |
| Software differences | Platforms follow different authors' ratios | Same chart, different alerts |
| Chosen examples | Patterns that ran through D are rarely shown | Success looks common |
| Little published testing | Few independent studies with fixed rules and random baselines | No trustworthy figure to quote |

Put the first three together. With a dozen patterns, each with a few ratio rules and a tolerance band, and a free choice of swings, the chance that some harmonic pattern points at a given turning point is high, even if the patterns have no special power. Turning points will then appear to "respect" harmonic levels.

That does not prove they are useless. It means the evidence most people offer, examples of patterns that worked, cannot tell the difference between a real effect and a well-chosen sample.

We have not tested harmonic patterns ourselves, and we know of no independent, widely cited study we could quote with confidence.

## Where they can still help

Strip away the names and a harmonic pattern is a way to find a zone where several measurements agree: a retracement of the whole move, an extension of the last leg, and an equal-legs projection. That is a form of [confluence](/confluence/). A zone where several independent levels meet is more likely to be watched by many traders than one where none do.

Used that way, the honest question is not "is this a valid bat?" but "is there a cluster of levels here, and what will I do if price reaches it?"

## Worked example in R

This is an illustration with round numbers, not a real trade.

A currency pair rises from X = 1.1000 to A = 1.1400 (a 400-pip leg). It falls to B = 1.1153, about 0.618 of XA. It rises to C = 1.1300. In the common Gartley description, D is near the 0.786 retracement of XA: 1.1400 − 0.786 × 0.0400 = about 1.1086.

- Entry: buy at 1.1090 as price reaches the zone.
- Stop: below X, a common harmonic stop, at 1.0990. Risk: 100 pips.
- Target 1: the 0.382 retracement of the AD leg, about 1.1210. Reward 120 pips: **1.2R.**
- Target 2: the 0.618 retracement of AD, about 1.1280. Reward 190 pips: **1.9R.**

Now the honest part. If price falls through 1.1086 and keeps going, a trader can often re-label the swings: perhaps it is a bat that needs D at a deeper level, or a crab that extends beyond X. Each relabelling moves the "real" D and makes the pattern look as if it was never wrong. That is the habit to avoid. Decide before entry which pattern it is, where D is and where the stop goes, and record the result whatever happens.

## How to use them more honestly

1. **Use one or two patterns only,** with ratios from one source, written down.
2. **Fix the swing rule** before looking for patterns.
3. **Record every pattern** your rules find, not just the ones you trade.
4. **Require something else at D:** a prior [support or resistance](/support-and-resistance/) level, a trendline, or a rejection bar.
5. **Never relabel after entry.** If the stop goes, the pattern failed.

## Verdict

Harmonic patterns are not established as reliable. Their precision is mostly in the drawing, not the outcome: wide tolerances, many variants and chosen examples make it easy to see them work and hard to know whether they do. Treat them as a way to find a cluster of Fibonacci levels, require other evidence at D, and record every case. For the rest of the pattern family, see the [chart patterns guide](/guide/chart-patterns/).
