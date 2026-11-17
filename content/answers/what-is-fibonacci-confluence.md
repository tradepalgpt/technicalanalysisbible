---
slug: what-is-fibonacci-confluence
title: What is Fibonacci confluence?
description: Fibonacci confluence is where levels from different swings or tools fall close together. How to find a zone, worked numbers, and its main weakness.
query: what is fibonacci confluence
pillar: fibonacci-guide
publish: 2028-01-28
reviewed: 17 November 2026
guides: [fibonacci-confluence, confluence, fibonacci-retracement, round-numbers]
siblings: [fibonacci-vs-support-and-resistance, best-timeframe-for-fibonacci]
value: [table, example, verdict]
---

Fibonacci confluence is a price zone where several Fibonacci levels from different swings, or a Fibonacci level and another kind of level, fall close together. Traders treat such a zone as more significant than a single line, on the idea that more reasons point to the same price; that idea is widely held but not established by testing.

## The idea

A single [Fibonacci retracement](/fibonacci-retracement/) gives five levels from one swing. Draw retracements on two or three swings, add an extension, and some levels will land near each other. Where they cluster, traders mark a [Fibonacci confluence](/fibonacci-confluence/) zone. The broader [confluence](/confluence/) idea also counts non-Fibonacci levels: old highs and lows, [round numbers](/round-numbers/), moving averages or pivot points.

## Worked example: building a zone

A market rose from 100 to 200. Inside that rise, there was a higher swing low at 120. Before the rise, an old high sat at 137.50.

| Source | Calculation | Price |
|---|---|---|
| 61.8% of 100 to 200 | 200 - 0.618 x 100 | 138.2 |
| 78.6% of 120 to 200 | 200 - 0.786 x 80 | 137.1 |
| Old swing high | From earlier price | 137.5 |
| Round number | Nearest 10 | 140.0 |

Four sources fall between 137.1 and 140.0, a zone 2.9 points wide, about 3% of the main swing. By contrast, the 50% levels of the two swings, 150.0 and 160.0, are 10 points apart and do not form a zone.

## Planning a trade around the zone in R

A long fills at 138.60 (the ask) inside the zone, with the first stop at 134.90, a little below the lowest level in the zone. 1R = 3.70 per unit times size. Sizing for 1R = 100 gives about 27 units. If price returns to the old high of 200 and the position exits at 199.95 (bid), the result is (199.95 - 138.60) / 3.70 = 16.58R before commission. A clean stop is exactly -1R, commission and any gap come on top, and the stop only tightens after the fill.

The tight stop is what makes confluence attractive: a narrow zone gives a small 1R. It is also the risk, because a narrow zone is easy to break with ordinary noise.

## The main weakness: clusters are common

Every extra swing adds five levels; every extra tool adds more. With enough sources, some will always land near each other.

Take the coverage arithmetic from our answer on [whether Fibonacci levels work](/answers/do-fibonacci-levels-work/): five retracement levels with a 2% tolerance cover about 20% of a swing's range. Two swings drawn on overlapping ranges can cover much more, and adding round numbers and old highs fills more again. A "confluence" found after the fact is likely by chance alone.

## Keeping confluence honest

- **Fix the sources first.** For example: "the two most recent swings on the daily chart, plus the nearest round number". Do not add tools until something lines up.
- **Fix the zone width.** State the tolerance, such as 1% of the main swing, before looking.
- **Count misses.** Note zones that price went straight through, not only those it respected.
- **Compare with a baseline.** Zones built from shifted, non-Fibonacci levels on the same swings show how often clusters "work" by chance.

## Verdict

Fibonacci confluence is a cluster of levels from different swings or tools inside a narrow zone. It is a tidy way to choose one zone from many levels and allows a tight, well-defined stop. But clusters are easy to find when you look for them, so fix your sources and zone width before drawing, and treat the zone as a place to watch rather than a forecast.
