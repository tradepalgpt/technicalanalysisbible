---
slug: ema-vs-sma
title: EMA vs SMA
a: exponential-moving-average
b: simple-moving-average
reviewed: 14 November 2026
---

The Simple Moving Average (SMA) weights every price in its window equally. The Exponential Moving Average (EMA) gives more weight to recent prices, so it reacts faster and lags less. The trade-off is that the EMA's speed brings more false signals in sideways markets, while the SMA is steadier but slower to turn.

## At a glance

| | EMA | SMA |
|---|---|---|
| Measures | Average with more weight on recent closes | Plain average of the last N closes |
| Formula | EMA = (close x k) + (previous EMA x (1 - k)), k = 2 / (N + 1) | Sum of last N closes / N |
| Created by | No single inventor; exponential smoothing method | No single inventor; standard statistical average |
| Common settings | 9, 12, 21, 26, 50, 200 | 20, 50, 200 |
| Speed | Faster, less lag | Slower, more lag |
| Best market state | Trends | Trends |
| Main weakness | More false signals in ranges | Slow to react; jumps when an old price drops out |

## When to use the EMA

The [EMA](/exponential-moving-average/) suits traders who want a moving average that follows price more closely. It turns sooner after a change in direction, which helps with entry timing and short-term trend filters. It is also the building block of other tools, such as [MACD](/macd/). Because it reacts to recent prices more strongly, it can be pulled around by one large bar.

## When to use the SMA

The [SMA](/simple-moving-average/) suits traders who want a smoother, steadier line. Because every close in the window counts equally, a single recent bar moves it less. Long averages such as the 50 and 200 are widely watched, so many traders pay attention to how price behaves around them. It lags more, which means it is slower to confirm a new trend.

## Using both together

Some traders plot a faster EMA with a slower SMA, or compare two lengths of one type, and watch for crossovers or for price pulling back to the line. The two are closely related, so they often cross close together and carry similar information. Combining either with a different kind of evidence, such as [support and resistance](/support-and-resistance/), adds more than stacking both averages.

## Common mix-ups

- **Thinking the EMA is always better.** Being faster also means more false signals when price moves sideways.
- **Comparing lines of different lengths.** A 20 EMA and a 50 SMA differ because of their length, not only their type.
- **Expecting identical first values on every platform.** The EMA needs a starting value, so early readings can differ before they converge.
- **Calling either a signal on its own.** Both lag price by design.

## FAQ

**Which is better, EMA or SMA?**
Neither is better in general. The EMA is faster and suits shorter-term trend following. The SMA is steadier and suits traders who want fewer signals. Test the one that fits your market and time frame.

**Does the EMA lag less than the SMA?**
Yes, for the same period. The EMA weights recent prices more heavily, so it turns sooner. It still lags, because it is built from past closes.

**Why do the 50 and 200 moving averages matter?**
Many traders watch them, so price often reacts near them. That attention comes from their wide use, not from any property that guarantees a reaction.

**Do the two give the same values?**
No. They start from the same prices but weight them differently, so the lines differ, especially after sharp moves.
