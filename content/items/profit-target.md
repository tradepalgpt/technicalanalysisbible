---
slug: profit-target
name: Profit Target (R-multiple targets)
aka: [Take profit, Target, R-multiple target]
type: stop-exit
states: [trend, range]
weak_states: [volatility]
purposes: [exit]
inventor: Not attributed to one person
year: Unknown
default_settings: "A multiple of initial risk, often 2R, or the next level on the chart"
pairs_with: [stop-loss, risk-reward-ratio, support-and-resistance, measured-move]
related: [trailing-stop, scaling-out, fibonacci-extension, structure-stop, position-sizing]
compare: []
glossary: [take-profit, r-multiple, risk-reward, stop-loss]
wave: 1
reviewed: 14 November 2026
---

A profit target is a pre-set price where a winning trade is closed. An R-multiple target sets it as a multiple of the initial risk. If the stop is 5 away from entry, 1R is 5, and a 2R target is 10 above entry. Targets can also come from chart levels, such as the next resistance.

## At a glance

| | |
|---|---|
| Type | Stop and exit method |
| Best market states | Trends, ranges |
| Weak in | Very volatile markets, where price overshoots or reverses at random |
| Best uses | Exit planning, judging whether a trade is worth taking |
| Typical settings | 1.5R to 3R, or the next level |
| Attributed to | Not attributed to one person; R-multiples were popularised by Van Tharp |
| Pairs with | A stop, which defines 1R |

## What is a profit target?

Every trade has a stop that limits the loss and a target that says where to take the gain. The distance from entry to stop is the initial risk, called **1R**. It includes the spread, because the spread is a real cost. The target is then expressed as a multiple of it.

An R-multiple expresses results in units of risk. A trade that makes twice its initial risk is +2R. A trade stopped out is about -1R. This makes trades comparable across different markets and position sizes. Van Tharp used R-multiples widely in *Trade Your Way to Financial Freedom* (1998).

A target is a plan made before the trade. It stops decisions being made in the heat of the moment.

## How it works

**By multiple of risk.** Entry + (multiple x 1R) for a long trade.

**By chart level.** The next support or resistance, a [Measured move](/measured-move/), or a [Fibonacci extension](/fibonacci-extension/).

**Worked example (R-multiple).** A trader buys at 100 with a stop at 95. 1R = 5.
- 2R target = 100 + 10 = **110**
- 3R target = 100 + 15 = **115**
If the trade hits the stop, the result is -1R. If it hits 110, +2R.

**Worked example (chart level).** The same entry and stop, with resistance at 108. The target at 108 is 8 above entry, which is 1.6R. If the plan needs at least 2R, this trade may be skipped, because the nearest obstacle is too close.

**Break-even maths.** At 2R, a plan breaks even if it wins one trade in three, before costs, since two losses of 1R are covered by one win of 2R. The real figure is higher once spread and fees are counted. Higher targets are not always hit, so the win rate and the target interact.

## How to read it

**Target versus structure.** A 3R target is meaningless if a strong resistance level sits at 1.5R. Check the path to the target.

**Hit rate.** Farther targets are reached less often. A plan with 3R targets can win less than half of its trades and still be sound, while a 1R target needs a high win rate. The balance has to be tested on real results, not assumed.

**Partial exits.** Some traders take half at 1R or 2R and trail the rest. That is described in [Scaling out](/scaling-out/).

**Fixed versus open.** A fixed target caps a winner. A trailing exit lets it run but gives back some profit. See [Trailing stop](/trailing-stop/).

## Best market states

**Ranges (good).** The opposite side of the range is a natural target. Price tends to turn around at the edges.

**Trends (good).** Targets can be set at measured moves or by R-multiples, though a trailing exit may capture more of a long trend.

**Breakouts.** Measured moves from the height of the base are a common target.

**Volatile markets (weak).** Price overshoots and reverses unpredictably, so a fixed target can be missed by a small amount or exceeded by a large one.

**Reversals.** Targets are often the prior swing or the pattern's measured target.

## Settings

| Setting | Target | Effect |
|---|---|---|
| Conservative | 1R to 1.5R | Hit often, needs a high win rate to pay off |
| Common | 2R to 3R | Balanced; needs a lower win rate |
| Ambitious | 4R or more | Hit rarely, rely on a few big wins |
| Level-based | Next support or resistance | Varies; check the resulting R |

There is no best multiple. The target has to fit the market and the stop distance, and the plan needs testing on past data.

## Common mistakes

- Setting a target by wishing, not by chart levels or past behaviour.
- Ignoring the obstacle between entry and target.
- Counting the target in R but forgetting the spread in 1R.
- Moving the target further away as price approaches it.
- Taking profit far too early because a small gain feels safe.
- Choosing a 3R target and then exiting at 1R every time without a rule for it.

## Pairs well with

- **[Stop loss](/stop-loss/)**: defines 1R, so the target has something to be measured against.
- **[Risk-reward ratio](/risk-reward-ratio/)**: turns the target and stop into a single ratio to check.
- **[Support and resistance](/support-and-resistance/)**: shows what stands in the way of the target.
- **[Measured move](/measured-move/)**: gives a chart-based target for breakouts and patterns.

## Sources

- Tharp, Van K. (1998). *Trade Your Way to Financial Freedom*. McGraw-Hill.
- Elder, Alexander (1993). *Trading for a Living*. Wiley.
- Kaufman, Perry J. *Trading Systems and Methods*. Wiley.

## FAQ

**What is an R-multiple target?**
It is a target set as a multiple of the initial risk. If the stop is 5 from entry, 1R is 5, and a 2R target is 10 above entry. It lets you judge a trade by the ratio before you take it.

**What is a good profit target?**
There is no universal answer. Many plans use 2R to 3R, but the right choice depends on the win rate, the market and what the chart shows. Test it on past data for your own approach.

**Should I use a fixed target or a trailing stop?**
A fixed target locks in a known gain but caps the winner. A trailing stop can capture more of a trend but returns some profit. Some traders combine them by taking part at the target and trailing the rest.

**Does 1R include the spread?**
It should. 1R is the initial risk including the spread, because the spread is a real cost on entry and exit. Leaving it out makes the target look better than it is.

**How do I stop moving my target?**
Set it before the trade, write it down and tie it to a chart level or a fixed R-multiple. A rule made in advance is harder to bend in the moment.
