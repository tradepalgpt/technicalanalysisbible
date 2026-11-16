---
slug: what-is-relative-volume
title: "What is relative volume?"
description: Relative volume divides current volume by a normal level for the same period. How to calculate it, the time-of-day version, and its limits.
query: what is relative volume
pillar: volume-and-order-flow-guide
publish: 2027-09-20
reviewed: 16 November 2026
guides: [relative-volume, volume, tick-volume]
siblings: [how-to-read-volume-on-a-chart, what-is-tick-volume]
value: [chart, table, example, verdict]
chart: relative-volume
---

Relative volume is current volume divided by the normal volume for the same period. A reading of 2 means twice the usual activity; 0.5 means half. It turns raw volume into a ratio you can compare across days, times and markets.

## Why a ratio helps

Raw [volume](/volume/) depends on the market. A large share may trade millions a day; a small one tens of thousands. Even within one market, the first hour of a session is always busier than the middle. [Relative volume](/relative-volume/), often shortened to RVOL, removes those differences by asking: compared with normal, how busy is this?

## The daily calculation

Relative volume = today's volume / average daily volume over N past days

Worked example with a five-day lookback (20 days is more common; five keeps the sums small):

| Day | Volume |
|---|---|
| 1 | 1.2m |
| 2 | 0.9m |
| 3 | 1.1m |
| 4 | 1.0m |
| 5 | 0.8m |
| Average | 5.0m / 5 = 1.0m |

Today's full-day volume is 2.4m. Relative volume = 2.4 / 1.0 = 2.4. Today was 2.4 times as busy as the recent norm.

## The time-of-day version

During the session, today's volume is not finished, so comparing it with a full-day average makes every morning look quiet. The fix is to compare like with like.

Time-of-day relative volume = volume so far today / average volume by the same time on past days

Example: by 10:30, 600,000 shares have traded. On the past 20 days, the average by 10:30 was 400,000. Relative volume = 600,000 / 400,000 = 1.5. The day is running 50% busier than usual at this point.

Platforms calculate this in different ways. Some use cumulative volume to the time, some use the single bar at that time, and some use a median rather than an average. Check what your platform does before comparing numbers.

## How traders use relative volume

| Use | Typical reading | What it suggests |
|---|---|---|
| Screening for active stocks | Well above 1 | Something is drawing unusual attention, often news |
| Breakout filter | Above 1 on the break bar | More participation than normal on the break |
| Pullback check | Below 1 on the pullback | A quiet pause rather than heavy selling |
| Avoiding thin markets | Well below 1 | Wider spreads and easier slippage are more likely |

There is no standard threshold. Values such as 1.5 or 2 appear in many trading books and screeners, but they are conventions, not tested cut-offs. Any threshold should be tested on your own market and data.

## Relative volume on forex

On spot forex, the volume is usually [tick volume](/tick-volume/). Relative volume still works as a self-comparison within one feed: this hour against the same hour on past days. It does not show traded size, and numbers from two brokers will not match.

## Common mistakes

- Comparing morning volume with a full-day average and calling every morning "low volume".
- Treating high relative volume as bullish. It says the market is busy, not which way it will go.
- Using a lookback that includes an earnings day or index rebalance, which inflates the average and makes later days look quiet.
- In a backtest, using the day's final relative volume to decide a trade made earlier that day. That is look-ahead.
- Picking a threshold because it looked good on a handful of charts.

## Verdict

Relative volume is the simplest way to make volume comparable: divide by normal, ideally at the same time of day. It flags unusual activity well and is a useful filter for breakouts and screens. It does not give direction, has no standard threshold, and is only as good as the volume data behind it.
