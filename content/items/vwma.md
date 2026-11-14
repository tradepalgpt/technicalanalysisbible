---
slug: vwma
name: Volume-Weighted Moving Average (VWMA)
aka: [VWMA, volume weighted moving average]
type: moving-average
states: [trend]
weak_states: [range]
purposes: [filter, confirmation]
inventor: Not attributed to one person
year: Unknown
default_settings: "20 periods on the close"
pairs_with: [simple-moving-average, volume, on-balance-volume, vwap]
related: [exponential-moving-average, weighted-moving-average, hull-moving-average, anchored-vwap, moving-average-crossover]
compare: [vwap-vs-moving-average]
glossary: [lagging-indicator, smoothing, lookback-period, crossover, trend, whipsaw]
wave: 2
reviewed: 14 November 2026
---

The Volume-Weighted Moving Average (VWMA) is a moving average where each bar counts in proportion to its trading volume. Prices that traded on heavy volume pull the line more than prices on thin volume. Traders use it as a trend filter and to see whether the volume agrees with a move.

## At a glance

| | |
|---|---|
| Type | Moving average (trend-following, volume-weighted) |
| Best market states | Trend |
| Weak in | Ranges, and markets with unreliable volume data |
| Best uses | Trend filter, confirmation |
| Default settings | 20 periods on the close |
| Created by | Not attributed to one person; year unknown |
| Leading or lagging | Lagging, like all moving averages |

## What is the Volume-Weighted Moving Average?

A simple moving average treats a bar that traded a few contracts the same as one that traded millions. The VWMA does not. It multiplies each close by that bar's volume, adds them up and divides by total volume. The idea is that prices backed by more activity say more about where the market agrees value lies.

It is a close cousin of [VWAP](/vwap/), but they are different tools. VWAP starts fresh each session (or from an anchor) and accumulates, while the VWMA rolls forward over a fixed number of bars, like any other moving average.

No single inventor is credited. Volume weighting is a standard idea, and the VWMA is included in most charting platforms. Treat it as a variation on the [simple moving average](/simple-moving-average/) rather than a separate school of analysis.

In practice the VWMA stays close to a simple average most of the time. It only moves away when volume is very uneven across the window, for example after a news spike on heavy volume.

## Formula

For a period of n bars:

VWMA = sum of (Close x Volume) over n bars / sum of Volume over n bars

**Worked example.** A 3-period VWMA with these bars (oldest to newest):

| Bar | Close | Volume |
|---|---|---|
| 1 | 10 | 100 |
| 2 | 11 | 100 |
| 3 | 12 | 300 |

Top: 10 x 100 + 11 x 100 + 12 x 300 = 1,000 + 1,100 + 3,600 = 5,700
Bottom: 100 + 100 + 300 = 500
VWMA = 5,700 / 500 = **11.40**

The simple average of the closes is 11.00. The VWMA is higher because the highest close came on the heaviest volume.

Note: volume data differs by market. In futures and listed stocks it is real traded volume. In spot forex and some CFD feeds it is tick volume (the number of price updates), which is only a rough proxy. Results depend on which volume your platform provides.

## How to read it

**Direction.** A rising VWMA shows volume-weighted prices climbing; a falling one shows the reverse.

**VWMA against the simple average.** Plot a VWMA and an SMA of the same length. If the VWMA is above the SMA, the heavier-volume bars have been at higher prices. If it is below, the heavier volume has been at lower prices. This gap is often used as a quick check on whether volume supports a move.

**Price against the line.** Price above a rising VWMA suggests buyers are ahead. Price below a falling one suggests sellers are ahead.

**Crossovers.** Price or a short VWMA crossing a longer one gives a trend signal, as with a [moving average crossover](/moving-average-crossover/), with the volume weighting built in.

**Quiet periods.** On a stretch of very low volume the line may jump around because a few thin bars carry as much weight as they do in total.

## Best market states

**Trends (best).** In a trend with healthy participation, the VWMA follows price and also reflects where the volume was.

**Ranges (weak).** Sideways trade produces many crossings, as with any moving average.

**Breakouts.** A heavy-volume breakout pulls the VWMA toward the new price quickly, because the big bars carry large weights. That can be useful, but a single huge bar can also distort the line for the whole window.

**Markets with poor volume data.** Where volume is a rough proxy, the VWMA adds little over a simple average.

## Settings

| Setting | Period | What it does |
|---|---|---|
| Short | 5 to 10 | Reacts fast; one heavy bar can dominate |
| Default | 20 | A common balance on daily charts |
| Long | 50 to 200 | Slower trend view; volume spikes matter less |

The default period varies by platform, but 20 is typical. Short settings are most sensitive to single high-volume bars. Test the setting on the market and time frame you trade, and check which volume type your platform uses.

## Common mistakes

- Treating it as VWAP. VWAP resets and accumulates; the VWMA rolls over a fixed window.
- Using it on instruments where volume is only a tick count, and trusting it as real participation.
- Letting one huge-volume bar dominate the line and reading that as a trend change.
- Trading every crossing in a sideways market.
- Assuming a VWMA above the SMA is a buy signal by itself.
- Comparing different platforms without checking the volume source.

## Pairs well with

- **[Simple moving average](/simple-moving-average/)**: the same length SMA is the natural comparison; the gap shows the volume effect.
- **[Volume](/volume/)**: reading the bars underneath explains why the VWMA moved.
- **[On-balance volume](/on-balance-volume/)**: a second volume-based view of whether buying or selling pressure agrees.
- **[VWAP](/vwap/)**: a related tool that anchors to a session and shows the average price weighted by volume.

## Sources

- Murphy, John J. (1999). *Technical Analysis of the Financial Markets*. New York Institute of Finance. (General reference on moving averages and volume.)
- Kirkpatrick, Charles D. and Dahlquist, Julie R. (2006). *Technical Analysis: The Complete Resource for Financial Market Technicians*. FT Press. (General reference on moving averages and volume.)

## FAQ

**What is the VWMA formula?**
VWMA = sum of (close x volume) over n bars, divided by the sum of volume over those n bars. Each price is weighted by the volume traded on its bar. Bars with more volume pull the line harder.

**What is the difference between VWMA and VWAP?**
VWAP accumulates from a start point, usually the session open, and resets. The VWMA is a rolling average over a fixed number of bars. Both weight price by volume, but they are used differently. See [VWAP](/vwap/).

**What is the difference between VWMA and SMA?**
The SMA counts every bar equally. The VWMA counts bars by their volume. If volume is spread evenly, the two are almost the same. If a few bars have very heavy volume, the VWMA moves toward their prices.

**What is the best VWMA period?**
There is no best period. Twenty is a common default. Shorter lengths react fast but are easily swung by single bars. Test your choice on the market and time frame you trade.

**Does VWMA work in forex?**
Only loosely. Spot forex has no central volume figure, so platforms use tick volume. That measures activity in price updates, not money traded. The VWMA still calculates, but its volume weighting is less reliable.
