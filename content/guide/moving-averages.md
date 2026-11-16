---
slug: moving-averages
title: "Moving averages: the complete guide"
description: How moving averages work, from the simple and exponential average to Hull, KAMA and VWMA, with worked sums, crossovers, settings and honest limits.
query: moving averages
publish: 2027-04-05
reviewed: 16 November 2026
cluster: [simple-moving-average, exponential-moving-average, weighted-moving-average, smoothed-moving-average, hull-moving-average, dema, tema, zlema, kama, alma, t3-moving-average, mcginley-dynamic, frama, lsma, vwma, moving-average-crossover, golden-cross, death-cross, moving-average-ribbon, guppy-multiple-moving-average, moving-average-envelope, moving-average-exit]
value: [table, example, verdict]
chart: moving-average-crossover
---

A moving average is the average price over the last few bars, recalculated on every new bar so that it moves along the chart. It turns a jagged price line into a smoother one. That makes the direction of the market easier to see, and it gives traders a line to measure price against. This guide covers the main types, from the simple average to the low-lag and adaptive ones, then the practical part: choosing a period, reading trend, crossovers, averages as support and resistance, bands built on averages, and how to test an average without fooling yourself.

The short version, before the detail: a moving average is a summary of the past, not a forecast. Every average trades smoothness for delay. The smoother the line, the later it turns. No type of average removes that trade-off; the fancier ones only move it around. Averages are useful for seeing trend, for keeping you on the right side of it and for placing trailing exits. They are weak in sideways markets, where they cross back and forth and produce losing signals one after another. We have not yet tested moving-average rules ourselves, so this guide contains no figures of our own. When we have a study that meets our [testing rules](/methods/), we will add it here.

## What a moving average does

Price on a chart is noisy. A market can rise for a month while half of the daily bars close lower. Looking at the bars one by one, it is easy to lose sight of the direction. A moving average answers a simpler question: over the last N bars, where has price been on average, and is that average rising or falling?

Take a 10-day average of closing prices. On each day you add up the last 10 closes and divide by 10. Tomorrow you drop the oldest close, add the newest one, and divide again. The "window" of 10 bars moves forward one bar at a time. That is where the name comes from.

Three things follow from this simple idea, and they explain almost everything about how averages behave.

**Smoothing.** Averaging cancels out some of the up-and-down noise. A single wild bar is diluted by the other nine. The longer the window, the more dilution, so a 200-day average is far smoother than a 10-day one.

**Lag.** The average is built only from past prices. When price turns, the average keeps going the old way for a while, because most of the bars in its window still belong to the old move. It turns only once enough new bars have replaced old ones. This delay is called lag. For a simple average, the centre of the window sits about (N − 1) / 2 bars in the past, so a 21-bar simple average is, in rough terms, describing where price was about 10 bars ago.

**The trade-off.** Smoothing and lag come together. You cannot have a line that ignores noise and also turns the moment price turns, because a real turn and a bit of noise look the same on the first bar. Every type of average in this guide is a different answer to the same question: how much delay will you accept in return for how much smoothing? Some answers are better suited to some markets, but none of them escapes the question.

It helps to think of an average as a filter. In signal-processing terms, a moving average is a low-pass filter: it lets slow changes through and damps fast ones. That framing is useful because it tells you what an average cannot do. It cannot tell you which fast change is the start of a new trend and which is noise. It can only tell you, after a delay, that the slow picture has changed.

### What averages are used for

Traders use moving averages for five main jobs.

1. **Seeing the trend.** Is the average rising, falling or flat? Is price above or below it?
2. **Signals.** Price crossing an average, or a fast average crossing a slow one.
3. **Dynamic support and resistance.** In a trend, pullbacks often stall near a well-known average.
4. **Exits.** A trailing stop that follows an average, so that a trade stays open while the trend runs. See [moving-average exit](/moving-average-exit/).
5. **Building other tools.** Many indicators are averages underneath. [MACD](/macd/) is the difference between two exponential averages. [Bollinger Bands](/bollinger-bands/) are a simple average with bands at a set number of standard deviations. [Keltner Channels](/keltner-channels/) are an average with bands based on [ATR](/atr/). Even [RSI](/rsi/) uses a form of average inside its formula.

The first and fourth jobs are where averages do their best work. The second is where most traders lose money with them, mostly in sideways markets.

## Simple moving average

The [simple moving average](/simple-moving-average/) (SMA) is the plain average of the last N closes. Every bar in the window counts the same.

**Formula.** SMA = (C1 + C2 + ... + CN) / N, where C1 to CN are the last N closing prices.

**Worked example.** A 5-day SMA. The last five closes are 20, 22, 21, 23 and 24.

- Sum = 20 + 22 + 21 + 23 + 24 = 110
- SMA = 110 / 5 = **22**

Next day the close is 26. The oldest close (20) drops out and 26 comes in.

- New sum = 22 + 21 + 23 + 24 + 26 = 116
- New SMA = 116 / 5 = **23.2**

Notice what moved the average. Price rose 2 points on the day (24 to 26). The average rose 1.2 points. But that 1.2 has two causes: a high new close coming in, and a low old close (20) going out. The change in an SMA from one bar to the next is (new close − dropped close) / N. In this case (26 − 20) / 5 = 1.2.

That last fact matters more than it seems. An SMA can rise or fall because of a bar that left the window, not because of anything that happened today. If 20 days ago there was a large drop, the 20-day SMA will jump up on the day that drop leaves the window, even if today is a quiet day. Some traders call this the "drop-off effect". It is one reason the SMA can look jerky on charts with big one-off moves, and one reason the exponential average was popular: it has no hard edge where old data falls off.

### Strengths and weaknesses of the SMA

