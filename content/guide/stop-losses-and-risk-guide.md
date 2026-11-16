---
slug: stop-losses-and-risk-guide
title: "Stop losses and risk: the complete guide to trading in R"
description: Where to put a stop loss, what 1R really costs, how to size a position from the stop, and the maths of win rates, losing streaks and drawdowns.
query: stop loss
publish: 2027-06-28
reviewed: 16 November 2026
cluster: [stop-loss, atr-stop, atr, normalized-atr, break-even-stop, chandelier-exit, kase-devstop, position-sizing, risk-reward-ratio, bar-stop, structure-stop, time-stop, trailing-stop, volatility-stop]
value: [table, example, verdict]
chart: atr
---

A stop loss is an order that closes a trade when price reaches a level you chose in advance. That sounds simple, and the order itself is simple. The hard part is everything around it: where the stop goes, how big the position is, what the loss really costs once spread and slippage are counted, what you do with the stop once the trade is open, and how many losses in a row you can survive.

This guide covers all of that, and it does it in one unit: R. One R is the amount you planned to lose on a trade if the stop is hit. Every result in this guide is measured in R, not in pips or in percent, because R lets you compare a forex trade, a share trade and an index trade on the same scale.

The short version, before the detail: the stop decides the size of the position, not the other way round. 1R is the distance from your real fill to your first stop, times your size, and nothing else. A clean stop-out is exactly −1R; slippage and gaps make it worse (or better), and commission is a separate extra cost on top. A stop can be tightened after entry but never widened. And no stop method, risk-reward ratio or win rate means anything on its own; they only mean something together, as expectancy.

We have not run a stop-loss backtest of our own, so this guide contains no test results of ours. What it does contain is the standard methods, the formulas, worked examples you can check with a calculator, and tables that are pure maths, with the formula shown. Where a number comes from a choice we made for an example, we say so. Nothing here is a recommendation to risk any particular amount.

## 1. What a stop loss is and what it is not

A [stop loss](/stop-loss/) is a standing order with your broker or exchange. You say: if price trades at this level, close my position. For a long trade the stop sits below the market. For a short trade it sits above.

When price touches the stop level, the stop becomes a market order. It is then filled at the next available price. That detail matters more than almost anything else in this guide, and we will come back to it many times. A stop is a trigger, not a promise of a price.

### A stop is an exit order, not a forecast

Many traders treat the stop as a prediction: "price will not go below 48." That is the wrong way to think about it. A stop is a statement about your plan, not about the market. It says: "if price goes below 48, the reason I took this trade is no longer true, so I want to be out."

That difference changes how you place stops. A forecast stop tends to be put where you hope price will not go. A plan stop is put where the trade idea is wrong. The first is wishful. The second is testable. If you bought a bounce from support, the idea is wrong when price closes clearly below support. That is where the stop belongs, plus a buffer, and nowhere else.

It also changes how you feel about being stopped out. A stop-out is not a failure of the stop. It is the stop doing its job. The trade idea was wrong this time, the loss was the size you planned, and you are still in the game for the next one.

### What a stop does not do

- **It does not make a trade safe.** It limits the planned loss. Gaps, fast markets and thin liquidity can push the actual loss well past the plan.
- **It does not improve your entries.** A bad trade idea with a stop is still a bad trade idea. It just loses a known-ish amount.
- **It does not choose your size.** You do that, from the stop distance, as section 7 shows.
- **It does not work while it is only in your head.** A "mental stop" is a plan to place an order later. Under pressure, many traders do not place it.

### Stop orders, stop-limit orders and broker-backed stops

There are three common types of stop order. They behave very differently when price moves fast.

| Order type | What happens at your level | Fill price | Main risk |
|---|---|---|---|
| Stop (stop-market) | Becomes a market order | Next available price, which may be worse | Slippage and gaps: the fill can be far past your level |
| Stop-limit | Becomes a limit order at your limit price | Your limit price or better, if anyone trades there | No fill at all if price jumps past your limit, so you stay in a losing trade |
| Broker-backed stop | The broker fills you at your exact level | Your level, whatever the market does | Costs a fee or a wider spread; not offered everywhere; often has a minimum distance |

The plain stop-market order is the default, and it is what most people mean by "stop loss". It gets you out. It does not promise where.

A stop-limit order adds a second price, the limit. Say you are long at 50 with a stop at 48 and a limit at 47.80. If price trades at 48, a sell limit at 47.80 is sent. If buyers are there, you are filled between 48 and 47.80. If price drops straight from 48.10 to 46, nobody buys at 47.80 or better, and you are still long at 46 with no exit order working. For a protective stop, that is usually the worse risk. Stop-limits suit entries, where missing a fill only means missing a trade. As exits, they can leave you exposed exactly when you most need to be out.

Some brokers, mostly spread-betting and CFD providers, offer a stop that they promise to fill at your exact level, even through a gap. You pay for this, usually as a premium charged only if the stop is triggered, or as a wider spread. The broker takes the gap risk instead of you. For traders who hold through weekends or company results, that can be worth the cost. It is still a cost, and in R terms it counts against the trade like any other.

### Hard stops and mental stops

A hard stop is a real order sitting at the broker. A mental stop is a level you intend to act on yourself.

Arguments for mental stops: other traders cannot see them, and you can avoid being shaken out by a brief spike. Arguments against: you have to be watching, you have to act, and you have to act when the trade is going against you, which is the moment people most often hesitate. A mental stop also does nothing if your internet drops, your platform freezes or you fall asleep.

There is a middle path that many traders use: a hard "disaster" stop further away, placed at once, and a closer mental exit that you act on if you are watching. If you do this, the hard stop is the one that sets your size. Your 1R is the distance to the stop that will actually fire.

## 2. R: measuring every trade in units of risk

R is short for risk. One R (1R) is the money you lose if the trade hits its stop as planned. It comes from two numbers: the distance from your actual fill to your first stop, and the size of the position. You plan it before the trade, then fix it at the real fill price. Once the trade is live, 1R never changes, even when you later move the stop.

> 1R = (fill price − first stop price) × position size, in money

For a short, swap entry and stop so the number is positive.

Three rules go with it:

1. **Nothing else is added.** 1R is fill-to-stop times size. Costs are never folded into it. The fill is side-correct: a long fills at the ask, so the spread is already inside 1R through the fill price.
2. **Costs show up in the result, never in 1R.** A clean stop-out is exactly −1R. Slippage and gaps push the result past −1R, or better than it when they go your way. Commission and financing are shown separately, as extra costs on top. None of these is ever discounted from a loss.
3. **A stop change before the fill means a new plan.** If you move the stop before you are filled, the plan is re-issued with a new 1R and a new size. After the fill, 1R is fixed, and the stop may only tighten.

Once you know 1R, every result can be written as a multiple of it. This is the R-multiple.

> R-multiple = profit or loss in money ÷ 1R

A trade that risked £200 and made £500 is a +2.5R trade. A trade that risked £200 and lost £200 is a −1R trade. A trade that risked £200 and lost £260 because of slippage is a −1.3R trade. Slippage and gaps count both ways: if a stop fills better than its level, or a gap jumps over your target in your favour, that counts too. You record what you actually got.

