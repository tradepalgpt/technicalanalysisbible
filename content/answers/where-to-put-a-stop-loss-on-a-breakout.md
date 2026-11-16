---
slug: where-to-put-a-stop-loss-on-a-breakout
title: Where should you put a stop loss on a breakout?
description: Four common stop places for a breakout trade, from tight to wide, compared in one table, with a worked example showing how each changes the trade in R.
query: stop loss on a breakout trade
pillar: chart-patterns
publish: 2027-02-08
reviewed: 16 November 2026
guides: [stop-loss, structure-stop, atr-stop, breakout-trading]
siblings: [should-you-wait-for-a-retest-after-a-breakout, what-is-a-false-breakout]
value: [table, example, verdict]
---

Most traders put a breakout stop either just back inside the broken line, below the last swing inside the pattern, or beyond the whole pattern. Tighter stops make the R multiple look larger but are hit more often by normal retests. The right choice is the one that marks where your idea is clearly wrong.

## What a stop is for

A [stop loss](/stop-loss/) is the price at which you accept you were wrong. For a [breakout trade](/breakout-trading/), "wrong" means the break has failed: price has gone back into the pattern and the reason for the trade has gone. The question is how far back inside counts as failure.

Too close, and an ordinary wobble or retest takes you out before the move. Too far, and each loss is large and the target is worth little in R.

## Four common stop places

| Stop place | Where exactly | Risk size | Hit by a normal retest? | Hit only if the pattern clearly fails? |
|---|---|---|---|---|
| Below the breakout bar | Under the low of the bar that closed beyond the line | Smallest | Often | No |
| Just inside the line | A buffer below the broken line, such as a fraction of the average range | Small | Sometimes | No |
| Last swing inside the pattern | Below the most recent swing low before the break | Medium | Rarely | Mostly |
| Beyond the whole pattern | Below the pattern's low (or above its high) | Largest | Almost never | Yes |

A fifth common choice is a volatility stop: a multiple of the [average true range](/atr/) from the entry. The [ATR stop](/atr-stop/) guide covers that. It adapts to the market's normal movement but ignores the pattern's structure.

The [structure stop](/structure-stop/) guide covers the logic of placing stops at swings, which is what the third and fourth rows are.

## Worked example in R

This is an illustration with round numbers, not a real trade.

A share forms an ascending triangle with a flat top at 40.00. The lows inside it are 34.00, 36.00 and 37.50. The average daily range is 1.00. Price closes at 40.50 on a bar whose low is 39.60. Entry is the next open, 40.60. The measured target is 40 + 6 = 46, a reward of 5.40.

| Stop place | Stop | Risk (1R) | Target in R |
|---|---|---|---|
| Below the breakout bar | 39.50 | 1.10 | 4.9R |
| Just inside the line (half the daily range) | 39.50 | 1.10 | 4.9R |
| Below the last swing low | 37.40 | 3.20 | 1.7R |
| Below the whole pattern | 33.90 | 6.70 | 0.8R |

Same trade, four different risk profiles. Now think about what each stop is betting on.

- **39.50** bets that price will not come back to test 40 by more than half a day's range. Retests of a broken level are common, so this stop will often be hit even when the breakout eventually works.
- **37.40** bets that the rising lows hold. If price falls back below the last higher low, the triangle's story of eager buyers is wrong. That is a structural reason.
- **33.90** gives the pattern every chance but turns a 6-point measured move into a trade worth less than 1R.

Most textbook descriptions favour the third row: the last swing inside the pattern. It is a compromise between giving the trade room and keeping the reward worth the risk.

## Tight stops and the retest

Many breakouts come back to the line before moving on. The answer on [whether to wait for a retest](/answers/should-you-wait-for-a-retest-after-a-breakout/) explains this in more detail. A trader who knows this can do one of two things with a tight stop:

1. **Accept being stopped and re-enter.** Take the 1R loss when the retest hits the stop, then buy again if price holds the line and turns up. This costs extra losses and spreads, but each is small.
2. **Wait for the retest to enter.** Then the stop can go just under the retest low, which is often both tight and structural.

## Costs and gaps

- **Spread.** Every stop pays the spread on the way out. On a tight stop, that can be a meaningful share of R. Include it when sizing.
- **Gaps.** A stop is an instruction, not a promise of a price. If a share gaps below your stop overnight, you are filled at the open, which can be well below it. A loss of more than 1R is possible.
- **Round numbers.** Stops placed exactly on obvious levels, such as 40.00 or a swing low, sit in a crowd. Many traders put theirs a little beyond.

## Size from the stop, not the other way round

Choose the stop by structure first. Then size the position so that the stop distance equals the amount you are willing to lose. Moving the stop closer to fit a larger position is a common way to turn a sound trade into a likely loser. The [position sizing](/position-sizing/) guide shows the arithmetic.

## Verdict

There is no single correct breakout stop. The common default, below the last swing inside the pattern, marks a clear point where the pattern has failed while keeping the target worth taking. Tighter stops look better in R but are often hit by normal retests; wider stops are rarely hit but shrink the reward. Pick the stop by where the idea is wrong, size the trade to fit it, and count the spread. See the [chart patterns guide](/guide/chart-patterns/) for stop examples on other patterns.
