---
slug: what-is-hidden-divergence
title: What is hidden divergence?
description: Hidden divergence is when price holds a higher low but the oscillator makes a lower low in an uptrend. What it means, how it differs, and its weak points.
query: hidden divergence explained
pillar: rsi-and-momentum-oscillators
publish: 2027-03-19
reviewed: 16 November 2026
guides: [hidden-divergence, divergence, rsi, macd]
siblings: [what-does-rsi-divergence-mean, what-is-the-rsi-50-line-used-for]
value: [chart, table, example, verdict]
chart: hidden-divergence
---

Hidden divergence is a disagreement between price and an oscillator at pullbacks within a trend. In an uptrend, price makes a higher low while the oscillator makes a lower low. It is read as a sign the trend may continue, the opposite of regular divergence.

## The four types side by side

Regular and hidden divergence are easy to mix up because both are "price and indicator disagree". The difference is which swing points you compare and what you conclude.

| Type | Swing points compared | Price | Oscillator | Read as |
|---|---|---|---|---|
| Regular bearish | Peaks in a rally | Higher high | Lower high | Uptrend tiring |
| Regular bullish | Troughs in a fall | Lower low | Higher low | Downtrend tiring |
| Hidden bullish | Pullback lows in an uptrend | Higher low | Lower low | Uptrend continuing |
| Hidden bearish | Rally highs in a downtrend | Lower high | Higher high | Downtrend continuing |

A quick memory aid: in **regular** divergence, price makes the more extreme point (higher high, lower low). In **hidden** divergence, the oscillator does.

The [hidden divergence](/hidden-divergence/) guide covers the idea for any oscillator. The [divergence](/divergence/) guide covers the regular kind. [What does RSI divergence mean?](/answers/what-does-rsi-divergence-mean/) explains the regular kind on RSI with numbers.

## Why it reads as continuation

Take an uptrend. Price pulls back to 48, rallies to 55, then pulls back again to 50. The second pullback low (50) is higher than the first (48): the price structure is intact.

On [RSI](/rsi/), the first pullback took RSI to 42. The second took it to 36.

How can a shallower price pullback produce a deeper RSI dip? Because RSI measures how one-sided the recent moves were, not how far price fell. The second pullback was sharp: several red days in a row, with little bounce. That loaded the average loss heavily. In price terms it only went back 5 points from 55, but it went there quickly.

The reading people take from this: sellers produced a sharp burst of momentum and still could not push price below the last low. Buyers held the structure. That is a sign of a trend with support beneath it.

## The weak points

### It needs a trend you already trust

Hidden divergence only means something if there is a trend. In a range, "higher low with lower RSI low" is just noise between the edges. So the first step is deciding the trend with something else: price structure, a rising longer moving average, or RSI living in its uptrend band (pullbacks holding around 40 to 50). [What is the RSI 50 line used for?](/answers/what-is-the-rsi-50-line-used-for/) covers that band.

### It is subjective

Which pullback lows do you compare? The last two? The last two that dropped RSI below 50? Different choices give different signals. On a finished chart it is easy to find hidden divergence before every rally and forget the ones that came before a breakdown.

### It is confirmed only after the low

A higher low is only visible once price has turned up from it. By the time you can see the pattern, the bounce has started. Code that marks hidden divergence on the low bar itself, using later bars to confirm the low, is looking into the future.

### It fails at the end of every trend

Every uptrend eventually ends. The last pullback before the trend breaks may also show a higher low and a lower RSI low. Hidden divergence cannot tell you it is the last one.

## A worked example

A share is in a clear uptrend above its rising 50-day average.

- First pullback: low at 48.00, RSI(14) low of 42.
- Rally to 55.20.
- Second pullback: low at 50.40, RSI low of 36. Higher price low, lower RSI low: hidden bullish divergence.
- The next day price closes at 51.30, above the previous day's high. That is the trigger.

A trader might buy at 51.30 with a stop just below the higher low, at 50.20. Risk 1.10 (1R). A 2R target at 53.50 sits below the last high of 55.20, so the target does not depend on a new high.

If price instead breaks below 48.00, the first low, the structure of higher lows is gone and the hidden-divergence read was wrong. That is a clear invalidation point.

## Which oscillator?

Hidden divergence is drawn most often on RSI and [MACD](/macd/). RSI's bounded scale makes the lows easy to compare. MACD's unbounded line shows how big the momentum dip was, which some traders prefer for this purpose. Faster oscillators such as the stochastic produce many more small hidden divergences, most of them noise.

## Verdict

Hidden divergence describes a sharp pullback that failed to break the trend's structure. That is a real and useful description in a trend you already trust. It is subjective, visible only after the low, and silent about which pullback is the last one. Treat it as a reason to look for a continuation entry at a higher low, with a price trigger and a stop beyond the low, not as a signal on its own.
