---
slug: stochastic-rsi-vs-rsi-difference
title: What is stochastic RSI and how is it different from RSI?
description: Stochastic RSI ranks RSI within its own recent range, so a small RSI move can swing it from 0 to 100. A worked example of the difference and when each fits.
query: stochastic rsi vs rsi difference
pillar: rsi-and-momentum-oscillators
publish: 2027-03-24
reviewed: 16 November 2026
guides: [stochastic-rsi, rsi, stochastic-oscillator]
siblings: [rsi-vs-stochastic-which-is-better, fast-vs-slow-stochastic]
value: [chart, table, example, verdict]
chart: stochastic-rsi
---

Stochastic RSI is RSI put through the stochastic formula: it shows where today's RSI sits within RSI's own high and low over the last 14 bars. RSI measures momentum; stochastic RSI measures RSI's position in its recent range. It is much faster and reaches its extremes far more often.

## The formula

[Stochastic RSI](/stochastic-rsi/) was introduced by Tushar Chande and Stanley Kroll in *The New Technical Trader* (1994).

1. Calculate [RSI](/rsi/), usually 14 periods.
2. Find the highest and lowest RSI over the last 14 bars.
3. StochRSI = (RSI - lowest RSI) / (highest RSI - lowest RSI).

The result runs from 0 to 1. Many platforms multiply by 100 and add smoothing: a %K line (a 3-bar average of StochRSI) and a %D line (a 3-bar average of %K), just like a slow [stochastic](/stochastic-oscillator/). The common default is written 14, 14, 3, 3: RSI period, stochastic period, %K smoothing, %D smoothing.

## A worked example: two RSI points, a full swing

The clearest way to see the difference is a quiet market where RSI barely moves.

Over 14 days, RSI(14) drifts between 48 and 52. Here are the last five readings:

| Day | RSI | Lowest RSI (14 days) | Highest RSI (14 days) | StochRSI |
|---|---|---|---|---|
| 1 | 48.5 | 48.0 | 52.0 | 0.13 |
| 2 | 49.6 | 48.0 | 52.0 | 0.40 |
| 3 | 51.2 | 48.0 | 52.0 | 0.80 |
| 4 | 51.9 | 48.0 | 52.0 | 0.98 |
| 5 | 50.1 | 48.0 | 52.0 | 0.53 |

RSI moved from 48.5 to 51.9, a change of 3.4 points that says "nothing is happening; gains and losses are balanced". Stochastic RSI went from 0.13, "oversold", to 0.98, "overbought", in three days.

Both are accurate. RSI is right that momentum is flat. StochRSI is right that RSI is at the top of its own small range. The trouble is that "the top of a 4-point range in a flat indicator" is rarely useful information, and on a chart it looks exactly like a strong overbought signal.

## The main differences

| | RSI | Stochastic RSI |
|---|---|---|
| Input | Closing prices | RSI values |
| Question | How one-sided were recent closes? | Where is RSI within its own recent range? |
| Range | 0 to 100 | 0 to 1 (or 0 to 100) |
| Usual levels | 70 / 30 | 0.8 / 0.2 (or 80 / 20) |
| Speed | Medium | Very fast |
| Time at extremes | Occasional | Frequent |
| Flat market | Sits near 50 | Can still swing fully |
| Strong trend | Stays high (or low) | Pins at 1 (or 0) for long stretches |

## When it helps

Stochastic RSI's speed makes it useful in one narrow situation: **timing an entry inside a trend you have already identified**. If the daily trend is up and you want to buy a short pullback, StochRSI dropping below 0.2 and turning back up marks the end of a small dip earlier than RSI does. RSI might only fall from 60 to 50 on that dip, which looks like nothing. StochRSI shows the same dip as a full swing.

Traders using it this way:

1. Decide the trend with something else: price structure, a longer moving average, or RSI itself in its uptrend band.
2. Take only StochRSI signals in the trend's direction: buys below 0.2 in uptrends, sells above 0.8 in downtrends.
3. Use a price trigger and put the stop on the chart, below the pullback low.

## When it hurts

- **Alone.** On its own, StochRSI produces a stream of extremes, most of them meaningless.
- **In strong trends, against the trend.** In a strong uptrend RSI stays high, so its own range is narrow and near the top, and StochRSI can sit at 1.0 for days. Selling that is selling strength.
- **In flat markets.** As the example shows, it magnifies noise into signals.
- **Across platforms.** Some platforms show it unsmoothed, some with %K and %D, some from 0 to 1 and some from 0 to 100. A level of "20" means nothing until you know which version you are looking at.

## A note on settings

Because StochRSI is two indicators stacked, it has four settings. Changing the RSI period changes how much RSI moves; changing the stochastic period changes the range RSI is ranked against. A short stochastic period on a long RSI produces the most swings. If you try different settings, write down the ones you plan to test first, and test them on data you did not use to choose them. Four settings give many ways to fit the past by accident.

## How it relates to the stochastic

StochRSI is not a "better stochastic". The [stochastic oscillator](/stochastic-oscillator/) places the close within the price range, using highs and lows. StochRSI places RSI within RSI's range and never looks at highs or lows. They answer different questions. [RSI vs stochastic: which is better?](/answers/rsi-vs-stochastic-which-is-better/) covers that pair; [fast vs slow stochastic](/answers/fast-vs-slow-stochastic/) explains the %K and %D smoothing StochRSI borrows.

## Verdict

Stochastic RSI is an oscillator of an oscillator. It turns small RSI moves into full-scale swings, which makes it fast and very noisy. It earns its place only as a timing tool for pullback entries in a trend you have already confirmed some other way. For judging momentum itself, plain RSI says more with less noise.
