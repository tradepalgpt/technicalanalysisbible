---
slug: time-stop
name: Time Stop
aka: [Time-based exit, Time exit]
type: stop-exit
states: [range]
weak_states: [trend, breakout]
purposes: [exit]
inventor: Not attributed to one person
year: Unknown
default_settings: "No standard setting; the number of bars is chosen per strategy"
pairs_with: [stop-loss, range-trading, mean-reversion, profit-target]
related: [trailing-stop, break-even-stop, volatility-stop, scaling-out]
compare: []
glossary: [stop-loss, take-profit, consolidation, whipsaw]
wave: 2
reviewed: 14 November 2026
---

A time stop closes a trade after a set number of bars if it has not worked, regardless of price. It works on the idea that a trade that goes nowhere has probably failed, and that capital is better used elsewhere. It is an exit rule, not a price-based stop loss.

## At a glance

| | |
|---|---|
| Type | Stop and exit method |
| Best market states | Ranges, mean-reversion trades |
| Weak in | Trends and breakouts, where patience is often rewarded |
| Best uses | Exit |
| Default settings | None; the bar count is set per strategy |
| Created by | Not attributed to one person |
| Works alongside | A normal price stop, not instead of one |

## What is a time stop?

A normal stop loss exits when price moves against you by a set amount. A time stop exits when too much time has passed. If you enter a trade expecting a move within five bars and nothing has happened by bar five, the reason for the trade has expired, so you leave.

The logic is simple. A trade idea usually has a time frame in which it should play out. A bounce from support should happen fairly quickly. If price drifts sideways for a long time instead, the bounce may be failing, or the capital could be working elsewhere. Waiting also exposes you to news and gaps for no clear reason.

No single person invented time stops. They appear in many systematic trading books and are common in short-term mean-reversion systems, where an exit after a fixed number of days is a routine rule.

## How it is identified

The rule is chosen before entry. You pick a number of bars, then count from the entry bar.

**Worked example.** You buy at 100 after a pullback to support, with a price stop at 97 and a target at 106. You decide on a time stop of 8 bars.

- Bars 1 to 7: price moves between 99 and 102. Neither the stop nor the target is hit.
- Bar 8: price closes at 101. The time stop triggers and you exit at the next open, around 101.

The trade makes a small gain of about 1 point. Without the time stop, you might have held for many more bars, tying up capital and risking a late drop to 97.

How to choose the number of bars:

- Look at past trades of the same setup and note how long the good ones took to reach their target. If most reach it within 6 bars, a limit of 8 to 10 is a reasonable starting point.
- Scale it to the time frame. Eight bars on a 5-minute chart is 40 minutes; on a daily chart it is eight trading days.
- Avoid fitting the number so tightly to past data that it only works on the sample you tested.

## How to read it

**It is an exit, not a signal.** A time stop does not predict anything. It says only that the trade has not done what you needed it to do.

**Exit at a loss, a gain or flat.** The trade may be slightly up, slightly down or level when the time stop hits. The rule does not care. That simplicity is part of its value.

**Combine it with a price stop.** A time stop does not protect against a sudden fall in the early bars. Always keep a [stop loss](/stop-loss/) for that.

**Consider events.** Some traders add a rule to exit before scheduled news or before the market close, which is a time stop of a different kind.

**Do not trade the exit.** Closing on a time stop and re-entering the same idea at once defeats the point of the rule.

## Best market states

**Ranges (best).** In a range, price should bounce from one edge toward the other. If it does not move within the expected period, the range may be breaking down or the setup is not working.

**Mean-reversion trades (good).** These trades expect a quick return to an average. A trade that lingers has lost its edge, so a time limit makes sense. See [Mean reversion](/mean-reversion/).

**Trends (weak).** Trends can pause for a long time before moving on. A time stop can take you out of a good trade during a normal pause.

**Breakouts (weak).** Some breakouts move at once and some take a while after a retest. A tight time limit can cut off the slower ones.

**Volatility.** In quiet markets the expected move takes longer, so the bar count may need to be higher. In fast markets it can be shorter.

## Confirmation rules

A time stop has no entry signal to confirm. Before you use one, check the following.

| Check | What to look for |
|---|---|
| Expected time frame | The setup normally plays out within a known number of bars |
| Historical test | Past trades show that those which linger tend to do worse, with enough trades to mean something |
| Price stop | A separate stop loss is in place from the first bar |
| Bar counting | Clear rule for the entry bar and for exit at close or next open |
| Costs | Frequent early exits do not add up to large spreads and commissions |

## Common mistakes

- Using a time stop without any price stop, leaving a gap risk in the first bars.
- Picking the number of bars from a handful of trades and treating it as fixed.
- Applying the same bar count to trend trades that need room to develop.
- Changing the limit during a trade because you hope it will work out.
- Ignoring the time frame, so the same count means very different durations on different charts.
- Re-entering the same trade straight after the time exit.

## Pairs well with

- **[Stop loss](/stop-loss/)**: covers the risk of a fast move that the time rule would not catch.
- **[Range trading](/range-trading/)**: the setup type where a time limit makes the most sense.
- **[Mean reversion](/mean-reversion/)**: systems built on quick returns to an average often use a fixed holding limit.
- **[Profit target](/profit-target/)**: gives the other half of the plan, with the trade ending either at the target, the stop or the time limit.

## Sources

- Pardo, Robert (2008). *The Evaluation and Optimization of Trading Strategies*, 2nd edition. John Wiley & Sons.
- Connors, Larry and Alvarez, Cesar (2009). *Short Term Trading Strategies That Work*. TradingMarkets Publishing Group. (Includes exits after a fixed number of days in short-term systems.)

## FAQ

**What is a time stop in trading?**
A time stop is a rule that closes a trade after a set number of bars, whether it is in profit or loss. It limits how long capital is tied up in a trade that is not working and removes the temptation to wait.

**How many bars should a time stop use?**
There is no standard number. Look at how long your good trades usually take and set the limit a little beyond that. Test it across many trades and different markets rather than a few examples.

**Is a time stop the same as a stop loss?**
No. A stop loss exits when price moves a set distance against you. A time stop exits after a set amount of time. They do different jobs and are normally used together.

**Does a time stop work in trending markets?**
Usually not well. Trends often pause for a while before continuing, so a time limit can close a good trade early. It fits ranges and short-term mean-reversion trades better.

**Should I exit at the close or the next open?**
Either can work if you apply the same rule every time. Exiting at the next open is easier to test because it avoids using the closing price after the fact. Check how your platform and market handle orders.
