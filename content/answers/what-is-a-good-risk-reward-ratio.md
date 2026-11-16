---
slug: what-is-a-good-risk-reward-ratio
title: "What is a good risk-reward ratio?"
description: Risk-reward only means something next to win rate. The break-even table from 1:1 to 1:4, with and without costs, and how to judge a ratio.
query: what is a good risk reward ratio
pillar: stop-losses-and-risk-guide
publish: 2027-08-04
reviewed: 16 November 2026
guides: [risk-reward-ratio, stop-loss, position-sizing]
siblings: [win-rate-needed-at-1-to-2-risk-reward, what-is-expectancy-in-trading]
value: [table, example, verdict]
---

A good risk-reward ratio is one your win rate can pay for after costs. On its own, no ratio is good or bad: 1:3 needs you to win more than 25% of trades to break even before costs, while 1:1 needs more than 50%.

## What the ratio measures

The [risk-reward ratio](/risk-reward-ratio/) compares the planned loss with the planned gain. If the [stop loss](/stop-loss/) is 1R away and the target is 2R away, the ratio is 1:2. Some traders write it the other way round, as 2:1 "reward to risk". Both mean the same trade.

The ratio is a plan. It says what the win will be if price reaches the target. It says nothing about how often price will get there. A target further away pays more when it is hit and is usually hit less often.

## The break-even win rate

If every win is +W R and every loss is -1R, the win rate p at which you break even is:

p = 1 / (1 + W)

Costs move this up. If each trade costs c R (spread, commission, slippage), a win nets W - c and a loss costs 1 + c, so:

p = (1 + c) / (1 + W)

| Ratio | Win in R | Break-even win rate, no costs | Break-even win rate, costs 0.1R per trade |
|---|---|---|---|
| 1:1 | 1 | 50.0% | 55.0% |
| 1:1.5 | 1.5 | 40.0% | 44.0% |
| 1:2 | 2 | 33.3% | 36.7% |
| 1:3 | 3 | 25.0% | 27.5% |
| 1:4 | 4 | 20.0% | 22.0% |

The 0.1R cost column is an example, not a typical figure. Costs in R depend on how tight the stop is: a 2 pip spread on a 10 pip stop is 0.2R, on a 100 pip stop it is 0.02R. Tight stops make costs a much bigger share of 1R.

## Why a high ratio alone tells you nothing

Picture two traders.

- Trader A uses 1:1 and wins 58% of trades.
- Trader B uses 1:4 and wins 18% of trades.

Expectancy per trade, before costs:

- A: 0.58 x 1 - 0.42 x 1 = +0.16R
- B: 0.18 x 4 - 0.82 x 1 = -0.10R

B has the "better" ratio and loses money. A has the "worse" ratio and makes money. The ratio only matters through expectancy, which needs the win rate as well.

## Worked example with costs

A trader plans a long trade with a 40 point stop and an 80 point target: 1:2 on the chart. The spread is 2 points and commission plus a slippage allowance adds 2 points more, so costs are 4 points per round trip.

- 1R in real money terms = 40 + 4 = 44 points.
- A win nets 80 - 4 = 76 points = 76 / 44 = +1.73R.
- A loss costs 44 points = -1R.

So the chart says 1:2 but the trade is really about 1:1.73. Break-even win rate = 1 / (1 + 1.73) = 36.7%, not 33.3%. Ignoring costs makes every ratio look better than it is.

## How traders choose a ratio

Most published approaches fit the target to the market, not to a favourite number.

| Approach | How the target is set | Typical effect |
|---|---|---|
| Fixed multiple | Always 2R or 3R | Simple to test; ignores where resistance sits |
| Next level | Just before the next support or resistance | Ratio varies trade to trade |
| Trailing exit | No fixed target; a trailing stop decides | Few large wins, many small ones |

A trade whose nearest resistance is only 0.8R away is a 1:0.8 trade, whatever ratio you hoped for. Some traders skip trades below a minimum ratio, such as 1:1.5. That is a filter, and like any filter it should be tested in R before it is trusted.

## Common mistakes

- Picking a far target to make the ratio look good, then cutting the trade early. The real ratio is what you take, not what you plan.
- Ignoring costs, which shrink the reward and enlarge the risk.
- Moving the stop further away to "improve" the win rate. That changes 1R after entry and is a mistake; stops only tighten.
- Comparing ratios across strategies without comparing win rates. Use [position sizing](/position-sizing/) and expectancy in R instead.

## Verdict

No ratio is good by itself. A ratio is good when your real win rate, after costs, is comfortably above the break-even rate in the table. 1:2 and 1:3 are popular because their break-even rates are low, but they only pay if price reaches the target often enough. Judge the pair, not the ratio.
