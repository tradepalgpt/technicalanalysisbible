---
slug: scaling-out
name: Scaling Out (partial exits)
aka: [Partial exits, Scaling out of a trade, Taking partial profits]
type: stop-exit
states: [trend]
weak_states: [range]
purposes: [exit]
inventor: Not attributed to one person
year: Unknown
default_settings: "No standard setting; common plans take part of the position at 1R and trail the rest"
pairs_with: [profit-target, trailing-stop, break-even-stop, position-sizing]
related: [moving-average-exit, chandelier-exit, risk-reward-ratio, stop-loss]
compare: []
glossary: [r-multiple, take-profit, trailing-stop, position-size]
wave: 2
reviewed: 14 November 2026
---

Scaling out means closing a trade in stages instead of all at once. A trader might sell half the position at a first target and leave the rest to run with a trailing stop. It trades some upside for a smoother result and a lower chance of giving back a whole winning trade.

## At a glance

| | |
|---|---|
| Type | Stop and exit method |
| Best market states | Trends |
| Weak in | Tight ranges, where there is little room for a runner |
| Best uses | Exit |
| Default settings | None. A common plan: part at 1R, the rest trailed |
| Created by | Not attributed to one person |
| Main trade-off | Smaller average win in exchange for less regret and less variance |

## What is scaling out?

Scaling out is an exit plan. Instead of one exit for the whole position, you split it into pieces and close each piece for its own reason. The first piece usually banks a gain early. The last piece, often called the runner, stays open to catch a larger move.

The idea is a response to a common problem. If you exit everything at a fixed target, a trend that keeps going leaves you behind. If you trail everything, a trade that was well in profit can turn into a small gain or a loss. Splitting the position gives a partial answer to both.

Scaling out is the opposite of scaling in, where a position is built up in steps. The two are independent choices.

There is no single inventor. It is standard risk-management practice, and it appears in many books on trade management under names such as partial exits or partial profits.

## How it is identified

You decide the plan before entering the trade. There are three parts:

1. **How many pieces.** Two or three is typical. More pieces add complexity and extra trading costs.
2. **How big each piece is.** Half and half, or thirds, are common.
3. **What triggers each exit.** A fixed target in R-multiples (multiples of the initial risk), a level such as support or resistance, or a trailing method.

**Worked example.** You buy 100 shares at 50 with a stop at 48. One R is 2 per share, so the total risk is 200.

- At 52 (+1R) you sell 50 shares for a gain of 100. You move the stop on the rest to 50, the entry price.
- The remaining 50 shares are trailed under each new swing low.
- Price rises to 58 and the trailing stop is hit at 56. The runner makes 50 x 6 = 300.

Total gain: 100 + 300 = 400, or +2R on the original 200 risk. Selling everything at 52 would have made only +1R. If price had instead returned to 50 after the first sale, the total gain would be 100 from the first piece and nothing from the second, still a positive trade.

Costs matter. Each extra exit pays commission and spread again, and on small accounts these can eat much of the benefit.

## How to read it

**First exit at a modest target.** Many traders take the first piece at 1R or at the nearest obvious resistance. This pays for part of the risk and can make the rest of the trade feel calmer, which helps discipline.

**Move the stop on the remainder.** After the first exit, a common step is to move the stop to break-even. Learn the details in [Break-even stop](/break-even-stop/). Be aware that moving the stop too tight, too early, can stop out good trades on normal pullbacks.

**Let the runner use a trailing method.** A [trailing stop](/trailing-stop/), a [moving average exit](/moving-average-exit/) or a [Chandelier exit](/chandelier-exit/) can manage the last piece. The method should suit the market's normal volatility.

**It lowers the average win.** If a trend is strong, scaling out earns less than holding the whole position. If a trend fails early, it earns more than holding everything. Whether the plan helps overall depends on how your trades behave, and only your own records can show that.

**It is partly about behaviour.** Banking some profit can stop a trader from closing everything too soon or moving stops in panic. That benefit is real for some people, but it is psychological, not a change in market edge.

## Best market states

**Trends (best).** A trend provides the large move that makes a runner worthwhile. The early piece protects against a pullback, and the runner captures the extension.

**Ranges (weak).** In a sideways market there is little room beyond the first target. Splitting the position adds cost without adding a larger move to chase. A single exit at the other side of the range is often simpler.

**Breakouts (mixed).** Breakouts can run far or fail fast. Scaling out helps with the second case by locking in something early.

**Volatility.** In very volatile markets, targets and trailing stops need to be wider, and small first targets may be reached on noise. Measure targets against [ATR](/atr/) rather than fixed amounts.

## Confirmation rules

Scaling out has no signal to confirm. These checks help you decide whether it fits a trade.

| Check | What to look for |
|---|---|
| Room to run | Clear space beyond the first target before the next obstacle |
| Position size | Large enough that pieces are not trivial after costs |
| Rules written down | Piece sizes, targets and stop moves set before entry |
| Stop on the runner | A defined method, not a decision made in the moment |
| Costs | Commission and spread per exit are small compared with the gain |

## Common mistakes

- Taking the first piece so early that the remaining trade can never pay for losers.
- Moving the stop to break-even immediately, so normal pullbacks stop out the runner.
- Splitting into so many pieces that costs and tracking become a burden.
- Making up the plan during the trade instead of before it.
- Judging scaling out on one or two trades instead of a sample of many.
- Treating the first exit as a reason to forget the risk on what is left.

## Pairs well with

- **[Profit target](/profit-target/)**: gives the first exit a defined level, often a set R-multiple.
- **[Trailing stop](/trailing-stop/)**: manages the runner without needing a fixed target.
- **[Break-even stop](/break-even-stop/)**: a common step after the first piece is sold.
- **[Position sizing](/position-sizing/)**: decides how big each piece is and whether partial exits are practical.

## Sources

- Elder, Alexander (1993). *Trading for a Living*. John Wiley & Sons.
- Tharp, Van K. (2006). *Trade Your Way to Financial Freedom*, 2nd edition. McGraw-Hill. (Discusses exits and R-multiples.)

## FAQ

**Is scaling out better than selling everything at once?**
It depends on the trades. It lowers variance and can reduce regret, but it also lowers the average gain in strong trends. There is no universal answer, so test the plan on your own record before adopting it.

**How much should I sell at the first target?**
Half is common, and a third is also used. The right size depends on how much risk you want to remove early and how far the runner is likely to go. Pick a rule in advance and keep it consistent.

**Should I move my stop after scaling out?**
Many traders move it to break-even on the rest. Others trail it behind swing lows or a moving average. Moving too tight, too soon can stop you out on a normal pullback, so match the stop to the market's usual movement.

**Does scaling out change the risk-reward ratio?**
Yes. The blended outcome is the average of each piece's result, so the overall ratio is lower than the best case and higher than the worst. See [Risk-reward ratio](/risk-reward-ratio/) for how to measure it.

**Does scaling out work in a range?**
Less well. Ranges give limited room for a runner, so a second piece often only adds costs. A single exit at the far side of the range is usually simpler.
