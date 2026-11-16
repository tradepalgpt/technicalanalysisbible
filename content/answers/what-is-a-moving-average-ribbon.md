---
slug: what-is-a-moving-average-ribbon
title: What is a moving average ribbon?
description: A moving average ribbon is many averages plotted together. How to read width, order and twists, how Guppy's version differs, and what a ribbon cannot add.
query: moving average ribbon
pillar: moving-averages
publish: 2027-05-14
reviewed: 16 November 2026
guides: [moving-average-ribbon, guppy-multiple-moving-average, exponential-moving-average]
siblings: [how-many-moving-averages-should-you-use-on-a-chart, do-moving-average-crossovers-work]
value: [chart, table, verdict]
chart: moving-average-ribbon
---

A moving average ribbon is a set of many moving averages, often 6 to 15, plotted on the same chart at evenly spaced periods. When the lines fan out in order, the trend is strong; when they squeeze together and twist, the trend is fading or price is ranging.

## How a ribbon is built

A [moving average ribbon](/moving-average-ribbon/) is just several averages of the same type with different periods. A common version uses [exponential moving averages](/exponential-moving-average/) at 10, 20, 30, 40, 50 and 60. Others step by 5, or use 8 lines from 20 to 55. There is no single standard.

Because each line has a different lag, the lines separate when price moves steadily and come together when price stalls. The shape of the bundle is the signal.

## Reading a ribbon

| Ribbon shape | What it shows | Typical reading |
|---|---|---|
| Wide, fanned, short lines on top | Strong uptrend | Trend in force; pullbacks may stay shallow |
| Wide, fanned, short lines on bottom | Strong downtrend | Trend in force |
| Narrowing | Trend slowing | Momentum fading; watch for a range or turn |
| Lines twisted or crossing | No clear trend | Range; crossover signals are unreliable |
| Expanding after a twist | New move starting | Possible start of a trend |

The order matters. In an uptrend the fastest average is on top and the slowest at the bottom, with the others stacked in between. When the order breaks, with some fast lines below slow ones, the trend has at least paused.

## Guppy's version

The [Guppy Multiple Moving Average](/guppy-multiple-moving-average/), developed by Daryl Guppy, is a ribbon split into two groups:

- **Short-term group:** EMAs of 3, 5, 8, 10, 12 and 15.
- **Long-term group:** EMAs of 30, 35, 40, 45, 50 and 60.

Guppy described the short group as showing the behaviour of short-term traders and the long group as showing longer-term investors. Whether that description is literally true or not, the split is useful. The reading looks at two things: how each group is behaving (spread or compressed) and how far apart the two groups are. A short group crossing through a widely spread long group is read as a pullback; a short group crossing through a compressed long group as a possible change of trend.

## What the chart shows

Our chart shows a ribbon drawn by our own indicator code on real daily data. Look for the stretches where the lines fan out evenly and the stretches where they twist. Then notice how many twists happened during sideways periods compared with real turns. It is a teaching example of how a ribbon looks, not a test of ribbon signals.

## What a ribbon adds

- **A quick read of trend strength.** Fanned out or tangled is visible at a glance, even on a small screen.
- **A sense of how far a pullback has gone.** Price dipping into the top lines of a wide ribbon is a shallow pullback; price falling through the whole ribbon is a deep one.
- **Fewer judgement calls about which line to use.** Instead of asking whether the 20 or the 30 matters, you see the whole range.

## What a ribbon cannot add

- **More information than two averages.** Every line is built from the same closes. A fast and a slow average already show most of what a ribbon shows. The extra lines fill in the space between.
- **Early warning.** Each line still lags. The ribbon twists after the turn, like any average.
- **Clarity in ranges.** In a range the ribbon becomes a tangle, which is useful only as a sign to stay out of trend trades.

## A worked reading

A daily chart with a six-line EMA ribbon (10 to 60).

1. For two months, the lines are stacked in order with even gaps. Price pulls back twice into the 10 and 20 lines and recovers. Reading: steady uptrend.
2. Over three weeks, the gap between the 10 and 60 shrinks by half. Price makes a new high but the fast lines do not separate much. Reading: momentum fading.
3. The 10 and 20 cross below the 30. The lines tangle. Reading: trend paused or over; trend-following signals are now unreliable.
4. Four weeks later the lines fan out again, this time in the opposite order. Reading: a downtrend has formed.

Each step is a description, not a prediction. A trader using this would typically only take trend trades in steps 1 and 4.

## Common mistakes

- Treating each line crossing as a separate signal. In a twisting ribbon there will be dozens.
- Adding a ribbon to a chart that already has two or three averages, MACD and a crossover. It repeats the same information.
- Tuning the periods until the ribbon "fits" past turns. That is fitting the past.

## Verdict

A ribbon is a good visual summary of whether a market is trending and how strongly. It does not add information that two well-chosen averages lack, and it is no earlier at turns. Use it to decide when to look for trend trades, not as a signal machine. See [how many moving averages to use](/answers/how-many-moving-averages-should-you-use-on-a-chart/) and [the moving averages guide](/guide/moving-averages/).
