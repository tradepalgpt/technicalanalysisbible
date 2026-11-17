---
slug: how-to-trade-high-volatility-markets
title: "How do you trade high-volatility markets?"
description: In high volatility, traders widen stops, cut position size to keep 1R the same, and allow for gaps and slippage. A worked calm-versus-wild comparison in R.
query: how to trade high volatility markets
pillar: volatility-guide
publish: 2028-03-10
reviewed: 17 November 2026
guides: [atr, position-sizing, volatility-stop]
siblings: [how-to-size-positions-using-atr, what-is-the-vix]
value: [table, example, verdict]
---

Most traders handle high volatility by widening the stop to sit outside the bigger noise, cutting position size so the money at risk stays the same, and expecting more slippage and gaps. The market gets wilder; the planned loss per trade, 1R, does not change.

## What changes when volatility is high

- **Bars are bigger.** The [Average True Range](/atr/) rises, so a stop that was outside normal noise last month may now be inside it.
- **Gaps are more common.** Overnight and weekend gaps can jump past stops.
- **Spreads often widen.** Costs per trade go up, especially around news.
- **Slippage grows.** Stop orders fill further from the stop price in fast markets.

None of this says which way the market will go. High volatility comes with sharp falls and sharp rallies alike.

## Worked example: calm versus wild

The same share in two conditions. The trader risks 100 per trade with a [volatility stop](/volatility-stop/) of 2 x ATR. Entry fill is side-correct, so the spread is inside 1R.

| | Calm month | Wild month |
|---|---|---|
| Daily ATR | 0.80 | 2.40 |
| Stop distance (2 ATR) | 1.60 | 4.80 |
| Size = 100 / distance, rounded down | 62 shares | 20 shares |
| 1R = distance x size | 99.20 | 96.00 |

The stop is three times wider in the wild month, and the size is less than a third. Both trades risk about the same money. That is the core of [position sizing](/position-sizing/) for volatility; the details are in [how to size positions using ATR](/answers/how-to-size-positions-using-atr/).

## What a gap does to R

Wild month, long 20 shares filled at 60.00, first stop at 55.20 (60.00 - 4.80). 1R = 4.80 x 20 = 96.00.

| Outcome | Exit | Price result | In R |
|---|---|---|---|
| Clean stop | 55.20 | -96.00 | -1.00R, commission on top |
| Opens at 53.00 after bad news | 53.00 | -140.00 | about -1.46R, commission on top |

The gap loss is real and recorded as it happened, not rounded to -1R. Smaller size limits the damage; it does not remove it.

## A checklist used by many traders

| Step | Why |
|---|---|
| Recalculate ATR before each new trade | Stops set on last month's ATR may sit in this month's noise |
| Widen the stop for new trades, cut the size to match | Keeps 1R the same in money |
| Never widen a stop on an open trade | That raises risk beyond the 1R you planned; stops only tighten |
| Check the spread and expected slippage | Costs are a bigger share of each move |
| Know the event calendar | Scheduled news is where gaps and spikes cluster |
| Consider fewer open positions | Wild markets often move together, so separate trades can act like one big one |
| Consider stepping aside | Not trading is a valid choice when spreads and gaps are extreme |

Some traders also cut their risk per trade, for example from 1% to 0.5% of the account, in very high volatility. That is a choice about how much to risk; it does not change how 1R is measured.

## Tools that adapt on their own

ATR stops, Keltner Channels and Bollinger Bands all widen automatically as volatility rises, so rules built on them adjust without manual changes. The [VIX](/answers/what-is-the-vix/) gives a market-wide reading for US shares, useful as context. Filters that skip trades when ATR is unusually high are covered in [how to filter trades by volatility](/answers/how-to-filter-trades-by-volatility/).

## Common mistakes

- Keeping the same size with a wider stop, so 1R doubles or triples.
- Keeping the same tight stop, so normal noise stops you out.
- Moving a stop away "to give it room" after entry.
- Assuming high volatility means a reversal is near.
- Ignoring the extra cost of wider spreads.

## Verdict

High volatility needs the same risk, spread over a wider stop and a smaller size. Recalculate ATR before each trade, keep 1R fixed in money, never widen a live stop, and expect gaps and slippage to push some losses beyond -1R. If costs and gaps get extreme, standing aside is a legitimate plan.

More in [the volatility guide](/guide/volatility-guide/).
