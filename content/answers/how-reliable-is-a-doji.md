---
slug: how-reliable-is-a-doji
title: How reliable is a doji?
description: A doji on its own is not a reliable signal. Our test of over 800 doji trades on 10 US markets found no edge over random entry; context decides.
query: how reliable is a doji
pillar: candlestick-patterns
publish: 2026-12-04
reviewed: 16 November 2026
guides: [doji, spinning-top, dragonfly-doji, gravestone-doji]
siblings: [do-you-need-confirmation-after-a-candlestick-pattern, morning-star-vs-morning-doji-star]
value: [data, table, verdict, example]
---

A doji on its own is not a reliable reversal signal. In our test of more than 800 doji trades on 10 US markets, trading against the prior trend did no better than random entry; a doji is useful as a warning at a key level, confirmed by the next candle.

## What a doji tells you

A [doji](/doji/) is a candle whose open and close are equal or almost equal. Buyers and sellers ended the period level. After a strong run, that is a change: the side that had been winning failed to win this period. Traders read it as hesitation and a possible turn.

But "possible" is doing a lot of work. Dojis are common. On a liquid daily chart they appear many times a year, most of them in the middle of ordinary movement. A doji is the candle version of a shrug. It says the period was a draw. It does not say what comes next.

## Why "reliable" is hard to pin down

Three things change how often a doji "works":

- **The body limit.** There is no single definition of "almost equal". Many traders and platforms use a body under 5 to 10% of the candle's range. A looser limit finds more dojis and dilutes them.
- **The direction you bet on.** A doji has no direction by itself. You have to decide whether to bet on a reversal (against the trend before it) or a pause. Our detector bets on a reversal, against the last 10 bars.
- **The type.** A [dragonfly doji](/dragonfly-doji/) (long lower shadow) and a [gravestone doji](/gravestone-doji/) (long upper shadow) carry a clear rejection; a plain doji or long-legged doji does not.

A doji is also a close relative of the [spinning top](/spinning-top/): both have small bodies, but the spinning top has a visible body and is usually read as a weaker version of the same hesitation.

## What our test found

We traded every doji against its prior 10-bar trend on daily bars for 10 US stocks and funds (SPY, QQQ, IWM, Apple, Microsoft, Nvidia, Tesla, Amazon, JPMorgan, Exxon), January 2021 to October 2025, the tuning period. Entry at the next open, target 2R, 20-day limit, spread paid both ways, compared with random entries in the same markets and quarters.

| Doji trade | Stop | Trades | Edge over random entry, R per trade | 95% range | Same-day exits | Label |
|---|---|---|---|---|---|---|
| Long after a fall | 1 ATR from close | 300 | -0.08 | -0.25 to +0.10 | 22% | No evidence of an edge |
| Long after a fall | Beyond the doji | 320 | -0.11 | -0.29 to +0.05 | 62% | No evidence of an edge |
| Short after a rise | 1 ATR from close | 507 | +0.09 | -0.03 to +0.22 | 23% | No evidence of an edge |
| Short after a rise | Beyond the doji | 573 | +0.02 | -0.10 to +0.16 | 69% | No evidence of an edge |

The short-after-a-rise version came closest to standing out: its raw p was 0.047. But it was one of 36 variants assessed, and after adjusting for that, its adjusted p was 0.54, easily explained by luck. All four ranges include zero. ([How we test](/methods/).)

Two lessons from the table are not in the doji guide:

1. **A stop just beyond the doji is too tight on daily bars.** A doji's range is small by definition, so a stop at its extreme sits inside normal noise. Between 62% and 69% of those trades ended on the day they were entered.
2. **The dragonfly and gravestone versions are rare.** Our detectors found only 8 dragonfly doji trades and 18 gravestone doji trades over almost five years on 10 markets: too few to report.

## Making a doji more useful

Traders who use dojis tend to apply three rules:

1. **Only after a stretched move.** Several large candles in one direction, or price far from its moving average.
2. **Only at a level.** Resistance, support, a round number, the edge of a Bollinger Band.
3. **Only with confirmation.** After a rise, the next candle closes below the doji's low; after a fall, above its high.

A doji inside a quiet range, or in the first few candles of a new move, can be skipped.

## Worked example

This is an illustration with round numbers, not a real trade.

An index fund rises from 400 to 440 in three weeks, its biggest run in a year, and reaches the top of a range it failed at twice before. Today it opens at 440.10 and closes at 440.00, with a high of 443 and a low of 437. That is a doji at resistance after a stretched move.

Tomorrow it opens at 439.50 and closes at 435, below the doji's low. A trader who sells at the next open, 434.80, with a stop one average daily range (say 5.00) above the signal close of 435, risks 5.20 per unit. A 2R target sits at 424.40.

Without the run, without the level, and without the confirming close, the same doji would not be worth a look.

## Verdict

A doji is reliable as a description: buyers and sellers drew the period. It is not reliable as a signal. In our tuning-period test of more than 800 doji trades it showed no evidence of an edge over random entry, with either stop. Use it as a warning at levels you already watch, wait for the next candle, and keep the stop outside the day's noise. For whether that confirmation step is worth its cost, see [Do you need confirmation after a candlestick pattern?](/answers/do-you-need-confirmation-after-a-candlestick-pattern/), and for the full picture, the [candlestick patterns guide](/guide/candlestick-patterns/).
