---
slug: difference-between-hammer-and-hanging-man
title: What is the difference between a hammer and a hanging man?
description: A hammer and a hanging man are the same candle shape. The only difference is the trend before it, and our test found neither beat random entry.
query: difference between hammer and hanging man
pillar: candlestick-patterns
publish: 2026-12-07
reviewed: 16 November 2026
guides: [hammer, hanging-man, moving-average-crossover]
siblings: [is-a-hammer-candle-bullish-or-bearish, inverted-hammer-vs-shooting-star]
value: [data, table, example, verdict]
---

A hammer and a hanging man are the same candle: a small body at the top with a long lower shadow. The only difference is what came before it: after a fall it is a bullish hammer, after a rise it is a bearish hanging man, and the two need different amounts of confirmation.

## Same shape, opposite meanings

Draw the two candles side by side and you cannot tell them apart. Both have:

- a small body in the upper part of the range;
- a lower shadow at least about twice the length of the body;
- little or no upper shadow.

The body can be either colour in both cases. What separates them is the chart to the left.

A [hammer](/hammer/) comes after a decline. Sellers pushed price lower during the period, buyers pushed it back. That rejection of lower prices, after a run of lower prices, is read as bullish.

A [hanging man](/hanging-man/) comes after a rise. The candle still closed near its high, so on the face of it buyers won. But the long lower shadow shows that sellers were able to push price a long way down inside the period, something they had not been able to do during the rise. That first crack is read as a bearish warning. The name is said to come from the shape: a body hanging from a rope, with the legs dangling below.

## Why traders treat them differently

Most writers on candlesticks give the two patterns different weight:

| | Hammer | Hanging man |
|---|---|---|
| Comes after | A fall | A rise |
| Reading | Bullish reversal | Bearish warning |
| Close near the high means | Buyers won the period | Buyers still won, so the signal is weaker |
| Typical confirmation | Next candle closes above the hammer | Next candle closes below the hanging man's body, often required |
| Body colour preference | Green slightly stronger | Red slightly stronger |
| Stop for a trade | Under the low | Above the high |

The reason for the stricter confirmation on the hanging man is logical. The hammer's story is complete in one candle: sellers attacked and lost. The hanging man's story is not: sellers attacked and *also* lost, but showed that they can attack. Whether that matters depends on what they do next.

## How "after a rise" gets decided

Because the shape is identical, the whole difference comes down to the trend rule. There is no standard one. Common versions:

- price is above (for a hanging man) or below (for a hammer) a short moving average such as the 10 or 20-period;
- the close is higher or lower than it was 5 or 10 candles ago;
- the candle forms at a new high or low for the last 10 to 20 candles.

A [moving average](/moving-average-crossover/) rule is the simplest to apply consistently. Our detectors use the direction of the last 10 bars. Two screeners with different trend rules will label the same candle differently, and one will call it a hammer while another calls it nothing at all.

## What our test found

We tested both on daily bars for 10 US stocks and funds (SPY, QQQ, IWM, Apple, Microsoft, Nvidia, Tesla, Amazon, JPMorgan, Exxon) over the tuning period, January 2021 to October 2025. Hammers were bought and hanging men were sold at the next open, with a 2R target and a 20-day limit, and compared with random entries in the same markets and quarters.

| Pattern | Stop | Trades | Edge over random entry, R per trade | 95% range | Same-day exits | Label |
|---|---|---|---|---|---|---|
| Hammer (long) | 1 ATR from close | 191 | +0.02 | -0.18 to +0.24 | 26% | No evidence of an edge |
| Hammer (long) | Under the low | 195 | +0.04 | -0.16 to +0.25 | 40% | No evidence of an edge |
| Hanging man (short) | 1 ATR from close | 180 | -0.04 | -0.23 to +0.17 | 25% | No evidence of an edge |
| Hanging man (short) | Above the high | 191 | -0.05 | -0.20 to +0.09 | 82% | No evidence of an edge |

([How we test](/methods/).)

Two things stand out that a pattern guide will not tell you:

1. **Neither pattern beat random entry** in this sample, traded mechanically without location or confirmation.
2. **A stop above the hanging man's high failed badly on daily bars.** 82% of those trades exited on the day they were entered. The hanging man's high is its close or near it, so a stop just above it sits right where the next day opens. The hanging man needs a wider stop than its shape suggests.

The test sample also flatters long trades: these 10 markets rose strongly over the period, so selling any pattern after a rise was swimming against the tide.

## Worked example

This is an illustration with round numbers, not a real trade.

The same candle on two charts: open 50.00, high 50.40, low 47.60, close 50.30.

**Chart A.** The stock has fallen from 58 to 50 over three weeks. This is a hammer. A trader waiting for confirmation sees the next day close at 51.00, above the hammer's high, and buys at the following open, 51.10, with a stop under the low at 47.50. Risk: 3.60.

**Chart B.** The stock has risen from 42 to 50 over three weeks and reached last year's high. This is a hanging man. The next day closes at 49.20, below the hanging man's body. A trader sells at the following open, 49.10. A stop just above the high at 50.50 would risk only 1.40, inside a normal day's range of about 2.00, so they use a stop one average range above the signal close instead, at 51.20. Risk: 2.10.

Same candle, opposite trades, different stops.

## Verdict

The hammer and hanging man differ only in the trend before them, so the trend rule you use matters as much as the candle. The hanging man is the weaker of the two and needs confirmation and a wider stop. In our tuning-period test neither showed evidence of an edge over random entry. For the mirror-image pair, see [Inverted hammer vs shooting star](/answers/inverted-hammer-vs-shooting-star/), and for where these fit among all patterns, the [candlestick patterns guide](/guide/candlestick-patterns/).
