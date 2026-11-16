---
slug: rsi-and-momentum-oscillators
title: "RSI and momentum oscillators: the complete guide"
description: How RSI, the stochastic and other momentum oscillators are calculated, why platforms disagree, how to read them in trends and ranges, and choosing settings.
query: momentum oscillators
publish: 2027-02-22
reviewed: 16 November 2026
cluster: [rsi, stochastic-oscillator, stochastic-rsi, williams-r, cci, ultimate-oscillator, money-flow-index, momentum-indicator, rate-of-change, ppo, apo, true-strength-index, coppock-curve, awesome-oscillator, accelerator-oscillator, connors-rsi, laguerre-rsi, fisher-transform, wavetrend-oscillator, cyber-cycle, stochastic-momentum-index, chande-momentum-oscillator, divergence, hidden-divergence, rsi-failure-swing, macd]
value: [table, example, verdict]
chart: rsi
---

Momentum oscillators measure how fast price is changing, not where it is going. This guide explains what momentum is, works through RSI by hand, shows why the same RSI can read differently on two platforms, and then covers the stochastic family, the other bounded oscillators, the unbounded ones and the newer cycle-based tools. It ends with settings, combinations, backtesting traps, common mistakes and a comparison table.

The short version, before the detail: almost every momentum oscillator is a rearrangement of the same few ingredients. A price change over some number of bars. A high-low range. A smoothing method. Once you can see those ingredients, the list of hundreds of oscillators shrinks to a handful of ideas, and choosing between them becomes a question of which ingredient you want, not which name sounds best. None of them predicts price. They describe the speed of the move that has already happened. Used that way, with price and levels doing the main work, they are useful. Used as buy and sell buttons, most of them are not.

We have not yet run an oscillator backtest of our own, so this guide contains no test results. What it does contain is the arithmetic, the platform differences our own indicator code had to choose between, and worked examples you can check with a calculator.

## What momentum is

Momentum is the speed of price change. If a stock closed at 100 ten days ago and closes at 110 today, it has moved 10 points in ten days. If it closed at 108 yesterday, it moved 2 points in the last day. Both are measures of momentum over different windows. A move that is still rising but rising more slowly each day has positive but falling momentum, in the same way a car still moving forward but braking has positive speed and negative acceleration.

That analogy is the core of every oscillator in this guide:

- **Price** is position.
- **Momentum** is speed: how far price moved over a window.
- **A change in momentum** is acceleration: whether that speed is rising or falling.

Most of the signals traders take from oscillators are about acceleration. Divergence, for example, is price still making new highs while the speed of the move is falling. Nothing about divergence says the car will reverse. It says the car is braking.

### Why momentum turns before price

Speed reaches zero at the top of a move, not after it. If you throw a ball in the air, its upward speed falls all the way up and is zero at the highest point. Price is not a ball, but the arithmetic is the same: when a rally slows, momentum falls while price is still rising. That is the only sense in which an oscillator "leads". It is not forecasting; it is measuring the slowdown that comes before any turn. The catch is that a slowdown does not have to end in a turn. A rally can slow, pause and speed up again. That is why the same reading that warns before a top also appears, many times, before tops that never happen.

### Bounded and unbounded oscillators

An oscillator is an indicator that swings around a centre line rather than following price. There are two kinds.

**Bounded oscillators** have a fixed scale, usually 0 to 100. RSI, the stochastic, Williams %R, the ultimate oscillator and the money flow index are bounded. The scale comes from dividing something by its own total: gains by gains plus losses, or the close's distance from the low by the whole high-low range. A ratio of a part to its whole cannot go below 0 or above 100 per cent.

Bounded oscillators have two big advantages. You can compare readings across markets: RSI at 75 means roughly the same thing on a currency pair and on a stock. And you can draw fixed "overbought" and "oversold" lines. They also have a cost. Near the edges they compress. Once RSI is at 85, a further rally can only push it a little higher, so the indicator flattens while price keeps going. That flattening looks like a slowdown even when it is partly a result of the scale.

**Unbounded oscillators** have no fixed limit. Momentum (close minus close n bars ago), rate of change, MACD, the percentage price oscillator and the true strength index are unbounded. They swing around zero and can go as high or low as price allows. You cannot draw a fixed overbought line on them, because a reading that is extreme on one market is ordinary on another. What you get in return is that they do not compress: a move twice as fast shows twice as large.

The [commodity channel index](/cci/) sits between the two. It is scaled so that most readings fall between -100 and +100, but nothing stops it going to 300.

| | Bounded | Unbounded |
|---|---|---|
| Examples | RSI, stochastic, Williams %R, MFI, ultimate oscillator | Momentum, rate of change, MACD, PPO, TSI |
| Scale | Fixed (0 to 100, or -100 to 0) | Open, around zero |
| Fixed overbought and oversold lines | Yes | No; extremes are relative to the market's own history |
| Compare across markets | Easy | Only for percentage-based ones (ROC, PPO) |
| Behaviour in strong moves | Flattens near the edges | Keeps growing with the move |
| Most common use | Timing in ranges, divergence | Zero-line crosses, trend strength, divergence |

### Oscillators all lag

Every oscillator is built from past prices, so every oscillator lags. Shorter settings lag less and are noisier. Longer settings are smoother and lag more. Smoothing a line to remove noise always adds delay. There is no setting that removes both noise and lag, and every "improved" oscillator in this guide is a different trade between the two. Keep that sentence in mind when someone shows you a new oscillator with "no lag".

## RSI in depth

The [Relative Strength Index (RSI)](/rsi/) is the most widely used oscillator. J. Welles Wilder Jr. published it in 1978 in *New Concepts in Technical Trading Systems*, the same book that introduced [ATR](/atr/) and [ADX](/adx/). Despite its name, it has nothing to do with comparing one market's performance with another's. It compares a market's recent gains with its own recent losses.

### The formula

1. For each bar, take the change from the previous close.
2. If the change is positive, it is a **gain** and the loss for that bar is 0. If it is negative, it is a **loss** (written as a positive number) and the gain for that bar is 0. An unchanged close is 0 for both.
3. Average the gains and the losses over the period, usually 14 bars.
4. **RS** (relative strength) = average gain / average loss.
5. **RSI** = 100 - 100 / (1 + RS).

