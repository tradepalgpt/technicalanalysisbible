---
slug: williams-accumulation-distribution
name: Williams Accumulation/Distribution
aka: [Williams A/D, WAD, Williams AD]
type: volume
states: [reversal]
weak_states: [range]
purposes: [confirmation]
inventor: Larry Williams
year: 1970s
default_settings: "No settings; a running total of daily values"
pairs_with: [divergence, accumulation-distribution, support-and-resistance, trendline]
related: [accumulation-distribution, chaikin-money-flow, twiggs-money-flow, on-balance-volume, williams-r, advance-decline-line]
compare: []
glossary: [divergence, accumulation, distribution, true-range]
wave: 3
reviewed: 14 November 2026
---

Williams Accumulation/Distribution is a running total that adds a bar's gain or loss measured from its true low or true high, depending on whether price closed up or down. Despite the name, it uses no volume. Traders compare the line with price and look for divergence, where price makes a new extreme but the line does not.

## At a glance

| | |
|---|---|
| Type | Cumulative price-based accumulation/distribution line (no volume) |
| Best market states | Reversal |
| Weak in | Sideways ranges, where the line drifts without direction |
| Best uses | Confirmation, divergence warnings |
| Default settings | None; the value is a running total |
| Created by | Larry Williams, described as dating from the 1970s |
| Leading or lagging | Mostly lagging, though divergences can warn early |

## What is Williams Accumulation/Distribution?

Larry Williams, a trader known for the Williams %R oscillator, designed this line to measure whether a market is being accumulated (bought) or distributed (sold). The key difference from the more common [Accumulation/Distribution line](/accumulation-distribution/) is that Williams' version uses price only. It ignores volume.

The logic is simple. If today closes higher than yesterday, the day is treated as buying pressure, and the amount counted is how far the close sits above the true low. If today closes lower, it is treated as selling pressure, and the amount counted is how far the close sits below the true high. If the close is unchanged, nothing is added.

The true high and true low include the previous close, so gaps are counted. Because there is no volume, the indicator works on markets that have no reliable volume data, such as spot currencies, although it then has nothing to say about participation.

The indicator is a trader-education tool without a strong academic evidence base.

## Formula

For each bar:

- True range high (TRH) = the higher of today's high and yesterday's close.
- True range low (TRL) = the lower of today's low and yesterday's close.

Then:

1. If today's close is above yesterday's close: A/D = close - TRL.
2. If today's close is below yesterday's close: A/D = close - TRH. This value is negative.
3. If the closes are equal: A/D = 0.
4. Williams A/D = previous total + today's A/D.

**Worked example.** Yesterday closed at 50. Today's high is 53, low is 49 and close is 52.
Close is above yesterday's close, so use the true low.
TRL = lower of 49 and 50 = 49.
A/D = 52 - 49 = **+3**
If the running total was 20, it becomes 23.

Next day: high 52, low 47, close 48 (below 52).
TRH = higher of 52 and 52 = 52.
A/D = 48 - 52 = **-4**. The total falls from 23 to 19.

The starting point of the running total is arbitrary, so only the shape of the line matters, not its absolute level. Platforms may differ slightly in how they handle the first bar.

## How to read it

**Direction of the line.** A rising line suggests accumulation. A falling line suggests distribution. Compare the slope with price.

**Confirmation.** If price makes a new high and the line also makes a new high, the move is said to be confirmed. If price makes a new high but the line does not, the rally may be weak.

**Divergence.** This is the main use. Price makes a higher high while the line makes a lower high (bearish divergence). Or price makes a lower low while the line makes a higher low (bullish divergence). Williams described divergence as the key signal from the line. See [divergence](/divergence/).

**Trendline breaks.** Traders sometimes draw a [trendline](/trendline/) on the indicator and watch for a break before price breaks.

**No fixed levels.** Because it is a running total, there are no overbought or oversold levels. Only the slope and the relationship to price matter.

## Best market states

**Reversal (best).** The indicator is mainly used to look for divergences near the end of a move, when price and the line may stop agreeing.

**Trend (fair).** In a trend, the line usually rises or falls with price, which adds little new information.

**Range (weak).** The line wanders without direction, and any divergence is hard to interpret.

**Breakout.** The line can show whether the close consistently held above the true low as price pushed out of a range, but it carries no volume information.

**Volatility.** Large gaps and wide bars can create big jumps in the running total.

## Confirmation rules

| Check | What to look for |
|---|---|
| Prior move | A clear trend or swing before the divergence |
| Divergence | Price extreme not matched by the line |
| Price signal | A break of structure or trendline in price, not only in the indicator |
| Level | Divergence near a known support or resistance level is more meaningful |
| Patience | Divergences can persist, so wait for price to confirm the turn |
| Stop | Placed on the chart, beyond the swing that would show the idea is wrong |

## Common mistakes

- Assuming it uses volume. It does not, unlike the standard Accumulation/Distribution line.
- Treating every divergence as a turning point. Divergences can run for a long time.
- Trying to find fixed levels on a cumulative line.
- Comparing the absolute value across charts or starting dates.
- Using it in sideways markets and over-reading small wobbles.
- Confusing it with Williams %R, which is a different, bounded oscillator.

## Pairs well with

- **[Divergence](/divergence/)**: the technique the indicator is mainly used for.
- **[Accumulation/Distribution](/accumulation-distribution/)**: the volume-based cousin; a difference between the two shows whether volume or price location drives the signal.
- **[Support and resistance](/support-and-resistance/)**: a divergence at a known level is more meaningful than one in open space.
- **[Trendline](/trendline/)**: trendline breaks on price or on the line itself can time the turn.

## Sources

- Colby, Robert W. (2003). *The Encyclopedia of Technical Market Indicators*, 2nd edition. McGraw-Hill.
- Murphy, John J. (1999). *Technical Analysis of the Financial Markets*. New York Institute of Finance.

## FAQ

**Does Williams Accumulation/Distribution use volume?**
No. It uses only price, measuring the close against the true high or true low. This is the main difference from the standard Accumulation/Distribution line, which multiplies by volume. That also makes it usable on markets without reliable volume.

**What is the Williams A/D formula?**
If the close is above the previous close, add close minus the true low. If it is below, add close minus the true high, which gives a negative number. If unchanged, add nothing. The running total is the line.

**How do you use Williams A/D?**
Mostly for divergence. If price makes a new high but the line does not, buying may be weakening. If price makes a new low but the line does not, selling may be weakening. Wait for price to confirm before acting.

**Is Williams A/D the same as Williams %R?**
No. Williams %R is a bounded momentum oscillator showing where the close sits within a recent range. Williams A/D is an unbounded running total with no settings. Both are credited to Larry Williams, which causes confusion.

**What is the best setting for Williams A/D?**
It has no setting, because it is a running total. The only choices are the chart time frame and how far back you look when comparing the line with price.
