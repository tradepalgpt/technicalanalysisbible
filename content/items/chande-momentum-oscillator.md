---
slug: chande-momentum-oscillator
name: Chande Momentum Oscillator (CMO)
aka: [CMO, Chande Momentum]
type: momentum-oscillator
states: [range, reversal]
weak_states: [trend]
purposes: [entry]
inventor: Tushar Chande
year: 1994
default_settings: "14 periods; levels +50 and -50"
pairs_with: [support-and-resistance, adx, exponential-moving-average, trendline]
related: [rsi, stochastic-oscillator, momentum-indicator, rate-of-change, williams-r]
compare: []
glossary: [overbought, oversold, oscillator, lookback-period, momentum]
wave: 3
reviewed: 14 November 2026
---

The Chande Momentum Oscillator (CMO) compares the total of up-moves with the total of down-moves over a set number of bars, on a scale from -100 to +100. Readings above +50 are usually called overbought and below -50 oversold. It is similar to RSI but unsmoothed, so it reacts faster and moves more.

## At a glance

| | |
|---|---|
| Type | Momentum oscillator |
| Best market states | Range, reversal |
| Weak in | Strong trends |
| Best uses | Entry timing |
| Default settings | 14 periods, levels +50 / -50 |
| Created by | Tushar Chande, 1994 |
| Leading or lagging | Mostly lagging, faster than RSI |
| Scale | -100 to +100 |

## What is the Chande Momentum Oscillator?

Tushar Chande introduced the CMO in the 1994 book *The New Technical Trader*, which he wrote with Stanley Kroll (Wiley). His complaint about common momentum tools was that smoothing blurs the data. The CMO takes up-moves and down-moves directly, as raw sums, and uses both the up and down data in the numerator.

Compare that with RSI. RSI smooths gains and losses with Wilder's method and places the result on a 0 to 100 scale. The CMO uses simple sums over the window, so there is no smoothing and a bar leaving the window changes the value abruptly. It is bounded at -100 and +100 and crosses zero when up and down totals are equal.

## Formula

1. For each bar, take the change from the previous close.
2. Su = sum of the up-changes over the last N bars (down-changes count as 0).
3. Sd = sum of the down-changes over the last N bars, as positive numbers (up-changes count as 0).
4. CMO = 100 x (Su - Sd) / (Su + Sd)

Default N is 14.

**Worked example.** Over 14 bars, the up-moves add to 9 points and the down-moves add to 3 points.
CMO = 100 x (9 - 3) / (9 + 3) = 100 x 6 / 12 = **+50**

If the up total is 3 and the down total is 9, the CMO is -50. If they are equal, it is 0.

There is a link with RSI: with a simple average of gains and losses, RSI = 50 x (CMO / 100) + 50. This is only true when RSI uses simple averages, not Wilder's smoothing.

## How to read it

**Extremes.** Above +50 means up-moves have strongly outweighed down-moves; below -50, the reverse. In ranges these often line up with the edges of the range. Chande himself suggested levels of +50 and -50.

**Zero line.** A cross above zero means up-moves now outweigh down-moves. Some traders use it as a simple momentum filter.

**Divergence.** Price makes a higher high while the CMO makes a lower high. Chande also described using the CMO as a trend-strength gauge: its absolute value is high when the market trends and low when it ranges. Divergence is a warning, not a timing signal.

**Trend strength.** The absolute CMO, regardless of sign, is high in strong trends. Some traders use this as a filter to avoid fading strong moves.

## Best market states

**Ranges (best).** When price moves between clear edges, the CMO reaches +50 and -50 near them.

**Reversals (good, with care).** A turn from an extreme at a major level is a typical entry setup. It works best with price confirmation.

**Trends (weak).** In a strong trend the CMO can stay above +50 or below -50 for a long time. Fading those readings is a common error.

**Volatility.** The CMO is not smoothed, so a single large bar entering or leaving the window can cause a jump. Fast markets make the line jagged.

## Settings

| Setting | Period | What it does |
|---|---|---|
| Short | 5 to 9 | Very fast, jumpy, many signals |
| Default | 14 | The usual setting, +50 / -50 |
| Long | 20 to 30 | Smoother, slower, fewer extremes |

Longer periods reach +50 or -50 less often, so some traders narrow the levels to +40 and -40. Shorter periods may need wider levels.

## Common mistakes

- Treating +50 as an automatic sell and -50 as an automatic buy.
- Confusing the CMO scale (-100 to +100) with RSI's 0 to 100. The levels are not interchangeable.
- Ignoring the jumps caused by the lack of smoothing. A big bar leaving the window can move the line even when nothing new happened.
- Using it alone, without price structure.
- Changing the period until the past looks perfect.

## Pairs well with

- **[Support and resistance](/support-and-resistance/)**: an extreme CMO reading at a known level is more useful than one in open space.
- **[ADX](/adx/)**: a low ADX suggests a range, where the CMO's extremes work best.
- **[Exponential moving average](/exponential-moving-average/)**: gives the trend direction so you only take CMO signals with it.
- **[Trendline](/trendline/)**: a trendline break after a CMO extreme adds price confirmation.

## Sources

- Chande, Tushar S. and Kroll, Stanley (1994). *The New Technical Trader*. Wiley.

## FAQ

**What is the difference between the CMO and RSI?**
RSI smooths gains and losses and scales from 0 to 100. The CMO uses plain sums of up and down moves and scales from -100 to +100. The CMO is faster and more erratic, while RSI is smoother.

**What are the standard CMO levels?**
Most sources use +50 for overbought and -50 for oversold, with a 14-period setting. As with other oscillators, these are guides, and in strong trends the line can stay beyond them for a long time.

**Is the CMO a leading indicator?**
No. It is calculated from past price changes. Divergences can warn that momentum is fading, but they are not forecasts.

**Can the CMO measure trend strength?**
Chande described using its absolute value for this. A large absolute reading means one side has dominated the window; a value near zero means up and down moves balance out. Some traders use that as a trend filter.

**Does the CMO work on all markets?**
It needs only a price series, so it works on any market. How reliable its extremes are depends on how much the market ranges or trends, and that varies by market and time frame.
