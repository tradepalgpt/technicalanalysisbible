---
slug: what-is-expectancy-in-trading
title: "What is expectancy in trading and how do you calculate it?"
description: Expectancy is your average result per trade in R. The formula, a worked example from ten trades, and what the number can and cannot tell you.
query: what is expectancy in trading
pillar: stop-losses-and-risk-guide
publish: 2027-09-03
reviewed: 16 November 2026
guides: [risk-reward-ratio, position-sizing, stop-loss]
siblings: [what-is-1r-in-trading, win-rate-needed-at-1-to-2-risk-reward]
value: [table, example, verdict]
---

Expectancy is the average amount you make or lose per trade, measured in R. Calculate it as (win rate x average win) - (loss rate x average loss), or simply add up all your results in R, after costs, and divide by the number of trades.

## The formula

Expectancy = (W x average win in R) - (L x average loss in R)

where W is the share of trades that won and L = 1 - W is the share that lost. Both averages are positive numbers, and both are after costs.

The simplest version needs no formula: total R / number of trades. Both give the same answer.

Expectancy combines the two things traders argue about separately: how often you win and how much you win compared with what you lose. A high [risk-reward ratio](/risk-reward-ratio/) with a low win rate can have the same expectancy as a low ratio with a high win rate.

## Worked example: ten trades

All results are in R, after spread, commission, slippage and any gap.

| Trade | Result |
|---|---|
| 1 | +2.00R |
| 2 | -1.00R |
| 3 | -1.00R |
| 4 | +3.10R |
| 5 | -1.05R |
| 6 | -1.00R |
| 7 | +0.40R |
| 8 | -1.00R |
| 9 | +1.80R |
| 10 | -1.20R |

**Simple method:**
Total = 2.00 + 3.10 + 0.40 + 1.80 - 1.00 - 1.00 - 1.05 - 1.00 - 1.00 - 1.20 = +1.05R.
Expectancy = 1.05 / 10 = +0.105R per trade.

**Formula method:**
- Wins: 4 of 10, so W = 0.4. Average win = (2.00 + 3.10 + 0.40 + 1.80) / 4 = 7.30 / 4 = 1.825R.
- Losses: 6 of 10, so L = 0.6. Average loss = (1.00 + 1.00 + 1.05 + 1.00 + 1.00 + 1.20) / 6 = 6.25 / 6 = 1.042R.
- Expectancy = 0.4 x 1.825 - 0.6 x 1.042 = 0.730 - 0.625 = +0.105R.

Two losses were bigger than 1R: one from slippage (-1.05R) and one from a small gap (-1.20R). That is why the average loss is 1.042R, not 1R. Recording them as -1R would have overstated the expectancy.

## Turning expectancy into money

Expectancy in R becomes money through [position sizing](/position-sizing/).

Expected result over N trades = expectancy x N x money per 1R.

At +0.105R per trade, 100 trades, and 1R = 100: 0.105 x 100 x 100 = +1,050. That is the average outcome if the sample is representative. It is not a forecast. The real path will include losing runs, and the true expectancy may be lower than any sample suggests.

## How win rate and win size trade off

Expectancy for different combinations, assuming every loss is exactly -1R after costs:

| Win rate | Average win 1R | Average win 1.5R | Average win 2R | Average win 3R |
|---|---|---|---|---|
| 25% | -0.50R | -0.38R | -0.25R | 0.00R |
| 35% | -0.30R | -0.13R | +0.05R | +0.40R |
| 45% | -0.10R | +0.13R | +0.35R | +0.80R |
| 55% | +0.10R | +0.38R | +0.65R | +1.20R |

Formula for each cell: win rate x average win - (1 - win rate) x 1.

## What expectancy does not tell you

- **How bumpy the ride is.** Two strategies with +0.2R expectancy can have very different losing streaks and drawdowns.
- **Whether it will last.** A sample of 10 or 20 trades can show a positive number by luck. The more trades, the more the figure means, and costs must be in from the start.
- **How often you trade.** +0.1R on 300 trades a year adds up to more R than +0.3R on 20 trades, if both hold.

## Keeping the number honest

1. Fix 1R at the fill: the distance from the fill to the [stop loss](/stop-loss/) times size, with nothing added. Count costs in each result, never in 1R.
2. Never widen a stop after entry. Widened losses inflate the average loss and are often left out of records.
3. Record every trade, including the ones you would rather forget.
4. Count partial exits as one trade with a combined R.

## Common mistakes

- Using planned R (the target) instead of actual R.
- Ignoring costs, which can turn a small positive expectancy negative.
- Leaving out gap losses or "one-off" trades.
- Trusting expectancy from a handful of trades.

## Verdict

Expectancy is your average result per trade in R, after costs. It is the single most useful number for judging a set of trades, because it combines win rate and win size. Calculate it from real results, treat small samples with caution, and remember it says nothing about how deep the losing runs will be.
