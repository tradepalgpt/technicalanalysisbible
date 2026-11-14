---
slug: fibonacci-pivot-points
name: Fibonacci Pivot Points
aka: [Fibonacci pivots, Fib pivots]
type: levels
states: [range]
weak_states: [trend]
purposes: [entry, exit]
inventor: Not attributed to one person
year: Unknown
default_settings: "Pivot = (High + Low + Close) / 3; levels at 38.2%, 61.8% and 100% of the previous range"
pairs_with: [pivot-points, previous-day-high-low, support-and-resistance, fibonacci-retracement]
related: [camarilla-pivots, woodie-pivots, demark-pivots, golden-ratio, round-numbers, range-trading]
compare: []
glossary: [range, retracement, timeframe, support]
wave: 2
reviewed: 14 November 2026
---

Fibonacci pivot points start with the standard pivot, the average of the previous high, low and close. They then place support and resistance levels at Fibonacci fractions (38.2%, 61.8% and 100%) of the previous range above and below that pivot. Day traders use them as possible turning points in range-bound sessions.

## At a glance

| | |
|---|---|
| Type | Calculated support and resistance levels |
| Best market states | Ranges |
| Weak in | Strong trending days |
| Best uses | Entry at S1/R1 to S2/R2 zones, exit at the opposite level |
| Inputs | Previous high, low, close |
| Levels | Pivot, R1 to R3, S1 to S3 |
| Origin | Not attributed to one person |

## What are Fibonacci pivot points?

[Standard pivot points](/pivot-points/) use the previous period's high, low and close to produce a central pivot and several levels above and below. In the standard version the spacing is based on simple arithmetic of the high and low. Fibonacci pivots keep the same central pivot but spread the other levels using Fibonacci ratios of the previous day's range.

The method is widely available on charting platforms, but no individual is clearly credited with it. The idea that Fibonacci ratios mark likely turning points is a trader-education concept and has no strong academic backing.

## Formula

Let H, L and C be the previous period's high, low and close. Range R = H - L.

- Pivot (P) = (H + L + C) / 3
- R1 = P + 0.382 x R
- R2 = P + 0.618 x R
- R3 = P + 1.000 x R
- S1 = P - 0.382 x R
- S2 = P - 0.618 x R
- S3 = P - 1.000 x R

Some platforms calculate the pivot differently or offer extra levels such as 1.618. Check the settings of your charting package.

**Worked example.** Previous high 110, low 100, close 104.
- R = 10
- P = (110 + 100 + 104) / 3 = **104.67**
- R1 = 104.67 + 3.82 = **108.49**
- R2 = 104.67 + 6.18 = **110.85**
- R3 = 104.67 + 10 = **114.67**
- S1 = 104.67 - 3.82 = **100.85**
- S2 = 104.67 - 6.18 = **98.49**
- S3 = 104.67 - 10 = **94.67**

## How to read it

**Pivot as a bias line.** Price trading above the pivot is read as a stronger session, below as weaker. This is the same use as with standard pivots.

**R1 and S1.** The first levels are the most commonly used. Price often reaches them in a normal day. Some traders fade a touch of R1 or S1 in a range, targeting the pivot.

**R2 and S2.** These are at 61.8% of the range from the pivot. A move to R2 or S2 is often seen as a stretched day.

**R3 and S3.** These are at a full range from the pivot. Reaching them suggests a strong, trending day, and fading them is risky.

**Reaction.** Look for a reversal candle or a stall at the level rather than entering as soon as price touches it.

## Best market states

**Ranges (best).** On a sideways day, price often rotates around the pivot and tests the first levels. The tool is built for this.

**Trends (weak).** On a strong trend day, price runs through R1 and R2 without stopping.

**Breakouts.** A move through R2 or S2 with volume can mark an expansion day. Fibonacci pivots are less often used for this than [Camarilla pivots](/camarilla-pivots/).

**Volatility.** The levels scale with the previous range, so after a narrow day they sit close together and after a wide one far apart. Both can distort their usefulness.

## Confirmation rules

| Check | What to look for |
|---|---|
| Session | Use the same session definition for the previous high, low and close |
| Reaction | A stall or reversal candle at the level |
| Overlap | The level is near another support or resistance |
| Context | Not on a clear trend day |
| Stop | Just beyond the next level |
| Open | Where price opens relative to the pivot |

## Common mistakes

- Treating every level as a trade. Most traders watch only the pivot, R1/S1 and R2/S2.
- Fading the levels on a trend day.
- Using different session closes from other traders, so the levels do not match.
- Assuming the Fibonacci ratios give the levels extra strength compared with standard pivots.
- Placing stops exactly at a level, where price often overshoots.
- Ignoring news or gaps that reset the day.

## Pairs well with

- **[Pivot points](/pivot-points/)**: compare Fibonacci levels with the standard ones for overlap.
- **[Previous day high and low](/previous-day-high-low/)**: another widely watched reference.
- **[Support and resistance](/support-and-resistance/)**: confirms levels with real swing points.
- **[Fibonacci retracement](/fibonacci-retracement/)**: a Fibonacci level from a swing near a pivot level makes confluence.

## Sources

- Kirkpatrick, Charles D. and Dahlquist, Julie R. (2010). *Technical Analysis: The Complete Resource for Financial Market Technicians*, 2nd edition. FT Press. (Covers standard pivot points.)
- Charting platform documentation for Fibonacci pivots (formulas vary slightly between platforms).

## FAQ

**How are Fibonacci pivot points calculated?**
Take the average of the previous high, low and close as the pivot. Then add or subtract 38.2%, 61.8% and 100% of the previous range to get the three resistance and three support levels.

**How are they different from standard pivot points?**
Both use the same inputs and often the same central pivot. The difference is the spacing of the other levels. Standard pivots use arithmetic of the high, low and pivot, while Fibonacci pivots use fixed fractions of the range.

**Which levels matter most?**
Most traders focus on the pivot, R1 and S1, then R2 and S2. R3 and S3 are far from the pivot and are reached mainly on strong trend days.

**Do Fibonacci pivots work better than other pivots?**
There is no reliable evidence for that. Many traders simply prefer how the levels are spaced. Test them on the market and time frame you trade rather than assuming they are better.

**Can I use them on weekly or monthly data?**
Yes. Use the previous week's or month's high, low and close in the same formulas. Longer-period levels are further apart and act more as broad reference zones.
