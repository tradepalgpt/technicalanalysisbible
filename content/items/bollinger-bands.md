---
slug: bollinger-bands
name: Bollinger Bands
aka: [Bollinger Bands, BB]
type: volatility
states: [range, volatility, breakout]
weak_states: [trend]
purposes: [entry, exit, filter]
inventor: John Bollinger
year: 1983
default_settings: "20-period SMA, 2 standard deviations"
pairs_with: [rsi, keltner-channels, volume, support-and-resistance]
related: [bollinger-band-width, percent-b, bollinger-squeeze, keltner-channels, donchian-channels, standard-deviation]
compare: [bollinger-bands-vs-keltner-channels, donchian-vs-bollinger]
glossary: [volatility, standard-deviation, mean-reversion, squeeze]
wave: 1
reviewed: 14 November 2026
---

Bollinger Bands are a volatility indicator made of a moving average with an upper and lower band set two standard deviations away. The bands widen when price swings grow and narrow when the market goes quiet. Traders use them to judge whether price is relatively high or low, and to spot quiet spells before breakouts.

## At a glance

| | |
|---|---|
| Type | Volatility bands |
| Best market states | Ranges, volatility changes, breakouts |
| Weak in | Strong trends (if used for fading) |
| Best uses | Entry, exit, volatility filter |
| Default settings | 20-period simple moving average, bands at 2 standard deviations |
| Created by | John Bollinger, early 1980s |
| Leading or lagging | Lagging (built from a moving average and past volatility) |

## What are Bollinger Bands?

Bollinger Bands put an envelope around price that stretches and shrinks with volatility. The middle line is a simple moving average. The outer bands sit a set number of standard deviations above and below it. Standard deviation is a measure of how spread out recent prices are, so when price swings widely the bands move apart, and when price is calm they squeeze together.

John Bollinger developed them in the early 1980s. His key idea was that fixed-width envelopes (a set percentage above and below an average) do not adapt to changing markets, while volatility-based bands do.

Because of how standard deviation works, most closes fall inside the bands most of the time. A close outside a band is therefore unusual, but not a reversal signal on its own. Bollinger himself stresses that touching a band is not a buy or sell signal.

## Formula

1. **Middle band** = 20-period simple moving average (SMA) of the close
2. **Standard deviation (SD)** of the last 20 closes
3. **Upper band** = middle band + (2 x SD)
4. **Lower band** = middle band - (2 x SD)

Two related measures come from the bands:
- **Bandwidth** = (upper - lower) / middle. Shows how wide the bands are.
- **%B** = (close - lower) / (upper - lower). Shows where price sits within the bands: 1 at the upper band, 0 at the lower.

**Worked example.** The 20-period SMA is 50.00 and the standard deviation is 1.50.
Upper band = 50.00 + 3.00 = **53.00**
Lower band = 50.00 - 3.00 = **47.00**
If price closes at 52.10, %B = (52.10 - 47.00) / 6.00 = **0.85**, near the top of the bands.

## How to read it

**Band touches in a range.** When the market is moving sideways, price near the upper band is relatively high and near the lower band relatively low. Traders look for a reversal sign (a candle pattern, an RSI turn) there before acting.

**Walking the band.** In a strong trend, price can hug the upper band (or lower band) for many bars. This shows strength, not exhaustion.

**The squeeze.** When the bands narrow to their tightest in months, volatility is unusually low. Quiet periods tend to be followed by bigger moves, so a squeeze often comes before a breakout. It does not say which way.

**The middle band.** In trends, pullbacks often find support or resistance near the 20-period average.

**Band breakouts.** A strong close outside the bands after a squeeze, especially on rising volume, can mark the start of a new move.

## Best market states

**Ranges (best for fading).** When there is no clear trend, prices tend to swing between the bands, so the outer bands mark relatively stretched prices.

**Volatility changes (best overall).** Bands show at a glance whether the market is calm or wild, which helps with stop placement and position size.

**Breakouts (good).** The squeeze is one of the most watched set-ups for spotting a breakout before it happens.

**Strong trends (risky for fading).** Selling every upper-band touch in an uptrend is a common way to lose money: price can walk the band for a long time.

**Reversals (mixed).** A close back inside the bands after a strong push outside can hint at a turn, but needs confirmation.

## Settings

| Setting | Period | Deviations | What it does |
|---|---|---|---|
| Short-term | 10 | 1.5 | Tighter, faster bands; more touches |
| Default | 20 | 2.0 | Bollinger's standard |
| Long-term | 50 | 2.1 to 2.5 | Wider, slower bands for longer horizons |

Bollinger suggests nudging the deviations up slightly when lengthening the period, and down when shortening it, so the bands contain a similar share of price action. Raising the deviation number widens the bands and makes touches rarer.

## Common mistakes

- Treating a touch of the upper band as "overbought, sell" and of the lower band as "oversold, buy" in every market.
- Assuming a squeeze tells you the breakout direction. It only tells you a move is likely.
- Using band touches without any other confirmation.
- Forgetting that the bands are built from past prices and will always look perfect in hindsight.
- Changing the period without adjusting the deviations to match.

## Pairs well with

- **[RSI](/rsi/)**: a band touch with RSI divergence is a stronger reversal hint than either alone.
- **[Keltner Channels](/keltner-channels/)**: Bollinger Bands moving inside Keltner Channels is a popular way to define a squeeze.
- **[Volume](/volume/)**: rising volume on a band breakout adds weight to it.
- **[Support and resistance](/support-and-resistance/)**: a band touch at a known level is more meaningful.

## Sources

- Bollinger, John (2001). *Bollinger on Bollinger Bands*. McGraw-Hill.
- Murphy, John J. (1999). *Technical Analysis of the Financial Markets*. New York Institute of Finance.
- Achelis, Steven B. (2000). *Technical Analysis from A to Z*. McGraw-Hill.

## FAQ

**What are the best Bollinger Band settings?**
The default 20-period average with 2 standard deviations is the most widely used and works on most markets and time frames. Shorter periods give faster, tighter bands. There is no single best setting; test on your own market first.

**What does it mean when price touches the upper Bollinger Band?**
It means price is high relative to its recent average and volatility. In a range that can be a place to look for a turn; in a strong trend it often just shows strength. A touch is not a sell signal on its own.

**What is a Bollinger Band squeeze?**
A squeeze is when the bands narrow to their tightest for a long time, showing very low volatility. Calm periods are often followed by large moves, so traders watch squeezes for breakouts. The squeeze does not show which way price will break.

**What percentage of prices stay inside Bollinger Bands?**
Most closes fall inside the bands, but the exact share varies by market and period. Prices are not normally distributed, so the textbook 95% figure for two standard deviations should not be relied on.

**What is the difference between Bollinger Bands and Keltner Channels?**
Bollinger Bands use standard deviation, so they react sharply to volatility. Keltner Channels use Average True Range, so they are smoother. See [Bollinger Bands vs Keltner Channels](/compare/bollinger-bands-vs-keltner-channels/).
