---
slug: best-ema-for-scalping
title: What is the best EMA for scalping?
description: No EMA setting is best for scalping. What scalpers commonly use, why costs and noise matter more than the period, and a worked trade with spread in R.
query: best ema for scalping
pillar: moving-averages
publish: 2027-04-30
reviewed: 16 November 2026
guides: [exponential-moving-average, tick-charts, risk-reward-ratio]
siblings: [best-moving-average-for-day-trading, 9-ema-vs-20-ema]
value: [table, example, verdict]
---

No EMA setting is best for scalping. Scalpers most often use short EMAs such as the 8, 9 or 13, sometimes with a 21 or 50 for direction, on 1-minute or tick charts. On these charts, spread and noise matter far more than whether the line is a 9 or a 10.

## What scalping asks of an average

Scalping means holding trades for seconds to a few minutes, aiming for small moves. On a 1-minute chart, a 9-period [exponential moving average](/exponential-moving-average/) covers nine minutes. It closes 20% of the gap to price each bar, so it hugs price closely. That is the appeal: it shows the direction of the last few minutes and gives a nearby line for entries and exits.

The problem is that the last few minutes are mostly noise. A very short average follows that noise, crossing price back and forth many times an hour. Each cross can look like a signal.

## Common scalping setups

| Setup | Lines | Chart | Idea |
|---|---|---|---|
| Single fast line | 9 EMA | 1-minute | Trade in the direction of its slope; enter on touches |
| Fast/slow pair | 8 and 21 EMA | 1-minute | Trade only when 8 is above 21 (long) or below (short) |
| Three-line stack | 9, 21, 50 EMA | 1 to 3 minutes | Trade only when the three are stacked in order |
| Tick chart line | 9 or 20 EMA | Tick bars | Bars form on trade count, not time |

These are common choices, not tested settings. Moving from 8 to 9 to 10 makes very little difference to the line. The structure of the rule (when to trade, when to stay out) makes a much bigger one.

[Tick charts](/tick-charts/) build a new bar after a set number of trades rather than a set time. In quiet spells, bars form slowly; in busy spells, quickly. Some scalpers prefer them because an EMA on tick bars speeds up when activity does.

## Costs decide most scalping results

On a 1-minute chart, typical moves are small. The spread and commission do not shrink with them. That makes costs the biggest single factor in whether a scalping rule can work.

### A worked trade in R

A trader scalps a currency pair with a 9 EMA and a 21 EMA on 1-minute bars. Rule: when the 9 is above the 21 and both slope up, buy a touch of the 9 EMA that closes back above it.

- Entry at 1.08420. Stop 4 pips below, at 1.08380. Risk = 4 pips = 1R.
- Target 6 pips above, at 1.08480. Reward = 1.5R before costs.
- Spread = 0.8 pips.

In effect the spread adds about 0.8 pips to every loss and takes about 0.8 pips off every win. So the real risk is about 4.8 pips and the real reward about 5.2 pips. The trade that looked like 1.5R is about 1.08R after the spread. Add commission and it shrinks further.

On a daily swing trade, a spread of 0.8 pips against a 60-pip stop is barely noticeable. On a 4-pip scalp it is a fifth of the risk. This is why the period of the EMA is a small question next to the cost of each trade. See [risk-reward ratio](/risk-reward-ratio/).

## Noise and the quiet hours

A 9 EMA on a 1-minute chart is useful when the market is moving. In quiet periods, it flattens and price crosses it repeatedly. Some filters scalpers use:

- Trade only in the busiest hours for that market.
- Require the slow line (21 or 50) to have a clear slope.
- Require a minimum distance between the fast and slow lines, so they are not tangled.
- Stop for the day after a set number of losses, as a guard against a choppy session.

Each filter reduces trades. For scalping, fewer trades can mean lower total costs, which can matter more than the signals you miss.

## What about faster averages?

Some scalpers try [Hull](/hull-moving-average/) or [DEMA](/dema/) lines for less lag. They do turn sooner. They also overshoot and react to more noise. On 1-minute bars, where noise is already the main problem, a faster line often makes things worse rather than better. See [which moving average has the least lag](/answers/which-moving-average-has-the-least-lag/).

## Testing a scalping EMA honestly

Scalping rules are hard to test fairly:

1. **Use bid and ask, not just mid-prices.** Fills happen at the spread, and spreads widen at news and in quiet hours.
2. **Fill at the next bar or tick,** not at the close of the signal bar.
3. **Count slippage.** Stop orders in fast markets often fill worse than the stop price.
4. **Do not tune the period.** With thousands of 1-minute bars, some EMA setting will look excellent by chance.

## Verdict

A 9 EMA on a 1-minute chart, perhaps with a 21 for direction, is the most common scalping setup, and it is as reasonable as any. No EMA period makes scalping work by itself. What decides results is cost per trade, the hours you trade and the discipline to stay out of chop. Start with [the moving averages guide](/guide/moving-averages/) for how EMAs behave.
