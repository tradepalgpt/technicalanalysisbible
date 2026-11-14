---
slug: linear-regression
name: Linear Regression Line
aka: [Linear regression, Least squares line, Regression line, Time series forecast (TSF)]
type: trend
states: [trend]
weak_states: [range, reversal]
purposes: [filter]
inventor: Adrien-Marie Legendre and Carl Friedrich Gauss (least squares method)
year: 1805
default_settings: "Length 14 to 100 bars on the close; platforms differ"
pairs_with: [linear-regression-channel, linear-regression-slope, standard-deviation, simple-moving-average]
related: [lsma, trendline, trend-channel, moving-average-crossover, center-of-gravity]
compare: []
glossary: [trend, standard-deviation, regression, lookback-period]
wave: 2
reviewed: 14 November 2026
---

A linear regression line is the straight line that best fits the closing prices of the last n bars, found with the least squares method. Its slope shows trend direction and steepness. Its end point can be plotted bar by bar to form a smooth curve that follows price with less lag than a simple average.

## At a glance

| | |
|---|---|
| Type | Trend indicator (statistical) |
| Best market states | Trends |
| Weak in | Ranges and sharp reversals |
| Best uses | Trend filter |
| Default settings | Length varies by platform: commonly 14 to 100 bars on the close |
| Created by | Least squares method by Legendre (1805) and Gauss; applied to charts by technical analysts later |
| Leading or lagging | Lagging, but less than a simple moving average of the same length |

## What is a linear regression line?

Regression is a statistical method for finding the straight line that sits closest to a set of points. Applied to a chart, the points are the closing prices of the last n bars. The line is chosen so that the total of the squared distances between each close and the line is as small as possible. This is the **least squares** method, described by Legendre in 1805 and also developed by Gauss.

A chart can use the regression line in two ways:

- **As a line drawn across the window.** It is fixed to the last n bars, extends to the current bar and is redrawn as new bars arrive. The slope is easy to see.
- **As a moving curve.** At each bar, the endpoint of the regression line is plotted. Joining these endpoints makes a line often called the Linear Regression Curve, the Time Series Forecast or the [least squares moving average](/lsma/). This one does not redraw.

The curve reacts faster than a [simple moving average](/simple-moving-average/) because it follows the slope and projects to the current bar rather than averaging the past. The cost is more overshoot at turning points.

## Formula

The line is y = a + b x, where x is the bar number from 1 to n.

Slope b = (n x sum(xy) - sum(x) x sum(y)) / (n x sum(x squared) - (sum(x))^2)
Intercept a = (sum(y) - b x sum(x)) / n

The value at the latest bar (x = n) is a + b x n.

**Worked example.** Three closes: 10, 12, 14 at x = 1, 2, 3 (n = 3).
sum(x) = 6, sum(y) = 36, sum(xy) = 10 + 24 + 42 = 76, sum(x squared) = 14.
b = (3 x 76 - 6 x 36) / (3 x 14 - 36) = (228 - 216) / (42 - 36) = 12 / 6 = **2**
a = (36 - 2 x 6) / 3 = 24 / 3 = **8**
The latest value is 8 + 2 x 3 = **14**, and the slope is +2 per bar.

Prices that rise by exactly 2 per bar fit perfectly. With real, noisy prices the fitted line will not touch every close.

The usual length and price input vary: some platforms default to 14 with close, others to 100 for the channel version. Check which you are using.

## How to read it

**Slope.** A rising line shows an uptrend, a falling line a downtrend and a flat line no trend. The [Linear Regression Slope](/linear-regression-slope/) indicator turns this into a number.

**Price versus the line.** Close above the line (or curve) in a rising slope is consistent with a healthy uptrend. Closes below it warn of weakness.

**Curve turn.** The endpoint curve turns up or down earlier than a simple average. Traders look for a turn, or a cross of price over the curve, as a trend-change signal. It can whip in ranges.

**Distance from the line.** The farther price drifts from the line, in units of standard deviation, the more stretched it is. This is the basis of the [Linear Regression Channel](/linear-regression-channel/).

**Change of window.** A fixed line is redrawn when the window moves, so its slope and position on old bars changes. The endpoint curve is stable.

## Best market states

**Trends (best).** In a steady, straight trend the line fits well and follows price closely.

**Ranges (weak).** A flat slope and price crossing the line back and forth give no useful signal.

**Reversals (mixed).** The curve turns early, but also overshoots when a trend ends sharply.

**Breakouts (limited).** A single large bar pulls the fit strongly, because least squares gives extra weight to large deviations.

**Volatility.** Outliers distort a regression line more than a median-based tool would.

## Settings

| Setting | What it does |
|---|---|
| Length 14 | Fast and reactive; noisy |
| Length 25 | A common mid-term setting |
| Length 50 to 100 | Shows the larger trend; slow to turn |
| Price source | Close is typical; some use hl2 or other prices |
| Offset | Shifts the curve forward or back; usually 0 |

There is no universally agreed default. Pick a length that matches the swings you trade, such as one that covers a typical trend leg.

## Common mistakes

- Treating the fitted line as a forecast. It describes the past window and does not predict.
- Forgetting that a drawn regression line is redrawn as the window moves, so history looks better than live trading.
- Using a very short length that fits only noise.
- Using it in a range where the slope means little.
- Ignoring that the curve overshoots at turns.
- Comparing the line to a moving average and not knowing they react differently.

## Pairs well with

- **[Linear Regression Channel](/linear-regression-channel/)**: adds bands a set number of standard deviations around the line.
- **[Linear Regression Slope](/linear-regression-slope/)**: turns the slope into an oscillator for easy reading.
- **[Standard deviation](/standard-deviation/)**: measures how far price strays from the line.
- **[Simple moving average](/simple-moving-average/)**: a slower comparison line; the gap between the two shows how much faster regression is.

## Sources

- Kaufman, Perry J. (2013). *Trading Systems and Methods*, 5th edition. John Wiley & Sons. (Covers linear regression as a trend tool.)

## FAQ

**What is a linear regression line in trading?**
It is the straight line that best fits the closing prices of the last n bars, using the least squares method. Its slope shows the direction and steepness of the trend over that window.

**Is the linear regression line the same as the least squares moving average?**
They are closely related. The least squares moving average (LSMA) plots the end point of the regression line at each bar. This is often called the linear regression curve or time series forecast on charting platforms.

**Does the linear regression line repaint?**
A regression line drawn across the last n bars is redrawn as new bars arrive, so its past position changes. The curve made of end points does not change once a bar closes, though its latest value updates during the bar.

**What length should I use for linear regression?**
Platforms differ, and there is no standard. Common lengths range from about 14 for short-term work to 100 for a wider view. Choose a length that covers a typical swing in the market and time frame you trade.

**How is linear regression different from a moving average?**
A moving average is the mean of past prices and lags behind. A regression end point uses the slope of the fit, so it sits closer to the latest price. It reacts faster but overshoots more at turning points.
