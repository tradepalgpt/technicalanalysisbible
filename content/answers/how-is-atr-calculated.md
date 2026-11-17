---
slug: how-is-atr-calculated
title: "How is ATR calculated?"
description: ATR is a smoothed average of the true range. A step-by-step worked calculation, Wilder's smoothing, and why platforms can show different values.
query: how is atr calculated
pillar: volatility-guide
publish: 2028-02-02
reviewed: 17 November 2026
guides: [atr, normalized-atr, average-daily-range]
siblings: [what-is-a-good-atr-value, what-is-volatility-in-trading]
value: [chart, table, example, verdict]
chart: atr
---

ATR is calculated by finding each bar's true range, the largest of high minus low, high minus previous close and low minus previous close, then averaging those values with Wilder's smoothing, usually over 14 bars. The result is in price units.

## Where it comes from

The [Average True Range](/atr/) was introduced by J. Welles Wilder in his 1978 book *New Concepts in Technical Trading Systems*. Wilder traded commodities, where prices often gapped between sessions. A plain high minus low ignores those gaps, so he defined a "true" range that includes them.

## Step 1: the true range of each bar

For each bar, take the largest of three numbers:

1. Current high minus current low
2. The absolute value of current high minus previous close
3. The absolute value of current low minus previous close

The second and third numbers only win when the bar gapped away from the previous close. On a quiet bar with no gap, true range is simply high minus low.

## Step 2: the first ATR

The first ATR is a simple average of the first n true ranges. Wilder used n = 14. To keep the arithmetic short, this example uses n = 3.

## Step 3: Wilder's smoothing

After the first value, each new ATR is:

ATR today = (ATR yesterday x (n - 1) + true range today) / n

This is a type of exponential average. Each new bar gets a weight of 1/n, and older bars fade gradually rather than dropping out all at once.

## Worked example (n = 3)

The bar before bar 1 closed at 50.0.

| Bar | High | Low | Close | Prev close | High - low | abs(High - prev close) | abs(Low - prev close) | True range |
|---|---|---|---|---|---|---|---|---|
| 1 | 51.0 | 49.5 | 50.5 | 50.0 | 1.5 | 1.0 | 0.5 | 1.5 |
| 2 | 52.0 | 50.0 | 51.5 | 50.5 | 2.0 | 1.5 | 0.5 | 2.0 |
| 3 | 51.8 | 50.6 | 51.0 | 51.5 | 1.2 | 0.3 | 0.9 | 1.2 |
| 4 | 53.5 | 52.2 | 53.0 | 51.0 | 1.3 | 2.5 | 1.2 | 2.5 |
| 5 | 53.4 | 51.9 | 52.4 | 53.0 | 1.5 | 0.4 | 1.1 | 1.5 |
| 6 | 53.0 | 52.0 | 52.6 | 52.4 | 1.0 | 0.6 | 0.4 | 1.0 |

- First ATR (after bar 3) = (1.5 + 2.0 + 1.2) / 3 = **1.567**
- Bar 4: (1.567 x 2 + 2.5) / 3 = **1.878**
- Bar 5: (1.878 x 2 + 1.5) / 3 = **1.752**
- Bar 6: (1.752 x 2 + 1.0) / 3 = **1.501**

Bar 4 is the one to notice. It gapped up: its high-low range was only 1.3, but it opened well above the 51.0 close, so its true range is 2.5. A plain average of high-low would have missed most of that move.

## Why your platform may show a different number

| Difference | Effect |
|---|---|
| Smoothing method (Wilder's, simple, exponential) | Values differ, most of all just after a big bar |
| Starting point (how much history is loaded) | Wilder's smoothing carries memory; a short history gives a slightly different value |
| Session times and daily close | A daily bar that closes at 17:00 New York differs from one that closes at midnight |
| Weekend bars on crypto | Seven bars a week change the average |

Many platforms label Wilder's smoothing as "RMA" or "SMMA". If two charts disagree, check these settings before anything else.

## Turning ATR into something comparable

ATR is in price units, so a 400 share with an ATR of 6 and a 20 share with an ATR of 0.6 cannot be compared directly. Divide ATR by price and multiply by 100 to get ATR as a percent of price. That is the idea behind [normalized ATR](/normalized-atr/). A simpler cousin, [average daily range](/average-daily-range/), averages high minus low without the gap adjustment.

## Common mistakes

- Using high minus low and calling it ATR. It misses gaps, which are often the biggest moves.
- Reading ATR as direction. It rises in sharp falls and sharp rallies alike.
- Comparing ATR values from charts with different session closes.
- Changing the period and expecting the same stop distances. A shorter period reacts faster and swings more.

## Verdict

ATR is true range, averaged with Wilder's smoothing over 14 bars by default. The true range step is what makes it useful: it counts gaps. The smoothing step is where platforms differ, so check the method before comparing numbers. It measures movement size only, never direction.

More on volatility measures in [the volatility guide](/guide/volatility-guide/).