The SMA is easy to understand, easy to check by hand and the same on every platform once the window is full. That last point is underrated. If you and another trader both use a 50-day SMA on the same daily closes, you see the same line. That is not true of every average, as the next section shows.

Its weaknesses: it gives a bar from 49 days ago the same weight as yesterday's bar, which many traders feel is wrong, and it has more lag than a weighted or exponential average of the same length. It is also jerky in the way just described.

The SMA is the standard for the long, widely watched averages, especially the 50-day and 200-day. When a news report says "the index fell below its 200-day average", it nearly always means the simple one.

## Exponential and weighted averages

The other two basic averages give more weight to recent bars. The idea is that today's price is more relevant than last month's.

### Weighted moving average

The [weighted moving average](/weighted-moving-average/) (WMA), sometimes called the linearly weighted average, gives each bar a weight that falls in a straight line. In a 5-bar WMA the newest bar has weight 5, the one before it 4, then 3, 2 and 1. The oldest bar in the window has the least say.

**Formula.** WMA = (N × C_newest + (N − 1) × C_next + ... + 1 × C_oldest) / (N + (N − 1) + ... + 1). The divisor is N × (N + 1) / 2.

**Worked example.** Same five closes as before, oldest first: 20, 22, 21, 23, 24.

- Weighted sum = (20 × 1) + (22 × 2) + (21 × 3) + (23 × 4) + (24 × 5) = 20 + 44 + 63 + 92 + 120 = 339
- Divisor = 5 × 6 / 2 = 15
- WMA = 339 / 15 = **22.6**

The SMA of the same closes was 22. The WMA is higher because the recent closes, which are higher, count for more. In a rising market a WMA sits closer to price than an SMA of the same length. That is less lag, paid for with a little less smoothing.

The WMA still has a hard edge: a bar leaves the window completely after N bars. But because that bar's weight had already fallen to 1, its exit barely moves the line. The drop-off effect is much smaller than with an SMA.

### Exponential moving average

The [exponential moving average](/exponential-moving-average/) (EMA) is the most widely used of the weighted averages. It does not use a fixed window at all. Each new value is a blend of today's close and yesterday's EMA.

**Formula.**

1. Multiplier k = 2 / (N + 1), where N is the period.
2. EMA today = (close today × k) + (EMA yesterday × (1 − k)).

For a 9-period EMA, k = 2 / 10 = 0.2. Today's close gets 20% of the weight and the old EMA gets 80%. Because yesterday's EMA already contains the day before, and so on, every past bar still has some weight. That weight shrinks by a factor of (1 − k) each bar back, which is why the line is called exponential. Old prices fade out gradually instead of falling off a cliff.

**Worked example.** A 9-period EMA, so k = 0.2. Yesterday's EMA was 50. Today's close is 55.

- EMA today = (55 × 0.2) + (50 × 0.8) = 11 + 40 = **51**

Price moved 5 points above the old EMA and the EMA moved 1 point towards it: exactly k of the gap. That is the simplest way to think about any EMA. Each bar, it closes a fixed fraction (k) of the distance between itself and price. A 9-period EMA closes 20% of the gap each bar. A 20-period EMA closes 2/21, about 9.5%. A 200-period EMA closes 2/201, about 1%.

A short worked run makes the behaviour clear. A 4-period EMA has k = 2/5 = 0.4. Start the EMA at 10 and feed it closes of 12, 12, 12, 12.

| Bar | Close | Gap to close | EMA moves (0.4 × gap) | New EMA |
|---|---|---|---|---|
| 1 | 12 | 2.00 | 0.80 | 10.80 |
| 2 | 12 | 1.20 | 0.48 | 11.28 |
| 3 | 12 | 0.72 | 0.29 | 11.57 |
| 4 | 12 | 0.43 | 0.17 | 11.74 |

Price jumped to 12 and stayed there. After four bars the EMA still has not arrived: it closes a smaller step each time and only approaches 12. A 4-period SMA, by contrast, would reach exactly 12 on bar 4, once all four bars in its window were 12. That shows the EMA's real character. It reacts faster at first (the first step is large) but never quite finishes the move, because it never fully forgets the past.

### The seed problem: why two platforms show different EMAs

An EMA needs yesterday's EMA. So what is the first value? There is no yesterday. Platforms solve this in different ways, and that is the main reason the same EMA can show different numbers on two charts.

| Seeding choice | How it starts | First value appears | Effect on early values |
|---|---|---|---|
| SMA seed | First EMA = simple average of the first N closes | On bar N | Early values close to an SMA, then drift to EMA behaviour |
| First-close seed | First EMA = the first close in the data | On bar 1 | Early values pulled strongly towards that one close |
| Different history start | Same rule, but the chart loads a different amount of history | Depends on data | Values differ until enough bars have passed |

Our own indicator code seeds the EMA with an SMA of the first N closes, so the first value appears on bar N. Other platforms make other choices, and even two platforms with the same rule will differ if one has loaded five years of history and the other two years, because each starts the EMA from a different first bar.

The good news is that the difference shrinks. Each bar, the weight on the starting value falls by a factor of (1 − k). After enough bars the seed no longer matters in practice. A common rule of thumb is to allow around three to four times N bars of "warm-up" before trusting an EMA's exact value. For a 200-period EMA that is several hundred bars. On a daily chart with only a year of data, a 200 EMA is still settling.

There is a second source of difference: the price itself. Two brokers' data can differ by a few points on daily closes, especially in forex and crypto, where there is no single exchange and the daily close depends on the time zone the platform uses. A 9 EMA built on a 17:00 New York close and one built on a midnight UTC close are averages of different numbers. See [why your EMA differs from TradingView's](/answers/why-does-my-ema-differ-from-tradingview/) for a checklist.

