---
slug: what-is-price-action-trading
title: "What is price action trading?"
description: Price action trading reads bars, swings and levels directly, with few or no indicators. What it covers, a worked trade in R, and its real limits.
query: what is price action trading
pillar: price-action-guide
publish: 2027-10-29
reviewed: 17 November 2026
guides: [price-action, market-structure, pin-bar, support-and-resistance]
siblings: [how-to-identify-market-structure, price-action-vs-indicators]
value: [table, example, verdict]
chart: market-structure
---

Price action trading means making decisions from the price bars themselves: their highs, lows, closes and the swings they form, with few or no indicators. The trader reads trend, levels and individual bars, then plans an entry, a stop and a target from that structure.

## What "price action" covers

[Price action](/price-action/) is a broad label rather than one method. Most books and courses that use the term share four building blocks.

| Building block | What it means | Typical question it answers |
|---|---|---|
| Swings and structure | The sequence of swing highs and lows | Is the market trending up, down or sideways? |
| Levels | Prior highs, lows and congestion areas | Where might price react? |
| Bars and bar patterns | Pin bars, inside bars, outside bars, engulfing bars | Did buyers or sellers win this bar at that level? |
| Context | Higher timeframe trend, session, recent volatility | Does this signal fit the bigger picture? |

The first block is [market structure](/market-structure/): reading higher highs and higher lows, or lower highs and lower lows. The second is [support and resistance](/support-and-resistance/). The third is the bar patterns, such as the [pin bar](/pin-bar/). Context ties them together.

## Where the idea comes from

Reading price directly is the oldest form of technical analysis. Dow theory, written up from Charles Dow's editorials around 1900, judged trends by successive highs and lows. Richard Wyckoff read price and volume together in the early twentieth century. Japanese candlestick reading reached Western traders through Steve Nison's work in the early 1990s. Modern price action courses, and the newer smart money concepts vocabulary, mostly repackage these ideas with new names and stricter or looser rules.

So "price action" is not a single system with a fixed rulebook. Two traders who both call themselves price action traders can take opposite trades on the same chart.

## A worked trade in R

Here is how a simple price action plan turns into numbers. The example uses EUR/USD on a daily chart, in an uptrend that has pulled back to a prior swing high, now acting as support. A pin bar forms there with a low of 1.0822.

- The trader buys as price trades above the pin bar. The long fills at the ask, 1.0852.
- The first stop goes just under the pin bar's low, at 1.0820.
- Size is 100,000 units (one standard lot).
- The target is the last swing high, 1.0948.

1R is the side-correct fill to the first stop, times size: (1.0852 - 1.0820) x 100,000 = 320. Nothing else goes into 1R.

| Outcome | Price result | Commission | Net in money | Net in R |
|---|---|---|---|---|
| Target hit at 1.0948 | +960 | -7 | +953 | +2.98R |
| Clean stop at 1.0820 | -320 | -7 | -327 | -1.02R |

The clean stop-out is exactly -1R on price; the commission sits on top. If the market gapped below 1.0820 overnight, the loss would be larger again, recorded as it filled. If the trade moved in favour, the stop could be raised under a new higher low, but never lowered. These are illustrative numbers, not a tested result.

## What price action does well

- **It is direct.** There is no lag from a calculation. A swing high is a swing high.
- **It sets stops naturally.** Structure gives obvious places to be wrong, such as under a higher low.
- **It works on any chart** that has open, high, low and close data, across stocks, forex, futures and crypto.

## Where it struggles

- **Subjectivity.** Which swing counts, which level matters and whether a bar "is" a pin bar all depend on judgement unless you write exact rules.
- **Hindsight.** Swings look obvious on a finished chart. In real time the last swing is often unconfirmed.
- **Testing.** Because many rules are loose, results are hard to backtest honestly. See [can price action be backtested?](/answers/can-price-action-be-backtested/).
- **Noise.** On very low timeframes, spreads and random wiggles make bar patterns less meaningful.

## Common mistakes

- Treating every bar pattern as a signal, regardless of where it forms.
- Moving the stop further away when price nears it, which turns a planned -1R into something bigger.
- Labelling swings after the fact and believing the labels were clear at the time.
- Ignoring costs, so small-stop trades look better on paper than in the account.

## Verdict

Price action trading is reading swings, levels and bars directly and planning trades from them. It gives clear places for stops and is useful on any market, but most of its rules are loose by default. It works best as a written, specific rule set with results measured in R, not as a feel for the chart.
