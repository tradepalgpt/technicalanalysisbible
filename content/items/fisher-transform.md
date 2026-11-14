---
slug: fisher-transform
name: Fisher Transform
aka: [Fisher Transform Indicator, Ehlers Fisher Transform]
type: momentum-oscillator
states: [reversal]
weak_states: [trend, range]
purposes: [entry]
inventor: John F. Ehlers
year: 2002
default_settings: "10 periods; trigger line is the previous Fisher value"
pairs_with: [support-and-resistance, divergence, exponential-moving-average, adx]
related: [inverse-fisher-transform, stochastic-oscillator, rsi, cyber-cycle, center-of-gravity]
compare: []
glossary: [oscillator, crossover, overbought, oversold, lookback-period]
wave: 2
reviewed: 14 November 2026
---

The Fisher Transform converts price into a series that is meant to follow a normal bell-curve shape, which makes turning points show up as sharp peaks and troughs. It plots a Fisher line and a trigger line (the Fisher line one bar late). Crossovers of the two, especially after extreme readings, are used as reversal entries.

## At a glance

| | |
|---|---|
| Type | Momentum oscillator |
| Best market states | Reversal |
| Weak in | Strong trends and ranges without clear turns |
| Best uses | Entry timing |
| Default settings | 10 periods |
| Created by | John F. Ehlers, early 2000s |
| Leading or lagging | Quicker than most oscillators, but still built from past prices |

## What is the Fisher Transform?

John Ehlers is an engineer who applied signal-processing ideas to trading. He described the Fisher Transform in an article in *Technical Analysis of Stocks & Commodities* in 2002 and in his book *Cybernetic Analysis for Stocks and Futures* (2004).

His reasoning is that price, after being scaled to a fixed range, does not follow a bell-curve (normal) distribution; it clusters near the middle and the extremes are mostly flat. Applying the Fisher transform, a mathematical function, reshapes the scaled series so that its extremes stretch out. Peaks and troughs become sharper and easier to see.

That idea is Ehlers' argument, and it is not something that has been shown to produce a trading edge by independent research. In practice the Fisher Transform behaves like a fast, smoothed stochastic oscillator with spiky turns.

The output is unbounded in theory, but values rarely go beyond about +2 or -2 under normal conditions, and readings beyond +1.5 or -1.5 are often treated as extremes.

## Formula

1. Take the median price each bar: (high + low) / 2.
2. Find the highest and lowest median price over the last 10 bars.
3. Scale it: value = 0.66 x ((price - lowest) / (highest - lowest) - 0.5) + 0.67 x previous value
4. Clamp the value so it stays between -0.999 and +0.999 (the formula below fails at exactly +1 or -1).
5. Fisher = 0.5 x ln((1 + value) / (1 - value)) + 0.5 x previous Fisher
6. Trigger = previous Fisher

**Worked example.** Suppose the scaled value is 0.60 (step 3 and 4).
Fisher (before adding the smoothing term) = 0.5 x ln(1.60 / 0.40) = 0.5 x ln(4) = 0.5 x 1.386 = **0.69**

If the scaled value is 0.90 instead, 0.5 x ln(1.90 / 0.10) = 0.5 x ln(19) = 0.5 x 2.944 = **1.47**. Notice how the output stretches as the value approaches 1. That stretching is the point of the transform.

Note: Ehlers' published code and platform versions can differ in smoothing constants and the exact price used, so values are not identical everywhere.

## How to read it

**Crossovers.** The Fisher line crossing above the trigger line is a bullish signal; crossing below is bearish. Because the trigger is just the previous value, a crossover happens when the line turns direction. It is essentially a turn detector.

**Extreme readings.** Ehlers suggested treating a crossover after a large peak or trough as stronger. For example, a bearish crossover after Fisher has risen above about +1.5 is read as a more notable turn than one that happens near zero. The thresholds are rules of thumb.

