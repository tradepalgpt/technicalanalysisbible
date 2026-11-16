---
slug: what-is-delta-in-order-flow
title: "What is delta in order flow?"
description: Delta is volume traded at the ask minus volume traded at the bid. How it is calculated, cumulative delta with a worked example, and what it can and cannot show.
query: what is delta in order flow
pillar: volume-and-order-flow-guide
publish: 2027-10-08
reviewed: 16 November 2026
guides: [volume-delta, cumulative-volume-delta, footprint-chart]
siblings: [what-is-a-footprint-chart, can-retail-traders-use-order-flow]
value: [table, example, verdict]
---

Delta is the volume traded at the ask minus the volume traded at the bid over a bar or period. A positive delta means buyers who crossed the spread to buy at once outweighed sellers who did the same; a negative delta means the reverse.

## Aggressors and passive orders

Every trade has two sides. One side was waiting with a limit order (passive). The other side arrived with a market order and accepted the waiting price (aggressive).

- A trade at the ask means an aggressive buyer lifted a resting sell order.
- A trade at the bid means an aggressive seller hit a resting buy order.

[Volume delta](/volume-delta/) adds up the ask-side trades and subtracts the bid-side trades. It does not say there were more buyers than sellers: every trade has exactly one of each. It says which side was in more of a hurry.

## Formula

Delta = volume traded at the ask - volume traded at the bid

Cumulative delta = running total of delta, from a chosen start (often the session open)

## Worked example

Four bars from the session open:

| Bar | Volume at ask | Volume at bid | Delta | Cumulative delta |
|---|---|---|---|---|
| 1 | 1,200 | 900 | +300 | +300 |
| 2 | 800 | 1,100 | -300 | 0 |
| 3 | 1,500 | 1,000 | +500 | +500 |
| 4 | 700 | 700 | 0 | +500 |

Bar 4 has zero delta even though 1,400 traded: aggression was balanced. [Cumulative volume delta](/cumulative-volume-delta/) stays at +500, so over the four bars aggressive buyers outweighed aggressive sellers by 500 units.

## How delta is read

| Pattern | Common reading |
|---|---|
| Price up, delta positive | Aggressive buying is driving the move |
| Price up, delta negative | Price rose despite aggressive selling; passive buyers absorbed it |
| Price flat, large delta | Aggression met by a large passive order: absorption |
| Cumulative delta diverges from price | The move is not backed by aggression in the same direction |

These are the common readings in order-flow training. They describe what happened in the bar, not what will happen next. Large passive orders can be cancelled, and aggression can come from someone closing a position rather than opening one.

## How platforms classify trades

Delta depends on knowing which side each trade hit. There are two main methods:

- **Bid/ask comparison.** Each trade is matched with the best bid and ask at that moment. This is the most accurate, but needs tick data with quotes.
- **Tick rule.** If a trade is above the previous trade price, call it a buy; if below, a sell; if equal, use the last direction. This is an approximation used when quote data is missing.

Bar-based "delta" indicators that estimate buying and selling from the bar's shape, such as close position in the range, are not real delta. They are guesses from OHLC data.

## Where delta works and where it does not

- **Futures.** Central exchange, real trade and quote data. Delta is meaningful, subject to data quality.
- **Stocks.** Trades are spread across many venues and some off-exchange prints arrive late, which blurs delta.
- **Spot forex.** No central tape, so delta from a broker's feed only reflects that feed.
- **Crypto.** Delta works per exchange, but each venue is only part of the market.

For whether this is practical outside professional desks, see [can retail traders use order flow?](/answers/can-retail-traders-use-order-flow/). For delta shown price by price inside each bar, see our [footprint chart](/footprint-chart/) guide.

## Common mistakes

- Saying "more buyers than sellers". Every trade has both.
- Treating a large positive delta as a buy signal; it is often seen at tops when late buyers chase.
- Using estimated delta from OHLC bars and reading it as true order flow.
- Comparing cumulative delta values across days with different start times.

## Verdict

Delta is ask-side volume minus bid-side volume: a measure of which side was crossing the spread. It adds detail that ordinary volume cannot show, especially on futures with clean exchange data. It is descriptive, depends on trade classification, and is weak on fragmented or over-the-counter markets.
