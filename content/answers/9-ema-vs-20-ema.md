---
slug: 9-ema-vs-20-ema
title: "9 EMA vs 20 EMA: which to use?"
description: 9 EMA vs 20 EMA compared - how fast each reacts, what each one tends to suit, a worked pullback with both lines, and why many traders use the two together.
query: 9 ema vs 20 ema
pillar: moving-averages
publish: 2027-05-17
reviewed: 16 November 2026
guides: [exponential-moving-average, moving-average-crossover, pullback-trading]
siblings: [best-ema-for-scalping, best-moving-average-for-day-trading]
value: [table, example, verdict]
---

The 9 EMA follows price closely and suits short holds and fast trends. The 20 EMA is smoother and suits swing trends and pullback zones. Neither is better in general; many traders use both, the 9 for timing and the 20 for direction.

## How fast each one moves

The [exponential moving average](/exponential-moving-average/) closes a fixed share of the gap to price each bar: k = 2 / (N + 1).

| | 9 EMA | 20 EMA |
|---|---|---|
| Multiplier k | 0.20 (20% of the gap per bar) | 0.095 (about 9.5%) |
| Average age of the data | 4 bars | 9.5 bars |
| Span on a daily chart | About two trading weeks | About a trading month |
| Span on a 5-minute chart | 45 minutes | 100 minutes |
| Bars to close half the gap after a jump | About 3 | About 7 |
| Behaviour in a strong trend | Hugs price; shallow pullbacks reach it | Price pulls back to it less often |
| Behaviour in a range | Crosses price constantly | Crosses less often |

The "half the gap" row is a useful intuition. After a sudden move, the 9 EMA covers half the distance in about three bars. The 20 takes about seven. On a fast-moving chart, that is the difference between a line that keeps up and one that trails behind.

## What each one tends to suit

**9 EMA.** Short holds, fast trends, and timing entries inside a trend. On intraday charts it is a common line for scalpers and day traders. In a strong trend, price often runs along it. Its weakness is that ordinary noise moves it, so it crosses price frequently in quiet spells.

**20 EMA.** Swing trends and pullbacks. On daily charts it is roughly a month of data, which matches a typical swing. In steady trends, pullbacks often stall near it. It is also close to the 20-period line used in the middle of [Bollinger Bands](/bollinger-bands/) (which uses an SMA, not an EMA).

## Using both together

A common pair is the 9 and 20 (or the very similar 9 and 21). It can be read in two ways.

1. **As a [crossover](/moving-average-crossover/).** The 9 crossing above the 20 is a bullish signal, below is bearish. Fast, and prone to whipsaw in ranges.
2. **As a zone.** In an uptrend, the space between the 9 and the 20 is a pullback zone. Shallow pullbacks reach the 9; deeper ones reach the 20. If price closes below the 20 and the 9 turns down, the pullback has gone further than a normal one.

The second reading is often more useful, because it gives a place to watch rather than a signal to act on.

## A worked pullback

A daily chart in an uptrend. The 9 EMA is at 54.80, the 20 EMA at 53.60, both rising. ATR is 1.00.

- Price pulls back from 57 and closes at 54.60, just under the 9.
- Next day: low of 53.90 (between the lines), close at 55.20.
- A trader who uses the 9/20 zone enters at 55.20.
- Stop: below the 20 EMA plus half an ATR, at 53.10. Risk = 2.10 = 1R.
- Target: the prior high at 57.00, a reward of 1.80, about 0.86R. Too small for some traders' rules; a trader who needs 2R would skip this or aim for a measured target above the high.

The example shows something easy to miss. A pullback that only reaches the 9 EMA often leaves little room to the prior high. Waiting for the 20 gives a better ratio but fewer trades, and some trends never pull back that far. Neither choice is right; they suit different plans. See [pullback trading](/pullback-trading/).

## Which one, by holding time

| If you hold trades for... | ...a common choice is |
|---|---|
| Minutes (intraday) | 9 EMA on 1 to 5-minute bars |
| Hours (intraday) | 20 EMA on 5 to 15-minute bars |
| Days | 9 or 20 EMA on hourly bars, or 9 on daily |
| Weeks | 20 EMA on daily bars |

These are common practice, not tested settings. The rule of thumb behind them: pick the line that changes direction about as often as you want to change your mind.

## Common mistakes

- Switching between the 9 and 20 depending on which "worked" last time.
- Using the 9 as a trailing stop in a swing trade. It will exit on ordinary pullbacks.
- Reading every 9/20 cross in a range as a signal.
- Comparing a 9 EMA on one chart with a 9 SMA on another.

## Verdict

The 9 EMA is the faster, noisier line; the 20 EMA is the slower, steadier one. Use the 9 for short holds or timing inside fast trends, the 20 for swing trends and pullback zones, or both as a pair. The difference matters less than fixing a choice and sticking with it. More on periods in [the moving averages guide](/guide/moving-averages/).
