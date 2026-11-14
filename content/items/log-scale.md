---
slug: log-scale
name: Logarithmic vs Linear Scale
aka: [Log scale, logarithmic chart, semi-log chart, percentage scale]
type: chart-type
states: [trend]
weak_states: [range]
purposes: [filter]
inventor: Not attributed to one person
year: Unknown
default_settings: "Linear scale is the usual default; log is a chart setting"
pairs_with: [trendline, fibonacci-retracement, support-and-resistance, gann-fan]
related: [line-chart, trendline, fibonacci-retracement, gann-fan, linear-regression-channel]
compare: []
glossary: [percentage-change, trend, trendline, scale]
wave: 3
reviewed: 14 November 2026
---

A linear chart spaces prices by equal amounts, so a move from 10 to 20 takes the same height as 20 to 30. A logarithmic (log) chart spaces prices by equal percentages, so 10 to 20 (a 100% rise) takes the same height as 20 to 40. Log scale makes long-term charts and big moves easier to compare fairly.

## At a glance

| | |
|---|---|
| Type | Chart setting (axis scale) |
| Best market states | Trend, especially long ones |
| Weak in | Ranges and short time frames, where the two scales look almost the same |
| Best uses | Filter: judge long-term trends and trendlines in percentage terms |
| Default settings | Linear on most platforms; log is switched on in chart settings |
| Created by | Not attributed to one person |
| Leading or lagging | Neither; it changes how past prices are displayed |

## What is the difference between log and linear?

Both scales show the same price data. They differ only in how the vertical axis is spaced.

On a **linear** scale, the distance between 10 and 20 is the same as the distance between 90 and 100. Each step of 10 points is equal on screen.

On a **log** scale, equal distances represent equal percentage changes. The distance from 10 to 20 (up 100%) equals the distance from 20 to 40 and from 40 to 80. The distance from 90 to 100 (up about 11%) is much smaller.

Logarithms are a standard mathematical tool, so there is no single inventor of the technique and this guide gives no year. Log scales are a standard option in charting software and are covered in most technical analysis textbooks.

The reason this matters is that percentage moves often matter more than point moves. A rise from 10 to 20 is a doubling. A rise from 100 to 110 is 10%. On a linear chart the first looks small and the second looks the same size, which is misleading.

## How it works

On any platform, you switch the price axis from linear to log in the chart or axis settings. Some platforms offer "percentage" scale, which shows the same spacing as log but labels the axis in percentage change from a starting point. Some also offer "indexed to 100".

**Worked example.** A stock rises from 10 to 20 to 40 to 80, doubling each time.
On a linear chart, the three rises measure 10, 20 and 40 points, so each move looks twice as large as the one before. The picture suggests acceleration.
On a log chart, each doubling is the same height, so the line climbs at a constant slope. The picture shows steady 100% gains, which is the accurate description.

Now consider a rise from 100 to 110 and then 110 to 121. On a linear scale these are 10 and 11 points. On a log scale both are 10% and look equal.

## How to read it

**Straight lines mean constant growth.** On a log chart, a straight line represents a constant percentage rate of change. A trendline that fits well on a log chart tells you something about the growth rate.

**Trendlines.** A trendline drawn on a linear chart and then moved to log will look curved or sit in a different place. Over a long period, one scale will fit the price swings better than the other. Draw the trendline on the scale you intend to trade by and apply it consistently.

**Support and resistance.** Horizontal levels are the same on both scales, but their spacing is not. On a log scale, the same percentage gap between levels is the same visual gap.

**Long-term charts.** On charts covering many years or large price changes, linear scale compresses early prices into a flat line at the bottom. Log scale keeps the early history readable.

**Short time frames.** Over a small price range, the two scales are almost identical, because the percentage change is nearly proportional to the point change. The choice makes little difference on a day chart of a stable stock.

## Best market states

**Trends (best).** Long uptrends or downtrends with large price changes show the clearest difference. Log scale reveals whether growth is steady or accelerating.

**Ranges (weak).** Price moves within a narrow band, so both scales look alike.

**Breakouts.** Trendline breaks can occur at different times on the two scales if the line was drawn long ago.

**Reversals.** A break of a long-term log trendline is a more consistent measure over many years than a linear one.

**Volatility.** In very volatile markets with big percentage swings, the scale you use shapes how big each swing looks.

## Settings

| Setting | Options | What it does |
|---|---|---|
| Axis scale | Linear, logarithmic, percentage | Changes the spacing of prices |
| Auto-scale | On or off | Keeps the visible bars filling the chart |
| Indexed to 100 | On or off | Rebases the start to 100 for comparison |
| Grid labels | Price or percentage | Platform-dependent display |

Platforms differ in how they label the log axis (some show prices at uneven steps, others show percentages), and in whether tools such as Fibonacci retracement and Gann angles follow the log scale or are drawn on a linear basis. Check each tool's setting.

## Common mistakes

- Using a linear scale for a multi-year chart of a market that has moved by large factors.
- Drawing a trendline on one scale and then reading it on the other.
- Forgetting that drawing tools such as [Fibonacci retracement](/fibonacci-retracement/) may be calculated in price terms or percentage terms depending on platform and settings.
- Applying log scale to markets that can go negative or to zero, such as some spreads or interest-rate differentials, which log scales cannot display.
- Expecting log scale to matter on a short intraday chart.
- Treating the scale as a signal. It changes the look of the data, not the data.

## Pairs well with

- **[Trendline](/trendline/)**: long-term trendlines usually fit better on a log scale.
- **[Fibonacci retracement](/fibonacci-retracement/)**: levels can differ between scales, so be consistent.
- **[Support and resistance](/support-and-resistance/)**: percentage gaps between levels look consistent on log scale.
- **[Gann angles / fan](/gann-fan/)**: the slope of fixed-angle lines depends heavily on the axis scale.

## Sources

- Murphy, John J. (1999). *Technical Analysis of the Financial Markets*. New York Institute of Finance. (Discusses arithmetic and logarithmic scales for long-term charts.)

## FAQ

**What is the difference between log and linear scale?**
A linear scale gives equal space to equal point changes. A log scale gives equal space to equal percentage changes. On a log chart a rise from 10 to 20 looks the same size as a rise from 20 to 40.

**When should I use a log scale?**
Use it for long time frames, such as years of data, or when price has changed by a large factor. In those cases percentage moves are the fairer comparison. For short intraday charts the difference is small.

**Does log scale change the price data?**
No. The prices are identical. Only the spacing of the vertical axis changes. Indicators such as moving averages and RSI are calculated from the same numbers either way.

**Do trendlines change on a log chart?**
Yes. A line drawn on a linear chart can look curved or sit in a different place on a log chart. Draw trendlines on the scale you plan to use and stay with it.

**Is log scale better for crypto and stocks?**
For assets that have grown by large multiples, a log scale often gives a more even picture of the long-term trend. It does not predict anything, and it is a display choice, not a method.
