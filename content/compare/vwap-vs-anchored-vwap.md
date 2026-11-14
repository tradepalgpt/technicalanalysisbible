---
slug: vwap-vs-anchored-vwap
title: VWAP vs Anchored VWAP
a: vwap
b: anchored-vwap
reviewed: 14 November 2026
---

VWAP and anchored VWAP use the same calculation: the average price weighted by volume. The difference is where it starts. Standard VWAP resets at the start of each session. Anchored VWAP starts from a bar you choose, such as a swing low or an earnings gap, and keeps running until you remove it. One is a daily line, and the other is a line tied to an event.

## At a glance

| | VWAP | Anchored VWAP |
|---|---|---|
| Start point | Start of each session | A bar you choose |
| Formula | Cumulative (TP x volume) / cumulative volume | Same, from the anchor |
| Typical price | (high + low + close) / 3 | (high + low + close) / 3 |
| Reset | Every session | None |
| Created by | Not attributed to one person | Not attributed; popularised by Brian Shannon |
| Settings | Session reset | No default; the anchor is a choice |
| Best market state | Trends, ranges (intraday) | Trends, ranges |
| Weak in | Fast breakouts, poor volume data | Fast breakouts, poor volume data |

## When to use VWAP

[VWAP](/vwap/) suits day traders. Price above it suggests buyers are in control for the day, and below it suggests sellers. Large investors use it as an execution benchmark, so many orders are measured against it. It gives a simple fair-value line for the day, and a stop reference.

## When to use Anchored VWAP

[Anchored VWAP](/anchored-vwap/) suits swing and position traders. It shows the average price paid since an event, so price above it means holders since that event are on average in profit. Common anchors are a swing high or low, a gap, an earnings release or a breakout bar. The anchor is the most important choice you make.

## Using both together

A day trader can use the session VWAP for intraday bias and an anchored VWAP from a major low for the bigger picture. When both lines sit close together, the level may draw more attention. Add [support and resistance](/support-and-resistance/) and [volume](/volume/) for context. See also [VWAP Bands](/vwap-bands/).

## Common mix-ups

- **Expecting anchored VWAP to reset.** It keeps running until you remove it.
- **Choosing the anchor after the fact.** Picking the bar that makes the line look good misleads you.
- **Using either on forex without care.** Spot forex has only tick volume, so the line is an approximation.
- **Thinking later bars move it much.** The total volume keeps growing, so each new bar changes the line less.

## FAQ

**What is the difference between VWAP and anchored VWAP?**
VWAP restarts every session. Anchored VWAP starts from a bar you pick and does not reset.

**Which anchor should I use?**
There is no default. Common choices are swing highs and lows, gaps, earnings and breakout bars.

**Do they use the same formula?**
Yes. Only the starting point changes.

**Do they work on forex?**
Only roughly, because forex has tick volume instead of real volume.
