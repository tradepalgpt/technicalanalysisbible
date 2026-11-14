---
slug: linear-regression-channel
name: Linear Regression Channel
aka: [Regression channel, Standard deviation channel, Raff Regression Channel]
type: trend
states: [trend, range]
weak_states: [breakout]
purposes: [entry, exit]
inventor: Not attributed to one person
year: Unknown
default_settings: "Regression line over the chosen window with bands at 2 standard deviations; length varies, 100 bars is common"
pairs_with: [linear-regression, standard-deviation, support-and-resistance, rsi]
related: [trend-channel, bollinger-bands, keltner-channels, linear-regression-slope, donchian-channels]
compare: []
glossary: [trend, standard-deviation, regression, mean-reversion]
wave: 2
reviewed: 14 November 2026
---

A linear regression channel draws a best-fit line through recent prices, then adds a band above and below at a set distance. The distance is usually two standard deviations. It shows the trend and how stretched price is from it. Traders use the bands to look for pullback entries and exits within a trend.

## At a glance

| | |
|---|---|
| Type | Trend channel (statistical) |
| Best market states | Steady trends, and ranges with a clear slope |
| Weak in | Breakouts and sharp accelerations, which leave the channel |
| Best uses | Entry on a touch of a band, exit at the opposite band |
| Default settings | Regression line plus bands at 2 standard deviations; length varies by platform |
| Created by | Not attributed to one person; the Raff channel is a related variant |
| Leading or lagging | Lagging, since it is fitted to past bars |

## What is a linear regression channel?

A [linear regression line](/linear-regression/) passes through the middle of the closes in a window. The channel adds two parallel lines on either side of it. In its most common form, the distance is set from the **standard deviation** of closes around the line. About 95% of values would fall inside two standard deviations if closes were normally distributed around the line, but price is not that tidy, so this is only a rough guide.

Unlike a hand-drawn [trend channel](/trend-channel/), the channel is calculated and not placed by eye. Two traders using the same length get the same lines.

A related version, often called the Raff Regression Channel after Gilbert Raff, sets the width from the largest distance between any price and the line rather than from standard deviation, so the channel contains all prices in the window. Details differ between sources, so check how your platform defines it.

The tool is based on the idea of mean reversion within a trend: price tends to drift back toward the centre line after stretching away from it. That tendency is a habit of some markets in some periods, not a rule.

## How it is drawn

1. Choose the window, for example the last 100 bars.
2. Fit the regression line to the closes in that window (see [Linear Regression](/linear-regression/)).
3. Measure the standard deviation of the closes from that line.
4. Draw the upper band at line + k x deviation and the lower band at line - k x deviation, with k usually 2.

**Worked example.** At the latest bar, the regression line is at 100 and the standard deviation of closes from the line is 3.
Upper band = 100 + 2 x 3 = **106**
Lower band = 100 - 2 x 3 = **94**

If price is at 105, it is near the upper band, about 1.7 deviations above the line.

Platforms differ: some compute the deviation from the line, others from the mean of the price, and some use highs and lows rather than closes. Most also redraw the channel as the window moves, so the live channel changes while the past does not match what traders saw at the time.

## How to read it

**Slope.** The slope of the channel shows trend direction. A rising channel is an uptrend, a falling one a downtrend, and a flat one a range.

**Touches of the lower band in an uptrend.** Price falling to the lower band in a rising channel is seen as a stretched pullback and a possible entry zone, if the channel and the trend still hold.

**Touches of the upper band.** In an uptrend this is often used as a profit-taking area, not as a sell signal.

**Centre line.** Price returning to the line is common in orderly trends. Many traders treat it as a fair-value reference.

**Break outside the channel.** A close well beyond the bands means price has moved more than recent behaviour implies. It can signal a breakout and a new, steeper trend, or a blow-off that reverses. The two cases look alike at first.

**Channel flattening.** If the slope flattens over time, the trend is losing momentum.

## Best market states

**Steady trends (best).** When price rises or falls in an orderly way, the bands often mark pullback and extension zones.

**Ranges (good).** In a sideways channel, the bands mark the edges where mean-reversion trades are considered.

**Breakouts (weak).** A strong break moves price out of the channel and the signals fail until a new channel forms.

**Reversals (limited).** The channel describes the old trend, so it only confirms a change after price has left it.

**Volatility.** The band width follows volatility around the line, so wider swings widen the bands.

## Confirmation rules

| Check | What to look for |
|---|---|
| Slope | Trade touches only in the direction of the channel slope |
| Fit | Most closes should sit inside the bands; if not, the window may be wrong |
| Candle signal | A reversal candle or rejection at the band adds weight |
| Momentum | An oscillator such as RSI at an extreme supports the touch |
| Stop | Beyond the band or beyond the last swing; a close well outside the channel invalidates the idea |
| Redraw | Remember the channel changes as new bars arrive |

## Common mistakes

- Treating a band touch as an automatic entry, especially against the slope.
- Assuming 95% of prices will stay inside the bands. Price is not normally distributed.
- Ignoring that the channel redraws, which makes backtests and hindsight look better than live use.
- Using a window that covers two different trends.
- Fading a breakout beyond the bands without a stop.
- Using the same length on every market and time frame without checking it fits.

## Pairs well with

- **[Linear Regression Line](/linear-regression/)**: the centre line of the channel and the basis of its slope.
- **[Standard deviation](/standard-deviation/)**: sets the width of the bands.
- **[Support and resistance](/support-and-resistance/)**: a band that matches an existing level is more meaningful.
- **[RSI](/rsi/)**: an overbought or oversold reading at the band adds momentum context.

## Sources

- Kaufman, Perry J. (2013). *Trading Systems and Methods*, 5th edition. John Wiley & Sons. (Covers linear regression and channels.)
- Murphy, John J. (1999). *Technical Analysis of the Financial Markets*. New York Institute of Finance. (Covers trend channels.)

## FAQ

**What is a linear regression channel?**
It is a best-fit line through recent closing prices with two parallel bands above and below. The bands are typically set at two standard deviations from the line. It shows trend direction and how far price has stretched from it.

**What setting should I use for a regression channel?**
Platforms differ. A window of 100 bars with bands at 2 standard deviations is a common default, but the right length depends on the swings you trade. Choose a window that covers one trend, not two.

**Does the linear regression channel repaint?**
Yes, in its drawn form. As new bars arrive the window shifts and the line and bands are recalculated, so earlier positions change. Be careful when judging how well the channel "worked" on a historical chart.

**Is a regression channel the same as Bollinger Bands?**
No. Bollinger Bands centre on a moving average and use the deviation of price from that average. A regression channel centres on a fitted line that has a slope, so it adapts to trend. See [Bollinger Bands](/bollinger-bands/).

**Do prices stay inside the regression channel 95% of the time?**
Not reliably. The 95% figure comes from the normal distribution, and price is not normally distributed. Prices often trend outside the bands, and the share inside varies by market, period and window.
