---
slug: range-bars
name: Range Bars
aka: [Range chart, constant range bars]
type: chart-type
states: [volatility]
weak_states: [range]
purposes: [filter]
inventor: Not attributed to one person
year: Unknown
default_settings: "Bar size set by the user, in points, ticks or an ATR multiple"
pairs_with: [atr, renko-chart, tick-charts, support-and-resistance]
related: [renko-chart, tick-charts, point-and-figure, heikin-ashi, kagi-chart]
compare: []
glossary: [range, volatility, tick, noise]
wave: 3
reviewed: 14 November 2026
---

Range bars are price bars that each cover the same fixed price range, no matter how long that takes. A new bar starts only when price has moved far enough to complete the current one. Quiet periods produce few bars and fast, volatile periods produce many, so the chart adapts to volatility instead of the clock.

## At a glance

| | |
|---|---|
| Type | Chart type (time-independent) |
| Best market states | Volatility; fast markets where time bars blur |
| Weak in | Slow ranges, where few bars form and detail is lost |
| Best uses | Filter: remove time noise and standardise bar size |
| Default settings | User-set range, for example 10 ticks or a multiple of ATR |
| Created by | Not attributed to one person |
| Leading or lagging | Lagging; each bar is only complete after price travels the full range |

## What are range bars?

On a normal time chart, every bar covers the same amount of time, but the price distance each bar covers varies a lot. Range bars flip this around. Every bar has the same high-to-low range, and the time each takes varies.

If the chosen range is 10 points, a bar keeps forming until the gap between its high and low reaches 10. Then it closes and the next bar begins. During a fast move, several bars can form in a minute. In a quiet lunchtime, a single bar may take an hour.

The effect is that small price wiggles are ignored until they add up to a real move. Many traders find this makes trends and levels look cleaner. The trade-off is the loss of the time axis: you cannot read from the chart how long things took, and the bars cannot be matched to the clock for news events or session opens.

There is no single inventor of this chart type, and no reliable year, so none is given here. It is widely available on platforms that support futures and day trading.

## How it works

1. Choose a **range**, such as 10 points, 20 ticks or a multiple of ATR (see [ATR](/atr/)).
2. A bar opens at the first trade. It tracks the highest and lowest price traded.
3. When the high-to-low distance reaches the range, the bar closes at that extreme and a new bar opens.
4. Repeat.

**Worked example.** Range = 10 points. A bar opens at 100 and trades between 100 and 108. It is not complete. Price then rises to 110. The range is now 10, so the bar closes at 110 and shows a high of 110, a low of 100. The next bar starts at the next trade, which is near 110. If price instead drops to 98 from 100 after trading as high as 108, the range is 10 (98 to 108) and the bar closes at 98 as a down bar.

Details differ by platform. Some start the next bar at the previous bar's close; some at the next trade price; some use a rule where a bar can only close at its high or low so that the bar's open and close are always at the extremes. Check how your platform builds them, as results can differ.

## How to read it

**Equal-sized bars.** Because every bar spans the same range, the thing to read is the sequence of bars: how many bars price took to go from one level to the next, and how often direction flipped.

**Trend.** A run of bars in the same direction means an unbroken move. Pullbacks appear as a short run of opposite bars.

**Speed.** Bars forming quickly (watch the time stamps or clock if shown) mean fast trade, and slow bars mean quiet trade.

**Support and resistance.** Levels where several bars have turned stand out clearly because there is little time noise.

**Reversals.** A reversal is generally read when a bar in the opposite direction forms after a long run, or when the bar's range is exceeded on the other side. This is a lagging signal, as the move must complete a full range.

## Best market states

**Volatility (good).** Range bars handle fast markets well, because each bar represents a fixed amount of movement. They help when a time chart is too crowded in news-driven spikes.

**Trends (good).** Smooth sequences of same-direction bars are easy to follow.

**Ranges (weak).** In a slow sideways market, little forms, and the chart can appear to skip hours of activity. Price may also flicker up and down without completing a bar.

**Breakouts.** A breakout often appears as a quick burst of bars, but the move is only visible after it has covered the full range.

**Reversals.** Reversals are detected late because a full bar must form against the move.

## Settings

| Setting | Options | Effect |
|---|---|---|
| Range size | Ticks, points, or ATR multiple | The key setting. A small range gives many bars and more noise; a large range gives few bars and later signals |
| Bar-start rule | Close of last bar, or next trade | Changes bar shapes and sometimes the count of bars |
| Data source | Tick data or 1-minute data | Tick data gives accurate bars; 1-minute data gives approximations |
| Session | Regular hours or all hours | Changes where bars start and end |

There is no standard default. A common approach is to set the range as a share of the market's average daily range, or as a multiple of ATR so it adjusts to the market. Whatever you choose, test it on the market you trade.

## Common mistakes

- Comparing charts from two platforms built with different bar-start rules.
- Using a very small range, which gives a chart as noisy as a short time-frame chart.
- Forgetting that bars have no time axis, then trying to line them up with news times.
- Using 1-minute data to build range bars, which can distort the bars when the range is smaller than a minute's movement.
- Applying time-based indicators, such as a 20-bar moving average, and expecting them to mean the same as on a time chart.
- Assuming the chart type gives an edge. It changes presentation; it does not predict direction.

## Pairs well with

- **[ATR](/atr/)**: can set the range size so it adapts to the market's volatility.
- **[Renko chart](/renko-chart/)**: another fixed-size chart, useful for comparing how each filters noise.
- **[Tick charts](/tick-charts/)**: build bars from trade count instead of range.
- **[Support and resistance](/support-and-resistance/)**: levels are easy to see on a chart with little time noise.

## Sources

- Murphy, John J. (1999). *Technical Analysis of the Financial Markets*. New York Institute of Finance. (Covers conventional time-based charts, useful for contrast with range bars.)

## FAQ

**What is a range bar chart?**
It is a chart where every bar covers the same high-to-low price range. A bar closes when price has moved that distance, and the next one begins. The time each bar takes varies, so the chart has no regular time axis.

**How are range bars different from Renko?**
Renko bricks are built from closing price moves in a single direction and a reversal usually needs two bricks' worth of movement. Range bars include the full high and low of each bar and can reverse within the range. They look similar but are built differently.

**What range size should I use?**
There is no fixed answer. Many traders pick a size based on the market's typical movement, for example a share of the average daily range, or a multiple of ATR. Smaller sizes give more bars and more detail but more noise.

**Do range bars work on all markets?**
They need reliable price data and trade throughout the session. They suit liquid futures, forex and stocks. In thin markets the gaps between trades can make bars unreliable.

**Can I use indicators on range bars?**
Yes, but indicators count bars, not time. A 14-bar RSI covers a variable length of time. Its readings are valid mathematically but are not comparable with the same indicator on a time chart.
