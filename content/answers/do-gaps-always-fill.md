---
slug: do-gaps-always-fill
title: Do gaps always fill?
description: No. Many gaps fill eventually, but some take years and some never do. Which gap types tend to fill, what "fill" means, and how to plan a gap trade in R.
query: do gaps always fill
pillar: chart-patterns
publish: 2027-02-05
reviewed: 16 November 2026
guides: [gap-fill, price-gaps, breakaway-gap, exhaustion-gap]
siblings: [continuation-or-reversal-pattern-how-to-tell, what-does-volume-tell-you-about-a-breakout]
value: [table, example, verdict, chart]
chart: price-gaps
---

No. "Gaps always fill" is a trading saying, not a rule. Many gaps are filled eventually, partly because price wanders, but "eventually" can mean years, and some gaps are never filled. The type of gap matters: common and exhaustion gaps tend to fill sooner than breakaway and runaway gaps.

## What "fill" means

A [price gap](/price-gaps/) is a space on the chart where no trading took place. In an up gap, today's low is above yesterday's high. A [gap fill](/gap-fill/) is when price later trades back through the whole space, down to yesterday's high.

Two looser definitions are also used, and they change the answer a lot:

- **Partial fill:** price trades into the gap but not all the way through.
- **Close fill:** price returns to the previous bar's close rather than its high. Many intraday traders measure "the gap" from close to open, not from high to low.

If someone says "most gaps fill", ask which definition they mean and how long they allowed. Without both, the claim is untestable.

## Why many gaps do fill

There are two plain reasons.

1. **Price wanders.** Over a long enough period, price revisits most levels near where it has been. A gap that sits close to the current price is likely to be traded through at some point, simply by chance.
2. **Small gaps on quiet days are noise.** A share that opens a little higher on no news often drifts back. Nothing changed, so the gap had nothing holding it open.

Neither reason makes a gap a reliable trade.

## Why some gaps do not fill

A gap opened by real news, such as a takeover bid, a profit warning or a major earnings surprise, reflects a new view of what the asset is worth. There may be no reason for price to go back. Gaps at the start of long trends can stay open for years. A share that gaps above a long base and then doubles may never return.

## Gap types and fill tendency

The four classic types, from Edwards and Magee's *Technical Analysis of Stock Trends* and most later books:

| Gap type | Where it appears | Textbook tendency to fill | Why |
|---|---|---|---|
| [Common gap](/common-gap/) | Inside a range, quiet market | Often, and soon | Nothing changed |
| [Breakaway gap](/breakaway-gap/) | Leaving a pattern or range | Less often, at least soon | Balance of buyers and sellers has shifted |
| [Runaway gap](/runaway-gap/) | Middle of a strong trend | Less often, at least soon | Trend still has force |
| [Exhaustion gap](/exhaustion-gap/) | Late in a long trend | Often, and fast | The last buyers (or sellers) are in |

The catch is that you usually only know the type afterwards. A gap that becomes an exhaustion gap looks exactly like a runaway gap on the day. The label is applied once price either keeps going or turns back through it.

These tendencies are traditional readings. We have not tested gap fills ourselves.

## Markets matter

- **Stocks** gap often, because they close overnight and news arrives when they are shut.
- **Stock index futures** trade nearly around the clock, so the cash index may gap while the futures chart does not.
- **Forex** trades through the week, so gaps mostly appear at the weekend open.
- **Crypto** spot markets trade every day, so true gaps are rare. Futures on crypto that close at weekends can show gaps that the spot chart does not.

A "gap" on one chart can be a smooth move on another chart of the same asset. Check which chart you are using.

## Worked example in R

This is an illustration with round numbers, not a real trade.

A share closes at 50.00 with a high of 50.20. There is no news. The next morning it opens at 51.40. The gap runs from 50.20 to the new low of the day.

A trader who fades small no-news gaps might sell at 51.30 once the first 15 minutes fail to make a new high of 51.70.

- Stop: above the morning high, 51.80. Risk: 0.50.
- Target: full fill to 50.20. Reward: 1.10. **2.2R.**
- Partial target: the middle of the gap, 50.80. Reward: 0.50. **1.0R.**

Now the same gap on earnings, with volume three times normal and the open above a two-month range. The textbook reading flips: this could be a breakaway gap, and fading it means standing in front of new buyers. Same numbers, very different trade.

## How traders use gaps without the saying

- **As levels.** The edges of a gap often act as [support and resistance](/support-and-resistance/) later.
- **As context.** A gap out of a pattern, on volume, is a strong break. A gap late in a long run, on very heavy volume, is a warning.
- **With a time limit.** If you trade a fill, decide how long you will wait. A fill that takes six months was not your trade.

## Verdict

Gaps do not always fill. Many do eventually, partly by chance, but some never do, and the ones that stay open are often the ones that matter most: breakaway gaps on real news. Define what you mean by a fill, set a time limit, and judge the gap by its context rather than the saying. For the gap family in full, see the [chart patterns guide](/guide/chart-patterns/).
