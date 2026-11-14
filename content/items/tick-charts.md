---
slug: tick-charts
name: Tick Charts
aka: [Trade-based charts, transaction charts]
type: chart-type
states: [volatility]
weak_states: [range]
purposes: [filter]
inventor: Not attributed to one person
year: Unknown
default_settings: "Bar size set by the user, for example 233 or 610 trades per bar"
pairs_with: [range-bars, volume, atr, support-and-resistance]
related: [range-bars, renko-chart, equivolume, tick-volume, footprint-chart]
compare: []
glossary: [tick, volatility, trade, noise]
wave: 3
reviewed: 14 November 2026
---

A tick chart draws a new bar after a fixed number of trades, not after a fixed amount of time. A 200-tick bar closes once 200 transactions have taken place. Busy periods create many bars and quiet periods create few, so the chart naturally speeds up when activity rises and slows down when it falls.

## At a glance

| | |
|---|---|
| Type | Chart type (activity-based) |
| Best market states | Volatility; fast, liquid markets |
| Weak in | Slow ranges, where bars form very slowly |
| Best uses | Filter: even out activity across the session |
| Default settings | User-set trade count per bar; platforms vary |
| Created by | Not attributed to one person |
| Leading or lagging | Lagging; bars are only complete after the set trade count |

## What are tick charts?

In this context a "tick" is a single trade, or in some platforms a price change. A tick chart groups a set number of them into each bar. If you choose 500 ticks, every bar contains 500 trades, whether they take ten seconds or ten minutes.

On a time chart, a one-minute bar at the open can hold thousands of trades while a one-minute bar at lunchtime holds a handful. Both look the same size on screen, although one carries far more information. Tick charts fix that by giving each bar the same amount of trading activity. They spend more bars on busy moments, such as news releases and the open, and fewer on quiet ones.

There is no single inventor and no reliable date, so this guide gives neither. Tick charts are common in futures and day trading, where trade-by-trade data is easy to get.

A note on terms. Tick charts are not the same as the "tick" in price terms (the smallest price step of a market), and they are not the same as "tick volume" in forex, which counts price changes as a stand-in for volume. See [Tick volume](/tick-volume/).

## How it works

1. Choose a number of ticks per bar, for example 233.
2. The first trade opens a bar. Each trade adds to a counter and updates the high, low and close.
3. When the counter reaches the chosen number, the bar closes. The next trade opens the next bar.
4. Each bar is shown as a normal candlestick or OHLC bar.

**Worked example.** Set a tick count of 100. In a quiet minute, 40 trades occur, so the bar is not complete. In the next minute 60 more trades occur and the bar closes. Total time 2 minutes. At the market open, 100 trades might occur in 5 seconds, so a bar closes every 5 seconds. A time chart set to one minute would show one bar in the first case and twelve bars' worth of activity squeezed into one in the second.

Some platforms count each trade as one tick. Others count each change in price as one tick, or count volume (contracts) not trades. Large orders that execute as one trade count as one tick on some platforms and as many on others. This changes how bars look, so settings matter when comparing platforms.

## How to read it

**Bars are read like normal bars.** Candlestick shapes, trends, support and resistance and indicators all apply. The difference is only in how the bars are built.

**Bar speed.** Fast-forming bars show rising activity. Slow bars show it falling. Many platforms show a time stamp so you can see how long each took.

**Smoother during activity.** A burst of news produces many bars, so you can see the structure of the move. On a time chart the same move might be one or two big bars.

**Lunchtime quiet.** Quiet periods produce few bars, so the chart skips over low-information periods.

**Comparing to time charts.** A tick chart and a time chart can disagree on the shape of the same price path. Use each for the question it answers.

## Best market states

**Volatility (good).** A tick chart keeps resolution in fast markets, where time bars blur.

**Trends (fine).** Trends show normally, with more bars during acceleration.

**Ranges (weak).** In a quiet range, bars may take a long time to complete. Few bars form and the picture is slow to update.

**Breakouts.** The activity burst that often comes with a breakout produces many bars, which can help in reading how the move developed.

**Reversals.** Reversal shapes are read like normal candles, but their meaning depends on the tick count chosen.

## Settings

| Setting | Options | Effect |
|---|---|---|
| Ticks per bar | Commonly from about 100 to a few thousand; some traders use Fibonacci numbers such as 144, 233 or 610 | Small counts give many bars and more noise; large counts give fewer, smoother bars |
| What counts as a tick | Each trade, each price change, or each unit of volume | Changes bar size and how bars look on different platforms |
| Session | Regular hours or all hours | Sets where bars start and end |
| Bar style | Candles, OHLC bars | Display only |

There is no standard value. Choose a count so that the chart has a readable number of bars across your trading window, and test it on the market you trade. Fibonacci-style counts are a popular habit but there is no evidence that they have any special property.

## Common mistakes

- Comparing tick counts across markets. A 500-tick bar on a busy index future and on a thinly traded product mean very different things.
- Assuming the same count gives the same chart on every platform, when platforms define a tick differently.
- Reading time between bars as unimportant. The speed of bar formation is useful information.
- Using indicators set for time bars, such as a 20-bar average, without noting that bars now vary in duration.
- Using tick charts on markets with little or no trade data, such as many spot forex feeds, where tick volume is a proxy.
- Expecting the chart type itself to give an advantage.

## Pairs well with

- **[Range bars](/range-bars/)**: builds bars from a price range instead of a trade count, a useful comparison.
- **[Volume](/volume/)**: volume per bar tells you how large the trades were.
- **[ATR](/atr/)**: helps judge whether the current bar size fits the market's volatility.
- **[Support and resistance](/support-and-resistance/)**: levels drawn on higher time frames give context.

## Sources

- Murphy, John J. (1999). *Technical Analysis of the Financial Markets*. New York Institute of Finance. (Covers conventional time-based charts, for contrast with tick-based bars.)

## FAQ

**What is a tick chart?**
It is a chart where each bar contains a fixed number of trades. A 200-tick chart closes a bar after every 200 trades. Bars therefore form quickly in busy markets and slowly in quiet ones.

**What does tick mean on a chart?**
Usually one trade, or in some platforms one price change. It is not the same as the minimum price step of a market, which is also called a tick. Check how your platform defines it.

**What tick count should I use?**
There is no standard number. Many day traders try a range such as 100 to 1,000 and choose a value that gives enough bars to read without too much noise. Test it on the market you trade.

**What is the difference between tick charts and range bars?**
A tick chart closes a bar after a set number of trades. A range bar closes after price covers a set distance. Tick charts follow activity; range bars follow price movement.

**Are tick charts better than time charts?**
They are different. Tick charts even out activity, which helps in busy markets. Time charts line up with the clock, which helps with sessions and news. Many traders use both for different purposes.
