---
slug: awesome-oscillator
name: Awesome Oscillator
aka: [AO, Bill Williams Awesome Oscillator]
type: momentum-oscillator
states: [trend, reversal]
weak_states: [range]
purposes: [entry, confirmation]
inventor: Bill Williams
year: 1990s
default_settings: "5 and 34 periods of median price (simple averages)"
pairs_with: [williams-alligator, williams-fractals, support-and-resistance, adx]
related: [accelerator-oscillator, macd, macd-histogram, ppo, balance-of-power]
compare: []
glossary: [momentum, oscillator, crossover, divergence]
wave: 2
reviewed: 14 November 2026
---

The Awesome Oscillator (AO) is a momentum indicator that subtracts a 34-bar simple average of the median price from a 5-bar one and plots the result as a histogram around zero. Bars above zero mean recent momentum is stronger than the longer-term average; below zero, weaker. Traders read zero crosses, "saucers" and "twin peaks" as entry and confirmation signals.

## At a glance

| | |
|---|---|
| Type | Momentum oscillator (histogram) |
| Best market states | Trend, reversal |
| Weak in | Ranges |
| Best uses | Entry timing, confirmation |
| Default settings | 5 and 34 periods of median price |
| Created by | Bill Williams, 1990s |
| Leading or lagging | Lagging, though saucers and twin peaks aim to show momentum changes early |

## What is the Awesome Oscillator?

The Awesome Oscillator belongs to the trading system of Bill Williams, a trader and author who wrote about chaos theory applied to markets. It was described in his book *New Trading Dimensions* (1998), where it is part of a set of tools that also includes the [Williams Alligator](/williams-alligator/) and [fractals](/williams-fractals/). The exact year it first appeared is not clear, so this page uses a range.

In plain terms, AO compares two moving averages of the same price. It is closely related to MACD, but with two differences: it uses simple moving averages instead of exponential ones, and it uses the median price (the midpoint of each bar's high and low) instead of the close.

Because the output is drawn as bars, colours help. The common convention colours a bar green when it is higher than the previous bar and red when it is lower. That is purely a display choice.

Williams' framework is trader-education material rather than academic research, and there is no strong independent evidence base for his named patterns. Read them as a rulebook some traders use, not a proven edge.

## Formula

1. Median price = (high + low) / 2 for each bar.
2. Fast average = 5-period simple moving average (SMA) of the median price.
3. Slow average = 34-period SMA of the median price.
4. AO = fast average - slow average.

**Worked example.** Suppose the 5-period average of median price is 105.0 and the 34-period average is 102.5.
AO = 105.0 - 102.5 = **+2.5**

If the 5-period average later falls to 101.0 while the 34-period is 102.0, AO = 101.0 - 102.0 = **-1.0**, so it has crossed below zero.

Note: some platforms offer settings other than 5 and 34, and some let you pick exponential averages. The original definition uses simple averages.

## How to read it

**Zero line cross.** AO crossing from below to above zero means the 5-bar average has moved above the 34-bar average, which is a bullish momentum shift. Crossing below zero is bearish. This is the slowest signal.

**Saucer.** A bullish saucer happens above zero: AO makes two red (falling) bars in a row, followed by a green (rising) bar, and all stay above zero. It reads as a short dip in momentum inside a rising trend. The bearish saucer is the mirror image below zero.

**Twin peaks.** A bullish twin peaks pattern occurs below zero. AO makes a low, rises a little, then makes a second, higher low (shallower than the first), and the bar after the second low is green. It resembles a bullish [divergence](/divergence/). The bearish version forms above zero with two peaks, the second lower than the first.

**Divergence in general.** If price makes a new high but AO does not, momentum is not confirming the move. As with other oscillators, divergence is a warning, not a signal on its own.

**Size of bars.** Tall bars mean the two averages are far apart. Shrinking bars mean they are converging. Compare bar size only within the same market, because values depend on the price scale.

## Best market states

**Trends (best).** In a steady move AO stays on one side of zero and saucers can show brief pauses worth considering for re-entry.

**Reversals (fair).** Twin peaks and divergence try to catch turns, but they need a price trigger as well. AO alone gives many false alarms.

**Ranges (weak).** In sideways markets AO crosses zero frequently with small bars. Zero crosses lose meaning because price barely changes.

**Breakouts.** A breakout often produces a sharp rise in AO. It confirms strength but does not tell you whether the move will hold.

**Volatility.** AO does not measure volatility, but large price swings create large bars, which can look like strong momentum when they are only wide ranges.

## Settings

| Setting | Periods | What it does |
|---|---|---|
| Faster | 3 and 21 | More signals, more noise |
| Default | 5 and 34 | Williams' original. Both are numbers from the Fibonacci sequence |
| Slower | 8 and 55 | Smoother, fewer signals, later reaction |

Changing the two periods changes the time scale of momentum you are tracking. If you shorten them, saucers and zero crosses appear much more often. If you lengthen them, the oscillator mainly shows large swings. Neither choice is proven better, so test on your own market and time frame.

## Common mistakes

- Trading every zero cross in a sideways market.
- Treating saucers and twin peaks as high-probability signals without checking price structure. They are a set of rules, not a tested edge.
- Comparing AO values across different instruments.
- Using it alone. It does not show where to place a stop or where the market has resistance.
- Confusing it with the Accelerator Oscillator, which is a related but different tool that measures the change in AO.
- Changing periods until past data fits.

## Pairs well with

- **[Williams Alligator](/williams-alligator/)**: the Alligator shows whether a trend is present; AO shows its momentum.
- **[Williams Fractals](/williams-fractals/)**: fractals mark swing points that can serve as triggers or stop references.
- **[Support and resistance](/support-and-resistance/)**: signals at a known level carry more context.
- **[ADX](/adx/)**: a rising ADX suggests a trend, which is where AO works best.

## Sources

- Williams, Bill (1998). *New Trading Dimensions: How to Profit from Chaos in Stocks, Bonds, and Commodities*. John Wiley & Sons.

## FAQ

**What does the Awesome Oscillator measure?**
It measures momentum by comparing the 5-bar and 34-bar simple averages of median price. A positive value means recent prices are higher than the longer average; a negative value means they are lower.

**What is an AO saucer?**
A saucer is a short dip in momentum while AO stays on one side of zero. In the bullish version AO is above zero, falls for two bars, then rises. It is read as a possible chance to join the uptrend again.

**How is AO different from MACD?**
AO uses simple moving averages of median price (high plus low divided by two) with fixed lengths of 5 and 34, and has no signal line. MACD uses exponential averages of the close and adds a signal line.

**What does AO crossing zero mean?**
It means the short average has crossed the long one. Crossing above zero shows momentum turning up; below zero shows momentum turning down. It lags, and in ranges it crosses often without a lasting move.

**What are twin peaks?**
Twin peaks are a divergence-style pattern. Below zero, AO makes two lows, the second one shallower, and then rises. It suggests selling momentum is fading. It is a rule from Williams' system, not a statistically proven signal.

**Can the Awesome Oscillator be used for day trading?**
Yes, it works on any time frame because it only uses highs and lows. On short charts it produces many crossings, so traders often confirm with a higher time frame trend.
