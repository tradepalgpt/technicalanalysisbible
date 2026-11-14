---
slug: structure-stop
name: Swing High/Low Stop (structure stop)
aka: [Structure stop, Swing stop, Swing high stop, Swing low stop]
type: stop-exit
states: [trend, range]
weak_states: [volatility]
purposes: [stop]
inventor: Not attributed to one person
year: Unknown
default_settings: "Just beyond the last swing low (long) or swing high (short), plus a buffer"
pairs_with: [support-and-resistance, atr, trendline, position-sizing]
related: [stop-loss, atr-stop, trailing-stop, volatility-stop, break-even-stop]
compare: []
glossary: [swing-high, swing-low, higher-high, lower-low, stop-loss]
wave: 1
reviewed: 14 November 2026
---

A swing high/low stop, or structure stop, places the stop just beyond the most recent swing point that supports the trade. For a long trade it goes below the last swing low. For a short trade it goes above the last swing high. If price breaks that point, the market structure behind the trade has failed.

## At a glance

| | |
|---|---|
| Type | Stop and exit method |
| Best market states | Trends, ranges |
| Weak in | Very volatile or choppy markets, where swing points are unclear |
| Best uses | Stop placement |
| Default setting | Just beyond the last swing point, plus a small buffer |
| Attributed to | Not attributed to one person |
| Main benefit | The stop sits at a place on the chart that means something |

## What is a structure stop?

A **swing low** is a low with higher lows on both sides. A **swing high** is a high with lower highs on both sides. In an uptrend, price makes a series of higher highs and higher lows. A fall below the last higher low breaks that sequence. That is the logic of the stop: if price falls below it, the uptrend pattern the trade relied on is broken.

This differs from stops based on a fixed distance or a percentage. Those ignore what the chart is doing. A structure stop follows the chart, so its distance varies from trade to trade. The size of the position then has to adjust.

It is the most common form of the "wrong if" rule described in [Stop loss](/stop-loss/): the trade is wrong if price goes beyond that point.

## How it works

1. **Identify the relevant swing point.** For a long entry after a pullback, use the low of the pullback. For a short, use the high of the bounce.
2. **Add a buffer.** Place the stop a little beyond the swing point, not on it. A common buffer is a fraction of [ATR](/atr/) or a few points.
3. **Measure the distance.** Entry minus stop is 1R. Include the spread.
4. **Size the position** so that 1R equals the amount you are willing to risk. See [Position sizing](/position-sizing/).

**Worked example.** Price pulls back in an uptrend to a swing low at 96, then turns up. A trader buys at 100. The ATR is 2, and the buffer is half of it, 1.
Stop = 96 - 1 = **95**
1R = 100 - 95 = 5.
A target at 110 is 10 above entry, which is 2R.

**Trailing with structure.** As the trend makes new higher lows, the stop is moved up beneath each new swing low. The stop steps up in jumps rather than moving smoothly, and it never moves down.

## How to read it

**Distance.** Sometimes the nearest swing is very close, giving a tight stop and a large position. Sometimes it is very far, giving a wide stop and a small position. The stop distance is set by the chart, not by choice.

**Which swing?** The most recent swing is the tightest. A swing further back is a wider, more cautious stop. Pick the one that matches the idea of the trade, and keep to the same rule across trades.

**Buffer.** Price often runs a little past obvious swing points before reversing. A stop placed exactly on the swing can be hit by such a sweep.

**Failure.** If price closes beyond the swing point, the structure has broken and the idea is no longer valid.

## Best market states

**Trends (best).** Higher lows in an uptrend and lower highs in a downtrend give clear swing points to anchor on.

**Ranges (good).** The range edges act as the swing points. A stop just outside the range ends the trade if the range breaks.

**Breakouts.** The stop sits back inside the broken level or below the base of the breakout.

**Volatile or choppy markets (weak).** Swing points are frequent and unclear, so the stop can end up either too tight or too far.

**Reversals.** The stop goes beyond the extreme of the pattern, which can be wide.

## Settings

| Setting | Choice | Effect |
|---|---|---|
| Swing definition | 2 to 5 bars on each side | Larger numbers give fewer, more significant swings |
| Buffer | 0.25 to 1 x ATR, or a few points | Protects against stop sweeps |
| Swing used | Most recent, or the one before | Nearer is tighter, further is wider |
| Trailing | Step up under each new swing | Locks in gains in a trend |

There is no standard setting. Choose the swing rule and buffer in advance, and use the same rule consistently.

## Common mistakes

- Placing the stop exactly on the swing point with no buffer.
- Picking a swing point only because it gives a tight stop and a good-looking ratio.
- Forgetting to adjust position size when the swing is far away.
- Using a stop beyond a minor swing in a messy chart where no clear structure exists.
- Moving the stop to a further swing after entry to avoid a loss.
- Not allowing for the spread when measuring 1R.

## Pairs well with

- **[Support and resistance](/support-and-resistance/)**: swing points often coincide with known levels, which adds weight.
- **[ATR](/atr/)**: a fraction of ATR makes a sensible buffer beyond the swing.
- **[Trendline](/trendline/)**: a stop beyond the trendline and the swing point together marks failure of the trend.
- **[Position sizing](/position-sizing/)**: the chart sets the distance, and sizing adjusts to it.

## Sources

- Elder, Alexander (1993). *Trading for a Living*. Wiley.
- Edwards, Robert D. and Magee, John (1948, later editions). *Technical Analysis of Stock Trends*.
- Tharp, Van K. (1998). *Trade Your Way to Financial Freedom*. McGraw-Hill.

## FAQ

**What is a structure stop?**
It is a stop placed just beyond the last swing low (for a long trade) or swing high (for a short). If price breaks that point, the chart structure supporting the trade has failed.

**How far beyond the swing should the stop go?**
Enough to avoid a small sweep of the level. Many traders use a fraction of ATR or a few points. There is no standard, so pick a rule and apply it each time.

**What if the swing point is too far away?**
Then the trade needs a smaller position so the money risk stays within plan, or it should be skipped. Moving the stop to a closer, meaningless point defeats its purpose.

**Can a structure stop trail?**
Yes. As price makes higher lows in an uptrend, the stop is raised beneath each one. It steps up and never moves down. See [Trailing stop](/trailing-stop/).

**How is it different from an ATR stop?**
A structure stop is anchored to a chart point. An ATR stop is anchored to a distance from price. Many traders combine them by adding an ATR buffer beyond the swing. See [ATR stop](/atr-stop/).
