---
slug: best-rsi-period-for-swing-trading
title: What is the best RSI period for swing trading?
description: For swing trading on daily charts, RSI(14) is a sound default; shorter periods suit short pullback entries. How to match the period to your holding time.
query: best rsi period for swing trading
pillar: rsi-and-momentum-oscillators
publish: 2027-04-09
reviewed: 16 November 2026
guides: [rsi, connors-rsi, exponential-moving-average]
siblings: [best-rsi-setting-for-day-trading, what-is-the-rsi-50-line-used-for]
value: [table, example, verdict]
---

For swing trading on daily charts, Wilder's default RSI(14) is a sound starting point, with 70/30 levels and attention to the 40 to 50 pullback zone in trends. Very short periods such as RSI(2) to RSI(5) suit pullback entries held a few days. Longer periods suit holds of several weeks.

## Match the period to the holding time

Swing trading usually means holding for a few days to a few weeks. An [RSI](/rsi/) on daily bars looks back over its period in trading days, and Wilder's smoothing gives older days a fading weight beyond that. As a rough guide:

| Typical hold | RSI period on daily bars | Levels often used | What it reads |
|---|---|---|---|
| 1 to 5 days | 2 to 5 | 90 / 10 or 80 / 20 | How stretched the last few days were |
| 1 to 3 weeks | 9 to 14 | 70 / 30, plus the 40 to 50 zone | The balance of the last two to three weeks |
| 3 to 8 weeks | 14 to 21 on daily, or 14 on weekly | 65 / 35 or 70 / 30 | The balance of the last month or more |

The logic: the indicator should describe a stretch of time similar to your trade. An RSI(2) that only "remembers" the last two or three days says nothing about the three-week swing you hope to catch. An RSI(25) that summarises five weeks reacts too slowly to time a four-day pullback.

## Three common approaches

### 1. RSI(14) on daily bars

Wilder's default. On daily bars it covers roughly three weeks, which matches many swing holding periods. Two readings carry most of its value:

- **In ranges:** 70 and 30 near the range edges.
- **In trends:** pullbacks to the 40 to 50 zone in uptrends (50 to 60 in downtrends). [What is the RSI 50 line used for?](/answers/what-is-the-rsi-50-line-used-for/) covers this.

### 2. Short RSI for pullbacks in a trend

A short RSI, often RSI(2) or RSI(3), with extreme levels such as 10 or 5, used only in the direction of a longer trend. The idea, popularised by Larry Connors' work on short-term pullbacks, is that a market in a long-term uptrend that has had a sharp two- or three-day dip is stretched in the short term. A typical rule set:

1. Trend filter: price above its 200-day average.
2. Entry: RSI(2) closes below 10.
3. Exit: after a few days, or when price closes above a short average.

This approach depends heavily on the trend filter and on markets that tend to bounce after short dips. It was described mainly for stock indices and large stocks; markets that trend in steps or fall sharply are a different setting. We have not tested it ourselves, so we report no figures. Anyone using it should test the exact rules on their own markets, with the warning that very short RSIs have few parameters but many ways to tune exits. [Connors RSI](/connors-rsi/) is a later, more complex version of the same idea.

### 3. Weekly RSI for context

For holds of several weeks, some traders read RSI(14) on the weekly chart for context and daily RSI for timing. Weekly RSI(14) covers about three months, so it changes slowly and describes the larger trend.

## A worked example: one pullback, three periods

A share in an uptrend above its rising 200-day [exponential moving average](/exponential-moving-average/) pulls back for four days, from 82 to 78.

- **RSI(2)** falls to 6. Deeply oversold on its scale.
- **RSI(14)** falls from 63 to 47. In the normal uptrend pullback zone.
- **RSI(25)** falls from 60 to 52. Barely changed.

All three are reading the same four days. RSI(2) shouts; RSI(14) says "ordinary pullback"; RSI(25) hardly notices.

A swing trader planning a 1 to 3 week hold can use RSI(14)'s reading: the pullback is normal for this trend. They wait for a trigger, a close above the prior day's high at 78.90, and buy with a stop below the pullback low, at 77.60. Risk 1.30 (1R). A 2R target at 81.50 sits just below the recent high of 82.

A trader planning a 2 to 4 day hold might use RSI(2)'s reading instead, with a much shorter exit rule.

Neither period is wrong. They suit different trades.

## Settings to avoid

- **Changing the period after every trade.** That is curve-fitting by hand.
- **Short periods with 70/30 levels.** RSI(3) hits 70 and 30 constantly. Widen the levels when you shorten the period.
- **Long periods with 70/30 levels.** RSI(25) rarely reaches them. Narrow the levels or read the 50 line instead.
- **Settings borrowed from another market.** A period that suits a calm index may not suit a volatile single stock.

## How to choose your own

1. Write down your usual holding time.
2. Pick a period from the table that matches it, and the levels that go with that period.
3. Decide, before testing, what market state you will use it in (range or trend), and with what trend filter.
4. Test on one stretch of history, then check on a separate stretch you did not look at. Our [pillar guide](/guide/rsi-and-momentum-oscillators/) covers the main backtesting traps.

## Verdict

For most swing traders on daily charts, RSI(14) is the right default: it covers about three weeks, matching a typical swing hold, and its 40 to 50 pullback zone is useful in trends. Very short RSIs suit holds of a few days but only with a strict trend filter. The period should follow the holding time, and the levels should follow the period. For intraday settings, see [What is the best RSI setting for day trading?](/answers/best-rsi-setting-for-day-trading/).
