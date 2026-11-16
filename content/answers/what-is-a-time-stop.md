---
slug: what-is-a-time-stop
title: "What is a time stop?"
description: A time stop closes a trade that has not worked within a set number of bars. How it works, common rules, and a worked example in R.
query: what is a time stop in trading
pillar: stop-losses-and-risk-guide
publish: 2027-08-30
reviewed: 16 November 2026
guides: [time-stop, bar-stop, stop-loss]
siblings: [why-does-my-stop-loss-keep-getting-hit, what-is-expectancy-in-trading]
value: [table, example, verdict]
---

A time stop closes a trade that has not done what you expected within a set time, such as 10 bars, whatever the price. It works alongside a normal price stop, not instead of it: the price stop caps the loss, the time stop frees money and attention tied up in a trade that is going nowhere.

## How it works

A [time stop](/time-stop/) is an exit rule based on time rather than price. You decide before entry:

- how long the trade has to work (a number of bars, days or hours), and
- what "working" means (for example, reaching +1R, or closing beyond a level).

If the condition is not met in time, you exit at market. The normal [stop loss](/stop-loss/) stays in place the whole time, so the worst case is still a full stop-out: -1R, plus commission on top, and worse only if the stop slips or the market gaps.

A [bar stop](/bar-stop/) is a close relative: exit if the next bar, or the next N bars, fail to do something specific, such as make a new high. Bar stops are usually shorter and tied to a single pattern bar.

## Why traders use them

The idea behind most entries is that something should happen soon. A breakout should follow through. A bounce from support should lift away. If nothing happens for a long time, the original reason for the trade has faded, even if the price stop has not been hit.

| Benefit | Cost |
|---|---|
| Frees capital and margin for new trades | Some slow trades would have worked later |
| Cuts trades that drift and then fail | Adds a rule that must be tested |
| Often exits stale trades before a full -1R loss | Extra round-trip costs from more exits |
| Limits exposure to news and weekend gaps | Can exit just before the move starts |

## Common rules

| Rule | Example |
|---|---|
| Fixed bars | Exit after 10 bars if not at +1R |
| End of session | Day traders exit all trades by the close |
| End of week | Exit before the weekend if not in profit |
| Bar stop | Exit if the bar after entry does not make a new high (long) |
| Progress check | Exit after 5 bars if the trade is below entry |

The numbers above are examples, not recommendations. The right time depends on the timeframe and on how long your setups normally take to work, which you can measure from your own records.

## Worked example

A trader is filled at 100.00 with a stop at 97.00, so 1R = 3.00 per share, fixed at the fill. Commission is 0.09 per share round trip, shown on top of the result, never added to 1R. The time stop: exit at the close of bar 10 if the trade has not reached +1R.

**Case 1.** After 10 bars, price has drifted between 99 and 102 and closes at 100.60.
On price: 100.60 - 100.00 = 0.60, or +0.20R. Less 0.09 commission: 0.51, or 0.51 / 3.00 = +0.17R.

**Case 2.** After 10 bars, price closes at 99.20.
On price: 99.20 - 100.00 = -0.80, or -0.27R. With 0.09 commission: -0.89, or -0.89 / 3.00 = -0.30R.

In both cases, the trade ends before reaching either the stop or the target. Whether that is good depends on what those trades would have done next. If drifting trades in your sample tend to fail later, the time stop turns some -1R losses into smaller results. If they tend to recover, it cuts some winners short. Only testing in R with costs can tell you which.

## Time stops and risk

A time stop only ever ends exposure. It never adds risk, and it never moves the price stop further away. It fits alongside tightening rules such as a break-even move or a trailing stop. Each extra exit does cost spread and commission, so a time stop that fires very often adds up in costs.

## Choosing the time

1. Look at your past winners. How many bars did most take to reach +1R?
2. Set the time stop a little beyond that, so normal winners are rarely cut.
3. Test it in R with costs, and compare with the same trades without a time stop.
4. Keep the rule fixed. Changing it trade by trade defeats the purpose.

We have not tested time stops yet, so no performance figures are given here.

## Common mistakes

- Using a time stop instead of a price stop. Without a price stop, losses are unlimited while the clock runs.
- Choosing the time after the trade is open.
- Extending the time because the trade "looks close". That is the time version of widening a stop.
- Setting a time far shorter than your setups usually need.

## Verdict

A time stop exits a trade that has not worked in a set time. It cuts stale trades, frees capital and limits exposure to gaps, at the cost of occasionally exiting just before a move. Use it with a normal price stop, set the time before entry from your own records, and judge it in R with costs.
