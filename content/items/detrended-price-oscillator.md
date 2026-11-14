---
slug: detrended-price-oscillator
name: Detrended Price Oscillator (DPO)
aka: [DPO, Detrended Price]
type: momentum-oscillator
states: [range]
weak_states: [trend]
purposes: [entry]
inventor: Not attributed to one person
year: Unknown
default_settings: "20 periods; zero line"
pairs_with: [simple-moving-average, support-and-resistance, trendline, adx]
related: [cyber-cycle, center-of-gravity, momentum-indicator, rate-of-change, market-cycles]
compare: []
glossary: [oscillator, lookback-period, trend, momentum]
wave: 3
reviewed: 14 November 2026
---

The Detrended Price Oscillator (DPO) removes the longer-term trend from price so that shorter cycles stand out. It compares a past price with a moving average, which shifts the average back in time. Traders use it to estimate the length of cycles and to time entries in sideways markets. It is not a good signal tool in trends.

## At a glance

| | |
|---|---|
| Type | Momentum oscillator (detrending) |
| Best market states | Range |
| Weak in | Strong trends |
| Best uses | Entry timing, cycle measurement |
| Default settings | 20 periods |
| Created by | Not attributed to one person |
| Leading or lagging | Not a real-time signal: the common version is shifted back in time |

## What is the Detrended Price Oscillator?

Moving averages follow the trend. If you take the trend away from price, what is left are the shorter swings above and below it. The DPO does this by comparing price with a moving average that has been moved back so that it lines up with the middle of its own window.

The key idea is the shift. A simple moving average of N bars is centred N / 2 bars in the past. The DPO lines up price from that same point with the average. The effect is that the cycles show up in the right place, but the final value does not reflect the latest price.

That makes the DPO awkward. On many platforms the last point plotted is shifted back, so the indicator stops a number of bars before the current bar. It is best used to measure cycles, such as the distance between peaks and troughs, rather than to produce live signals. The origin of the DPO is unclear and it is not attributed to one person.

## Formula

DPO = Price [N / 2 + 1 bars ago] - Simple moving average of N periods

With N = 20, the price used is from 11 bars ago.

**Worked example.** N = 20. The 20-period simple average is 50.0. The close 11 bars ago was 52.0.
DPO = 52.0 - 50.0 = **+2.0**

A positive value means the price at that point was above its average, and negative below it. Another version subtracts the current close from an average that is plotted back N / 2 + 1 bars. It produces the same shape, but it is drawn at a different place on the chart.

Platforms differ on whether they shift the plot, so check the documentation. Some versions have no shift at all, and compare today's close with the current moving average. That version is not detrended in the same sense.

## How to read it

**Zero line.** Above zero means price was above its average at that point; below, it was beneath. Crossings of zero mark swings around the trend.

**Cycle length.** Measure the number of bars between successive peaks or troughs. This gives an estimate of the cycle length, which can help set the period of other indicators. Peaks and troughs that do not repeat regularly mean the market has no stable cycle.

**Peaks and troughs.** Traders look for turns at the extremes in the DPO to time entries in a range. Because the standard line is shifted, any live signal rests on projecting the pattern forward.

**Compare extremes.** Past peaks and troughs show how far price tends to stretch from its average. That is only a guide for one market and time frame.

## Best market states

**Ranges (best).** When price swings around a flat average, the DPO shows these swings cleanly.

**Trends (weak).** In a strong trend, the indicator removes the trend that you are trying to trade, and what remains is noise or a reading that sits on one side of zero.

**Reversals (mixed).** It is a cycle tool, not a reversal detector.

**Volatility.** Higher volatility makes the swings larger, but not necessarily more tradable.

## Settings

| Setting | Periods | What it does |
|---|---|---|
| Short | 10 to 14 | Shows short swings, more noise |
| Default | 20 | Common starting point |
| Long | 30 to 50 | Shows longer cycles, fewer signals |

Cycle traders match the period to the swings they see. A longer average removes more of the trend but gives later information.

## Common mistakes

- Using the shifted version as a live buy or sell signal.
- Ignoring that platforms handle the shift differently.
- Assuming cycles are regular. In most markets they are not.
- Using it in a strong trend, where it removes the move you want to follow.
- Treating zero crosses as trend signals. The DPO is not a trend tool.

## Pairs well with

- **[Simple moving average](/simple-moving-average/)**: the DPO is built from one, and the same average on the chart shows the trend that was removed.
- **[Support and resistance](/support-and-resistance/)**: gives the price levels where swings tend to turn.
- **[Trendline](/trendline/)**: shows the trend that the DPO removes.
- **[ADX](/adx/)**: a low ADX points to a ranging market where the DPO is more useful.

## Sources

- Murphy, John J. (1999). *Technical Analysis of the Financial Markets*. New York Institute of Finance. (General background on moving averages, oscillators and cycles.)

## FAQ

**What does the Detrended Price Oscillator do?**
It removes the longer trend from price so that the shorter cycles are easier to see. It compares a past price with a moving average and plots the difference around zero.

**What is the default DPO setting?**
Most platforms use 20 periods. The price used is taken N / 2 + 1 bars back, which is 11 bars for a 20-period setting. Platforms differ in how they shift the plot.

**Is the DPO a leading or lagging indicator?**
It is neither in the usual sense. The common version is shifted so that it lines up with the cycle, which means it is not a current-bar reading. It is more of an analysis tool for cycles than a live signal.

**Can the DPO be used to trade?**
Some traders use turns near extremes for entries in ranges, but the shifted version cannot give a clean real-time signal. It is better for measuring cycle length and for choosing settings for other tools.

**How is the DPO different from a momentum indicator?**
Momentum compares the current price with a past price. The DPO compares a past price with an average, to remove the trend. Momentum follows the trend; the DPO removes it.
