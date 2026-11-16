---
slug: can-rsi-stay-overbought-for-a-long-time
title: Can RSI stay overbought for a long time?
description: Yes. In a steady uptrend RSI can stay above 70 for weeks. The arithmetic of why, what pulls it back down, and what a long stay above 70 tells you.
query: how long can rsi stay overbought
pillar: rsi-and-momentum-oscillators
publish: 2027-04-07
reviewed: 16 November 2026
guides: [rsi, overbought-oversold, adx]
siblings: [is-rsi-above-70-a-sell-signal, what-is-the-rsi-50-line-used-for]
value: [chart, table, example, verdict]
chart: rsi
---

Yes. In a steady uptrend, RSI can stay above 70 for weeks, because Wilder's smoothing moves slowly and only down days pull it lower. A long stay above 70 usually describes a strong trend, not a market about to fall. What breaks the pattern is a run of meaningful losses.

## Why the arithmetic allows it

[RSI](/rsi/) = 100 x average gain / (average gain + average loss), with both averages smoothed by Wilder's method: each day, the new average keeps 13/14 of the old one and adds 1/14 of today's value.

For RSI to stay above 70, the average gain needs to stay above about 2.33 times the average loss (because 70 / 30 = 2.33). In a steady rally where most days are up and the down days are small, that is easy to maintain.

### A simulation in round numbers

Start with RSI(14) at 70: average gain 0.70, average loss 0.30. Now run a typical steady uptrend: four up days of 0.60 for every one down day of 0.40.

| Day | Move | Avg gain | Avg loss | RSI |
|---|---|---|---|---|
| 0 | | 0.700 | 0.300 | 70.0 |
| 1 | +0.60 | 0.693 | 0.279 | 71.3 |
| 2 | +0.60 | 0.686 | 0.259 | 72.6 |
| 3 | +0.60 | 0.680 | 0.240 | 73.9 |
| 4 | +0.60 | 0.674 | 0.223 | 75.1 |
| 5 | -0.40 | 0.626 | 0.236 | 72.7 |
| 6 | +0.60 | 0.624 | 0.219 | 74.0 |

Each down day knocks RSI back by two or three points; each up day adds about one and a half. With four up days for each down day, RSI keeps drifting higher and settles in the mid to high 70s. If that pattern continues for a month, RSI stays above 70 for the whole month. Nothing in the formula pulls it back towards 50 on its own.

## What it takes to pull RSI below 70

Losses. Starting from the day 6 numbers above (average gain 0.624, average loss 0.219, RSI 74), one down day of 1.00 gives:

- Average gain = 0.624 x 13 / 14 = 0.580
- Average loss = (0.219 x 13 + 1.00) / 14 = 0.275
- RSI = 100 x 0.580 / 0.855 = **67.9**

One sharp down day, about two and a half times the size of the trend's usual down days, takes RSI below 70 at once. A gentle sideways drift takes longer: each flat day trims the average gain by 1/14 and adds nothing to the loss, so RSI eases down slowly.

That is the practical meaning of "overbought for a long time": the trend has not produced any meaningful selling. When it does, RSI drops.

## What a long stay above 70 tells you

| What you see | Usual description |
|---|---|
| RSI above 70 for weeks, price making steady new highs | Strong, orderly uptrend |
| RSI above 70, then pullbacks only to 50 or so, then back above 70 | Healthy trend with shallow pullbacks |
| RSI above 80 for days while price stops rising | Momentum fading at a high level |
| RSI drops from above 70 to below 40 quickly | Trend character changing |
| RSI makes lower peaks above 70 while price makes higher highs | Bearish divergence; slowing, no timing |

The [overbought and oversold](/overbought-oversold/) guide covers the terms in general. The point here is that the duration of an overbought reading is information about the trend, not a countdown to a reversal.

## A worked example

A share rises from 40 to 52 over seven weeks. Daily RSI(14) crosses 70 in week 2 and stays above 70 for most of the next five weeks, dipping to 64 once and to 61 once.

A trader who sold the first cross above 70, at about 43, has been short for five weeks against a 9-point rally. A trader who sold each "overbought" reading in turn has made the same mistake several times.

What the stay above 70 was saying: the rally was one-sided, with small and infrequent down days. That is the textbook description of a strong uptrend. [ADX](/adx/) over the same period would typically be high and rising, confirming trend strength.

Now week 8. Price falls from 52 to 49 in four days, with two large red days. RSI drops from 73 to 46. This is the first meaningful selling of the whole move. It is still not a sell signal by itself: RSI at 46 sits in the normal uptrend pullback zone of about 40 to 50. But the character of the move has changed, and a trader holding a long position has a reason to tighten a stop or watch the next rally closely.

## Overbought and oversold are not symmetric in every market

Markets often fall faster than they rise. A sharp sell-off can take RSI below 30 in a few days, while a steady rally may take weeks to push it above 70. So the same 70/30 lines can behave differently at the top and bottom of the same market. Check how long your market's overbought and oversold spells usually last before assuming they mirror each other.

## What to watch instead of the 70 line

- **The pullback floor.** In an uptrend where RSI keeps returning to the 40 to 50 area and turning up, the trend is intact. A break well below that zone matters more than how long RSI spent above 70. [What is the RSI 50 line used for?](/answers/what-is-the-rsi-50-line-used-for/) explains.
- **A failure swing.** A defined RSI trigger: a lower peak followed by a break of the pullback low.
- **Price structure.** A lower high followed by a break of the last higher low.

## Verdict

RSI can stay overbought for weeks, and in a strong uptrend it usually does. The arithmetic is simple: as long as up days outnumber and outsize the down days, Wilder's slow smoothing keeps RSI high. A long stay above 70 describes strength. It ends when real selling arrives, and that change, not the time spent above 70, is what deserves attention. [Is RSI above 70 a sell signal?](/answers/is-rsi-above-70-a-sell-signal/) covers the single reading.
