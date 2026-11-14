---
slug: absorption
name: Absorption (order flow)
aka: [Absorption, Passive absorption, Order absorption]
type: volume
states: [reversal]
weak_states: [trend]
purposes: [entry, confirmation]
inventor: Not attributed to one person
year: Unknown
default_settings: "No standard settings; read from footprint, delta and depth-of-market views"
pairs_with: [footprint-chart, volume-delta, support-and-resistance, depth-of-market]
related: [cumulative-volume-delta, volume-spread-analysis, volume-profile, liquidity-sweep, volume-climax, wyckoff-spring-upthrust]
compare: []
glossary: [liquidity, spread, slippage, divergence, momentum]
wave: 3
reviewed: 14 November 2026
---

Absorption is an order-flow idea: heavy market orders hit one side of the book, but a large passive order soaks them up, so price barely moves. Traders read it as a sign that the aggressive side is being stopped and a turn may follow. It is judged by eye from volume at price, not from a single formula.

## At a glance

| | |
|---|---|
| Type | Order-flow concept (volume) |
| Best market states | Reversal |
| Weak in | Strong trends |
| Best uses | Entry timing, confirmation |
| Default settings | None; no standard formula |
| Created by | Not attributed to one person |
| Leading or lagging | Reads live activity at a level, so it can show a turn early, but it is subjective |

## What is absorption?

Every trade has two sides. An aggressive trader sends a market order, which takes the price on offer. A passive trader has a resting limit order waiting in the order book. When a lot of aggressive selling arrives at a price and a bigger passive buyer keeps filling it, the sellers do not push price lower. Their volume has been absorbed.

Order-flow traders call this absorption. The tell is a mismatch between effort and result. Lots of volume traded, yet price moved little or failed to break a level. The same idea appears in older volume work, for example the "effort versus result" concept in [Volume Spread Analysis](/volume-spread-analysis/) and in the Wyckoff idea of supply being taken up. Absorption is simply the order-flow version, seen at much finer detail.

There is no inventor and no standard definition, so no accepted formula exists. Different traders describe it a little differently. It is also a reading of intent that cannot be proved from the data: a large passive order is inferred from how price reacts, not directly known. Large hidden orders and iceberg orders (where only a small part of the real size is shown) make that harder.

## How it is identified

Absorption needs data that shows volume traded at each price. That means futures, listed stocks or crypto exchanges with real volume, viewed on a [footprint chart](/footprint-chart/), a [volume delta](/volume-delta/) display or a depth-of-market ladder. Spot forex has no central volume, so true absorption reading is limited there.

Typical clues:

1. **High volume, small range.** A bar or cluster trades heavy volume yet closes within a narrow range.
2. **One-sided aggression with no progress.** Delta (market buys minus market sells) is strongly negative, yet price does not make a new low. Or delta is strongly positive, yet price does not make a new high.
3. **A level that holds.** Price repeatedly touches the same price, and the volume there keeps rising, but the level is not broken.
4. **Resting size on the book that refills.** On a [depth of market](/depth-of-market/) view, a large order stays in place or reloads as it trades.

**Worked example.** Price drops to a support level at 100. During one minute, 4,000 contracts trade at the bid (market sells) and only 500 at the offer (market buys), so delta is -3,500. Price still holds at 100 and the bar closes at 100.50. Heavy selling did not move price lower. A trader would read this as buyers absorbing the selling, and would watch for a follow-through move up before acting.

## How to read it

**Selling absorbed (bullish).** Heavy sell volume at or near support, negative delta, but no lower low. If price then lifts and the sellers cannot return, that is the confirming step.

**Buying absorbed (bearish).** The mirror image at resistance: heavy buying, positive delta, price fails to rise.

**Delta against price.** When price makes a new extreme but delta does not agree, or when delta is extreme and price does not follow, absorption is a likely explanation. See [Cumulative Volume Delta](/cumulative-volume-delta/) for the running version.

**Level matters.** Absorption in the middle of a move means little. It carries weight at levels where other traders already pay attention: prior highs and lows, a high-volume node, the edges of a range.

**Follow-through.** Absorption alone is a clue, not an entry. The common sequence is absorption, then a break of the small structure the other way, then an entry with a stop beyond the absorbed extreme.

## Best market states

**Reversals (best).** The concept exists to explain why a push stalls at a level, so it fits turning points near support, resistance and range edges.

**Ranges (useful).** At the boundary of a range, absorption can show which side is defending the edge.

**Strong trends (weak).** In a strong trend, pauses with heavy volume are often just a rest before the move continues. Calling every pause "absorption" leads to trading against the trend.

**Breakouts (mixed).** If a breakout level is absorbed, it can mean a failed breakout. If the passive side runs out of size, the level breaks. Telling those apart in real time is hard.

**Volatility.** In very fast conditions, orders are pulled and re-priced quickly, which makes the book and the volume harder to interpret.

## Confirmation rules

There is no official checklist. These are common conditions traders look for, and they are not rules to follow blindly:

1. The reading happens at a level that matters on a higher time frame.
2. Volume is clearly above recent normal for that time of day.
3. Price fails to move in the direction of the aggression.
4. Price then moves away from the level and does not return to retest the absorbed extreme at once.
5. The stop is placed beyond the absorbed extreme, with a size you can afford to lose if the level fails.

## Common mistakes

- Labelling any high-volume bar as absorption without checking that price failed to move.
- Reading absorption on instruments with no real volume, such as spot forex tick data.
- Trading it in the middle of nowhere rather than at a meaningful level.
- Entering before any follow-through, then being run over when the level breaks.
- Forgetting that hidden and iceberg orders mean the book does not show true size.
- Assuming a large resting order will stay. Orders can be cancelled at any time.

## Pairs well with

- **[Footprint chart](/footprint-chart/)**: shows volume traded at each price inside a bar, which is the raw evidence for absorption.
- **[Volume delta](/volume-delta/)**: shows the buy-sell imbalance that price is failing to follow.
- **[Support and resistance](/support-and-resistance/)**: gives the level that makes the reading meaningful.
- **[Depth of market](/depth-of-market/)**: shows the resting orders before and during the test of a level.

## Sources

- Harris, Larry (2003). *Trading and Exchanges: Market Microstructure for Practitioners*. Oxford University Press. (Background on limit orders, market orders and how liquidity is supplied.)
- Murphy, John J. (1999). *Technical Analysis of the Financial Markets*. New York Institute of Finance. (Background on volume and price interaction.)

Absorption as traders use it is a practitioner concept. It does not have a standard academic definition or a body of published tests behind it.

## FAQ

**What does absorption mean in order flow?**
It means aggressive market orders are being met by larger passive limit orders, so price does not move much despite heavy volume. Traders read it as one side being stopped at a level, and watch for a turn.

**How do I spot absorption on a footprint chart?**
Look for large volume at a price near a level, a strong buy-sell imbalance, and a bar that fails to extend. For example, heavy selling at support with no new low. Confirm with what price does next.

**Is absorption a leading signal?**
It can show a stall before price turns, but it is not a reliable forecast. The large order is inferred, not known, and it may be cancelled. Wait for follow-through before acting.

**Can I see absorption in forex?**
Only limited. Spot forex has no single central volume feed, so most charts show tick volume from one provider. Futures on the same currency give real traded volume and suit this analysis better.

**Is absorption the same as accumulation?**
Not exactly. Accumulation is a longer-term idea of buying building up over days or weeks. Absorption is a short-term, at-a-price observation. The two can be linked, but they are not the same thing.
