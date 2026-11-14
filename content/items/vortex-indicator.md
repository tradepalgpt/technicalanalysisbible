---
slug: vortex-indicator
name: Vortex Indicator
aka: [VI, Vortex, VI+ and VI-]
type: trend
states: [trend, reversal]
weak_states: [range]
purposes: [entry, filter]
inventor: Etienne Botes and Douglas Siepman
year: 2010
default_settings: "14 periods"
pairs_with: [adx, exponential-moving-average, support-and-resistance, atr]
related: [dmi, aroon, adx, supertrend, parabolic-sar]
compare: []
glossary: [crossover, lookback-period, trend, whipsaw]
wave: 2
reviewed: 14 November 2026
---

The Vortex Indicator (VI) draws two lines, VI+ and VI-, that measure upward and downward price movement over a set number of bars, relative to true range. When VI+ crosses above VI- it suggests an uptrend is starting; when VI- crosses above VI+ it suggests a downtrend. Traders use it to spot trend starts and to filter trade direction.

## At a glance

| | |
|---|---|
| Type | Trend indicator |
| Best market states | Trend, reversal |
| Weak in | Ranges |
| Best uses | Entry timing, trend filter |
| Default settings | 14 periods |
| Created by | Etienne Botes and Douglas Siepman, 2010 |
| Leading or lagging | Lagging (built from past highs, lows and closes) |

## What is the Vortex Indicator?

The Vortex Indicator was published by Etienne Botes and Douglas Siepman in *Technical Analysis of Stocks & Commodities* in early 2010. The name refers to the idea of upward and downward "movement" swirling in opposite directions. The calculation matters more than the name.

The indicator has two lines. VI+ measures how far each bar's high has stretched above the previous bar's low. VI- measures how far each bar's low has fallen below the previous bar's high. Both are summed over the lookback period and divided by the sum of true range, which makes them comparable across markets.

It looks like the Directional Movement System behind [ADX](/adx/) and the [DMI](/dmi/), and the lines are read in a similar way, but the calculation is different. It tends to give crossovers in similar places, and it is not a different kind of information from those tools.

## Formula

For each bar, using the current bar and the previous bar:

1. VM+ (upward movement) = absolute value of (current high - previous low)
2. VM- (downward movement) = absolute value of (current low - previous high)
3. True range (TR) = the largest of: current high - current low; absolute value of (current high - previous close); absolute value of (current low - previous close)
4. Over 14 bars, add up VM+, VM- and TR.
5. VI+ = sum of VM+ / sum of TR
6. VI- = sum of VM- / sum of TR

**Worked example (3 bars, small numbers, instead of 14).**
Suppose over the last 3 bars the sums are: VM+ = 12, VM- = 6, TR = 10.
VI+ = 12 / 10 = **1.20**
VI- = 6 / 10 = **0.60**

VI+ is above VI-, so upward movement dominates. In a strong uptrend VI+ often sits above 1 while VI- sits below 1. Both lines hover around 1 when there is no clear direction.

Note: the standard period is 14 in most platforms, though some default to 21. Values can differ slightly depending on how a platform treats the first bars.

## How to read it

**Crossovers.** VI+ crossing above VI- is the basic bullish signal; VI- crossing above VI+ is the basic bearish one. Because the lines are smoothed over 14 bars, signals arrive after the move has started.

**Gap between the lines.** A wide gap suggests a stronger trend. A narrow gap, with the lines tangled together, suggests no clear direction.

**Level 1.** Some traders look for VI+ to rise above 1 as confirmation of an uptrend, and the same for VI- in a downtrend. This is a rule of thumb, not part of the original definition.

**Crossover extremes.** Botes and Siepman described using the high or low of the bar on which the crossover occurs as a trigger or stop reference. Many traders adapt this: enter if price breaks the crossover bar's high, and place the stop beyond its low. Whether this improves results has to be tested on your own data.

**Direction filter.** Even without taking crossovers as entries, VI+ above VI- can be used as a simple filter: only look for longs while it holds.

## Best market states

**Trends (best).** In a sustained move the lines separate and stay apart, so crossovers can mark a trend start and the gap can track its strength.

**Reversals (fair).** A crossover after a long decline can signal a possible turn, but being a lagging tool it often arrives after the first part of the move.

**Ranges (weak).** In sideways markets VI+ and VI- cross back and forth around 1. Every cross looks like a signal and most are whipsaws (quick losing reversals).

**Breakouts.** A breakout from a tight range can quickly push one line well above the other. The signal is real, but because of smoothing it may come after a large part of the first move.

**Volatility.** Since movement is divided by true range, the indicator adjusts for scale and handles changes in volatility better than a raw price-based measure.

## Settings

| Setting | Period | What it does |
|---|---|---|
| Short | 7 to 10 | Quicker crossovers, many more false signals |
| Default | 14 | Standard published setting |
| Long | 21 to 30 | Smoother lines, fewer signals, slower to react |

Changing the period changes how many bars of movement are summed. A short period reacts quickly but flips often. A long period filters noise but gives late signals. There is no widely accepted evidence for one best period, so test on the market and time frame you trade.

## Common mistakes

- Trading every crossover in a sideways market, where the lines cross over and over.
- Reading the indicator as a forecast. It describes movement that has already happened.
- Ignoring the gap between the lines. A crossover with the lines barely separated carries less information than one that opens a clear gap.
- Treating it as independent confirmation of ADX or DMI. They are built from related inputs, so agreement between them is less meaningful than agreement with a different kind of tool, such as a level on the chart.
- Placing the stop from the indicator alone. Stops belong on the price chart.

## Pairs well with

- **[ADX](/adx/)**: ADX measures trend strength without direction; Vortex adds direction. Together they help avoid trading crossovers when ADX is low.
- **[Exponential moving average](/exponential-moving-average/)**: a longer EMA gives the bigger trend direction to filter Vortex crossovers.
- **[Support and resistance](/support-and-resistance/)**: a crossover that coincides with a break of a known level has more context behind it.
- **[ATR](/atr/)**: ATR can size the stop distance once a Vortex signal has triggered.

## Sources

- Botes, Etienne and Siepman, Douglas (2010). "The Vortex Indicator". *Technical Analysis of Stocks & Commodities*, January 2010.

## FAQ

**What do VI+ and VI- mean?**
VI+ measures upward price movement and VI- measures downward movement, both over the last 14 bars and scaled by true range. Whichever line is higher shows which direction has dominated recently.

**What is a Vortex crossover?**
A crossover happens when VI+ moves above VI- (bullish) or VI- moves above VI+ (bearish). It suggests the dominant direction of movement has changed, but it is a lagging signal and can reverse quickly in sideways markets.

**Is the Vortex Indicator the same as ADX?**
No. ADX measures how strong a trend is without showing direction. Vortex shows direction with two lines, like the plus and minus lines in the DMI, but uses a different calculation. They are related in purpose, not identical.

**What is the best Vortex setting?**
The standard is 14 periods. Some traders use 21 for smoother signals. No setting is best in every market, so test your choice on the instrument and time frame you trade.

**Does the Vortex Indicator work in ranges?**
Not well. The two lines keep crossing around 1 when price goes sideways, creating many false signals. Using a trend strength filter such as ADX helps you skip those periods.

**Can Vortex be used on any market?**
Yes. It uses only highs, lows and closes, so it works on stocks, forex, futures and crypto. How reliable the signals are depends on how often that market trends.
