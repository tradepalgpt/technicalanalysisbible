---
slug: historical-volatility
name: Historical Volatility
aka: [HV, Realised volatility, Statistical volatility]
type: volatility
states: [volatility]
weak_states: [trend]
purposes: [filter]
inventor: Not attributed to one person
year: Unknown
default_settings: "20 or 21 trading days of daily log returns, annualised with 252 days (some platforms use 10, 30 or 365)"
pairs_with: [implied-volatility, atr, standard-deviation, vix]
related: [standard-deviation, normalized-atr, chaikin-volatility, bollinger-band-width, average-daily-range, relative-volatility-index]
compare: [atr-vs-standard-deviation]
glossary: [volatility, standard-deviation, lookback-period, mean, timeframe, smoothing]
wave: 2
reviewed: 14 November 2026
---

Historical volatility (HV) measures how much a price has actually moved over a past period, shown as an annual percentage. It is the standard deviation of price returns, scaled up to a year. Traders use it to compare how lively different markets are, to size positions and to check whether options are cheap or expensive against real movement.

## At a glance

| | |
|---|---|
| Type | Volatility measure |
| Best market states | Volatility |
| Weak in | Trends, where it says nothing about direction |
| Best uses | Filter, risk sizing |
| Default settings | 20 or 21 days, annualised with 252 trading days |
| Created by | Not attributed to one person (rooted in statistics and options pricing) |
| Leading or lagging | Lagging (it describes what already happened) |

## What is historical volatility?

Volatility describes how large and fast price changes are. Historical volatility looks backwards: it takes the daily percentage changes over the last 20 or so days and measures how spread out they are. It is also called realised or statistical volatility.

The result is expressed as an annual percentage. A reading of 20 per cent means that if the recent pace continued, a typical one-standard-deviation move over a year would be about 20 per cent of the price. It does not mean the price will rise or fall that much. It just gives a common scale. A calm large-company stock might show a figure in the teens, while a small, speculative stock or a cryptocurrency can show figures far higher.

Historical volatility has no single inventor. It grew out of the use of the [standard deviation](/standard-deviation/) in finance and became essential once option pricing models needed a volatility input. It is the counterpart to [implied volatility](/implied-volatility/), which comes from option prices and looks forward.

## Formula

1. Work out the daily return: r = ln(today's close / yesterday's close). This is the natural log return. Some tools use simple percentage changes instead.
2. Take the standard deviation of the last N returns (sample version, dividing by N - 1).
3. Annualise: HV = standard deviation x square root of 252.

The 252 is the usual number of trading days in a year. Crypto markets trade all year, so 365 is often used there.

**Worked example.** Suppose the standard deviation of the last 20 daily returns is 1 per cent (0.01).
HV = 0.01 x square root of 252 = 0.01 x 15.87 = **15.9 per cent**, annualised.

If daily volatility rises to 2 per cent, HV becomes 0.02 x 15.87 = 31.7 per cent. Doubling the daily spread doubles the annual figure.

Note: platforms differ in the look-back (10, 20, 21, 30 or 60 days), in whether they use log or simple returns, in the sample or population formula, and in the annualisation factor. The same market can show different readings in different tools. Always check the settings.

## How to read it

**High and low.** A high reading means price has been moving widely. A low reading means it has been quiet. What counts as high depends on the market, so compare it with its own history, such as its range over the last year.

**Mean reversion.** Volatility tends to pull back toward its long-run average. Spikes usually fade, and very quiet periods are often followed by more active ones. This is a tendency, not a timing tool.

**Position sizing.** When historical volatility is high, a fixed-size position carries more risk. Many traders reduce size when volatility rises and increase it when it falls, so the risk per trade stays about the same. See [position sizing](/position-sizing/).

**Against implied volatility.** If implied volatility is well above historical volatility, options are pricing in more movement than the market has recently shown. If it is below, the opposite. The gap is a topic of study for options traders, and it is not a simple buy or sell signal.

**Clustering.** Volatile days tend to follow volatile days and calm days tend to follow calm days. Seeing a rise in HV after a quiet stretch tells you that the quiet regime may have ended.

## Best market states

**Volatility analysis (best).** The measure exists to describe how much a market is moving relative to its own past, so it suits judging volatility regimes.

**Ranges.** A low and falling HV is typical of sideways markets, and a rising one warns that the range may be ending.

**Breakouts.** HV usually rises after a breakout starts. It tends to confirm that movement has returned, but it does not predict the break in advance.

**Trends (weak).** HV does not show direction. A steady trend with small daily moves can show low HV, and a choppy range with big swings can show high HV.

**Reversals.** Sharp spikes in volatility often appear around market turning points. The pattern is common but not reliable enough to act on alone.

## Settings

| Setting | Look-back | What it does |
|---|---|---|
| Short-term | 10 days | Reacts quickly to news, noisy |
| Default | 20 or 21 days | About one trading month; a common balance |
| Long-term | 60 to 100 days | Smooth view of the long-run level |

Many traders plot two or three look-backs together (for example 10, 30 and 60 days) to see whether recent volatility is above or below the longer-term level. A longer look-back also takes longer to forget a spike, so one extreme day will affect a 60-day reading for 60 days.

## Common mistakes

- Reading high volatility as a bearish signal or low volatility as a bullish one. It measures size of moves, not direction.
- Comparing readings from different platforms without checking the look-back and annualisation.
- Forgetting that one extreme day lifts the figure until it drops out of the window.
- Using a single reading as "high" or "low" without comparing it with that market's history.
- Mixing up historical volatility (what happened) with implied volatility (what options expect).
- Assuming volatility is constant. It changes over time, so an old reading may not describe tomorrow.

## Pairs well with

- **[Implied volatility](/implied-volatility/)**: comparing the two shows whether options expect more or less movement than has recently occurred.
- **[ATR](/atr/)**: a price-based way of measuring the same idea, handy for setting stops.
- **[Standard deviation](/standard-deviation/)**: the building block of the calculation.
- **[VIX](/vix/)**: the best-known measure of implied volatility on US stocks, a useful comparison.

## Sources

- Hull, John C. *Options, Futures, and Other Derivatives*. Pearson. (Standard textbook treatment of volatility estimation; use the latest edition.)
- Murphy, John J. (1999). *Technical Analysis of the Financial Markets*. New York Institute of Finance.

## FAQ

**What is historical volatility?**
It is a measure of how much a price has moved in the past, expressed as an annual percentage. It is calculated from the standard deviation of recent daily returns. A higher figure means bigger price swings. It does not show direction.

**What is the difference between historical and implied volatility?**
Historical volatility looks back at actual price changes. Implied volatility is taken from option prices and shows what the market expects in future. They often differ, and traders watch the gap between them.

**How do you calculate historical volatility?**
Take the daily log returns, find their standard deviation over your look-back (often 20 or 21 days), and multiply by the square root of 252 to annualise. The worked example above shows the steps with round numbers.

**What is a good historical volatility number?**
There is no good number. It depends on the market. A large-cap stock index may show mid-teens in calm periods, while individual stocks or crypto are usually higher. Compare against the same market's own history.

**How is historical volatility different from ATR?**
ATR averages the price range in price units and counts gaps. Historical volatility uses the spread of percentage returns and is annualised. ATR is handier for setting stops, and historical volatility is handier for comparing markets and options.
