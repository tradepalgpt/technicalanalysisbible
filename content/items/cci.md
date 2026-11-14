---
slug: cci
name: Commodity Channel Index (CCI)
aka: [CCI]
type: momentum-oscillator
states: [range, reversal, trend]
weak_states: []
purposes: [entry, confirmation]
inventor: Donald Lambert
year: 1980
default_settings: "20 periods; levels +100 and -100"
pairs_with: [support-and-resistance, exponential-moving-average, adx, rsi]
related: [rsi, stochastic-oscillator, williams-r, disparity-index, detrended-price-oscillator]
compare: [cci-vs-rsi]
glossary: [overbought, oversold, divergence, oscillator, lookback-period]
wave: 1
reviewed: 14 November 2026
---

The Commodity Channel Index (CCI) measures how far the typical price has moved away from its average, scaled by how much it normally moves. It has no fixed upper or lower limit, but most readings fall between +100 and -100. Traders use it to spot overextended moves in ranges and strong momentum in trends.

## At a glance

| | |
|---|---|
| Type | Momentum oscillator (unbounded) |
| Best market states | Range, reversal, trend (used differently in each) |
| Weak in | Choppy markets with no clear structure |
| Best uses | Entry timing, confirmation |
| Default settings | 20 periods; levels +100 / -100 |
| Created by | Donald Lambert, 1980 |
| Leading or lagging | Mostly lagging, as it is built from past prices |

## What is the CCI?

Donald Lambert designed the CCI to find cyclical turns in commodities, which is where the name comes from. It works on any market.

It compares today's typical price (the average of high, low and close) with its recent average, then divides by the average deviation. A reading of +100 means the typical price is well above its average, relative to normal variation. A reading of -100 means well below.

Unlike [RSI](/rsi/) or the [Stochastic Oscillator](/stochastic-oscillator/), the CCI is not bounded to 0-100. It can reach +300 or -300 in strong moves. This lets it show how extreme a move is, not just that it is extreme.

## Formula

1. Typical Price (TP) = (High + Low + Close) / 3
2. SMA = simple moving average of TP over N bars (default 20)
3. Mean Deviation = average of the absolute differences between each TP and the SMA over the same N bars
4. CCI = (TP - SMA) / (0.015 x Mean Deviation)

The constant 0.015 was chosen by Lambert so that most values fall between -100 and +100.

**Worked example.** Typical price is 102, the 20-bar average of typical price is 100, and the mean deviation is 1.5.
CCI = (102 - 100) / (0.015 x 1.5) = 2 / 0.0225 = **88.9**

Note: the mean deviation is not the same as standard deviation. Some platforms substitute other measures, so values can differ slightly between packages.

## How to read it

**Above +100 / below -100.** Lambert's original idea was that a move above +100 is the start of a strong uptrend, and a move below -100 the start of a strong downtrend. Many traders now use the opposite reading in ranges: +100 as overextended and -100 as oversold, with a reversal signal when it crosses back inside.

**Zero line.** Crossing above zero shows price moving above its average. It is a simple momentum filter.

**Divergence.** Price makes a new high while CCI makes a lower high (bearish), or the reverse at lows (bullish). See [Divergence](/divergence/). It is a warning, not a timing signal.

**Extreme readings.** Readings of +200 or -200 show a very stretched move. In a range, that often means a snap back is near. In a breakout, it can mean strong momentum is just starting.

## Best market states

**Ranges.** Overextended readings and returns inside the +100/-100 band can line up with the edges of a range.

**Trends.** A CCI that stays above zero with pullbacks holding above -100 describes a healthy uptrend. Breakouts through +100 are read as trend starts. So the CCI can serve both camps, but not with the same rule.

**Reversals.** Divergence at a major level is the common use, best as confirmation.

**Choppy markets (weak).** With no structure, the CCI whips back and forth through the zero line and gives repeated false signals.

**Volatility.** The scaling by mean deviation adjusts for recent volatility, so the levels mean more or less the same thing in quiet and busy markets.

## Settings

| Setting | Period | What it does |
|---|---|---|
| Short | 6 to 14 | More sensitive, more signals, more noise |
| Default | 20 | A common starting point; Lambert tied the period to the length of the market cycle (he suggested about one third of the cycle length) |
| Long | 30 to 50 | Smoother, fewer signals, later reaction |

A shorter period suits shorter cycles. The levels can also be widened (to +/-150 or +/-200) if a market tends to give many +/-100 readings.

## Common mistakes

- Using one rule for both trending and ranging markets. Lambert's breakout reading and the range-fade reading are opposites.
- Treating +100 as an automatic sell.
- Assuming the CCI is bounded like RSI. It can run far beyond +/-100.
- Using it on its own with no view of price structure.
- Ignoring the period. A CCI(6) and a CCI(50) look very different.
- Changing levels after each loss to fit past data.

## Pairs well with

- **[Support and resistance](/support-and-resistance/)**: confirms whether a CCI signal sits at a meaningful level.
- **[Exponential moving average](/exponential-moving-average/)**: adds a trend direction so CCI signals are only taken one way.
- **[ADX](/adx/)**: tells you whether to use the range reading or the trend reading.
- **[RSI](/rsi/)**: a second momentum view; agreement strengthens divergence.

## Sources

- Lambert, Donald R. (1980). "Commodity Channel Index: Tools for Trading Cyclic Trends", *Commodities* magazine, October 1980.
- Murphy, John J. (1999). *Technical Analysis of the Financial Markets*. New York Institute of Finance.

## FAQ

**What is a good CCI setting?**
The default of 20 periods is the common start. Shorter periods give more signals but more noise. There is no best value for all markets, so test any change on the market and time frame you trade.

**What does a CCI above 100 mean?**
The typical price is well above its recent average, relative to normal variation. Lambert read it as a possible start of a strong uptrend. Others read it as overextended in a range. Context decides which applies.

**Is CCI better than RSI?**
They measure different things. RSI compares gains and losses and is capped at 0 to 100. CCI measures distance from an average and has no cap. See [CCI vs RSI](/compare/cci-vs-rsi/).

**Why is the CCI multiplied by 0.015?**
Lambert chose the constant so that most readings would fall between -100 and +100. It is a scaling choice, not a market law.

**Can CCI be used on any market?**
Yes. It only needs high, low and close, so it works on stocks, forex, commodities and crypto. How well its levels work depends on how each market trends or ranges.
