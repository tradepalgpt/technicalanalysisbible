---
slug: volatility-stop
name: Volatility Stop
aka: [Volatility-based stop, ATR-based stop]
type: stop-exit
states: [volatility]
weak_states: [range]
purposes: [stop]
inventor: Not attributed to one person
year: Unknown
default_settings: "A multiple of ATR (commonly 2 to 3) from the entry or the extreme; ATR period 14"
pairs_with: [atr, position-sizing, trailing-stop, support-and-resistance]
related: [atr-stop, chandelier-exit, supertrend, kase-devstop, parabolic-sar, structure-stop]
compare: []
glossary: [volatility, stop-loss, lookback-period, whipsaw]
wave: 2
reviewed: 14 November 2026
---

A volatility stop sets the stop-loss distance from a measure of how much the market normally moves, most often the Average True Range (ATR). In calm markets the stop sits closer; in wild markets it sits further away. This keeps ordinary noise from stopping you out.

## At a glance

| | |
|---|---|
| Type | Stop and exit method |
| Best market states | Volatile and shifting markets, any state where the size of normal movement changes |
| Weak in | Tight ranges with clear edges, where a structure stop is cleaner |
| Best uses | Stop placement |
| Default settings | ATR(14) multiplied by 2 to 3; varies by trader |
| Created by | Not attributed to one person |
| Closely related | ATR stop, Chandelier exit, Supertrend |

## What is a volatility stop?

A fixed stop, such as 20 pips or 1 point, ignores what the market is doing. In a quiet week it may be far too wide. In a fast week it may be hit by normal noise within minutes. A volatility stop fixes this by scaling the distance to current volatility, the typical size of price moves.

Volatility stop is a family, not one formula. Any stop whose distance comes from a volatility measure belongs to it. The most common measure is the [Average True Range](/atr/), which J. Welles Wilder Jr. introduced in 1978. Others use standard deviation or the recent high-low range. Specific versions have their own pages: [ATR stop](/atr-stop/), [Chandelier exit](/chandelier-exit/) and [Supertrend](/supertrend/).

No one person is credited with the general idea. Wilder's work on ATR and Parabolic SAR laid the groundwork, and many traders and authors have built on it since.

## Formula

A basic long-trade version has three steps:

1. Pick a volatility measure and period, for example ATR over 14 bars.
2. Pick a multiplier, for example 2.
3. Stop = reference price - (multiplier x ATR)

For a short trade, add the distance instead of subtracting it.

The reference price is a choice. It can be the entry price (a fixed stop), or the highest high or close since entry (a trailing stop). When it follows the highest high and only moves in the favourable direction, the stop trails the trade.

**Worked example.** You buy at 100. ATR(14) is 2.5 and you use a multiplier of 2.

Stop = 100 - (2 x 2.5) = 100 - 5 = **95**

Risk per share is 5. If your account rule allows risking 100 on the trade, the position size is 100 / 5 = 20 shares. If volatility doubles, ATR becomes 5, the stop distance becomes 10 and the size drops to 10 shares. The dollar risk stays the same while the stop distance adapts.

Platforms differ on how ATR is smoothed. Wilder's original uses his own smoothing, while some tools use a simple moving average of true range, so values can differ slightly.

## How to read it

**Distance reflects conditions.** A wide stop does not mean a bad trade. It means the market is moving widely. The right response is usually a smaller position, not a tighter stop.

**Trailing version.** If the reference is the highest close since entry, the stop rises as price rises and never falls. A close below it ends the trade.

**Multiplier choice.** A small multiplier (1 to 1.5) gives a tight stop and many exits on noise. A large multiplier (3 or more) gives a loose stop that survives pullbacks but gives back more profit. Neither is correct in general. The choice should be tested for the market and time frame you trade.

**Stop moves with ATR.** If ATR rises after you enter, a stop recalculated each bar will widen. Some systems prevent this by letting the stop move only in the profitable direction.

**Combine with structure.** If the volatility stop lands in the middle of a price range with no logic behind it, some traders place it just beyond the nearest swing point instead, and use the volatility figure to check it is not too tight.

## Best market states

**Volatile and shifting markets (best).** When volatility changes from week to week, a fixed stop is often wrong. A scaled stop adapts without needing constant adjustment.

**Trends (good).** In a trend, a trailing volatility stop gives price room to pull back and still protects most of the move.

**Breakouts (good).** Breakouts tend to begin with a burst of volatility. An ATR-based stop avoids using a normal-market stop size in an abnormal period.

**Ranges (weak).** In a clear range, a stop placed just outside the range edge makes more sense than one set by a multiple of ATR. See [Structure stop](/structure-stop/).

**Volatility.** The method is built for it, but it lags. ATR is an average of past ranges, so after a sudden spike the stop may be too narrow for a few bars.

## Confirmation rules

A stop is not a signal, so these checks are about whether the setting is sensible.

| Check | What to look for |
|---|---|
| Time frame | The ATR period matches the chart you trade |
| Multiplier | Tested across different market conditions, not a single stretch |
| Chart logic | The stop is not sitting in the middle of obvious noise |
| Position size | Sized so the dollar risk is constant when the distance changes |
| Gaps | Overnight or weekend gaps can jump past any stop |

## Common mistakes

- Using a multiplier that is far too tight for the market's usual movement.
- Widening the stop after entry because the trade is moving against you, in a way not set by the rule.
- Not reducing position size when the stop gets wider, so risk grows.
- Taking an ATR value from a different time frame than the chart in use.
- Ignoring structure and placing the stop where it is easy to hit.
- Expecting a volatility stop to protect against gaps, which it cannot.

## Pairs well with

- **[ATR](/atr/)**: the usual volatility measure behind the stop.
- **[Position sizing](/position-sizing/)**: lets the stop distance set the size so that risk stays constant.
- **[Trailing stop](/trailing-stop/)**: the stop can follow price as the trade moves in your favour.
- **[Support and resistance](/support-and-resistance/)**: helps you check that the stop is not placed inside normal noise.

## Sources

- Wilder, J. Welles Jr. (1978). *New Concepts in Technical Trading Systems*. Trend Research. (Introduces ATR.)
- Kaufman, Perry J. (2013). *Trading Systems and Methods*, 5th edition. John Wiley & Sons.
- Tharp, Van K. (2006). *Trade Your Way to Financial Freedom*, 2nd edition. McGraw-Hill.

## FAQ

**What is a volatility stop?**
It is a stop-loss placed at a distance based on how much the market normally moves, typically a multiple of ATR. The distance widens when markets are active and narrows when they are quiet.

**What ATR multiplier should I use for a stop?**
Values between 2 and 3 are common, but there is no standard. A smaller number gives a tighter stop and more exits on noise. Test the multiplier on the market and time frame you trade rather than copying a number.

**Is a volatility stop better than a fixed stop?**
It adapts to conditions, which solves a real problem with fixed stops. It is not automatically better. A stop based on chart structure can be more logical in a clear range, so many traders check both.

**Does a volatility stop protect against gaps?**
No. If price gaps past the stop level, the order is usually filled at the next available price, which can be worse. Position size is the main protection against gap risk.

**How is it different from an ATR stop?**
"Volatility stop" is the general idea. An [ATR stop](/atr-stop/) is the most common version, which uses ATR as the volatility measure. Others use standard deviation or price ranges.
