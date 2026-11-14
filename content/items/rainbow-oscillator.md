---
slug: rainbow-oscillator
name: Rainbow Oscillator
aka: [Rainbow Charts, Rainbow Oscillator]
type: momentum-oscillator
states: [trend]
weak_states: [range]
purposes: [filter]
inventor: Mel Widner
year: 1997
default_settings: "10 levels of recursive 2-period simple averages; lookback of 10 bars for the oscillator (platforms differ)"
pairs_with: [exponential-moving-average, adx, support-and-resistance, moving-average-ribbon]
related: [moving-average-ribbon, simple-moving-average, disparity-index, apo]
compare: []
glossary: [oscillator, smoothing, lookback-period, momentum]
wave: 3
reviewed: 14 November 2026
---

The Rainbow Oscillator shows how far price has moved from a bundle of repeatedly smoothed moving averages, drawn as a band of "rainbow" lines. A wide, one-sided bundle shows a strong trend; a tight, overlapping one shows indecision. Traders use it as a trend filter to judge whether a market is moving enough to be worth trading with the trend.

## At a glance

| | |
|---|---|
| Type | Momentum oscillator (built from a rainbow of moving averages) |
| Best market states | Trend |
| Weak in | Ranges |
| Best uses | Filter |
| Default settings | 10 levels of 2-period averages; platforms differ in details |
| Created by | Mel Widner, 1997 |
| Leading or lagging | Lagging |

## What is the Rainbow Oscillator?

Mel Widner introduced Rainbow Charts in the late 1990s. The idea is to take a simple moving average, then take a moving average of that, and repeat, producing a stack of progressively smoother lines. When drawn together in different colours, they look like a rainbow.

In a strong uptrend the fastest line (nearest to price) is on top and the slowest at the bottom, with wide gaps between them. In a sideways market the lines tangle together. The Rainbow Oscillator condenses this picture into a line that shows how far price is from the middle of the rainbow, and a pair of bands that show how wide the rainbow is.

The tool is a relative of the [Moving Average Ribbon](/moving-average-ribbon/), which also draws many averages together. It is niche, and different platforms implement it in slightly different ways, so the details below describe a common version rather than the only one.

## Formula

A common construction:

1. Level 1 = simple moving average (SMA) of the close over 2 bars.
2. Level 2 = 2-bar SMA of Level 1. Repeat up to Level 10.
3. Rainbow average = mean of the ten levels.
4. Oscillator = 100 x (Close - Rainbow average) / (Highest high - Lowest low over the last 10 bars)
5. Bands = plus and minus the width of the rainbow (highest level minus lowest level) as a percentage of the same range.

**Worked example.** Close = 52, Rainbow average = 50, highest high over 10 bars = 56, lowest low = 46.
Oscillator = 100 x (52 - 50) / (56 - 46) = 100 x 2 / 10 = **+20**

Some platforms use a different lookback, a different number of levels or a different scaling for the bands. Compare the formula before comparing values.

## How to read it

**Above or below zero.** Positive readings mean price is above the centre of the rainbow, negative below. In a persistent uptrend the oscillator stays mostly above zero.

**Width of the rainbow.** When the bands widen, the averages are spreading out and the trend is strengthening. When they narrow, the market is losing direction or consolidating.

**Pushing through the bands.** Price or the oscillator moving beyond the bands is read as a stretched move. Depending on the trader, this is either a sign of strength or a warning of exhaustion. The tool does not decide that for you.

**Filter use.** Many traders use it to filter out sideways periods: only take trend trades when the rainbow is open and sloping in one direction.

## Best market states

**Trends (best).** The rainbow fans out in a trend, and the oscillator stays on one side of zero. This helps confirm that a trend is worth following.

**Ranges (weak).** The lines tangle and the oscillator crosses zero often. That is useful as a warning that the market is not trending, but poor as a source of trade cues.

**Breakouts.** A narrow rainbow followed by a rapid opening can mark a breakout from consolidation. It confirms after the fact rather than predicting.

**Reversals and volatility.** The tool lags, so reversals show up late. It does not measure volatility directly, though volatile markets widen the rainbow.

## Settings

| Setting | Common value | Effect |
|---|---|---|
| Averaging period per level | 2 | Longer periods make a smoother, slower rainbow |
| Number of levels | 10 | More levels give a heavier smoothing |
| Oscillator lookback | 10 | Shorter gives more sensitivity |

The tool has few widely agreed defaults. Treat the values above as common, not official, and keep them fixed when testing so results can be compared.

## Common mistakes

- Assuming every platform draws the same rainbow.
- Using it to time entries when it works best as a filter.
- Treating a band breach as an automatic sell or buy.
- Using it in a sideways market and expecting clear trend cues.
- Ignoring support, resistance and price structure.
- Tweaking the settings until the past looks perfect.

## Pairs well with

- **[Exponential moving average](/exponential-moving-average/)**: a longer average sets the larger trend direction.
- **[ADX](/adx/)**: a second check on trend strength.
- **[Support and resistance](/support-and-resistance/)**: choose where to act on the filter.
- **[Moving Average Ribbon](/moving-average-ribbon/)**: the same family of idea with plain averages.

## Sources

- Widner, Mel (1997). "Rainbow Charts." *Technical Analysis of Stocks & Commodities*.

## FAQ

**What is the Rainbow Oscillator used for?**
Mainly as a trend filter. A wide, one-sided rainbow shows a trending market; a tight, tangled one shows indecision. Some traders also watch the bands for stretched moves, but that use is less settled.

**Who created the Rainbow Oscillator?**
Mel Widner, who published Rainbow Charts in *Technical Analysis of Stocks & Commodities* in 1997, as far as we are aware. The oscillator version is a later way of presenting that idea, and platforms differ in how they build it.

**Why do platforms show different Rainbow Oscillators?**
Because the original is a charting idea, not one fixed formula. Platforms choose different numbers of levels, averaging lengths and band scalings. Check the settings before comparing values.

**Is it good for range markets?**
Not for trade cues. In a range the lines overlap and the oscillator flips around zero. It can still be useful as a signal that the market is not trending.

**How is it different from a moving average ribbon?**
A ribbon plots several averages with different lengths directly on the chart. The Rainbow builds each line from the previous one and adds an oscillator and bands summarising the picture.
