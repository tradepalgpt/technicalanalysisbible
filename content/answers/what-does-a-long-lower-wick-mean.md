---
slug: what-does-a-long-lower-wick-mean
title: What does a long lower wick mean?
description: A long lower wick means price fell during the period and was pushed back up. When it signals buyers stepping in, and when it is just noise.
query: what does a long lower wick mean
pillar: candlestick-patterns
publish: 2026-12-18
reviewed: 16 November 2026
guides: [hammer, pin-bar, dragonfly-doji, hanging-man]
siblings: [what-does-a-long-upper-wick-mean, is-a-hammer-candle-bullish-or-bearish]
value: [data, table, example, verdict]
---

A long lower wick means sellers pushed price well below the open during the period, but buyers pushed it back up before the close. After a fall, at support, it shows lower prices being rejected; after a rise it can be an early warning that sellers are testing.

## What the wick records

The lower wick runs from the bottom of the body to the low of the period. A long one means price traded much lower than where it finished. Sellers were in control for part of the period, and then buyers absorbed the selling and lifted price.

That is the fact. The meaning depends on context, and the most common mistake is to read every long lower wick as bullish.

## The candles built on a long lower wick

Several named patterns are, at heart, a long lower wick:

- **[Hammer](/hammer/):** small body near the top, long lower wick, after a fall. Bullish reversal.
- **[Hanging man](/hanging-man/):** the same shape after a rise. Bearish warning.
- **[Dragonfly doji](/dragonfly-doji/):** no body at all, with open, high and close together at the top. Bullish after a fall.
- **[Pin bar](/pin-bar/):** a price-action term for a candle with one long tail (wick) and a small body at the other end. A bullish pin bar is a long lower tail. Pin bar traders often also require the tail to stick out beyond the surrounding candles.

| Where the long lower wick appears | Common name | Usual reading |
|---|---|---|
| After a fall, at support | Hammer, dragonfly doji, bullish pin bar | Lower prices rejected; bullish |
| After a rise | Hanging man | Sellers testing; bearish warning |
| Just below a prior low, closing back above | Sweep, failed breakdown | Stops below the low triggered, then reversed |
| In a quiet range | No special name | Little meaning |

## What our test found

Daily bars for 10 US stocks and funds (SPY, QQQ, IWM, Apple, Microsoft, Nvidia, Tesla, Amazon, JPMorgan, Exxon), January 2021 to October 2025, tuning period. Entry at the next open, 2R target, 20-day limit, costs both ways, compared with random entries in the same markets and quarters.

| Pattern | Side | Stop | Trades | Edge over random entry, R per trade | Label |
|---|---|---|---|---|---|
| Hammer | Long | 1 ATR from close | 191 | +0.02 | No evidence of an edge |
| Hammer | Long | Under the low | 195 | +0.04 | No evidence of an edge |
| Hanging man | Short | 1 ATR from close | 180 | -0.04 | No evidence of an edge |
| Pin bar (long tail down) | Long | Either | 20 | Not reported | Too few trades |
| Dragonfly doji | Long | Either | 8 | Not reported | Too few trades |

([How we test](/methods/).)

So a long lower wick, captured by these detectors and traded mechanically, did no better than random entries in this sample. Notice how rare the stricter versions were. Our pin bar detector, which requires the tail to stand out from nearby candles, produced 20 long trades in almost five years on 10 markets. The looser hammer rule produced about ten times as many. Stricter rules find fewer, and the count was too small to say whether they did better.

## Why the stop is the hard part

The natural stop for a long lower wick is just under its low. The trouble on daily charts is that a long wick moves the stop a long way from the entry, which means a smaller position; while a short wick puts it close, inside the next day's normal movement. With the stop just under the hammer's low, 40% of our hammer trades ended on the day they were entered. A stop one average daily range from the close cut that to 26%.

## How to judge a long lower wick

1. **Was there a fall first?** Without one it is not a hammer, and after a rise it is a warning, not a buy.
2. **Did the wick test a level?** Prior low, support zone, round number, a moving average price has respected.
3. **How did it close?** The higher the close in the range, the stronger the rejection.
4. **Was volume heavy?** Heavy volume on the wick means many traders took part in the rejection.
5. **What happened next?** A close above the wick candle's high confirms. A close below its low cancels it.

## Worked example

This is an illustration with round numbers, not a real trade.

Gold falls from 2,450 to 2,360 over two weeks. A level at 2,350 has held twice this year. Today it opens at 2,362, drops to 2,338, and closes at 2,366. Lower wick: 24, six times the body of 4. The average daily range is 30, so the wick alone is most of a normal day.

The wick broke below 2,350 and closed back above it: a hammer that also swept the prior low. Next day closes at 2,375, above the hammer's high.

A trader buys at the next open, 2,376. A stop just under the hammer's low, at 2,336, risks 40, more than a normal day's range, so the position is smaller. Target at 2R: 2,456.

## Verdict

A long lower wick means lower prices were tried and rejected inside the period. After a fall, at a level, with a confirming close, it is one of the clearer stories a chart tells. On its own, traded mechanically, the hammer version showed no evidence of an edge in our tuning-period test. Read the wick, then check where it sits. For the opposite shape, see [What does a long upper wick mean?](/answers/what-does-a-long-upper-wick-mean/); for the full family, the [candlestick patterns guide](/guide/candlestick-patterns/).
