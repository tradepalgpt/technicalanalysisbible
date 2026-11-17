---
slug: what-is-the-ttm-squeeze
title: "What is the TTM squeeze?"
description: The TTM squeeze flags when Bollinger Bands move inside Keltner Channels, a sign of low volatility. How it works, a worked check and how the histogram is read.
query: what is the ttm squeeze
pillar: volatility-guide
publish: 2028-02-25
reviewed: 17 November 2026
guides: [ttm-squeeze, bollinger-bands, keltner-channels, linear-regression]
siblings: [what-is-a-bollinger-squeeze, how-do-keltner-channels-work]
value: [chart, table, example, verdict]
chart: ttm-squeeze
---

The TTM squeeze is an indicator that marks a squeeze when Bollinger Bands contract inside Keltner Channels, and adds a momentum histogram to suggest the likely direction once the squeeze ends. It was popularised by John Carter in his book *Mastering the Trade* (2005).

## The two parts

The [TTM squeeze](/ttm-squeeze/) has two parts on one panel.

1. **Squeeze dots.** Along the zero line, a dot for each bar shows whether the squeeze is on. On most platforms, a red dot (or black, in some versions) means the squeeze is on: the [Bollinger Bands](/bollinger-bands/) sit inside the [Keltner Channels](/keltner-channels/). A green (or grey) dot means it is off: the bands have moved back outside.
2. **Momentum histogram.** Bars above or below zero, based on a [linear regression](/linear-regression/) of price against an average of the recent range midpoint and a moving average. Above zero leans up, below zero leans down; the colour shading shows whether that momentum is rising or fading.

Common settings: Bollinger Bands 20 periods, 2 standard deviations; Keltner Channels 20 periods, 1.5 ATR. Platforms and later versions differ, so check the inputs.

## Why "Bollinger inside Keltner" means a squeeze

Bollinger Bands are built from the standard deviation of closes and respond quickly to changes in volatility. Keltner Channels are built from ATR and are steadier. When closes bunch up tightly, the standard deviation shrinks faster than ATR, and the Bollinger Bands slip inside the Keltner Channels. That condition says volatility has dropped well below its recent norm.

## Worked check

A market has a 20-period average of 100, a 20-bar standard deviation of 0.9, and a 20-period ATR of 1.4.

| Line | Calculation | Value |
|---|---|---|
| Upper Bollinger (2 SD) | 100 + 2 x 0.9 | 101.80 |
| Lower Bollinger | 100 - 2 x 0.9 | 98.20 |
| Upper Keltner (1.5 ATR) | 100 + 1.5 x 1.4 | 102.10 |
| Lower Keltner | 100 - 1.5 x 1.4 | 97.90 |

Upper Bollinger (101.80) is below upper Keltner (102.10), and lower Bollinger (98.20) is above lower Keltner (97.90). Both bands are inside the channels, so the squeeze is on. The test reduces to one comparison: the squeeze is on when 2 x standard deviation is less than 1.5 x ATR. Here 1.8 is less than 2.1. If the standard deviation rose above 1.05 (since 1.5 x 1.4 / 2 = 1.05), the bands would move outside and the squeeze would end. For simplicity this example uses the same middle value for both; on a chart the Keltner centre may be an EMA and differ slightly.

## How it is usually read

| Signal | Common reading | Caveat |
|---|---|---|
| Squeeze on (dots red) | Volatility low; a move may be building | Can last a long time |
| First dot after the squeeze turns off | Volatility expanding | The move has started, not finished |
| Histogram above zero and rising | Momentum leans up | Momentum can flip fast after release |
| Histogram below zero and falling | Momentum leans down | Same |

Carter described taking the trade in the direction of the histogram when the squeeze fires, that is, when the dots turn from on to off. That is his published approach, not a tested result of ours. As with the [Bollinger squeeze](/answers/what-is-a-bollinger-squeeze/), the volatility part has no direction; the histogram adds a direction guess based on recent momentum.

## In R terms

A fired squeeze often comes after tight ranges, so a stop just beyond the recent range can look small. 1R is the distance from your side-correct fill to that first stop, times size, and a tight stop means a larger size for the same 1R. A clean stop-out is exactly -1R. If the release starts with a fast spike, slippage can make the loss larger, and commission is on top. After entry the stop can tighten, never widen.

## Common mistakes

- Reading the squeeze dots as direction. They are volatility only.
- Ignoring settings. A 1.0 or 2.0 ATR Keltner changes how often squeezes appear.
- Treating the histogram colour change as a reversal signal by itself.
- Entering while the squeeze is still on and expecting an instant breakout.

## Verdict

The TTM squeeze combines a volatility test (Bollinger Bands inside Keltner Channels) with a momentum histogram. The squeeze part is a clear, rule-based way to spot low volatility; the histogram is a direction guess based on recent momentum, not a prediction. Use it to find quiet markets, then judge direction and risk separately.

More in [the volatility guide](/guide/volatility-guide/).
