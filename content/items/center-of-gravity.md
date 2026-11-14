---
slug: center-of-gravity
name: Center of Gravity (Ehlers)
aka: [CG oscillator, Ehlers Center of Gravity, Centre of Gravity]
type: momentum-oscillator
states: [reversal]
weak_states: [trend]
purposes: [entry]
inventor: John Ehlers
year: 2000s
default_settings: "10 bars; signal line is the CG delayed by one bar"
pairs_with: [support-and-resistance, trendline, adx, cyber-cycle]
related: [cyber-cycle, fisher-transform, stochastic-oscillator, rsi, detrended-price-oscillator]
compare: []
glossary: [oscillator, lookback-period, divergence, whipsaw]
wave: 3
reviewed: 14 November 2026
---

The Center of Gravity (CG) oscillator, by John Ehlers, finds the balance point of prices in a short window and shows how it moves. It is meant to turn at or just before price turns, with very little lag. Traders use it to time entries at reversals, but it produces many false turns in strong trends.

## At a glance

| | |
|---|---|
| Type | Momentum oscillator (cycle-style) |
| Best market states | Reversal |
| Weak in | Strong trends, and noisy markets |
| Best uses | Entry timing |
| Default settings | 10 bars |
| Created by | John Ehlers, early 2000s |
| Leading or lagging | Designed to be low-lag; it is still built from past prices |

## What is the Center of Gravity oscillator?

Imagine the last 10 closing prices as weights on a beam. The balance point sits closer to the heavy side. If recent prices are higher, the balance point shifts toward the recent end. Ehlers took this physics idea and turned it into an indicator.

The result is a line that oscillates around a centre line without drifting with price. Because it relies on relative position, not on a long moving average, it has less lag than most smoothed oscillators. The cost is that it is jumpy.

Ehlers, an engineer who applied digital signal processing to markets, described the idea in his writing in the early 2000s. His book *Cybernetic Analysis for Stocks and Futures* (Wiley, 2004) covers his cycle indicators. This guide gives the decade and not an exact year.

## Formula

For a window of N bars (N = 10 by default), with the newest price numbered 1 and older prices numbered 2, 3 and so on:

CG = -(sum of [position number x price]) / (sum of prices)

Ehlers used the midpoint of each bar's high and low as the price. Some implementations use the close. Some also add (N + 1) / 2 so the line centres on zero.

**Worked example (3 bars to keep the numbers small).** Prices, newest first: 10, 12, 11.
Weighted sum = (1 x 10) + (2 x 12) + (3 x 11) = 10 + 24 + 33 = 67
Sum of prices = 10 + 12 + 11 = 33
CG = -67 / 33 = **-2.03**

Add (N + 1) / 2 = 2 to centre it on zero: 2 - 2.03 = -0.03.

The signal line is the CG value delayed by one bar.

## How to read it

**Crossovers.** When the CG line crosses above its one-bar-delayed signal line, it suggests a low is forming; crossing below suggests a high.

**Turning points.** The line is meant to turn at the same time as price turns or a little before. Entry traders look for a turn near a support or resistance level.

**Divergence.** Price makes a lower low, but CG makes a higher low. Treat this as a warning, not a trigger.

**Zero line.** If the line is centred on zero, the side it sits on shows whether the balance point is leaning to recent or older prices.

## Best market states

**Reversals (best).** CG is built to catch turns, and these are the cases where a low-lag line helps.

**Ranges (good).** In a sideways market, the line cycles up and down in step with price. Without a trend to fight it, its turns are more often useful.

**Trends (weak).** In a strong trend it keeps giving turn signals against the trend. Each is a false start.

**Volatility.** In choppy markets, the line zig-zags and crosses its signal constantly.

## Settings

| Setting | Bars | What it does |
|---|---|---|
| Fast | 5 to 7 | Very quick turns, many false signals |
| Default | 10 | Ehlers's usual window |
| Slow | 15 to 20 | Smoother, later |

Ehlers connects the best length to the market's dominant cycle length, and a length around half of it is often suggested. Cycle lengths are hard to measure and change over time, so treat the default as a starting point.

## Common mistakes

- Taking every crossover. Most are noise unless price is at a meaningful level.
- Using it in a strong trend and fading the move.
- Comparing values between platforms without checking whether the zero-centring is applied.
- Assuming "low lag" means "predictive". The line still comes from past prices.
- Tuning the length to fit one chart.

## Pairs well with

- **[Support and resistance](/support-and-resistance/)**: a turn in CG at a known level is more meaningful than one in open space.
- **[Trendline](/trendline/)**: a trendline break adds price confirmation to a CG turn.
- **[ADX](/adx/)**: a low ADX says the market is not trending, which is where CG is more useful.
- **[Cyber Cycle](/cyber-cycle/)**: another Ehlers cycle tool that can confirm or contradict the CG.

## Sources

- Ehlers, John F. (2004). *Cybernetic Analysis for Stocks and Futures*. Wiley.

## FAQ

**Who created the Center of Gravity oscillator?**
John Ehlers, an engineer who applied signal processing to trading. He described it in the early 2000s, and his 2004 book *Cybernetic Analysis for Stocks and Futures* covers his cycle indicators.

**What are the default CG settings?**
A window of 10 bars is the usual default. The signal line is the CG delayed by one bar. Some platforms add a constant to centre the line on zero.

**Is the Center of Gravity oscillator really zero lag?**
Ehlers designed it to have very little lag, but it is calculated from past prices. That means it cannot forecast the future. Its turns can still come late, or fail to match any price turn.

**How is CG different from RSI?**
RSI compares average gains with average losses. CG uses the position of prices in a window to find a balance point. CG is faster and jumpier, while RSI is smoother and bounded between 0 and 100.

**Does it work in trending markets?**
Poorly. In a strong trend it keeps signalling turns that do not happen. Use a trend filter such as ADX, or choose another tool when the market is trending.
