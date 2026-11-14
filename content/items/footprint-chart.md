---
slug: footprint-chart
name: Footprint Chart
aka: [Cluster chart, Order flow chart, Volume footprint]
type: volume
states: [reversal, breakout]
weak_states: [range]
purposes: [entry, confirmation]
inventor: Not attributed to one person
year: Unknown
default_settings: "Bid and ask volume at each price within each bar"
pairs_with: [volume-delta, cumulative-volume-delta, absorption, volume-profile]
related: [volume-delta, cumulative-volume-delta, absorption, volume-profile, depth-of-market, point-of-control]
compare: []
glossary: [order-flow, delta, liquidity]
wave: 2
reviewed: 14 November 2026
---

A footprint chart is a type of bar chart that shows, for each price level inside each bar, how much volume traded at the bid and at the ask. It lets traders see where aggressive buying and selling happened within a bar, not only the open, high, low and close. It is mainly used for futures and crypto order flow analysis.

## At a glance

| | |
|---|---|
| Type | Order flow chart |
| Best market states | Reversal, breakout |
| Weak in | Ranges, and markets without reliable bid/ask data |
| Best uses | Entry timing, confirmation |
| Default settings | Bid x ask volume at each price per bar; imbalance ratio often 300% |
| Created by | Not attributed to one person |
| Leading or lagging | Concurrent; shows what just happened in detail |

## What is a footprint chart?

A normal candlestick shows four prices. A footprint chart opens the candle up. Beside each price tick in the bar it prints two numbers: volume that traded at the bid (sells) on one side and volume that traded at the ask (buys) on the other. The result looks like a grid of numbers wrapped around the bar.

This shows things a candle hides. Two bars with the same shape can have very different internals. One may have buyers lifting the offer at each price all the way up. Another may have lots of selling absorbed at the top.

Common displays include bid-ask columns, delta per price, total volume per price, and a bar-level delta summary. Most platforms colour or highlight cells with strong imbalance. See [Volume delta](/volume-delta/) for how delta is calculated.

Footprint charts depend on trade-by-trade data classified by side. They are well suited to futures and crypto. In spot forex there is no single tape, so a footprint there is built on estimates or on one provider's volume only. No one person is credited with the chart type; it spread through order flow trading platforms.

## How it is drawn

1. Choose a bar type: time, tick, volume or range.
2. For each bar, list every price level that traded.
3. At each level, add up volume that traded at the bid and volume at the ask.
4. Print the two numbers at that level, usually bid on the left and ask on the right.
5. Optionally flag imbalances, show delta per level and a bar total.

**Imbalance rule (common version).** An ask imbalance occurs when ask volume at a price is at least a set multiple of the bid volume one level *below* it. Many platforms default to 300% (three times). A bid imbalance is the mirror, comparing bid volume at a price with ask volume one level above. Thresholds vary by platform.

**Worked example.** At 100.00, 50 contracts hit the bid and 20 lifted the ask. Delta at that level = 20 - 50 = **-30**.
At 100.25, 150 contracts lifted the ask. Compare that with the bid volume one level below, at 100.00 (50): 150 / 50 = 300%, which meets a 300% ask imbalance.

## How to read it

**Stacked imbalances.** Three or more imbalances in a row at adjacent prices are read as strong one-sided aggression. They are sometimes used as support or resistance once price returns.

**Absorption.** Large volume on one side at an extreme with no price progress suggests passive orders are absorbing aggressive ones. See [Absorption](/absorption/).

**Unfinished business.** A bar high with volume on both bid and ask (instead of zero on one side) can suggest trading is likely to resume there. This idea comes from auction theory, but there is little academic evidence that it forecasts reliably.

**Delta divergence.** A new price high with weaker bar delta is a warning, not a signal.

**Point of control per bar.** The price with the most volume in the bar can serve as a reference. See [Point of Control](/point-of-control/).

**Breakouts.** A strong delta and stacked imbalances at the breakout point suggest participation. A thin breakout can be a trap.

## Best market states

**Reversals (good, with care).** Absorption and exhaustion patterns at key levels are the main use.

**Breakouts (good).** The detail helps judge whether a breakout has real participation.

**Ranges (weak).** The grid of numbers produces many apparent signals that mean little in a sideways market.

**Trends (mixed).** Imbalances appear naturally in trends; they are less informative there.

**Volatility.** Fast markets produce heavy, hard-to-read footprints.

## Confirmation rules

| Check | What to look for |
|---|---|
| Data quality | Real bid and ask trade data, not estimates |
| Location | The signal appears at a known level, not in empty space |
| Imbalance | Stacked, not a single cell |
| Delta | Bar delta agrees or disagrees in a way that fits the idea |
| Price response | Price reacts after the signal; no reaction means no signal |
| Stop | On the price chart, beyond the level that invalidates the idea |

## Common mistakes

- Reading every imbalance as a signal. In busy markets they are common.
- Using a footprint on markets with unreliable volume data.
- Choosing bar settings after the fact until a pattern appears.
- Forgetting that size matters. Imbalance on tiny volume says little.
- Ignoring higher-time-frame structure while staring at detail.
- Treating the numbers as the intentions of big traders.

## Pairs well with

- **[Volume delta](/volume-delta/)**: summarises each bar's net aggression.
- **[Cumulative Volume Delta](/cumulative-volume-delta/)**: shows the running balance across many bars.
- **[Absorption](/absorption/)**: the main pattern traders look for in footprints.
- **[Volume profile](/volume-profile/)**: shows the larger distribution of volume by price.

## Sources

- Dalton, James F., Jones, Eric T. and Dalton, Robert B. (2013). *Mind Over Markets*, updated edition. Wiley. (Auction-theory background for volume at price.)
- Exchange and trading platform documentation on bid/ask volume and footprint display (varies by vendor).

## FAQ

**What is a footprint chart?**
It is a bar chart that prints the bid and ask volume at each price inside every bar. It shows how a bar was built, not just where it ended. It is used mostly in futures and crypto order flow analysis.

**Is a footprint chart the same as volume profile?**
Not quite. Volume profile shows volume at each price over a period, usually as a side histogram. A footprint shows bid and ask volume at each price inside every single bar. Footprints are more detailed and shorter-term.

**What does an imbalance mean on a footprint chart?**
It means volume on one side at a price was much larger than the opposite side at the adjacent price, often at least three times. It suggests aggressive action, but it is not a signal on its own.

**Can I use footprint charts on forex?**
Only with limits. Spot forex has no central tape, so footprints use estimates or one provider's data. Currency futures give real bid and ask data and are a more reliable guide.

**Do footprint charts work?**
They give detail that candles hide, but no chart guarantees an edge. There is little formal evidence for specific patterns. Use them as extra information alongside price structure and risk control.
