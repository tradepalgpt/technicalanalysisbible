---
slug: accelerator-oscillator
name: Accelerator Oscillator
aka: [AC, Accelerator/Decelerator Oscillator, Bill Williams Accelerator]
type: momentum-oscillator
states: [trend]
weak_states: [range]
purposes: [confirmation]
inventor: Bill Williams
year: 1990s
default_settings: "Awesome Oscillator (5, 34) minus its 5-period average; zero line"
pairs_with: [awesome-oscillator, williams-alligator, williams-fractals, support-and-resistance]
related: [awesome-oscillator, macd-histogram, momentum-indicator, rate-of-change, williams-alligator]
compare: []
glossary: [oscillator, momentum, smoothing, lookback-period]
wave: 3
reviewed: 14 November 2026
---

The Accelerator Oscillator (AC) measures whether the momentum shown by the Awesome Oscillator is speeding up or slowing down. It is the Awesome Oscillator minus its own 5-period average, drawn as a histogram around zero. Bill Williams intended it as an early hint of a change in momentum, before price itself changes direction.

## At a glance

| | |
|---|---|
| Type | Momentum oscillator (histogram) |
| Best market states | Trend |
| Weak in | Ranges, where it flips colour constantly |
| Best uses | Confirmation |
| Default settings | Awesome Oscillator 5 and 34, smoothed by 5 |
| Created by | Bill Williams, 1990s |
| Leading or lagging | Faster than most momentum tools, but still built from past prices |

## What is the Accelerator Oscillator?

Momentum has a speed, and that speed has its own rate of change. If the Awesome Oscillator shows how fast price is moving, the Accelerator Oscillator shows whether that speed is rising or falling. Williams used the idea that a car must slow down before it turns round: momentum tends to change before price does.

It belongs to the toolset in Williams's trading books, which also include the [Williams Alligator](/williams-alligator/) and [Williams Fractals](/williams-fractals/). Williams described it in *Trading Chaos* and *New Trading Dimensions*, both published by Wiley in the 1990s. The exact year it first appeared is not clear to me, so this guide gives only the decade.

Because it is a second layer on top of the [Awesome Oscillator](/awesome-oscillator/), it is faster and noisier than that tool.

## Formula

1. Median price = (High + Low) / 2
2. Awesome Oscillator (AO) = 5-period simple average of median price - 34-period simple average of median price
3. AC = AO - 5-period simple average of AO

**Worked example.** Suppose the AO is 1.20 and the average of the last five AO values is 0.90.
AC = 1.20 - 0.90 = **+0.30**

If the next AO is 1.30 and the average of AO values is 1.00, AC is still +0.30. If the AO rises to 1.35 but the average rises to 1.10, AC falls to +0.25: momentum is still up, but its speed is easing.

Most platforms colour each bar green when the value is higher than the previous bar, and red when it is lower.

## How to read it

**Zero line.** AC above zero means momentum is accelerating upwards relative to its recent average. Below zero means the reverse.

**Bar colour.** Green bars show acceleration, red bars deceleration. A string of bars of one colour shows that change in speed is persistent.

**Williams's counting rules.** As Williams is usually summarised, a buy signal above the zero line needs two consecutive green bars, and below the zero line three consecutive green bars. Sell signals mirror this with red bars. Treat these counts as his rules of thumb, not tested thresholds.

**Early warning.** A run of red bars while price still rises is read as a sign that the push is losing speed.

## Best market states

**Trends (best).** In a trend, AC can show when a push is speeding up or fading, which helps judge whether to stay with the move.

**Ranges (weak).** Price oscillates, so AC changes colour every few bars. Most of those signals are noise.

**Reversals (mixed).** AC may flag a slowdown early, but many slowdowns end with a pause, not a reversal.

**Volatility.** Very quiet markets make AC tiny and erratic. Fast, jumpy markets produce large swings that are hard to compare.

## Settings

| Setting | Values | What it does |
|---|---|---|
| Default | AO 5/34, smoothing 5 | Williams's standard |
| Faster | AO 3/21, smoothing 3 | More signals, more noise |
| Slower | AO 8/55, smoothing 8 | Smoother, fewer signals |

Few traders change the defaults, because the oscillator is usually used inside Williams's own system.

## Common mistakes

- Acting on one coloured bar. A single bar is the most common source of false signals.
- Using it in a sideways market, where its colour changes constantly.
- Treating a change of colour as a trend reversal. It means only that the speed of momentum changed.
- Ignoring the Awesome Oscillator that it is built from.
- Backing a rule such as "two green bars" without testing it on the market and time frame you trade.

## Pairs well with

- **[Awesome Oscillator](/awesome-oscillator/)**: the base measure. AC is the speed of AO, so reading both gives the fuller picture.
- **[Williams Alligator](/williams-alligator/)**: shows whether a trend exists. AC is more useful when the Alligator is awake.
- **[Williams Fractals](/williams-fractals/)**: gives swing points for entries and stops.
- **[Support and resistance](/support-and-resistance/)**: AC says nothing about price levels, so these give the structure.

## Sources

- Williams, Bill (1995). *Trading Chaos*. Wiley.
- Williams, Bill and Williams, Justine (1998). *New Trading Dimensions*. Wiley.

## FAQ

**What is the difference between the Accelerator Oscillator and the Awesome Oscillator?**
The Awesome Oscillator compares a short and a long average of median price to show momentum. The Accelerator Oscillator subtracts a 5-period average of the AO from the AO, so it shows the speed of that momentum. AC reacts faster and is noisier.

**What do the green and red bars mean?**
Green means the value is higher than on the previous bar; red means it is lower. The colour shows direction of change, not whether the value is above or below zero. A green bar below zero is still a negative reading.

**Is the Accelerator Oscillator a leading indicator?**
Williams described it as an early warning. It reacts sooner than the Awesome Oscillator, but it is still calculated from past prices, so it does not forecast anything.

**What are the default settings?**
Nearly all platforms use the Awesome Oscillator with 5 and 34 periods, then a 5-period simple average of the AO. The inputs are median prices, not closes.

**Does it work on its own?**
It is weak alone. Its signals are frequent and many are false in ranges. Williams used it with other tools, and most traders do the same.
