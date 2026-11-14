---
slug: true-strength-index
name: True Strength Index (TSI)
aka: [TSI, Blau TSI]
type: momentum-oscillator
states: [trend, reversal]
weak_states: [range]
purposes: [entry, confirmation]
inventor: William Blau
year: 1991
default_settings: "25 and 13 periods; signal line 7 (some platforms)"
pairs_with: [exponential-moving-average, support-and-resistance, adx, divergence]
related: [macd, rsi, stochastic-momentum-index, ppo, momentum-indicator]
compare: []
glossary: [momentum, oscillator, signal-line, crossover, smoothing, divergence]
wave: 2
reviewed: 14 November 2026
---

The True Strength Index (TSI) is a momentum oscillator that smooths price changes twice with exponential moving averages, then expresses them as a percentage between -100 and +100. Its smoothness reduces noise compared with raw momentum. Traders use zero-line crosses, signal-line crossovers and divergence to confirm trends and time entries.

## At a glance

| | |
|---|---|
| Type | Momentum oscillator |
| Best market states | Trend, reversal |
| Weak in | Ranges |
| Best uses | Entry timing, confirmation |
| Default settings | 25 and 13 periods; signal line 7 on some platforms |
| Created by | William Blau, 1991 |
| Leading or lagging | Lagging because of the double smoothing, but smoother than most momentum tools |

## What is the True Strength Index?

William Blau introduced the TSI in *Technical Analysis of Stocks & Commodities* in 1991 and described it in more detail in his book *Momentum, Direction, and Divergence* (1995).

The idea is simple. Take the change in price each bar (the raw momentum), smooth it with a long exponential moving average, then smooth it again with a shorter one. Do the same with the absolute value of the change. Divide the first by the second and scale to 100.

The result is similar in spirit to the [MACD](/macd/) and [Momentum Indicator](/momentum-indicator/), but it is bounded, which makes extremes easier to see, and the double smoothing removes much of the jitter that raw momentum has. The cost is delay: smoothing always makes a signal late.

It differs from the [RSI](/rsi/) in that RSI uses average gains and losses with a single smoothing step, while TSI uses signed price change with two steps.

## Formula

1. Price change (PC) = current close - previous close
2. Double-smoothed PC = EMA of (EMA of PC over 25 periods) over 13 periods
3. Double-smoothed absolute PC = EMA of (EMA of |PC| over 25 periods) over 13 periods
4. TSI = 100 x (double-smoothed PC / double-smoothed absolute PC)
5. Signal line (optional) = 7-period EMA of TSI on platforms that include it

**Worked example.** Suppose the double-smoothed price change is +0.30 and the double-smoothed absolute change is 0.60.
TSI = 100 x (0.30 / 0.60) = **+50**

If the smoothed change is -0.15 with the same absolute value of 0.60:
TSI = 100 x (-0.15 / 0.60) = **-25**

If every bar rose, signed and absolute smoothed values would match and TSI would reach +100. If every bar fell, it would reach -100. In practice, readings beyond about +25 or -25 are usually treated as strong.

Note: Blau's original used 25 and 13 as the long and short smoothing. Some platforms differ on the signal line length (commonly 7, sometimes 13). Always check which version your chart uses.

## How to read it

**Zero line.** TSI above zero means smoothed momentum is up, which suggests buyers have the upper hand; below zero, sellers. A cross of the zero line is a slower trend change signal.

**Signal line crossover.** When TSI crosses above its signal line it is a bullish signal; below, a bearish one. Crossovers occurring far from zero are often regarded as more meaningful than those around the zero line.

**Overbought and oversold.** Commonly cited zones are about +25 and -25, but they depend on the settings and market. Readings in these zones show strong momentum, not an automatic reversal. See [overbought and oversold](/overbought-oversold/).

**Divergence.** Price making a higher high while TSI makes a lower high is bearish divergence, and the reverse is bullish. Because TSI is smooth, divergences are cleaner than with raw momentum, though still unreliable on their own.

**Trendline breaks.** Because the line is smooth, traders sometimes draw a trendline on TSI itself and treat a break as an early hint of a change.

## Best market states

**Trends (best).** In a steady trend TSI stays on one side of zero, and pullbacks that do not cross zero can mark a chance to join the trend.

**Reversals (good, with care).** Divergence and a signal line crossover at an extreme reading can warn of a turn, ideally with a price trigger at a level.

**Ranges (weak).** In sideways markets TSI hovers near zero and crosses its signal line often. Most of the signals are noise.

**Breakouts.** A breakout often pushes TSI quickly away from zero, which shows strength. Because of smoothing, the first part of the move may already be over.

**Volatility.** TSI is a ratio, so it adjusts for the size of price moves, which helps when volatility changes.

## Settings

| Setting | Periods | What it does |
|---|---|---|
| Faster | 13 and 7 | Quicker, more crossovers, noisier |
| Default | 25 and 13 | Blau's original |
| Slower | 40 and 20 | Smoother, fewer signals, later |

The first number is the long smoothing and the second the short. Shortening them moves the line closer to raw momentum. Lengthening them gives a smoother line but a later signal. Test on your market and time frame; no set of numbers has been shown to be best.

## Common mistakes

- Trading every signal line crossover near zero in a sideways market.
- Treating +25 and -25 as sell and buy levels. They are context, not triggers.
- Forgetting the delay caused by double smoothing and being surprised by late entries.
- Mixing up platforms with different signal line lengths or default periods.
- Relying on TSI alone with no level or stop plan from the price chart.
- Changing periods until the past looks good.

## Pairs well with

- **[Exponential moving average](/exponential-moving-average/)**: gives the bigger trend direction so you take TSI signals only that way.
- **[Support and resistance](/support-and-resistance/)**: a TSI signal at a known level has more context.
- **[ADX](/adx/)**: a rising ADX confirms a trend for TSI to measure.
- **[Divergence](/divergence/)**: TSI divergences are cleaner than most, and add weight when seen at a level.

## Sources

- Blau, William (1995). *Momentum, Direction, and Divergence*. John Wiley & Sons.
- Blau, William (1991). "The True Strength Index". *Technical Analysis of Stocks & Commodities*, November 1991.

## FAQ

**What is the True Strength Index?**
It is a momentum oscillator by William Blau that double-smooths price changes with exponential moving averages and scales the result between -100 and +100. It shows direction and strength of momentum with less noise than raw momentum.

**What are the default TSI settings?**
Blau's standard is a 25-period long smoothing and a 13-period short smoothing. Many platforms add a 7-period signal line. Some use different defaults, so check your chart's settings.

**How is TSI different from RSI?**
RSI compares average gains to average losses with one smoothing step and is bounded between 0 and 100. TSI uses signed price change with two smoothing steps and is bounded between -100 and +100 around a zero line.

**What does a TSI zero cross mean?**
It means smoothed momentum has changed sign. A cross above zero suggests upward momentum now dominates, and a cross below suggests downward. It lags because of the double smoothing.

**Is TSI better than MACD?**
Not provably. TSI is bounded and smoother, which makes extremes and divergences easier to see. MACD is more widely available and its histogram is common. Either works only with context from price.

**Does TSI work for short-term trading?**
It can on any time frame. For short-term charts, faster settings are used, but they add noise. Many traders confirm with a higher time frame trend and a level on the chart.
