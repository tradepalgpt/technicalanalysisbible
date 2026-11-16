---
slug: do-candlestick-patterns-work-on-crypto
title: Do candlestick patterns work on crypto?
description: Candlestick patterns form on crypto, but 24/7 trading, no gaps and exchange-set daily closes change them. What we can and cannot say from our data.
query: do candlestick patterns work on crypto
pillar: candlestick-patterns
publish: 2026-12-21
reviewed: 16 November 2026
guides: [candlestick-chart, bullish-engulfing, morning-star, time-frames]
siblings: [do-candlestick-patterns-work-in-forex, best-timeframe-for-candlestick-patterns]
value: [data, table, example, verdict, chart]
chart: candlestick-chart
---

Candlestick patterns form on crypto charts, but three things change how they behave: the market never closes, there are almost no gaps between candles, and the daily close is a convention set by each exchange. Patterns that need gaps rarely appear, and our data on crypto alone is far too thin to judge any pattern.

## The shapes are the same

A [candlestick](/candlestick-chart/) is just the open, high, low and close of a period. Bitcoin's daily candle is drawn the same way as Apple's. A hammer on a crypto chart has the same shape and tells the same story about the period: sellers pushed lower and buyers pushed back.

What differs is how the candles are built, and that affects which patterns can form and what they mean.

## Three differences that matter

### 1. No closing bell

Crypto trades 24 hours a day, seven days a week. There is no natural end of day. Most exchanges and charting platforms close the daily candle at midnight UTC, but this is a setting, not a rule, and some platforms let you choose another time zone. Move the close by a few hours and every daily candle changes shape. A hammer on one chart can be an ordinary candle on another.

### 2. No gaps

On a single exchange, each candle opens at or very near the previous close, because trading never stopped. That matters for patterns whose classic definition needs a gap:

| Pattern | Classic rule | On crypto |
|---|---|---|
| [Bullish engulfing](/bullish-engulfing/) | Second candle opens at or below first close | Forms often; open usually equals prior close |
| Piercing line | Second candle opens below first low | Rare unless the rule is relaxed |
| [Morning star](/morning-star/) | Middle candle gaps below the first | Rare unless the gap rule is dropped |
| Abandoned baby | Middle candle isolated by gaps on both sides | Almost never |
| Kicker | Gap in the opposite direction | Almost never |

Most crypto traders and many platforms quietly relax these rules. That is fine, but it means a "morning star" on a crypto chart is a looser pattern than the one described in candlestick books.

### 3. Thin hours and wicks

Liquidity on crypto varies a lot through the day and the week, and weekends are often thinner. A large order in a thin hour can print a long wick that recovers within minutes. On a daily chart that becomes a dramatic hammer or shooting star which reflects a few orders, not a broad change of mind. Different exchanges can also show different wicks for the same coin, because each has its own order book.

## What our data can say

Our main candlestick study used US stocks and funds. Bitcoin was added in a follow-up on 39 markets, testing two patterns over the tuning period (January 2021 to October 2025).

- **Inverted hammer on bitcoin:** 9 trades.
- **Tweezer tops on bitcoin:** 13 trades.

Both are far below our 30-trade minimum, so we publish no result for bitcoin on its own, and we would not draw any conclusion from them. ([How we test](/methods/).) Across all 39 markets combined, the inverted hammer result (420 trades, edge over random entry +0.20R per trade) is **exploratory, not a tested result**, with a held-back test under review; tweezer tops showed **no evidence of an edge** (215 trades, -0.07R). Bitcoin was a tiny part of each.

That is the honest position: we have no tested crypto-specific finding, and anyone claiming precise crypto pattern statistics should tell you their sample, their daily close time and their comparison.

## Practical adjustments for crypto charts

1. **Fix your daily close.** Pick one (midnight UTC is the most common) and use it every time, including in any testing.
2. **Use one exchange, or an index price.** Do not compare a wick on one exchange with a level drawn on another.
3. **Relax gap rules on purpose, and write the new rule down.** Otherwise your platform decides for you.
4. **Prefer daily and higher timeframes.** On 1 to 15-minute crypto charts, patterns form constantly and long wicks are routine.
5. **Weight weekend candles less**, or at least check volume on them.
6. **Use a volatility stop.** Crypto's daily range is wide; a stop just under a wick is often inside normal movement. See [time frames](/time-frames/) for matching stop size to chart period.

## Worked example

This is an illustration with round numbers, not a real trade.

Bitcoin falls from 72,000 to 60,000 over three weeks on a midnight-UTC daily chart. A level at 59,000 held in the spring. Today opens at 60,400, trades down to 58,600 in a thin Sunday morning hour, and closes at 60,900. That is a hammer that swept the spring low.

But check volume: it is 40% below the weekday average. And a second exchange shows a low of 59,200, not 58,600. The wick partly reflects one order book. A cautious trader waits for Monday's close. If it closes above 61,300 (the hammer's high), they buy at the next open with a stop one average daily range (say 2,400) below the signal close.

## Verdict

Candlestick shapes work the same way on crypto as anywhere else, but the market's structure changes which patterns can form and how much a single wick means. Gap-based patterns are rare unless you relax the rules. We have no crypto-only test result with enough trades to report. Fix your daily close, stick to higher timeframes, and give stops room. For the closest comparison, see [Do candlestick patterns work in forex?](/answers/do-candlestick-patterns-work-in-forex/), and the market-by-market section of the [candlestick patterns guide](/guide/candlestick-patterns/).
