---
slug: how-to-test-harmonic-patterns
title: How do you test whether harmonic patterns work?
description: To test harmonic patterns, fix the swing rule, ratio bands, entry, stop and target first, record every result in R, and compare against a random baseline.
query: how to test harmonic patterns
pillar: fibonacci-guide
publish: 2028-01-19
reviewed: 17 November 2026
guides: [harmonic-patterns, gartley-pattern, swing-highs-lows]
siblings: [gartley-vs-bat-pattern, do-fibonacci-levels-work]
value: [table, example, verdict]
---

You test harmonic patterns by writing every rule down before you look at results: how swings are found, the exact ratio bands, the entry, the stop and the targets. Then you record every pattern the rules find, in R with costs, and compare the results with trades taken at random points on the same swings.

## Start from the existing evidence

Whether harmonic patterns are reliable in general is covered in our existing answer, [are harmonic patterns reliable?](/answers/are-harmonic-patterns-reliable/). Its short version: the evidence is not there yet. This answer is about how you could gather your own evidence without fooling yourself.

## Why harmonic patterns are easy to fool yourself with

[Harmonic patterns](/harmonic-patterns/) have three features that make casual checking misleading:

- **Many patterns.** Gartley, bat, butterfly, crab, shark, cypher and more. Almost any swing sequence fits one of them.
- **Ratio bands.** Rules such as "BC is 0.382 to 0.886 of AB" accept a wide range of shapes.
- **Free swing choice.** After a turn, it is easy to find an X and an A that make the turn look like a D.

A fair test removes each of these freedoms in advance.

## The rules to fix first

| Decision | Example of a fixed rule | Why it matters |
|---|---|---|
| Swing detection | A [swing point](/swing-highs-lows/) needs 3 bars on each side, using wicks | Stops you choosing X after the fact |
| Pattern list | Only Gartley and bat, Carney's published ratios | Fewer patterns, fewer chances to fit noise |
| Tolerance | Each ratio within 3% of the stated band | Fixes how loose "close enough" is |
| Entry | Limit order at the projected D | Removes discretion at the turn |
| First stop | Just beyond X | Fixes 1R before entry |
| Target | 61.8% of AD, or a time exit after a set number of bars | Fixes the exit |
| Costs | Real spread in the fill, commission on top | Stops costs hiding in 1R |
| Markets and dates | Chosen before the test, with the last year held back | Gives an unseen check |

## The baseline

A pattern can look good just because the market rose during the test, or because entering on pullbacks is reasonable whatever the ratios. To separate the pattern from those effects, run the same entries, stops and targets from points chosen without the ratios, such as:

- the same number of entries at random bars in the same markets and period, or
- entries on the same swings at a depth shifted away from the harmonic D (for example halfway between the Gartley and bat Ds).

The pattern only earns credit for the difference between its results and the baseline's.

## Worked example: recording one trade

A bullish Gartley on rules fixed in advance: X = 100, A = 200, D projected at 121.4. The limit fills at 121.60 (the ask), stop 99.50, size 4 units, so 1R = (121.60 - 99.50) x 4 = 88.40.

| Field | Value |
|---|---|
| Fill | 121.60 |
| First stop | 99.50 |
| 1R | 88.40 |
| Exit | 169.95 (bid) at the 61.8% of AD target |
| Price result | (169.95 - 121.60) x 4 = 193.40 |
| Commission | 3.00 |
| Net result | 190.40, which is +2.15R |

Had the stop been hit cleanly, the record would show -1.00R, then -1.03R after the 3.00 commission. A gap through the stop is recorded at the actual fill, however bad. The stop is never widened during the test.

Every pattern the rules find goes in the log, including ones that are skipped in live trading because they "looked wrong". Leaving those out is the most common way a test flatters a pattern.

## Reading the results

- Count first. A handful of trades says nothing; our [methods page](/methods/) sets the minimums we use before quoting any figure.
- Compare net R per trade with the baseline's net R per trade.
- Count how many rule variations you tried. Ten tolerance settings tested means ten chances for one to look good by luck.
- Check the held-back period once, at the end.

## Verdict

Testing harmonic patterns means removing the trader's freedom: fixed swings, fixed patterns, fixed bands, fixed entries, stops and targets, every result in R with costs, and a random baseline beside it. Without that, a good-looking result mostly shows how flexible the pattern rules are. The [Gartley](/gartley-pattern/) is a sensible single pattern to start with because its D ratio is fixed.
