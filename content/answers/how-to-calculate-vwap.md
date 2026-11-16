---
slug: how-to-calculate-vwap
title: "How do you calculate VWAP?"
description: VWAP is cumulative price times volume divided by cumulative volume since the session start. A step-by-step worked calculation and the choices that change it.
query: how to calculate vwap
pillar: volume-and-order-flow-guide
publish: 2027-09-24
reviewed: 16 November 2026
guides: [vwap, anchored-vwap, vwap-bands]
siblings: [what-is-anchored-vwap, vwap-vs-moving-average]
value: [chart, table, example, verdict]
chart: vwap
---

VWAP is the total of price times volume since the start of the session, divided by the total volume since the start. Most platforms use the typical price, (high + low + close) / 3, for each bar, and reset the sum at each new session.

## The formula

For each bar:

1. Typical price = (high + low + close) / 3
2. Price x volume = typical price x bar volume
3. Add price x volume to a running total
4. Add volume to a running total of volume
5. [VWAP](/vwap/) = running price x volume / running volume

The result is the average price paid per unit traded since the session opened. A bar with heavy volume pulls VWAP towards its price more than a quiet bar does.

## Worked example

Five intraday bars from the session open.

| Bar | High | Low | Close | Typical price | Volume | Price x volume | Cumulative PV | Cumulative volume | VWAP |
|---|---|---|---|---|---|---|---|---|---|
| 1 | 101.0 | 99.0 | 100.0 | 100.0000 | 5,000 | 500,000.0 | 500,000.0 | 5,000 | 100.0000 |
| 2 | 102.0 | 100.0 | 101.5 | 101.1667 | 3,000 | 303,500.0 | 803,500.0 | 8,000 | 100.4375 |
| 3 | 103.0 | 101.0 | 102.5 | 102.1667 | 4,000 | 408,666.7 | 1,212,166.7 | 12,000 | 101.0139 |
| 4 | 102.5 | 100.5 | 101.0 | 101.3333 | 2,000 | 202,666.7 | 1,414,833.3 | 14,000 | 101.0595 |
| 5 | 102.0 | 100.0 | 101.5 | 101.1667 | 6,000 | 607,000.0 | 2,021,833.3 | 20,000 | 101.0917 |

At bar 5, VWAP is 2,021,833.3 / 20,000 = 101.0917. The simple average of the five typical prices is 101.1667. VWAP sits lower because the heavy first bar, 5,000 units at 100.0, weighs more than the others.

Notice also how slowly VWAP moves late in the session. Bar 5 carried 6,000 units, the most of any bar, but VWAP only rose about 0.03, because 14,000 units were already in the total. Early in the session VWAP reacts quickly; later it barely moves.

## Choices that change the number

| Choice | Options | Effect |
|---|---|---|
| Price input | Typical price, close, OHLC average | Small differences, mostly on wide bars |
| Session start | Exchange open, midnight UTC, pre-market included or not | Can change VWAP a lot early in the day |
| Bar size | 1-minute vs 5-minute | Smaller bars track the true trade-weighted average more closely |
| Volume source | Exchange volume, tick volume | Tick volume weights by activity, not size |

The "true" VWAP used by institutions for execution is built from every trade, not from bars. Bar-based VWAP is an approximation that gets closer as bars get smaller.

## Bands around VWAP

[VWAP bands](/vwap-bands/) add lines at multiples of a volume-weighted standard deviation above and below VWAP. Some platforms use percentage bands instead. Settings vary, so check which version you are looking at.

## Resets and anchoring

Standard VWAP resets every session, which is why it is mainly an intraday tool. To start the calculation from a chosen bar instead, such as an earnings day or a swing low, use [anchored VWAP](/anchored-vwap/). The arithmetic is identical; only the starting bar changes. See [what anchored VWAP is](/answers/what-is-anchored-vwap/).

## How VWAP is used

- **Execution benchmark.** Large buyers compare their average fill with VWAP. Buying below it counts as a good fill for the day.
- **Intraday bias.** Price above VWAP means recent buyers are, on average, in profit; below means they are not. Many day traders read this as a simple bias filter.
- **Mean reference.** In ranging sessions, price often moves back towards VWAP. In trending sessions, it can stay on one side all day.

## Common mistakes

- Comparing VWAP between platforms with different session times.
- Reading VWAP on daily bars, where it resets every bar and equals the typical price.
- Expecting late-session VWAP to react to new moves; by then it is heavily weighted to earlier trade.
- Treating forex VWAP on tick volume as the same thing as exchange VWAP.

## Verdict

VWAP is a running volume-weighted average: sum price times volume, divide by summed volume, reset each session. The calculation is simple; the choices around it, especially session start and volume source, are what make two VWAPs differ. It is most useful intraday on markets with real volume, as a fair-value reference rather than a signal.