### Why R beats percent and pips

Traders often record results in pips, points or percent. Each of those hides something.

**Pips and points ignore size.** A 50-pip win on 0.1 lots and a 50-pip loss on 1 lot look like a wash in pips. In money, the loss is ten times the win.

**Pips also ignore the stop.** A 50-pip win on a trade with a 10-pip stop was a big win: 5R. A 50-pip win on a trade with a 100-pip stop was a small one: 0.5R. In pips they look the same.

**Percent of account changes as the account changes.** A 2% gain on a £10,000 account is not the same money as a 2% gain on a £12,000 account. It also mixes up two questions: how good was the trade, and how much did you choose to risk on it.

**Percent of price ignores volatility.** A 3% move in a sleepy utility share is huge. A 3% move in a small crypto coin is a quiet hour.

R answers one clean question: how did this trade do compared with what it put at risk? That makes trades comparable across markets, timeframes, account sizes and position sizes.

### Worked example: three trades on one scale

Here are three trades, each written up the usual way, then in R. The money figures are invented for the example.

| Trade | Market | Risk planned (1R) | Result in money | Result in pips or points | Result in R |
|---|---|---|---|---|---|
| A | EUR/USD | $250 | +$600 | +48 pips | +2.4R |
| B | A FTSE 100 share | £50 | +£150 | +30p | +3.0R |
| C | An index CFD | £100 | −£115 | −46 points | −1.15R |

In money, trade A looks best. In pips, A looks best again. In R, trade B was the better trade: it made three times what it risked, against 2.4 times for A. Trade C lost more than 1R, which tells you something went wrong between plan and fill. Section 3 explains what.

### R as a planning tool

R also works before the trade. If your stop is 40 points away and your target is 100 points away, the planned trade is 100 ÷ 40 = 2.5R to the target. That is the planned [risk-reward ratio](/risk-reward-ratio/), usually written 1:2.5.

The word "planned" matters. The planned distance is measured on the chart; 1R is measured from the real fill. The real result also carries slippage, gaps and commission. The next section shows how far apart they can be.

## 3. What 1R really costs

Here is the rule this guide follows everywhere: **costs always count against the trade.** Spread, commission, financing, slippage and gaps are all real. The spread is counted through the fill price, so it sits inside 1R. Slippage and gaps change the result. Commission and financing are added on top of the result. None of them is ever left out of a loss.

### The four costs

- **Spread.** The gap between the bid (the price you can sell at) and the ask (the price you can buy at). You pay it once per round trip. Most charts show bid prices. A long trade buys at the ask, which is above the chart. A short trade's stop is triggered on the ask, which is above the chart, so a short stop can fire when the chart candle never touched it.
- **Commission.** A fixed or per-unit fee, charged on entry, exit or both.
- **Slippage.** The difference between the price you asked for and the price you got. Stops are market orders, so they slip when price is moving fast or when there are few orders near your level.
- **Gaps.** When a market opens at a price far from the last close, a stop sitting in the gap is filled at the open, not at your level. Shares gap over company results. Most markets can gap over weekends.

Overnight financing (swap or funding charges) is a fifth cost for positions held overnight. It is small per day but counts the same way.

### Which side of the spread your stop sits on

This trips up many traders, so here it is in one table. Assume the chart shows bid prices, which is common.

| Trade | You enter at | Your stop is triggered by | What this means |
|---|---|---|---|
| Long | Ask (above the chart) | Bid falling to the stop | You start the trade already down by the spread |
| Short | Bid (on the chart) | Ask rising to the stop | The stop can fire when the chart high is still below it, by up to the spread |

The practical result is the same either way: one spread is added to every losing trade, compared with the clean chart picture. Measuring 1R from the real, side-correct fill puts that spread inside 1R where it belongs. When spreads widen, as they often do around news, at the daily rollover and in thin hours, the cost grows.

### Worked example: one trade, four outcomes

Account in US dollars. EUR/USD. One standard lot is worth $10 per pip. The trader wants to risk $300, which is their 1R.

**The plan.** The chart (bid) shows 1.1000 at entry. The stop goes at 1.0970, which is 30 pips below. A naive size would be $300 ÷ (30 pips × $10) = 1 lot.

**The real fill.** The spread is 1 pip, so the buy fills at the ask, 1.1001. That fill fixes 1R: 31 pips × $10 × 1 lot = **$310**. The spread is inside 1R through the fill price. Commission is $7 per lot round trip, shown separately. Now look at three ways the trade can lose.

| Outcome | Exit fill | Pips lost from the fill | Price loss | In R (price) | Plus $7 commission | In R (all in) |
|---|---|---|---|---|---|---|
| Stop hit cleanly | 1.0970 | 31 | $310 | −1.00R | $317 | −1.02R |
| Stop slips 2 pips | 1.0968 | 33 | $330 | −1.06R | $337 | −1.09R |
| Weekend gap, opens at 1.0940 | 1.0940 | 61 | $610 | −1.97R | $617 | −1.99R |

A clean stop-out is exactly −1R. Slippage and the gap make it worse. Commission is an extra cost on top: it never shrinks the loss, and it never changes what 1R is.

### Sizing a little smaller for expected costs (optional)

Some traders trim the size so that the whole expected loss, commission included, fits the money they set aside. Here the expected loss per lot at a clean stop is 31 pips × $10 + $7 = $317, so:

> Size = $300 ÷ $317 = 0.946 lots, rounded down to 0.94 lots

This is a choice that lowers the money at risk. It does not change what 1R is. At 0.94 lots, 1R is 31 pips × $10 × 0.94 = **$291.40**.

| Outcome | Price loss | In R (price) | Plus commission ($6.58) | In R (all in) |
|---|---|---|---|---|
| Stop hit cleanly | $291.40 | −1.00R | $297.98 | −1.02R |
| Stop slips 2 pips | $310.20 | −1.06R | $316.78 | −1.09R |
| Weekend gap to 1.0940 | $573.40 | −1.97R | $579.98 | −1.99R |

The R results do not move: a clean stop is still −1R and commission still sits on top. Only the money is smaller. Slippage and gaps can still push well past −1R, and no sizing can stop that. It is why gap risk needs its own decision (hold or not, and whether to pay for a broker-backed stop), and why section 12 insists that tests fill gapped stops at the open price.

### What this means for small stops

Costs are roughly fixed per trade, while 1R shrinks as the stop gets tighter. So the tighter the stop, the bigger the costs are as a fraction of R.

| Stop distance | Round-trip cost (spread + commission, in pips) | Cost as a fraction of 1R |
|---|---|---|
| 5 pips | 1.7 | 0.34R |
| 10 pips | 1.7 | 0.17R |
| 20 pips | 1.7 | 0.085R |
| 40 pips | 1.7 | 0.0425R |
| 80 pips | 1.7 | 0.02125R |

Here 1.7 pips is the 1-pip spread plus the $7 commission, which is 0.7 pips on a $10-per-pip lot. The formula is simply cost ÷ stop distance. A 5-pip stop pays a third of its risk in costs on every trade, win or lose. That is a large hurdle before the idea has any chance of working, and section 9 shows how it raises the win rate you need.

