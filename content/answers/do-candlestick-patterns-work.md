---
slug: do-candlestick-patterns-work
title: Do candlestick patterns work?
description: Do candlestick patterns work? Our test of 110 variants against random entry found most famous patterns added nothing on their own. What does help.
query: do candlestick patterns work
pillar: candlestick-patterns
publish: 2026-12-11
reviewed: 16 November 2026
guides: [hammer, bullish-engulfing, confluence, support-and-resistance]
siblings: [which-candlestick-patterns-are-most-common, do-you-need-confirmation-after-a-candlestick-pattern]
value: [data, table, verdict, example]
---

Candlestick patterns work as a way of reading what buyers and sellers just did, but on their own they are weak predictions. In our test of 110 pattern variants against random entries, the best-known patterns showed no evidence of an edge; they earn their place as timing tools at levels that already matter.

## Two different questions

"Do candlestick patterns work?" usually means one of two things:

1. **Do they describe the market accurately?** Yes, by definition. A [hammer](/hammer/) is a record of a period in which lower prices were rejected. A [bullish engulfing](/bullish-engulfing/) candle is a record of buyers erasing the previous period's selling. Those things happened.
2. **Do they predict what comes next, well enough to trade?** That is a statistical question, and the honest answer is "much less than chart books suggest".

Most of the confusion around candlesticks comes from mixing the two up. A description can be accurate and still tell you little about the future.

## Why chart books look better than reality

Pattern books show examples where the pattern was followed by a big move. That is natural: they are teaching what the pattern looks like. But for every hammer at a major low, there are many hammers in the middle of falls that kept falling. Looking back, we remember the ones that worked. This is hindsight bias, and the only cure is to count every occurrence with a fixed rule, not just the memorable ones.

A second problem is what you compare with. If a market rose 80% over the test period, almost any buy signal looks good. The fair question is not "did price go up after a hammer?" but "did price go up more after a hammer than after a random day?"

## What our test found

We built 45 candlestick detectors and ran them on daily bars for 10 large US stocks and funds (SPY, QQQ, IWM, Apple, Microsoft, Nvidia, Tesla, Amazon, JPMorgan, Exxon), January 2021 to October 2025, the tuning period. Each pattern was traded in its usual direction at the next open, with a 2R target, a 20-day limit, costs on both sides, and two stop rules. That gave 110 variants, of which 36 had the 30 trades needed to assess. Each was compared with random entries on the same markets, same side, same risk, same quarter.

| Pattern (stop 1 ATR) | Trades | Edge over random entry, R per trade | Label |
|---|---|---|---|
| Hammer | 191 | +0.02 | No evidence of an edge |
| Bearish engulfing | 202 | -0.06 | No evidence of an edge |
| Bullish engulfing | 132 | -0.05 | No evidence of an edge |
| Hanging man | 180 | -0.04 | No evidence of an edge |
| Shooting star | 111 | +0.07 | No evidence of an edge |
| Doji, short after a rise | 507 | +0.09 | No evidence of an edge |
| Inverted hammer | 96 | +0.38 | Exploratory, not a tested result |

After adjusting for the number of variants tried, **no variant passed**. The inverted hammer, the best of the 110, was re-run on 39 other markets over the same tuning period: 420 trades, edge +0.20R per trade. It is still **exploratory, not a tested result**, and a test on held-back data is being reviewed. Tweezer tops, the second-best at first, showed no evidence of an edge when re-run on those 39 markets (215 trades, edge -0.07R). ([How we test](/methods/).)

Two more findings:

- **Many famous patterns barely occur.** Strictly defined, our detectors found 9 morning star trades, 5 three white soldiers and no abandoned babies in almost five years on 10 markets.
- **Stop placement mattered as much as the pattern.** Stops right beyond the pattern were often hit on the entry day: 82% of the time for the hanging man.

## Why traders still use them

Our test was deliberately blind. It took every pattern that met the rule, anywhere on the chart. Real traders do not. They look for a pattern at a [support or resistance](/support-and-resistance/) level, after a stretched move, on higher volume, in the direction of the bigger trend. That stacking of reasons is [confluence](/confluence/), and it is the part a mechanical test of the candle alone does not measure.

Seen that way, a candlestick pattern is the last piece of a setup, not the setup itself. The level says "price might turn here". The candle says "price is trying to turn here, now". It gives you a precise moment to act and a natural place for a stop.

## Worked example

This is an illustration with round numbers.

Two traders watch the same stock for six months.

**Trader A** buys every bullish engulfing pattern on the daily chart. Over six months there are eight. Based on our sample, there is no reason to expect them to do better than eight random entries.

**Trader B** marks three levels in advance: 120, 112 and 105, each a prior turning point. She only buys a bullish candle pattern that forms within half an average daily range of one of them, after at least five lower closes. In six months, two patterns qualify. Each gets a stop one average range below the signal close and a 2R target.

Trader B's rule is not tested here, so we cannot tell you it works. But it is a different strategy from Trader A's, and our results only describe Trader A's.

## Verdict

Candlestick patterns do not work as stand-alone predictions: in our tuning-period test, the best-known ones did no better than random entry. They do work as a precise, readable language for what happened at a level you already care about. Use them for timing and stop placement, test any rule you rely on, and measure the results in R against random entry. The [candlestick patterns guide](/guide/candlestick-patterns/) sets out the full test, and [Which candlestick patterns are most common?](/answers/which-candlestick-patterns-are-most-common/) shows how often each one actually appears.
