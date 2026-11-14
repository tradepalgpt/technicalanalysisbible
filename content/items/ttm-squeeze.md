---
slug: ttm-squeeze
name: Squeeze Momentum (TTM Squeeze)
aka: [TTM Squeeze, Squeeze Momentum Indicator, The Squeeze]
type: momentum-oscillator
states: [volatility, breakout]
weak_states: [range]
purposes: [entry, filter]
inventor: John Carter
year: 2005
default_settings: "Length 20; Bollinger Bands 2.0 standard deviations; Keltner Channels 1.5 x ATR"
pairs_with: [bollinger-bands, keltner-channels, atr, support-and-resistance]
related: [bollinger-squeeze, bollinger-bands, keltner-channels, donchian-channels, bollinger-band-width, breakout-trading]
compare: [bollinger-bands-vs-keltner-channels]
glossary: [squeeze, volatility, breakout, momentum, linear-regression]
wave: 1
reviewed: 14 November 2026
---

The TTM Squeeze flags periods when volatility is unusually low, shown by Bollinger Bands moving inside Keltner Channels. A momentum histogram then suggests which way price may break out. It does not predict the direction with certainty; it says energy is compressed and a larger move may follow.

## At a glance

| | |
|---|---|
| Type | Volatility signal plus momentum histogram |
| Best market states | Volatility compression before a breakout |
| Weak in | Choppy ranges with no follow-through, and low-volatility drift |
| Best uses | Entry timing, filter |
| Default settings | Length 20; Bollinger 2.0 deviations; Keltner 1.5 x ATR |
| Created by | John Carter, 2005 (*Mastering the Trade*) |
| Leading or lagging | The squeeze itself is a condition; the histogram lags price |

## What is the TTM Squeeze?

John Carter, a trader and author, built the TTM Squeeze on a simple idea: markets alternate between quiet and active phases. After a quiet period (low volatility), a bigger move often follows. The Squeeze tries to mark the quiet period and then show the likely direction of the release.

It uses two volatility tools that measure range differently. [Bollinger Bands](/bollinger-bands/) widen and narrow with standard deviation. [Keltner Channels](/keltner-channels/) use [ATR](/atr/), which reacts more slowly to unusual moves. When the narrower Bollinger Bands fit completely inside the Keltner Channels, price volatility is very compressed. That is the "squeeze".

Carter described the method in *Mastering the Trade* (2005). The indicator now exists in many versions on different platforms, so its exact details vary.

## Formula

**The squeeze condition**

1. Bollinger Bands: 20-period SMA of close, plus and minus 2.0 standard deviations.
2. Keltner Channels: 20-period moving average, plus and minus 1.5 x ATR(20). See [Keltner Channels](/keltner-channels/).
3. **Squeeze on** when the upper Bollinger Band is below the upper Keltner line and the lower Bollinger Band is above the lower Keltner line.
4. **Squeeze off** (a "fire") when the Bollinger Bands move back outside the Keltner Channels.

**The momentum histogram**

A common version plots the linear regression value (over 20 bars) of: Close minus the average of (the midpoint of the highest high and lowest low over 20 bars) and the 20-period SMA of close. Positive bars suggest upward momentum, negative bars downward. Colours show whether momentum is rising or fading.

**Worked example.** Upper Bollinger = 105, lower Bollinger = 95. Keltner mid = 100, ATR = 4, so Keltner upper = 100 + 1.5 x 4 = 106 and lower = 94. Bollinger (95 to 105) sits inside Keltner (94 to 106), so the squeeze is **on**. A few bars later, Bollinger widens to 93 to 107. It is outside Keltner, so the squeeze is **off**.

Note: platforms differ on the Keltner multiplier, the moving average type and the histogram formula. Some versions show several Keltner multipliers for different squeeze strengths. A common version: Bollinger Bands (20, 2) inside Keltner Channels (20, 1.5 ATR).

## How to read it

**Squeeze on (dots).** Typically shown as dots on the zero line, often red when on and green when off. It means volatility is compressed. It does not give a direction.

**Squeeze fires.** The dots change colour when volatility expands. Carter used this as the trigger for entries.

**Histogram direction.** Above zero and rising points to upside momentum. Below zero and falling points to downside momentum. Fading bars suggest the push is tiring.

**Duration.** A longer squeeze is often treated as a bigger coiled move, but there is no fixed rule.

**Combine with structure.** A squeeze that fires through a known resistance level has more weight than one in open space.

## Best market states

**Volatility compression before a breakout (best).** This is what it was built for: quiet markets about to move.

**Breakouts.** The fire signal is meant to help catch the start of one.

**Ranges (weak).** In a tight, going-nowhere range, squeezes can fire and then fail, giving false breakouts.

**Trends.** Squeezes within a trend, during a pause, can fire in the trend's direction and act as a continuation signal. In a strong trend there may be few squeezes at all.

**Volatility.** By design it is about low volatility turning to higher volatility. In a market that is always volatile it rarely triggers.

## Settings

| Setting | Values | What it does |
|---|---|---|
| Length | 20 | Lookback for both bands and the histogram |
| Bollinger deviation | 2.0 | Width of the Bollinger Bands |
| Keltner multiplier | 1.5 (some versions show 1.0, 1.5, 2.0) | Lower values make squeezes rarer but tighter |
| Histogram | Linear regression of price vs mid-point | Shows momentum direction |

A larger Keltner multiplier makes a squeeze easier to trigger and gives more signals; a smaller one means fewer, tighter squeezes. Changing these changes what counts as a squeeze, so test before relying on it.

## Common mistakes

- Treating the squeeze as a direction signal. It only says volatility is low.
- Entering on the squeeze being on, before it fires.
- Taking the histogram colour as a buy or sell. It describes momentum, not a trade.
- Ignoring the bigger trend and the nearest key level.
- Assuming every squeeze leads to a large move. Many fizzle.
- Mixing up versions. Different platforms plot different settings under the same name.

## Pairs well with

- **[Bollinger Bands](/bollinger-bands/)**: one half of the squeeze test.
- **[Keltner Channels](/keltner-channels/)**: the other half. Compare how each measures volatility.
- **[ATR](/atr/)**: sets the width of the Keltner Channels and helps size stops.
- **[Support and resistance](/support-and-resistance/)**: a squeeze that fires through a key level is more meaningful.

## Sources

- Carter, John (2005). *Mastering the Trade*. McGraw-Hill. (2nd edition 2012.)
- Bollinger, John (2001). *Bollinger on Bollinger Bands*. McGraw-Hill.

## FAQ

**What does the TTM Squeeze show?**
It shows when volatility has compressed so far that Bollinger Bands sit inside Keltner Channels. Carter's idea was that these quiet phases are often followed by bigger moves, with the histogram hinting at the direction.

**How is the TTM Squeeze different from a Bollinger Squeeze?**
A Bollinger Squeeze looks only at narrow Bollinger Bands or Band Width. The TTM Squeeze compares Bollinger Bands with Keltner Channels and adds a momentum histogram. See [Bollinger Squeeze](/bollinger-squeeze/).

**What are the TTM Squeeze settings?**
Common defaults are length 20, Bollinger 2.0 deviations and Keltner 1.5 times ATR. Platform versions differ, so check how your chart defines the squeeze before comparing.

**Does the squeeze tell me which way price will go?**
No. The squeeze only shows compressed volatility. The histogram suggests the direction of momentum, but breakouts can fail or reverse. A price trigger and a stop are still needed.

**How long does a squeeze last?**
There is no fixed length. Some last a few bars, others many. A longer squeeze is often assumed to lead to a bigger move, but that is a rule of thumb, not a tested fact.
