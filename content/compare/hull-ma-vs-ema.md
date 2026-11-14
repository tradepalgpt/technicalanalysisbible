---
slug: hull-ma-vs-ema
title: Hull Moving Average vs EMA
a: hull-moving-average
b: exponential-moving-average
reviewed: 14 November 2026
---

The Hull Moving Average (HMA) and the Exponential Moving Average (EMA) are both moving averages built to react faster than a simple average. The EMA does it by weighting recent prices more. The HMA combines three weighted averages to cancel much of the lag, so it turns earlier and looks smoother. The price is overshoot and more direction changes.

## At a glance

| | Hull Moving Average | Exponential Moving Average |
|---|---|---|
| Built from | Three weighted moving averages | Recent price and the previous EMA |
| Formula | WMA(2 x WMA(n/2) - WMA(n), sqrt(n)) | k = 2 / (N + 1); EMA = close x k + previous EMA x (1 - k) |
| Created by | Alan Hull, 2005 | No single inventor |
| Common settings | 9 and 21; varies by platform | 9, 12, 21, 26, 50, 200 |
| Lag | Much lower | Lower than SMA, higher than HMA |
| Smoothness | Smooth, but can overshoot | Smoother, follows price more closely |
| Best market state | Trend | Trend |
| Main weakness | Flips often in ranges and at sharp turns | Whipsaws in ranges |

## When to use Hull Moving Average

The [Hull Moving Average](/hull-moving-average/) suits traders who want the slope of a trend to change early. Its slope is easy to read, and many packages colour the line by direction. It is useful as a quick filter and for timing. It can push past price at sharp turns, so a brief overshoot is a side effect, not a signal.

## When to use Exponential Moving Average

The [Exponential Moving Average](/exponential-moving-average/) suits traders who want a standard, widely used line. The 20, 50 and 200 are watched by many people, so they often act as reference levels. It is also the building block of [MACD](/macd/), so many indicators already include it. Its value is easier to calculate and to compare between platforms.

## Using both together

Some traders use a longer EMA, such as the 50 or 200, as the trend filter and a shorter HMA for timing. That keeps the early turns of the HMA while the EMA gives the wider picture. Remember both are lagging, and both do poorly in sideways markets. A tool such as [ADX](/adx/) can help tell trends from ranges.

## Common mix-ups

- **Thinking less lag means better signals.** The HMA turns sooner but also flips more on small pullbacks.
- **Comparing the same number across tools.** A 21-period HMA and a 21-period EMA behave differently.
- **Expecting identical values between platforms.** Rounding of the half and square-root lengths can change the HMA slightly.
- **Treating either as a prediction.** Both are built from past prices.

## FAQ

**Is the Hull Moving Average better than the EMA?**
Neither is better in every case. The HMA turns earlier but overshoots and flips more. The EMA is slower but steadier. Test both on your market.

**Which has less lag?**
The HMA, by design. It subtracts a slower average to cancel delay, then smooths the result.

**Why is MACD built from EMAs and not the HMA?**
MACD is defined with EMAs by its creator. The HMA is a separate tool and is not part of MACD.

**Can I use them in ranges?**
Both work poorly there. The lines change direction often when price moves sideways.
