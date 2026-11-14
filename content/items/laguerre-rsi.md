---
slug: laguerre-rsi
name: Laguerre RSI
aka: [Laguerre RSI, LRSI]
type: momentum-oscillator
states: [range, reversal]
weak_states: [trend]
purposes: [entry]
inventor: John F. Ehlers
year: 2000s
default_settings: "Gamma 0.5 (many platforms use 0.5 to 0.8); levels 0.8 and 0.2"
pairs_with: [support-and-resistance, exponential-moving-average, adx, bollinger-bands]
related: [rsi, connors-rsi, stochastic-rsi, cyber-cycle, inverse-fisher-transform]
compare: []
glossary: [oscillator, overbought, oversold, smoothing, lookback-period]
wave: 3
reviewed: 14 November 2026
---

The Laguerre RSI is a version of RSI that runs prices through a four-stage Laguerre filter before comparing gains and losses. The result is a smooth line between 0 and 1 that reacts quickly with little lag. Readings above 0.8 and below 0.2 are usually called overbought and oversold, and it is mainly used for entries at turning points.

## At a glance

| | |
|---|---|
| Type | Momentum oscillator |
| Best market states | Range, reversal |
| Weak in | Strong trends |
| Best uses | Entry timing |
| Default settings | Gamma 0.5; levels 0.8 / 0.2 |
| Created by | John F. Ehlers, 2000s |
| Leading or lagging | Faster than standard RSI, but still lagging |

## What is the Laguerre RSI?

John Ehlers brought filters from signal processing into trading. A Laguerre filter is a chain of simple stages that smooths data while delaying it less than an ordinary moving average of similar smoothness. The Laguerre RSI uses that filter instead of the usual period-based average.

Standard RSI uses a fixed lookback such as 14 bars. The Laguerre RSI has no lookback length. One number, called gamma, controls how much smoothing is applied. A higher gamma means more smoothing and more lag. A lower gamma means a faster, noisier line.

The output is bounded between 0 and 1 and tends to spend a lot of time at the extremes. This makes it clear to read, but it also means that being "overbought" says little about how strong the move was.

## Formula

For each bar, with price P and gamma g (0 to 1), four filter stages are updated:

L0 = (1 - g) x P + g x L0(previous)
L1 = -g x L0 + L0(previous) + g x L1(previous)
L2 = -g x L1 + L1(previous) + g x L2(previous)
L3 = -g x L2 + L2(previous) + g x L3(previous)

Then compare neighbouring stages:

- CU (up total) = sum of positive values of (L0 - L1), (L1 - L2), (L2 - L3)
- CD (down total) = sum of the absolute values of the negative ones
- Laguerre RSI = CU / (CU + CD)

If CU + CD is zero, the value is usually set to 0.

**Worked example.** Say L0 - L1 = 0.6, L1 - L2 = 0.2 and L2 - L3 = -0.2.
CU = 0.6 + 0.2 = 0.8
CD = 0.2
Laguerre RSI = 0.8 / (0.8 + 0.2) = **0.8**

Some platforms plot the line on a 0 to 100 scale, so the 0.8 and 0.2 levels become 80 and 20.

## How to read it

**Overbought and oversold.** Above 0.8 the recent filtered gains outweigh losses by a wide margin; below 0.2 the reverse. In a range these readings often match the edges of the range.

**Crossing back through the levels.** Many traders wait for the line to cross back below 0.8 or above 0.2, rather than acting when it first touches the extreme. This reduces early entries but delays them.

**Midline.** The 0.5 level separates net positive from net negative filtered momentum. Some use it as a rough trend filter.

**Divergence.** Price makes a new high while the line fails to, or the mirror at lows. As with other oscillators, it is a warning rather than a trigger.

**Flat at the extreme.** The line can sit at 0 or 1 for many bars. That means pressure is one-sided, not that a turn is due.

## Best market states

**Ranges (best).** The line swings between its limits as price moves between support and resistance, which is where its cues are most useful.

**Reversals (good, with care).** Quick response helps spot a change of momentum early, but it also gives false starts. Pair it with a price signal at a known level.

**Strong trends (weak).** The line can stay near 1 or 0 throughout, so counter-trend cues fail repeatedly.

**Breakouts and volatility.** A breakout often pins the line at an extreme. Choppy, volatile markets make it flip between the levels often, even with a higher gamma.

## Settings

| Gamma | Behaviour |
|---|---|
| 0.2 to 0.4 | Very fast and noisy, many level crosses |
| 0.5 | Common default; a balance of speed and smoothness |
| 0.7 to 0.8 | Smoother and slower, fewer signals |

Levels of 0.8 and 0.2 are typical; some use 0.9 and 0.1 for stricter signals. Implementations differ in how they initialise the filter and handle zero totals, so the same gamma can give slightly different lines across platforms. Gamma is not a bar count: you cannot compare it directly with RSI(14).

## Common mistakes

- Reading gamma as a period and expecting it to behave like RSI(14).
- Selling every time the line touches 1 in an uptrend.
- Comparing values from two platforms that initialise the filter differently.
- Using it with no price level or trend check.
- Over-tuning gamma to fit past data.
- Treating the bounded 0 to 1 scale as a measure of how strong the move is.

## Pairs well with

- **[Support and resistance](/support-and-resistance/)**: place cues at known levels, not mid-range.
- **[Exponential moving average](/exponential-moving-average/)**: a slope filter helps avoid counter-trend entries.
- **[ADX](/adx/)**: a low ADX supports using extremes as turning points.
- **[Bollinger Bands](/bollinger-bands/)**: a band touch plus an extreme in the line gives a two-part view.

## Sources

- Ehlers, John F. (2004). *Cybernetic Analysis for Stocks and Futures*. John Wiley & Sons.

## FAQ

**What is gamma in the Laguerre RSI?**
Gamma is a smoothing factor between 0 and 1. Higher values give a smoother, slower line, while lower values give a faster, noisier one. It replaces the lookback period used in standard RSI.

**How is it different from normal RSI?**
Standard RSI averages gains and losses over a fixed number of bars. The Laguerre RSI first runs prices through a four-stage filter and then compares the stages. It typically reacts faster with a smoother curve but sits near the extremes more often.

**What do 0.8 and 0.2 mean?**
They are the usual overbought and oversold lines. Above 0.8, filtered gains clearly outweigh losses; below 0.2, losses outweigh gains. They are conventions, not guarantees of a turn.

**Does it work in a trend?**
Poorly for reversals. It can stay at an extreme for a long time during a strong move. It is better suited to ranges and to timing entries at a known level.

**Is the Laguerre RSI a leading indicator?**
No. It still depends on past prices. The filter reduces lag compared with a similar moving average, but it cannot forecast direction.
