---
slug: how-much-to-risk-per-trade
title: "How much should you risk per trade?"
description: Common risk-per-trade ranges, and the plain maths of what each one does to an account over a run of losses. No rule, just the numbers.
query: how much should you risk per trade
pillar: stop-losses-and-risk-guide
publish: 2027-08-02
reviewed: 16 November 2026
guides: [position-sizing, stop-loss, risk-reward-ratio]
siblings: [position-size-from-stop-loss, how-many-losing-trades-in-a-row]
value: [table, example, verdict]
---

There is no single right number. Trading books commonly quote 0.5% to 2% of the account per trade, and the maths below shows why: above about 2%, an ordinary losing streak takes a large bite out of the account and recovery gets much harder.

## What "risk per trade" means

Risk per trade is the distance from your actual fill to your first [stop loss](/stop-loss/), times your position size, in money. It is 1R. Nothing is added to it: a clean stop-out is exactly -1R, and commission, slippage and gaps show up in the result, never discounted from a loss. It is not the size of the position. A 20,000 share position with a tight stop can risk less than a 2,000 position with a wide one. [Position sizing](/position-sizing/) turns your chosen risk into a trade size.

This page does not tell you what to risk. That depends on your account, your goals, your strategy and how much a drawdown would hurt you. It shows what each common choice does, using maths that holds for any strategy.

## The maths of a losing run

If you risk a fixed fraction r of the current balance on each trade, after n losses in a row the balance is:

Balance after n losses = starting balance x (1 - r)^n

The number of straight losses that halves the account is:

n = ln(0.5) / ln(1 - r)

Starting from 10,000:

| Risk per trade | After 10 losses in a row | After 20 losses in a row | Losses in a row to halve the account |
|---|---|---|---|
| 0.5% | 9,511 | 9,046 | 138.3 |
| 1% | 9,044 | 8,179 | 69.0 |
| 2% | 8,171 | 6,676 | 34.3 |
| 3% | 7,374 | 5,438 | 22.8 |
| 5% | 5,987 | 3,585 | 13.5 |

These are pure arithmetic. They are not a forecast of how often streaks happen. How likely a streak of 10 is depends on your win rate; see [how many losing trades in a row to expect](/answers/how-many-losing-trades-in-a-row/).

## Why losses hurt more than gains help

A 20% drawdown needs a 25% gain to get back to the start. A 50% drawdown needs 100%. The required gain is:

Gain needed = 1 / (1 - drawdown) - 1

| Drawdown | Gain needed to recover |
|---|---|
| 10% | 11.1% |
| 20% | 25.0% |
| 33% | 49.3% |
| 50% | 100.0% |

This is the main argument for small risk per trade. It is not about any one trade; it is about surviving the bad runs that every strategy has.

## Worked example

Two traders take the same 30 trades with a 40% win rate. Every win is +2R and every loss is a clean -1R (commission is left out to keep the sum simple). Over 30 trades that is 12 wins and 18 losses, a net of 12 x 2 - 18 x 1 = +6R.

- Trader A risks 1% of the starting 10,000, so 1R = 100. Net result: +600.
- Trader B risks 5% of the starting 10,000, so 1R = 500. Net result: +3,000.

On paper, B does five times better. But suppose the 18 losses include a run of 8 in a row early on. A (risking 1% of the current balance) falls to 10,000 x 0.99^8 = 9,227, a 7.7% drawdown. B falls to 10,000 x 0.95^8 = 6,634, a 33.7% drawdown. Same trades, same R. One drawdown is a nuisance; the other is the kind that makes people abandon a plan or raise size to "win it back".

## Common ranges and what shapes them

| Range | Where it is usually quoted | What it trades off |
|---|---|---|
| 0.25% to 0.5% | Short-term traders taking many trades, new traders | Slow growth, very shallow drawdowns |
| 0.5% to 1% | The most widely quoted range for retail traders | Moderate growth, drawdowns usually survivable |
| 1% to 2% | Experienced traders with a tested edge | Faster growth, deeper drawdowns |
| Above 2% | Rarely recommended in trading books | Streaks cause large drawdowns quickly |

Things that push risk lower: many open trades at once, correlated positions, markets that gap, untested strategies and a low win rate (which makes long losing runs more likely). Things that can let people go higher: a long record of tested results in R and few simultaneous trades.

## Common mistakes

- Picking a percent and then ignoring costs in the results, so the real loss per trade looks smaller than it was.
- Raising risk after losses to recover faster. The table shows why that deepens the hole.
- Treating each of five correlated trades as separate 1% risks. Together they may act like one 5% trade.
- Widening the stop to "give the trade room". That raises risk after entry. Stops only tighten.

## Verdict

The common range is 0.5% to 2% per trade, and the drawdown maths explains it: small risk keeps ordinary losing runs survivable. Choose a figure you could live with through 10 or 20 losses in a row, measure 1R from the real fill, count costs in every result, and keep the [risk-reward ratio](/risk-reward-ratio/) and win rate in view. This is maths, not advice.
