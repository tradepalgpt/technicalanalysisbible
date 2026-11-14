---
slug: macd
name: MACD (Moving Average Convergence Divergence)
aka: [MACD, Moving Average Convergence Divergence]
type: trend
states: [trend, reversal]
weak_states: [range]
purposes: [entry, confirmation]
inventor: Gerald Appel
year: 1979
default_settings: "12, 26, 9"
pairs_with: [rsi, support-and-resistance, adx, exponential-moving-average]
related: [macd-histogram, ppo, apo, exponential-moving-average, trix, awesome-oscillator]
compare: [rsi-vs-macd, macd-vs-stochastic, macd-vs-ppo]
glossary: [signal-line, crossover, divergence, momentum, lagging-indicator]
wave: 1
reviewed: 14 November 2026
---

MACD (Moving Average Convergence Divergence) is a trend and momentum indicator that shows the gap between a fast and a slow exponential moving average. It has three parts: the MACD line, a signal line and a histogram. Traders use crossovers, the zero line and divergence to judge trend direction and momentum.

## At a glance

| | |
|---|---|
| Type | Trend-following momentum indicator |
| Best market states | Trends, reversals |
| Weak in | Sideways, choppy ranges |
| Best uses | Entry timing, confirmation |
| Default settings | 12, 26, 9 |
| Created by | Gerald Appel, late 1970s (histogram added by Thomas Aspray, 1986) |
| Leading or lagging | Lagging (built from moving averages) |

## What is MACD?

MACD measures how far apart two exponential moving averages (EMAs) of price are. When the fast EMA pulls away above the slow EMA, upward momentum is growing. When the two come back together, momentum is fading. That is the "convergence" and "divergence" in the name: the averages converging (moving together) and diverging (moving apart).

Gerald Appel developed MACD in the late 1970s. Thomas Aspray added the histogram in 1986 to show changes in momentum earlier.

Unlike RSI, MACD is not bounded. It has no fixed 0 to 100 scale, so a reading of 2.5 on one market means nothing on another. What matters is its direction, its position above or below zero, and how it relates to its own signal line.

## Formula

1. **MACD line** = 12-period EMA of closing price minus 26-period EMA of closing price
2. **Signal line** = 9-period EMA of the MACD line
3. **Histogram** = MACD line minus signal line

An EMA gives more weight to recent prices. Its smoothing factor is 2 / (period + 1), so a 12-period EMA uses 2 / 13, about 0.154.

**Worked example.** Say the 12 EMA is 105.0 and the 26 EMA is 102.0.
MACD line = 105.0 - 102.0 = **3.0**
If the 9-period EMA of recent MACD values (the signal line) is 2.4:
Histogram = 3.0 - 2.4 = **0.6**

A positive histogram means the MACD line is above its signal line, so short-term momentum is rising.

## How to read it

**Signal line crossover.** The MACD line crossing above the signal line is read as bullish; crossing below as bearish. This is the most common signal and also the noisiest, especially in ranges.

**Zero line crossover.** MACD above zero means the 12 EMA is above the 26 EMA, so the short-term trend is up. A cross of the zero line is slower than a signal-line cross but filters out more noise.

**Histogram.** Bars growing taller show momentum building; bars shrinking toward zero show it fading, often before the actual crossover happens.

**Divergence.** Price makes a higher high while MACD makes a lower high (bearish), or price makes a lower low while MACD makes a higher low (bullish). This warns that momentum is weakening. As with any divergence, price can keep going for a long time first.

**Distance from zero.** Very large readings relative to that market's own history show a stretched move. It says momentum is strong, not that a turn is due.

## Best market states

**Trends (best).** MACD is built from moving averages, so it shines when price moves steadily in one direction. Signals taken in the direction of the trend (for example, bullish crossovers while MACD stays above zero) tend to be the most useful.

**Reversals (good, as confirmation).** Divergence and zero-line crosses can confirm that a trend is ending, especially at a major support or resistance level.

**Ranges (weak).** In sideways markets the two EMAs keep crossing back and forth. MACD then produces a stream of crossovers that lead nowhere, known as whipsaws.

**Volatility.** MACD's values grow with the size of price moves, so it looks bigger in volatile markets. Compare it only with its own recent history.

## Settings

| Setting | Values | What it does |
|---|---|---|
| Faster | 5, 35, 5 | Quicker reaction and more signals; common for short-term trading |
| Default | 12, 26, 9 | Appel's standard; a balance between speed and noise |
| Slower | 19, 39, 9 | Smoother and fewer signals; suits longer holding periods |

Shortening the fast and slow periods makes MACD react sooner but whipsaw more. Lengthening them does the opposite. Changing the signal period only changes how quickly the signal line follows the MACD line, which affects crossover timing.

The 12 and 26 periods date from when markets traded six days a week (two weeks and a month). They are still the default mostly through habit, which is fine: there is no strong evidence that any one setting is best.

## Common mistakes

- Taking every signal-line crossover, including in sideways markets where most fail.
- Comparing MACD values across markets. Because it is in price units, a reading of 5 on a stock and 0.002 on a currency pair are not comparable.
- Treating divergence as a timing signal rather than a warning.
- Forgetting that MACD lags: by the time two moving averages cross, much of the move may be over.
- Optimising the three settings to fit past data perfectly, which rarely carries forward.

## Pairs well with

- **[RSI](/rsi/)**: a bounded oscillator that adds overbought and oversold context MACD lacks.
- **[Support and resistance](/support-and-resistance/)**: a MACD signal at a key level is more meaningful than one in open space.
- **[ADX](/adx/)**: confirms whether a trend is strong enough for MACD signals to be worth taking.
- **[Exponential moving average](/exponential-moving-average/)**: a long EMA such as the 200 sets the bigger trend direction to trade with.

## Sources

- Appel, Gerald (2005). *Technical Analysis: Power Tools for Active Investors*. FT Prentice Hall.
- Murphy, John J. (1999). *Technical Analysis of the Financial Markets*. New York Institute of Finance.
- Achelis, Steven B. (2000). *Technical Analysis from A to Z*. McGraw-Hill.

## FAQ

**What is the best MACD setting?**
The default 12, 26, 9 is the most widely used and a sensible starting point. Faster settings such as 5, 35, 5 give earlier signals with more noise. There is no single best setting; test any change on the market and time frame you trade.

**Is MACD leading or lagging?**
Lagging. It is made of moving averages, which follow price. The histogram and divergences can hint at fading momentum before the lines cross, but MACD still reacts to price rather than predicting it.

**What does it mean when MACD crosses zero?**
It means the 12-period EMA has crossed the 26-period EMA. Above zero, the short-term average is above the longer one, which points to an uptrend; below zero points to a downtrend.

**What is the difference between MACD and RSI?**
MACD tracks the gap between two moving averages and has no fixed scale, so it suits trends. RSI compares recent gains with losses on a 0 to 100 scale, so it suits overbought and oversold readings in ranges. See [RSI vs MACD](/compare/rsi-vs-macd/).

**What is the MACD histogram?**
It is the MACD line minus the signal line, drawn as bars. Growing bars show momentum building; shrinking bars show it fading, often before a crossover.

**Does MACD work for day trading?**
It can, but on short time frames there are more whipsaws. Many day traders use faster settings and only take signals in the direction of the higher time frame trend.