**Zero line.** Fisher above zero says price has been in the upper half of its recent range; below zero, the lower half. Some traders use the zero cross as a slower trend signal.

**Divergence.** As with other oscillators, a price high that Fisher does not match shows weakening momentum. It is a warning and not a timing signal.

**Spikiness.** The sharp turns make it attractive but also create many false turns. A single bar flicker can create a crossover that quickly reverses.

## Best market states

**Reversals (best).** The transform is designed to highlight turning points, so it fits markets that swing between clear highs and lows.

**Ranges (mixed).** Fisher oscillates regularly in sideways markets, so crossovers occur often. Some signals line up with range edges, but many are noise inside the range.

**Strong trends (weak).** In a strong trend, Fisher can stay near one extreme for a long time, and counter-trend crossovers repeatedly fail.

**Breakouts.** A breakout can push Fisher to an extreme quickly. That shows strength; it is not necessarily a reason to fade the move.

**Volatility.** The scaling uses recent high and low, so it adapts to the price range, but it does not measure volatility.

## Settings

| Setting | Period | What it does |
|---|---|---|
| Short | 5 to 7 | Very fast, many crossovers, very noisy |
| Default | 10 | Ehlers' standard setting |
| Long | 14 to 20 | Smoother, fewer turns, slower reaction |

The period sets how far back the highest and lowest prices are taken. A shorter period makes the scaled value hit the edges more often. A longer period makes it move more gradually. Choose by testing on the market and time frame you trade rather than by habit.

## Common mistakes

- Taking every crossover as a reversal. Many are small wiggles that quickly reverse.
- Treating the bell-curve claim as proof of an edge. It is a design idea, not evidence of performance.
- Ignoring the bigger trend and trading counter-trend crossovers in a strong move.
- Using extremes as fixed rules (for example, always selling above +1.5). The levels vary with the market and period.
- Mixing up versions. Some platforms build Fisher from the close, others from the median price, and some use different smoothing.
- Using it without a price level or trigger to define the stop.

## Pairs well with

- **[Support and resistance](/support-and-resistance/)**: a Fisher turn at a known level carries more context.
- **[Divergence](/divergence/)**: Fisher divergence adds weight when the price high or low is at a level.
- **[Exponential moving average](/exponential-moving-average/)**: the direction of a longer EMA can filter which crossovers to take.
- **[ADX](/adx/)**: a low ADX suggests a range, which is where Fisher turns work better.

## Sources

- Ehlers, John F. (2004). *Cybernetic Analysis for Stocks and Futures*. John Wiley & Sons.
- Ehlers, John F. (2002). "Using the Fisher Transform". *Technical Analysis of Stocks & Commodities*, November 2002.

## FAQ

**What does the Fisher Transform do?**
It reshapes scaled price so that turning points show as sharp peaks and troughs. The result is an oscillator with a Fisher line and a trigger line. A crossover between them signals a possible change in direction.

**Is the Fisher Transform better than RSI or Stochastic?**
Not provably. It is faster and spikier, which helps spot turns but also creates more false signals. Which one suits you depends on the market and your approach. Test each on your own data.

**What are the Fisher Transform trigger levels?**
There are no fixed levels in the formula. Many traders treat readings above about +1.5 and below about -1.5 as extreme. Those numbers are conventions, so test them on your own market.

**What is the default Fisher Transform setting?**
Ehlers' default is 10 periods. Many platforms use it as standard. Shorter values give more signals and more noise, and longer values give fewer, later signals.

**Does the Fisher Transform repaint?**
The standard formula uses only past and current bars, so a closed bar does not change. The live bar can change until it closes, as with most indicators, so wait for the bar close before acting on a crossover.

**Can the Fisher Transform be used in trends?**
It is weaker there. In a strong trend the line can stay at an extreme and give repeated counter-trend crossovers that fail. Use a trend filter, or use it only to time pullback entries in the trend direction.
