---
slug: correlation-coefficient
name: Correlation Coefficient
aka: [Pearson correlation, Pearson's r, correlation indicator]
type: breadth-sentiment
states: [trend]
weak_states: [range]
purposes: [filter]
inventor: Karl Pearson
year: 1895
default_settings: "20 to 100 periods on returns or closes; scale from -1 to +1"
pairs_with: [intermarket-analysis, beta, currency-strength-meter, relative-rotation-graph]
related: [beta, intermarket-analysis, relative-strength-comparative, currency-strength-meter, relative-rotation-graph, standard-deviation]
compare: []
glossary: [standard-deviation, mean, trend]
wave: 2
reviewed: 14 November 2026
---

The correlation coefficient measures how closely two markets move together, on a scale from -1 to +1. A reading near +1 means they usually move in the same direction, near -1 means opposite, and near 0 means little link. Traders use it as a filter to avoid doubling up on the same risk and to find related markets.

## At a glance

| | |
|---|---|
| Type | Statistical relationship measure |
| Best market states | Trend |
| Weak in | Ranges, and fast regime changes |
| Best uses | Filter |
| Default settings | 20 to 100 periods, on returns |
| Created by | Karl Pearson, 1895 (building on work by Francis Galton) |
| Leading or lagging | Lagging: it describes past co-movement |

## What is the Correlation Coefficient?

When two assets move together, owning both gives you much the same bet twice. When they move opposite, one can offset the other. The correlation coefficient puts a number on this.

The version traders use is Pearson's correlation coefficient, named after Karl Pearson, who published the underlying mathematics in the 1890s, building on Francis Galton's work on regression. It is a standard statistic taught in every statistics course. On a chart, it is plotted as a line between -1 and +1, calculated over a rolling window of recent bars.

Key points:

- **+1** means perfect positive correlation: they move in the same direction in proportion.
- **0** means no linear relationship.
- **-1** means perfect negative correlation: they move in opposite directions.
- It measures **direction of co-movement, not size**. Two assets can have correlation +1 while one moves twice as much as the other. For size, see [Beta](/beta/).
- Correlation is not causation, and it is not stable. It changes with time.

## Formula

Pearson's r between two series X and Y over n periods:

r = covariance(X, Y) / (standard deviation of X x standard deviation of Y)

Spelled out: r = sum of ((x - mean x) x (y - mean y)) / square root of (sum of (x - mean x) squared x sum of (y - mean y) squared)

**Worked example.** Over three periods, X changes are +1, +2, +3, and Y changes are +2, +4, +6.
Mean X = 2, mean Y = 4. Deviations: X: -1, 0, +1; Y: -2, 0, +2.
Sum of products = (-1 x -2) + (0 x 0) + (1 x 2) = 4
Sum of squares X = 2, of Y = 8. Square root of (2 x 8) = 4.
r = 4 / 4 = **+1**. A perfect positive link.

Practical notes:

- Use **returns** (percentage changes) rather than raw price levels. Correlating raw prices of two trending markets often gives high readings that mean nothing (a "spurious correlation").
- Platforms differ in default window (often 20 to 30, some 100), and whether they use closes or returns.
- Some tools plot the square (r squared), which shows the share of variation explained, ranging from 0 to 1.

## How to read it

Common labels, used as rough guides, not official thresholds:

- **0.7 to 1.0:** strong positive link.
- **0.3 to 0.7:** moderate.
- **-0.3 to 0.3:** weak or none.
- **-0.7 to -1.0:** strong negative link.

**Avoiding double risk.** If two trades have correlation near +0.9, treat them as close to one position when sizing.

**Hedging.** A strong negative correlation can offset risk, though it may not hold in stress.

**Pairs and spreads.** Traders look for pairs that are normally correlated, then watch when they drift apart. This can be tested as a mean-reversion idea but carries risk if the link has permanently broken.

**Changes in correlation.** A sudden move from +0.8 to 0 is information: something changed in the relationship, such as a policy shift or a new driver.

**Crises.** Correlations between risky assets often rise in market stress. Diversification can fail when it is most needed.

## Best market states

**Trends (best as a filter).** In clear trends the relationship between related markets (for example an oil stock and crude oil, or two currency pairs sharing the same currency) is easiest to see and use.

**Ranges (weak).** In sideways movement, small random moves give low and unstable readings.

**Regime changes (poor).** A rolling correlation reacts slowly. By the time it changes, the shift has already happened.

**Short windows (noisy).** With a 10 to 20 period window, the reading swings a lot and can mislead.

## Settings

| Setting | Window | What it does |
|---|---|---|
| Short | 10 to 20 | Reacts fast but is noisy |
| Default | 20 to 50 | Common balance for daily charts |
| Long | 100 or more | Stable view of the structural link |
| Data type | Returns (preferred) or closes | Returns avoid false links from shared trends |

Using two or more windows (for example 20 and 100) shows whether the recent relationship differs from the long-run one.

## Common mistakes

- Correlating raw prices instead of returns.
- Assuming correlation is constant. It moves over time.
- Mistaking correlation for causation.
- Using a very short window, then acting on noisy swings.
- Treating +0.5 as "moves together" when it only explains a quarter of the variation.
- Ignoring non-linear relationships, which Pearson's r can miss completely.

## Pairs well with

- **[Intermarket analysis](/intermarket-analysis/)**: uses correlations between asset classes to read the wider picture.
- **[Beta](/beta/)**: adds the size of the relationship to its direction.
- **[Currency Strength Meter](/currency-strength-meter/)**: helps avoid stacking trades that are really one currency bet.
- **[Relative Rotation Graph](/relative-rotation-graph/)**: another way to view relationships between markets.

## Sources

- Pearson, Karl (1895). "Notes on regression and inheritance in the case of two parents". *Proceedings of the Royal Society of London*, 58.
- Murphy, John J. (1999). *Technical Analysis of the Financial Markets*. New York Institute of Finance. (Intermarket relationships.)

## FAQ

**What is a good correlation value?**
It depends on the goal. For diversification, you want low or negative values. For a pairs idea, you want a stable high value. Rough labels treat above 0.7 as strong, but these are conventions, not standards.

**Does high correlation mean two markets will keep moving together?**
Not necessarily. Correlation describes the past window. It can change as conditions change, so a high reading today gives no guarantee about next month.

**Should I use prices or returns?**
Returns. Two unrelated assets that both trend upward can show a high correlation of raw prices simply because both rose. Returns remove that shared drift and show whether the day-to-day moves line up.

**What is the difference between correlation and beta?**
Correlation shows how closely two series move together, from -1 to +1. [Beta](/beta/) shows how much one moves for each unit move in the other, so it includes size.

**Can a correlation be negative in forex?**
Yes. For example, two pairs where the same currency sits on opposite sides (one as base, one as quote) tend to show negative correlation. The strength changes over time, so check it with a rolling window.
