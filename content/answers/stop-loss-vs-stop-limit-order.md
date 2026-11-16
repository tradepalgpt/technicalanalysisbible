---
slug: stop-loss-vs-stop-limit-order
title: "Stop-loss vs stop-limit orders: what is the difference?"
description: A stop-loss exits at any price once triggered; a stop-limit only exits at your limit or better. Why that matters in a gap, worked in R.
query: stop loss vs stop limit order
pillar: stop-losses-and-risk-guide
publish: 2027-08-25
reviewed: 16 November 2026
guides: [stop-loss, position-sizing]
siblings: [stop-loss-when-market-gaps, mental-stop-vs-hard-stop]
value: [table, example, verdict]
---

A stop-loss (stop-market) order becomes a market order when triggered, so it always exits but the price can be worse than the stop. A stop-limit order becomes a limit order, so it never fills worse than your limit, but in a fast move or gap it may not fill at all.

## How each order works

Both orders have a trigger price, called the stop price. Nothing happens until the market trades at or through it.

- **Stop-loss (stop-market):** once triggered, it is sent as a market order. It fills at the best available price. In a calm market that is at or near the stop. In a fast market or a gap, it can be much worse.
- **Stop-limit:** once triggered, it is sent as a limit order at a price you chose. For a long position, the limit is usually a little below the stop. It fills only at the limit or better. If price has already passed the limit, the order waits, unfilled.

| | Stop-loss (stop-market) | Stop-limit |
|---|---|---|
| Prices you set | Stop only | Stop and limit |
| After trigger becomes | Market order | Limit order |
| Certain to exit? | Yes, if the market is trading | No |
| Fill price known? | No | Limit or better, if filled |
| Risk in a gap | Fills at the gap price | May not fill; loss can keep growing |
| Main use | Exiting a losing trade | Entering at a controlled price; exits where slippage matters more than certainty |

## Worked example: a gap down

A trader is filled at 50.00 with an exit at 48.00, so 1R = 2.00 per share, fixed at the fill. Commission is 0.05 per share round trip, shown on top of the result, never added to 1R.

Overnight, bad news. The share opens at 47.00 and keeps falling during the day to 44.00.

**With a stop-loss at 48.00:**
The stop triggers at the open and fills at about 47.00.
Loss on price = 50.00 - 47.00 = 3.00 per share, or -1.50R. With commission: 3.05, or -1.53R.

**With a stop-limit, stop 48.00, limit 47.80:**
The stop triggers at the open, but the market is at 47.00, below the 47.80 limit. The order does not fill. The trader is still in the trade as price falls. If they finally exit at 44.00:
Loss on price = 6.00 per share, or -3.00R. With commission: 6.05, or -3.03R.

The stop-limit avoided a 1.5R loss on price and produced a 3R loss instead.

Of course, the share could bounce back above 47.80 and fill the limit, or recover to 50. The point is that a stop-limit hands the outcome to the market. A [stop loss](/stop-loss/) is there to cap the damage when you are wrong, and a stop-limit can fail at exactly that moment.

## When a stop-limit makes sense

- **Entries.** A buy stop-limit on a breakout stops you from chasing a price that has jumped far past your planned entry. Missing the trade is acceptable; overpaying is not.
- **Very thin markets.** Where a market order could fill far away, some traders accept the risk of no fill.
- **Large orders.** Traders moving size may prefer to control price and work the order.

For most traders protecting a losing position, missing the exit is a worse outcome than a bad fill.

## What this means for position sizing

[Position sizing](/position-sizing/) assumes the stop exits near its price. Neither order type makes that certain:

- A stop-market order can fill beyond the stop in a gap.
- A stop-limit order can leave you holding with no exit.

That is why modest risk per trade matters. It keeps a gap or an unfilled order from doing serious damage. Some brokers sell a stop that is filled at the exact stop price even in a gap, for an extra fee. That fee is a real cost per trade. Like commission, it is shown on top of the result; it is never added to 1R.

## Common mistakes

- Using a stop-limit as a protective stop with the limit only a tick below the stop.
- Assuming a stop-limit is safer because "the price is controlled". It controls price, not exit.
- Not knowing what order type your platform uses by default for its stop button.
- Moving a triggered but unfilled stop-limit lower and lower to chase the market. Each move widens the risk. Exit at market instead.

## Verdict

For protecting an open trade, a stop-market order is usually the safer choice: it exits, even if the fill is worse than planned. A stop-limit controls price but not exit, and in a gap it can turn a 1.5R loss into a much bigger one. Stop-limits are better suited to entries, where missing the trade costs nothing.