### The smoothed moving average

The [smoothed moving average](/smoothed-moving-average/) (SMMA), also called Wilder's smoothing or the running moving average (RMA), is an EMA with a different multiplier: k = 1 / N instead of 2 / (N + 1). Welles Wilder used it inside RSI, ATR and ADX. A 14-period SMMA behaves like an EMA of about 27 periods (2 × 14 − 1). This is a common source of confusion: a "14-period" average can mean two quite different speeds depending on whose formula is used. When a platform setting says "RMA" or "SMMA", it is this slower line.

## Low-lag and adaptive averages

Since the basic averages all lag, many people have tried to build one that lags less. They fall into two groups. Low-lag averages use a fixed formula that cancels part of the delay. Adaptive averages change their own speed depending on the market.

Each one fixes something and costs something. The rule to keep in mind is simple: anything that reduces lag also lets more noise through, and anything that predicts where price "should" be will overshoot when it is wrong.

### Low-lag averages

**[DEMA](/dema/) (double exponential moving average).** Patrick Mulloy described DEMA and TEMA in Technical Analysis of Stocks & Commodities magazine in 1994. DEMA = 2 × EMA − EMA(EMA). The idea: an EMA lags price, and an EMA of the EMA lags the EMA by a similar amount. Take the difference, add it back, and much of the lag cancels. Despite the name, DEMA is not just "an EMA applied twice"; the subtraction is what makes it fast.

**[TEMA](/tema/) (triple exponential moving average).** TEMA = 3 × EMA1 − 3 × EMA2 + EMA3, where EMA2 is an EMA of EMA1 and EMA3 is an EMA of EMA2. It removes even more lag than DEMA, and lets through even more noise. With a full set of chained averages, it also needs more warm-up bars before the first value appears.

**[Hull moving average](/hull-moving-average/) (HMA).** Alan Hull published it in 2005. HMA = WMA(2 × WMA(n/2) − WMA(n), √n). In words: take a fast WMA of half the period, double it, subtract a full-period WMA (this projects forward and cancels lag), then smooth the result with a short WMA whose length is the square root of the period. The Hull average hugs price closely and turns quickly. It also overshoots at turns, because the "projection" step assumes the recent move will continue.

**[ZLEMA](/zlema/) (zero-lag EMA).** It feeds the EMA a de-lagged price: 2 × close − close from (N − 1) / 2 bars ago. The name oversells it. Lag is reduced, not removed, and the line is noisier than a normal EMA.

**[LSMA](/lsma/) (least squares moving average).** For each bar, fit a straight line through the last N closes and take the end point of that line. Because a straight line follows a trend, the end point sits close to current price in a steady trend. When price turns, the line still points the old way for a bar or two, so it overshoots.

**[ALMA](/alma/) (Arnaud Legoux moving average).** Arnaud Legoux and Dimitrios Kouzis-Loukas published it in 2009. It applies a bell-shaped (Gaussian) set of weights to the window, and lets you slide the peak of the bell towards recent bars with an offset setting. The default offset of 0.85 puts most weight near the recent end; a sigma setting controls how wide the bell is. It is smooth for its responsiveness, but it has three settings to tune, which brings its own risk (see the backtesting section).

**[T3](/t3-moving-average/).** Tim Tillson's T3 chains six EMAs and combines them with coefficients controlled by a "volume factor" (usually 0.7). It is very smooth and fairly responsive. Platforms differ on its default period. Its long chain of EMAs means it needs a lot of warm-up.

### Adaptive averages

**[KAMA](/kama/) (Kaufman adaptive moving average).** Perry Kaufman's KAMA measures how efficiently price is moving. The efficiency ratio (ER) = net change over the period / sum of the absolute bar-to-bar changes. If price moved 10 points in a straight line, ER = 1. If it went up and down for a total of 50 points of movement to get 10 points of net change, ER = 0.2. KAMA then sets its own smoothing between a fast and a slow EMA speed: fast when price trends cleanly, almost flat when price chops. The usual settings are 10 (ER period), 2 (fast) and 30 (slow). KAMA's flat stretches in ranges are its main appeal: fewer crossings in sideways markets.

**[McGinley Dynamic](/mcginley-dynamic/).** John McGinley's average speeds up when price runs away from it and slows when price is close. The formula adjusts by the ratio of price to the line raised to the fourth power, so a big gap makes it catch up hard. Platforms differ on a constant inside the formula (k = 1 in the original; some use 0.6, which is faster).

**[FRAMA](/frama/) (fractal adaptive moving average).** John Ehlers' FRAMA estimates a fractal dimension of recent price, a measure of how rough or smooth the path is, and turns that into a smoothing speed. Rough path: slow down. Smooth path: speed up.

**[MAMA](/mama/) (MESA adaptive moving average).** Also by Ehlers, it adapts using an estimate of the market's dominant cycle. It is plotted with a companion line called FAMA. The maths is heavier and results are sensitive to settings.

### Volume-weighted averages

**[VWMA](/vwma/) (volume-weighted moving average).** Each close is weighted by that bar's volume. VWMA = sum(close × volume) / sum(volume), over the last N bars. On a heavy-volume day, that close pulls the average towards it. If volume is flat, VWMA equals the SMA. The gap between a VWMA and an SMA of the same length tells you whether the high-volume bars were above or below the average. It is not the same as [VWAP](/vwap/), which is cumulative from a fixed start (usually the session open) and does not have a rolling window.

### What the fancy averages fix and what they cost

