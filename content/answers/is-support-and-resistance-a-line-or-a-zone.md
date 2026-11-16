---
slug: is-support-and-resistance-a-line-or-a-zone
title: Is support and resistance a line or a zone?
description: Support and resistance works better as a zone than a line. Three ways to set the zone width, a worked example with ATR, and when a zone is too wide to use.
query: support and resistance zone vs line
pillar: support-and-resistance-guide
publish: 2027-06-25
reviewed: 16 November 2026
guides: [support-and-resistance, atr, false-breakout]
siblings: [wicks-or-closes-for-support-and-resistance, where-to-put-a-stop-loss-near-support]
value: [table, example, verdict]
---

A zone. Orders are spread across a band of prices, so reactions happen across a band too. A single line will look broken by ordinary noise and invites stops in the most crowded spot. Draw the zone from the bodies to the wicks of the turning bars, or size it with a fraction of ATR.

## Why a line does not work

Think about where the orders are at a support near 50:

- Some buyers bid at 50.00 exactly.
- Some bid at 50.10 to be filled before the crowd.
- Some wait for 49.80 because they want a "discount".
- Stops from earlier buyers sit at 49.60, 49.50, 49.40.

The reaction happens somewhere in 49.40 to 50.10. A line at 50.00 is broken whenever price trades at 49.90, which tells you nothing. A zone of 49.70 to 50.10 tells you that a trade at 49.90 is "inside the level", which is the useful reading.

## Three ways to set the width

| Method | How | Good for | Weak when |
|---|---|---|---|
| Bodies to wicks | From the closes to the extremes of the turning bars | Most charts; easy | One spike wick widens it too much |
| ATR fraction | Width = a quarter to half of [ATR](/atr/) | Scaling to volatility | Very quiet or very wild periods |
| Cluster range | From the lowest to highest of the turning points | Levels with several tests | The tests are spread out |

All three tend to give similar widths on a well-behaved level. If they disagree a lot, the level is probably loose.

## Worked example

A currency pair has turned down three times near 1.3500:

- Highs 1.3497, 1.3512, 1.3488.
- Closes on those bars 1.3478, 1.3490, 1.3471.
- Daily ATR(14) is 0.0080 (80 pips).

**Bodies to wicks:** 1.3471 to 1.3512. Width 41 pips.
**ATR half:** 40 pips, centred on the cluster (about 1.3480 to 1.3520).
**Cluster range:** 1.3488 to 1.3512. Width 24 pips.

A trader might settle on 1.3475 to 1.3515. That is about half a day's ATR. Price trading at 1.3505 is "at resistance", not "through it". A close at 1.3540 is clearly through.

## How the zone changes the trade

With a line at 1.3500, a short seller might put a stop at 1.3510. That stop sits inside the zone, where the old highs were, and is very likely to be hit.

With the zone 1.3475 to 1.3515, the stop goes beyond the zone plus a buffer, say 1.3535. The stop is wider, so the position is smaller for the same money at risk. But it is no longer sitting inside the level itself.

The zone also changes what counts as a break. A [false breakout](/false-breakout/) is often just price trading into the upper half of a zone that the trader drew as a line.

## When a zone is too wide

If the zone is wider than about one ATR, it is usually not one level. It may be two levels close together, or a congested range. Signs:

- The turning points are spread over a wide band with no tight cluster.
- Price has traded back and forth through the band many times.
- The stop beyond the zone makes the trade's reward too small.

In that case, either split it into two narrower zones or treat the whole band as a range and wait for price to leave it.

## Lines still have a use

Lines are fine as a label: "the 1.3500 level". They help communication and alerts. Many traders set an alert at the near edge of the zone and treat the far edge as the line in the sand. The point is to think in zones even when you draw a line.

## Verdict

Support and resistance is a zone. Use bodies to wicks or a fraction of ATR, aim for a width of roughly a quarter to a whole ATR, and put stops beyond the far edge. A zone makes breaks easier to judge and keeps your stop out of the most crowded prices. See the [support and resistance](/support-and-resistance/) guide for how zones fit into the rest of level trading.
