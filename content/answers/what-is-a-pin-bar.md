---
slug: what-is-a-pin-bar
title: "What is a pin bar?"
description: A pin bar is a bar with a long wick on one side and a small body at the other end, showing price was rejected. Measurement rules and a worked trade in R.
query: what is a pin bar
pillar: price-action-guide
publish: 2027-11-26
reviewed: 17 November 2026
guides: [pin-bar, hammer, shooting-star, support-and-resistance]
siblings: [how-to-trade-an-inside-bar, what-is-price-action-trading]
value: [table, example, verdict]
chart: pin-bar
---

A pin bar is a price bar with one long wick and a small body near the other end, so price moved far in one direction during the bar and then came back. A bullish pin bar has a long lower wick; a bearish pin bar has a long upper wick.

## Where the term comes from

"Pin bar" is short for Pinocchio bar, a name popularised by trader and author Martin Pring. The idea was that the bar's long nose "lies" about direction. The shape overlaps with Japanese candlesticks: a bullish [pin bar](/pin-bar/) after a decline looks like a [hammer](/hammer/), and a bearish one after a rise looks like a [shooting star](/shooting-star/). The main difference is that pin bar rules usually ignore body colour, and they can be applied to plain OHLC bars.

Our existing post [what does a long lower wick mean?](/answers/what-does-a-long-lower-wick-mean/) covers the wick itself. This post is about the pin bar as a defined pattern.

## How to measure one

There is no single official rule. A common written version:

| Measure | Typical rule |
|---|---|
| Long wick | At least two-thirds of the bar's full range |
| Body | No more than a third of the range |
| Body position | In the opposite third of the bar from the wick |
| Nose | Should stick out past nearby bars, not sit inside them |
| Location | At a level: prior swing, support or resistance, trend pullback |

## Worked measurement

A share prints a bar: open 50.20, high 50.40, low 48.90, close 50.30.

| Item | Calculation | Value |
|---|---|---|
| Range | 50.40 - 48.90 | 1.50 |
| Lower wick | lower of open and close (50.20) - 48.90 | 1.30 |
| Lower wick share of range | 1.30 / 1.50 | 87% |
| Body | 50.30 - 50.20 | 0.10 |
| Body share of range | 0.10 / 1.50 | 7% |

The lower wick is 87% of the range and the body is in the top third, so it passes the shape test as a bullish pin bar. Whether it is worth trading depends on where it formed.

## Worked trade in R

Say the bar formed at a prior swing low acting as support, in an uptrend. A common entry is a buy stop just above the bar's high.

- Buy stop at 50.41. With the spread, the long fills at 50.42.
- First stop just under the bar's low, at 48.89.
- Size: 300 shares.
- 1R = (50.42 - 48.89) x 300 = 459.

The target is set at a +2R distance on price: 50.42 + 2 x 1.53 = 53.48. If it is reached, the price result is +918, or +2R, before commission. If the stop is hit cleanly, the result is exactly -1R (-459), plus commission. If the next day opens below 48.89, the stop fills at the open and the loss is larger than 1R, recorded as it filled.

Notice how wide the stop is: the long wick makes 1R large in price terms, so the position is smaller for the same money at risk. Some traders enter on a 50% retracement into the wick instead, which halves the stop distance but often does not fill.

## What the shape does and does not tell you

The long wick shows that price was pushed away from an area within that bar. It does not show who did it, or that the move will continue. A pin bar in the middle of a range, with no level nearby, is just a bar with a wick. Location and trend do most of the work; see [support and resistance](/support-and-resistance/) for how levels are drawn.

## Common mistakes

- Trading every long-wick bar regardless of location.
- Relaxing the shape rule after the fact ("close enough").
- Placing the stop inside the wick to improve the R target, where normal noise takes it out.
- Forgetting that on very short timeframes, spread alone can create wicks.

## Verdict

A pin bar is a long-wick, small-body bar showing rejection within one bar: the hammer and shooting star idea without the colour rules. With a written shape rule and a level, it gives a clear entry and stop. The wide stop makes 1R large in price terms, and the pattern's value comes from its location, not its shape alone.
