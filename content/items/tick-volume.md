---
slug: tick-volume
name: Tick Volume (forex)
aka: [forex volume, tick count, price-change count]
type: volume
states: [trend, breakout]
weak_states: [range]
purposes: [confirmation]
inventor: Not attributed to one person
year: Unknown
default_settings: "Count of price updates (ticks) per bar; no settings"
pairs_with: [relative-volume, breakout-trading, support-and-resistance, atr]
related: [volume, relative-volume, volume-oscillator, on-balance-volume, volume-climax, accumulation-distribution]
compare: []
glossary: [tick, liquidity, breakout]
wave: 2
reviewed: 14 November 2026
---

Tick volume counts how many times the price changed during a bar, not how many units were traded. It is the volume measure used on most spot forex charts, because the forex market has no central exchange that reports true volume. Traders use it as a rough guide to how busy the market is and to confirm moves.

## At a glance

| | |
|---|---|
| Type | Volume indicator |
| Best market states | Trend, breakout |
| Weak in | Quiet ranges |
| Best uses | Confirmation |
| Default settings | None: a count of price updates per bar |
| Created by | Not attributed to one person (year unknown) |
| Leading or lagging | Coincident: it measures activity in the current bar |

## What is Tick Volume?

On a stock exchange, every trade is recorded in one place, so volume is the number of shares traded. Spot forex works differently. It is traded over the counter between banks, brokers and other dealers. No single venue sees all the trades, so there is no official total volume.

Charting platforms fill the gap with **tick volume**: each time the broker's price feed updates the quote, that counts as one tick. A bar with 400 ticks had 400 price updates. It does not say how much money changed hands.

The idea behind it is simple. When more traders are active, quotes tend to update more often. So tick count and real volume tend to rise and fall together. Studies and trader experience suggest the two are positively related, but the strength of the link depends on the broker and the market, and it is not perfect.

## Formula

There is no formula to learn. The platform adds one to the count each time a new price arrives, and resets at the start of each bar.

**Worked example.** A 5-minute bar receives these quote updates: 1.1000, 1.1001, 1.1000, 1.1002, 1.1001. That is 5 ticks, so the bar's tick volume is 5. A busy bar on a liquid pair might show several hundred.

Important points about the data:

- Different brokers send different price feeds, so the same bar can show different tick counts on different platforms.
- Futures-based forex volume (for example from a currency futures exchange) is real traded volume, and is a different thing.
- On very fast markets, some feeds skip or bundle updates, which lowers the count.

## How to read it

**Rising ticks with a move.** A strong candle with high tick volume suggests many participants and a lot of activity behind the move.

**Low ticks.** A drift on low tick volume suggests little interest. Such moves are easier to reverse.

**Spikes.** Sudden bursts of ticks often come at news releases, session opens (London, New York) and around key levels. They show activity, not direction.

**Relative reading.** Always compare a bar with the recent norm. A count of 300 means nothing alone. See [Relative Volume](/relative-volume/) for the same idea in a ratio.

**Session pattern.** Tick volume follows the clock. It is usually higher when London and New York overlap and lower during the Asian session for many pairs. Compare bars at the same time of day.

## Best market states

**Breakouts (good).** A move through a key level on a clear jump in tick volume suggests real participation. A move through the same level on falling ticks is a weaker sign.

**Trends (good).** Healthy trends often show more activity in the direction of the trend than during pullbacks.

**Reversals (mixed).** A burst of ticks at the end of a long move can mark exhaustion, but it can also be news-driven noise.

**Ranges (weak).** In a range, volume is quiet and spikes are mostly random.

## Settings

Tick volume has no formula settings. Choices that matter:

| Choice | Effect |
|---|---|
| Time frame | Shorter bars give small noisy counts; longer bars give more stable readings |
| Moving average of volume | A 20-bar average line is common, to show what is normal |
| Broker feed | Different feeds give different counts; stay with one when comparing |

## Common mistakes

- Treating tick volume as true traded volume. It counts updates, not size.
- Comparing counts between two brokers or platforms.
- Reading a spike as bullish or bearish. Volume has no direction on its own.
- Ignoring the time of day, so a normal London open looks like a huge surge.
- Using it to trade very small time frames where counts are only a handful of ticks.
- Assuming a link to institutional order flow. Tick counts cannot show who is buying or selling.

## Pairs well with

- **[Relative Volume](/relative-volume/)**: turns the raw tick count into a ratio against normal activity.
- **[Breakout trading](/breakout-trading/)**: a check on whether a breakout comes with real activity.
- **[Support and resistance](/support-and-resistance/)**: activity at a known level carries more meaning.
- **[ATR](/atr/)**: shows how large the move was, while ticks show how busy it was.

## Sources

- Murphy, John J. (1999). *Technical Analysis of the Financial Markets*. New York Institute of Finance. (General treatment of volume in technical analysis; it does not cover forex tick volume in detail.)

## FAQ

**Is tick volume real volume?**
No. It counts price updates, not the number of units traded. Because many trades and quote changes happen together when the market is busy, it often rises and falls with real activity, but it is only an approximation.

**Why does forex not have real volume?**
Spot forex is traded over the counter between many dealers rather than on one exchange. No one body sees every trade, so no complete volume figure exists. Currency futures do trade on exchanges and have real volume.

**Do different brokers show different tick volume?**
Yes. Each broker's price feed updates in its own way, so the counts differ. The shape of the volume (busy and quiet periods) is usually similar, but the exact numbers are not the same.

**Can tick volume confirm a breakout?**
It can add some evidence. A breakout bar with clearly higher ticks than normal suggests more participation. It does not guarantee follow-through, so check price structure and the broader trend too.

**What is the difference between tick volume and normal volume?**
Normal volume counts shares, lots or contracts traded. Tick volume counts how often the price changed. A single huge trade can change the price once, so volume can be large while ticks are few.
