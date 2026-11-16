---
slug: how-to-calculate-ema-by-hand
title: How do you calculate an EMA by hand?
description: How to calculate an exponential moving average by hand, step by step, with a full ten-bar worked table, the seed choice and a quick way to check your sums.
query: how to calculate ema
pillar: moving-averages
publish: 2027-05-03
reviewed: 16 November 2026
guides: [exponential-moving-average, simple-moving-average, smoothed-moving-average]
siblings: [why-does-my-ema-differ-from-tradingview, sma-vs-ema-which-is-better]
value: [table, example, verdict]
---

To calculate an EMA by hand, work out the multiplier k = 2 / (N + 1), start the EMA with a simple average of the first N closes, then for each new bar take EMA = previous EMA + k × (close − previous EMA). Repeat for every bar.

## The formula

The [exponential moving average](/exponential-moving-average/) has two parts.

1. **Multiplier:** k = 2 / (N + 1), where N is the period.
2. **Update:** EMA today = (close today × k) + (EMA yesterday × (1 − k)).

The update can be rearranged into a form that is easier by hand:

EMA today = EMA yesterday + k × (close today − EMA yesterday)

In words: find the gap between today's close and yesterday's EMA, take a fraction k of it, and add that to yesterday's EMA. Both forms give the same answer.

Common multipliers:

| Period N | k = 2 / (N + 1) | As a percentage |
|---|---|---|
| 5 | 0.3333 | 33.3% |
| 9 | 0.2 | 20% |
| 10 | 0.1818 | 18.2% |
| 12 | 0.1538 | 15.4% |
| 20 | 0.0952 | 9.5% |
| 26 | 0.0741 | 7.4% |
| 50 | 0.0392 | 3.9% |
| 200 | 0.00995 | 1.0% |

## Step 1: choose a seed

The first EMA has no yesterday. You need a starting value. The two common choices:

- **SMA seed:** the first EMA is the [simple moving average](/simple-moving-average/) of the first N closes. This is the method in most textbooks and the one our own code uses.
- **First-close seed:** the first EMA is simply the first close. Some platforms do this.

The seed affects early values only. After enough bars it barely matters. For hand calculation, use the SMA seed.

## Step 2: a full worked example

A 5-period EMA, so k = 2 / 6 = 0.3333. Ten closes:

22, 24, 23, 25, 26, 28, 27, 29, 30, 28

**Seed.** The SMA of the first five closes = (22 + 24 + 23 + 25 + 26) / 5 = 120 / 5 = 24.00. That is the EMA on bar 5.

**Bars 6 to 10.** Each row uses the gap method: new EMA = old EMA + 0.3333 × (close − old EMA).

| Bar | Close | Old EMA | Gap (close − old EMA) | k × gap | New EMA |
|---|---|---|---|---|---|
| 5 | 26 | n/a | n/a | n/a | 24.00 (seed) |
| 6 | 28 | 24.00 | 4.00 | 1.33 | 25.33 |
| 7 | 27 | 25.33 | 1.67 | 0.56 | 25.89 |
| 8 | 29 | 25.89 | 3.11 | 1.04 | 26.93 |
| 9 | 30 | 26.93 | 3.07 | 1.02 | 27.95 |
| 10 | 28 | 27.95 | 0.05 | 0.02 | 27.97 |

Check the last row with the other form: (28 × 0.3333) + (27.95 × 0.6667) = 9.33 + 18.63 = 27.96. The small difference is rounding. Keep at least four decimal places in the middle of a calculation if you want to match a platform to the cent.

For comparison, the 5-period SMA on bar 10 is (28 + 27 + 29 + 30 + 28) / 5 = 28.40. The EMA (27.97) is lower here, because it still carries some weight from the older, lower closes that the SMA has already dropped. Each average is "right"; they just weight the past differently.

## Step 3: check your sums

Three quick checks catch most mistakes:

1. **The EMA always moves towards the close.** If the close is above the old EMA, the new EMA must be higher. If it is below, lower.
2. **It never overshoots.** The new EMA must sit between the old EMA and the close. If it does not, k is wrong (usually above 1, or you swapped k and 1 − k).
3. **The step is a fixed fraction of the gap.** For a 5 EMA, each move is one third of the gap. If a move is half the gap, you used the wrong period.

## Doing it in a spreadsheet

A spreadsheet makes the sums trivial. With closes in column B from row 2:

- In the row of the fifth close (row 6), put the seed: =AVERAGE(B2:B6)
- In row 7: =C6 + (2/(5+1)) * (B7 - C6)
- Fill that formula down.

Change the 5 in both places to change the period. This is a useful way to check a platform's value: paste in the same closes and compare once you are well past the warm-up.

## Why your hand value may not match a chart

If you calculate by hand and the chart disagrees, the usual reasons are:

- The chart used a different seed (first close instead of SMA).
- The chart started its EMA from an earlier bar, because it loaded more history.
- The chart's closes differ from yours (different data source, or different daily close time).
- The chart's "EMA" is actually a [smoothed moving average](/smoothed-moving-average/) (k = 1 / N), which is much slower.

See [why your EMA differs from TradingView's](/answers/why-does-my-ema-differ-from-tradingview/) for a fuller checklist.

## How long until the seed stops mattering?

The weight on the seed shrinks by a factor of (1 − k) each bar. For a 5 EMA, (1 − k) = 0.667. After 10 bars the seed's weight is 0.667 to the power 10, about 1.7%. After 20 bars it is about 0.03%. For a 50 EMA, (1 − k) = 0.961, and after 100 bars the seed still carries around 2% of the weight. For a 200 EMA you need many hundreds of bars. A common rule of thumb is to allow three to four times N bars before trusting an EMA's exact value.

## Verdict

Calculating an EMA by hand is easy once you think of it as "close a fixed fraction of the gap each bar". The only judgement call is the seed, and it fades with time. Doing a short run by hand once is worth it: it shows why an EMA never quite catches price and why two platforms can disagree early on. For how the EMA compares with other averages, see [the moving averages guide](/guide/moving-averages/).
