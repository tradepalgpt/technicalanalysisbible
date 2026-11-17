---
slug: what-are-donchian-channels
title: "What are Donchian channels?"
description: Donchian channels plot the highest high and lowest low of the last n bars, usually 20. How they are built, a worked example, and their use in breakout systems.
query: what are donchian channels
pillar: volatility-guide
publish: 2028-02-23
reviewed: 17 November 2026
guides: [donchian-channels, turtle-trading, trend-following]
siblings: [how-do-keltner-channels-work, how-to-filter-trades-by-volatility]
value: [chart, table, example, verdict]
chart: donchian-channels
---

Donchian channels plot the highest high and the lowest low of the last n bars, commonly 20, with an optional middle line halfway between them. A close through the upper line marks a new n-bar high, so the channel is best known as the basis of simple breakout systems.

## Where they come from

[Donchian channels](/donchian-channels/) are named after Richard Donchian, a pioneer of trend-following funds from the 1940s onwards. He used rules based on the highest and lowest prices over recent weeks, often called the four-week rule. The same channels later became famous through the [Turtle traders](/turtle-trading/) of the 1980s, whose published rules used 20-day and 55-day breakouts for entries.

## How they are built

- **Upper line:** the highest high of the last n bars.
- **Lower line:** the lowest low of the last n bars.
- **Middle line:** (upper + lower) / 2.

There is no averaging and no standard deviation. The channel only moves when a new high or low enters the window, or an old one drops out. Platforms differ on whether the current bar is included; for breakout rules the channel is usually taken from the bars before the current one, so a new high can break it.

## Worked example (n = 5)

| Bar | High | Low |
|---|---|---|
| 1 | 101.0 | 98.0 |
| 2 | 103.0 | 99.1 |
| 3 | 102.0 | 97.6 |
| 4 | 104.5 | 100.0 |
| 5 | 103.2 | 99.5 |

- Upper line = highest high = **104.5** (bar 4)
- Lower line = lowest low = **97.6** (bar 3)
- Middle line = (104.5 + 97.6) / 2 = **101.05**
- Channel width = 104.5 - 97.6 = **6.9**

If bar 6 trades above 104.5, it makes a new five-bar high: a breakout under Donchian rules. If bar 3 then drops out of the window with no new low, the lower line jumps up to the next-lowest low.

## Why they count as a volatility tool

The channel width is the full high-to-low range of the window, so it is a crude measure of volatility. Wide channels mean price has travelled far; narrow ones mean it has stalled. Unlike Bollinger or Keltner, the width is set by just two prices, the extremes, so a single spike can hold the channel wide for the whole window.

| Feature | Donchian | Bollinger | Keltner |
|---|---|---|---|
| Built from | Highest high, lowest low | Standard deviation of closes | ATR |
| Smoothing | None | 20-bar average | EMA and ATR smoothing |
| Reacts to one spike | Holds it for n bars | Partly | Partly |
| Typical use | Breakouts and exits | Stretch, squeezes | Trend strength, squeezes |

## Use in breakout systems

The classic rule: enter long when price breaks the n-bar high, enter short when it breaks the n-bar low, and exit on a shorter opposite channel. The Turtle rules, as published by former Turtles such as Curtis Faith, used a 20-day breakout with a 10-day exit, and a 55-day breakout with a 20-day exit. This is one form of [trend following](/trend-following/).

In R terms, if the stop is the opposite Donchian line, 1R can be very wide in a volatile market. A breakout at 104.6 with a stop at 97.5 has a fill-to-stop distance of 7.1 per unit, so 100 of risk buys about 14 units (100 / 7.1 is 14.08, rounded down). The Turtles avoided such wide stops by using a stop of 2 times their volatility measure, N, instead. A clean stop is -1R; gaps and slippage, common on breakouts, are on top, as is commission. Stops only tighten, so a trailing Donchian exit moves only in the trade's favour.

## Common mistakes

- Including the current bar in the channel and then wondering why price never "breaks" it.
- Using the opposite channel as the stop without sizing for its width.
- Expecting most breakouts to follow through. Breakout systems typically accept many small losses for a few large trends.
- Forgetting that a single spike can hold the channel wide for n bars.

## Verdict

Donchian channels are the simplest channel there is: the highest high and lowest low of recent bars. They are made for breakout and exit rules, and their width gives a rough read of volatility. They do not smooth or adapt, so size every trade from the actual fill-to-stop distance.

More in [the volatility guide](/guide/volatility-guide/).
