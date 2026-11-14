---
slug: relative-strength-comparative
name: Relative Strength (comparative)
aka: [Comparative relative strength, price relative, relative performance, RS line]
type: breadth-sentiment
states: [trend]
weak_states: [range]
purposes: [filter]
inventor: Robert A. Levy (popularised)
year: 1967
default_settings: "Price of asset divided by price of a benchmark; often smoothed with a moving average"
pairs_with: [relative-rotation-graph, correlation-coefficient, simple-moving-average, trendline]
related: [rsi, rate-of-change, intermarket-analysis, currency-strength-meter, momentum-indicator]
compare: []
glossary: [trend, momentum, lookback-period]
wave: 2
reviewed: 14 November 2026
---

Comparative relative strength divides one asset's price by another's, usually a stock by an index. A rising line means the asset is outperforming the benchmark, a falling line means it is lagging. Traders use it as a filter to focus on leaders in an uptrend and avoid laggards.

## At a glance

| | |
|---|---|
| Type | Breadth and sentiment (comparison) indicator |
| Best market states | Trends |
| Weak in | Ranges, where the ratio drifts sideways and gives little information |
| Best uses | Filter (choosing what to trade) |
| Default settings | Price divided by benchmark price; optional moving average |
| Created by | Popularised in academic work by Robert A. Levy, 1967 |
| Leading or lagging | Lagging, but leaders often show strength before a market turns up |

## What is comparative relative strength?

This is not the same as the [RSI](/rsi/). The Relative Strength Index looks only at one market's own gains and losses. Comparative relative strength compares two different assets.

The question it answers is simple: is this asset doing better or worse than something else? That something else can be a market index, a sector fund, another stock or another currency pair.

The idea that past winners tend to keep winning for a time, and past losers keep lagging, has been studied in academic finance. Robert Levy's 1967 paper tested relative strength as a way to select stocks. Later work on momentum, such as Jegadeesh and Titman (1993), found similar effects in stock data over some periods. Results vary by market and era, and costs matter.

An asset can fall in price and still show rising relative strength, if the benchmark falls faster. That is why many traders use the line to find assets that hold up in weak markets.

## Formula

Relative strength line = asset price / benchmark price

**Worked example.** A stock closes at 50 and its index closes at 1,000.
Ratio = 50 / 1,000 = 0.05

A week later the stock is at 55 and the index at 1,020.
Ratio = 55 / 1,020 = about 0.0539

The ratio rose from 0.0500 to 0.0539, so the stock outperformed.

**Rate of change version.** Some platforms compare percentage change instead: asset return over n bars minus benchmark return over n bars. Here the stock gained 10% and the index 2%, so relative performance is +8 percentage points.

Platforms differ in whether they show the raw ratio, a rebased line starting at 100, or a percentage difference. The shape is the same.

## How to read it

**Rising line.** The asset is beating its benchmark. In an uptrend this supports staying with the asset.

**Falling line.** The asset is lagging. Even in a rising market, a falling line says other assets are doing better.

**Trendline or moving average on the ratio.** Draw a [trendline](/trendline/) or apply a [simple moving average](/simple-moving-average/) to the ratio line. A break above its average or trendline can mark a change from lagging to leading.

**New high before price.** If the ratio makes a new high while price has not yet done so, some traders read this as hidden strength.

**Divergence.** Price makes a new high but the ratio does not. This shows the move is narrowing, with the asset no longer beating the benchmark. It is a caution, not a sell signal.

**Ranking.** Compute the ratio's change over a period for many assets and rank them. The top of the list are the leaders. The [Relative Rotation Graph](/relative-rotation-graph/) does this visually.

## Best market states

**Trends (best).** In a trending market, relative strength helps pick the strongest instruments to follow.

**Reversals (mixed).** Leaders often hold up in a pullback and recover first. But a leader can also break down sharply when the whole market turns.

**Ranges (weak).** In sideways conditions the ratio often wanders without clear direction.

**Breakouts (limited).** A stock breaking out while its relative strength is already rising is often seen as a stronger setup. This is a rule of thumb rather than proven edge.

**Volatility.** Very volatile assets can dominate the ratio simply because they move more, not because they are stronger in a useful sense.

## Settings

| Setting | What it does |
|---|---|
| Raw ratio | Shows every change; noisy on short time frames |
| Moving average of ratio (e.g. 50 or 200 bars) | Smooths the line; a cross shows a change of leadership |
| Rate-of-change comparison (e.g. 63 days) | Ranks several assets on the same footing |
| Choice of benchmark | Index, sector fund or peer; it changes the answer, so match it to the asset |

There is no single standard lookback. Common choices on daily charts include roughly one, three, six and twelve months, but you should test any choice on your own market.

## Common mistakes

- Confusing this with the RSI, which uses a different formula and a single price series.
- Using an unsuitable benchmark, such as comparing a small mining stock to a broad index.
- Assuming outperformance in the past will continue. It often does for a time, but not always.
- Ignoring that a stock can have strong relative strength while falling in absolute terms.
- Comparing assets with very different volatility and ignoring the difference.
- Switching benchmarks until the chart looks good.

## Pairs well with

- **[Relative Rotation Graph](/relative-rotation-graph/)**: shows relative strength and its momentum for many assets at once.
- **[Correlation coefficient](/correlation-coefficient/)**: tells you whether the benchmark is a sensible comparison at all.
- **[Simple moving average](/simple-moving-average/)**: smooths the ratio and marks changes of leadership.
- **[Trendline](/trendline/)**: a break of a trendline on the ratio is a simple signal.

## Sources

- Levy, Robert A. (1967). "Relative Strength as a Criterion for Investment Selection". *Journal of Finance*, 22(4).
- Jegadeesh, Narasimhan and Titman, Sheridan (1993). "Returns to Buying Winners and Selling Losers: Implications for Stock Market Efficiency". *Journal of Finance*, 48(1).
- Murphy, John J. (1999). *Technical Analysis of the Financial Markets*. New York Institute of Finance. (Covers relative strength analysis.)

## FAQ

**Is relative strength the same as RSI?**
No. RSI is a momentum oscillator calculated from one market's own gains and losses. Comparative relative strength divides one asset's price by another's to show which is doing better. They share a name but measure different things.

**What benchmark should I use for relative strength?**
Choose something the asset can fairly be compared with: a stock against its sector or index, a sector fund against a broad index, a currency pair against another pair. A poor benchmark makes the line misleading.

**Does high relative strength mean a stock will keep rising?**
Not necessarily. Academic studies of momentum show leaders often keep outperforming over some periods, but the effect is not constant and can reverse sharply. It is best used as a filter, not a prediction.

**Can a falling stock have rising relative strength?**
Yes. If the stock falls 2% while the index falls 5%, the ratio rises. Traders sometimes look for these assets because they are holding up better than the market.

**How do you chart relative strength?**
Most charting platforms let you divide one symbol by another, often called a ratio or spread chart. Enter the asset, a division sign and the benchmark symbol, then add a moving average or trendline to the result.