## 4. Where to put the stop: structure stops

A [structure stop](/structure-stop/) is placed beyond a point on the chart that, if broken, shows the trade idea is wrong. It is the most common kind of stop, and it follows directly from the "stop as plan" idea in section 1.

### The basic rule

- **Long trades:** stop below the most recent relevant [swing low](/swing-highs-lows/), or below the support zone you are buying from.
- **Short trades:** stop above the most recent relevant swing high, or above the resistance zone you are selling from.
- **Always add a buffer.** Never put the stop exactly on the swing point or the edge of the zone.

"Relevant" is the hard word. For a pullback buy in an uptrend, the relevant low is usually the low of the pullback itself. For a bounce from a range floor, it is the bottom of the support zone. For a breakout, it is usually the other side of the level that broke, or the low of the breakout bar. Our answers cover three common cases in detail: [where to put a stop loss near support](/answers/where-to-put-a-stop-loss-near-support/), [where to put a stop loss on a breakout](/answers/where-to-put-a-stop-loss-on-a-breakout/) and [where to put a stop loss on a hammer](/answers/where-to-put-a-stop-loss-on-a-hammer/).

### Why the buffer matters

Obvious swing points attract stops. Everybody long from the bounce at 50.00 can see the low at 49.80, and many of them put their stops at 49.79 or 49.75. That cluster of sell orders is itself a reason for price to dip there: a dip into it triggers the stops, the stops add to the dip, and once they are filled the selling dries up and price often comes back. The [support and resistance guide](/guide/support-and-resistance-guide/) covers these stop runs and false breaks in more detail.

A buffer moves your stop away from the crowd. There are two common ways to size it.

- **A fraction of ATR.** Many traders use somewhere between a quarter and a half of the [average true range](/atr/) of the timeframe they trade. It scales the buffer to how much the market normally moves.
- **A fixed amount above the spread.** For example, a few ticks or pips beyond the swing, but never less than the typical spread, since a short's stop is triggered on the ask and a long's on the bid.

The buffer is not free. It makes 1R bigger, which makes the position smaller, which makes every win smaller in money. It does not change the R-multiple of a good trade much, though, because a trade that reaches its target still makes the same distance. The question is whether the buffer saves more trades from noise than it costs in size. That is a question for testing, not for a rule of thumb.

### Worked example: a structure stop with a buffer

A share has been rising. It pulls back to 48.20, holds there for two days and prints a bullish bar that closes at 49.00. You plan to buy at 49.00. The pullback low is 48.20. Daily ATR is 0.80.

- Buffer: a third of ATR = 0.80 ÷ 3 = 0.267, rounded to 0.27.
- Stop: 48.20 − 0.27 = 47.93.
- Stop distance: 49.00 − 47.93 = 1.07.

Compare with a stop right on the low: 49.00 − 48.20 = 0.80. The buffer makes 1R about a third larger in price terms (1.07 ÷ 0.80 = 1.34). With the same money risk, the position is about a quarter smaller (0.80 ÷ 1.07 = 0.75 of the size).

### When structure stops are wide

Sometimes the relevant swing is far away. A pullback low might be three ATRs below entry. You have three honest choices.

1. Take the trade with the wide stop and a smaller position. The money risk is the same; only the size changes.
2. Wait for a better entry nearer the structure, such as a lower-timeframe setup close to the swing.
3. Skip the trade.

The dishonest choice, which many traders make, is to put the stop somewhere closer "because the real stop is too far". A stop at a point where the idea is not wrong is just a random exit. It will be hit by normal noise more often, and each hit is a full 1R loss on a trade that was never shown to be wrong.

### Zones, not lines

Support and resistance are zones, so stops should sit beyond the far edge of the zone, not beyond the middle. If the support zone runs from 48.00 to 48.40, a stop at 48.10 is inside the zone. Price can trade into it and bounce without the level failing, and you would be out. The stop belongs under 48.00, with a buffer.

## 5. Volatility stops

A [volatility stop](/volatility-stop/) sets its distance from how much the market has been moving, rather than from a chart point. The idea: a stop should be outside the range of normal noise. In a quiet market, normal noise is small, so the stop can be closer. In a wild one, the stop needs to be further away.

The most common measure of noise is the average true range.

### True range and ATR

The true range of a bar is the largest of three numbers:

1. High minus low.
2. The absolute value of the high minus the previous close.
3. The absolute value of the low minus the previous close.

The second and third numbers catch gaps. If a share closes at 100 and opens the next day at 103, the high-low range of the new bar may be small, but the true range includes the gap.

[ATR](/atr/), from J. Welles Wilder's *New Concepts in Technical Trading Systems* (1978), is a smoothed average of true range. Wilder used 14 periods and his own smoothing method, in which each new ATR is (previous ATR × 13 + today's true range) ÷ 14. Some platforms use a simple moving average of true range instead, which gives slightly different numbers. Check which yours uses.

### Worked example: ATR from five bars

To keep the arithmetic short, here is a 5-period ATR. The method is the same for 14.

The bar before the example closed at 100.00.

| Bar | High | Low | Close | High − low | High − prev close | Low − prev close | True range |
|---|---|---|---|---|---|---|---|
| 1 | 101.20 | 99.80 | 100.90 | 1.40 | 1.20 | 0.20 | 1.40 |
| 2 | 101.50 | 100.40 | 101.10 | 1.10 | 0.60 | 0.50 | 1.10 |
| 3 | 103.00 | 102.10 | 102.80 | 0.90 | 1.90 | 1.00 | 1.90 |
| 4 | 103.20 | 101.90 | 102.20 | 1.30 | 0.40 | 0.90 | 1.30 |
| 5 | 102.60 | 101.50 | 102.40 | 1.10 | 0.40 | 0.70 | 1.10 |

The two "prev close" columns are absolute values. Bar 3 gapped up from 101.10 to a low of 102.10, so its true range (1.90) is the high minus the previous close, not its own high-low range (0.90).

First ATR = (1.40 + 1.10 + 1.90 + 1.30 + 1.10) ÷ 5 = 6.80 ÷ 5 = **1.36**.

If bar 6 has a true range of 1.00, the Wilder update is (1.36 × 4 + 1.00) ÷ 5 = 6.44 ÷ 5 = **1.288**.

### The ATR stop

An [ATR stop](/atr-stop/) is placed a multiple of ATR away from entry, or from a recent price.

> Long stop = entry − (multiple × ATR)
>
> Short stop = entry + (multiple × ATR)

Using the bars above: buy at the close of bar 5, 102.40, with a 2 × ATR stop.

- 2 × 1.36 = 2.72
- Stop = 102.40 − 2.72 = **99.68**

Common multiples run from about 1.5 to 3 ATR. Smaller multiples get stopped by noise more often. Larger ones lose more per stop-out in price terms, which means a smaller position for the same money risk. Neither is "right" in general. The multiple has to fit the timeframe, the market and the trade idea, and it is one of the settings most easily over-fitted in testing.

### The chandelier exit

