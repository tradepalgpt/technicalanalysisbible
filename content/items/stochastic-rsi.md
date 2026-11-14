---
slug: stochastic-rsi
name: Stochastic RSI
aka: [StochRSI]
type: momentum-oscillator
states: [range, reversal]
weak_states: [trend]
purposes: [entry]
inventor: Tushar Chande and Stanley Kroll
year: 1994
default_settings: "RSI 14, Stochastic 14, %K 3, %D 3; levels 0.8 and 0.2 (or 80 and 20)"
pairs_with: [support-and-resistance, adx, exponential-moving-average, rsi]
related: [rsi, stochastic-oscillator, williams-r, connors-rsi, cci]
compare: [stochastic-rsi-vs-rsi, rsi-vs-stochastic]
glossary: [overbought, oversold, divergence, smoothing, oscillator, lookback-period]
wave: 1
reviewed: 14 November 2026
---

Stochastic RSI (StochRSI) applies the Stochastic formula to RSI values instead of to price. It shows where the current RSI sits within its own recent high-low range, so it moves between 0 and 1 (or 0 and 100) far more often than RSI. It is a fast oscillator used mainly for entry timing in ranges.

## At a glance

| | |
|---|---|
| Type | Momentum oscillator (an oscillator of an oscillator) |
| Best market states | Range, reversal |
| Weak in | Strong trends, and anywhere noise is high |
| Best uses | Entry timing |
| Default settings | RSI 14, Stochastic 14, %K 3, %D 3; levels 0.8 / 0.2 |
| Created by | Tushar Chande and Stanley Kroll, 1994 |
| Leading or lagging | Faster than RSI, but built from RSI so it still lags price |

## What is Stochastic RSI?

RSI rarely reaches 70 or 30 in quiet markets, so it can go a long time without giving a signal. Chande and Kroll wanted an indicator that reached its extremes more often. Their answer was to take RSI and measure it against its own recent range, the same way the [Stochastic Oscillator](/stochastic-oscillator/) measures price against its range.

The result swings quickly. When RSI is at its highest value of the last 14 bars, Stochastic RSI reads 1 (or 100). When RSI is at its lowest, it reads 0. This makes it very responsive, and also very jumpy.

It was introduced in the book *The New Technical Trader* (1994).

## Formula

1. Calculate RSI over N bars (default 14). See [RSI](/rsi/).
2. Find the highest and lowest RSI value over the last M bars (default 14).
3. StochRSI = (RSI - Lowest RSI) / (Highest RSI - Lowest RSI)
4. Many platforms then smooth it: %K is a 3-period simple moving average of StochRSI, and %D is a 3-period simple moving average of %K.

**Worked example.** The current RSI is 58. Over the last 14 bars RSI has ranged from a low of 40 to a high of 70.
StochRSI = (58 - 40) / (70 - 40) = 18 / 30 = **0.60**

Note: the original formula gives a 0 to 1 scale and has no smoothing. Some platforms multiply by 100 and add the %K and %D smoothing, so the same indicator can look quite different between charting packages.

## How to read it

**Overbought and oversold.** Above 0.8 (or 80) is overbought and below 0.2 (or 20) is oversold. Because the indicator is so sensitive, it enters these zones often. Treat each visit as an alert, not an instruction.

**Line crosses.** %K crossing above %D from below 0.2 is read as bullish. %K crossing below %D from above 0.8 is read as bearish.

**The 0.5 line.** A cross of 0.5 means RSI has moved from the lower half to the upper half of its recent range, or the reverse. Some traders use it as a rough momentum shift signal.

**Divergence.** Divergence against price is possible, but because StochRSI is so volatile, divergence on RSI itself is usually cleaner. See [Divergence](/divergence/).

## Best market states

**Ranges (best).** In a clear sideways market, its fast swings can match the short rotations between support and resistance.

**Reversals (fair).** It can flag a short-term turn, but only reliably when a price signal at a known level agrees.

**Trends (weak).** It will sit at 0 or 1 for long periods in a strong trend, giving signals that fail. Used with the trend, pullbacks to the lower zone in an uptrend are sometimes treated as entries, but this needs a separate trend filter.

**Volatility.** It reacts to RSI's changes, not to volatility. Choppy markets cause constant swings across the whole scale.

## Settings

| Setting | Values | What it does |
|---|---|---|
| Default | RSI 14, Stochastic 14, 3, 3 | The common starting point |
| Faster | RSI 7 or 9, Stochastic 7 to 9 | More signals, more noise |
| Slower | RSI 14, Stochastic 21+, or longer smoothing | Fewer signals, later reaction |

There are two lookbacks: one for RSI and one for the Stochastic step. Shortening either makes the indicator twitchier. Smoothing (the 3 and 3) trades noise for delay.

## Common mistakes

- Trading every touch of 0.8 or 0.2. The indicator is built to hit them often.
- Using it as a stand-alone system.
- Forgetting that it is a measure of RSI, not of price. A 1.0 reading does not mean price is at a high.
- Comparing values across platforms without checking the 0-1 versus 0-100 scale and the smoothing.
- Using it in a strong trend for counter-trend trades.
- Stacking it with RSI and Stochastic and calling it three confirmations. All three come from the same close prices.

## Pairs well with

- **[RSI](/rsi/)**: gives the slower, smoother read; StochRSI times the entry within it.
- **[Support and resistance](/support-and-resistance/)**: a fast signal means more when it fires at a known level.
- **[ADX](/adx/)**: a low ADX points to a range, where StochRSI is least harmful.
- **[Exponential moving average](/exponential-moving-average/)**: use a longer EMA as a trend filter and ignore signals against it.

## Sources

- Chande, Tushar S. and Kroll, Stanley (1994). *The New Technical Trader*. Wiley.
- Wilder, J. Welles Jr. (1978). *New Concepts in Technical Trading Systems*. Trend Research. (Source of RSI.)

## FAQ

**What is the difference between Stochastic RSI and RSI?**
RSI measures gains against losses in price. Stochastic RSI measures where RSI sits in its own recent range. It is faster and touches its extremes more often. See [Stochastic RSI vs RSI](/compare/stochastic-rsi-vs-rsi/).

**Is Stochastic RSI the same as the Stochastic Oscillator?**
No. The Stochastic Oscillator uses price highs, lows and closes. Stochastic RSI uses RSI values only. They share the same range-position formula but start from different inputs.

**What are the default settings for Stochastic RSI?**
The usual defaults are RSI length 14, Stochastic length 14, %K smoothing 3 and %D smoothing 3, with levels at 0.8 and 0.2 (or 80 and 20 on a 0 to 100 scale). Platforms vary, so check yours.

**Why does Stochastic RSI give so many signals?**
It rescales RSI to its own recent range, so even small moves in RSI can push it from 0 to 1. That is by design, and it is why many of its signals are noise. Filter them with price structure.

**Is Stochastic RSI good for day trading?**
Some day traders use it because it is quick, but speed brings false signals. Its value depends on the market, the time frame and the filter you put around it. Test it before trusting it.
