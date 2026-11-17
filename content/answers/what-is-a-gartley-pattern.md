---
slug: what-is-a-gartley-pattern
title: What is a Gartley pattern?
description: The Gartley is a five-point harmonic pattern whose D point sits at the 78.6% retracement of XA. Textbook ratios, sources, and a worked example in R.
query: what is a gartley pattern
pillar: fibonacci-guide
publish: 2028-01-12
reviewed: 17 November 2026
guides: [gartley-pattern, harmonic-patterns, fibonacci-retracement]
siblings: [gartley-vs-bat-pattern, what-is-an-abcd-pattern]
value: [table, example, verdict, chart]
chart: gartley-pattern
---

The Gartley is a five-point harmonic pattern, X-A-B-C-D, in which B retraces 61.8% of the XA leg and the final point D completes at the 78.6% retracement of XA. D is treated as a possible reversal zone: a turn up in the bullish version, a turn down in the bearish one.

## Where it comes from

The [Gartley pattern](/gartley-pattern/) is named after H.M. Gartley, who described a similar swing structure in *Profits in the Stock Market* (1935), without the precise ratios used today. The [Fibonacci retracement](/fibonacci-retracement/) rules were added later, notably by Larry Pesavento in *Fibonacci Ratios with Pattern Recognition* (1997) and Scott Carney in *The Harmonic Trader* (1999) and his *Harmonic Trading* volumes. The ratios below follow Carney's published version; other authors use slightly different bands.

## Textbook ratios (Carney)

| Leg | Rule | Notes |
|---|---|---|
| XA | The initial impulse | Any size |
| AB | B retraces 0.618 of XA | The defining ratio |
| BC | C retraces 0.382 to 0.886 of AB | A wide band |
| CD | 1.272 to 1.618 of BC | Projection of BC |
| D | 0.786 retracement of XA | The completion point |

In a bullish Gartley, X is a low, A a high, B a higher low, C a lower high, and D a low above X. The bearish version is the mirror image. D must not go beyond X; if it does, the pattern is not a Gartley.

## Worked example: bullish Gartley

X = 100, A = 200. The XA leg is 100.

| Point | Calculation | Price |
|---|---|---|
| B | 200 - 0.618 x 100 | 138.2 |
| C | 138.2 + 0.618 x (200 - 138.2) | 176.4 |
| D | 200 - 0.786 x 100 | 121.4 |

Check the remaining rules. BC is 176.4 - 138.2 = 38.2, which is 0.618 of AB (61.8), inside the 0.382 to 0.886 band. CD is 176.4 - 121.4 = 55.0, and 55.0 / 38.2 = 1.44 times BC, inside the 1.272 to 1.618 band. The pattern qualifies.

## Worked example: a trade in R

A long fills at 121.60 near D (the ask). Carney's published approach puts the stop beyond X; here it is 99.50, so 1R = 22.10 per unit times size. Common targets are retracements of the AD leg (AD = 200 - 121.4 = 78.6):

| Target | Calculation | Price | Distance in R |
|---|---|---|---|
| 38.2% of AD | 121.4 + 0.382 x 78.6 | 151.4 | +1.35R |
| 61.8% of AD | 121.4 + 0.618 x 78.6 | 170.0 | +2.19R |
| Stop hit cleanly | 99.50 | 99.50 | -1.00R |

The R figures are distances from the fill before costs, not forecasts. Commission comes on top, and a gap below the stop would make the loss worse than -1R. Once filled, the stop can only tighten.

## What to be careful about

- **Wide bands.** BC can be anywhere from 0.382 to 0.886 of AB, so many swing sequences pass.
- **Swing choice.** Which bar is X is up to the trader; a different X gives a different D.
- **Author differences.** Some books allow B a little either side of 0.618; software follows different authors.
- **Testing.** Our existing answer on [whether harmonic patterns are reliable](/answers/are-harmonic-patterns-reliable/) covers why there is no trustworthy published figure. The broader [harmonic patterns](/harmonic-patterns/) guide covers the whole family.

## Verdict

The Gartley is a defined swing pattern: B at 61.8% of XA and D at 78.6% of XA, with set bands for the middle legs. It gives a precise zone, a logical stop beyond X and clear targets, which makes it easy to plan in R. Its predictive value is not established, so treat D as a zone to watch, not a forecast.
