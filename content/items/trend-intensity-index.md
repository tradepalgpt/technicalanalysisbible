---
slug: trend-intensity-index
name: Trend Intensity Index
aka: [TII]
type: trend
states: [trend]
weak_states: [range]
purposes: [filter]
inventor: Not attributed to one person
year: Unknown
default_settings: "60-period SMA; 30-bar window; levels 80 and 20 (varies by platform)"
pairs_with: [adx, exponential-moving-average, support-and-resistance, choppiness-index]
related: [aroon-oscillator, vertical-horizontal-filter, linear-regression-slope, aroon]
compare: []
glossary: [trend, range, lookback-period]
wave: 3
reviewed: 14 November 2026
---

The Trend Intensity Index (TII) measures what share of recent closes sit above a moving average, weighted by distance. It runs from 0 to 100. High readings mean most of the recent price action has been above the average, which fits an uptrend. Low readings suggest a downtrend. It is a simple trend strength filter.

## At a glance

| | |
|---|---|
| Type | Trend indicator |
| Best market states | Trend |
| Weak in | Ranges |
| Best uses | Trend filter |
| Default settings | 60-period SMA, 30-bar window, levels 80 / 20 (varies) |
| Created by | Not attributed to one person |
| Leading or lagging | Lagging |

## What is the Trend Intensity Index?

The TII asks a plain question: over the last 30 bars, how much of the time and by how much has price been above its 60-period average, compared with below it? If price has been above the average almost all of the time, the index is near 100. If it has been below, it is near 0. Around 50, the two sides are balanced.

The indicator is described in charting-platform documentation and trader publications, and the sources do not agree on one clear originator, so no author is credited here. Details such as the periods and the exact steps can vary between platforms.

Unlike the ADX, the TII does give direction. A high value means "mostly above the average", a low value "mostly below". The distance from 50 is the strength.

## Formula

A commonly described version:

1. Calculate a 60-period simple moving average (SMA) of the close.
2. Look at the most recent 30 bars. For each, find the difference between the close and the SMA.
3. SD+ = sum of the positive differences (close above SMA).
4. SD- = sum of the absolute values of the negative differences (close below SMA).
5. **TII = 100 x SD+ / (SD+ + SD-)**

**Worked example.** Say over the last 30 bars the positive differences add up to 24 points and the negative differences add up to 6 points.

TII = 100 x 24 / (24 + 6) = 100 x 24 / 30 = **80**

If the two sums were equal, the TII would be 50.

Note: some platforms use a different SMA length (often tied to the window, such as a 60-period SMA with a 30-bar window, which is half the average length) and different threshold levels. A few compare against an EMA instead of an SMA.

## How to read it

**Above 80.** A strong uptrend by this measure: price has spent almost all of the recent period well above its average. This is often treated as strength, not as a sell signal.

**Below 20.** A strong downtrend by the same logic.

**Around 50.** No clear lean. Typical of ranges or of a trend that is turning.

**Crossing 50.** A move up through 50 means weight has shifted to the upside. A move down means the reverse. Some traders use this as a simple trend flip.

**Leaving the extremes.** A fall from above 80 to below 80 can indicate that the trend is slowing. It is a description of fading strength, not a reversal signal.

## Best market states

**Trends (best).** In a persistent trend the index sits at one end of its range. That gives a clean filter: take longs when high, shorts when low.

**Ranges (weak).** Price crosses the average often, so the index drifts around 50 and moves sharply on each cross. Signals are rarely worth acting on.

**Reversals.** The index lags because it uses 30 bars of history. It confirms a new trend well after the turn.

**Breakouts.** A breakout from a range pushes price far from the average and raises or lowers the index quickly.

**Volatility.** It scales with distance, so a single big move can dominate the 30-bar window for a long time.

## Settings

| Setting | Values | What it does |
|---|---|---|
| SMA length | 60 | The moving average that sets the reference |
| Window | 30 | Number of bars summed |
| High / low levels | 80 / 20 | Marks strong trend zones |

A shorter SMA and window make the index react sooner but swing more. A longer pair gives a smoother reading of the larger trend. There are no proven best values. As with other indicators, avoid fitting settings to past data.

## Common mistakes

- Reading high values as "overbought" instead of "strong".
- Using it in a range and treating each swing as a signal.
- Comparing values between platforms that use different periods.
- Forgetting that a single huge bar can distort the window.
- Expecting it to reveal a turn early. It lags.
- Ignoring price structure and relying on the index alone.

## Pairs well with

- **[ADX](/adx/)**: measures strength without direction, a good cross-check.
- **[Exponential moving average](/exponential-moving-average/)**: gives a price-based trend line to compare with the index's reading.
- **[Support and resistance](/support-and-resistance/)**: shows whether a strong reading sits near a level that could stop the move.
- **[Choppiness Index](/choppiness-index/)**: confirms whether the market is trending or sideways.

## Sources

- Achelis, Steven B. (2001). *Technical Analysis from A to Z* (2nd ed.). McGraw-Hill. (General reference for trend indicators.)
- Murphy, John J. (1999). *Technical Analysis of the Financial Markets*. New York Institute of Finance. (Background on moving averages and trend.)

## FAQ

**What does the Trend Intensity Index measure?**
It measures how far, and how consistently, price has been above its moving average over a recent window, as a share of total distance either side. The result is between 0 and 100.

**What is a good Trend Intensity Index reading?**
Common platforms mark 80 and above as a strong uptrend and 20 and below as a strong downtrend. These are conventions that vary, not fixed rules. Check the levels your platform uses.

**How is the TII different from ADX?**
The ADX measures how strong a trend is but not which way it points. The TII points to a direction as well: high means mostly above the average, low means mostly below.

**Who created the Trend Intensity Index?**
Sources differ and no single originator is credited here. It appears in charting documentation and trader literature as a general-purpose trend filter.

**Does the TII work in sideways markets?**
Not well. Price keeps crossing the average, so the index swings around 50. Pair it with another tool that flags ranges so you know when to ignore it.
