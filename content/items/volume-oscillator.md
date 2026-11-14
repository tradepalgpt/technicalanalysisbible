---
slug: volume-oscillator
name: Volume Oscillator
aka: [Volume Oscillator, VO, Percentage Volume Oscillator]
type: volume
states: [breakout]
weak_states: [range]
purposes: [confirmation]
inventor: Not attributed to one person
year: Unknown
default_settings: "5 and 10 period averages of volume (common default; platforms differ)"
pairs_with: [volume, support-and-resistance, breakout-trading, on-balance-volume]
related: [volume, on-balance-volume, relative-volume, chaikin-oscillator, klinger-oscillator, price-volume-trend]
compare: []
glossary: [oscillator, moving-average, breakout, smoothing]
wave: 3
reviewed: 14 November 2026
---

The Volume Oscillator compares a short moving average of volume with a longer one and shows the gap between them. A positive reading means recent volume is higher than the longer-term norm, and a negative reading means it is lower. Traders use it to check whether a breakout or trend move has real participation behind it.

## At a glance

| | |
|---|---|
| Type | Volume oscillator |
| Best market states | Breakout |
| Weak in | Sideways ranges, where volume is low and noisy |
| Best uses | Confirmation of breakouts and trend moves |
| Default settings | 5 and 10 period averages (common default; varies by platform) |
| Created by | Not attributed to one person |
| Leading or lagging | Lagging: it is built from averages of past volume |

## What is the Volume Oscillator?

Raw volume bars are hard to judge. Is 2 million shares a lot? It depends on what is normal for that market. The Volume Oscillator solves this by comparing two averages of volume, one fast and one slow. When the fast average is above the slow one, volume is picking up. When it is below, volume is fading.

It says nothing about direction. A positive reading can come from heavy buying or heavy selling. For that reason it is almost always read next to price, not by itself.

There is no single named inventor, and the idea is a standard application of the same moving-average-difference method used in the [MACD](/macd/) and the Percentage Price Oscillator, applied to volume instead of price. Different platforms define it slightly differently, so check the formula in the package you use.

## Formula

A common version, used by many charting packages:

1. Calculate a short moving average of volume (often 5 periods).
2. Calculate a longer moving average of volume (often 10 periods).
3. Volume Oscillator = (short average - long average) / long average x 100.

This gives a percentage. Some platforms show only the plain difference (short minus long), and some use exponential averages while others use simple ones.

**Worked example.** The 5-bar average volume is 1,200 and the 10-bar average is 1,000.
(1,200 - 1,000) / 1,000 x 100 = **+20%**

Recent volume is running 20% above its longer-term average. If the 5-bar average were 800 instead, the result would be (800 - 1,000) / 1,000 x 100 = -20%.

## How to read it

**Above zero.** Recent volume is higher than usual. A price move that happens while the oscillator is above zero has more participation behind it.

**Below zero.** Recent volume is lower than usual. A price move on falling volume is seen as less convincing.

**Breakout confirmation.** A common use is to check volume when price breaks a level. If price clears resistance while the oscillator is rising and positive, the break has more support. If the oscillator is falling or negative, the breakout is more likely to fail, though this is a general tendency and not a rule.

**Trend health.** In many textbook descriptions, a healthy trend shows volume rising with the trend and falling during pullbacks. A rising price with a steadily falling oscillator can mean fewer participants are driving the move.

**Spikes.** A sudden jump in the oscillator can mark a news event, a climax or the start of a new move. It does not say which. See [volume](/volume/) for how to read the bars themselves.

**Divergence.** Some traders compare the oscillator with price highs. Price making higher highs while the oscillator makes lower highs shows weaker participation. This is a weak warning on its own.

## Best market states

**Breakout (best).** The tool answers the question traders ask at a breakout: is there volume behind this? It is most useful at that moment.

**Trend (decent).** It can show whether volume is supporting or fading during a trend.

**Reversal (mixed).** Climactic volume at the end of a move can show as a spike, but spikes also occur mid-trend.

**Range (weak).** Volume in sideways markets is low and erratic, so the oscillator crosses zero often with little meaning.

**Volatility.** Volume tends to rise with volatility. A reading may reflect a volatility event rather than a directional signal.

## Settings

| Setting | Periods | What it does |
|---|---|---|
| Fast | 3 and 7 | Quick to react, noisy |
| Common default | 5 and 10 | A short-term view often used in charting packages |
| Slower | 14 and 28 | Smoother, shows broader changes in participation |

The ratio between the two lengths matters. A very short fast average against a long slow average makes the line swing widely. Moving average type (simple or exponential) also changes the result. Test any setting on the market and time frame you trade.

## Common mistakes

- Reading a positive value as bullish. The tool shows volume, not direction.
- Using it on markets with unreliable volume, such as spot forex, where tick volume is only a proxy.
- Treating a single volume spike as a trend signal.
- Using it in a range and acting on every zero-line cross.
- Comparing values across platforms without checking whether each uses percentages, simple averages or exponential averages.
- Using it alone without looking at the price level being tested.

## Pairs well with

- **[Volume](/volume/)**: the raw bars show the individual spikes the smoothed oscillator hides.
- **[Support and resistance](/support-and-resistance/)**: shows the level, and the oscillator shows whether volume backs the break.
- **[Breakout trading](/breakout-trading/)**: the oscillator is a common filter for deciding whether a breakout looks genuine.
- **[On-balance volume](/on-balance-volume/)**: adds direction, which the Volume Oscillator lacks.

## Sources

- Colby, Robert W. (2003). *The Encyclopedia of Technical Market Indicators*, 2nd edition. McGraw-Hill.
- Murphy, John J. (1999). *Technical Analysis of the Financial Markets*. New York Institute of Finance.

## FAQ

**What does the Volume Oscillator show?**
It shows the difference between a fast and a slow moving average of volume. A positive value means recent volume is above its longer-term average. A negative value means it is below. It does not show whether the volume was buying or selling.

**What is the default Volume Oscillator setting?**
Many platforms use 5 and 10 periods, but defaults vary. Some use other pairs, and some use exponential averages where others use simple ones. Check the settings in your charting package before comparing readings with another source.

**Is the Volume Oscillator bullish or bearish?**
Neither. It measures how active the market is, not which way it is moving. Heavy selling and heavy buying both push it up. Read it alongside price to understand what the volume means.

**How is the Volume Oscillator different from the MACD?**
The MACD takes the difference of two moving averages of price. The Volume Oscillator takes the difference of two moving averages of volume. The method is similar, but they answer different questions: the MACD about momentum, the Volume Oscillator about participation.

**Can the Volume Oscillator confirm a breakout?**
It can add some support. A breakout with a rising, positive reading shows more participation than one with a falling reading. It does not guarantee follow-through, and breakouts on low volume sometimes work too.
