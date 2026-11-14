---
slug: know-sure-thing
name: Know Sure Thing (KST)
aka: [KST, Summed Rate of Change, Pring's KST]
type: trend
states: [trend]
weak_states: [range]
purposes: [confirmation]
inventor: Martin Pring
year: 1990s
default_settings: "Four ROC/SMA pairs (10/10, 15/10, 20/10, 30/15) weighted 1 to 4; signal line 9-period SMA"
pairs_with: [macd, exponential-moving-average, support-and-resistance, adx]
related: [rate-of-change, coppock-curve, trix, awesome-oscillator, schaff-trend-cycle]
compare: []
glossary: [momentum, oscillator, smoothing, divergence, crossover]
wave: 3
reviewed: 14 November 2026
---

The Know Sure Thing (KST) adds together four smoothed rates of change, each covering a different time span, with the longer spans given more weight. The result is a single momentum line that swings around zero and tracks larger cycles. Traders use it to confirm trend direction and spot momentum turns.

## At a glance

| | |
|---|---|
| Type | Trend / momentum indicator |
| Best market states | Trend |
| Weak in | Ranges |
| Best uses | Confirmation |
| Default settings | ROC 10, 15, 20, 30 with SMAs 10, 10, 10, 15; weights 1, 2, 3, 4; 9-period signal |
| Created by | Martin Pring, 1990s |
| Leading or lagging | Lagging, with divergences that can warn earlier |

## What is the Know Sure Thing?

Martin Pring is a market analyst known for his work on market cycles and momentum. He built the KST to follow price cycles of different lengths at once. Short, medium and long rates of change each capture a different rhythm of the market. Adding them gives a line that responds to all of them.

Despite the name, the KST gives no certainty. It is a lagging indicator and is wrong regularly, as any momentum tool is.

The underlying idea is that major turns in the market tend to show up in more than one cycle length at the same time, so a combined measure may highlight them.

## Formula

Rate of change (ROC) is the percentage change in price over n bars:

ROC(n) = 100 x (close - close n bars ago) / close n bars ago

For the commonly used daily KST:

1. RCMA1 = 10-period SMA of ROC(10)
2. RCMA2 = 10-period SMA of ROC(15)
3. RCMA3 = 10-period SMA of ROC(20)
4. RCMA4 = 15-period SMA of ROC(30)
5. **KST = 1 x RCMA1 + 2 x RCMA2 + 3 x RCMA3 + 4 x RCMA4**
6. Signal line = 9-period SMA of the KST

**Worked example.** Suppose the four smoothed ROC values are 1.0, 2.0, 3.0 and 4.0.

KST = 1 x 1.0 + 2 x 2.0 + 3 x 3.0 + 4 x 4.0 = 1 + 4 + 9 + 16 = **30**

Note: different sets of periods are used for different time frames. Platforms usually ship with the daily set above, but the default can differ.

## How to read it

**Zero line.** KST above zero means weighted momentum is positive across the cycles; below zero, negative. A cross of zero is a basic trend-change signal.

**Signal line crossover.** The KST crossing above its 9-period signal line is read as improving momentum, and below as fading momentum. These crossovers come often and are weaker in flat markets.

**Divergence.** Price making a new high while the KST makes a lower high suggests momentum is waning. Divergences are warnings that can run long before price reacts.

**Overbought and oversold zones.** There are no fixed bounds. Users mark extremes by looking at past peaks and troughs of the line on the same market.

**Turning points.** Because the longer ROC terms have heavier weight, the KST changes direction slowly. That means its turns count for more but arrive later.

## Best market states

**Trends (best).** In a trending market the KST rises or falls smoothly, with its signal line crossovers mostly in line with the major move.

**Ranges (weak).** In a sideways market the line oscillates around zero and crossovers give little follow-through.

**Reversals (mixed).** At major turns the KST can reverse direction at roughly the same time as price. Used at multi-month lows, its direction change is one of the things analysts look for. The record of such calls is mixed, and the line is slow to react.

**Breakouts.** After a breakout the KST usually follows, which can serve as confirmation of strength.

**Volatility.** Higher volatility widens the swings in the KST. Values from different markets are not directly comparable.

## Settings

| Setting | Values | What it does |
|---|---|---|
| Daily set | ROC 10/15/20/30, SMA 10/10/10/15 | The common default |
| Weights | 1, 2, 3, 4 | Gives more weight to longer cycles |
| Signal | 9-period SMA | Used for crossover signals |
| Other time frames | Different period sets exist | Some sources give other sets for weekly or monthly charts |

The settings were designed together. Changing one of them alters the balance between short and long cycles, so most users keep the whole set unchanged. Some platforms let you change each part freely, and others use a fixed set. Check which one you have before comparing results.

## Common mistakes

- Reading the name literally, as if it promised certainty.
- Using signal line crossovers in a flat market and treating each as a trend change.
- Comparing KST values across instruments of different volatility.
- Changing individual periods without understanding how they interact.
- Waiting for the KST to confirm a turn that price has already completed.
- Treating a divergence as a timing tool when it is only a warning.

## Pairs well with

- **[MACD](/macd/)**: another momentum view built from averages; agreement adds weight to a signal.
- **[Exponential moving average](/exponential-moving-average/)**: gives a price-based trend line to compare with the KST's direction.
- **[Support and resistance](/support-and-resistance/)**: shows the levels where a KST turn is most worth noticing.
- **[ADX](/adx/)**: tells you whether the market is trending enough for the KST to be useful.

## Sources

- Pring, Martin J. (2002). *Technical Analysis Explained* (4th ed.). McGraw-Hill.
- Murphy, John J. (1999). *Technical Analysis of the Financial Markets*. New York Institute of Finance. (Background on rate of change and momentum.)

## FAQ

**What does the Know Sure Thing indicator do?**
It combines four smoothed rates of change over different time spans into one weighted momentum line. The longer spans have more weight. The result is a smooth oscillator that follows larger cycles and crosses zero when overall momentum changes sign.

**What are the standard KST settings?**
The common daily set uses rates of change over 10, 15, 20 and 30 bars, smoothed over 10, 10, 10 and 15 bars, with weights 1, 2, 3 and 4. The signal line is a 9-period average. Platforms can differ.

**Is the KST better than MACD?**
Neither is better in general. KST blends several cycle lengths and so moves more slowly, while MACD uses two EMAs. They often agree. The difference is in how many time spans they combine.

**Who created the KST?**
Martin Pring. He introduced it in the 1990s and discussed it further in his books on technical analysis.

**Can the KST be used on any time frame?**
Yes. Different period sets exist for different chart lengths. If you use the daily defaults on another time frame, the cycles it tracks will change.
