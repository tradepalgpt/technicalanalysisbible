---
slug: chaikin-oscillator
name: Chaikin Oscillator
aka: [Chaikin A/D Oscillator, CO]
type: volume
states: [reversal]
weak_states: [range]
purposes: [confirmation]
inventor: Marc Chaikin
year: 1980s
default_settings: "3-period EMA minus 10-period EMA of the Accumulation/Distribution Line"
pairs_with: [accumulation-distribution, divergence, support-and-resistance, exponential-moving-average]
related: [chaikin-money-flow, on-balance-volume, money-flow-index, volume-oscillator, klinger-oscillator, twiggs-money-flow]
compare: []
glossary: [oscillator, momentum, divergence, smoothing, crossover]
wave: 3
reviewed: 14 November 2026
---

The Chaikin Oscillator is the MACD formula applied to the Accumulation/Distribution Line instead of to price. It subtracts a 10-period EMA of the line from a 3-period EMA of it. Traders use it to see whether buying or selling pressure is speeding up or slowing down, and to spot divergences from price.

## At a glance

| | |
|---|---|
| Type | Volume oscillator |
| Best market states | Reversal |
| Weak in | Ranges |
| Best uses | Confirmation |
| Default settings | 3 and 10 period EMAs of the Accumulation/Distribution Line |
| Created by | Marc Chaikin, 1980s |
| Leading or lagging | Mostly lagging, though it measures the speed of money flow rather than its level |

## What is the Chaikin Oscillator?

The [Accumulation/Distribution Line](/accumulation-distribution/) is a running total that adds or subtracts volume depending on where each bar closes within its range. It tells you whether volume has been flowing in or out over time. The Chaikin Oscillator asks a second question: is that flow accelerating or fading?

It does this the same way [MACD](/macd/) does for price. It takes a fast EMA and a slow EMA of the line and subtracts one from the other. When the fast average is above the slow one, recent money flow is stronger than the longer average. When it is below, flow has weakened.

It is credited to Marc Chaikin, who is also associated with [Chaikin Money Flow](/chaikin-money-flow/). The exact year of publication is not given consistently by sources, so it is described here only as the 1980s. Because the oscillator builds on a cumulative line, its values depend on the start date of your data, and only the shape and direction matter, not the absolute number.

## Formula

1. Money Flow Multiplier = ((Close - Low) - (High - Close)) / (High - Low)
2. Money Flow Volume = Money Flow Multiplier x Volume
3. Accumulation/Distribution Line (ADL) = previous ADL + Money Flow Volume
4. Chaikin Oscillator = 3-period EMA of ADL - 10-period EMA of ADL

If High equals Low, the multiplier is usually set to zero.

**Worked example.** A bar has High 52, Low 48, Close 51, volume 10,000.
Multiplier = ((51 - 48) - (52 - 51)) / (52 - 48) = (3 - 1) / 4 = 0.5
Money Flow Volume = 0.5 x 10,000 = **+5,000**, which is added to the ADL.
Now suppose, after several bars, the 3-period EMA of the ADL is 20,000 and the 10-period EMA is 17,000. The oscillator is 20,000 - 17,000 = **+3,000**, meaning recent money flow is stronger than its longer average.

Platform differences: some platforms define the multiplier slightly differently or use a simple average rather than an EMA. Volume is real volume in stocks and futures, but tick volume in spot forex, which is less reliable.

## How to read it

**Zero line.** Above zero means short-term money flow is stronger than the longer-term flow. Below zero means it is weaker. A cross of zero is the simplest signal, and it is often noisy.

**Divergence.** Price makes a new high while the oscillator makes a lower high, which suggests buying pressure is losing pace. Or price makes a new low while the oscillator holds a higher low. See [Divergence](/divergence/). This is the most common use, and it is a warning, not a timing signal.

**Direction of the line.** A rising oscillator shows accelerating buying pressure. A falling one shows accelerating selling pressure, or fading buying.

**Confirming a breakout.** Some traders want the oscillator above zero and rising when price breaks out upward, as a sign that volume-weighted pressure supports the move.

**Scale.** The values scale with the instrument's volume and with the ADL history, so there are no fixed overbought or oversold levels. Judge extremes against the indicator's own recent range.

## Best market states

**Reversals (best fit).** Divergences near key levels are the main reason traders look at this oscillator.

**Trends (mixed).** It can confirm that pressure is behind a trend, but the zero line flips often during pullbacks, so it is a poor trend filter.

**Ranges (weak).** The oscillator crosses zero repeatedly with little meaning.

**Breakouts (mixed).** It can support a breakout if it agrees, but a large single-bar volume spike can distort it.

**Volatility.** Wide bars with a close near the middle give small multipliers, so volatile but indecisive bars add little. Gaps are not captured well, since the formula uses only the current bar's range.

## Settings

| Setting | Periods (fast, slow) | What it does |
|---|---|---|
| Faster | 2 and 6 | More crossovers, more noise |
| Default | 3 and 10 | Standard published setting |
| Slower | 5 and 20 or more | Smoother, slower to react |

The ratio between the fast and slow periods matters as much as the numbers. Test changes on the market and time frame you trade.

## Common mistakes

- Treating a zero-line cross as a buy or sell signal by itself.
- Reading the absolute value instead of the direction and the divergences.
- Using it on spot forex tick volume and treating it as true volume.
- Forgetting that a cumulative line depends on where the data starts.
- Ignoring that the formula looks only at where a bar closes in its own range, not at gaps from the previous close.
- Trading every divergence rather than waiting for a price signal.

## Pairs well with

- **[Accumulation/Distribution Line](/accumulation-distribution/)**: the line the oscillator is built from; viewing both shows level and speed.
- **[Divergence](/divergence/)**: the main way this oscillator is read.
- **[Support and resistance](/support-and-resistance/)**: a divergence at a known level is more meaningful.
- **[Exponential moving average](/exponential-moving-average/)**: a trend filter to decide which signals to take.

## Sources

- Achelis, Steven B. (2000). *Technical Analysis from A to Z*, 2nd edition. McGraw-Hill. (Reference entry on the Chaikin Oscillator.)
- Murphy, John J. (1999). *Technical Analysis of the Financial Markets*. New York Institute of Finance. (Background on volume and divergence.)

## FAQ

**What is the Chaikin Oscillator used for?**
It shows whether buying or selling pressure, as measured by the Accumulation/Distribution Line, is speeding up or slowing down. Traders mainly use it to spot divergences from price and to check that volume pressure agrees with a move.

**How is it different from Chaikin Money Flow?**
Chaikin Money Flow sums money flow volume over a window and divides by total volume, giving a bounded value. The Chaikin Oscillator is a MACD-style difference of two averages of a cumulative line, so it measures the change in flow and has no fixed bounds.

**What is the default Chaikin Oscillator setting?**
The usual setting is a 3-period EMA minus a 10-period EMA of the Accumulation/Distribution Line. Some platforms let you change both periods, and a few use different average types.

**Is the Chaikin Oscillator leading or lagging?**
It is built from moving averages of a cumulative line, so it lags. Divergence can give early warning of a turn, but it can also persist for a long time without a reversal.

**Does it work on forex?**
Only with caution. Spot forex has no central volume, so charts use tick volume, which counts price changes rather than traded size. Futures with real volume suit it better.
