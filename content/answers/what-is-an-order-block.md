---
slug: what-is-an-order-block
title: "What is an order block?"
description: An order block is the last opposite candle before a strong move, marked as a zone price may revisit. The common definition, a worked trade in R, and its limits.
query: what is an order block
pillar: price-action-guide
publish: 2027-11-12
reviewed: 17 November 2026
guides: [order-block, supply-and-demand-zones, smart-money-concepts, breaker-block]
siblings: [what-is-a-fair-value-gap, is-smart-money-concepts-just-old-ideas]
value: [table, example, verdict]
chart: order-block
---

An order block is usually defined as the last down candle before a strong move up (a bullish order block), or the last up candle before a strong move down (a bearish one). Its high-to-low range is marked as a zone that price may revisit and react from.

## The common definition

The term [order block](/order-block/) comes from the [smart money concepts](/smart-money-concepts/) vocabulary. Writers differ, but most versions share these rules:

| Rule | Bullish order block | Bearish order block |
|---|---|---|
| The candle | Last down (bearish) candle before the move | Last up (bullish) candle before the move |
| The move after | Strong rally, often breaking a swing high | Strong drop, often breaking a swing low |
| The zone | That candle's low to high (some use open to low) | That candle's high to low (some use open to high) |
| Expected use | Look for longs if price returns | Look for shorts if price returns |
| Invalidated when | Price closes below the zone | Price closes above the zone |

Some versions add conditions: the move must leave a fair value gap, or break structure, or the block must not have been revisited yet ("unmitigated"). Each extra condition changes which zones qualify, so two traders can mark different blocks on the same chart.

## What the name claims, and what is testable

The name suggests that large institutions placed orders in that candle and will defend the area. That is a story, not something a chart can show. Price data does not record who traded. What is testable is narrower: when price returns to the zone, how often does it reverse, compared with random zones of the same size? We have not published such a test, and we know of no independent study we can cite, so this post makes no claim about how often order blocks hold.

The idea is close to an older one: a demand zone at the base of a sharp rally, as used in [supply and demand zones](/supply-and-demand-zones/). Our post on [supply and demand zones vs support and resistance](/answers/supply-and-demand-zones-vs-support-and-resistance/) covers that idea. The main difference is that the order block is pinned to one specific candle.

## Worked trade in R

Gold on a 1-hour chart. The last down candle before a strong rally runs from 2,038 to 2,045. The rally breaks the prior swing high and tops at 2,071. Price later pulls back into the zone.

- The trader places a buy limit at 2,045.5. With the spread, the long fills at the ask, 2,045.8.
- First stop under the zone, at 2,036.5.
- Size: 10 ounces.
- Target: 2,068, just under the swing high.

1R = (2,045.8 - 2,036.5) x 10 = 93.

| Outcome | Price result | In R |
|---|---|---|
| Target hit at 2,068 | (2,068 - 2,045.8) x 10 = +222 | +2.39R |
| Clean stop at 2,036.5 | -93 | -1R |

Commission and any slippage are added to each result on top of these figures, never folded into 1R. If price rallies and forms a new higher low at 2,055, the stop can be raised under it; it is never lowered. These are illustrative numbers.

## When an order block "fails"

A close through the zone invalidates it. Some traders then flip the zone's role and call it a [breaker block](/breaker-block/): a failed bullish block that may act as resistance on a retest. That is the same logic as old support becoming resistance.

## Common mistakes

- Marking every down candle before any rise. Without a rule for "strong move", almost any candle qualifies.
- Using very wide blocks on high timeframes, then sizing as if the stop were tight.
- Placing the stop inside the zone to improve the R multiple, then being stopped by normal noise.
- Treating "institutions defend this zone" as a fact rather than a hypothesis.

## Verdict

An order block is a specific way of marking a demand or supply zone: the last opposite candle before a strong move. As a zone with a clear invalidation point it is usable, and it gives a natural stop. The institutional story behind it is not something price data can confirm, and its edge, if any, is untested here. Treat it as a defined zone, not as inside knowledge.
