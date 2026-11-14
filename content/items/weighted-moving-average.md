---
slug: weighted-moving-average
name: Weighted Moving Average (WMA)
aka: [WMA, linearly weighted moving average, LWMA]
type: moving-average
states: [trend]
weak_states: [range]
purposes: [filter, confirmation]
inventor: Not attributed to one person
year: Unknown
default_settings: "20 periods on closing price (platform defaults vary)"
pairs_with: [simple-moving-average, exponential-moving-average, adx, support-and-resistance]
related: [hull-moving-average, dema, tema, vwma, kama]
compare: [ema-vs-sma]
glossary: [lagging-indicator, smoothing, lookback-period, crossover, trend, whipsaw]
wave: 2
reviewed: 14 November 2026
---

The Weighted Moving Average (WMA) is an average of recent prices where the newest bar counts the most and the oldest counts the least, with weights falling in a straight line. It reacts faster than a simple moving average of the same length. Traders use it as a trend filter and to confirm direction.

## At a glance

| | |
|---|---|
| Type | Moving average (trend-following, lagging) |
| Best market states | Trend |
| Weak in | Ranges, where it whipsaws |
| Best uses | Trend filter, confirmation |
| Default settings | 20 periods on the close (varies by platform) |
| Created by | Not attributed to one person; year unknown |
| Leading or lagging | Lagging, but less than the simple moving average of the same length |

## What is the Weighted Moving Average?

A moving average smooths price by averaging the last N bars. The [simple moving average](/simple-moving-average/) gives every bar the same weight, so a price from 20 bars ago matters as much as today's. That makes it slow to turn.

The WMA fixes this by giving more weight to recent bars. The newest bar gets weight N, the one before it N - 1, and so on down to weight 1 for the oldest bar in the window. Because the weights fall by the same step each bar, this is also called a linearly weighted moving average.

No single person is credited with the WMA. Weighted averages are a basic statistical idea, and technical analysts adopted them long ago. It matters mainly because it is the building block of the [Hull moving average](/hull-moving-average/).

It sits between the simple and exponential averages in speed. The [exponential moving average](/exponential-moving-average/) also favours recent prices, but its weights fall off in a curve and never quite reach zero. The WMA drops old data completely once it leaves the window.

## Formula

For a period of N:

WMA = (N x P1 + (N - 1) x P2 + ... + 1 x PN) / (N x (N + 1) / 2)

P1 is the latest price, P2 the one before it, and so on. The bottom of the fraction is the sum of the weights: 1 + 2 + ... + N, which equals N x (N + 1) / 2.

**Worked example.** Take a 3-period WMA with the last three closes: 10 (oldest), 11, 13 (newest).

Weights: 1 for the 10, 2 for the 11, 3 for the 13.
Top: 1 x 10 + 2 x 11 + 3 x 13 = 10 + 22 + 39 = 71
Bottom: 1 + 2 + 3 = 6
WMA = 71 / 6 = **11.83**

The simple average of the same three closes is 11.33. The WMA is higher because the latest and highest close counts for more.

Note: nearly all platforms use these linear weights, but a few let you pick a different price (high, low, typical price) as the input, and the default period differs between packages.

## How to read it

**Direction.** A rising WMA says the recent weighted average is climbing. A falling WMA says the opposite. The slope is often more useful than the exact value.

**Price against the line.** Price closing above the WMA suggests buyers are ahead; below suggests sellers. Many traders use this as a simple filter and only look for trades in the direction of the slope.

**Crossovers.** A fast WMA crossing a slower one (for example 10 and 30) is a version of the [moving average crossover](/moving-average-crossover/). Because the WMA reacts quickly, the signals come sooner but there are more false ones.

**Dynamic support or resistance.** In a steady trend, pullbacks often stall near the WMA. This is a habit of the market rather than a rule, and it fails as often as it holds.

**Lag.** The WMA is still a lagging indicator. It is built only from past prices, so it confirms a move that has started rather than predicting one.

## Best market states

**Trends (best).** In a steady move, a WMA follows price more closely than a simple average, so you get an earlier read on direction and a tighter trailing reference.

**Ranges (weak).** When price drifts sideways, a faster average flips direction more often. Every flip is a possible false signal, or whipsaw. A filter such as [ADX](/adx/) helps you notice when the market is not trending.

**Breakouts and reversals.** The WMA will turn sooner than the simple average, but it still turns after price. Do not expect it to catch a turning point.

## Settings

| Setting | Period | What it does |
|---|---|---|
| Short | 5 to 10 | Hugs price tightly. Fast signals, many false ones |
| Medium | 20 | A common balance for swing trading and daily charts |
| Long | 50 to 200 | Slow, used to judge the larger trend. Weights matter less at long lengths |

There is no standard "best" period. Pick the length that suits the time frame you trade and test it on that market. Shortening the period makes the line quicker and noisier; lengthening it does the reverse. Because the weighting already speeds the line up, a WMA of 20 acts a little faster than a simple average of 20 but is not as fast as a simple average of 10.

## Common mistakes

- Assuming a faster average is a better one. Faster means earlier signals and more false ones.
- Using the WMA alone in a sideways market and trading every cross.
- Expecting it to predict turns. It only reports where price has been, weighted toward the recent past.
- Comparing values between platforms without checking the price input and the period.
- Optimising the period until it fits past data perfectly, which rarely carries forward.
- Placing a stop at the moving average because "it is support", instead of at a price level that makes sense.

## Pairs well with

- **[Simple moving average](/simple-moving-average/)**: plotting a slower simple average alongside shows how much faster the WMA turns.
- **[Exponential moving average](/exponential-moving-average/)**: another fast average; comparing the two shows how each treats old data.
- **[ADX](/adx/)**: tells you whether there is a trend worth following or only noise.
- **[Support and resistance](/support-and-resistance/)**: a WMA signal that agrees with a known price level is more meaningful than one in open space.

## Sources

- Murphy, John J. (1999). *Technical Analysis of the Financial Markets*. New York Institute of Finance.
- Kirkpatrick, Charles D. and Dahlquist, Julie R. (2006). *Technical Analysis: The Complete Resource for Financial Market Technicians*. FT Press.
- Achelis, Steven B. (2001). *Technical Analysis from A to Z*, 2nd edition. McGraw-Hill.

## FAQ

**What is the difference between WMA and SMA?**
The simple moving average treats every bar in the window equally. The WMA gives the newest bar the largest weight and the oldest the smallest, so it follows price more closely and turns sooner. The cost is more false signals in sideways markets.

**Is the WMA better than the EMA?**
Neither is better in general. Both favour recent prices. The WMA uses straight-line weights and forgets data outside the window, while the EMA uses curved weights that never quite reach zero. Pick one and test it on your market.

**How is the WMA calculated?**
Multiply each price in the window by a weight, with the newest price getting the highest weight (N) and the oldest getting 1. Add them up and divide by the sum of the weights, which is N x (N + 1) / 2.

**What WMA period should I use?**
There is no single right answer. Twenty is a common starting point, with shorter lengths for faster signals and 50 or 200 for the bigger trend. Test your choice on the market and time frame you trade rather than copying a number.

**Does the WMA remove lag?**
It reduces lag compared with a simple average of the same length, but it does not remove it. For a more aggressive attempt at cutting lag, see the [Hull moving average](/hull-moving-average/), which is built from WMAs.
