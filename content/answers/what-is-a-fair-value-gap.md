---
slug: what-is-a-fair-value-gap
title: "What is a fair value gap?"
description: A fair value gap is a three-candle pattern where the first and third candles do not overlap. How it is measured, a worked trade in R, and what is testable.
query: what is a fair value gap
pillar: price-action-guide
publish: 2027-11-15
reviewed: 17 November 2026
guides: [fair-value-gap, displacement, smart-money-concepts]
siblings: [fair-value-gap-vs-price-gap, what-is-an-order-block]
value: [table, example, verdict]
chart: fair-value-gap
---

A fair value gap (FVG) is a three-candle pattern where the wicks of the first and third candles do not overlap, leaving a price area that only the middle candle traded through. It marks a fast, one-sided move, and many traders watch for price to come back into that area.

## How it is identified

The [fair value gap](/fair-value-gap/) comes from the [smart money concepts](/smart-money-concepts/) vocabulary. It is also called an imbalance or an inefficiency.

| | Bullish FVG | Bearish FVG |
|---|---|---|
| Candle 1 | Any candle | Any candle |
| Candle 2 | Large up candle | Large down candle |
| Candle 3 | Any candle | Any candle |
| Condition | Candle 3 low is above candle 1 high | Candle 3 high is below candle 1 low |
| The gap | From candle 1 high up to candle 3 low | From candle 3 high up to candle 1 low |
| Midpoint | Halfway between the two | Halfway between the two |

The big middle candle is often called [displacement](/displacement/): a move large enough, compared with recent bars, that it left an unfilled area behind.

Unlike a normal price gap, there is no hole on the chart between closes and opens. The bars are continuous; only the wicks of candles 1 and 3 fail to overlap. See [fair value gap vs price gap](/answers/fair-value-gap-vs-price-gap/) for the difference.

## Worked example

A share on a 15-minute chart:

- Candle 1 high: 100.40
- Candle 2: rallies from 100.30 to 101.40
- Candle 3 low: 101.10

Candle 3's low (101.10) is above candle 1's high (100.40), so there is a bullish FVG from 100.40 to 101.10. It is 0.70 wide, with a midpoint of 100.75.

A trader plans a long if price returns to the midpoint:

- Buy limit at 100.75, filled at 100.75 (the ask touched the level).
- First stop under candle 1's low area, at 100.20.
- Size: 500 shares.
- 1R = (100.75 - 100.20) x 500 = 275.

Price falls straight through the gap. The stop is a stop-market order and fills at 100.15, 0.05 worse than the stop price.

| Item | Value |
|---|---|
| Loss on price: (100.15 - 100.75) x 500 | -300 |
| In R | -1.09R |
| Of which slippage | -25, or -0.09R |

The clean stop would have been -1R. The extra -0.09R is slippage and is recorded as it happened; commission would be added on top again.

## What is testable

The common claim is that price "tends to return to fill" a gap of this kind. That can be tested: mark every FVG by a fixed rule, then record how often price trades back into it within N bars, and compare with random zones of the same width and distance. That comparison matters because any zone close to current price gets revisited often by chance. We have not published that test, and this post makes no claim about fill rates.

The labels "fair value" and "inefficiency" suggest that price moved unfairly and must correct. That is an interpretation. The chart only shows a fast move.

## Rules traders vary

- **Minimum size.** Many ignore gaps smaller than a fraction of ATR, which removes most tiny ones.
- **Entry point.** Top of the gap, midpoint, or bottom. Deeper entries give a tighter stop but fill less often.
- **Invalidation.** A close through the far side of the gap usually cancels it.

## Common mistakes

- Marking every small three-candle gap on a 1-minute chart, where spread alone can create them.
- Assuming every gap fills, and holding a losing trade until it does.
- Placing the stop inside the gap to make the R target look larger.

## Verdict

A fair value gap is a precise, rule-based way to mark where price moved fast with no overlap. It is easy to code and test, which is a point in its favour. The claim that price must return to it is not shown here; treat an FVG as a defined zone with a clear invalidation, size the trade in R, and record slippage honestly.
