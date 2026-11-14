---
slug: depth-of-market
name: Order Book / Depth of Market
aka: [DOM, Order book, Level 2, Market depth, Price ladder]
type: volume
states: [range]
weak_states: [breakout]
purposes: [entry]
inventor: Not attributed to one person
year: Unknown
default_settings: "No settings; shows resting bids and offers at each price level"
pairs_with: [support-and-resistance, footprint-chart, volume-delta, absorption]
related: [absorption, footprint-chart, volume-delta, cumulative-volume-delta, volume-profile, liquidity-sweep]
compare: []
glossary: [liquidity, spread, slippage, momentum]
wave: 3
reviewed: 14 November 2026
---

Depth of market (DOM), also called the order book or Level 2, is a live list of resting buy and sell limit orders at each price. It shows where liquidity is waiting and how big the spread is. Short-term traders read it for clues about support, resistance and the likelihood of a move.

## At a glance

| | |
|---|---|
| Type | Order-flow display (volume) |
| Best market states | Range |
| Weak in | Breakouts |
| Best uses | Entry timing |
| Default settings | None; it is a data display, not a formula |
| Created by | Not attributed to one person |
| Leading or lagging | Shows current resting orders, so it can look ahead, but orders can vanish in a moment |

## What is depth of market?

Most electronic markets match buyers and sellers through an order book. The book holds two sides. The bid side lists limit orders to buy, from the highest price down. The offer (or ask) side lists limit orders to sell, from the lowest price up. The gap between the best bid and best offer is the spread.

A depth of market display, sometimes drawn as a vertical price ladder, shows how many contracts or shares are waiting at each price. When a market order arrives, it takes the best price on the opposite side and uses up some of the resting size. If the resting size is used up, price moves to the next level.

This is the plain mechanics of any limit order book and is the subject of academic work on market microstructure, such as Larry Harris's textbook listed below. Reading the book for trading clues, however, is a practitioner method with no standard rules and no published body of tests behind it. This page describes how traders use it, not a proven edge.

The display only exists where there is a central order book, such as futures exchanges, listed stocks and many crypto exchanges. Spot forex has no single book, so any depth you see there belongs to one provider and does not show the whole market.

## How it is identified

There is nothing to calculate. You look at what is displayed.

1. **Best bid and best offer.** The top of the book, with the spread between them.
2. **Size at each price.** The number of contracts or shares waiting. A large number at one price is called a wall.
3. **Book imbalance.** Compare total size on the bid side with the offer side over the first few levels.
4. **Changes over time.** Orders that appear, grow, shrink or disappear as price approaches.
5. **Traded volume.** Many ladders show last trades next to the book, so you can see what actually executed at each price.

**Worked example.** A futures ladder shows 50 contracts bid at 100.00, 60 at 99.75 and 400 at 99.50. Offers show 40 at 100.25 and 55 at 100.50. A trader notices the large 400-lot bid below the market and considers it possible support. If price falls toward 99.50 and the order stays and trades without breaking, that supports the reading. If the order disappears just as price arrives, the support was never real.

## How to read it

**Walls.** A large resting order can act as support or resistance if it stays. Price may stall in front of it. But the order may be a decoy placed to influence others and cancelled before it trades. Do not treat a wall as a fixed barrier.

**Imbalance.** More size on the bid than on the offer is often read as a sign that buyers are keener, and the reverse for more offers. It is a weak clue, because resting orders can be pulled, and the book shows only what is visible.

**Thin books.** If few orders sit near the price, a market order can move price several ticks. This suggests a fast move is possible, and that slippage may be large.

**Spoofing and hidden size.** Some orders are placed to mislead and cancelled before they trade. Large players also hide size using iceberg orders, which show only a small slice. What you see is not the full picture. Spoofing is illegal in regulated markets.

**With traded volume.** Resting size combined with what is actually trading is a stronger clue than size alone. This is where [Absorption](/absorption/) comes in: heavy trades hitting a level that does not give way.

**Refilling.** A level that is traded through repeatedly but keeps reloading shows a large passive participant, if the data feed is complete.

## Best market states

**Ranges (best fit).** In a range, price repeatedly tests the edges, and resting size near those edges may help in judging whether the edge is likely to hold for a short while.

**Reversals (mixed).** A level that absorbs heavy trading can mark a turn, but you need traded-volume confirmation.

**Trends (mixed).** Resting orders get pulled and re-placed quickly as price moves, so the book changes too fast to read in a strong trend.

**Breakouts (poor).** Large orders often vanish ahead of a breakout, so the book is least reliable when price moves fast.

**Volatility.** In fast markets, orders are cancelled and re-priced constantly, so the display flickers and is hard to interpret.

## Confirmation rules

There is no official rule set. Common checks include:

1. The price level matters on a chart (a prior high, low or range edge).
2. Resting size has stayed through at least some trading, not just appeared.
3. Traded volume at the level matches the reading, for example heavy trades without price breaking through.
4. The book has not been pulled as price approached.
5. A stop is placed beyond the level, with a size you can afford to lose if it fails.

## Common mistakes

- Treating a large visible order as a fixed barrier.
- Ignoring that many orders are cancelled before they trade.
- Missing hidden (iceberg) size and assuming the visible book is complete.
- Using one forex provider's depth as if it were the whole market.
- Trading book imbalance alone, with no chart level or traded volume.
- Over-trading from a flickering display during fast markets.

## Pairs well with

- **[Support and resistance](/support-and-resistance/)**: gives the chart level that makes a resting order meaningful.
- **[Footprint chart](/footprint-chart/)**: shows what actually traded at each price inside a bar.
- **[Volume delta](/volume-delta/)**: shows whether aggressive buyers or sellers are in control.
- **[Absorption](/absorption/)**: the reading of heavy trading failing to move a level.

## Sources

- Harris, Larry (2003). *Trading and Exchanges: Market Microstructure for Practitioners*. Oxford University Press.
- Murphy, John J. (1999). *Technical Analysis of the Financial Markets*. New York Institute of Finance. (Background on volume and support and resistance.)

## FAQ

**What is depth of market?**
It is a live display of the resting buy and sell limit orders at each price level, together with the best bid, best offer and spread. It shows where liquidity is waiting but not who placed it or whether it will stay.

**Is depth of market the same as Level 2?**
In everyday use, yes. Level 2 is a common name for showing more than the best bid and offer, usually several price levels. A DOM or price ladder is a vertical layout of the same book data.

**Can I trust large orders in the order book?**
Not fully. Orders can be cancelled at any time, and some are placed to mislead others. Large players also hide size. Treat a visible wall as a clue and confirm it with what actually trades.

**Does depth of market work in forex?**
Only partly. Spot forex has no central order book, so what you see is the depth of one provider and does not show the whole market. Currency futures have a central book, which gives a fuller view.

**Is reading the order book a proven edge?**
There is no published body of tests that shows a standard order-book method works. Market microstructure research explains how books work, but trading from visual clues is a practitioner approach and should be tested in your own market.
