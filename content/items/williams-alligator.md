---
slug: williams-alligator
name: Alligator (Williams)
aka: [Williams Alligator, Alligator indicator]
type: trend
states: [trend, range]
weak_states: [reversal]
purposes: [filter, entry]
inventor: Bill Williams
year: 1995
default_settings: "Jaw 13 shifted 8; Teeth 8 shifted 5; Lips 5 shifted 3; smoothed averages of the median price"
pairs_with: [williams-fractals, awesome-oscillator, gator-oscillator, adx]
related: [smoothed-moving-average, moving-average-ribbon, guppy-multiple-moving-average, choppiness-index, ichimoku-cloud]
compare: []
glossary: [trend, range, smoothing, lookback-period]
wave: 2
reviewed: 14 November 2026
---

The Alligator is a trend indicator made of three smoothed moving averages, called the jaw, teeth and lips, each shifted forward in time. When the lines are tangled, the market is "sleeping" in a range. When they fan out in order, the market is "feeding" in a trend. It was created by Bill Williams.

## At a glance

| | |
|---|---|
| Type | Trend indicator (three shifted moving averages) |
| Best market states | Trend, and as a range detector |
| Weak in | Sharp reversals, because the lines are slow and shifted |
| Best uses | Trend filter, entry timing |
| Default settings | 13/8, 8/5, 5/3 (period / shift) on the median price |
| Created by | Bill Williams, 1990s |
| Leading or lagging | Lagging; the forward shift only moves the lines on the chart |

## What is the Alligator?

Bill Williams described the Alligator in his books on trading psychology and chaos theory, including *Trading Chaos* (1995). He used the picture of an alligator to explain the market. When the alligator is asleep, the mouth is closed and price moves sideways. When it wakes up and opens its mouth, a trend begins. When it has eaten enough, the mouth closes again.

The three lines are:

- **Jaw (blue):** the slowest line, 13 periods, shifted 8 bars into the future.
- **Teeth (red):** the middle line, 8 periods, shifted 5 bars.
- **Lips (green):** the fastest line, 5 periods, shifted 3 bars.

All three are smoothed moving averages of the **median price**, which is (high + low) / 2. Because the lines are shifted forward on the chart, they sit to the right of the latest bar. Price is compared with lines calculated earlier.

The Alligator is part of a wider Williams system, which also includes the [Awesome Oscillator](/awesome-oscillator/) and [Fractals](/williams-fractals/). This page covers the Alligator itself.

## Formula

1. Median price = (high + low) / 2 for each bar.
2. Jaw = 13-period smoothed moving average (SMMA) of the median price, plotted 8 bars ahead.
3. Teeth = 8-period SMMA, plotted 5 bars ahead.
4. Lips = 5-period SMMA, plotted 3 bars ahead.

The SMMA (also called RMA) is Wilder-style smoothing: new value = (previous value x (n - 1) + current price) / n. See [smoothed moving average](/smoothed-moving-average/).

**Worked example.** The previous 5-period lips value is 100 and the current median price is 105.
New lips = (100 x 4 + 105) / 5 = 505 / 5 = **101**

The lines are then drawn shifted forward. Some platforms offer the shift as a setting and some calculate the SMMA slightly differently, for example using a simple average to start. Values may differ a little.

## How to read it

**Sleeping.** The three lines are close together or crossing each other. The market is ranging and trend signals are unreliable.

**Awakening.** The lips (fastest) move away from the teeth and jaw, and price moves beyond them. A trend may be starting.

**Eating (uptrend).** From top to bottom: price, lips, teeth, jaw, with the lines fanned apart. This is a bullish order.

**Eating (downtrend).** The reverse: jaw on top, then teeth, then lips, with price below all three.

**Sated.** The lines start to converge again and the lips cross the teeth. Williams read this as the trend running out of energy.

**Using it with fractals.** Williams combined the Alligator with [fractals](/williams-fractals/): a fractal signal that breaks out beyond the teeth or lips is considered more meaningful than one inside the "mouth".

## Best market states

**Trends (best).** The ordered, fanned-out lines are clear in a sustained trend and help you stay with it.

**Ranges (useful as a warning).** The tangled lines tell you to stand aside from trend signals. In this role the Alligator works as a filter rather than an entry tool.

**Reversals (weak).** The lines lag, so a turn is only confirmed after price has moved. Sharp turns often produce losses before the lines reorder.

**Breakouts (mixed).** A break after a long sleep can be strong, but false starts are common.

**Volatility.** Fast, choppy markets produce frequent crossings and false awakenings.

## Settings

| Setting | Jaw | Teeth | Lips | Notes |
|---|---|---|---|---|
| Default (Williams) | 13 / shift 8 | 8 / shift 5 | 5 / shift 3 | Original values; the numbers are Fibonacci numbers |
| Slower | 21 / shift 13 | 13 / shift 8 | 8 / shift 5 | Fewer signals, more lag |
| Faster | 8 / shift 5 | 5 / shift 3 | 3 / shift 2 | More signals, more false starts |

Most traders keep the defaults. Changing them tends to make the indicator behave like any other set of moving averages, which removes the reason for using Williams' version.

## Common mistakes

- Treating a cross of the lines as an immediate entry signal during a sleeping phase.
- Forgetting the lines are shifted forward, which makes crossings look like they happened earlier than they did.
- Using it on its own to call tops and bottoms.
- Ignoring that it works poorly in choppy markets, which is exactly when it is "asleep".
- Changing the settings repeatedly to fit past data.
- Applying it to a very short time frame where noise dominates.

## Pairs well with

- **[Fractals (Williams)](/williams-fractals/)**: Williams' own entry method uses fractals that break outside the Alligator's mouth.
- **[Awesome Oscillator](/awesome-oscillator/)**: a momentum view that Williams placed alongside the Alligator.
- **[Gator Oscillator](/gator-oscillator/)**: a histogram that shows how wide the mouth is and whether it is opening or closing.
- **[ADX](/adx/)**: a second measure of trend strength.

## Sources

- Williams, Bill (1995). *Trading Chaos*. John Wiley & Sons.
- Williams, Bill (1998). *New Trading Dimensions*. John Wiley & Sons.

## FAQ

**What are the Alligator indicator settings?**
The standard settings are a 13-period jaw shifted 8 bars, an 8-period teeth line shifted 5 bars and a 5-period lips line shifted 3 bars. All use smoothed moving averages of the median price, (high + low) / 2.

**What do the Alligator colours mean?**
By default the jaw is blue, the teeth red and the lips green. The colours simply label the slowest, middle and fastest lines. Their order and spacing, not the colours themselves, show whether the market is trending.

**Is the Alligator indicator good for day trading?**
It can be used on any time frame, but on short charts the lines cross often and give many false signals. Many users apply it to higher time frames or pair it with a second filter.

**How do I know when the Alligator is sleeping?**
The three lines are tightly bunched, intertwined or flat, and price keeps crossing them. This usually means a range. Trend-following signals tend to fail in this phase.

**What is the difference between the Alligator and a moving average ribbon?**
Both show several averages together. The Alligator uses exactly three smoothed averages with Fibonacci periods, plus a forward shift, and a set of reading rules from Bill Williams. A ribbon usually has more lines and no fixed rules.