The [chandelier exit](/chandelier-exit/), described by Chuck LeBeau, hangs the stop from the highest high since entry (for longs) or the lowest low (for shorts), rather than from entry price. Common settings are 22 periods and 3 ATR.

> Long chandelier stop = highest high over N bars − (multiple × ATR)

Using the five bars above, with N = 5 and 3 × ATR:

- Highest high of bars 1 to 5: 103.20
- 3 × 1.36 = 4.08
- Stop = 103.20 − 4.08 = **99.12**

Because it hangs from the high, the chandelier stop rises as the trade makes new highs. Section 8 shows how to trail it without ever letting it loosen.

### Kase DevStop

The [Kase DevStop](/kase-devstop/), developed by Cynthia Kase, builds the stop from the average and standard deviation of a two-bar true range, and offers several stop lines at increasing numbers of standard deviations from a recent extreme. The aim is the same as the other volatility stops: keep the stop outside normal noise. The extra step is that it measures how variable the noise is, not just its average size. A market whose ranges swing between tiny and huge gets wider stops than one with steady ranges of the same average. Platforms differ in their exact implementation, so read the documentation of the version you use before relying on its numbers.

### Normalised ATR

ATR is in price units, so you cannot compare the ATR of a 100-pound share with that of a 5-pound share. [Normalised ATR](/normalized-atr/) divides ATR by price:

> NATR = ATR ÷ close × 100

From the example: 1.36 ÷ 102.40 × 100 = **1.33%** of price, to two decimal places.

Normalised ATR does not set a stop by itself. It helps you compare stop widths across markets and across time. A 2 ATR stop on a share with 1.33% NATR is about 2.66% of price away. The same rule on a share with 4% NATR puts the stop about 8% away. Knowing that before you trade stops you being surprised by the size of the position the sizing formula gives you.

### Structure stops versus volatility stops

They are not rivals. Many traders use both: they find the structure point, then check that the stop beyond it is at least some fraction of ATR away. If the structure stop is inside normal noise, the trade is either skipped or the stop moves out to a volatility minimum. If the structure is very far away, the trade may be skipped as too expensive. Volatility tells you the minimum sensible distance; structure tells you where the idea is wrong.

## 6. Time stops and bar stops

Price is not the only thing that can prove a trade wrong. Time can too.

### Time stops

A [time stop](/time-stop/) closes a trade that has not done what it was meant to do within a set time. A breakout trade is meant to move quickly. If price is still sitting at the breakout level ten bars later, the breakout has not worked, even though the price stop has not been hit.

Time stops have three uses.

1. **They free up capital and attention.** A trade going nowhere ties up margin and risk that could be in a better trade.
2. **They cut slow losers early.** Trades that drift often end at the stop eventually. Cutting them at a small loss or near break-even can be cheaper than waiting for −1R.
3. **They reduce overnight and event risk.** A day trader's end-of-day exit is a time stop. So is closing before company results.

Time stops also have a cost: some trades that were slow to start would have worked. Whether the saving on drifters beats the cost on slow starters depends on the method, and only testing can say.

A common form is the N-bar rule: if the trade is not at least some distance in profit after N bars, close it. For example: "if the trade is not 0.5R in profit by the close of the tenth bar, exit at market." Both numbers, 0.5R and 10 bars, are example choices, not recommendations. As with every exit, a time-stop exit pays costs: closing a trade at entry price still loses the spread and commission, so a "flat" time-stop exit is a small negative R.

### Bar stops

A [bar stop](/bar-stop/) uses the high or low of a specific bar as the stop. The most common is the signal bar: for a long entry on a hammer, the stop goes below the hammer's low. For a long entry on an inside-bar break, it goes below the inside bar or the bar before it.

A trailing bar stop moves the stop to below the low of each new completed bar (for longs). It trails very tightly, which suits strong, fast moves and gives back little profit, but it will be hit by the first normal pullback in most trends.

A useful variant is the two-bar or three-bar low: the stop trails under the lowest low of the last two or three completed bars. It is wider than a one-bar trail, so it rides through small pullbacks, but it still keeps up with fast moves.

### Close-only stops

Some traders only act on a close beyond the stop level, not on a touch. A long trade with a close-only stop at 48 stays open through a wick to 47.60 if the bar closes back above 48. The benefit: fewer stop-outs from intrabar spikes. The cost: you only exit at the close, which can be well past the level. In R terms a close-only stop has no fixed 1R. If you use one, you need a hard disaster stop as well, placed far enough away to survive normal wicks, and that disaster stop sets your size.

## 7. Position sizing from the stop

[Position sizing](/position-sizing/) is where the stop becomes money. It is the most important calculation in this guide, and it is simple.

### Why the stop sets the size

Many traders do this backwards. They decide to trade "one lot" or "100 shares", then put the stop wherever keeps the loss small enough. That gives you a stop chosen by your account size, not by the chart. The market does not care how much you can afford to lose.

The right order is:

1. Find the stop from the chart: structure, volatility, or both.
2. Decide how much money is 1R for this trade.
3. Work out the size so that the distance from your expected fill to the stop, times the size, equals that money. That product is 1R.
4. If that size is too small to trade, or too large for your margin, skip the trade. Do not move the stop.

### Fixed-fractional sizing

The most widely used method is fixed-fractional sizing: risk the same fraction of your account on every trade. The formula:

> Size = (account × risk fraction) ÷ (stop distance × value per point per unit)

Measure the stop distance from the side-correct fill (the ask for a long, the bid for a short), so the spread is already inside it. Once you are filled, 1R is fixed at fill-to-stop × size.

Some traders choose to size a little smaller to leave room for commission and other expected costs:

> Smaller size = (account × risk fraction) ÷ (stop distance × value per point per unit + expected commission per unit)

That lowers the money at risk. It does not change what 1R is: 1R is still fill-to-stop × the size you actually trade, and commission is still shown on top of the result.

How large a fraction is a personal decision. Figures commonly quoted in trading books and courses run from a fraction of a percent up to about 2% of the account per trade, with some quoting lower for beginners and some much higher for aggressive styles. This guide does not tell you what to pick. The tables in section 10 show what different fractions do to an account over a losing streak, which is the honest way to think about the choice.

The examples below use 0.5% and 1% only because the arithmetic is easy.

### Worked example 1: forex lots

Account: $10,000. Risk fraction: 1%. So 1R = $100.

GBP/USD, with the account in US dollars. A standard lot (100,000 units) is worth $10 per pip on a pair quoted in US dollars, such as GBP/USD. The structure stop is 40 pips from the chart entry.

The spread is 1.2 pips, so the buy fills at the ask and the fill is 41.2 pips from the stop. Commission is $7 per lot round trip.

**Size from the fill:** Size = $100 ÷ (41.2 × $10) = 0.2427 lots, rounded down to **0.24 lots**. 1R = 41.2 × $10 × 0.24 = **$98.88**. A clean stop-out loses $98.88, exactly −1R, plus $1.68 of commission on top ($100.56 in all, −1.02R).

