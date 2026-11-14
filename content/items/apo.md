---
slug: apo
name: Absolute Price Oscillator (APO)
aka: [APO, Absolute Price Oscillator, Price oscillator (absolute)]
type: momentum-oscillator
states: [trend]
weak_states: [range]
purposes: [confirmation]
inventor: Not attributed to one person
year: Unknown
default_settings: "12 and 26 periods; zero line"
pairs_with: [exponential-moving-average, adx, support-and-resistance, trendline]
related: [macd, macd-histogram, rate-of-change, momentum-indicator, simple-moving-average]
compare: []
glossary: [oscillator, momentum, crossover, lookback-period]
wave: 3
reviewed: 14 November 2026
---

The Absolute Price Oscillator (APO) is the difference between a fast and a slow moving average, shown as a line around zero. Above zero, the fast average is above the slow one and the trend is up; below zero, it is down. Traders use it to confirm trend direction and to see whether the gap between the averages is widening or narrowing.

## At a glance

| | |
|---|---|
| Type | Momentum oscillator (moving-average difference) |
| Best market states | Trend |
| Weak in | Ranges, where it crosses zero often |
| Best uses | Confirmation |
| Default settings | 12 and 26 periods |
| Created by | Not attributed to one person |
| Leading or lagging | Lagging (built from moving averages) |
| Scale | Price units, not a fixed range |

## What is the Absolute Price Oscillator?

The APO takes two moving averages of the same price series and subtracts the slow one from the fast one. The result is plotted as a line that swings above and below zero.

It is "absolute" because the answer is in price units: a reading of +2.0 means the fast average is 2.0 points above the slow average. Its close cousin, the Percentage Price Oscillator (PPO), divides the result by the slow average, so it is expressed as a percentage. The percentage version is easier to compare across markets with different price levels.

If you use exponential averages with 12 and 26 periods, the APO is the same line as the MACD line. The [MACD](/macd/) adds a signal line and a histogram on top. Some platforms, including the TA-Lib library, let you choose the type of average, and TA-Lib's default is a simple average. So the APO and the MACD line can differ slightly depending on settings.

## Formula

APO = Fast moving average of price - Slow moving average of price

With the usual defaults, the fast average is 12 periods and the slow average is 26 periods. Whether those are simple or exponential averages depends on the platform.

**Worked example.** On a given bar the 12-period average is 105.0 and the 26-period average is 102.5.
APO = 105.0 - 102.5 = **+2.5**

A few bars later the fast average is 104.0 and the slow average is 103.0, so APO = **+1.0**. The line is still positive, but the gap has shrunk from 2.5 to 1.0, which shows the up-move is losing pace.

## How to read it

**Zero line.** A move from below to above zero means the fast average has crossed above the slow one. This is the same event as a moving average crossover, just drawn as an oscillator. A move below zero is the opposite.

**Slope and height.** A rising APO means the gap between the averages is widening, so the trend is gaining speed. A falling APO that is still above zero means the trend is still up but slowing.

**Divergence.** If price makes a higher high while the APO makes a lower high, momentum is fading. Treat this as a warning, not a timing signal.

**Comparing peaks.** Because the APO is in price units, a peak from last year is not directly comparable with a peak today if the price level has changed a lot. Use the percentage version for that.

## Best market states

**Trends (best).** In a steady trend the fast average stays on one side of the slow one, so the APO stays on one side of zero and confirms direction.

**Ranges (weak).** In a sideways market the averages weave around each other and the APO crosses zero again and again. Each cross is a false signal.

**Reversals (mixed).** The APO lags, so it is slow to confirm a turn. Divergence can warn early, but it is not reliable on its own.

**Volatility.** Higher volatility makes the raw APO swing wider in price units. That is a scale effect, not a stronger signal.

## Settings

| Setting | Periods | What it does |
|---|---|---|
| Faster | 5 and 20 | Reacts sooner, crosses zero more often, more false signals |
| Default | 12 and 26 | The standard pair, matching MACD's usual settings |
| Slower | 20 and 50 | Smoother and slower, fewer crossovers, later confirmation |

The ratio between the two periods matters as much as the periods themselves. The closer they are, the noisier the line. Pick the average type deliberately: exponential averages react faster than simple ones.

## Common mistakes

- Treating the APO as an overbought and oversold tool. It has no fixed upper or lower limit, so levels like 70 and 30 mean nothing here.
- Comparing readings across different markets or across years with very different price levels.
- Trading every zero-line cross in a sideways market.
- Assuming it is different from MACD when the settings are the same. With the same averages, it is the same line.
- Changing the periods after each loss until the past data fits.

## Pairs well with

- **[Exponential moving average](/exponential-moving-average/)**: shows the trend direction the APO is confirming, and tells you which average type you are using.
- **[ADX](/adx/)**: a rising ADX says the market is trending, which is where the APO is most useful.
- **[Support and resistance](/support-and-resistance/)**: gives the price levels where a trend might stall, which the APO cannot show.
- **[Trendline](/trendline/)**: a trendline break plus an APO zero-line cross is a simple pairing for trend change.

## Sources

- Appel, Gerald (2005). *Technical Analysis: Power Tools for Active Investors*. Financial Times Prentice Hall. (Background on MACD, which the APO matches when exponential averages are used.)
- Murphy, John J. (1999). *Technical Analysis of the Financial Markets*. New York Institute of Finance. (General background on moving averages and oscillators.)

## FAQ

**What is the difference between APO and MACD?**
With the same exponential averages and the same periods, the MACD line and the APO are identical. The MACD adds a signal line and histogram. Some platforms default to simple averages for the APO, which gives slightly different values.

**What is the difference between APO and PPO?**
The APO shows the gap between the averages in price units. The Percentage Price Oscillator divides that gap by the slow average, so it is a percentage. The percentage version is better for comparing different markets.

**What are the default APO settings?**
Most platforms use 12 and 26 periods. Some libraries let you choose simple or exponential averages, and the default average type varies, so check which one your platform uses.

**Is the APO a leading indicator?**
No. It is built from moving averages of past prices, so it lags price. Divergence can hint at a slowdown early, but it is not a forecast.

**Can the APO show overbought and oversold levels?**
Not in a fixed way. Its scale depends on the price of the market, so there are no standard levels. Some traders mark past extremes on a chart, but those only apply to that market and time frame.
