---
slug: stop-loss
name: Stop Loss (placement basics)
aka: [Stop, Protective stop, Stop-loss order]
type: stop-exit
states: [trend, range, breakout, reversal]
weak_states: []
purposes: [stop]
inventor: Not attributed to one person
year: Unknown
default_settings: "Placed beyond the level that proves the trade idea wrong"
pairs_with: [atr-stop, structure-stop, position-sizing, risk-reward-ratio]
related: [trailing-stop, break-even-stop, time-stop, volatility-stop, profit-target]
compare: [trailing-stop-vs-stop-loss]
glossary: [stop-loss, r-multiple, slippage, spread]
wave: 1
reviewed: 14 November 2026
---

A stop loss is a pre-set exit order that closes a trade at a loss if price moves against it. It limits how much one trade can lose. The best placement is at the point where the original trade idea is proven wrong, not at a random distance or a sum of money you are willing to lose.

## At a glance

| | |
|---|---|
| Type | Stop and exit method |
| Best market states | All states, with the method adapted to each |
| Weak in | Very thin or gapping markets, where the fill can be worse than the stop |
| Best uses | Stop placement and defining risk |
| Core rule | Place it beyond the level that invalidates the trade |
| Attributed to | Not attributed to one person |
| Key output | The distance to the stop, which sets 1R and the position size |

## What is a stop loss?

A stop loss is an instruction to exit at a set price. On a long trade it sits below the entry. On a short trade it sits above. If price reaches it, the trade closes.

It does two jobs. First, it caps the loss on a single trade. Second, it defines the trade's risk before entry. That risk is the distance from entry to stop, plus the spread and any likely slippage. This amount is called **1R**, one unit of initial risk. A trade that gains twice that distance has made 2R.

Without a stop distance there is no way to size a trade or judge whether the reward is worth the risk. The stop therefore comes first, and the position size follows from it. See [Position sizing](/position-sizing/).

Not every stop is a market order sitting at a broker. Some traders use a mental stop or a close-based rule. Those can work, but only if followed every time. The method matters less than the discipline.

## How it works

A stop is placed by asking one question: what price would show my idea is wrong?

- **Breakout trade:** back inside the range, below the broken level.
- **Pullback in a trend:** beyond the swing low or high that started the pullback.
- **Reversal trade:** beyond the extreme of the pattern. For a [Head and shoulders](/head-and-shoulders/) top, above the right shoulder.
- **Range trade:** beyond the edge of the range.

Then add room for noise. Markets move a little past levels before turning, so many traders add a buffer based on [ATR](/atr/). That is covered in [ATR stop](/atr-stop/) and [Swing high/low stop](/structure-stop/).

**Worked example.** A trader buys at 100 after a pullback. The swing low that started the pullback is at 96. The stop goes just below it at 95, with the extra 1 as a buffer. The risk is 100 - 95 = 5, so 1R = 5, ignoring spread. A target of 110 is 10 above entry, which is 2R.

**Spread and slippage.** A real exit includes the spread. For a long trade, the sell happens at the bid, so the loss is often a little more than the stop distance. In fast markets a stop can fill past its price. A stop is a plan to exit, not a certain price.

## How to read it

**Distance.** A stop that is too tight gets hit by normal noise. One that is too wide makes the risk large, and the position must shrink to stay within the same money risk.

**Beyond obvious levels.** Many orders cluster just past round numbers and swing points. A stop exactly on a level can be triggered by a brief sweep. A small buffer helps.

**Fixed or moving.** A stop can stay put or follow price. Moving stops are covered in [Trailing stop](/trailing-stop/). A stop should be moved only in the direction of reducing risk, never widened after entry.

**Stop out is a result, not a failure.** A stopped trade that lost 1R is a planned outcome. A plan that loses 1R often and wins 3R sometimes can still work, which is why [Risk-reward ratio](/risk-reward-ratio/) matters.

## Best market states

**Trends.** Place stops beyond the last pullback swing, or use a volatility-based distance so they survive ordinary retracements.

**Ranges.** Place stops just outside the range edge. If price leaves the range, the range idea has failed.

**Breakouts.** The stop sits back inside the broken level. A close back through it signals a [false breakout](/support-and-resistance/).

**Reversals.** The stop sits beyond the pattern's extreme. Reversal trades often have wide stops, so size must be smaller.

**Volatility.** In wide-ranging markets, fixed small stops are hit often. Scale the distance to current volatility.

## Settings

| Method | Distance | Notes |
|---|---|---|
| Structure | Beyond the swing high or low | Based on the chart, not on a number. See [Structure stop](/structure-stop/) |
| ATR multiple | A multiple of ATR from entry | Adapts to volatility. See [ATR stop](/atr-stop/) |
| Percentage | A fixed percent of price | Simple, but ignores how the market behaves |
| Money | A fixed amount | Only sensible if it also matches a chart level |

There is no universal setting. The right distance depends on the market, the time frame and the idea behind the trade.

## Common mistakes

- Setting the stop by how much you can afford to lose, not by where the idea fails.
- Placing it so tight that normal noise triggers it.
- Widening the stop after entry to avoid a loss.
- Putting the stop exactly on an obvious level with no buffer.
- Forgetting the spread, so the real loss is more than 1R.
- Using no stop at all and relying on hope.

## Pairs well with

- **[ATR stop](/atr-stop/)**: sets the buffer by current volatility.
- **[Swing high/low stop](/structure-stop/)**: places the stop where the structure fails.
- **[Position sizing](/position-sizing/)**: turns the stop distance into a trade size.
- **[Risk-reward ratio](/risk-reward-ratio/)**: tests whether the reward justifies the stop distance.

## Sources

- Tharp, Van K. (1998). *Trade Your Way to Financial Freedom*. McGraw-Hill.
- Elder, Alexander (1993). *Trading for a Living*. Wiley.
- Kaufman, Perry J. *Trading Systems and Methods*. Wiley.

## FAQ

**What is a stop loss in trading?**
It is an exit order set in advance that closes a losing trade at a chosen price. It limits the loss on one trade and fixes the risk before entry, which lets you size the position properly.

**Where should I place a stop loss?**
At the point where your trade idea is proven wrong, with a small buffer for noise. For a long trade, that is often below a swing low. The distance then decides the position size, not the other way round.

**What is the difference between a stop loss and a trailing stop?**
A stop loss stays fixed at its original level. A trailing stop follows price as the trade moves in your favour. See [Trailing stop vs stop loss](/compare/trailing-stop-vs-stop-loss/).

**Can a stop loss fill at a worse price?**
Yes. In fast markets or over a gap, the fill can be beyond the stop price. This is called slippage, and the spread also adds to the cost. A stop is not a certain price.

**Is a stop loss always needed?**
Not every system uses a hard order, but every sound plan has a defined exit for a losing trade. Without one, a single trade can cause a loss far larger than planned.
