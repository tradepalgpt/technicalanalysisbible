---
slug: best-timeframe-for-candlestick-patterns
title: What is the best timeframe for candlestick patterns?
description: Daily and weekly charts give candlestick patterns the most weight; short timeframes produce many noisy patterns. How to combine timeframes well.
query: best timeframe for candlestick patterns
pillar: candlestick-patterns
publish: 2026-12-25
reviewed: 16 November 2026
guides: [time-frames, multiple-time-frame-analysis, atr]
siblings: [do-candlestick-patterns-work-in-forex, where-to-put-a-stop-loss-on-a-hammer]
value: [data, table, example, verdict]
---

The daily chart is the most widely used timeframe for candlestick patterns, and daily and weekly candles carry the most weight because each reflects a full session or more of trading. Shorter timeframes produce far more patterns, most of them noise; many traders spot the pattern on the daily chart and time the entry on a shorter one.

## Why higher timeframes carry more weight

A candle is a summary of every trade in its period. A daily candle on a large stock summarises a whole session of trading by many participants. A 1-minute candle summarises a minute, and on a quiet minute that might be a handful of orders.

When a daily hammer forms, sellers had a whole day to push price lower and failed to hold it there. When a 1-minute hammer forms, one order may have hit the bid and been absorbed. The shape is the same; the amount of information behind it is not.

Three more reasons favour higher timeframes:

- **Fewer patterns.** On a 5-minute chart, a single trading day produces dozens of candles and usually several named patterns. Most will not lead anywhere. On a daily chart, the patterns are fewer and easier to take seriously.
- **Costs are smaller in R.** The spread and commission are the same in price terms on every timeframe, but a daily stop is many times wider than a 5-minute stop, so costs eat a much smaller share of each trade.
- **Candlestick rules were written for daily charts.** Japanese rice traders and the early Western books worked on daily bars. Patterns like the morning star and piercing line assume an overnight gap, which only exists between sessions.

## Comparing timeframes

| Timeframe | Patterns per month | Information per candle | Costs as share of risk | Typical use |
|---|---|---|---|---|
| 1 to 5 minutes | Very many | Low | High | Entry timing only |
| 15 minutes to 1 hour | Many | Moderate | Moderate | Intraday trading around levels |
| 4 hours | Several | Good | Low | Swing entries on 24-hour markets |
| Daily | A few per market | High | Low | The standard for candlestick work |
| Weekly | Rare | Very high | Very low | Big-picture turns, context |

The counts in the second column are general, not measured. They depend on the market and the detector rules.

## What our data says about daily charts

Our candlestick tests used daily bars only, on 10 US stocks and funds (SPY, QQQ, IWM, Apple, Microsoft, Nvidia, Tesla, Amazon, JPMorgan, Exxon), January 2021 to October 2025, the tuning period. Even on that timeframe, which gives each pattern the most weight, the best-known patterns showed **no evidence of an edge** over random entry: for example the hammer, 191 trades, edge +0.02R per trade; bearish engulfing, 202 trades, -0.06R. ([How we test](/methods/).)

One daily-chart lesson from those tests carries straight over to choosing a timeframe: **the stop must fit the timeframe's noise.** With a stop just beyond the pattern, 82% of hanging man trades and 62% of long doji trades ended on the day they were entered. Those stops sat inside one ordinary daily range. With a stop one [average true range](/atr/) away, same-day exits fell to around 20 to 26%. On shorter timeframes the problem is worse, because each candle's range is small relative to the market's movement.

We have not tested intraday timeframes and publish no intraday figures.

## How to combine timeframes

A common approach, explained in the [multiple time frame analysis](/multiple-time-frame-analysis/) guide, uses two or three charts:

1. **Higher timeframe (weekly or daily):** the trend and the levels. Where are support and resistance? Which way is the bigger move?
2. **Trading timeframe (daily or 4-hour):** the pattern. A hammer at a weekly support level after a daily fall.
3. **Lower timeframe (1-hour or 15-minute), optional:** the entry. Once the daily hammer is confirmed, wait for a small pullback on the 1-hour chart to get a better price.

The rule of thumb in [time frames](/time-frames/) is a ratio of about four to six between each step, for example weekly, daily, 4-hour.

## Worked example

This is an illustration with round numbers, not a real trade.

A stock's weekly chart shows support at 90, tested twice in the past two years. The daily chart shows a three-week fall from 104 to 92. Today's daily candle is a hammer: low 89.60, close 92.40. The 14-day ATR is 2.50.

- **Daily-only trader:** buys at the next open, 92.60, stop one ATR below the signal close at 89.90. Risk 2.70. Target 2R: 98.00.
- **Daily plus 1-hour trader:** waits for the 1-hour chart to dip back to 91.50 the next morning and form a small higher low, then buys at 91.60 with the same stop at 89.90. Risk 1.70. Same 98.00 target is now nearly 3.8R.

The lower timeframe improved the entry. It did not change the setup, which came from the weekly level and the daily candle.

## Verdict

Daily is the standard timeframe for candlestick patterns, with weekly for context. Each daily candle reflects enough trading to mean something, costs are small in R, and the classic rules were written for it. Short timeframes are fine for timing an entry but produce too many patterns to read on their own. Whatever timeframe you use, size the stop to that timeframe's normal range. See also [Where should you put a stop loss on a hammer?](/answers/where-to-put-a-stop-loss-on-a-hammer/) and the [candlestick patterns guide](/guide/candlestick-patterns/).
