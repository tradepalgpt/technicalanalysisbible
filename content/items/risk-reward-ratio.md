---
slug: risk-reward-ratio
name: Risk-Reward Ratio
aka: [Reward-to-risk, R:R, Risk/reward]
type: stop-exit
states: [trend, range, breakout, reversal]
weak_states: []
purposes: [filter]
inventor: Not attributed to one person
year: Unknown
default_settings: "Minimum 2 to 1 reward to risk before taking a trade"
pairs_with: [stop-loss, profit-target, position-sizing, support-and-resistance]
related: [structure-stop, atr-stop, trailing-stop, measured-move, scaling-out]
compare: []
glossary: [risk-reward, r-multiple, stop-loss, take-profit]
wave: 1
reviewed: 14 November 2026
---

The risk-reward ratio compares how much a trade could gain with how much it could lose. If the stop is 5 away and the target is 10 away, the reward is 2R for a risk of 1R, a ratio of 2 to 1. Traders use it as a filter to skip trades where the possible gain is too small for the risk.

## At a glance

| | |
|---|---|
| Type | Stop and exit method (trade filter) |
| Best market states | All states; each needs its own realistic target |
| Weak in | Treated alone, since it says nothing about how likely the target is |
| Best uses | Filtering trade ideas |
| Typical setting | At least 2 to 1, varies by system |
| Attributed to | Not attributed to one person; R-multiples were popularised by Van Tharp |
| Related measure | Win rate, which decides which ratio is enough |

## What is the risk-reward ratio?

Every trade has two distances. The first is from entry to stop, the risk. The second is from entry to target, the reward. The ratio is reward divided by risk.

Risk should be measured in R. **1R is the initial risk, including the spread.** If the stop is 5 away and the spread costs 0.5, then 1R is 5.5 for a long trade. Counting the spread matters on small targets, where it eats a large share of the reward.

Many traders write the ratio as 1:2 (risk to reward) while others write 2:1 (reward to risk). This page uses reward to risk, so a higher number is better.

The ratio is a filter, not a forecast. It tells you what you stand to win relative to what you stand to lose. It does not tell you how likely either outcome is.

## Formula

Risk-reward ratio = (target - entry) / (entry - stop) for a long trade, with spread added to the risk.

**Worked example.** A trader buys at 100. The stop is at 95. The target is at 110. The spread is 0.
Risk = 100 - 95 = 5, so 1R = 5.
Reward = 110 - 100 = 10 = 2R.
Ratio = 10 / 5 = **2 to 1**.

**With spread.** If the spread adds 1 to the risk, then 1R = 6 and the reward in R falls to 10 / 6, about 1.7R.

**The win rate link.** The break-even win rate is 1 / (1 + ratio), before costs. At 2 to 1, that is 1 / 3, about 33 percent. At 1 to 1 it is 50 percent. At 0.5 to 1 it is 67 percent. The ratio and the win rate must be judged together.

## How to read it

**Higher is not always better.** A distant target gives a high ratio but is hit less often. A good-looking ratio built on an unrealistic target is worthless.

**Expectancy.** A plan's average result per trade combines the win rate and the average win and loss in R. Van Tharp calls this expectancy. A plan can have a modest ratio and a high win rate, or the opposite, and be equally sound.

**Use as a gate.** Many traders set a minimum, such as 2 to 1, and skip any trade below it. This forces a check on where the stop and target sit.

**Check the path.** If a major resistance sits between entry and target, the real reward is smaller than the stated one.

**Trade management.** Trailing stops and partial exits change the final result, so the ratio at entry is only a starting estimate.

## Best market states

**Ranges (good).** Stops sit just outside the range and targets at the other edge, giving a clear measurable ratio.

**Trends (good).** A pullback entry with a close stop can offer a high ratio, while the trend allows for a distant target.

**Breakouts (good).** A tight stop below the broken level and a measured-move target often yield a favourable ratio.

**Reversals.** Stops tend to be wide, so the ratio is often lower unless the target is far.

**Any state.** The ratio matters only if the target is realistic for that state.

## Settings

| Minimum ratio | Break-even win rate | Comment |
|---|---|---|
| 1 to 1 | 50% | Needs a high win rate |
| 2 to 1 | 33% | A common minimum |
| 3 to 1 | 25% | Needs patience, since targets are hit less often |

These break-even figures ignore costs, so real thresholds are higher. Choose a minimum from testing your own approach.

## Common mistakes

- Chasing a high ratio with a target price is unlikely to reach.
- Forgetting the spread when measuring risk.
- Treating the ratio as the probability of winning.
- Moving the stop closer after entry to make the ratio look better.
- Ignoring obstacles between entry and target.
- Using the ratio without tracking real results in R over many trades.

## Pairs well with

- **[Stop loss](/stop-loss/)**: sets the risk side of the ratio.
- **[Profit target](/profit-target/)**: sets the reward side.
- **[Position sizing](/position-sizing/)**: converts the risk into an amount of money.
- **[Support and resistance](/support-and-resistance/)**: shows whether the target is realistic.

## Sources

- Tharp, Van K. (1998). *Trade Your Way to Financial Freedom*. McGraw-Hill.
- Elder, Alexander (1993). *Trading for a Living*. Wiley.
- Kaufman, Perry J. *Trading Systems and Methods*. Wiley.

## FAQ

**What is a good risk-reward ratio?**
There is no universal figure. Many traders use 2 to 1 as a minimum, but what works depends on the win rate. A lower ratio can work with a high win rate, and a higher one can work with a low win rate.

**How do you calculate the risk-reward ratio?**
Divide the distance from entry to target by the distance from entry to stop. If the target is 10 away and the stop 5 away, the ratio is 2 to 1. Add the spread to the risk.

**Does a 3 to 1 ratio mean I will profit?**
No. The ratio says nothing about how often the target is reached. A 3 to 1 trade that rarely reaches its target can lose money overall. Judge it alongside real results.

**What is the break-even win rate?**
It is 1 divided by one plus the ratio, before costs. At 2 to 1 it is about 33 percent. Fees and spread push the real figure higher.

**Is risk-reward the same as R-multiple?**
They are related. The R-multiple measures a result in units of initial risk. The ratio compares the planned reward with the planned risk before the trade. See [Profit target](/profit-target/).
