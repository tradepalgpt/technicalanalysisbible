---
slug: how-to-filter-trades-by-volatility
title: "How do you filter trades by volatility?"
description: A volatility filter only takes trades when ATR or a similar measure is inside a chosen band. How ATR percentile works, a worked example, and testing pitfalls.
query: how to filter trades by volatility
pillar: volatility-guide
publish: 2028-03-15
reviewed: 17 November 2026
guides: [atr, normalized-atr, bollinger-band-width, choppiness-index]
siblings: [what-is-a-good-atr-value, does-low-volatility-come-before-big-moves]
value: [table, example, verdict]
---

To filter trades by volatility, measure current volatility, usually ATR, rank it against the same market's own recent history, and only take a setup when the rank sits inside a band you chose in advance. A breakout system might skip very quiet markets; a range system might skip very busy ones.

## Why filter at all

Many setups behave differently in calm and wild conditions. A breakout in a dead market may not travel far enough to cover costs. A range fade in a fast market may be run over. A filter is a simple rule that says "only trade this setup in these conditions". It does not create an edge; it can only keep a setup to the conditions it was designed for.

## Step 1: pick the measure

| Measure | What it captures | Good for |
|---|---|---|
| [ATR](/atr/) | Typical bar range in price units | One market over time |
| [Normalized ATR](/normalized-atr/) (ATR / price) | Bar range as a percent of price | Comparing markets, or one market across big price changes |
| [Bollinger Band width](/bollinger-band-width/) | Spread of closes vs the average | Squeeze-style filters |
| [Choppiness Index](/choppiness-index/) | Whether price is trending or chopping | Trend vs range filters (not pure volatility) |

## Step 2: rank it against its own history

Raw levels do not compare well across time, so use a percentile rank: the share of past readings below today's. A rank of 90 means today's reading is higher than 90% of the lookback.

**Worked example.** The last 20 daily ATR readings on a share (in a real filter you would use 100 to 250):

1.10, 0.95, 1.30, 1.05, 0.88, 1.42, 1.20, 0.99, 1.15, 1.01, 0.92, 1.25, 1.08, 1.36, 0.97, 1.12, 1.18, 0.90, 1.03, 1.22

Today's ATR is 0.93. Three readings are lower (0.88, 0.90 and 0.92). Percentile rank = 3 / 20 x 100 = **15**.

| Rule | Today's rank 15 | Result |
|---|---|---|
| Breakout filter: trade only if rank is 20 or more | 15 is below 20 | Skip |
| Range filter: trade only if rank is 80 or less | 15 is at or below 80 | Allowed |
| Band filter: trade only between 20 and 80 | Outside | Skip |

## Step 3: decide what the filter changes

A filter can do more than switch trades on or off:

- **Skip or take.** The simplest use, as above.
- **Size.** Some traders keep trading but rely on ATR sizing, which already shrinks size when volatility is high. Measured in R, 1R is still the distance from the side-correct fill to the first stop, times size.
- **Timeframe.** If a daily chart is too quiet, some traders move to a higher timeframe rather than force trades.

## Testing a filter without fooling yourself

Filters are easy to overfit. Try enough cut-off levels and one will look good on past data by chance.

| Pitfall | What goes wrong | Fix |
|---|---|---|
| Look-ahead | Today's ATR uses today's close, but the trade entered at today's open | Use the reading from the bar before entry |
| Tuning the cut-off | Trying 10, 15, 20... and keeping the best | Choose the band for a reason before testing, and count every variant tried |
| One market, one period | The filter fits one regime | Check other markets and a period you did not tune on |
| Fewer trades | Filtered results look smoother but on a small sample | Report the trade count; small samples say little |

The full approach is on our [methods](/methods/) page. We have not tested a volatility filter on this site, so we quote no result.

## Keep the R maths honest

Filtered or not, each trade's result goes in R. A clean stop-out is -1R; slippage and gaps can push it past that, and commission comes on top. A filter that removes trades in fast markets may reduce gap losses, but that is something to measure, not assume. Stops only tighten after entry.

## Common mistakes

- Using raw ATR thresholds across markets with very different prices.
- Calculating the filter with data from the bar you enter on.
- Choosing the cut-off after looking at the results.
- Treating a filter as a strategy. It only decides when another rule is allowed to trade.
- Forgetting that filters reduce trade count, so results rest on fewer trades.

## Verdict

A volatility filter ranks current ATR (or a similar measure) against its own past and only allows a setup inside a band chosen in advance. It is a simple way to keep a setup to the conditions it suits. Use the prior bar's reading, set the band before testing, and judge it on many trades, in R, with costs on top.

More in [the volatility guide](/guide/volatility-guide/).
