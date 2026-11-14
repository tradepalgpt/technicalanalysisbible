---
slug: pivot-points
name: Pivot Points (standard)
aka: [Floor trader pivots, standard pivot points, classic pivots]
type: levels
states: [range]
weak_states: [trend]
purposes: [entry, exit, stop]
inventor: Not attributed to one person (floor traders)
year: Unknown
default_settings: "Previous period high, low and close; levels P, R1 to R3, S1 to S3"
pairs_with: [support-and-resistance, previous-day-high-low, atr, volume]
related: [fibonacci-pivot-points, camarilla-pivots, previous-day-high-low, weekly-monthly-open, round-numbers]
compare: [pivot-points-vs-fibonacci]
glossary: [pivot-point, support, resistance]
wave: 1
reviewed: 14 November 2026
---

Pivot points are support and resistance levels calculated from the previous period's high, low and close. The central pivot (P) is their average. Three levels above (R1 to R3) and three below (S1 to S3) are worked out from it. Day traders use them as a ready-made map of possible turning points.

## At a glance

| | |
|---|---|
| Type | Calculated price levels |
| Best market states | Range |
| Weak in | Strong trends and on days with big news |
| Best uses | Entry, profit target, stop placement |
| Default settings | Previous day's (or week's) high, low, close |
| Created by | Not attributed to one person; used by floor traders on exchange pits |
| Leading or lagging | Calculated from past data, but drawn forward so they act as leading levels for the new period |

## What are pivot points?

Pivot points began with floor traders in futures pits, who needed quick levels for the coming session and worked them out from the last session's numbers. They are still popular with day traders because they are objective: two people with the same data get the same levels.

The central pivot works as a balance point. Price above it is read as having a bullish tilt for the session, and price below it a bearish tilt. The other levels give likely places for reactions. Because the levels are known to many traders, they can become self-fulfilling, but they have no special power beyond that.

"Standard" here means the classic floor-trader version. Other versions exist, such as [Fibonacci pivot points](/fibonacci-pivot-points/) and [Camarilla pivots](/camarilla-pivots/). Charting packages sometimes call the standard set "Traditional".

## Formula

Take the previous period's high (H), low (L) and close (C).

- Pivot: P = (H + L + C) / 3
- First resistance: R1 = (2 x P) - L
- First support: S1 = (2 x P) - H
- Second resistance: R2 = P + (H - L)
- Second support: S2 = P - (H - L)
- Third resistance: R3 = H + 2 x (P - L)
- Third support: S3 = L - 2 x (H - P)

**Worked example.** Yesterday's high was 110, low 90 and close 100.
P = (110 + 90 + 100) / 3 = **100**
R1 = 200 - 90 = **110**, S1 = 200 - 110 = **90**
R2 = 100 + 20 = **120**, S2 = 100 - 20 = **80**
R3 = 110 + 2 x (100 - 90) = **130**, S3 = 90 - 2 x (110 - 100) = **70**

Intraday traders use the previous day's range. Swing traders sometimes use the previous week or month. Platforms differ on what counts as the "day" in markets that trade nearly around the clock, such as forex, so levels can differ slightly between charts.

## How to read it

**Bias.** Trading above P suggests a bullish tilt, below P a bearish tilt. It is a rough guide, not a signal.

**Bounce.** Price reaches R1 or S1 and turns back. In a range, R1 and S1 are common targets and entry areas.

**Break.** Price closes beyond R1 or S1 and heads towards the next level. R2 and S2 are then the usual targets.

**Targets.** Many traders use the next pivot level as a profit target: from P to R1, from R1 to R2.

**Confluence.** A pivot level that lines up with a [previous day high or low](/previous-day-high-low/) or an older support level is watched more closely.

## Best market states

**Ranges (best).** On quiet days that stay inside the previous range, S1 and R1 often mark the edges, and the pivot acts as a magnet.

**Trends (weak).** On a strong trend day, price can pass several levels without stopping. R3 and S3 are rarely reached on ordinary days, and when they are, it is usually a sign of an unusual day.

**Breakouts (mixed).** A gap or news move may carry price far from the levels. Starting the day beyond R2 or S2 means most of the map is behind you.

**Volatility.** The levels scale with yesterday's range. After a very wide day the levels are far apart, and after a tight day they are close together.

## Settings

| Setting | Choice | What it does |
|---|---|---|
| Period | Daily | The usual choice for day trading |
| Period | Weekly or monthly | Wider levels for swing traders |
| Levels shown | P, R1, S1 only | Cleaner chart; many traders ignore the third level |
| Session definition | Exchange session or midnight | Changes the high, low and close used in 24-hour markets |

There is no value to optimise: the formula is fixed. The only real choices are the period and which levels to show.

## Common mistakes

- Treating each level as a precise price at which price must reverse.
- Using the levels on strong trend days, where they are most often run through.
- Mixing up platforms: some calculate the "day" differently, so the same pair can show different levels.
- Drawing all seven levels and then finding a reason to trade at every one.
- Placing a stop exactly on the pivot level, where many other stops also sit.
- Using the formula on the wrong inputs, for example the open instead of the close.

## Pairs well with

- **[Support and resistance](/support-and-resistance/)**: levels that match an older swing high or low have two reasons to matter.
- **[Previous day high/low](/previous-day-high-low/)**: another level set built from the previous session.
- **[ATR](/atr/)**: sets stop sizes so a normal wiggle does not hit a stop sitting just past a pivot.
- **[Volume](/volume/)**: a break of R1 or S1 on strong volume is more believable.

## Sources

- Person, John L. (2004). *A Complete Guide to Technical Trading Tactics*. Wiley. (Covers floor-trader pivot points.)
- Kirkpatrick, Charles D. and Dahlquist, Julie R. (2006). *Technical Analysis: The Complete Resource for Financial Market Technicians*. FT Press.

## FAQ

**How do you calculate pivot points?**
Add the previous high, low and close and divide by three to get the pivot. Then R1 is twice the pivot minus the low and S1 is twice the pivot minus the high. R2 and S2 add or subtract the previous range from the pivot.

**Which time frame should pivot points use?**
Daily pivots, built from the previous day, suit day traders. Weekly or monthly pivots suit swing traders. Use the chart time frame you trade for entries, but build the levels from the period that matches your holding time.

**Do pivot points work on forex and crypto?**
They can be drawn on any market. Forex and crypto trade nearly around the clock, so you must choose when a day starts and ends, and different platforms choose differently. Check that your levels match the session you want.

**Are pivot points leading or lagging?**
The inputs are past prices, so the calculation lags. The levels are drawn ahead for the new session, so traders use them as forward-looking reference points. They predict nothing by themselves.

**What is the difference between standard and Fibonacci pivot points?**
Standard pivots use the previous range directly. Fibonacci pivots multiply the range by ratios such as 0.382, 0.618 and 1.0. The central pivot is the same. See [pivot points vs Fibonacci](/compare/pivot-points-vs-fibonacci/).
