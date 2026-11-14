---
slug: stochastic-oscillator
name: Stochastic Oscillator
aka: [Stochastic, Stochastics, %K/%D]
type: momentum-oscillator
states: [range, reversal]
weak_states: [trend]
purposes: [entry, confirmation]
inventor: George Lane
year: 1950s
default_settings: "14, 3, 3 (slow); levels 80 and 20"
pairs_with: [support-and-resistance, adx, exponential-moving-average, rsi]
related: [rsi, stochastic-rsi, williams-r, stochastic-momentum-index, cci, connors-rsi]
compare: [rsi-vs-stochastic, macd-vs-stochastic, stochastic-vs-williams-r]
glossary: [overbought, oversold, divergence, smoothing, oscillator, lookback-period]
wave: 1
reviewed: 14 November 2026
---

The Stochastic Oscillator is a momentum oscillator that shows where the latest close sits inside the high-low range of the last 14 bars, on a scale from 0 to 100. Readings above 80 are usually called overbought and below 20 oversold. Traders use it to time entries in ranges and to spot fading momentum.

## At a glance

| | |
|---|---|
| Type | Momentum oscillator |
| Best market states | Range, reversal |
| Weak in | Strong trends |
| Best uses | Entry timing, confirmation |
| Default settings | 14, 3, 3 (slow version); levels 80 / 20 |
| Created by | George Lane, 1950s |
| Leading or lagging | Mostly lagging, but it turns sooner than RSI because it is more sensitive |

## What is the Stochastic Oscillator?

The Stochastic rests on a simple observation: in an uptrend, closes tend to finish near the top of the recent range, and in a downtrend they finish near the bottom. The indicator measures exactly that. If the close is at the highest high of the last 14 bars, it reads 100. If it is at the lowest low, it reads 0.

George Lane, a trader and educator, is credited with developing it in the late 1950s. Lane said the oscillator follows the speed or momentum of price rather than price itself, and that momentum often changes direction before price does.

It has two lines. **%K** is the main line. **%D** is a moving average of %K and works as a signal line.

## Formula

1. Find the highest high and lowest low of the last N bars (default N = 14).
2. Raw %K = 100 x (Close - Lowest low) / (Highest high - Lowest low)
3. **Fast Stochastic:** %K is the raw value above, and %D is a 3-period simple moving average of %K.
4. **Slow Stochastic** (the usual default today): %K is a 3-period simple moving average of raw %K, and %D is a 3-period simple moving average of that slowed %K. This is why the default is written 14, 3, 3.

**Worked example.** Over the last 14 bars the highest high is 60 and the lowest low is 40. The latest close is 55.
%K = 100 x (55 - 40) / (60 - 40) = 100 x 15 / 20 = **75**

Note: the "slow" smoothing is a separate step on top of the raw value, so charting packages label fast and slow settings differently. Check which version your platform plots before comparing numbers.

## How to read it

**Overbought and oversold.** Above 80 the close is near the top of its recent range; below 20 it is near the bottom. In a range this often lines up with the edges. In a trend it can stay there for a long time.

**%K and %D crossover.** When %K crosses above %D from below 20, it is read as a bullish signal. When %K crosses below %D from above 80, it is read as bearish. Crossovers inside the middle of the scale carry little meaning.

**Divergence.** Price makes a new high but the Stochastic makes a lower high (bearish), or price makes a new low but the Stochastic makes a higher low (bullish). See [Divergence](/divergence/). It is a warning, not a timing tool.

**The 50 line.** Some traders treat readings above 50 as buyers in control and below 50 as sellers.

## Best market states

**Ranges (best).** When price swings between clear support and resistance, the Stochastic moves in step with those swings and its extremes often mark the edges.

**Reversals (good, with care).** A cross out of an extreme, plus a price signal at a known level, is a common reversal setup. On its own the cross is too frequent to trust.

**Trends (weak).** In a strong trend the oscillator pins itself near 100 or 0 and gives repeated early "reversal" signals that fail. A trend filter such as [ADX](/adx/) helps avoid them.

**Volatility.** The Stochastic ignores volatility. It only compares the close with the range, so a quiet market and a wild market can give the same reading.

## Settings

| Setting | Values | What it does |
|---|---|---|
| Fast | 5, 3 | Very responsive, many signals, much noise |
| Default | 14, 3, 3 | Lane's lookback of 14 with slow smoothing. A balance for most markets |
| Slower | 21, 5, 5 | Fewer signals, later reaction |

The first number is the lookback period for the high-low range. A longer lookback makes the oscillator reach 0 and 100 less often. The two smoothing numbers reduce noise but add delay. Levels of 80 and 20 are standard; some traders use 90 and 10 with short settings.

## Common mistakes

- Selling every time the oscillator crosses 80 in an uptrend.
- Treating every %K and %D crossover as a signal, including those in the middle of the scale.
- Mixing up fast and slow versions, then wondering why two charts disagree.
- Using the Stochastic alone, with no view of price structure or the bigger time frame.
- Changing the settings after every loss until the past data fits.
- Confusing it with RSI. They answer different questions: the Stochastic compares the close with a range, while RSI compares gains with losses.

## Pairs well with

- **[Support and resistance](/support-and-resistance/)**: a bullish cross from oversold at known support is more meaningful than one in open space.
- **[ADX](/adx/)**: a low ADX suggests a range, where the Stochastic works best.
- **[Exponential moving average](/exponential-moving-average/)**: a longer EMA gives the trend direction, so you only act on signals that agree with it.
- **[RSI](/rsi/)**: a second momentum view; agreement strengthens a divergence.

## Sources

- Murphy, John J. (1999). *Technical Analysis of the Financial Markets*. New York Institute of Finance.
- Pring, Martin J. (2014). *Technical Analysis Explained*, 5th edition. McGraw-Hill.

## FAQ

**What is the difference between fast and slow Stochastic?**
The fast version uses raw %K and a 3-period average of it as %D. The slow version first smooths %K with a 3-period average, then averages again for %D. Slow gives fewer, smoother signals and is the usual default.

**What does a Stochastic reading above 80 mean?**
It means the latest close is in the top fifth of the recent high-low range. In a sideways market that often sits near resistance. In a strong uptrend it can last for many bars, so it is not a sell signal by itself.

**Is the Stochastic better than RSI?**
Neither is better. The Stochastic is faster and gives more signals, with more false ones. RSI is smoother. Which suits you depends on the market and your style. See [RSI vs Stochastic](/compare/rsi-vs-stochastic/).

**What are the best Stochastic settings?**
There is no single best setting. The default 14, 3, 3 is the common starting point. Shorter settings react faster but produce more noise. Test any change on the market and time frame you actually trade.

**Does the Stochastic work in a trend?**
Poorly, if used for overbought and oversold signals. It can stay at an extreme for a long time. Some traders instead use pullbacks from an extreme back toward 50 as a way to join the trend, but that needs a separate trend filter.
