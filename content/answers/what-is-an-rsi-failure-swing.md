---
slug: what-is-an-rsi-failure-swing
title: What is an RSI failure swing?
description: An RSI failure swing is Wilder's own RSI signal, read from the RSI line alone. How tops and bottoms form, a worked example, and how it differs from divergence.
query: rsi failure swing
pillar: rsi-and-momentum-oscillators
publish: 2027-04-02
reviewed: 16 November 2026
guides: [rsi-failure-swing, rsi, divergence]
siblings: [what-does-rsi-divergence-mean, is-rsi-above-70-a-sell-signal]
value: [chart, table, example, verdict]
chart: rsi-failure-swing
---

An RSI failure swing is J. Welles Wilder's own RSI signal. In a top failure swing, RSI rises above 70, pulls back, fails to make a new high on the next rally, then breaks below its pullback low. A bottom failure swing is the mirror below 30. It uses only the RSI line, not price.

## Where it comes from

Wilder introduced [RSI](/rsi/) in *New Concepts in Technical Trading Systems* (1978) and described the failure swing in the same book as one of the indicator's key signals. It is less well known than overbought and oversold or divergence, though it has something both of those lack: a defined trigger.

## The steps

**Top failure swing (bearish):**

1. RSI rises above 70.
2. RSI pulls back. The low of this pullback is the **failure point**.
3. RSI rallies but fails to beat its first peak. (Many versions also require that it stays below 70.)
4. RSI falls below the failure point. **That break is the signal.**

**Bottom failure swing (bullish):**

1. RSI falls below 30.
2. RSI bounces. The high of this bounce is the failure point.
3. RSI falls again but holds above its first low.
4. RSI rises above the failure point. That is the signal.

The [failure swing](/rsi-failure-swing/) guide has the full rules and variations.

## A worked example (top)

| Day | Price | RSI(14) | Step |
|---|---|---|---|
| 1 | 84.20 | 74 | Above 70 (step 1) |
| 4 | 83.10 | 62 | Pullback low: failure point = 62 (step 2) |
| 7 | 84.60 | 68 | Rally fails below 74 and below 70 (step 3) |
| 9 | 82.70 | 59 | RSI breaks 62 (step 4): signal |

Notice day 7: price made a new high (84.60 above 84.20) while RSI made a lower high (68 below 74). That is also bearish [divergence](/divergence/). A failure swing and a divergence often happen together, but they are not the same thing. A failure swing can happen without a new price high, and a divergence does not need RSI to break anything.

A trader acting on it might sell at day 9's close, 82.70, with a stop above the day 7 high, at 84.80. Risk 2.10 (1R). A 2R target sits at 78.50.

## Failure swing versus divergence

| | Failure swing | Divergence |
|---|---|---|
| Uses | RSI only | Price and RSI |
| Needs RSI above 70 or below 30 first | Yes (in Wilder's version) | No |
| Has a defined trigger | Yes: break of the failure point | No; needs a separate trigger |
| Needs swing-point judgement | A little (the pullback low) | Yes, on both price and RSI |
| Main weakness | Fires on ordinary pullbacks in trends | Repeats many times before a turn |

The trigger is the failure swing's main strength. Divergence says "momentum is fading"; it never says when to act. The failure swing does: when RSI breaks a specific level.

## Why it fails in strong trends

In a strong uptrend, RSI often rises above 70, pulls back to 55 or 60, rallies to 68, then dips below its earlier pullback low to around 50, and then the trend resumes. Each step of a top failure swing can complete on what is really a normal pullback. In trends, RSI's pullbacks tend to hold around 40 to 50; a break of 62 down to 55 is still inside that zone.

That makes the failure swing most useful where RSI's other readings are also most useful: near the end of a range rally, or at a known resistance level, rather than in the middle of a strong trend.

A simple check: after a top failure swing, ask where RSI has stopped in the last few pullbacks. If they all held around 45 and the failure swing has taken RSI to 58, the trend has not yet broken its pattern. If RSI then falls through 45, it has.

## Watching it in real time

The failure point is only known once RSI has turned back up from it, so there is a short delay in marking it. The signal itself, the break of that level, is clear on the bar it happens. This makes the failure swing easier to test fairly than divergence: as long as the failure point is marked only after the rally from it has started, there is no hidden use of future bars.

## Verdict

The RSI failure swing is Wilder's own signal and the most rule-based way to read RSI tops and bottoms. Its defined trigger makes it more usable than divergence on its own. Like every RSI signal, it fires on ordinary pullbacks in strong trends, so it works best near the end of a range move or at a known level, with a stop placed on the price chart rather than the indicator. See also [Is RSI above 70 a sell signal?](/answers/is-rsi-above-70-a-sell-signal/) for what comes before step 1.
