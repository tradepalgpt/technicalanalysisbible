---
slug: macd-vs-rsi-which-to-use
title: "MACD vs RSI: which should you use?"
description: MACD and RSI both measure momentum, but MACD is unbounded and slower while RSI is bounded. When each fits, how they disagree, and whether to use both.
query: macd vs rsi
pillar: rsi-and-momentum-oscillators
publish: 2027-04-12
reviewed: 16 November 2026
guides: [macd, rsi, ppo, macd-histogram]
siblings: [how-many-oscillators-should-you-use, momentum-vs-rate-of-change]
value: [chart, table, example, verdict]
chart: macd
---

Use MACD for trend direction and strength, and RSI for how stretched or balanced recent moves are. Both measure momentum. MACD is unbounded, slower and in price units; RSI is bounded from 0 to 100. They overlap less than RSI and the stochastic do, so using one of each can make sense.

## What each one measures

**[MACD](/macd/)**, from Gerald Appel: the 12-period EMA minus the 26-period EMA, with a 9-period EMA of that difference as the signal line. The [MACD histogram](/macd-histogram/) is the gap between the two lines. It measures the speed of the trend: when price accelerates, the fast average pulls away from the slow one.

**[RSI](/rsi/)**, from J. Welles Wilder: 100 x average gain / (average gain + average loss), over 14 bars with Wilder's smoothing. It measures how one-sided recent moves have been.

| | MACD | RSI |
|---|---|---|
| Built from | Two exponential averages of price | Average gains vs average losses |
| Scale | Unbounded, in price units | 0 to 100 |
| Default | 12, 26, 9 | 14; 70 / 30 |
| Speed | Slower | Faster |
| Key lines | Zero line, signal line | 70, 30, 50 |
| Fixed overbought levels | No | Yes |
| Best at | Trend direction and strength, momentum shifts | Range timing, trend bands, stretch |
| Comparable across markets | No (use PPO for that) | Yes |

## They disagree in useful ways

Because MACD is in price units and unbounded, a stronger move shows as a larger MACD. RSI flattens near 100. Because RSI is faster, it often turns before MACD.

### A worked example

A share at 50 rallies steadily to 60 over five weeks.

- **Week 1 to 2.** RSI climbs from 50 to 72. MACD crosses above its signal line and above zero. Both say momentum is up.
- **Week 3 to 4.** RSI hovers between 70 and 76. MACD keeps rising; the gap between the 12 and 26 EMAs widens as the rally continues. RSI says "stretched"; MACD says "trend accelerating". Both are true.
- **Week 5.** The rally slows; price inches from 59 to 60. RSI drops to 62. The MACD histogram shrinks: the line is still above zero and above the signal, but the gap is narrowing. Both now say momentum is fading. Neither says the trend has turned.

If the share then falls back to 56, MACD crosses below its signal line, still above zero: a momentum shift inside an uptrend. RSI might sit around 45: the normal uptrend pullback zone.

In this example, RSI told the trader earlier that the move was stretched and later that the pullback was ordinary. MACD told them the trend was strong and when its speed was fading. That is complementary information.

## When MACD fits better

- **Trend following.** Zero-line crosses and the distance from zero describe trend direction and strength.
- **Momentum shifts within a trend.** The histogram shrinking shows slowing earlier than the lines cross.
- **Divergence over longer swings.** MACD's slow line gives clear peaks over weeks.

## When RSI fits better

- **Ranges.** RSI's 70/30 and the range edges often line up. MACD in a range drifts around zero and crosses its signal line often.
- **Comparing markets.** RSI at 70 means roughly the same everywhere. MACD of 2.0 means something very different on a stock at 20 and one at 2,000. [PPO](/ppo/), MACD expressed as a percentage, fixes that.
- **Defined extreme levels.** MACD has no fixed overbought line.

## Using both

RSI and MACD overlap less than most oscillator pairs. RSI is a bounded measure of the gain-loss balance; MACD is an unbounded measure of the gap between two averages. A common split:

1. MACD (or its zero line) for direction: is momentum broadly up or down?
2. RSI for timing within that direction: is the pullback ordinary (40 to 50 in an uptrend) or deep?
3. Price for the trigger and the stop.

What does not help is waiting for both to "confirm" a reversal. MACD's crossover usually comes later than RSI's turn, so requiring both makes entries later without adding much new information. [How many oscillators should you use at once?](/answers/how-many-oscillators-should-you-use/) looks at which pairs overlap most.

## A note on divergence

Divergence on MACD and on RSI often appears at the same peaks. When they disagree, it is usually because MACD's slower averages still remember a strong move that RSI has partly forgotten. Agreement between the two is not twice the evidence, because both are built from the same closes.

## Verdict

Neither is better in general. MACD is a slower, unbounded measure of trend speed: good for direction, strength and momentum shifts. RSI is a faster, bounded measure of the gain-loss balance: good for ranges, extremes and pullback zones. They are different enough that one of each can be a sensible pair, with MACD for direction and RSI for timing, as long as price still gives the trigger. If you only want one, choose MACD for trend-following and RSI for range or pullback work.
