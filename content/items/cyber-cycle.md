---
slug: cyber-cycle
name: Cyber Cycle (Ehlers)
aka: [Ehlers Cyber Cycle, Cybernetic Cycle]
type: momentum-oscillator
states: [range]
weak_states: [trend]
purposes: [entry]
inventor: John Ehlers
year: 2000s
default_settings: "Alpha 0.07; signal line is the cycle delayed by one bar"
pairs_with: [support-and-resistance, adx, center-of-gravity, trendline]
related: [center-of-gravity, fisher-transform, detrended-price-oscillator, stochastic-oscillator, market-cycles]
compare: []
glossary: [oscillator, smoothing, whipsaw, lookback-period]
wave: 3
reviewed: 14 November 2026
---

The Cyber Cycle is a filter by John Ehlers that removes the trend from price and leaves only the short, repeating swings, shown as a smooth line around zero. It is used in sideways markets to time turns, with the line crossing its one-bar-delayed copy as the signal. It does little in a strong trend.

## At a glance

| | |
|---|---|
| Type | Cycle oscillator (high-pass filter) |
| Best market states | Range |
| Weak in | Strong trends, and markets with no clear cycle |
| Best uses | Entry timing |
| Default settings | Alpha 0.07 |
| Created by | John Ehlers, 2000s |
| Leading or lagging | Low lag by design; built from past prices |

## What is the Cyber Cycle?

Price can be thought of as a trend plus a cycle plus noise. The Cyber Cycle tries to keep only the cycle. Ehlers does this with a digital filter, the type of tool used in signal processing, that blocks slow changes (the trend) and passes the faster swings.

The line oscillates around zero. A turn in the line is meant to line up with a turn in price, with less delay than a moving average would give. Ehlers presented the idea in his book *Cybernetic Analysis for Stocks and Futures* (Wiley, 2004), which gives the indicator its name. I have given only the decade for the first appearance because I am not sure of an exact date.

The weak point is the assumption of a stable cycle. Real markets change their rhythm, and in a trend there may be no cycle to find.

## Formula

The calculation has two steps. First, price is lightly smoothed:

Smooth = (Price + 2 x Price[1] + 2 x Price[2] + Price[3]) / 6

where Price[1] is the previous bar, and Price is usually the midpoint of the high and low.

Second, the cycle value is calculated with a recursive formula (it uses its own earlier values):

Cycle = (1 - 0.5 x alpha)^2 x (Smooth - 2 x Smooth[1] + Smooth[2]) + 2 x (1 - alpha) x Cycle[1] - (1 - alpha)^2 x Cycle[2]

With alpha = 0.07, the coefficients are about 0.931, 1.86 and 0.865. For the first few bars, Ehlers uses a simpler start-up formula.

**Worked example.** Smooth is 10.5 now, 10.2 on the previous bar and 10.0 two bars ago. The previous cycle values are 0.05 and 0.02.
Smooth - 2 x Smooth[1] + Smooth[2] = 10.5 - 20.4 + 10.0 = 0.1
First term = 0.931 x 0.1 = 0.093
Second term = 1.86 x 0.05 = 0.093
Third term = 0.865 x 0.02 = 0.017
Cycle = 0.093 + 0.093 - 0.017 = **about 0.169**

The signal line is the Cycle value from the previous bar.

## How to read it

**Crossovers.** When the Cycle crosses above its delayed signal line, the swing is turning up; crossing below, it is turning down. These are the entry signals.

**Zero line.** The Cycle swings above and below zero. A cross has less meaning than the signal-line cross, because the line already tracks the turn.

**Where it turns.** Turns at the top of the line, well above zero, suggest a high is forming; low turns suggest a low. The usefulness depends on whether price is cycling.

**Check price.** A signal that does not line up with a price level or price turn is often a false one.

## Best market states

**Ranges (best).** In a sideways market with a regular rhythm, the swings can match the Cyber Cycle well.

**Trends (weak).** The filter removes the trend, which means it does not tell you about it. Its turns keep appearing while price moves one way.

**Reversals (mixed).** It may turn a little before price does, but many turns are not reversals.

**Volatility.** Sudden large moves distort the filter and the line may take several bars to settle.

## Settings

| Setting | Alpha | What it does |
|---|---|---|
| Faster | 0.10 to 0.20 | Reacts quickly, more false turns |
| Default | 0.07 | Ehlers's usual value |
| Slower | 0.03 to 0.05 | Smoother, later |

A larger alpha makes the line more responsive to short swings. Smaller alpha makes it smoother but later.

## Common mistakes

- Using it in a strong trend and treating each turn as a reversal.
- Expecting the market to have a fixed cycle length. Cycles change.
- Mixing up implementations. Start-up values and the choice of price differ between platforms.
- Treating "low lag" as predictive.
- Optimising alpha to fit one chart.

## Pairs well with

- **[Support and resistance](/support-and-resistance/)**: a Cyber Cycle turn at a level is more useful than one in open space.
- **[ADX](/adx/)**: a low ADX points to a ranging market where the filter works best.
- **[Center of Gravity (Ehlers)](/center-of-gravity/)**: another Ehlers tool, which can confirm or contradict the timing.
- **[Trendline](/trendline/)**: a trendline break adds price confirmation to a signal.

## Sources

- Ehlers, John F. (2004). *Cybernetic Analysis for Stocks and Futures*. Wiley.

## FAQ

**What does the Cyber Cycle show?**
It shows the short-term cyclical swings in price with the trend removed. The line moves around zero, and its turns and crossovers are used to time entries in a ranging market.

**Who created the Cyber Cycle?**
John Ehlers, an engineer who applies signal processing to markets. It is described in his 2004 book *Cybernetic Analysis for Stocks and Futures*.

**What is the default alpha?**
0.07 is the commonly quoted default. A higher value makes the line faster and more jumpy; a lower value makes it smoother but later.

**Does the Cyber Cycle work in trending markets?**
Poorly. The filter strips out the trend, so it keeps showing cycles and signals that do not lead to anything when price moves one way. Use a trend filter such as ADX, or choose another tool.

**Is the Cyber Cycle better than a moving average?**
They do different jobs. A moving average follows the trend; the Cyber Cycle removes it. The Cyber Cycle can react faster in ranges, but it is more complicated and more prone to false signals.
