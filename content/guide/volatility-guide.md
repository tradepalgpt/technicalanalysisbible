---
slug: volatility-guide
title: "Volatility: the complete guide for traders"
description: How volatility is measured with ATR, standard deviation and bands, how squeezes work, and how to size and stop trades in R across calm and wild markets.
query: volatility trading
publish: 2027-12-13
reviewed: 17 November 2026
cluster: [atr, standard-deviation, historical-volatility, implied-volatility, vix, bollinger-bands, bollinger-band-width, bollinger-squeeze, keltner-channels, donchian-channels, ttm-squeeze, normalized-atr, chandelier-exit, atr-stop, volatility-stop, position-sizing]
value: [table, example, verdict]
chart: atr
---

Volatility is how much price moves. Some days a share barely shifts. Other days it swings by several per cent before lunch. A currency pair can drift for hours, then jump on a news release. Every trader deals with this, whether they measure it or not.

Most traders meet volatility first as a problem. A stop that worked last month gets hit by noise this month. A target that looked modest is suddenly far away, or reached in minutes. A position size that felt comfortable on a quiet market feels reckless on a wild one. Measuring volatility turns these surprises into numbers you can plan around.

This guide covers the subject in one place. It starts with what volatility is and two facts about how it behaves. It then works through the main tools: [average true range](/atr/), [standard deviation](/standard-deviation/) and [historical volatility](/historical-volatility/), [Bollinger Bands](/bollinger-bands/), [Keltner channels](/keltner-channels/) and [Donchian channels](/donchian-channels/). It covers squeezes, implied volatility and the [VIX](/vix/), position sizing, stops and targets in R, volatility regimes, how volatility differs across markets and sessions, and how to test volatility tools honestly. It ends with common mistakes, a comparison table and an FAQ.

The short version, before the detail: volatility tools measure how far price tends to move. They do not tell you which way it will move. That one point explains most of what they are good for, and most of the ways traders misuse them. Volatility is very useful for sizing positions and placing stops. It is much weaker as a signal to buy or sell.

We have not run a volatility backtest of our own, so this guide contains no test results of ours. It contains standard, published definitions, worked calculations you can check with a calculator, and honest verdicts on each tool. Where a number comes from a choice we made for an example, we say so. Nothing here is a recommendation to buy or sell anything.

## 1. What volatility is

### The plain idea

Volatility is the size of price changes, ignoring their direction. A market that moves 2% up one day and 2% down the next is volatile, even though it ended where it started. A market that rises 0.1% every day for a month is not very volatile, even though it went a long way.

That last point matters. Volatility and trend are different things. A strong, smooth trend can have low volatility. A choppy market going nowhere can have high volatility. Traders who mix the two up make the mistakes in section 13.

### Ways to measure it

There is no single "volatility". There are several measures, and each answers a slightly different question.

- **Range.** The distance from a bar's high to its low. Simple and visible on any chart.
- **True range.** The range, stretched to include any gap from the previous close. This is the building block of ATR (section 2).
- **Standard deviation.** How spread out a set of numbers is around their average. Applied to prices or to returns (section 3).
- **Historical volatility.** The standard deviation of past returns, usually scaled to a year. It is backward-looking: it says what happened.
- **Implied volatility.** The volatility that option prices suggest the market expects. It is forward-looking, in the sense that it reflects current prices for future uncertainty (section 7).

Range and true range are in price units: pence, dollars, pips, points. Standard deviation of returns and historical volatility are in percentages. Keep the unit in mind. A 2.50 ATR means nothing until you know whether price is 25 or 2,500.

### Historical versus implied

Historical volatility looks back at prices that have already printed. Implied volatility is worked out from option prices today. The first is a fact about the past. The second is a price, set by people buying and selling protection against future moves.

The two often differ. Implied volatility tends to rise sharply before known events, such as earnings or central bank meetings, and fall once the event has passed. Historical volatility only rises after the big moves have actually happened. Section 7 covers this in more depth.

### Volatility clusters

The first well-known fact about volatility is that it clusters. Big moves tend to be followed by more big moves, and quiet days tend to be followed by more quiet days. Benoit Mandelbrot described this in cotton prices in 1963. It is one of the most widely reported features of financial prices, across shares, currencies, commodities and indices.

Clustering is why volatility tools work at all for planning. If yesterday's ATR told you nothing about tomorrow's range, there would be no point using it to set a stop. Because volatility clusters, recent volatility is a reasonable first guess for near-term volatility. Robert Engle's ARCH model (1982) and Tim Bollerslev's GARCH model (1986) were built to capture exactly this. You do not need either model to trade. You only need to know that the effect exists, and that it is the reason recent volatility is useful.

### Volatility mean-reverts

The second fact is that volatility tends to drift back towards a longer-run average. Very calm periods do not last for ever. Very wild periods calm down. This is called mean reversion.

Mean reversion is slow and irregular. A calm period can last far longer than anyone expects, and a wild period can get wilder before it calms. "Volatility is low, so it must rise soon" is a reasonable general idea, but a poor timing tool. Section 6 returns to this, because it sits under the whole idea of the squeeze.

### What volatility does not tell you

Volatility says how big moves have been. It does not say which way the next move will go. A high ATR does not mean price will fall. A low ATR does not mean it will rise. When a volatility tool seems to give a direction, that direction almost always comes from something else: a moving average inside the tool, a breakout rule, or the trader's own reading of the chart.

That is not a weakness to hide. It is the main thing to understand. Volatility tools are best at answering "how far?" and "how much?", not "which way?".

## 2. Average true range

[Average true range](/atr/) (ATR) is the most used volatility measure in technical trading. J. Welles Wilder introduced it in his 1978 book *New Concepts in Technical Trading Systems*, in the same book as RSI and the parabolic SAR.

### True range

A bar's simple range is its high minus its low. That misses gaps. If a share closes at 100 and opens the next day at 104, the overnight jump is part of how far price moved, but the next bar's high minus low might only be 1.

Wilder's true range fixes this. It is the largest of three numbers:

1. Today's high minus today's low.
2. The gap between today's high and yesterday's close, ignoring sign.
3. The gap between today's low and yesterday's close, ignoring sign.

> True range = the largest of (high − low), |high − previous close|, |low − previous close|

The vertical bars mean "ignore the sign". On a bar with no gap, true range equals the simple range. On a bar that gaps, it stretches to include the gap.

### Wilder's smoothing

ATR is an average of true range. Wilder used 14 bars as his default. He did not use a simple average. He used his own smoothing method:

