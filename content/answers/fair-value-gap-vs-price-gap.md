---
slug: fair-value-gap-vs-price-gap
title: "Fair value gap vs price gap: what is the difference?"
description: A price gap is a jump between one bar's close and the next bar's open; a fair value gap is non-overlapping wicks across three bars. Side by side, with numbers.
query: fair value gap vs price gap
pillar: price-action-guide
publish: 2027-11-17
reviewed: 17 November 2026
guides: [fair-value-gap, price-gaps, gap-fill]
siblings: [what-is-a-fair-value-gap]
value: [table, example, verdict]
---

A price gap is an empty space between two consecutive bars: the second bar's range does not overlap the first, so no trades happened in between. A fair value gap is a three-bar pattern where the first and third bars' wicks do not overlap, even though the middle bar traded straight through the area.

## Side by side

| | Price gap | Fair value gap |
|---|---|---|
| Bars involved | Two | Three |
| Did any trading happen in the gap? | No | Yes, during the middle bar |
| Where it shows | Mostly at session opens (stocks, futures) or after weekends | Any time, any market, any timeframe |
| How common on 24-hour forex charts | Rare, mostly weekend opens | Common |
| Older literature | Common, breakaway, runaway and exhaustion gaps | New term, from smart money concepts |
| Common claim | "Gaps fill" (partly true, timing varies) | "Price returns to fill the imbalance" |

The classic [price gaps](/price-gaps/) literature goes back decades, with Edwards and Magee's 1948 book among the best-known sources. The [fair value gap](/fair-value-gap/) is a newer label for a related but different event.

## Worked example with both

A share closes Monday at 80.00, with Monday's high at 80.20. Tuesday opens at 81.00 after news and trades between 80.90 and 82.10. Wednesday trades between 81.60 and 82.50.

**Price gap.** Monday's high was 80.20 and Tuesday's low was 80.90. Nothing traded between 80.20 and 80.90: a true gap of 0.70.

**Fair value gap.** Now take Monday, Tuesday and Wednesday as candles 1, 2 and 3. Candle 1's high is 80.20 and candle 3's low is 81.60. The non-overlap runs from 80.20 to 81.60: an FVG of 1.40.

| Zone | From | To | Width |
|---|---|---|---|
| Price gap | 80.20 | 80.90 | 0.70 |
| Fair value gap | 80.20 | 81.60 | 1.40 |

The FVG contains the price gap and extends further, into the part of Tuesday's range that did trade. When a real gap exists, the FVG is usually the wider zone. When there is no gap, as on most intraday forex bars, only the FVG exists.

## Why the difference matters for trading

**Gap fill behaviour.** A price gap "fills" when price trades back to the prior bar's extreme, here 80.20. Our [gap fill](/gap-fill/) guide and the post [do gaps always fill?](/answers/do-gaps-always-fill/) explain that many do, but some never do, and the timing varies a lot. FVG traders usually only expect a partial return, often to the midpoint.

**Stops and gap risk.** A true price gap tells you something about risk: the market can jump over your stop. A long held overnight with a stop at 80.50 here would not have been hit by Tuesday's gap up, but the mirror case, a gap down through a stop, fills at the open. If a long filled at 81.20 with a stop at 80.60 and 300 shares, 1R = (81.20 - 80.60) x 300 = 180. A gap open at 80.00 would fill the stop there, a loss of (80.00 - 81.20) x 300 = -360, or -2R. An FVG gives no such warning, because price traded through it continuously. See [stop loss when the market gaps](/answers/stop-loss-when-market-gaps/).

**Testing.** Both can be defined exactly, so both can be tested. The comparison that matters is against random zones of the same width and distance, because any nearby zone gets revisited often.

## Common mistakes

- Calling every FVG a "gap" and quoting gap-fill folklore for it.
- Calling a forex weekend gap a fair value gap. It is a price gap, with all its stop risk.
- Assuming a filled price gap means the move is over.

## Verdict

A price gap is a real hole in trading between two bars; a fair value gap is non-overlapping wicks across three bars, with trading inside it. Price gaps carry direct stop risk and a long literature; FVGs are more common and newer, with no published fill statistics we can cite. Know which one you are looking at before you apply the other's rules.
