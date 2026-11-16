---
slug: which-moving-average-has-the-least-lag
title: Which moving average has the least lag?
description: Which moving average has the least lag? Low-lag types ranked, why lower lag always means more noise or overshoot, and how to compare averages fairly.
query: moving average with least lag
pillar: moving-averages
publish: 2027-05-26
reviewed: 16 November 2026
guides: [hull-moving-average, tema, zlema, kama]
siblings: [hull-moving-average-vs-ema, sma-vs-ema-which-is-better]
value: [table, example, verdict]
---

At the same period, low-lag designs such as TEMA, ZLEMA and the Hull average turn soonest, and the SMA turns latest. But "least lag" is a trap: every reduction in lag lets in more noise or causes overshoot at turns. A shorter SMA also has less lag.

## Why lag exists

Every moving average is built from past prices. When price turns, the average keeps reflecting the old direction until enough new bars outweigh the old ones. That delay is lag. For a simple average, the centre of its window sits (N − 1) / 2 bars back, so a 21-bar SMA is describing price about 10 bars ago.

There are only three ways to reduce lag:

1. **Use fewer bars.** A 10 SMA lags less than a 50 SMA.
2. **Weight recent bars more.** EMA, WMA and ALMA do this.
3. **Extrapolate.** Estimate where price is heading and add that back. DEMA, TEMA, ZLEMA, Hull and LSMA do this.

Each one has a cost. Fewer bars or heavier recent weights let more noise through. Extrapolation overshoots when the move stops.

## Rough ranking at the same period

| Average | How it reduces lag | Lag | Cost |
|---|---|---|---|
| [TEMA](/tema/) | Triple EMA combination | Very low | Noisy; overshoots; long warm-up |
| [ZLEMA](/zlema/) | EMA of a de-lagged price | Very low | Noisy |
| [Hull](/hull-moving-average/) | WMA combination, then smoothing | Low | Overshoots at turns |
| DEMA | Double EMA combination | Low | Noisier than EMA; overshoots |
| LSMA | End point of a fitted line | Low in trends | Overshoots at turns |
| ALMA | Gaussian weights shifted to recent | Low to medium | Three settings to choose |
| WMA | Linear weights | Medium | Slightly noisier than SMA |
| EMA | Exponential weights | Medium | Depends on seed early on |
| SMA | Equal weights | High | Smooth but slow; drop-off jumps |
| SMMA / RMA | EMA with k = 1/N | Highest | Very slow for its label |

This is a rough ranking for a steady trend, not a measurement. Adaptive averages such as [KAMA](/kama/) are left out because their lag changes: low in clean trends, very high in ranges, where they go almost flat on purpose.

## Lag is not one number

"Least lag" depends on what price is doing.

- **In a straight-line trend,** extrapolating averages can sit almost on top of price. Their lag is close to zero.
- **At a turn,** the same averages carry on in the old direction for a bar or two, then snap back. They have, in effect, negative lag followed by a correction: they get ahead of price, then reverse.
- **In a range,** low-lag averages follow every wiggle. Lag is low, but so is usefulness.

So a fair answer needs a scenario. In a steady trend, TEMA or Hull lag least. At a sudden reversal, they turn early but overshoot first. In chop, KAMA flattens and is the "slowest", which is exactly what it is designed to do.

## A fair way to compare: match the smoothness

Comparing a 20 Hull with a 20 SMA is not a fair fight. The Hull at 20 is much noisier. To compare fairly, choose periods that give similar smoothness and then see which turns sooner.

A simple way to do this on your own chart:

1. Plot a 20 EMA.
2. Plot a Hull and adjust its period until the line looks about as smooth as the EMA in a quiet stretch. That might take a Hull of 30 or more.
3. Now compare turns. The gap in timing is usually much smaller than at matched periods.

This does not prove one is better. It shows that much of the "less lag" in low-lag averages comes from being noisier, not from being smarter.

## A worked example of overshoot

Price rises 1 point a bar from 100 to 110, then stays at 110. Rough behaviour of three 10-period averages:

| Bar | Close | SMA 10 | EMA 10 | Hull-style (extrapolating) |
|---|---|---|---|---|
| End of rise | 110 | 105.5 | about 106.4 | about 110 |
| +2 flat | 110 | 107.3 | about 107.6 | about 111 |
| +4 flat | 110 | 108.7 | about 108.4 | about 110.5 |
| +6 flat | 110 | 109.6 | about 108.9 | 110 |

Values are rounded and illustrative. The extrapolating line is closest to price during the rise, then goes above 110 when price stops, then comes back. The SMA and EMA never go above 110. If your rule is "exit when price closes below the line", the extrapolating line can trigger an exit during a calm pause that the others would not.

## What actually matters

For most uses, the period you choose changes lag far more than the type. A 10 SMA has less lag than a 30 Hull. If you want a faster line, the simplest step is a shorter period of a plain average. Low-lag types are useful when you want a specific balance, such as Hull's mix of smoothness and speed. They are not a way around the trade-off.

## Verdict

At the same period, TEMA, ZLEMA and Hull have the least lag, and SMA and SMMA the most. But lower lag always comes with more noise or overshoot, and at matched smoothness the differences shrink. Pick the balance you need for the job, not the lowest number. See [Hull vs EMA](/answers/hull-moving-average-vs-ema/) and [the moving averages guide](/guide/moving-averages/).
