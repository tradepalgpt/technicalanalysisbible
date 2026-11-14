---
slug: relative-vigor-index
name: Relative Vigor Index (RVI)
aka: [RVI, Relative Vigor]
type: momentum-oscillator
states: [trend, reversal]
weak_states: [range]
purposes: [confirmation]
inventor: John F. Ehlers
year: 2002
default_settings: "10 periods; 4-bar weighted signal line"
pairs_with: [exponential-moving-average, support-and-resistance, adx, macd]
related: [balance-of-power, awesome-oscillator, true-strength-index, momentum-indicator, stochastic-oscillator]
compare: []
glossary: [oscillator, momentum, divergence, smoothing, lookback-period]
wave: 3
reviewed: 14 November 2026
---

The Relative Vigor Index (RVI) compares where a bar closes relative to where it opened, scaled by the bar's range. The idea is that in an uptrend, prices tend to close higher than they open, and in a downtrend, lower. It plots a smoothed line and a signal line, and crossovers are used to confirm trend direction and momentum shifts.

## At a glance

| | |
|---|---|
| Type | Momentum oscillator |
| Best market states | Trend, reversal |
| Weak in | Ranges |
| Best uses | Confirmation |
| Default settings | 10 periods; signal line is a 4-bar weighted average |
| Created by | John F. Ehlers, 2002 |
| Leading or lagging | Lagging, with a quick signal line |

## What is the Relative Vigor Index?

The RVI measures the "vigor" of a move: how strongly price closed in the direction of the trend relative to the bar's full range. A bar that opens at the low and closes at the high has a large positive close-minus-open compared with its range. A bar that opens and closes at the same level has none.

John Ehlers introduced it in 2002 in *Technical Analysis of Stocks & Commodities*. The name is easy to confuse with the Relative Volatility Index, a different indicator by Donald Dorsey. They share the abbreviation RVI but have nothing else in common. Always check which one your platform means.

The RVI uses smoothing over a few bars, so it is less jumpy than a raw close-minus-open reading.

## Formula

For each bar, take a symmetrically weighted sum over the last four bars (current and three previous):

Numerator = [(Close - Open) + 2 x (Close1 - Open1) + 2 x (Close2 - Open2) + (Close3 - Open3)] / 6
Denominator = [(High - Low) + 2 x (High1 - Low1) + 2 x (High2 - Low2) + (High3 - Low3)] / 6

Then:

RVI = simple average of the Numerator over N periods / simple average of the Denominator over N periods (N is 10 by default)

Signal line = [RVI + 2 x RVI1 + 2 x RVI2 + RVI3] / 6

**Worked example.** Suppose, after weighting, the 10-bar average Numerator is 1.5 and the average Denominator is 5.
RVI = 1.5 / 5 = **0.30**

If the signal line is 0.25, the RVI is above its signal, which is read as momentum rising. Implementations vary in the exact weighting, so check your platform.

## How to read it

**Signal line crossover.** The RVI crossing above its signal line suggests momentum is turning up; below suggests it is turning down. This is the main use.

**Zero line.** Above zero, closes tend to be above opens over the period; below zero, the opposite. Some traders use zero as a bias filter for trade direction.

**Divergence.** Price makes a higher high while the RVI makes a lower high, or the mirror at lows. It shows weakening vigor but is a warning, not a timing signal.

**Crossings at extremes.** Crosses that happen while the RVI is far from zero, relative to its recent history, are often given more weight than those near zero. There is no standard level.

## Best market states

**Trends (best).** In a steady trend the close tends to hold above (or below) the open, so the RVI stays on one side of zero and signal crosses confirm pullback endings.

**Reversals (good, with care).** Divergence and crossovers near a major level may flag a shift. Because the line is smoothed, these come after the turn begins.

**Ranges (weak).** Opens and closes alternate, so the RVI hovers near zero and crosses its signal line repeatedly with little meaning.

**Breakouts and volatility.** A breakout gives a burst of strong closes that lifts the line. The tool does not measure volatility, though wide bars change the scale of the denominator.

## Settings

| Setting | Common value | Effect |
|---|---|---|
| Period | 10 | Shorter is more reactive and noisier |
| Signal line | 4-bar weighted average | Fixed in the original; some platforms offer a choice |
| Zero line | 0 | Bias reference |

A shorter period gives more crossovers; a longer period gives fewer, later ones. The signal construction is built into most platforms, so changing it is rarely possible. As with any oscillator, adjust settings sparingly and test before relying on them.

## Common mistakes

- Confusing it with the Relative Volatility Index.
- Trading every crossover in a sideways market.
- Treating a zero-line cross as a signal rather than a bias.
- Ignoring price structure and the larger trend.
- Over-fitting the period to past data.
- Expecting it to predict reversals rather than confirm momentum shifts.

## Pairs well with

- **[Exponential moving average](/exponential-moving-average/)**: sets the trend so crossovers are taken in the right direction.
- **[Support and resistance](/support-and-resistance/)**: use crossovers at known levels rather than anywhere.
- **[ADX](/adx/)**: a rising ADX supports taking trend signals.
- **[MACD](/macd/)**: another view of momentum; agreement strengthens the read.

## Sources

- Ehlers, John F. (2002). "Relative Vigor Index." *Technical Analysis of Stocks & Commodities*.

## FAQ

**Is the RVI the same as the Relative Volatility Index?**
No. They share the abbreviation but are different indicators. The Relative Vigor Index compares closes with opens within a bar's range, while the Relative Volatility Index applies RSI-style logic to standard deviation. Check your platform's naming.

**What does the RVI measure?**
How strongly price closes in the direction of the trend, relative to the bar's range. In an uptrend, bars tend to close above their open; the RVI captures that tendency as a smoothed oscillator.

**What are the default settings?**
A 10-period setting is standard, with a signal line that is a four-bar weighted average of the RVI itself. Most platforms use these without allowing the signal construction to change.

**Does the RVI work in ranges?**
Poorly. With alternating up and down closes, the line stays near zero and crosses its signal line often. It is better as a trend and momentum confirmation tool.

**Is the RVI leading or lagging?**
Lagging. It is built from smoothed past bars. The signal-line crossover can come slightly before price turns, but it does not forecast direction.
