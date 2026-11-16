---
slug: bull-flag-vs-pennant
title: "Bull flag vs pennant: what is the difference?"
description: A bull flag rests in a parallel channel; a pennant rests in a small triangle. Both follow a sharp pole and break the same way. A side-by-side table.
query: bull flag vs pennant
pillar: chart-patterns
publish: 2027-01-22
reviewed: 16 November 2026
guides: [bull-flag, pennant, measured-move]
siblings: [what-is-a-measured-move, continuation-or-reversal-pattern-how-to-tell]
value: [table, example, verdict, chart]
chart: pennant
---

The only real difference is the shape of the pause. A bull flag rests in a small parallel channel that drifts down or sideways; a pennant rests in a small triangle whose lines converge. Both need a sharp rise first, both break upwards, and both use the same [measured](/measured-move/) target.

## What they share

A [bull flag](/bull-flag/) and a bullish [pennant](/pennant/) tell the same story:

1. **The pole.** Price rises fast: several strong bars, often on high volume, steeper than the trend before.
2. **The pause.** Early buyers take some profit and new buyers wait. Price stops rising and drifts.
3. **The break.** Buyers return and price closes above the top of the pause.

Without the pole, neither pattern exists. A slow drift down after a slow rise is just a pullback, whatever shape it makes.

## Side by side

| | Bull flag | Bullish pennant |
|---|---|---|
| Before | Sharp pole | Sharp pole |
| Shape of the pause | Parallel channel, sloping down or flat | Small triangle, lines converging |
| Swings in the pause | Lower highs and lower lows | Lower highs and higher lows |
| Usual length (daily chart) | Days to a few weeks | Days to a few weeks |
| How much of the pole it gives back | Usually under about half | Usually less than a flag |
| Trigger | Close above the upper line | Close above the upper line |
| Measured target | Pole length added to the break | Pole length added to the break |
| Usual stop | Below the flag low | Below the pennant low |
| Main confusion | A falling channel or a deep pullback | A larger symmetrical triangle |

The bear flag and bearish pennant are mirror images after a sharp fall.

## Why the difference barely matters

Ask what the shape tells you. In a flag, each dip in the pause makes a slightly lower low; sellers have a little more room. In a pennant, the swings narrow from both sides; the market is going quiet. Some traders read the pennant's tightening as slightly more coiled. That reading is plausible, but we know of no reliable evidence that one beats the other, and we have not tested them ourselves.

In practice, the same pause can look like a flag or a pennant depending on whether you draw lines through wicks or closes. Traders who argue hard about which one it is are usually missing the bigger questions: was the pole real, is the pause short, and is there room above?

## When it is neither

- **The pause is too long.** If the rest lasts longer than the pole took to form, many traders stop calling it a flag or pennant. It may be turning into a rectangle or a larger triangle.
- **The pause is too deep.** If price gives back more than about half the pole, the rise has lost its momentum. That is a pullback, not a flag.
- **The pennant gets too big.** A pennant is small compared with the pole. A large triangle after a rise is a [symmetrical triangle](/symmetrical-triangle/), with its own rules.

## Worked example in R

This is an illustration with round numbers, not a real trade.

A share rises from 20.00 to 25.00 in six days. That is the pole: 5.00.

**Version A, a flag.** Over the next five days it drifts down in a channel to 23.90, with the upper line falling to 24.40. It closes at 24.60.

- Entry: next open, 24.65. Stop: below the flag low, 23.85. Risk: 0.80.
- Target: 24.40 + 5.00 = 29.40. Reward: 4.75. That is 5.9R.

**Version B, a pennant.** Over five days the swings narrow between 24.20 and 24.80, converging near 24.50. It closes at 24.90.

- Entry: next open, 24.95. Stop: below the pennant low, 24.15. Risk: 0.80.
- Target: 24.75 + 5.00 = 29.75. Reward: 4.80. That is 6.0R.

The two trades are almost identical in R. What matters more is what the numbers hide: a full pole-length target means price has to repeat the whole sharp rise. Many traders treat the measured move as a ceiling to watch rather than a place to wait for, and take some profit at 2R or 3R. The answer on [measured moves](/answers/what-is-a-measured-move/) covers that.

On a five-minute chart, the same example would have a risk of a few cents, and the spread could easily be a tenth of R or more. Costs matter more the smaller the pattern.

## Verdict

A bull flag and a pennant are two drawings of one idea: a short rest after a sharp rise. The flag rests in a channel, the pennant in a small triangle, and they share the same trigger, stop and target. Spend less time naming the shape and more time checking the pole, the depth of the pause and the room above. For the rest of the continuation family, see the [chart patterns guide](/guide/chart-patterns/).
