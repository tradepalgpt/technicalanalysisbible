---
slug: wavetrend-oscillator
name: WaveTrend Oscillator
aka: [WT, WaveTrend, WaveTrend cross]
type: momentum-oscillator
states: [range, reversal]
weak_states: [trend]
purposes: [entry]
inventor: Not attributed to one person
year: Unknown
default_settings: "Channel length 10, average length 21, signal 4-period SMA; levels about +/-60 and +/-53"
pairs_with: [support-and-resistance, divergence, exponential-moving-average, adx]
related: [cci, rsi, stochastic-oscillator, laguerre-rsi, stochastic-momentum-index, inverse-fisher-transform]
compare: []
glossary: [oscillator, overbought, oversold, divergence, smoothing, crossover]
wave: 3
reviewed: 14 November 2026
---

The WaveTrend Oscillator is a momentum oscillator that measures how far the average price has moved away from its own smoothed average, scaled by typical deviation. It plots two lines, and traders watch for crossovers in the overbought and oversold zones to time entries in ranges and possible reversals. It is best known as a charting-platform script.

## At a glance

| | |
|---|---|
| Type | Momentum oscillator |
| Best market states | Range, reversal |
| Weak in | Strong trends |
| Best uses | Entry timing |
| Default settings | Channel 10, average 21, signal 4; levels about +/-60 and +/-53 |
| Created by | Not attributed to one person (popular as a community script) |
| Leading or lagging | Lagging (built from smoothed past prices), though crossovers near extremes come early in a turn |

## What is the WaveTrend Oscillator?

The WaveTrend Oscillator belongs to the same family as the [CCI](/cci/). Both ask the same question: how far is price from its recent average, measured in units of how much it usually wanders? When price is far above its average by that measure, the oscillator is high. When it is far below, the oscillator is low.

The version most traders use today spread through open-source scripts on public charting platforms and was later built into several popular multi-indicator packages. There is no single, universally agreed inventor, and there is no original published paper. That means the settings and level lines vary a little from script to script. Treat the figures on this page as the common defaults, not as an official standard.

The oscillator draws two lines. The faster one (often called WT1) is the smoothed main value. The slower one (WT2) is a short simple moving average of the first. A cross of the fast line through the slow line is the main signal. Because both lines are bounded loosely between about -100 and +100 in normal conditions, they are easy to compare to fixed overbought and oversold lines.

## Formula

The common version works on the average of high, low and close, called the typical price (HLC/3).

1. AP = (High + Low + Close) / 3
2. ESA = EMA of AP over the channel length n1 (default 10)
3. D = EMA of the absolute value of (AP - ESA) over n1
4. CI = (AP - ESA) / (0.015 x D)
5. WT1 = EMA of CI over the average length n2 (default 21)
6. WT2 = 4-period simple moving average of WT1

The constant 0.015 is borrowed from the CCI, and it scales the output so that most readings fall between about -100 and +100.

**Worked example.** Say the typical price is 102, its 10-period EMA (ESA) is 100, and the smoothed absolute deviation D is 1.0.
CI = (102 - 100) / (0.015 x 1.0) = 2 / 0.015 = about **133**
This single raw value is then smoothed over 21 periods to give WT1, so one spike moves WT1 only part of the way.

Platform differences: some versions use different smoothing, a different signal length, or a different set of level lines. Always check the settings panel of the script you use.

## How to read it

**Overbought and oversold zones.** Common lines sit at about +60 and -60, with a second, milder pair at about +53 and -53. Readings above the upper line mean price is stretched above its average. Below the lower line, it is stretched below. These are conditions, not commands: a market can stay stretched for a long time.

**Line crossovers.** The most-used signal is the fast line crossing the slow line while both are in an extreme zone. A fast line crossing down through the slow line above +60 is read as momentum turning down. A cross up below -60 is read the opposite way. Crossovers near zero carry less weight.

**Zero line.** WT1 above zero means price is above its smoothed average; below zero, below it. Some traders use zero crossings as a slow trend gauge, but the oscillator is not designed mainly for that.

