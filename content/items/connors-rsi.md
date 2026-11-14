---
slug: connors-rsi
name: Connors RSI
aka: [ConnorsRSI, CRSI]
type: momentum-oscillator
states: [range, reversal]
weak_states: [trend]
purposes: [entry]
inventor: Larry Connors (Connors Research)
year: Early 2010s
default_settings: "RSI(3), streak RSI(2), percent rank of 1-bar change over 100 bars; levels 90 and 10"
pairs_with: [simple-moving-average, support-and-resistance, adx, mean-reversion]
related: [rsi, stochastic-rsi, rate-of-change, overbought-oversold, williams-r]
compare: []
glossary: [overbought, oversold, oscillator, mean-reversion, lookback-period]
wave: 3
reviewed: 14 November 2026
---

Connors RSI is a composite oscillator that averages three short-term measures: a fast RSI of price, an RSI of the length of the current up or down streak, and the percentile rank of the latest price change. It runs from 0 to 100 and is used mainly to time short-term pullback entries in mean-reversion setups.

## At a glance

| | |
|---|---|
| Type | Composite momentum oscillator |
| Best market states | Range, reversal (short-term pullbacks) |
| Weak in | Strong trends that do not pull back |
| Best uses | Entry timing |
| Default settings | 3, 2 and 100; levels 90 / 10 (some use 80 / 20) |
| Created by | Larry Connors and Connors Research, early 2010s |
| Leading or lagging | Short-term and fast, but built from past prices |
| Scale | 0 to 100 |

## What is Connors RSI?

Connors RSI came out of the short-term trading research of Larry Connors, who favoured buying brief pullbacks in uptrends. It builds on the idea that a very short RSI, such as a 2-period or 3-period reading, is a useful measure of short-term stretch. Connors RSI adds two more views of the same question: how many days in a row has the market gone one way, and how big is today's move compared with recent history.

Averaging three components makes the line less dependent on any one calculation. The trade-off is that it is more complicated to explain and harder to compare across platforms, because the original construction is not always followed exactly. I could not confirm the year of the first publication and the exact publication details, so this guide gives only the approximate period.

## Formula

Connors RSI = (RSI of price + RSI of streak + Percent rank of change) / 3

1. **RSI of price.** A standard [RSI](/rsi/) of the close, usually with 3 periods.
2. **RSI of streak.** Count the up or down streak: each consecutive up close adds 1 (so the streak is +1, +2, +3 and so on), each consecutive down close subtracts 1 (-1, -2, -3), and an unchanged close resets it to 0. Then take a 2-period RSI of that streak series.
3. **Percent rank.** Over the last 100 bars, find the percentage of one-bar price changes that were smaller than today's change. Today's change is the one-bar percent rate of change.

**Worked example.** Suppose RSI(3) of price is 70, the streak RSI(2) is 90 and the percent rank is 20.
Connors RSI = (70 + 90 + 20) / 3 = 180 / 3 = **60**

A market that has dropped for four days in a row might show a price RSI of 10, a streak RSI of 5 and a percent rank of 15, giving a Connors RSI of about 10, in the usual oversold zone.

## How to read it

**Extremes.** Readings above 90 are usually called overbought and below 10 oversold. Some traders use 80 and 20 for more signals. In a mean-reversion approach, a low reading in an uptrend is treated as a possible pullback entry.

**Trend filter.** The idea is usually combined with a trend filter, for example only taking oversold signals when price is above a 200-period average, so that you are buying dips and not catching a falling market.

**Exits.** Mean-reversion users often exit when the reading returns to a middle level or when price closes above a short average. These are rules of thumb that need testing.

**Not a trend tool.** Connors RSI reacts to very short-term moves, so it has little to say about the longer trend.

## Best market states

**Ranges (best).** When price swings between clear edges, short-term extremes tend to line up with turning points.

**Pullbacks in uptrends (good).** This is the setting it is built for, with a trend filter in place.

**Reversals (mixed).** A deep oversold reading in a downtrend is not a reversal signal. Markets can stay oversold.

**Strong trends (weak).** If price falls day after day, Connors RSI stays near zero. Buying each reading is how losses pile up.

**Volatility.** Because of the percent-rank part, a sudden large move compared with recent history produces an extreme reading on its own.

## Settings

| Setting | Values | What it does |
|---|---|---|
| Default | 3, 2, 100 | The usual combination |
| Alternative price RSI | 5 to 14 | Smoother, fewer extremes |
| Alternative rank length | 50 to 250 | Changes how "unusual" a move needs to be |
| Levels | 90/10 or 80/20 | Higher bars mean fewer, stricter signals |

Each platform builds the streak and the percent rank a little differently. Check the documentation of your chart package.

## Common mistakes

- Buying every reading below 10 with no trend filter.
- Treating it as an indicator for long-term trends. It is designed for short holding periods.
- Assuming that all platforms calculate it in the same way.
- Believing a high win rate from one article without testing it on your own markets and costs.
- Ignoring the three parts. If one component is behaving oddly, the average hides that.

## Pairs well with

- **[Simple moving average](/simple-moving-average/)**: a long average such as 200 periods acts as a trend filter for pullback entries.
- **[Support and resistance](/support-and-resistance/)**: oversold readings at known support are more meaningful.
- **[ADX](/adx/)**: a low ADX points to ranges, where extremes tend to be more useful.
- **[Mean reversion](/mean-reversion/)**: the framework this oscillator is designed for.

## Sources

- Wilder, J. Welles Jr. (1978). *New Concepts in Technical Trading Systems*. Trend Research. (The RSI that forms the first two parts of the calculation.)

## FAQ

**What are the three parts of Connors RSI?**
A short RSI of price, usually 3 periods; a short RSI of the up or down streak, usually 2 periods; and the percentile rank of the latest one-bar change over 100 bars. The three numbers are averaged to give a reading from 0 to 100.

**What are the default levels?**
Most use 90 for overbought and 10 for oversold. Others use 80 and 20 to get more signals. Neither is a rule, and strong trends can keep the reading beyond them.

**How is Connors RSI different from RSI?**
RSI uses one calculation, usually over 14 periods. Connors RSI combines three short-term measures and averages them. It is faster and aimed at short pullbacks, not at the overall trend.

**Does Connors RSI work for day trading?**
It was developed for daily bars and short holding periods. It can be calculated on any time frame, but it is not clear that the same levels carry over. Test it on the chart and time frame you trade.

**Is Connors RSI reliable on its own?**
No oscillator is. It is usually combined with a trend filter and a rule for exits. Results depend on market, costs and period, so test before relying on it.
