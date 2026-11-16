---
slug: what-does-rsi-divergence-mean
title: What does RSI divergence mean?
description: RSI divergence means price and RSI disagree at two swing points, so the move is slowing. A worked example, why it misleads, and how traders use it.
query: rsi divergence meaning
pillar: rsi-and-momentum-oscillators
publish: 2027-03-12
reviewed: 16 November 2026
guides: [divergence, rsi, hidden-divergence, support-and-resistance]
siblings: [what-is-hidden-divergence, what-is-an-rsi-failure-swing]
value: [chart, table, example, verdict]
chart: divergence
---

RSI divergence means price and RSI disagree at two swing points: price makes a new high but RSI makes a lower high, or price makes a new low but RSI makes a higher low. It shows the move is slowing. It does not say when, or whether, price will turn.

## The two kinds

| Type | Price | RSI | What it says |
|---|---|---|---|
| Bearish divergence | Higher high | Lower high | The second push up was slower |
| Bullish divergence | Lower low | Higher low | The second push down was slower |

The [divergence](/divergence/) guide covers the general idea for any oscillator. This post looks at what it means on [RSI](/rsi/) specifically, using the numbers inside the indicator.

## What is happening inside RSI

RSI compares average gains with average losses. A lower RSI high on a higher price high means that, over the 14 bars before the second peak, the gains were less dominant than they were before the first peak. The second rally may have been shorter, choppier, or interrupted by bigger down days.

### A worked example

A share rallies to 50 with RSI at 76. It pulls back to 47, then rallies again to a new high of 51. RSI peaks at 68.

Why might RSI be lower? Suppose the first rally was ten up days in a row of about 0.50 each, with almost no down days. The average gain was high and the average loss tiny: RSI was in the high 70s. The second rally reached a higher price, but it came after a pullback of 3 points that loaded the average loss, and it took 12 days with four down days along the way. Average losses were higher at the second peak, so RSI was lower even though price was higher.

That is all divergence is: the second move was less one-sided than the first.

## Why divergence misleads

### It is the default on a bounded scale

RSI cannot go above 100, and it gets harder to push higher the closer it gets. If the first rally takes RSI to 80, a second rally of the same size will often fail to beat it, because the pullback in between has raised the average loss. In a strong trend, a run of lower RSI highs under higher price highs is common. Each one looks like a warning; few lead to anything.

### It does not time anything

A rally can print bearish divergence three or four times in a row, each a lower RSI peak under a higher price peak, while price keeps climbing. Selling the first divergence means selling early, possibly much too early.

### Swing points are only clear afterwards

A swing high is only a swing high once price has fallen away from it. In real time, you do not know if today's high is the second peak or just a step towards a higher one. Divergences drawn on a finished chart always look cleaner than they did as they formed. This also matters for backtesting: code that marks the divergence on the peak bar, using later bars to confirm it, is using the future.

## How traders use it

Experienced users treat divergence as a warning that needs company.

1. **A level.** Bearish divergence into a known [resistance](/support-and-resistance/) level matters more than in open space.
2. **A trigger.** A price signal: a break of the rally's trend line, a lower low on the lower timeframe, a bearish engulfing candle. Divergence says "tiring"; the trigger says "turning".
3. **An RSI trigger.** Some use RSI's own pullback low between the two peaks. A break below it after the divergence is close to Wilder's [failure swing](/answers/what-is-an-rsi-failure-swing/).
4. **A stop above the second peak.** If price makes a third higher high, the divergence idea has failed for now.

### The same example, traded

Back to the share: first peak at 50 (RSI 76), pullback to 47 (RSI dropped to 45), second peak at 51 (RSI 68). Now say 51 is just below a prior high of 51.20 from last year.

- Warning: bearish divergence.
- Level: last year's high just above.
- Trigger: three days later price breaks the short rising trend line from 47 and closes at 49.80.

A trader might sell at 49.80 with a stop above 51.30. Risk 1.50 (1R). A 2R target is 46.80, just below the pullback low of 47, which is a natural place for buyers to show up. That target sitting near a level is part of the read too.

Without the level and the trigger, the divergence alone would have been a reason to watch, not to act.

## Regular versus hidden divergence

Regular divergence compares peaks (in rallies) or troughs (in falls) and is read as a sign of slowing. [Hidden divergence](/hidden-divergence/) compares the pullbacks within a trend and is read as continuation: in an uptrend, price makes a higher low while RSI makes a lower low. The two are often confused because both involve "disagreement". [What is hidden divergence?](/answers/what-is-hidden-divergence/) sets the four types side by side.

## Bullish divergence

Everything above applies in reverse. Price makes a lower low; RSI makes a higher low. The second fall was less one-sided. Near a support level, with a trigger such as a reclaim of a broken level or a bullish engulfing candle, it can support a long case. In a strong downtrend, it can repeat several times while price keeps falling.

## Verdict

RSI divergence means the second move was less one-sided than the first: momentum is slowing. That is real information, and it is why the signal is so popular. On its own it is a poor timing tool, because it is the normal result of a bounded scale and can repeat many times before a turn. Use it as a warning at a level, wait for a price trigger, and put the stop beyond the second swing.
