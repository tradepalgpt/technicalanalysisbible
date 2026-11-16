---
slug: where-to-put-a-stop-loss-on-a-hammer
title: Where should you put a stop loss on a hammer?
description: The usual stop for a hammer is just below its low, but on daily charts that is often too tight. What our test found, with a worked example in R.
query: where to put stop loss on hammer candle
pillar: candlestick-patterns
publish: 2026-12-28
reviewed: 16 November 2026
guides: [hammer, stop-loss, atr-stop, structure-stop]
siblings: [is-a-hammer-candle-bullish-or-bearish, best-timeframe-for-candlestick-patterns]
value: [data, table, example, verdict]
---

The usual place for a stop loss on a hammer is just below the hammer's low, because a move below it means the rejection failed. On daily charts that stop is often too tight; in our test a stop one average daily range from the close was hit on the entry day far less often.

## The textbook stop

A [hammer](/hammer/) says that sellers pushed price down and buyers pushed it back. Its low is the point the market rejected. If price trades below that low again, the rejection did not hold, and the reason for the trade is gone. So the textbook [stop loss](/stop-loss/) sits just below the low, with a small buffer for the spread.

This is a [structure stop](/structure-stop/): it is placed where the chart says the idea is wrong. It has two strengths. It is easy to explain, and it is tied to the pattern itself.

## The problem with it

A hammer closes near its high, with a long lower wick. So the stop under its low is the length of the hammer's whole range below the close. That causes two opposite problems:

- **A big hammer gives a wide stop.** If the hammer's range is three times a normal day, your risk per share is large and your position must be small.
- **A small hammer gives a stop inside the noise.** If the hammer's range is smaller than a normal day, the next day's ordinary movement can reach the stop without the idea being wrong at all.

The second problem is the common one, because the hammer's low is often close to where the next day opens.

## What our test found

Daily bars for 10 US stocks and funds (SPY, QQQ, IWM, Apple, Microsoft, Nvidia, Tesla, Amazon, JPMorgan, Exxon), January 2021 to October 2025, tuning period. Every hammer after a 10-bar dip was bought at the next open, with a 2R target and a 20-day limit, compared with random entries. We ran two stops.

| Stop rule | Trades | Edge over random entry, R per trade | 95% range | Trades exited on the entry day | Label |
|---|---|---|---|---|---|
| Just under the hammer's low | 195 | +0.04 | -0.16 to +0.25 | 40% | No evidence of an edge |
| One average daily range below the signal close | 191 | +0.02 | -0.18 to +0.24 | 26% | No evidence of an edge |

([How we test](/methods/).)

Neither stop turned the hammer into a pattern with an edge over random entry; that is the first finding, and it is not about stops at all. The second finding is what the hammer guide cannot tell you: **with the stop under the low, 40% of trades ended on the day they were entered.** The [ATR stop](/atr-stop/), one average range from the close, cut that to 26%.

Same-day exits matter for two reasons. Daily bars cannot show whether the stop or the target was hit first on a day that touched both, so a high share makes any backtest less trustworthy. And in live trading, a stop that is hit within hours of entry on routine movement is a sign the stop was inside the noise.

Across all our single-candle tests the pattern repeated: the stop just beyond the pattern produced 82% same-day exits on the hanging man and the inverted hammer.

## Choosing between the two

| | Under the low | One ATR from the close |
|---|---|---|
| Logic | Where the pattern fails | Where normal movement ends |
| Risk size | Varies with the hammer | Steady relative to the market |
| Risk of noise hits | High on small hammers | Lower |
| Position size | Changes trade to trade | Steadier |

A practical blend many traders use: take the **wider** of the two. Put the stop under the hammer's low, but never closer to the entry than about one average daily range. If that makes the risk too large for the target available, skip the trade.

## Worked example

This is an illustration with round numbers, not a real trade.

A stock forms a hammer: open 40.20, high 40.60, low 39.40, close 40.50. The 14-day average range is 1.50. Next day opens at 40.60.

- **Stop under the low:** 39.30. Risk 1.30, less than one normal day's range. Very likely to be within reach of ordinary movement.
- **Stop one ATR below the signal close:** 40.50 - 1.50 = 39.00. Risk 1.60.
- **Wider of the two:** 39.00.

With 200 at risk, the position is 200 / 1.60 = 125 shares. The 2R target is 40.60 + 3.20 = 43.80. Check that no resistance sits between 40.60 and 43.80; if the last swing high is at 42.00, a 2R target is unrealistic and the trade may not be worth taking.

## Verdict

Put the stop where the hammer's idea fails, below its low, but make sure it is outside normal daily movement; on most daily charts that means at least one average range from the entry. In our tuning-period test, the tight stop under the low ended 40% of trades on day one, and neither stop gave the hammer an edge over random entry. A stop protects a trade; it cannot create an edge the pattern does not have. For timeframes and noise, see [What is the best timeframe for candlestick patterns?](/answers/best-timeframe-for-candlestick-patterns/), and for the full entry and stop section, the [candlestick patterns guide](/guide/candlestick-patterns/).
