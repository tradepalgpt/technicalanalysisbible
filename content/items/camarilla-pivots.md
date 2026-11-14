---
slug: camarilla-pivots
name: Camarilla Pivot Points
aka: [Camarilla pivots, Camarilla equation]
type: levels
states: [range, breakout]
weak_states: [trend]
purposes: [entry, exit]
inventor: Nick Scott
year: 1989
default_settings: "Previous period high, low, close; multiplier 1.1; levels H1 to H4 and L1 to L4"
pairs_with: [pivot-points, previous-day-high-low, support-and-resistance, volume]
related: [fibonacci-pivot-points, woodie-pivots, demark-pivots, round-numbers, range-trading, breakout-trading]
compare: []
glossary: [range, breakout, mean-reversion, timeframe]
wave: 2
reviewed: 14 November 2026
---

Camarilla pivot points are a set of eight price levels calculated from the previous period's high, low and close. Four sit above the close (H1 to H4) and four below (L1 to L4). The levels are packed close to the close, so traders use H3 and L3 for range trades and H4 and L4 as breakout triggers.

## At a glance

| | |
|---|---|
| Type | Calculated support and resistance levels |
| Best market states | Ranges and the break out of a range |
| Weak in | Strong trending days |
| Best uses | Entry at H3 / L3, breakout at H4 / L4, exit at the opposite level |
| Inputs | Previous high, low, close |
| Created by | Nick Scott, reported to date from 1989 |
| Evidence | Trader-education concept with little academic testing |

## What are Camarilla pivot points?

Camarilla pivots are a variant of [standard pivot points](/pivot-points/). Both use the previous day's high, low and close. The difference is how the levels are spread. Camarilla levels are tighter, and the key ones are placed close to the previous close, based on the idea that price tends to revert toward the close.

Nick Scott is generally credited with the method. Sources agree on the credit but are less clear on the details of its origin, so the year should be seen as approximate.

The levels are often called H1 to H4 and L1 to L4. H3 and L3 are often called the "reversal" levels, while H4 and L4 are called the "breakout" levels.

## Formula

Let the previous period have high H, low L and close C. The range is R = H - L.

| Level | Formula |
|---|---|
| H4 | C + R x 1.1 / 2 |
| H3 | C + R x 1.1 / 4 |
| H2 | C + R x 1.1 / 6 |
| H1 | C + R x 1.1 / 12 |
| L1 | C - R x 1.1 / 12 |
| L2 | C - R x 1.1 / 6 |
| L3 | C - R x 1.1 / 4 |
| L4 | C - R x 1.1 / 2 |

These are the widely published values. Some platforms also draw H5 and L5, and some use different multipliers, so check the settings of the tool you use.

**Worked example.** Yesterday's high was 110, low 100 and close 106. So R = 10 and R x 1.1 = 11.
- H3 = 106 + 11 / 4 = **108.75**
- H4 = 106 + 11 / 2 = **111.5**
- L3 = 106 - 2.75 = **103.25**
- L4 = 106 - 5.5 = **100.5**

## How to read it

**Range reversal (H3 and L3).** If price rises to H3 and stalls, traders may look for a short back toward the middle. If it falls to L3 and stalls, they may look for a long. The stop is often placed just beyond H4 or L4.

**Breakout (H4 and L4).** A move through H4 is read as a possible breakout upward, and through L4 as a breakout downward. If a short fade at H3 fails and price crosses H4, the trader exits and may switch direction.

**Inside the H3 to L3 zone.** If price stays between H3 and L3, the day is often treated as a range day.

**Targets.** In a range trade, the opposite level (for example L3 after shorting at H3) or the pivot area is a typical target.

**Gaps.** If the market opens beyond H4 or L4, the levels may be of little use that day.

## Best market states

**Ranges (best).** The tight spacing is built for fading price at H3 and L3 in a market that is oscillating.

**Breakouts (good).** H4 and L4 are meant to mark the point where a range has broken.

**Trends (weak).** In a strong trend price may break H4 or L4 early and keep going, so repeated fades at H3 or L3 can lose money.

**Volatility.** The levels scale with the previous range. After a very quiet day they sit close together and are easily crossed; after a wide day they may be too far to matter.

## Confirmation rules

| Check | What to look for |
|---|---|
| Inputs | Use the same session definition each day (for example, same close time) |
| Reaction | A reversal candle or stall at H3 / L3 before acting |
| Breakout | A close or sustained hold beyond H4 / L4, ideally with volume |
| Alignment | Levels near other support or resistance carry more weight |
| Stop | Just beyond H4 / L4 for range trades |
| Open | Check where price opens relative to the levels |

## Common mistakes

- Fading H3 or L3 on a day that is clearly trending.
- Using the wrong session for the inputs, so the levels differ from other traders.
- Treating the levels as exact. Price often overshoots by a few ticks.
- Ignoring the breakout rule and holding a range trade through H4 or L4.
- Assuming the 1.1 multiplier is universal across platforms.
- Using them on very short time frames where the daily levels are far away.

## Pairs well with

- **[Pivot points](/pivot-points/)**: the standard version gives a central pivot to compare against.
- **[Previous day high and low](/previous-day-high-low/)**: raw reference levels near H4 and L4.
- **[Support and resistance](/support-and-resistance/)**: confirms whether a Camarilla level matches a real level.
- **[Volume](/volume/)**: supports a breakout at H4 or L4.

## Sources

- Kirkpatrick, Charles D. and Dahlquist, Julie R. (2010). *Technical Analysis: The Complete Resource for Financial Market Technicians*, 2nd edition. FT Press. (Covers standard pivot points; Camarilla is less commonly published in books.)
- Charting platform documentation for Camarilla pivots (formulas vary slightly between platforms).

## FAQ

**What are Camarilla pivot levels?**
They are eight levels, H1 to H4 above the previous close and L1 to L4 below it, calculated from the previous high, low and close. They are tighter than standard pivots, so price often reaches them in a normal day.

**What are H3 and L3 used for?**
H3 and L3 are the main range levels. Traders look for price to turn back at them. If price instead pushes through H4 or L4, the range trade is considered wrong and a breakout may be under way.

**Are Camarilla pivots better than standard pivots?**
Not shown. They suit range trading because the levels are close to the close, but there is little independent testing of either. Which is better depends on how you trade and the market.

**Which time frame should I use for Camarilla pivots?**
Most traders calculate them from the previous day and use them on intraday charts. Weekly and monthly versions exist for longer-term traders. Choose one and apply it consistently.

**Do the formulas differ between platforms?**
Yes, slightly. Some use a 1.1 multiplier with divisors of 12, 6, 4 and 2, and some add H5 and L5. Check your platform's documentation before comparing levels with other traders.
