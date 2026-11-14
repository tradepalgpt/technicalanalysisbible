---
slug: momentum-indicator
name: Momentum Indicator
aka: [Momentum, MOM, Price momentum]
type: momentum-oscillator
states: [trend, reversal]
weak_states: [range]
purposes: [confirmation]
inventor: Not attributed to one person
year: Unknown
default_settings: "10 periods (some platforms use 14), zero line"
pairs_with: [exponential-moving-average, support-and-resistance, adx, trendline]
related: [rate-of-change, macd, rsi, awesome-oscillator, chande-momentum-oscillator]
compare: []
glossary: [momentum, oscillator, divergence, lookback-period]
wave: 2
reviewed: 14 November 2026
---

The Momentum Indicator subtracts the closing price from a set number of bars ago from the latest close. A positive value means price is higher than it was; a negative value means it is lower. It oscillates around a zero line and is mainly used to confirm trend direction, spot slowing moves and flag divergence.

## At a glance

| | |
|---|---|
| Type | Momentum oscillator |
| Best market states | Trend, reversal |
| Weak in | Ranges |
| Best uses | Confirmation |
| Default settings | 10 periods (some platforms 14), zero line |
| Created by | Not attributed to one person, year unknown |
| Leading or lagging | Slightly lagging, but turns before price in many cases because it measures speed |

## What is the Momentum Indicator?

Momentum in technical analysis means the speed at which price is changing. The Momentum Indicator is the plainest way to measure it: the difference between today's close and the close a set number of bars ago.

No single person is credited with inventing it. Price differences over a fixed window are among the oldest tools in chart analysis, and the idea appears in many textbooks, including John Murphy's *Technical Analysis of the Financial Markets* (1999). Be careful with "momentum" as a word, because it is also used for the academic idea of momentum investing (buying recent winners), which is a different, portfolio-level concept.

The indicator is a close relative of [Rate of Change](/rate-of-change/). Momentum shows the change in price units; Rate of Change shows it as a percentage.

Because it uses only two prices, it is very simple and also very sensitive to which bar happens to drop out of the window.

## Formula

Momentum = current close - close n bars ago

**Worked example.** With n = 10, suppose the latest close is 52 and the close 10 bars ago was 47.
Momentum = 52 - 47 = **+5**

On the next bar, suppose the close is 53 and the close 10 bars ago (now a different bar) was 49.
Momentum = 53 - 49 = **+4**

Price rose again, but momentum fell from 5 to 4 because the bar leaving the window was higher. That is a normal effect of the method.

Note: some platforms plot Momentum as a ratio (current close / close n bars ago x 100) with a centre line at 100 instead of 0. The information is the same, only the scale differs. The default period is 10 on many charting packages and 14 on some others.

## How to read it

**Zero line.** Above zero, price is higher than n bars ago, which fits an uptrend. Below zero, price is lower. Crossing the zero line says the n-bar direction has changed, and is the slowest signal.

**Slope.** A rising line means upward speed is increasing. A rising line that is below zero means price is still down over the window but the fall is slowing. A flattening line from a high reading means the rise is losing pace.

**Divergence.** If price makes a higher high but momentum makes a lower high, upward momentum is weaker. This is a warning of possible loss of trend strength, not a timing signal. It can persist for many bars.

**Extremes.** Unlike RSI, Momentum has no fixed upper or lower limit, so "overbought" is judged by comparing the current reading with the past extremes on the same chart.

**Smoothing.** The raw line is jumpy. Some traders add a moving average to it and trade crossovers, which makes it look more like MACD.

## Best market states

**Trends (best).** In a steady trend Momentum stays mostly on one side of zero. Dips towards zero during pullbacks can help time re-entry, as long as the trend resumes.

**Reversals (fair).** Divergence and a turn back across zero can warn of a trend change. It works best with a price trigger such as a break of a trendline.

**Ranges (weak).** In sideways markets the line crosses zero frequently with small values. Each crossing looks like a signal and most lead nowhere.

**Breakouts.** A breakout often shows as a sharp jump in Momentum. It confirms strength, but because the reading is an absolute value it can look dramatic in volatile markets.

**Volatility.** The line does not adjust for volatility, so higher volatility produces larger swings. Comparing readings over time on the same market is safer than across markets.

## Settings

| Setting | Period | What it does |
|---|---|---|
| Short | 5 to 9 | Fast, many zero crosses, noisy |
| Default | 10 | Widely used standard |
| Long | 20 to 30 | Smoother, shows bigger swings, slower |

A shorter period compares price with a very recent bar, so the line responds quickly and flips often. A longer period compares with a more distant bar and tracks the larger move. Test on the market and time frame you trade; no value has been shown to be best in every case.

## Common mistakes

- Treating a high reading as "overbought" without comparing it with past readings. There is no fixed ceiling.
- Comparing raw Momentum values between markets with different price levels. Use [Rate of Change](/rate-of-change/) for that.
- Trading every zero cross in a range.
- Ignoring the "drop-out" effect, where a big bar leaving the window can move the line even though nothing happened to price today.
- Using it as a sole signal with no price level or stop reference.

## Pairs well with

- **[Exponential moving average](/exponential-moving-average/)**: the EMA gives the trend; Momentum shows its speed.
- **[Support and resistance](/support-and-resistance/)**: momentum slowing at a known level adds context.
- **[ADX](/adx/)**: ADX confirms whether a trend is present for Momentum to measure.
- **[Trendline](/trendline/)**: a trendline break alongside a Momentum divergence is a common combined signal.

## Sources

- Murphy, John J. (1999). *Technical Analysis of the Financial Markets*. New York Institute of Finance.

## FAQ

**What does the Momentum indicator show?**
It shows how much price has changed over a set number of bars, in price units. Positive means price is higher than the starting point of the window; negative means lower. The slope shows whether the speed is rising or falling.

**What is the difference between Momentum and Rate of Change?**
Momentum is the raw price difference, while Rate of Change expresses it as a percentage of the earlier price. The shapes are nearly the same, but Rate of Change is easier to compare across markets with different price levels.

**What is the best Momentum setting?**
The usual default is 10 periods, with 14 used in some platforms. Shorter values are faster and noisier, and longer ones are smoother. There is no best value for every market, so test your choice before relying on it.

**Is Momentum a leading indicator?**
It is derived from past prices, so strictly it lags. Because it measures speed, it can turn before price does, which is why divergence is watched. Treat it as confirmation rather than a forecast.

**Can Momentum be used in sideways markets?**
It is weak there. The line crosses zero often with small values, so signals are frequent and unreliable. A trend filter such as ADX helps you decide when to use it.

**Is Momentum the same as momentum investing?**
No. Momentum investing means buying assets that performed well over past months. The Momentum Indicator is a short-term chart measure of price change over a number of bars. They share a name and an underlying idea but are used differently.
