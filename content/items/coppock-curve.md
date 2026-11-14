---
slug: coppock-curve
name: Coppock Curve
aka: [Coppock Indicator, Coppock Guide]
type: momentum-oscillator
states: [reversal]
weak_states: [range, trend]
purposes: [entry]
inventor: Edwin "Sedge" Coppock
year: 1962
default_settings: "10-period weighted average of 14-period ROC plus 11-period ROC (monthly data)"
pairs_with: [support-and-resistance, trendline, simple-moving-average, volume]
related: [rate-of-change, momentum-indicator, macd, true-strength-index, market-cycles]
compare: []
glossary: [momentum, oscillator, smoothing, lookback-period]
wave: 3
reviewed: 14 November 2026
---

The Coppock Curve is a slow momentum indicator designed to spot long-term market bottoms. It adds a 14-period and an 11-period rate of change, then smooths the sum with a 10-period weighted average. On monthly charts, a turn up from below zero was the original buy signal. It is a rare signal, so it needs patience.

## At a glance

| | |
|---|---|
| Type | Long-term momentum oscillator |
| Best market states | Reversal (major lows) |
| Weak in | Ranges and strong established trends |
| Best uses | Entry (long-term buy signal) |
| Default settings | 10-period WMA of ROC(14) + ROC(11), monthly bars |
| Created by | Edwin Coppock, 1962 |
| Leading or lagging | Lagging; it confirms a bottom after it forms |

## What is the Coppock Curve?

Edwin Coppock published the idea in *Barron's* in 1962. He was an economist who developed it after a question put to him by a church group about when to buy shares after a downturn. His reasoning was that the time people take to recover from a loss resembles a period of mourning, so he linked the periods of the rate of change to the recovery time he saw in markets. That story is usually told in the technical analysis literature, and it explains the unusual settings.

The curve was built for monthly data on stock indices, with the aim of finding the point where a major decline turns into a recovery. It was meant as a buy signal only. It gives few signals, typically a handful in a decade on a major index.

Today it is plotted on weekly and daily charts as well, but the original rules were written for monthly bars, so results on shorter time frames are a different use.

## Formula

1. Rate of change over 14 periods: ROC14 = (Close / Close 14 periods ago - 1) x 100
2. Rate of change over 11 periods: ROC11 = (Close / Close 11 periods ago - 1) x 100
3. Sum = ROC14 + ROC11
4. Coppock Curve = 10-period weighted moving average of the Sum

The weighted average gives the newest value a weight of 10, the one before a weight of 9, and so on down to 1.

Some versions use the sum of the percentage changes; others use a simple difference. The result is similar.

**Worked example (shortened).** Suppose on a monthly chart ROC14 is -10 and ROC11 is -6, so the Sum is -16. If the weighted average of the last 10 sums is -12, the Coppock value is **-12**. A few months later, with sums improving to -4, -2, +1, the weighted average rises toward -5, then -3. When the curve turns up from below zero, that is the classic buy signal.

## How to read it

**Classic buy signal.** The curve is below zero and turns up. Coppock's original rule was to look for the first upturn from a low reading.

**Zero line.** A cross above zero is sometimes used as a confirmation that the recovery is established.

**No sell signal.** Coppock did not design a sell rule. Many users exit on other signals, such as a trendline break or a moving average cross, or when the curve stalls and turns down from a high.

**Time frame.** The signal is slow. By the time it turns, price may already have risen a good deal.

## Best market states

**Major reversals (best).** The curve was made for the end of long declines in broad stock indices.

**Strong uptrends (weak).** There is nothing to signal, as the curve stays high and above zero.

**Ranges (weak).** Without a deep fall to recover from, the curve wiggles around zero and the upturns are meaningless.

**Individual stocks and other markets.** It was designed for indices. It may behave differently on single shares, forex or commodities, where recoveries do not follow the same pattern.

## Settings

| Setting | Values | What it does |
|---|---|---|
| Original | 14 and 11 ROC, 10 WMA, monthly | Coppock's design |
| Weekly use | Same periods on weekly bars | Faster, but a different use from the original |
| Short variations | e.g. ROC 10 and 7, WMA 6 | More signals, less meaning |

The periods are an unusual set, and they were not derived from a statistical study. Changing them gives more signals but loses the link to the original idea.

## Common mistakes

- Using the monthly settings on a daily chart and expecting the same long-term meaning.
- Treating it as a sell signal when it turns down. It was designed as a buy tool only.
- Applying it to a single stock without testing whether the pattern fits.
- Buying every upturn, including those that start from a high level.
- Expecting frequent signals. The method is built for a few per decade.

## Pairs well with

- **[Support and resistance](/support-and-resistance/)**: a Coppock upturn at a long-term support area is stronger evidence.
- **[Trendline](/trendline/)**: a break of a downtrend line alongside the upturn adds price confirmation.
- **[Simple moving average](/simple-moving-average/)**: a price close above a long average, such as 10 months, is a common trend check.
- **[Volume](/volume/)**: rising volume on the recovery shows broader participation.

## Sources

- Pring, Martin J. (2002). *Technical Analysis Explained*, 4th edition. McGraw-Hill. (Pring did much to popularise the Coppock Curve.)

## FAQ

**Who created the Coppock Curve?**
Edwin Coppock, an American economist, published it in *Barron's* in 1962. It was intended to find buying points after major declines in stock indices, using monthly data.

**What does it mean when the Coppock Curve turns up from below zero?**
That is the classic buy signal. It means that long-term momentum has stopped falling and begun to recover. It is a slow signal that confirms a recovery after it has started, not a bottom-picking tool.

**Why does it use 14 and 11 periods?**
The story passed down in technical analysis books is that Coppock based them on how long people take to recover from a loss. There is no statistical proof behind the numbers, and they are best seen as his chosen settings.

**Can I use the Coppock Curve on a daily chart?**
You can plot it, but the original was built for monthly bars. On a daily chart it behaves as a different, faster indicator, and the original rules and their meaning do not carry over.

**Does it give sell signals?**
Not in Coppock's design. Many people use other tools to exit, such as a trailing stop or a break of a trendline.
