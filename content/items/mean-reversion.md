---
slug: mean-reversion
name: Mean Reversion
aka: [reversion to the mean, fading extremes, counter-trend pullback trading]
type: price-action
states: [range, reversal]
weak_states: [trend, breakout]
purposes: [entry]
inventor: Not attributed to one person
year: Unknown
default_settings: "Enter when price is stretched far from its average; target the average; fixed stop"
pairs_with: [rsi, bollinger-bands, support-and-resistance, adx, atr]
related: [range-trading, overbought-oversold, vwap, stochastic-oscillator, trend-following, false-breakout]
compare: []
glossary: [mean, overbought, oversold, standard-deviation]
wave: 1
reviewed: 14 November 2026
---

Mean reversion is the idea that when price moves far from its average, it tends to move back toward it. A mean-reversion trader buys when price is stretched below the average, and sells when it is stretched above, aiming for a return to the middle. It works until a trend forms.

## At a glance

| | |
|---|---|
| Type | Price action method / trading approach |
| Best market states | Range, reversal |
| Weak in | Trends and breakouts |
| Best uses | Entry |
| Typical tools | RSI, Bollinger Bands, VWAP, moving averages, support and resistance |
| Typical exit | Return to the average, or the opposite band |
| Natural opposite | [Trend following](/trend-following/) |

## What is mean reversion?

Price swings around a typical level. When it goes too far one way, the move often fades. A rubber band is the usual picture: the further it is pulled, the stronger the snap back. The "mean" can be a moving average, VWAP, the midpoint of a range or a fair-value estimate.

No one person invented it. The statistical idea of reverting to an average is old, and it appears in many fields. In trading it shows up as buying oversold readings, selling overbought ones, and fading moves to the edge of a range.

The weakness is the trend. A market can stay stretched for a long time, and what looks cheap keeps getting cheaper. Mean reversion trades often win small and lose big, so the stop and position size matter more than the entry. A common saying among traders is that the method wins often until it loses a lot. Without a stop it can end an account.

## How it is identified

Mean reversion needs two things: a measure of the average and a measure of how far is "too far".

**Distance from a moving average.** For example, price more than 2 ATR below a 20-period average.

**Bands.** Price closing outside the lower [Bollinger Band](/bollinger-bands/), which is set two standard deviations below a 20-period average by default.

**Oscillators.** RSI below 30, or RSI(2) below 10 in some short-term systems. See [RSI](/rsi/) and [overbought and oversold](/overbought-oversold/).

**Range edges.** Price at a clear support or resistance level inside a range. See [range trading](/range-trading/).

**Worked example.** The 20-period average is 100 and ATR is 2. Price drops to 95, which is 5 points or 2.5 ATR below the average. A trader buys, with a stop at 92.5 and a target at 100. Risk is 2.5 points. Reward is 5 points, a ratio of 2 to 1. If price keeps falling and closes below 92.5, the trade is out and the market is treated as trending, not reverting.

## How to read it

**Stretch.** The further price is from the average, the stronger the pull back is assumed to be. This is only a tendency and is not a promise.

**Market type.** Before using it, check the market is not in a strong trend. A low ADX supports the view that it is not.

**Reaction.** Many traders wait for a sign that the stretch is ending, such as a rejection candle or the oscillator turning, instead of buying the first touch.

**Exit.** The average is the usual target. Some take half at the average and let the rest run to the other side.

**Time stop.** If price has not reverted after a set number of bars, exit. A trade that stays stretched is a warning.

## Best market states

**Ranges (best).** Clear edges and a flat average give the cleanest signals.

**Reversals (good).** Extreme moves at major levels can mark turns, but they can also be the start of a trend.

**Trends (weak).** Buying dips in a downtrend or selling rallies in an uptrend against a strong move is where the biggest losses come from.

**Breakouts (weak).** A genuine breakout pushes price away from the average and keeps it there. Fading it loses.

**Volatility.** In very volatile markets, stretches are common and deep. Stops based on ATR and smaller size help. A [volatility spike](/vix/) can mean the regime has changed.

## Settings

| Setting | Example | Effect |
|---|---|---|
| Average length | 20 periods | Shorter reacts faster and gives more signals |
| Stretch measure | 2 standard deviations or 2 ATR | Larger is rarer and stricter |
| Oscillator | RSI(14) 30 / 70, or RSI(2) 10 / 90 | Short periods give many more signals |
| Stop | 1 to 2 ATR beyond entry | Wider survives noise but costs more per loss |
| Time stop | 5 to 10 bars | Exits trades that do not revert |

These are examples only. Test them on your own market and time frame.

## Common mistakes

- Using it in a strong trend because the price looks "cheap".
- Trading without a stop, hoping price will come back.
- Averaging down on a losing trade, which turns a small loss into a large one.
- Treating oversold or overbought as a signal by itself.
- Ignoring costs, since many small trades add up in spreads and fees.
- Confusing it with a guarantee. "Always returns to the mean" is not true on any usable time scale.

## Pairs well with

- **[RSI](/rsi/)**: a common way to measure how stretched price is.
- **[Bollinger Bands](/bollinger-bands/)**: show a volatility-adjusted stretch around the average.
- **[Support and resistance](/support-and-resistance/)**: stretches that land on a known level are more meaningful.
- **[ADX](/adx/)**: a low reading helps confirm the market is not trending.
- **[ATR](/atr/)**: sizes the stretch and the stop.

## Sources

- Bollinger, John (2002). *Bollinger on Bollinger Bands*. McGraw-Hill.
- Wilder, J. Welles Jr. (1978). *New Concepts in Technical Trading Systems*. Trend Research. (RSI.)
- Murphy, John J. (1999). *Technical Analysis of the Financial Markets*. New York Institute of Finance.

## FAQ

**What is mean reversion in trading?**
It is the idea that price tends to return toward its average after a large move away. A mean-reversion trader buys when price is stretched low and sells when stretched high, aiming for a move back to the average.

**Does mean reversion work?**
It works in ranging markets and fails in trending ones. Some short-term systems have shown results in some periods, but results vary by market and over time. Test with costs included, and always use a stop.

**What is the best indicator for mean reversion?**
RSI, Bollinger Bands and distance from a moving average are the usual choices. None works alone. They give a measure of how stretched price is, and you still need a market-state check and a stop.

**What is the difference between mean reversion and range trading?**
Range trading uses horizontal support and resistance as the edges. Mean reversion uses an average, which can move, and does not require a flat range. Range trading can be seen as one form of mean reversion.

**What is the biggest risk with mean reversion?**
A trend that does not stop. Price can stay far from its average for a long time, and without a stop the losses can grow without limit. Small, frequent wins can be wiped out by one large loss.
