---
slug: atr-vs-standard-deviation
title: ATR vs Standard Deviation
a: atr
b: standard-deviation
reviewed: 14 November 2026
---

ATR and standard deviation both measure volatility, but they do it differently. ATR averages the true range of each bar, so it captures gaps and is expressed in price units per bar. Standard deviation measures how far closing prices spread around their average, so it reflects how scattered recent closes are, not how big each bar was.

## At a glance

| | ATR | Standard deviation |
|---|---|---|
| Measures | Average size of bars, including gaps | Spread of closes around their average |
| Created by | J. Welles Wilder Jr., 1978 | Term introduced by Karl Pearson, 1894 |
| Default settings | 14 periods | 20 periods on the close |
| Uses highs and lows? | Yes, through true range | No, closes only |
| Smoothing | Wilder's smoothing | Plain statistical average |
| Common uses | Stop distance, position sizing | Bollinger Bands, volatility filters |
| Main weakness | Gives no direction | Can rise just because price trends steadily |

## When to use ATR

[ATR](/atr/) suits traders who need a practical distance in price units. Its true range includes gaps, so it reflects what a bar actually covered. That makes it a common choice for setting stop distances, sizing positions and telling quiet markets from active ones. It does not predict direction or reversals.

## When to use standard deviation

[Standard deviation](/standard-deviation/) suits traders who want a statistical measure of dispersion, or who work with tools built on it. It is the engine behind [Bollinger Bands](/bollinger-bands/). Because it is based on closes around an average, it tells you how widely price has wandered from its mean, which is a different question from how large each bar was.

## Using both together

The two can show different sides of volatility. ATR shows how big the bars are, while standard deviation shows how far closes have strayed from their average. A steady trend can produce a high standard deviation with a modest ATR, because closes drift far from the mean without large bars. Comparing them can help explain why a band or stop looks the way it does.

## Common mix-ups

- **Expecting the same number.** ATR and standard deviation use different inputs and different settings, so their values differ.
- **Thinking either shows direction.** Both are direction-blind.
- **Ignoring formula differences.** Statistics software often divides by N - 1, while most charting platforms divide by N.
- **Assuming ATR uses a simple average.** Wilder's version uses smoothing, though some platforms use a simple or exponential average.

## FAQ

**Which is better, ATR or standard deviation?**
Neither is better in general. ATR suits stops and sizing in price units. Standard deviation suits statistical work and band tools. Pick the one that fits the job.

**Why does ATR include gaps?**
True range takes the largest of the high-low range and the distances from the previous close. That way a gap between bars is counted.

**Does a rising standard deviation mean a reversal is near?**
No. It only says closes are spreading out more. It can rise in a steady trend as well as in choppy swings.

**Which one do Bollinger Bands use?**
Standard deviation. [Keltner Channels](/keltner-channels/) use ATR.
