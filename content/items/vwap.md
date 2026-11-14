---
slug: vwap
name: VWAP
aka: [Volume-Weighted Average Price]
type: volume
states: [trend, range]
weak_states: [breakout]
purposes: [entry, filter, stop]
inventor: Not attributed to one person
year: Unknown
default_settings: "Resets each session; typical price (high + low + close) / 3"
pairs_with: [volume, support-and-resistance, previous-day-high-low, anchored-vwap]
related: [anchored-vwap, vwap-bands, vwma, point-of-control, relative-volume, market-profile]
compare: [vwap-vs-moving-average, vwap-vs-anchored-vwap]
glossary: [liquidity, pullback, mean-reversion, timeframe, lookback-period]
wave: 1
reviewed: 14 November 2026
---

VWAP, the volume-weighted average price, is the average price a market has traded at during a session, giving more weight to prices where more volume traded. Day traders use it as a fair-value line: price above it suggests buyers are in control for the day, price below it suggests sellers are.

## At a glance

| | |
|---|---|
| Type | Volume-weighted price line |
| Best market states | Trends, ranges (intraday) |
| Weak in | Fast breakouts, and on charts with no real volume |
| Best uses | Entry timing, bias filter, stop reference |
| Default settings | Resets at the start of each session; typical price (H + L + C) / 3 |
| Created by | Not attributed to one person; long used by institutions as an execution benchmark |
| Leading or lagging | Lagging; it is a cumulative average |

## What is VWAP?

VWAP answers: what was the average price paid so far today, with each trade counted by its size? A price level with a lot of volume pulls the average towards it. A level with little volume barely moves it.

Large investors have long used VWAP as a benchmark: if a fund bought at below the day's VWAP, the execution is judged to be better than average. This is one reason traders watch it, since a lot of order flow is measured against it.

Unlike a moving average, VWAP does not look back a fixed number of bars. It is a running total from the start of the session, so it moves less and less as the day goes on. It then resets the next session.

**Forex note.** Spot forex has no central volume, so VWAP on a forex chart uses tick volume (the number of price changes). It is an approximation, and different brokers' feeds give different lines. Futures, stocks and crypto exchange data have real volume.

## Formula

1. Typical price for each bar: TP = (high + low + close) / 3
2. Multiply by the bar's volume: TP x volume
3. Add these up from the session start: cumulative (TP x volume)
4. Add the volume up from the session start: cumulative volume
5. **VWAP = cumulative (TP x volume) / cumulative volume**

**Worked example.**
Bar 1: typical price 100, volume 1,000 → 100,000
Bar 2: typical price 102, volume 3,000 → 306,000
Cumulative TP x volume = 406,000. Cumulative volume = 4,000.
VWAP = 406,000 / 4,000 = **101.5**

The simple average of the two prices would be 101. VWAP is higher, because the higher-priced bar had more volume.

Some platforms use the close, or the average of open, high, low and close, instead of typical price. The differences are small.

## How to read it

**Above or below VWAP.** Price holding above VWAP shows the average buyer today is in profit; below shows the average seller is. Many day traders only look for longs above it and shorts below it.

**Pullbacks to VWAP.** In a trend, price often pulls back to VWAP and bounces. Traders use it as an entry area and place stops beyond it.

**Mean reversion.** In ranges, price that stretches far from VWAP often drifts back towards it. This is not reliable on trend days.

**Slope.** A VWAP that rises steadily through the session shows a trend day. A flat VWAP suggests a balanced, range day.

**Fair value.** VWAP is treated as a fair-price reference for the session, not as support or resistance in a strict sense. It is often watched by many people, which can make it act as one.

**Reset.** At the start of a new session the line restarts, so early-session VWAP has very few bars and is jumpy. Give it time to settle.

## Best market states

**Trends (good).** In steady intraday trends, VWAP gives a natural level for pullbacks and a simple bias filter.

**Ranges (good).** In balanced sessions price oscillates around VWAP, so it works as a centre line.

**Breakouts (weak).** A fast breakout moves away from VWAP quickly, which makes mean reversion trades against it dangerous. The line lags far behind.

**Reversals.** A sustained cross of VWAP with volume can show a shift in the day's balance, but it is a lagging sign.

**Volatility.** News spikes can drag VWAP and make it less relevant for the rest of the session.

## Settings

VWAP has very few inputs.

| Setting | Values | What it does |
|---|---|---|
| Session reset | Daily (default), weekly, monthly | Sets when the cumulative total restarts |
| Price source | Typical (HLC/3) | Default on most platforms; some use close or OHLC/4 |
| Bands | 1 and 2 standard deviations | Optional; see [VWAP Bands](/vwap-bands/) |

Intraday VWAP is mostly used on time frames from one to 30 minutes. On daily charts, a single-session VWAP does not apply, and traders use [anchored VWAP](/anchored-vwap/) instead.

## Common mistakes

- Treating it like a moving average with a fixed look-back. It is cumulative and resets.
- Using forex tick-volume VWAP and expecting it to match an exchange benchmark.
- Fading a strong trend day because price is "far from VWAP".
- Using it on higher time frames without anchoring it to something meaningful.
- Trading the first few minutes when the line has little data.
- Treating the line as a precise level rather than a zone.

## Pairs well with

- **[Volume](/volume/)**: checks whether a bounce or break at VWAP has real participation.
- **[Support and resistance](/support-and-resistance/)**: VWAP near a known level makes the area more significant.
- **[Previous day high and low](/previous-day-high-low/)**: gives context for where price opened relative to yesterday's range.
- **[Anchored VWAP](/anchored-vwap/)**: extends the same idea to start from any chosen bar.

## Sources

- Berkowitz, Stephen A., Logue, Dennis E. and Noser, Eugene A. Jr. (1988). "The Total Cost of Transactions on the NYSE." *The Journal of Finance*, 43(1). (Early academic use of VWAP as an execution benchmark.)
- Murphy, John J. (1999). *Technical Analysis of the Financial Markets*. New York Institute of Finance. (General background on volume.)

## FAQ

**What does VWAP stand for?**
It stands for volume-weighted average price. It is the average price traded during a period, with each price weighted by how much volume traded there. It is calculated from the start of the session and resets each day.

**Is price above VWAP bullish?**
It is often read that way for the day: the average buyer is in profit. It is a bias, not a signal. A strong stock can trade above VWAP all day and still reverse, and a flat market can cross it many times.

**What is the best time frame for VWAP?**
VWAP is mainly an intraday tool, used on charts from one to 30 minutes. The calculation is the same on all of them; it only changes how many bars you see. Weekly or monthly resets exist but are less common.

**Does VWAP work in forex?**
Only with tick volume, as spot forex has no central volume. The line is an approximation that varies by broker feed. For a true volume-weighted line, use futures or exchange-traded markets.

**What is the difference between VWAP and a moving average?**
A moving average looks back a fixed number of bars and ignores volume. VWAP is cumulative from the session start and weights prices by volume. See [VWAP vs moving average](/compare/vwap-vs-moving-average/).
