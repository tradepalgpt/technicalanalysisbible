---
slug: stop-loss-when-market-gaps
title: "What happens to a stop loss when the market gaps?"
description: A gap jumps over your stop, so it fills at the next available price. How big the loss can be in R, and the ways traders limit gap risk.
query: what happens to stop loss when market gaps
pillar: stop-losses-and-risk-guide
publish: 2027-08-23
reviewed: 16 November 2026
guides: [stop-loss, position-sizing, atr]
siblings: [stop-loss-vs-stop-limit-order, stop-loss-on-long-term-investments]
value: [table, example, verdict]
---

If the market opens beyond your stop, the stop is triggered at the open and fills at the first available price, not at your stop price. The loss is then bigger than 1R, sometimes much bigger, and it counts in full.

## Why a stop cannot stop a gap

A standard [stop loss](/stop-loss/) is a stop-market order. It sits dormant until price trades at or through the stop level, then becomes a market order to exit at the best price available.

A gap means there was no trading between the last price and the new one. This happens over weekends, overnight on shares and indices, after company results, and around big news. When the market reopens beyond your stop, the first price available is the open. Your order fills there, or near it.

| Situation | Where a long stop at 48 fills |
|---|---|
| Price trades down through 48 | At or near 48, plus normal slippage |
| Price opens at 47.50 | At or near 47.50 |
| Price opens at 44.00 | At or near 44.00 |
| Price opens at 52.00 and never trades below 48 | Not triggered |

## Worked example

A trader is filled at 50.00 with a stop at 48.00, so the loss per share at the stop is 2.00. With 100 at risk, size = 100 / 2.00 = 50 shares, and 1R = 50 x 2.00 = 100, fixed at the fill. A clean stop-out loses exactly 100: -1R. Commission of 0.05 per share round trip (2.50 on 50 shares) is shown on top, never added to 1R.

Overnight the company issues a profit warning. The share opens lower.

| Opening price | Loss per share on price | Loss on 50 shares | Result in R (price) | With 2.50 commission on top |
|---|---|---|---|---|
| 47.50 | 2.50 | 125.00 | -1.25R | -1.28R |
| 46.00 | 4.00 | 200.00 | -2.00R | -2.03R |
| 44.00 | 6.00 | 300.00 | -3.00R | -3.03R |
| 40.00 | 10.00 | 500.00 | -5.00R | -5.03R |

The loss is recorded as it happened. A gap loss of -3.03R is -3.03R, not -1R "because the stop was at 48". Leaving gap losses out of your records makes any strategy look safer than it is.

The same works in reverse for a short: a gap up opens above a buy stop and fills higher.

## When gaps are most likely

- **Shares:** results announcements, trading updates, takeover news, ex-dividend dates (a known, mechanical drop in price).
- **Indices and futures:** the weekly open, and overnight sessions for markets that close.
- **Forex:** mostly the Sunday open; during the week, sharp moves on major news can skip prices without a true gap.
- **Any market:** unexpected events outside trading hours.

## Ways traders limit gap risk

None of these removes gap risk entirely. Each has a cost.

| Method | How it helps | Cost |
|---|---|---|
| Smaller size | A gap of the same size costs fewer R in money | Smaller wins too |
| Close before known events | Avoids results and scheduled news gaps | Miss gaps that go your way |
| Close before weekends | Avoids weekend gaps | Fewer trades held for trends |
| Wider stops, smaller size | Gap is smaller as a multiple of R | Bigger moves needed to reach targets |
| Broker stop with a fill promise | Some brokers offer a stop filled at the exact price for a fee | The fee is paid on every trade |
| Options | A bought put limits the loss below a strike | The premium is paid whether used or not |

Using the [Average True Range](/atr/) helps you see how big normal moves are, but gaps can be several times the ATR. [Position sizing](/position-sizing/) with modest risk per trade is the main defence, because it keeps any one gap from doing serious damage.

A stop-limit order is sometimes suggested to avoid a bad gap fill. It can leave you with no fill at all and a much bigger loss; see [stop-loss vs stop-limit orders](/answers/stop-loss-vs-stop-limit-order/).

## Testing with gaps in mind

When testing a strategy on daily bars, a stop must fill at the open if the bar opens beyond it, not at the stop price. A test that fills every stop exactly at its level will understate losses in markets that gap. See [/methods/](/methods/) for how we treat gaps in tests.

## Common mistakes

- Assuming a stop is a promise of a price. It is an instruction to exit, at whatever price is available.
- Recording gap losses as -1R.
- Holding full size through scheduled results without accepting the gap risk.
- Moving a stop further away after a gap "because the level is gone". Exit, or tighten, but never widen.

## Verdict

A gap jumps over your stop, and the order fills at the open. Losses of 2R, 3R or more are possible, and they count in full. Keep size modest, know when gaps are likely, decide in advance whether to hold through known events, and test with gap fills at the open.
