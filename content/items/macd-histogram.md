---
slug: macd-histogram
name: MACD Histogram
aka: [MACD bars, MACD-H, MACD histogram]
type: trend
states: [trend, reversal]
weak_states: [range]
purposes: [entry, confirmation]
inventor: "Thomas Aspray (histogram); Gerald Appel (MACD)"
year: 1986
default_settings: "12, 26, 9 (the standard MACD settings)"
pairs_with: [macd, support-and-resistance, adx, exponential-moving-average]
related: [ppo, apo, awesome-oscillator, divergence, rsi]
compare: [macd-vs-ppo]
glossary: [momentum, signal-line, crossover, divergence, oscillator, smoothing]
wave: 2
reviewed: 14 November 2026
---

The MACD Histogram plots the gap between the MACD line and its signal line as a series of bars around a zero line. Bars above zero mean MACD is above its signal line; bars below zero mean it is below. Because it shows the speed of change in momentum, the bars often turn before the MACD lines cross, which traders use for earlier entries and confirmation.

## At a glance

| | |
|---|---|
| Type | Trend indicator (momentum histogram) |
| Best market states | Trend, reversal |
| Weak in | Ranges |
| Best uses | Entry timing, confirmation |
| Default settings | 12, 26, 9 |
| Created by | Thomas Aspray (histogram, mid-1980s); Gerald Appel (MACD, 1970s) |
| Leading or lagging | Lagging in absolute terms, but it turns ahead of the MACD line crossover |

## What is the MACD Histogram?

The histogram is a visual layer on top of the [MACD](/macd/). MACD itself has two lines: the MACD line (a fast moving average minus a slow one) and a signal line (a moving average of the MACD line). The histogram simply subtracts one from the other and draws the result as bars.

When the bars are tall, the MACD line is far from its signal line, so momentum is moving quickly. When the bars shrink towards zero, the two lines are closing in on each other and momentum is slowing. When the bars cross zero, the MACD line has crossed its signal line.

Gerald Appel developed MACD in the late 1970s. The histogram is generally credited to Thomas Aspray, who proposed it in 1986 as a way to anticipate MACD crossovers. Sources differ slightly on the exact year, so treat 1986 as approximate.

In short, the histogram is the second derivative of price, loosely speaking: price gives you direction, MACD gives you momentum, and the histogram gives you the change in that momentum.

## Formula

1. Fast EMA = 12-period [exponential moving average](/exponential-moving-average/) of the close.
2. Slow EMA = 26-period EMA of the close.
3. MACD line = fast EMA - slow EMA.
4. Signal line = 9-period EMA of the MACD line.
5. Histogram = MACD line - signal line.

**Worked example.** Suppose on one bar the MACD line is 1.50 and the signal line is 1.10.
Histogram = 1.50 - 1.10 = **+0.40**

On the next bar the MACD line is 1.60 and the signal line is 1.30.
Histogram = 1.60 - 1.30 = **+0.30**

Both bars are above zero, so MACD is still above its signal line. But the second bar is shorter (0.30 against 0.40), which means the gap is narrowing and upward momentum is cooling, even though the MACD line itself rose.

Note: some platforms plot the histogram as the raw difference, others scale it or colour bars by whether they are growing or shrinking. Appel's original MACD used slightly different smoothing in a few older packages, so small differences between platforms are normal.

## How to read it

**Zero line crossings.** A cross from below zero to above zero is the same event as a bullish MACD signal-line crossover. A cross from above to below is a bearish crossover. These are the slowest histogram signals.

**Shrinking bars (the early warning).** In an uptrend, bars above zero that grow, then start to shrink, show that upward momentum is fading. Some traders treat the first shorter bar as an early alert and the zero cross as the confirmation. In a downtrend the mirror applies: negative bars getting shorter point to selling pressure easing.

**Peaks and troughs.** The height of a bar peak shows how stretched momentum was. A lower second peak while price makes a new high is a form of [divergence](/divergence/).

**Divergence.** If price makes a higher high but the histogram peak is lower, momentum is not confirming the move. If price makes a lower low but the histogram trough is shallower, selling is losing force. Divergence is a warning, not a timing signal, and it can persist for a long time.

