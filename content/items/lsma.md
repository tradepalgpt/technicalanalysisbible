---
slug: lsma
name: Least Squares Moving Average (LSMA)
aka: [LSMA, moving linear regression, end point moving average, time series forecast, TSF]
type: moving-average
states: [trend]
weak_states: [range]
purposes: [filter]
inventor: Not attributed to one person (applies least-squares regression)
year: Unknown
default_settings: "25 periods on some platforms; 14, 20 and 50 are common"
pairs_with: [exponential-moving-average, linear-regression, rsi, adx]
related: [linear-regression, linear-regression-channel, linear-regression-slope, simple-moving-average, hull-moving-average, zlema, tema]
compare: []
glossary: [smoothing, lookback-period, lagging-indicator, trend, regression, whipsaw]
wave: 3
reviewed: 14 November 2026
---

The Least Squares Moving Average (LSMA) is a moving average that, on each bar, fits a straight line through the last N closes and plots where that line ends. Because it extends a trend line to the latest bar, it lags less than a simple average, but it overshoots when price turns. Traders use it as a trend filter.

## At a glance

| | |
|---|---|
| Type | Moving average (regression-based) |
| Best market states | Trend |
| Weak in | Ranges and sharp turns, where it overshoots |
| Best uses | Trend filter |
| Default settings | 25 periods on some platforms; 14, 20 and 50 are common |
| Created by | Not attributed to one person |
| Leading or lagging | Less lag than an SMA, but it can overshoot after a change of direction |

## What is the LSMA?

Picture the last 25 closes on a chart. A method called least squares finds the one straight line that fits them best, by keeping the total squared distance between the line and the closes as small as possible. The LSMA plots the value of that line at the newest bar. On the next bar, the window slides along and the fit is done again.

Since the line is a fit rather than an average, its end point tends to sit closer to the latest price than the middle of a simple moving average would. It uses the slope of the recent trend to project forward. This is why some platforms call it the end point moving average or the time series forecast (TSF).

This is the same mathematics as [linear regression](/linear-regression/). The linear regression indicator and the LSMA are often the same line under different names. The slope of the same line is available as [linear regression slope](/linear-regression-slope/), and the line with bands around it is a [linear regression channel](/linear-regression-channel/).

## Formula

For a window of N closes, number the bars x = 0 (oldest) to N - 1 (newest) and let y be the close.

1. Slope b = (N x sum(x y) - sum(x) x sum(y)) / (N x sum(x^2) - (sum(x))^2)
2. Mean of closes = sum(y) / N, mean of x = (N - 1) / 2
3. Intercept a = mean(y) - b x mean(x)
4. LSMA = a + b x (N - 1)

This is the same as: LSMA = SMA(N) + b x (N - 1) / 2.

**Worked example.** Use N = 3 with closes 10, 11, 15 (oldest first).
Mean of closes = 12. Mean of x = 1.
Slope b = ((-1)(-2) + 0 x (-1) + (1)(3)) / ((-1)^2 + 0 + 1^2) = 5 / 2 = 2.5
LSMA = 12 + 2.5 x (3 - 1) / 2 = 12 + 2.5 = **14.5**

The simple average of the three closes is 12, while the LSMA is 14.5, closer to the latest close of 15. That is how the LSMA reduces lag. It is also how it overshoots: if the next close falls back, the line would have projected too far.

## How to read it

**Slope and direction.** A rising LSMA shows an uptrend; a falling one a downtrend.

**Price against the line.** Price above the LSMA is the bullish arrangement; below is bearish. Because the line sits close to price, crosses are frequent.

**Crossovers.** Some traders cross a short LSMA with a long one, or the LSMA with a simple average of the same length. The gap between an LSMA and an SMA of the same length reflects the slope of the trend.

**Overshoot at turns.** When price reverses sharply, the line, which has been projecting the old slope, continues the old direction for a bar or two before it turns. That is the main weakness.

**Dynamic support and resistance.** In a steady trend, price may pull back to the line. In fast markets, the line stays close to price, so these pullbacks are shallow.

## Best market states

**Trends (best).** In a steady trend, the line fits the slope well and lags little.

**Ranges (weak).** In a sideways market, the fitted slope keeps changing sign, so the line swings and crosses price often.

**Reversals.** The line can overshoot near a turn and then snap back, which makes early signals unreliable.

**Volatility.** One large bar changes the fitted slope and pulls the line hard. Longer windows reduce this.

## Settings

| Setting | Period | What it does |
|---|---|---|
| Short | 9 to 14 | Close to price, quick but noisy |
| Common | 20 to 25 | A balance for many time frames |
| Long | 50 to 100 | Smoother, still closer to price than an SMA of the same length |

Platforms may offer an offset setting that shifts the end point forward or back. A default of zero gives the standard LSMA. Test any period on your own market and time frame.

## Common mistakes

- Assuming a low-lag line is the same as an accurate line. It trades lag for overshoot.
- Using it in ranges, where the slope keeps flipping.
- Treating the line as a forecast. It extends a past trend only.
- Mixing up the LSMA with linear regression bands. The bands are a separate channel around the line.
- Using a very short period, where one bar changes the slope a lot.
- Comparing values across platforms without checking the offset setting.

## Pairs well with

- **[Exponential moving average](/exponential-moving-average/)**: the gap between an LSMA and an EMA of the same length shows how much the slope projection matters.
- **[Linear regression](/linear-regression/)**: the same maths, shown as a fitted line over a chosen window.
- **[RSI](/rsi/)**: momentum helps check whether a turn in the LSMA has strength.
- **[ADX](/adx/)**: ADX shows whether the market trends enough for the LSMA to be useful.

## Sources

- Murphy, John J. (1999). *Technical Analysis of the Financial Markets*. New York Institute of Finance. (General background on moving averages and trend lines.)

## FAQ

**Is the LSMA the same as linear regression?**
Usually yes. The LSMA plots the end point of the least-squares line over the last N bars, which is what many platforms show as the linear regression value. Some tools use the name for the whole fitted line, so check the settings.

**Does the LSMA have less lag than an SMA?**
Yes, because it adds the fitted slope to the average, so it sits nearer the latest price. The cost is overshoot: it can continue in the old direction for a bar or two after price turns.

**What period should I use for the LSMA?**
Some platforms default to 25, and 14, 20 and 50 are also common. Short periods are fast and noisy, and long ones are smooth and later. There is no proven best period, so test on your own market.

**How is the LSMA different from the EMA?**
The EMA is a weighted average that never projects forward. The LSMA fits a line and uses its end point, so it includes the slope. That makes it faster, but it can overshoot at turns, where an EMA simply lags.

**Does the LSMA repaint?**
A finished bar does not change once it closes, so the plotted history stays fixed. The live bar's value moves as the price updates, like any moving average. Some platforms offer a forward offset, which does not change history.
