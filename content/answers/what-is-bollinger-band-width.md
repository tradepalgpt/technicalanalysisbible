---
slug: what-is-bollinger-band-width
title: "What is Bollinger Band width?"
description: Bollinger BandWidth is the distance between the bands divided by the middle band. The formula, a worked example and how traders read high and low values.
query: what is bollinger band width
pillar: volatility-guide
publish: 2028-02-16
reviewed: 17 November 2026
guides: [bollinger-band-width, bollinger-bands, bollinger-squeeze]
siblings: [what-is-a-bollinger-squeeze, how-do-bollinger-bands-work]
value: [chart, table, example, verdict]
chart: bollinger-band-width
---

Bollinger Band width, which John Bollinger calls BandWidth, is the gap between the upper and lower bands divided by the middle band. It turns [Bollinger Bands](/bollinger-bands/) into a single number for volatility, so you can see at a glance whether the bands are tight or wide compared with their own history.

## The formula

BandWidth = (upper band - lower band) / middle band

Many platforms multiply by 100 to show it as a percent. Because the upper and lower bands sit the same number of standard deviations either side of the middle, BandWidth with the default 2 standard deviations is the same as 4 x standard deviation / middle band. It is the [standard deviation](/standard-deviation/) of closes as a share of the average, scaled up.

Bollinger introduced BandWidth alongside %B in *Bollinger on Bollinger Bands* (2001), as the two indicators derived from the bands.

## Worked examples

| Upper | Middle | Lower | BandWidth |
|---|---|---|---|
| 105 | 100 | 95 | (105 - 95) / 100 = 10.0% |
| 102 | 100 | 98 | (102 - 98) / 100 = 4.0% |
| 110 | 100 | 90 | (110 - 90) / 100 = 20.0% |
| 51.5 | 50 | 48.5 | (51.5 - 48.5) / 50 = 6.0% |
| 53.766 | 51.715 | 49.664 | 4.102 / 51.715 = 7.93% |

The last row uses the 20-bar example from [how Bollinger Bands work](/answers/how-do-bollinger-bands-work/).

Dividing by the middle band matters. A 3-point gap between bands is wide on a 20 share and narrow on a 400 share. As a percent, BandWidth can be compared across time even when price has moved a long way, and roughly across markets.

## How to read it

| BandWidth | What it says | What it does not say |
|---|---|---|
| Low compared with its own history | Volatility has contracted | Which way price will break |
| Rising from a low | Volatility is expanding | That the move will last |
| High compared with its own history | Volatility is unusually high | That a top or bottom is in |
| Falling from a high | The burst of volatility is fading | That the trend is over |

The key is "compared with its own history". A BandWidth of 4% might be very low for a small-cap share and normal for a large index. Look at where the current reading sits in, say, the last six months of the same chart.

## BandWidth and the squeeze

Bollinger's best-known use of BandWidth is the [Bollinger squeeze](/bollinger-squeeze/): BandWidth falling to its lowest level in about six months. The logic is that volatility tends to cycle between quiet and busy spells, so an unusually low reading marks a quiet spell that may give way to a busier one. The details are in [what is a Bollinger squeeze](/answers/what-is-a-bollinger-squeeze/).

## BandWidth vs ATR percent

Both give a percent measure of volatility. [Bollinger Band width](/bollinger-band-width/) is built from the spread of closes over 20 bars. ATR percent is built from bar ranges, including gaps. BandWidth also rises when price trends steadily, because the closes spread away from their own average, even if each bar is small. ATR percent does not. So a smooth trend can show rising BandWidth with flat ATR.

## Common mistakes

- Comparing BandWidth values across different settings. A 20, 2 reading and a 20, 2.5 reading are on different scales.
- Treating a low reading as a direction signal.
- Calling a reading "low" without a lookback. Low compared with what?
- Forgetting that a steady trend widens the bands even when bars are small.

## Verdict

BandWidth is the distance between the Bollinger Bands as a share of the middle band. It is a clean way to see whether volatility, as Bollinger Bands measure it, is high or low for that market right now. Use it to spot contraction and expansion, never to choose a direction.

More in [the volatility guide](/guide/volatility-guide/).
