---
slug: how-is-obv-calculated
title: "How is OBV calculated and does it work?"
description: On-balance volume adds a bar's volume on up closes and subtracts it on down closes. A worked calculation, how it is read, and an honest look at its limits.
query: how is obv calculated
pillar: volume-and-order-flow-guide
publish: 2027-09-22
reviewed: 16 November 2026
guides: [on-balance-volume, volume, divergence]
siblings: [accumulation-distribution-vs-obv, what-is-volume-divergence]
value: [chart, table, example, verdict]
chart: on-balance-volume
---

On-balance volume (OBV) is a running total: add the whole bar's volume when the close is higher than the previous close, subtract it when the close is lower, and leave it unchanged when the close is the same. Whether it works depends on the market and the test; it is best treated as a confirmation tool, not a signal on its own.

## Where OBV comes from

[On-balance volume](/on-balance-volume/) was popularised by Joseph Granville in the 1960s. His idea was that [volume](/volume/) tends to change before price, so a running tally of "up volume" against "down volume" might show buying or selling pressure building behind a flat price.

## The formula

- If today's close > yesterday's close: OBV = previous OBV + today's volume
- If today's close < yesterday's close: OBV = previous OBV - today's volume
- If the closes are equal: OBV = previous OBV

The starting value does not matter. Only the direction and slope of the line are read, so the absolute number is arbitrary and changes with the start date.

## Worked example

Six daily bars. OBV starts at 0 on day 1.

| Day | Close | Change | Volume | Action | OBV |
|---|---|---|---|---|---|
| 1 | 10.00 | - | 1,000 | Start | 0 |
| 2 | 10.50 | Up | 1,500 | Add 1,500 | 1,500 |
| 3 | 10.20 | Down | 1,200 | Subtract 1,200 | 300 |
| 4 | 10.20 | Flat | 800 | No change | 300 |
| 5 | 10.80 | Up | 2,000 | Add 2,000 | 2,300 |
| 6 | 11.00 | Up | 1,700 | Add 1,700 | 4,000 |

Notice day 3. Price fell by 0.30 from day 2, a modest move, yet the whole 1,200 was subtracted. OBV makes no allowance for how big the move was or where the close sat in the bar. A close one cent lower counts the same as a close ten per cent lower.

## How OBV is read

| Reading | What traders look for |
|---|---|
| Confirmation | OBV making new highs with price in an uptrend, or new lows in a downtrend |
| Divergence | Price makes a new high, OBV does not (or the reverse for lows) |
| Breakout in OBV | OBV breaks its own range before price breaks out |
| Slope | A rising OBV line during a flat price range is read as possible accumulation |

[Divergence](/divergence/) is the reading most often quoted. See [what volume divergence is](/answers/what-is-volume-divergence/) for its limits; divergence can last a long time before anything happens, and often nothing does.

## Does it work?

There is no single answer, and we have not run our own volume backtest yet, so we do not quote a figure. What can be said honestly:

- **The rule is crude.** All-or-nothing volume on each bar means a single heavy day with a tiny price change can swing the line. Indicators such as [accumulation/distribution](/answers/accumulation-distribution-vs-obv/) try to fix this by weighting volume by where the close sits.
- **It depends on real volume.** On spot forex tick volume, OBV counts price updates, not traded size, so its premise is weaker.
- **Daily bars hide the order of events.** OBV uses the close only; intraday swings are invisible.
- **Divergences are common.** Many divergences resolve with no reversal. Any test must count all of them, not only the memorable ones.
- **Look-ahead risk.** In a backtest, today's OBV is only known after today's close. A rule that trades at today's open on today's OBV is cheating.

A fair test would compare OBV-filtered entries against the same entries without the filter, and against random entries, over many markets and years.

## Settings and variations

Classic OBV has no settings. Many traders add a moving average of OBV, often 20 periods, and watch for crosses. Some platforms offer a smoothed OBV or OBV with a signal line. These are add-ons, not part of the original method.

## Common mistakes

- Reading the absolute OBV value. It depends on the start date.
- Comparing OBV between two instruments.
- Treating every OBV divergence as a reversal signal.
- Using OBV on tick volume as if it measured money.

## Verdict

OBV is simple to calculate and easy to read: up-close volume added, down-close volume subtracted. That simplicity is also its weakness, because the size of the move and the position of the close are ignored. Use it as a check on whether volume agrees with the trend, on markets with real volume, and test any rule before relying on it.
