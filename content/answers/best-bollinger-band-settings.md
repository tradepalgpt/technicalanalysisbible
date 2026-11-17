---
slug: best-bollinger-band-settings
title: "What are the best Bollinger Band settings?"
description: The standard Bollinger Band setting is 20 periods and 2 standard deviations. Bollinger's own guidance on shorter and longer periods, with a worked example.
query: best bollinger band settings
pillar: volatility-guide
publish: 2028-02-11
reviewed: 17 November 2026
guides: [bollinger-bands, standard-deviation, bollinger-band-width]
siblings: [how-do-bollinger-bands-work, walking-the-bollinger-band]
value: [table, example, verdict]
---

The standard setting is a 20-period simple moving average with bands 2 standard deviations away, and John Bollinger still recommends it as the starting point. If you change the period, his guidance is to change the multiplier with it: about 1.9 for 10 periods and 2.1 for 50.

## Why 20 and 2

[Bollinger Bands](/bollinger-bands/) were designed around an intermediate-term view of a market. Twenty bars is about a month of trading days on a daily chart. Two [standard deviations](/standard-deviation/) puts the bands far enough out that most closes fall inside them, without being so wide that they never come into play. Bollinger tested other values and settled on 20 and 2 as the default, while saying they are not magic numbers.

## Bollinger's own guidance on other periods

In *Bollinger on Bollinger Bands* (2001), Bollinger describes adjusting the multiplier with the period. A shorter average uses fewer data points, so the standard deviation of a short window tends to be smaller relative to price swings; a slightly narrower multiplier keeps a similar share of closes inside the bands. A longer window needs a slightly wider one.

| Period | Multiplier | Typical use |
|---|---|---|
| 10 | 1.9 | Short-term view, faster reaction |
| 20 | 2.0 | The default, intermediate-term |
| 50 | 2.1 | Longer-term view, slower bands |

He also suggested that if price is regularly breaking through the bands a lot more or less than you expect, adjust the period rather than piling on multipliers.

## Worked example: same data, three settings

Using the same 20 closes from [how Bollinger Bands work](/answers/how-do-bollinger-bands-work/), ending at 53.6:

| Setting | Middle | Upper | Lower | Width (upper - lower) |
|---|---|---|---|---|
| 20, 2.0 | 51.715 | 53.766 | 49.664 | 4.102 |
| 20, 2.5 | 51.715 | 54.278 | 49.152 | 5.126 |
| 10, 1.9 (last 10 closes) | 52.570 | 53.688 | 51.452 | 2.236 |

On the 10-period setting the middle band sits much closer to current price, because it only looks at the recent climb. The last close of 53.6 is near the upper band on both the 20, 2 and the 10, 1.9 settings, but well inside the 20, 2.5 bands. The same close can look stretched or ordinary depending on the setting. That is the trade-off.

## Settings by purpose

| What you want | Change | Cost |
|---|---|---|
| Fewer band touches, only extremes | Raise the multiplier (2.5 or 3) | Fewer signals, later ones |
| Faster reaction on short timeframes | Shorter period with a lower multiplier | More noise and false touches |
| Smoother bands for position trades | Longer period, slightly higher multiplier | Slower to adapt when volatility changes |
| A squeeze reading | Keep 20, 2 and watch [Bollinger Band width](/bollinger-band-width/) | None; changing settings changes what "low" means |

## Why "best" is the wrong question

There is no setting that is best for every market and timeframe, and any setting that looks best on past data may simply fit that data. Picking the setting with the highest past result from many tries is the textbook route to overfitting. A fairer approach is to choose a setting for a reason (the timeframe, the holding period), test it on data you did not tune on, and keep it unless there is a clear reason to change. Our page on [methods](/methods/) explains how we test without fooling ourselves.

## Common mistakes

- Shortening the period to 10 but leaving the multiplier at 2, then wondering why price rarely touches the bands.
- Switching between sample and population standard deviation across platforms and comparing values.
- Tuning period and multiplier together on one chart until the past looks perfect.
- Using different settings for signals and for the squeeze, then mixing the readings.

## Verdict

Start with 20 periods and 2 standard deviations. If your holding period is clearly shorter or longer, Bollinger's own 10 and 1.9 or 50 and 2.1 pairings are the published alternatives. Choose by timeframe and purpose, not by whichever setting looked best on a past chart.

More in [the volatility guide](/guide/volatility-guide/).
