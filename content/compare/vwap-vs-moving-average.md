---
slug: vwap-vs-moving-average
title: VWAP vs Moving Average
a: vwap
b: simple-moving-average
reviewed: 14 November 2026
---

VWAP is a volume-weighted average that restarts each session, so it shows the average price traded today. A simple moving average (SMA) is a plain average of the last N closes that rolls forward without a reset and ignores volume. VWAP suits intraday fair-value reads; the SMA suits trend direction on any time frame.

## At a glance

| | VWAP | Simple moving average |
|---|---|---|
| Measures | Average price weighted by volume | Plain average of the last N closes |
| Formula | Cumulative (typical price x volume) / cumulative volume | Sum of last N closes / N |
| Reset | At the start of each session | None; rolls bar by bar |
| Uses volume? | Yes | No |
| Created by | Not attributed to one person | Not attributed to one person |
| Typical use | Intraday fair-value line | Trend filter, dynamic support or resistance |
| Main weakness | Weak on charts with no real volume | Lags price by design |

## When to use VWAP

[VWAP](/vwap/) suits day traders who want a fair-value line for the session. Price above it suggests buyers have been in control for the day, and price below it suggests sellers have. It also serves as an execution benchmark. It needs real volume data, so it is less useful on instruments or feeds where volume is missing or unreliable.

## When to use a moving average

The [simple moving average](/simple-moving-average/) suits traders who want trend direction across any time frame, from minutes to months. It does not reset, so it carries information across sessions. Lengths such as 20, 50 and 200 are widely watched, which is part of why price often reacts near them. It ignores volume, so a thin bar counts the same as a heavy one.

## Using both together

Some intraday traders watch VWAP for the day's bias and a moving average for the broader trend. For example, they may prefer longs only when price is above VWAP and a rising moving average. Both are averages of past prices, so they often point the same way. Adding [volume](/volume/) or a key price level gives a different kind of check.

## Common mix-ups

- **Calling VWAP a moving average.** It is cumulative from the session start, not a rolling window.
- **Using VWAP on daily bars.** Its reset means it is built for intraday charts.
- **Expecting the SMA to account for volume.** It does not.
- **Treating either line as exact support.** Both are areas where price may react, not guarantees.

## FAQ

**Is VWAP a moving average?**
Not in the usual sense. A moving average rolls over the last N bars. VWAP accumulates from the start of the session and resets the next day.

**Which is better, VWAP or a moving average?**
Neither is better in general. VWAP suits intraday fair value. A moving average suits trend direction across time frames. Choose the one that matches your trading.

**Why does VWAP need volume?**
Volume is the weight in the formula. Prices where more volume traded count for more in the average.

**Does VWAP carry over to the next day?**
Usually not. It resets at the start of each session, although anchored versions exist for custom starting points.
