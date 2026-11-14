---
slug: stochastic-momentum-index
name: Stochastic Momentum Index (SMI)
aka: [SMI, Blau SMI, Stochastic Momentum]
type: momentum-oscillator
states: [range, reversal]
weak_states: [trend]
purposes: [entry]
inventor: William Blau
year: 1993
default_settings: "10-period lookback, 3 and 3 smoothing; levels +40 and -40 (platforms differ)"
pairs_with: [support-and-resistance, exponential-moving-average, adx, bollinger-bands]
related: [stochastic-oscillator, stochastic-rsi, true-strength-index, rsi, williams-r]
compare: []
glossary: [overbought, oversold, oscillator, smoothing, lookback-period]
wave: 3
reviewed: 14 November 2026
---

The Stochastic Momentum Index (SMI) measures where the close sits relative to the middle of the recent high-low range, rather than relative to the low as the ordinary Stochastic does. The result is a smoother oscillator from -100 to +100. Readings above +40 and below -40 are commonly treated as overbought and oversold, and crossings of its signal line are used for entries.

## At a glance

| | |
|---|---|
| Type | Momentum oscillator |
| Best market states | Range, reversal |
| Weak in | Strong trends |
| Best uses | Entry timing |
| Default settings | 10, 3, 3 on many platforms; levels +40 / -40 |
| Created by | William Blau, 1993 |
| Leading or lagging | Lagging, but smoother than the standard Stochastic |

## What is the Stochastic Momentum Index?

William Blau introduced the SMI in 1993 and later described it in his book *Momentum, Direction, and Divergence* (1995). It refines the [Stochastic Oscillator](/stochastic-oscillator/). The standard Stochastic asks: where is the close within the range from the lowest low to the highest high? The SMI asks: how far is the close from the midpoint of that range?

That small change makes the SMI centred on zero and gives it a symmetrical scale from -100 to +100. It also gets double smoothing, so the line is calmer and gives fewer false swings than the Stochastic.

A close above the midpoint gives a positive reading; below gives a negative one. The further from the midpoint, the larger the value.

## Formula

For a lookback of n bars (say 10):

- HH = highest high, LL = lowest low over n bars
- Midpoint = (HH + LL) / 2
- D = Close - Midpoint
- HL = HH - LL
- Smooth both D and HL twice with an exponential moving average (EMA) of length s (3 in the common setting)

SMI = 100 x (double-smoothed D) / (0.5 x double-smoothed HL)

A signal line, usually an EMA of the SMI, is often added.

**Worked example.** Over 10 bars HH = 110 and LL = 90. Midpoint = 100. The close is 106.
D = 106 - 100 = 6, HL = 20.
Ignoring smoothing for clarity: SMI = 100 x 6 / (0.5 x 20) = 100 x 6 / 10 = **60**

In practice the smoothing pulls the value towards the average of recent bars, so a single strong close gives a smaller reading.

Blau's original used longer smoothing settings than many platforms do, so defaults vary.

## How to read it

**Overbought and oversold.** Above +40 is usually called overbought and below -40 oversold. Some traders use +50 and -50 or +60 and -60.

**Signal-line crossovers.** The SMI crossing its signal line while in an extreme zone is the usual entry cue: a downward cross from above +40 for shorts, an upward cross from below -40 for longs.

**Zero line.** Above zero means closes are tending to land in the upper half of the range. It is a rough bias reading.

**Divergence.** Price makes a new extreme while the SMI does not. Blau's book focuses on divergence, as the title suggests. As with other oscillators, treat it as a warning.

## Best market states

**Ranges (best).** The oscillator swings between extremes as price moves between range edges, and the smoothing reduces noise.

**Reversals (good, with care).** Crossovers from extreme zones at known levels can mark turns. Confirm with price.

**Strong trends (weak).** The SMI can stay above +40 or below -40 for a long time, so counter-trend signals fail often.

**Breakouts and volatility.** A breakout drives it to an extreme and keeps it there. The wide range from a volatile market is built into the formula, but the tool does not measure volatility itself.

## Settings

| Setting | Typical value | Effect |
|---|---|---|
| Lookback (n) | 10 | Shorter is faster and noisier |
| First smoothing | 3 | Longer is smoother and slower |
| Second smoothing | 3 | As above |
| Signal line | 3-period EMA | Faster signals |
| Levels | +40 / -40 | Wider gives fewer, stricter cues |

Blau's published settings and common platform defaults differ, and some platforms use different signal-line lengths. Check your platform's formula before comparing values with another.

## Common mistakes

- Assuming the SMI is the same scale as the ordinary Stochastic (0 to 100). It runs from -100 to +100.
- Selling because the SMI is above +40 in a strong uptrend.
- Comparing values across platforms with different smoothing settings.
- Acting on the first touch of an extreme instead of waiting for a crossover.
- Using the SMI with no price level or trend check.
- Over-tuning settings to fit past data.

## Pairs well with

- **[Support and resistance](/support-and-resistance/)**: acts on signals near known levels.
- **[Exponential moving average](/exponential-moving-average/)**: sets trend direction for filtering.
- **[ADX](/adx/)**: a low ADX supports using range-style signals.
- **[Bollinger Bands](/bollinger-bands/)**: a band touch plus an SMI extreme gives a two-part view.

## Sources

- Blau, William (1995). *Momentum, Direction, and Divergence*. John Wiley & Sons.

## FAQ

**How is the SMI different from the Stochastic Oscillator?**
The Stochastic measures the close against the low of the range. The SMI measures it against the midpoint of the range and applies double smoothing. This gives a zero-centred line from -100 to +100 with fewer false swings.

**What are the SMI overbought and oversold levels?**
Common levels are +40 and -40, though some traders use +50/-50 or +60/-60. These are conventions, not proven thresholds. Test levels on your own market and time frame.

**What are the default SMI settings?**
Many platforms use a 10-period lookback with 3 and 3 smoothing. Blau's original publication used different smoothing, so values may not match across platforms. Always check how yours is calculated.

**Does the SMI work in trending markets?**
Not well for reversals. It can sit in an extreme zone for a long time during a strong trend. It is better suited to ranges and to entries at known levels.

**Who created the SMI?**
William Blau introduced it in 1993 and wrote about it in his 1995 book *Momentum, Direction, and Divergence*. The 1993 date comes from his article in the trading magazine press and should be checked if you need to cite it.
