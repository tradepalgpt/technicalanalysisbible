---
slug: do-you-need-confirmation-after-a-candlestick-pattern
title: Do you need confirmation after a candlestick pattern?
description: Most single and two-candle patterns are traded with next-candle confirmation. What confirmation costs in R, and which patterns already include it.
query: candlestick pattern confirmation
pillar: candlestick-patterns
publish: 2026-12-30
reviewed: 16 November 2026
guides: [hanging-man, three-inside-up-down, morning-star, risk-reward-ratio]
siblings: [how-reliable-is-a-doji, do-candlestick-patterns-work]
value: [table, example, verdict, data]
---

For most single and two-candle patterns, yes: waiting for the next candle to close in the pattern's direction is the standard rule, and for the hanging man and inverted hammer it is close to essential. But confirmation has a cost, a later entry and a smaller reward in R, and three-candle patterns already include it.

## What confirmation means

Confirmation is a rule that the candle after the pattern must agree with it before you act. For a bullish pattern the common versions are:

- **Loose:** the next candle closes higher than the pattern's close.
- **Standard:** the next candle closes above the pattern's high (or, for two-candle patterns, above the high of the second candle).
- **Strict:** the next candle is a strong green candle that closes in the top third of its own range, above the pattern's high.

Bearish patterns use the mirror rules.

The logic is simple. A single candle tells you what happened in one period. Whether the other side follows through is not known until the next period. Confirmation turns a one-period story into a two-period story.

## Which patterns need it most

| Pattern | Confirmation usually needed? | Why |
|---|---|---|
| [Hanging man](/hanging-man/) | Yes, strongly | The candle still closed near its high; the bearish case is only a hint |
| Inverted hammer | Yes, strongly | The candle closed near its low; the bullish case is only a hint |
| Doji, spinning top | Yes | No direction on their own |
| Harami | Yes | Shows a stall, not a reversal |
| Hammer, shooting star | Usually | The story is complete, but often fails without follow-through |
| Engulfing | Often | Strong on its own, but often tested again next day |
| [Three inside up/down](/three-inside-up-down/) | Built in | It is a harami plus its confirmation |
| [Morning star](/morning-star/) / evening star | Built in | The third candle is the confirmation |
| Three outside up/down | Built in | An engulfing plus its confirmation |

## What confirmation costs

Confirmation is not free. Consider a bullish pattern with a stop under its low and a fixed target.

1. **Your entry is later and higher.** The confirming candle has already moved in your direction. You buy after that move, not before it.
2. **Your stop is further away.** The stop is still under the pattern's low, so the distance to it has grown.
3. **Your reward in R shrinks.** If the target is a fixed level, such as the next resistance, less of the move remains and it is now measured against a larger risk.

You are paying for a filter. It is worth it only if it removes enough failing trades to make up for the lower reward on every trade.

## What our data can and cannot say

Our candlestick tests entered at the next open after the pattern completed, without a separate confirmation candle. So they measure each pattern without confirmation, except for patterns that have it built in. On daily bars for 10 US stocks and funds over the tuning period, January 2021 to October 2025, the best-known patterns showed **no evidence of an edge** without confirmation: the hanging man, for example, 180 trades with a stop one average range away, edge over random entry -0.04R per trade. ([How we test](/methods/).)

Two built-in-confirmation patterns had enough trades to assess. Three outside up, which is a bullish engulfing plus a higher close, gave 61 trades and an edge of +0.12R per trade (95% range -0.23 to +0.54). Label: **exploratory, not a tested result**. Three outside down gave 80 trades and an edge of -0.27R: **no evidence of an edge**. Three inside up gave only 20 trades, too few to report. We have not yet tested confirmation as a separate rule on top of the other patterns, so we cannot tell you whether it helps on these markets.

## Worked example

This is an illustration with round numbers, not a real trade.

A bullish engulfing pattern completes at 101.00 (close), with a two-candle low of 98.00. The next resistance is at 107.00.

| | Enter at next open | Wait for confirmation |
|---|---|---|
| Entry | 101.20 | Next candle closes 102.80 above the high of 101.50; enter at 102.90 |
| Stop | 97.90 | 97.90 |
| Risk | 3.30 | 5.00 |
| Reward to 107.00 | 5.80 | 4.10 |
| Reward in R | 1.76R | 0.82R |

In this example, waiting turned a trade with reward close to 2R into one with less than 1R. A trader following the [risk-reward](/risk-reward-ratio/) rule of at least 1.5R would skip the confirmed trade.

The alternatives are to accept a lower target in R, use a tighter stop under the confirming candle (with the noise risk that brings), or use a looser confirmation rule.

## A middle way

Some traders confirm on a shorter timeframe instead. After a daily pattern, they wait for the 1-hour chart to make a higher low and break above it. That confirms the pattern earlier in the next day, at a better price than waiting for the daily close.

## Verdict

Confirmation is standard for most single and two-candle patterns and essential for the hanging man and inverted hammer, whose own candle tells only half the story. It costs entry price and reward in R, sometimes enough to make the trade not worth taking. Three-candle patterns already include it; adding more makes the entry very late. Decide your confirmation rule in advance and measure whether it helps. For a pattern that almost always needs it, see [How reliable is a doji?](/answers/how-reliable-is-a-doji/), and the entries section of the [candlestick patterns guide](/guide/candlestick-patterns/).
