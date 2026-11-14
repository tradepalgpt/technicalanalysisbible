---
slug: disparity-index
name: Disparity Index
aka: [Disparity Ratio, Percent Disparity, Deviation from Moving Average]
type: momentum-oscillator
states: [reversal]
weak_states: [trend]
purposes: [filter]
inventor: Not attributed to one person
year: Unknown
default_settings: "14 periods (10 to 25 is common); simple or exponential moving average"
pairs_with: [support-and-resistance, bollinger-bands, rsi, simple-moving-average]
related: [rate-of-change, momentum-indicator, apo, ppo, moving-average-envelope]
compare: []
glossary: [overbought, oversold, oscillator, lookback-period, momentum]
wave: 3
reviewed: 14 November 2026
---

The Disparity Index measures how far the latest close is from a moving average, as a percentage of that average. A reading of +4 means price is 4% above its average; -4 means 4% below. Traders use it as a filter to spot stretched prices that may snap back toward the average, and to see whether a move is losing energy.

## At a glance

| | |
|---|---|
| Type | Momentum oscillator |
| Best market states | Reversal |
| Weak in | Strong trends |
| Best uses | Filter |
| Default settings | 14 periods; no fixed overbought or oversold levels |
| Created by | Not attributed to one person |
| Leading or lagging | Lagging (built from a moving average), though stretched readings can warn early |

## What is the Disparity Index?

Prices tend to wander away from their moving average and then drift back. The Disparity Index puts a number on that gap. Because it is a percentage, it can be compared across markets with very different prices.

The idea is old and has no single named inventor. It is often described as a Japanese tool. Sources differ on the exact history, so this guide does not name an inventor.

It is closely related to the [Percentage Price Oscillator (PPO)](/ppo/) and the [Absolute Price Oscillator (APO)](/apo/), which also compare two averages. The Disparity Index compares price itself with one average instead.

## Formula

Disparity Index = (Close - Moving average) / Moving average x 100

The moving average is usually a simple one over 14 bars, but an exponential average is common too. Check which type your platform uses.

**Worked example.** The 14-bar average is 50 and the close is 52.
Disparity = (52 - 50) / 50 x 100 = 2 / 50 x 100 = **+4**

If the next close is 47 with the average still at 50, the reading is (47 - 50) / 50 x 100 = **-6**.

There is no built-in ceiling or floor. The indicator is unbounded, so useful "stretched" levels depend on the market and must be found from that market's own history.

## How to read it

**Zero line.** Above zero, price is above its average. Below zero, it is below. A cross of zero is the same information as price crossing the average.

**Stretched readings.** When the index reaches a level it has rarely passed before in that market, price is far from its average. Mean-reversion traders watch these extremes for a pullback toward the average. There is no standard number: +5% may be extreme for a currency pair and ordinary for a small-cap stock.

**Peaks and turns.** A peak in the index that is lower than the previous peak, while price keeps rising, shows the gap to the average is shrinking. That is a mild sign of fading momentum.

**Filter use.** Some traders skip new entries when the index is already stretched in the direction of the trade, on the idea that the easy part of the move has gone.

## Best market states

**Reversals (the main use).** After a sharp run away from the average, extremes in the index can mark where a pause or pullback is more likely. It works best when combined with a price signal at a known level.

**Ranges (useful).** In a sideways market the average sits in the middle, so extremes line up with the edges of the range. The tool is also listed here for reversals only, because range edges are better judged by price structure.

**Strong trends (weak).** In a strong trend price can stay far from its average for a long time. The index will sit at "extreme" readings and fade signals will keep failing.

**Breakouts and volatility.** A breakout usually pushes the index to a new extreme. That reflects strength, not an automatic reason to fade. The index does not measure volatility, but volatile markets stretch it more often.

## Settings

| Setting | Period | What it does |
|---|---|---|
| Short | 5 to 10 | Reacts fast, reaches extremes often, more noise |
| Default | 14 | Common starting point on most platforms |
| Long | 20 to 25 | Smoother, fewer extremes, slower to react |

A longer period moves the average further behind price, so readings get larger and less frequent. Because levels depend on the period and the market, set them by looking at past peaks on your own chart rather than copying fixed numbers.

## Common mistakes

- Copying "overbought" and "oversold" numbers from another market or time frame.
- Fading every extreme in a trending market.
- Forgetting that a simple and an exponential average give different readings.
- Treating the index as bounded like RSI. It is not.
- Using it as a stand-alone entry trigger with no price signal.
- Changing the period until past data fits, then expecting it to hold.

## Pairs well with

- **[Support and resistance](/support-and-resistance/)**: a stretched reading at a known level is more meaningful than one in open space.
- **[Bollinger Bands](/bollinger-bands/)**: also measures distance from a moving average, scaled by volatility, which helps judge what "far" means.
- **[RSI](/rsi/)**: a bounded momentum reading to cross-check a stretched index.
- **[Simple moving average](/simple-moving-average/)**: the average the index is built on, useful for seeing the gap directly on the chart.

## Sources

- Murphy, John J. (1999). *Technical Analysis of the Financial Markets*. New York Institute of Finance. (General background on moving averages and oscillators; it does not define this indicator.)

## FAQ

**What is a good Disparity Index level?**
There is no universal level. The index is unbounded, so what counts as stretched depends on the market, the time frame and the period. Look at where past turns happened on your own chart and use those as a guide.

**Is the Disparity Index the same as the percentage distance from a moving average?**
Yes. That is exactly what it measures. Different charting platforms label it Disparity Index, Disparity Ratio or Percent Disparity, but the formula is the same.

**How is it different from the PPO?**
The PPO compares two moving averages and shows the gap as a percentage. The Disparity Index compares the close with one moving average. The Disparity Index reacts faster because the close is more volatile than a second average.

**Does it work in trending markets?**
Poorly for fading. In a strong trend price can remain far from its average for a long time, so "stretched" readings keep appearing without a reversal. It is more useful for judging how extended a move is.

**What period should I use?**
Fourteen is a common default, with 10 to 25 widely used. A shorter period gives more signals and noise; a longer one gives fewer, slower readings. Test on the market and time frame you actually trade.
