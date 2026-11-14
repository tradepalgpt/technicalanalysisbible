---
slug: percent-above-moving-average
name: Percent Above Moving Average
aka: [Percentage of stocks above moving average, % above 50-day, % above 200-day]
type: breadth-sentiment
states: [trend, reversal]
weak_states: [range]
purposes: [filter]
inventor: Not attributed to one person
year: Unknown
default_settings: "Share of stocks above their 50-day or 200-day simple moving average; common levels 80 and 20"
pairs_with: [advance-decline-line, bullish-percent-index, new-highs-new-lows, simple-moving-average]
related: [bullish-percent-index, advance-decline-line, new-highs-new-lows, mcclellan-summation-index, simple-moving-average]
compare: []
glossary: [trend, overbought, oversold, lookback-period]
wave: 3
reviewed: 14 November 2026
---

Percent Above Moving Average shows what share of the stocks in an index or group are trading above a chosen moving average, such as the 50-day or 200-day. High readings mean most stocks are in uptrends; low readings mean most are in downtrends. Traders use it as a market-health filter and to spot stretched conditions.

## At a glance

| | |
|---|---|
| Type | Breadth indicator |
| Best market states | Trend, reversal |
| Weak in | Sideways markets, where readings sit mid-range |
| Best uses | Filter for market health; watching extremes |
| Default settings | 50-day or 200-day simple moving average; levels near 80 and 20 are common |
| Created by | Not attributed to one person |
| Leading or lagging | Mixed; it is built from moving averages, so it lags, but extremes and divergences can warn |

## What is Percent Above Moving Average?

The indicator asks, for every stock in a group, whether its price is above its moving average. It then reports the percentage that are.

If 300 of the 500 stocks in an index are above their 50-day average, the reading is 60%. That means 60% of the stocks have at least a short-term uptrend, by this definition.

The choice of average sets the time scale:

- **50-day:** a medium-term view that reacts faster.
- **200-day:** a long-term view that moves slowly and is often used to judge a bull or bear market.
- **20-day:** a short-term view used by some traders.

It has no single inventor. It is a simple idea that many charting services publish for popular indexes. It is close in spirit to the [Bullish Percent Index](/bullish-percent-index/), which uses point-and-figure signals instead.

## Formula

Percent above MA = (number of stocks with close above their moving average / total number of stocks) x 100

**Worked example.** An index has 200 stocks. Of these, 130 close above their 50-day simple moving average.
Percent above 50-day = 130 / 200 x 100 = **65**

The next week, 90 stocks are above it:
90 / 200 x 100 = **45**

Data providers publish the figure for common indexes under names like "percent of stocks above 50-day". If you build it yourself, use the same list of stocks each time, because changes in membership change the reading.

## How to read it

**High readings.** Above about 80 means most stocks are above their averages. This shows broad strength, but also that few stocks are left to turn up. Some traders treat it as a stretched condition, though strong rises can stay high for a long time.

**Low readings.** Below about 20 means most stocks are below their averages. This shows broad weakness. Some traders see it as stretched selling, though weak markets can stay weak.

**Midline.** The 50 level is a rough dividing line: above it, more stocks are in uptrends than downtrends.

**Turns from extremes.** Waiting for the reading to turn back from an extreme is more common than acting on the level alone.

**Divergence.** If an index makes a new high but the percentage is lower than at the previous high, fewer stocks are taking part. It warns of narrowing strength.

**Long-term version.** The 200-day version moving above or below about 50% is sometimes used as a rough bull and bear marker for the market.

## Best market states

**Trends (best).** In a healthy rising market, the reading stays high, and weak readings in a downtrend show the decline is broad.

**Reversals (useful).** Extremes and divergences can flag a turn, with price confirmation.

**Ranges (weak).** The reading tends to sit near the middle and swing without direction.

**Volatility.** Quick sell-offs can drop the reading sharply, so watch for the slope as well as the level.

## Settings

| Setting | Choice | Effect |
|---|---|---|
| Moving average length | 20, 50 or 200 days | Shorter reacts faster; longer shows the bigger picture |
| Average type | Simple (usual) | Some use exponential, which changes the counts slightly |
| Levels | 80 and 20 (50-day); 70 and 30 also used | Conventions, not rules; levels differ by length |
| Group | Broad index or sector | Sector groups with few stocks swing more |

The 20 and 80 levels are common for the 50-day version. The 200-day version moves slowly, and traders often use different levels for it.

## Common mistakes

- Reading 80 as a sell signal in a strong uptrend, where the reading can stay high for weeks.
- Comparing readings across different average lengths as if they meant the same thing.
- Using a group with too few stocks, where one stock changes the figure a lot.
- Changing the stock list between readings.
- Using it for timing without any price confirmation.

## Pairs well with

- **[Advance-decline line](/advance-decline-line/)**: another breadth measure that counts participation.
- **[Bullish Percent Index](/bullish-percent-index/)**: a close relative that uses point-and-figure buy signals.
- **[New Highs - New Lows](/new-highs-new-lows/)**: measures stocks at extremes rather than trends.
- **[Simple moving average](/simple-moving-average/)**: the basis of the indicator; knowing it clarifies what each reading means.

## Sources

- Murphy, John J. (1999). *Technical Analysis of the Financial Markets*. New York Institute of Finance. (General background on breadth and moving averages.)

## FAQ

**What does percent above 200-day mean?**
It is the share of stocks in a group trading above their 200-day moving average. A high figure shows broad long-term strength; a low one shows broad long-term weakness. It moves more slowly than the 50-day version.

**Is 80% overbought?**
Many traders treat 80 as a stretched level for the 50-day version. But in strong markets it can stay there for weeks, so it is a prompt to watch for a turn, not a sell signal.

**How is it different from the advance-decline line?**
The advance-decline line counts stocks that closed up or down each day and adds them up. Percent above moving average counts stocks above their trend line on one day. One shows daily changes, the other shows trend status.

**Which moving average should I use?**
The 50-day gives a medium-term view and is the most common for breadth. The 200-day suits long-term market health. Pick one that matches your time frame and stay consistent.

**Can I build it myself?**
Yes, if your platform lets you scan a list of stocks. Count how many are above their moving average and divide by the total. Keep the list fixed and watch for survivorship effects if the membership changes.