**Colour changes.** Many platforms use two shades per side (for example, bright when the bar grows, pale when it shrinks). This only makes the growing and shrinking pattern easier to see; it adds no new information.

## Best market states

**Trends (best).** In a steady trend the histogram tends to stay mostly on one side of zero, with pulses of growth and shrinkage during pullbacks. Shrinking bars near a pullback low can help time re-entry in the trend direction.

**Reversals (good, with care).** Divergence between price and the histogram near a major level is one of its most watched signals. It is more useful when a price signal appears at the same time.

**Ranges (weak).** In sideways markets the MACD line and signal line weave around each other, so the histogram flips across zero again and again. Each flip looks like a signal and most lead nowhere.

**Breakouts and volatility.** A breakout can create a sudden tall bar, which shows momentum but does not say whether the move will hold. The histogram does not measure volatility directly.

## Settings

| Setting | Values | What it does |
|---|---|---|
| Faster | 8, 17, 9 | Reacts sooner, more bars flip, more noise |
| Default | 12, 26, 9 | Appel's standard. Balanced for daily charts |
| Slower | 19, 39, 9 | Fewer signals, later reaction |

The three numbers are the fast EMA length, the slow EMA length and the signal EMA length. Shortening the signal length makes the histogram more jumpy. Lengthening the slow EMA makes MACD respond to bigger swings only. Whatever you choose, test it on the market and time frame you actually trade.

## Common mistakes

- Treating every zero cross as a trade in a sideways market, where most crosses reverse quickly.
- Reading a shrinking bar as a reversal. It only says momentum is slowing; price can keep drifting in the same direction.
- Comparing bar heights across different markets. The values depend on price scale, so a bar of 2.0 means different things on different instruments. Use the percentage version, the [PPO](/ppo/), for comparison.
- Relying on divergence without a price-based trigger such as a break of a trendline or support level.
- Changing the settings after each losing trade until the past looks good.
- Confusing the histogram with a volume histogram. They are unrelated.

## Pairs well with

- **[MACD](/macd/)**: the histogram is built from MACD, so view both together to see the lines and the gap between them.
- **[Support and resistance](/support-and-resistance/)**: a shrinking bar or divergence at a known level is more meaningful than one in open space.
- **[ADX](/adx/)**: a rising ADX says a trend is present, which is where the histogram works best.
- **[Exponential moving average](/exponential-moving-average/)**: a longer EMA gives the bigger trend so you take histogram signals only in that direction.

## Sources

- Appel, Gerald (2005). *Technical Analysis: Power Tools for Active Investors*. Financial Times Prentice Hall.
- Murphy, John J. (1999). *Technical Analysis of the Financial Markets*. New York Institute of Finance.

## FAQ

**What does the MACD histogram show?**
It shows the distance between the MACD line and its signal line, drawn as bars around zero. Taller bars mean a wider gap and stronger momentum. Shorter bars mean the lines are converging and momentum is slowing.

**Is the histogram faster than the MACD lines?**
Yes, in the sense that bars begin to shrink before the lines cross. It is built from the same data, so it is not truly predictive, but it often shows the slowdown a few bars sooner than the crossover itself.

**What does it mean when histogram bars shrink?**
The MACD line is moving closer to its signal line, so momentum in the current direction is fading. It can precede a crossover or a reversal, but it can also be followed by renewed momentum, so it needs context from price.

**What is a good MACD histogram setting?**
The default 12, 26, 9 is the standard and a sensible starting point for daily charts. Faster settings such as 8, 17, 9 give earlier but noisier signals. Test any change on your own market before relying on it.

**Does the histogram work for day trading?**
It can be used on any time frame because it only needs price. On very short charts the bars flip often, so many traders filter its signals with a higher time frame trend or a level on the chart.

**Can the histogram show divergence?**
Yes. A lower histogram peak while price makes a higher high is bearish divergence, and a shallower trough while price makes a lower low is bullish divergence. It signals weakening momentum, not a precise turning point.