The last step is just a way of turning RS, which runs from 0 to infinity, into a number between 0 and 100. You can write it more plainly:

RSI = 100 x average gain / (average gain + average loss)

Both versions give the same answer. The second one makes the meaning obvious: RSI is the share of recent movement that was upward. RSI at 70 means 70 per cent of the average movement over the window was gains. RSI at 50 means gains and losses were the same size.

If the average loss is zero, RSI is 100. If the average gain is zero, it is 0.

### Wilder's smoothing

Step 3 is where the detail lives. Wilder did not use a simple moving average for the gains and losses. He used a running average that each bar keeps most of the previous value and adds a small share of the new one:

- The first average gain is the simple average of the first 14 gains. Same for losses.
- After that: new average = (previous average x 13 + current value) / 14.

This is now called **Wilder's smoothing**, and also appears on some platforms as RMA or SMMA (smoothed moving average). It is a form of exponential average with a smoothing factor of 1/14. A normal 14-period exponential moving average uses a factor of 2/15, which is almost twice as large. Our indicator code documents the relationship like this: Wilder's smoothing over n bars is the same as an ordinary exponential average over 2n - 1 bars. So Wilder's 14-period average behaves like a 27-period EMA. That is why RSI(14) is smoother than people expect from "14 bars".

### A worked calculation

A full 14-bar example takes a page of numbers. The method is identical for any period, so here is a 5-period RSI on seven closes, where every step fits on screen.

| Bar | Close | Change | Gain | Loss |
|---|---|---|---|---|
| 1 | 100 | | | |
| 2 | 102 | +2 | 2 | 0 |
| 3 | 101 | -1 | 0 | 1 |
| 4 | 103 | +2 | 2 | 0 |
| 5 | 104 | +1 | 1 | 0 |
| 6 | 103 | -1 | 0 | 1 |
| 7 | 105 | +2 | 2 | 0 |

**First RSI value (bar 6).** The first five changes are bars 2 to 6.

- Average gain = (2 + 0 + 2 + 1 + 0) / 5 = 5 / 5 = 1.00
- Average loss = (0 + 1 + 0 + 0 + 1) / 5 = 2 / 5 = 0.40
- RS = 1.00 / 0.40 = 2.5
- RSI = 100 - 100 / 3.5 = 100 - 28.57 = **71.43**

**Next value (bar 7), Wilder's smoothing.** The new change is a gain of 2 and a loss of 0.

- Average gain = (1.00 x 4 + 2) / 5 = 6 / 5 = 1.20
- Average loss = (0.40 x 4 + 0) / 5 = 1.6 / 5 = 0.32
- RS = 1.20 / 0.32 = 3.75
- RSI = 100 - 100 / 4.75 = 100 - 21.05 = **78.95**

For a 14-period RSI, replace "x 4 / 5" with "x 13 / 14". Nothing else changes. [How do you calculate RSI by hand?](/answers/how-to-calculate-rsi/) sets the same steps out as spreadsheet formulas.

### Platform differences: Wilder, EMA and simple averages

