---
slug: williams-fractals
name: Fractals (Williams)
aka: [Williams Fractals, Fractal indicator, Bill Williams fractals]
type: trend
states: [trend, breakout]
weak_states: [range]
purposes: [stop, entry]
inventor: Bill Williams
year: 1995
default_settings: "5-bar pattern: a centre bar with two lower highs (or two higher lows) on each side"
pairs_with: [williams-alligator, awesome-oscillator, swing-highs-lows, support-and-resistance]
related: [market-structure, structure-stop, break-of-structure, equal-highs-lows, donchian-channels]
compare: []
glossary: [swing-high, swing-low, breakout, lookback-period]
wave: 2
reviewed: 14 November 2026
---

A Williams fractal is a simple five-bar price pattern that marks a local high or low. An up fractal is a bar with a higher high than the two bars on each side. A down fractal is a bar with a lower low than the two bars on each side. Traders use them to place stops and spot breakout levels.

## At a glance

| | |
|---|---|
| Type | Trend/structure marker |
| Best market states | Trends and breakouts |
| Weak in | Ranges, where many fractals appear with no meaning |
| Best uses | Stop placement, entry on a break |
| Default settings | 5-bar pattern (2 bars each side of the centre bar) |
| Created by | Bill Williams, 1990s |
| Leading or lagging | Lagging by design: a fractal is only confirmed 2 bars after the extreme |

## What are Williams fractals?

Bill Williams described fractals in his 1995 book *Trading Chaos*. In his system the word comes from chaos theory, where a pattern repeats at different scales. In practice, a fractal is a very short-term swing high or swing low.

The indicator is mechanical. It does not need a trend or an opinion. It labels every bar that stands out from its neighbours:

- **Up fractal (bearish fractal):** a high that is higher than the highs of the two bars before it and the two bars after it.
- **Down fractal (bullish fractal):** a low that is lower than the lows of the two bars before it and the two bars after it.

Because it needs two bars after the extreme to confirm, the marker appears with a delay. The label is placed on the centre bar after the fact. This means a live chart can show an apparent fractal that disappears on the next bar.

Williams used fractals together with his [Alligator](/williams-alligator/): a fractal signal counts only when it breaks beyond the Alligator's mouth. Fractals also function as ordinary [swing highs and lows](/swing-highs-lows/) at a very small scale.

## How it is identified

For an up fractal, look at five consecutive bars, numbered 1 to 5.

1. Bar 3 has the highest high of the five.
2. Bars 1 and 2 have lower highs than bar 3.
3. Bars 4 and 5 have lower highs than bar 3.

For a down fractal, bar 3 has the lowest low of the five.

**Worked example.** Highs of five bars: 10, 11, 13, 12, 11.
Bar 3 (13) is above bars 1, 2, 4 and 5, so bar 3 is an up fractal at 13.

If the highs were 10, 11, 13, 13, 11, bars 3 and 4 tie. Under the strict definition this is not a fractal, though platforms handle ties differently and some accept the pattern with equal highs.

Some platforms let you change the number of bars from 2 to a larger number on each side, for example 3 or 5, which finds larger swings.

## How to read it

**Stop placement.** In an uptrend, trail the stop just below the latest down fractal. In a downtrend, trail it above the latest up fractal. This follows the market structure and moves only as new fractals form.

**Breakout entries.** Williams' basic idea is to enter when price breaks the most recent fractal: above an up fractal for a long, below a down fractal for a short. Many traders only take breakouts in the direction of a trend filter.

**Alligator filter.** A bullish fractal signal is valid only if it is above the Alligator's teeth line, and a bearish one only if below. Fractals inside the mouth are ignored.

**Support and resistance.** Fractal highs and lows often act as short-term levels, because other traders see the same swing points.

**Clusters.** Many fractals close together point to a sideways market. Few fractals and a clear stair-step of higher lows or lower highs point to a trend.

## Best market states

**Trends (best).** Fractals mark pullback ends well in a trend, which makes them useful as stop points.

**Breakouts (good).** A break of a recent fractal is a simple, objective definition of a breakout.

**Ranges (weak).** In a sideways market, fractals appear constantly and every break is likely to fail.

**Reversals (limited).** A break of the latest opposite fractal can signal a change of structure, but it often comes after the first move.

**Volatility.** In very choppy markets, five-bar fractals are too small to be meaningful. A larger bar count may help.

## Confirmation rules

| Check | What to look for |
|---|---|
| Two bars after | The fractal is only valid once two further bars have closed lower (up fractal) or higher (down fractal) |
| Trend filter | Take only breaks in the direction of the Alligator or another trend tool |
| Break | A close beyond the fractal level, not just a wick |
| Stop | Beyond the opposite fractal or the swing that started the move |
| Ties | Decide in advance how to treat equal highs or lows |

## Common mistakes

- Treating a fractal as a reversal signal. It is only a swing marker.
- Acting on a fractal before two bars have confirmed it.
- Trading every fractal breakout in a range.
- Ignoring the delay, which makes the marker look more precise on a historical chart than it is live.
- Using stops that are too tight, right at the fractal, where normal noise can reach them.
- Comparing results across platforms without checking how each treats ties.

## Pairs well with

- **[Alligator (Williams)](/williams-alligator/)**: the filter Williams used so that only fractals outside the mouth count.
- **[Awesome Oscillator](/awesome-oscillator/)**: a momentum view that can confirm a fractal breakout.
- **[Swing highs and lows](/swing-highs-lows/)**: fractals are small swings, so larger swings give the bigger structure.
- **[Support and resistance](/support-and-resistance/)**: a fractal at an established level has more weight.

## Sources

- Williams, Bill (1995). *Trading Chaos*. John Wiley & Sons.
- Williams, Bill (1998). *New Trading Dimensions*. John Wiley & Sons.

## FAQ

**What is a Williams fractal?**
It is a five-bar pattern in which the centre bar has the highest high (up fractal) or the lowest low (down fractal) of the five. It marks a short-term swing point and is only confirmed after the second following bar closes.

**Do fractals repaint?**
A fractal cannot be confirmed until two bars after the extreme, so a marker may not exist on the most recent bars. Once confirmed it does not change, but on a live chart a possible fractal can disappear on the next bar.

**How do you use fractals for a stop loss?**
In an uptrend, many traders place the stop just below the most recent down fractal and move it up as newer ones form. In a downtrend they place it above the latest up fractal. This keeps the stop tied to market structure.

**What is the difference between fractals and swing highs?**
They are the same idea at different scales. A Williams fractal is a very small swing using a fixed five-bar rule. A swing high usually refers to a more significant peak chosen by eye or a larger bar count.

**Can I change the number of bars in a fractal?**
Yes. Many platforms allow a larger number of bars on each side of the centre bar. A larger value finds only bigger swings with fewer markers, but each is confirmed later.
