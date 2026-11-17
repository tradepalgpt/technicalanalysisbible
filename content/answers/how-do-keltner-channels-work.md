---
slug: how-do-keltner-channels-work
title: "How do Keltner Channels work?"
description: Keltner Channels put bands a multiple of ATR around an EMA. The original 1960 version, the modern one, a worked calculation and how traders read them.
query: how do keltner channels work
pillar: volatility-guide
publish: 2028-02-21
reviewed: 17 November 2026
guides: [keltner-channels, atr, bollinger-bands]
siblings: [what-is-the-ttm-squeeze, what-are-donchian-channels]
value: [chart, table, example, verdict]
chart: keltner-channels
---

Keltner Channels draw an exponential moving average with an upper and lower channel a fixed multiple of the Average True Range away, commonly a 20-period EMA with channels 2 ATR either side. Because ATR measures bar ranges, the channels are smoother and steadier than Bollinger Bands.

## How this differs from the comparison page

The side-by-side table is on [Bollinger Bands vs Keltner Channels](/compare/bollinger-bands-vs-keltner-channels/). This answer explains how Keltner Channels themselves are built and read, including the two versions you will meet.

## Two versions

[Keltner Channels](/keltner-channels/) are named after Chester Keltner, who described a channel in his 1960 book *How to Make Money in Commodities*. The version most charts show today is a later revision.

| | Original (Keltner, 1960) | Modern (common default) |
|---|---|---|
| Centre line | 10-day simple average of the typical price, (high + low + close) / 3 | 20-period exponential moving average of the close |
| Channel distance | 10-day simple average of high minus low | A multiple of [ATR](/atr/), often 2 x a 10-period ATR |
| Character | Simple, range-based | Smoother, includes gaps through ATR |

The modern form is widely credited to Linda Bradford Raschke, who popularised the EMA and ATR version. Platforms differ on the ATR period (10, 14 or 20) and on the multiplier (1.5, 2 or 2.5), so check the settings.

## Worked example (modern version)

A share has a 20-period EMA of 100.0 and a 10-period ATR of 1.5.

| Line | Calculation | Value |
|---|---|---|
| Middle | 20-period EMA | 100.00 |
| Upper (2 ATR) | 100 + 2 x 1.5 | 103.00 |
| Lower (2 ATR) | 100 - 2 x 1.5 | 97.00 |
| Upper (1.5 ATR) | 100 + 1.5 x 1.5 | 102.25 |
| Lower (1.5 ATR) | 100 - 1.5 x 1.5 | 97.75 |

The channel is 6 points wide at 2 ATR. If ATR rises to 2.0 and the EMA stays at 100, the channel widens to 96 to 104. If the market calms and ATR falls, it narrows.

## How traders read them

| Reading | Trend-following view | Range view |
|---|---|---|
| Close above the upper channel | Strength; a possible breakout | Stretched; may revert towards the middle |
| Close below the lower channel | Weakness; a possible breakdown | Stretched; may revert |
| Pullback to the middle line in a trend | A possible entry area | Not relevant |
| Flat middle line, price between channels | No trend | Fade the edges |

Because Keltner Channels use ATR rather than the standard deviation of closes, they do not balloon outward when price trends smoothly. Closes outside a Keltner Channel are therefore less common than closes outside [Bollinger Bands](/bollinger-bands/), and some traders treat them as a stronger sign of momentum.

## Keltner and the squeeze

The steadiness of Keltner Channels is why they are used in the [TTM squeeze](/answers/what-is-the-ttm-squeeze/). When the more sensitive Bollinger Bands shrink inside the steadier Keltner Channels, volatility as measured by closes has dropped below volatility as measured by ranges. That is read as a squeeze.

## Using the channel for stops

Some traders place a stop just beyond the opposite channel. Whatever the method, 1R is the distance from the side-correct fill to that first stop, times size. If the lower channel is at 97.00 and you are filled long at 100.10, a stop at 96.90 makes 1R equal to 3.20 per share. A clean stop-out is -1R; commission and any slippage come on top. As the channel moves up in a trend, the stop can follow it up, but it is never moved down.

## Common mistakes

- Comparing Keltner readings across platforms without checking the ATR period and multiplier.
- Mixing up the original and modern versions.
- Fading every close outside the channel in a trend.
- Assuming a channel touch is a signal on its own. It is a location, not an instruction.

## Verdict

Keltner Channels are an EMA with ATR-based channels either side. They are steadier than Bollinger Bands and do not widen just because price trends, which makes them good for judging stretch and trend strength and for squeeze comparisons. Check which version and which settings your chart uses before trusting any reading.

More in [the volatility guide](/guide/volatility-guide/).
