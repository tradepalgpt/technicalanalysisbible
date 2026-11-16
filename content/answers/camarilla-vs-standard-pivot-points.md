---
slug: camarilla-vs-standard-pivot-points
title: "Camarilla vs standard pivot points: which should you use?"
description: Camarilla pivots sit close to the previous close for fades and breakouts; standard pivots spread wider around the average. How each is used, with examples.
query: camarilla vs standard pivots
pillar: support-and-resistance-guide
publish: 2027-07-05
reviewed: 16 November 2026
guides: [camarilla-pivots, pivot-points, false-breakout]
siblings: [how-to-calculate-pivot-points, pivot-points-vs-support-and-resistance]
value: [chart, table, example, verdict]
chart: camarilla-pivots
---

Standard pivots centre on the average of yesterday's high, low and close and spread levels by the full range, so they suit trend days. Camarilla pivots centre on the close and pack levels tightly around it, so they suit range days, with R4 and S4 marking breakouts. Pick based on the day you expect, not on which is newer.

## How they are built

| | Standard (floor) pivots | Camarilla pivots |
|---|---|---|
| Centre | P = (H + L + C) / 3 | Previous close |
| Spacing | Full range from P | Range × 1.1 / 12, 6, 4, 2 |
| Levels | P, R1 to R3, S1 to S3 | R1 to R4, S1 to S4 |
| Distance of first levels from price | Roughly half to a whole range | A small fraction of the range |
| Typical reading | Bounce or break at each level | Fade at R3/S3, break at R4/S4 |
| Suits | Days with directional moves | Days that stay near the previous close |

The formulas are in [how to calculate pivot points](/answers/how-to-calculate-pivot-points/). This post compares how they behave.

## The usual Camarilla playbook

[Camarilla pivots](/camarilla-pivots/) come with a common set of rules, widely published in trading books and forums:

- **Price opens between S3 and R3:** expect a range. Sell near R3, buy near S3, stops just beyond R4 and S4.
- **Price breaks above R4 or below S4:** expect a trend day. Trade with the break.
- **R1, R2, S1, S2:** minor levels, often ignored.

The logic is that most days stay within a fraction of the previous day's range around the close, and only some days break out.

## The usual standard pivot playbook

[Standard pivots](/pivot-points/) are used more loosely:

- **Price above P:** bullish bias for the day; below P, bearish.
- **R1 and S1:** first targets and first reaction areas.
- **R2, S2 and beyond:** reached on stronger days.

Because the levels are spread out, they give room for directional moves.

## Worked example: same day, both maps

A currency pair yesterday: high 1.2700, low 1.2600, close 1.2680. Range 100 pips.

**Standard pivots:**
- P = 1.2660
- R1 = 1.2720, S1 = 1.2620
- R2 = 1.2760, S2 = 1.2560

**Camarilla:**
- R4 = 1.2680 + 0.0055 = 1.2735; R3 = 1.2680 + 0.00275 = 1.2708
- S3 = 1.2652; S4 = 1.2625

**Scenario A: a quiet day.** Price opens at 1.2685, rises to 1.2706, falls to 1.2655, ends at 1.2675. The Camarilla R3 (1.2708) and S3 (1.2652) framed the day almost exactly. A trader fading R3 and S3 had two chances. Standard pivots: price never reached R1 or S1; the only level in play was P at 1.2660.

**Scenario B: a trend day.** Price opens at 1.2685, breaks above 1.2735 (R4) by mid-morning and runs to 1.2775. Camarilla traders who faded R3 were stopped above R4, then had a breakout signal. Standard pivot traders saw R1 at 1.2720 break and R2 at 1.2760 reached, which gave a sensible map for the trend.

Neither map was right or wrong. Each suited a different kind of day.

## Which kind of day is it?

Common clues, none of them reliable on its own:

| Clue | Leans range day | Leans trend day |
|---|---|---|
| Yesterday's range | Wide (markets often rest after big days) | Narrow (compression often precedes expansion) |
| Open | Inside yesterday's range | Gap outside yesterday's range |
| News | None scheduled | Major release due |
| First hour | Stays near the open | Breaks the early range |

The first-hour clue overlaps with the [initial balance](/initial-balance/) idea.

## Where both fail

- **Gap opens beyond all levels.** Both maps are left behind. The day needs fresh levels.
- **Thin markets.** Few traders watch pivots, so the attention effect is weaker.
- **Different data.** Session and close-time differences shift both. Camarilla levels are close together, so small data differences matter more to them.

A Camarilla R3 that gets poked by a few pips and then fails is a classic [false breakout](/false-breakout/) in miniature. A stop right at R3 is hit often; Camarilla users usually put it beyond R4.

## Verdict

Camarilla pivots are a range-day tool with a built-in breakout rule. Standard pivots are a broader map that suits directional days. If you mostly fade intraday extremes, Camarilla's tight levels fit; if you mostly trade with the day's direction, standard pivots give more room. Either way, give most weight to levels that line up with chart history.
