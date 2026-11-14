---
slug: atr-stop
name: ATR Stop
aka: [ATR-based stop, Volatility stop (ATR)]
type: stop-exit
states: [volatility, trend]
weak_states: [range]
purposes: [stop]
inventor: Not attributed to one person
year: Unknown
default_settings: "ATR(14) x 2 to 3 from entry or from the highest close"
pairs_with: [atr, position-sizing, structure-stop, risk-reward-ratio]
related: [chandelier-exit, supertrend, volatility-stop, trailing-stop, stop-loss]
compare: [supertrend-vs-atr-stop]
glossary: [stop-loss, volatility, r-multiple, lookback-period]
wave: 1
reviewed: 14 November 2026
---

An ATR stop places a stop loss a set multiple of the Average True Range (ATR) away from price. Because ATR measures recent volatility, the stop sits further away when the market is moving widely and closer when it is quiet. This keeps the stop outside normal noise without guessing a fixed distance.

## At a glance

| | |
|---|---|
| Type | Stop and exit method |
| Best market states | Volatility changes, trends |
| Weak in | Tight ranges, where the stop may sit far beyond the range |
| Best uses | Stop placement, sizing the trade |
| Default settings | ATR period 14, multiple 2 to 3 |
| Created by | Not attributed to one person; built on Wilder's ATR (1978) |
| Fixed or trailing | Either: set once at entry, or moved with price |

## What is an ATR stop?

The [ATR](/atr/) was introduced by J. Welles Wilder Jr. in 1978. It averages the true range of recent bars, which is the largest of the bar's high-low range and its gaps from the previous close. It does not show direction. It shows how far price typically moves per bar.

An ATR stop uses that number as a yardstick. If ATR is 2 and the multiple is 2, the stop sits 4 away. When volatility doubles, the stop moves twice as far out, which stops normal swings from ending the trade.

No single person is credited with the method. It is a standard way of using Wilder's indicator and appears in many trading texts and platforms.

## Formula

**Long trade:** stop = entry price (or close) - (multiple x ATR)

**Short trade:** stop = entry price (or close) + (multiple x ATR)

If used as a trailing stop, the reference is the highest close since entry for a long trade, and the stop only moves up. For the closely related trailing form, see [Chandelier exit](/chandelier-exit/).

**Worked example.** A trader buys at 100. ATR(14) is 2. The multiple is 2.5.
Stop distance = 2.5 x 2 = 5
Stop = 100 - 5 = **95**
So 1R = 5 (plus spread). A target 10 above entry, at 110, is 2R.

If ATR later rises to 4, the same rule would put a new trade's stop 10 away. The distance is not fixed.

## How to read it

**Distance in R.** The ATR distance defines 1R. That is the amount the trade risks, so it drives [Position sizing](/position-sizing/). Wider stop, smaller position.

**Multiple.** A small multiple (1 to 1.5) gets hit often by normal noise. A larger multiple (3 or more) survives more noise but risks more per trade.

**Fixed versus trailing.** A fixed ATR stop is set at entry and left. A trailing version follows the highest close and never moves down. Trailing locks in gains but can exit early on pullbacks.

**Changing volatility.** ATR is an average, so it reacts slowly to a sudden spike. A gap or news bar can move price beyond the stop before the ATR catches up.

## Best market states

**Volatility changes (best).** Because it adapts, the method suits markets whose range expands and contracts.

**Trends (good).** A 2 to 3 ATR distance gives a trend room to pull back without ending the trade.

**Breakouts (mixed).** Volatility often jumps on a breakout, so the ATR measured before it can be too small.

**Ranges (weak).** In a tight range the ATR stop may be placed far outside the range edge. A structure-based stop is often tighter and more logical.

**Quiet markets.** ATR becomes small, so the stop is close. A stop that tight can be hit by a single unusual bar.

## Settings

| Setting | ATR period | Multiple | What it does |
|---|---|---|---|
| Tight | 10 to 14 | 1 to 1.5 | Close stop, many exits, small R |
| Default | 14 | 2 to 3 | Common balance for swing and trend trades |
| Wide | 14 to 22 | 3 to 4 | Survives deep pullbacks, larger R |

The period and multiple are not fixed rules. Many platforms use Wilder's smoothing for ATR, while some use a simple average, so values differ slightly. Test any setting on the market and time frame you trade before relying on it.

## Common mistakes

- Using a multiple chosen only because it avoided past losses.
- Ignoring the chart. An ATR stop can fall in the middle of a support area where price may well reach.
- Forgetting the spread, which sits on top of the ATR distance.
- Not shrinking the position when the wider stop increases the money risk.
- Applying a stop measured on one time frame to a trade held on another.
- Widening the multiple after entry to avoid a loss.

## Pairs well with

- **[ATR](/atr/)**: the indicator the stop is built from.
- **[Position sizing](/position-sizing/)**: turns the ATR distance into a trade size.
- **[Swing high/low stop](/structure-stop/)**: combine a chart level with an ATR buffer beyond it.
- **[Risk-reward ratio](/risk-reward-ratio/)**: a wider stop needs a more distant target to keep the ratio sound.

## Sources

- Wilder, J. Welles Jr. (1978). *New Concepts in Technical Trading Systems*. Trend Research.
- Kaufman, Perry J. *Trading Systems and Methods*. Wiley.
- Tharp, Van K. (1998). *Trade Your Way to Financial Freedom*. McGraw-Hill.

## FAQ

**What is an ATR stop?**
It is a stop loss set a multiple of ATR away from entry or from a recent close. Since ATR measures how far price typically moves, the stop adapts to market conditions instead of using a fixed distance.

**What ATR multiple should I use?**
Many traders use 2 to 3 times ATR(14), but there is no correct number. A smaller multiple exits sooner and has a smaller risk, a larger one survives more noise. Test the choice on the market you trade.

**Is an ATR stop better than a fixed stop?**
It adapts to volatility, which often makes it more sensible than a fixed amount. It does not know where support or resistance sits, so many traders check the result against chart levels.

**How does ATR affect position size?**
A larger ATR means a wider stop, so for the same money risk the position must be smaller. The size comes from risk divided by stop distance. See [Position sizing](/position-sizing/).

**What is the difference between an ATR stop and Supertrend?**
Both use ATR. An ATR stop is a distance from price, while Supertrend flips between a long and short line. See [Supertrend vs ATR stop](/compare/supertrend-vs-atr-stop/).