**Divergence.** Price makes a new high while WT1 makes a lower high (bearish), or price makes a new low while WT1 makes a higher low (bullish). It hints that stretch is fading. See [Divergence](/divergence/). Like all divergences, it can appear several times before price turns.

**Gap between the lines.** The distance between WT1 and WT2 is a rough view of momentum change. A widening gap shows momentum building. A shrinking gap shows it fading before any cross happens.

## Best market states

**Ranges (best).** When price swings between clear support and resistance, the extreme zones tend to line up with the edges of the range, which is where this oscillator is most useful.

**Reversals (good, with care).** A cross from an extreme zone near a known level can be an early clue. It works best as confirmation of a price signal such as a rejection candle, not as a stand-alone trigger.

**Strong trends (weak).** In a strong trend the oscillator can pin itself in an extreme zone and give repeated, misleading counter-trend crossovers.

**Breakouts (mixed).** A breakout pushes the lines into the extreme zone at once. That shows strength, not an automatic fade.

**Volatility.** The oscillator is partly self-scaling because it divides by typical deviation, but sharp volatility changes still cause sudden swings.

## Settings

| Setting | Values | What it does |
|---|---|---|
| Faster | Channel 6 to 8, average 12 to 14 | More crossovers, more noise |
| Default | Channel 10, average 21, signal 4 | The common community setting |
| Slower | Channel 14 to 20, average 30 or more | Fewer, slower signals; lines reach extremes less often |

If you shorten the lengths, the lines hit the extremes more often, so many traders widen the level lines to compensate. If you lengthen them, the levels may need narrowing. Test any change on the market and time frame you actually trade, and avoid refitting after every losing trade.

## Common mistakes

- Treating every cross in an extreme zone as a trade in a trending market.
- Assuming the +/-60 and +/-53 levels are official. They are script defaults and differ between versions.
- Taking crossovers near the zero line as if they were extreme-zone signals.
- Ignoring the higher time frame trend and trading only against it.
- Comparing values from two scripts that use different smoothing.
- Placing stops by the oscillator rather than by price structure.

## Pairs well with

- **[Support and resistance](/support-and-resistance/)**: an extreme-zone cross at a known level carries more meaning than one in open space.
- **[Divergence](/divergence/)**: a cross that follows a divergence gives a fuller picture of fading momentum.
- **[Exponential moving average](/exponential-moving-average/)**: a longer EMA shows the bigger trend, helping you decide which crosses to ignore.
- **[ADX](/adx/)**: a low ADX says the market is ranging, where this oscillator works best.

## Sources

- Lambert, Donald R. (1980). "Commodity Channel Index: Tool for Trading Cyclic Trends." *Commodities* magazine. (The CCI, whose scaling idea this oscillator borrows.)
- Murphy, John J. (1999). *Technical Analysis of the Financial Markets*. New York Institute of Finance. (General background on oscillators, overbought and oversold readings, and divergence.)

## FAQ

**Who created the WaveTrend Oscillator?**
No single inventor is generally agreed. It became widely known through open-source scripts shared by community authors on charting platforms and then through bundled indicator packages. Because there is no original paper, defaults and level lines differ between versions.

**How is WaveTrend different from the CCI?**
Both measure distance from an average in units of typical deviation. WaveTrend adds a second round of smoothing and a short signal line, so it moves less sharply than the raw CCI and gives a cleaner two-line crossover signal.

**What are the standard WaveTrend levels?**
Many scripts show lines near +60 and -60, with a milder pair near +53 and -53. These are conventions rather than rules, and some versions use other figures. Check the script's settings before relying on them.

**Does WaveTrend work in trending markets?**
Not well. In a strong trend it can stay in one extreme zone and give repeated counter-trend crosses. It is better suited to ranges, and to reversals when a price signal at a known level agrees with it.

**Can I use WaveTrend alone?**
It is risky to do so. A crossover tells you only that smoothed momentum changed direction. Pair it with price structure, a trend filter and a defined stop placed on the chart.
