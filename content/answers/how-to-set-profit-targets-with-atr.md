---
slug: how-to-set-profit-targets-with-atr
title: "How do you set profit targets with ATR?"
description: Set a profit target a multiple of ATR from entry, in line with the ATR stop. A worked 2R example with costs, plus fixed targets vs ATR trailing exits.
query: how to set profit targets with atr
pillar: volatility-guide
publish: 2028-03-06
reviewed: 17 November 2026
guides: [atr, risk-reward-ratio, chandelier-exit, trailing-stop]
siblings: [how-to-size-positions-using-atr, how-to-trade-high-volatility-markets]
value: [table, example, verdict]
---

To set a profit target with ATR, place it a chosen multiple of the Average True Range from your entry, for example 3 ATR, usually alongside a stop set in ATR too. With a 1.5 ATR stop and a 3 ATR target, the target is worth 2R before costs.

## Why use ATR for targets

A fixed target, such as 50 pips or 2 points, means very different things in a calm week and a wild one. The [Average True Range](/atr/) scales the target to how far the market has been moving. If the stop is also set in ATR, the ratio between them stays fixed, so the [risk-reward ratio](/risk-reward-ratio/) is the same on every trade even when the distances change.

## The formula

- Long: target = entry + m x ATR; stop = entry - k x ATR
- Short: target = entry - m x ATR; stop = entry + k x ATR
- Planned reward in R = m / k (before costs)

| Stop multiple (k) | Target multiple (m) | Planned R before costs |
|---|---|---|
| 1.5 | 1.5 | 1R |
| 1.5 | 3 | 2R |
| 2 | 3 | 1.5R |
| 2 | 6 | 3R |

These are planning numbers. A bigger target in R is reached less often, so a higher R target is not better by itself; it changes the mix of wins and losses.

## Worked example

A share with a daily ATR of 1.20. Long, filled at 50.00 at the ask, so the spread is already inside 1R.

| Item | Calculation | Value |
|---|---|---|
| First stop (1.5 ATR) | 50.00 - 1.5 x 1.20 | 48.20 |
| Target (3 ATR) | 50.00 + 3 x 1.20 | 53.60 |
| Size for 100 of risk | 100 / 1.80 = 55.6, round down | 55 shares |
| 1R | 1.80 x 55 | 99.00 |
| Target in money | 3.60 x 55 | 198.00 |
| Target in R before costs | 198 / 99 | +2.00R |

Now add commission of 4 for the round trip, shown on top of the price result:

| Outcome | Price result | Commission | Net | In R |
|---|---|---|---|---|
| Target filled at 53.60 | +198.00 | -4 | +194.00 | +1.96R |
| Clean stop at 48.20 | -99.00 | -4 | -103.00 | -1.04R |

The clean stop is exactly -1R on price; commission takes it to -1.04R. If the stop had slipped or the market had gapped through it, the loss would be bigger still and recorded as it happened. A target limit order fills at the target or better, but in a fast market a gap can carry price past it either way.

## Fixed target or ATR trailing exit?

| Approach | How it works | Strength | Weakness |
|---|---|---|---|
| Fixed ATR target | Exit at entry + m x ATR | Simple, known R in advance | Caps big trends |
| [Chandelier exit](/chandelier-exit/) | Stop trails a multiple of ATR below the highest high | Lets trends run | Gives back part of the move |
| ATR [trailing stop](/trailing-stop/) | Stop trails a multiple of ATR below price or close | Simple and adaptive | Same give-back issue |
| Split exit | Half at a fixed target, rest trailed | Balances both | More to manage |

The difference between the chandelier and a plain ATR trail is covered in [chandelier exit vs ATR trailing stop](/answers/chandelier-exit-vs-atr-trailing-stop/). Whichever trail you use, it only moves in your favour: stops tighten, never widen.

## Choosing the ATR at entry

Fix the ATR value at entry and use it for both stop and target. If you recalculate the target every bar as ATR changes, the target drifts and the planned R becomes meaningless. Using the same ATR period as your stop (often 14) keeps the plan consistent.

## Common mistakes

- Setting the target in ATR but the stop at a round number, so the R ratio changes every trade.
- Recomputing the target each bar.
- Choosing a large ATR multiple without checking whether the market has room before a clear support or resistance level.
- Ignoring costs. A 1R target with commission and spread can net well under 1R.

## Verdict

An ATR target scales your exit to the market's current movement. Pair it with an ATR stop and the planned R is set by the two multiples, for example 3 ATR over 1.5 ATR for 2R. Fix ATR at entry, measure the result in R with costs on top, and decide in advance whether you want a fixed target or a trailing exit.

More in [the volatility guide](/guide/volatility-guide/).