| Average | What it fixes | What it costs |
|---|---|---|
| DEMA, TEMA | Lag of the EMA | More noise, overshoot at turns, more warm-up |
| Hull | Lag, while staying fairly smooth | Overshoot at turns; can whip in ranges |
| ZLEMA | Lag of the EMA | Noisier than an EMA; name promises more than it delivers |
| LSMA | Lag in steady trends | Overshoots at turns |
| ALMA | Balance of smoothness and speed | Three settings to tune: more room to overfit |
| T3 | Very smooth for its speed | Long warm-up; defaults vary by platform |
| KAMA | Whipsaw in ranges (goes flat) | Slow to react when a quiet range breaks |
| McGinley | Average left behind by fast moves | Platform constants differ |
| FRAMA, MAMA | Fixed speed in changing markets | Complex; sensitive to settings; harder to check |
| VWMA | Ignores volume | Needs reliable volume (weak on spot forex tick volume) |

No average in this table is "better" in general. Each one suits a job. For a long, widely watched trend line, the plain SMA has the advantage that everyone sees the same thing. For a fast trailing line on an intraday chart, a Hull or EMA might fit better. For a market that spends a lot of time in ranges, KAMA's flat spells can help. The honest summary: the differences between averages matter far less than the period you choose and what you do with the signal.

## Choosing a period

The period is the setting that matters most. A 10-period EMA and a 10-period SMA are much more alike than a 10-period SMA and a 100-period SMA.

### Common periods and why they are common

| Period | Common use | Why it is common |
|---|---|---|
| 8, 9, 10 | Short-term trend; fast line in crossovers; intraday | Roughly two weeks of trading days; quick to react |
| 20, 21 | Swing trend; middle line of Bollinger Bands | About one month of trading days |
| 50 | Medium-term trend on daily charts | About one quarter of trading days; widely watched |
| 100 | Slower medium-term trend | Half a year, roughly |
| 200 | Long-term trend on daily charts | About one trading year (around 252 days) minus holidays; the best-known average |

Most of these numbers are conventions, not discoveries. A 50-day average is not special because 50 has a magic property. It is special, if at all, because many people watch it. That has a practical side: a level many traders watch can attract orders, which may make price react near it more often than near a random line. It also has a limit: once everyone watches the same line, any easy edge around it is likely to be competed away. There is no number in this table that has been shown to work better than its neighbours in a way you can rely on. A 48-day average and a 52-day average will look almost the same.

### Timeframe scaling

A "50" means different things on different charts. A 50-bar average on a daily chart covers about ten weeks. On an hourly chart of a market that trades around the clock, it covers about two days. On a 5-minute chart it covers just over four hours.

This gives a useful check. If you want the daily 50 on an hourly chart, you need roughly 50 × the number of hourly bars in a trading day. For a stock that trades 6.5 hours a day, that is around 325 hourly bars. For a crypto market that trades 24 hours, it is 1,200. It is rarely exactly the same line, because the hourly version averages every hourly close rather than one close a day, but it is close.

The same logic warns against copying settings across markets. "The 200-day" on a stock means 200 trading sessions, about ten months. On a crypto chart that trades every day, 200 daily bars is about six and a half months of calendar time. Same number, different span. See [moving averages on crypto](/answers/moving-averages-on-crypto-do-the-usual-periods-apply/) for more.

### A practical way to choose

1. **Start from the job.** What trend do you want to see? The trend of the last few weeks needs a 20-ish line on daily bars. The trend of the year needs a 200.
2. **Match it to your holding time.** A line that changes direction about as often as you want to change your mind is about right. If you hold trades for a few days, a 200-day line will almost never change during your trade, so it is context, not a signal.
3. **Check it on your market.** Look at a few years of chart. Does the line separate trending stretches from ranging ones in a way you can use? This is a visual check, not a test.
4. **Do not tune it to the past.** Picking the period that "worked best" on the last two years is the fastest way to fool yourself. More on this below.

## Reading trend with averages

The most reliable use of a moving average is the simplest one: as a summary of trend. There are three things to read.

### Slope

Is the average rising, falling or flat? A rising average means the average price of the window is going up. That is close to the definition of an uptrend. A flat average means price is going nowhere, whatever the bars look like up close.

Slope is more useful than position. Price can sit above a falling average for a few bars in a bounce. The slope tells you the bounce has not yet changed the bigger picture. Some traders measure slope directly, as the change in the average over the last few bars, divided by ATR so it compares across markets. A slope near zero is a warning that crossover signals will be poor.

### Price above or below

Price above a rising average is the classic description of an uptrend. Price below a falling average is a downtrend. Price weaving back and forth across a flat average is a range.

The distance matters too. Price far above an average is "stretched": the move has run a long way from its recent mean. That is not a sell signal; strong trends can stay stretched for a long time. It does mean that a pullback towards the average would be normal, and that a new entry at the extreme carries a wide stop if the stop sits on the other side of the average. The [disparity index](/disparity-index/) measures that stretch as a percentage.

### Stacking and ribbons

With two or more averages you can read their order. In a strong uptrend, the faster averages sit above the slower ones: 10 above 20 above 50 above 200. This is called "stacking" or "alignment". In a downtrend the order flips. In a range, the averages tangle together.

A [moving-average ribbon](/moving-average-ribbon/) plots many averages at once, often 6 to 15 lines at evenly spaced periods. When the ribbon is wide and fanned out in order, the trend is strong. When it narrows and the lines cross, the trend is weakening or a range is forming. The [Guppy Multiple Moving Average](/guppy-multiple-moving-average/), developed by Daryl Guppy, splits the lines into a short-term group (3, 5, 8, 10, 12 and 15) and a long-term group (30, 35, 40, 45, 50 and 60) and reads how the two groups relate: separation means agreement, compression means a possible change.

