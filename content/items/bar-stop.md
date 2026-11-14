---
slug: bar-stop
name: Signal-Bar Stop (stop beyond the signal candle)
aka: [Bar stop, Signal bar stop, Stop beyond the signal candle]
type: stop-exit
states: [reversal, breakout]
weak_states: [range]
purposes: [stop]
inventor: Not attributed to one person
year: Unknown
default_settings: "Stop one tick or a small buffer beyond the high or low of the signal bar"
pairs_with: [pin-bar, stop-loss, risk-reward-ratio, atr]
related: [structure-stop, atr-stop, stop-loss, trailing-stop, volatility-stop]
compare: []
glossary: [stop-loss, risk-reward, whipsaw, breakout, pullback]
wave: 3
reviewed: 14 November 2026
---

A signal-bar stop places the stop just beyond the extreme of the candle that triggered the trade: below the low of a bullish signal bar, or above the high of a bearish one. The stop sits where the idea is proven wrong. Its size depends on the candle, so it can be tight or wide.

## At a glance

| | |
|---|---|
| Type | Stop placement method |
| Best market states | Reversal, breakout |
| Weak in | Ranges, very large signal bars |
| Best uses | Initial stop |
| Default settings | One tick, or a small buffer, beyond the signal bar's extreme |
| Created by | Not attributed to one person |
| Leading or lagging | Neither: it is a rule for placing an order |

## What is a signal-bar stop?

A signal bar is the candle that tells you to enter: a [pin bar](/pin-bar/) at support, a reversal candle after a pullback, or the bar that breaks a level. The stop goes just past the far end of that bar. For a long trade that is below the low. For a short trade it is above the high.

The logic is simple. If the signal bar was a true signal, price should not return beyond its extreme. If it does, the setup has failed. The stop therefore marks where the idea is wrong rather than an amount of money you are willing to lose.

The method is used widely in price action trading. It has no single inventor and no formal test behind it. It is one of several ways to place an initial stop, alongside [structure stops](/structure-stop/) and [ATR stops](/atr-stop/).

## How it is identified

1. Wait for the signal bar to close.
2. For a long trade, find the bar's low. For a short, find its high.
3. Add a small buffer: one tick, or a fraction of the bar's range or of ATR. This avoids being stopped by a wick that touches the exact extreme.
4. Place the stop at that price.
5. Work out position size from the distance between the entry and the stop.

**Worked example.** A bullish pin bar has a high of 52.00 and a low of 49.50. A trader enters long on a break above the high at 52.05. The stop goes just below the low: 49.50 - 0.05 = 49.45.

The risk per unit is 52.05 - 49.45 = 2.60. If the account risk limit is 130 on the trade, the position size is 130 / 2.60 = 50 units.

If the signal bar had been twice as tall, the stop would be twice as far away and the position size would be halved for the same risk.

## How to read it

**Stop distance.** The stop distance equals the size of the signal bar plus the buffer, so large signal bars give wide stops and small bars give narrow ones.

**Risk-reward.** A wide stop makes it harder to find a target that gives a good [risk-reward ratio](/risk-reward-ratio/). Some traders skip signal bars that are too large for the target.

**Invalidation.** A close beyond the stop level means the signal has failed. The trade should already be closed.

**Trailing.** After entry, the stop can be moved up to the low of each new bar, or to a structure point, as the trade works.

**Buffer.** A larger buffer reduces stops by wicks but increases the loss when stopped.

## Best market states

**Reversals (best).** Entering at a reversal bar near a level, the stop beyond the bar sits where the reversal idea fails.

**Breakouts (good).** For a breakout bar, the stop beyond its far end is often used. It may be wide if the breakout bar is large.

**Ranges (weak).** Small, overlapping bars give frequent signals and tight stops that noise often hits.

**Volatility.** In very volatile markets, signal bars can be enormous, which makes the method impractical without a size limit.

## Confirmation rules

| Check | What to look for |
|---|---|
| Signal bar | A clear, closed candle with a meaningful body or tail |
| Size | Not so large that the risk-reward is poor |
| Buffer | Fixed rule, such as one tick or a share of ATR |
| Location | The bar forms at a level that gives it meaning |
| Entry | A break of the bar's other extreme, or the next open |
| Position size | Set from the stop distance, before the order is placed |

## Common mistakes

- Placing the stop exactly at the extreme with no buffer.
- Taking signals from very large bars without reducing position size.
- Moving the stop further away after entry.
- Using a signal bar inside a range, where the extreme means little.
- Ignoring spread and slippage, which can push the fill beyond the stop price.
- Forgetting to use ATR or another measure as a sanity check on stop size.

## Pairs well with

- **[Pin bar](/pin-bar/)**: a common signal bar, whose tail marks a natural stop point.
- **[Stop loss](/stop-loss/)**: the broader principles of placing and sizing stops.
- **[Risk-reward ratio](/risk-reward-ratio/)**: tells you whether the stop distance leaves enough room to the target.
- **[ATR](/atr/)**: helps set the buffer and flag signal bars that are too large.

## Sources

- Brooks, Al (2012). *Trading Price Action Trends: Technical Analysis of Price Charts Bar by Bar for the Serious Trader*. Wiley.

## FAQ

**What is a signal-bar stop?**
It is a stop placed just beyond the high or low of the candle that triggered the trade. If price returns past that point, the signal has failed and the trade is closed.

**How big should the buffer be?**
There is no standard size. Many traders use one tick, a small fraction of ATR, or a small share of the bar's range. Pick a rule and apply it every time, then test it on your market.

**What if the signal bar is very large?**
The stop will be far away, so either the position size must shrink or the trade may be skipped because the risk-reward is poor. Some traders use a structure stop or a fixed ATR multiple instead.

**Is a signal-bar stop better than an ATR stop?**
Neither is better in general. The signal-bar stop is tied to the setup's logic, while an ATR stop is tied to volatility. Some traders compare both and choose the more sensible one for the trade.

**Does a signal-bar stop prevent losses?**
No. Stops can be hit by noise or slip past the price in a fast market. The method only defines where the trade idea is wrong and lets you size risk before entering.
