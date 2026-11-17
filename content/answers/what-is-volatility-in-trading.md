---
slug: what-is-volatility-in-trading
title: "What is volatility in trading?"
description: Volatility is how far and how fast price moves. How traders measure it with range, ATR and standard deviation, with a worked calculation.
query: what is volatility in trading
pillar: volatility-guide
publish: 2028-01-31
reviewed: 17 November 2026
guides: [atr, standard-deviation, historical-volatility, implied-volatility]
siblings: [how-is-atr-calculated, historical-vs-implied-volatility]
value: [table, example, verdict]
chart: historical-volatility
---

Volatility is how much and how fast price moves, in either direction, over a period. It says nothing about which way price will go: a market that rises 3% one day and falls 3% the next is very volatile, even if it ends where it started.

## Two ways to measure it

Traders use two families of measure.

- **Range-based.** How far price travels within bars. The [Average True Range (ATR)](/atr/) is the standard one: the average of each bar's true range, gaps included. It is in price units, so an ATR of 1.20 on a share means about 1.20 of movement per bar.
- **Return-based.** How spread out the bar-to-bar percentage changes are. This is the [standard deviation](/standard-deviation/) of returns. Scaled to a year, it is called [historical volatility](/historical-volatility/), and it is quoted in percent.

A third kind looks forward rather than back. [Implied volatility](/implied-volatility/) is the volatility that option prices are pricing in. It is an estimate made by the market, not a measurement of past moves.

## Worked example: a wild market and a calm one

Two markets both start at 100 and close five more days. We take the daily percentage change, then the sample standard deviation of those changes, then multiply by the square root of 252 (a common count of trading days in a year) to annualise.

| Day | Market A close | A change | Market B close | B change |
|---|---|---|---|---|
| 0 | 100 | | 100.0 | |
| 1 | 102 | +2.00% | 100.5 | +0.50% |
| 2 | 99 | -2.94% | 100.2 | -0.30% |
| 3 | 103 | +4.04% | 100.6 | +0.40% |
| 4 | 101 | -1.94% | 100.4 | -0.20% |
| 5 | 104 | +2.97% | 100.9 | +0.50% |
| Standard deviation of changes | | 3.09% | | 0.40% |
| Annualised (x square root of 252) | | about 49% | | about 6.3% |

Both markets ended higher. Market A got there by swinging hard; Market B drifted. Market A's daily changes are spread roughly eight times wider, so its volatility is roughly eight times higher. Five days is far too few for a real reading; the point is the method.

## What volatility does and does not tell you

| It tells you | It does not tell you |
|---|---|
| How far price has typically moved per bar | Which direction the next move will take |
| How wide a stop needs to be to sit outside normal noise | Whether a trade will work |
| How to size a position so each trade risks the same money | Whether the market is "cheap" or "expensive" |
| Whether the market is quieter or busier than usual | When a quiet spell will end |

Two well-documented habits are worth knowing. Volatility **clusters**: busy days tend to follow busy days and quiet days follow quiet ones. Benoit Mandelbrot described this in cotton prices in 1963, and Robert Engle's ARCH model (1982) was built to capture it. Volatility also tends to **revert towards its longer-run average**: very high readings usually fade and very low readings usually rise. Neither habit gives a direction or a timetable.

## Why traders care

Volatility touches nearly every practical decision:

- **Stops.** A stop inside the normal bar-to-bar range gets hit by noise. Many traders set stops in multiples of ATR for that reason.
- **Size.** If the stop is wider, the position must be smaller to keep the same money at risk. Measured in R, where 1R is the distance from the fill to the first stop times the size, a calm trade and a wild trade can then risk the same amount.
- **Targets and expectations.** A market with an ATR of 0.5 rarely covers 5 in a day. Volatility frames what is realistic.
- **Tool choice.** Bands and channels such as Bollinger Bands are built from volatility, so they widen and narrow with it.

## Common mistakes

- Treating high volatility as bullish or bearish. It is neither.
- Comparing raw ATR across markets with different prices. Divide by price to compare.
- Calling a market "volatile" from one big bar. Volatility is a measure over a window.
- Forgetting that the window matters: a 10-bar reading reacts fast, a 100-bar reading is steadier.

## Verdict

Volatility is the size of price movement, not its direction. Measure it with ATR when you need price units for stops and sizing, and with the standard deviation of returns when you need a percentage you can compare across markets and years. Both are descriptions of the past; they help you plan risk, not predict the next move.

The full background is in [the volatility guide](/guide/volatility-guide/).
