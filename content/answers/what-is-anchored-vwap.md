---
slug: what-is-anchored-vwap
title: "What is anchored VWAP and where do you anchor it?"
description: Anchored VWAP starts the volume-weighted average from a bar you choose. Common anchor points, a worked calculation, and why anchor choice matters.
query: what is anchored vwap
pillar: volume-and-order-flow-guide
publish: 2027-09-27
reviewed: 16 November 2026
guides: [anchored-vwap, vwap, support-and-resistance]
siblings: [how-to-calculate-vwap, vwap-vs-moving-average]
value: [chart, table, example, verdict]
chart: anchored-vwap
---

Anchored VWAP is a VWAP that starts from a bar you choose instead of the session open. Traders usually anchor it to a significant event, such as a major high or low, an earnings gap or the start of a trend, to see the average price paid by everyone who traded since then.

## How it differs from session VWAP

Standard [VWAP](/vwap/) resets at the start of each session. [Anchored VWAP](/anchored-vwap/) uses exactly the same arithmetic, cumulative price x volume divided by cumulative volume, but you pick the starting bar and it never resets. It can run for days, weeks or months.

The idea, popularised by Brian Shannon, is that the average cost of everyone who bought or sold since an important event is a meaningful reference. If price is above an anchored VWAP from a swing low, buyers since that low are, on average, in profit.

## Worked example

Using five bars (typical price = (high + low + close) / 3):

| Bar | Typical price | Volume |
|---|---|---|
| 1 | 100.0000 | 5,000 |
| 2 | 101.1667 | 3,000 |
| 3 | 102.1667 | 4,000 |
| 4 | 101.3333 | 2,000 |
| 5 | 101.1667 | 6,000 |

Session VWAP from bar 1 ends at 101.0917 (see [how to calculate VWAP](/answers/how-to-calculate-vwap/)).

Now anchor at bar 3, the high of the move:

| Bar | Cumulative PV from bar 3 | Cumulative volume | Anchored VWAP |
|---|---|---|---|
| 3 | 408,666.7 | 4,000 | 102.1667 |
| 4 | 611,333.3 | 6,000 | 101.8889 |
| 5 | 1,218,333.3 | 12,000 | 101.5278 |

At bar 5, the anchored VWAP is 101.5278, about 0.44 above the session VWAP. Same bars, same volume, different start. Price at bar 5 closed at 101.5, just under the anchored line: traders who entered since the high are roughly at break-even on average, while traders since the open are slightly in profit.

## Where traders anchor it

| Anchor point | Why it is chosen |
|---|---|
| A major swing high or low | Shows the average cost of everyone who traded since the turn |
| An earnings or news gap | Marks the start of a new information regime |
| The first bar of a breakout | Tracks whether breakout buyers are holding a profit |
| The start of the year, quarter or month | A calendar reference many traders share |
| An all-time or 52-week high | Average cost of buyers since the peak |

There is no correct anchor. Different traders anchor at different bars and get different lines. That is the main weakness of the tool: it is easy to keep moving the anchor until the line fits the chart.

## How it is read

- **As a reference level.** Many traders watch for price to react at an anchored VWAP, much like [support and resistance](/support-and-resistance/). The line moves slowly once enough volume is behind it.
- **As a trend check.** Price holding above an anchored VWAP from a low is read as buyers staying in control; a close below is read as that control weakening.
- **Several anchors at once.** Some traders draw anchors from the last two or three major turns and watch where they cluster.

## Limits

- Anchor choice is subjective and easy to fit after the event.
- It needs real volume to mean "average cost". On spot forex, tick volume weights by activity only.
- Older anchors carry so much volume that the line becomes almost flat and slow to react.
- A reaction at an anchored VWAP is only meaningful if you planned to watch that anchor before price got there.

## Common mistakes

- Moving the anchor after price fails to respect the line.
- Treating an anchored VWAP as a stop level without checking volatility.
- Anchoring to a minor bar that nobody else would choose.

## Verdict

Anchored VWAP is session VWAP with a chosen start. Anchored to a clear event, it shows the average price paid since then and gives a sensible reference level. Its weakness is the freedom of the anchor: pick anchors by rule, before the fact, and on markets with real volume.
