---
slug: bollinger-band-width
name: Bollinger Band Width
aka: [BBW, BandWidth, Bollinger BandWidth]
type: volatility
states: [volatility, breakout]
weak_states: [trend]
purposes: [filter]
inventor: John Bollinger
year: 1980s
default_settings: "20-period average, 2 standard deviations"
pairs_with: [bollinger-bands, percent-b, bollinger-squeeze, volume]
related: [keltner-channels, standard-deviation, atr, ttm-squeeze, donchian-channels, historical-volatility]
compare: [donchian-vs-bollinger, bollinger-bands-vs-keltner-channels]
glossary: [volatility, consolidation, breakout, lookback-period, mean, whipsaw]
wave: 2
reviewed: 14 November 2026
---

Bollinger Band Width measures how far apart the upper and lower Bollinger Bands are, relative to the middle line. A low reading means the bands are tight and price has been quiet. A high reading means they are wide and price has been moving a lot. Traders use it to find squeezes, which often come before larger moves, and to filter out quiet markets.

## At a glance

| | |
|---|---|
| Type | Volatility indicator |
| Best market states | Volatility, breakout |
| Weak in | Trends, where it says little about direction |
| Best uses | Filter |
| Default settings | 20 periods, 2 standard deviations |
| Created by | John Bollinger (Bollinger Bands, 1980s) |
| Leading or lagging | Lagging as a measure, but a very narrow reading is often read as a warning of expansion |

## What is Bollinger Band Width?

[Bollinger Bands](/bollinger-bands/) widen when price becomes more volatile and narrow when it quietens. You can see that on a chart, but it is hard to say how narrow is "narrow". Band Width puts the gap between the bands into a single line below the chart so you can compare it against its own history.

John Bollinger, who created the bands in the 1980s, calls the measure BandWidth and discusses it in *Bollinger on Bollinger Bands* (McGraw-Hill, 2001). He pointed out that periods of low volatility tend to be followed by periods of high volatility and the other way round. This is why a very low reading attracts attention. It tells you the market is compressed. It does not tell you which way price will break.

## Formula

Band Width = (Upper band - Lower band) / Middle band

With the standard settings:

- Middle band = 20-period simple moving average of the close
- Upper band = middle band + 2 standard deviations
- Lower band = middle band - 2 standard deviations

**Worked example.** The middle band is 100, the upper band is 106 and the lower band is 94.
Width = (106 - 94) / 100 = 12 / 100 = **0.12**, or 12 per cent when multiplied by 100.

Later, the bands narrow to 103 and 97 around the same 100.
Width = (103 - 97) / 100 = 0.06, or 6 per cent. Volatility has halved.

Note: some platforms leave out the division by the middle band and show only the raw gap between the bands. That version cannot be compared across markets or over long periods when price changes a lot. Check which version your platform uses.

## How to read it

**Squeeze.** A reading near its lowest level for a long period is called a squeeze. Many traders use the lowest reading in the last six months (about 125 daily bars) as a reference. That window is a convention from Bollinger's writing and a common choice, not a hard rule. A squeeze tells you energy is stored, not which direction it will go. See [Bollinger squeeze](/bollinger-squeeze/).

**Expansion.** A sharp rise from a low reading shows volatility returning. If price closes beyond a band at the same time, that supports a breakout idea.

**Very high readings.** After a big move, a record-high width often marks a late stage of the move. Volatility tends to come back down after a spike, so this reading warns that quieter conditions may follow. It does not give a reversal signal.

**Trend in the width line.** A rising width means volatility is increasing; a falling width means it is contracting. Compare with the line's own recent highs and lows rather than with fixed numbers, since "normal" differs between markets.

**False squeeze.** Width can be low for a long time without a breakout. A squeeze is a setup, not a trigger. Most traders wait for price to close outside a band, ideally with a rise in [volume](/volume/).

## Best market states

**Volatility changes (best).** Band Width exists to show contraction and expansion, so it is most useful when judging whether a market is quiet or active.

**Breakouts (good).** A squeeze followed by a close outside the bands is a common breakout setup. Band Width finds the squeeze, and price action supplies the trigger.

**Ranges (useful as a filter).** In a sideways market, a very narrow width warns that the range may be about to break. A mean-reversion trader may avoid new trades when width is very low.

**Trends (weak).** Band Width does not show direction, and in a steady trend it can stay at a mid-level for a long time with nothing to read.

**Reversals.** A volatility spike can mark the end of a sharp move, but the indicator cannot tell you whether the market will turn.

## Settings

| Setting | Period / deviations | What it does |
|---|---|---|
| Short-term | 10 periods, 1.5 | Reacts fast, more false squeezes |
| Default | 20 periods, 2 | Bollinger's standard; works as a starting point on daily charts |
| Long-term | 50 periods, 2.5 | Slow, shows broad changes in volatility |

Band Width should match the Bollinger Bands settings you use on the chart. If the bands are 20 and 2, the width must be 20 and 2 as well. The look-back used to judge "low" (such as the lowest in six months) is a separate choice and can be tuned to the time frame you trade.

## Common mistakes

- Reading a squeeze as a direction signal. It only says volatility is low.
- Trading the squeeze before price has broken out. Many squeezes last longer than expected.
- Using the raw gap between the bands and comparing it across long periods or different markets.
- Forgetting to match the settings to the ones on the chart.
- Treating the last six months as a law rather than a convention.
- Ignoring the false break. Price can poke outside the bands and fall back in.

## Pairs well with

- **[Bollinger Bands](/bollinger-bands/)**: the source of the measure and where the breakout is seen.
- **[%B](/percent-b/)**: shows where price sits inside the bands when the squeeze ends.
- **[Bollinger squeeze](/bollinger-squeeze/)**: the trading idea built on a very low width.
- **[Volume](/volume/)**: a breakout from a squeeze on rising volume has more support.

## Sources

- Bollinger, John (2001). *Bollinger on Bollinger Bands*. McGraw-Hill.
- Murphy, John J. (1999). *Technical Analysis of the Financial Markets*. New York Institute of Finance.

## FAQ

**What does Bollinger Band Width show?**
It shows how wide the bands are compared with the middle line. A low value means a quiet market with tight bands. A high value means a more volatile market with wide bands. It is a way to see volatility rise and fall over time.

**What is a Bollinger squeeze?**
It is a period when band width falls to a low level compared with its recent history. Many traders see it as a setup for a larger move. It does not show direction, so most wait for a close outside a band.

**What is a good Bollinger Band Width value?**
There is no fixed number, because the right level depends on the market and time frame. Compare the current width with the same market's past readings. A value near its lowest in several months is considered narrow.

**Does Band Width predict direction?**
No. It measures volatility only. A tight width suggests a move may come, but price can break up or down, or give a false move first. Direction has to come from price action or another tool.

**What is the difference between Band Width and %B?**
Band Width measures how far apart the bands are. [%B](/percent-b/) measures where price sits between them. Together they show how volatile the market is and where price is inside that volatility.
