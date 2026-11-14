---
slug: frama
name: Fractal Adaptive Moving Average (FRAMA)
aka: [FRAMA, fractal adaptive MA]
type: moving-average
states: [trend, range]
weak_states: [reversal]
purposes: [filter]
inventor: John Ehlers
year: 2000s
default_settings: "16 periods (must be an even number)"
pairs_with: [exponential-moving-average, adx, rsi, support-and-resistance]
related: [kama, mama, exponential-moving-average, alma, zlema, t3-moving-average, mcginley-dynamic]
compare: []
glossary: [smoothing, lookback-period, lagging-indicator, trend, range, whipsaw]
wave: 3
reviewed: 14 November 2026
---

The Fractal Adaptive Moving Average (FRAMA) is a moving average by John Ehlers that measures how "trending" price is using a fractal dimension, then adjusts its own speed. In a clean trend it moves fast and hugs price. In a choppy range it slows to a crawl and stays flat. Traders use it as a trend filter that tries to avoid some range whipsaws.

## At a glance

| | |
|---|---|
| Type | Moving average (adaptive) |
| Best market states | Trend, with the aim of calming ranges |
| Weak in | Sharp reversals, where it can lag for a long time |
| Best uses | Trend filter |
| Default settings | 16 periods (an even number is needed) |
| Created by | John Ehlers, 2000s |
| Leading or lagging | Lagging, but the lag varies with market conditions |

## What is FRAMA?

Every moving average has to choose between speed and smoothness. FRAMA lets the market choose. It looks at the high-low range of the recent window in two halves and then as one block, and asks a simple question: is price moving in a straight line, or wandering back and forth?

A straight, one-way move has a **fractal dimension** close to 1. A noisy, wandering market has a dimension close to 2. FRAMA turns that number into a smoothing factor. Dimension near 1 gives a fast factor, so the line follows the trend. Dimension near 2 gives a tiny factor, so the line barely moves.

The result is a line that tends to flatten out in sideways markets instead of swinging with every bar. John Ehlers published it, and it is usually dated to the 2000s. Its main idea, using a fractal dimension for adaptation, comes from fractal geometry.

## Formula

Let N be the period (even, default 16). Use highest high (HH) and lowest low (LL).

1. N1 = (HH - LL over the first N/2 bars) / (N/2)
2. N2 = (HH - LL over the previous N/2 bars) / (N/2)
3. N3 = (HH - LL over all N bars) / N
4. Dimension D = (ln(N1 + N2) - ln(N3)) / ln(2)
5. alpha = exp(-4.6 x (D - 1)), limited to the range 0.01 to 1
6. FRAMA = alpha x price + (1 - alpha) x previous FRAMA

**Worked example.** Suppose the calculation gives D = 1.5.
alpha = exp(-4.6 x 0.5) = exp(-2.3) = 0.10
If the previous FRAMA is 100 and the price is 105:
FRAMA = 0.10 x 105 + 0.90 x 100 = 10.5 + 90 = **100.5**

If instead D = 1 (a clean trend), alpha = 1 and FRAMA equals price. If D = 2 (very choppy), alpha = exp(-4.6) = 0.01, and the line almost stops.

Note: some platforms use the average of high and low, or close, as the price input. Others vary the constant 4.6. These differences change the line slightly.

## How to read it

**Slope.** A rising FRAMA in a clean move suggests an uptrend. A flat FRAMA suggests a range, which is a useful message in itself.

**Price against the line.** Price above a rising FRAMA is the bullish arrangement; below a falling one is bearish. Many traders use it as a filter.

**Flat lines as a warning.** When FRAMA flattens and price crosses it repeatedly, that is the indicator telling you the market lacks direction.

**Two FRAMAs.** Some traders plot a fast and a slow FRAMA (different N) and watch for crossovers. The adaptive speed means crossovers come at uneven times.

**Dynamic support and resistance.** Price sometimes pulls back to the line in a trend. The line is jumpy in fast moves, so treat touches loosely.

## Best market states

**Trends (best).** In a clean trend, D falls toward 1, and the line closes the gap to price.

**Ranges (aim).** In a range, D rises, and the line slows. That can reduce false crossovers, but it does not remove them. Breakouts from a quiet range can be followed late because the line is slow.

**Reversals (weak).** After a long calm period, the line is slow and slow to turn. A fast reversal may be well under way before FRAMA catches up.

**Volatility.** The dimension reads ranges, so a burst of large bars can speed up the line quickly. Quick swings back can then cause false moves.

## Settings

| Setting | Value | What it does |
|---|---|---|
| Period N | 16 (default) | The window for the range measure. Must be even because it is split in two |
| Short | 8 to 12 | Faster, noisier dimension estimate |
| Long | 20 to 40 | Smoother dimension estimate, slower response |

A very short period makes the dimension estimate unreliable because it uses few bars. Test on your market and time frame before relying on any value.

## Common mistakes

- Setting an odd period. The formula needs two equal halves.
- Assuming "adaptive" means "no lag". The line is still slow in quiet markets.
- Treating a flat FRAMA as a signal to trade. It says the market is not trending.
- Comparing FRAMA across platforms without checking the price input and constants.
- Using it on data with many gaps or very low volume, where high-low ranges are distorted.
- Trading crossovers in a tight range because they appear.

## Pairs well with

- **[Exponential moving average](/exponential-moving-average/)**: a plain EMA gives a reference for how much the FRAMA has slowed.
- **[ADX](/adx/)**: ADX offers a second opinion on whether the market trends.
- **[RSI](/rsi/)**: momentum helps judge whether a FRAMA turn has strength behind it.
- **[Support and resistance](/support-and-resistance/)**: levels add structure to a line that is based only on price.

## Sources

- Murphy, John J. (1999). *Technical Analysis of the Financial Markets*. New York Institute of Finance. (General background on moving averages; it does not describe FRAMA.)

## FAQ

**What does FRAMA stand for?**
It stands for Fractal Adaptive Moving Average. "Fractal" refers to the fractal dimension, a measure of how rough or straight a price path is. "Adaptive" means the line changes its own speed using that measure.

**Why must the FRAMA period be even?**
The formula splits the window into two equal halves and compares each half's range with the whole. An odd number cannot be split evenly. The default of 16 gives two halves of 8 bars.

**Does FRAMA work in a range?**
It is designed to slow down in a range, so the line flattens and gives fewer crossovers than a fast average. It does not remove whipsaws, and it can be late when a breakout starts. Check it on your own market.

**What is the fractal dimension in FRAMA?**
It is a number from 1 to 2. Near 1, price is moving in a straight line. Near 2, price is wandering sideways. FRAMA converts it to a smoothing factor so that the line speeds up in trends and slows in noise.

**Is FRAMA better than KAMA?**
They aim for the same goal with different measures. KAMA uses an efficiency ratio of price change to total movement. FRAMA uses a fractal dimension from high-low ranges. Neither is proven best, so compare them on your own data.
