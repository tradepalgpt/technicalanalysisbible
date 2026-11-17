---
slug: what-is-a-liquidity-sweep
title: "What is a liquidity sweep?"
description: A liquidity sweep is price briefly trading past an obvious high or low, then reversing back inside. How it differs from a breakout, with a worked trade in R.
query: what is a liquidity sweep
pillar: price-action-guide
publish: 2027-11-19
reviewed: 17 November 2026
guides: [liquidity-sweep, equal-highs-lows, false-breakout, fakey-pattern]
siblings: [what-is-a-break-of-structure, is-smart-money-concepts-just-old-ideas]
value: [table, example, verdict]
chart: liquidity-sweep
---

A liquidity sweep is a move that briefly trades beyond an obvious high or low, such as equal lows or a prior swing, and then reverses back inside within a bar or two. It is the smart money concepts name for what older books call a false break or a stop run.

## What the term describes

The idea behind the [liquidity sweep](/liquidity-sweep/) is that many stop orders sit just beyond obvious levels. Below a clear low there are sell stops from longs; above a clear high, buy stops from shorts. When price reaches them, those orders fill, and the move can run out of fuel once they are done.

That is a plausible mechanism, and stop clustering near round numbers and obvious levels has been discussed in market research. But the chart cannot show whose orders filled or why the price reversed. "Institutions hunted the stops" is a story laid over the price, not a fact the data proves. This post describes the pattern; it does not assume intent.

## Sweep, breakout or false breakout?

| | Sweep | Breakout | False breakout |
|---|---|---|---|
| Price passes the level | Yes, briefly | Yes | Yes |
| Bar closes back inside | Usually the same or next bar | No, holds outside | Yes, often over several bars |
| Typical shape | Long wick through the level | Close beyond, follow-through | Close beyond, then failure |
| Older name | Stop run, spring (Wyckoff), shakeout | Breakout | Failed breakout, [fakey](/fakey-pattern/) |

The difference between a sweep and a [false breakout](/false-breakout/) is mostly speed: a sweep is usually a wick, while a false breakout may close outside the level before failing. Our existing post [what is a false breakout?](/answers/what-is-a-false-breakout/) covers that slower case.

## Where sweeps are usually looked for

- **Equal highs and lows.** Two or more swings at almost the same price, which many traders see as an obvious stop area. See [equal highs and lows](/equal-highs-lows/).
- **Prior day, week or session highs and lows.**
- **Round numbers.**
- **The last swing before a range or trend.**

## Worked trade in R

GBP/USD has equal lows at 1.2650 and 1.2652 on the 1-hour chart. A bar trades down to 1.2638, through both lows, then closes at 1.2661, back above them. A trader takes this as a sweep:

- Buy on the next bar. The long fills at the ask, 1.2663.
- First stop below the sweep low, at 1.2633.
- Size: 50,000 units.
- 1R = (1.2663 - 1.2633) x 50,000 = 150.

Price rises to 1.2690 and forms a higher low at 1.2658. The trader tightens the stop to 1.2655, under that higher low. Price then drops and the stop fills at 1.2655.

| Item | Value |
|---|---|
| Result on price: (1.2655 - 1.2663) x 50,000 | -40 |
| In R | -0.27R |
| Commission | On top |

The loss is smaller than 1R because the stop was tightened after the fill. 1R itself stayed at 150, fixed at the fill; the stop only moved in the trade's favour. Had price fallen straight to 1.2633, the result would have been exactly -1R, with costs on top.

## What is testable

Sweeps can be defined exactly: price trades at least X beyond a prior swing low and closes back above it within N bars. That rule can be applied to history and compared with entries at random times. Without the comparison, a sample of hand-picked sweeps that "worked" says nothing. We have not published such a test here.

## Common mistakes

- Labelling a sweep only after the reversal is obvious. In real time, a sweep and the start of a breakdown look the same until the close.
- Placing the stop just under the sweep wick, which is itself an obvious level.
- Calling every wick through a minor low a sweep.

## Verdict

A liquidity sweep is a brief trade through an obvious high or low followed by a quick return inside: a false break or stop run with a new name. The pattern is clear and testable; the story of deliberate stop hunting is not something price data can confirm. Define the rule, measure trades in R, and expect many sweeps to turn into real breakouts.
