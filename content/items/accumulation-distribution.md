---
slug: accumulation-distribution
name: Accumulation/Distribution Line
aka: [A/D Line, ADL, Accumulation Distribution Index]
type: volume
states: [trend, reversal]
weak_states: [range]
purposes: [confirmation]
inventor: Marc Chaikin (commonly attributed)
year: 1980s
default_settings: "No settings; a running total of money flow volume"
pairs_with: [on-balance-volume, divergence, volume, chaikin-money-flow]
related: [chaikin-money-flow, chaikin-oscillator, on-balance-volume, money-flow-index, williams-accumulation-distribution, twiggs-money-flow]
compare: [obv-vs-accumulation-distribution]
glossary: [divergence, momentum, trend]
wave: 2
reviewed: 14 November 2026
---

The Accumulation/Distribution Line (A/D Line) is a volume indicator that adds or subtracts a share of each bar's volume depending on where the close sits inside the bar's high-low range. A rising line suggests buying pressure; a falling line suggests selling pressure. Traders use it to confirm trends and to spot divergences between volume flow and price.

## At a glance

| | |
|---|---|
| Type | Volume indicator (cumulative) |
| Best market states | Trend, reversal |
| Weak in | Ranges, and markets with frequent gaps |
| Best uses | Confirmation |
| Default settings | None. It is a running total |
| Created by | Commonly attributed to Marc Chaikin, 1980s |
| Leading or lagging | Mostly confirming; divergences can warn early |

## What is the Accumulation/Distribution Line?

Accumulation means buyers are quietly taking positions. Distribution means holders are selling into strength. The A/D Line tries to measure which is happening by asking a simple question for every bar: did the close finish near the top of the range, near the bottom, or in the middle?

If a bar closes near its high, most of that bar's volume is counted as buying. If it closes near its low, most is counted as selling. The result is added to a running total, so the line rises when closes keep finishing high in their ranges and falls when they finish low.

It is often compared with [On-Balance Volume](/on-balance-volume/). OBV counts a bar's whole volume as up or down based on the close versus the previous close. The A/D Line splits volume by the close's position within the bar. The two can disagree, which is why traders sometimes look at both. See [OBV vs Accumulation/Distribution](/compare/obv-vs-accumulation-distribution/).

The origin is usually credited to Marc Chaikin, who also created [Chaikin Money Flow](/chaikin-money-flow/) and the [Chaikin Oscillator](/chaikin-oscillator/), both built on this line. The exact date is not well documented, so treat "1980s" as approximate.

## Formula

1. Money Flow Multiplier (also called Close Location Value, CLV):
   CLV = ((Close - Low) - (High - Close)) / (High - Low)
2. Money Flow Volume = CLV x Volume
3. A/D Line = previous A/D Line + Money Flow Volume

CLV runs from -1 (close at the low) to +1 (close at the high). If High equals Low, most platforms set CLV to 0 to avoid dividing by zero.

**Worked example.** A bar has a high of 12, a low of 10, a close of 11.5 and a volume of 2,000.
CLV = ((11.5 - 10) - (12 - 11.5)) / (12 - 10) = (1.5 - 0.5) / 2 = 0.5
Money Flow Volume = 0.5 x 2,000 = **+1,000**
If the line stood at 5,000, it now stands at 6,000.

The starting value is arbitrary, so the absolute level means nothing. Only the direction and shape of the line matter.

## How to read it

**Trend confirmation.** If price makes higher highs and the A/D Line also makes higher highs, volume flow supports the move. If both fall together, the downtrend is confirmed.

**Divergence.** Price makes a new high but the A/D Line fails to, or price makes a new low but the line holds higher. This suggests the move is not backed by the same volume pressure. It is a warning, not a timing signal, and can persist for a long time. See [Divergence](/divergence/).

**Trendline and breakout use.** Some traders draw trendlines on the line itself. A break of the A/D trendline before price breaks is read as an early clue.

**Slope.** A steep rise suggests persistent closes near highs on solid volume; a flat line suggests balance.

**Limits of the method.** The line ignores gaps. A bar that gaps up and closes mid-range counts as neutral even though buyers clearly won the opening. It also treats the whole day's volume as one lump, which is crude.

## Best market states

**Trends (good).** In a clean trend, the line should move with price. Disagreement is useful information.

**Reversals (good, with care).** Divergences near major levels are the most common use. They need a price signal to be actionable.

**Ranges (weak).** In a sideways market the line wanders and gives little. Small differences in close position create noise.

**Breakouts (mixed).** A breakout with a sharply rising line adds weight, but the indicator is too slow to rely on alone.

**Volatility.** Wide-ranging bars make the closing position more erratic, so the line can swing.

## Settings

The A/D Line has no period setting. Platform differences are small:

| Item | Variation |
|---|---|
| Volume source | Tick volume in forex, real volume in stocks and futures |
| Zero range bars | Treated as zero flow on most platforms |
| Start point | Depends on how much history is loaded, so absolute values differ between platforms |

Because the value depends on the start point, compare shapes and slopes, never raw numbers across charts.

## Common mistakes

- Reading the absolute value of the line. It is arbitrary.
- Treating every divergence as a signal. Many resolve without a turn.
- Ignoring gaps, which the formula does not capture.
- Using it on a market with unreliable volume, such as spot forex, without knowing it relies on tick counts.
- Comparing lines from different platforms or start dates.
- Using it alone, with no look at price structure.

## Pairs well with

- **[On-Balance Volume](/on-balance-volume/)**: a second view of volume flow; agreement adds confidence.
- **[Divergence](/divergence/)**: the main way the line is used in practice.
- **[Volume](/volume/)**: raw volume shows whether the move has participation.
- **[Chaikin Money Flow](/chaikin-money-flow/)**: a bounded, windowed version that is easier to read for overbought or oversold style judgements.

## Sources

- Murphy, John J. (1999). *Technical Analysis of the Financial Markets*. New York Institute of Finance.
- Colby, Robert W. (2003). *The Encyclopedia of Technical Market Indicators*, 2nd edition. McGraw-Hill.
- Kirkpatrick, Charles D. and Dahlquist, Julie R. (2006). *Technical Analysis: The Complete Resource for Financial Market Technicians*. FT Press.

## FAQ

**What does a rising Accumulation/Distribution Line mean?**
It means closes have been landing in the upper part of bars' ranges, weighted by volume. This is read as buying pressure. It does not prove that large investors are buying, only that the close position and volume point that way.

**How is the A/D Line different from OBV?**
OBV adds or subtracts the entire volume depending on whether the close was up or down versus the prior close. The A/D Line adds a fraction of volume based on where the close sits within the bar. They often agree but can differ, especially after gaps.

**Is the A/D Line leading or lagging?**
It is built from past bars, so it lags. Divergences can hint at changes before price turns, which is why some call it leading. Treat it as confirmation rather than a forecast.

**What are the best settings for the A/D Line?**
It has no settings. The choices are the time frame and the volume source. Higher time frames give fewer, cleaner readings. In forex, remember volume is usually tick count, not traded amount.

**Why does the A/D Line look different on two platforms?**
The running total depends on where the calculation starts. Different amounts of loaded history give different absolute values, though the shape should be the same. Differences in volume data can also change the result.
