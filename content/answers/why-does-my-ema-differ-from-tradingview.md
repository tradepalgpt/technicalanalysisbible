---
slug: why-does-my-ema-differ-from-tradingview
title: Why does my EMA differ from TradingView's?
description: Why an EMA shows different values on two platforms - seed, history length, close time, data source and average type - with a checklist to find the cause.
query: ema different on tradingview
pillar: moving-averages
publish: 2027-05-05
reviewed: 16 November 2026
guides: [exponential-moving-average, smoothed-moving-average, time-frames]
siblings: [how-to-calculate-ema-by-hand, why-rsi-differs-between-tradingview-and-mt5]
value: [table, example, verdict]
---

An EMA usually differs between platforms for one of five reasons: a different starting value (seed), a different amount of history loaded, a different daily close time, different price data, or a different average type behind the same label. Most gaps shrink after enough bars; close-time and data gaps do not.

## The five usual causes

| Cause | What happens | Does the gap fade? | How to check |
|---|---|---|---|
| Seed | One platform starts the EMA with an SMA of the first N closes, another with the first close | Yes, over many bars | Compare values far from the start of the data |
| History length | Both use the same rule, but one starts from an older bar | Yes, slowly for long periods | Load more history on both and compare again |
| Close time | Daily bars close at different times (forex, crypto, futures) | No | Compare the daily close prices themselves |
| Data source | Different feeds give slightly different prices | No | Compare a few closes directly |
| Average type | "EMA" on one, an SMMA or RMA on the other, or a different source price | No | Check the indicator settings and source (close, HL2, etc.) |

The first two only affect the EMA's memory of the past. The last three mean the two platforms are averaging different numbers, so they will never agree.

## Seed and history: the fading kind

The [exponential moving average](/exponential-moving-average/) depends on its previous value, all the way back to the first bar. The very first value has to be invented. Our own code uses an SMA of the first N closes, which is the textbook method. Other software may start from the first close.

Even with the same seed rule, two platforms disagree if they start on different bars. A chart that loads five years of daily data starts its EMA five years ago. One that loads two years starts two years ago. Each start leaves a trace that shrinks by (1 − k) each bar.

### A worked example

A 50 EMA has k = 2/51 = 0.0392, so (1 − k) = 0.961. Suppose two platforms started their 50 EMAs 10 points apart because of a different seed.

| Bars since start | Remaining gap |
|---|---|
| 0 | 10.00 |
| 50 | about 1.37 |
| 100 | about 0.19 |
| 150 | about 0.03 |
| 200 | under 0.01 |

The gap shrinks to almost nothing, but it takes a few hundred bars. For a 200 EMA, (1 − k) is about 0.990, and the same 10-point gap is still about 1.3 points after 200 bars. So on a chart with limited history, a 200 EMA can differ noticeably from another platform's for a long time.

This is why our guides suggest allowing three to four times N bars of warm-up before trusting an EMA's exact value. See [how to calculate an EMA by hand](/answers/how-to-calculate-ema-by-hand/) for the arithmetic.

## Close time: the gap that does not fade

Stocks trade on one exchange with a fixed close, so their daily bars are the same everywhere. Forex and crypto trade around the clock, so "the daily close" is a choice. Common choices include 17:00 New York time (common in forex), midnight UTC (common in crypto) and the broker's server time.

If one platform closes the day at 17:00 New York and another at midnight UTC, the daily bars contain different hours and close at different prices. An EMA built on those closes is an average of different numbers. The gap will not fade with more history.

The same issue affects weekly and some intraday bars, and it explains some cases where a moving-average "touch" appears on one platform and not on another. See [time frames](/time-frames/).

## Data source and average type

Different data feeds can disagree by a small amount on each close, especially for forex and crypto, where prices come from different venues. A few hundredths of difference in each close leads to a small, steady gap in the EMA.

The average type is a more common surprise. Some indicators and settings use a [smoothed moving average](/smoothed-moving-average/) (also called RMA or Wilder's smoothing), with k = 1 / N. A "14" on that setting behaves like an EMA of about 27. If one chart's 14 is an EMA and the other's is an RMA, the lines can be far apart. Also check the source price: close, HL2 (high plus low, divided by 2) and HLC3 (high, low and close, divided by 3) all give different averages.

## A checklist to find the cause

1. **Compare the closes.** Pick five recent daily bars and compare the close on both platforms. If they differ, it is data or close time. No EMA setting will fix that.
2. **Check the settings.** Same period? Same source (close)? Is it really an EMA, not RMA or SMMA? Any offset set?
3. **Compare far from the start.** Look at a bar many hundreds of bars after the first loaded bar. If the values now match closely, the earlier difference was seed or history.
4. **Load more history.** If the gap shrinks when you scroll back and load more data, history length is the cause.
5. **Check the timeframe.** Make sure both charts use the same bar size and session settings (regular hours vs extended hours for stocks).

## Does it matter?

For reading trend, a gap of a few hundredths rarely matters. For rules that depend on exact touches or crosses, it can. A crossover that happens on one platform may not happen on the other on the same day. If you test a rule on one data source and trade it on another, check how often their signals disagree. That is a real source of difference between a backtest and live trading.

## Verdict

When two EMAs disagree, the cause is almost always one of five ordinary things, not a bug. Seed and history differences fade with time. Close-time, data and average-type differences do not. Compare the raw closes first; it settles most cases in a minute. The same causes affect other smoothed indicators too: see [why RSI differs between platforms](/answers/why-rsi-differs-between-tradingview-and-mt5/) and the platform table in [the moving averages guide](/guide/moving-averages/).
