---
slug: how-to-calculate-fibonacci-extensions
title: How do you calculate Fibonacci extensions?
description: A three-point Fibonacci extension adds a ratio of the first leg to the pullback low. Formulas for two-point and three-point extensions, with worked numbers.
query: how to calculate fibonacci extensions
pillar: fibonacci-guide
publish: 2027-12-24
reviewed: 17 November 2026
guides: [fibonacci-extension, fibonacci-projection, golden-ratio]
siblings: [when-to-use-fibonacci-extensions]
value: [table, example, verdict, chart]
chart: fibonacci-extension
---

A three-point Fibonacci extension takes the first leg of a move (A to B), multiplies it by a ratio such as 1.272 or 1.618, and adds the result to the end of the pullback (C). A two-point extension instead projects the ratio from the start of the move, so it marks levels beyond the old high.

## The two formulas

Software names differ, so the arithmetic is the safest guide. In an uptrend:

**Three-point (sometimes called a projection or trend-based extension):**
Level = C + ratio x (B - A)

**Two-point (sometimes called a retracement extension):**
Level = A + ratio x (B - A)

In a downtrend, subtract instead of add. Our [Fibonacci extension](/fibonacci-extension/) and [Fibonacci projection](/fibonacci-projection/) guides cover the naming differences between platforms.

The standard ratios are 1.0 (equal legs), 1.272 (square root of 1.618), 1.618 (the [golden ratio](/golden-ratio/)) and 2.618 (1.618 squared).

## Worked example: three-point

A rise from A = 100 to B = 150, a pullback to C = 130. The first leg is 50.

| Ratio | Calculation | Level |
|---|---|---|
| 1.0 | 130 + 1.0 x 50 | 180.0 |
| 1.272 | 130 + 1.272 x 50 | 193.6 |
| 1.618 | 130 + 1.618 x 50 | 210.9 |
| 2.618 | 130 + 2.618 x 50 | 260.9 |

For a fall from A = 200 to B = 150 with a bounce to C = 170, the first leg is 50 and the levels are 170 minus the same amounts: 120.0, 106.4, 89.1 and 39.1.

## Worked example: two-point

A rise from A = 100 to B = 200, with no pullback used. The move is 100.

| Ratio | Calculation | Level |
|---|---|---|
| 1.272 | 100 + 1.272 x 100 | 227.2 |
| 1.618 | 100 + 1.618 x 100 | 261.8 |
| 2.618 | 100 + 2.618 x 100 | 361.8 |

The two methods can give quite different targets from the same chart. On the A = 100, B = 150, C = 130 swing, the three-point 1.618 level is 210.9, while a two-point extension of 100 to 150 gives 100 + 1.618 x 50 = 180.9. Always state which method you used.

## Checking your platform

Platforms label extension tools differently, and some measure from B rather than C. A quick check:

1. Draw the tool on a known swing.
2. Read the price at the 1.0 line.
3. If it equals C + (B - A), it is a three-point extension. If it equals B + (B - A), it is anchored from B instead.

## Turning a level into a target in R

Suppose a long fills at 131.00 (the ask), first stop 127.00, size 25 units. 1R = (131.00 - 127.00) x 25 = 100.

| Outcome | Exit price (bid) | Result in money | Result in R |
|---|---|---|---|
| 1.0 level at 180.0 | 179.95 | (179.95 - 131.00) x 25 = 1,223.75 | +12.24R |
| 1.272 level at 193.6 | 193.55 | (193.55 - 131.00) x 25 = 1,563.75 | +15.64R |
| Stop hit cleanly | 127.00 | -100 | -1.00R |

Commission goes on top of each result, and a gap through the stop would make the loss worse than -1R. These are distances, not predictions: a large R target is only paid if price gets there.

## Common mistakes

- Mixing up two-point and three-point tools and reading the wrong 1.618.
- Using an unfinished pullback as C, so every level moves when C moves.
- Treating 2.618 as a likely target rather than a distant reference.
- Adding non-standard ratios until one lines up with the eventual high.

## Verdict

A three-point extension is C plus a ratio of the first leg; a two-point extension is A plus a ratio of the whole move. Both are simple arithmetic. The work is in choosing A, B and C honestly and saying which method you used, because the same chart gives different targets under each.
