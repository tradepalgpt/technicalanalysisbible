---
slug: guppy-multiple-moving-average
name: Guppy Multiple Moving Average (GMMA)
aka: [GMMA, Guppy MMA, Guppy ribbons]
type: moving-average
states: [trend]
weak_states: [range]
purposes: [filter, confirmation]
inventor: Daryl Guppy
year: 1990s
default_settings: "Short group EMAs 3, 5, 8, 10, 12, 15; long group EMAs 30, 35, 40, 45, 50, 60"
pairs_with: [exponential-moving-average, moving-average-ribbon, adx, support-and-resistance]
related: [moving-average-ribbon, exponential-moving-average, simple-moving-average, moving-average-crossover, golden-cross, death-cross]
compare: []
glossary: [smoothing, lookback-period, lagging-indicator, trend, crossover, whipsaw]
wave: 3
reviewed: 14 November 2026
---

The Guppy Multiple Moving Average (GMMA) plots two bundles of exponential moving averages on one chart: a short-term group of six lines and a long-term group of six lines. The idea is that the short group shows the behaviour of traders and the long group shows investors. How the groups spread, compress and cross is read as trend strength.

## At a glance

| | |
|---|---|
| Type | Moving average (two-group ribbon) |
| Best market states | Trend |
| Weak in | Ranges, where both groups tangle |
| Best uses | Trend filter, trend confirmation |
| Default settings | Short EMAs: 3, 5, 8, 10, 12, 15. Long EMAs: 30, 35, 40, 45, 50, 60 |
| Created by | Daryl Guppy, 1990s |
| Leading or lagging | Lagging, because every line is a moving average |

## What is the GMMA?

A single moving average shows one speed. A moving average ribbon shows many speeds at once. The GMMA is a ribbon with a specific design: two groups, each with six EMAs, and a gap between them. Daryl Guppy, an Australian trader and author, created it. It is usually dated to the 1990s.

The short group, with periods from 3 to 15, reacts quickly and is meant to reflect the actions of short-term traders. The long group, with periods from 30 to 60, moves slowly and is meant to reflect longer-term investors. Guppy's reading is that a trend is strong when both groups agree and separate, and weak when they compress and tangle.

That interpretation is the creator's framework. It is a way of reading price, not a proven model of who is trading. Many traders colour the groups differently, for example one group in a warm colour and the other in a cool colour, so the structure is clear at a glance.

## Formula

Each line is an ordinary EMA with alpha = 2 / (N + 1).

- Short group: 3, 5, 8, 10, 12 and 15 periods.
- Long group: 30, 35, 40, 45, 50 and 60 periods.

**Worked example.** The EMA(3) has alpha = 2 / 4 = 0.5. If the previous EMA(3) is 100 and the new close is 104:
EMA(3) = 0.5 x 104 + 0.5 x 100 = **102**

The EMA(60) has alpha = 2 / 61 = 0.033. From a previous value of 100 and the same close of 104:
EMA(60) = 0.033 x 104 + 0.967 x 100 = **100.13**

The short line moved 2 points and the long line moved 0.13 points. This difference is what makes the groups separate when price runs.

Note: some platforms offer other period sets or use the simple moving average. The sets above are the widely used standard.

## How to read it

**Direction of both groups.** In an uptrend, price sits above the short group, and the short group sits above the long group. In a downtrend, the order is reversed.

**Separation.** A widening gap between the groups suggests a strengthening trend. A narrowing gap suggests a trend that is losing force.

**Compression within a group.** Lines in the long group packed tightly together suggest a stable, mature trend. Lines in the long group that fan apart show the trend is changing.

**Crossovers.** The short group crossing the long group is the main change-of-trend signal, similar to a moving average crossover, but with a larger set of lines. Many traders wait until the whole short group has crossed.

**Pullbacks.** In a trend, price may pull back into the short group. A pullback that reaches deep into the long group is a warning.

## Best market states

**Trends (best).** The structure is clear when price trends: the groups stay in order and separated.

**Ranges (weak).** In a sideways market, the groups tangle and cross again and again, so the display carries little message other than "no trend".

**Reversals.** The long group is slow, so it confirms a reversal late. The short group warns earlier but is noisy.

**Volatility.** A single large move can push price through the whole short group at once, and the picture changes quickly.

## Confirmation rules

| Check | What to look for |
|---|---|
| Group order | Short group fully above the long group (uptrend) or fully below (downtrend) |
| Separation | Gap between the groups is widening, not shrinking |
| Long group | Lines roughly parallel and sloping in the trend direction |
| Price | Holding above (or below) the short group on a closing basis |
| Crossover | Wait for the whole short group to cross, not a single line |
| Context | Look at the larger time frame to see which way its trend runs |

## Common mistakes

- Reading too much into a single line crossing. The point of the display is the group.
- Using it in a range, where the groups tangle.
- Treating Guppy's "traders and investors" explanation as established fact about who is buying and selling.
- Changing the periods until past charts look neat.
- Ignoring the time frame. A bullish GMMA on a 5-minute chart can sit inside a bearish daily chart.
- Counting on the long group for timing. It is slow and tells you the background, not the entry.

## Pairs well with

- **[Exponential moving average](/exponential-moving-average/)**: every line in the GMMA is an EMA, so knowing the EMA helps you read the lines.
- **[Moving average ribbon](/moving-average-ribbon/)**: the broader family the GMMA belongs to.
- **[ADX](/adx/)**: ADX measures trend strength, and a rising ADX supports a widening GMMA.
- **[Support and resistance](/support-and-resistance/)**: levels add price structure to an indicator built only from averages.

## Sources

- Murphy, John J. (1999). *Technical Analysis of the Financial Markets*. New York Institute of Finance. (General background on moving averages.)

## FAQ

**What are the GMMA periods?**
The standard short group uses EMAs of 3, 5, 8, 10, 12 and 15 periods. The standard long group uses EMAs of 30, 35, 40, 45, 50 and 60 periods. Some platforms let you change these sets.

**Who created the GMMA?**
Daryl Guppy, an Australian trader and author, in the 1990s. He built it around the idea that short-term and long-term participants behave differently. That idea is his framework and is not an academic finding.

**What does it mean when the GMMA groups cross?**
It means the short group has moved through the long group, which is read as a possible change in trend. Because the lines are all averages, the cross comes after the move has begun. Many traders wait for the whole group to cross.

**Is the GMMA the same as a moving average ribbon?**
It is a type of ribbon with a fixed design: two groups of six EMAs. A general ribbon can use any number of lines and any spacing. The GMMA adds the reading of the two groups against each other.

**Does the GMMA work in sideways markets?**
Not well. In a range the groups tangle and cross often, so signals are unreliable. The tangle itself is informative, since it shows that the market is not trending. Many traders use it as a reason to stand aside.
