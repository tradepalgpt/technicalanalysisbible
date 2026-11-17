---
slug: what-is-a-good-atr-value
title: "What is a good ATR value?"
description: There is no universally good ATR value. Why raw ATR depends on price, how to compare markets with ATR percent, and how to judge high or low.
query: what is a good atr value
pillar: volatility-guide
publish: 2028-02-04
reviewed: 17 November 2026
guides: [atr, normalized-atr, position-sizing]
siblings: [how-is-atr-calculated, how-to-filter-trades-by-volatility]
value: [table, example, verdict]
---

There is no good or bad ATR value in general, because ATR is measured in the market's own price units. A useful reading is relative: ATR as a percent of price, or today's ATR compared with the same market's own recent history.

## Why a raw number means little

The [Average True Range](/atr/) of a share priced at 400 might be 6, and the ATR of a share priced at 20 might be 0.6. The first number is ten times bigger, yet the cheaper share is the more volatile one in percentage terms. A pip-based ATR on a currency pair and a point-based ATR on a stock index are not even in the same units. So "is an ATR of 6 good?" has no answer until you say which market, which timeframe and compared with what.

## Make it comparable: ATR as a percent of price

ATR% = ATR / price x 100

This is the idea behind [normalized ATR](/normalized-atr/). The figures below are made-up round numbers for a daily chart, chosen to show the arithmetic, not current market readings.

| Market | Price | Daily ATR | ATR % of price |
|---|---|---|---|
| Share A | 20 | 0.60 | 3.00% |
| Share B | 400 | 6.00 | 1.50% |
| EUR/USD | 1.0850 | 0.0070 (70 pips) | 0.65% |
| Gold | 2,000 | 30 | 1.50% |
| Bitcoin | 40,000 | 1,600 | 4.00% |

Share B has a raw ATR ten times Share A's, but moves half as much in percentage terms. Share B and gold, completely different markets, move about the same proportion of their price per day. That is the comparison raw ATR hides.

## Judge it against the market's own history

The second way to read ATR is against itself. Ask: is today's ATR high or low compared with the last 100 or 250 bars for this market? A percentile rank does this. If today's ATR is higher than 85% of the last 100 readings, the market is busier than usual for itself, whatever the raw number. [Filtering trades by volatility](/answers/how-to-filter-trades-by-volatility/) builds on this.

## What "good" can mean in practice

Traders who ask the question usually mean one of three things.

| What you mean | A sensible test |
|---|---|
| Is there enough movement to cover costs? | Compare ATR with the spread and commission. If the spread is a large share of one ATR, costs eat a large share of any move. |
| Is the stop sized sensibly? | Compare the planned stop distance with ATR. A stop well inside one ATR sits in normal noise. |
| Can I size the trade? | Divide the money at risk by the stop distance. If the result is below the smallest size your broker allows, the market is too volatile for that risk amount. |

The third point uses [position sizing](/position-sizing/). Say you risk 100 per trade with a stop of 2 ATR. On Share A that is 1.20 per share, so about 83 shares. On Bitcoin that is 3,200 per coin, so about 0.031 coins. Both trades risk the same 1R in money; only the size changes.

## A quick worked check

A trader looks at a share at 50 with a daily ATR of 1.20, and a spread of 0.05.

- ATR% = 1.20 / 50 x 100 = 2.4%
- Spread as a share of ATR = 0.05 / 1.20 = about 4%
- Two-ATR stop = 2.40, so 100 of risk buys 41 shares (rounded down from 41.7)

Nothing here is "good" or "bad"; it is information. The spread is small next to a day's movement, and the size works out to a whole number of shares.

## Common mistakes

- Comparing raw ATR across markets or across years when the price has changed a lot.
- Hunting for "high ATR" stocks without noticing that high ATR also means wider stops and smaller size.
- Using a daily ATR to judge a five-minute chart, or the reverse.
- Treating ATR as a signal on its own. It measures movement, not opportunity.

## Verdict

A good ATR value is one you have put in context. Convert it to a percent of price to compare markets, rank it against the same market's history to see if it is high or low, and check it against your costs and your size. A raw ATR number on its own tells you almost nothing.

See [the volatility guide](/guide/volatility-guide/) for the wider picture.
