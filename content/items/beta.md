---
slug: beta
name: Beta
aka: [Beta coefficient, market beta]
type: breadth-sentiment
states: [volatility]
weak_states: [range]
purposes: [filter]
inventor: William F. Sharpe (through the Capital Asset Pricing Model)
year: 1964
default_settings: "Commonly 60 monthly returns, or 1 to 2 years of weekly returns, against a broad index"
pairs_with: [correlation-coefficient, relative-strength-comparative, historical-volatility, position-sizing]
related: [correlation-coefficient, relative-strength-comparative, historical-volatility, standard-deviation, vix]
compare: []
glossary: [volatility, trend, lookback-period]
wave: 3
reviewed: 14 November 2026
---

Beta measures how much a stock or fund has tended to move when a benchmark index moves. A beta of 1 means it has moved about in step with the index. Above 1 means bigger swings than the index; below 1 means smaller. Traders use it as a filter to size positions or to choose between aggressive and defensive holdings.

## At a glance

| | |
|---|---|
| Type | Breadth and sentiment (market sensitivity measure) |
| Best market states | Volatility |
| Weak in | Sideways markets and for assets whose link to the index is loose |
| Best uses | Filter, position sizing, comparing risk between holdings |
| Default settings | Often 60 monthly returns or 1 to 2 years of weekly returns; platforms differ |
| Created by | Comes from the Capital Asset Pricing Model; Sharpe's 1964 paper is the standard reference |
| Leading or lagging | Lagging (calculated from past returns) |

## What is beta?

Beta is a number that describes how sensitive one asset has been to a benchmark. If an index rises 1% and a stock has typically risen 1.5% on those days, the stock has a beta of about 1.5. If the index falls 1%, the same stock has typically fallen about 1.5%.

The idea belongs to the Capital Asset Pricing Model (CAPM), set out by William Sharpe in 1964. Other economists worked on similar models around the same time. In that model, beta is the part of an asset's risk that comes from the market as a whole and cannot be removed by holding many assets.

For a chart trader, beta is less a signal than a description. It tells you how much market-driven movement to expect from a holding, which helps with position size and stop width. It says nothing about direction.

## Formula

Beta is the covariance of the asset's returns with the benchmark's returns, divided by the variance of the benchmark's returns:

Beta = Covariance(asset return, index return) / Variance(index return)

Covariance measures how two series move together. Variance measures how widely one series moves around its average.

Equivalent form: Beta = correlation x (asset standard deviation / index standard deviation).

**Worked example.** Suppose that over the lookback period the covariance of a stock's returns with the index is 0.0006 and the index variance is 0.0004.
Beta = 0.0006 / 0.0004 = **1.5**

Or, with a correlation of 0.75, a stock standard deviation of 4% and an index standard deviation of 2%:
Beta = 0.75 x (4 / 2) = **1.5**

Platforms differ in the return interval (daily, weekly or monthly), the length of history and the benchmark. The same stock can show quite different betas on different sites.

## How to read it

**Beta of 1.** The asset has moved about in line with the benchmark.

**Beta above 1.** The asset has amplified index moves. Rising markets tend to lift it more, and falling markets hit it harder.

**Beta between 0 and 1.** The asset has moved in the same direction as the index, but by less. Utilities and consumer staples are often cited as examples, though this varies by period.

**Beta near 0.** The asset has had little link to the benchmark. This is not the same as low risk: it can still be very volatile in its own right.

**Negative beta.** The asset has tended to move against the benchmark. This is rare for single stocks and more usual for inverse funds or some safe-haven assets.

**R-squared.** Many platforms show R-squared next to beta. It says how much of the asset's movement the benchmark explains. A beta with a low R-squared is weak evidence.

## Best market states

**Volatility (best).** Beta matters most when the whole market is moving hard. In a sharp sell-off, high-beta holdings usually fall further, so knowing beta helps with sizing.

**Trends (useful).** In a strong market trend, high-beta assets tend to outpace the index in the same direction, while low-beta assets lag.

**Ranges (weak).** In a quiet sideways market, index moves are small and beta estimates are dominated by noise.

**Assets with their own drivers (weak).** Where news specific to the company or commodity dominates, beta to a broad index explains little.

## Settings

| Setting | Choice | Effect |
|---|---|---|
| Return interval | Daily, weekly, monthly | Daily is noisier and can understate beta for thinly traded assets; monthly needs a longer history |
| Lookback | 60 months, or 1 to 2 years of weekly data | Longer is steadier but slower to reflect change |
| Benchmark | Broad index matched to the asset | A mismatched index gives a misleading number |

There is no single standard. Some data providers use five years of monthly returns, others two years of weekly returns. State which one you use when comparing numbers.

## Common mistakes

- Treating beta as a forecast. It describes past behaviour, and an asset's beta can change as its business or the market changes.
- Using the wrong benchmark, such as a large-company index for a small-company stock.
- Ignoring R-squared, so a loose relationship is read as precise.
- Reading a low beta as "safe". Low beta means low sensitivity to the index, not low overall volatility.
- Comparing betas from different platforms that use different intervals and history.
- Assuming beta is constant across rising and falling markets. Some assets behave differently on the way down.

## Pairs well with

- **[Correlation coefficient](/correlation-coefficient/)**: shows how closely the asset tracks the benchmark, which tells you how much to trust the beta.
- **[Relative strength (comparative)](/relative-strength-comparative/)**: beta says how much an asset moves with the market; relative strength says whether it is beating the market.
- **[Historical volatility](/historical-volatility/)**: adds the asset's own movement, which beta leaves out.
- **[Position sizing](/position-sizing/)**: a high-beta holding often calls for a smaller position for the same amount of risk.

## Sources

- Sharpe, William F. (1964). "Capital Asset Prices: A Theory of Market Equilibrium under Conditions of Risk". *The Journal of Finance*, 19(3).
- Bodie, Zvi, Kane, Alex and Marcus, Alan J. *Investments*. McGraw-Hill. (Standard textbook treatment of beta and CAPM; several editions.)

## FAQ

**What is a good beta?**
There is no good or bad beta. It describes sensitivity to the index. A beta above 1 suits someone seeking larger swings with the market, and below 1 suits someone wanting smaller ones. What matters is whether it fits your risk limits.

**Is beta the same as volatility?**
No. Volatility measures how much an asset moves on its own, in any direction. Beta measures how much it moves relative to a benchmark. An asset can be very volatile and still have a beta near zero if its moves are unrelated to the index.

**Can beta be negative?**
Yes. A negative beta means the asset has tended to move opposite to the benchmark. It is uncommon for ordinary shares and more typical of inverse funds or some safe-haven assets.

**Does beta change over time?**
Yes. It is estimated from a window of past returns, so it shifts as the window moves and as the company or market changes. Check how stable it has been over several windows before leaning on one figure.

**Can I use beta on forex or crypto?**
You can calculate it against any benchmark, but the result depends on choosing a meaningful one. Beta of a crypto asset against a stock index may be unstable. It is best read together with correlation.
