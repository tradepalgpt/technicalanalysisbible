---
slug: mama
name: MESA Adaptive Moving Average (MAMA)
aka: [MAMA, MAMA and FAMA, MESA adaptive moving average, Mother of All Moving Averages]
type: moving-average
states: [trend]
weak_states: [range]
purposes: [entry, filter]
inventor: John Ehlers
year: 2000s
default_settings: "Fast limit 0.5; slow limit 0.05"
pairs_with: [exponential-moving-average, rsi, adx, support-and-resistance]
related: [kama, frama, exponential-moving-average, zlema, t3-moving-average, cyber-cycle, alma]
compare: []
glossary: [smoothing, lookback-period, lagging-indicator, trend, whipsaw, crossover]
wave: 3
reviewed: 14 November 2026
---

The MESA Adaptive Moving Average (MAMA) is a moving average by John Ehlers that changes its own speed. It uses a measure of the market's cycle to run fast when price moves quickly and slow when it moves slowly. It comes with a second line, FAMA (following adaptive moving average), and the crossing of the two is used as a signal.

## At a glance

| | |
|---|---|
| Type | Moving average (adaptive) |
| Best market states | Trend |
| Weak in | Ranges and noisy markets, where the cycle estimate is unreliable |
| Best uses | Trend filter, MAMA / FAMA crossover entry |
| Default settings | Fast limit 0.5, slow limit 0.05 |
| Created by | John Ehlers, 2000s |
| Leading or lagging | Lagging, but it adapts its lag to market speed |

## What is MAMA?

A normal moving average has a fixed speed. If it is fast, it follows price closely but whipsaws in noise. If it is slow, it is steady but late. An adaptive moving average tries to solve this by changing its speed as conditions change.

John Ehlers is an engineer who brought digital signal processing ideas into trading. His MAMA uses the rate of change of the phase of the market's dominant cycle, which he estimates with a Hilbert transform (a signal-processing tool). When phase changes quickly, the market is moving fast and MAMA speeds up. When phase changes slowly, MAMA slows down. The name comes from MESA, the maximum entropy spectral analysis ideas Ehlers worked with.

MAMA always travels with FAMA, a second line that follows MAMA at half the speed. When MAMA crosses FAMA, it signals a change in direction. The pair is easy to plot and read, even though the maths that drives the speed is advanced.

## Formula

MAMA is an exponential moving average whose smoothing factor alpha changes on each bar.

1. Estimate the phase of the dominant cycle with a Hilbert transform (a multi-step calculation that uses the last several bars).
2. DeltaPhase = the change in phase from one bar to the next, with a floor of 1 degree.
3. alpha = FastLimit / DeltaPhase, then limited so it never falls below SlowLimit or rises above FastLimit.
4. MAMA = alpha x price + (1 - alpha) x previous MAMA
5. FAMA = 0.5 x alpha x MAMA + (1 - 0.5 x alpha) x previous FAMA

Defaults: FastLimit = 0.5 and SlowLimit = 0.05.

**Worked example (the final two steps).** Say the phase step gives alpha = 0.5, the previous MAMA is 100, the previous FAMA is 99.5 and the new price is 102.
MAMA = 0.5 x 102 + 0.5 x 100 = **101**
FAMA = 0.25 x 101 + 0.75 x 99.5 = 25.25 + 74.625 = **99.875**

MAMA is now above FAMA, which is the bullish arrangement.

The phase calculation is long, so most traders take it from a platform rather than coding it by hand. Platform versions can differ slightly in how they seed the first bars.

## How to read it

**MAMA / FAMA crossover.** MAMA crossing above FAMA is read as a turn to the upside; crossing below as a turn to the downside. This is the signal Ehlers highlighted.

**Gap between the lines.** A widening gap shows a strengthening move. Lines that sit close together, or cross often, show a market with no clear direction.

**Side of price.** Price above both lines supports an uptrend; below both supports a downtrend.

**Slope.** MAMA is fast when the market moves and flatter when it is quiet, so a steep MAMA shows a strong move.

**Behaviour in quiet periods.** The line stays close to the slow limit (alpha 0.05) when the cycle estimate shows little movement. It then acts like a very slow average.

## Best market states

**Trends (best).** MAMA is built to speed up with a move and keep up with it while smoothing the pullbacks.

**Ranges (weak).** The cycle estimate can swing in noisy sideways markets, so crossovers whipsaw. Some traders use FAMA only as a filter in such markets.

**Reversals.** The crossover is a lagging confirmation of a turn, not a forecast.

**Volatility.** Large sudden moves force a fast alpha, so MAMA jumps toward the new price quickly.

## Settings

| Setting | Value | What it does |
|---|---|---|
| Fast limit | 0.5 (default) | The largest alpha allowed. Higher means a faster line at its quickest |
| Slow limit | 0.05 (default) | The smallest alpha allowed. Lower means a steadier line at its slowest |

Raising the fast limit makes MAMA more responsive and noisier. Lowering the slow limit makes it steadier when quiet and slower to pick up a new trend. There is no proven best pair; test on the market and time frame you trade.

## Common mistakes

- Treating every MAMA / FAMA crossover as a trade. Many appear in ranges and reverse quickly.
- Assuming the word "adaptive" means "without lag". MAMA still lags.
- Changing limits until past trades look good.
- Comparing MAMA from two platforms without checking how each calculates the phase and seeds the start.
- Using it on very short or illiquid data, where the cycle estimate is poor.
- Ignoring the larger trend because the lines crossed on a small time frame.

## Pairs well with

- **[Exponential moving average](/exponential-moving-average/)**: a plain 200-period EMA gives the larger trend while MAMA times entries.
- **[RSI](/rsi/)**: momentum that supports a crossover is more useful than a crossover alone.
- **[ADX](/adx/)**: a low ADX warns that crossovers are likely to fail.
- **[Support and resistance](/support-and-resistance/)**: levels give the crossover some context.

## Sources

- Ehlers, John F. (2001). *Rocket Science for Traders: Digital Signal Processing Applications*. Wiley. (Ehlers' main early book on applying signal processing to trading.)

## FAQ

**What does MAMA stand for?**
MAMA stands for MESA Adaptive Moving Average. MESA refers to maximum entropy spectral analysis, a family of methods Ehlers used. The name is also read as a pun on "mother of all moving averages", which is how it is sometimes described.

**What is FAMA?**
FAMA is the following adaptive moving average. It is a second line that follows MAMA at half the smoothing factor, so it moves more slowly. The two lines cross when the trend changes, which gives the main signal.

**What are the default MAMA settings?**
The common defaults are a fast limit of 0.5 and a slow limit of 0.05. These set the highest and lowest smoothing factor the line may use. Platforms mostly ship with these values, so check yours before comparing charts.

**Is MAMA better than an EMA?**
It changes speed with the market, which an EMA does not. That helps in some conditions and adds complexity in others. The adaptive part relies on a noisy cycle estimate, so it can mislead in ranges. Neither avoids lag.

**Can I calculate MAMA in a spreadsheet?**
It is possible but long, because the phase estimate needs several chained steps over past bars. Most traders use a platform's built-in or shared script instead. The final MAMA and FAMA steps are simple, as the worked example shows.
