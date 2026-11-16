---
slug: what-is-a-daily-loss-limit
title: "What is a daily loss limit and how do you set one?"
description: A daily loss limit stops trading for the day after a set loss. How to set it in R, how open risk fits in, and a worked example.
query: what is a daily loss limit in trading
pillar: stop-losses-and-risk-guide
publish: 2027-09-10
reviewed: 16 November 2026
guides: [position-sizing, stop-loss, risk-reward-ratio]
siblings: [how-much-to-risk-per-trade, how-many-losing-trades-in-a-row]
value: [table, example, verdict]
---

A daily loss limit is a fixed amount you stop trading at once you have lost it in a day, for example 3R. Set it in R before the day starts, count realised losses plus the risk on any open trades, and stop taking new trades when the next one could break it.

## What it is for

A [stop loss](/stop-loss/) caps the loss on one trade. A daily loss limit caps the loss across all trades in a day. It exists because bad days tend to cluster: a market that is not behaving as expected can produce several stop-outs in a row, and decisions made after three losses are often worse than decisions made after none.

Many prop trading firms and funded-account programmes set daily loss limits as a hard rule. Individual traders use them for the same reason: to make a bad day a bounded day.

## Setting it in R

Measure the limit in R, the same unit as each trade's risk. Then convert to money or percent through your risk per trade.

| Risk per trade | Limit 2R | Limit 3R | Limit 4R |
|---|---|---|---|
| 0.5% | 1.0% | 1.5% | 2.0% |
| 1% | 2% | 3% | 4% |
| 2% | 4% | 6% | 8% |

There is no correct limit. Common choices are 2R to 4R, or a stated percent of the account. Things to weigh:

- **How many trades you take a day.** If you usually take two, a 4R limit is barely a limit. If you take ten, a 2R limit may stop you before your edge can show.
- **Your losing streaks.** If runs of 5 losses are common at your win rate, a limit below 5R will trigger regularly. That may be the point, or it may cut good days short.
- **Weekly and monthly limits.** Many traders add these too, so a string of bad days is also bounded.

## Count open risk, not just closed losses

A day's loss is not final until open trades are closed. A sound rule counts:

Day's worst case = realised result so far - risk on open trades - risk on the next trade

If that worst case would be beyond the limit, the next trade is not taken, or is taken at a smaller size so the worst case stays inside it.

## Worked example

A trader risks 1% per trade on 10,000, so 1R = 100. The daily limit is 3R (300). Every result is after costs.

| Trade | Size | Result | Running total | Worst case if the next trade is a full 1R loss |
|---|---|---|---|---|
| 1 | 1R | -1.00R | -1.00R | -2.00R: take the next trade |
| 2 | 1R | -1.05R (slippage) | -2.05R | -3.05R: beyond the limit, so cut the next trade to 0.9R |
| 3 | 0.9R | +0.54R | -1.51R | -2.51R: take the next trade |
| 4 | 1R | -1.00R | -2.51R | -3.51R: stop for the day |

After trade 2 the running total was -2.05R. A full 1R trade could take the day to -3.05R, past the limit, so the trader sized the next trade at 0.9R (a worst case of -2.95R). It won 0.6 times its risk: 0.6 x 0.9 = +0.54R. After trade 4, only 0.49R of room was left. The trader stopped for the day at -2.51R (-251).

Slippage on trade 2 is why the limit was reached faster than three plain 1R losses would suggest. It counts, because the account lost that money.

## Gaps and fast markets

A stop can fill worse than planned in a gap or a fast move, so a trade risking 1R can lose more. That means a daily limit can be broken by a single bad fill. Two ways traders allow for it:

- Keep the limit a little inside the level you truly cannot exceed.
- Stop trading before scheduled news, when slippage is most likely.

## What happens when the limit is hit

- Close or protect open trades as your rules say. Tightening stops is fine; widening them to avoid realising the loss is a mistake.
- Stop opening new trades for the day.
- Record the day as it happened, in R.
- Review the next day, not in the moment.

The limit is only useful if it is kept. A limit that is raised after it is hit is no limit.

## Common mistakes

- Counting only closed trades and ignoring open risk.
- Raising the limit during a bad day.
- Doubling size after a loss to win it back by the close. [Position sizing](/position-sizing/) should not change because of today's result.
- Setting a limit so tight it triggers on ordinary days, then ignoring it.
- Using a daily limit to excuse a poor [risk-reward ratio](/risk-reward-ratio/). It caps bad days; it does not create an edge.

## Verdict

A daily loss limit caps the damage from a bad day. Set it in R before the session, commonly 2R to 4R, count open and next-trade risk as well as closed losses, and stop when the next trade could break it. Never raise it mid-day, and never widen stops to stay under it.
