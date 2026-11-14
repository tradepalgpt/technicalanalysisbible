---
slug: zlema
name: Zero-Lag EMA (ZLEMA)
aka: [ZLEMA, Zero Lag Exponential Moving Average, Zero-Lag Moving Average]
type: moving-average
states: [trend]
weak_states: [range]
purposes: [entry]
inventor: John Ehlers and Ric Way
year: 2010
default_settings: "Commonly 20 periods on the close; the default varies by platform"
pairs_with: [exponential-moving-average, adx, support-and-resistance, macd]
related: [dema, tema, hull-moving-average, alma, kama, lsma]
compare: []
glossary: [lag, smoothing, lookback-period, crossover]
wave: 3
reviewed: 14 November 2026
---

The Zero-Lag EMA (ZLEMA) is an exponential moving average fed with a lag-adjusted price, so it turns sooner than a normal EMA of the same length. It is built to reduce delay, not to remove it. Traders use it for faster trend entries, but it also reacts faster to noise.

## At a glance

| | |
|---|---|
| Type | Moving average |
| Best market states | Trend |
| Weak in | Ranges, choppy markets |
| Best uses | Entry timing |
| Default settings | Often 20 periods on the close (varies by platform) |
| Created by | John Ehlers and Ric Way, 2010 |
| Leading or lagging | Lagging, but with less lag than a standard EMA |

## What is the Zero-Lag EMA?

Every moving average trails price, because it is built from past data. The longer the average, the smoother the line and the later it turns. The Zero-Lag EMA tries to improve that trade-off. Before smoothing, it pushes each price forward by an estimate of how far the average will lag, so the finished line sits closer to price.

The idea is usually credited to John Ehlers and Ric Way, in an article called "Zero Lag (Well, Almost)" in *Technical Analysis of Stocks & Commodities* magazine around 2010. Ehlers has written many papers on signal processing in markets, and this indicator comes from that background.

The name is a little generous. The result still lags a little, and the faster response comes with a cost: more overshoot after sharp moves and more false turns in sideways markets.

## Formula

The common version:

1. Pick a period, for example 20.
2. Work out the lag: lag = (period - 1) / 2. For 20 periods, lag = 9.5, usually rounded to 10 or 9 depending on the platform.
3. For each bar, build adjusted data: adjusted = close + (close - close from "lag" bars ago). This is the same as 2 x close - close[lag].
4. Take a normal EMA of the adjusted data, with smoothing factor 2 / (period + 1).

ZLEMA = EMA(2 x close - close[lag], period)

**Worked example.** Say the period is 5, so lag = (5 - 1) / 2 = 2, and the EMA factor is 2 / 6 = 0.333. The current close is 110 and the close two bars ago was 100.

Adjusted price = 2 x 110 - 100 = 120.

If the previous ZLEMA was 105:
ZLEMA = 105 + 0.333 x (120 - 105) = 105 + 5 = **110**

A normal 5-period EMA using the plain close of 110 would give 105 + 0.333 x (110 - 105) = about 106.7. The ZLEMA is closer to price, which is the point of the design.

Note: platforms differ on how they round the lag and on the default period. Some versions apply a different two-stage approach, so values will not match across charting packages.

## How to read it

**Slope.** A rising ZLEMA suggests an uptrend; a falling one, a downtrend. Because it is quick, slope changes show up earlier than with an ordinary EMA.

**Price against the line.** Price closing above a rising ZLEMA supports the long side; below a falling one, the short side. Many traders treat a close back across the line as a warning, not a trade.

**Crossovers.** Two ZLEMAs of different lengths, such as 10 and 30, can be crossed like any other pair of moving averages. The faster ZLEMA crossing above the slower one is read as a bullish change, and the reverse as bearish. As with other crossovers, whipsaws are common in flat markets.

**Compared with a normal EMA.** Plotting a ZLEMA and an EMA of the same period shows the effect directly. The gap between them widens when price moves fast, which can itself be a rough sign of acceleration.

## Best market states

**Trends (best).** In a steady trend the lag reduction lets you join earlier or exit sooner than with a standard EMA, while the line still follows price smoothly enough to be useful.

**Ranges (weak).** The adjustment amplifies recent changes. In a sideways market the line zig-zags with price, giving frequent crossovers that go nowhere.

**Sharp reversals (mixed).** A V-shaped turn can make the ZLEMA overshoot, because the forward push is based on the old direction. The line can briefly move beyond price before settling.

**Breakouts and volatility.** A burst of volatility makes the line jump. That is faster information but also more noise, so many users add a filter such as [ADX](/adx/) before acting.

## Settings

| Setting | Period | What it does |
|---|---|---|
| Fast | 8 to 12 | Very responsive, many turns, suited to short-term entries |
| Common | 20 | A usual middle choice; reacts faster than a 20 EMA |
| Slow | 50 to 100 | Trend direction filter with less lag than a normal long EMA |

Because the ZLEMA already cuts lag, you can often use a longer period than you would with an EMA and get a similar response with a smoother line. That is a reasonable thing to test on your own market and time frame. Applying it to the close is standard, though some users use typical price or the median price.

## Common mistakes

- Believing "zero lag" literally. The line still follows price and still turns after the move starts.
- Using it in a range and trading every crossover.
- Comparing values between platforms that round the lag differently.
- Stacking several lag-reduced averages and expecting each to add information; they are all built from the same price data.
- Choosing the period by what looked best on past data.
- Placing stops on the ZLEMA line alone, when price structure may give a better reference.

## Pairs well with

- **[Exponential moving average](/exponential-moving-average/)**: plot a slow EMA for the main trend and use the ZLEMA for timing within it.
- **[ADX](/adx/)**: a rising ADX says a trend is present, which is when a fast average works best.
- **[Support and resistance](/support-and-resistance/)**: a ZLEMA turn at a known level is more meaningful than one in open space.
- **[MACD](/macd/)**: a second view of momentum that can agree or disagree with the ZLEMA turn.

## Sources

- Ehlers, John F., and Way, Ric. "Zero Lag (Well, Almost)". *Technical Analysis of Stocks & Commodities* magazine, around 2010.
- Ehlers, John F. (2001). *Rocket Science for Traders*. John Wiley & Sons.
- Murphy, John J. (1999). *Technical Analysis of the Financial Markets*. New York Institute of Finance. (Background on moving averages and crossovers.)

## FAQ

**Does the Zero-Lag EMA really have no lag?**
No. It reduces lag by adding an estimate of recent change to the price before smoothing. The line still turns after price, just sooner than a standard EMA of the same length. The cost is more overshoot and more false signals.

**What is the difference between ZLEMA and EMA?**
An EMA smooths the closing price directly. The ZLEMA first adjusts the price by the difference between now and a few bars ago, then smooths it. The result tracks price more closely and reacts faster.

**What is the best ZLEMA setting?**
There is no best setting. Many platforms use 20 as a starting point. Shorter periods give earlier but noisier signals, longer ones are smoother. Test settings on the market and time frame you trade, and avoid fitting them to past data.

**Is ZLEMA the same as DEMA or Hull?**
No. DEMA, TEMA and the [Hull Moving Average](/hull-moving-average/) are different recipes that also reduce lag. They give similar, not identical, lines. See [DEMA](/dema/) for another approach.

**Does ZLEMA work in sideways markets?**
Not well. Its speed makes it follow every swing, so crossovers pile up with little follow-through. A trend filter such as ADX helps you stand aside.
