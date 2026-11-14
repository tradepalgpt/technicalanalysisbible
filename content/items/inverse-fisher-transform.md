---
slug: inverse-fisher-transform
name: Inverse Fisher Transform
aka: [IFT, Inverse Fisher]
type: momentum-oscillator
states: [reversal]
weak_states: [trend]
purposes: [entry]
inventor: John F. Ehlers
year: 2004
default_settings: "Applied to RSI(5) smoothed with a 9-period weighted average; signal levels about +0.5 and -0.5"
pairs_with: [rsi, support-and-resistance, exponential-moving-average, adx]
related: [fisher-transform, rsi, stochastic-rsi, cyber-cycle, laguerre-rsi]
compare: []
glossary: [oscillator, overbought, oversold, smoothing, lookback-period]
wave: 3
reviewed: 14 November 2026
---

The Inverse Fisher Transform squeezes any oscillator into a range of -1 to +1 and pushes most readings towards the two ends. It turns a smooth, wandering line into something closer to a clear on/off signal. It is usually applied to RSI, with crossings of about +0.5 and -0.5 used as entry cues in reversal setups.

## At a glance

| | |
|---|---|
| Type | Momentum oscillator (a transform applied to another oscillator) |
| Best market states | Reversal |
| Weak in | Strong trends |
| Best uses | Entry timing |
| Default settings | RSI(5), 9-period weighted smoothing, levels about +0.5 / -0.5 (common recipe; platforms differ) |
| Created by | John F. Ehlers, about 2004 |
| Leading or lagging | Same as the oscillator it is built on, so mostly lagging |

## What is the Inverse Fisher Transform?

John Ehlers is an engineer who applied signal-processing ideas to trading. His Fisher Transform ([Fisher Transform](/fisher-transform/)) stretches the middle of a bounded series so that turning points become sharper. The Inverse Fisher Transform does the opposite: it compresses a series of any range into -1 to +1, and most of the time the output sits near one of the two extremes.

It is not a free-standing oscillator. It is a shaping step. You feed it another indicator, most often RSI, and it returns a version with clearer "high" and "low" states.

The result looks like a square-ish wave instead of a rolling one. That can make signals easy to read, but it also hides the strength of the move: two very different readings of the underlying indicator can map to nearly the same output.

## Formula

The mathematical form is the hyperbolic tangent:

IFT(x) = (e^(2x) - 1) / (e^(2x) + 1)

For small x the output is close to x. For large positive x it approaches +1, and for large negative x it approaches -1.

A widely shared recipe for RSI (details vary by platform):

1. Calculate RSI with a 5-period length.
2. Rescale: v1 = 0.1 x (RSI - 50), which maps RSI of 0 to 100 into about -5 to +5.
3. Smooth v1 with a 9-period weighted moving average to get v2.
4. IFT = (e^(2 x v2) - 1) / (e^(2 x v2) + 1)

**Worked example.** Suppose the smoothed value v2 is 0.5.
e^(2 x 0.5) = e^1 = about 2.72
IFT = (2.72 - 1) / (2.72 + 1) = 1.72 / 3.72 = about **0.46**

If v2 is 2, e^4 is about 54.6 and IFT = 53.6 / 55.6 = about **0.96**, almost at the ceiling.

## How to read it

**Crossing up through -0.5.** After a stretch near -1, the line rising through -0.5 is read as momentum turning up. Traders treat it as a possible long entry.

**Crossing down through +0.5.** After time near +1, the line falling through +0.5 is read as momentum turning down, a possible short entry or exit for longs.

**Time at the extremes.** Because the line clings to -1 or +1, it can stay there through a whole move. Staying at an extreme is not a reversal signal; the crossing back is.

**Level choice.** The +0.5 and -0.5 levels are conventions. Some traders use +0.9 and -0.9 to be more selective. There is no tested best level.

## Best market states

**Reversals (best).** The tool is built to highlight turns in momentum, so it suits setups where price is at a known level and momentum is flipping.

**Ranges (usable).** In sideways markets the line swings between the two extremes and gives regular cues, though many will be small.

**Strong trends (weak).** In a strong trend the line sits at an extreme for long stretches. Counter-trend signals keep appearing and failing.

**Breakouts and volatility.** A breakout pins the line at one end. That is strength, not a reversal. The transform hides volatility, so a quiet drift and a violent move can look the same.

## Settings

| Part | Common value | Effect |
|---|---|---|
| RSI length | 5 | Shorter is more reactive and noisier |
| Smoothing | 9-period weighted | Longer smoothing delays the signals |
| Levels | +0.5 / -0.5 | Wider (0.9) gives fewer, later cues |
| Input | RSI | Other oscillators such as CCI or Stochastic can be used |

Because the transform is steep, small changes to the input settings change where the line sits relative to the levels. Keep the recipe fixed while testing.

## Common mistakes

- Treating the output as an indicator in its own right rather than a reshaping of another one.
- Selling because the line reached +1 in an uptrend.
- Changing RSI length and smoothing until past trades fit.
- Forgetting that the transform hides how strong the underlying move was.
- Mixing up the Fisher Transform and the Inverse Fisher Transform, which do opposite things.
- Entering on a cross with no price level or trend check.

## Pairs well with

- **[RSI](/rsi/)**: the usual input; view both to see how the transform reshapes it.
- **[Support and resistance](/support-and-resistance/)**: use the crossing as timing at a known level.
- **[Exponential moving average](/exponential-moving-average/)**: a slope filter helps avoid fading strong trends.
- **[ADX](/adx/)**: a low reading says the market is ranging, which suits this tool better.

## Sources

- Ehlers, John F. (2004). *Cybernetic Analysis for Stocks and Futures*. John Wiley & Sons.

## FAQ

**What does the Inverse Fisher Transform do?**
It takes an input series and squeezes it into a range of -1 to +1, with most values pushed towards the ends. That makes turning points easier to see as line crossings, at the cost of hiding how big the move was.

**How is it different from the Fisher Transform?**
The Fisher Transform stretches a bounded series so peaks and troughs are sharper. The Inverse Fisher Transform does the reverse: it compresses an unbounded series into a bounded one. They are mathematical opposites.

**Which levels should I use?**
Many recipes use +0.5 and -0.5 as trigger levels, and some use +0.9 and -0.9. These are conventions rather than tested thresholds. Pick one and test it on the market you trade.

**Does it predict reversals?**
No. It reshapes a lagging oscillator, so signals come after momentum has already turned. It can help you time an entry at a level you have chosen, but it does not forecast.

**Can it be applied to other indicators?**
Yes. It works on any series that you can rescale to a suitable range. RSI is the most common input, but versions exist for CCI and the Stochastic. Results change with the input.
