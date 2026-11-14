---
slug: smoothed-moving-average
name: Smoothed Moving Average (SMMA / RMA)
aka: [SMMA, RMA, running moving average, Wilder's smoothing, Wilder's moving average, modified moving average]
type: moving-average
states: [trend]
weak_states: [range]
purposes: [filter]
inventor: Not attributed to one person (popularised by J. Welles Wilder Jr.)
year: Unknown
default_settings: "No single default; 14 periods is common because Wilder used it in RSI, ATR and ADX"
pairs_with: [exponential-moving-average, rsi, atr, adx]
related: [simple-moving-average, exponential-moving-average, weighted-moving-average, dema, tema, hull-moving-average]
compare: []
glossary: [smoothing, lookback-period, lagging-indicator, trend, whipsaw]
wave: 3
reviewed: 14 November 2026
---

The Smoothed Moving Average (SMMA), also called the running moving average (RMA) or Wilder's smoothing, is a moving average that adds each new price slowly and keeps most of its previous value. It is smoother and slower than a simple average of the same length. It is the averaging method inside RSI, ATR and ADX, and traders also plot it as a trend filter.

## At a glance

| | |
|---|---|
| Type | Moving average |
| Best market states | Trend |
| Weak in | Ranges, where it lags and gives late crosses |
| Best uses | Trend filter |
| Default settings | No single default; 14 periods is common |
| Created by | Not attributed to one person; popularised by J. Welles Wilder Jr. |
| Leading or lagging | Lagging, and slower than an EMA of the same length |

## What is the Smoothed Moving Average?

A moving average replaces a noisy price series with a smoother line. The SMMA does this by keeping a running total that is nudged by each new price. Each bar moves the line by only 1/N of the gap between the price and the current value, where N is the period.

It is the same family as the exponential moving average (EMA). In fact, an SMMA of length N is an EMA with a smoothing factor of 1/N, instead of the 2/(N + 1) used in the usual EMA. That means an SMMA(14) behaves roughly like an EMA(27). Many people are surprised by this when they compare the two on one chart.

The method became widely known through J. Welles Wilder Jr.'s 1978 book *New Concepts in Technical Trading Systems*. He used it to smooth the averages in RSI, ATR and ADX, so "Wilder's smoothing" and "RMA" usually mean exactly this calculation. Platforms differ in naming: some charting packages call it SMMA, others call it RMA, and a few call it the modified moving average.

## Formula

1. First value: the simple average of the first N prices.
2. Every later bar: SMMA = (previous SMMA x (N - 1) + current price) / N

Written another way: SMMA = previous SMMA + (price - previous SMMA) / N.

This equals an EMA with alpha = 1 / N.

**Worked example.** Take N = 5. The previous SMMA is 100 and the new close is 110.
SMMA = (100 x 4 + 110) / 5 = 510 / 5 = **102**

The price jumped 10 points above the average, yet the line moved only 2 points. An EMA(5) with alpha 2/6 would have moved to 103.33 from the same start.

Note: platforms can seed the first value differently. Some start with a simple average, others start with the first price. The difference fades after a few multiples of N bars, but early values can differ between charting packages.

## How to read it

**Slope and side of price.** Price above a rising SMMA is read as an uptrend; price below a falling one as a downtrend. The line is smooth, so its slope changes rarely.

**As a trend filter.** Many traders only look for long ideas while price is above the line, and short ideas while it is below. This reduces the number of trades taken against the larger move.

**Crossovers.** Price crossing the SMMA, or a fast SMMA crossing a slow one, is a trend-change signal. Because the line is slow, crossings come late and many arrive after a large part of the move.

**Dynamic support and resistance.** In orderly trends, price often pulls back toward the line. Some traders treat these touches as areas of interest. It is a loose habit rather than a rule.

**Reading Wilder indicators.** Knowing that RSI, ATR and ADX use this smoothing explains why they react slowly to a single large bar and why their values can differ between platforms that smooth differently.

## Best market states

**Trends (best).** The slow, even response keeps a trader on the right side of a steady move without being shaken out by every small pullback.

**Ranges (weak).** Price crosses the line repeatedly in a sideways market, which creates whipsaws (false signals that reverse straight away).

**Reversals (late).** The line turns long after price has turned, so it confirms a reversal late rather than anticipating one.

**Volatility.** A sudden spike moves an SMMA less than an EMA, so it is steadier in jumpy markets, but it also takes longer to adapt after a real change.

## Settings

| Setting | Period | What it does |
|---|---|---|
| Short | 5 to 10 | Follows price fairly closely, but still slower than an SMA of the same length |
| Wilder default | 14 | Matches the smoothing used in RSI, ATR and ADX |
| Medium | 20 to 50 | A steadier trend filter for swing trading |
| Long | 100 to 200 | Very slow. Used for the big picture |

Because the SMMA is slower than an EMA, a given period feels about twice as long. To get a line comparable to an EMA of length M, use an SMMA of length (M + 1) / 2. Test any period on the market and time frame you trade rather than assuming one value fits all.

## Common mistakes

- Comparing an SMMA(20) with an EMA(20) and expecting the same line. The SMMA is much slower.
- Using it for fast entries. The lag makes it better as a filter than as a trigger.
- Trading price crossovers in a range, where the line is flat and price keeps crossing it.
- Forgetting that two platforms may seed the first value differently, so early values will not match.
- Assuming that smoother means better. Extra smoothing removes noise and also removes speed.
- Treating a touch of the line as a sure bounce.

## Pairs well with

- **[Exponential moving average](/exponential-moving-average/)**: a faster EMA against a slower SMMA shows a trend change early and a trend confirmation later.
- **[RSI](/rsi/)**: RSI is built with this smoothing, so the SMMA is a natural trend companion.
- **[ATR](/atr/)**: ATR also uses Wilder's smoothing, and the two share the same sense of time.
- **[ADX](/adx/)**: ADX tells you whether the market trends enough for a slow trend line to be useful.

## Sources

- Wilder, J. Welles Jr. (1978). *New Concepts in Technical Trading Systems*. Trend Research.
- Murphy, John J. (1999). *Technical Analysis of the Financial Markets*. New York Institute of Finance.

## FAQ

**Is SMMA the same as RMA?**
Yes, in practice. SMMA (smoothed moving average) and RMA (running moving average) use the same formula, where the new value is the old value plus one N-th of the gap to the price. The names vary by platform, and some also call it the modified moving average.

**Is the SMMA the same as an EMA?**
Not quite. Both are exponential in form, but the SMMA uses a smoothing factor of 1/N and the EMA uses 2/(N + 1). An SMMA(14) is close to an EMA(27) in speed, so the two lines look different at the same length.

**What period should I use for the SMMA?**
Fourteen is the usual starting point because Wilder used it. For trend filtering, traders often choose periods from 20 to 200. There is no best value, so test a few on your own market and time frame.

**Why do RSI and ATR use this smoothing?**
Wilder chose it in 1978 because it was easy to calculate by hand: you only need the previous value and the new bar. It also gives a steady line. The method stayed in the indicators, so modern platforms still use it.

**Does the SMMA lag more than the SMA?**
Yes. An SMMA of length N behaves like an EMA of length 2N - 1, and its average lag is roughly twice that of an SMA of length N. Old prices fade out slowly and never fully drop off, which gives a smoother but later line.
