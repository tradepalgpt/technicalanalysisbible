---
slug: moving-average-crossover
name: Moving Average Crossover
aka: [MA crossover, moving average cross, MA cross]
type: moving-average
states: [trend, reversal]
weak_states: [range]
purposes: [entry, exit]
inventor: Not attributed to one person (long-standing trend-following method)
year: Unknown
default_settings: "No single default; 50 / 200 for long-term, 20 / 50 or 9 / 21 for shorter-term"
pairs_with: [adx, volume, support-and-resistance, atr-stop]
related: [simple-moving-average, exponential-moving-average, golden-cross, death-cross, moving-average-ribbon, macd, trend-following]
compare: [ema-vs-sma, ichimoku-vs-moving-averages]
glossary: [crossover, lagging-indicator, whipsaw, trend, lookback-period, smoothing]
wave: 1
reviewed: 14 November 2026
---

A moving average crossover is a signal that appears when a faster moving average crosses a slower one. A cross upward is read as a shift to an uptrend, and a cross downward as a shift to a downtrend. It is simple and clear, works best in trends, and gives many false signals when the market moves sideways.

## At a glance

| | |
|---|---|
| Type | Moving average signal method |
| Best market states | Trend, early trend change |
| Weak in | Sideways ranges (whipsaws) |
| Best uses | Entry, exit |
| Default settings | None fixed; 50 / 200, 20 / 50 and 9 / 21 are common pairs |
| Created by | No single inventor; a long-standing trend-following method |
| Leading or lagging | Lagging (both lines are built from past prices) |

## What is a moving average crossover?

A moving average smooths price. A short average (the fast line) follows price closely. A long average (the slow line) follows it more slowly. When a new trend begins, the fast line reacts first. If it moves from below the slow line to above it, the two cross.

That cross is the signal. The idea is that the recent average price has risen above the longer-term average price, so momentum has turned up. A cross the other way suggests momentum has turned down.

The method is mechanical, which is its appeal: there is no judgement about where the cross happens. It is also its weakness. The cross comes only after price has already moved, and in a range it fires repeatedly with no follow-through. The best-known versions, on the 50 and 200 averages, have their own names: [Golden cross](/golden-cross/) and [Death cross](/death-cross/).

## How it is identified

1. Choose two moving averages of different lengths. They can be [simple](/simple-moving-average/) or [exponential](/exponential-moving-average/).
2. Plot both on the chart.
3. **Bullish cross:** the fast line closes above the slow line, having been below it.
4. **Bearish cross:** the fast line closes below the slow line, having been above it.

**Worked example.** A 3-period and a 5-period SMA on closes of 12, 11, 10, 10, 11, 13.
At the fifth bar (closes 12, 11, 10, 10, 11): 3-period SMA = (10 + 10 + 11) / 3 = 10.33. 5-period SMA = 54 / 5 = 10.8. The fast line is below the slow line.
At the sixth bar (closes 11, 10, 10, 11, 13): 3-period SMA = (10 + 11 + 13) / 3 = 11.33. 5-period SMA = 55 / 5 = 11.
The fast line has moved from below (10.33 vs 10.8) to above (11.33 vs 11). That is a **bullish cross**.

A related method uses a whole set of averages: see [Moving average ribbon](/moving-average-ribbon/).

## How to read it

**Direction of the cross.** Fast above slow is bullish; fast below slow is bearish. As long as the order holds, the trend signal holds.

**Slope of the slow line.** A cross is stronger when the slow line is also sloping in the same direction. A cross while the slow line is flat is often a whipsaw.

**Gap between the lines.** A widening gap after the cross shows a trend gathering pace. If the lines stay tangled and keep crossing, there is no trend.

**Retest.** After a bullish cross, price often pulls back to the averages. Some traders wait for that dip rather than buy the cross itself.

**As an exit.** A cross against your position can serve as an exit signal. It exits late, which gives back some profit, but keeps you in long trends.

## Best market states

**Trends (best).** In a clear, sustained trend the cross keeps you on the right side. The long runs it catches can outweigh the small losses between.

**Reversals (mixed).** The cross can mark a trend change, but late. Much of the new move may be gone by the time it appears.

**Ranges (weak).** In a sideways market the averages weave together and cross again and again. Each cross loses a little, and the losses add up.

**Volatility.** Sudden spikes can create crosses that reverse a few bars later. Faster averages are hit hardest.

## Confirmation rules

| Check | What to look for |
|---|---|
| Trend present | A rising [ADX](/adx/) (a common reading is above 20 or 25) shows the market is trending |
| Slow line slope | Sloping the same way as the cross |
| Close | Use the closing price, not an intrabar touch |
| Higher time frame | Cross in line with the trend on the bigger chart |
| Volume | Higher volume on the cross adds weight |
| Stop | Beyond the last swing point, or an ATR-based stop |

## Common mistakes

- Using crossovers in a sideways market and trading every whipsaw.
- Choosing the pair of periods that looks best on past data, then expecting it to hold.
- Treating the cross as a forecast rather than a late confirmation.
- Using very fast pairs (such as 5 and 10) on noisy charts without a trend filter.
- Entering on the cross with no stop and no plan for a false signal.
- Ignoring costs: frequent crosses mean frequent trades and more spread and fees.

## Pairs well with

- **[ADX](/adx/)**: a trend-strength filter that helps you skip crosses in ranges.
- **[Volume](/volume/)**: a cross on strong volume is more convincing.
- **[Support and resistance](/support-and-resistance/)**: a cross just below a major resistance level is less attractive than one after a breakout.
- **[ATR stop](/atr-stop/)**: a volatility-based stop gives each trade a sensible risk distance.

## Sources

- Murphy, John J. (1999). *Technical Analysis of the Financial Markets*. New York Institute of Finance.
- Kirkpatrick, Charles D. and Dahlquist, Julie R. (2006). *Technical Analysis: The Complete Resource for Financial Market Technicians*. FT Press.

## FAQ

**What are the best moving averages for a crossover?**
There is no best pair. The 50 and 200 are the best known for long-term trends. Shorter traders use pairs such as 9 and 21 or 20 and 50. Faster pairs give earlier but noisier signals, so test them on your own market.

**Does a moving average crossover work?**
It works best in markets that trend for long periods and badly in sideways markets. Results depend on the market, the settings and costs, so test it rather than assume. No version works all the time.

**Are EMA crossovers better than SMA crossovers?**
EMA crossovers come earlier because the EMA reacts faster, but they also whipsaw more. SMA crossovers are smoother and later. Neither is better in every market.

**What is a whipsaw?**
A whipsaw is a signal that reverses soon after it appears, leaving you with a small loss. Crossovers produce many of them in ranging markets because the averages keep weaving across each other.

**Should I enter on the cross or wait?**
Both approaches are used. Entering on the cross is earlier but riskier. Waiting for a pullback to the averages gives a better price but may miss fast moves. Pick a rule in advance and test it.
