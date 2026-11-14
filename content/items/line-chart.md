---
slug: line-chart
name: Line Chart
aka: [Closing price chart, close-only chart]
type: chart-type
states: [trend]
weak_states: [range]
purposes: [filter]
inventor: Not attributed to one person
year: Unknown
default_settings: "Connects closing prices, one point per period"
pairs_with: [support-and-resistance, trendline, simple-moving-average, market-structure]
related: [ohlc-bar-chart, candlestick-chart, heikin-ashi, kagi-chart, renko-chart]
compare: []
glossary: [close, trend, noise, timeframe]
wave: 3
reviewed: 14 November 2026
---

A line chart joins the closing price of each period with a single continuous line. It leaves out the open, high and low, so it looks smooth and simple. Because closes are the prices most traders watch, a line chart is a clean way to see the overall direction of a market without the clutter of intraday ranges.

## At a glance

| | |
|---|---|
| Type | Chart type |
| Best market states | Trend |
| Weak in | Ranges and reversals, where highs and lows carry the information |
| Best uses | Filter: see the big picture and the trend |
| Default settings | Closing price, one point per period |
| Created by | Not attributed to one person |
| Leading or lagging | Neither; it shows past closes |

## What is a line chart?

A line chart is the simplest chart used in finance. For each period (a day, an hour, a minute) it puts one dot at the closing price and joins the dots. Time runs left to right and price runs up and down.

The format is so old and widespread that there is no single inventor, and this guide gives no year. It is used in news articles, company reports, economics and trading platforms alike.

What it shows is the path of closes. What it hides is everything that happened inside each period: how high and low price went, where it opened and whether there was a large spike that reversed. For that reason, many traders use it for first impressions and long-term views, then switch to [candlesticks](/candlestick-chart/) or [bars](/ohlc-bar-chart/) for detail.

Closing prices have a special place in technical analysis. The close is often viewed as the settled opinion of a period, while the highs and lows are partly noise. Many standard indicators, including moving averages and RSI, are calculated from closes, so a line chart matches what those indicators see.

## How it works

1. Choose a time frame. Each period will have one point.
2. For each period, take the closing price.
3. Plot the points and join each to the next with a straight line.

**Worked example.** Five daily closes are 100, 102, 101, 105, 104. The chart has five points at those levels. The line rises from 100 to 102, dips to 101, jumps to 105 and eases to 104. If the day with a close of 105 had a high of 110 and a low of 99, none of that would appear.

Some platforms let you plot a different price, such as the open, high, low or the average of high and low. The default on nearly all platforms is the close. Some also offer a "line with markers" or "step line" style, which changes the look but not the data.

## How to read it

**Direction.** Rising lows and rising highs on the line mean an uptrend. Falling highs and lows mean a downtrend. With fewer details, these swings are easy to see.

**Support and resistance.** Levels where the line has turned several times can be drawn as horizontal lines. Because they use closes only, these levels can sit slightly different from levels drawn on highs and lows. Some traders believe closing levels are more reliable; others prefer to include the wicks.

**Trendlines.** Straight lines connecting the swing points of the line chart are common, and the smoothness makes it easier to find a fit.

**Long-term views.** On monthly or weekly charts, a line chart is a good way to see multi-year patterns without noise.

**Comparisons.** Two or more markets drawn as lines on one chart make it simple to compare performance, often with each rebased to 100 at the start.

**Gaps.** An overnight gap is not shown as a gap but as a slanted line between two closes. This hides information.

## Best market states

**Trends (good).** The line shows direction and pullbacks clearly.

**Ranges (weak).** Highs and lows are often what define the edges of a range, and the line chart leaves them out.

**Breakouts.** A close above a level is visible, but an intraday breakout that failed by the close is not.

**Reversals.** Reversal signals often rely on wicks and ranges, which a line chart cannot show.

**Volatility.** Volatility inside the bar is invisible. Only the size of close-to-close changes can be seen.

## Settings

| Setting | Options | Effect |
|---|---|---|
| Time frame | 1 minute to monthly | Longer frames smooth more |
| Price plotted | Close (default), open, high, low, average | Changes what the line follows |
| Scale | Linear or logarithmic | Log scale is better for long histories, see [log scale](/log-scale/) |
| Style | Plain line, line with markers, step line | Appearance only |

There are no calculation parameters. The two choices that change the picture are the time frame and the chart scale.

## Common mistakes

- Missing information. A wide-ranging bar and a narrow one with the same close look identical.
- Placing stops by what the line chart shows, when the real price may have reached levels the line never touched.
- Drawing support and resistance on closes only and then being stopped out by wicks.
- Using a line chart on a time frame so short that the line is mostly noise.
- Comparing line charts of different markets on different scales without rebasing.
- Reading smoothness as certainty. A smooth line can still change direction.

## Pairs well with

- **[Support and resistance](/support-and-resistance/)**: horizontal levels drawn on closing prices.
- **[Trendline](/trendline/)**: straight lines through the swing points on a clean line.
- **[Simple moving average](/simple-moving-average/)**: also built from closes, so it fits the same data.
- **[Market structure](/market-structure/)**: swing highs and lows are easy to follow on a line.

## Sources

- Murphy, John J. (1999). *Technical Analysis of the Financial Markets*. New York Institute of Finance. (Describes line, bar and candlestick charts.)

## FAQ

**What does a line chart show?**
It shows the closing price of each period, joined by a line. It leaves out the open, high and low, so it gives a simple view of direction and overall trend but hides what happened inside each period.

**Is a line chart good for trading?**
It is good for seeing the big picture, trends and long-term levels. For entries, exits and stops, most traders prefer candlesticks or bars because they show highs, lows and gaps. Many use a line chart on a long time frame and candles on a short one.

**Why do some traders prefer closing prices?**
Many believe the close reflects the settled opinion of a period, while highs and lows may be noise. Most common indicators are also built from closes. Not everyone agrees, and some traders consider the highs and lows essential.

**Can I draw support and resistance on a line chart?**
Yes. Levels from closes can look clean and are quick to draw. Be aware that price may have moved past them intraday, so stops should allow for wicks that the line chart does not display.

**What is the difference between a line chart and an area chart?**
An area chart is a line chart with the space below the line filled in. The data and the reading are the same. The shading is only for appearance.
