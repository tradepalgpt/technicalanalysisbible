---
slug: what-is-top-down-analysis
title: "What is top-down analysis?"
description: Top-down analysis reads a higher timeframe first for trend and levels, then drops to lower timeframes to plan the trade. A three-chart worked example in R.
query: what is top-down analysis in trading
pillar: price-action-guide
publish: 2027-12-06
reviewed: 17 November 2026
guides: [multiple-time-frame-analysis, market-structure, structure-stop]
siblings: [best-timeframe-for-price-action, trend-or-range-how-to-tell]
value: [table, example, verdict]
---

Top-down analysis means reading a higher timeframe first, for the trend and the main levels, then moving to a lower timeframe to plan the entry and stop. The higher chart sets the direction and context; the lower chart sets the exact prices.

## The usual three layers

[Multiple time frame analysis](/multiple-time-frame-analysis/) is often done with three charts, each roughly four to six times the next. Alexander Elder's triple screen system, described in his 1993 book Trading for a Living, is a well-known early version of this idea.

| Layer | Example (swing trader) | Example (day trader) | Job |
|---|---|---|---|
| Higher | Weekly | 4-hour | Trend and major levels |
| Middle | Daily | 1-hour | Setup: pullback, range, break |
| Lower | 4-hour | 15-minute | Entry trigger and stop |

The ratio is a convention, not a rule. What matters is that each layer has one job.

## Worked example

A share, read from the top down.

**Weekly.** [Market structure](/market-structure/) shows higher highs and higher lows for a year. The last weekly higher low is 61.00; the last weekly high is 74.00. Reading: uptrend, so look for longs only.

**Daily.** Price has pulled back from 74.00 to 66.50 over three weeks, into an old breakout level around 66 to 67. Reading: a pullback to a level inside a weekly uptrend.

**4-hour.** The pullback's lower highs end when price closes above the last 4-hour lower high at 67.40, a change of character on that chart. The new 4-hour higher low is 66.20.

The plan:

- The long fills at the ask, 67.55.
- First stop under the 4-hour higher low, at 66.10, a [structure stop](/structure-stop/).
- Size: 600 shares.
- 1R = (67.55 - 66.10) x 600 = 870.
- Target: just under the weekly high, 73.80. Fill to target is 6.25, which is 6.25 / 1.45 = +4.31R on price.

| Outcome | Price result | In R |
|---|---|---|
| Target reached | (73.80 - 67.55) x 600 = +3,750 | +4.31R |
| Clean stop | -870 | -1R |

Commission sits on top of each. If the share gaps below 66.10, the stop fills at the open and the loss is larger, recorded as filled. As the trade moves, the stop may be raised under new 4-hour or daily higher lows, never lowered.

The top-down read did two things: it filtered out shorts, and it let the stop sit on the 4-hour chart, which made 1R much smaller than a stop under the weekly low at 61.00 would have.

## When the timeframes disagree

They often do. A weekly uptrend with a daily downtrend is simply a deeper weekly pullback. The common rules are:

- **Trade with the higher layer**, and use the lower layer's counter-trend move as the pullback to enter.
- **Stand aside** when the higher and middle layers point opposite ways and neither has a clear structure.
- **Do not keep adding layers** until one agrees with the trade you want.

## Limits

- The higher timeframe is slow. By the time the weekly chart confirms a turn, much of the move is over.
- Levels from the higher chart are wide zones on the lower chart. A weekly "level" can span many 4-hour bars.
- Top-down reading improves context; it does not, on its own, show a measured edge. That needs a written rule and a test.

## Common mistakes

- Using the lower timeframe's stop with the higher timeframe's target, without checking whether the gap in R is realistic.
- Reading five timeframes and acting on whichever agrees.
- Forgetting that the higher chart's last bar is still forming.

## Verdict

Top-down analysis is reading the trend and levels on a higher chart and timing the trade on a lower one. Its main value is as a filter and as a way to place a tighter, structure-based stop. Keep it to two or three charts, give each one job, and treat conflicts as a reason to wait.
