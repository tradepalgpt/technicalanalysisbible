---
slug: kase-devstop
name: Kase DevStop
aka: [DevStop, Kase Dev Stops]
type: stop-exit
states: [volatility]
weak_states: [range]
purposes: [stop]
inventor: Cynthia Kase
year: 1990s
default_settings: "30-period lookback; stop levels at 0 to 3 standard deviations above the average range (platforms differ)"
pairs_with: [atr-stop, chandelier-exit, standard-deviation, stop-loss]
related: [atr-stop, chandelier-exit, volatility-stop, structure-stop, atr]
compare: []
glossary: [stop-loss, volatility, lookback-period, smoothing, trend]
wave: 3
reviewed: 14 November 2026
---

The Kase DevStop is a volatility-based stop developed by Cynthia Kase. It sets the stop a number of standard deviations of recent price range away from the recent high or low, so the stop can allow for how uneven the range has been, not just its average size. It is a niche cousin of the ATR stop.

## At a glance

| | |
|---|---|
| Type | Volatility stop |
| Best market states | Volatility-driven moves, trends |
| Weak in | Ranges |
| Best uses | Stop placement |
| Default settings | 30 periods, levels at 0 to 3 standard deviations (varies) |
| Created by | Cynthia Kase, 1990s |
| Leading or lagging | Lagging: built from past ranges |

## What is the Kase DevStop?

Most volatility stops use a multiple of [ATR](/atr/) away from price. The DevStop adds a second ingredient. It looks at how much the range varies, using standard deviation, as well as how large it is on average. A market whose bar sizes swing around wildly gets a wider stop than a market with the same average range but steadier bars.

Cynthia Kase, a trader and author, developed the idea and presented it in her work on statistics-based trading in the 1990s. It is available in a number of charting packages, often as a Kase DevStop study with several levels.

Details of the calculation differ between sources and platforms. What follows is the commonly described structure. Always check your platform's documentation.

## Formula

A commonly described version works as follows:

1. Measure the range of each bar over a short window (the DevStop uses a two-bar range, so gaps are captured).
2. Take the average of that range over the lookback period (30 by default in many implementations). Call it the average range.
3. Take the standard deviation of the same ranges. Call it SD.
4. For a long position, take the highest high of the last two bars and subtract: average range + n x SD.
5. For a short position, take the lowest low of the last two bars and add the same amount.

The n values are usually 0, 1, 2 and 3, giving several stop levels from tight to wide. Kase's DevStop levels are often labelled DevStop 1, 2 and 3.

**Worked example.** The highest high of the last two bars is 110. The average range is 2.0 and the SD is 0.5.

- n = 0: stop = 110 - (2.0 + 0 x 0.5) = 108
- n = 1: stop = 110 - (2.0 + 0.5) = 107.5
- n = 2: stop = 110 - (2.0 + 1.0) = 107
- n = 3: stop = 110 - (2.0 + 1.5) = 106.5

A trader who accepts more room would use the n = 3 level at 106.5. Compare an ATR-style stop at 2 x ATR, which on these figures would be 106.

In calculation, the stop only moves in the direction of the trade, as with a trailing stop.

## How to read it

**Tight to wide.** Lower levels sit close to price and trigger more often. Higher levels sit further away and give more room.

**Trailing behaviour.** As the highest high rises, the stop follows. It does not retreat in a long trade.

**Volatility response.** When ranges become erratic, the standard deviation grows and the stop widens, which can help avoid stops during unstable periods.

**As an exit.** A close beyond the DevStop is used as a signal to leave.

**Risk size.** A wider stop means a smaller position for the same risk. See [stop loss](/stop-loss/) for how to size trades.

## Best market states

**Volatility-driven moves (best).** The tool is designed to adapt to changing range variation.

**Trends (good).** It trails behind a trend and gives room for normal pullbacks.

**Ranges (weak).** In a sideways market, a stop based on the high of the last two bars sits close to price and is hit often.

**Reversals.** A sharp reversal will often trigger the stop. It does not predict turns.

## Settings

| Setting | Typical value | Effect |
|---|---|---|
| Lookback | 30 | Longer is smoother and slower to adapt |
| Levels (n) | 0, 1, 2, 3 | More standard deviations give a wider stop |
| Range window | 2 bars | Shorter windows react faster |

Settings vary by platform. Some packages let you choose the lookback and levels freely.

## Common mistakes

- Assuming every platform uses the same formula.
- Using the tightest level and then being stopped out by routine noise.
- Moving the stop against the trade.
- Choosing the level that fits past data instead of one that matches your risk plan.
- Ignoring position size when the stop is wide.
- Using it in a range.

## Pairs well with

- **[ATR stop](/atr-stop/)**: the simpler cousin, useful for comparison.
- **[Chandelier exit](/chandelier-exit/)**: another trailing volatility stop built from highs and ATR.
- **[Standard deviation](/standard-deviation/)**: the measure the DevStop uses.
- **[Stop loss](/stop-loss/)**: the broader rules for where a stop belongs.

## Sources

- Kase, Cynthia A. (1996). *Trading with the Odds: Using the Power of Statistics to Beat the Market*. Irwin Professional Publishing.

## FAQ

**What is the Kase DevStop?**
It is a volatility-based stop developed by Cynthia Kase. It uses the average range and the standard deviation of that range to set stop levels away from the recent high or low.

**How is the DevStop different from an ATR stop?**
An ATR stop uses a multiple of the average range. The DevStop adds the standard deviation of the range, so it widens when range sizes vary a lot, even if the average stays the same.

**What are the default DevStop settings?**
Many platforms use a 30-period lookback and levels at 0, 1, 2 and 3 standard deviations. Settings differ, so check your charting package.

**Does the Kase DevStop work?**
It is a way to place a stop with some allowance for volatility. No stop method prevents losses or guarantees a better result. Test it on your own market and time frame.

**Can I use the DevStop for short trades?**
Yes. The stop sits above the lowest low of the last two bars, offset by the same average range and standard deviation, and trails downward as price falls.
