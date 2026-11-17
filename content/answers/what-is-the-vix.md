---
slug: what-is-the-vix
title: "What is the VIX and what does it tell traders?"
description: The VIX is Cboe's index of 30-day implied volatility from S&P 500 options. What a reading means, how to turn it into an expected move, and its limits.
query: what is the vix
pillar: volatility-guide
publish: 2028-03-01
reviewed: 17 November 2026
guides: [vix, implied-volatility, historical-volatility]
siblings: [historical-vs-implied-volatility, how-to-trade-high-volatility-markets]
value: [table, example, verdict]
---

The VIX is an index published by Cboe that measures the 30-day implied volatility of the S&P 500, taken from S&P 500 option prices. A reading of 20 means options are pricing an annualised volatility of about 20% for the index over the next 30 days.

## Where it comes from

Cboe launched the [VIX](/vix/) in 1993. The original version used options on the S&P 100. In 2003 Cboe changed the method to use a wide range of S&P 500 option prices directly, without relying on a single pricing model, and that is the version quoted today. It is often called the "fear gauge" because it tends to rise when stocks fall sharply and demand for protection jumps.

## What a reading means

The VIX is quoted in annualised percentage points of [implied volatility](/implied-volatility/). To turn it into an expected move over a shorter period, divide by the square root of the number of such periods in a year.

| VIX | Implied one-standard-deviation move over about a month (VIX / square root of 12) | Over one trading day (VIX / square root of 252) |
|---|---|---|
| 12 | about 3.46% | about 0.76% |
| 20 | about 5.77% | about 1.26% |
| 40 | about 11.55% | about 2.52% |

**Worked example.** With the S&P 500 at 5,000 and the VIX at 20, the implied one-standard-deviation move over the next month is about 5,000 x 0.20 / square root of 12 = about **289 points** either way. That is a model-based band, not a cap; bigger moves happen, and the figure says nothing about which direction.

## What it tells traders

| The VIX tells you | It does not tell you |
|---|---|
| How much movement S&P 500 options are pricing in | Where the index will go |
| Whether option buyers are paying up for protection | Anything precise about single shares or other markets |
| The general mood: calm or stressed | When a stress spell will end |

Some patterns are widely described:

- The VIX tends to rise when the S&P 500 falls quickly and drift lower in steady rises. The link is loose and breaks at times.
- Like other volatility measures, it tends to swing between calm and stressed spells and to drift back towards its longer-run level, without a timetable.
- Cboe also publishes indices for other horizons, such as a nine-day and a three-month index. Comparing short-dated and longer-dated readings is called looking at the term structure. When short-term implied volatility sits above longer-term, the market is pricing near-term stress.

## How chart traders use it

Most chart traders use the VIX as context, not as a trigger:

- **Sizing.** A high VIX warns that S&P 500 ranges may be wider than usual. If stops are set from ATR, they widen, and position size falls to keep 1R the same in money. 1R is still the distance from the side-correct fill to the first stop, times size.
- **Gaps.** Stressed markets gap more. A gap through a stop makes the loss bigger than -1R, and commission comes on top. Planning for that is part of trading when the VIX is high.
- **Comparison.** Comparing the VIX with the index's own [historical volatility](/historical-volatility/) shows whether options are pricing more or less movement than recently happened.

This site does not cover options or volatility products. Products linked to the VIX behave very differently from the index itself and are outside the scope of this answer.

## Common mistakes

- Calling a high VIX a buy signal or a low VIX a sell signal. It has no direction.
- Applying the VIX to a single share. It is built from S&P 500 options only.
- Forgetting to scale: a VIX of 20 is not a 20% monthly move.
- Treating the index as tradable. You cannot buy the VIX itself.

## Verdict

The VIX is the market's priced-in volatility for the S&P 500 over the next 30 days, in annualised percent. Divide by the square root of 12 for a rough monthly move, or of 252 for a daily one. For chart traders it is context for sizing and for expecting wider bars and gaps, not a signal for direction.

More in [the volatility guide](/guide/volatility-guide/).
