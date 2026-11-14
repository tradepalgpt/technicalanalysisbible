---
slug: standard-deviation
name: Standard Deviation
aka: [StdDev, SD, Sigma]
type: volatility
states: [volatility]
weak_states: [trend]
purposes: [filter]
inventor: Karl Pearson (named the term, 1894)
year: 1894
default_settings: "20 periods on closing prices"
pairs_with: [bollinger-bands, atr, historical-volatility, bollinger-band-width]
related: [historical-volatility, implied-volatility, atr, normalized-atr, chaikin-volatility, percent-b]
compare: [atr-vs-standard-deviation]
glossary: [volatility, mean, standard-deviation, lookback-period, smoothing, timeframe]
wave: 2
reviewed: 14 November 2026
---

Standard deviation is a statistic that shows how widely a set of numbers is spread around its average. Applied to prices, it measures how far recent closes have wandered from their moving average. A high value means a volatile market and a low value means a quiet one. It is the engine behind Bollinger Bands and many volatility measures.

## At a glance

| | |
|---|---|
| Type | Volatility indicator |
| Best market states | Volatility |
| Weak in | Trends, where it can rise just because price is moving steadily |
| Best uses | Filter, input to other tools |
| Default settings | 20 periods on the close |
| Created by | The term was introduced by Karl Pearson in 1894 |
| Leading or lagging | Lagging (built from past prices) |

## What is standard deviation?

The idea comes from statistics. If you have a set of numbers, the average tells you where the middle is, and the standard deviation tells you how far numbers typically sit from that middle. Numbers tightly packed around the average give a small standard deviation. Numbers scattered widely give a large one.

Karl Pearson introduced the term "standard deviation" in 1894. It has been used across science and finance since.

On a chart, the indicator takes the last N closing prices, finds their average and measures how spread out they are. When price swings widely, standard deviation rises. When price drifts quietly, it falls. It is shown in price units, in a pane under the chart.

There is a catch. Standard deviation of price levels also rises when price is trending steadily, because the closes are spread far from their average even if each bar is small. For this reason, many professionals apply the statistic to returns (percentage changes) rather than to prices. See [historical volatility](/historical-volatility/). The price version is what you will find on most chart platforms.

## Formula

1. Find the mean (average) of the last N closes.
2. For each close, subtract the mean and square the result.
3. Add the squared values and divide by N (population) or N - 1 (sample).
4. Take the square root.

**Worked example.** Take five closes: 8, 9, 10, 11 and 12.
Mean = 50 / 5 = 10
Differences: -2, -1, 0, 1, 2. Squared: 4, 1, 0, 1, 4. Sum = 10.
Population: 10 / 5 = 2, square root = **1.41**.
Sample: 10 / 4 = 2.5, square root = 1.58.

Note: most charting platforms use the population formula (divide by N) for the indicator and for Bollinger Bands. Statistics software often uses the sample version. For a 20-period setting the difference is small but visible. Check your platform.

## How to read it

**Level.** A rising line means the closes are spreading out and volatility is expanding. A falling line means they are tightening.

**Compare with its own history.** A reading of 2.0 points means nothing without context. Look at where it sits against the last few months of readings for that market.

**Bell-curve rule of thumb.** If price changes followed a normal (bell-curve) shape, about 68 per cent of values would fall within one standard deviation of the mean and about 95 per cent within two. Real markets have fatter tails, meaning big moves happen more often than the bell curve suggests. So the "2 standard deviation" bands in [Bollinger Bands](/bollinger-bands/) are a guide, not a boundary that price rarely crosses.

**Low readings.** A long stretch of low standard deviation shows compression. This often comes before a larger move, though it gives no direction. See [Bollinger Band Width](/bollinger-band-width/).

**Position sizing and stops.** Some traders scale position size or set stops using a multiple of standard deviation, so the risk adjusts to current conditions. The multiple is a personal choice.

## Best market states

**Volatility analysis (best).** Standard deviation is a direct gauge of how spread out recent prices are.

**Ranges.** A low standard deviation matches a tight range. A sudden rise shows the range may be breaking.

**Breakouts.** The reading usually expands during a breakout, but it lags the first bar of the move.

**Trends (weak).** A steady trend lifts the price-based version without any real change in per-bar volatility. Use returns or [ATR](/atr/) if you want a cleaner read.

**Reversals.** Spikes can coincide with turning points, but the indicator gives no direction.

## Settings

| Setting | Period | What it does |
|---|---|---|
| Short-term | 5 to 10 | Very responsive, noisy |
| Default | 20 | Standard; matches the Bollinger Bands setting |
| Long-term | 50 or more | Smooth view of the broader level of volatility |

A shorter period reacts faster but jumps around. A longer one is smoother but slower to notice a change. If you use standard deviation to understand Bollinger Bands, keep the same period on both.

## Common mistakes

- Assuming price will stay inside 2 standard deviations. Markets have fat tails and often exceed that.
- Reading a rising value as bearish and a falling one as bullish. It measures spread, not direction.
- Using the price version in a trend and mistaking a steady drift for high volatility.
- Comparing values between markets in raw price units. Convert to a percentage first.
- Not checking whether the platform divides by N or N - 1.
- Treating it as a trading signal on its own. It is a measuring tool.

## Pairs well with

- **[Bollinger Bands](/bollinger-bands/)**: the bands are the moving average plus and minus a multiple of standard deviation.
- **[ATR](/atr/)**: an alternative volatility measure that counts gaps; compare the two.
- **[Historical volatility](/historical-volatility/)**: the same statistic applied to returns and scaled to a year.
- **[Bollinger Band Width](/bollinger-band-width/)**: turns the spread into a squeeze indicator.

## Sources

- Pearson, Karl (1894). "Contributions to the Mathematical Theory of Evolution". *Philosophical Transactions of the Royal Society of London A*, 185. (Origin of the term "standard deviation".)
- Bollinger, John (2001). *Bollinger on Bollinger Bands*. McGraw-Hill.
- Murphy, John J. (1999). *Technical Analysis of the Financial Markets*. New York Institute of Finance.

## FAQ

**What does standard deviation tell you in trading?**
It tells you how spread out recent prices are around their average. A high value means price has been swinging widely, and a low value means it has been quiet. It measures size of movement, not direction.

**What is the difference between standard deviation and ATR?**
Standard deviation measures how far closes sit from their average. ATR averages the true range of each bar and includes gaps. Standard deviation is smoother for trends in price levels, while ATR is easier to turn into a stop distance. See [ATR vs standard deviation](/compare/atr-vs-standard-deviation/).

**What is a good standard deviation setting?**
Twenty periods is the usual default and matches Bollinger Bands. Shorter periods respond faster and are noisier. Longer ones are smoother and slower. Test on the market and time frame you trade.

**Does price stay within two standard deviations?**
Not reliably. Under a perfect bell curve about 95 per cent of values would, but real markets have fatter tails, so large moves happen more often than that. Treat the bands as a guide and not a limit.

**Why does standard deviation rise in a trend?**
Because the closes spread far from their moving average as price drifts in one direction, even if the bars themselves are small. That is why traders sometimes apply the measure to returns instead of price levels.
