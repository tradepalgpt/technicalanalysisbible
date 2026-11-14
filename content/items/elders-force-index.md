---
slug: elders-force-index
name: Elder's Force Index
aka: [Elder Force Index, EFI, 2-day Force Index]
type: volume
states: [trend]
weak_states: [range]
purposes: [entry]
inventor: Alexander Elder
year: 1993
default_settings: "2-period EMA of force for entries; 13-period EMA for trend balance"
pairs_with: [exponential-moving-average, force-index, support-and-resistance, divergence]
related: [force-index, on-balance-volume, accumulation-distribution, money-flow-index, ease-of-movement, price-volume-trend]
compare: []
glossary: [momentum, oscillator, pullback, divergence, smoothing]
wave: 3
reviewed: 14 November 2026
---

Elder's Force Index is a way of using the Force Index, a price-change-times-volume oscillator, to time entries in the direction of a trend. The short version, a 2-period EMA, dips below zero during pullbacks in an uptrend, and traders look for the turn back up as an entry cue. It is a timing aid, not a stand-alone system.

## At a glance

| | |
|---|---|
| Type | Volume oscillator (entry timing) |
| Best market states | Trend |
| Weak in | Ranges |
| Best uses | Entry timing |
| Default settings | 2-period EMA for timing; 13-period EMA for the broader balance |
| Created by | Alexander Elder, 1993 |
| Leading or lagging | Short version reacts quickly; still built from past bars |

## What is Elder's Force Index?

This page covers the entry use of the indicator. The indicator itself, its formula and its longer settings are on the [Force Index](/force-index/) page. Both names refer to the same calculation, which Alexander Elder introduced in his book *Trading for a Living* (1993).

The raw Force Index multiplies the change in closing price by volume. A big rise on heavy volume gives a large positive number. A big drop on heavy volume gives a large negative one. The raw series jumps around, so Elder smoothed it with an exponential moving average.

His practical idea was to use two lengths. A 13-period EMA judges the broader balance of buyers and sellers. A 2-period EMA reacts almost bar by bar and is meant to find short pullbacks within a trend. Elder pairs this with a trend filter: a slower moving average or a weekly view tells him the direction, and the 2-period force tells him when a pullback may be ending.

## Formula

1. Raw Force = (Close today - Close yesterday) x Volume today
2. Force Index(2) = 2-period EMA of raw Force (multiplier 2 / (2 + 1) = 0.667)
3. Force Index(13) = 13-period EMA of raw Force (multiplier 2 / 14 = about 0.143)

**Worked example.** Raw force over three bars is +1,500, -900 and -600.
Assume the 2-period EMA before these bars was +400.
After bar 1: 0.667 x 1,500 + 0.333 x 400 = 1,000 + 133 = **+1,133**
After bar 2: 0.667 x (-900) + 0.333 x 1,133 = -600 + 378 = **-222**
After bar 3: 0.667 x (-600) + 0.333 x (-222) = -400 - 74 = **-474**
The line has dropped below zero. In an uptrend, a trader following this method would watch for the line to turn back up as a possible pullback-end cue.

Platform differences: most use an EMA; some allow other average types. Volume is real volume in stocks and futures, but only tick volume in spot forex.

## How to read it

**Pullback entries in an uptrend.** With the trend up, wait for the 2-period force to fall below zero. This marks a short pullback. A turn back above zero, or a rising value after a low, is treated as a cue that the pullback may be over. Confirm on price, such as a hold above support.

**Rallies in a downtrend.** The mirror: with the trend down, wait for the 2-period line to rise above zero, then turn down.

**Trend balance with the 13-period.** A 13-period line mostly above zero in an uptrend means buyers have been stronger. A cross below zero warns that sellers are gaining.

**Divergence.** If price makes a new high but the 13-period force does not, the advance is losing power. See [Divergence](/divergence/). It is a warning and can persist.

**Spikes.** A very large reading can come on a climactic bar. It can signal exhaustion or continuation, so context decides.

**Scale.** Values depend on the instrument's price and volume, so there are no fixed overbought or oversold levels. Compare against recent history.

## Best market states

**Trends (best fit).** The method needs a trend for the pullback idea to make sense, and a way to judge the trend direction.

**Ranges (weak).** The 2-period line crosses zero constantly, and each cross looks like a pullback end. Most of those signals go nowhere.

**Reversals (mixed).** Divergences in the 13-period version at major levels draw attention, though they are not reliable alone.

**Breakouts (mixed).** A spike on a breakout bar may show participation, but the same spike also appears on blow-off moves.

**Volatility.** Large bars produce large readings, which can bury smaller signals.

## Settings

| Setting | Period | What it does |
|---|---|---|
| Timing | 2 | Very quick; used for pullback entries in a trend |
| Default balance | 13 | Elder's usual medium-term setting |
| Slow | 21 to 50 | Smoother; fewer zero crosses |

Shorter periods give more signals and more noise. Do not tune the period to fit past data. Test on the market and time frame you trade.

## Common mistakes

- Taking every zero-line turn as an entry without a trend filter.
- Using the 2-period line in a sideways market.
- Treating the raw numeric level as a universal overbought or oversold reading.
- Using tick volume in forex as if it were traded size.
- Entering on the indicator turn alone with no price confirmation.
- Setting a stop on the indicator instead of on price structure.

## Pairs well with

- **[Exponential moving average](/exponential-moving-average/)**: a longer EMA sets the trend direction, so you act only on pullbacks within it.
- **[Force Index](/force-index/)**: the indicator page, with the formula and the longer settings.
- **[Support and resistance](/support-and-resistance/)**: a pullback ending at known support is a better setting for the cue.
- **[Divergence](/divergence/)**: adds a warning layer when the 13-period line disagrees with price.

## Sources

- Elder, Alexander (1993). *Trading for a Living: Psychology, Trading Tactics, Money Management*. John Wiley & Sons.
- Murphy, John J. (1999). *Technical Analysis of the Financial Markets*. New York Institute of Finance. (Background on volume and trend.)

## FAQ

**Is Elder's Force Index the same as the Force Index?**
Yes, they are the same calculation. This page focuses on the 2-period version used to time entries, while the [Force Index](/force-index/) page covers the indicator more broadly.

**What does the 2-period Force Index show?**
It shows very short-term pressure. A dip below zero during an uptrend is read as a pullback, and a turn back up as a possible cue that the pullback is ending. It needs a trend filter to be meaningful.

**What is the 13-period Force Index for?**
It measures the broader balance between buyers and sellers by smoothing the raw force more heavily. It is used to judge the trend and to spot divergences from price.

**Does Elder's Force Index work in forex?**
It can be plotted, but spot forex lacks central volume, so the result depends on tick volume from your data provider. Futures with real volume give a more meaningful reading.

**Can I trade it alone?**
That is not advised. A zero-line turn says little without a trend direction and a price level. Elder himself describes it as one part of a wider approach, so use it with trend and structure.
