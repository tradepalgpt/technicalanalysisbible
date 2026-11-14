---
slug: chandelier-exit-vs-parabolic-sar
title: Chandelier Exit vs Parabolic SAR
a: chandelier-exit
b: parabolic-sar
reviewed: 14 November 2026
---

The Chandelier Exit and Parabolic SAR are both trailing stops used to stay in a trend and leave when it ends. The Chandelier Exit hangs from the highest high of the last 22 bars, dropped by three times the ATR. Parabolic SAR plots dots that accelerate towards price the longer a trend lasts. The Chandelier gives room by volatility, and SAR tightens with time.

## At a glance

| | Chandelier Exit | Parabolic SAR |
|---|---|---|
| Formula | Highest high - 3 x ATR(22) | SAR(next) = SAR + AF x (EP - SAR) |
| Default settings | 22 periods, 3 x ATR | AF start 0.02, step 0.02, maximum 0.20 |
| Created by | Chuck LeBeau | J. Welles Wilder Jr., 1978 |
| Tightens over time | Only when price makes new highs | Yes, accelerates towards price |
| Uses volatility | Yes, via ATR | No |
| Output | A line | Dots above or below price |
| Best market state | Trends | Trends |
| Weak in | Ranges | Ranges, where it flips often |

## When to use Chandelier Exit

The [Chandelier Exit](/chandelier-exit/) suits traders who want a stop that adapts to volatility. The stop only rises on a long trade, and its distance grows when the market gets wilder, so it gives more room for normal pullbacks. It is useful for holding a trend through noise.

## When to use Parabolic SAR

[Parabolic SAR](/parabolic-sar/) suits traders who want a stop that is always in the market and tightens as a move ages. The dots speed up, so the room for pullbacks shrinks. Today it is mostly used to trail a stop on a trade already running, not as a stand-alone reversal system.

## Using both together

Some traders use the Chandelier Exit as a wider stop and Parabolic SAR as a tighter warning, or the other way round. Because both are lagging and both fail in ranges, a trend filter such as [ADX](/adx/) helps decide when to use them. Size the position with [ATR](/atr/) in either case. See also [Trailing Stop](/trailing-stop/).

## Common mix-ups

- **Treating SAR as an entry system.** Wilder designed it to stop and reverse, but it is now mainly an exit tool.
- **Expecting the Chandelier to move every bar.** It only rises when price makes a new high.
- **Ignoring the ATR setting.** A different multiple changes the distance a lot.
- **Comparing first dots.** Starting values for SAR vary between platforms.
- **Using either in a range.** Both are hit by ordinary swings there.

## FAQ

**Which gives more room?**
The Chandelier Exit usually, because it uses three times ATR. SAR tightens as the trend ages.

**Does the Chandelier Exit use volatility?**
Yes. It uses ATR, so the distance widens in volatile markets.

**Does Parabolic SAR use volatility?**
No. Its distance depends on the acceleration factor and the extreme point.

**Can the Chandelier Exit move down?**
Not on a long trade, since it only rises as new highs appear.
