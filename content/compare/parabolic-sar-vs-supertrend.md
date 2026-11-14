---
slug: parabolic-sar-vs-supertrend
title: Parabolic SAR vs Supertrend
a: parabolic-sar
b: supertrend
reviewed: 14 November 2026
---

Parabolic SAR and Supertrend are both trend-following trailing stops that flip when price crosses them. The difference is how the line moves. Parabolic SAR speeds up towards price as a trend ages, using a fixed acceleration schedule. Supertrend sits a set multiple of ATR from price, so its distance adapts to volatility. Both lag and both struggle in sideways markets.

## At a glance

| | Parabolic SAR | Supertrend |
|---|---|---|
| Drawn as | Dots above or below price | A single line above or below price |
| Distance set by | Acceleration factor and extreme point | A multiple of ATR |
| Adapts to volatility? | No | Yes |
| Default settings | Start 0.02, step 0.02, maximum 0.20 | ATR period 10, multiplier 3 |
| Created by | J. Welles Wilder Jr., 1978 | Often credited to Olivier Seban; year not firmly established |
| Flip rule | Price touches or crosses a dot | A close through the line |
| Weak in | Sideways ranges | Sideways ranges |

## When to use Parabolic SAR

[Parabolic SAR](/parabolic-sar/) suits traders who want a stop that tightens as a trend ages. The dots start slowly, then close in on price, which protects profit but leaves less room for pullbacks. It is mainly used to trail a stop once a trade is running. The fixed formula ignores volatility, so a spike against the position can flip it even if the trend is intact.

## When to use Supertrend

[Supertrend](/supertrend/) suits traders who want the stop to follow volatility. When the market is calm the line sits close, and when it is wild the line gives more room. The distance does not shrink as the trend ages. Raising the multiplier gives fewer flips but larger losses when one occurs. Settings and ATR smoothing differ between platforms.

## Using both together

They do similar jobs, so plotting both adds little new. Some traders compare them to see which trails closer in a given market. A trend filter such as [ADX](/adx/) helps with either, because both flip repeatedly when there is no trend. [ATR](/atr/) shows whether the stop distance suits your risk.

## Common mix-ups

- **Expecting either to catch tops and bottoms.** Both flip after price has turned.
- **Trading every flip in a range.** This produces a run of small losses.
- **Assuming the stop distance matches your risk.** The formula sets it, not you.
- **Comparing lines from different platforms.** Smoothing and settings differ.
- **Optimising settings after each loss.** This fits past data, not the future.

## FAQ

**Which is better, Parabolic SAR or Supertrend?**
Neither in general. Supertrend adapts to volatility, which many traders prefer. Parabolic SAR tightens over time, which suits protecting profit. Test each on your market and time frame.

**Which flips more often?**
It depends on settings. Tighter settings flip more for either. Parabolic SAR with a high maximum catches price faster, and Supertrend with a low multiplier sits close.

**Do they repaint?**
On closed bars they do not change. On the open bar, the Supertrend line can move until the bar closes.

**Can they be used as entry signals?**
Some traders do, but they are mostly used for exits and trailing stops, and need a trend filter.