> First ATR = simple average of the first n true ranges
>
> Next ATR = (previous ATR × (n − 1) + today's true range) ÷ n

This is a kind of exponential average. Each new true range gets a weight of 1 ÷ n. Older true ranges fade away gradually but never vanish completely. Wilder's smoothing is slower than a standard exponential moving average of the same length: a 14-bar Wilder average behaves like a 27-bar standard EMA.

Platforms differ here. Some let you pick a simple, exponential or Wilder average for ATR. If your ATR does not match someone else's, check the smoothing method and the starting point first. A different start gives slightly different values for a long time afterwards, though the gap shrinks with each bar.

### Worked ATR calculation

The numbers below are made up for the example. To keep it short we use a 5-bar ATR instead of Wilder's 14. The method is the same.

| Bar | High | Low | Close | High − low | \|High − prev close\| | \|Low − prev close\| | True range |
|---|---|---|---|---|---|---|---|
| 1 | 102.0 | 100.0 | 101.5 | 2.0 | – | – | 2.0 |
| 2 | 103.5 | 101.0 | 103.0 | 2.5 | 2.0 | 0.5 | 2.5 |
| 3 | 104.0 | 102.5 | 103.0 | 1.5 | 1.0 | 0.5 | 1.5 |
| 4 | 103.0 | 100.5 | 101.0 | 2.5 | 0.0 | 2.5 | 2.5 |
| 5 | 105.5 | 103.0 | 105.0 | 2.5 | 4.5 | 2.0 | 4.5 |
| 6 | 106.0 | 104.0 | 104.5 | 2.0 | 1.0 | 1.0 | 2.0 |
| 7 | 104.5 | 101.5 | 102.0 | 3.0 | 0.0 | 3.0 | 3.0 |

Bar 1 has no previous close, so its true range is simply its range. Bar 5 is the interesting one. Its own range is only 2.5, but it opened well above bar 4's close of 101.0. Its high of 105.5 is 4.5 above that close, so its true range is 4.5. The gap counts.

Now the ATR:

- First 5-bar ATR (at bar 5) = (2.0 + 2.5 + 1.5 + 2.5 + 4.5) ÷ 5 = 13.0 ÷ 5 = **2.60**
- ATR at bar 6 = (2.60 × 4 + 2.0) ÷ 5 = 12.40 ÷ 5 = **2.48**
- ATR at bar 7 = (2.48 × 4 + 3.0) ÷ 5 = 12.92 ÷ 5 = **2.584**

Bar 6 had a smaller true range than the average, so ATR fell. Bar 7 had a larger one, so ATR rose. That is all ATR does: it tracks the typical bar size, gaps included.

### ATR as a percentage of price

ATR is in price units. That makes it hard to compare across markets. An ATR of 2.58 on a share priced at 102 is very different from an ATR of 2.58 on a share priced at 2,000.

The fix is to divide ATR by price. Some platforms call this [normalised ATR](/normalized-atr/) (NATR).

> ATR % = ATR ÷ close × 100

In the example, at bar 6: 2.48 ÷ 104.5 × 100 = **2.37%**. At bar 7: 2.584 ÷ 102.0 × 100 = **2.53%**.

ATR % lets you compare a cheap share with an expensive one, or the same share now with the same share ten years ago at a very different price. It is also the natural input to a volatility filter (section 10).

### What a "good" ATR is

There is no good or bad ATR. ATR is a measurement, like a thermometer reading. A high ATR is good news for someone hoping for big moves and bad news for someone wanting tight stops. What matters is ATR compared with something: the same market's own history, a stop distance, a target, or another market.

### Verdict on ATR

ATR is simple, robust and hard to misuse as a measurement. Its main uses are stops, targets and position sizing. Its main weakness is that it lags: a 14-bar ATR takes days to catch up after a sudden change in conditions. It also gives no direction. As a sizing and stop tool it is one of the most useful numbers on a chart. As a buy or sell signal on its own, it has no standard published use.

## 3. Standard deviation and historical volatility

### Standard deviation in plain words

[Standard deviation](/standard-deviation/) measures how spread out a set of numbers is around their average. If every number is the same, the standard deviation is zero. The more the numbers scatter, the larger it gets.

> Standard deviation = square root of (the average of the squared distances from the mean)

That is the "population" version, which divides by the number of values. The "sample" version divides by one less than the number of values, which gives a slightly larger answer. Bollinger Bands use the population version. Statistics software often defaults to the sample version. This is a common reason two tools give different numbers from the same data.

### Worked calculation on prices

Take five closes, made up for the example: 100, 102, 101, 104, 103.

1. Mean = (100 + 102 + 101 + 104 + 103) ÷ 5 = 510 ÷ 5 = **102**
2. Distances from the mean: −2, 0, −1, +2, +1
3. Squared distances: 4, 0, 1, 4, 1. Sum = 10
4. Population variance = 10 ÷ 5 = 2. Population standard deviation = √2 = **1.414**
5. Sample variance = 10 ÷ 4 = 2.5. Sample standard deviation = √2.5 = **1.581**

The two versions differ by about 12% here, because there are only five values. With 20 or more values the gap is much smaller, but it never disappears.

### Historical volatility: standard deviation of returns

Standard deviation of prices is what Bollinger Bands use. [Historical volatility](/historical-volatility/) uses something different: the standard deviation of returns, meaning the percentage changes from one close to the next.

Most definitions use log returns, which are the natural logarithm of today's close divided by yesterday's. For small moves, a log return is almost the same as the simple percentage change.

Using the same five closes:

| From | To | Log return |
|---|---|---|
| 100 | 102 | +1.980% |
| 102 | 101 | −0.985% |
| 101 | 104 | +2.927% |
| 104 | 103 | −0.966% |

The sample standard deviation of those four returns is **2.017%**. That is the daily historical volatility of this tiny sample.

### Annualising

Daily volatility is usually scaled to a yearly figure so that markets and timeframes can be compared. The standard method multiplies by the square root of the number of trading periods in a year. For daily stock data, 252 trading days is the common convention.

> Annual volatility = daily volatility × √252

In the example: 2.017% × √252 = 2.017% × 15.87 = **32.0%** a year.

Another example: a daily standard deviation of 1.2% becomes 1.2% × 15.87 = **19.0%** a year.

The square root rule assumes that each day's return is independent of the others. Section 1 said volatility clusters, which breaks that assumption a little. The scaled number is a convention, useful for comparison, not an exact forecast of next year's range. Markets that trade every day, such as crypto, often use 365 instead of 252. Check which convention a source uses before comparing numbers.

### What standard deviation does and does not say

If returns followed a normal (bell-shaped) distribution, about 68% of returns would land within one standard deviation of the mean, and about 95% within two. Real market returns do not follow that shape well. They have "fat tails": very large moves happen much more often than a bell curve suggests. Mandelbrot made this point in the same 1963 work on cotton.

So treat "two standard deviations" as "a large move by this market's recent standards", not as "a 5% chance". A two standard deviation move can happen several times in a month during a stressed market.

Standard deviation also treats up moves and down moves the same. A share that jumps 10% on good news adds just as much to its volatility as one that falls 10%. That is fine for measuring movement, but it is not the same thing as risk of loss. The [Ulcer Index](/ulcer-index/) is one measure that looks only at falls from a peak, for those who want that view.

### ATR versus standard deviation

Both measure how much price moves. They differ in method and in what they react to.

| | ATR | Standard deviation of closes |
|---|---|---|
| Input | High, low, previous close | Closes only |
| Sees intrabar moves | Yes | No |
| Sees gaps | Yes, through true range | Only as a change in close |
| Unit | Price | Price (or % if on returns) |
| Effect of one huge bar | Damped by Wilder smoothing | Squared, so it weighs heavily |
| Typical use | Stops, sizing, Keltner channels | Bollinger Bands, historical volatility |

Neither is better in general. ATR is closer to "how far does a bar usually travel?". Standard deviation of closes is closer to "how far do closes scatter around their average?". A market can have a large ATR but small standard deviation of closes if it swings wildly within bars but closes near the same place each day.

## 4. Bollinger Bands

[Bollinger Bands](/bollinger-bands/) were developed by John Bollinger in the 1980s. His book *Bollinger on Bollinger Bands* (2001) sets out the full method. They are among the most widely used indicators in charting software.

### Construction

Bollinger Bands have three lines:

- **Middle band:** a 20-period simple moving average of the close.
- **Upper band:** the middle band plus 2 standard deviations of the same 20 closes.
- **Lower band:** the middle band minus 2 standard deviations.

The standard deviation is the population version (section 3). The default settings are 20 periods and 2 standard deviations. Bollinger suggested adjusting the multiplier with the length: around 1.9 for a 10-period band and 2.1 for a 50-period band.

Because the bands are built from standard deviation, they widen when closes scatter and narrow when closes bunch together. That is the whole point. Fixed-width bands, such as a [moving average envelope](/moving-average-envelope/), do not do this.

### Worked calculation

To keep the arithmetic short, use the same five closes from section 3 and pretend the band length is 5. The method is identical for 20.

- Middle band = mean of 100, 102, 101, 104, 103 = **102.00**
- Population standard deviation = **1.414**
- Upper band = 102 + 2 × 1.414 = **104.83**
- Lower band = 102 − 2 × 1.414 = **99.17**

The last close, 103, sits between the middle and upper bands.

### %B

%B shows where the close sits inside the bands, as a number.

> %B = (close − lower band) ÷ (upper band − lower band)

- %B of 1 means the close is on the upper band.
- %B of 0 means the close is on the lower band.
- %B of 0.5 means the close is on the middle band.
- Above 1 or below 0 means the close is outside the bands.

In the example: (103 − 99.17) ÷ (104.83 − 99.17) = 3.83 ÷ 5.66 = **0.68**. The close is about two-thirds of the way up the band.

%B is handy for screening many markets, or for comparing a close with the bands without eyeballing the chart.

### Bandwidth

[Bollinger Band width](/bollinger-band-width/) measures how wide the bands are, relative to the middle band.

> Bandwidth = (upper band − lower band) ÷ middle band

Often it is shown multiplied by 100. In the example: (104.83 − 99.17) ÷ 102 × 100 = **5.55**.

Bandwidth is just four standard deviations divided by the average. It is a volatility reading in percentage-like terms, which makes it comparable over time. Its main use is spotting squeezes (section 6).

### Walking the bands

The most common misreading of Bollinger Bands is "price at the upper band is overbought, so it will fall". Bollinger himself warned against this. A touch of the upper band is not a sell signal on its own.

In a strong trend, price can "walk the band": close near or outside the upper band bar after bar, with only brief pullbacks towards the middle band. Selling every touch of the upper band in a strong up trend means selling into strength again and again. The mirror applies to the lower band in a down trend.

### Reversion to the middle

In a range, the picture changes. Price that reaches an outer band in a sideways market often drifts back towards the middle band. Many traders use the bands this way in ranges: the outer band as an area to watch for a fade, the middle band as a first target.

The hard part is knowing which kind of market you are in. That is not something the bands themselves tell you clearly. Traders usually add a separate read of trend, such as the slope of a longer moving average, [ADX](/adx/), or market structure. See [how to tell a trend from a range](/answers/trend-or-range-how-to-tell/).

### Bollinger's own guidance, in short

Bollinger's published guidance is broadly:

- Tags of the bands are just tags, not signals.
- Use the bands with other indicators, ideally ones that are not built from the same data (for example a volume indicator with a price-based band).
- Closes outside the bands can be continuation signals in a strong move, not reversal signals.
- A squeeze (very low bandwidth) often comes before a larger move, but does not say which way.

### Verdict on Bollinger Bands

Bollinger Bands are a well-built, adaptive envelope. They are good at showing whether recent closes are unusually far from their average, and at showing when volatility has shrunk. They are poor as a standalone reversal signal, because the same picture (price at the band) means "stretched" in a range and "strong" in a trend. Most of their value comes from what you pair them with.

## 5. Keltner and Donchian channels

### Keltner channels

[Keltner channels](/keltner-channels/) are named after Chester Keltner, who described a version in his 1960 book *How to Make Money in Commodities*. His original used a 10-day simple average of the typical price (high + low + close, divided by 3), with bands set at the 10-day average of the daily range above and below.

The version most platforms show today is a later update, popularised by Linda Bradford Raschke in the 1980s and 1990s:

- **Middle line:** a 20-period exponential moving average of the close.
- **Upper channel:** the EMA plus a multiple of ATR, often 2.
- **Lower channel:** the EMA minus the same multiple of ATR.

The ATR length varies by platform, often 10 or 20. Some use a multiplier of 1.5.

#### Worked example

Say the 20-period EMA is 104.00 and the 10-period ATR is 1.50.

- Upper channel = 104.00 + 2 × 1.50 = **107.00**
- Lower channel = 104.00 − 2 × 1.50 = **101.00**

The channel is 6.00 wide. If the ATR doubled to 3.00, the channel would double to 12.00.

### How Keltner differs from Bollinger

The two look similar on a chart. The differences are in the building blocks.

- Keltner uses ATR. Bollinger uses standard deviation of closes.
- Keltner usually uses an EMA in the middle. Bollinger uses an SMA.
- ATR changes smoothly. Standard deviation can jump when a single extreme close enters or leaves the window, because the distances are squared.

The practical effect is that Keltner channels tend to be smoother and change width more gradually. Bollinger Bands balloon outwards after a single big close and pinch inwards more sharply in quiet periods. That difference is what makes the squeeze in section 6 possible.

### Donchian channels

[Donchian channels](/donchian-channels/) are named after Richard Donchian, an early pioneer of trend-following funds. They are the simplest channel of all:

- **Upper channel:** the highest high of the last n bars.
- **Lower channel:** the lowest low of the last n bars.
- **Middle line (optional):** halfway between the two.

Twenty bars is a common default. Donchian channels do not use any average or standard deviation. They just mark the extremes.

#### Worked example

Using the seven bars from the ATR table in section 2, take a 5-bar Donchian channel at bar 7. The last five bars are bars 3 to 7.

- Highest high of bars 3 to 7 = 106.0 (bar 6)
- Lowest low of bars 3 to 7 = 100.5 (bar 4)
- Middle line = (106.0 + 100.5) ÷ 2 = **103.25**
- Channel width = 106.0 − 100.5 = **5.5**

The width of a Donchian channel is itself a rough volatility measure: a wide channel means price has covered a lot of ground recently.

### What Donchian channels are used for

Donchian channels are best known as a breakout rule. A close above the 20-bar high is a new 20-bar high, which some trend-following systems treat as an entry. The well-known "Turtle" rules taught in the 1980s used 20-day and 55-day breakouts of this kind.

Because the channel only moves when a new high or low is made, it can stay flat for a long time and then step sharply. That makes it easy to read, and easy to use as a trailing stop for a trend trade (the lower channel for a long trade).

### Comparing the three channels

| | Bollinger | Keltner | Donchian |
|---|---|---|---|
| Middle | 20 SMA | 20 EMA | Halfway point |
| Width from | 2 standard deviations of closes | Multiple of ATR | Highest high and lowest low |
| Reacts to | Scatter of closes | Bar size and gaps | New extremes only |
| Shape | Bulges and pinches | Smooth | Flat steps |
| Price outside the channel | Common in strong moves | Less common | Impossible by definition (the bar sets the edge) |
| Main published use | Volatility and stretch | Trend context, squeeze reference | Breakouts, trailing exits |

Other channels in the same family include [STARC bands](/starc-bands/), which use ATR around a simple average, and the [Supertrend](/supertrend/), which uses ATR to build a stop-and-reverse line.

## 6. Squeezes and expansion

### The idea

Section 1 said that volatility mean-reverts. A long quiet spell tends, at some point, to give way to a livelier one. A squeeze is a way of marking the quiet spell, on the idea that the next expansion may be worth being ready for.

There are two common definitions.

### The bandwidth squeeze

Bollinger's own [squeeze](/bollinger-squeeze/) is defined through bandwidth. When bandwidth falls to its lowest level for a long lookback, often six months, the bands are said to be in a squeeze.

This definition is relative. It does not say "bandwidth below 3". It says "bandwidth lower than it has been for a while, for this market". That makes it usable across different markets and prices.

### Bollinger inside Keltner

The second definition compares the two channels from section 5. When the Bollinger Bands move inside the Keltner channels, the squeeze is "on". When they move back outside, the squeeze "fires".

This is the core of the [TTM squeeze](/ttm-squeeze/), an indicator associated with John Carter and described in his book *Mastering the Trade* (2005). The TTM version uses 20-period Bollinger Bands at 2 standard deviations and 20-period Keltner channels at 1.5 ATR, and adds a momentum histogram to suggest direction.

#### Worked example

Say the 20-period middle line is 104.00 for both channels, the standard deviation of closes is 0.90, and ATR is 1.50.

- Bollinger upper = 104.00 + 2 × 0.90 = **105.80**. Lower = 104.00 − 2 × 0.90 = **102.20**. Width 3.60.
- Keltner (1.5 ATR) upper = 104.00 + 1.5 × 1.50 = **106.25**. Lower = 104.00 − 1.5 × 1.50 = **101.75**. Width 4.50.

The Bollinger Bands sit inside the Keltner channel on both sides. The squeeze is on. Closes have bunched together more tightly than the bar sizes alone would suggest.

If the standard deviation later rose above 1.125 (that is 1.5 × 1.50 ÷ 2), the Bollinger Bands would move outside the Keltner channel and the squeeze would fire.

### What a squeeze predicts

A squeeze says that recent volatility is low compared with some reference. Given mean reversion, that suggests volatility is more likely to rise than to keep falling. That is all.

A squeeze does not say:

- **Which way** price will break. The bands are symmetric. Any direction in a squeeze tool comes from an added part, such as the momentum histogram in the TTM squeeze.
- **When** the move will come. A squeeze can last a long time. Low volatility can stay low.
- **How far** the move will go. An expansion can be small and fade quickly.

Many squeezes "fire" with a small move that reverses. Some fire in one direction, trap breakout traders, then run the other way. That is the false-breakout problem covered in [what is a false breakout](/answers/what-is-a-false-breakout/), and it applies to squeezes as much as to chart patterns.

### Related ideas

The [volatility contraction pattern](/volatility-contraction-pattern/), described by Mark Minervini, is a chart-based version of the same idea: a series of pullbacks that get smaller before a breakout. Narrow range bars, inside bars and triangles share the theme. So do [chart patterns](/guide/chart-patterns/) such as flags and pennants, which are partly a description of a pause with shrinking ranges.

### Verdict on squeezes

The squeeze rests on a real, widely reported feature of markets: volatility tends to revert to its average. As a way of marking "this market is unusually quiet", it is sound. As a direction signal it has nothing to offer on its own. Treat a squeeze as a reason to pay attention, and as a hint that stops sized for the quiet period may be too tight once things move.

## 7. Implied volatility and the VIX

### What implied volatility is

An option gives its buyer the right, but not the obligation, to buy or sell something at a set price before a set date. Its price depends on several things: the price of the underlying market, the strike price, time to expiry, interest rates and expected volatility.

All of those are known except expected volatility. So you can work backwards. Given the option's market price, you can solve for the volatility that would produce that price under a pricing model, usually Black-Scholes or a variation. That number is the [implied volatility](/implied-volatility/) (IV).

Implied volatility is quoted as an annual percentage, like historical volatility. An IV of 25% on a share means option prices are consistent with a yearly standard deviation of about 25%.

### What IV does and does not say

Implied volatility reflects the price of options. Options are insurance as well as bets. People pay up for protection when they are worried, so IV includes fear and demand for hedging, not only a neutral forecast of movement.

Implied volatility has often been above the volatility that later happened. This gap is usually called the volatility risk premium. It is widely discussed in finance research, but its size varies over time and between markets, and it can flip negative in a crash.

For a chart trader, IV is mostly useful as context: a reading of how much movement the options market is pricing in, especially around known events.

### The VIX

The [VIX](/vix/) is an index published by Cboe Global Markets. It measures the 30-day implied volatility of the S&P 500, worked out from a wide range of S&P 500 index option prices. It was launched in 1993, originally on S&P 100 options, and switched to its current method using S&P 500 options in 2003.

The VIX is often called the "fear index". It tends to rise when the S&P 500 falls sharply, and drift lower in calm, rising markets. That pattern is widely reported, but it is a tendency, not a rule.

### Turning a VIX reading into a move size

Because the VIX is an annualised standard deviation, you can scale it down with the square root rule from section 3.

- A VIX of 20 implies a one-month standard deviation of about 20 ÷ √12 = **5.8%**.
- It implies a one-day standard deviation of about 20 ÷ √252 = **1.26%**.

So a VIX of 20 is consistent with S&P 500 daily moves of around 1.3% being "one standard deviation". This is a rough translation, not a forecast. The same caveats apply: fat tails, clustering, and the fact that the VIX is a price for insurance.

### Term structure, briefly

There are volatility indices for other horizons too, such as Cboe's nine-day and three-month indices on the S&P 500. VIX futures trade for several months ahead. Plotting implied volatility against time to expiry gives a curve called the term structure.

Most of the time, longer-dated implied volatility is a little higher than short-dated. In a sudden sell-off this often flips: short-dated volatility jumps above longer-dated. Some traders watch for that flip as a sign of stress. We describe it here only as context. This guide does not cover options or volatility-product strategies, and the VIX itself cannot be bought directly.

### Other volatility indices

Cboe and other exchanges publish similar indices for the Nasdaq-100, the Russell 2000, oil, gold and some single stocks. Europe has the VSTOXX on the Euro Stoxx 50. Coverage changes, so check the exchange's own pages for what exists today.

### Verdict on implied volatility and the VIX

The VIX is a useful public reading of how much movement the options market is pricing for US large-cap shares over the next month. It reacts faster than a 14-day ATR because it is a price, not an average of past bars. It is not a timing tool for buying or selling the index, and it says little about a single share or a currency pair unless they move with the broad US market.

## 8. Volatility and position sizing

This is where volatility earns its place. The rest of the guide is about measuring movement. This section is about using that measurement to keep risk the same from trade to trade.

The general method of sizing from a stop is covered in the [stop losses and risk guide](/guide/stop-losses-and-risk-guide/) and in [position size from stop loss](/answers/position-size-from-stop-loss/). Here we add the volatility layer.

### The core idea

A fixed stop distance in a volatile market gets hit by normal noise. The same distance in a calm market might be far too wide. A stop based on ATR adapts: wider when the market is wild, tighter when it is calm.

If the stop distance changes, the position size must change in the opposite direction. Otherwise a wider stop simply means a bigger loss. Sizing from the stop keeps the money at risk constant.

> Position size = money at risk ÷ stop distance per unit

### Worked example: the same risk in three markets

Say an account is 10,000 (in whatever currency) and the trader risks 1% per trade, so 100. That figure is our choice for the example, not a recommendation. See [how much to risk per trade](/answers/how-much-to-risk-per-trade/) for the wider discussion.

The stop is placed 2 × ATR from the entry. The multiple is also our choice for the example.

| Market | ATR | Stop distance (2 × ATR) | Size (100 ÷ stop, rounded down) | Actual risk |
|---|---|---|---|---|
| Calm | 0.60 | 1.20 | 83 units | 99.60 |
| Normal | 1.20 | 2.40 | 41 units | 98.40 |
| Wild | 2.40 | 4.80 | 20 units | 96.00 |

Three points stand out.

1. The money at risk is almost the same in all three. In R terms, a clean stop-out costs 1R every time.
2. The size in the wild market is a quarter of the size in the calm market, because the stop is four times wider.
3. Rounding down means actual risk is always a little under 100. Rounding up would push it over. Rounding down keeps the limit a limit.

### Why this matters

Without volatility-based sizing, a trader taking the same number of shares in every market is quietly taking much larger risks in volatile markets. A run of losses in a wild market then does far more damage than the same number of losses in a calm one. Sizing from an ATR stop keeps each trade's loss, in R, comparable.

That comparability is also what makes a trading record readable. If every trade risks 1R, a total of +12R over 50 trades means something. If the risk per trade swung wildly, the total would be dominated by a few large positions. See [what is 1R in trading](/answers/what-is-1r-in-trading/).

### Volatility targeting, briefly

Some funds go one step further and size the whole portfolio so that its expected volatility stays near a target, such as 10% a year. The idea is the same: when markets get wilder, positions shrink. We mention it only so the term is familiar. It needs a portfolio-level model and is outside the scope of this guide.

### What sizing cannot do

Sizing from an ATR stop controls the planned loss. It does not control gaps. If a market opens far beyond the stop, the loss can be well over 1R. Section 9 works through that case. Volatility sizing also does not make a poor entry rule good. It only makes the results of a rule easier to compare.

## 9. Volatility stops and targets

### ATR stops

An [ATR stop](/atr-stop/) places the stop a multiple of ATR away from the entry, or from a recent high or low. Common multiples in published material run from about 1.5 to 3. A smaller multiple gets hit more often by noise. A larger one gives more room but needs a smaller position for the same risk. There is no single correct multiple. The setting is also covered in [how to set an ATR stop loss](/answers/how-to-set-an-atr-stop-loss/).

### Trailing volatility stops

A trailing stop follows price as a trade moves in your favour. See [trailing stop](/trailing-stop/). Volatility versions include:

- The [chandelier exit](/chandelier-exit/), associated with Chuck LeBeau: for a long trade, the highest high since entry (or over a lookback, often 22 bars) minus a multiple of ATR, often 3. The stop "hangs" from the high, like a chandelier from a ceiling.
- The [volatility stop](/volatility-stop/), which trails a multiple of ATR behind the close.
- The [Supertrend](/supertrend/) and the [parabolic SAR](/parabolic-sar/), which trail and flip.

For a comparison of two of these, see [chandelier exit vs ATR trailing stop](/answers/chandelier-exit-vs-atr-trailing-stop/).

### Targets in ATR multiples

A target can be set as a multiple of ATR from the entry, in the same way as a stop. A 2 ATR stop and a 3 ATR target gives a planned reward of 1.5R. This keeps targets in proportion to how far the market usually moves. A 10-point target is easy in a market with a 20-point ATR and ambitious in one with a 3-point ATR.

ATR targets ignore the chart's structure. A target 3 ATR away might sit just beyond a major resistance level. Many traders cross-check ATR targets against [support and resistance](/guide/support-and-resistance-guide/) or [structure-based targets](/answers/how-to-set-a-target-from-market-structure/).

### How we count R

All trade examples in this guide follow the same rules.

- **1R** is the distance from the side-correct fill to the first stop, multiplied by the position size. "Side-correct" means the price you actually get: a buy fills at the ask, a sell at the bid.
- A **clean stop** (filled exactly at the stop price) is exactly −1R.
- **Commission, slippage and gaps** are counted on top of R. They are never folded into the 1R figure. A gap through the stop can produce a loss larger than 1R.
- **Stops only tighten.** A stop can be moved towards price to lock in gains or cut risk. It is never moved further away.

See [does spread count towards the stop loss](/answers/does-spread-count-towards-stop-loss/) and [should you move your stop loss further away](/answers/should-you-move-your-stop-loss-further-away/) for the background.

### Worked example: a long trade with an ATR stop and target

A share has an ATR of 1.20. The trader buys and is filled at the ask of **50.03**. The account and risk are those from section 8: 100 at risk, 41 shares.

- Stop distance = 2 × ATR = 2 × 1.20 = 2.40.
- Stop = 50.03 − 2.40 = **47.63**.
- 1R per share = 2.40. 1R for the position = 2.40 × 41 = **98.40**.
- Target = 3 × ATR above the fill = 50.03 + 3.60 = **53.63**. Planned reward = 3.60 ÷ 2.40 = **1.5R**.

Costs for the example: commission of 1.00 each way (2.00 round trip). Where a fill is worse than the order price, the difference is slippage.

**Outcome A: clean stop.** Price falls and the stop fills exactly at 47.63.

- Gross result = −2.40 × 41 = −98.40 = **−1R**.
- Commission = 2.00. Say there was also 0.02 of slippage on the entry, in addition to the fill used for 1R: 0.02 × 41 = 0.82. Costs = 2.82.
- Net result = −98.40 − 2.82 = −101.22 = **−1.03R**.

The trade lost exactly 1R by plan. The costs are shown on top, not hidden inside the 1R.

**Outcome B: target hit.** Price rises and the target fills at 53.63.

- Gross result = +3.60 × 41 = +147.60 = **+1.5R**.
- Costs as above = 2.82.
- Net result = 147.60 − 2.82 = 144.78 = **+1.47R**.

**Outcome C: gap through the stop.** Bad news overnight. The share opens at 46.90, below the stop. The stop order fills at the open.

- Gross result = (46.90 − 50.03) × 41 = −3.13 × 41 = −128.33 = **−1.30R**.
- Commission = 2.00. Net = −130.33 = **−1.32R**.

The stop was sized for 1R. The gap made the real loss about a third larger. This is why gaps are tracked separately. A volatility-based size limits the damage, because the position was smaller than it would have been with a tight fixed stop, but it cannot remove gap risk. See [stop loss when the market gaps](/answers/stop-loss-when-market-gaps/).

### Worked example: trailing with a chandelier exit

Same trade, filled at 50.03, first stop at 47.63. Say the trader trails with a chandelier exit at 3 × ATR below the highest high since entry.

- A few days in, the highest high since entry is 54.10 and ATR has risen slightly to 1.30.
- Chandelier stop = 54.10 − 3 × 1.30 = 54.10 − 3.90 = **50.20**.

50.20 is above the current stop of 47.63, so the stop moves up to 50.20. It has tightened, which is allowed.

- Next day, ATR jumps to 1.60. The high is still 54.10.
- New chandelier value = 54.10 − 3 × 1.60 = 54.10 − 4.80 = **49.30**.

49.30 is below the current stop of 50.20. Moving the stop down to 49.30 would loosen it. Stops only tighten, so the stop **stays at 50.20**.

This is a real trap with volatility trailing stops. When ATR rises, the formula pushes the stop further from price. A rule that follows the formula blindly can widen risk on an open trade. The fix is simple: take the tighter of the old stop and the new value, every time.

If the stop is then hit cleanly at 50.20:

- Gross result = (50.20 − 50.03) × 41 = 0.17 × 41 = 6.97 = **+0.07R**.
- Net of 2.82 costs = 4.15 = **+0.04R**.

A trade that once showed about +1.7R of open profit (54.10 − 50.03 = 4.07, which is 4.07 ÷ 2.40 = 1.70R) closed near break-even. That is the normal cost of a wide trailing stop: it gives room, and gives back a lot. Tighter trails give back less but get shaken out more often. Neither is right in general. See [when to move stop to break-even](/answers/when-to-move-stop-to-break-even/).

### Worked example: a short trade in R

Short trades follow the same rules, with the sides swapped.

- A currency pair has an ATR of 0.0060 (60 pips). The trader sells and is filled at the bid of **1.0850**.
- Stop = 1.5 × ATR above the fill = 1.0850 + 0.0090 = **1.0940**. 1R = 90 pips × size.
- A short is closed by buying, at the ask. So the stop is triggered and filled on the ask price, not the bid. If the chart shows bid prices only, price on the chart can stop short of 1.0940 and the stop can still fill, because the ask is higher by the spread.

A clean fill at 1.0940 is −1R. Any extra spread widening or slippage at the moment of the fill is added on top. The 1.5 multiple here is just for the example.

### Verdict on volatility stops and targets

ATR-based stops and targets keep trade plans in proportion to how much the market moves. They are one of the most practical uses of volatility. Their weaknesses are that they ignore chart structure, that trailing versions can try to widen in a volatility spike, and that no stop protects against a gap. Used with "stops only tighten" and sized positions, they are a sound, simple framework.

## 10. Volatility regimes and filters

### What a regime is

A regime is a stretch of time with broadly similar conditions. Traders talk about low-volatility regimes (quiet, steady) and high-volatility regimes (wide ranges, big gaps, fast reversals). Because volatility clusters (section 1), regimes tend to persist for a while before changing.

Different methods tend to behave differently in different regimes. Breakout rules need movement. Fading rules (selling strength, buying weakness in a range) can do well in quiet, sideways markets and badly in fast trends. Tight stops suit calm markets and get shredded in wild ones. These are general tendencies described in many trading books, not tested results of ours.

### Measuring the regime

A few common ways to label the current regime:

- **ATR % against its own history.** For example, is today's ATR % above or below its median of the last year?
- **ATR percentile.** Where does today's ATR rank among the last n values?
- **Bandwidth percentile.** The same idea using Bollinger bandwidth.
- **Historical volatility against implied volatility.** Is the options market pricing more or less movement than recently happened?
- **A choppiness measure,** such as the [choppiness index](/choppiness-index/), which tries to separate trending from sideways action rather than measuring size.

### Worked example: an ATR percentile filter

Say the last ten daily ATR readings for a market, oldest first, are:

1.10, 1.25, 0.95, 1.40, 1.05, 1.30, 1.15, 0.90, 1.20, **1.35**

The latest is 1.35. Of the nine earlier values, eight are below it: 1.10, 1.25, 0.95, 1.05, 1.30, 1.15, 0.90 and 1.20. Only 1.40 is above.

So the latest ATR is higher than eight of the previous nine values, about the **89th percentile** of this short window. A filter that says "only take breakout trades when ATR is above its 50th percentile" would allow a trade today. A filter that says "avoid new trades when ATR is above its 80th percentile" would block one.

Ten readings is far too short a window for real use. Published filters more often use 100 to 250 bars. The method is the same.

### Using filters honestly

A volatility filter is a rule like any other. It needs testing, and it is easy to overfit (section 12). A few points of care:

- Decide the filter before looking at results. Choosing the threshold that made a past test look best is curve fitting.
- Keep the number of filters small. Each one cuts the sample of trades, which makes results noisier.
- Check that the filter still helps across several markets and periods, not just the one you designed it on.

### Choosing timeframes

Volatility scales with time. A 5-minute chart has a small ATR. A daily chart has a larger one. A weekly chart has a larger one still. Roughly, if bar-to-bar moves were independent, range would grow with the square root of time: a bar four times as long would have about twice the range. Real markets break this rule because of sessions, gaps and clustering, but it is a fair first guess.

The practical effect is on costs. On very short timeframes the spread and commission are a large share of a typical bar. A 1-minute ATR of 3 pips with a 1-pip spread means costs eat a third of a bar's movement. On a daily chart with an ATR of 80 pips, the same spread is a rounding error. Measuring ATR against costs is a quick way to see whether a timeframe is practical for a given market.

## 11. Volatility across markets and sessions

### Different markets, different scales

Volatility varies hugely between markets. Large, liquid stock indices tend to be calmer than single shares. Single shares of small companies tend to be more volatile than large ones. Major currency pairs are often calmer, in percentage terms, than crypto assets. Commodities vary by contract and season.

That is one more reason to use ATR % or historical volatility, not raw ATR, when comparing markets. A 1% daily move is routine in some markets and dramatic in others.

### Forex sessions

The currency market trades around the clock on weekdays, but activity is not even. It is usually split into three main sessions: Asia (with Tokyo and Sydney), London and New York. Trading activity, and with it volatility, is commonly described as highest when the London and New York sessions overlap, and lowest in the late New York and early Asian hours. Pairs involving the yen or the Australian dollar may be relatively more active during Asian hours.

These are common descriptions, not figures of ours. The pattern can be checked on any pair by averaging true range by hour of the day.

### Stock market open and close

Share markets often show higher volatility near the open and, to a lesser degree, near the close, with a quieter middle of the day. The open absorbs overnight news. The close sees traders and funds adjusting positions before the end of the session. Intraday ATR measured over the whole day can hide this: a 14-period ATR on a 5-minute chart will swing through the day as the session changes.

For volume patterns through the session, see the [volume and order flow guide](/guide/volume-and-order-flow-guide/).

### Gaps and overnight risk

Markets that close overnight, such as most share markets, can gap at the open. True range includes these gaps, which is why ATR on a daily stock chart is often noticeably larger than the average intraday range. Stop orders cannot fill while a market is shut. A stop below a share's price on Friday night can fill far below it on Monday morning (section 9, outcome C).

### Crypto weekends

Crypto markets trade every day. Weekend trading is often thinner, which can mean quieter conditions or, at times, sharp moves on low liquidity. Daily volatility on crypto should be annualised with 365 days, not 252. Comparing crypto ATR with stock ATR without adjusting for this is a common slip.

### News days

Scheduled events such as central bank decisions, inflation and jobs reports, and company earnings can move volatility sharply for a short time. Spreads often widen around these releases, and fills can be worse than the order price. A stop placed 1 ATR away on a normal day may be well inside the noise in the minutes after a big release.

Some traders stand aside around such events. Others size down. Others trade them on purpose. Whichever approach is used, it helps to know the calendar, and to remember that a 14-period ATR built from calm days will understate the movement on a news day.

### Verdict on markets and sessions

Volatility is not one number per market. It changes with the hour, the day of the week, the news calendar and the season. Any volatility setting carried from one market or session to another is worth checking against that market's own history.

## 12. Testing volatility tools without fooling yourself

Volatility tools are easy to test badly. Here are the traps that come up most often. For the general principles behind how we test, see [our methods](/methods/).

### Look-ahead in daily ATR

A daily ATR value is only known after the day has closed. A test that uses today's ATR to set a stop for a trade entered at today's open is using information that did not exist at the time of the trade. This is look-ahead bias. It can make stops look better placed than they could have been.

The fix is to use the ATR from the last completed bar for any decision made before or during the current bar. The same applies to Bollinger Bands, Keltner channels and Donchian channels. The current bar's band only becomes fixed once the bar closes.

### Same-bar problems on daily data

On a daily bar you see the open, high, low and close, but not the order in which the high and low happened. If both the stop and the target sit inside one bar's range, the test cannot know which was hit first. Some tests assume the best case. A fair test assumes the worst case, or uses intraday data to settle it, and reports how often it happened.

### Regime overfitting

A test that covers only one volatility regime tells you about that regime only. A breakout rule tested on a single trending, volatile year may look excellent. The same rule in a quiet, sideways year may give back everything. Testing across calm and wild periods, and across several markets, is the minimum before drawing any conclusion.

### Too many settings

Volatility tools have many knobs: ATR length, multiplier, smoothing method, band length, band width, squeeze lookback, percentile threshold. Try enough combinations and one will look good on past data by chance. Count how many variants were tried and report that count. Keep some data aside that was not used to choose settings, and look at it once.

### Survivorship and changing conditions

A test on today's members of an index leaves out the companies that failed or were removed. Those tend to be the most volatile names. That makes a volatility study on survivors look calmer and cleaner than reality. Market structure also changes: spreads, trading hours, tick sizes and the share of electronic trading have all shifted over the years.

### Costs relative to volatility

A rule with small targets measured in ATR can look attractive before costs and poor after them, especially on short timeframes. Always report results net of commission and slippage, with the gross figure beside it.

## 13. Common mistakes

- **Treating volatility as direction.** High ATR is not bearish. Low ATR is not bullish. A squeeze does not say which way price will break.
- **Selling every upper Bollinger Band touch.** In a strong trend price can walk the band for a long time. The band touch only says price is stretched compared with its recent average.
- **Using the same stop distance in every market.** A fixed 20-point stop is tight in one market and loose in another. Base stops on each market's own volatility, and size from the stop.
- **Keeping the same position size when the stop widens.** A wider ATR stop with the same size is a bigger risk, not just a "looser" trade. Size down so the loss is still 1R.
- **Letting a trailing ATR stop loosen.** When ATR rises, a chandelier or ATR trail can move away from price. Stops only tighten. Take the tighter of the old and new values.
- **Comparing raw ATR across markets or years.** Use ATR as a percentage of price, or historical volatility, to compare.
- **Forgetting that stops do not protect against gaps.** A gap through the stop gives a loss larger than 1R. Count it as such, separately from the planned risk.
- **Mixing up population and sample standard deviation.** Bollinger Bands use the population version. Spreadsheet functions often default to the sample version. The numbers will not match.
- **Using today's ATR to plan today's trade in a test.** That is look-ahead bias. Use the last completed bar.
- **Expecting the VIX to time the market.** It is a price for insurance on the S&P 500, not a buy or sell signal.
- **Fitting volatility filters to past results.** A threshold chosen because it made a backtest look best is unlikely to hold up. Decide filters in advance and test them on unseen data.
- **Ignoring news and session timing.** An ATR built on quiet days understates the move after a major release or at the market open.

## 14. Comparison table and FAQ

### Comparison table

| Tool | Inputs | Unit | Best use | Main weakness |
|---|---|---|---|---|
| [True range](/atr/) | High, low, previous close | Price | Measuring one bar's movement, gaps included | One bar only; noisy |
| [ATR](/atr/) | True range, Wilder smoothing (14) | Price | Stops, targets, sizing | Lags; no direction; not comparable across prices |
| [Normalised ATR](/normalized-atr/) | ATR ÷ close | % | Comparing markets and eras; filters | Same lag as ATR |
| [Standard deviation](/standard-deviation/) | Closes, length | Price | Building blocks of bands | Squares big moves; closes only |
| [Historical volatility](/historical-volatility/) | Log returns, length, annualising factor | % a year | Comparing markets; context for IV | Backward-looking; assumes independent days when annualised |
| [Implied volatility](/implied-volatility/) | Option prices, pricing model | % a year | Gauging movement priced for an event | Includes demand for insurance; needs liquid options |
| [VIX](/vix/) | S&P 500 option prices | Index points (% a year) | Broad US market stress reading | One market only; not a timing signal |
| [Bollinger Bands](/bollinger-bands/) | 20 SMA ± 2 standard deviations | Price | Stretch from average; volatility shape | Same picture means "stretched" or "strong" |
| [Bollinger Band width](/bollinger-band-width/) | Band width ÷ middle | Ratio or % | Spotting squeezes | No direction |
| [Keltner channels](/keltner-channels/) | 20 EMA ± ATR multiple | Price | Smooth trend envelope; squeeze reference | Settings vary by platform |
| [Donchian channels](/donchian-channels/) | Highest high, lowest low | Price | Breakouts; trailing exits | Many false breakouts in ranges |
| [Bollinger squeeze](/bollinger-squeeze/) / [TTM squeeze](/ttm-squeeze/) | Bandwidth low, or Bollinger inside Keltner | On/off | Marking unusually quiet spells | No direction or timing on its own |
| [Chandelier exit](/chandelier-exit/) | Highest high, ATR multiple | Price | Trailing stop in trends | Can widen when ATR jumps unless capped |

### FAQ

**What is volatility in trading?**

Volatility is the size of price moves, regardless of direction. It can be measured as range, average true range, standard deviation of returns, or implied volatility from option prices. High volatility means large moves are common. Low volatility means price is moving in small steps. It says how far, not which way.

**Which is better, ATR or standard deviation?**

Neither is better in general. ATR uses highs, lows and gaps, so it captures how far bars travel. Standard deviation of closes measures how widely closes scatter around their average and is the basis of Bollinger Bands. ATR is the usual choice for stops and sizing. Standard deviation is the usual choice for bands and historical volatility.

**Does low volatility mean a big move is coming?**

Volatility tends to drift back towards its average, so a very quiet spell is more likely to be followed by a livelier one than by an even quieter one. But a quiet spell can last a long time, and the move that ends it may be small. Low volatility does not tell you the direction or the timing.

**What ATR setting should I use?**

Wilder's default is 14 bars, and most platforms use it. Shorter lengths react faster but are noisier. Longer lengths are smoother but lag more. The setting matters less than using it consistently and checking the smoothing method matches across tools. For stops, the multiple of ATR usually matters more than the length.

**How do I keep risk the same in calm and wild markets?**

Set the stop from volatility, for example a multiple of ATR, then size the position so that the stop distance times the size equals your chosen risk. Wider stops get smaller positions. A clean stop then costs about 1R in every market. Gaps and costs can still add to that, so record them separately.

**Is the VIX a buy or sell signal?**

No. The VIX measures the volatility implied by S&P 500 option prices over the next 30 days. It tends to rise when shares fall sharply, but that is a tendency, not a rule. It is useful context for how much movement the market is pricing in. It does not give entry or exit timing.

**Can a stop loss protect me from a gap?**

Not fully. A stop order cannot fill while a market is closed. If price opens beyond the stop, the order fills at or near the open, which can mean a loss well over 1R. Smaller positions sized from volatility limit the damage, but do not remove gap risk.

**Why does my Bollinger Band or ATR not match another platform?**

Common causes are a different smoothing method for ATR (Wilder, simple or exponential), a different starting bar, population versus sample standard deviation in the bands, different session times on intraday charts, and bid versus mid prices. Check the settings and the data feed before assuming one is wrong.

For the risk side of everything in this guide, read the [stop losses and risk guide](/guide/stop-losses-and-risk-guide/). For the averages that sit in the middle of most bands and channels, see the [moving averages guide](/guide/moving-averages/).
