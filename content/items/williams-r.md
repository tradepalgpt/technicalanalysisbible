---
slug: williams-r
name: Williams %R
aka: [Williams Percent R, %R, WPR]
type: momentum-oscillator
states: [range, reversal]
weak_states: [trend]
purposes: [entry, confirmation]
inventor: Larry Williams
year: 1973
default_settings: "14 periods; levels -20 and -80"
pairs_with: [support-and-resistance, exponential-moving-average, adx, divergence]
related: [stochastic-oscillator, rsi, cci, ultimate-oscillator, stochastic-rsi]
compare: [stochastic-vs-williams-r]
glossary: [overbought, oversold, oscillator, lookback-period, divergence]
wave: 2
reviewed: 14 November 2026
---

Williams %R is a momentum oscillator that shows where the latest close sits within the highest-high to lowest-low range of the last 14 bars. It runs from 0 down to -100. Readings above -20 are usually called overbought and below -80 oversold. Traders use it to time entries in ranges and to confirm turns.

## At a glance

| | |
|---|---|
| Type | Momentum oscillator |
| Best market states | Range, reversal |
| Weak in | Strong trends |
| Best uses | Entry timing, confirmation |
| Default settings | 14 periods; levels -20 / -80 |
| Created by | Larry Williams, 1973 |
| Leading or lagging | Mostly lagging; it reacts quickly because it uses the latest close against a short range |

## What is Williams %R?

Williams %R, often written %R or Williams Percent Range, was created by Larry Williams, a futures trader and author. It is usually dated to the early 1970s, and 1973 is the commonly given year.

It answers one question: how close is the latest close to the top of the recent range? If the close equals the highest high of the last 14 bars, %R is 0. If it equals the lowest low, %R is -100. Halfway is -50.

This makes it a near mirror image of the [Stochastic Oscillator](/stochastic-oscillator/). The two use the same ingredients, the close and the high-low range. Williams %R is the same as the Fast Stochastic %K flipped upside-down, shifted by 100. Because of that, signals match; only the scale and the sign differ. See [Stochastic vs Williams %R](/compare/stochastic-vs-williams-r/).

The negative scale looks odd, but it is only a charting convention: "near zero" means price is near the top of the range, and "near -100" means near the bottom.

## Formula

%R = (highest high over n bars - close) / (highest high over n bars - lowest low over n bars) x -100

with n = 14 by default.

**Worked example.** Over the last 14 bars, the highest high is 120 and the lowest low is 100. The latest close is 116.
%R = (120 - 116) / (120 - 100) x -100 = 4 / 20 x -100 = **-20**

If the close were 104 instead:
%R = (120 - 104) / 20 x -100 = 16 / 20 x -100 = **-80**

A close at the exact top gives 0, and a close at the exact bottom gives -100. The same market can be described as Fast Stochastic %K of 80 (first case) because %R = %K - 100.

Note: there is no smoothing in the standard formula, which is why %R is jumpy. Some platforms plot it from 0 to 100 instead, but the standard version uses 0 to -100.

## How to read it

**Overbought and oversold.** Readings between 0 and -20 are usually called overbought, and between -80 and -100 oversold. In a range these zones often line up with the top and bottom of the range. They are not buy or sell signals on their own.

**Leaving the zone.** Many traders wait for %R to move out of the zone: above -80 after being oversold for a possible long, or below -20 after being overbought for a possible short. This waits for the turn instead of guessing it.

**Midline -50.** %R above -50 means price is in the top half of its recent range; below -50, the bottom half. It is a rough trend filter.

**Divergence.** If price makes a new high but %R does not reach as high a reading, upward momentum is weakening. The mirror holds for lows. It is a warning, not a timing signal.

**Sticking at an extreme.** In strong trends %R can stay near 0 or -100 for long periods because price keeps closing near the edge of its range. This is a sign of strength, not weakness.

## Best market states

**Ranges (best).** When price swings between clear support and resistance, %R's extremes tend to match the edges, so it helps time entries.

**Reversals (good, with care).** A turn out of an extreme at a known level, with a price signal such as a rejection candle, is a common setup. On its own, the move out of an extreme gives many false alarms.

**Strong trends (weak).** In a strong uptrend %R sits near 0 for long periods, and selling because it is overbought tends to fail.

**Breakouts.** A breakout from a range often pushes %R to an extreme. That reflects strength.

**Volatility.** %R does not measure volatility, but a very wide recent range makes it move slowly, and a narrow range makes it swing quickly.

## Settings

| Setting | Period | Levels | What it does |
|---|---|---|---|
| Short | 5 to 9 | -10 / -90 | Very fast, many signals, noisy |
| Default | 14 | -20 / -80 | Williams' standard setting |
| Long | 21 to 50 | -20 / -80 | Smoother, fewer signals, slower |

A shorter period means the range is shorter, so the close hits the edges more often. Longer periods reach the extremes less often. Some traders use a 20-period or 10-period range for specific markets; no setting has been shown to be best across all of them, so test on the market and time frame you trade.

## Common mistakes

- Treating -20 as a sell signal and -80 as a buy signal in a trend.
- Forgetting the negative scale and reading -80 as "high".
- Entering the moment %R touches a zone instead of waiting for it to turn or for a price signal.
- Treating it as a different tool from the Fast Stochastic. It carries the same information.
- Comparing values on platforms that scale it from 0 to 100.
- Using it alone with no price level or stop plan.

## Pairs well with

- **[Support and resistance](/support-and-resistance/)**: an oversold %R at a known support level has more meaning than one mid-range.
- **[Exponential moving average](/exponential-moving-average/)**: a longer EMA shows the main trend so you take %R signals only that way.
- **[ADX](/adx/)**: a low ADX points to a range, which is where %R works best.
- **[Divergence](/divergence/)**: a %R divergence at a level adds context to a possible turn.

## Sources

- Murphy, John J. (1999). *Technical Analysis of the Financial Markets*. New York Institute of Finance.

## FAQ

**What does Williams %R measure?**
It measures where the latest close sits within the highest and lowest prices of the last 14 bars, on a scale from 0 to -100. Near 0 means the close is near the top of the range, and near -100 means near the bottom.

**Why is Williams %R negative?**
It is a presentation choice. Williams plotted it from 0 at the top to -100 at the bottom, so that high readings in price show as high on the chart. The numbers themselves just mirror the Stochastic %K.

**What are Williams %R overbought and oversold levels?**
The standard levels are -20 for overbought and -80 for oversold. They show that price is close to the edge of its recent range. They are not automatic reversal signals, especially in a strong trend.

**Is Williams %R the same as the Stochastic Oscillator?**
They are closely related. Williams %R is the Fast Stochastic %K flipped and shifted by 100, so the signals match. The Stochastic usually adds smoothing and a signal line, making it less jumpy.

**What is the best period for Williams %R?**
The standard is 14 bars. Shorter values are faster and noisier; longer values are smoother and slower. Test any change on your own market and time frame before relying on it.

**Does Williams %R work in trending markets?**
Not well for counter-trend signals. In a strong trend it can stay at an extreme for a long time. Some traders use pullbacks of %R away from the extreme to time entries in the direction of the trend instead.
