---
slug: renko-chart
name: Renko Chart
aka: [Renko, Renko bricks, Renko chart]
type: chart-type
states: [trend]
weak_states: [range]
purposes: [filter]
inventor: Japanese origin (name from renga, "brick"); introduced to Western traders by Steve Nison
year: "Unknown (introduced in the West in 1994)"
default_settings: "Fixed brick size, often a multiple of ATR(14); two-brick reversal"
pairs_with: [atr, trendline, support-and-resistance, moving-average-crossover]
related: [heikin-ashi, kagi-chart, point-and-figure, three-line-break, range-bars]
compare: [renko-vs-heikin-ashi]
glossary: [brick-size, trend, whipsaw]
wave: 2
reviewed: 14 November 2026
---

A Renko chart draws price as equal-sized bricks that sit at 45-degree steps. A new brick forms only when price moves by a set amount, and it ignores time. Small moves and noise vanish, which makes trends easy to see. The cost is that timing information is lost and the chart can lag.

## At a glance

| | |
|---|---|
| Type | Chart type (price-only, no time axis) |
| Best market states | Trends |
| Weak in | Choppy ranges, where bricks flip back and forth |
| Best uses | Filter (trend direction and noise reduction) |
| Main setting | Brick size, fixed or based on ATR |
| Origin | Japanese; introduced to the West by Steve Nison, 1994 |
| Compare with | [Heikin-Ashi](/heikin-ashi/), [Point and Figure](/point-and-figure/) |

## What is a Renko chart?

A normal candlestick chart gives every period a candle, even if the market barely moved. A Renko chart gives every fixed price move a brick. If price goes nowhere, no brick appears. If price moves fast, several bricks appear at once.

Each brick is the same size. Up bricks are usually drawn in one colour and down bricks in another. Bricks sit diagonally, each one starting at the corner of the last. The effect is a smooth staircase that rises in uptrends and falls in downtrends.

The word comes from the Japanese *renga*, meaning brick. The chart is widely described as Japanese in origin, and Steve Nison brought it to a Western audience in *Beyond Candlesticks* (1994). Its exact early history is not well documented.

## How it is drawn

Rules for the usual version:

1. Choose a **brick size**, for example 2 points. It can be fixed or based on [ATR](/atr/).
2. **New up brick:** price closes at least one brick size above the top of the last brick.
3. **New down brick:** price closes at least one brick size below the bottom of the last brick.
4. **Reversal:** to switch direction, price must move two brick sizes from the last brick's far edge, which means one brick beyond the opposite end of the previous brick.

**Worked example.** Brick size is 2. The last brick is an up brick that runs from 98 to 100. Price closes at 102, so a new up brick (100 to 102) is drawn. Price closes at 101: no new brick. Price closes at 99: still no down brick, because that would need a close at or below 98, the bottom of the last up brick. Price must reach 98 or lower to draw a down brick from 100 to 98.

Platforms differ. Some build bricks from closing prices only, while others use highs and lows. Some offer reversal values other than two bricks. Check the platform's settings before comparing charts.

## How to read it

**Trend direction.** Runs of same-coloured bricks mark a trend. A colour change shows a reversal of at least two bricks.

**Noise filter.** Moves smaller than the brick size never appear. Support and resistance often look cleaner because wicks and brief spikes are removed.

**Breakouts.** A series of bricks stuck in a narrow band, followed by a run in one direction, shows a breakout.

**Trendlines and averages.** [Trendlines](/trendline/) and moving averages are often drawn on Renko charts. Remember that the horizontal axis is not time, so averages behave differently from time-based charts.

**Lag.** A reversal brick forms only after price has moved a distance, so a Renko signal is late by construction.

## Best market states

**Trends (best).** Same-coloured bricks line up and make direction obvious.

**Ranges (weak).** In a sideways market price oscillates around the brick boundary, producing alternating colours (whipsaws).

**Volatility.** A fixed brick size suits one volatility level. When volatility changes, the same size can become too small (too noisy) or too large (too slow). An ATR-based size adapts, but it stays fixed once set on most platforms.

## Settings

| Setting | Common choice | Effect |
|---|---|---|
| Brick size | A multiple of ATR(14), or a fixed point or percentage value | Small bricks show more detail and more noise |
| Reversal | Two bricks | Fewer false colour changes than a one-brick reversal |
| Price basis | Close (common), or high and low | High and low bricks can form faster |
| Time frame | The timeframe used to build the bricks | Lower frames give more bricks and more noise |

Platforms differ in their defaults and in how they handle gaps.

## Common mistakes

- Treating the horizontal axis as time. Two bricks side by side can be seconds or weeks apart.
- Using a brick size so small that the chart is as noisy as a candle chart.
- Using a brick size so large that signals arrive long after the move.
- Trading colour changes in a sideways market.
- Ignoring that the chart can differ between platforms with different settings.
- Back-testing a Renko strategy without checking how the platform handles brick formation, which can flatter results.

## Pairs well with

- **[ATR](/atr/)**: a common way to choose a brick size that matches volatility.
- **[Trendline](/trendline/)**: trendlines are cleaner on a chart with less noise.
- **[Support and resistance](/support-and-resistance/)**: levels are easier to see without wicks.
- **[Moving average crossover](/moving-average-crossover/)**: can be used for trend confirmation, with the caveat about time.

## Sources

- Nison, Steve (1994). *Beyond Candlesticks: New Japanese Charting Techniques Revealed*. Wiley.
- Kirkpatrick, Charles D. and Dahlquist, Julie R. (2006). *Technical Analysis: The Complete Resource for Financial Market Technicians*. FT Press.

## FAQ

**What is a Renko chart?**
It is a chart made of equal-sized bricks. A new brick is drawn only when price moves by a set amount, and time is ignored. This removes small moves so the trend is easier to see.

**How do you choose a Renko brick size?**
Many traders use a multiple of ATR(14), so that the brick size follows the market's normal movement. Others use a fixed number of points or a percentage of price. Smaller bricks give more detail and more noise.

**Does a Renko chart repaint?**
Not in the usual sense. A completed brick does not change. But on a live chart, platforms that build bricks from highs and lows or that recalculate can show bricks that disappear, so check the build method.

**Is Renko better than candlesticks?**
Neither is better in general. Renko removes noise and time, which helps with trend reading. Candlesticks show timing, volume and the full range of each period. Many traders use both.

**What is the difference between Renko and Heikin-Ashi?**
Heikin-Ashi smooths time-based candles using averages. Renko ignores time and draws fixed-size bricks. See [Renko vs Heikin-Ashi](/compare/renko-vs-heikin-ashi/).
