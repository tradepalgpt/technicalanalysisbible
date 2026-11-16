---
slug: what-is-a-trailing-stop
title: "What is a trailing stop and how does it work?"
description: A trailing stop follows price in your favour and never moves back. How the main types work, with a worked example measured in R.
query: what is a trailing stop
pillar: stop-losses-and-risk-guide
publish: 2027-08-16
reviewed: 16 November 2026
guides: [trailing-stop, chandelier-exit, atr-stop, stop-loss]
siblings: [chandelier-exit-vs-atr-trailing-stop, when-to-move-stop-to-break-even]
value: [table, example, verdict]
---

A trailing stop is a stop loss that moves in your favour as price moves in your favour, and never moves back. It locks in part of an open gain while leaving the trade free to run, so there is no fixed target.

## How it works

A [trailing stop](/trailing-stop/) starts as an ordinary [stop loss](/stop-loss/) at entry, which sets 1R and the position size. After that, a rule moves the stop:

- In a long trade, the stop rises when price makes new highs. It never falls.
- In a short trade, the stop falls when price makes new lows. It never rises.

The "never moves back" part is what makes it a trailing stop. It is a tightening-only rule, which is the only way a stop should move after entry.

## The main types

| Type | Distance from price | Adapts to volatility? | Main weakness |
|---|---|---|---|
| Fixed points or pips | A set number, e.g. 3 points | No | Too tight in wild markets, too loose in calm ones |
| Percent | A set percent, e.g. 5% below the high | Partly (scales with price) | Ignores how much the market really swings |
| ATR trailing stop | A multiple of ATR below the close or high | Yes | Can loosen if recalculated wrongly; must only tighten |
| [Chandelier exit](/chandelier-exit/) | A multiple of ATR below the highest high | Yes | Gives back a lot in a sharp reversal |
| Structure trail | Just beyond the latest swing low (long) | Indirectly | Swings can be far apart, so the stop moves in jumps |
| Moving average | Exit on a close beyond an average | Partly | Exits after the close, so slippage can be larger |

An [ATR stop](/atr-stop/) used as a trail is the most common volatility-based version.

## Worked example: a fixed-distance trail

A trader is filled at 100.00 with an initial stop at 97.00, so 1R = 3.00 per share, fixed at the fill. It does not change as the stop trails up. Commission is 0.06 per share round trip, shown on top of the result, never added to 1R. The stop trails 3.00 below the highest high since entry.

| Bar | High | Highest high so far | Trailing stop | Change |
|---|---|---|---|---|
| Entry | | | 97.00 | Initial stop |
| 1 | 102.00 | 102.00 | 99.00 | Raised |
| 2 | 105.00 | 105.00 | 102.00 | Raised |
| 3 | 104.00 | 105.00 | 102.00 | Unchanged (no new high) |
| 4 | 108.00 | 108.00 | 105.00 | Raised |
| 5 | 106.50, low 104.70 | 108.00 | 105.00 | Hit |

On bar 5 price falls through 105.00. The stop order fills at 104.90, 0.10 worse than the stop price because of slippage.

On price: 104.90 - 100.00 = 4.90 per share, or +1.63R.

Less 0.06 commission: 4.84, or 4.84 / 3.00 = +1.61R.

The trade peaked at 8.00 above entry (about +2.7R on paper) and gave back about a third of that. Giving back part of the move is the price of letting winners run without a fixed target.

## Choosing the distance

- **Too tight** and normal pullbacks stop you out early. Many trades close at small gains.
- **Too loose** and you give back much of each move before exiting.

Volatility-based trails (ATR multiples, chandelier exits) try to set the distance from how far the market usually moves, which is why they are popular for trend-following. Common published settings use 2 to 3 times ATR, but the right setting depends on the market and timeframe and should be tested in R with costs.

## When the trail starts

Some traders trail from the first bar. Others keep the initial stop until the trade reaches +1R, then start trailing, or move first to break-even and trail after that. Starting late keeps early noise from stopping you out; starting early protects more of small gains. Decide the rule before entry.

## What a trailing stop cannot do

- **Gaps.** If price opens below the trailing stop, the fill is at the open, which can be far worse than the stop.
- **Fast markets.** Stop orders become market orders when triggered, so slippage can be large in a sharp drop.
- **Ranges.** In a sideways market, a trailing stop tends to be hit for small gains or small losses again and again.

## Common mistakes

- Letting the stop fall back when price pulls back. That is widening.
- Recalculating an ATR trail with a bigger ATR and moving the stop down.
- Trailing so tightly that the stop sits inside one normal bar's range.
- Judging a trail on one great trade. Measure many trades in R.

## Verdict

A trailing stop raises the stop as price moves your way and never lowers it. It lets winners run while capping how much of the gain you give back. Volatility-based versions usually suit trending markets best; in ranges, trails tend to exit for small results. Set the method before entry and record every exit in R with costs.
