---
slug: aroon
name: Aroon Indicator
aka: [Aroon Up/Down, Aroon]
type: trend
states: [trend, range]
weak_states: [breakout]
purposes: [filter]
inventor: Tushar Chande
year: 1995
default_settings: "25 periods; Aroon Up and Aroon Down on a 0 to 100 scale"
pairs_with: [adx, aroon-oscillator, support-and-resistance, moving-average-crossover]
related: [dmi, vortex-indicator, choppiness-index, vertical-horizontal-filter, trend-intensity-index]
compare: [adx-vs-aroon]
glossary: [trend, range, lookback-period, crossover]
wave: 2
reviewed: 14 November 2026
---

The Aroon indicator measures how long ago the highest high and lowest low occurred within a set number of bars. It plots two lines, Aroon Up and Aroon Down, from 0 to 100. A strong trend shows one line near 100 and the other low. Both lines low or tangled suggests a range.

## At a glance

| | |
|---|---|
| Type | Trend indicator (time-based) |
| Best market states | Trends, and spotting ranges |
| Weak in | Fast breakouts, where it can lag by several bars |
| Best uses | Trend filter |
| Default settings | 25 periods, scale 0 to 100 |
| Created by | Tushar Chande, 1995 |
| Leading or lagging | Mostly lagging, but it can flag a trend starting early |

## What is the Aroon indicator?

Most trend indicators look at how far price has moved. Aroon looks at **time**: how recently price made a new high or low. The idea is that in a strong uptrend, new highs appear often and new lows rarely. In a strong downtrend, the opposite.

Tushar Chande introduced it in 1995. The word "aroon" comes from Sanskrit and is usually translated as "dawn's early light", a reference to spotting the start of a new trend. Chande also described related ideas in his book with Stanley Kroll, *The New Technical Trader* (1994).

The two lines are:

- **Aroon Up:** how recently the highest high of the window occurred.
- **Aroon Down:** how recently the lowest low of the window occurred.

If today is the highest high of the last 25 bars, Aroon Up is 100. If the highest high was 25 bars ago, it is 0.

## Formula

Aroon Up = 100 x (n - bars since the highest high) / n
Aroon Down = 100 x (n - bars since the lowest low) / n

Here n is the lookback, 25 by default. "Bars since" counts today as 0.

**Worked example.** With n = 25, the highest high in the window was 5 bars ago and the lowest low was 20 bars ago.
Aroon Up = 100 x (25 - 5) / 25 = **80**
Aroon Down = 100 x (25 - 20) / 25 = **20**

Aroon Up at 80 and Aroon Down at 20 suggest an uptrend: recent highs, old lows.

Some platforms use n + 1 bars in the window, which shifts values slightly. Chande's original uses a 25-period setting, and many platforms make it the default. The **Aroon Oscillator** is simply Aroon Up minus Aroon Down; it has its own page at [Aroon Oscillator](/aroon-oscillator/).

## How to read it

**Strong uptrend.** Aroon Up stays above 70 while Aroon Down stays below 30.

**Strong downtrend.** Aroon Down stays above 70 while Aroon Up stays below 30.

**Crossover.** When Aroon Up crosses above Aroon Down, the market has been making more recent highs than lows, which may mark a shift to an uptrend. The reverse crossing may mark a downtrend. Crossovers are lagging and can whip back and forth in ranges.

**Both lines low.** If both lines are below 50 and drifting, the market has made neither recent highs nor lows. That points to consolidation.

**Parallel lines.** When both lines move together at a similar level, trend direction is unclear.

**A reading of 100.** Aroon Up at 100 means a new high has just been made. Staying at 100 for several bars is consistent with strong momentum.

## Best market states

**Trends (best).** Aroon is clear and easy to read when one side holds above 70 for a long time.

**Ranges (useful).** Tangled, low readings tell you to expect no trend, so it works as a filter that keeps you out of trend trades.

**Breakouts (weak).** A sharp breakout makes only one new high, and Aroon may take several bars to reflect it.

**Reversals (mixed).** The crossover often comes after the turn is already under way.

**Volatility.** Aroon uses only the highest high and lowest low, so a single spike can change its readings sharply.

## Settings

| Setting | What it does |
|---|---|
| 14 | Faster, more crossovers, more noise |
| 25 (default) | Chande's standard; balances speed and stability |
| 50 | Slower and smoother; keeps you in longer trends |

Chande's default is 25 periods; some older platform guides use 14. Pick one and stay with it. On higher time frames, the same period covers a longer span of real time.

Common thresholds are 70 for a strong line and 30 for a weak line, though these are conventions rather than part of the formula.

## Common mistakes

- Trading every crossover in a sideways market.
- Treating 100 as "overbought". In Aroon, 100 means a recent high, which is a sign of strength.
- Comparing Aroon to ADX as if both measure the same thing. Aroon measures time since extremes; ADX measures trend strength from price movement.
- Using it alone to call tops and bottoms.
- Changing the period after each loss.
- Ignoring that Aroon says nothing about how big the trend is, only how recent the extremes are.

## Pairs well with

- **[ADX](/adx/)**: gives a strength reading that Aroon does not, so the two views complement each other.
- **[Aroon Oscillator](/aroon-oscillator/)**: collapses the two lines into one for simpler reading.
- **[Support and resistance](/support-and-resistance/)**: a new Aroon high reading is more meaningful when price clears a known level.
- **[Moving average crossover](/moving-average-crossover/)**: a second trend signal that can confirm Aroon's crossover.

## Sources

- Achelis, Steven B. (2000). *Technical Analysis from A to Z*, 2nd edition. McGraw-Hill. (Aroon entry; the indicator was introduced by Tushar Chande in 1995.)

## FAQ

**What does the Aroon indicator measure?**
It measures how many bars have passed since the highest high and the lowest low within a lookback window, scaled from 0 to 100. A high Aroon Up means a recent high; a high Aroon Down means a recent low.

**What is the best Aroon setting?**
Chande's standard is 25 periods. Shorter settings such as 14 react faster but give more false crossovers. Longer settings are smoother but slower. Test any setting on your own market and time frame before relying on it.

**How is Aroon different from ADX?**
Aroon looks at time since the latest high and low and shows direction through its two lines. ADX measures trend strength from smoothed directional movement and has no direction of its own. See [ADX vs Aroon](/compare/adx-vs-aroon/).

**What does an Aroon Up above 70 mean?**
It means the highest high of the lookback window occurred recently, within roughly the last 30% of the window. With Aroon Down low at the same time, it is consistent with an uptrend.

**Does Aroon work in sideways markets?**
It does not produce a clean trend signal there, but that is useful: both lines stay low or cross often, which shows there is no clear trend. Many traders use it as a filter to avoid trend trades in that case.
