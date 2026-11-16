---
slug: continuation-or-reversal-pattern-how-to-tell
title: "Continuation or reversal: how do you tell which pattern you are in?"
description: You often cannot tell until the break. How the trend before, the pattern's size and where it sits help, and a decision table for the in-between cases.
query: continuation or reversal pattern how to tell
pillar: chart-patterns
publish: 2027-03-03
reviewed: 16 November 2026
guides: [market-structure, swing-highs-lows, rectangle-pattern, trend-following]
siblings: [symmetrical-triangle-which-way-will-it-break, bull-flag-vs-pennant]
value: [table, example, verdict]
---

Often you cannot tell until price breaks. The same sideways shape can end as a pause or a top. What helps is the trend before the pattern, how long and deep the pattern is compared with that trend, where it sits on the bigger chart, and which line breaks first. The break decides; the rest only shifts the odds.

## Why the label is uncertain

Many patterns can be either. A [rectangle](/rectangle-pattern/) after a rise is a continuation if it breaks up and a top if it breaks down. A triple top and a rectangle look identical until the break. A flag that runs too long becomes a range. Even a head and shoulders can fail and turn into a continuation.

So the useful question is not "which pattern is this?" but "what would each outcome look like, and which signs point to one or the other?"

## Five things that shift the odds

### 1. The trend before

A pause is a pause in something. Continuation patterns need a clear trend before them, ideally a strong, recent push. Reversal patterns need a trend that has been running long enough to tire. Check [market structure](/market-structure/): a run of higher highs and higher lows is an uptrend; a break of the last higher low is the first sign it may be ending.

### 2. Size compared with the trend

| Feature | Points to continuation | Points to reversal |
|---|---|---|
| Length of the pattern | Short compared with the trend before | Long; comparable to the trend itself |
| Depth | Gives back a small part of the prior move | Gives back a large part |
| Swings inside | Few, tight | Many, wide |
| Volume (stocks, futures) | Falls during the pattern | Heavy on moves against the trend |

A flag that takes five days after a three-week rise is a pause. A range that lasts three months after a three-month rise is a much bigger question.

### 3. Where it sits

A sideways pattern just under a long-standing resistance level on a weekly chart is more likely to be a top than one in open space above old highs. A pattern sitting on a rising long-term average is more likely to be a rest.

### 4. Which swing breaks first

The most practical clue. In an uptrend, the last higher low inside the pattern is the line in the sand. If it breaks, the [swing structure](/swing-highs-lows/) has turned. If the pattern's top breaks first, the trend has resumed.

### 5. The shape itself

Some shapes lean one way by tradition: flags and pennants towards continuation; head and shoulders and double tops towards reversal; wedges against their slope. These leans are textbook readings. We have not tested them.

## A decision table

| You see | Trend before | Most likely reading | What would change your mind |
|---|---|---|---|
| Short, shallow pause after a sharp move | Strong | Continuation (flag, pennant) | A close below the pause's low |
| Long range after a long trend | Mature | Could be either | Which edge closes first |
| Three peaks, middle highest | Long rise | Reversal (head and shoulders) | Neckline holds; new high |
| Two equal highs, deep trough between | Long rise | Reversal (double top) | Close above both highs |
| Rising lows into a flat top | Rise | Continuation (ascending triangle) | Close below the rising line |
| Converging lines, no clear lean | Any | Bilateral | The first close outside |
| Rising wedge after a fall | Downtrend | Continuation (bearish) | Close above the upper line |

## Worked example in R

This is an illustration with round numbers, not a real trade.

A share rises from 40 to 60 over four months. It then trades between 55 and 60 for six weeks: a rectangle.

Is it a continuation or a top? The pause is long but shallow: six weeks against four months, and only 5 points of a 20-point rise. Price sits well above its rising long-term average, and there is no prior resistance near 60. That leans towards continuation, but only loosely.

The trader plans both:

**Upside break** (close above 60): entry 60.40, stop below the last swing low inside the box at 56.80. Risk 3.60. Target 60 + 5 = 65. Reward 4.60. **1.3R.**

**Downside break** (close below 55): entry 54.60, stop above the last swing high at 58.70. Risk 4.10. Target 55 − 5 = 50. Reward 4.60. **1.1R.**

Neither trade is large in R, which is common for rectangles with a stop at the last swing. A trader might wait for a retest to tighten the stop, or decide that only the side matching the lean is worth taking.

What they do not do is sell the top of the range because "it looks like a triple top". Until 55 breaks, it is not one.

## Common mistakes

- **Naming the pattern early** and trading the name instead of the break.
- **Ignoring the trend before.** A "flag" with no pole is just a drift.
- **Ignoring size.** A pause as long as the trend it interrupts is not a small rest.
- **Redrawing after the break** so that the result always matches the first label.

## Verdict

You usually cannot tell continuation from reversal with certainty until price breaks. The trend before, the pattern's size compared with that trend, where it sits on the bigger chart and which swing breaks first all shift the odds. Plan both outcomes, let the first decisive close settle it, and judge each side in R. For trend-based approaches, see [trend following](/trend-following/); for the patterns themselves, the [chart patterns guide](/guide/chart-patterns/).
