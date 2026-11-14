---
slug: trailing-stop
name: Trailing Stop
aka: [Trailing stop loss, Moving stop]
type: stop-exit
states: [trend]
weak_states: [range]
purposes: [stop, exit]
inventor: Not attributed to one person
year: Unknown
default_settings: "A fixed distance, percentage or multiple of ATR behind the best price"
pairs_with: [atr, structure-stop, adx, position-sizing]
related: [chandelier-exit, atr-stop, parabolic-sar, supertrend, break-even-stop, stop-loss]
compare: [trailing-stop-vs-stop-loss]
glossary: [stop-loss, trailing-stop, r-multiple, pullback]
wave: 1
reviewed: 14 November 2026
---

A trailing stop is a stop loss that follows price in the direction of the trade and never moves back. On a long trade it rises as price makes new highs and stays still when price falls. It locks in open profit while letting a winning trade keep running until the trend turns.

## At a glance

| | |
|---|---|
| Type | Stop and exit method |
| Best market states | Trends |
| Weak in | Ranges, where it is hit by ordinary swings |
| Best uses | Protecting profit, exiting trends |
| Typical settings | Fixed distance, percentage, ATR multiple or swing points |
| Attributed to | Not attributed to one person |
| Main trade-off | Protects profit but gives some back on every exit |

## What is a trailing stop?

A normal [Stop loss](/stop-loss/) stays where you put it. A trailing stop starts at the same place, then moves. When price rises on a long trade, the stop rises with it, keeping a set distance behind the best price reached. When price falls, the stop does not move down. If price drops to the stop, the trade closes.

The result is a stop that begins as protection against loss and becomes a way to lock in profit. After the stop has moved above entry, the worst outcome is a gain.

There are many ways to choose the distance. It can be a fixed number of points, a percentage, a multiple of [ATR](/atr/), the low of the last few bars, or a moving average. The [Chandelier exit](/chandelier-exit/) and [Parabolic SAR](/parabolic-sar/) are named trailing methods.

## How it works

**Rule.** For a long trade: new stop = best price since entry - trail distance. The stop is only ever raised. For a short trade the reverse applies.

**Worked example.** A trader buys at 100 with a trail distance of 5.
- Start: stop at 95. 1R = 5.
- Price rises to 110. Stop moves to 105. The trade now locks in 5, which is 1R.
- Price rises to 120. Stop moves to 115, locking in 15, which is 3R.
- Price falls to 116. Stop stays at 115.
- Price falls to 115. The trade closes at about 115, a gain of 15 or 3R, before spread and slippage.

If price had fallen from 110 straight back to 105, the exit would have been a gain of only 1R, even though price reached 110. That is the cost of trailing: profit is given back before the exit.

**Choosing the distance.** Too close, and normal pullbacks end the trade. Too far, and a lot of profit is returned before the stop is hit. A volatility-based distance (see [ATR stop](/atr-stop/)) or a distance beyond the last swing (see [Swing high/low stop](/structure-stop/)) is more logical than a random number.

## How to read it

**Stop level versus price.** The gap between price and stop is the profit you could still give back. A larger gap means more room but more risk to the open gain.

**Moves are one-way.** If you widen the stop to hold a losing position, it is no longer a trailing stop.

**When to begin.** Some traders start trailing only once price has moved 1R or more in their favour, and until then keep the original stop.

**Order or rule.** A trailing stop may be a broker order that moves by itself, or a rule applied at each close. Each behaves differently around gaps and intrabar spikes.

## Best market states

**Strong trends (best).** A trailing stop lets a trend run while protecting gains.

**Volatile trends (good).** Use a distance tied to ATR, not a fixed number.

**Ranges (weak).** Price swings back and forth, so the stop is hit before any trend develops.

**Reversals.** The stop exits only after a drop from the peak, so it will give back part of the move.

**Breakouts.** Early in a breakout, a tight trail can end the trade on the first pullback. A wider trail is usual.

## Settings

| Method | Setting | Behaviour |
|---|---|---|
| Fixed distance | A set number of points | Simple, ignores volatility |
| Percentage | A set percent below the high | Scales with price, ignores volatility |
| ATR multiple | 2 to 3 x ATR(14) | Adapts to volatility |
| Swing points | Below the last higher low | Follows the structure, steps up in jumps |
| Moving average | Close below a chosen moving average | Smooth, lags more |

No setting is correct for every market. Test the choice on the market and time frame you trade.

## Common mistakes

- Trailing too tightly in a normal pullback and being stopped out of a good trend.
- Trailing too loosely, so a large part of the profit is returned.
- Moving the stop only when it is convenient, instead of by a rule.
- Using a trailing stop in a range market.
- Ignoring slippage, which means the real exit can be worse than the stop price.
- Counting the exit as a loss of the trade, when it was a planned way to lock in gains.

## Pairs well with

- **[ATR](/atr/)**: sets a distance that adapts to current volatility.
- **[Swing high/low stop](/structure-stop/)**: steps the stop up behind each higher low.
- **[ADX](/adx/)**: shows whether there is a trend worth trailing.
- **[Position sizing](/position-sizing/)**: the initial stop distance sets the size before any trailing begins.

## Sources

- Tharp, Van K. (1998). *Trade Your Way to Financial Freedom*. McGraw-Hill.
- Kaufman, Perry J. *Trading Systems and Methods*. Wiley.
- Elder, Alexander (1993). *Trading for a Living*. Wiley.

## FAQ

**What is a trailing stop?**
It is a stop loss that follows price as the trade moves in your favour. On a long trade it only moves up, keeping a set distance behind the highest price. If price falls to it, the trade closes.

**How does a trailing stop differ from a stop loss?**
A stop loss stays at one price and limits the initial loss. A trailing stop moves with the trade and locks in profit as it goes. See [Trailing stop vs stop loss](/compare/trailing-stop-vs-stop-loss/).

**Where should I set a trailing stop?**
A common choice is a multiple of ATR behind the best price, or just beyond the last swing low. The distance should be wide enough to survive normal pullbacks. Test it on your market first.

**Does a trailing stop guarantee profit?**
No. It locks in the gain only up to the stop price. Gaps and fast moves can fill beyond it, and the spread adds to the cost.

**When should I start trailing a stop?**
Many traders keep the original stop until price has moved a set amount in their favour, such as 1R, then begin to trail. That is a choice, not a rule, so decide it before the trade.
