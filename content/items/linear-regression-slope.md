---
slug: linear-regression-slope
name: Linear Regression Slope
aka: [Slope of linear regression, LRS, Regression slope]
type: trend
states: [trend]
weak_states: [range]
purposes: [filter]
inventor: Not attributed to one person
year: Unknown
default_settings: "Commonly 14 periods on the close; varies by platform"
pairs_with: [linear-regression, linear-regression-channel, adx, support-and-resistance]
related: [lsma, rate-of-change, trend-intensity-index, aroon-oscillator]
compare: []
glossary: [trend, lookback-period, oscillator, smoothing]
wave: 3
reviewed: 14 November 2026
---

The Linear Regression Slope measures the gradient of the best-fit straight line through the last n closing prices. A positive value means the fitted line is rising, a negative value that it is falling, and a size that shows how steeply. Traders use it as a simple trend direction and strength filter.

## At a glance

| | |
|---|---|
| Type | Trend indicator |
| Best market states | Trend |
| Weak in | Ranges |
| Best uses | Trend filter |
| Default settings | Often 14 periods on the close (varies by platform) |
| Created by | Not attributed to one person |
| Leading or lagging | Lagging; it describes the recent past |

## What is the Linear Regression Slope?

Linear regression is a standard statistical method that fits a straight line to a set of points so that the total squared distance from the points to the line is as small as possible. It is much older than technical analysis. Charting software applies it to the last n closes to produce a [linear regression line](/linear-regression/).

The slope is the rate at which that fitted line rises or falls per bar. The indicator plots this number as a line below the chart. Above zero, the fitted trend is up. Below zero, it is down. The farther from zero, the steeper the trend.

No single person is credited with the indicator. It is an application of ordinary least squares regression to price data.

One thing to keep in mind: the slope is in price units per bar, so it depends on the price of the instrument. A slope of 1.0 means something different for a 20-dollar stock than for a 2,000-dollar index. Some platforms normalise the slope as a percentage or angle to help.

## Formula

For the last n closes, label the bars x = 1, 2, ..., n and let y be the close on each bar.

Slope = (n x Σxy - Σx x Σy) / (n x Σx² - (Σx)²)

where Σ means the sum over the n bars.

**Worked example.** Take five closes: 10, 11, 12, 11, 13 with x = 1 to 5.

- Σx = 15
- Σy = 10 + 11 + 12 + 11 + 13 = 57
- Σxy = 10 + 22 + 36 + 44 + 65 = 177
- Σx² = 1 + 4 + 9 + 16 + 25 = 55

Slope = (5 x 177 - 15 x 57) / (5 x 55 - 15 x 15) = (885 - 855) / (275 - 225) = 30 / 50 = **0.6**

The best-fit line rises by 0.6 per bar, even though one bar fell.

Note: some platforms plot the slope as an angle in degrees or as a percentage of price, and the default period is not the same everywhere.

## How to read it

**Sign.** Positive means the fitted line is rising: bullish bias. Negative means falling: bearish bias. A cross of zero shows that the direction of the fit has changed.

**Size.** A larger absolute value means a steeper trend over the window. Compare readings on the same instrument and time frame, since price scale matters.

**Rising or falling slope.** If the slope is positive but shrinking, the trend is still up but flattening. If it is negative and growing less negative, the fall is slowing. This is a way to see momentum in the trend itself, as a second-order change.

**Near zero.** A slope hovering around zero is the fit's way of saying there is no clear direction over the window. This is the typical pattern of a range.

**Divergence.** Some traders compare slope highs with price highs. The method is informal and has no strong evidence behind it.

## Best market states

**Trends (best).** A steady trend gives a stable slope on one side of zero, which makes the reading a clear filter.

**Ranges (weak).** The slope crosses zero often. Each cross carries little meaning when price is simply oscillating.

**Reversals.** The slope changes sign after the new direction has already built up in the window, so it lags. Short windows react faster but jump around.

**Breakouts.** A sharp breakout makes the slope jump, because a few extreme points tilt the fit. This shows the strength of the move but is sensitive to the window length.

**Volatility.** A single large spike can swing the fit. Regression lines are affected by outliers, so volatile markets produce noisy slopes.

## Settings

| Setting | Period | What it does |
|---|---|---|
| Short | 5 to 10 | Quick to change sign, noisy |
| Common | 14 | A frequent default; balanced for many time frames |
| Long | 30 to 50 | Smooth, shows the dominant direction |
| Price source | Close | Most usual; some use typical price |

The window length is the only real setting. Doubling it makes the slope calmer but slower. As with any lookback, there is no best value, and choosing one that fits past data tells you little about the future.

## Common mistakes

- Comparing raw slope values between instruments with different price levels.
- Reading every zero cross as a trade signal in a sideways market.
- Forgetting that outliers pull the fit, so one spike can distort the reading for the whole window.
- Treating the slope as a prediction. It describes the window, not what follows.
- Using different window lengths on the slope and the regression line and being confused when they disagree.
- Ignoring price structure and using the slope alone.

## Pairs well with

- **[Linear Regression Line](/linear-regression/)**: the slope is the gradient of this line, so the two together show position and direction.
- **[Linear Regression Channel](/linear-regression-channel/)**: shows how far price sits from the fitted line.
- **[ADX](/adx/)**: confirms whether the market is trending enough for the slope to be useful.
- **[Support and resistance](/support-and-resistance/)**: gives the levels where a slope change matters most.

## Sources

- Draper, Norman R., and Smith, Harry (1966). *Applied Regression Analysis*. John Wiley & Sons. (First edition; the statistics behind least squares fitting.)
- Achelis, Steven B. (2001). *Technical Analysis from A to Z* (2nd ed.). McGraw-Hill.

## FAQ

**What does the linear regression slope tell you?**
It tells you the direction and steepness of the best-fit straight line through recent closes. Positive means the fit is rising, negative means falling. It gives a smoothed view of trend rather than reacting to single bars.

**How is it different from the linear regression line?**
The line is the fitted price path drawn on the chart. The slope is the gradient of that line, shown as a number in a separate panel. The slope tells you how quickly the line is rising or falling.

**What is the best period for the slope?**
There is no single best period. Many platforms start at 14. Short windows respond faster but jump around; long windows are smoother and slower. Test on your own market and time frame.

**Is a rising slope bullish?**
A positive slope means the fit over the window is upward. A slope that rises further means the trend is steepening. Neither is a forecast, and the slope can flip quickly after a sharp move.

**Does it work in sideways markets?**
Poorly. In a range the slope crosses zero repeatedly. Use a trend-strength tool to tell trending from ranging conditions first.
