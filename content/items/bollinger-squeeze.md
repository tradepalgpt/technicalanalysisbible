---
slug: bollinger-squeeze
name: Bollinger Squeeze
aka: [The Squeeze, Bollinger Band squeeze, BandWidth squeeze]
type: volatility
states: [volatility, breakout]
weak_states: [range]
purposes: [entry, filter]
inventor: John Bollinger
year: 2001
default_settings: "Bollinger Bands 20 periods, 2.0 standard deviations; BandWidth at a multi-month low"
pairs_with: [bollinger-bands, bollinger-band-width, volume, support-and-resistance]
related: [bollinger-bands, bollinger-band-width, ttm-squeeze, keltner-channels, atr, donchian-channels, percent-b]
compare: [bollinger-bands-vs-keltner-channels]
glossary: [squeeze, volatility, breakout, standard-deviation, whipsaw]
wave: 1
reviewed: 14 November 2026
---

A Bollinger Squeeze is a period when Bollinger Bands pull unusually close together, showing that volatility has dropped to a low. Because quiet markets tend to be followed by more active ones, traders watch squeezes for a possible breakout. The squeeze gives no direction; a break of the bands or a price signal has to supply that.

## At a glance

| | |
|---|---|
| Type | Volatility condition |
| Best market states | Volatility compression before a breakout |
| Weak in | Markets that stay quiet, and in choppy ranges where breakouts fail |
| Best uses | Entry timing, filter |
| Default settings | Bollinger Bands (20, 2.0); BandWidth near a multi-month low |
| Created by | John Bollinger (squeeze described in his 2001 book; Bands from the early 1980s) |
| Leading or lagging | A condition, not a trigger; it can precede a move by a long time |

## What is a Bollinger Squeeze?

[Bollinger Bands](/bollinger-bands/) are two lines placed a set number of standard deviations above and below a moving average. When price moves little, standard deviation falls, and the bands tighten. When price moves a lot, they widen. Volatility tends to cycle between quiet and active phases, and the squeeze is the quiet end of that cycle.

John Bollinger describes the squeeze in *Bollinger on Bollinger Bands* (2001). A squeeze is defined by [Bollinger Band Width](/bollinger-band-width/), the distance between the bands relative to the middle line. When it reaches a low compared with its recent history, the bands are "squeezed".

The squeeze says only that a larger move may be near. It does not say whether the move will be up or down. Bollinger himself noted that a squeeze is often followed by a move and that the first break can be a false one.

## How it is identified

1. **Plot Bollinger Bands** with 20 periods and 2.0 standard deviations.
2. **Calculate BandWidth** = (Upper band - Lower band) / Middle band.
3. **Compare with history.** A squeeze is when BandWidth is at or near its lowest value over a lookback period. Bollinger defines it as BandWidth at its lowest level in six months (about 125 daily bars).
4. **Wait for the release.** Watch for a close outside the bands, or a break of a nearby level.

**Worked example.** The 20-day average is 100 and the standard deviation is 1. Upper band = 102, lower band = 98, so BandWidth = (102 - 98) / 100 = 0.04, or 4%. If the lowest BandWidth in the last six months was 4.1%, this reading is a new low for the period. That qualifies as a squeeze. A close above 102 later would be a possible upside breakout.

Note: there is no official numeric threshold for "tight enough". Traders choose a percentile or a lookback low. The definition is a choice, not a fixed rule.

## How to read it

**Squeeze on.** The bands are tight and BandWidth is low. Prepare, do not trade yet.

**The break.** A close outside the bands after a squeeze is often read as the start of a move in that direction. Bollinger cautions that the first move can be a false start, so some traders wait for a second confirming move or a retest.

**Volume.** A breakout with rising volume carries more weight than one on thin volume.

**Direction hints.** Nothing in the squeeze gives direction. Traders look at the bigger trend, the nearest support or resistance and momentum for clues.

**Failed breakout.** If price breaks out and quickly returns inside the bands, the squeeze may carry on or resolve the other way.

## Best market states

**Volatility compression before a breakout (best).** This is the purpose of the tool.

**Breakouts.** The release from a squeeze is a common breakout trigger, but only some breakouts hold.

**Ranges (weak).** Prolonged ranges can fire false breaks repeatedly. A squeeze at the end of a long range is more interesting than one in the middle of it.

**Trends.** A squeeze during a pause in a trend often resolves in the trend's direction, but this is a tendency and not a rule.

**Volatility.** Because it is relative to recent history, a "squeeze" in a normally volatile market might be a large range in a quiet one.

## Settings

| Setting | Value | What it does |
|---|---|---|
| Period | 20 | Standard Bollinger period |
| Deviation | 2.0 | Standard band width |
| BandWidth lookback | About six months of data | Defines how low is low |
| Time frame | Any | Daily and weekly charts give slower, larger squeezes |

Changing the lookback changes how often squeezes occur. A shorter lookback finds more squeezes but they are less unusual. Bollinger suggests adjusting the deviation if the period changes.

## Common mistakes

- Trading the squeeze before it releases. It has no direction.
- Taking the first break as certain. It is often a fake.
- Using a fixed BandWidth number across different markets. Each market has its own normal range.
- Ignoring the bigger trend and the nearest level.
- Assuming a squeeze must lead to a big move. Some resolve into more quiet drift.
- Confusing it with the [TTM Squeeze](/ttm-squeeze/), which also compares the bands with Keltner Channels.

## Pairs well with

- **[Bollinger Bands](/bollinger-bands/)**: the base indicator.
- **[Bollinger Band Width](/bollinger-band-width/)**: the measure that defines how tight the squeeze is.
- **[Volume](/volume/)**: breakouts on rising volume are more convincing.
- **[Support and resistance](/support-and-resistance/)**: a break through a key level adds weight.

## Sources

- Bollinger, John (2001). *Bollinger on Bollinger Bands*. McGraw-Hill.
- Murphy, John J. (1999). *Technical Analysis of the Financial Markets*. New York Institute of Finance.

## FAQ

**What is a Bollinger Squeeze?**
It is a period when Bollinger Bands tighten to a low width compared with recent history, showing low volatility. The idea is that quiet phases are often followed by more active ones, but direction is not given.

**Does a Bollinger Squeeze predict direction?**
No. It only shows that volatility is compressed. Direction comes from a break of the bands, a nearby key level or the larger trend. The first break can be a false move.

**How do you measure a squeeze?**
Use BandWidth: the gap between the upper and lower band divided by the middle band. A squeeze is when it is at or near its lowest level over a chosen lookback. The lookback is a trader's choice.

**How is it different from the TTM Squeeze?**
The Bollinger Squeeze uses band width alone. The TTM Squeeze checks whether Bollinger Bands are inside Keltner Channels and adds a momentum histogram. See [TTM Squeeze](/ttm-squeeze/).

**Do all squeezes lead to breakouts?**
No. Some end in a small move or more sideways drift. A squeeze raises the odds of a bigger move only as a general tendency, so use a price trigger and a stop.
