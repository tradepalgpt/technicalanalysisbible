---
slug: chaikin-money-flow
name: Chaikin Money Flow (CMF)
aka: [CMF, Chaikin Money Flow Indicator]
type: volume
states: [trend, reversal]
weak_states: [range]
purposes: [confirmation]
inventor: Marc Chaikin
year: 1980s
default_settings: "20 or 21 periods; zero line"
pairs_with: [accumulation-distribution, on-balance-volume, exponential-moving-average, divergence]
related: [accumulation-distribution, chaikin-oscillator, money-flow-index, twiggs-money-flow, on-balance-volume, klinger-oscillator]
compare: []
glossary: [oscillator, divergence, momentum]
wave: 2
reviewed: 14 November 2026
---

Chaikin Money Flow (CMF) measures buying and selling pressure over a fixed window by comparing where bars close inside their range, weighted by volume. It oscillates around zero, usually between about -1 and +1. Positive readings suggest buying pressure; negative readings suggest selling pressure. Traders use it to confirm trends and spot divergences.

## At a glance

| | |
|---|---|
| Type | Volume oscillator |
| Best market states | Trend, reversal |
| Weak in | Ranges |
| Best uses | Confirmation |
| Default settings | 20 or 21 periods (platforms differ); zero line |
| Created by | Marc Chaikin, 1980s (approximate) |
| Leading or lagging | Mostly lagging; divergences can warn early |

## What is Chaikin Money Flow?

CMF is a windowed relative of the [Accumulation/Distribution Line](/accumulation-distribution/). The A/D Line is a running total that grows forever. CMF takes the same money flow calculation but sums it over only the last N bars and divides by the total volume in those bars. That makes it a bounded oscillator that moves around zero, which is easier to read at a glance.

The idea is the same: a bar that closes near its high is counted as buying, a bar that closes near its low as selling, and the volume decides how much each bar counts. Marc Chaikin is credited as the creator. The exact year is not well documented, so "1980s" is approximate.

CMF is often used as a quick check on whether volume supports a trend. If price is rising but CMF is below zero, buying pressure is not showing up in the closes.

## Formula

1. Money Flow Multiplier = ((Close - Low) - (High - Close)) / (High - Low)
2. Money Flow Volume = Multiplier x Volume
3. CMF(n) = Sum of Money Flow Volume over n bars / Sum of Volume over n bars

Chaikin's original window is usually given as 21 periods. Many platforms default to 20. The difference is small.

**Worked example.** Use a 3-bar window to keep the numbers small.

| Bar | Multiplier | Volume | Money Flow Volume |
|---|---|---|---|
| 1 | +0.5 | 1,000 | +500 |
| 2 | -0.2 | 2,000 | -400 |
| 3 | +0.6 | 1,000 | +600 |

Sum of money flow volume = 500 - 400 + 600 = 700. Sum of volume = 4,000.
CMF = 700 / 4,000 = **+0.175**

If a bar has High equal to Low, platforms normally set its multiplier to 0.

## How to read it

**Above or below zero.** Above zero means buying pressure over the window; below zero means selling pressure. A reading that stays above zero during a rising price is a sign of supported trend.

**Magnitude.** Values near +0.25 or above, or -0.25 or below, are often called strong. These are rules of thumb, not fixed thresholds, and they vary by market.

**Zero-line crosses.** A cross from below to above zero is sometimes used as a bullish signal. These crosses are frequent in choppy markets and give many false signals.

**Divergence.** Price makes a new high while CMF makes a lower high (bearish), or price makes a lower low while CMF makes a higher low (bullish). It is a warning, not a timing signal. See [Divergence](/divergence/).

**Persistent readings.** A long stretch of positive CMF during a pullback suggests the dip is being bought.

## Best market states

**Trends (good).** CMF helps check that the trend has volume pressure behind it.

**Reversals (good, with care).** Divergences near key levels are the most common use, but need a price signal.

**Ranges (weak).** CMF oscillates around zero without a clear meaning, producing many empty crosses.

**Breakouts (mixed).** A breakout with CMF jumping well above zero adds some weight, but one bar can distort a short window.

**Volatility.** Big bars with large volume can dominate the window and cause sudden jumps.

## Settings

| Setting | Period | What it does |
|---|---|---|
| Short | 10 to 14 | Reacts quickly, more noise |
| Default | 20 or 21 | Common balance |
| Long | 30 to 50 | Smoother, slower, fewer zero crosses |

A longer window reduces zero-line whipsaws but lags more. Whatever period you use, test it on the market and time frame you actually trade.

Platform difference: some platforms use 20, others 21, and a few offer a smoothed variant. In spot forex the volume is typically tick volume, which is a count of price changes rather than traded amount.

## Common mistakes

- Treating every zero-line cross as a signal.
- Using fixed thresholds such as +0.25 as if they were exact. They are rules of thumb.
- Trusting it on instruments with poor volume data.
- Ignoring that one huge-volume bar can dominate a short window.
- Ignoring gaps, which the formula does not capture.
- Using it alone without price structure.

## Pairs well with

- **[Accumulation/Distribution Line](/accumulation-distribution/)**: the long-run version of the same idea, useful for seeing the bigger picture.
- **[On-Balance Volume](/on-balance-volume/)**: a differently built volume measure; agreement is useful.
- **[Exponential moving average](/exponential-moving-average/)**: gives the trend direction so you read CMF in context.
- **[Divergence](/divergence/)**: the main pattern traders look for in CMF.

## Sources

- Colby, Robert W. (2003). *The Encyclopedia of Technical Market Indicators*, 2nd edition. McGraw-Hill.
- Murphy, John J. (1999). *Technical Analysis of the Financial Markets*. New York Institute of Finance.
- Kirkpatrick, Charles D. and Dahlquist, Julie R. (2006). *Technical Analysis: The Complete Resource for Financial Market Technicians*. FT Press.

## FAQ

**What does Chaikin Money Flow tell you?**
It shows whether closes have tended to land in the upper or lower part of bars' ranges, weighted by volume, over the last N bars. Positive suggests buying pressure and negative suggests selling pressure. It is a pressure gauge, not a forecast.

**What is the best CMF setting?**
The common settings are 20 or 21 periods. Shorter windows react faster but give more noise, and longer ones are smoother. There is no single best value, so test on the market and time frame you trade.

**What is the difference between CMF and the Accumulation/Distribution Line?**
Both use the same money flow calculation. The A/D Line is a running total with no limits. CMF sums over a window and divides by volume, so it is bounded around zero. CMF is easier to compare across time.

**Is a CMF above zero bullish?**
It means buying pressure over the window, which fits a bullish picture. It does not make a buy signal on its own. In a range it crosses zero constantly, so context from price structure matters.

**Does CMF work for forex?**
It can, but spot forex has no central volume figure, so platforms use tick volume. That is a proxy and may not match real trading activity. Results are less reliable than on stocks or futures.
