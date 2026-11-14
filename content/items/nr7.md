---
slug: nr7
name: Inside Range / NR4 and NR7
aka: [NR7, NR4, Narrow Range 7, Narrow Range 4]
type: volatility
states: [volatility, breakout]
weak_states: [trend]
purposes: [entry]
inventor: Toby Crabel
year: 1990
default_settings: "Narrowest range of the last 7 bars (NR7) or 4 bars (NR4); entry on a break of the bar's high or low"
pairs_with: [inside-bar, opening-range-breakout, volume, average-daily-range]
related: [inside-bar, bollinger-band-width, volatility-contraction-pattern, bollinger-squeeze, atr, false-breakout]
compare: []
glossary: [volatility, breakout, consolidation, whipsaw, false-breakout, lookback-period]
wave: 2
reviewed: 14 November 2026
---

NR7 stands for "narrowest range of seven". It marks a bar whose high-to-low range is the smallest of the last seven bars. NR4 is the same idea over four bars. The thinking is that a very quiet bar often comes before a larger one. Traders place entries just above the high and below the low of the narrow bar and trade whichever side breaks first.

## At a glance

| | |
|---|---|
| Type | Volatility contraction setup |
| Best market states | Volatility, breakout |
| Weak in | Strong trends, and any market that is already choppy |
| Best uses | Entry |
| Default settings | 7 bars (NR7) or 4 bars (NR4); trigger above the high or below the low |
| Created by | Toby Crabel, 1990 |
| Leading or lagging | Leading in intent (it anticipates expansion), but it gives no direction |

## What is NR7?

Every bar has a range, which is its high minus its low. If today's range is smaller than each of the previous six, it is an NR7 bar. If it is smaller than each of the previous three, it is NR4. The more bars it beats, the narrower it is compared with recent activity.

Toby Crabel described this and related short-term patterns in his 1990 book *Day Trading with Short Term Price Patterns and Opening Range Breakout* (Traders Press). The observation is that markets alternate between quiet and active periods. After a day with an unusually small range, the next day is more likely to have a larger one. That makes narrow-range bars a possible setup for a breakout.

The pattern gives no direction on its own. It tells you the market has compressed, and the trader then lets price show which way it goes.

"Inside range" is a related idea. An [inside bar](/inside-bar/) has a high and low contained within the previous bar's range. An NR7 bar is not always an inside bar, and an inside bar is not always narrow, but when both conditions are true at once many traders consider the setup stronger. This is a common view, not a proven rule.

## How it is identified

1. Calculate each bar's range: high - low.
2. Compare the latest bar's range with the previous six bars.
3. If it is the smallest of the seven, mark it as NR7. Use four bars for NR4.
4. Place a buy stop order above the high of the NR7 bar and a sell stop below its low, or wait for the next session.
5. Trade the side that triggers first. Cancel the other.

**Worked example.** The ranges of the last seven daily bars are 6, 5, 7, 4, 5, 6 and 3 points. The latest range, 3, is the smallest, so it is an NR7 bar. Its high is 52 and its low is 49.
Buy trigger: above 52. Sell trigger: below 49.
If price rises to 52.1 the next day, the long entry triggers. A common stop is at the opposite end of the narrow bar, 49, a risk of about 3 points.

The stop at the other side of the bar is one convention. Others use a fraction of the bar or an [ATR](/atr/)-based stop. Pick one before trading, not after.

## How to read it

**Compression.** An NR7 bar says volatility has dropped to a short-term low. It is often read together with the wider picture, such as a pause in a trend or a tight base.

**Breakout direction.** The break decides direction, not the pattern. Many traders prefer to trade breaks that match the bigger trend and ignore breaks against it.

**Both-ways risk.** Because entries are placed on both sides, a false break one way followed by a reversal can stop out a trade. Such [false breakouts](/false-breakout/) are common after narrow bars.

**Close of the NR7 bar.** Some traders want the narrow bar to close near its high or low, since that hints at direction. Others ignore it. Neither is proven.

**Volume.** Quiet volume on the narrow bar and a pick-up on the break can add weight, as with any breakout.

**Intraday use.** The same count can be used on hourly or other bars, where the pattern is applied to narrow bars within a session.

## Best market states

**Volatility contraction (best).** The pattern is designed for the moment a market compresses.

**Breakouts (good).** After a squeeze, a break of the narrow bar's range is the trigger. It works best when the narrow bar sits inside a larger consolidation.

**Ranges (mixed).** In a range, a narrow bar may only mean more of the same. Breaks often fail and return inside.

**Trends (weak).** In a steady trend, narrow bars may just be pauses, and the pattern may add little beyond what the trend already says.

**Reversals.** The pattern gives no reversal information.

## Settings

| Setting | Bars | What it does |
|---|---|---|
| NR4 | 4 | More frequent signals, less compression, more noise |
| NR7 | 7 | The more common version; rarer and narrower |
| NR10 or more | 10 or more | Very rare; strict compression |

A longer look-back finds fewer, tighter bars. There is no standard best choice. Test on the market and time frame you trade, and check enough examples to see how often a break fails.

Crabel's original work was on daily bars in futures. Results on other markets or time frames may differ, so avoid assuming it carries over.

## Common mistakes

- Treating the pattern as a directional signal. It only flags compression.
- Placing entries without a plan for the false break.
- Ignoring the size of the narrow bar. A very small bar means a small stop, but also a trigger that is easily hit by ordinary noise.
- Counting ranges inconsistently, for example including gaps in some bars and not in others.
- Trading every NR7 bar in a choppy market, where there is nothing to expand from.
- Quoting success rates from memory. Check them on your own data.

## Pairs well with

- **[Inside bar](/inside-bar/)**: when the NR7 bar is also an inside bar, the compression is clearer.
- **[Opening range breakout](/opening-range-breakout/)**: Crabel's other well-known idea, built on the same expansion logic.
- **[Volume](/volume/)**: a pick-up in volume on the break adds confirmation.
- **[Average daily range](/average-daily-range/)**: puts the narrow bar into the context of normal ranges.

## Sources

- Crabel, Toby (1990). *Day Trading with Short Term Price Patterns and Opening Range Breakout*. Traders Press.

## FAQ

**What does NR7 mean in trading?**
It means the narrowest range of seven bars. A bar qualifies if its high-to-low range is smaller than each of the previous six bars. Traders see it as a sign that volatility has dried up and a bigger move may follow.

**What is the difference between NR4 and NR7?**
NR4 compares the latest bar with the previous three. NR7 compares it with the previous six. NR4 appears more often but is a weaker sign of compression. NR7 is rarer and a narrower bar relative to recent action.

**How do you trade an NR7 bar?**
A common method is to place a buy trigger above the bar's high and a sell trigger below its low, then take whichever side triggers first. A stop sits at the other side of the bar. Many traders also filter by trend.

**Does NR7 predict direction?**
No. It only indicates that the market is compressed and that a larger range may follow. The direction comes from the break itself. Many traders use the higher time frame trend to decide which side to prefer.

**Is NR7 the same as an inside bar?**
No. An inside bar sits within the high and low of the previous bar. An NR7 bar has the smallest range of seven bars. A bar can be one, the other or both. When both apply, some traders consider it a cleaner setup.
