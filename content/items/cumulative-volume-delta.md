---
slug: cumulative-volume-delta
name: Cumulative Volume Delta (CVD)
aka: [CVD, Cumulative Delta]
type: volume
states: [reversal, trend]
weak_states: [range]
purposes: [confirmation]
inventor: Not attributed to one person
year: Unknown
default_settings: "Running total of delta; reset per session or never, depending on platform"
pairs_with: [volume-delta, footprint-chart, divergence, open-interest]
related: [volume-delta, footprint-chart, absorption, on-balance-volume, accumulation-distribution, volume-profile]
compare: []
glossary: [order-flow, delta, divergence]
wave: 2
reviewed: 14 November 2026
---

Cumulative Volume Delta (CVD) is a running total of delta, which is the difference between volume traded at the ask (buyer-initiated) and volume traded at the bid (seller-initiated). A rising CVD means aggressive buyers are outweighing aggressive sellers. Traders use it to confirm trends and to spot divergences between order flow and price.

## At a glance

| | |
|---|---|
| Type | Order flow indicator (cumulative) |
| Best market states | Reversal, trend |
| Weak in | Ranges, and markets without reliable trade-side data |
| Best uses | Confirmation |
| Default settings | None; reset rules vary by platform |
| Created by | Not attributed to one person |
| Leading or lagging | Mostly confirming; divergences can warn early |

## What is Cumulative Volume Delta?

Every trade has an aggressor. A trader who buys by hitting the ask is called a buy aggressor, and one who sells by hitting the bid is a sell aggressor. Volume delta for a bar is the volume at the ask minus the volume at the bid. See [Volume delta](/volume-delta/).

CVD simply adds each bar's delta to a running total. If buyers consistently lift the offer harder than sellers hit the bid, CVD rises. If price rises while CVD falls, price is being pushed up with less aggressive buying than it appears, which some traders read as a weakening move.

CVD needs trade-by-trade data that is classified by side. That is available for futures and for crypto exchanges. It is not directly available in spot forex, where there is no central tape, so platforms may substitute estimates from tick data. Those estimates can differ from real order flow.

No single person is credited with it. The idea comes out of order flow and footprint analysis and spread through trading platforms.

## Formula

1. Delta for each bar = Ask volume - Bid volume
2. CVD = previous CVD + current bar's delta

Some platforms use the "tick rule" or "Lee-Ready" style classification when true bid and ask data is missing. Others use the close versus open of the bar as a rough guess, which is much less precise.

**Worked example.** Three bars:

| Bar | Ask volume | Bid volume | Delta | CVD |
|---|---|---|---|---|
| 1 | 600 | 400 | +200 | +200 |
| 2 | 300 | 700 | -400 | -200 |
| 3 | 800 | 500 | +300 | +100 |

CVD ends at **+100**. The level depends on the start point, so the shape matters more than the value.

## How to read it

**Confirmation.** In an uptrend, price makes higher highs and CVD rises with it. That suggests aggressive buyers are driving the move.

**Divergence.** Price makes a new high but CVD makes a lower high, or price makes a new low while CVD holds higher. This suggests the move lacks aggressive participation. It is a warning, not a signal. See [Divergence](/divergence/).

**Absorption.** If CVD falls hard (aggressive selling) but price does not drop, passive buyers may be absorbing the selling. Traders read this as a possible bottoming sign. See [Absorption](/absorption/).

**Breakout check.** A breakout with a CVD jump suggests aggressive participation. A breakout with flat or falling CVD is more suspect.

**Session resets.** Many platforms reset CVD at the start of each session. That makes each day's line comparable but removes the longer history.

## Best market states

**Reversals (good, with care).** Divergence and absorption patterns near key levels are the main use.

**Trends (good).** CVD can show whether a trend has aggressive participation behind it.

**Ranges (weak).** The line drifts up and down with little meaning.

**Breakouts (mixed).** It can help check a breakout, but one large order can distort the picture.

**Volatility.** Fast markets create large delta swings, so the line can jump without much information.

## Settings

CVD has few settings, but they matter:

| Setting | Options | Effect |
|---|---|---|
| Reset | Per session, per day, never | Changes what the line shows and makes days comparable |
| Data source | Real bid/ask trades, tick estimates | Real data is far more reliable |
| Contract scope | One contract month, all months combined | Combined data is smoother for futures with rolling contracts |
| Style | Line, candles (open/high/low/close of the running delta) | Candles show intrabar swings in delta |

On crypto, results differ between exchanges and between spot and perpetual futures, because each sees only its own flow.

## Common mistakes

- Using estimated delta from bar closes and treating it as real order flow.
- Ignoring that CVD from one exchange shows only that exchange's trades.
- Reading the absolute value, which depends on the start point.
- Treating every divergence as a reversal signal.
- Ignoring contract rolls in futures, which can break the line.
- Using it alone without price structure.

## Pairs well with

- **[Volume delta](/volume-delta/)**: the per-bar value that CVD sums, useful for spotting single bars with strong imbalance.
- **[Footprint chart](/footprint-chart/)**: shows the bid and ask volume at each price behind the delta.
- **[Divergence](/divergence/)**: the main way CVD is used.
- **[Open interest](/open-interest/)**: shows whether new positions are being opened as the delta moves.

## Sources

- Kirkpatrick, Charles D. and Dahlquist, Julie R. (2006). *Technical Analysis: The Complete Resource for Financial Market Technicians*. FT Press. (General background on volume analysis; CVD itself is a trading-platform concept.)
- Exchange and trading platform documentation on bid/ask volume and delta (varies by vendor).

## FAQ

**What does CVD show?**
It shows the running balance between buyer-initiated and seller-initiated volume. A rising line means more volume is hitting the ask than the bid. It tells you who is being aggressive, not who is right.

**What is the difference between CVD and volume delta?**
Volume delta is the value for a single bar: ask volume minus bid volume. CVD is the running total of those values. Delta shows the force within one bar; CVD shows how it builds over time.

**Can CVD be used on forex?**
Only with caution. Spot forex has no single tape, so delta is estimated from tick data by the platform. Currency futures have real bid and ask data and are a closer guide to real order flow.

**Is CVD leading or lagging?**
It is built from past trades, so it lags. Divergences can sometimes show weakening participation before price turns, but they are not timing signals and can last a long time.

**Why does CVD look different on different platforms?**
Platforms differ in how they classify trades, which data feed they use, whether they combine contracts, and when they reset the total. Compare shapes within one platform rather than numbers across platforms.
