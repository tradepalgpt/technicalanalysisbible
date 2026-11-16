---
slug: where-to-put-a-stop-loss-near-support
title: Where should you put a stop loss near support?
description: Put the stop beyond the whole support zone plus a volatility buffer, then size the position to fit. Worked example with ATR and why one tick below fails.
query: stop loss below support
pillar: support-and-resistance-guide
publish: 2027-07-09
reviewed: 16 November 2026
guides: [support-and-resistance, atr, liquidity-sweep]
siblings: [is-support-and-resistance-a-line-or-a-zone, round-numbers-in-forex]
value: [table, example, verdict]
---

Below the whole support zone, not one tick under the line, plus a buffer based on volatility, often a quarter to half of ATR. Then size the position so the money at risk stays the same. Stops right under obvious support are where everyone's sit, and they get swept often.

## Why "one tick below" fails

If support is at 50, the obvious stop is 49.99. Thousands of traders think the same. The result is a cluster of sell-stops just below 50. When price dips to 49.95, those stops become market sell orders and push price lower for a moment. Once they are filled, the selling stops, and price often goes back up. That is a stop run, or in newer language a [liquidity sweep](/liquidity-sweep/).

The trader who put the stop at 49.99 was right about the level and still lost.

## The three-part stop

1. **Find the far edge of the zone.** Not the line in the middle. If support is 49.70 to 50.10, the far edge is 49.70.
2. **Add a buffer.** A fraction of [ATR](/atr/) on your timeframe. A quarter to half is common.
3. **Avoid obvious numbers.** If the stop lands on a round number, move it a little further.

## Worked example

A share has support from 49.70 to 50.10. Daily ATR(14) is 1.20. A trader buys at 50.60 after a bounce.

| Stop choice | Stop price | Risk per share | Notes |
|---|---|---|---|
| One tick under the line | 49.99 | 0.61 | Inside the zone; very likely hit |
| Under the zone | 49.69 | 0.91 | Better, but near everyone's "under the low" stops |
| Under the zone + quarter ATR | 49.40 | 1.20 | Room for a sweep |
| Under the zone + half ATR | 49.10 | 1.50 | More room; smaller position |

The trader risks £300 per trade.

- With a 0.61 stop: 491 shares.
- With a 1.20 stop: 250 shares.
- With a 1.50 stop: 200 shares.

Same money at risk. The wider stops mean fewer shares, not more risk. That is the key point traders miss: a wider stop does not mean risking more, if you size the position to the stop.

The cost of the wider stop is reward in R. If the next resistance is at 53.00, the reward is 2.40 per share. That is about 3.9R with the 0.61 stop, 2.0R with the 1.20 stop and 1.6R with the 1.50 stop. The tight stop looks better on paper; it is just hit more often. Without a test, nobody can say which balance is better for a given level and market. The trade-off is the honest description.

## The same for short trades

Put the stop above the whole resistance zone plus a buffer. Avoid round numbers just above, where stops cluster.

## When the stop is too far

Sometimes the stop beyond the zone and buffer is so far away that the next level offers less than about 1.5R. Choices:

- Skip the trade.
- Wait for a lower-timeframe pattern inside the zone that allows a tighter stop with a clear reason.
- Take it with the smaller reward, knowing it needs a higher share of winners to pay.

Moving the stop inside the zone to "make the numbers work" is the one choice that does not help. It puts the stop back where the sweeps happen.

## Stops by method

| Entry type | Stop usually goes |
|---|---|
| Bounce at support | Below the zone plus a buffer |
| Breakout above resistance | Back inside the old zone, or below the breakout bar |
| Retest after a break | Back through the old level plus a buffer |
| False-break fade | Beyond the extreme of the poke |

The [support and resistance](/support-and-resistance/) guide covers each play in more detail.

## Verdict

Put the stop beyond the whole zone, add a volatility buffer, avoid round numbers, and size the position to the stop. A wider stop with a smaller position risks the same money and is hit less by ordinary noise and stop runs. If that makes the trade's reward too small, the honest answer is to skip it.
