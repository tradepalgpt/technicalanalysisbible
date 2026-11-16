---
slug: how-to-calculate-pivot-points
title: How do you calculate pivot points?
description: Step-by-step pivot point formulas for floor, Woodie, Camarilla, DeMark and Fibonacci pivots, worked on one set of numbers, plus a spreadsheet layout.
query: how to calculate pivot points
pillar: support-and-resistance-guide
publish: 2027-07-02
reviewed: 16 November 2026
guides: [pivot-points, woodie-pivots, camarilla-pivots, fibonacci-pivot-points]
siblings: [pivot-points-vs-support-and-resistance, camarilla-vs-standard-pivot-points]
value: [chart, table, example, verdict]
chart: pivot-points
---

Take the previous period's high, low and close. The standard pivot is their average: P = (H + L + C) / 3. Then R1 = 2P − L, S1 = 2P − H, R2 = P + (H − L) and S2 = P − (H − L). Woodie, Camarilla, DeMark and Fibonacci pivots change the weighting or spacing.

## The inputs

- **H**: the previous period's high.
- **L**: the previous period's low.
- **C**: the previous period's close.
- **O**: the current or previous open (only for some variants).

For daily pivots, use yesterday's bar. For weekly pivots, last week's bar. The result depends entirely on how your data defines "yesterday", which is covered at the end.

## One set of numbers for every method

We use the same inputs throughout. A share yesterday: **H = 105.00, L = 99.00, C = 104.00, O = 100.00**. Range H − L = 6.00.

## Standard (floor) pivots

| Level | Formula | Calculation | Result |
|---|---|---|---|
| P | (H + L + C) / 3 | 308.00 / 3 | 102.67 |
| R1 | 2P − L | 205.33 − 99.00 | 106.33 |
| S1 | 2P − H | 205.33 − 105.00 | 100.33 |
| R2 | P + (H − L) | 102.67 + 6.00 | 108.67 |
| S2 | P − (H − L) | 102.67 − 6.00 | 96.67 |
| R3 | H + 2(P − L) | 105.00 + 7.33 | 112.33 |
| S3 | L − 2(H − P) | 99.00 − 4.67 | 94.33 |

## Woodie pivots

[Woodie pivots](/woodie-pivots/) count the close twice.

- P = (H + L + 2C) / 4 = (105 + 99 + 208) / 4 = 412 / 4 = **103.00**
- R1 = 2P − L = 206 − 99 = **107.00**
- S1 = 2P − H = 206 − 105 = **101.00**
- R2 = P + (H − L) = **109.00**
- S2 = P − (H − L) = **97.00**

Some sources use today's open in place of one of the closes. Check your platform.

## Camarilla pivots

[Camarilla pivots](/camarilla-pivots/) start from the close and use the range times 1.1, divided by 12, 6, 4 and 2.

| Level | Formula | Result |
|---|---|---|
| R4 | C + range × 1.1 / 2 | 104.00 + 3.30 = 107.30 |
| R3 | C + range × 1.1 / 4 | 104.00 + 1.65 = 105.65 |
| R2 | C + range × 1.1 / 6 | 104.00 + 1.10 = 105.10 |
| R1 | C + range × 1.1 / 12 | 104.00 + 0.55 = 104.55 |
| S1 | C − range × 1.1 / 12 | 103.45 |
| S2 | C − range × 1.1 / 6 | 102.90 |
| S3 | C − range × 1.1 / 4 | 102.35 |
| S4 | C − range × 1.1 / 2 | 100.70 |

Notice how tight they are compared with floor pivots. That is by design.

## DeMark pivots

DeMark pivots depend on whether the close was above, below or equal to the open.

- Close above open: X = 2H + L + C
- Close below open: X = H + 2L + C
- Close equal to open: X = H + L + 2C

Here C (104) is above O (100), so X = 210 + 99 + 104 = 413.

- P = X / 4 = **103.25**
- R1 = X / 2 − L = 206.50 − 99 = **107.50**
- S1 = X / 2 − H = 206.50 − 105 = **101.50**

## Fibonacci pivots

[Fibonacci pivot points](/fibonacci-pivot-points/) use the floor pivot P (102.67) and space levels at 0.382, 0.618 and 1.000 of the range.

- R1 = P + 0.382 × 6 = **104.96**; S1 = **100.38**
- R2 = P + 0.618 × 6 = **106.38**; S2 = **98.96**
- R3 = P + 1.000 × 6 = **108.67**; S3 = **96.67**

## All five side by side

| Method | S1 | P | R1 |
|---|---|---|---|
| Floor | 100.33 | 102.67 | 106.33 |
| Woodie | 101.00 | 103.00 | 107.00 |
| Camarilla (S3/R3) | 102.35 | (close 104.00) | 105.65 |
| DeMark | 101.50 | 103.25 | 107.50 |
| Fibonacci | 100.38 | 102.67 | 104.96 |

Same data, noticeably different levels. That is a reason to pick one method and stick to it, not to plot all five.

## In a spreadsheet

Put H, L, C and O in cells B1 to B4. Then:

- P: `=(B1+B2+B3)/3`
- R1: `=2*P-B2`, S1: `=2*P-B1`
- R2: `=P+(B1-B2)`, S2: `=P-(B1-B2)`

(Replace P with the cell holding it.)

## Why your pivots differ from someone else's

1. **Session.** Futures with overnight trading give a different H and L than regular hours only.
2. **Daily close time.** In forex, a 5pm New York close and a midnight UTC close give different bars.
3. **Rounding.** Some platforms round to the tick size; some do not.
4. **Method variant.** Woodie and DeMark have more than one published version.

## Verdict

Pivot maths is simple: an average of yesterday's high, low and close, with levels spaced from it by the range. The variants change the weighting and spacing, and give different levels from the same data. Choose one, check your platform's session settings, and pay most attention where a pivot lines up with a level the chart already shows. The [pivot points](/pivot-points/) guide covers how traders use them.
