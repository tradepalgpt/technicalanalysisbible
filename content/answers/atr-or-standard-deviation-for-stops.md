---
slug: atr-or-standard-deviation-for-stops
title: "Should you use ATR or standard deviation for stops?"
description: ATR and standard deviation both size a stop from volatility, but they measure different things. A worked comparison on the same ten bars.
query: atr or standard deviation for stop loss
pillar: volatility-guide
publish: 2028-02-07
reviewed: 17 November 2026
guides: [atr, standard-deviation, atr-stop, volatility-stop]
siblings: [how-is-atr-calculated, how-do-bollinger-bands-work]
value: [table, example, verdict]
---

For stop placement, ATR is the more common choice because it measures the full range of each bar, gaps included, in price units. Standard deviation measures how spread out closes or changes are around an average; it works too, but it ignores the highs and lows that actually trigger stops.

## How this differs from the comparison page

The side-by-side definitions are on [ATR vs standard deviation](/compare/atr-vs-standard-deviation/). This answer takes one narrower question: when you are placing a stop, which measure gives you the more useful distance, and why?

## What each one sees

The [Average True Range](/atr/) averages each bar's true range: the largest of high minus low, or the gap from the previous close to the high or low. [Standard deviation](/standard-deviation/) is usually taken over closing prices, or over bar-to-bar changes in the close. It never looks at highs or lows.

A stop is hit by the high or low of a bar, not by the close. That is the core reason most [volatility stops](/volatility-stop/) are built on ATR. An [ATR stop](/atr-stop/) asks "how far does price usually travel inside a bar?", which is the question a stop needs answered.

## Worked example: the same ten bars

Ten daily bars on a share. Day 6 gaps down about 5 points on news, then the market settles.

| Day | High | Low | Close | True range | Change in close |
|---|---|---|---|---|---|
| 1 | 100.6 | 99.5 | 100.0 | | |
| 2 | 101.4 | 100.4 | 101.0 | 1.4 | +1.0 |
| 3 | 101.2 | 100.0 | 100.5 | 1.2 | -0.5 |
| 4 | 101.9 | 100.9 | 101.5 | 1.4 | +1.0 |
| 5 | 101.6 | 100.5 | 101.0 | 1.1 | -0.5 |
| 6 | 97.0 | 95.4 | 96.0 | 5.6 | -5.0 |
| 7 | 97.1 | 95.9 | 96.5 | 1.2 | +0.5 |
| 8 | 97.6 | 96.5 | 97.0 | 1.1 | +0.5 |
| 9 | 97.3 | 96.2 | 96.8 | 1.1 | -0.2 |
| 10 | 97.8 | 96.6 | 97.2 | 1.2 | +0.4 |

Over the nine measurable bars:

- Average true range (simple average) = **1.70**
- Sample standard deviation of the changes in close = **1.85**
- Population standard deviation of the ten closes themselves = **2.10**

The three numbers answer different questions. The average true range says a typical bar covers about 1.7 points from extreme to extreme. The standard deviation of changes says close-to-close moves vary by about 1.85 points around their average. The standard deviation of closes, the one Bollinger Bands use, mostly measures how far the closes sit from their own mean; it is pulled up by the drop in level, not by bar size. As a stop distance, that last one is the least useful.

## Side by side for stops

| Question | ATR | Standard deviation |
|---|---|---|
| Uses highs and lows | Yes | No (closes only, in the usual form) |
| Counts gaps | Yes, through true range | Only through the change in close |
| Unit | Price | Price, or percent if taken on returns |
| Reacts to a trend with small bars | Stays small | Standard deviation of closes rises as price drifts |
| Typical stop form | Entry minus k x ATR | Mean minus k x SD (a Bollinger-style band) |

## In R terms

Whatever measure sets the distance, 1R is the distance from your side-correct fill to that first stop, times your size. A clean stop-out is exactly -1R. Commission is on top; slippage and gaps through the stop make the loss bigger than 1R, as day 6 above would have done to any long held through it. Once in the trade, the stop can only tighten.

## When standard deviation makes sense

- When you are trading back towards a mean and want the stop beyond a band, for example outside a 2.5 standard deviation band.
- When you want a percent measure that compares across markets, using the standard deviation of returns.
- When your system is already built on [Bollinger Bands](/answers/how-do-bollinger-bands-work/) and you want stop and signal from the same input.

## Verdict

For a plain distance-from-entry stop, ATR is the better fit: it sees highs, lows and gaps, which is what stops react to. Standard deviation of closes measures dispersion around an average, which drifts with trend. Standard deviation of returns is a fine volatility gauge but says less about intrabar reach. Pick one, keep 1R honest, and never widen the stop after entry.

More in [the volatility guide](/guide/volatility-guide/).