Ribbons are good at one thing: showing at a glance whether a market is trending or not. They add little that two averages do not already show, and they clutter the chart. See [how many moving averages to use](/answers/how-many-moving-averages-should-you-use-on-a-chart/).

### A worked trend reading

Suppose a daily chart shows a stock at 112. The 20-day EMA is 108 and rising. The 50-day SMA is 104 and rising. The 200-day SMA is 96 and rising slowly.

Reading: all three averages are rising and stacked in order (20 above 50 above 200), and price is above all of them. That is a textbook uptrend. Price is 4 points above the 20 EMA. If ATR is 2, price is two ATRs above the short average, which is stretched but not unusual in a strong trend. A pullback to 108 to 110 would not damage the trend. A close below the 50-day with the 20 turning down would be the first real sign of change.

Nothing in that reading says what price will do next. It says what kind of market you are in, which tells you which tools are likely to suit it.

## Crossovers

A crossover is the moment one line crosses another. It is the most common signal built from averages, and the one most often misused.

### Price crossing an average

The simplest rule: buy when price closes above the average, sell when it closes below. With a long average (say 200 days), this rule trades rarely and keeps you on the side of the big trend. With a short average (say 10 days), it trades often and gets caught in noise.

The weakness of price crosses is that price is noisy, so a single bar can cross and cross back. Common fixes: require a close (not just an intraday poke) beyond the line, require two closes in a row, or require the close to be a set distance beyond the line, such as a fraction of ATR. Each fix cuts false signals and also makes the real ones later.

### Two-average crossovers

A [moving-average crossover](/moving-average-crossover/) uses a fast and a slow average. A bullish cross is when the fast average crosses above the slow one. A bearish cross is the reverse. Common pairs are 9/21 and 10/20 for short-term charts, 20/50 for swing trading, and 50/200 for the long term.

Two-average crosses are smoother than price crosses, because both lines are already smoothed. They are also later. By the time a 20-day average has crossed a 50-day one, price has usually moved a long way from the turn. That is the price you pay for fewer false signals.

**Worked example.** A stock has been falling. The 20-day SMA is at 47.80 and the 50-day SMA is at 48.20. Over the next week price rises from 47 to 51. The 20-day SMA rises to 48.40 and the 50-day to 48.30. The cross has happened: the 20 is now above the 50. But price is at 51, well above both lines and about 4 points above the low. A trader who acts on the cross enters near 51, and a stop below the 50-day sits near 48. If ATR is 1, that stop is 3 ATRs away. The cross gave a clear signal, but a late one with a wide stop. This is normal for crossovers.

### Golden cross and death cross

The [golden cross](/golden-cross/) is the 50-day average crossing above the 200-day. The [death cross](/death-cross/) is the 50-day crossing below the 200-day. Both names come from financial journalism and have stuck because they sound dramatic. On a daily chart they are slow, rare signals, often occurring weeks or months after the turn they describe.

They get a lot of attention because the 50 and 200 are so widely watched. Their record is mixed. Some major turns came with a cross; many crosses happened near the end of a move, not the start, and many were reversed within weeks. See [what a golden cross is](/answers/what-is-a-golden-cross/) and [whether the death cross is bearish](/answers/what-is-a-death-cross-and-is-it-bearish/).

### Whipsaw: the main cost of crossovers

A whipsaw is a signal that reverses soon after it fires, usually for a loss. In a range, a fast and a slow average twist around each other. Each cross triggers an entry, and each reversal hits the stop or triggers the opposite signal. A series of small losses builds up.

Whipsaw is not a flaw that a better average can remove. It is built into the idea. A crossover system is betting that trends will be large enough, when they come, to pay for all the small losses in between. In markets that trend a lot, that bet can work out. In markets that range a lot, it often does not. Most of the work in a crossover strategy is in deciding when not to take the signal: for example, only when the slow average has a clear slope, or when [ADX](/adx/) shows a trend, or when price has broken out of a range.

The academic study most often cited on simple average rules is Brock, Lakonishok and LeBaron (1992), "Simple Technical Trading Rules and the Stochastic Properties of Stock Returns", in the Journal of Finance. They tested moving-average and range-break rules on a long history of the Dow Jones Industrial Average and reported that the rules' signals were followed by different returns than chance would suggest in that sample. Later work, notably Sullivan, Timmermann and White (1999) in the Journal of Finance, showed that when you account for the many rules that could have been tried (data snooping), the evidence becomes weaker, and the apparent edge in that data did not hold up well in the years after the original sample. That is the honest state of things: some historical support, a strong warning about testing many rules on one history, and no case for assuming a crossover will work on your market today.

## Moving averages as dynamic support and resistance

In a trend, pullbacks often stall near a moving average and then resume. Traders call this "dynamic" support (in an uptrend) or resistance (in a downtrend), because the level moves with each bar, unlike a horizontal [support and resistance](/support-and-resistance/) line.

Why might it happen? Partly because a moving average tracks the middle of a trend, and a pullback to the middle of a trend is an ordinary event. Partly because the well-known averages, especially the 20, 50 and 200, are watched by many traders, so orders may cluster around them. Neither reason makes the average a wall. It is a zone where a reaction is more plausible than elsewhere.

How traders use it:

1. **Confirm the trend first.** Dynamic support only makes sense when the average is sloping. A flat average is not support; price will cross it freely.
2. **Treat the line as a zone.** Price often overshoots an average by a little before turning. Many traders treat a band of, say, half an ATR either side as the zone.
3. **Wait for a reaction.** A touch is not a signal. A bullish bar or a reclaim of the average after a dip below it is more useful. See [pullback trading](/pullback-trading/).
4. **Put the stop beyond the zone, not on the line.** A stop exactly at the average will be hit by normal overshoots.
5. **Expect the line to fail eventually.** Every trend ends, and it usually ends with price going through the average it had respected.