**Optional smaller size for commission:** $100 ÷ ($412 + $7) = 0.2387 lots, rounded down to 0.23 lots. 1R is now 41.2 × $10 × 0.23 = **$94.76**. A clean stop-out is still exactly −1R ($94.76), plus $1.61 of commission ($96.37 in all, −1.02R). Less money is at risk; the R results are the same.

Rounding down always leaves 1R slightly under the money you set aside. That is the right side to round on.

### Worked example 2: shares

Account: £20,000. Risk fraction: 0.5%. So the risk budget is £100.

A share fills at 250p. The stop is at 238p. The distance from the fill is 12p, or £0.12 per share. (If you pay a dealing spread, measure from the price you actually paid.)

**Size from the fill:** Size = £100 ÷ £0.12 = 833.33 shares, rounded down to **833**. 1R = 833 × £0.12 = **£99.96**. A clean stop-out loses £99.96, exactly −1R. Commission of £5 to buy and £5 to sell (£10 a round trip) comes on top: £109.96 in all, −1.10R.

**Optional smaller size for commission:** take the fixed £10 off the budget first: £90 ÷ £0.12 = 750 shares. 1R is now 750 × £0.12 = **£90**. A clean stop-out is exactly −1R (£90), plus £10 of commission: £100 in all, −1.11R. The money matches the budget, but 1R is £90, not £100. (In the UK, stamp duty on share purchases is another cost shown on top in the same way.)

### Worked example 3: index CFDs or spread bets

Account: £10,000. Risk fraction: 1%. So the risk budget is £100.

A UK index shows 7,850 on the chart. The stop is at 7,810. The spread is 1 point, so the buy fills at 7,851, 41 points from the stop. Index CFDs and spread bets are sized in money per point.

**Size from the fill:** £100 ÷ 41 = £2.439 per point, rounded down to **£2.40 per point**. 1R = 41 × £2.40 = **£98.40**. A clean stop-out loses £98.40, exactly −1R. There is no commission here; overnight financing, if any, would be shown on top.

### The three examples side by side

| Market | Risk budget | Distance from fill | Size | 1R | Clean stop (price) | Commission on top | All in |
|---|---|---|---|---|---|---|---|
| GBP/USD | $100 | 41.2 pips | 0.24 lots | $98.88 | −1.00R | $1.68 | −1.02R |
| UK share | £100 | 12p | 833 shares | £99.96 | −1.00R | £10.00 | −1.10R |
| UK index CFD | £100 | 41 points | £2.40 per point | £98.40 | −1.00R | none | −1.00R |

"Clean stop" means no slippage and no gap. Slippage and gaps can push the result well past −1R, or better than it when they go your way, as section 3 showed.

### Margin is not risk

Leveraged products need margin: a deposit the broker holds against the position. Margin and risk are different things. A trade can use £500 of margin and risk £100, or use £500 of margin and risk £1,000. The stop and the size decide the risk. The margin only decides whether the broker lets you open the trade. Sizing from margin ("I have £2,000 free, so I'll use it") is sizing from the wrong number.

### Other sizing methods, briefly

- **Fixed size.** The same lots or shares every trade. Simple, but 1R changes with every stop distance, so results in R are uneven.
- **Fixed money.** The same money risk every trade, regardless of account size. Close to fixed-fractional in the short run.
- **Volatility sizing.** Size so that one ATR of movement equals the same money in every position. Common in trend-following. It is fixed-fractional with an ATR-based stop.
- **Kelly-type sizing.** Sizes from the estimated edge and payoff. It needs a reliable estimate of win rate and payoff, which most traders do not have, and full Kelly sizing produces very deep drawdowns. Many who use it use a fraction of the Kelly figure. We describe it here only so you recognise the name.

## 8. Managing the stop after entry

The rule in this section is short. **After entry, a stop may only move in your favour.** For a long, it may go up or stay put. For a short, it may go down or stay put. It never moves the other way.

### Why you never widen a stop

Widening a stop after entry does three things, all bad.

1. **It changes 1R mid-trade.** You sized the position for the original stop. A wider stop on the same size means the loss, if it comes, is bigger than the 1R you planned. Move a 40-point stop to 60 points and a stop-out now costs 1.5R plus costs.
2. **It throws away the plan.** The stop was where the idea was wrong. Moving it says the idea being wrong does not matter.
3. **It tends to be done at the worst moment.** People widen stops when price is near them and moving against them, which is exactly when the original plan says to be out.

If you think the stop was in the wrong place, the honest options are to accept the stop-out and re-enter later with a new plan, a new stop and a new size, or to close the trade now. A re-entry is a new trade with a new 1R. It is recorded as two trades, not one.

The same rule applies before entry, with one wrinkle. If you change the stop of a pending order, in either direction, treat it as a new trade plan: cancel and re-issue it, with a new 1R and a new position size. Never keep the old size with the new, wider stop.

### Tightening the stop

Tightening is allowed, but it is not free. A tighter stop gets hit more often. Every time you tighten, you swap some open profit potential for a smaller worst case. Whether that swap pays depends on the market and the method.

There are three common reasons to tighten:

- **Locking in part of a gain** as the trade moves in your favour.
- **New structure.** The trade has made a new higher low (for a long), and the idea is now wrong below that new low.
- **The reason for the trade has changed.** For example, a scheduled event is coming and you want less at risk through it.

### Break-even stops

A [break-even stop](/break-even-stop/) moves the stop to the entry price once the trade is some distance in profit, often 1R. The appeal is obvious: the trade can no longer lose. Except it can, a little, because of costs.

A stop at entry price still pays the spread and commission when it fills, and it can slip. So a "break-even" stop-out is a small loss in R, not zero. If costs are 0.05R, a break-even exit is −0.05R. Some traders put the stop a few pips past entry to cover costs. That is still tightening, and still allowed.

The bigger cost is hidden. Price often comes back to test the entry area before moving on. A break-even stop placed too early turns some of those trades, which would have been winners, into small losses. The stop protects you from trades that go from +1R back to −1R, and costs you trades that go from +1R back to entry and then on to the target. Which effect is bigger depends on the market and the setup. It is a question for testing on your own trades, and there is no general answer.

### Trailing stops

A [trailing stop](/trailing-stop/) follows price in your favour by some rule and never moves back. Common rules:

| Trailing method | How it moves | Strength | Weakness |
|---|---|---|---|
| Fixed distance | A set number of points or pips behind the best price | Simple; easy to test | Ignores volatility and structure |
| ATR trail | A multiple of ATR behind the close or the best price | Adapts to volatility | Can loosen when ATR rises, so needs the "tighten only" rule |
| Chandelier exit | Multiple of ATR below the highest high (longs) | Rides trends; well known | Gives back a lot at the end of a trend |
| Swing-point trail | Under each new higher low (longs) | Follows the market's own structure | Lags in fast moves; needs a clear swing rule |
| Bar trail | Under the low of the last one to three bars | Keeps most of a fast move | Hit by ordinary pullbacks |
| Moving-average trail | Exit on a close beyond a moving average | Smooth; easy to see | Exits after the turn, not at it; close-only |
| Percentage trail | A set percentage behind the best price | Simple on shares | Ignores volatility, so too tight in some names, too loose in others |

### Worked example: trailing a chandelier stop without ever loosening it

