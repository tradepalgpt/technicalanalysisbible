---
slug: chandelier-exit-vs-atr-trailing-stop
title: "Chandelier exit vs ATR trailing stop: which is better?"
description: Both trail by a multiple of ATR. The chandelier hangs from the highest high; the ATR trail from the close. How they differ, worked in R.
query: chandelier exit vs atr trailing stop
pillar: stop-losses-and-risk-guide
publish: 2027-08-18
reviewed: 16 November 2026
guides: [chandelier-exit, atr-stop, trailing-stop, atr]
siblings: [what-is-a-trailing-stop, how-to-set-an-atr-stop-loss]
value: [chart, table, example, verdict]
chart: atr
---

Neither is better in every market. The chandelier exit hangs a fixed number of ATRs from the highest high, so it stays closer to the peak and exits sooner in a reversal. An ATR trailing stop measured from the close sits further back, so it holds through more pullbacks but gives back more.

## What each one is

Both use the [Average True Range](/atr/) to set the distance, so both widen in volatile markets and narrow in calm ones.

The [chandelier exit](/chandelier-exit/), described by Chuck LeBeau, for a long trade is:

Stop = highest high of the last n bars - multiple x ATR

A common default is 22 bars and 3 x ATR.

An ATR [trailing stop](/trailing-stop/) measured from the close is:

Stop = close - multiple x ATR

Both must only move up for a long. If the formula gives a lower number than yesterday's stop, the stop stays where it was. Many platforms build that in; check yours does. An [ATR stop](/atr-stop/) that is allowed to fall is widening, which is a mistake.

## Side by side

| | Chandelier exit | ATR trail from close |
|---|---|---|
| Anchor | Highest high of last n bars | Latest close |
| Typical setting | 22 bars, 3 x ATR | 3 x ATR (varies widely) |
| Distance from current price | Smaller after a pullback starts | Similar each bar |
| Reacts to a reversal | Sooner | Later |
| Gives back on exit | Less | More |
| Holds through pullbacks | Fewer | More |
| Best market state | Steady trends with shallow pullbacks | Trends with deeper pullbacks |

## Worked example

A trader is filled at 110.00 with an initial stop at 104.00, so 1R = 110.00 - 104.00 = 6.00 per share, fixed at the fill. Commission is 0.10 per share round trip, shown on top of the result, never added to 1R. Both trails use 3 x ATR.

| Day | High | Close | ATR | Chandelier (highest high - 3 x ATR) | ATR trail (close - 3 x ATR) |
|---|---|---|---|---|---|
| A | 120.0 | 118.0 | 2.0 | 120.0 - 6.0 = 114.0 | 118.0 - 6.0 = 112.0 |
| B | 121.0 | 119.0 | 2.1 | 121.0 - 6.3 = 114.7 | 119.0 - 6.3 = 112.7 |
| C | 120.0 | 117.0 | 2.2 | 121.0 - 6.6 = 114.4, kept at 114.7 | 117.0 - 6.6 = 110.4, kept at 112.7 |

On day C both formulas give a lower number, so both stops stay put. That is the tighten-only rule at work.

**Day D:** price drops to a low of 113.5.

- The chandelier at 114.7 is hit. With 0.10 of slippage it fills at 114.6. On price: 114.6 - 110.0 = 4.60, or +0.77R. Less 0.10 commission: 4.50, or 4.50 / 6.00 = +0.75R.
- The ATR trail at 112.7 is not hit. The trade stays open.

What happens next decides which was better:

- If price keeps falling and hits 112.7, the ATR trail fills at 112.6. On price: 2.60, or +0.43R. Less 0.10 commission: 2.50, or +0.42R. The chandelier did better by about 0.33R.
- If price recovers and the trend resumes, the ATR trail is still in the trade and the chandelier is out. The ATR trail does better, possibly by several R.

That is the whole trade-off in one example. The chandelier protects more of the open gain; the close-based trail stays in more trends.

## How to choose

- Steady trends with shallow pullbacks tend to favour the chandelier's quicker exit.
- Choppy trends with deep pullbacks tend to favour a looser close-based trail, or a larger chandelier multiple.
- Raising the chandelier multiple (say from 3 to 4 x ATR) moves it closer to the behaviour of a close-based trail. The two methods overlap more than their names suggest.

We have not tested either method yet, so no performance claim is made here. Test both on your own market and timeframe, in R, with all costs counted.

## Common mistakes

- Letting either stop drop when ATR rises. Both must only tighten.
- Comparing the methods with different multiples, then crediting the method rather than the multiple.
- Ignoring slippage on the exit. Trailing stops are often hit in fast moves.
- Using a 22-bar lookback on a market that trends for only a few bars at a time.

## Verdict

The chandelier exit anchors to the highest high and exits sooner; the ATR trail from the close sits further back and holds longer. Choose the chandelier if you want to keep more of each move, the close-based trail if you want to stay in through deeper pullbacks. The multiple matters as much as the method. Either way, it only tightens.
