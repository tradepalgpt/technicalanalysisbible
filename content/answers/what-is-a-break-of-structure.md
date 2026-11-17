---
slug: what-is-a-break-of-structure
title: "What is a break of structure?"
description: A break of structure is price moving beyond the last swing high or low in the trend's direction. Wick vs close rules, a worked trade in R and its limits.
query: what is a break of structure
pillar: price-action-guide
publish: 2027-11-03
reviewed: 17 November 2026
guides: [break-of-structure, market-structure, swing-highs-lows, structure-stop]
siblings: [break-of-structure-vs-change-of-character, how-to-identify-market-structure]
value: [table, example, verdict]
chart: break-of-structure
---

A break of structure (BOS) is price moving beyond the most recent swing high in an uptrend, or the most recent swing low in a downtrend. It is read as the trend continuing: the market has made a new higher high or a new lower low.

## The definition in plain terms

The term [break of structure](/break-of-structure/) comes from the smart money concepts vocabulary, but the idea is classic [market structure](/market-structure/) reading. Dow theory said an uptrend continues while each rally makes a new high and each pullback holds above the last low. A BOS is simply the "new high" part of that, given a short name.

| Trend | What counts as a BOS | What it suggests |
|---|---|---|
| Uptrend | Price passes the last confirmed swing high | Trend continuing up |
| Downtrend | Price passes the last confirmed swing low | Trend continuing down |
| Range | Not usually called a BOS | A break of the range edge is a breakout, which may fail |

A break against the trend, such as an uptrend losing its last higher low, is usually called a change of character instead. See [break of structure vs change of character](/answers/break-of-structure-vs-change-of-character/).

## Wick or close?

The main point of disagreement is what "beyond" means.

| Rule | A BOS happens when | Pros | Cons |
|---|---|---|---|
| Wick | Any part of a bar trades past the swing | Earliest signal | Counts brief spikes that reverse |
| Close | A bar closes past the swing | Filters many spikes | Later; on daily charts, a full day later |
| Close plus buffer | A close past the swing by a set amount (for example 0.2 ATR) | Fewer marginal breaks | Needs a setting; later still |

Example: the last swing high on a share is 152.40. A bar trades up to 152.60 but closes at 152.10. Under a wick rule this is a BOS. Under a close rule it is not, and if price then falls, a wick-rule trader has just seen a false break, sometimes called a liquidity sweep. Neither rule is "correct". What matters is choosing one and applying it every time, so it can be tested.

## A worked trade in R

A trader uses a close rule. The next bar closes at 152.70, above 152.40, confirming the BOS. The plan:

- Buy 200 shares. The long fills at the ask, 152.80.
- First stop under the last higher low, at 150.90 (a [structure stop](/structure-stop/)).
- 1R = (152.80 - 150.90) x 200 = 380.

Two days later the company reports results before the open and the shares open at 150.20, below the stop. The stop fills at the open.

| Item | Value |
|---|---|
| Loss on price: (150.20 - 152.80) x 200 | -520 |
| In R on price: -520 / 380 | -1.37R |
| Commission (2) on top | -522 net, -1.37R |

A clean stop-out would have been exactly -1R. The gap made it -1.37R, and that is how it is recorded. The stop was not to blame: gaps happen, and 1R stays fixed at the fill. Our guide to [swing highs and lows](/swing-highs-lows/) explains how the 150.90 higher low was confirmed in the first place.

## What a BOS does and does not tell you

A BOS confirms that the trend made a new extreme. It does not say how far the move will go, and it does not mean the trend is fresh. Late in a trend, a BOS can be the last push before a reversal. Many traders therefore look for entries on the pullback after a BOS, not on the break itself, which gives a tighter stop but risks missing the move.

## Common mistakes

- Using wicks on one chart and closes on another, then judging results.
- Calling every break of any small swing a BOS. Define which swings count first.
- Entering on the break with a stop far below the last higher low, then shrinking the size so much the trade is meaningless, or not shrinking it at all.
- Reading a BOS as a forecast of distance.

## Verdict

A break of structure is a new swing extreme in the direction of the trend: the old Dow theory idea with a modern name. It is useful as a trend-continuation filter, but only once you fix the swing rule and the wick-or-close rule. Measured in R with real fills, a BOS trade can still lose more than 1R when price gaps.
