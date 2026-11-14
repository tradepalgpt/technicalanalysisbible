---
slug: value-area
name: Value Area (VAH/VAL)
aka: [VAH, VAL, value area high, value area low]
type: volume
states: [range, breakout]
weak_states: [trend]
purposes: [entry, exit]
inventor: J. Peter Steidlmayer
year: 1980s
default_settings: "70% of the session's volume (or time) around the point of control"
pairs_with: [point-of-control, volume-profile, market-profile, support-and-resistance]
related: [volume-profile, point-of-control, market-profile, auction-market-theory, vwap, key-levels]
compare: [volume-profile-vs-market-profile]
glossary: [value-area, auction, breakout, false-breakout]
wave: 2
reviewed: 14 November 2026
---

The value area is the price range where most of a session's trading took place, usually defined as 70% of the volume. Its upper edge is the value area high (VAH) and its lower edge is the value area low (VAL). Traders use these edges as reference levels for ranges and breakouts.

## At a glance

| | |
|---|---|
| Type | Volume and market-profile level |
| Best market states | Range, breakout |
| Weak in | Strong one-way trends |
| Best uses | Entry, exit |
| Default settings | 70% of volume around the point of control |
| Created by | J. Peter Steidlmayer, developed in the 1980s |
| Leading or lagging | Built from past trading, used as a reference for what comes next |

## What is the Value Area?

Over a day, price spends a lot of time in some zones and very little in others. The zones with the most trading are where buyers and sellers agreed on a fair price. The value area marks that zone.

The concept comes from Market Profile, developed by J. Peter Steidlmayer at the Chicago Board of Trade, and later popularised in the book *Mind Over Markets* by James Dalton, Eric Jones and Robert Dalton. Steidlmayer's approach treats the market as an auction. Price moves up to find buyers and down to find sellers, and trading clusters where both agree.

The value area has three parts:

- **Point of control (POC):** the single price with the most volume (or time). See [Point of Control](/point-of-control/).
- **Value area high (VAH):** the top edge of the zone holding about 70% of volume.
- **Value area low (VAL):** the bottom edge.

The 70% figure is a convention, loosely related to one standard deviation of a bell-shaped distribution. It is a choice, not a law of the market, and has no academic proof as a trading edge.

## Formula

1. Build a volume profile for the period (usually a day): total the volume at each price level.
2. Find the point of control, the level with the most volume.
3. Add the volume at the POC to a running total.
4. Compare the two price levels directly above the POC with the two directly below. Add the pair with more volume to the total.
5. Repeat step 4, moving outward, until the total reaches 70% of the period's volume.
6. The highest and lowest levels included are VAH and VAL.

**Worked example.** Total volume is 1,000 lots. The POC at 100 holds 150. That is 15%. The two prices above (101, 102) hold 120 together, and the two below (99, 98) hold 100, so add the upper pair: 270 (27%). Next, the pair above (103, 104) holds 90 and the pair below (99, 98) holds 100, so add the lower pair: 370 (37%). Continue until the total reaches 700. Say it stops with the levels 96 to 104 included. Then VAL is 96 and VAH is 104.

Platforms differ in how they handle the two-level step, ties and tick size, so exact values can differ slightly. Some tools build the profile from time spent at each price instead of volume.

## How to read it

**Price inside the area.** The market is accepting current prices as fair. This is typical of balanced, range-like trading. The edges often act as support and resistance.

**Price outside the area.** A move beyond VAH or VAL suggests the market is testing new value.

**The 80% rule (a common guideline).** If price opens outside the previous day's value area, then re-enters it and holds for two consecutive 30-minute periods, some traders expect a move across to the other side. This is a trader rule of thumb, sometimes called the 80% rule, and there is no reliable published evidence for its stated odds, so treat it as a hypothesis to test.

**Acceptance and rejection.** If price closes or holds beyond VAH or VAL for a while, that suggests acceptance of a new area. A quick return inside suggests rejection, which links to [false breakouts](/false-breakout/).

**Previous day's levels.** Many traders carry yesterday's VAH, VAL and POC onto today's chart as reference levels.

## Best market states

**Ranges (best).** When the market is balanced, VAH and VAL map the edges of the range, and price often rotates between them and the POC.

**Breakouts (good).** A move out of the value area on strong activity, followed by acceptance, can mark a shift to a new range or trend.

**Strong trends (weak).** In a clear one-way day, price may never return to the value area, so fading the edges loses money. The area also gets less useful as price moves far from it.

**Volatility.** In very volatile sessions, the value area becomes wide and less useful as a precise level.

## Settings

| Setting | Value | What it does |
|---|---|---|
| Percentage | 70% (default) | Standard. Some traders try 68% (one standard deviation) or others |
| Period | Day (default) | Weekly or monthly value areas show larger zones |
| Price bin size | Tick or a few ticks | Smaller bins give a spikier profile; larger bins smooth it |
| Source | Volume or time | Volume is more common; time-based profiles are the original Market Profile style |

## Common mistakes

- Treating VAH and VAL as exact lines rather than zones.
- Fading the edge in a strong trend, expecting a return to the middle.
- Quoting a success rate for the 80% rule without testing it on your own markets.
- Mixing profiles with different settings, so the levels do not match.
- Using it on instruments where volume is unreliable (see [Tick Volume](/tick-volume/)).
- Forgetting that the value area changes as the session develops, so a morning area may differ from the final one.

## Pairs well with

- **[Point of Control](/point-of-control/)**: the centre of the value area and a common magnet for price.
- **[Volume Profile](/volume-profile/)**: the tool that produces the value area.
- **[Market Profile](/market-profile/)**: the time-based version from which the idea came.
- **[Support and resistance](/support-and-resistance/)**: confluence between a value area edge and a classic level adds weight.

## Sources

- Dalton, James F., Jones, Eric T. and Dalton, Robert B. (2013). *Mind Over Markets*, updated edition. Wiley.Publishing.

## FAQ

**What does 70% mean in the value area?**
It is the share of the period's trading volume that falls inside the area around the point of control. The figure is a convention loosely tied to one standard deviation of a bell curve, not a proven threshold.

**What is the difference between VAH, VAL and POC?**
VAH is the top of the area holding about 70% of volume, VAL is the bottom, and POC is the single price with the most volume. The POC normally sits inside the area, often near the middle.

**Is the 80% rule reliable?**
It is a trader rule of thumb, not a tested law. Results vary by market and period. If you want to use it, test it on your own data first.

**Does the value area work on forex?**
It can, but spot forex has no true volume, so profiles use tick volume, which only approximates activity. Currency futures give real volume and are better suited.

**Which time frame should I use?**
Daily value areas are the classic choice for day traders. Swing traders often use weekly or monthly ones. Higher-period areas give broader zones that matter over longer holds.
