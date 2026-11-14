---
slug: volume-weighted-macd
name: Volume-Weighted MACD
aka: [VW-MACD, VWMACD, Volume Weighted MACD]
type: volume
states: [trend]
weak_states: [range]
purposes: [confirmation]
inventor: Buff Dormeier
year: 2011
default_settings: "12, 26 and 9 periods (same as standard MACD)"
pairs_with: [macd, vwma, divergence, exponential-moving-average]
related: [macd, macd-histogram, vwma, ppo, on-balance-volume, volume-oscillator]
compare: []
glossary: [oscillator, divergence, signal-line, moving-average]
wave: 3
reviewed: 14 November 2026
---

The Volume-Weighted MACD is a version of the MACD that swaps its price moving averages for volume-weighted moving averages. Bars with heavy volume pull the averages harder than quiet bars. Traders use it to see whether a trend's momentum is backed by volume, and to spot divergences that the ordinary MACD would miss.

## At a glance

| | |
|---|---|
| Type | Volume-weighted momentum indicator |
| Best market states | Trend |
| Weak in | Sideways ranges and markets with unreliable volume |
| Best uses | Confirmation of trend momentum, divergence |
| Default settings | 12, 26 and 9 periods, as in the standard MACD |
| Created by | Buff Dormeier, who set it out in his 2011 book (earlier articles may exist) |
| Leading or lagging | Lagging, like the MACD it is based on |

## What is the Volume-Weighted MACD?

The standard [MACD](/macd/) subtracts a 26-period exponential moving average of price from a 12-period one. It treats every bar equally in terms of volume, so a bar with 100 shares counts the same as a bar with 100,000.

The Volume-Weighted MACD, usually credited to Buff Dormeier and described in his book *Investing with Volume Analysis* (2011), changes that. It uses the [volume-weighted moving average](/vwma/) (VWMA) for the two lines. In a VWMA, each bar's price is weighted by its volume. A high-volume bar moves the average more than a low-volume bar. The idea is that price moves backed by heavy trading should count for more.

The effect is subtle in practice. When volume is spread evenly, the two indicators look alike. When volume spikes on one side of a move, the volume-weighted version reacts differently, and the two can diverge. Whether that gives a better signal is a matter of opinion and testing, and there is no strong academic evidence either way.

## Formula

1. Calculate a 12-period VWMA of closing price.
2. Calculate a 26-period VWMA of closing price.
3. VW-MACD line = 12-period VWMA - 26-period VWMA.
4. Signal line = 9-period exponential moving average of the VW-MACD line.
5. Histogram = VW-MACD line - signal line.

The VWMA itself is: sum of (close x volume) over N bars divided by the sum of volume over the same N bars.

**Worked example (a short VWMA).** Three bars close at 10, 11 and 12 with volumes of 100, 100 and 300.
Sum of close x volume = 1,000 + 1,100 + 3,600 = 5,700
Sum of volume = 500
VWMA = 5,700 / 500 = **11.4**

The simple average is 11. The heavy final bar pulls the VWMA up to 11.4. If the 12-period VWMA is 11.4 and the 26-period VWMA is 10.9, the VW-MACD line = 0.5.

Note: platforms differ on details. Some use an exponential average for the signal line and others a simple one, and some build the VW-MACD differently. Check the definition in your charting package.

## How to read it

**Zero line.** The VW-MACD above zero means the short volume-weighted average is above the long one, which is read as upward momentum. Below zero is read as downward momentum.

**Signal-line crossover.** When the VW-MACD line crosses above its signal line, momentum is rising. Crossing below suggests falling momentum. These crossovers lag and produce false signals in sideways markets.

**Histogram.** The histogram shows the gap between the line and its signal. A shrinking histogram can show momentum fading before the lines cross.

**Divergence.** Price makes a higher high while the VW-MACD makes a lower high. This can warn that the rally lacks volume support. See [divergence](/divergence/).

**Comparison with the standard MACD.** If the standard MACD shows strength but the volume-weighted version does not, the move may be happening on thin volume. Some traders watch for that disagreement. It is an informal reading, not a tested rule.

## Best market states

**Trend (best).** Like the MACD, it works best when price moves in a sustained direction, and the volume weighting shows whether trading supports it.

**Reversal (mixed).** Divergences can give early notice, but often early.

**Range (weak).** The lines cross repeatedly around zero, producing many false signals.

**Breakout.** A breakout on heavy volume tends to move the volume-weighted lines more quickly than the plain MACD.

**Volatility.** Large volume spikes during news events can distort the averages for many bars afterwards.

## Settings

| Setting | Periods | What it does |
|---|---|---|
| Faster | 8, 17, 9 | Quicker signals, more noise |
| Default | 12, 26, 9 | Same as the standard MACD, so the two can be compared |
| Slower | 19, 39, 9 | Smoother, fewer signals, slower |

Keeping the standard 12/26/9 makes it easy to compare with the ordinary MACD. Changing periods shifts how many bars each average covers. Test any change on the market and time frame you trade.

## Common mistakes

- Using it on markets with unreliable volume, such as spot forex, where tick volume is only a proxy.
- Assuming it is a better MACD in all cases. Evidence that volume weighting improves results is limited.
- Taking every signal-line crossover in a sideways market.
- Forgetting that one huge volume bar can distort the averages for a long time.
- Treating a disagreement with the standard MACD as a trade signal on its own.
- Comparing readings across platforms without checking how each calculates the line.

## Pairs well with

- **[MACD](/macd/)**: the standard version gives a baseline to compare against.
- **[Volume-weighted moving average](/vwma/)**: the building block, useful for understanding what the indicator is averaging.
- **[Divergence](/divergence/)**: the main reading technique, since disagreement between price and momentum is the common signal.
- **[Exponential moving average](/exponential-moving-average/)**: a trend filter that helps decide whether to take crossovers.

## Sources

- Dormeier, Buff (2011). *Investing with Volume Analysis: Identify, Follow, and Profit from Trends*. FT Press.
- Appel, Gerald (2005). *Technical Analysis: Power Tools for Active Investors*. FT Press. (Source for the standard MACD.)
- Colby, Robert W. (2003). *The Encyclopedia of Technical Market Indicators*, 2nd edition. McGraw-Hill.

## FAQ

**What is the Volume-Weighted MACD?**
It is the MACD built from volume-weighted moving averages instead of exponential moving averages of price. Bars with more volume count for more. The idea is to give heavier-traded moves more weight in the momentum reading.

**How is it different from the standard MACD?**
The standard MACD ignores volume. The volume-weighted version includes it, so a spike in volume moves the averages more. When volume is steady, the two look similar. When volume is uneven, they can differ.

**What are the default settings?**
Most packages use 12, 26 and 9, the same as the standard MACD. The first two numbers are the fast and slow volume-weighted averages and the last is the signal line smoothing. Some platforms allow other values.

**Is the Volume-Weighted MACD better than the MACD?**
There is no solid evidence that it is. It adds volume information, which some traders find helpful, but it also depends on reliable volume data. Compare the two on your own market before relying on either.

**Can I use it on forex?**
You can, but most spot forex volume is tick volume, which counts price changes and not actual trades. That makes the volume weighting less meaningful than on stocks or futures, so treat the signals with extra caution.