The chandelier formula can produce a lower stop than the day before. That happens when ATR rises and the highest high does not. If you follow the formula blindly, your stop moves down: you are widening it. The fix is a one-line rule:

> New stop = the higher of (yesterday's stop) and (today's chandelier value)

Here it is over three days for a long trade, with 3 × ATR.

| Day | Highest high since entry | ATR | Chandelier value (high − 3 × ATR) | Stop used |
|---|---|---|---|---|
| 1 | 104.00 | 1.30 | 104.00 − 3.90 = 100.10 | 100.10 |
| 2 | 104.00 | 1.50 | 104.00 − 4.50 = 99.50 | 100.10 (kept: 99.50 would widen it) |
| 3 | 105.50 | 1.40 | 105.50 − 4.20 = 101.30 | 101.30 |

On day 2 the formula wanted to lower the stop by 0.60. The rule kept it at 100.10. The same "max" rule (or "min" for shorts) works for any trailing method.

### Scaling out

Some traders close part of a position at a first target and trail the rest. In R terms that is two trades with one entry. If you scale out, record the R of each part against the 1R of the whole position at entry, so the totals add up. Example: a trade risks 1R, closes half at a target worth +1R after costs, and stops the other half at entry for a cost of 0.05R. The result is 0.5 × 1R + 0.5 × (−0.05R) = 0.5R − 0.025R = **+0.475R**. Count costs once, and always against the trade.

## 9. Risk-reward and win rate

This is the section where most trading arguments go wrong, so we will go slowly.

### Risk-reward on its own says nothing

A [risk-reward ratio](/risk-reward-ratio/) compares the planned loss with the planned gain. A 1:3 trade risks 1R to make 3R. That sounds better than a 1:1 trade. It is not, by itself, because the target is further away and is reached less often. A 1:3 trade that reaches its target 20% of the time is worse than a 1:1 trade that reaches its target 60% of the time.

You need both numbers together: how much you make when you win, how much you lose when you lose, and how often each happens.

### The break-even win rate

The break-even win rate is the win rate at which a method makes nothing in the long run. For a planned risk-reward of 1:B (risk 1R to make B R), and ignoring costs for the moment:

> Break-even win rate = 1 ÷ (1 + B)

For 1:2: 1 ÷ 3 = 33.3%. Win a third of the time at 2R and lose two-thirds at 1R, and you finish flat.

Now add costs. If each trade costs c R in spread, commission and slippage, a win nets B − c and a loss costs 1 + c. Setting expectancy to zero:

> Break-even win rate with costs = (1 + c) ÷ (1 + B)

Here is the table for common ratios and two cost levels. These are pure maths from the formulas above.

| Planned risk-reward | No costs | Costs 0.1R per trade | Costs 0.2R per trade |
|---|---|---|---|
| 1:1 | 50.0% | 55.0% | 60.0% |
| 1:1.5 | 40.0% | 44.0% | 48.0% |
| 1:2 | 33.3% | 36.7% | 40.0% |
| 1:2.5 | 28.6% | 31.4% | 34.3% |
| 1:3 | 25.0% | 27.5% | 30.0% |
| 1:4 | 20.0% | 22.0% | 24.0% |

Look at the 1:1 row. A method that wins 55% of the time sounds healthy. At 0.1R of costs per trade, it is a break-even method. At 0.2R, it loses money. Section 3 showed how a 10-pip stop can carry around 0.17R of costs; that is in this range.

### Expectancy in R

Expectancy is the average R per trade over many trades.

> Expectancy = (win rate × average win in R) − (loss rate × average loss in R)

All in R, all after costs.

**Worked example.** A method wins 40% of the time. Its average win, after costs, is +1.9R. Its average loss, after costs, is −1.1R (a full stop plus costs and some slippage).

Expectancy = (0.40 × 1.9) − (0.60 × 1.1) = 0.76 − 0.66 = **+0.10R per trade**.

The same method recorded without costs (wins of 2R, losses of 1R) shows (0.40 × 2) − (0.60 × 1) = 0.80 − 0.60 = +0.20R per trade. Ignoring costs doubles the apparent edge. This is one of the most common ways traders fool themselves.

### What expectancy tells you, and what it does not

Expectancy is the average. Over 100 trades at +0.10R, the expected total is +10R. The actual total over any 100 trades will be spread widely around that, because wins and losses arrive in random order and the sample is small. A positive expectancy measured on 30 trades tells you very little; our [methods page](/methods/) explains the sample-size rules we apply before publishing any figure.

Expectancy also says nothing about the path. Two methods with the same expectancy can have very different losing streaks and drawdowns. The next section is about the path.

## 10. Drawdowns and losing streaks

A drawdown is the fall from an account's highest point to its lowest point before a new high. Losing streaks cause most drawdowns. Both are certain to happen to anyone who trades for long enough. The maths below shows how long and how deep they can be with no change at all in the method's edge.

Every table in this section is pure probability or arithmetic. None of it is a measured result from any trader or method. It assumes each trade is independent of the last, which real trades may not be, and a fixed win rate, which real methods do not have. Real streaks are often worse than these tables, not better.

### The chance that the next N trades all lose

If the win rate is W, the chance a single trade loses is 1 − W. The chance that the next N trades all lose is:

> P(next N all lose) = (1 − W)^N

| Win rate | 3 losses in a row | 5 in a row | 8 in a row | 10 in a row |
|---|---|---|---|---|
| 30% | 34.30% | 16.81% | 5.76% | 2.82% |
| 40% | 21.60% | 7.78% | 1.68% | 0.60% |
| 50% | 12.50% | 3.13% | 0.39% | 0.10% |
| 60% | 6.40% | 1.02% | 0.07% | 0.01% |

At a 40% win rate, there is about a 1 in 13 chance (7.78%) that the very next five trades all lose. That is a starting point, not the whole story, because you do not trade five times. You trade hundreds of times, and a streak can start anywhere.

### The chance of at least one streak in 100 trades

The question traders really care about is: over my next 100 trades, how likely is it that I hit at least one streak of a given length? That is harder to work out, because streaks can start on any trade. It can be calculated exactly by tracking the length of the current losing run trade by trade, which is what the table below does. (The method is a standard Markov chain calculation; anyone with a spreadsheet can reproduce it.)

| Win rate | At least one streak of 5 | of 8 | of 10 | of 12 |
|---|---|---|---|---|
| 30% | 99.9% | 85.8% | 58.0% | 32.9% |
| 40% | 97.6% | 49.0% | 20.5% | 7.7% |
| 50% | 81.0% | 17.0% | 4.4% | 1.1% |
| 60% | 45.9% | 3.6% | 0.6% | 0.1% |

These numbers surprise most people. A method that wins 40% of the time, which is a normal figure for a trend-following method with 1:2 or larger targets, has roughly a coin-flip chance (49%) of eight straight losses somewhere in 100 trades. At 30%, five straight losses in 100 trades are close to certain.

The point is not to scare anyone off low win rates. A method winning 30% at 1:3 can have the same expectancy as one winning 60% at 1:1. The point is that low win-rate methods need the stomach, and the account, to sit through long streaks without changing anything.

