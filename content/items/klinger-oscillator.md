---
slug: klinger-oscillator
name: Klinger Oscillator
aka: [Klinger Volume Oscillator, KVO]
type: volume
states: [trend, reversal]
weak_states: [range]
purposes: [confirmation]
inventor: Stephen J. Klinger
year: Unknown
default_settings: "34 and 55 period EMAs of volume force; 13-period EMA signal line"
pairs_with: [on-balance-volume, divergence, exponential-moving-average, support-and-resistance]
related: [chaikin-oscillator, volume-oscillator, accumulation-distribution, chaikin-money-flow, force-index, money-flow-index]
compare: []
glossary: [oscillator, divergence, smoothing, signal-line, crossover]
wave: 3
reviewed: 14 November 2026
---

The Klinger Oscillator is a volume oscillator that tries to show long-term money flow while still reacting to short-term swings. It builds a "volume force" for each bar, then subtracts a 55-period EMA of it from a 34-period EMA, and adds a 13-period signal line. Traders use it for confirmation and divergence.

## At a glance

| | |
|---|---|
| Type | Volume oscillator |
| Best market states | Trend, reversal |
| Weak in | Ranges |
| Best uses | Confirmation |
| Default settings | 34 / 55 EMAs, 13-period signal line |
| Created by | Stephen J. Klinger (year not given consistently by sources) |
| Leading or lagging | Lagging; divergences can warn earlier |

## What is the Klinger Oscillator?

Many volume indicators either react too fast and give noise, or smooth so much that they lag. Stephen Klinger designed this one to compare the force of volume over a short window with its force over a longer window, so that it can show the longer money-flow trend while still turning on shorter swings.

It starts with a measure of trend direction for each bar, based on whether the sum of the high, low and close has risen or fallen. It then builds a volume force that scales volume by how large the day's range is compared with a running total of ranges. That way, a heavy-volume bar in a trending move counts for more than the same volume in a choppy one.

The result is plotted as two lines: the oscillator itself and a signal line. The oscillator is not bounded, and its scale depends on the instrument's volume. The idea is credited to Klinger, but sources do not agree on a single clear publication date, so none is stated here. Because the calculation has several moving parts, different platforms implement it with slight variations.

## Formula

The usual version follows these steps.

1. Trend = +1 if (High + Low + Close) today is greater than yesterday's, otherwise -1.
2. dm = High - Low
3. cm = running measure of range. If the trend is the same as yesterday, cm = previous cm + dm. If the trend has changed, cm = previous dm + dm.
4. Volume Force (VF) = Volume x |2 x (dm / cm) - 1| x Trend x 100
5. KVO = 34-period EMA of VF - 55-period EMA of VF
6. Signal line = 13-period EMA of KVO

**Worked example (one bar, small numbers).** Suppose trend is +1, dm = 2, cm = 4 and Volume = 1,000.
2 x (2 / 4) - 1 = 0, so VF = 1,000 x 0 x 1 x 100 = **0**.
Now suppose dm = 3 and cm = 4 instead. 2 x (3 / 4) - 1 = 0.5, so VF = 1,000 x 0.5 x 1 x 100 = **50,000**.
The bar with the larger range relative to the running total counts for more.
The oscillator is then the difference between the two EMAs of this series. If the 34-period average of VF is 12,000 and the 55-period is 9,000, KVO = **+3,000**.

Platform differences: the cm and VF steps are implemented slightly differently in some packages, and the scaling factor may vary. Compare the line shape, not the absolute numbers.

## How to read it

**Zero line.** KVO above zero says short-term volume force is stronger than long-term, which fits buying pressure. Below zero fits selling pressure. A cross of zero is a slow confirmation.

**Signal line crossover.** KVO crossing above its 13-period signal line is read as a pick-up in buying force. A cross below is a pick-up in selling force. Crossovers happen often and many of them are noise.

**Divergence.** Price makes a new high but KVO makes a lower high, or price makes a new low but KVO holds higher. This is the use most traders value. See [Divergence](/divergence/). It is a warning, not a timing signal.

**Trend confirmation.** An uptrend where KVO stays mostly above zero is better supported by volume than one where KVO drifts negative.

**Scale.** The values depend on the instrument, so there are no fixed overbought or oversold levels. Judge against recent history.

## Best market states

**Trends (good).** The indicator is aimed at long-term money-flow direction, so it works best to confirm that a trend has volume behind it.

**Reversals (good, with care).** Divergence at major levels draws attention, though it is a hint only.

**Ranges (weak).** In sideways trading the oscillator crosses zero and the signal line repeatedly, with little useful meaning.

**Breakouts (mixed).** It may rise on a breakout, but the long averages respond slowly, so the signal can come after the move.

**Volatility.** Because the formula scales volume by range, large-range bars can swing it strongly.

## Settings

| Setting | Values | What it does |
|---|---|---|
| Faster | 13 / 34, signal 9 | More crossovers, more noise |
| Default | 34 / 55, signal 13 | The usual published setting |
| Slower | 55 / 89 or more | Smoother, slower, fewer signals |

These lengths are Fibonacci numbers, which is a convention of the design rather than a proven advantage. Test changes on the market and time frame you trade, and avoid fitting the numbers to past data.

## Common mistakes

- Trading every signal-line crossover without a trend filter.
- Reading the absolute value instead of direction and divergence.
- Using tick volume in spot forex as if it were traded volume.
- Comparing values between platforms that implement the cm step differently.
- Treating a zero-line cross as a stand-alone buy or sell.
- Ignoring price structure and relying on the oscillator alone.

## Pairs well with

- **[On-Balance Volume](/on-balance-volume/)**: a simpler cumulative volume line; agreement between the two strengthens a reading.
- **[Divergence](/divergence/)**: the main way this oscillator is used.
- **[Exponential moving average](/exponential-moving-average/)**: a trend filter to decide which crossovers to act on.
- **[Support and resistance](/support-and-resistance/)**: a divergence at a known level is more meaningful.

## Sources

- Achelis, Steven B. (2000). *Technical Analysis from A to Z*, 2nd edition. McGraw-Hill. (Reference entry on the Klinger Volume Oscillator.)
- Murphy, John J. (1999). *Technical Analysis of the Financial Markets*. New York Institute of Finance. (Background on volume and divergence.)

## FAQ

**What does the Klinger Oscillator show?**
It compares short-term and long-term volume force, adjusted for trend direction and the size of each bar's range. The aim is to show money flow over the longer run while still turning on shorter swings.

**What are the default Klinger settings?**
The usual setting is a 34-period EMA minus a 55-period EMA of volume force, with a 13-period EMA signal line. Some platforms allow different lengths, and a few differ in the internal calculation.

**How do I use Klinger divergence?**
Look for price making a new high while the oscillator makes a lower high, or a new low while the oscillator holds higher. Treat it as a warning and wait for a price signal at a known level before acting.

**Is the Klinger Oscillator better than OBV?**
Neither is better in general. OBV is simpler and cumulative. Klinger adds range, trend direction and two smoothing lengths, which gives more detail but more parts to go wrong. Many traders look at both.

**Does it work on forex?**
It can be plotted, but spot forex has no central volume, so the output depends on tick volume. Futures and listed stocks, which have real volume, suit it better.
