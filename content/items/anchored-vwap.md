---
slug: anchored-vwap
name: Anchored VWAP
aka: [AVWAP, Anchored Volume-Weighted Average Price]
type: volume
states: [trend, range]
weak_states: [breakout]
purposes: [entry, stop]
inventor: Not attributed to one person
year: Unknown
default_settings: "No default; you choose the anchor bar. Typical price (high + low + close) / 3"
pairs_with: [vwap, support-and-resistance, volume, swing-highs-lows]
related: [vwap, vwap-bands, point-of-control, volume-profile, key-levels]
compare: [vwap-vs-anchored-vwap]
glossary: [pullback, liquidity, confluence, swing-high, swing-low]
wave: 1
reviewed: 14 November 2026
---

Anchored VWAP is a volume-weighted average price that starts from a bar you choose, such as a swing low, an earnings gap or a major high, instead of from the start of the session. The line shows the average price paid by everyone who traded since that event, and traders watch it as a dynamic level of support or resistance.

## At a glance

| | |
|---|---|
| Type | Volume-weighted price line with a chosen start |
| Best market states | Trends, ranges |
| Weak in | Fast breakouts and markets with poor volume data |
| Best uses | Entry timing, stop reference |
| Default settings | None; the anchor bar is a choice. Typical price (H + L + C) / 3 |
| Created by | Not attributed to one person; popularised among traders by Brian Shannon |
| Leading or lagging | Lagging; it is a cumulative average |

## What is Anchored VWAP?

Ordinary [VWAP](/vwap/) restarts every session. Anchored VWAP removes the reset. You pick a starting bar, and the line is the volume-weighted average price from that bar onwards. It keeps updating until you remove it.

The idea is simple: if price is above the anchored VWAP from a major low, then on average everyone who has bought since that low is in profit. If price falls back to the line, those holders are at breakeven, which some traders expect to bring buying (or selling, in the other direction).

Choosing the anchor is the most important decision. Common anchors are a swing high or low, a gap, an earnings release, a breakout bar, the start of the year or a major news event. The idea of tying volume-weighted levels to a chosen event is associated with Brian Shannon, who wrote about it for traders. There is no single inventor.

**Forex note.** Spot forex has only tick volume, so anchored VWAP on forex is an approximation, and different feeds give different lines. Futures, stocks and crypto exchange data have real volume.

## Formula

The calculation is the same as VWAP, only the start point changes.

1. Typical price: TP = (high + low + close) / 3 for every bar from the anchor onwards
2. Cumulative (TP x volume) from the anchor bar
3. Cumulative volume from the anchor bar
4. **Anchored VWAP = cumulative (TP x volume) / cumulative volume**

**Worked example.** Anchor on a swing low.
Bar 1 (anchor): typical price 50, volume 2,000 → 100,000
Bar 2: typical price 52, volume 1,000 → 52,000
Bar 3: typical price 51, volume 1,000 → 51,000
Cumulative TP x volume = 203,000. Cumulative volume = 4,000.
Anchored VWAP = 203,000 / 4,000 = **50.75**

Each extra bar changes the line less than the one before, because the total volume keeps growing.

## How to read it

**Price above the line.** Buyers since the anchor are on average in profit. Many traders see that as a bullish bias for as long as price holds above.

**Price below the line.** Sellers since the anchor are on average in profit. A bearish bias while it stays below.

**Pullbacks to the line.** In a trend, price often retests the anchored VWAP from the last major swing. Traders use it as an entry area, with the stop on the other side.

**Multiple anchors.** Plotting lines from several swings creates clusters. Where two or more lines meet, the level is often more watched.

**Slope.** A rising line in an uptrend shows that the average cost of the move is increasing. A flat line shows balance.

**Failure.** A close through the line on heavy volume is a sign the current idea may be wrong, and a common stop trigger.

## Best market states

**Trends (best).** After a major low or breakout, anchored VWAP often acts as a rolling reference for pullbacks.

**Ranges (good).** Anchored from a range extreme, the line can show where the average price is and whether buyers or sellers hold the edge.

**Breakouts (weak).** A fast move leaves the line far behind. Waiting for a pullback to it may mean missing the move.

**Reversals.** Anchoring to the final swing low or high can reveal whether the new direction is gaining acceptance.

**Volatility.** Large news bars at the anchor can dominate the cumulative total, so the line may hardly move afterwards.

## Settings

| Choice | What it does |
|---|---|
| Anchor bar | Sets the whole line. A different anchor gives a different story, so choose by a clear event |
| Price source | Typical price (HLC/3) is default on most platforms; some offer close or OHLC/4 |
| Bands | Optional standard-deviation bands; see [VWAP Bands](/vwap-bands/) |
| Time frame | The line is calculated from the bars on the chart you use, so lower time frames give a slightly different value |

There is no standard length. Because the anchor is chosen after the fact, it is easy to pick one that fits. Decide the rule for the anchor (for example "the last swing low that broke structure") before you look at results.

## Common mistakes

- Choosing an anchor after the fact that makes the line look perfect.
- Plotting so many lines that every price touches one.
- Treating it as an exact level instead of a zone.
- Using it on instruments with unreliable volume.
- Forgetting the line is a lagging average, so it can be far from price after a fast move.
- Anchoring to a news spike that dominates the volume total.

## Pairs well with

- **[VWAP](/vwap/)**: the session VWAP gives the intraday balance; an anchored line gives the longer-term one.
- **[Support and resistance](/support-and-resistance/)**: anchored lines near horizontal levels add confluence.
- **[Volume](/volume/)**: confirms whether a bounce or break at the line has participation.
- **[Swing highs and lows](/swing-highs-lows/)**: the natural anchor points for the line.

## Sources

- Shannon, Brian (2008). *Technical Analysis Using Multiple Timeframes*. LifeVest Publishing. Discusses volume-weighted levels anchored to chosen events.
- Murphy, John J. (1999). *Technical Analysis of the Financial Markets*. New York Institute of Finance. (General background on volume.)

## FAQ

**What is the difference between VWAP and Anchored VWAP?**
VWAP restarts each session. Anchored VWAP starts from a bar you choose and keeps running. Both use cumulative typical price times volume divided by cumulative volume. See [VWAP vs Anchored VWAP](/compare/vwap-vs-anchored-vwap/).

**Where should you anchor VWAP?**
Common choices are a major swing low or high, a gap, an earnings date or a breakout bar. The best choice is a clear event you can name in advance. Anchoring to whatever makes the line fit is a trap.

**Does Anchored VWAP work as support and resistance?**
Often it acts that way, partly because many traders watch it. Price can still pass through it. Treat it as a zone where you expect a reaction, and confirm with price action or volume.

**Does Anchored VWAP work in forex?**
Only with tick volume, as spot forex has no central volume. The result is an approximation and varies by feed. Futures, stocks and crypto exchanges give real volume.

**Can you use it on a daily chart?**
Yes, and that is where it is most common, because single-session VWAP does not apply to daily bars. Anchor from a significant daily swing or event and keep the line on the chart.
