---
slug: bollinger-bands-vs-keltner-channels
title: Bollinger Bands vs Keltner Channels
a: bollinger-bands
b: keltner-channels
reviewed: 14 November 2026
---

Bollinger Bands and Keltner Channels both draw lines around a moving average, but they set the width differently. Bollinger Bands use standard deviation of closing prices, so they react sharply to price swings. Keltner Channels use the Average True Range (ATR), which is smoother and less affected by a single spike.

## At a glance

| | Bollinger Bands | Keltner Channels |
|---|---|---|
| Middle line | 20-period simple moving average | 20-period EMA (modern version) |
| Width set by | 2 standard deviations | 2 x ATR(10) (common modern version) |
| Created by | John Bollinger, 1983 | Chester Keltner, 1960 (modern version often credited to Linda Raschke) |
| Width behaviour | Expands and contracts quickly | Changes more smoothly |
| Best market state | Ranges, volatility changes, breakouts | Trends, volatility expansion, breakouts |
| Main weakness | Misleads if used to fade strong trends | Choppy ranges, where price crosses the lines often |

## When to use Bollinger Bands

[Bollinger Bands](/bollinger-bands/) suit traders who want a quick read on whether price is relatively high or low, and on how quiet the market is. Because standard deviation responds to big moves, the bands tighten in quiet spells and widen fast when volatility returns. The tools built on them, bandwidth and %B, make squeezes and relative position easy to read.

## When to use Keltner Channels

[Keltner Channels](/keltner-channels/) suit traders who want a steadier envelope for trend direction, breakouts and stop placement. Since ATR is built from true range, a single spike distorts the channel less than it distorts the bands. Many trend followers like the channel for that reason, and the ATR-based width gives a natural distance for stops.

## Using both together

Some traders plot both and watch how they interact. When the Bollinger Bands move inside the Keltner Channels, volatility is unusually low; when they push back out, volatility is rising. This idea is the basis of the [TTM Squeeze](/ttm-squeeze/). Because the two tools are built from related measures, treat the overlap as a volatility read, not a direction signal.

## Common mix-ups

- **Assuming both use standard deviation.** Keltner Channels use ATR in the modern version.
- **Expecting identical settings across platforms.** Some platforms use ATR over 20 and a multiplier of 1 or 1.5 for Keltner.
- **Treating a touch of the outer line as a reversal.** In a strong trend, price can ride the band or channel for a long time.
- **Mixing up the original and modern Keltner.** The original used a 10-day average of typical price, not an EMA and ATR.

## FAQ

**Which is better, Bollinger Bands or Keltner Channels?**
Neither is better in general. Bollinger Bands react faster to volatility changes. Keltner Channels are smoother and often suit trend following. Pick the one that fits your style and test it on your market.

**Why are Keltner Channels smoother?**
ATR averages true ranges using Wilder's smoothing, so one large bar changes it less. Standard deviation squares the distance from the average, so large moves have a bigger effect.

**Do they work in ranges?**
Bollinger Bands are generally read in ranges for relative high and low. Keltner Channels are weaker there, because price crosses the lines often.

**What does a squeeze mean?**
It means volatility is low relative to recent history. It does not say which way price will move.
