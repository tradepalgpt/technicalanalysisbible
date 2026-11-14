---
slug: heikin-ashi
name: Heikin-Ashi trend reading
aka: [Heiken Ashi, Heikin Ashi candles, average bar chart]
type: trend
states: [trend]
weak_states: [range]
purposes: [filter, exit]
inventor: Not attributed to one person
year: Unknown
default_settings: "No settings; each bar is calculated from the previous bar"
pairs_with: [exponential-moving-average, adx, support-and-resistance, atr]
related: [renko-chart, candlestick-chart, supertrend, parabolic-sar, trend-following]
compare: [renko-vs-heikin-ashi]
glossary: [trend, smoothing, candlestick-body, wick-shadow, lagging-indicator]
wave: 1
reviewed: 14 November 2026
---

Heikin-Ashi is a way of drawing candlesticks that averages each bar with the previous one. This smooths out the noise, so a trend shows up as a run of same-coloured candles. Traders use it to judge whether a trend is still intact and to hold trades longer. Its prices are averages, not real prices.

## At a glance

| | |
|---|---|
| Type | Chart type / trend reading |
| Best market states | Trends |
| Weak in | Ranges, and when you need exact prices |
| Best uses | Trend filter, exit timing |
| Default settings | None; the calculation is fixed |
| Created by | Not attributed to one person; of Japanese origin and widely used in the West from the 2000s |
| Leading or lagging | Lagging; smoothing delays signals |

## What is Heikin-Ashi?

"Heikin" means "average" and "ashi" means "bar" or "foot" in Japanese. A Heikin-Ashi chart looks like a normal [candlestick chart](/candlestick-chart/), but each candle is calculated from the current bar's open, high, low and close combined with the previous Heikin-Ashi candle.

The result is a chart with fewer colour changes. In a strong uptrend you see a long run of green (or white) candles, often with no lower wicks. In a strong downtrend you see red (or black) candles with no upper wicks.

The origin is unclear. The method is often linked to Japanese chartists, but no single inventor is reliably named. It reached many Western traders through magazine articles and charting packages from the mid-2000s.

The main catch: because candles are averages, the open and close of a Heikin-Ashi candle are not prices you could have traded at. You cannot place orders off them, and the real price can differ.

## Formula

For each bar, using the real open (O), high (H), low (L) and close (C), and the previous Heikin-Ashi (HA) candle:

1. HA close = (O + H + L + C) / 4
2. HA open = (previous HA open + previous HA close) / 2
3. HA high = the highest of H, HA open and HA close
4. HA low = the lowest of L, HA open and HA close

The first HA open is usually set to (O + C) / 2 of the first bar, since there is no previous candle.

**Worked example.** Real bar: O = 100, H = 110, L = 98, C = 108. Previous HA candle: open 99, close 101.
HA close = (100 + 110 + 98 + 108) / 4 = **104**
HA open = (99 + 101) / 2 = **100**
HA high = highest of 110, 100, 104 = **110**
HA low = lowest of 98, 100, 104 = **98**
The HA candle is green (close above open), even though the real bar's open and close were 100 and 108.

## How to read it

**Strong trend.** Consecutive candles of the same colour with no wick on the trend side (no lower wick in an uptrend). The longer the run, the more consistent the trend.

**Weakening trend.** Candles get smaller, bodies shrink and wicks appear on both sides. This is a warning that momentum is fading, not a signal to reverse.

**Colour change.** A candle changing colour after a long run is often used as an exit signal or a reason to tighten stops. Many colour changes are false alarms in a pause.

**Doji-like candles.** Small bodies with wicks both sides show indecision and often come before a pause or a turn.

**Trend filter.** Some traders only take long trades when the Heikin-Ashi candles are green on a higher time frame.

**Real prices.** Always read entries, stops and targets from a standard chart. Heikin-Ashi is for direction and not for exact levels.

## Best market states

**Trends (best).** Smoothing keeps traders in a trend through small pullbacks that would look like reversals on a normal chart.

**Ranges (weak).** In sideways markets the candles alternate colours or form small bodies with wicks on both sides. The chart still looks cleaner than normal candles, which can hide how choppy the market really is.

**Reversals.** Because each candle includes the previous one, signals arrive late. A reversal can be well underway before the colour changes.

**Gaps.** Gaps are partly smoothed away, so a big overnight move can be hard to see.

**Volatility.** Smoothing reduces visible noise but does not change the underlying volatility. A calm-looking chart can still have big real swings.

## Settings

Heikin-Ashi has no inputs; platforms apply the formula as above. The choices are about how you use it.

| Choice | Effect |
|---|---|
| Time frame | Higher time frames give smoother, slower signals. Lower time frames give more colour changes |
| Combined with a moving average | An EMA over the candles gives a second trend check |
| Real chart alongside | Lets you place orders from real prices while reading trend on the Heikin-Ashi chart |

## Common mistakes

- Placing orders at Heikin-Ashi prices. They are averages, and the real market price can differ.
- Treating a colour change as an instant reversal signal.
- Using it in a range because the chart "looks cleaner".
- Forgetting that the first candles of a chart depend on the starting point, so very old history can look slightly different on different platforms.
- Comparing results with a normal candle chart without allowing for the lag.
- Ignoring the real chart's support and resistance levels.

## Pairs well with

- **[Exponential moving average](/exponential-moving-average/)**: confirms the trend direction seen in the candle colours.
- **[ADX](/adx/)**: shows whether a trend has strength before you rely on a run of candles.
- **[Support and resistance](/support-and-resistance/)**: levels are read from the real chart; Heikin-Ashi helps judge whether the trend holds there.
- **[ATR](/atr/)**: sets a stop distance in real prices, since HA prices are not tradeable.

## Sources

- Valcu, Dan (2004). "Heikin-Ashi: How to Trade Without Candlestick Patterns." *Technical Analysis of Stocks & Commodities* magazine.
- Nison, Steve (1991). *Japanese Candlestick Charting Techniques*. New York Institute of Finance. (Background on Japanese candlestick charts in general.)

## FAQ

**Is Heikin-Ashi better than normal candlesticks?**
It is not better, just different. It smooths noise, which makes trends easier to read, but it hides real prices and lags. Many traders use it for direction and a normal chart for entries and stops.

**What is the Heikin-Ashi formula?**
HA close is the average of open, high, low and close. HA open is the average of the previous HA open and close. HA high and low are the extremes of the real high or low and the HA open and close.

**Can you trade directly from Heikin-Ashi candles?**
You can read direction from them, but the prices on them are averages, so orders should be set from the real price chart. A fill at an HA open or close may not have traded.

**What does a Heikin-Ashi candle without a wick mean?**
A green candle with no lower wick means the HA open equals the low, which happens when price has been rising steadily. It is read as strong momentum. A red candle with no upper wick is the mirror in a downtrend.

**Does Heikin-Ashi work on forex and crypto?**
Yes. It only needs open, high, low and close data, so it works on any market. Results depend on how often the market trends. The smoothing helps most in trending conditions.
