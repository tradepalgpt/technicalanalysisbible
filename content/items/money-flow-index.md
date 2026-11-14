---
slug: money-flow-index
name: Money Flow Index (MFI)
aka: [MFI, volume-weighted RSI]
type: volume
states: [range, reversal]
weak_states: [trend]
purposes: [entry, confirmation]
inventor: Gene Quong and Avrum Soudack (often credited)
year: Unknown
default_settings: "14 periods; levels 80 and 20"
pairs_with: [support-and-resistance, rsi, divergence, volume]
related: [rsi, on-balance-volume, chaikin-money-flow, accumulation-distribution, overbought-oversold]
compare: [mfi-vs-rsi]
glossary: [overbought, oversold, divergence, oscillator, lookback-period]
wave: 1
reviewed: 14 November 2026
---

The Money Flow Index (MFI) is a volume-weighted momentum oscillator that moves between 0 and 100. It works like RSI but also uses volume. Readings above 80 are usually called overbought and below 20 oversold. Traders use it to time entries in ranges and to spot divergence at turning points.

## At a glance

| | |
|---|---|
| Type | Volume-weighted momentum oscillator |
| Best market states | Range, reversal |
| Weak in | Strong trends, where it stays at extremes |
| Best uses | Entry timing, confirmation |
| Default settings | 14 periods; levels 80 / 20 |
| Created by | Often credited to Gene Quong and Avrum Soudack; year not firmly established |
| Leading or lagging | Mostly lagging; divergences can warn early |

## What is the Money Flow Index?

MFI is often called "volume-weighted RSI". RSI looks only at price changes. MFI looks at the typical price of each bar and multiplies it by volume to get "money flow", then compares the money flowing in on up bars with money flowing out on down bars.

The idea is that a price move on heavy volume matters more than the same move on thin volume. When MFI is high, most of the recent money flow has been on bars where the typical price rose. When it is low, most has been on bars where it fell.

The name suggests actual cash flows, but it is only an estimate based on typical price and volume. It does not know who bought or sold.

The indicator is often credited to Gene Quong and Avrum Soudack. It is a standard tool on most platforms.

**Forex note.** Spot forex only has tick volume, not real volume, so MFI there is an approximation. It is more reliable on stocks and futures with exchange volume.

## Formula

1. Typical price: TP = (high + low + close) / 3
2. Raw money flow = TP x volume
3. If today's TP is higher than yesterday's TP, the raw money flow is **positive**. If lower, it is **negative**. If equal, it is ignored.
4. Add up positive money flow and negative money flow over the last 14 periods.
5. Money flow ratio (MFR) = sum of positive money flow / sum of negative money flow
6. **MFI = 100 - 100 / (1 + MFR)**

**Worked example.** Over 14 periods, positive money flow adds up to 600 and negative money flow to 400 (small round numbers, in millions).
MFR = 600 / 400 = 1.5
MFI = 100 - 100 / (1 + 1.5) = 100 - 40 = **60**

If negative money flow is zero, MFI is 100 by definition.

Unlike RSI, MFI uses simple sums of the last 14 periods, not Wilder's smoothing.

## How to read it

**Overbought and oversold.** Above 80, money flow has been strongly positive. Below 20, strongly negative. In a range, these often line up with the edges of the range. They are not buy or sell signals alone.

**Divergence.** Price makes a new high but MFI does not (bearish), or price makes a new low but MFI does not (bullish). It suggests the move has less volume behind it. See [divergence](/divergence/). Divergence can run on for a long time.

**The 50 line.** MFI above 50 shows money flow is net positive, below 50 net negative. Some traders use it as a simple bias filter.

**Extremes in trends.** In a strong trend MFI can sit above 80 or below 20 for a long time. This shows strength; it is not a reversal signal by itself.

**Failure swings.** An MFI that goes above 80, falls, fails to make a new high and then breaks its prior low is read like an RSI failure swing, as an early warning of a turn.

## Best market states

**Ranges (best).** Overbought and oversold readings are most useful when price moves between clear levels.

**Reversals (good).** Divergence between price and MFI near a major level is its most watched signal, as confirmation of a turn.

**Strong trends (weak).** MFI can stay at an extreme for weeks. Fading "overbought" in a strong uptrend often fails.

**Breakouts.** A breakout on heavy volume often sends MFI to an extreme quickly, which is a sign of strength.

**Volatility.** Volume spikes on news can move MFI sharply and quickly, producing readings that fade as the volume leaves the window.

## Settings

| Setting | Period | Levels | What it does |
|---|---|---|---|
| Faster | 7 to 10 | 90 / 10 or 80 / 20 | More signals, more noise |
| Default | 14 | 80 / 20 | The standard. Some use 70 / 30 for more signals |
| Slower | 20 to 30 | 80 / 20 | Fewer signals, slower to react |

The levels differ from RSI's 70 / 30 because volume weighting tends to produce more extreme readings. Levels are a convention rather than a rule.

## Common mistakes

- Treating 80 and 20 as automatic sell and buy signals.
- Using it in a strong trend where it stays at an extreme.
- Applying it to forex tick volume as if it were exchange volume.
- Ignoring that a single huge volume day can dominate the 14-period window.
- Comparing it with RSI as if the two always agree. They use different inputs.
- Trading every divergence as a reversal.

## Pairs well with

- **[Support and resistance](/support-and-resistance/)**: an oversold MFI at a known support carries more meaning.
- **[RSI](/rsi/)**: price-only momentum; agreement with MFI strengthens a read, disagreement shows volume is telling a different story.
- **[Divergence](/divergence/)**: the main pattern traders look for in MFI.
- **[Volume](/volume/)**: reading raw volume bars helps spot the days that dominate MFI.

## Sources

- Colby, Robert W. (2003). *The Encyclopedia of Technical Market Indicators*, 2nd edition. McGraw-Hill.
- Murphy, John J. (1999). *Technical Analysis of the Financial Markets*. New York Institute of Finance.

## FAQ

**What is a good MFI level?**
The standard levels are 80 for overbought and 20 for oversold. Some traders use 70 and 30. In a range these readings often sit near the edges. In a strong trend they can persist, so they are not signals alone.

**What is the difference between MFI and RSI?**
RSI uses price changes only. MFI uses typical price multiplied by volume, so heavy-volume bars count more. MFI is often called volume-weighted RSI. See [MFI vs RSI](/compare/mfi-vs-rsi/).

**Does MFI work in forex?**
Spot forex has no central volume, so MFI uses tick volume and is an approximation. It tends to be more informative on stocks, futures and crypto exchanges that report real volume.

**What does MFI divergence mean?**
Price makes a new high or low that MFI does not confirm. It suggests the move has less volume support. It is a warning, not a timing signal, and many divergences do not lead to a turn.

**What period does MFI use?**
The default is 14 periods, the same as RSI. Shorter periods are more reactive and noisier. Longer ones are smoother but slower. Test any change on the market you trade.