The trap with dynamic support is hindsight. Looking back at a strong trend, you can always find an average that price "respected". Try enough periods and one will fit. That does not mean the market respected that line; it means you chose the line that fits. Pick your average before you look, and use a common one. See [how to use moving averages as support and resistance](/answers/how-do-you-use-moving-averages-as-support-and-resistance/).

## Envelopes, bands and channels built on averages

Many volatility tools take a moving average as the centre line and add bands around it. The average says where the middle is; the bands say how far is "far".

| Tool | Centre line | Band width |
|---|---|---|
| [Moving-average envelope](/moving-average-envelope/) | SMA or EMA | A fixed percentage above and below (for example 2.5%) |
| [Bollinger Bands](/bollinger-bands/) | 20 SMA | 2 standard deviations of closes |
| [Keltner Channels](/keltner-channels/) | EMA (often 20) | A multiple of ATR (versions differ) |
| [STARC Bands](/starc-bands/) | SMA | A multiple of ATR |
| [VWAP bands](/vwap-bands/) | VWAP | Standard deviations from VWAP |

The envelope is the oldest and simplest. Its weakness is that a fixed percentage ignores volatility: 2.5% is a wide band for a slow-moving bond fund and a narrow one for a volatile small stock. Bollinger and Keltner fix this by sizing the bands to recent volatility, so they widen in fast markets and narrow in quiet ones.

Two readings, which point in opposite directions, apply to all of these:

- **In a range,** a move to a band is often read as stretched, with a return towards the average as the expected path. That is a [mean-reversion](/mean-reversion/) idea.
- **In a trend,** price can "walk the band", closing near or beyond it bar after bar. A break outside a band after a tight squeeze is read as the start of a move, not a reason to fade it.

Which reading applies depends on the market state, which is exactly what the slope of the centre average helps you judge.

## Combining with oscillators and levels

A moving average tells you direction and rough position. It says little about momentum, and nothing about specific price levels. Combining it with tools that do these things is common, but there is a trap: many indicators are built from the same closes and the same averages, so they agree with each other for reasons that have nothing to do with the market.

### Averages with oscillators

A common pattern is: use an average for direction, and an oscillator for timing. For example, in an uptrend defined by a rising 50-day average, look for long entries when [RSI](/rsi/) or the [stochastic](/stochastic-oscillator/) dips to the low end of its range and turns up. The average says "trend is up"; the oscillator says "this pullback looks finished".

This is sensible as a structure. It keeps the oscillator from fighting the trend, which is where oscillators do worst. What it does not do is double your evidence. RSI and a moving average both summarise recent closes. When the average rises, RSI is usually high, because both are measuring the same up-move. Two indicators agreeing is not two independent witnesses.

[MACD](/macd/) is itself built from averages: the 12-period EMA minus the 26-period EMA, with a 9-period EMA of that difference as the signal line. A MACD signal-line cross is a close relative of an average crossover. Putting MACD next to a 12/26 EMA cross adds almost nothing.

### Averages with levels

Averages and horizontal levels are more independent. A [key level](/key-levels/) comes from where price turned before; an average comes from the mean of recent prices. When a rising 50-day average sits right on a prior breakout level, the zone has two different reasons to matter. Traders call this [confluence](/confluence/). It still promises nothing, but it is a better kind of agreement than two oscillators.

Averages also combine well with [multiple time frame analysis](/multiple-time-frame-analysis/). A common approach is to use a long average on a higher timeframe to set the direction (for example, the daily 50 rising), and a shorter average on a lower timeframe for entries. The higher-timeframe average acts as a filter: it tells you which signals on the lower chart to ignore.

### A worked example in R

A trader uses a rising daily 50 SMA as a trend filter and buys pullbacks to the 20 EMA that end with a bullish close.

- Daily 50 SMA: 82, rising. Price: 88. Trend filter passes.
- Price pulls back to the 20 EMA at 85.50, dips to 85.10, then closes at 86.20.
- Entry: 86.20 at the next open (assume 86.20).
- Stop: below the pullback low and the zone, at 84.70. Risk per share = 1.50. That is 1R.
- First target: the prior high at 89.20. Reward = 3.00, which is 2R.

If the trade is stopped, the loss is 1R plus costs. If it reaches the target, the gain is 2R minus costs. Nothing about the averages tells you how often each will happen. They only gave a structure: a direction, an area to watch and a place where the idea is clearly wrong. See [risk-reward ratio](/risk-reward-ratio/) and [position sizing](/position-sizing/).

## Backtesting averages without fooling yourself

Moving-average rules are among the easiest things to backtest. That is part of the problem: it is very easy to test hundreds of combinations and believe the best one. Here are the main traps, and how we handle them in our own [testing rules](/methods/).

### Warm-up bars

An average needs history before it means anything. An SMA has no value until it has N bars. An EMA has a value from its seed onwards, but that value depends on the seed until enough bars have passed. Chained averages need more: a TEMA needs about 3N bars before its first value, and a T3 much more.

If a backtest starts trading on bar 1, its early signals use averages that are not yet valid. The fix is to drop the warm-up period from the test: compute averages from the start of the data, but only allow trades once each average has had several times its period in bars. For a 200 EMA, that can mean ignoring the first few hundred bars.

### Look-ahead

Look-ahead means a test uses information that was not available at the time of the trade. With averages, it creeps in quietly:

- **Using the close that completes the signal as the fill price.** If a crossover is only known at the close, you cannot have bought at that close in most cases. A fair test fills at the next bar's open.
- **Centred or displaced averages.** A centred average places each value in the middle of its window, which means it uses future bars. Some charting tools offer a negative offset that does the same thing. These lines look wonderful in hindsight and cannot be traded. See [what a displaced moving average is](/answers/what-is-a-displaced-moving-average/).
- **Adjusted data.** Back-adjusted futures and dividend-adjusted stock prices change past values. Averages on them are fine for analysis, but levels drawn from them will not match what was on the screen at the time.

### Optimisation overfit

This is the biggest trap. Test every fast period from 5 to 50 and every slow period from 20 to 250, and one pair will look excellent on your data. It will look excellent mostly because of luck: you tried enough combinations that one was bound to fit the noise in that history.

How to reduce it:

1. **Decide the rule before testing.** Use common settings, written down in advance.
2. **Keep a holdout.** Set aside a period of data you do not look at until the end. Test once on it.
3. **Look for a plateau, not a peak.** If 20/50 does well but 19/50 and 22/55 do badly, the result is fragile. A real effect should survive small changes.
4. **Count the tests.** If you tried 200 combinations, the best one will look good by chance. The Sullivan, Timmermann and White work mentioned above is about exactly this.
5. **Include costs.** Fast crossover systems trade a lot, and spread and commission can turn a small gross edge into a net loss.
6. **Compare with a baseline.** Does the rule beat random entries in the same market and months, or does it just capture the market's drift? Our [methods page](/methods/) describes the random baseline we use.

Our verdict on backtests of averages: treat any single "best setting" with suspicion, especially if it was chosen on the same data that shows it working. A simple, common average that does modestly across many markets is more believable than a tuned one that does brilliantly on one.

## Common platform differences

When our code had to calculate these averages, it had to choose between versions that different platforms use. These are the choices that most often make two charts disagree. None of them is "wrong"; they are different conventions. The point of the table is to tell you where to look when numbers do not match.

| Average | Where versions differ | Our code's choice | What to check on your platform |
|---|---|---|---|
| EMA | Seed: SMA of first N closes, or the first close | SMA seed; first value on bar N | How much history is loaded; whether early values look "pulled" to one bar |
| SMMA / RMA | Seed, and whether a "14" is called SMMA, RMA or Wilder | SMA seed; k = 1/N | That the setting is not an EMA of 14 labelled loosely |
| DEMA, TEMA | Each inner EMA's seed; when the first value appears | SMA-seeded EMAs; first value on bar 2N − 1 (DEMA) and 3N − 2 (TEMA) | Early values only; the lines converge later |
| ZLEMA | The lag term (N − 1) / 2 when N is even | Rounded down (9 for a 20-period) | Whether the platform rounds up instead |
| T3 | Default period (5 or 8 are both used); volume factor | Period 5, factor 0.7 | The default before comparing |
| KAMA | Which bar seeds the line | The close just before the first efficiency ratio | Early values only |
| McGinley | The constant k (1 in the original; some use 0.6) | k = 1 | The constant; 0.6 makes a faster line |
| VWMA | Which volume is used (exchange volume or tick volume) | The volume in the data feed | Spot forex usually has tick volume only |
| Any average | Daily close time (forex and crypto) | The close in the data feed | The platform's session or time-zone setting |

Two habits save most of the confusion. First, when you compare a value with someone else's chart, compare it after a long warm-up, not on the first bars. Second, check the daily close time on any market that trades around the clock. Most "my average is wrong" questions turn out to be one of these two.

## Averages as exits

Averages are often more useful for getting out of a trade than for getting in. An entry signal from an average is late by design. An exit from an average is also late, but that is less of a problem: the job of a trailing exit is to stay in a trend until it clearly ends, and "clearly" always means "after a delay".

The simplest version: hold a long trade while price closes above a chosen average, and exit on the first close below it. A slower average gives more room and holds longer, at the cost of handing back more profit at the end. A faster average exits sooner, at the cost of being shaken out by ordinary pullbacks. See [moving-average exit](/moving-average-exit/) and [trailing stop](/trailing-stop/).

**Worked example.** A trader is long from 40 with a stop at 38, so 1R = 2. Price runs to 50. The 20 EMA is at 47. If the trader exits on a close below the 20 EMA and price closes at 46.80, the exit is near 46.80: a gain of 6.80, or 3.4R. A 50-day exit at, say, 44 would have given back more (2R gained) but would have stayed in if the pullback had only been a pause. Neither choice is right in general. The average just turns a vague idea ("get out when the trend ends") into a rule you can follow and test.

Three practical points:

1. **Use closes, not touches.** An exit on any intraday touch of the average will fire far more often than an exit on a close.
2. **Combine with a hard stop at the start.** Early in a trade, the average may be far below entry. A fixed initial stop caps the first loss; the average takes over once it has risen past that stop.
3. **Match the average to the trend you are trying to ride.** A trade based on a weekly breakout and managed with a 9 EMA on hourly bars is two different plans at once.

## Which average for which job

To bring the guide together, here is a plain summary of how the types tend to be used. It is a description of common practice, not a recommendation.

| Job | Common choice | Why |
|---|---|---|
| Long-term trend context | 200-day SMA | Widely watched; same on every platform |
| Medium-term trend | 50-day SMA or EMA | Common reference; used in the golden and death cross |
| Swing trend and pullbacks | 20 or 21 EMA | Responsive; often near pullback lows in steady trends |
| Short-term timing | 8 or 9 EMA, Hull | Hugs price closely |
| Ranging markets | KAMA | Flattens when price chops |
| Volume-aware trend | VWMA | Shows where heavy volume traded |
| Trailing exit | 10 to 50 EMA or SMA, by holding time | Turns "trend ended" into a rule |

## Common mistakes

