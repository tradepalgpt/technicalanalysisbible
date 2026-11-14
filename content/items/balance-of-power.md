---
slug: balance-of-power
name: Balance of Power
aka: [BOP, Balance of Power indicator]
type: momentum-oscillator
states: [trend]
weak_states: [range]
purposes: [confirmation]
inventor: Igor Livshin
year: 2001
default_settings: "(Close - Open) / (High - Low), usually smoothed with a 14-period average; zero line"
pairs_with: [simple-moving-average, trendline, volume, support-and-resistance]
related: [accumulation-distribution, chaikin-money-flow, force-index, on-balance-volume, marubozu]
compare: []
glossary: [oscillator, momentum, smoothing, candlestick-body]
wave: 3
reviewed: 14 November 2026
---

Balance of Power (BOP) measures who won each bar, buyers or sellers, by comparing the size of the candle body with the full high-to-low range. It runs from -1 to +1 on each bar and is usually smoothed. Traders use it to confirm trend direction and to spot when one side is losing control.

## At a glance

| | |
|---|---|
| Type | Momentum oscillator |
| Best market states | Trend |
| Weak in | Ranges and gappy markets |
| Best uses | Confirmation |
| Default settings | Raw per bar; smoothed with a 14-period average on most platforms |
| Created by | Igor Livshin, 2001 |
| Leading or lagging | Lagging once smoothed |
| Scale | -1 to +1 (raw) |

## What is Balance of Power?

Each bar has an opening price and a closing price. A strong buyer pushes the close far above the open; a strong seller pushes it far below. Balance of Power asks how big that open-to-close move is compared with the bar's whole range.

If a bar opens on its low and closes on its high, buyers controlled the whole bar and the raw value is +1. If it opens on its high and closes on its low, the value is -1. A bar that closes where it opened gives 0.

Igor Livshin presented the indicator in an article in *Technical Analysis of Stocks & Commodities* magazine in August 2001. Unlike many oscillators, it uses the open of each bar, so it is sensitive to gaps and to how a market's bars are formed.

## Formula

Raw BOP = (Close - Open) / (High - Low)

If High equals Low, the value is set to 0. Most platforms then smooth it with a 14-period simple moving average. Livshin's original discussion used a smoothed version, and platforms differ on the length.

**Worked example.** A bar opens at 100, trades between 98 and 106, and closes at 104.
Raw BOP = (104 - 100) / (106 - 98) = 4 / 8 = **+0.50**

Another bar opens at 104 and closes at 103 with a range of 102 to 106.
Raw BOP = (103 - 104) / (106 - 102) = -1 / 4 = **-0.25**

The smoothed line is the average of the last 14 values, so a few strong bars move it slowly.

## How to read it

**Zero line.** Smoothed BOP above zero means buyers have won more of the recent bars; below zero, sellers have. It is a simple direction check.

**Slope.** A rising line means buyers are getting stronger. A line that peaks and turns down while price still climbs hints that buying power is fading.

**Divergence.** Price makes a higher high but BOP makes a lower high. Divergences need price confirmation before being trusted.

**Extreme readings.** Because the raw value is limited to -1 to +1, a smoothed line close to +1 or -1 is unusual. The meaning of "extreme" depends on the smoothing length, so each trader needs to look at the history of the market.

## Best market states

**Trends (best).** In a healthy uptrend, bars often close well above their open, so BOP stays positive, and the opposite in a downtrend.

**Ranges (weak).** Bars alternate up and down, so smoothed BOP hovers around zero and crosses it often.

**Gappy markets (weak).** If a market opens with large gaps, the open-to-close move can ignore the gap, which gives a misleading picture of who is in control.

**Reversals (mixed).** A turn in BOP can come before a turn in price, but it also turns often without a reversal following.

## Settings

| Setting | Smoothing | What it does |
|---|---|---|
| Raw | None | One value per bar, very noisy |
| Faster | 5 to 9 periods | Reacts quickly, more false crosses |
| Default | 14 periods | Common platform setting |
| Slower | 21 to 30 periods | Smoother, later |

The type of average is also a choice: a simple average is the usual default.

## Common mistakes

- Reading the raw value as a signal. A single bar value is noise.
- Ignoring that the indicator depends on the open. Markets that trade nearly 24 hours have an arbitrary open, which changes the result.
- Treating it as a volume indicator. It uses only price, not volume.
- Expecting 0.5 to mean "overbought". It is not a bounded momentum scale in the way RSI is.
- Using it in sideways markets, where it crosses zero constantly.

## Pairs well with

- **[Simple moving average](/simple-moving-average/)**: the usual way to smooth BOP, and a moving average on price shows the trend it confirms.
- **[Trendline](/trendline/)**: a trendline break with BOP crossing zero is a simple confirmation.
- **[Volume](/volume/)**: BOP ignores volume, so volume tells you how much participation sits behind the bars.
- **[Support and resistance](/support-and-resistance/)**: gives the price levels where BOP shifts mean more.

## Sources

- Livshin, Igor (2001). "Balance of Power." *Technical Analysis of Stocks & Commodities*, August 2001.

## FAQ

**Who created Balance of Power?**
Igor Livshin presented it in *Technical Analysis of Stocks & Commodities* in August 2001. It is a relatively new indicator compared with RSI or MACD, and it is less widely studied.

**What does a positive Balance of Power mean?**
A positive smoothed value means that, on average, recent bars closed above their open, so buyers have been winning the bars. A negative value means the reverse. It describes recent bars, not a forecast.

**What is the default setting for Balance of Power?**
The raw formula has no setting. Most platforms smooth it with a 14-period simple average, but some show it unsmoothed, so check your platform.

**Is Balance of Power a volume indicator?**
No. It uses open, high, low and close only. It can be used alongside volume tools, but volume is not part of the calculation.

**Does it work in forex and crypto?**
It can be calculated on any market, but the open is the weak point. Markets that trade round the clock have a time-based open that depends on the chart's time zone and session setup, which can change the results.
