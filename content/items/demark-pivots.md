---
slug: demark-pivots
name: DeMark Pivot Points
aka: [DeMark pivots, DeMark Pivot Points, Tom DeMark's pivot formula]
type: levels
states: [range]
weak_states: [trend]
purposes: [entry]
inventor: Tom DeMark
year: 1990s
default_settings: "Uses previous period open, high, low and close; one support and one resistance"
pairs_with: [pivot-points, support-and-resistance, previous-day-high-low, atr]
related: [pivot-points, fibonacci-pivot-points, camarilla-pivots, woodie-pivots, session-open, round-numbers]
compare: []
glossary: [pivot-point, support, resistance]
wave: 3
reviewed: 14 November 2026
---

DeMark Pivot Points are a variant of pivot points designed by Tom DeMark. They use the previous period's open, high, low and close to estimate one support and one resistance level for the next period. The formula changes depending on whether the previous period closed below, above or at its open.

## At a glance

| | |
|---|---|
| Type | Price levels |
| Best market states | Ranges |
| Weak in | Strong trends |
| Best uses | Entry areas, intraday reference |
| Default settings | Previous period open, high, low, close |
| Created by | Tom DeMark, 1990s (approximate) |
| Leading or lagging | Projected from past data, so levels are fixed in advance |

## What are DeMark Pivot Points?

Standard [pivot points](/pivot-points/) use the previous high, low and close. DeMark's version adds the previous open and uses it to decide which way the pivot should lean. If the last period closed down, the next period's levels are weighted toward the low. If it closed up, they are weighted toward the high.

The result is three prices: a central pivot, one resistance (R1) and one support (S1). Traders use them as an estimate of where the next period's high and low might land. Tom DeMark, a technical analyst known for tools such as the TD Sequential (see [TD Sequential](/td-sequential/)), is credited with the method. The exact year of publication is not clear, so this guide says only the 1990s as an approximate date.

Like all pivot levels, they are a mechanical calculation. They are not forecasts, and there is no academic evidence base showing that they predict turning points better than chance. Their use rests on the fact that many traders watch similar levels.

## How it is drawn

1. Take the previous period's open (O), high (H), low (L) and close (C). For day trading, use yesterday's values.
2. Choose X based on the relationship between the close and the open:
   - If close is below open: X = H + (2 x L) + C
   - If close is above open: X = (2 x H) + L + C
   - If close equals open: X = H + L + (2 x C)
3. Pivot (PP) = X / 4
4. First resistance: R1 = (X / 2) - L
5. First support: S1 = (X / 2) - H

**Worked example.** Yesterday: open 100, high 108, low 96, close 104. The close is above the open, so:
X = (2 x 108) + 96 + 104 = 216 + 96 + 104 = 416
PP = 416 / 4 = **104**
R1 = (416 / 2) - 96 = 208 - 96 = **112**
S1 = (416 / 2) - 108 = 208 - 108 = **100**

Notice that R1 and S1 are not symmetrical around PP. That is intended, as the formula leans toward the previous day's direction.

Some platforms draw only R1 and S1, not the pivot, because DeMark's description focuses on the projected high and low. Platforms may also vary in which period they use. Check the settings.

## How to read it

**Projected high and low.** R1 is an estimate of the next period's high, and S1 an estimate of its low. Price turning near them is the standard use.

**Open relative to the levels.** DeMark's method is often paired with where the new period opens. An open above R1 or below S1 means price has already left the expected range.

**Break of a level.** A close beyond R1 or S1 suggests the expected range is wrong, and price may continue. Many traders then treat the level as broken.

**Pivot as a bias line.** Price above the central pivot suggests a bullish lean, and below it a bearish lean, as with standard pivot points.

**Role reversal.** Once crossed, a level may act as support or resistance the other way, but this is a habit and not a rule.

## Best market states

**Ranges (best).** When price moves between defined edges, projected levels can line up with those edges.

**Trends (weak).** In a strong trend, price can move well beyond R1 or S1 without pausing.

**Breakouts.** A break beyond the projected range on strong volume can mark a breakout day, but the pivots cannot tell you in advance.

**Reversals.** They can mark places to look for reversal candles, but the level alone is not enough.

**Volatility.** After a very wide-ranging day, the levels will be far apart. After a very narrow day, they will be close together. They are only as good as the data from the last period.

## Confirmation rules

| Check | What to look for |
|---|---|
| Period | Decide whether you use daily, weekly or monthly data and stay consistent |
| Close beats touch | Use closes beyond a level, not wicks, to judge a break |
| Confluence | A level matching an older support or resistance is more interesting |
| Candle signal | Look for a reversal candle at the level before acting |
| Stop | Beyond the level with an allowance for noise, for example based on ATR |

## Common mistakes

- Treating the levels as certain turning points.
- Using the standard pivot formula and calling it DeMark's. The conditional X is the key difference.
- Forgetting the formula depends on the open, so a platform that lacks open data cannot calculate it correctly.
- Applying them on a strong trend day without another reason.
- Using intraday data for the previous period when a session boundary is unclear, for example in forex.

## Pairs well with

- **[Pivot points](/pivot-points/)**: compare the standard levels with DeMark's. Agreement between the two strengthens an area.
- **[Support and resistance](/support-and-resistance/)**: levels from price history give an independent check.
- **[Previous day high/low](/previous-day-high-low/)**: the raw levels from which pivot formulas are built.
- **[ATR](/atr/)**: helps judge whether the distance between S1 and R1 is typical for the market, and where to place stops.

## Sources

- Colby, Robert W. (2003). *The Encyclopedia of Technical Market Indicators*, 2nd edition. McGraw-Hill.
- DeMark, Thomas R. (1994). *The New Science of Technical Analysis*. Wiley.

## FAQ

**What are DeMark Pivot Points?**
They are support and resistance levels calculated from the previous period's open, high, low and close. The formula depends on whether the close was below, above or equal to the open. It gives one pivot, one resistance and one support.

**How do you calculate DeMark pivot points?**
Find X using the rule for that day: H + 2L + C if close is below open, 2H + L + C if above, or H + L + 2C if equal. Then PP = X / 4, R1 = X / 2 - L and S1 = X / 2 - H.

**How are DeMark pivots different from standard pivots?**
Standard pivots use only the previous high, low and close and give several symmetrical levels. DeMark's version also uses the open, to choose a weighting, and gives only one support and one resistance, which are not symmetrical.

**Do DeMark pivots predict reversals?**
There is no academic evidence that they do. They are calculated from yesterday's prices and are watched by some traders. Any reaction at the levels may be due to many people looking at the same prices.

**Which time frame should I use?**
Many traders use daily data for intraday trading, weekly for swing trading and monthly for longer views. Choose one that matches how long you hold trades, and apply it consistently.
