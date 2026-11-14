---
slug: supertrend-vs-atr-stop
title: Supertrend vs ATR Stop
a: supertrend
b: atr-stop
reviewed: 14 November 2026
---

Supertrend and an ATR stop both use the Average True Range to set a stop at a distance that adapts to volatility. An ATR stop is a method: a distance of a set multiple of ATR from entry or from the highest close. Supertrend is an indicator built on the same idea that plots a line, flips between long and short, and can be used as a trend filter.

## At a glance

| | Supertrend | ATR Stop |
|---|---|---|
| Form | Indicator plotted on the chart | Stop method you calculate |
| Reference point | Midpoint of each bar (high plus low, halved) | Entry price or highest close |
| Default settings | ATR period 10, multiplier 3 | ATR period 14, multiple 2 to 3 |
| Flips direction? | Yes, a close through the line reverses it | No, it is a stop only |
| Fixed or trailing | Trailing | Either, set at entry or moved with price |
| Origin | Often credited to Olivier Seban | Not attributed; built on Wilder's ATR, 1978 |
| Weak in | Sideways ranges | Tight ranges, where the stop sits far out |

## When to use Supertrend

[Supertrend](/supertrend/) suits traders who want a ready-made line that trails price and doubles as a trend filter. Only taking longs while the line is below price is a simple rule. A flip serves as an exit or a new signal. It lags and flips often in ranges, so it is usually paired with a trend-strength tool.

## When to use ATR Stop

An [ATR Stop](/atr-stop/) suits traders who want to set risk before entry. The distance defines 1R and so drives [position sizing](/position-sizing/): a wider stop means a smaller position. It can be fixed at entry or trailed behind the highest close. It does not flip direction or give a trend signal, so it needs a separate entry rule.

## Using both together

They share the same logic, so they are often interchangeable for trailing. A trader might use an ATR stop to size the trade at entry and Supertrend to trail the exit. Check the two distances against each other and against chart levels, since neither knows where [support and resistance](/support-and-resistance/) sits.

## Common mix-ups

- **Treating Supertrend as only a stop.** It also gives trend direction.
- **Treating an ATR stop as a signal.** It has no entry or flip rule.
- **Using different ATR periods and comparing results.** 10 and 14 are common defaults.
- **Letting the indicator set your risk.** The distance should fit your risk per trade.
- **Ignoring ATR lag.** A gap or news bar can pass the stop before ATR catches up.

## FAQ

**Is Supertrend an ATR stop?**
Closely related. Supertrend places a line a multiple of ATR from the bar midpoint and flips on a close through it. An ATR stop is a distance from entry or the highest close with no flip.

**Which should I use for position sizing?**
An ATR stop, since it gives a clear distance at entry. Supertrend can also give one, but its line moves with each bar.

**Do they adapt to volatility?**
Yes, both. A larger ATR places the stop further out, and a smaller ATR brings it closer.

**Which has a better default multiple?**
There is no best value. Supertrend commonly uses 3, and ATR stops commonly use 2 to 3. Test on your market.
