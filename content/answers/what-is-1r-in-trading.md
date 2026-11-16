---
slug: what-is-1r-in-trading
title: "What is 1R in trading?"
description: 1R is the money you lose if a trade hits its stop. How to measure it, how to turn any result into R, and why R compares trades fairly.
query: what is 1r in trading
pillar: stop-losses-and-risk-guide
publish: 2027-07-28
reviewed: 16 November 2026
guides: [stop-loss, position-sizing, risk-reward-ratio]
siblings: [position-size-from-stop-loss, what-is-expectancy-in-trading]
value: [table, example, verdict]
---

1R is the distance from your actual fill price to your first stop, multiplied by your position size, in money. Nothing else is added. Every result is then measured in multiples of that amount: a trade that makes twice what it risked is +2R, and a full stop-out is -1R.

## Where the idea comes from

The "R" stands for risk. The term was made popular by Van Tharp, who wrote about "R-multiples", but the idea is simple bookkeeping. Before you enter, you decide where the [stop loss](/stop-loss/) goes. Once you are filled, the distance from your fill price to that first stop, multiplied by your position size, is the money at risk. That number is 1R for that trade. It is fixed at the fill and never changes while the trade is live, even if the stop later moves.

Once you have 1R, you stop thinking in pounds, pips or percent. You think in units of risk.

## How to calculate 1R

1R = (actual fill price - first stop price) x (position size), in money

Three rules go with this:

1. **Nothing else is added.** Costs are never folded into 1R. The fill is side-correct: a long fills at the ask, so the spread is already inside 1R through the fill price.
2. **Costs go in the result, never in 1R, and are never discounted from a loss.** A clean stop-out is exactly -1R. Slippage and gaps make the result worse than -1R, or better when they go your way. Commission and financing are shown separately, as extra costs on top.
3. **A stop change before the fill means a new plan.** If the stop moves before you are filled, the plan is re-issued with a new 1R and a new size. After the fill, 1R stays fixed and the stop can only tighten.

To turn any result into R:

R-multiple = net profit or loss in money / 1R in money

## Worked example

A trader with a 10,000 account plans to risk 100 on each trade. Here are five trades, all sized so that the distance from the fill to the stop, times the size, is 100. Commission is included in each net result.

| Trade | Net result in money | Calculation | Result in R |
|---|---|---|---|
| 1 | +200 | 200 / 100 | +2.0R |
| 2 | -102 | -102 / 100 | -1.02R |
| 3 | +45 | 45 / 100 | +0.45R |
| 4 | -105 | -105 / 100 | -1.05R |
| 5 | +310 | 310 / 100 | +3.1R |

Trade 2 was a clean stop-out: exactly -1R (100) on price, plus 2 of commission on top, so -1.02R. Trade 4 lost 105. The stop was hit, but the order filled a little worse than the stop price (slippage), and commission came on top. Those extra 5 are a real loss, so the trade is recorded as -1.05R, not rounded to -1R.

The total is +2.0 - 1.02 + 0.45 - 1.05 + 3.1 = +3.48R over five trades, or about +0.70R per trade on average.

## Why R beats percent and pips

Pips and points depend on the market. Forty pips on EUR/USD and forty points on a stock index are very different amounts of risk. Percent return depends on position size, which changes from trade to trade. R strips both out.

| Measure | What it depends on | Can you compare a forex trade with a share trade? |
|---|---|---|
| Pips or points | The instrument's price scale | No |
| Percent of account | Position size and account size | Only if every trade risked the same percent |
| R-multiple | Only the planned risk | Yes |

With R, a trade on gold and a trade on a share sit side by side in one list. You can add them up, average them and work out your [risk-reward ratio](/risk-reward-ratio/) and expectancy without converting anything.

## R and position size work together

R does not tell you how big to trade. It tells you how to measure what happened. [Position sizing](/position-sizing/) is the step that makes 1R equal the amount you meant to risk. If the stop is 30 pips away and you want 1R to be 100, you size the trade so that 30 pips from the fill, times the size, is 100. Some traders size a little smaller to allow for commission. That is a choice that lowers the money at risk; it does not change what 1R is. If the stop is 90 pips away, you trade about a third of that size. The stop sets the size, not the other way round.

## Rules that keep R honest

- Plan 1R before entry and fix it at the fill. Write down entry, stop and size before you place the order. If the stop changes before the fill, re-issue the plan with a new 1R and size.
- Count costs in the result, not in 1R. Slippage and any gap through the stop change the result; commission is shown on top. None of it is ever discounted from a loss.
- Never move the stop further away. If you widen a stop from 30 pips to 60 pips, a full loss becomes about -2R of the original plan. Stops can only be tightened after entry.
- Record the real fill. If a gap fills your stop at a worse price, the loss is more than 1R. Record it as it happened, for example -1.6R.

## Common mistakes

- Measuring 1R from the chart price and ignoring the spread, so every stopped trade "loses 1R" on paper but more in the account.
- Changing 1R mid-trade by adding to a losing position.
- Comparing results in pips across markets with very different volatility.
- Treating a +3R target as a promise. It is only the size of the win if price gets there.

## Verdict

1R is fill-to-stop times size: the planned cost of being wrong on one trade, fixed at the fill, with nothing added. Costs show up in the result, so a clean stop-out is -1R and slippage, gaps and commission make it worse. Measuring every result in R lets you compare trades across markets, check whether your losses really stay at 1R, and calculate expectancy. It is a record-keeping tool, not a strategy, and it only works if the stop is fixed before entry and never widened.
