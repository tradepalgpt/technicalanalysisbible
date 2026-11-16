---
slug: best-rsi-setting-for-day-trading
title: What is the best RSI setting for day trading?
description: No RSI setting is best for every day trader. How period, levels and chart timeframe work together, with a table of common intraday choices.
query: best rsi setting for day trading
pillar: rsi-and-momentum-oscillators
publish: 2027-03-05
reviewed: 16 November 2026
guides: [rsi, stochastic-rsi, connors-rsi]
siblings: [best-rsi-period-for-swing-trading, why-rsi-differs-between-tradingview-and-mt5]
value: [table, example, verdict]
---

There is no single best RSI setting for day trading. The default 14 periods with levels of 70 and 30 is a sound start; faster settings such as RSI(7) need wider levels such as 80 and 20. What matters most is how many minutes of movement the setting measures.

## Why there is no single answer

An [RSI](/rsi/) setting has three parts that only make sense together:

1. **The chart timeframe**, such as 5-minute or 15-minute bars.
2. **The period**, the number of bars RSI looks back over.
3. **The levels**, the lines you call overbought and oversold.

Change one and the others have to change with it. A setting that is "best" on a 5-minute chart of a busy index future can be useless on a 15-minute chart of a quiet currency pair. Anyone quoting one number without the other two is giving you a third of an answer.

## Start with minutes, not bars

The period and the timeframe multiply. RSI(14) on a 5-minute chart measures the last 70 minutes. RSI(14) on a 15-minute chart measures three and a half hours. RSI(7) on a 15-minute chart measures 105 minutes, close to the first case.

| Chart | Period | Minutes covered (roughly) | Feels like |
|---|---|---|---|
| 1-minute | 14 | 14 | Very fast; reacts to single orders |
| 5-minute | 14 | 70 | Last hour or so |
| 5-minute | 7 | 35 | Last half hour |
| 15-minute | 14 | 210 | Most of a session half |
| 15-minute | 7 | 105 | Last two hours |
| 1-hour | 14 | 840 | Two to three sessions |

Wilder's smoothing makes the real window longer than the period suggests. It behaves like an exponential average over about twice the period, so "70 minutes" is the core, with a tail going back further. The [pillar guide](/guide/rsi-and-momentum-oscillators/) shows that relationship.

So the first question for a day trader is not "which period?" but "how long a stretch of movement do I want to judge as stretched or not?" If you hold trades for 20 to 40 minutes, an RSI that summarises the last three and a half hours is measuring a different story from your trade.

## Match the levels to the period

Short periods reach the extremes much more often. On RSI(14), a reading above 70 means the last stretch was clearly one-sided. On RSI(5), a reading above 70 can come from three up bars in a row.

| Period | Levels often used | Why |
|---|---|---|
| 2 to 3 | 90 / 10 | Hits 70 and 30 almost constantly |
| 5 to 9 | 80 / 20 | Fast, frequent extremes |
| 14 | 70 / 30 | Wilder's original pairing |
| 21 and above | 65 / 35 or 60 / 40 | Rarely reaches 70 or 30 |

If you shorten the period, widen the levels. Keeping 70/30 on RSI(5) gives you many more signals that each mean less.

## A worked example

Take a 5-minute chart of a stock index future in a quiet morning range between 4,500 and 4,520.

- **RSI(14), levels 70/30.** Over the morning, RSI touches 30 once, near 4,502, and 70 once, near 4,518. Two readings, both at the range edges.
- **RSI(5), levels 70/30.** RSI touches 30 or 70 eight or nine times, often in the middle of the range after three bars in one direction.
- **RSI(5), levels 80/20.** RSI touches the levels three times, two of them near the edges.

These counts are an illustration of how the settings behave, not a test. The point is the shape: RSI(5) with 70/30 floods you with mid-range readings, and either the longer period or the wider levels brings the count back to readings that line up with the range edges. The range levels themselves still did the real work.

## What actually matters more than the setting

**The time of day.** The first hour after a major market opens is often fast and directional. RSI readings there behave like trend readings: overbought is normal. Lunchtime is often a range, where RSI's edges line up better with support and resistance.

**The market state.** In an intraday trend, RSI(14) may sit above 60 for hours, with pullbacks to 40 or 50 rather than 30. Selling 70 on a trend day is the classic intraday RSI loss. Decide whether the day is trending or ranging first, using price structure or the opening range, and then read RSI for that state.

**The platform.** Intraday RSI is sensitive to the data feed and to how much history the chart has loaded. Two platforms can show RSI(14) a few points apart on the same 5-minute bar. [Why does RSI differ between TradingView and MT5?](/answers/why-rsi-differs-between-tradingview-and-mt5/) covers this.

## Faster variants

Some day traders swap RSI for a faster relative:

- **[Stochastic RSI](/stochastic-rsi/)** ranks RSI within its own recent range, so it swings fully from 0 to 100 even when RSI moves only a few points. It suits quick timing within a trend you have already identified. It is very noisy on its own.
- **[Connors RSI](/connors-rsi/)** combines a 3-period RSI, the length of the current up or down streak and the size of the last bar's move. It was designed for short holding periods on daily bars; using it on 1-minute charts takes it far from its design.

Both trade more speed for more noise. Neither fixes the need to know the market state.

## How to choose your own setting without fooling yourself

1. Decide your typical holding time first.
2. Pick a period that covers roughly one to three times that holding time on your chart.
3. Set the levels for that period from the table above.
4. Write down the setting before testing it, and test it on days you did not use to choose it.
5. Do not change it after a single bad day. Changing the period after every loss is tuning to the past.

## Verdict

For most day traders, RSI(14) on a 5-minute or 15-minute chart, with 70/30 in ranges and attention to the 40 to 50 zone on trend days, is a sensible default. Faster settings such as RSI(5) to RSI(9) suit shorter holds but need 80/20 levels. No setting removes the need to decide first whether the day is trending or ranging, and that decision moves results far more than the difference between RSI(9) and RSI(14). For holds of days rather than minutes, see [What is the best RSI period for swing trading?](/answers/best-rsi-period-for-swing-trading/).
