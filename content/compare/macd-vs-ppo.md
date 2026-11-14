---
slug: macd-vs-ppo
title: MACD vs PPO
a: macd
b: ppo
reviewed: 14 November 2026
---

MACD and the Percentage Price Oscillator (PPO) use the same two exponential moving averages, the same 12, 26 and 9 settings and the same signal line. The difference is the unit. MACD is the gap between the averages in price units. The PPO divides that gap by the slow average, so it is a percentage. The PPO is easier to compare across markets and across time.

## At a glance

| | MACD | PPO |
|---|---|---|
| Formula | 12 EMA - 26 EMA | (12 EMA - 26 EMA) / 26 EMA x 100 |
| Unit | Price units | Percent |
| Signal line | 9-period EMA of the MACD line | 9-period EMA of the PPO |
| Created by | Gerald Appel, late 1970s | Not attributed to one person |
| Default settings | 12, 26, 9 | 12, 26, 9 |
| Compare across markets | No | Yes |
| Best market state | Trends, reversals | Trend |
| Weak in | Choppy ranges | Ranges |

## When to use MACD

[MACD](/macd/) is the standard choice. It is on nearly every platform, and most tutorials, scripts and examples use it. It suits traders who look at one market at a time and want crossovers, zero-line moves and divergence. Its histogram, added by Thomas Aspray in 1986, shows changes in momentum. See [MACD Histogram](/macd-histogram/).

## When to use PPO

The [PPO](/ppo/) suits traders who compare markets. A reading of 1.5 means the fast average is 1.5% above the slow one, whatever the price, so it works for scanning and ranking many symbols. It also lets you compare a market now with years ago, when the price level was very different.

## Using both together

There is little reason to plot both on the same chart, since they show the same shape with a different scale. A common approach is to use MACD on a single chart and PPO in a scanner that ranks many markets. The [APO](/apo/) is the same calculation without the percentage step, and is nearly the same as MACD.

## Common mix-ups

- **Expecting different signals.** Crossovers and divergences happen at the same points. Only the scale changes.
- **Comparing MACD values across markets.** A MACD of 2 means different things on a share at 20 and one at 400.
- **Treating the PPO as bounded.** It has no fixed 0 to 100 scale, even though it is a percentage.
- **Giving the PPO a named inventor.** It is a variation of MACD without one credited creator.

## FAQ

**What is the difference between MACD and PPO?**
MACD is in price units. PPO divides by the slow EMA to give a percentage. The lines have the same shape and cross at the same times.

**Which is better for scanning?**
The PPO, because its readings are comparable between markets.

**Do they give different crossovers?**
No. The signal line crossovers and zero crossings occur on the same bars.

**Can I use the same settings?**
Yes. Both use 12, 26 and 9 by default.