RSI is one of the few indicators where "the standard formula" has more than one version in the wild. Some charting packages and code libraries average the gains and losses with an ordinary EMA, and some with a simple moving average (that version is often called Cutler's RSI). Here is bar 7 from the table above under all three:

| Averaging method | Average gain | Average loss | RSI at bar 7 |
|---|---|---|---|
| Wilder's smoothing (factor 1/5) | 1.200 | 0.320 | **78.95** |
| Exponential average (factor 2/6 = 1/3) | 1.333 | 0.267 | **83.33** |
| Simple average of the last 5 changes | 1.000 | 0.400 | **71.43** |

Same seven closes, same period, three answers twelve points apart. The EMA version reacts fastest, because its smoothing factor is largest. The simple average reacts in jumps, because each change drops out of the window all at once, five bars later. On a 14-period RSI the gaps are smaller, but they are real, and they are big enough to put one platform above 70 and another below it.

Three other things move RSI values between platforms even when they use the same formula:

- **The seed.** Wilder's smoothing has to start somewhere. The usual start is the simple average of the first n changes. Some code starts from the first change alone. The effect fades but never fully vanishes: on a 14-period RSI, the starting value's weight after k bars is (13/14) to the power k. That is about 2.5 per cent after 50 bars and under 0.1 per cent after 100.
- **History length.** Because of the seed, an RSI computed on 60 bars of history and one computed on 2,000 bars can differ noticeably on the latest bar. Platforms that load less history show more of the seed.
- **The data itself.** Different brokers and exchanges have different prices, different session times and different daily closes. This is usually the largest cause of difference, and it has nothing to do with the formula. [Why does RSI differ between TradingView and MT5?](/answers/why-rsi-differs-between-tradingview-and-mt5/) works through each cause.

Our own indicator code uses Wilder's smoothing, seeded with the simple average of the first n changes, as in Wilder's book. That is what every RSI figure on this site uses unless it says otherwise.

### Overbought, oversold and the 70/30 lines

Wilder suggested 70 and 30 as the levels where a move is stretched. Above 70, recent gains have dominated; below 30, recent losses have. "Overbought" and "oversold" are shorthand for that and nothing more. They do not mean price is too high or too low. They mean the last few weeks were very one-sided.

Common alternatives:

- **80/20.** Fewer readings, more stretched. Often used with short periods (which reach the extremes more often) or in fast markets.
- **90/10.** Used with very short periods such as RSI(2), which swings to the edges almost every week.
- **60/40 or 65/35.** Used with long periods such as RSI(21) to RSI(30), which rarely reach 70 or 30.

The levels and the period go together. Shortening the period without widening the levels gives you many more "signals" that mean less each. Lengthening the period without narrowing the levels gives you a line that almost never touches them. [Is RSI above 70 a sell signal?](/answers/is-rsi-above-70-a-sell-signal/) covers what a reading above 70 does and does not tell you.

### The 50 line

The 50 line is the point where average gains equal average losses. Above 50, the market has moved up more than down over the window; below 50, the opposite. Many traders use it as a simple direction filter: only look for longs while RSI is above 50, only shorts below. It is a slow, rough filter, and it flips back and forth in a sideways market, but it costs nothing to use and stops you fighting the recent direction. [What is the RSI 50 line used for?](/answers/what-is-the-rsi-50-line-used-for/) gives the details.

### A quick reference: what RSI does and does not measure

RSI measures the balance of gains and losses between closes. It ignores:

- **Highs and lows.** A bar with a huge range and an unchanged close adds nothing to RSI.
- **Gaps as separate events.** A gap is just part of the close-to-close change.
- **Volume.** For a volume-weighted cousin, see the [money flow index](/money-flow-index/).
- **Size relative to price.** RSI on a stock at 10 and on a stock at 1,000 means the same, because gains and losses are compared with each other, not with price.

That last point is why RSI travels well across markets and why it is a sensible first oscillator to learn.

## Reading RSI in trends and ranges

The most common RSI mistake is reading it the same way in every market state. The same reading means different things in a range and in a trend.

### In a range

When price moves sideways between clear support and resistance, rallies and falls are short and roughly equal. RSI then swings between its extremes in step with price. Readings near 70 tend to come near resistance; readings near 30 near support. In this state the textbook reading works as a timing aid: an oversold RSI at a support level that has held before is a reason to look for a long, with a stop below the level.

The range is doing the work here. RSI tells you the latest fall was one-sided; the support level tells you where buyers stepped in last time. Remove the level and an oversold reading is just a fact about the past fortnight.

### In a trend

In a strong uptrend, rallies are long and pullbacks are short. Average gains stay well above average losses for weeks. RSI spends much of its time above 50, reaches 70 often and can stay there. Selling because RSI is above 70 in this state means selling into strength, again and again.

The pattern that does repeat in trends is a **range shift**. In strong uptrends, RSI pullbacks tend to stop in the 40 to 50 area rather than falling to 30, and the upper swings reach 70 to 80 or more. In downtrends the picture flips: rallies stall around 50 to 60 and the lows reach 20 to 30. The idea that RSI moves into a higher band in bull markets and a lower band in bear markets is associated with Andrew Cardwell, and Constance Brown's *Technical Analysis for the Trading Professional* (1999) discusses it at length. The bands quoted in different books vary by a few points, and they are rules of thumb, not fixed levels. What matters is the observation, which anyone can check on their own charts: a market where RSI keeps bouncing from 40 is behaving differently from one where RSI keeps failing at 60.

Read like this, RSI tells you about trend health:

| What RSI is doing | Usual reading |
|---|---|
| Swinging between about 30 and 70, crossing 50 often | Range or weak trend |
| Pullbacks holding about 40 to 50, highs above 70 | Healthy uptrend |
| Rallies failing about 50 to 60, lows below 30 | Healthy downtrend |
| An uptrend's pullback breaks well below 40 | The uptrend is weakening; not yet a reversal |
| Repeated readings above 80 with price going nowhere | Exhaustion or a range forming at the top |

[Can RSI stay overbought for a long time?](/answers/can-rsi-stay-overbought-for-a-long-time/) shows the arithmetic of why it can, and what a long stay above 70 says about the trend.

### Telling the two apart

You cannot tell the state from RSI alone, which is a problem, because the state decides how to read RSI. Use something else to decide the state first:

- **Price structure.** Higher highs and higher lows is a trend. Repeated tests of the same high and low is a range.
- **A longer moving average.** Price above a rising 200-day [exponential moving average](/exponential-moving-average/) is the classic trend filter.
- **[ADX](/adx/).** Low and falling ADX suggests a range; high and rising ADX suggests a trend. ADX does not give direction, only strength.

Then read RSI for that state. This two-step habit, state first and oscillator second, does more for RSI than any change of settings.

## Divergence, hidden divergence and failure swings

### Regular divergence

[Divergence](/divergence/) is a disagreement between price and an oscillator at two swing points.

- **Bearish divergence:** price makes a higher high, the oscillator makes a lower high. The second push up was slower than the first.
- **Bullish divergence:** price makes a lower low, the oscillator makes a higher low. The second push down was slower than the first.

It is the clearest example of momentum turning before price. It is also the most over-traded signal in technical analysis, for three reasons.

1. **It says nothing about timing.** A rally can show three or four bearish divergences in a row, each one a lower RSI high under a higher price high, and keep rising for months.
2. **It is partly an effect of the scale.** On a bounded oscillator, the first push often takes RSI close to its ceiling. The second push has little room left to go higher, so a lower high is the default outcome, not a sign of weakness.
3. **It is easy to see in hindsight and hard in real time.** A swing high is only a swing high once price has fallen away from it. In real time you are guessing which bar will be the second peak.

The honest use of regular divergence is as a warning that the move is tiring, combined with a price signal at a level: a break of a short-term trend line, a failed breakout, a reversal candle at resistance. [What does RSI divergence mean?](/answers/what-does-rsi-divergence-mean/) has a worked example with numbers.

### Hidden divergence

[Hidden divergence](/hidden-divergence/) is the same comparison made at pullbacks instead of peaks, and it is read as a sign the trend will continue.

- **Bullish hidden divergence:** in an uptrend, price makes a higher low but the oscillator makes a lower low. The pullback in momentum was deeper than the pullback in price, and price held up anyway.
- **Bearish hidden divergence:** in a downtrend, price makes a lower high but the oscillator makes a higher high.

The logic is that a sharp but shallow pullback, one that drags the oscillator down a long way without hurting the price structure, is a dip in a strong trend. The name is not a standard term from one author; it spread through trading courses and forums. Like regular divergence, it depends on picking swing points, and it works only if you have already decided a trend exists. [What is hidden divergence?](/answers/what-is-hidden-divergence/) sets out the four types side by side.

| Type | Price | Oscillator | Read as |
|---|---|---|---|
| Regular bearish | Higher high | Lower high | Uptrend tiring |
| Regular bullish | Lower low | Higher low | Downtrend tiring |
| Hidden bullish | Higher low | Lower low | Uptrend continuing |
| Hidden bearish | Lower high | Higher high | Downtrend continuing |

### Failure swings

The [RSI failure swing](/rsi-failure-swing/) is Wilder's own signal, and the one many RSI users have never heard of. It uses only the RSI line, not price.

**Top failure swing (bearish):**

1. RSI rises above 70.
2. RSI pulls back. Mark the low of that pullback (the "failure point").
3. RSI rallies again but fails to get back above 70, or fails to beat its first peak.
4. RSI falls below the failure point. That is the signal.

**Bottom failure swing (bullish):** the mirror at 30. RSI falls below 30, bounces, pulls back without making a new low, then rises above the bounce high.

**Worked example.** RSI reaches 76, falls to 61, rallies to 68, then drops to 59. The pullback low of 61 was the failure point. The rally to 68 failed below 70. The fall to 59 broke 61. That is a top failure swing.

The failure swing's advantage over divergence is that it has a trigger: a break of a specific RSI level, not a judgement about swing points. Its weakness is the same as every RSI signal: in a strong trend it fires on pullbacks that do not turn into reversals. [What is an RSI failure swing?](/answers/what-is-an-rsi-failure-swing/) compares it with divergence step by step.

## The stochastic family

### The stochastic oscillator

The [stochastic oscillator](/stochastic-oscillator/), developed by George Lane in the 1950s, asks a different question from RSI. Not "how big were recent gains compared with losses?" but "where is the latest close within the recent high-low range?"

%K = 100 x (close - lowest low over n bars) / (highest high over n bars - lowest low over n bars)

With n = 14: if the 14-bar high is 110, the low is 100 and the close is 107, %K = 100 x 7 / 10 = **70**. The close is 70 per cent of the way up the range.

A second line, %D, is a 3-bar simple average of %K, used as a signal line. Readings above 80 are usually called overbought and below 20 oversold.

The key difference from RSI is the input. RSI uses only closes. The stochastic uses the high and low, so a bar with a long wick changes the range even if the close does not move. That makes the stochastic more sensitive to range expansion and generally faster. [RSI vs stochastic: which is better?](/answers/rsi-vs-stochastic-which-is-better/) works through a case where they disagree.

### Fast, slow and full

The names cause endless confusion because they describe smoothing, not settings.

- **Fast stochastic:** %K is the raw formula above; %D is a 3-bar average of it. Very jumpy.
- **Slow stochastic:** the fast %D becomes the new %K (so %K is now smoothed once), and the new %D is a 3-bar average of that. This is what most platforms show by default, as "14, 3, 3".
- **Full stochastic:** the same as slow, but with every smoothing length adjustable. Slow stochastic is a full stochastic with both smoothings set to 3.

[Fast vs slow stochastic](/answers/fast-vs-slow-stochastic/) has a table of the three with the same inputs.

### Stochastic RSI

[Stochastic RSI](/stochastic-rsi/), from Tushar Chande and Stanley Kroll's *The New Technical Trader* (1994), applies the stochastic formula to RSI instead of price:

StochRSI = (RSI - lowest RSI over n bars) / (highest RSI over n bars - lowest RSI over n bars)

If RSI is 60 and its 14-bar range is 40 to 65, StochRSI = (60 - 40) / 25 = **0.80**, or 80 on platforms that multiply by 100. Most platforms then smooth it with %K and %D lines, like a slow stochastic.

It is an oscillator of an oscillator. It reaches its extremes far more often than RSI, which makes it popular for short-term timing and noisy for anything else. When RSI is drifting in a narrow band, StochRSI magnifies tiny RSI moves into full swings from 0 to 100. [Stochastic RSI vs RSI](/answers/stochastic-rsi-vs-rsi-difference/) shows how a two-point RSI move becomes a full-scale StochRSI swing.

### Stochastic momentum index

The [stochastic momentum index (SMI)](/stochastic-momentum-index/), from William Blau, measures the close against the *middle* of the range rather than the bottom, and double-smooths both parts. It runs from -100 to +100 with zero at the midpoint. The result is a smoother stochastic with a natural centre line. Platforms differ on the smoothing lengths and the levels, so check which version you are looking at.

## Other bounded oscillators

### Williams %R

[Williams %R](/williams-r/), from Larry Williams, is the fast stochastic turned upside down:

%R = -100 x (highest high - close) / (highest high - lowest low)

It runs from 0 to -100. A close at the top of the range is 0; at the bottom, -100. Using the example above (high 110, low 100, close 107), %R = -100 x 3 / 10 = **-30**. Since the fast %K was 70, you can see the relationship: %R = %K - 100. The two lines have exactly the same shape. The differences are that %R is usually shown without smoothing or a signal line, and its levels are -20 and -80. [Williams %R vs stochastic](/answers/williams-r-vs-stochastic/) covers what that means in practice.

### Commodity channel index (CCI)

The [CCI](/cci/), introduced by Donald Lambert in 1980, measures how far the typical price is from its average, in units of its normal deviation.

1. Typical price = (high + low + close) / 3.
2. Take a 20-bar simple average of the typical price.
3. Mean deviation = the average distance of each of the last 20 typical prices from that average.
4. CCI = (typical price - average) / (0.015 x mean deviation).

Lambert chose the constant 0.015 so that most readings would fall between -100 and +100. With a typical price of 105, an average of 100 and a mean deviation of 2.5, CCI = 5 / 0.0375 = **133**.

CCI is technically unbounded, so it can show how extreme a move is in a way RSI cannot. Traders use it both ways: fading readings beyond ±100 in ranges, or treating a move above +100 as the start of a trend. [Is CCI better than RSI?](/answers/is-cci-better-than-rsi/) compares the two.

### Ultimate oscillator

The [ultimate oscillator](/ultimate-oscillator/), also by Larry Williams (1976), blends three windows to reduce the false signals of a single period.

1. Buying pressure = close - the lower of (low, previous close).
2. True range = the higher of (high, previous close) - the lower of (low, previous close).
3. For 7, 14 and 28 bars, average = sum of buying pressure / sum of true range.
4. UO = 100 x (4 x average7 + 2 x average14 + average28) / 7.

It weights the short window most. Williams' own signal is a divergence plus a break of a level, not simple 70/30 crosses.

### Money flow index

The [money flow index (MFI)](/money-flow-index/) is often described as a volume-weighted RSI. It multiplies the typical price by volume ("raw money flow"), splits bars into up and down by whether the typical price rose or fell, and compares the totals over 14 bars. Unlike RSI it uses simple sums rather than Wilder's smoothing. Levels are usually 80 and 20. It is only as good as the volume data, so it is weaker on spot forex, where there is no central volume figure.

### Chande momentum oscillator

The [Chande momentum oscillator](/chande-momentum-oscillator/) uses the same gains and losses as RSI but without smoothing, and scales them from -100 to +100:

CMO = 100 x (sum of gains - sum of losses) / (sum of gains + sum of losses)

Because there is no smoothing, it moves faster than RSI on the same period. It shows clearly how much of RSI's character comes from the smoothing rather than the idea.

## Unbounded momentum

### Momentum and rate of change

The plainest oscillators of all.

- **[Momentum](/momentum-indicator/)** = close - close n bars ago. A close of 110 against 100 ten bars ago gives +10.
- **[Rate of change (ROC)](/rate-of-change/)** = 100 x (close - close n bars ago) / close n bars ago. The same example gives +10 per cent.

They have the same shape on one chart, because one is the other divided by a number that changes slowly. They differ when you compare across price levels. A stock moving from 10 to 11 has momentum of 1 and ROC of 10 per cent. A stock moving from 1,000 to 1,010 has momentum of 10 and ROC of 1 per cent. Momentum says the second stock is moving faster; ROC says the first one is. Some platforms also plot momentum as a ratio (close / close n bars ago x 100, centred on 100), which is ROC with 100 added. [Momentum vs rate of change](/answers/momentum-vs-rate-of-change/) covers when the difference matters.

One subtlety: both compare today with a single bar in the past, so the indicator moves when that old bar drops out of the window, not only when today's price changes. A big move ten bars ago produces a jump when it leaves the window. This "drop-off effect" is why most traders smooth these lines or use the averaged oscillators below.

### MACD, PPO and APO

[MACD](/macd/), from Gerald Appel, is the 12-period EMA minus the 26-period EMA, with a 9-period EMA of that difference as a signal line. It is a smoothed momentum measure: the gap between a fast and a slow average widens when price speeds up.

The **absolute price oscillator ([APO](/apo/))** is the same difference with any lengths you choose. The **percentage price oscillator ([PPO](/ppo/))** divides the difference by the slow average and multiplies by 100. If the 12-period EMA is 102 and the 26-period EMA is 100, the APO and MACD line are 2 and the PPO is 2 per cent. PPO is to MACD what ROC is to momentum: the version you can compare across markets and across long histories where price has changed a lot.

MACD is often grouped with trend indicators and RSI with oscillators, but both measure momentum. The difference is mainly that MACD is unbounded and slower. [MACD vs RSI](/answers/macd-vs-rsi-which-to-use/) covers when each fits.

### True strength index

The [true strength index (TSI)](/true-strength-index/), from William Blau, smooths price changes twice:

TSI = 100 x EMA13(EMA25(change)) / EMA13(EMA25(absolute change))

The default lengths are 25 and 13, often with a 7-period signal line. Dividing by the smoothed absolute change bounds it between -100 and +100 in practice, so it sits between the bounded and unbounded families. The double smoothing makes it one of the cleanest momentum lines, at the cost of lag.

### Coppock curve

The [Coppock curve](/coppock-curve/), from Edwin Coppock in 1962, is a 10-period weighted average of the 14-period ROC plus the 11-period ROC, designed for monthly charts of stock indices. Its classic use is narrow: a turn up from below zero as a sign that a long-term low may be in. It is a slow, specialised tool and fires rarely. Reading it on intraday charts throws away the idea behind it.

### Awesome and accelerator oscillators

Bill Williams' [awesome oscillator](/awesome-oscillator/) is the 5-period simple average of the median price ((high + low) / 2) minus the 34-period simple average, drawn as a histogram. It is a simple-average cousin of MACD. The [accelerator oscillator](/accelerator-oscillator/) is the awesome oscillator minus its own 5-period average: a measure of acceleration, the change in momentum. Both are usually read with Bill Williams' other tools rather than alone.

## Newer and cycle-based oscillators

Since the 1990s, a long line of oscillators has tried to fix RSI's two weaknesses: lag and noise. They each change one ingredient. It helps to ask, for each one, what it changes and what it costs.

### Connors RSI

[Connors RSI](/connors-rsi/), from Larry Connors' research firm, averages three parts: a 3-period RSI of price, a 2-period RSI of the up-or-down streak length, and the percentile rank of today's one-bar change against the last 100. It is built for short-term mean reversion: finding very stretched one- to three-day pullbacks.

- **What it changes:** adds streak length and the size of today's move.
- **What it costs:** three parameters instead of one, and it is so fast that it is noise on anything but short holding periods. It was designed and published with a specific trading style, and most of the published research on it comes from its own authors.

[Is Connors RSI better than standard RSI?](/answers/is-connors-rsi-better-than-rsi/) gives a worked example and a verdict.

### Laguerre RSI

[Laguerre RSI](/laguerre-rsi/), from John Ehlers, passes price through a four-stage Laguerre filter and then applies an RSI-like ratio to the differences between stages. A single "gamma" setting between 0 and 1 controls the speed: low gamma is fast and noisy, high gamma smooth and slow.

- **What it changes:** replaces the lookback period with a filter that responds faster for the same smoothness.
- **What it costs:** it spends much of its time pinned at 0 or 1 (or 0 and 100), so the overbought and oversold lines work more like on-off switches than graded readings.

### Fisher transform

Ehlers' [Fisher transform](/fisher-transform/) takes price's position in its recent range, scaled to between -1 and +1, and applies 0.5 x ln((1 + x) / (1 - x)). The transform stretches the edges, so extreme readings become sharp peaks. The aim is to make turning points clear.

- **What it changes:** reshapes the scale to emphasise extremes.
- **What it costs:** the peaks are sharp in hindsight, but in real time the line keeps rising until it does not. It still needs a trigger, usually a cross of its own previous value.

### WaveTrend

The [WaveTrend oscillator](/wavetrend-oscillator/) is a popular community indicator on TradingView. It is a CCI-style calculation on smoothed typical price, smoothed again, with a 4-bar signal line. In effect it is a smoothed CCI.

- **What it changes:** heavy smoothing for clean crosses.
- **What it costs:** lag, and versions differ between scripts. Because it has no single original source, check which version you are using before comparing results.

### Cyber cycle

Ehlers' [cyber cycle](/cyber-cycle/) tries to isolate the cycle part of price by filtering out the trend, then shows the cycle as an oscillator with a one-bar-delayed trigger line. It assumes the market has a measurable cycle, which is true for some periods and not others.

### The pattern behind all of them

| Oscillator | What it changes from RSI | What it costs |
|---|---|---|
| Stochastic RSI | Ranks RSI in its own range | Much more noise |
| Connors RSI | Adds streak and one-bar size | Three settings, very short-term |
| Laguerre RSI | Filter instead of a window | Pins at the extremes |
| Fisher transform | Stretches the scale | Sharp-looking, still needs a trigger |
| WaveTrend | Heavy smoothing of a CCI | Lag; versions differ |
| Cyber cycle | Removes trend before measuring | Assumes a stable cycle |

None of them escapes the noise-or-lag trade. Each picks a different point on it. A newer oscillator is worth using if its particular trade suits your holding period, not because it is newer.

## Choosing settings

### Period length against noise

Every oscillator's period sets how many bars it looks at. A shorter period reacts faster to price and reaches its extremes more often. A longer one reacts slower and reaches them rarely. Here is a rough guide for RSI:

| RSI period | How it behaves | Levels often used | Typical use |
|---|---|---|---|
| 2 to 3 | Swings to the edges every few bars | 90 / 10 or 95 / 5 | Short pullback entries in a known trend |
| 5 to 9 | Fast, frequent extremes | 80 / 20 | Intraday timing |
| 14 | Wilder's default | 70 / 30 | General use, any timeframe |
| 21 to 30 | Slow, rarely extreme | 60 / 40 or 65 / 35 | Swing and position trend filter |

The first column and the third go together. A rule like "RSI(5) below 30" fires far more often than "RSI(14) below 30", and each signal carries less information.

### Period and timeframe are the same thing

A 14-period RSI on a 1-hour chart looks at 14 hours. A 14-period RSI on a daily chart looks at 14 days. Doubling the period on one timeframe is roughly like moving up a timeframe with the same period. So the question "what period should I use?" is really "how many hours or days of movement do I want to measure?" Start from your holding period. If you usually hold for three to five days, an RSI that looks at three weeks is measuring something older than your trade.

[What is the best RSI setting for day trading?](/answers/best-rsi-setting-for-day-trading/) and [What is the best RSI period for swing trading?](/answers/best-rsi-period-for-swing-trading/) apply this to each style.

### A worked comparison

Imagine a stock that falls for three days, by 1, 1 and 1.5, after two weeks of small, mixed moves. Before the fall, the average gain and loss were both about 0.5.

- With **RSI(14)**, each fall adds only 1/14 of its size to the average loss. After three days the average loss has risen to about 0.64 and the average gain has dropped to about 0.40 (each day without a gain trims it by 1/14). RSI is about 39. A dip, not oversold.
- With **RSI(3)**, each fall adds a third of its size and each day without a gain cuts the average gain by a third. After three days the average gain is about 0.15 and the average loss about 1.02. RSI is about 13. Deeply oversold.

The arithmetic is approximate but the point is exact: the same three days are "nothing much" to RSI(14) and "extreme" to RSI(3). Neither is wrong. They are measuring different windows.

### Do not tune to the past

The fastest way to fool yourself is to try RSI periods from 2 to 30 on one chart and keep the one that looked best. With enough settings, one will always look good on the past by chance. If you test settings, decide the shortlist first, test on one stretch of data and confirm on a separate stretch you have not looked at. The [methods](/methods/) page describes how we will hold our own tests to this.

## Combining oscillators with trend and levels

### What each tool is for

An oscillator answers "how fast?". It does not answer "which way is the bigger trend?" or "where are the important prices?". A workable setup gives each question to a different tool:

| Question | Tool | Example |
|---|---|---|
| Which way is the trend? | A trend tool | 200-day EMA, price structure, ADX for strength |
| Where would a trade make sense? | Levels | [Support and resistance](/support-and-resistance/), prior highs and lows |
| Is the move stretched or tiring right now? | One oscillator | RSI, stochastic or CCI |
| When exactly to act? | Price | A reversal candle, a break of a short trend line |

Read top to bottom, that is a whole process: trend, then level, then momentum, then trigger. Each tool answers one question.

### Avoid redundant oscillators

RSI, the stochastic, Williams %R and CCI all measure short-term momentum from the last 14 to 20 bars of the same prices. On most charts they agree most of the time. Adding a second one feels like confirmation, but it is the same evidence counted twice. If they disagree, it is usually because one uses highs and lows and the other only closes; you learn which ingredient moved, not that the market is more or less likely to turn.

A second indicator adds information when it measures something different:

- **Trend direction**: a moving average or ADX.
- **Volatility**: [ATR](/atr/) or [Bollinger Bands](/bollinger-bands/).
- **Volume**: on-balance volume or the money flow index (when volume data is good).
- **A different timeframe**: daily RSI read alongside hourly RSI.

[How many oscillators should you use at once?](/answers/how-many-oscillators-should-you-use/) gives a table of which pairs overlap.

### Example of a combined read

A share has been rising for six months, above a rising 200-day EMA. It pulls back to a former resistance level, now support. Daily RSI(14) falls to 42, then turns up. The next day prints a bullish engulfing candle off the level.

- Trend: up (EMA, structure).
- Level: former resistance, now support.
- Momentum: RSI held in the 40s, the usual pullback zone in an uptrend, not a slide to 30.
- Trigger: the engulfing candle.

A trader using this read might buy above the engulfing high with a stop below the support level. RSI did not create the trade; it confirmed that the pullback was ordinary for an uptrend. Notice that "RSI oversold" never appeared. In an uptrend it often will not.

## Oscillators across timeframes

One way to make a second oscillator add information is to read the same oscillator on two timeframes. This is not counting the same evidence twice, because a daily RSI and an hourly RSI measure different windows of the same market.

### The two-timeframe read

The common approach uses the higher timeframe for context and the lower one for timing:

1. **Higher timeframe (for example, daily).** Is RSI living in the uptrend band (pullbacks holding around 40 to 50) or the downtrend band (rallies failing around 50 to 60)? That sets the side you look for.
2. **Lower timeframe (for example, hourly).** Wait for the lower-timeframe oscillator to reach the extreme that matches a pullback against that side, then turn back.

In a daily uptrend, that means looking for hourly RSI to dip towards 30 and turn up near a support level, rather than selling hourly readings above 70. The higher timeframe tells you which extreme matters; the lower one tells you when the pullback may be ending.

### The ratio between timeframes

Pick timeframes far enough apart to measure different things. A common rule of thumb is a ratio of four to six: weekly with daily, daily with 4-hour, hourly with 15-minute. Daily and 4-hour are close cousins; their RSIs often move together and add little to each other. Daily and 5-minute are so far apart that the 5-minute chart barely notices the daily picture changing.

### A trap: the unfinished higher bar

The higher-timeframe value is only final when its bar closes. During the day, the daily RSI keeps moving with every hourly close. A morning that reads "daily RSI above 50" can become "daily RSI below 50" by the close. Either read the higher timeframe's last completed bar, or accept that the context can change before the day is out. This is also one of the most common ways a backtest uses information it would not have had, as the next section explains.

### Where the same oscillator disagrees with itself

Daily RSI at 65 and hourly RSI at 25 is not a contradiction. It describes an uptrend over the last three weeks with a sharp pullback over the last day. Disagreement between timeframes is the normal state of a market that is pulling back within a trend, and it is often the situation traders are waiting for. The two readings agreeing at the same extreme (both above 70, say) describes a market that has moved hard on every scale at once, which is more often a sign of a stretched move than of a fresh opportunity.

| Daily RSI | Hourly RSI | Usual description |
|---|---|---|
| Uptrend band (pullbacks holding 40 to 50) | Near 30 and turning up | Pullback within an uptrend |
| Uptrend band | Above 70 | Uptrend, short-term burst; late to buy |
| Downtrend band (rallies failing 50 to 60) | Near 70 and turning down | Rally within a downtrend |
| Crossing 50 often | Swinging 30 to 70 | Range on both scales |
| Above 70 | Above 70 | Stretched on every scale |

## Backtesting oscillators without fooling yourself

Oscillators look easy to test: a number crosses a line, you buy. Most published "RSI strategy" results are less reliable than they look, for reasons specific to how oscillators are calculated.

### Warm-up and the seed

Wilder's smoothing needs history. An RSI series begins from an arbitrary starting value, and on a 14-period RSI that start still has a few per cent of weight 50 bars later. A backtest that starts trading on bar 15 is trading on values that do not match what a platform with years of history would show. Leave a warm-up of at least 100 bars before counting any signals, and use the same history length every time.

### Platform and formula mismatches

If your backtest uses EMA-smoothed RSI and your charting platform uses Wilder's, your test and your chart disagree by several points near the levels. Signals that fired in the test do not appear on the chart and the other way round. Use the same formula in both, and check the seed.

### Look-ahead in swing-based signals

Divergence and failure swings need swing highs and lows. A swing high is only confirmed once later bars have fallen away from it. Code that marks a divergence at the second peak, using bars after that peak to confirm it, is looking into the future. The signal time must be the bar where the swing became known, not the bar of the peak itself. The same applies to any oscillator compared with "pivots".

### Repainting and higher-timeframe values

An RSI on the current, unfinished bar changes until the bar closes. A test that uses the closing value, but enters at a price during the bar, is using information it did not have. The same problem hides in "daily RSI on an hourly chart": until the day closes, the daily value keeps changing. Use completed bars only.

### Too many variants

Period, levels, smoothing, filters, exits: an oscillator system has many knobs. Each one tried adds a chance of finding a good-looking result by luck. Count every variant tried and judge the best one against that count. Our [methods](/methods/) page sets out how we handle this and the random-entry baseline every result is compared with.

### Mean reversion flatters on rising markets

Many short-term RSI systems buy oversold pullbacks. On markets that rose strongly over the test period, buying almost any dip did well. A test that does not compare with random entries on the same markets and dates cannot tell an RSI edge from a rising market.

## Common mistakes

1. **Selling because RSI is above 70 in an uptrend.** In a strong trend, overbought is the normal state. Use the range shift instead: in uptrends, watch the pullback zone.
2. **Trading every divergence.** Divergence is a warning, not a trigger. Several can appear in a row before any turn.
3. **Stacking similar oscillators.** RSI, stochastic and Williams %R on one chart are one opinion shown three times.
4. **Changing the period after every losing trade.** That is curve-fitting by hand.
5. **Comparing values across platforms or code without checking the smoothing.** EMA-smoothed and Wilder-smoothed RSI differ.
6. **Using short-period levels on long periods, or the reverse.** RSI(2) at 30 is ordinary; RSI(25) at 30 is rare. Match the levels to the period.
7. **Putting stops on the indicator.** "Exit if RSI drops below 40" puts your risk on a number that does not map to a price. Stops belong at a price level.
8. **Reading an oscillator without deciding the market state.** The same reading means opposite things in a range and a trend.
9. **Treating a newer or more complex oscillator as better.** Each one trades lag for noise in a different way. None removes both.
10. **Ignoring the input.** An oscillator on closes ignores wicks; one on highs and lows does not. Know which one you are reading.

## Comparison table

| Oscillator | Built from | Range | Default settings | Common levels | Best market state | Lag |
|---|---|---|---|---|---|---|
| [RSI](/rsi/) | Closes: gains vs losses, Wilder smoothing | 0 to 100 | 14 | 70 / 30, 50 line | Range; trend with shifted levels | Medium |
| [Stochastic](/stochastic-oscillator/) | Close vs high-low range | 0 to 100 | 14, 3, 3 (slow) | 80 / 20 | Range | Low to medium |
| [Stochastic RSI](/stochastic-rsi/) | RSI vs its own range | 0 to 1 or 0 to 100 | 14, 14, 3, 3 | 0.8 / 0.2 | Short-term timing | Low |
| [Williams %R](/williams-r/) | Close vs high-low range (inverted) | 0 to -100 | 14 | -20 / -80 | Range | Low |
| [CCI](/cci/) | Typical price vs its average and mean deviation | Unbounded, mostly ±100 | 20 | +100 / -100 | Range or breakout | Medium |
| [Ultimate oscillator](/ultimate-oscillator/) | Buying pressure vs true range, three windows | 0 to 100 | 7, 14, 28 | 70 / 30 | Range, divergence | Medium |
| [Money flow index](/money-flow-index/) | Typical price x volume | 0 to 100 | 14 | 80 / 20 | Range, with good volume data | Medium |
| [Chande momentum](/chande-momentum-oscillator/) | Gains vs losses, unsmoothed | -100 to +100 | 14 | +50 / -50 | Range | Low |
| [Momentum](/momentum-indicator/) | Close minus close n bars ago | Unbounded | 10 (some 14) | Zero line | Trend | Low, noisy |
| [Rate of change](/rate-of-change/) | Percentage change over n bars | Unbounded | 12 (some 9 or 10) | Zero line | Trend | Low, noisy |
| [MACD](/macd/) | Fast EMA minus slow EMA | Unbounded | 12, 26, 9 | Zero line, signal cross | Trend | High |
| [PPO](/ppo/) | MACD as a percentage | Unbounded | 12, 26, 9 | Zero line | Trend, across markets | High |
| [TSI](/true-strength-index/) | Double-smoothed change | About -100 to +100 | 25, 13 | Zero line, signal | Trend | High |
| [Coppock curve](/coppock-curve/) | Weighted sum of two ROCs | Unbounded | 14, 11, 10 (monthly) | Turn up below zero | Long-term index lows | Very high |
| [Awesome oscillator](/awesome-oscillator/) | 5 minus 34 SMA of median price | Unbounded | 5, 34 | Zero line | Trend | Medium |
| [Connors RSI](/connors-rsi/) | RSI(3), streak RSI(2), percent rank | 0 to 100 | 3, 2, 100 | 90 / 10 | Short pullbacks in trends | Very low, noisy |
| [Laguerre RSI](/laguerre-rsi/) | Laguerre filter stages | 0 to 1 | Gamma 0.5 | 0.8 / 0.2 | Short-term swings | Low |
| [Fisher transform](/fisher-transform/) | Stretched position in range | Unbounded | 10 | Peaks, trigger cross | Turning points | Low to medium |
| [WaveTrend](/wavetrend-oscillator/) | Smoothed CCI-style ratio | Unbounded, mostly ±60 | 10, 21, 4 | ±60, ±53 | Range | Medium to high |

"Best market state" here means where the tool's usual reading makes most sense, not where it makes money. Default settings vary by platform; the ones listed are the most common.

## Verdict

RSI is the right first oscillator: it is simple, it travels across markets, and its formula is short enough to check by hand. The stochastic is the right second one to understand, because it uses a different ingredient (the high-low range) and shows how much an oscillator's behaviour depends on its input. Most other bounded oscillators are variations on these two. The unbounded ones, momentum, ROC, MACD and their relatives, are better at showing trend strength and worse at marking extremes.

No oscillator predicts. The useful readings are the ones that describe the move in context: a pullback that held in an uptrend's normal RSI zone, a slowdown into a known resistance level, a failure swing that confirms what price is already showing. The unhelpful ones are the readings taken alone: "RSI is 72, so sell". Choose one oscillator, learn its formula and its platform version, decide the market state with something else, and let price give the trigger.

## FAQ

**What is the most accurate momentum oscillator?**
None is accurate in the sense of predicting price. They measure past speed with different inputs and smoothing. RSI and the stochastic are the most studied and the easiest to check by hand, which makes them good defaults. Accuracy depends far more on how you use the reading than on which oscillator produced it.

**Is RSI a leading or lagging indicator?**
It lags, because it is built from past closes. It can turn before price because speed falls before a top, but a slowdown does not always lead to a turn. Treat it as a description of momentum, not a forecast.

**Why does my RSI not match someone else's?**
Usually different price data (broker feed, session times, daily close time), sometimes different smoothing (Wilder versus an exponential or simple average), and occasionally different history length, which changes the effect of the starting value. Check the formula and the data before comparing.

**Should I use RSI or the stochastic?**
Use the one whose input fits your question. RSI asks how one-sided recent closes were; the stochastic asks where the close sits in the recent range. The stochastic is faster and more sensitive to wicks. Using both adds little, because they usually agree.

**What does an oscillator reading of 50 mean?**
On RSI, gains and losses over the window were equal. On the stochastic, the close is midway in its range. On unbounded oscillators the equivalent is the zero line. All mean the same thing: no net momentum over the window.

**What is the difference between momentum and an oscillator?**
Momentum is the idea: the speed of price change. An oscillator is a kind of chart line that swings around a centre value. Most oscillators measure momentum, but some measure other things, such as volume flow or the position of price within a channel.

**Why do oscillators give so many false signals in trends?**
Because their usual levels assume moves are short and balanced, which is true in ranges. In a trend, one side dominates for weeks, so the oscillator sits near one edge. Readings that would be extreme in a range are ordinary in a trend.

**Do momentum oscillators work on all markets?**
The arithmetic works on any price series, including stocks, currencies, commodities and crypto. What changes is how often each market trends or ranges, and the quality of the data. Volume-based oscillators like MFI need reliable volume, which spot forex does not have.