- **Treating an average as a forecast.** It summarises the past. A rising average says the recent past was up, nothing more.
- **Using crossovers in ranges.** Most crossover losses come from sideways markets. Check slope or a trend filter first.
- **Changing the period after each loss.** This is optimisation by hand, with the same overfitting problem as a computer search.
- **Comparing averages across platforms without checking the type and seed.** A "14" on one platform can be an EMA, an SMA or an SMMA, with different seeds and data.
- **Ignoring warm-up.** A 200 EMA on a chart with 250 bars of history is still settling.
- **Stacking indicators built from the same averages.** MACD, an EMA cross and a ribbon all repeat the same information.
- **Placing stops exactly on the average.** Normal overshoots will hit them. Use a zone.
- **Using a negative offset (or centred average) in a backtest.** It uses future bars.
- **Copying settings across timeframes or markets.** A 200 on a 5-minute chart is about 17 hours of trading, not the long-term trend.
- **Expecting a better average to fix a bad rule.** Switching from an SMA to a Hull rarely turns a losing approach into a winning one. The rule and the market matter far more.

## Comparison table

| Type | Weighting | Lag (same period) | Noise | Typical use |
|---|---|---|---|---|
| [SMA](/simple-moving-average/) | Equal across the window | High | Low (but jumpy on drop-off) | Long, widely watched trend lines (50, 200) |
| [WMA](/weighted-moving-average/) | Linear, newest highest | Medium | Medium | Faster trend line; building block of Hull |
| [EMA](/exponential-moving-average/) | Exponential, never fully forgets | Medium | Medium | Short and swing trend lines; MACD |
| [SMMA / RMA](/smoothed-moving-average/) | Exponential with k = 1/N | High (like EMA of 2N − 1) | Low | Inside RSI, ATR, ADX; slow trend line |
| [DEMA](/dema/) / [TEMA](/tema/) | Combined EMAs to cancel lag | Low | High | Fast trend lines; short-term timing |
| [Hull](/hull-moving-average/) | WMAs combined, then smoothed | Low | Medium | Responsive trend line; turns |
| [ZLEMA](/zlema/) | EMA of a de-lagged price | Low | High | Fast trend line |
| [LSMA](/lsma/) | Line fit end point | Low in trends | Medium | Trend end point; overshoots at turns |
| [ALMA](/alma/) | Gaussian, shifted to recent | Low to medium | Low | Smooth but responsive line |
| [T3](/t3-moving-average/) | Six chained EMAs | Low to medium | Low | Smooth trend line |
| [KAMA](/kama/) | Adaptive by efficiency ratio | Varies | Low in ranges | Trend line that goes flat in chop |
| [McGinley](/mcginley-dynamic/) | Adaptive by distance to price | Varies | Low | Trend line that catches fast moves |
| [FRAMA](/frama/) / [MAMA](/mama/) | Adaptive by fractal or cycle | Varies | Varies | Experimental adaptive lines |
| [VWMA](/vwma/) | By volume | Medium | Medium | Trend line that weights heavy-volume bars |

Lag and noise here are rough rankings for the same period length, not measurements. The [lag answer](/answers/which-moving-average-has-the-least-lag/) explains why "least lag" is a slippery claim.

## FAQ

**What is the best moving average?**
There is no single best one. The SMA is the most widely watched for long trend lines; the EMA is the most common for shorter ones. The period you choose and how you use the signal matter far more than the type. Pick one, learn how it behaves on your market, and stop switching.

**Is the EMA better than the SMA?**
The EMA reacts faster to recent prices and has no drop-off effect. The SMA is smoother, simpler and identical on every platform once its window is full. Neither is better in general. See [SMA vs EMA](/answers/sma-vs-ema-which-is-better/) for a side-by-side comparison.

**What moving average do most traders use?**
The 50-day and 200-day simple averages are the most widely quoted on daily charts. On shorter charts, the 9, 20 and 21 EMAs are common. Popularity is not evidence that they work better, but it does mean many traders are watching the same lines.

**Do moving averages work?**
They work well as a summary of trend and as trailing exits. As signal generators, especially crossovers, they lose money in sideways markets and give late entries in trends. Whether a given rule has an edge after costs is something to test with fixed rules and a holdout, not assume.

**Why is my moving average different from someone else's?**
Usually because of the average type (EMA, SMA or SMMA), the seed used for the first EMA value, the amount of history loaded, or different price data (especially the daily close time in forex and crypto). Check all four before assuming either chart is wrong.

**How long does a moving average take to become reliable?**
An SMA is exact as soon as it has N bars. An EMA depends on its seed until it has had several times N bars; a common rule of thumb is three to four times N. Chained averages such as TEMA and T3 need more.

## Sources

- John J. Murphy, Technical Analysis of the Financial Markets (New York Institute of Finance, 1999): standard treatment of simple, weighted and exponential averages, crossovers and envelopes.
- J. Welles Wilder Jr., New Concepts in Technical Trading Systems (1978): the smoothing method used in RSI, ATR and ADX.
- Perry J. Kaufman, Trading Systems and Methods (Wiley, several editions): moving-average types, the efficiency ratio and adaptive averages.
- Patrick Mulloy, articles on DEMA and TEMA in Technical Analysis of Stocks & Commodities (1994).
- Alan Hull, the Hull moving average (2005), as published on his website.
- William Brock, Josef Lakonishok and Blake LeBaron, "Simple Technical Trading Rules and the Stochastic Properties of Stock Returns", Journal of Finance (1992).
- Ryan Sullivan, Allan Timmermann and Halbert White, "Data-Snooping, Technical Trading Rule Performance, and the Bootstrap", Journal of Finance (1999).
- Our own indicator code, for the EMA seeding and warm-up choices described in this guide.
