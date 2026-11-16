---
slug: position-size-from-stop-loss
title: "How do you calculate position size from a stop loss?"
description: The fixed-fractional formula for position size, with worked examples in forex lots, shares and index CFDs, costs included.
query: how to calculate position size from stop loss
pillar: stop-losses-and-risk-guide
publish: 2027-07-30
reviewed: 16 November 2026
guides: [position-sizing, stop-loss, structure-stop]
siblings: [what-is-1r-in-trading, how-much-to-risk-per-trade]
value: [table, example, verdict]
---

Divide the money you are willing to lose by the distance from your fill to your stop, per unit. Position size = money at risk / (fill-to-stop distance x value per point), then round down. The result defines 1R: fill-to-stop x size, with nothing added.

## The formula

This is fixed-fractional [position sizing](/position-sizing/): you risk a fixed fraction of the account on each trade, and the size changes with the stop distance.

1. Money at risk = account balance x risk fraction. On 10,000 at 1%, that is 100.
2. Loss per unit = distance from the side-correct fill to the stop x value of one point per unit. A long fills at the ask, so the spread is already inside this distance.
3. Size = money at risk / loss per unit.
4. Round down to the nearest size your broker allows. Rounding up means risking more than you planned.

Once you are filled, 1R = fill-to-stop distance x size, in money. It is fixed at the fill. Costs are never added to it: a clean stop-out is exactly -1R, slippage and gaps make the result worse (or better), and commission is shown on top. If the stop changes before the fill, work the size out again: the plan is re-issued with a new 1R.

Some traders choose to size a little smaller to leave room for commission and expected slippage. That lowers the money at risk. It does not change what 1R is.

The [stop loss](/stop-loss/) comes first. You place it where the trade idea is proved wrong, for example beyond a swing low as a [structure stop](/structure-stop/). Then the size follows. Moving the stop closer just to trade a bigger size defeats the point.

## Example 1: forex lots

Account 10,000 (in US dollars), risk 1% = 100.

- Long EUR/USD with the chart (bid) at 1.0850, stop at 1.0820: 30 pips on the chart.
- Spread 1 pip, so the buy fills at the ask, 1.0851: 31 pips from the stop.
- One standard lot is worth about 10 dollars per pip on EUR/USD for a dollar account.
- Commission 7 dollars per lot round turn.

Loss per lot = 31 x 10 = 310 dollars.

Size = 100 / 310 = 0.3226 lots. Round down: 0.32 lots.

Check: 1R = 31 x 10 x 0.32 = 99.20 dollars. A clean stop-out loses exactly that, -1R, plus commission of 7 x 0.32 = 2.24 dollars on top (101.44 dollars, -1.02R).

Optional smaller size for commission: 100 / (310 + 7) = 0.315, rounded down to 0.31 lots. 1R = 96.10 dollars, and a clean stop-out is still -1R plus 2.17 dollars of commission (-1.02R). Less money at risk, same R.

If you size from the chart and ignore the spread, you get 100 / 300 = 0.333, rounded to 0.33 lots. 1R is then 31 x 10 x 0.33 = 102.30 dollars: more money at risk than you planned, on every trade.

## Example 2: shares

Account 10,000, risk 1% = 100.

- Buy a share, filled at 50.00 (the price you actually paid), stop at 47.50: 2.50 per share.

Size = 100 / 2.50 = 40 shares. 1R = 40 x 2.50 = 100.

A clean stop-out loses 100, exactly -1R. Commission and any slippage are recorded on top. If you want to allow 0.05 per share for them, size = 100 / 2.55 = 39.2, rounded down to 39 shares. 1R is then 39 x 2.50 = 97.50: a smaller amount at risk, not a different definition of 1R.

Position value = 40 x 50 = 2,000, or 20% of the account. The position is much bigger than the risk, which is normal. Risk is the stop distance times size, not the amount invested.

## Example 3: index CFD or spread bet

Account 10,000, risk 1% = 100.

- Long an index with the chart at 7,500, stop at 7,460. The spread is 1 point, so the buy fills at 7,501: 41 points from the stop.

Loss per 1 per point = 41.

Size = 100 / 41 = 2.44 per point. Round down to a step your broker allows, for example 2.40 per point.

Check: 1R = 2.40 x 41 = 98.40. A clean stop-out is exactly -1R.

## Same risk, different stops

The table shows how size changes when only the stop distance changes. Account 10,000, risk 100, a share filled at 50. The last two columns show the optional smaller size that allows 0.05 per share for commission and slippage.

| Distance from fill to stop | Raw size | Shares (rounded down) | 1R | Shares allowing 0.05 | 1R at that size |
|---|---|---|---|---|---|
| 1.00 | 100 | 100 | 100.00 | 95 | 95.00 |
| 2.50 | 40 | 40 | 100.00 | 39 | 97.50 |
| 5.00 | 20 | 20 | 100.00 | 19 | 95.00 |

A wide stop does not mean more risk. It means a smaller position. In every row a clean stop-out is exactly -1R.

## What the formula does not cover

- **Gaps.** If the market opens beyond your stop, the fill is at the open, not the stop. The result can be well past -1R. Sizing cannot stop that; it only keeps 1R small so a gap does less harm.
- **Currency conversion.** If the instrument is priced in another currency, convert the value per point into your account currency at the current rate.
- **Minimum sizes.** If the smallest allowed size already risks more than you planned, the honest answer is to skip the trade, not to move the stop closer.
- **Several open trades.** Each trade can be sized at 1R, but five closely correlated trades can behave like one 5R trade.

## Common mistakes

- Sizing first and placing the stop where the money runs out.
- Rounding up.
- Sizing from the chart price instead of the real fill, so 1R is more money than planned.
- Folding commission into 1R, or leaving it out of the result. It belongs on top of the result.
- Using the starting balance after the account has fallen, so risk grows as a fraction of what is left.

## Verdict

Size = money at risk / fill-to-stop loss per unit, rounded down. 1R is fill-to-stop x size, fixed at the fill, with nothing added. The stop decides the size, never the reverse. The sum takes a minute before each trade, and it is the main thing that keeps 1R at the money you meant to risk.
