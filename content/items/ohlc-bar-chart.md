---
slug: ohlc-bar-chart
name: Bar Chart (OHLC)
aka: [OHLC bars, bar chart, open-high-low-close chart]
type: chart-type
states: [trend, range]
weak_states: []
purposes: [confirmation]
inventor: Not attributed to one person
year: Unknown
default_settings: "One bar per period; left tick = open, right tick = close"
pairs_with: [candlestick-chart, support-and-resistance, volume, market-structure]
related: [candlestick-chart, line-chart, heikin-ashi, renko-chart, equivolume]
compare: []
glossary: [ohlc, high, low, open, close, timeframe]
wave: 3
reviewed: 14 November 2026
---

An OHLC bar chart draws each period as a single vertical line running from the period's low to its high, with a small tick on the left for the open and a small tick on the right for the close. It shows the same four prices as a candlestick but in a lighter, more compact style.

## At a glance

| | |
|---|---|
| Type | Chart type |
| Best market states | Trend, range |
| Weak in | None in particular; it is a display, not a signal |
| Best uses | Confirmation: read structure, ranges and closes |
| Default settings | One bar per time period, open tick left, close tick right |
| Created by | Not attributed to one person |
| Leading or lagging | Neither; it shows past prices as they happened |

## What is an OHLC bar chart?

OHLC stands for open, high, low and close. These four prices summarise everything that happened in a period such as a minute, an hour or a day. The bar chart is one of the oldest ways of showing them and is available on every charting platform.

There is no single inventor and no reliable date for its first use, so this guide gives neither.

Because it contains the same information as a candlestick, the choice between the two is mostly about preference. Candlesticks highlight the body between open and close with a block of colour. Bar charts keep everything in thin lines, which many traders find cleaner when a chart is crowded with indicators or when many bars are on screen.

## How it works

Each bar has four parts:

1. **The vertical line.** Its top is the high of the period and its bottom is the low. The length of the line is the period's full range.
2. **The left tick.** A short horizontal mark to the left of the line, at the open price.
3. **The right tick.** A short horizontal mark to the right of the line, at the close price.
4. **Colour.** Many platforms colour the bar by direction: one colour if the close is above the open (or above the previous close), another if below. This is a display setting and not part of the bar itself.

**Worked example.** A daily bar opens at 100, trades up to 106, falls to 98 and closes at 104. The vertical line runs from 98 to 106. The left tick sits at 100 and the right tick sits at 104. Because the right tick is higher than the left, the day closed above its open.

Some platforms let you choose a "HLC" variant with no open tick, which is common for markets where the open is less meaningful, and a few offer a version that colours bars by the close compared with the previous close instead of the open. Check the platform setting if the colours seem to disagree with the ticks.

## How to read it

**Bar length.** A long bar means a wide range and active trading. A short bar means a narrow, quiet period.

**Close position.** A close near the top of the bar shows buyers held control into the end; a close near the bottom shows sellers did. The close is often considered the most important price of a period.

**Close against the open.** A right tick above the left tick is an up bar, and below is a down bar. Strings of up bars with rising highs and lows are a trend; strings that overlap and fail to progress are a range.

**Bar relationships.** Traders read the bars against each other: an "inside bar" has a high and low within the previous bar's range, an "outside bar" exceeds both. These ideas come from price action and work the same on bar charts or candlesticks. See [Price action](/price-action/).

**Gaps.** A gap shows as a space between one bar's range and the next. Bar charts show gaps clearly because the lines are thin.

## Best market states

**Trends (good).** Rising highs and lows are easy to follow, and the tick marks show where each bar closed relative to the last.

**Ranges (good).** Thin bars make horizontal levels clear, because less colour competes with the support and resistance lines drawn on top.

**Breakouts.** A bar that closes beyond a level is visible at a glance, particularly when the close tick sits past the line.

**Reversals.** Single-bar and two-bar reversals are readable, but candlestick pattern names such as hammer or engulfing are defined on candles, so they are less obvious here.

**Volatility.** Bar length is a direct picture of range, so changes in volatility are easy to see.

## Settings

| Setting | Options | What it does |
|---|---|---|
| Time frame | 1 minute to monthly | Sets how much time each bar covers |
| Bar colouring | Single colour, by open-close direction, by close vs previous close | Display only |
| Tick width | Platform-dependent | Makes the open and close ticks easier to see |
| HLC variant | On or off | Removes the open tick |

There are no calculation inputs. The time frame is the only choice that changes what you see. Shorter time frames show more detail and more noise; longer ones show structure and fewer bars.

## Common mistakes

- Mixing up the ticks. Open is on the left and close is on the right.
- Reading the colour as meaning something when the platform colours by close against the previous close instead of the open.
- Looking for candlestick pattern names on bars without translating them.
- Using too short a time frame and reading every bar as a signal.
- Comparing bars from different sessions without checking whether they include overnight trade.
- Assuming the chart type gives an edge. The same data on a candlestick chart says the same thing.

## Pairs well with

- **[Candlestick chart](/candlestick-chart/)**: shows the same data with a body, useful when you want to compare the two styles.
- **[Support and resistance](/support-and-resistance/)**: thin bars leave room to draw levels clearly.
- **[Volume](/volume/)**: volume under each bar shows whether the range came with real participation.
- **[Market structure](/market-structure/)**: swing highs and lows are easy to track bar by bar.

## Sources

- Murphy, John J. (1999). *Technical Analysis of the Financial Markets*. New York Institute of Finance.
- Nison, Steve (1991). *Japanese Candlestick Charting Techniques*. New York Institute of Finance. (Useful for comparing bar and candlestick presentation.)

## FAQ

**What does OHLC stand for?**
Open, high, low, close. These are the four prices of a period. The open is the first trade, the high and low are the extremes, and the close is the last. A bar chart draws all four in a single mark.

**What is the difference between a bar chart and a candlestick chart?**
They show the same four prices. A candlestick draws a coloured body between the open and close, with thin shadows for the range. A bar chart uses a vertical line with ticks. Neither contains more information than the other.

**Which tick is the open and which is the close?**
The tick on the left is the open and the tick on the right is the close. If the right tick is higher than the left, the period closed above where it opened.

**Why do some traders prefer bar charts?**
Bars use thin lines, so they stay readable when a chart has many indicators or when many bars are shown at once. Some traders also find they put less emphasis on the open-to-close body and more on the full range.

**Does the chart type change the signals?**
No. The data is the same. What changes is how easily you see certain features, such as candlestick pattern names. Pick the style you read most clearly, and keep it consistent.
