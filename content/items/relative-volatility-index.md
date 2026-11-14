---
slug: relative-volatility-index
name: Relative Volatility Index
aka: [RVI, Dorsey's RVI]
type: volatility
states: [volatility]
weak_states: []
purposes: [confirmation]
inventor: Donald Dorsey
year: 1993
default_settings: "10-period standard deviation; 14-period smoothing; levels 50 and 30 / 70"
pairs_with: [rsi, adx, exponential-moving-average, bollinger-bands]
related: [rsi, standard-deviation, atr, chaikin-volatility, historical-volatility, bollinger-bands]
compare: []
glossary: [volatility, standard-deviation, smoothing, oscillator]
wave: 3
reviewed: 14 November 2026
---

The Relative Volatility Index (RVI) is an oscillator built like the RSI, but it uses the standard deviation of price instead of the price change. It shows whether volatility is mostly coming on up-days or down-days, on a scale from 0 to 100. It is meant to confirm signals from another tool, not to stand alone.

## At a glance

| | |
|---|---|
| Type | Volatility oscillator |
| Best market states | Volatility, as confirmation of trend direction |
| Weak in | None specific; best used with another indicator |
| Best uses | Confirmation |
| Default settings | 10-period standard deviation, 14-period smoothing |
| Created by | Donald Dorsey, 1993 |
| Leading or lagging | Mostly lagging |

## What is the Relative Volatility Index?

The RSI looks at the size of up-moves compared with down-moves. The RVI keeps the same structure but swaps the inputs. It asks how much of the recent volatility has happened while price was rising, and how much while price was falling.

Donald Dorsey introduced it in *Technical Analysis of Stocks & Commodities* magazine in 1993, and later published a revised version. The revision uses both high and low prices, rather than only the close, to calculate the standard deviation. Platforms differ on which version they offer, and the plain version based on closing prices is the most common.

A high RVI means volatility has been larger on up-days, which usually coincides with a rising price. A low RVI means volatility has been larger on down-days. Dorsey designed it as a confirming tool: he suggested using it alongside a trend or momentum indicator, instead of using the indicator alone.

Do not confuse it with the Relative Vigor Index, which has the same abbreviation, RVI, but is an unrelated oscillator that compares closes with opens.

## Formula

1. Compute the standard deviation of closing prices over the last 10 bars.
2. Compare today's close with yesterday's close.
   - If the close is higher, the standard deviation is counted as an up value, and the down value is 0.
   - If the close is lower, it is counted as a down value, and the up value is 0.
   - If unchanged, both are 0.
3. Smooth the up values and down values separately with a 14-period exponential (Wilder-style) average. Call them U and D.
4. RVI = 100 x U / (U + D)

**Worked example.** Suppose the smoothed up-day standard deviation is 1.5 and the smoothed down-day standard deviation is 0.5.
RVI = 100 x 1.5 / (1.5 + 0.5) = 100 x 0.75 = **75**

A reading of 75 says most of the recent volatility came on up-days. If U and D were equal, the RVI would be **50**.

## How to read it

**Above 50.** Volatility is mostly on up-days. This suggests upward pressure.

**Below 50.** Volatility is mostly on down-days. This suggests downward pressure.

**Levels 70 and 30.** Many traders borrow the RSI habit and treat readings above 70 as strong upside volatility and below 30 as strong downside volatility. Dorsey's own scheme was simpler: confirm a buy signal from another indicator when the RVI is above 50, and a sell signal when it is below 50.

**Confirmation, not a trigger.** The idea is to take trend signals only when the RVI agrees. For example, a moving average crossover to the upside is considered more reliable if the RVI is above 50.

**Divergence.** As with RSI, price making a new high while the RVI fails to do so may warn that the up-move is losing force. This is a general reading rather than a published rule from the indicator's creator.

## Best market states

**Trends (useful as confirmation).** In a steady trend, the RVI tends to stay on the same side of 50 as the trend. Its job is to say whether volatility supports that trend.

**Volatility shifts.** A move from a low-volatility period into higher volatility on up-days shows in a rising RVI.

**Ranges (noisy).** In a sideways market, the RVI crosses 50 often, which produces mixed signals.

**Breakouts.** A breakout on rising volatility in the breakout direction would raise or lower the RVI accordingly.

**Reversals.** It can lag turning points, since it relies on smoothing.

## Settings

| Setting | Value | What it does |
|---|---|---|
| Standard deviation length | 10 (default) | Window for measuring spread of price |
| Smoothing length | 14 (default) | Smooths the up and down values |
| Levels | 50 centre; 30 / 70 | Direction bias and extremes |

A shorter smoothing length gives faster but noisier signals. A longer one gives smoother, slower readings. Because platforms vary on whether they use closes only or highs and lows, confirm which version you are using before comparing values.

## Common mistakes

- Treating the RVI as a stand-alone entry tool. Its creator proposed using it for confirmation.
- Confusing it with the Relative Vigor Index.
- Assuming it measures overall volatility. It shows the direction of the volatility, not how large the volatility is.
- Treating 70 and 30 as automatic sell and buy levels in a trend.
- Mixing readings from different versions without checking the formula.

## Pairs well with

- **[RSI](/rsi/)**: both oscillators have the same structure but different inputs, so agreement between them can strengthen a view.
- **[ADX](/adx/)**: ADX shows trend strength, while the RVI shows volatility direction.
- **[Exponential moving average](/exponential-moving-average/)**: a moving average gives the signal, and the RVI confirms it.
- **[Bollinger Bands](/bollinger-bands/)**: both are based on standard deviation, so bands expanding upwards with a high RVI give a consistent picture.

## Sources

- Dorsey, Donald (1993). "The Relative Volatility Index." *Technical Analysis of Stocks & Commodities*.
- Colby, Robert W. (2003). *The Encyclopedia of Technical Market Indicators*, 2nd edition. McGraw-Hill.

## FAQ

**What does the Relative Volatility Index show?**
It shows whether recent volatility is mostly happening on up-days or on down-days. The scale runs from 0 to 100. A reading above 50 means up-day volatility is larger, and below 50 means down-day volatility is larger.

**How is the RVI different from RSI?**
Both use the same formula structure, but the RSI uses price changes, while the RVI uses the standard deviation of price. RSI measures the strength of moves. The RVI measures the direction of volatility.

**Is the RVI the same as the Relative Vigor Index?**
No. They share the abbreviation, but the Relative Vigor Index compares closing prices with opening prices to measure the conviction of a trend. The Relative Volatility Index is based on standard deviation.

**What are the default RVI settings?**
The usual settings are a 10-period standard deviation and 14-period smoothing. Many platforms use them, though some offer the revised version that uses highs and lows.

**Can I trade on the RVI alone?**
Dorsey presented it as a confirming indicator, to be paired with a separate trend or momentum signal. Using it alone is likely to produce frequent false signals, especially in a range, so it is better as a filter.
