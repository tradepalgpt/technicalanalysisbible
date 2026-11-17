---
slug: how-to-size-positions-using-atr
title: "How do you size positions using ATR?"
description: Set the stop as a multiple of ATR, then divide your risk by that distance. Worked sizing across a share, a currency pair and an index, all at the same 1R.
query: how to size positions using atr
pillar: volatility-guide
publish: 2028-03-03
reviewed: 17 November 2026
guides: [position-sizing, atr, atr-stop]
siblings: [how-to-set-profit-targets-with-atr, how-to-trade-high-volatility-markets]
value: [table, example, verdict]
---

To size a position with ATR, set the stop a chosen multiple of ATR from entry, then divide the money you are willing to risk by that stop distance in money per unit. Wider ATR means a wider stop and a smaller position, so every trade risks the same amount: 1R.

## How this differs from the general sizing answer

The general formula, with lots and contract maths, is in [how to calculate position size from a stop loss](/answers/position-size-from-stop-loss/), and the stop itself is covered in [how to set an ATR stop loss](/answers/how-to-set-an-atr-stop-loss/). This answer takes the volatility angle: how ATR makes risk the same across calm and wild markets.

## The formula

1. Stop distance = k x [ATR](/atr/), where k is your multiple (2 is common).
2. Size = money at risk / (stop distance x value per point per unit).
3. Round down.

Once filled, 1R = side-correct fill to first stop x size. Nothing else is added. A clean stop-out is exactly -1R. Commission is shown on top; slippage and gaps change the result, never 1R.

## Worked example: three markets, one risk

A trader risks 100 per trade with an [ATR stop](/atr-stop/) of 2 x ATR. Values are round illustrative numbers on daily charts.

| Market | Daily ATR | Stop distance (2 ATR) | Value per point per unit | Size = 100 / distance |
|---|---|---|---|---|
| Share at 50 | 1.20 | 2.40 | 1 per share | 41.67, round down to **41 shares** |
| Same share, calmer month | 0.60 | 1.20 | 1 per share | 83.33, round down to **83 shares** |
| EUR/USD | 70 pips | 140 pips | money per pip is the size | 100 / 140 = **0.71 per pip** |
| Stock index CFD | 80 points | 160 points | money per point is the size | 100 / 160 = **0.62 per point** (0.625 rounded down) |

Two things to notice:

- When the share's ATR halves, the stop halves and the size doubles. The money at risk barely moves.
- The forex and index trades are sized "per pip" or "per point". Your broker turns that into lots or contracts, and you round down to the nearest size it allows.

Rounding down means 1R lands just under 100: 41 shares x 2.40 = 98.40.

## What happens when the trade goes wrong

Take the first row. Long 41 shares, filled at 50.05 (the ask, so the spread is already inside 1R). First stop at 50.05 - 2.40 = 47.65. 1R = 2.40 x 41 = 98.40.

| Outcome | Exit | Price result | In R |
|---|---|---|---|
| Clean stop | 47.65 | -98.40 | -1.00R, then commission on top |
| Gap through the stop, opens at 46.90 | 46.90 | -129.15 | about -1.31R, then commission on top |

The gap is a real loss beyond 1R and is recorded as it happened. ATR sizing does not prevent gaps; it only makes the planned risk equal across trades.

## Why ATR sizing is popular

| Benefit | Why |
|---|---|
| Same risk across markets | A wild market gets a small size, a calm one a larger size |
| Stops outside normal noise | The stop is set from typical range, not a round number |
| Results comparable in R | Every trade's planned loss is one unit |

The best-known use is the Turtle rules, which sized positions so that one unit of their volatility measure, N (a 20-day ATR), was worth a fixed share of the account. Many modern [position sizing](/position-sizing/) methods follow the same logic.

## Rules that keep it honest

- Measure ATR before entry and fix the stop. If the stop changes before the fill, re-plan with a new 1R and a new size.
- After the fill, the stop only tightens. Never widen it because ATR has grown.
- Check the size is at least the minimum your broker allows. If not, the trade is too big for your risk amount; skip it rather than raise risk.
- Use the same ATR period and multiple across markets, or the comparison breaks.

## Common mistakes

- Using a fixed size and an ATR stop, so the money at risk swings with volatility.
- Rounding up, so 1R is more than planned.
- Recalculating size mid-trade as ATR changes.
- Folding commission into 1R. It goes in the result, on top.

## Verdict

ATR sizing is two steps: stop = multiple of ATR, size = risk / stop distance. It keeps 1R the same in money whether the market is calm or wild, which makes results comparable. It does nothing about gaps or slippage, which still push some losses beyond -1R.

More in [the volatility guide](/guide/volatility-guide/).
