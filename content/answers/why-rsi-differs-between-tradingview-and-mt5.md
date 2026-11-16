---
slug: why-rsi-differs-between-tradingview-and-mt5
title: Why does RSI differ between TradingView and MT5?
description: RSI can read differently on TradingView and MT5 because of price data, daily close times, history length and smoothing. How to find which one it is.
query: rsi different tradingview mt5
pillar: rsi-and-momentum-oscillators
publish: 2027-03-17
reviewed: 16 November 2026
guides: [rsi, exponential-moving-average, stochastic-oscillator]
siblings: [how-to-calculate-rsi, best-rsi-setting-for-day-trading]
value: [table, example, verdict]
---

Usually because the two platforms are fed different prices, not because they use different formulas. Brokers quote slightly different prices, daily bars can close at different times, and the amount of loaded history changes how much the starting value still counts. Smoothing differences matter mainly in custom scripts and code libraries.

## The four causes, in order of how often they matter

| Cause | What differs | Typical size of the gap | How to check |
|---|---|---|---|
| Price data | Broker or exchange feed, bid vs last price | Small to large | Compare the closes bar by bar |
| Bar boundaries | Daily close time, time zone, session | Can be large on daily charts | Compare the daily bar's open and close times |
| History length | How many bars the RSI starts from | Small, larger on short histories | Load more history and watch the value |
| Formula | Wilder vs EMA vs simple average, the seed | Several points near the levels | Read the indicator's description or code |

## 1. Different prices

RSI is built from closing prices, so it can only match if the closes match. They often do not:

- **Forex and CFDs.** There is no single central price. Each broker streams its own quotes. MT5 charts are normally drawn from the broker's **bid** prices. A TradingView chart may be showing a different broker, an aggregated feed or a data vendor's price. Two feeds a fraction of a pip apart on each close can produce RSI values a little apart; feeds that differ more on fast days can produce bigger gaps.
- **Stocks and futures.** Exchange data is more consistent, but one platform may show extended-hours trading and the other only the regular session. That changes the closes on intraday charts and sometimes on daily ones.
- **Crypto.** Each exchange has its own price. A chart of one exchange's pair and a chart of another's are different markets for RSI purposes.

Before suspecting the formula, put the two charts side by side and compare the last 20 closes. If they differ, that is the answer.

## 2. Different bar boundaries

On a daily chart, "the close" depends on when the day ends.

Many forex brokers on MT5 set their server time so the daily bar ends at 5pm New York time. A chart set to a different time zone, or a feed that ends the day at midnight UTC, cuts the day in a different place. The daily closes are different prices, so the daily RSI is different. Some time-zone settings also create a small Sunday bar, which adds an extra bar to every week and shifts all the averages.

On intraday charts this matters less, because 1-hour bars usually start on the hour everywhere. On daily and weekly charts it can be the largest single cause.

## 3. Different history length

The usual way to compute RSI is the one Wilder described: the first average gain and loss are simple averages of the first 14 changes, and every later value is smoothed from the one before. That first value never fully disappears. On a 14-period RSI its weight after k bars is (13/14) to the power k:

| Bars since the start | Weight of the starting value |
|---|---|
| 14 | about 35% |
| 30 | about 11% |
| 50 | about 2.5% |
| 100 | under 0.1% |

If one platform has loaded 5,000 bars and the other only 60, the second one's RSI is still carrying a noticeable share of an arbitrary starting point. Scroll back or load more history on the short one and watch whether the value moves towards the other.

## 4. Different formula

The built-in RSI on both TradingView and MT5 uses Wilder-style smoothing, which is the standard. Differences in formula come mostly from elsewhere:

- **Custom scripts and community indicators** that compute RSI with an ordinary [exponential moving average](/exponential-moving-average/) or a simple average.
- **Code libraries and spreadsheets** where someone used a standard EMA function with period 14.
- **Different seeds**, for example starting the average from the first change instead of the average of the first 14.

The size of the formula effect is easy to underestimate. On one seven-bar example in our [pillar guide](/guide/rsi-and-momentum-oscillators/), the same 5-period RSI read 78.95 with Wilder's smoothing, 83.33 with an EMA and 71.43 with a simple average. On 14 periods the gap is smaller, but a few points near 70 or 30 is enough to put one chart over a line and the other under it.

Our own indicator code had to pick one version. It uses Wilder's smoothing with a simple-average seed, as in Wilder's 1978 book, and our [RSI](/rsi/) guide follows that.

## A worked example

A trader sees daily RSI(14) on EUR/USD at 31.2 on one platform and 28.7 on the other. One says oversold; the other does not.

1. **Compare closes.** The last five daily closes differ by 2 to 15 pips. Some difference, but probably not enough alone.
2. **Compare bar times.** One chart's daily bar ends at 5pm New York, the other at midnight UTC. The "same" day's close is seven hours apart. This is the main cause.
3. **Fix it.** Set the second chart's time zone so its day ends at the same time. The values move to within half a point of each other.

The remaining half-point is the feed. Nothing about the formula needed changing.

## The same problem with other oscillators

The [stochastic](/stochastic-oscillator/) is even more sensitive to the feed, because it uses the highs and lows too. One stray spike in a broker's data changes the 14-bar range for two to three weeks. Volume-based oscillators differ the most of all on forex, where each broker's volume is its own tick count, not the market's.

## Verdict

When RSI differs between TradingView and MT5, look at the data first: the closes, then the daily close time. History length is a smaller, fading effect. The formula is rarely the cause with built-in RSIs, and often the cause with scripts and code. None of these makes either platform "wrong". It means a reading of 29 versus 31 is not the difference between a signal and no signal; if a decision depends on that gap, it was too fine a decision for RSI.
