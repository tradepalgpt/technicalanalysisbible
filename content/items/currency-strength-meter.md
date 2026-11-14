---
slug: currency-strength-meter
name: Currency Strength Meter
aka: [currency strength indicator, currency meter, CSM]
type: breadth-sentiment
states: [trend]
weak_states: [range]
purposes: [filter]
inventor: Not attributed to one person
year: Unknown
default_settings: "Ranks the 8 major currencies by average performance across their pairs over a chosen period"
pairs_with: [correlation-coefficient, intermarket-analysis, support-and-resistance, multiple-time-frame-analysis]
related: [correlation-coefficient, relative-strength-comparative, relative-rotation-graph, intermarket-analysis, rate-of-change, beta]
compare: []
glossary: [trend, momentum, spread]
wave: 2
reviewed: 14 November 2026
---

A currency strength meter ranks currencies from strongest to weakest by combining their moves against many other currencies. Instead of looking at one pair, it shows which single currency is leading or lagging. Forex traders use it as a filter, aiming to pair a strong currency against a weak one.

## At a glance

| | |
|---|---|
| Type | Forex breadth and relative-strength tool |
| Best market states | Trend |
| Weak in | Ranges, and around news spikes |
| Best uses | Filter |
| Default settings | 8 major currencies, a lookback such as 14 periods or one day |
| Created by | Not attributed to one person (many versions exist; year unknown) |
| Leading or lagging | Lagging: it summarises recent performance |

## What is a Currency Strength Meter?

A forex pair, such as EUR/USD, mixes two currencies. If it rises, either the euro got stronger, the dollar got weaker, or both. One pair cannot tell you which. A strength meter solves this by looking at all pairs that contain a currency, then averaging.

If the euro is up against the dollar, the pound, the yen, the franc and the others, the euro is clearly strong. If the dollar is down against all of them, it is clearly weak. The best trade by this logic is the strongest currency against the weakest, here EUR/USD.

Many versions exist: free web tools, indicators for trading platforms, and custom scripts. They have no single inventor or official formula, which means two meters can show different rankings on the same day. They are a trader-built tool and have no academic evidence base as a trading edge.

## Formula

There is no standard formula, but the common method is:

1. Choose a period (for example, the last 14 bars, or today so far).
2. For each of the 28 pairs among the eight majors (USD, EUR, GBP, JPY, CHF, CAD, AUD, NZD), compute the percentage change over the period.
3. For each currency, add up the changes of the pairs where it is the base currency, and subtract the changes of the pairs where it is the quote currency.
4. Divide by the number of pairs (7) to get an average score.
5. Rank the eight currencies by score.

**Worked example.** Look at three currencies only, with moves over the day: EUR/USD +0.6%, GBP/USD +0.2%, EUR/GBP +0.4%.
- EUR: +0.6 (EUR/USD) + 0.4 (EUR/GBP) = +1.0, average +0.5
- GBP: +0.2 (GBP/USD) - 0.4 (EUR/GBP) = -0.2, average -0.1
- USD: -0.6 - 0.2 = -0.8, average -0.4

Ranking: EUR strongest, GBP middle, USD weakest. The pair EUR/USD would be the strongest versus weakest combination.

Variations: some tools use a rate-of-change, some use a moving-average slope or an RSI average, and some use normalised scores from 0 to 10. Check how your tool computes it before comparing with others.

## How to read it

**Extremes.** The currency at the top and the one at the bottom define a candidate pair. A wide gap between them suggests a clear directional imbalance.

**Middle currencies.** Pairs made of two currencies near the middle of the ranking show less directional pressure and may be choppy.

**Direction of change.** A currency rising up the ranking over time is gaining strength. Watching the slope helps avoid joining a move that has already faded.

**Avoiding duplicate trades.** If you hold long EUR/USD and long EUR/GBP, you are twice long the euro. The meter makes this visible. See [Correlation Coefficient](/correlation-coefficient/).

**Time frame.** Compare a short period and a longer one. If they agree, the strength has more support.

## Best market states

**Trends (best).** When a currency has a clear, persistent theme, such as a central bank shift, the meter shows leaders and laggards well.

**Ranges (weak).** When nothing is trending, the ranking flips often and gives little guidance.

**News spikes (poor).** One event can scramble the ranking for a few bars, and averages lag after it.

**Weekends and thin sessions.** Gaps and low liquidity distort changes.

## Settings

| Setting | Value | What it does |
|---|---|---|
| Currencies | 8 majors (default) | Some meters add others, such as SEK or NOK |
| Period | Today, or 14 to 24 bars | Short: fast but noisy. Long: smoother and slower |
| Method | Percentage change, RSI or ROC average | Different methods give different rankings |
| Time frame | Chart time frame or daily | Align with the time frame you trade |

## Common mistakes

- Treating the ranking as a signal to enter. It is a filter, and you still need a price setup and a stop.
- Using two different meters and assuming they must agree.
- Trading a strong-versus-weak pair into a major resistance level without checking the chart.
- Ignoring the time frame: a currency strong today may be weak on the weekly view.
- Forgetting that other factors, such as spread and swap costs, vary by pair.
- Assuming a ranking persists. Strength can reverse quickly after news.

## Pairs well with

- **[Correlation Coefficient](/correlation-coefficient/)**: shows whether your open trades stack the same currency exposure.
- **[Intermarket analysis](/intermarket-analysis/)**: places currency moves in the context of bonds, equities and commodities.
- **[Support and resistance](/support-and-resistance/)**: chooses the entry level once the pair is chosen.
- **[Multiple time frame analysis](/multiple-time-frame-analysis/)**: checks that strength agrees on higher and lower charts.

## Sources

- Murphy, John J. (1999). *Technical Analysis of the Financial Markets*. New York Institute of Finance. (Background on intermarket and relative-strength ideas; currency strength meters themselves are a retail platform tool without a standard published definition.)

## FAQ

**What does a currency strength meter show?**
It shows which of the major currencies is strongest or weakest over a period, by averaging each currency's moves against the others. It helps you pick which pair to look at.

**Is there a standard currency strength formula?**
No. Different tools use different periods, calculation methods and sets of currencies, so results differ. Read the tool's documentation, and stick with one version.

**Does it give buy and sell signals?**
Not by itself. It tells you which currencies are strong or weak, not where to enter or place a stop. Combine it with price analysis and risk rules.

**Does it work for stocks or crypto?**
The idea can be copied to other groups, such as sector strength, but the standard meter is built for forex because every pair contains two currencies that can be unpicked.

**Why do two strength meters disagree?**
They may use different time periods, currencies, or formulas such as percentage change versus RSI. Their rankings can differ even on the same day.
