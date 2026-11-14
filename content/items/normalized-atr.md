---
slug: normalized-atr
name: Normalized ATR (NATR)
aka: [NATR, ATR percent, ATR as a percentage of close]
type: volatility
states: [volatility]
weak_states: []
purposes: [filter]
inventor: Not attributed to one person
year: Unknown
default_settings: "14 periods"
pairs_with: [atr, bollinger-bands, standard-deviation, historical-volatility]
related: [atr, average-daily-range, historical-volatility, chaikin-volatility, standard-deviation, keltner-channels]
compare: []
glossary: [volatility, atr, normalisation]
wave: 3
reviewed: 14 November 2026
---

Normalized ATR (NATR) is the Average True Range expressed as a percentage of the closing price. Because ATR is in price units, it cannot be compared fairly between a 10-dollar stock and a 500-dollar one. NATR fixes that by showing volatility as a share of price, so different markets can be ranked side by side.

## At a glance

| | |
|---|---|
| Type | Volatility indicator |
| Best market states | Volatility comparison across markets |
| Weak in | None specific; it says nothing about direction |
| Best uses | Filter, ranking and screening |
| Default settings | 14 periods |
| Created by | Not attributed to one person |
| Leading or lagging | Lagging; built from past ranges |

## What is Normalized ATR?

ATR was introduced by J. Welles Wilder Jr. in 1978 and measures the typical size of a bar's range, including gaps. Its weakness is that the answer depends on the price level. An ATR of 2 means very different things for an asset trading at 20 and one trading at 2,000.

NATR divides ATR by the close and multiplies by 100. The result is a percentage: "on average this market moves about 2.5% per bar". That makes comparisons between stocks, currency pairs and indices much easier. It also makes it easier to compare the same market in the past and now, when price levels may be very different.

The normalising step is simple, and no single person is usually credited with it. Several platforms and code libraries include it under the name NATR. The name is used in the TA-Lib library, among others.

## Formula

1. True range (TR) for each bar is the largest of:
   - high minus low
   - absolute value of (high minus previous close)
   - absolute value of (low minus previous close)
2. ATR is the average of true range over 14 bars. Wilder's method uses his own smoothing: ATR = (previous ATR x 13 + current TR) / 14.
3. NATR = ATR / close x 100

**Worked example.** Suppose the 14-period ATR is 3.0 and the close is 120.
NATR = 3.0 / 120 x 100 = **2.5**

So the average bar range is about 2.5% of price. Another market with an ATR of 0.50 and a close of 10 has NATR = 0.50 / 10 x 100 = **5.0**. It looks much smaller in price units, but it is twice as volatile in percentage terms.

Platforms differ on two points. First, which average they use for ATR (Wilder's smoothing, a simple average or an EMA). Second, whether they divide by the current close or by some other price. Small differences in readings are normal.

## How to read it

**Higher NATR.** The market is moving more, as a share of price. Positions need wider stops in percentage terms, and a given price move is less surprising.

**Lower NATR.** The market is quiet relative to its price. Moves are smaller, and breakouts often come after long quiet spells, although the indicator cannot say when.

**Ranking.** Sort a list of markets by NATR to find the most or least volatile. This is its most common use, in screeners.

**Trend in NATR.** A rising NATR over weeks means volatility is increasing. A falling NATR means the market is calming.

**Position sizing.** Some traders divide their intended risk by NATR to scale position sizes, so that a volatile market gets a smaller size and a quiet one a larger size.

NATR does not give buy or sell signals, and it has no standard overbought or oversold levels.

## Best market states

**Volatility comparisons (best).** The tool exists to compare markets and periods on equal terms.

**Breakouts and ranges.** A very low NATR compared with its own past can mark a compressed market. It does not tell you when it will expand or in which direction.

**Trends.** NATR is neutral about direction, so it can help check that a trending market is moving enough to be worth trading.

**Reversals.** Spikes in NATR often occur around sharp sell-offs, but they do not reliably mark turning points.

**Volatility.** Its own state. During high-volatility periods, NATR rises, but it lags because it is an average.

## Settings

| Setting | Value | What it does |
|---|---|---|
| Period | 14 (default) | Number of bars averaged. Wilder's original ATR length |
| Shorter (5 to 10) | Faster | Reacts quickly to new volatility, but noisier |
| Longer (20 to 50) | Slower | Smoother measure of typical volatility |
| Smoothing | Wilder, SMA or EMA | Varies by platform |

Compare NATR values only when the period and smoothing method are the same.

## Common mistakes

- Comparing NATR values from platforms that use different smoothing.
- Using it for direction. It says how much price moves, not which way.
- Setting a stop of one NATR and treating it as safe. Volatility can jump.
- Comparing NATR across very different time frames. A 5-minute NATR and a daily NATR are not comparable.
- Forgetting that a falling price can raise NATR even when the ATR stays the same, because the ATR is divided by a smaller close.

## Pairs well with

- **[ATR](/atr/)**: the source indicator. Use ATR for stop distances in price terms and NATR for comparison.
- **[Bollinger Bands](/bollinger-bands/)**: bands show volatility directly on the chart.
- **[Standard deviation](/standard-deviation/)**: a different statistical view of how widely price is spread.
- **[Historical volatility](/historical-volatility/)**: expresses volatility as an annualised percentage, which can be compared with NATR.

## Sources

- Wilder, J. Welles Jr. (1978). *New Concepts in Technical Trading Systems*. Trend Research. (Source of the Average True Range.)
- Colby, Robert W. (2003). *The Encyclopedia of Technical Market Indicators*, 2nd edition. McGraw-Hill.

## FAQ

**What does NATR mean?**
It stands for Normalized Average True Range. It is the ATR divided by the closing price and multiplied by 100, so it is shown as a percentage. It lets you compare volatility across assets with different prices.

**What is the difference between ATR and NATR?**
ATR is measured in price units, so it depends on the price level. NATR is a percentage of the close, so it does not. Use ATR for stop distances on one market, and NATR to compare several markets.

**What is a good NATR value?**
There is no good or bad value. It depends on the market. Some assets usually have NATR below 1% on daily bars and others well above 3%. Compare a market with its own history rather than with a fixed level.

**What is the default NATR setting?**
Most platforms use 14 periods, which matches Wilder's original ATR. Some let you pick the smoothing method, which can change the values slightly.

**Does NATR show trend direction?**
No. It only measures the average size of price moves as a percentage of price. A high reading can occur in a rally or in a sell-off. Use another tool, such as a moving average, to judge direction.
