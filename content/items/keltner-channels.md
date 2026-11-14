---
slug: keltner-channels
name: Keltner Channels
aka: [Keltner Bands, Keltner Envelope]
type: volatility
states: [trend, volatility, breakout]
weak_states: [range]
purposes: [entry, stop, filter]
inventor: Chester Keltner
year: 1960
default_settings: "20-period EMA; 2 x ATR(10) (common modern version); original: 10-day average"
pairs_with: [atr, bollinger-bands, adx, support-and-resistance]
related: [bollinger-bands, donchian-channels, atr, ttm-squeeze, bollinger-squeeze, moving-average-envelope, supertrend]
compare: [bollinger-bands-vs-keltner-channels]
glossary: [volatility, envelope, true-range, exponential-moving-average, breakout]
wave: 1
reviewed: 14 November 2026
---

Keltner Channels draw three lines around price: a moving average in the middle and two outer lines set a distance away. The modern version uses an exponential moving average and a multiple of the Average True Range. They help show trend direction, breakouts from normal ranges and possible stop levels.

## At a glance

| | |
|---|---|
| Type | Volatility channel (envelope) |
| Best market states | Trend, volatility expansion, breakout |
| Weak in | Choppy ranges, where price crosses the lines often |
| Best uses | Entry, stop placement, filter |
| Default settings | 20-period EMA, 2 x ATR(10) (modern); original uses a 10-day average |
| Created by | Chester Keltner, 1960 (modern version often credited to Linda Raschke) |
| Leading or lagging | Lagging: built from moving averages and ATR |

## What are Keltner Channels?

Keltner Channels put a band around a moving average so you can see when price is stretched or breaking out. The width is based on volatility. When the market is busy, the channel is wide; when it is quiet, it narrows.

Chester Keltner described the original version in his 1960 book *How to Make Money in Commodities*. It used a 10-day simple moving average of the typical price (high + low + close, divided by three) for the middle line, and added and subtracted the 10-day average of the daily high-low range.

The version on most platforms today is different. It uses an exponential moving average for the middle and a multiple of [ATR](/atr/) for the width. This is often credited to Linda Raschke. Because versions differ, always check which one your chart uses.

## Formula

**Modern (EMA + ATR) version**

1. Middle line = 20-period EMA of close.
2. Upper channel = EMA + (multiplier x ATR)
3. Lower channel = EMA - (multiplier x ATR)

Common defaults are a 20-period EMA, ATR over 10 periods and a multiplier of 2. Some platforms use ATR over 20 and a multiplier of 1 or 1.5. Check yours.

**Original (Chester Keltner) version**

1. Typical price = (High + Low + Close) / 3
2. Middle line = 10-day simple moving average of typical price
3. Range = 10-day average of (High - Low)
4. Upper = middle + range; Lower = middle - range

**Worked example (modern).** The 20-period EMA is 100 and ATR(10) is 1.5, with a multiplier of 2.
Upper = 100 + 2 x 1.5 = **103**
Lower = 100 - 2 x 1.5 = **97**

Note: Keltner uses ATR, which is based on true range, so it reacts less sharply to one-off spikes than the standard deviation used in [Bollinger Bands](/bollinger-bands/).

## How to read it

**Direction.** The slope of the middle line and price holding above or below it show the trend. Price hugging the upper channel in an uptrend is a sign of strength.

**Breakouts.** A close outside the channel means price has moved further than normal volatility suggests. Some traders read that as a breakout and trend start. Others read it as an extreme to fade in a range. Which is right depends on the market state.

**Pullbacks.** In a trend, pullbacks to the middle line are often used as entries.

**Stops.** The opposite channel line, or a point a set distance from the middle line, is sometimes used as a volatility-based stop.

**Squeeze.** When Bollinger Bands fit inside Keltner Channels, volatility is compressed. See [TTM Squeeze](/ttm-squeeze/).

## Best market states

**Trends (best).** Because the middle line is an EMA and the width follows ATR, the channels fit orderly trends well.

**Breakouts and volatility expansion.** A close outside the channel after a quiet period can flag a move, especially when it also clears a known level.

**Ranges (weak).** In a sideways market, price repeatedly crosses the lines in both directions and gives whipsaws. Fading the outer lines can work in some ranges but gets caught when a trend starts.

**Volatility.** The channel adapts to volatility by design, but ATR lags, so a sudden jump in volatility takes a few bars to widen it.

## Settings

| Setting | Value | What it does |
|---|---|---|
| EMA length | 20 | Sets the centre line. Shorter is faster; longer is smoother |
| ATR length | 10 (or 20 on some platforms) | How much volatility history is used |
| Multiplier | 2 (some use 1 to 3) | Widens or narrows the channel |

A larger multiplier means fewer closes outside the channel, so each one is more unusual. A smaller one gives more signals and more noise. Changing the EMA and ATR length changes how smooth or quick the channel is.

## Common mistakes

- Assuming all Keltner Channels are the same. The original and modern versions differ.
- Reading a close outside the channel as automatically bullish, or as automatically a fade. It depends on whether the market is trending or ranging.
- Comparing Keltner Channels with Bollinger Bands as if they were interchangeable. ATR and standard deviation behave differently.
- Using it in a choppy range and being whipsawed.
- Placing stops exactly on the channel line, where many others place them too.
- Changing the multiplier until past trades look good.

## Pairs well with

- **[ATR](/atr/)**: the volatility measure inside the channel. Knowing the ATR helps size positions.
- **[Bollinger Bands](/bollinger-bands/)**: comparing the two shows squeezes and different volatility readings.
- **[ADX](/adx/)**: confirms whether a trend exists before using channel breakouts.
- **[Support and resistance](/support-and-resistance/)**: a channel break through a key level carries more weight.

## Sources

- Keltner, Chester W. (1960). *How to Make Money in Commodities*. The Keltner Statistical Service.
- Murphy, John J. (1999). *Technical Analysis of the Financial Markets*. New York Institute of Finance.
- Wilder, J. Welles Jr. (1978). *New Concepts in Technical Trading Systems*. Trend Research. (Source of ATR.)

## FAQ

**What is the difference between Keltner Channels and Bollinger Bands?**
Bollinger Bands use standard deviation of price for their width. Keltner Channels use ATR, based on true range. Keltner lines are usually smoother. See [Bollinger Bands vs Keltner Channels](/compare/bollinger-bands-vs-keltner-channels/).

**What are the default Keltner Channel settings?**
The common modern default is a 20-period EMA with a multiplier of 2 times a 10-period ATR. Some platforms use ATR 20 and a multiplier of 1 or 1.5. The original 1960 method used a 10-day average.

**What does a close above the upper Keltner Channel mean?**
Price has moved further than normal volatility suggests. In a trend or breakout it can show strength. In a range it can show an extreme. Use the market state, not the line alone, to decide.

**Can Keltner Channels be used for stops?**
Yes. Some traders place stops beyond the opposite channel line or a multiple of ATR from the middle. The stop should sit on a price level that invalidates the idea, not just on the indicator.

**Who invented Keltner Channels?**
Chester Keltner described them in 1960. The modern EMA and ATR version differs from his original, and Linda Raschke is often credited with it..
