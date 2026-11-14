---
slug: kama
name: Kaufman Adaptive Moving Average (KAMA)
aka: [KAMA, Kaufman's Adaptive Moving Average, AMA]
type: moving-average
states: [trend, range]
weak_states: [breakout]
purposes: [filter]
inventor: Perry J. Kaufman
year: 1995
default_settings: "Efficiency ratio period 10; fast 2; slow 30"
pairs_with: [adx, exponential-moving-average, atr, support-and-resistance]
related: [hull-moving-average, dema, tema, weighted-moving-average, simple-moving-average]
compare: [ema-vs-sma]
glossary: [lagging-indicator, smoothing, lookback-period, trend, whipsaw]
wave: 2
reviewed: 14 November 2026
---

The Kaufman Adaptive Moving Average (KAMA) is a moving average that changes its own speed. It speeds up when price moves cleanly in one direction and slows down when price is choppy. A measure called the efficiency ratio decides how fast it runs. Traders use it as a trend filter that stays quieter in sideways markets.

## At a glance

| | |
|---|---|
| Type | Moving average (adaptive, trend-following) |
| Best market states | Trend, range |
| Weak in | Sudden breakouts out of long quiet spells, where it may react slowly at first |
| Best uses | Trend filter |
| Default settings | Efficiency ratio over 10 bars, fast 2, slow 30 |
| Created by | Perry J. Kaufman, 1995 |
| Leading or lagging | Lagging, but the lag changes with market conditions |

## What is the Kaufman Adaptive Moving Average?

A normal moving average uses one fixed speed. That is a problem, because markets change character. A fast average works in a trend and whipsaws in a range. A slow one works in a range but is late in a trend.

Perry Kaufman tackled this in his 1995 book *Smarter Trading*. His answer was an average that measures how "efficient" recent price movement has been. If price travelled a long way in one direction with little back-and-forth, the market is trending and the average speeds up. If price covered the same distance by zigzagging, it is noisy and the average slows to a crawl.

So KAMA tends to track price closely in strong moves and go nearly flat in choppy ones. That flat behaviour reduces false crossovers in ranges, which is the main reason people use it.

## Formula

There are three steps, using the default settings of 10, 2 and 30.

**1. Efficiency ratio (ER)** over n = 10 bars:

ER = |Close - Close n bars ago| / sum of |Close - previous Close| over the last n bars

The top is the net change over the window. The bottom is the total distance price travelled, adding up every bar's move. ER runs from 0 (pure noise) to 1 (a straight line).

**2. Smoothing constant (SC):**

fast = 2 / (2 + 1) = 0.6667
slow = 2 / (30 + 1) = 0.0645
SC = (ER x (fast - slow) + slow) squared

**3. KAMA:**

KAMA = previous KAMA + SC x (Close - previous KAMA)

The first KAMA value is usually seeded with the closing price or a simple average, so early values may differ between platforms.

**Worked example.** Suppose over the last 10 bars price moved a net 5 points but covered a total of 10 points bar by bar. ER = 5 / 10 = 0.5.

SC = (0.5 x (0.6667 - 0.0645) + 0.0645) squared = (0.3011 + 0.0645) squared = 0.3656 squared = 0.1337

If the previous KAMA is 100 and the close is 102:
KAMA = 100 + 0.1337 x (102 - 100) = **100.27**

With ER at 0.1 (choppy), SC would be about 0.0158 and the same move would shift KAMA by only 0.03. In a clean trend with ER near 1, SC approaches 0.44, which is a speed similar to a 3-period EMA.

## How to read it

**Slope.** A rising KAMA says an upward trend is in place; a falling one, downward. A flat KAMA is a signal in itself: the market is not going anywhere clean.

**Price against the line.** Price above a rising KAMA suggests buyers lead; below a falling KAMA suggests sellers lead.

**Filtering the crossover.** Some traders skip crossovers unless the KAMA has moved by a set amount, such as a multiple of ATR, to ignore the flat stretches. This is a common practice, not a Kaufman rule.

**Speed as information.** Watching how fast the line moves tells you about the market. It runs when trends are clean and stalls when they are not.

## Best market states

**Trends (best).** When price moves cleanly, ER rises and KAMA follows quickly, so it works as a trend line.

**Ranges (good).** In choppy trade, ER falls and KAMA barely moves, so it produces fewer false crossovers than a fixed-speed average. That is its main benefit.

**Breakouts (weak).** After a long quiet spell, ER is low and KAMA is slow. When price suddenly jumps, it takes a few bars for ER to rise and the average to catch up.

**Volatility.** Efficiency ratio ignores the size of moves, only their directness, so a volatile but directionless market still counts as noisy.

## Settings

| Setting | Values | What it does |
|---|---|---|
| ER period | 10 (default) | The window used to judge trend versus noise |
| Fast | 2 (default) | The fastest the average may go, like a 2-period EMA |
| Slow | 30 (default) | The slowest it may go, like a 30-period EMA |

Kaufman's own settings are 10, 2 and 30, and most platforms use them. A longer ER window gives a steadier read of the trend. Raising the slow number makes the line even flatter in noise. Changing the fast number to 3 or 4 slightly smooths it in trends. Test any change on your market and time frame.

## Common mistakes

- Treating the flat line as a bug. The flatness in chop is the whole point.
- Expecting a fast reaction after a long sideways period.
- Using KAMA alone without a view of the higher time frame.
- Changing all three numbers at once and losing track of which change helped.
- Comparing values across platforms that seed or round differently.
- Reading a KAMA crossover as an entry signal without checking price structure.

## Pairs well with

- **[ADX](/adx/)**: a second view of trend strength; KAMA's slope and ADX should roughly agree.
- **[Exponential moving average](/exponential-moving-average/)**: a fixed-speed comparison that shows where KAMA slows down.
- **[ATR](/atr/)**: sets a minimum move for KAMA slope or a stop distance.
- **[Support and resistance](/support-and-resistance/)**: price levels give context that no moving average can.

## Sources

- Kaufman, Perry J. (1995). *Smarter Trading: Improving Performance in Changing Markets*. McGraw-Hill.
- Kaufman, Perry J. (2013). *Trading Systems and Methods*, 5th edition. Wiley. (Later editions cover the adaptive moving average in detail.)
- Murphy, John J. (1999). *Technical Analysis of the Financial Markets*. New York Institute of Finance. (General reference on moving averages.)

## FAQ

**What are the default KAMA settings?**
The standard settings are an efficiency ratio period of 10, a fast constant of 2 and a slow constant of 30. The fast and slow numbers are the EMA lengths used for the quickest and slowest speeds.

**What is the efficiency ratio?**
It compares the net price change over a window with the total distance price travelled in the same window. It runs from 0 to 1. Near 1 means price moved in a straight line; near 0 means it zigzagged and went nowhere.

**Does KAMA work in sideways markets?**
It copes better than a fixed-speed average, because it slows down when price is choppy and gives fewer false crossovers. It still does not produce profitable signals on its own in a range, and a flat line is the message.

**Is KAMA better than the EMA?**
It is more flexible, since its speed adapts. It is also harder to explain and can be slow after a long quiet spell. Neither is better in every case, so compare them on your market.

**Can I change the KAMA settings?**
Yes, though the 10, 2 and 30 defaults are widely used. Change one number at a time and test the effect on the market and time frame you trade, not just on one stretch of past data.
