---
slug: point-and-figure
name: Point and Figure Chart
aka: [P&F chart, Point & Figure, X and O chart]
type: chart-type
states: [trend, breakout]
weak_states: [range]
purposes: [entry, filter]
inventor: Not attributed to one person (nineteenth-century American origins)
year: Unknown
default_settings: "Three-box reversal; box size set by price level or ATR"
pairs_with: [support-and-resistance, trendline, volume, relative-strength-comparative]
related: [renko-chart, kagi-chart, three-line-break, heikin-ashi, range-bars]
compare: []
glossary: [box-size, reversal-amount, breakout, trend]
wave: 2
reviewed: 14 November 2026
---

A point and figure chart records price moves as columns of X's (rising prices) and O's (falling prices), with no time axis. A new box is only drawn when price moves by a set amount, and a column only switches direction after a larger reversal. It filters out small moves and shows support, resistance and breakouts clearly.

## At a glance

| | |
|---|---|
| Type | Chart type (price-only, no time axis) |
| Best market states | Trends and breakouts |
| Weak in | Choppy ranges, where columns keep flipping |
| Best uses | Entry (breakout signals), filter |
| Main settings | Box size and reversal amount (commonly three boxes) |
| Origin | Nineteenth-century American market practice; no single inventor |
| Compare with | [Renko](/renko-chart/), [Kagi](/kagi-chart/) |

## What is a point and figure chart?

Most charts plot price against time: every minute, hour or day gets a bar or candle. A point and figure chart ignores time completely. It only records price changes that are big enough to matter. If nothing meaningful happens, nothing is drawn.

Rising prices are drawn as a column of X's. Falling prices are drawn as a column of O's. Columns alternate from left to right. The chart looks like a grid of crosses and circles, and its shape makes patterns such as double tops, bullish catapults and triangles easy to spot.

The method is old, with roots in the nineteenth century, and the book most often cited for the three-box reversal method is by A. W. Cohen. It was popular with pit traders and chartists long before computers, because it could be kept by hand with pencil and graph paper. Today most platforms draw it automatically.

## How it is drawn

Two settings control everything:

1. **Box size:** the price move that fills one box, for example 1 point. It can be fixed, set by price level (traditional tables) or based on [ATR](/atr/).
2. **Reversal amount:** the number of boxes price must move against the current column before a new column starts. The usual default is three.

Rules for building the chart:

- While the current column is X's, add a new X on top each time price rises by one more box.
- If price falls by at least the reversal amount from the top of the X column, start a new column of O's one box to the right, beginning one box below the highest X.
- Do the same in reverse for O columns.
- Moves smaller than a box, and pullbacks smaller than the reversal amount, are ignored.

**Worked example.** Box size is 1 and the reversal is 3 boxes. Price rises from 10 to 20, so there is a column of X's from 10 to 20. Price then falls to 18. That is only 2 boxes, so nothing is drawn. Price falls to 17, a 3-box fall from 20, so a new column of O's begins at 19 and runs down to 17. If price then rises to 20, only a 3-box rise from 17 would start a new X column.

Platforms differ on whether the chart is built from closing prices or from highs and lows. High and low charts react faster; close-only charts show fewer false reversals. Check which method your platform uses.

## How to read it

**Double top breakout.** A buy signal is traditionally an X column rising one box above the top of the previous X column. A double bottom breakdown (an O column falling one box below the previous O column's low) is the sell signal.

**Triple signals.** Breaking above two or more earlier tops is read as a stronger version of the same signal.

**Trendlines.** Traders often draw 45-degree lines at one box per column. These mark the trend and are broken when price crosses them.

**Support and resistance.** Flat lines of X's or O's at the same level show where price repeatedly stopped.

**Price objectives.** Some traders estimate targets by counting columns or boxes in a base (the "count method"). Treat this as a rule of thumb. It has no firm academic validation.

## Best market states

**Trends (best).** The chart stays in long columns and ignores small pullbacks.

**Breakouts (good).** A move out of a consolidation shows clearly as a column above old tops.

**Ranges (weak).** In a choppy market the columns flip back and forth, and the chart gives frequent, low-value signals.

**Volatility.** A box size that is too small makes the chart noisy; one that is too large hides useful moves. ATR-based box sizes adjust for volatility.

## Settings

| Setting | Common choice | Effect |
|---|---|---|
| Box size | Traditional table by price, or ATR-based | Smaller boxes show more detail and more noise |
| Reversal amount | 3 boxes | Smaller values flip more often; larger values trade more slowly |
| Price method | Close, or high and low | High and low react faster |
| Time | None, but each column has a date | Time is not part of the signal |

Platforms differ in their default box size tables and in how they treat gaps, so charts of the same market can look different.

## Common mistakes

- Looking for time-based signals, such as "three days of X's". Columns have no fixed length in time.
- Using a box size that does not suit the market's volatility.
- Using a one-box reversal, which makes the chart behave like a noisy line chart.
- Comparing charts from two platforms that use different box tables and price methods.
- Trading breakouts in choppy ranges, where false signals are common.
- Treating count-method targets as certain.

## Pairs well with

- **[Support and resistance](/support-and-resistance/)**: flat tops and bottoms on the chart are visual support and resistance.
- **[Trendline](/trendline/)**: 45-degree lines are a standard part of the method.
- **[Volume](/volume/)**: a conventional point and figure chart does not show volume, so it is checked separately.
- **[Relative strength](/relative-strength-comparative/)**: P&F charts of relative strength are a traditional way to rank markets.

## Sources

- Dorsey, Thomas J. (1995). *Point and Figure Charting*. Wiley (later editions published).
- Kirkpatrick, Charles D. and Dahlquist, Julie R. (2006). *Technical Analysis: The Complete Resource for Financial Market Technicians*. FT Press.

## FAQ

**What do the X's and O's mean on a point and figure chart?**
An X shows that price rose by one box. An O shows that price fell by one box. A column of X's is a rising phase, and a column of O's is a falling phase. A new column starts when price reverses by enough boxes.

**What is the three-box reversal?**
It is the most common setting. Price must move against the current column by three boxes before a new column starts. This screens out small moves. Some traders use one or two boxes for faster signals, with more noise.

**How do you choose the box size?**
Use a traditional table that sets the box by price level, or base it on ATR so it matches the market's volatility. A good box size shows swings you care about without printing a new column every few ticks.

**Does a point and figure chart show time?**
Not on its own axis. Columns usually carry a date label when a new month or year begins, but the horizontal spacing says nothing about how much time passed. Days with no meaningful move leave no mark.

**Is point and figure still used today?**
Yes, although less than candlesticks. Platforms draw it automatically, and some market technicians still use it for trends, relative strength and long-term support and resistance.
