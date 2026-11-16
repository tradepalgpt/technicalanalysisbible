---
slug: how-many-losing-trades-in-a-row
title: "How many losing trades in a row should you expect?"
description: The plain maths of losing streaks at win rates from 30% to 60%, over 100 trades, and what a streak does to an account in R and percent.
query: how many losing trades in a row should you expect
pillar: stop-losses-and-risk-guide
publish: 2027-09-06
reviewed: 16 November 2026
guides: [position-sizing, risk-reward-ratio, stop-loss]
siblings: [how-much-to-risk-per-trade, what-is-expectancy-in-trading]
value: [table, example, verdict]
---

More than most people guess. With a 40% win rate, the chance of at least one run of 8 losses in a row somewhere in 100 trades is about 49%, and of 6 in a row about 87%. Those figures are pure probability, not a test of any strategy.

## The maths, step by step

If each trade loses with probability q, and trades are independent, the chance that the next k trades all lose is:

P(next k all lose) = q^k

That is the chance of a streak starting at one particular point. Over many trades there are many starting points, so the chance of seeing a streak of length k somewhere is much higher. That second number is found by counting all the sequences of N trades that contain a run of k or more losses. The tables below were calculated exactly this way (a standard run-length calculation), for N = 100 trades.

Real trades are not always independent, and win rates drift. Treat these figures as the floor of what to plan for, not the ceiling.

## Chance that the next k trades all lose

| Win rate | Loss rate q | 3 in a row | 5 in a row | 8 in a row | 10 in a row |
|---|---|---|---|---|---|
| 60% | 0.4 | 6.4% | 1.02% | 0.07% | 0.01% |
| 50% | 0.5 | 12.5% | 3.13% | 0.39% | 0.10% |
| 40% | 0.6 | 21.6% | 7.78% | 1.68% | 0.60% |
| 30% | 0.7 | 34.3% | 16.81% | 5.76% | 2.82% |

## Chance of at least one streak somewhere in 100 trades

| Win rate | 4 or more | 6 or more | 8 or more | 10 or more | 12 or more |
|---|---|---|---|---|---|
| 60% | 80.1% | 21.2% | 3.6% | 0.6% | 0.1% |
| 50% | 97.3% | 54.6% | 17.0% | 4.4% | 1.1% |
| 40% | 99.9% | 87.3% | 49.0% | 20.5% | 7.7% |
| 30% | over 99.9% | 99.0% | 85.8% | 58.0% | 32.9% |

Read the 40% row: over 100 trades, a run of 6 losses is very likely, a run of 8 is about a coin flip, and a run of 10 happens about one time in five. A strategy that wins 40% of the time with a healthy [risk-reward ratio](/risk-reward-ratio/) can be perfectly sound and still produce these runs.

Over more than 100 trades, every figure in the second table goes up.

## What a streak does to the account

At a fixed risk per trade, a clean stop-out is exactly -1R, commission comes on top, and slippage or gaps can make it worse. With risk set as a fixed fraction r of the current balance, after k losses:

Balance = start x (1 - r)^k

Starting from 10,000:

| Losses in a row | Total in R (at -1R each) | Risking 0.5% | Risking 1% | Risking 2% |
|---|---|---|---|---|
| 6 | -6R | 9,704 | 9,415 | 8,858 |
| 8 | -8R | 9,607 | 9,227 | 8,508 |
| 10 | -10R | 9,511 | 9,044 | 8,171 |
| 12 | -12R | 9,416 | 8,864 | 7,847 |

If each loss also carries slippage or a gap, the real totals are a little worse.

## Worked example

A trader has a 40% win rate, wins average +2R and losses -1R after costs, so expectancy is 0.4 x 2 - 0.6 x 1 = +0.2R per trade. They risk 1% per trade on a 10,000 account.

They hit 8 losses in a row. The table above says that had about a 49% chance of happening somewhere in their first 100 trades. The account falls to 9,227, a drawdown of 7.7%. Nothing is wrong with the strategy. The question is whether the trader keeps following it. Knowing the maths in advance is what makes that easier.

Had they risked 2%, the same streak would leave 8,508, a 14.9% drawdown, which is far harder to sit through.

## Using this when planning

1. Find your realistic win rate from your own records in R, after costs.
2. Read off the streak lengths that are likely over a year of trades.
3. Choose risk per trade so the drawdown from that streak is one you could live with. [Position sizing](/position-sizing/) does the rest.
4. Decide in advance what you will do in a streak: keep trading the plan, cut size, or pause to review. Do not decide during the streak.
5. Never respond to a streak by widening the [stop loss](/stop-loss/) or raising size to "win it back".

## Common mistakes

- Expecting the longest streak to be 3 or 4 because that is all you have seen so far.
- Taking a long streak as proof the strategy is broken, without checking the maths.
- Raising risk after losses.
- Ignoring that a lower win rate makes long streaks far more likely.

## Verdict

Losing streaks are normal and longer than most people expect. At a 40% win rate, a run of 8 losses has about an even chance of appearing in 100 trades. Plan for that in advance with the formula q^k and the tables above, set risk so the streak is survivable, and keep stops fixed or tightening only.
