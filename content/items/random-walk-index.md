---
slug: random-walk-index
name: Random Walk Index
aka: [RWI]
type: momentum-oscillator
states: [trend]
weak_states: [range]
purposes: [filter]
inventor: Michael Poulos
year: 1991
default_settings: "Lookback from 2 to 8 bars; threshold of 1.0"
pairs_with: [adx, atr, exponential-moving-average, support-and-resistance]
related: [adx, aroon, choppiness-index, dmi, momentum-indicator]
compare: []
glossary: [oscillator, lookback-period, momentum]
wave: 3
reviewed: 14 November 2026
---

The Random Walk Index (RWI) tests whether a price move is bigger than random movement would produce. It compares how far price has travelled over a number of bars with the distance expected from a random walk, scaled by average true range. Readings above 1.0 suggest a real trend; below 1.0 suggests noise. It is used as a trend filter.

## At a glance

| | |
|---|---|
| Type | Momentum oscillator (trend test) |
| Best market states | Trend |
| Weak in | Ranges |
| Best uses | Filter |
| Default settings | Lookbacks of 2 to 8 bars; threshold 1.0 |
| Created by | Michael Poulos, 1991 |
| Leading or lagging | Lagging |

## What is the Random Walk Index?

A random walk is a path where each step is unrelated to the last. Over n steps of typical size s, the expected distance covered is about s times the square root of n. If price has moved much further than that, the move is probably not just random wandering.

Michael Poulos published the index in 1991 in *Technical Analysis of Stocks & Commodities*, under the title "Of Trends and Random Walks". It produces two lines: one for the strength of an up-move (RWI High) and one for a down-move (RWI Low).

The test uses average true range (ATR) as the typical step size, so it adjusts for volatility. It is a trend test rather than a signal generator, and it is built for use as a filter.

## Formula

For a lookback of n bars, with ATR(n) the average true range over n bars:

RWI High = (High today - Low n bars ago) / (ATR(n) x sqrt(n))
RWI Low = (High n bars ago - Low today) / (ATR(n) x sqrt(n))

The index is usually calculated for each n from 2 to 8, and the highest result for each line is plotted. Some platforms use a single fixed lookback, so check the settings.

**Worked example.** Take n = 4, ATR(4) = 2, today's high = 112 and the low four bars ago = 100.
sqrt(4) = 2, so the denominator = 2 x 2 = 4.
RWI High = (112 - 100) / 4 = 12 / 4 = **3.0**

A reading of 3.0 is well above 1.0, meaning the up-move is much bigger than a random walk of that volatility would be expected to produce.

## How to read it

**Above 1.0.** RWI High above 1.0 points to an uptrend; RWI Low above 1.0 points to a downtrend. The higher the reading, the stronger the evidence of directional movement.

**Both below 1.0.** Price is behaving like a random walk. Trend-following methods are then less reliable.

**Which line is higher.** If RWI High is above RWI Low and above 1.0, the up-trend dominates. If both lines are above 1.0, the market has swung strongly in both directions recently and signals are mixed.

**Fading trend.** The leading line falling back towards 1.0 shows the move is losing strength relative to volatility.

## Best market states

**Trends (best).** It was built to tell a real trend from random noise, so it is most useful when deciding whether to apply a trend-following method.

**Ranges (weak).** In a range both lines sit below 1.0, which is the correct warning but not a trade signal. Use it to stay out, not to find entries.

**Breakouts.** A fast breakout lifts one line above 1.0 and confirms momentum. It gives no early warning before the breakout.

**Reversals and volatility.** It lags at turns. Because ATR is in the denominator, volatility is adjusted for, though sudden spikes in ATR can pull readings down.

## Settings

| Setting | Value | Effect |
|---|---|---|
| Lookback range | 2 to 8 bars | Short lookbacks catch fast moves; longer ones catch slower trends |
| Threshold | 1.0 | Above means more than random movement |
| Single lookback (some platforms) | 8 or 10 | Simpler, more stable line |

Some versions use ranges such as 8 to 64 for longer-term trends. Because platforms differ, check the formula before comparing. The 1.0 level has a theoretical basis, but some traders prefer a higher bar such as 1.5 for a stricter filter.

## Common mistakes

- Treating RWI above 1.0 as a buy or sell signal rather than a trend filter.
- Comparing values from platforms that use different lookbacks.
- Ignoring the direction of the lines and reading only the level.
- Using it as a leading indicator. It confirms trends after they begin.
- Over-tuning lookbacks to historical data.
- Expecting the 1.0 threshold to be a statistical test with fixed confidence.

## Pairs well with

- **[ADX](/adx/)**: another trend-strength measure; agreement strengthens a filter.
- **[ATR](/atr/)**: the volatility measure inside RWI, useful for stop sizing.
- **[Exponential moving average](/exponential-moving-average/)**: gives direction while RWI checks strength.
- **[Support and resistance](/support-and-resistance/)**: shows where trend trades should be taken.

## Sources

- Poulos, Michael (1991). "Of Trends and Random Walks." *Technical Analysis of Stocks & Commodities*.

## FAQ

**What does a Random Walk Index above 1 mean?**
It means price has moved further than a random walk of the same volatility would typically move over that period. That suggests the move is directional rather than noise. It is a rule of thumb, not a statistical proof.

**Who created the Random Walk Index?**
Michael Poulos, who described it in *Technical Analysis of Stocks & Commodities* in 1991. It is based on the idea that random price paths spread out in proportion to the square root of the number of steps.

**How is RWI different from ADX?**
Both measure trend strength. ADX smooths directional movement; RWI compares the actual distance travelled with the expected random distance, scaled by ATR. They often agree but are not identical.

**Can it be used in sideways markets?**
It identifies them: both lines stay below 1.0. It does not give good entries there, so its job in a range is to keep trend-following trades off.

**What lookback should I use?**
The original uses several lookbacks from 2 to 8 bars and plots the highest. Many platforms offer a single fixed lookback instead. Pick one, keep it consistent, and test it on your market.
