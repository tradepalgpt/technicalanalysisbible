---
slug: chandelier-exit
name: Chandelier Exit
aka: [Chandelier stop, Chandelier]
type: stop-exit
states: [trend]
weak_states: [range]
purposes: [stop, exit]
inventor: Chuck LeBeau
year: Unknown
default_settings: "22 periods; 3 x ATR(22)"
pairs_with: [atr, adx, exponential-moving-average, position-sizing]
related: [atr-stop, parabolic-sar, supertrend, trailing-stop, donchian-channels]
compare: [chandelier-exit-vs-parabolic-sar]
glossary: [stop-loss, trailing-stop, lookback-period, volatility]
wave: 1
reviewed: 14 November 2026
---

The Chandelier Exit is a trailing stop that hangs from the highest high of the last 22 bars, dropped by three times the Average True Range (ATR). It rises as price makes new highs but never falls, so it protects profit in a trend while giving room for pullbacks. It is named for the way it hangs from the high like a chandelier from a ceiling.

## At a glance

| | |
|---|---|
| Type | Stop and exit method (trailing) |
| Best market states | Trends |
| Weak in | Ranges, where it is hit by ordinary swings |
| Best uses | Trailing stop, exit signal |
| Default settings | 22 periods, 3 x ATR(22) |
| Created by | Chuck LeBeau, 1990s; widely known through Alexander Elder's *Come Into My Trading Room* (2002) |
| Direction | Long version hangs below highs, short version above lows |

## What is the Chandelier Exit?

Chuck LeBeau designed the Chandelier Exit as a way to stay in a trend while it lasts and leave when it ends. The idea is simple. Measure from the highest point price has reached, not from the entry. Then step back by a multiple of volatility. If price falls that far from its peak, the trend has probably changed.

Because the reference point is the peak, the stop only ever moves up on a long trade. When price makes a new high, the stop is raised. When price pulls back, the stop stays where it is. It uses [ATR](/atr/), so the distance widens when the market is volatile and narrows when it is calm.

The method appears in LeBeau's writing on exits and is widely included on charting platforms.

## Formula

**Long exit:** Chandelier Exit = highest high over 22 bars - 3 x ATR(22)

**Short exit:** Chandelier Exit = lowest low over 22 bars + 3 x ATR(22)

An exit is triggered when price closes below the long line (or above the short line). Some traders act on a close only, others on any touch.

**Worked example.** The highest high of the last 22 bars is 120. ATR(22) is 2.
Distance = 3 x 2 = 6
Chandelier Exit = 120 - 6 = **114**
If price makes a new high at 124 and ATR is unchanged, the line rises to 124 - 6 = 118. If price then drops back to 120, the line stays at 118. A close below 118 ends the trade.

**Measured in R.** If entry was at 105 with an initial stop at 99 (1R = 6), a stop now at 118 locks in 13 above entry, about 2.2R.

## How to read it

**Trailing behaviour.** The line moves up with new highs and holds still on pullbacks. It never moves down on a long trade.

**Exit signal.** A close through the line is the exit. Until then, the trade is held.

**Initial stop.** The line also acts as the first stop at entry. The distance from entry to the line sets 1R.

**Gap and spike risk.** One extreme bar can drag ATR and the highest high sharply, which makes the line jump. Check how the line reacts around news.

**Trade-off.** The method gives back some profit. It exits only after price falls three ATRs from the peak, which is the price of staying in the trend.

## Best market states

**Strong trends (best).** The exit is designed to ride a trend and quit when it breaks.

**Volatile trends (good).** ATR widens the stop when swings grow, so normal pullbacks do not end the trade.

**Ranges (weak).** Price swings back and forth without trending. The line is hit repeatedly and the exits are poor.

**Reversals.** It gives a late signal, since it waits for a large drop from the peak.

**Breakouts.** A fresh breakout has no history behind it, so the highest-high anchor may not capture the move properly.

## Settings

| Setting | Lookback | ATR multiple | What it does |
|---|---|---|---|
| Tight | 10 to 14 | 2 | Exits sooner, keeps more profit, more false exits |
| Default | 22 | 3 | LeBeau's standard setting |
| Wide | 30 to 50 | 3 to 4 | Stays in longer trends, gives back more |

The 22-bar lookback is about one month of daily bars. On other time frames, the same numbers apply to bars, not days. ATR smoothing differs slightly between platforms, so the line can differ a little. Test on your own market before relying on any setting.

## Common mistakes

- Using it in a sideways market and treating every exit as a failure of the method.
- Changing the multiple after each losing trade.
- Ignoring the spread when the exit triggers on a touch.
- Treating the line as a profit target. It is an exit, not a target.
- Forgetting that the highest-high lookback includes bars from before entry.
- Judging the method only on winners, without counting how much profit it gives back.

## Pairs well with

- **[ATR](/atr/)**: the volatility measure that sets the distance.
- **[ADX](/adx/)**: confirms the market is trending before using a trend exit.
- **[Exponential moving average](/exponential-moving-average/)**: a trend filter for the direction of the trade.
- **[Position sizing](/position-sizing/)**: the distance to the first line sets the size.

## Sources

- Elder, Alexander (2002). *Come Into My Trading Room*. Wiley. (Describes the Chandelier Exit and credits LeBeau.)
- Wilder, J. Welles Jr. (1978). *New Concepts in Technical Trading Systems*. Trend Research. (Source of ATR.)

## FAQ

**What is the Chandelier Exit formula?**
For a long trade it is the highest high over 22 bars minus 3 times the 22-bar ATR. For a short trade it is the lowest low over 22 bars plus 3 times ATR. It moves only in the direction that protects profit.

**Who created the Chandelier Exit?**
Chuck LeBeau designed it as a way to hold trends and exit when volatility-adjusted pullbacks grow too big. It is now built into many charting platforms.

**Is the Chandelier Exit a stop or an exit signal?**
Both. It serves as the first stop when a trade opens, then trails up as a long trade makes new highs. A close beyond it ends the trade.

**What is the difference between the Chandelier Exit and Parabolic SAR?**
Both trail price. The Chandelier uses the highest high and ATR, so it adapts to volatility. Parabolic SAR accelerates toward price over time. See [Chandelier Exit vs Parabolic SAR](/compare/chandelier-exit-vs-parabolic-sar/).

**Can I change the 22 and 3 settings?**
Yes. Shorter lookbacks and smaller multiples exit sooner. Longer ones stay in longer. There is no best set, so test any change on the market you trade.
