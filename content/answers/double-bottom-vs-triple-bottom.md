---
slug: double-bottom-vs-triple-bottom
title: "Double bottom vs triple bottom: which is stronger?"
description: A triple bottom tests a level once more than a double bottom, but that does not make it clearly stronger. How the two compare on entry, stop and target in R.
query: double bottom vs triple bottom
pillar: chart-patterns
publish: 2027-02-22
reviewed: 16 November 2026
guides: [double-bottom, triple-bottom, rectangle-pattern]
siblings: [how-reliable-is-a-double-top, how-to-calculate-chart-pattern-price-target]
value: [table, example, verdict, chart]
chart: triple-bottom
---

Neither is clearly stronger. A triple bottom shows a level holding three times instead of two, which some traders read as firmer support. But it also takes longer, often gives a later entry, and looks very like a rectangle. Without a test that compares them under the same rules, "stronger" is opinion.

## The two patterns

A [double bottom](/double-bottom/) is two troughs at about the same level after a fall, with a peak between them. It completes when price closes above that peak.

A [triple bottom](/triple-bottom/) is three troughs at about the same level, with two peaks between them. The neckline is usually drawn through the higher of the two peaks, or as a line joining them. It completes when price closes above the neckline.

## Side by side

| | Double bottom | Triple bottom |
|---|---|---|
| Tests of the low | Two | Three |
| Time to form (daily chart) | Weeks to months | Usually longer |
| How often it appears | More common | Rarer: a third test often breaks the level |
| Trigger | Close above the middle peak | Close above the neckline |
| Measured target | Trough to peak, projected up | Troughs to neckline, projected up |
| Usual stop | Below the second trough | Below the third trough |
| Main confusion | Two random lows in a range | A rectangle that has not broken yet |
| Story | Sellers failed twice | Sellers failed three times |

## The case for "triple is stronger"

Three failures at the same price is more evidence that buyers are defending it. Every test that holds adds to the number of traders who remember the level. When the neckline finally breaks, sellers have run out of attempts.

## The case against

- **It is late.** The pattern only completes after three troughs and a break above the neckline. More of the move may already have happened.
- **Each test can weaken a level.** Many traders hold the opposite view: every test uses up some of the buyers at that price, which is why a fourth test often breaks through.
- **It overlaps with a rectangle.** Three equal lows and two similar highs is a [rectangle](/rectangle-pattern/). The difference is only how it ends. If it breaks up, it is called a triple bottom; if it breaks down, a rectangle that continued the downtrend. Naming it after the break is hindsight.
- **It is rarer,** so any comparison has fewer cases, and any figure is less certain.

We have not tested either pattern. Thomas Bulkowski's *Encyclopedia of Chart Patterns* covers both in US stocks using his own rules; we do not quote its figures here because they depend on those rules.

## Worked example in R

This is an illustration with round numbers, not a real trade. The same share produces two possible patterns.

The share falls from 90 to 60. It bounces to 68, falls back to 60.50, and rallies.

**Double bottom version.** It closes at 68.40, above the 68 peak.

- Height: 68 − 60 = 8. Target: 76.
- Entry at next open: 68.50. Stop below the second trough: 60.30. Risk: 8.20.
- Reward: 7.50. **0.9R.**

**Triple bottom version.** Instead, it stalls at 67.80, falls to 60.20, then closes at 68.40 above a neckline at 68.

- Height: 8. Target: 76.
- Entry: 68.50. Stop below the third trough: 60.00. Risk: 8.50.
- Reward: 7.50. **0.9R.**

The R is almost identical. The triple bottom took longer and gave the same trade. In both, the stop below the lows makes the measured target worth less than 1R. That is common with bottoms and tops measured this way.

What changes the R is the stop, not the number of troughs:

- **Stop below the last minor swing after the break,** say 66.40: risk 2.10, **3.6R.**
- **Wait for a retest of 68** and stop below the retest low, say 67.20, entering at 68.10: risk 0.90, reward 7.90, **8.8R** on paper.

The tighter stops carry their own risk: they are easier for a normal pullback to reach.

## What actually matters more than the count

1. **The fall before.** A bottom needs something to end.
2. **Location.** Lows at a long-standing [support](/support-and-resistance/) level, a round number or a prior breakout level carry more weight than lows in open space.
3. **The break.** A clean close above the neckline, ideally with rising volume in markets where volume is meaningful.
4. **The R.** If the trade is not worth it with a sensible stop, the pattern's strength does not matter.

## Verdict

A triple bottom is not clearly stronger than a double bottom. It shows one more defence of the level, but it forms later, is rarer and often looks identical to a rectangle until it breaks. The count of troughs matters less than the fall before, the level being defended, the quality of the break and the trade's R. See [How reliable is a double top?](/answers/how-reliable-is-a-double-top/) for the bearish side, and the [chart patterns guide](/guide/chart-patterns/) for the reversal family.
