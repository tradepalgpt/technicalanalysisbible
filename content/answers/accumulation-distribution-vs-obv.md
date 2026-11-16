---
slug: accumulation-distribution-vs-obv
title: "Accumulation/distribution vs OBV: which is better?"
description: OBV adds or subtracts whole volume by the close's direction; A/D weights volume by where the close sits in the range. A worked comparison and when each fits.
query: accumulation distribution vs obv
pillar: volume-and-order-flow-guide
publish: 2027-10-22
reviewed: 16 November 2026
guides: [accumulation-distribution, on-balance-volume, chaikin-money-flow]
siblings: [how-is-obv-calculated, money-flow-index-vs-rsi]
value: [chart, table, example, verdict]
chart: accumulation-distribution
---

Neither is better in all markets. OBV adds or subtracts the whole bar's volume based on whether the close was up or down from the previous close; the accumulation/distribution line weights volume by where the close sits within the bar's own range, ignoring the previous close. They often agree, but can disagree sharply on gap days and wide bars.

## The two rules

[On-balance volume](/on-balance-volume/), Joseph Granville:

- Close above previous close: add the bar's volume
- Close below: subtract it
- Equal: no change

[Accumulation/distribution](/accumulation-distribution/), developed by Marc Chaikin:

- Close location value (CLV) = ((close - low) - (high - close)) / (high - low)
- Money flow volume = CLV x volume
- A/D = previous A/D + money flow volume

CLV runs from +1 (close at the high) to -1 (close at the low). A close in the middle adds nothing.

## Worked example on the same bars

| Bar | High | Low | Close | Volume | CLV | Money flow volume | A/D | OBV |
|---|---|---|---|---|---|---|---|---|
| 1 | 10.0 | 9.0 | 9.8 | 1,000 | 0.6000 | 600.00 | 600.00 | 0 |
| 2 | 10.5 | 9.6 | 9.7 | 2,000 | -0.7778 | -1,555.56 | -955.56 | -2,000 |
| 3 | 10.6 | 9.5 | 10.4 | 1,500 | 0.6364 | 954.55 | -1.01 | -500 |
| 4 | 10.8 | 10.0 | 10.1 | 3,000 | -0.7500 | -2,250.00 | -2,251.01 | -3,500 |

OBV starts at 0 on bar 1 because it needs a previous close.

Look at bar 4. It opened higher, traded up to 10.8 and closed at 10.1. OBV subtracts the full 3,000 because 10.1 is below bar 3's close of 10.4. A/D subtracts 2,250, because the close sat near the low of the bar but not at it. Both fell, for different reasons.

Now picture a gap day where a share opens well above yesterday's high and closes at the top of its own range, but a little below the open. OBV adds everything: the close is up. A/D also adds, as the close is at the high of the bar. Reverse it: a share gaps down, then rallies all day to close at its high, but still below yesterday's close. OBV subtracts the whole volume; A/D adds nearly all of it. That is where the two lines split.

## Side-by-side summary

| | OBV | Accumulation/distribution |
|---|---|---|
| Uses | Close vs previous close | Close within the bar's range |
| Weighting | All or nothing | Proportional, -1 to +1 |
| Sees gaps | Yes | No: a gap is invisible to CLV |
| Sensitive to | Tiny close-to-close changes | Wide bars with closes near an extreme |
| Settings | None | None |
| Oscillator version | OBV with a moving average | [Chaikin money flow](/chaikin-money-flow/) (A/D flow over N bars, divided by volume) |

## When each fits

- **Markets that gap often**, such as individual stocks around news: OBV captures the gap; A/D ignores it. Some traders prefer OBV there, others see the gap as noise.
- **Continuous markets** such as major futures and forex, where gaps are rare: A/D's in-bar weighting adds detail OBV lacks.
- **Very quiet, narrow bars**: A/D can swing on a close one tick from the high or low, because the range is tiny.

Both depend on real volume. On spot forex tick volume, both weight by quote activity rather than size.

We have not tested either line's signals, so we quote no comparison of results. The fair way to choose is to test both on your own market with the same rules.

## Common mistakes

- Reading the absolute value of either line. Both depend on the start date.
- Assuming they should agree. They measure different things.
- Using A/D on data where high equals low, which divides by zero; platforms handle this differently.

## Verdict

OBV asks "did it close up or down from yesterday?"; A/D asks "where did it close within today's range?". OBV catches gaps, A/D catches in-bar pressure. Neither wins everywhere. Pick the one whose question fits your market, keep the same data feed, and test it before trusting its divergences.
