---
slug: lookback-period
term: Lookback period
related: [rsi, simple-moving-average, atr, stochastic-oscillator, donchian-channels, bollinger-bands, rate-of-change]
reviewed: 14 November 2026
---

The lookback period is the number of past bars an indicator uses in its calculation. A 14-period RSI, for example, looks back over the last 14 bars.

## Explained

Almost every indicator needs a window of history. The lookback period sets how long that window is. A short period, such as 5, reacts quickly but gives a noisy line. A long period, such as 200, is smooth but slow.

The bar can be a minute, a day or a week, depending on the chart. So a 20-period setting on a daily chart covers 20 days, and on an hourly chart it covers 20 hours. Common defaults include 14 for [RSI](/rsi/) and [ATR](/atr/) and 20 for [Bollinger Bands](/bollinger-bands/). [Donchian Channels](/donchian-channels/) use the highest high and lowest low over the lookback.

## Example

A 5-period simple average on closes of 10, 12, 11, 13 and 14 equals 60 divided by 5, which is 12. When the next close is 15, the oldest value drops out and the average becomes 65 divided by 5, which is 13.
