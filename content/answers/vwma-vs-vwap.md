---
slug: vwma-vs-vwap
title: What is VWMA and how is it different from VWAP?
description: VWMA is a rolling volume-weighted moving average; VWAP is cumulative from a fixed start. How each is calculated, a worked example, and when each tends to suit.
query: vwma vs vwap
pillar: moving-averages
publish: 2027-05-31
reviewed: 16 November 2026
guides: [vwma, vwap, anchored-vwap, tick-volume]
siblings: [best-moving-average-for-day-trading, closing-price-or-typical-price-for-moving-average]
value: [chart, table, example, verdict]
chart: vwma
---

VWMA is a moving average that weights each close by its volume over a rolling window of N bars. VWAP is a volume-weighted average price measured from a fixed start, usually the session open, and it grows with every bar until it resets. VWMA rolls; VWAP accumulates.

## VWMA: a rolling volume-weighted average

The [volume-weighted moving average](/vwma/) (VWMA) is like a [simple moving average](/simple-moving-average/), except that each close counts in proportion to its volume.

**Formula.** VWMA = sum(close × volume) / sum(volume), over the last N bars.

If every bar had the same volume, VWMA would equal the SMA. When volume is uneven, the high-volume bars pull the average towards their prices.

## VWAP: a cumulative average from a fixed start

[VWAP](/vwap/) (volume-weighted average price) is calculated from a fixed starting point, usually the start of the trading session, and includes every bar since then.

**Formula.** VWAP = sum(typical price × volume) / sum(volume), from the start of the session to now. Typical price is (high + low + close) / 3 on most platforms; some use the close or other prices.

It has no window length. At the open, VWAP is based on one bar. By the close, it is based on the whole day. Then it resets. [Anchored VWAP](/anchored-vwap/) uses the same idea but lets you pick the start point, such as an earnings day or a swing low.

## A worked example

Five bars, with closes and volumes. For simplicity, use the close as the price in both.

| Bar | Close | Volume | Close × volume |
|---|---|---|---|
| 1 | 50 | 1,000 | 50,000 |
| 2 | 52 | 3,000 | 156,000 |
| 3 | 51 | 1,000 | 51,000 |
| 4 | 53 | 1,000 | 53,000 |
| 5 | 54 | 4,000 | 216,000 |

**3-bar VWMA on bar 5** (bars 3 to 5): (51,000 + 53,000 + 216,000) / (1,000 + 1,000 + 4,000) = 320,000 / 6,000 = **53.33**. The 3-bar SMA is (51 + 53 + 54) / 3 = 52.67. The VWMA is higher because bar 5, the highest close, had the most volume.

**VWAP on bar 5** (all bars since the start): 526,000 / 10,000 = **52.60**. It still includes the heavy-volume bar 2 at 52, and bar 1 at 50.

On bar 6, the 3-bar VWMA drops bar 3 and adds bar 6. VWAP simply adds bar 6 to everything before it.

## Side-by-side

| | VWMA | VWAP |
|---|---|---|
| Window | Rolling, last N bars | Cumulative from a fixed start |
| Resets | Never; it rolls | Usually each session (or at the chosen anchor) |
| Setting | Period N | Start point |
| Price used | Usually the close | Usually the typical price (H + L + C) / 3 |
| Behaviour late in the day | Same responsiveness as early | Becomes heavy and slow; hard to move |
| Common use | Trend line on any timeframe | Intraday benchmark; session bias |
| Equal-volume case | Equals the SMA | Equals the session's average price |

## Reading the VWMA

The useful information in a VWMA is often the gap between it and an SMA of the same length.

- **VWMA above SMA:** the higher prices in the window came with more volume. Buyers were more active at higher prices.
- **VWMA below SMA:** the lower prices came with more volume.
- **Lines together:** volume was evenly spread, or not related to price.

This is a description of where volume traded, not a forecast.

## Reading VWAP

Day traders use VWAP as the session's "average fair price". Price above VWAP means the average buyer today is in profit; below means the average buyer is at a loss. Many intraday traders use it as a bias line, and some institutions use it as a benchmark for execution quality. Because it is cumulative, it moves less and less as the day goes on.

## What the chart shows

Our chart shows a VWMA drawn by our own indicator code on real daily data. Where heavy-volume bars sit, notice how the VWMA leans towards them compared with how an SMA would sit. It is a teaching example, not a test.

## A volume caveat

Both tools need meaningful volume. On stocks and futures, exchange volume is real. On spot forex, most platforms show [tick volume](/tick-volume/), the number of price changes, not traded size. Tick volume often tracks activity, but a VWMA or VWAP built on it is weighting by a different thing. On crypto, volume is split across many venues, so each chart's volume covers only the exchanges in its feed.

## Verdict

VWMA is a rolling moving average that leans towards high-volume prices; it works on any timeframe and compares naturally with an SMA. VWAP is a session benchmark that accumulates from a fixed start and resets. They answer different questions, and neither replaces the other. More on averages in [the moving averages guide](/guide/moving-averages/).
