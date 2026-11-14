---
slug: percent-b
name: "%B (Bollinger)"
aka: [Percent B, %b, Bollinger %B]
type: volatility
states: [range, reversal]
weak_states: [trend, breakout]
purposes: [entry]
inventor: John Bollinger
year: 1980s
default_settings: "20-period average, 2 standard deviations; reads 0 to 1 inside the bands"
pairs_with: [bollinger-bands, bollinger-band-width, support-and-resistance, adx]
related: [bollinger-squeeze, keltner-channels, donchian-channels, standard-deviation]
compare: [bollinger-bands-vs-keltner-channels, donchian-vs-bollinger]
glossary: [overbought, oversold, volatility, mean, lookback-period, divergence]
wave: 2
reviewed: 14 November 2026
---

%B (percent B) is an indicator that shows where the latest price sits inside its Bollinger Bands. A reading of 0 means price is on the lower band, 1 means it is on the upper band, and 0.5 means it is on the middle line. Values above 1 or below 0 mean price has closed outside the bands. Traders use it to turn the bands into a single number they can compare and test.

## At a glance

| | |
|---|---|
| Type | Volatility-based position indicator |
| Best market states | Range, reversal |
| Weak in | Strong trends and breakouts, where price rides one band |
| Best uses | Entry timing |
| Default settings | 20 periods, 2 standard deviations |
| Created by | John Bollinger (Bollinger Bands, 1980s) |
| Leading or lagging | Lagging (built from past closes), but it adapts as volatility changes |

## What is %B?

[Bollinger Bands](/bollinger-bands/) draw an envelope around price: a middle line (a moving average) with an upper and lower band set a fixed number of standard deviations away. They are easy to see on a chart but hard to compare across markets or to test in code, because "price is near the upper band" is a loose idea.

%B fixes that. It converts the picture into one number. It asks: how far up the distance between the lower and upper band is the price? That makes it possible to plot below the chart like an oscillator, set exact rules, and scan many markets at once.

John Bollinger developed the bands in the 1980s and wrote about %B in his book *Bollinger on Bollinger Bands* (McGraw-Hill, 2001). Because the bands widen and narrow with volatility, %B adjusts automatically. A reading of 0.8 means the same relative position whether the market is calm or wild.

## Formula

%B = (Price - Lower band) / (Upper band - Lower band)

The bands are the standard ones:

- Middle band = 20-period simple moving average of the close
- Upper band = middle band + 2 standard deviations of the last 20 closes
- Lower band = middle band - 2 standard deviations of the last 20 closes

**Worked example.** Say the lower band is 90, the upper band is 110 and the close is 105.
%B = (105 - 90) / (110 - 90) = 15 / 20 = **0.75**

If the close is exactly 110, %B = 20 / 20 = 1. If the close is 112, %B = 22 / 20 = 1.1, which is above the band. If the close is 88, %B = -2 / 20 = -0.1, below the lower band.

Note: some platforms show %B as a percentage (0 to 100) rather than 0 to 1. The meaning is the same, only multiplied by 100. Some tools use a population standard deviation and others a sample one, so values can differ very slightly between packages.

## How to read it

**Above 1 and below 0.** Price has closed outside a band. In a range this often marks a stretched move that may snap back. In a strong trend it often marks strength, not exhaustion. Bollinger himself stressed that a touch of a band is not a signal on its own.

**Around 0.5.** Price is near the average. A %B that keeps crossing 0.5 usually describes a market with no clear direction.

**Staying above 0.5.** In an uptrend, %B often stays between 0.5 and 1 and dips only to the middle line. That pattern shows the buyers still control the move, so it is mostly a trend reading rather than a reversal one.

**Divergence with price.** Price makes a new high but %B makes a lower high, meaning the new high was not as far outside the band as the last. This is a [divergence](/divergence/) and is one of the uses Bollinger described. It is a warning, not a timing signal.

**Range reversal rules.** In a sideways market a simple rule is to look for %B near 0 for long ideas and near 1 for short ideas, then wait for price to turn back before acting.

## Best market states

**Ranges (best).** When price swings between support and resistance, the bands tend to mark the edges and %B near 0 or 1 lines up with them. This is where mean-reversion entries make most sense.

**Reversals (good, with care).** A move outside the band followed by a close back inside, ideally with a divergence in %B, is a common reversal clue. It still needs a price signal, such as a failure at a known level.

**Trends (weak).** In a strong trend price can "walk the band" with %B near 1 or 0 for many bars. Fading it is the usual way to lose with this tool.

**Breakouts (weak).** A breakout often starts with a close outside the bands, so reading %B above 1 as a sell signal does the opposite of what is wanted. Pair it with [Bollinger Band Width](/bollinger-band-width/) to see whether bands were squeezed before the move.

**Volatility.** %B has volatility built in, because the bands do, but it does not tell you how wide the bands are. For that you need band width.

## Settings

| Setting | Period / deviations | What it does |
|---|---|---|
| Short-term | 10 periods, 1.5 | Reacts quickly, more touches outside the bands, more noise |
| Default | 20 periods, 2 | Bollinger's standard. A balanced choice for daily charts |
| Long-term | 50 periods, 2.5 | Smoother, fewer signals, slower to react |

Bollinger suggested widening the deviation setting as the period grows, which is why the long-term row uses 2.5. These are common starting points, not rules. Whatever you choose, test it on the market and time frame you trade.

## Common mistakes

- Treating a reading above 1 as an automatic sell and below 0 as an automatic buy.
- Using %B in a strong trend where price keeps riding one band.
- Forgetting that %B says nothing about how wide the bands are. A reading of 0.9 in a tight squeeze means something very different from 0.9 in wide bands.
- Comparing values between platforms without checking whether they show 0 to 1 or 0 to 100.
- Changing the period and deviations after each loss until past data looks good.
- Placing a stop on an indicator level instead of on price.

## Pairs well with

- **[Bollinger Bands](/bollinger-bands/)**: %B is built from them, so keep the bands visible for context.
- **[Bollinger Band Width](/bollinger-band-width/)**: shows whether the bands are tight or wide, which %B alone cannot tell you.
- **[Support and resistance](/support-and-resistance/)**: a %B extreme at a known level is more meaningful than one in open space.
- **[ADX](/adx/)**: a low ADX suggests a range, which is where %B reversal readings work best.

## Sources

- Bollinger, John (2001). *Bollinger on Bollinger Bands*. McGraw-Hill.
- Murphy, John J. (1999). *Technical Analysis of the Financial Markets*. New York Institute of Finance.

## FAQ

**What does %B of 1 mean?**
It means the latest price is exactly on the upper Bollinger Band. A reading above 1 means price has closed above the band. In a range this may be stretched, but in a strong trend it often just reflects strength and can last a while.

**What is the difference between %B and Bollinger Bands?**
Bollinger Bands are the envelope drawn on the price chart. %B is a number calculated from them that tells you where price sits inside the envelope. It lets you plot the position below the chart, set exact rules and scan markets.

**Can %B go below 0?**
Yes. A reading below 0 means the close is under the lower band. The reading has no hard floor or ceiling, although most of the time, with a 2 standard deviation setting, it stays between 0 and 1.

**What is the best %B setting?**
There is no single best setting. The standard 20 periods and 2 standard deviations suits many daily charts. Shorter periods give more signals and more noise. Test any choice on the market and time frame you trade.

**Is %B a buy and sell signal?**
Not on its own. In ranges, readings near 0 or 1 can mark good areas to look for entries, but you still need a price reason to act. In trends the same readings can simply show strength.
