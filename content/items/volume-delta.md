---
slug: volume-delta
name: Delta (order flow)
aka: [Volume Delta, Bar Delta, Delta]
type: volume
states: [reversal]
weak_states: [range]
purposes: [confirmation]
inventor: Not attributed to one person
year: Unknown
default_settings: "Ask volume minus bid volume, per bar"
pairs_with: [cumulative-volume-delta, footprint-chart, absorption, volume]
related: [cumulative-volume-delta, footprint-chart, absorption, depth-of-market, volume-climax, tick-volume]
compare: []
glossary: [order-flow, delta, liquidity]
wave: 2
reviewed: 14 November 2026
---

Delta, or volume delta, is the difference between volume traded at the ask (buyer-initiated) and volume traded at the bid (seller-initiated) within a bar. A positive delta means buyers were more aggressive; negative means sellers were. Traders use it to judge who controlled a bar and to spot disagreement between delta and price.

## At a glance

| | |
|---|---|
| Type | Order flow measure (per bar) |
| Best market states | Reversal |
| Weak in | Ranges, and markets with no reliable trade-side data |
| Best uses | Confirmation |
| Default settings | Ask volume minus bid volume, per bar |
| Created by | Not attributed to one person |
| Leading or lagging | Concurrent; it describes the bar just completed |

## What is delta?

Every trade has a buyer and a seller, but only one of them is the aggressor, the side that crosses the spread to get the trade done. A buyer who lifts the ask is a buy aggressor. A seller who hits the bid is a sell aggressor. Ordinary volume adds both together and hides who was in a hurry. Delta separates them.

Delta is the net of the two. If 700 contracts traded at the ask and 500 at the bid, delta is +200. It does not mean 200 contracts were bought and none sold. It means buyer-initiated volume was 200 higher than seller-initiated volume.

Delta can be shown as a number under each bar, as a histogram, or inside a [footprint chart](/footprint-chart/) at each price level. Adding delta bar by bar gives [Cumulative Volume Delta](/cumulative-volume-delta/).

Delta needs trade data classified by side. It is dependable for futures and crypto exchange data. In spot forex, which has no central tape, platforms estimate it, so treat it with caution. No single person is credited with it; it grew out of order flow trading and platform tools.

## Formula

Delta = Ask volume - Bid volume

Ask volume is the volume of trades that executed at the ask (or lifted the offer). Bid volume is the volume that executed at the bid (or hit the bid).

**Worked example.** A bar traded 1,200 contracts at the ask and 900 at the bid.
Delta = 1,200 - 900 = **+300**
Total volume was 2,100. Delta as a share of volume = 300 / 2,100 = about 14%.

Some platforms show delta as a percentage of volume, which makes bars of different sizes easier to compare.

## How to read it

**Direction.** Positive delta says buyers were more aggressive; negative says sellers were. On its own it is only a description of the bar.

**Agreement.** A strong up bar with strongly positive delta is consistent. A strong up bar with negative delta is a mismatch: price rose even though aggressive selling was larger. Traders read that as a sign of absorption by passive buyers or a weak move.

**Extremes.** Very large positive or negative delta on a bar can mark a burst of aggression, such as a stop run or a news spike. Some traders watch whether price follows through on the next bars.

**Delta at price levels.** Inside a footprint chart, delta at each price shows where aggression was concentrated. Large imbalances at an edge can suggest buyers or sellers were committed.

**Delta divergence.** Price makes a new high with weaker delta than the prior high. It hints at less aggressive buying but is not a signal by itself.

## Best market states

**Reversals (good, with care).** Absorption and delta divergence at key levels are the main uses.

**Trends (supporting).** Persistent positive delta in an uptrend adds weight, but delta is mainly used for bar-level judgements rather than trend-following.

**Ranges (weak).** Delta flips back and forth with little meaning.

**Breakouts (mixed).** Large delta on a breakout bar suggests commitment, but can also mark exhaustion.

**Volatility.** In fast markets the numbers become very large and noisy.

## Settings

| Setting | Options | Effect |
|---|---|---|
| Display | Number, histogram, percentage of volume | Changes how easy comparison is |
| Bar type | Time, tick, volume or range bars | Equal-volume bars make delta more comparable |
| Data source | Real bid/ask trade data or estimated | Real data is more accurate |

There is no period setting. What matters is the data quality and the bar type.

## Common mistakes

- Treating delta as the number of net buyers. It shows aggression, not intent or size of holders.
- Using estimated delta from forex tick data as if it were real order flow.
- Comparing delta on bars of very different volume without using percentage.
- Taking a large delta bar as a reversal signal without price confirmation.
- Ignoring that one exchange's delta shows only that exchange's trades.
- Over-reading small values near zero.

## Pairs well with

- **[Cumulative Volume Delta](/cumulative-volume-delta/)**: the running total, for seeing the broader balance.
- **[Footprint chart](/footprint-chart/)**: breaks delta down by price level.
- **[Absorption](/absorption/)**: delta disagreement with price is the core clue.
- **[Volume](/volume/)**: tells you how big the delta is relative to total activity.

## Sources

- Kirkpatrick, Charles D. and Dahlquist, Julie R. (2006). *Technical Analysis: The Complete Resource for Financial Market Technicians*. FT Press. (Background on volume analysis only; delta is a platform and order flow concept.)
- Exchange and trading platform documentation on bid/ask volume and delta (varies by vendor).

## FAQ

**What is delta in trading?**
Delta is the difference between volume that traded at the ask and volume that traded at the bid. It shows which side was more aggressive in a bar. Positive means more buying aggression, negative more selling aggression.

**Is positive delta always bullish?**
No. It means buyers were more aggressive in that bar, but price can still fall if passive sellers absorb the buying. What matters is how delta compares with what price did.

**Is delta the same as the options Greek?**
No. Options delta measures how much an option price changes for a move in the underlying. Order flow delta is the net of bid and ask volume. They share a name only.

**Can I use delta on forex?**
Only with caution. Spot forex has no central volume, so platforms estimate delta from ticks. Currency futures offer real bid and ask data and are a closer guide.

**How is delta different from volume?**
Volume counts all trades. Delta nets buyer-initiated against seller-initiated volume. A bar can have huge volume and near-zero delta if both sides were equally aggressive.
