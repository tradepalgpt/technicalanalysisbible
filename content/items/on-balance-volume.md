---
slug: on-balance-volume
name: On-Balance Volume (OBV)
aka: [OBV]
type: volume
states: [trend, reversal]
weak_states: [range]
purposes: [confirmation]
inventor: Joseph Granville
year: 1963
default_settings: "No period; cumulative total, often with a 20-period moving average"
pairs_with: [volume, support-and-resistance, divergence, exponential-moving-average]
related: [accumulation-distribution, chaikin-money-flow, money-flow-index, price-volume-trend, force-index]
compare: [obv-vs-accumulation-distribution]
glossary: [divergence, momentum, confirmation, lagging-indicator, smoothing]
wave: 1
reviewed: 14 November 2026
---

On-Balance Volume (OBV) is a running total of volume that adds the day's volume when price closes higher and subtracts it when price closes lower. A rising OBV suggests volume is flowing into the market. Traders compare it with price to confirm trends and to spot divergence.

## At a glance

| | |
|---|---|
| Type | Volume indicator (cumulative) |
| Best market states | Trends, reversals |
| Weak in | Ranges, where OBV drifts without direction |
| Best uses | Confirmation |
| Default settings | No period; optional 20-period average for smoothing |
| Created by | Joseph Granville, 1963 |
| Leading or lagging | Mostly coincident; divergences can warn early |

## What is On-Balance Volume?

OBV tries to answer: is volume pushing with price or against it? It adds up volume on up days and subtracts it on down days. The raw OBV number has no meaning in itself. Only its direction and its relationship to price matter.

Joseph Granville introduced it in his 1963 book *Granville's New Key to Stock Market Profits*. His idea was that volume comes before price: a rise in OBV before price rises means smart money is building a position.

OBV treats the whole day's volume as belonging to one side, based only on the close compared with the previous close. That is crude. A day that closes up by a cent gets all of its volume counted as buying. This is why OBV is seen as a rough measure and is mostly used as a confirmation tool.

**Forex note.** Spot forex has only tick volume, the number of price changes, not exchange volume. OBV can be calculated on it, but the result is an approximation. See [tick volume](/tick-volume/).

## Formula

1. If today's close is higher than yesterday's close: OBV = previous OBV + today's volume
2. If today's close is lower than yesterday's close: OBV = previous OBV - today's volume
3. If the closes are equal: OBV = previous OBV

The starting value is arbitrary (often zero or the first day's volume), which is why the level does not matter.

**Worked example.** Starting OBV = 0.
Day 1: close up, volume 10,000 → OBV = 10,000
Day 2: close up, volume 5,000 → OBV = 15,000
Day 3: close down, volume 8,000 → OBV = 7,000
Day 4: close unchanged, volume 3,000 → OBV = **7,000**

## How to read it

**Trend confirmation.** If price makes a higher high and OBV also makes a higher high, volume supports the rise. If OBV fails to follow, the move is less convincing.

**Divergence.** Price makes a higher high while OBV makes a lower high (bearish divergence). Or price makes a lower low while OBV holds a higher low (bullish divergence). It suggests the move lacks volume support. See [divergence](/divergence/). It can persist for a long time before price turns.

**OBV breakouts.** OBV breaking above a prior high or through a trendline before price does is sometimes read as an early sign of a coming price breakout.

**Slope.** A steady rising OBV in a trend shows consistent buying volume; a flat OBV in a rising market shows volume not following.

**Smoothing.** A moving average on OBV helps remove day-to-day noise and gives crossover signals, though with lag.

## Best market states

**Trends (best).** OBV follows the cumulative volume behind a move and shows whether it is broad or thin.

**Reversals (good).** Divergence near a major level can warn a trend is tiring, as confirmation only.

**Ranges (weak).** In sideways markets OBV wanders up and down with no clear message, and false signals are common.

**Breakouts.** OBV can confirm a break, but a single large volume day can shift the line enough to look like a signal.

**Volatility.** A single spike day with huge volume moves OBV far, and the line may look changed for weeks. Gaps can also add a whole day of volume to one side.

## Settings

OBV has no look-back period. The choices are about how you view it.

| Choice | Effect |
|---|---|
| Raw line | The pure indicator; read by shape and divergence |
| 20-period average | Smooths the line and gives crossover signals; adds lag |
| Start date | Changes the absolute level, not the shape |

Because the level depends on where the chart starts, never compare OBV values between charts or platforms. Compare shape and direction only. Some platforms treat unchanged closes differently, so the lines can differ slightly.

## Common mistakes

- Comparing the OBV number itself between markets or start dates.
- Trading every divergence as a reversal signal.
- Using it in a sideways market where it carries little information.
- Forgetting that all volume on a day is credited to one side.
- Using tick volume on forex as if it were real volume.
- Ignoring that a single outlier volume day can distort the line.

## Pairs well with

- **[Volume](/volume/)**: reading the raw bars shows the spikes that move OBV.
- **[Support and resistance](/support-and-resistance/)**: OBV breaking out at a key level adds confirmation.
- **[Divergence](/divergence/)**: the main way OBV is used to flag a weakening trend.
- **[Exponential moving average](/exponential-moving-average/)**: gives trend direction to compare against the OBV signal.

## Sources

- Granville, Joseph E. (1963). *Granville's New Key to Stock Market Profits*. Prentice-Hall.
- Murphy, John J. (1999). *Technical Analysis of the Financial Markets*. New York Institute of Finance.
- Colby, Robert W. (2003). *The Encyclopedia of Technical Market Indicators*, 2nd edition. McGraw-Hill.

## FAQ

**What does On-Balance Volume tell you?**
It shows whether volume is flowing with price. A rising OBV with rising price suggests the move has volume behind it. A diverging OBV warns that the move is weakening. The absolute number has no meaning.

**What is a good OBV value?**
There is none. OBV is a running total whose starting point is arbitrary. Only the direction, shape and relation to price matter, not the number itself.

**Does OBV work in forex?**
Spot forex has no central volume, so charts use tick volume. OBV can be calculated on it and may still show useful shape, but it is an approximation. Futures volume is real exchange volume.

**Is OBV a leading indicator?**
Granville believed volume leads price, and OBV divergences can appear before turns. In practice it is built from past closes and volume, so treat it as confirmation. Many divergences do not lead to a turn.

**What is the difference between OBV and Accumulation/Distribution?**
OBV gives the whole day's volume to one side based on the close versus the previous close. Accumulation/Distribution weights volume by where the close sits within the day's range. See [OBV vs Accumulation/Distribution](/compare/obv-vs-accumulation-distribution/).
