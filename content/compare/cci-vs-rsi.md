---
slug: cci-vs-rsi
title: CCI vs RSI
a: cci
b: rsi
reviewed: 14 November 2026
---

CCI and RSI are both momentum oscillators, but they measure different things and have different scales. RSI compares the size of recent gains with recent losses and is capped between 0 and 100. CCI measures how far the typical price sits from its average, scaled by normal variation, and has no cap. CCI shows how extreme a move is; RSI is easier to compare across markets.

## At a glance

| | CCI | RSI |
|---|---|---|
| Measures | Distance of typical price from its average | Average gains vs average losses |
| Created by | Donald Lambert, 1980 | J. Welles Wilder Jr., 1978 |
| Default settings | 20 periods; levels +100 / -100 | 14 periods; levels 70 / 30 |
| Scale | Unbounded, often +/-100 to +/-300 | 0 to 100 |
| Inputs | High, low and close (typical price) | Closes only |
| Original reading | Above +100 starts a strong uptrend | Above 70 is overbought |
| Best market states | Range, reversal, trend | Range, reversal |

## When to use CCI

[CCI](/cci/) suits traders who want to see how stretched a move is. Because there is no upper or lower limit, a reading of +200 or -200 shows a very extended move. It can serve trend traders, who read a break above +100 as strength, and range traders, who read +100 and -100 as edges. Those two readings are opposite, so choose one rule per market state.

## When to use RSI

[RSI](/rsi/) suits traders who want a bounded, familiar gauge. Its 0 to 100 scale makes readings easy to compare across markets and time frames. The 50 line works as a simple trend filter, and divergence and failure swings are widely watched. It is weak in strong trends, where it can stay above 70 or below 30 for a long time.

## Using both together

Both are momentum tools, so agreement is weaker confirmation than agreement with a different kind of evidence. Some traders use RSI divergence and look at CCI for how extreme the move was. A trend filter such as [ADX](/adx/) helps decide whether to use range or trend readings. Context from [support and resistance](/support-and-resistance/) matters more than a second oscillator.

## Common mix-ups

- **Assuming CCI is capped like RSI.** It can run far beyond +/-100.
- **Using +100 and 70 as the same level.** The scales and calculations differ.
- **Treating +100 as an automatic sell.** Lambert read it as a possible trend start.
- **Comparing values across platforms.** Averaging methods differ.
- **Counting two oscillators as two confirmations.** They measure related things.

## FAQ

**Is CCI better than RSI?**
Neither is better in general. RSI is bounded and smoother to read. CCI is unbounded and shows how extreme a move is. Pick by how you trade, and test on your own market.

**What is the main maths difference?**
RSI uses Wilder's smoothed average of gains and losses. CCI uses typical price, a simple moving average of it and mean deviation, with a 0.015 scaling constant.

**Do they use the same default period?**
No. RSI defaults to 14 periods and CCI to 20.

**Which suits trending markets?**
CCI has a documented trend reading, a break above +100, while RSI is generally weak in strong trends. Neither is reliable alone.
