---
slug: mental-stop-vs-hard-stop
title: "Mental stop loss vs hard stop loss: which is safer?"
description: A hard stop is an order with the broker; a mental stop is a price in your head. Why hard stops are usually safer, and when mental stops are used.
query: mental stop loss vs hard stop loss
pillar: stop-losses-and-risk-guide
publish: 2027-08-27
reviewed: 16 November 2026
guides: [stop-loss, position-sizing, structure-stop]
siblings: [should-you-move-your-stop-loss-further-away, stop-loss-vs-stop-limit-order]
value: [table, example, verdict]
---

A hard stop is usually safer. It is an order sitting with the broker, so it works when you are away, asleep or hesitating. A mental stop is a price you plan to exit at by hand, and it only works if you are watching and act on it every time.

## The difference

A hard [stop loss](/stop-loss/) is a stop order placed with the broker when you enter. When price reaches it, the order triggers without you.

A mental stop is a price you have decided on but not entered as an order. When price gets there, you close the trade yourself.

| | Hard stop | Mental stop |
|---|---|---|
| Where it lives | In the broker's system | In your head or notes |
| Works when you are away | Yes | No |
| Works if your connection drops | Yes (held by the broker) | No |
| Can be seen by others | Only by your broker | No |
| Can be hit by a brief spike | Yes | You can choose to ignore a spike |
| Risk of hesitating | None | High |
| Risk of moving it away | Possible, but takes a deliberate change | Easy, and often unnoticed |
| Gap risk | Fills at the gap price | Same, or worse if you are late |

## Worked example: the cost of hesitating

A trader is filled at 100.00 with a planned exit at 98.00, so 1R = 2.00 per share, fixed at the fill. Commission is 0.06 per share round trip, shown on top of each result, never added to 1R.

**Hard stop:** price falls through 98.00 and the order fills at 97.96 (0.04 slippage).
Loss on price = 100.00 - 97.96 = 2.04 per share, or -1.02R. With commission: 2.10, or 2.10 / 2.00 = -1.05R.

**Mental stop, acted on late:** the trader is in a meeting when price passes 98.00. By the time they close, it is 97.00.
Loss on price = 3.00 per share, or -1.50R. With commission: 3.06, or -1.53R.

**Mental stop, not acted on:** the trader sees 98.00, decides to "give it a bit more room", and exits at 95.00.
Loss on price = 5.00 per share, or -2.50R. With commission: 5.06, or -2.53R.

The last case is widening the stop after entry, without ever touching an order. That is the main danger of a mental stop: it is very easy to move further away, and widening a stop is always a mistake.

## What it does to expectancy

Take a strategy with a 40% win rate, wins of +2R and losses of -1R:

Expectancy = 0.4 x 2 - 0.6 x 1 = +0.2R per trade.

If mental stops are hit late so the average loss becomes -1.3R:

Expectancy = 0.4 x 2 - 0.6 x 1.3 = +0.02R per trade.

Almost the whole edge is gone, from execution alone, with the same entries and targets.

## Why some traders use mental stops

There are real reasons, though each has a cost.

- **Stop hunting worries.** Some traders fear that visible stop clusters attract price. A hard stop is seen only by your broker, not the market, but stops do tend to cluster at obvious levels. The fix is to place stops beyond the obvious level with a buffer, as a [structure stop](/structure-stop/) does, not to remove the stop.
- **Thin or spiky markets.** In markets prone to brief spikes, a hard stop can be hit by one bad print. Some traders use a closing-basis stop: exit only if a bar closes beyond the level. That is a defined rule, and it can be tested, but intrabar losses can then exceed 1R.
- **Very large positions.** Professional desks working big orders may manage exits by hand. They also have systems and risk managers watching.

## A middle path

Many traders use both: a hard "disaster" stop further out, plus a planned exit nearer in. If the plan says exit at 98 on a close, the hard stop at, say, 96.50 catches the moments you cannot act.

If you do this, size the trade from the hard stop, not the mental one. [Position sizing](/position-sizing/) must cover the worst exit you have set, or 1R is understated.

## Common mistakes

- Using a mental stop with no written price.
- Sizing from a mental stop that you then widen.
- Removing a hard stop during a fast move "until it settles".
- Holding with only a mental stop overnight or over a weekend.

## Verdict

Hard stops are safer for most traders because they work without you and are harder to move away. Mental stops can work only with strict discipline and constant attention, and they make widening a stop dangerously easy. If you use one, back it with a hard disaster stop and size from that.