### What a streak does to the account

With fixed-fractional sizing at fraction r, each loss takes r of what is left. After N straight losses, the account is (1 − r)^N of where it started. The drawdown is:

> Drawdown after N straight losses = 1 − (1 − r)^N

This ignores costs beyond 1R, which in reality make every loss slightly bigger.

| Risk per trade | 5 losses | 10 losses | 15 losses | 20 losses |
|---|---|---|---|---|
| 0.5% | 2.5% | 4.9% | 7.2% | 9.5% |
| 1% | 4.9% | 9.6% | 14.0% | 18.2% |
| 2% | 9.6% | 18.3% | 26.1% | 33.2% |
| 3% | 14.1% | 26.3% | 36.7% | 45.6% |

The drawdown is a bit less than r × N because each loss is a fraction of a slightly smaller account. That is one useful feature of fixed-fractional sizing: losses shrink in money as the account shrinks.

### Getting back is harder than falling

After a drawdown of d, the gain needed to get back to the old high is:

> Gain needed = 1 ÷ (1 − d) − 1

| Drawdown | Gain needed to recover |
|---|---|
| 10% | 11.1% |
| 20% | 25.0% |
| 30% | 42.9% |
| 50% | 100.0% |

Put the two tables together. At 2% per trade, a 15-trade losing streak, which the earlier table shows is far from impossible at low win rates over a long career, takes the account down about 26%, and it then needs a gain of about 35% to recover (1 ÷ 0.739 − 1 = 0.353, using the unrounded drawdown). This is the arithmetic case for keeping risk per trade modest. It is not a rule. It is just what the numbers do.

### Losing streaks in R

It helps to think of streaks in R rather than percent. "I can sit through 10R of losses without changing the method" is a plan you can test. Ten losses at about 1.05R each, including costs, is 10.5R. If 10R of losses at your chosen risk fraction is a drawdown you could not live with, the fraction is too high for you. Only you can say what you can live with.

## 11. Portfolio risk

Everything so far has been about one trade. Most traders have more than one trade open at a time. Then the questions change.

### Total open risk

Total open risk is the sum of what every open position would lose if every stop were hit at once. Five open trades at 1R each is 5R of open risk. Many traders cap this, for example at a set number of R or a set percentage of the account. The cap is a choice; the calculation is just addition.

Positions that have been trailed past entry carry less open risk. A long with its stop now above entry has "locked in" a small gain, ignoring gaps and slippage. Its open risk is the distance from the current price to the stop, but its risk to the account's starting equity for that trade is zero or less. Traders measure both ways; be clear which you use.

### Correlated positions

[Correlation](/correlation-coefficient/) is the tendency of two markets to move together. Correlated positions are, in effect, one bigger position.

**Worked example.** A trader is long EUR/USD, long GBP/USD and long AUD/USD, each with 1R risk. On paper that is three separate 1R trades. In practice, all three are short the US dollar. A sharp dollar rally can hit all three stops on the same day. The trader is closer to holding one 3R position than three 1R positions.

The same thing happens with shares in the same sector, indices from the same region, and crypto coins, which have often moved together. Common ways to handle it:

- Treat a group of highly correlated positions as one position and cap its total R.
- Take only the best setup in a correlated group.
- Halve the risk on each trade in a group, so the group as a whole risks about what one full trade would.

Correlations change. Markets that moved separately for months can move together in a sell-off. A cap based on past correlation is a rough guide, nothing more.

### Daily and weekly loss limits

A daily loss limit is a rule that stops you trading for the day once losses reach a set amount. A weekly limit does the same for the week. Prop trading firms and many professional desks use them. Retail traders often adopt them after a bad day turned into a disaster because they kept trading to "win it back".

Two practical points:

1. **Set it in R.** A limit of, say, 3R a day is easy to track and does not need recalculating when the account changes. The number is an example, not a recommendation.
2. **Count costs and open trades.** If the limit is 3R and you are down 2.2R on closed trades with 1R open, you are one stop-out from the limit. Some traders count the open risk towards the limit and do not open new trades if the total would pass it.

A loss limit does not make a method better. It caps the damage from bad days, including days where you are not trading well, and it removes the decision from the moment when you are least able to make it.

### Event risk

Scheduled events such as central bank decisions, economic data and company results can produce gaps and fast moves through stops. Options for open trades include closing before the event, reducing size, tightening the stop, or paying for a broker-backed stop. The one option not on the list is widening the stop "to give it room through the news". That is widening, and section 8 covers why it is ruled out.

## 12. Testing stops without fooling yourself

Stop rules are easy to test badly. Most of the ways a backtest flatters a stop come from treating bars as if you knew what happened inside them, and from leaving out costs. This section lists the common traps. Our [methods page](/methods/) explains the rules we use for our own tests and for publishing any figure.

### Which came first inside the bar?

A daily bar shows the open, high, low and close. It does not show the order. If your long trade's stop is at 98 and its target is at 104, and a bar has a low of 97.50 and a high of 104.50, the bar touched both. You cannot tell from the bar which came first.

A fair test assumes the worst: the stop was hit first. An unfair test assumes the target was hit first, or picks whichever helps. On daily data this one choice can swing results a great deal. If you have lower-timeframe data, use it to settle the order. If not, assume the stop.

### Entry-bar exits

A related trap: a trade enters at the open of a bar and the same bar trades through the stop. Did the stop fill? On a daily bar, often yes. Some tests quietly skip the stop check on the entry bar. That makes stops look better than they are. A fair test checks the stop from the moment of entry, and reports how many trades exited on their entry bar, since a high share is a sign the stop is too tight for the data.

### Spread on the right side

Most historical data is bid prices, or midpoints. A fair test:

- Buys at the ask (bid plus spread) for long entries.
- Triggers short stops on the ask, which means a short stop can fire when the bid-based chart high is below it.
- Uses a realistic spread, including wider spreads at the times the trades actually happened, not a single tidy average.

If the test uses midpoint data, half a spread is added on each side.

### Gaps over stops

If a share closes at 50 and opens the next day at 46, a stop at 48 cannot fill at 48. A fair test fills it at the open, 46, and records the larger loss in R. A test that fills it at 48 is pretending a gap did not happen. On shares that report earnings, this alone can change a method's results a great deal.

### Tiny stops

Very tight stops give very large R-multiples on winners, because 1R is tiny. A test with a few trades that had a 2-pip stop and ran 100 pips will show 50R winners that dominate the average. Those trades usually could not have been filled at those prices with real spreads. A fair test applies costs in R (which makes tiny-stop trades much worse) and reports how many trades had very small stops.

### Tuning the multiple

ATR multiples, trailing distances, time-stop lengths and break-even triggers are all settings. Try enough of them on the same data and one will look excellent by chance. A fair test:

- Says how many settings were tried.
- Holds back a stretch of data that is never used for tuning, and checks the chosen setting on it once.
- Prefers settings that work across a broad plateau of nearby values over a single sharp peak.

### Compare with a baseline

Finally, compare a stop method with a simple baseline on the same entries, such as a fixed ATR stop and a fixed time exit. If a clever trailing method does not beat a plain one after costs, the plain one wins on simplicity.

