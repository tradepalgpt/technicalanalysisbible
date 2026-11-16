---
slug: how-to-read-volume-on-a-chart
title: "How do you read volume on a chart?"
description: Volume bars show how much traded in each bar. How to compare them with normal levels, what spikes and dry-ups suggest, and where volume reading is weak.
query: how to read volume on a chart
pillar: volume-and-order-flow-guide
publish: 2027-09-17
reviewed: 16 November 2026
guides: [volume, relative-volume, volume-climax, breakout-trading]
siblings: [what-is-relative-volume, what-is-a-volume-climax]
value: [chart, table, example, verdict]
chart: volume
---

Read volume by comparing each bar with what is normal for that market and time, then asking whether the price move and the volume agree. A big price move on unusually heavy volume shows wide participation; a big move on thin volume shows less.

## What a volume bar shows

Each [volume](/volume/) bar under a price chart shows how much traded during that price bar: shares for stocks, contracts for futures, and usually tick counts for spot forex. Many platforms colour the bar green if the price bar closed up and red if it closed down. The colour only repeats the price bar. It does not mean the volume was buying or selling.

## Step 1: find the normal level

A single volume number means little on its own. A share that trades 2 million a day and one that trades 20,000 are not comparable. So the first step is a baseline. Common choices are:

- A 20-bar or 50-bar average of volume, drawn as a line over the bars.
- [Relative volume](/relative-volume/): today's volume divided by the average for the same period.
- For intraday charts, the average volume at the same time of day, because the open and close are always busier than lunchtime.

## Step 2: compare the bar with the baseline

Here is a small worked example. The 20-day average volume is 1.0 million shares.

| Day | Price action | Volume | Volume / average | Reading |
|---|---|---|---|---|
| 1 | Small up day inside a range | 0.8m | 0.8 | Quiet, normal for a range |
| 2 | Small down day | 0.6m | 0.6 | Dry-up: little interest |
| 3 | Closes above the range high | 2.4m | 2.4 | Breakout with wide participation |
| 4 | Pulls back slightly | 0.9m | 0.9 | Normal, no rush to sell |
| 5 | Long range bar after a long rally | 3.5m | 3.5 | Possible climax: very heavy activity |

The ratios are just volume divided by 1.0 million. Nothing in the table says what will happen next. It describes how busy each day was compared with normal.

## Step 3: ask whether price and volume agree

The classic readings, described in most volume texts, are:

| Price | Volume | Common reading |
|---|---|---|
| Strong move | Above normal | Many participants; the move has broad support |
| Strong move | Below normal | Thin move; easier to reverse |
| Small move | Very high | Effort without result: a lot traded, price did not travel |
| Small move | Very low | Dry-up: neither side is pressing |
| Long run, then huge bar | Extreme | Possible [climax](/volume-climax/): exhaustion of one side |

These are tendencies, not rules. A big bar on heavy volume can start a trend or end one, and the same picture appears in both cases. Context, such as where the bar sits in a trend or range, matters more than the bar alone.

## Where volume is most often used

- **Breakouts.** In [breakout trading](/breakout-trading/), many traders want the break bar to be busier than normal. See [what volume tells you about a breakout](/answers/what-does-volume-tell-you-about-a-breakout/).
- **Pullbacks.** Lighter volume on a pullback inside a trend is often read as a pause rather than a reversal.
- **Climaxes.** A very large bar after an extended move is watched for exhaustion.
- **Ranges.** Falling volume inside a range is common before a break.

## Limits to keep in mind

- Spot forex and many CFDs show tick volume, not traded size.
- Daily volume for today is not final until the close. Any rule that uses "today's volume" in a backtest must only use it after the bar closes.
- Earnings, index rebalances, option expiries and holidays distort volume for reasons unrelated to the chart.
- Platforms may include or exclude pre-market and after-hours trading, so the same day shows different totals.

## Verdict

Reading volume is a comparison exercise: this bar against normal, and volume against the price move. It adds context about participation, and that context is most useful at breakouts, pullbacks and possible climaxes. It does not predict direction on its own, and on forex it is only an activity proxy.
