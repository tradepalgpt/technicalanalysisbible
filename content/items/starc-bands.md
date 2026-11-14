---
slug: starc-bands
name: Starc Bands
aka: [STARC Bands, Stoller Average Range Channels]
type: volatility
states: [range, volatility]
weak_states: [trend]
purposes: [entry, exit]
inventor: Manning Stoller
year: 1980s
default_settings: "6-period SMA of close; 15-period ATR; multiplier 2"
pairs_with: [atr, bollinger-bands, keltner-channels, support-and-resistance]
related: [keltner-channels, bollinger-bands, donchian-channels, atr, standard-deviation, percent-b]
compare: []
glossary: [volatility, atr, envelope, mean-reversion]
wave: 3
reviewed: 14 November 2026
---

STARC Bands are a volatility envelope. They draw a short moving average of price and place two bands around it, one above and one below, at a set multiple of the Average True Range (ATR). Price tends to spend most of its time inside the bands, so touches of the outer bands are watched as possible turning points.

## At a glance

| | |
|---|---|
| Type | Volatility channel |
| Best market states | Ranges, volatility |
| Weak in | Strong trends, where price can ride the band |
| Best uses | Entry and exit near band extremes |
| Default settings | 6-period SMA; 15-period ATR; multiplier 2 |
| Created by | Manning Stoller, 1980s (approximate) |
| Leading or lagging | Lagging; the bands follow price |

## What are STARC Bands?

STARC stands for Stoller Average Range Channels. They are named after Manning Stoller, who developed them. The exact year is not well documented, so this guide says only the 1980s as an approximate date.

The design is close to the [Keltner Channels](/keltner-channels/): a moving average in the middle and bands set by a volatility measure. The difference is in the defaults. STARC uses a short, fast 6-period simple moving average (SMA) as the centre, and ATR over a longer window of 15 bars to set the width. The short average means the bands hug price closely, while the longer ATR keeps the width steady.

The bands widen when ranges grow and narrow when ranges shrink. Unlike [Bollinger Bands](/bollinger-bands/), they use ATR rather than standard deviation. ATR accounts for gaps through true range, so the bands can respond differently on gappy markets.

## Formula

1. Centre line = simple moving average of the close over 6 bars.
2. ATR over 15 bars (the average of true range, which is the largest of high minus low, high minus previous close, and previous close minus low).
3. Upper band = centre line + 2 x ATR
4. Lower band = centre line - 2 x ATR

**Worked example.** Suppose the 6-bar SMA is 50 and the 15-bar ATR is 1.5.
Upper band = 50 + 2 x 1.5 = **53**
Lower band = 50 - 2 x 1.5 = **47**

If the next day the SMA moves to 50.5 and ATR is 1.6, the bands shift to 53.7 and 47.3.

Platforms differ. The standard multiplier is 2 on many platforms, though some describe other values, and some use different average lengths. Some calculate ATR with Wilder's smoothing, others with a simple average. Check the settings before comparing bands from two sources.

## How to read it

**Touches of the upper band.** Price reaching the upper band is a sign of a stretched move up. In a ranging market, traders watch for a turn down from here. This is a mean-reversion approach: bet that price returns to the centre line.

**Touches of the lower band.** The mirror image, watched as a possible area for a bounce.

**Close back inside.** Some traders wait for a close back inside the band after a touch, instead of selling or buying the touch itself. This reduces false signals but gives a worse price.

**Band walking.** In a strong trend, price can stay at or beyond one band for many bars. In that case, a band touch does not mean reversal. It is a sign of strength.

**Channel width.** Narrow bands show low volatility, and wide bands show high volatility. Squeezes sometimes come before bigger moves, though direction is unknown.

**Centre line.** The 6-bar SMA is often used as a first profit target for mean-reversion trades.

Stoller's own rules and the exact original signals are not widely documented in standard references, so the approaches above are the common ways traders use the bands today.

## Best market states

**Ranges (best).** When price swings between support and resistance, the outer bands often sit close to those edges, so a touch has meaning.

**Volatility changes (useful).** The channel's width gives a visual cue to calm and active periods.

**Trends (weak).** Price can run along one band for a long time. Fading each touch in a trend is a common way to lose money with any band tool.

**Breakouts.** A close well outside the band, with growing range, may mark a breakout rather than an overextension. It needs another tool to tell them apart.

**Reversals.** A touch combined with a reversal candle at a known level gives a better reason than the touch alone.

## Settings

| Setting | Value | What it does |
|---|---|---|
| SMA length | 6 (default) | Centre line. Longer makes the bands smoother and slower |
| ATR length | 15 (default) | Volatility window. Longer is steadier |
| Multiplier | 2 (default) | Width. Higher gives fewer touches and wider stops |

A higher multiplier (for example 2.5 or 3) reduces the number of touches but makes each one rarer. A lower multiplier gives more signals and more noise. Whatever you choose, test it on the market and time frame you trade.

## Common mistakes

- Fading every touch in a trending market.
- Treating a band touch as a signal without any price confirmation.
- Using the defaults on every market without checking whether the touches line up with real turning points.
- Confusing STARC with Keltner Channels: the centre line and ATR lengths differ.
- Setting a stop just outside the band when the band itself moves with each bar.

## Pairs well with

- **[ATR](/atr/)**: the building block. Reading ATR on its own helps you size stops.
- **[Bollinger Bands](/bollinger-bands/)**: an alternative band built on standard deviation. Agreement between both can add weight to a touch.
- **[Keltner Channels](/keltner-channels/)**: a close relative with a different centre line and ATR length.
- **[Support and resistance](/support-and-resistance/)**: a band touch at a known level is more meaningful than one in open space.

## Sources

- Colby, Robert W. (2003). *The Encyclopedia of Technical Market Indicators*, 2nd edition. McGraw-Hill.
- Wilder, J. Welles Jr. (1978). *New Concepts in Technical Trading Systems*. Trend Research. (Source of the Average True Range.)

## FAQ

**What does STARC stand for?**
It stands for Stoller Average Range Channels, after Manning Stoller. The bands are drawn around a short moving average at a distance set by the Average True Range.

**What are the default STARC Bands settings?**
The usual defaults are a 6-period simple moving average, a 15-period ATR and a multiplier of 2. Some platforms use different lengths, so check your charting package.

**How are STARC Bands different from Bollinger Bands?**
Bollinger Bands set their width using standard deviation of the close, while STARC uses ATR, which includes gaps and the full range. STARC also uses a shorter centre average by default. The results can differ, especially in gappy markets.

**How are STARC Bands different from Keltner Channels?**
Both use a moving average and ATR. STARC defaults to a 6-period SMA and a 15-period ATR, while Keltner commonly uses a 20-period EMA and a 10-period ATR. The look and the number of touches therefore differ.

**Can STARC Bands be used for trend trading?**
They can show strength when price stays beyond a band, but they are mainly seen as a range tool. In a trend, touches of the outer band often fail as reversal signals, so other tools are needed to judge the trend.