## 13. Common mistakes

- **Choosing the size first and the stop second.** The stop goes where the idea is wrong, then the size follows from the stop and the money risk. Not the other way round.
- **Recording R without costs.** A stop-out that cost 1.08R after spread and commission is a 1.08R loss. Writing it down as −1R flatters every method and hides the cost of tight stops.
- **Widening the stop after entry.** It turns a planned 1R loss into an unplanned bigger one, and it tends to happen at the worst moment. Stops only tighten.
- **Stops exactly on obvious levels.** The low everyone can see is where the stops cluster. Put the stop beyond the zone and add a buffer.
- **Stops inside normal noise.** A stop closer than the market's ordinary bar-to-bar movement will be hit by noise more often than by the idea failing. Check the stop against ATR.
- **Mental stops with no backup.** A plan to exit is not an exit. If you use a mental stop, have a hard disaster stop too, and size on it.
- **Stop-limit orders as protective stops.** In a fast drop, the limit may never fill, and you are left holding the full move.
- **Ignoring gap risk.** A stop is not a price promise. Holding shares through results or any market over a weekend means the loss can be several R.
- **Break-even too early.** Moving to entry the moment a trade is slightly in profit converts trades that would have worked into small losses. It is a trade-off to test, not a free win.
- **Judging a method by risk-reward or win rate alone.** Neither means anything without the other. Use expectancy, after costs.
- **Treating correlated trades as separate risks.** Three trades on the same idea are one bigger trade.
- **Changing the method after a normal losing streak.** The streak tables in section 10 show how often long streaks happen with no change in edge. Decide in advance what evidence would make you change the method, and stick to it.
- **Trusting a stop test that ignores what happened inside the bar.** If a bar touched both stop and target, assume the stop came first unless lower-timeframe data says otherwise.

## 14. Comparison table and verdict

Here is every stop method in this guide on one page.

| Stop method | Inputs | Adapts to volatility? | Best market state | Main weakness |
|---|---|---|---|---|
| [Structure stop](/structure-stop/) | Swing high or low, or zone edge, plus a buffer | Only through the buffer | Ranges and orderly trends with clear swings | Swings can be far away or unclear; obvious levels attract stop runs |
| [ATR stop](/atr-stop/) | ATR period and multiple | Yes | Trends and volatile markets | Ignores structure; multiple is easy to over-tune |
| [Chandelier exit](/chandelier-exit/) | Highest high or lowest low, ATR, multiple | Yes | Strong trends | Gives back a large part of the move at the end of a trend |
| [Kase DevStop](/kase-devstop/) | Two-bar true range, its average and standard deviation | Yes, including how variable the ranges are | Trends with uneven volatility | More complex; implementations vary between platforms |
| [Volatility stop](/volatility-stop/) (general) | Any volatility measure and a multiple | Yes | Markets where volatility changes over time | Lags sudden changes in volatility |
| [Bar stop](/bar-stop/) | High or low of a signal bar or recent bars | Indirectly, through bar size | Fast moves; candlestick and bar-pattern entries | Hit by ordinary pullbacks when trailed |
| [Time stop](/time-stop/) | A number of bars or a clock time | No | Breakouts and momentum trades that should move quickly | Cuts slow starters that would have worked |
| [Break-even stop](/break-even-stop/) | Entry price and a trigger distance | No | Choppy markets that often reverse after an initial move | Turns some winners into small losses; costs still apply |
| [Trailing stop](/trailing-stop/) (general) | A trailing rule, never loosened | Depends on the rule | Trends | Every rule trades open profit for protection |
| Percentage stop | A set percentage from entry | No | Long-term share positions, as a disaster stop | Ignores both structure and volatility |
| Close-only stop | A level, checked on bar closes only | No | Noisy markets with long wicks | No fixed 1R; needs a hard disaster stop for sizing |

### Verdict

There is no best stop. There is a best stop for a given trade idea, and it is the one placed where that idea is wrong, outside normal noise, and sized so that the distance from the real fill to the stop, times the size, is the 1R you chose. A clean stop-out is then exactly −1R; slippage, gaps and commission show up in the result, not in 1R. Structure tells you where the idea fails. Volatility tells you the minimum distance. The [position sizing](/position-sizing/) formula turns that distance into a size. After entry, the stop only tightens.

Most of what matters is not which method you pick but whether you are honest about it: costs counted against every trade, stops never widened, expectancy judged in R over enough trades, and losing streaks expected rather than feared. A method with a modest edge, followed consistently, does far better than a brilliant one that is abandoned after the first long streak.

## FAQ

**What is a stop loss in trading?**
A stop loss is an order that closes a trade when price reaches a level you chose in advance. It becomes a market order at that level, so the fill can be worse than the level in fast markets or gaps. It limits the planned loss; it does not promise the exit price.

**Where should I put my stop loss?**
Beyond the point where the trade idea is shown to be wrong, usually past a swing point or zone edge, plus a buffer, and at least outside normal noise as measured by ATR. Our answers on stops [near support](/answers/where-to-put-a-stop-loss-near-support/), [on a breakout](/answers/where-to-put-a-stop-loss-on-a-breakout/) and [on a hammer](/answers/where-to-put-a-stop-loss-on-a-hammer/) cover the common cases.

**What is 1R?**
1R is the distance from your actual fill to your first stop, multiplied by the position size, in money. Nothing else is added, and it is fixed at the fill even if the stop later moves. If the stop changes before the fill, the plan is re-issued with a new 1R and size. Results are then written as multiples of it. A trade that risked £100 and made £250 is +2.5R. Measuring in R makes trades comparable across markets and sizes.

**How do I calculate position size from my stop?**
Divide the money you are willing to lose on the trade by the distance from your expected fill to the stop, per unit. With a £100 budget and a stop 41 points from the fill (spread included through the ask), the size is £100 ÷ 41 = £2.44, rounded down to £2.40 per point. Round down, not up.

**Does the spread count towards my stop loss?**
Yes. A long buys at the ask, above a bid chart, and a short's stop is triggered on the ask. Either way one spread is added to every losing trade. Commission, slippage and gaps count too. Measure 1R from the real fill, so the spread sits inside it. A clean stop-out is then exactly −1R; slippage and gaps make it worse, and commission is shown on top. None of it is ever discounted from a loss.

**Should I ever move my stop loss further away?**
No. Widening a stop after entry raises the loss above the 1R you sized for and abandons the plan at the worst moment. If the stop was in the wrong place, close the trade or accept the stop-out, then re-enter with a new stop and a new size if the idea still holds.

**What is a good risk-reward ratio?**
None on its own. A 1:3 target reached rarely can be worse than a 1:1 target reached often. What matters is expectancy: win rate times average win minus loss rate times average loss, all in R after costs. The break-even win rate for 1:B is 1 ÷ (1 + B) before costs.

**How many losing trades in a row should I expect?**
It depends on the win rate and on how many trades you take. At a 40% win rate, the chance of at least one run of eight losses in 100 independent trades is about 49%, by straightforward probability. Plan for long streaks before they happen, and size so you can sit through them.
