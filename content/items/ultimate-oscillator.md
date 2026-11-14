---
slug: ultimate-oscillator
name: Ultimate Oscillator
aka: [UO, Larry Williams Ultimate Oscillator]
type: momentum-oscillator
states: [reversal]
weak_states: [trend]
purposes: [entry]
inventor: Larry Williams
year: 1976
default_settings: "7, 14 and 28 periods; levels 70 and 30"
pairs_with: [support-and-resistance, divergence, exponential-moving-average, adx]
related: [rsi, stochastic-oscillator, williams-r, cci, money-flow-index]
compare: []
glossary: [oscillator, overbought, oversold, divergence, momentum, lookback-period]
wave: 2
reviewed: 14 November 2026
---

The Ultimate Oscillator (UO) is a momentum oscillator by Larry Williams that blends buying pressure over three time frames (7, 14 and 28 bars) into one line from 0 to 100. Mixing time frames is meant to cut false signals. Its best-known entry is a bullish divergence while the line is below 30.

## At a glance

| | |
|---|---|
| Type | Momentum oscillator |
| Best market states | Reversal |
| Weak in | Strong trends |
| Best uses | Entry timing |
| Default settings | 7, 14, 28 periods; levels 70 / 30 |
| Created by | Larry Williams, 1976 |
| Leading or lagging | Mostly lagging; divergence rules aim to flag turns earlier |

## What is the Ultimate Oscillator?

Larry Williams developed the Ultimate Oscillator in 1976. It became widely known after he described it in *Technical Analysis of Stocks & Commodities* in 1985. The year of first creation is as usually given in reference sources.

Williams noticed that oscillators built on a single period tended to give false signals: a short period reacts to noise, a long period reacts too late. His fix was to measure the same thing, buying pressure, over three periods and combine them with weights. The short period carries the most weight, the long the least.

Buying pressure is how much the close sits above the lowest point of the bar, counting a gap down from the prior close. It is compared with true range, the full size of the bar including gaps.

The output moves between 0 and 100, like [RSI](/rsi/). Williams' own approach to using it centres on divergence rather than simple overbought and oversold levels.

## Formula

1. Buying pressure (BP) = close - the lower of (low, previous close)
2. True range (TR) = the higher of (high, previous close) - the lower of (low, previous close)
3. For each of three periods (7, 14, 28): Average = sum of BP over the period / sum of TR over the period
4. UO = 100 x (4 x Average7 + 2 x Average14 + Average28) / (4 + 2 + 1)

**Worked example.** Suppose Average7 = 0.60, Average14 = 0.50 and Average28 = 0.40.
UO = 100 x (4 x 0.60 + 2 x 0.50 + 0.40) / 7
= 100 x (2.40 + 1.00 + 0.40) / 7
= 100 x 3.80 / 7 = **54.3**

The 4-2-1 weights mean the shortest period has four times the influence of the longest. A reading near 50 suggests balanced pressure.

Note: the 7, 14, 28 settings and the 4, 2, 1 weights are the published standard. Some platforms let you change both, and a few use slightly different rounding, so values can differ a little.

## How to read it

**Williams' bullish rule.** Williams described a buy setup that needs three things: (1) bullish divergence, where price makes a lower low but the UO makes a higher low; (2) the first low of the divergence is below 30; (3) the UO then rises above the high reached between the two lows. The signal comes when the UO breaks that high. Williams' exit idea was to leave when the UO moves above 70 or the line breaks above 50 and then falls.

**Williams' bearish rule.** The mirror image: bearish divergence with the first high above 70, followed by the UO falling below the low between the two highs.

**Overbought and oversold.** Readings above 70 are usually called overbought and below 30 oversold. Williams placed more weight on divergence than on these levels alone, and on its own an extreme reading is weak.

**Midpoint 50.** Some traders use 50 as a trend filter, reading UO above 50 as buyers dominating.

**Why divergence matters here.** Because the line blends three time frames, a divergence that appears in the blended version has to survive short and long period readings, which is the design intent. It reduces false signals, but it does not remove them.

## Best market states

**Reversals (best).** The divergence rules were built to catch turning points. They work best at clear levels where price has reason to turn.

**Ranges (fair).** In sideways markets overbought and oversold readings often line up with the range edges, though the blended line moves more slowly than a single-period oscillator.

**Strong trends (weak).** In a strong trend the UO can stay above 70 or below 30 for long stretches, and counter-trend divergence signals repeatedly fail.

**Breakouts.** A breakout often pushes UO to an extreme. That shows strength, not a reason to fade the move.

**Volatility.** Because buying pressure is measured against true range, the line adapts to bar size.

## Settings

| Setting | Periods | What it does |
|---|---|---|
| Faster | 5, 10, 20 | More signals, more noise |
| Default | 7, 14, 28 | Williams' original |
| Slower | 10, 20, 40 | Smoother, fewer signals |

Each period roughly doubles the one before. If you change the settings, keep the ratio and the weights in mind, since the mix of time frames is the point of the tool. There is no solid evidence that any one set of numbers is best, so test on the market and time frame you trade.

## Common mistakes

- Selling at 70 or buying at 30 in a trend. The strict Williams rule needs divergence, not just a level.
- Ignoring the third part of the rule (the break of the intermediate high or low) and acting on divergence alone.
- Assuming three time frames make the signal reliable. It reduces noise but does not guarantee anything.
- Comparing values across platforms with different settings or weights.
- Placing the stop based on the indicator rather than on price.
- Using it alone with no support or resistance context.

## Pairs well with

- **[Support and resistance](/support-and-resistance/)**: a UO divergence at a known level has more meaning than one in open space.
- **[Divergence](/divergence/)**: the UO signal is built on it, so reading divergence well matters.
- **[Exponential moving average](/exponential-moving-average/)**: a longer EMA gives trend direction so you only take signals that match.
- **[ADX](/adx/)**: a low ADX points to a range, where UO works better.

## Sources

- Williams, Larry (1985). "The Ultimate Oscillator". *Technical Analysis of Stocks & Commodities*, 1985.
- Murphy, John J. (1999). *Technical Analysis of the Financial Markets*. New York Institute of Finance.

## FAQ

**What does the Ultimate Oscillator measure?**
It measures buying pressure compared with true range over three periods (7, 14 and 28 bars), blends them with weights of 4, 2 and 1, and scales the result from 0 to 100. Higher readings show stronger recent buying pressure.

**What are the UO overbought and oversold levels?**
The usual levels are 70 and 30. Williams relied more on divergence than on the levels alone, so a reading above 70 or below 30 is context, not an instant signal.

**Why does the Ultimate Oscillator use three time frames?**
Williams wanted to avoid the false signals of single-period oscillators. The short period reacts quickly, the long period brings stability, and the weighted blend aims to balance them. It reduces noise but cannot remove it.

**How does the UO differ from RSI?**
RSI compares average gains with average losses using one period. The UO measures buying pressure relative to true range over three periods and combines them. UO includes gaps through its true range; RSI uses close-to-close changes only.

**Is the Ultimate Oscillator good for trending markets?**
No, it is weaker there. In strong trends it can stay in overbought or oversold zones, and divergence signals against the trend fail often. It is better suited to turning points near clear levels.

**What is the standard UO buy signal?**
It is a bullish divergence with the first low below 30, then a rise of the UO above the high between the two lows. It is a Williams rule used by traders, not a statistically proven edge.
