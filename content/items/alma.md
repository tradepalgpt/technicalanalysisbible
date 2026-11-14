---
slug: alma
name: Arnaud Legoux Moving Average (ALMA)
aka: [ALMA, Gaussian-weighted moving average]
type: moving-average
states: [trend]
weak_states: [range]
purposes: [entry, filter]
inventor: Arnaud Legoux and Dimitris Kouzis-Loukas
year: 2000s
default_settings: "Window 9; offset 0.85; sigma 6"
pairs_with: [exponential-moving-average, rsi, adx, support-and-resistance]
related: [simple-moving-average, exponential-moving-average, weighted-moving-average, hull-moving-average, zlema, t3-moving-average, kama]
compare: []
glossary: [smoothing, lookback-period, lagging-indicator, trend, whipsaw]
wave: 3
reviewed: 14 November 2026
---

The Arnaud Legoux Moving Average (ALMA) is a moving average that weights prices with a bell-shaped (Gaussian) curve whose peak can be moved toward the newest bars. By shifting the peak, it aims to follow price more closely than a simple average while staying smoother than a very fast one. Traders use it as a trend filter and for crossover entries.

## At a glance

| | |
|---|---|
| Type | Moving average |
| Best market states | Trend |
| Weak in | Ranges, where any moving average whipsaws |
| Best uses | Trend filter, crossover entry |
| Default settings | Window 9, offset 0.85, sigma 6 |
| Created by | Arnaud Legoux and Dimitris Kouzis-Loukas, 2000s |
| Leading or lagging | Lagging, but with less lag than an SMA when the offset is high |

## What is ALMA?

Most moving averages use fixed weights. The simple moving average (SMA) gives every bar the same weight. The exponential moving average (EMA) and weighted moving average (WMA) give the newest bars more. ALMA uses a different shape: a Gaussian curve, the familiar bell shape, laid over the window.

Two settings control that bell. The **offset** sets where the peak sits inside the window, from 0 (the oldest bar) to 1 (the newest bar). The **sigma** sets how wide the bell is. A small sigma makes a narrow peak that focuses on a few bars. A large sigma makes a wide, flat curve that behaves more like an SMA.

With the default offset of 0.85, the peak is near the recent end, so the line reacts quickly. The tail of the curve still smooths out noise. Arnaud Legoux and Dimitris Kouzis-Loukas created it, and it is generally dated to the 2000s.

## Formula

For a window of N bars, number them i = 0 (oldest) to N - 1 (newest).

1. m = floor(offset x (N - 1))
2. s = N / sigma
3. Weight for each bar: w(i) = exp( -(i - m)^2 / (2 x s^2) )
4. ALMA = sum of (w(i) x price(i)) / sum of w(i)

Defaults: N = 9, offset = 0.85, sigma = 6.

**Worked example.** Use N = 5 with the same offset and sigma, and closes of 10, 11, 12, 13, 14 (oldest first).
m = floor(0.85 x 4) = 3
s = 5 / 6 = 0.833, so 2 x s^2 = 1.389
Weights: i = 0 gives 0.002, i = 1 gives 0.056, i = 2 gives 0.487, i = 3 gives 1.000, i = 4 gives 0.487. Sum = 2.031.
Weighted sum = 0.002x10 + 0.056x11 + 0.487x12 + 1.000x13 + 0.487x14 = 26.29
ALMA = 26.29 / 2.031 = **12.94**

An SMA of the same five bars is 12. The ALMA is closer to the latest closes of 13 and 14.

Note: platforms can order the window differently, or round m differently, but the formula above is the standard one.

## How to read it

**Slope.** A rising ALMA reads as an uptrend and a falling one as a downtrend. Because it is smooth, its direction changes less often than a very fast EMA.

**Price against the line.** Price above the ALMA suggests buyers are in control; below suggests sellers. Many traders use this as a filter to trade only in one direction.

**Crossovers.** A fast ALMA crossing a slow ALMA, or price crossing the line, is used as an entry or trend-change signal. As with all moving averages, crossovers arrive after the move has begun.

**Dynamic support and resistance.** In a trend, price often pulls back toward the line. Some traders watch for that area as a place to look for continuation.

**Offset as a dial.** Raise the offset toward 1 for a faster line with more lead but more noise. Lower it toward 0.5 for a centred, smoother line that lags more.

## Best market states

**Trends (best).** ALMA is built to follow a trend with limited lag and limited noise.

**Ranges (weak).** In sideways markets, price crosses the line repeatedly and gives whipsaws (signals that fail at once). A faster line makes this worse.

**Reversals.** The line turns after price, so it confirms a turn rather than predicting it.

**Volatility.** Sudden spikes pull the line harder when the offset is high. Use a wider sigma in jumpy markets to calm it.

## Settings

| Setting | Value | What it does |
|---|---|---|
| Window | 9 (default); 20 to 50 for swing work | Longer windows give a slower, smoother line |
| Offset | 0.85 (default) | Nearer 1 is faster and noisier; nearer 0.5 is smoother and later |
| Sigma | 6 (default) | Lower is a narrower bell and a more reactive line; higher flattens toward an SMA |

The default values are the ones most platforms ship with, but there is no proof they are best for any particular market. Test changes on your own market and time frame, and avoid fitting them to past data.

## Common mistakes

- Treating the 0.85 offset as magic. It is a default, not a law of markets.
- Raising the offset to remove lag and then complaining about noise. The two trade off.
- Trading crossovers in a range, where the line is flat.
- Comparing ALMA(9) with an EMA(9) as if they were the same speed.
- Changing window, offset and sigma until past trades look good.
- Forgetting that a weighted window ignores prices outside it, so very old data has no effect.

## Pairs well with

- **[Exponential moving average](/exponential-moving-average/)**: a slow EMA gives the larger trend while a fast ALMA times entries inside it.
- **[RSI](/rsi/)**: RSI adds a momentum view, so you can check whether a crossover is backed by strength.
- **[ADX](/adx/)**: ADX shows whether the market trends enough for a moving average to work.
- **[Support and resistance](/support-and-resistance/)**: a crossover next to a known level carries more context than one in open space.

## Sources

- Murphy, John J. (1999). *Technical Analysis of the Financial Markets*. New York Institute of Finance. (General background on moving averages; it does not describe ALMA.)

## FAQ

**What are the default ALMA settings?**
Most platforms use a window of 9, an offset of 0.85 and a sigma of 6. Some tools use longer windows such as 20 or 50. Always check what a platform shows by default before comparing lines.

**Is ALMA better than the EMA?**
Not necessarily. ALMA gives you more control over how fast the line reacts and how smooth it looks. That extra control is also more to adjust and over-fit. Neither average removes lag in a range.

**What does the offset do in ALMA?**
It moves the peak of the bell curve inside the window. At 1, the peak is on the newest bar, and the line is fast. At 0.5, the peak is in the middle, and the line is smoother but later.

**What does sigma do in ALMA?**
Sigma sets the width of the bell curve. A small sigma gives a narrow peak, so only a few bars matter and the line reacts quickly. A large sigma spreads the weights and moves the line toward a simple average.

**Does ALMA repaint?**
No. Each value uses only the bars in its window, up to the current bar, so a finished bar does not change later. The live bar moves while it is forming, like any other average.
