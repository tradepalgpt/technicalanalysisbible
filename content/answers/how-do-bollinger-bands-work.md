---
slug: how-do-bollinger-bands-work
title: "How do Bollinger Bands work?"
description: Bollinger Bands are a moving average with bands two standard deviations above and below. Construction, a worked 20-bar calculation, %B and how to read them.
query: how do bollinger bands work
pillar: volatility-guide
publish: 2028-02-09
reviewed: 17 November 2026
guides: [bollinger-bands, standard-deviation, percent-b]
siblings: [best-bollinger-band-settings, what-is-bollinger-band-width]
value: [chart, table, example, verdict]
chart: bollinger-bands
---

Bollinger Bands draw a 20-period simple moving average with an upper band two standard deviations above it and a lower band two standard deviations below. The bands widen when price swings more and narrow when it calms, so they show where price sits relative to its own recent volatility.

## Where they come from

John Bollinger developed [Bollinger Bands](/bollinger-bands/) in the early 1980s and set out his rules in *Bollinger on Bollinger Bands* (2001). The idea was to replace fixed-percentage envelopes, which stay the same width whatever the market does, with bands that adapt to volatility.

## The three lines

- **Middle band:** a 20-period simple moving average of the close.
- **Upper band:** middle band + 2 x the 20-period [standard deviation](/standard-deviation/) of the close.
- **Lower band:** middle band - 2 x the same standard deviation.

Bollinger uses the population standard deviation (dividing by n, not n - 1). Some platforms use the sample version; the difference is small but real.

## Worked example

Twenty closes on a share that is drifting higher:

50.0, 50.4, 50.2, 50.8, 51.0, 50.6, 51.2, 51.5, 51.1, 51.8, 52.0, 51.6, 52.2, 52.5, 52.1, 52.8, 53.0, 52.6, 53.3, 53.6

| Step | Calculation | Result |
|---|---|---|
| Middle band | Sum of 20 closes / 20 | 51.715 |
| Standard deviation (population) | Square root of the average squared distance from 51.715 | 1.025 |
| Upper band | 51.715 + 2 x 1.025 | 53.766 |
| Lower band | 51.715 - 2 x 1.025 | 49.664 |
| %B of the last close (53.6) | (53.6 - 49.664) / (53.766 - 49.664) | 0.96 |

With the sample standard deviation the figure would be 1.052 instead of 1.025, moving each band about 0.05. That is why two charts can disagree slightly.

## %B: where price sits inside the bands

[%B](/percent-b/) turns the bands into a single number:

%B = (close - lower band) / (upper band - lower band)

- %B = 1: close is on the upper band
- %B = 0.5: close is on the middle band
- %B = 0: close is on the lower band
- Above 1 or below 0: close is outside the bands

In the example, %B is 0.96: the close is just under the upper band.

## How traders read them

| Reading | What it means | What it does not mean |
|---|---|---|
| Close at or above the upper band | Price is high relative to its recent range | Not an automatic sell. In strong trends price can ride the band |
| Close at or below the lower band | Price is low relative to its recent range | Not an automatic buy |
| Bands narrowing | Volatility is falling | Not a direction call |
| Bands widening | Volatility is rising | Not that the move will continue |

Bollinger himself stressed that a touch of a band is not a signal by itself. He suggested pairing the bands with an indicator that does not use the same input, such as a volume or momentum indicator, to confirm.

Two common uses come from this:

1. **Reversion in ranges.** In a sideways market, closes outside a band often drift back towards the middle.
2. **Trend following.** In a strong trend, repeated closes at the outer band show strength. This is called [walking the band](/answers/walking-the-bollinger-band/).

The same chart cannot tell you which of the two you are in. That has to come from the market structure or a trend filter.

## Common mistakes

- Selling every upper-band touch in a trending market.
- Forgetting the bands are built on closes, so intrabar spikes beyond them are normal.
- Assuming that 2 standard deviations means 95% of prices fall inside. That rule needs normally distributed data; prices are not, so the share outside the bands varies.
- Changing the period without changing the multiplier. See [the best Bollinger Band settings](/answers/best-bollinger-band-settings/).

## Verdict

Bollinger Bands are a 20-period average with bands two standard deviations either side. They show whether price is high or low relative to its own recent volatility, and whether that volatility is growing or shrinking. They are a frame for reading price, not a buy or sell signal; the band touch means different things in a range and in a trend.

See [the volatility guide](/guide/volatility-guide/) for how they fit with other volatility tools.
