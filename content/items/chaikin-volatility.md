---
slug: chaikin-volatility
name: Chaikin Volatility
aka: [CV, Chaikin's Volatility]
type: volatility
states: [volatility]
weak_states: []
purposes: [filter]
inventor: Marc Chaikin
year: 1980s
default_settings: "10-period EMA of high minus low; 10-period rate of change"
pairs_with: [atr, bollinger-bands, standard-deviation, support-and-resistance]
related: [atr, normalized-atr, historical-volatility, bollinger-band-width, mass-index, relative-volatility-index]
compare: []
glossary: [volatility, rate-of-change, ema]
wave: 3
reviewed: 14 November 2026
---

Chaikin Volatility measures how fast the average high-low range of bars is expanding or shrinking. It smooths the daily range with an exponential moving average, then shows the percentage change in that average over a set number of bars. A rising reading means ranges are widening; a falling one means they are narrowing.

## At a glance

| | |
|---|---|
| Type | Volatility indicator |
| Best market states | Volatility changes |
| Weak in | None specific; it says nothing about direction |
| Best uses | Filter |
| Default settings | 10-period EMA of the range; 10-period rate of change |
| Created by | Marc Chaikin, 1980s (approximate) |
| Leading or lagging | Lagging; it reflects ranges already seen |

## What is Chaikin Volatility?

Most volatility tools, such as [ATR](/atr/), tell you how big recent ranges are. Chaikin Volatility asks a different question: are ranges getting bigger or smaller compared with a few bars ago? It is a rate of change applied to a smoothed range, so it measures the speed of change in volatility rather than its level.

It was developed by Marc Chaikin, who also gave his name to the Chaikin Money Flow and Chaikin Oscillator. The year is not well documented, so this guide says only the 1980s as an approximate date.

Because it measures change, the line can be positive or negative. It crosses zero when the average range stops growing and starts shrinking, or the reverse. A high reading does not mean prices are high, only that the range has been widening fast.

## Formula

1. For each bar, take the range: high minus low.
2. Smooth it with an exponential moving average (EMA), default 10 periods.
3. Compute the percentage change between today's smoothed value and the smoothed value N bars ago (default N = 10).

Chaikin Volatility = (EMA of range today - EMA of range N bars ago) / EMA of range N bars ago x 100

**Worked example.** Suppose the 10-bar EMA of the range is 2.0 today and was 1.6 ten bars ago.
Change = (2.0 - 1.6) / 1.6 x 100 = 0.4 / 1.6 x 100 = **25**

The reading is +25%: the smoothed range has grown by a quarter. If today's EMA were 1.2, the reading would be (1.2 - 1.6) / 1.6 x 100 = **-25**.

Platforms differ in small ways. Some use the high-low range exactly as above, while others offer a version based on true range. Some show the result as a percentage and some as a ratio. Check the settings before comparing readings.

## How to read it

**Rising line.** The average range is widening. This often comes with the start of a sharp move or around news, but it does not tell you the direction.

**Falling line.** Ranges are tightening. Quiet periods often follow active ones, and the reverse is also common.

**Zero line.** Crossing above zero means the smoothed range is bigger than N bars ago. Crossing below means smaller.

**Extremes.** Very high readings usually come near sharp sell-offs or news shocks, since ranges expand quickly then. Some traders have linked very high readings to market bottoms and falling readings to tops. Treat this as a loose habit rather than a rule, as it is not backed by firm evidence.

**Comparing with history.** Because there are no fixed thresholds, the useful comparison is against the indicator's own past range on that market and time frame.

## Best market states

**Volatility changes (best).** The tool is built to show when ranges are expanding or contracting, so it can help spot the move from a quiet phase to an active one.

**Breakouts (useful).** A rising reading as price leaves a tight range suggests the move has some energy behind it. A breakout with a flat reading may lack the same force.

**Ranges (use with care).** In a range, ranges are small and the line hovers near zero, which is normal and does not signal anything.

**Trends.** The indicator is direction-blind, so it cannot tell you if a trend is up or down.

**Reversals.** Spikes can coincide with turning points, but spikes also occur in the middle of trends.

## Settings

| Setting | Value | What it does |
|---|---|---|
| Smoothing length | 10 (default) | Length of the EMA applied to the range. Shorter reacts faster and is noisier |
| Rate-of-change length | 10 (default) | How far back the comparison looks. Shorter reacts faster |
| Range type | High minus low | True range is an option on some platforms |

Common variations use 10/10, but traders also try 14 or 20 in each. Longer values give a smoother line that is slower to react. The values themselves are conventions, so test on your own market and time frame.

## Common mistakes

- Reading a rising line as bullish. It only says ranges are growing, whichever way price is moving.
- Using fixed levels such as "above 20" without looking at the market's own history.
- Mixing up level and change. A low reading can still mean a large range if the range was already large.
- Comparing readings across platforms that use different range definitions.
- Using it alone to time reversals.

## Pairs well with

- **[ATR](/atr/)**: gives the size of the range in price units, which complements the percentage change shown here.
- **[Bollinger Bands](/bollinger-bands/)**: bands that widen and narrow show volatility on the chart itself.
- **[Standard deviation](/standard-deviation/)**: another way to measure how spread out price is.
- **[Support and resistance](/support-and-resistance/)**: use rising volatility near a key level as a hint that the level may be about to be tested.

## Sources

- Colby, Robert W. (2003). *The Encyclopedia of Technical Market Indicators*, 2nd edition. McGraw-Hill.

## FAQ

**What does Chaikin Volatility measure?**
It measures the speed at which the average high-low range is changing. A positive reading means ranges are widening compared with N bars ago, and a negative one means they are narrowing. It does not show direction.

**What is the default Chaikin Volatility setting?**
The usual default is a 10-period EMA of the high-low range and a 10-period rate of change. Many platforms use these values, though some offer slightly different range definitions.

**How is it different from ATR?**
ATR shows how big recent ranges are, in price units. Chaikin Volatility shows how quickly the smoothed range is rising or falling, as a percentage. One is a level and the other is a rate of change.

**Is a high Chaikin Volatility reading bullish or bearish?**
Neither. A high reading means ranges are widening fast. That can happen in a sell-off, a rally or a news shock, so you need price to tell you the direction.

**Can it predict market tops and bottoms?**
Not reliably. Some traders watch for unusual readings near turning points, but spikes also occur mid-trend. Use it to understand the state of volatility, not as a forecasting tool.
