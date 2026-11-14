---
slug: seasonality
name: Seasonality
aka: [Seasonal patterns, seasonal analysis, calendar effects]
type: breadth-sentiment
states: [trend]
weak_states: [range]
purposes: [filter]
inventor: Not attributed to one person
year: Unknown
default_settings: "Average return by calendar period (month, week or day of year) over 10 to 20 years"
pairs_with: [trend-following, market-cycles, support-and-resistance, relative-strength-comparative]
related: [intermarket-analysis, commitments-of-traders, correlation-coefficient, average-daily-range, historical-volatility]
compare: []
glossary: [trend, lookback-period, volatility]
wave: 2
reviewed: 14 November 2026
---

Seasonality is the study of price tendencies that repeat at the same time each year, month or week. Examples are crop prices linked to harvests, energy demand in winter and the stock-market saying "sell in May". Traders use it as a background filter, not as a signal on its own.

## At a glance

| | |
|---|---|
| Type | Breadth and sentiment (calendar) tool |
| Best market states | Trends that run with the seasonal bias |
| Weak in | Ranges and years when news overrides the usual pattern |
| Best uses | Filter, planning when to look for setups |
| Default settings | Average return by calendar period over 10 to 20 years |
| Created by | Not attributed to one person |
| Leading or lagging | Neither; it is based on the calendar, not on current price |

## What is seasonality?

Some markets have a reason to repeat. Farm crops are planted and harvested at set times of year. Heating fuel is in demand in winter and petrol in summer. Retailers build stock before the holiday season. Tax deadlines, fiscal year ends and fund rebalancing can also create flows at predictable dates.

Other seasonal patterns have no clear cause. Academic studies have looked at several of them in stock indices. Rozeff and Kinney (1976) found higher average January returns in US stocks. Bouman and Jacobsen (2002) studied the "Halloween" effect, where stock returns from November to April were higher than those from May to October, in many countries. Researchers have debated whether such effects are real, whether they have weakened over time and whether they survive trading costs.

A fair summary is that seasonal tendencies exist in some markets, are small compared with ordinary price swings, and change over time. In any single year the pattern may not appear at all.

## Formula

There is no single formula. A common method is:

1. Split history into years (for example the last 15).
2. For each year, find the return for each calendar period, such as each month.
3. Average the returns for each period across the years.
4. Also record the **hit rate**: in how many of the years was the period positive.

**Worked example.** Over five years, a market's March returns are +4%, +2%, -1%, +3% and +2%.
Average = (4 + 2 - 1 + 3 + 2) / 5 = **+2.0%**
March was positive in 4 of 5 years, so the hit rate is 4/5.

Five years is too few to trust. Charting platforms and data providers often use 10 to 20 years and may show a median as well as the average, because one huge year can distort the average.

Platforms differ in how they calculate: some use closing prices at month end, some use daily returns grouped by calendar day, and some adjust for trends.

## How to read it

**The seasonal chart.** A line or bar chart of average return by period. Peaks and troughs show typical strong and weak spells.

**Consistency.** A pattern that was positive in 13 of 15 years is more interesting than one with the same average that came from two large years and thirteen small ones.

**Agreement with price.** The most common use is as a tiebreaker. If your price setup points up and the seasonal pattern is also positive, the case for the trade is somewhat stronger. If they disagree, treat the trade with more caution.

**Planning.** Seasonal charts help you know when to expect interest or volatility, such as commodity markets before a harvest.

**Do not buy a date.** A seasonal high on the chart is an average of many years. The actual turn in any single year can come weeks earlier or later.

## Best market states

**Trends (best).** Seasonal bias seems to matter most when it is aligned with an existing trend, as extra support for staying with it.

**Reversals (limited).** Some traders look for seasonal turning points, but the timing varies from year to year.

**Ranges (weak).** In sideways markets, a small average return is lost in the noise.

**Commodities.** Markets with real supply and demand cycles, such as agriculture and energy, are the most commonly cited users of seasonal analysis.

**Volatility.** Seasonality also applies to volatility, for example the quieter summer months or thinner holiday trading, which can affect stop distances.

## Settings

| Setting | What it does |
|---|---|
| Years of history | 10 to 20 years is common; too few years make noise look like pattern |
| Period | Month, week, or day of year; shorter periods give noisier results |
| Average or median | Median reduces the effect of one extreme year |
| Hit rate | Shows how consistent the pattern has been |
| Detrending | Removes long-term drift, so the pattern is not just the market's overall rise |

Always check that the pattern is not simply a result of the market having risen over the whole sample.

## Common mistakes

- Trading a seasonal pattern alone, without a price setup or a stop.
- Using too few years, then treating an average as a rule.
- Ignoring the hit rate and looking only at the average.
- Assuming a pattern that worked in the past will keep working. Many calendar effects have faded after being published.
- Forgetting costs, which can remove a small average edge.
- Picking the one month that looks best after viewing many months, which is a form of data mining.

## Pairs well with

- **[Trend following](/trend-following/)**: a seasonal lean in the same direction as the trend adds some context.
- **[Market cycles](/market-cycles/)**: seasonal rhythms sit inside longer cycles, so both views help.
- **[Support and resistance](/support-and-resistance/)**: levels give the actual entry and stop; seasonality only gives a bias.
- **[Relative strength (comparative)](/relative-strength-comparative/)**: checks whether the asset is actually leading in the seasonal window.

## Sources

- Rozeff, Michael S. and Kinney, William R. (1976). "Capital Market Seasonality: The Case of Stock Returns". *Journal of Financial Economics*, 3(4).
- Bouman, Sven and Jacobsen, Ben (2002). "The Halloween Indicator, 'Sell in May and Go Away': Another Puzzle". *American Economic Review*, 92(5).
- Murphy, John J. (1999). *Technical Analysis of the Financial Markets*. New York Institute of Finance. (Covers seasonal analysis of futures.)

## FAQ

**What is seasonality in trading?**
It is the tendency of some markets to move in a similar way at the same time each year, for reasons such as harvests, weather, holidays or fund flows. Traders study average returns by calendar period to find these tendencies.

**Does "sell in May and go away" work?**
Academic work such as Bouman and Jacobsen (2002) found that stock returns from November to April were higher than May to October in many countries. The effect is not constant, it varies by year, and costs and taxes can matter.

**How many years of data do I need for seasonality?**
There is no fixed rule, but 10 to 20 years is common. With fewer than about 10 years, one unusual year can dominate the average and make a pattern look stronger than it is.

**Is seasonality reliable enough to trade alone?**
Most traders do not use it alone. The patterns are usually small compared with normal price swings and can fail in any year. It is more often used as a filter alongside price action and risk control.

**Which markets have the strongest seasonal patterns?**
Commodities with clear supply and demand cycles, such as grains and energy, are the usual examples. Stock indices also show some calendar effects, but those are less tied to an obvious cause.
