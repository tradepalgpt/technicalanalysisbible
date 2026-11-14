---
slug: gator-oscillator
name: Gator Oscillator
aka: [Williams Gator Oscillator, Gator]
type: trend
states: [trend]
weak_states: [range]
purposes: [filter]
inventor: Bill Williams
year: 1990s
default_settings: "Built from the Alligator: jaw 13/8, teeth 8/5, lips 5/3; shown as two histograms"
pairs_with: [williams-alligator, awesome-oscillator, support-and-resistance, adx]
related: [williams-fractals, accelerator-oscillator, choppiness-index, trend-intensity-index]
compare: []
glossary: [trend, range, smoothing, histogram]
wave: 3
reviewed: 14 November 2026
---

The Gator Oscillator is a histogram that shows how far apart the three lines of Bill Williams's Alligator indicator are. Wide gaps mean the Alligator's "mouth" is open and a trend is under way. Small gaps mean the mouth is closed, which suggests a sleeping or ranging market. It is a filter, not a signal on its own.

## At a glance

| | |
|---|---|
| Type | Trend indicator |
| Best market states | Trend |
| Weak in | Ranges, as a source of entries |
| Best uses | Trend filter |
| Default settings | Alligator 13/8, 8/5, 5/3 (smoothed averages of median price) |
| Created by | Bill Williams, 1990s |
| Leading or lagging | Lagging; built from smoothed averages |

## What is the Gator Oscillator?

Bill Williams developed a trading approach built around ideas of chaos and market structure, set out in his books in the 1990s. A central tool is the [Alligator](/williams-alligator/), three smoothed moving averages called the jaw, the teeth and the lips. When the three lines are tangled together, Williams calls the Alligator asleep. When they fan out in order, it is awake and feeding, meaning a trend is running.

The Gator Oscillator turns this picture into a two-sided histogram so you can see the spread at a glance. The upper histogram measures the gap between the jaw and the teeth. The lower histogram measures the gap between the teeth and the lips, drawn below the zero line.

The Gator adds no new data. It is the Alligator redrawn, so anything it shows could also be read from the Alligator lines.

## Formula

First build the Alligator, using the median price (high + low) / 2 and a smoothed moving average (SMMA, the Wilder-style average):

- Jaw: 13-period SMMA, shifted forward 8 bars
- Teeth: 8-period SMMA, shifted forward 5 bars
- Lips: 5-period SMMA, shifted forward 3 bars

Then:

- Upper histogram = absolute value of (jaw - teeth)
- Lower histogram = minus the absolute value of (teeth - lips)

**Worked example.** On one bar, the (shifted) jaw is 100, the teeth are 98 and the lips are 97.

Upper = |100 - 98| = **2**
Lower = -|98 - 97| = **-1**

Each bar is coloured: green when the histogram bar is taller than the previous one (the gap is growing) and red when it is shorter (the gap is shrinking). On the lower histogram the comparison uses the bar's size, not its sign.

Note: the forward shift is part of the Alligator on most platforms, but some Gator versions ignore it, so the values can differ.

## How to read it

**Both bars green.** The gaps are growing. The Alligator's mouth is opening, which Williams reads as a trend gaining strength, or "eating".

**One green, one red.** The gaps are mixed. One pair of lines is spreading while the other is closing. This often happens in the later part of a move.

**Both bars red.** The gaps are shrinking. The mouth is closing. The trend is losing strength, which Williams calls the Alligator being "full" and about to rest.

**Very small bars.** Little spread between lines. The Alligator is "sleeping". Many traders stay out or reduce size.

**Order of events.** Williams describes cycles: sleeping, waking, eating, sated, then sleeping again. The Gator is meant to show which phase you are in. This is a descriptive framework from trader education. It has no academic evidence base, so treat it as a way to organise your chart reading.

## Best market states

**Trends (best).** In a smooth trend, the histograms grow, shrink slightly, then grow again, which gives a visual map of how strong the trend is.

**Ranges (weak as signals).** The histogram will show small bars for long stretches. That is its best use in a range: it tells you the market is quiet. It does not give a reliable entry.

**Reversals.** The Gator lags. It will show a closing mouth after the trend has already faded, not a prediction.

**Breakouts.** After a quiet period, a sudden growth of both histograms can indicate the start of a new move. Direction must come from the Alligator or price.

**Volatility.** The size of the bars scales with price movement, so values cannot be compared across different markets without care.

## Settings

| Setting | Values | What it does |
|---|---|---|
| Standard | 13/8, 8/5, 5/3 | Williams's Alligator settings |
| Source price | Median price | (High + low) / 2 |
| Averaging | SMMA | Smoothed moving average, not a simple one |

Most traders keep the standard settings, since the Gator is only meaningful as a companion to the Alligator. Changing the periods changes both indicators and moves you away from Williams's published method. Because the histogram height depends on price scale, there are no fixed overbought or oversold lines. Read the shape and colour rather than the number.

## Common mistakes

- Treating a green bar as a buy signal. It only measures spread, not direction.
- Using it without the Alligator, so that direction is unknown.
- Comparing bar heights across different instruments.
- Trading in the sleeping phase and expecting the Gator to flag a reversal.
- Believing the phase names (sleeping, eating) predict what happens next.
- Altering Alligator settings but still reading the Gator as if Williams's rules applied.

## Pairs well with

- **[Alligator (Williams)](/williams-alligator/)**: the Gator is built from it, so the two are normally viewed together.
- **[Awesome Oscillator](/awesome-oscillator/)**: another Williams tool for momentum, often used together in his method.
- **[Support and resistance](/support-and-resistance/)**: gives the places where the Alligator's state matters most.
- **[ADX](/adx/)**: an independent trend-strength check.

## Sources

- Williams, Bill (1995). *Trading Chaos*. John Wiley & Sons.
- Williams, Bill (1998). *New Trading Dimensions*. John Wiley & Sons.

## FAQ

**What does the Gator Oscillator show?**
It shows the distance between the Alligator's jaw and teeth (upper histogram) and between the teeth and lips (lower histogram). Larger gaps mean the lines are fanned out, as in a trend. Small gaps mean they are bunched, as in a range.

**Is the Gator Oscillator a buy or sell signal?**
No. It has no direction of its own, since both histograms are absolute distances. Direction has to come from the Alligator lines or from price.

**What do the green and red bars mean?**
A green bar means the histogram is bigger than on the previous bar, so the gap is widening. A red bar means it is smaller, so the gap is narrowing. Colours do not show up or down.

**What are the Gator Oscillator settings?**
It has none of its own. It uses the Alligator's settings: 13-period jaw shifted 8, 8-period teeth shifted 5, 5-period lips shifted 3, all smoothed averages of median price.

**Is the Alligator and Gator method proven?**
No academic evidence base exists for Williams's framework. It is a trader-education approach. Test it on your own market before relying on it.
