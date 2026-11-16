---
slug: vwap-vs-moving-average
title: "VWAP vs moving average: what is the difference?"
description: VWAP weights price by volume and builds from a fixed start; a moving average uses a rolling window of prices. A worked comparison and when each suits.
query: vwap vs moving average
pillar: volume-and-order-flow-guide
publish: 2027-09-29
reviewed: 16 November 2026
guides: [vwap, simple-moving-average, exponential-moving-average, vwma]
siblings: [how-to-calculate-vwap, what-is-anchored-vwap]
value: [chart, table, example, verdict]
chart: vwap
---

VWAP weights each price by its volume and averages everything since a fixed start, usually the session open. A moving average uses a fixed number of recent prices, drops the oldest as each new bar arrives, and usually ignores volume. VWAP is an intraday cost reference; a moving average is a smoothed trend line.

## The two calculations side by side

| | VWAP | Simple moving average |
|---|---|---|
| Inputs | Price and volume | Price only |
| Window | Everything since the start (session or anchor) | The last N bars |
| Weighting | By volume | Equal |
| Resets | Each session (standard VWAP) | Never; it rolls |
| Settings | Session start, price input | Period N, price input |
| Typical timeframe | Intraday | Any |
| Reacts late in the session | Slowly, as volume builds up | Same speed all day |

A [simple moving average](/simple-moving-average/) gives each of the last N closes the same weight. An [exponential moving average](/exponential-moving-average/) gives recent bars more weight, but still by time, not by volume. [VWAP](/vwap/) gives weight by volume and has no fixed window.

## Worked comparison

Five bars from the session open:

| Bar | Close | Typical price | Volume |
|---|---|---|---|
| 1 | 100.0 | 100.0000 | 5,000 |
| 2 | 101.5 | 101.1667 | 3,000 |
| 3 | 102.5 | 102.1667 | 4,000 |
| 4 | 101.0 | 101.3333 | 2,000 |
| 5 | 101.5 | 101.1667 | 6,000 |

- 5-bar simple moving average of closes: (100.0 + 101.5 + 102.5 + 101.0 + 101.5) / 5 = 101.30
- 5-bar simple average of typical prices: 101.1667
- VWAP at bar 5: 101.0917

VWAP is the lowest because the biggest early bar traded at 100.0. On bar 6, the moving average would drop bar 1 and include bar 6. VWAP would keep bar 1 and add bar 6, so the heavy trading at 100.0 keeps pulling on it for the rest of the session.

## The middle ground: VWMA

A volume-weighted moving average uses volume weights like VWAP but over a rolling N-bar window like a moving average. It does not reset. If you want volume weighting on a swing chart, it is the closer match. We cover it in detail in [VWMA vs VWAP](/answers/vwma-vs-vwap/), and the formula is in our [VWMA](/vwma/) guide.

## When each tends to suit

| Situation | Better fit | Why |
|---|---|---|
| Judging an intraday fill | VWAP | It is the standard execution benchmark |
| Intraday bias on a stock or future | VWAP | Shows whether the average trader today is in profit |
| Swing or position trend | Moving average | Rolls smoothly across days |
| Spot forex | Moving average | No real volume; VWAP uses tick counts |
| Comparing many markets on one rule | Moving average | Fewer data choices to align |
| Average cost since an event | Anchored VWAP | Starts at the event and never resets |

## Common mistakes

- Putting standard VWAP on a daily chart. It resets every bar, so it simply equals each bar's typical price.
- Expecting VWAP to "cross" like two moving averages. VWAP has no period; there is no fast and slow VWAP.
- Assuming VWAP is more accurate because it uses volume. It answers a different question: what was the average price paid?
- Using VWAP on tick-volume data and comparing it with exchange VWAP.

## Verdict

They answer different questions. VWAP tells you the average price paid since a fixed start, weighted by how much traded; a moving average tells you the smoothed recent price, with every bar weighted by time. Use VWAP for intraday cost and fair-value context on markets with real volume, and moving averages for trend on any timeframe.
