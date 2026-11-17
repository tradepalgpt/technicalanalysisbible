---
slug: fibonacci-guide
title: "Fibonacci tools: the complete guide"
description: Where Fibonacci ratios come from, how retracements, extensions and harmonic patterns are drawn, worked examples in R, and an honest look at whether they work.
query: fibonacci trading
publish: 2027-11-01
reviewed: 17 November 2026
cluster: [fibonacci-retracement, fibonacci-extension, fibonacci-projection, fibonacci-confluence, fibonacci-fan, fibonacci-arcs, fibonacci-time-zones, fibonacci-channel, fibonacci-pivot-points, golden-ratio, harmonic-patterns, abcd-pattern, gartley-pattern, bat-pattern, butterfly-pattern, crab-pattern, shark-pattern, cypher-pattern, elliott-wave]
value: [table, example, verdict]
chart: fibonacci-extension
---

Fibonacci tools are some of the most drawn lines in trading. Open almost any charting package and you will find a retracement tool, an extension tool, fans, arcs and time zones. Many traders draw them on every chart. Some swear by them. Others think they are numerology.

The idea is simple. After price makes a move, traders measure that move and mark set fractions of it. The fractions come from a famous number sequence and from the golden ratio. The marked levels are then watched as places where a pullback might stop, or where a new move might run to.

This guide covers the whole subject in one place. It starts with where the numbers come from, and why one of the most used levels is not a Fibonacci number at all. It then works through retracements, extensions, the problem of choosing a swing, confluence with other levels, the less used tools (time zones, fans, arcs), Fibonacci pivot points, harmonic patterns, and the Elliott wave guidelines. It ends with trading examples in R, the reasons levels sometimes seem to work, how to test them without fooling yourself, the common mistakes, a comparison table and an FAQ.

The short version, before the detail: Fibonacci levels are a way of dividing a price move into standard parts. The arithmetic is exact. The choice of which move to measure is not. That choice drives almost everything, and it is the main reason two traders draw different levels on the same chart. The levels are best treated as areas worth watching, not as places where price must turn.

We have not run a Fibonacci backtest of our own, so this guide contains no test results of ours. It contains the standard, published definitions, the textbook ratios with their sources, worked calculations you can check with a calculator, and honest verdicts on each tool. Where a number comes from a choice we made for an example, we say so. Nothing here is a recommendation to buy or sell anything.

## 1. Where the numbers come from

### The sequence

The Fibonacci sequence starts with 0 and 1. Each number after that is the sum of the two before it.

0, 1, 1, 2, 3, 5, 8, 13, 21, 34, 55, 89, 144, 233, 377, 610, 987 and so on.

The sequence is named after Leonardo of Pisa, later known as Fibonacci. He described it in his book *Liber Abaci* in 1202, through a puzzle about breeding rabbits. Indian mathematicians had written about the same sequence centuries earlier. Fibonacci's book brought it to Europe.

The sequence turns up in many places in nature and maths. That fact is often used to argue that markets "must" follow it too. That is a leap. A number appearing in sunflower heads tells you nothing about where a share price will stop. Whether Fibonacci levels are useful in markets is a question about markets, not about rabbits or shells. Sections 11 and 12 come back to this.

### The golden ratio

Divide any Fibonacci number by the one before it. The answer gets closer and closer to a fixed number as the sequence grows.

- 89 ÷ 55 = 1.6182
- 144 ÷ 89 = 1.6180
- 233 ÷ 144 = 1.6181

That fixed number is the [golden ratio](/golden-ratio/), usually written with the Greek letter phi. It equals (1 + √5) ÷ 2, which is about 1.618034.

Now divide the other way. A Fibonacci number divided by the next one heads towards 0.618.

- 34 ÷ 55 = 0.6182
- 55 ÷ 89 = 0.6180
- 89 ÷ 144 = 0.6181

0.618 is exactly 1 ÷ 1.618. It is also exactly 1.618 − 1. The golden ratio is the only positive number with that property.

### How the trading ratios are derived

Traders use a small set of ratios. Every one of them can be traced back to the golden ratio, though some by a longer route than others.

| Ratio | Common name | How it is derived |
|---|---|---|
| 0.236 | 23.6% | 0.618 × 0.618 × 0.618, or a number divided by the one three places on (e.g. 13 ÷ 55 = 0.236) |
| 0.382 | 38.2% | 0.618 × 0.618, or a number divided by the one two places on (e.g. 34 ÷ 89 = 0.382) |
| 0.5 | 50% | Not a Fibonacci ratio (see below) |
| 0.618 | 61.8% | 1 ÷ 1.618, or a number divided by the next one |
| 0.786 | 78.6% | The square root of 0.618 |
| 0.886 | 88.6% | The fourth root of 0.618 (used in harmonic patterns) |
| 1.0 | 100% | The whole move |
| 1.272 | 127.2% | The square root of 1.618 |
| 1.414 | 141.4% | The square root of 2 (used in some harmonic patterns; not from phi) |
| 1.618 | 161.8% | The golden ratio |
| 2.618 | 261.8% | 1.618 × 1.618, or 1.618 + 1 |
| 3.618 | 361.8% | 2.618 + 1 (used in the crab pattern) |

All of these we checked with a calculator. For example, the square root of 0.618034 is 0.786151, which rounds to 0.786. The square root of 1.618034 is 1.272020, which rounds to 1.272.

Two things stand out. First, the "Fibonacci" ratios are really golden-ratio ratios and their roots and powers. The sequence is simply one route to them. Second, the roots (0.786, 0.886, 1.272) are a step removed. They are standard in published work and in software, but they are derived, not "found" in the sequence directly.

### 0.5 is not a Fibonacci ratio

The 50% level is on almost every retracement tool. It is not a Fibonacci ratio. No pair of Fibonacci numbers settles on 0.5, and it does not come from the golden ratio.

So why is it there? Two reasons are usually given. One is Dow Theory, which held that markets often give back about half of a move. The other is W. D. Gann's work, which leaned heavily on halves, quarters and eighths. Software makers include it because traders use it. That is a fair reason. It is just worth knowing that a "Fibonacci" level at 50% has a different history from the others.

The same applies to 1.0 (100%) and to round extensions such as 2.0 (200%). They are on the tools for convenience, not because the golden ratio produces them.

### What the levels claim, and what they do not

At its core, a Fibonacci level is a fraction of a measured move. Nothing more. If a share rose from 100 to 150, its 61.8% retracement is at 119.10, because that is 61.8% of the way back down. The arithmetic is exact. The claim that price "respects" that level is a separate claim, and it has to be tested on markets, not argued from nature.

Keep those two things apart throughout this guide: the measurement, which is objective once a swing is chosen, and the forecast, which is not.

## 2. Retracements

A [Fibonacci retracement](/fibonacci-retracement/) measures how far a pullback has gone against the move before it. Traders draw it after a clear swing, then watch the standard levels as places where the pullback might end and the original move might resume.

### The standard levels

Most platforms show these by default:

- 0.236 (23.6%)
- 0.382 (38.2%)
- 0.5 (50%)
- 0.618 (61.8%)
- 0.786 (78.6%)

They also mark 0 and 1.0 (0% and 100%), the two ends of the swing. Some platforms leave 0.786 off by default and let you add it. Some add extra levels. Check your settings before you compare your chart with anyone else's.

Traders often describe the levels by depth. A pullback to 0.236 or 0.382 is "shallow". A pullback to 0.5 or 0.618 is "moderate". A pullback to 0.786 is "deep". A pullback past 1.0 is not a retracement any more: price has gone beyond the start of the swing, and the move that was being measured has been fully undone.

### Drawing it swing to swing

A retracement needs two points: the start and end of a swing.

- **In an up move:** draw from the swing low (the start) to the swing high (the end). The levels sit between them, measured down from the high.
- **In a down move:** draw from the swing high (the start) to the swing low (the end). The levels sit between them, measured up from the low.

A swing high is a bar whose high stands above the highs of the bars around it. A swing low is the mirror. See [swing highs and lows](/swing-highs-lows/) for the usual definitions. The point is to anchor on clear turning points, not on random bars in the middle of a move.

The formula is the same in both directions:

> In an up move: level = high − (high − low) × ratio
>
> In a down move: level = low + (high − low) × ratio

### Worked example: an up move

A share rises from a swing low of 100 to a swing high of 150. The move is 50 points.

| Level | Calculation | Price |
|---|---|---|
| 0% | the high | 150.00 |
| 23.6% | 150 − 50 × 0.236 | 138.20 |
| 38.2% | 150 − 50 × 0.382 | 130.90 |
| 50% | 150 − 50 × 0.5 | 125.00 |
| 61.8% | 150 − 50 × 0.618 | 119.10 |
| 78.6% | 150 − 50 × 0.786 | 110.70 |
| 100% | the low | 100.00 |

If the share then pulls back to about 125 and turns up, traders say it "held the 50% retracement". If it falls through 110.70 and keeps going, the deep levels have failed, and many traders would say the up move has been undone.

### Worked example: a down move

A currency pair falls from a swing high of 80 to a swing low of 60. The move is 20 points. Now the levels are measured up from the low.

| Level | Calculation | Price |
|---|---|---|
| 0% | the low | 60.00 |
| 23.6% | 60 + 20 × 0.236 | 64.72 |
| 38.2% | 60 + 20 × 0.382 | 67.64 |
| 50% | 60 + 20 × 0.5 | 70.00 |
| 61.8% | 60 + 20 × 0.618 | 72.36 |
| 78.6% | 60 + 20 × 0.786 | 75.72 |
| 100% | the high | 80.00 |

A bounce that stalls near 72.36 is a "61.8% retracement of the down move". The trader watching it is asking whether the fall will resume from there.

### Wicks or closes?

This choice matters more than most people expect. Do you anchor on the extreme high and low of each swing (the wick, or shadow), or on the highest and lowest closing prices?

There is no single correct answer. The conventional default in most textbooks and most software is the extreme: the wick. The argument is that the wick is where price actually traded, so it marks the true range of the move. The argument for closes is that a close is where the bar settled, and a single spike can be noise, a thin market or a bad tick.

The difference can be meaningful. Take the up move above. Suppose the swing low wick was 100 and the high wick was 152, while the lowest close was 100 and the highest close was 149.

| Level | Using wicks (100 to 152) | Using closes (100 to 149) | Gap |
|---|---|---|---|
| 23.6% | 139.73 | 137.44 | 2.29 |
| 38.2% | 132.14 | 130.28 | 1.86 |
| 50% | 126.00 | 124.50 | 1.50 |
| 61.8% | 119.86 | 118.72 | 1.14 |
| 78.6% | 111.13 | 110.49 | 0.64 |

The gaps are not huge here, but they are wider than many traders' stops. Two people drawing "the 61.8%" on the same chart can be more than a point apart, simply because of this one setting. The answer on [wicks or closes for support and resistance](/answers/wicks-or-closes-for-support-and-resistance/) makes the same point for horizontal levels.

The practical answer is consistency. Pick one rule and use it everywhere, including when you review past trades. Mixing them lets you pick whichever version fits after the fact, and that is a quiet way to fool yourself.

### What a retracement does not tell you

A retracement tells you where the standard fractions of a move sit. It does not tell you which one, if any, will hold. It does not tell you when price will get there. And it does not tell you whether the trend is still in place. Those questions need other evidence: the structure of highs and lows, momentum, volume, and the wider context. The [price action guide](/guide/price-action-guide/) covers the structure side.

## 3. Extensions and projections

A retracement measures a pullback inside a move. An extension looks beyond the move, to where the next leg might run. Traders use extensions mainly to set targets and to judge whether a move is stretched.

### The standard levels

Common extension levels are:

- 1.272 (127.2%)
- 1.618 (161.8%)
- 2.618 (261.8%)

Many platforms also show 1.0 (100%), 2.0 (200%) and sometimes 0.618 (61.8%). As with 0.5 on the retracement tool, 2.0 is a convenience level, not a golden-ratio one. Our chart of a [Fibonacci extension](/fibonacci-extension/) on the S&P 500 ETF shows 61.8%, 100%, 127.2%, 161.8%, 200% and 261.8% together.

### Two-point and three-point tools

Platforms use the word "extension" for two different tools, and this causes real confusion.

**The two-point extension** takes one swing, A to B, and marks levels beyond B as multiples of that swing, measured from A. Some platforms build this into the retracement tool: the levels simply carry on past 100%.

> In an up move: level = A + (B − A) × ratio

**The three-point extension** takes a swing A to B, then a pullback to C. It projects the size of A to B from C, the end of the pullback. Many platforms call this a "trend-based Fibonacci extension". Others call it a [Fibonacci projection](/fibonacci-projection/).

> In an up move: level = C + (B − A) × ratio

The two give different answers, because they start from different points. Neither is wrong. They answer different questions. The two-point tool asks "how far past the old high, as a multiple of the first leg?" The three-point tool asks "if the next leg is a multiple of the first, where does it end, starting from the pullback low?"

### Worked example: two-point and three-point

Take the same up move: A = 100, B = 150. The swing is 50 points. Then price pulls back to C = 130 before rising again.

| Ratio | Two-point (from A = 100) | Three-point (from C = 130) |
|---|---|---|
| 1.0 | 150.00 | 180.00 |
| 1.272 | 163.60 | 193.60 |
| 1.618 | 180.90 | 210.90 |
| 2.618 | 230.90 | 260.90 |

The "161.8% target" is either 180.90 or 210.90, depending on the tool. That is a 30-point difference on a 50-point swing. If you read someone else's "1.618 target", ask which tool they meant.

Notice that the two-point 1.618 level (180.90) sits close to the three-point 1.0 level (180.00). Coincidences like this are common, and they are one source of "confluence" (section 5). They are arithmetic, not insight: with enough levels from enough tools, some will line up.

### Worked example: a down move

The currency pair fell from 80 to 60, a 20-point swing. A two-point extension measured from the high marks levels below the low:

> level = 80 − 20 × ratio

| Ratio | Calculation | Price |
|---|---|---|
| 1.272 | 80 − 20 × 1.272 | 54.56 |
| 1.618 | 80 − 20 × 1.618 | 47.64 |
| 2.618 | 80 − 20 × 2.618 | 27.64 |

A 2.618 extension is a very long way. Here it implies a further fall of more than 32 points after a 20-point move. In practice, the far levels are reached much less often than the near ones, simply because they are further away. That is not evidence for or against them. It is just distance.

### Retracement-based extensions

There is a third, smaller use. Some traders extend the retracement tool beyond 100% in the direction of the pullback. If an up move from 100 to 150 is fully undone, the 1.272 and 1.618 "retracement" levels sit below 100, at 86.40 and 69.10. This is how the [butterfly](/butterfly-pattern/) and [crab](/crab-pattern/) patterns in section 8 place their final point. It is the same arithmetic, pointed the other way.

### Verdict on extensions

Extensions are a tidy, repeatable way to mark distances. They give a trader a pre-set place to think about taking profit, rather than deciding in the heat of the moment. That has real value as a discipline. What they do not have is any proof that price is drawn to them. Treat them as a ruler, not a magnet.

## 4. Choosing the swing

Every Fibonacci tool depends on its anchor points. Change the swing, and every level moves. This is the main source of disagreement between traders, far more than the ratios themselves.

### Why two traders get different levels

Imagine five traders looking at the same daily chart. They might anchor their retracement on:

1. The most recent clear swing low and swing high.
2. The low and high of the whole year.
3. The low of a big gap and the high after it.
4. The intraday low and high of a single news day.
5. Whatever pair of points makes the current price sit on a level.

All five get "correct" Fibonacci levels. All five get different numbers. The fifth is the dangerous one, and it is more common than people admit. If you are free to choose the swing after you see where price turned, you can almost always find a swing that puts a level there.

### Timeframe

A swing on a 5-minute chart and a swing on a weekly chart are both swings. Their levels are very different in size. A 61.8% retracement of a day's move might be a few ticks. A 61.8% retracement of a two-year move might be a large share of the price.

There is no standard rule about which timeframe's swings matter more. A common convention is that swings on higher timeframes carry more weight, because more traders can see them and they took longer to form. That is a reasonable working idea, not a tested law. It also means there are many more candidate swings than most traders realise: every timeframe offers its own set.

### Working rules for choosing a swing

None of these is a tested rule. They are common practice, and they make your drawing repeatable, which is the main thing.

- **Use clear turning points.** A swing low should be a visible low with higher lows on each side, not a pause in the middle of a move.
- **Measure a complete move.** Draw from where a move began to where it ended. Do not draw from the middle of a trend.
- **Define "swing" in advance.** For example: "a swing high is a bar with a higher high than the two bars on each side". Then the same chart always gives the same anchor.
- **Stick to one timeframe per decision.** Draw your entry swing on the chart you trade from. Higher-timeframe swings can add context, but write down which ones before you look for a match.
- **Pick wicks or closes and stay with it.** See section 2.
- **Redraw only when the swing changes.** If price makes a new high, the up move has a new end point, and the levels move. That is a rule-based update, not a fiddle.

### The moving anchor problem

Until a swing has ended, its end point is not fixed. If you draw a retracement from a low to "the high" while price is still rising, the high keeps moving, and so do the levels. The same is true of the pullback low in a three-point extension. Our chart caption for the extension tool makes this point: until the pullback bottoms, the base moves and the lines shift.

This is not a flaw in the tool. It is a fact about live markets. It does mean that historical charts flatter Fibonacci tools. On a past chart, you can see where each swing ended. In real time, you could not.

### A short test of your own consistency

Take ten charts you have not looked at before. For each, write down your rule for the swing, then draw the retracement. Ask a friend to do the same with your written rule. If you get different anchors on several charts, your rule is not yet a rule. Fix it before trusting any level it produces.

## 5. Confluence with other levels

Confluence means two or more separate reasons for a level falling in the same price area. A [Fibonacci confluence](/fibonacci-confluence/) is where a Fibonacci level lines up with another level, or with a second Fibonacci level from a different swing.

The idea is that a price area marked by several tools is more likely to matter than one marked by a single tool. That is a plausible idea. It is also easy to abuse. The more tools you add, the more levels you have, and the easier it is to find two that roughly meet.

### Common partners

**Previous highs and lows.** A retracement level that lands near an earlier swing high or low is the most common type of confluence. The earlier level is visible to everyone, regardless of how they draw their Fibonacci lines. The [support and resistance guide](/guide/support-and-resistance-guide/) covers how those levels are found and why many traders watch them.

**Round numbers.** Prices such as 100, 1.2000 or 50,000 attract orders, because people like round numbers. A Fibonacci level near a round number shares that attention. See [round numbers](/round-numbers/) and the answer on [round numbers in forex](/answers/round-numbers-in-forex/).

**Moving averages.** A pullback to a 61.8% level that also meets a widely watched moving average is another type of overlap. The [moving averages guide](/guide/moving-averages/) explains which averages are common and why they can act as dynamic support or resistance.

**Pivot points.** Daily or weekly pivot levels (section 7) can line up with a Fibonacci retracement of a recent swing.

**Two Fibonacci swings.** A 61.8% retracement of a small swing might land near the 38.2% retracement of a larger one. Some traders call this a Fibonacci cluster.

### Worked example: a cluster

Back to the share that rose from 100 to 150. Its 50% retracement is 125.00. Suppose an earlier, larger move ran from 80 to 150, a swing of 70 points. That move's 38.2% retracement is 150 − 70 × 0.382 = 123.26.

Two levels now sit at 125.00 and 123.26. Add a round number at 125 and an earlier swing high at, say, 124. A trader might mark 123 to 125 as a zone. That is what "confluence" looks like in practice: not a single line, but an area where several things meet.

### How wide is "close"?

This is the question that decides whether confluence is a real tool or a self-fulfilling search. If "close" means within 0.1%, matches are rare. If it means within 2%, matches are everywhere.

A good habit is to fix the tolerance before you look. For example: "two levels count as confluent if they are within 0.25 × the average true range of the bar I trade from". [Average true range](/atr/) scales the tolerance to the market's normal movement. Whatever rule you choose, write it down and stick to it. The answer on whether [support and resistance is a line or a zone](/answers/is-support-and-resistance-a-line-or-a-zone/) covers the same issue for horizontal levels.

### Verdict on confluence

Confluence with levels that do not depend on your own drawing (previous highs and lows, round numbers, well-known averages) is the more defensible kind. Those levels exist on everyone's chart. Confluence between two Fibonacci swings you chose yourself is weaker, because you chose both swings. It is worth noting, but it adds less than it seems.

## 6. Fibonacci time zones, fans and arcs

Retracements and extensions measure price. Three other tools bring time into the picture. They are on most platforms, and they are much less used. The reasons are worth understanding.

### Time zones

[Fibonacci time zones](/fibonacci-time-zones/) are vertical lines placed a Fibonacci number of bars after a chosen starting point. If the start is bar 0, the lines fall on bars 1, 2, 3, 5, 8, 13, 21, 34, 55, 89 and so on. Traders watch these bars for a possible turn, a burst of volatility, or the end of a move.

| Line | Bars from start |
|---|---|
| 1 | 1 |
| 2 | 2 |
| 3 | 3 |
| 4 | 5 |
| 5 | 8 |
| 6 | 13 |
| 7 | 21 |
| 8 | 34 |
| 9 | 55 |
| 10 | 89 |

**Weaknesses.** Early on, the lines are packed close together: bars 1, 2, 3 and 5 cover most of the first week of a daily chart. Something is bound to happen near one of them. Later, the lines are far apart, so most turns fall between them. The start bar is chosen by hand, and moving it by one bar moves every line. Calendar gaps (weekends, holidays) also change the count, and markets that trade 24 hours give different bar counts from those that do not. Taken together, time zones are hard to test and easy to fit to the past.

### Fans

A [Fibonacci fan](/fibonacci-fan/) draws diagonal lines from one end of a swing. Take an up move from a low to a high. The tool marks the 38.2%, 50% and 61.8% retracement levels at the time of the high, then draws lines from the low through each of those points. The lines fan out to the right. Traders watch them as rising support levels.

**Weaknesses.** The slope of each line depends on the chart's scale. Switch from a linear to a log scale, or stretch the chart, and the lines change where they cross later prices. The angles also depend on how many bars the swing took. On some platforms, the fan lines are computed in price-per-bar, which avoids the scaling issue; on others they are drawn on the screen. Check which yours does. Many traders find fans busy and hard to act on.

### Arcs

[Fibonacci arcs](/fibonacci-arcs/) draw curved lines centred on the end of a swing. The radii are set at Fibonacci fractions of the swing, usually 38.2%, 50% and 61.8%. The arcs cross price at different points as time passes, mixing price and time into one curve.

**Weaknesses.** Arcs have the same scaling problem as fans, in a stronger form. A circle on the screen is only a circle if one bar and one price unit have a fixed ratio. Change the zoom, and the arc meets future prices at different points. Because of this, arcs drawn on two platforms, or at two zoom levels, can disagree. Of all the Fibonacci tools, arcs are the hardest to define in a way that gives everyone the same lines.

### Channels

A [Fibonacci channel](/fibonacci-channel/) draws a sloping channel from a trend line and then places parallel lines at Fibonacci multiples of the channel width. It suffers from the same choices as any trend line: which two points define the slope, and which point sets the width.

### Why these tools are less used

All four add degrees of freedom: a start bar, a scale, a zoom level, a slope. Each extra choice makes it easier to fit a tool to past charts, and harder to test it fairly. They also tend to produce many lines, so price is often near one. That is the same issue as in section 12, made worse by the time axis. None of this means they never help. It means they need even more care than price retracements, and their results are harder to judge.

## 7. Fibonacci pivot points

[Pivot points](/pivot-points/) are levels calculated from the previous period's high, low and close. Floor traders used them to mark the day's likely range. [Fibonacci pivot points](/fibonacci-pivot-points/) use the same central pivot, then space the support and resistance levels using Fibonacci ratios of the previous range.

### The formula

> Pivot (P) = (previous high + previous low + previous close) ÷ 3
>
> Range (R) = previous high − previous low
>
> R1 = P + 0.382 × R, R2 = P + 0.618 × R, R3 = P + 1.000 × R
>
> S1 = P − 0.382 × R, S2 = P − 0.618 × R, S3 = P − 1.000 × R

Some platforms add extra levels, such as 1.618 × R, or calculate the pivot slightly differently. Check your settings.

### Worked example

Yesterday's high was 110, low was 100 and close was 106.

- P = (110 + 100 + 106) ÷ 3 = 105.33
- R = 110 − 100 = 10

| Level | Calculation | Price |
|---|---|---|
| R3 | 105.33 + 10 × 1.000 | 115.33 |
| R2 | 105.33 + 10 × 0.618 | 111.51 |
| R1 | 105.33 + 10 × 0.382 | 109.15 |
| Pivot | (110 + 100 + 106) ÷ 3 | 105.33 |
| S1 | 105.33 − 10 × 0.382 | 101.51 |
| S2 | 105.33 − 10 × 0.618 | 99.15 |
| S3 | 105.33 − 10 × 1.000 | 95.33 |

### How they differ from a retracement

Fibonacci pivots have one big advantage over hand-drawn retracements: there is no swing to choose. The inputs are the previous period's high, low and close, which everyone agrees on (given the same session times). That makes pivots objective and easy to test.

The trade-off is that the previous day's range is an arbitrary unit. It is not a "move" in the sense of a trend leg. It is just what happened between two clock times. Session times also matter: a forex "day" can end at different hours on different platforms, which changes the high, low and close.

For how pivots compare with other levels, see the answer on [pivot points vs support and resistance](/answers/pivot-points-vs-support-and-resistance/). Other pivot formulas include [Camarilla](/camarilla-pivots/), [Woodie](/woodie-pivots/) and [DeMark](/demark-pivots/).

### Verdict

Fibonacci pivots are the most testable of the Fibonacci tools, because they have no hand-picked inputs. That makes them a good place to start if you want to check, on your own data, whether Fibonacci-spaced levels behave differently from evenly spaced ones. The ratios themselves have no special status here. They are one way of spacing levels around a pivot, among several.

## 8. Harmonic patterns

[Harmonic patterns](/harmonic-patterns/) are price shapes in which each swing is a set Fibonacci ratio of another. They are drawn with four or five points, usually labelled X, A, B, C and D. The final point, D, is called the potential reversal zone. Traders watch it for a turn.

The family began with a layout described by H. M. Gartley in his 1935 book *Profits in the Stock Market*. Gartley's version did not use precise Fibonacci ratios. Later writers added them. The best known are Larry Pesavento, in *Fibonacci Ratios with Pattern Recognition* (1997), and Scott Carney, in *Harmonic Trading, Volume One* (2010) and earlier writing. Carney named and defined several of the modern patterns, including the bat and the crab.

### The basic layout

A bullish pattern (expecting a rise from D) goes like this:

- **X to A:** a rise.
- **A to B:** a pullback, measured as a retracement of XA.
- **B to C:** a bounce, measured as a retracement of AB.
- **C to D:** a fall, measured as an extension of BC, and placing D at a set retracement (or extension) of XA.

A bearish pattern is the mirror image. The ratios are the same.

The key idea is that several ratios should point to the same area for D. In a [Gartley](/gartley-pattern/), for example, D should sit near the 0.786 retracement of XA and also near a 1.272 to 1.618 extension of BC. When both line up, the area is the potential reversal zone.

### AB=CD

The [AB=CD pattern](/abcd-pattern/) is the simplest harmonic shape and sits inside most of the others. It has three legs:

- **A to B:** a move.
- **B to C:** a pullback, usually 0.382 to 0.886 of AB.
- **C to D:** a move in the same direction as AB, roughly equal to AB in price (and often in time).

Some versions accept CD at 1.272 or 1.618 times AB.

**Worked example.** A bearish-to-bullish AB=CD. A is at 150 and price falls to B at 130 (AB = 20). It bounces to C at 140, which is 0.5 of AB. If CD equals AB, D is at 140 − 20 = **120**. The 1.272 version puts D at 140 − 20 × 1.272 = 114.56. The 1.618 version puts it at 140 − 20 × 1.618 = 107.64.

### The textbook ratio table

The table below gives the ratios as most commonly published. Ranges differ a little between books and between software packages. Where we are aware of a major difference, we say so.

| Pattern | AB as share of XA | BC as share of AB | CD as multiple of BC | D as share of XA | Main source |
|---|---|---|---|---|---|
| AB=CD | (no X) | 0.382 to 0.886 | CD = AB (or 1.272 to 1.618 × AB) | (no X) | Gartley (1935) layout; Pesavento (1997) ratios |
| Gartley | 0.618 | 0.382 to 0.886 | 1.272 to 1.618 | 0.786 retracement | Gartley (1935) layout; ratios from Pesavento and Carney |
| Bat | 0.382 to 0.5 | 0.382 to 0.886 | 1.618 to 2.618 | 0.886 retracement | Scott Carney, around 2001 |
| Butterfly | 0.786 | 0.382 to 0.886 | 1.618 to 2.618 | 1.27 to 1.618 extension (beyond X) | Commonly credited to Bryce Gilmore; ratios in Carney's books |
| Crab | 0.382 to 0.618 | 0.382 to 0.886 | 2.24 to 3.618 | 1.618 extension (beyond X) | Scott Carney, around 2000 |
| Shark | varies by source | varies by source | varies by source | commonly 0.886 to 1.13 of the reference leg | Scott Carney, 2010s; definitions vary |
| Cypher | 0.382 to 0.618 | C extends 1.272 to 1.414 of XA past A | (see note) | D at 0.786 of the X-to-C swing | Commonly credited to Darren Oglesbee; not in Carney's core set |

Notes on the table:

- The [bat](/bat-pattern/), [butterfly](/butterfly-pattern/) and [crab](/crab-pattern/) pages give each shape in more detail.
- The [shark](/shark-pattern/) is the least settled. Sources disagree on the middle legs and on which leg the completion is measured against. We give only the commonly quoted completion range.
- The [cypher](/cypher-pattern/) breaks the usual layout: C goes beyond A, and D is measured against the X-to-C swing, not against XA.
- "Beyond X" means D is further from A than X is. In a bullish butterfly or crab, D is below X.

### Worked example: a bullish Gartley

X is at 100. Price rises to A at 120, so XA is 20 points.

- **B:** a 0.618 retracement of XA. B = 120 − 20 × 0.618 = **107.64**.
- **C:** a bounce of 0.382 to 0.886 of AB. AB is 12.36 points. We pick C = 115 for the example. That bounce is 7.36 points, or 0.595 of AB, inside the range.
- **D:** a 0.786 retracement of XA. D = 120 − 20 × 0.786 = **104.28**.
- **Check the CD leg.** C to D is 115 − 104.28 = 10.72 points. As a multiple of BC (7.36), that is 1.457, inside the 1.272 to 1.618 range.

So the two measures agree, and 104.28 is the potential reversal zone. A textbook stop would sit below X at 100, because a fall below X breaks the pattern's definition.

### Worked example: a bullish bat

Same X = 100 and A = 120.

- **B:** a 0.5 retracement. B = 120 − 10 = 110.
- **D:** a 0.886 retracement of XA. D = 120 − 20 × 0.886 = **102.28**.

The bat's D is much closer to X than the Gartley's: 2.28 points away rather than 4.28. That is the main practical difference. A stop below X is tighter relative to the entry, which changes the size of 1R (section 10). The answer to "which one is it?" depends mostly on where B landed.

### Tolerance

Real charts rarely hit exact ratios. B at 0.61 or 0.63 is often accepted as "0.618". Different authors and different pattern scanners accept different tolerances. That is the main source of subjectivity in harmonic trading. A wider tolerance finds more patterns. It also lets in shapes that are not really the textbook pattern at all.

There is also a naming problem. A shape that misses one pattern's ratios often fits another's. If B is at 0.5, it is not a Gartley, but it might be a bat. With seven named patterns and loose tolerances, a trader looking at a four-leg swing can often find some name for it. That is not a test.

### What the ratios do and do not do

The ratios define the shape. They do not prove anything about what happens next. The published sources describe the patterns and their trading rules. Independent testing is much thinner, and results depend heavily on the definitions and tolerances used. Our own chart captions for the bat and cypher examples say the same thing: they were picked as clear illustrations, not as evidence, and many completions fail. The answer on whether [harmonic patterns are reliable](/answers/are-harmonic-patterns-reliable/) goes further into this.

### Verdict on harmonic patterns

Harmonic patterns turn the vague idea of "a pullback that might end here" into a precise, checkable shape. That precision is useful: it gives a defined entry area, a defined invalidation point (beyond X, or beyond the D range), and so a defined risk. What the precision does not give is evidence. Treat the ratio tables as definitions you can test, not as rules the market follows. The [chart patterns guide](/guide/chart-patterns/) covers the wider family of pattern tools and the same testing problems.

## 9. Elliott wave and Fibonacci

The [Elliott wave](/elliott-wave/) principle is a theory that price moves in repeating patterns: five waves in the direction of the main trend, then three waves against it. Ralph Nelson Elliott set it out in *The Wave Principle* (1938). A. J. Frost and Robert Prechter brought it to a wide audience in *Elliott Wave Principle: Key to Market Behavior* (1978).

Fibonacci ratios appear in Elliott wave work as guidelines for the size of waves. Frost and Prechter describe them in detail. They are presented as common relationships, not as rules. The rules of Elliott wave are separate: for example, that wave 2 never retraces more than 100% of wave 1, and that wave 3 is never the shortest of waves 1, 3 and 5.

### The published guidelines, briefly

| Wave | Common Fibonacci guideline |
|---|---|
| Wave 2 | Often retraces 50% or 61.8% of wave 1 |
| Wave 3 | Often 1.618 times the length of wave 1 |
| Wave 4 | Often retraces about 38.2% of wave 3 |
| Wave 5 | Often equal to wave 1, or 0.618 of the distance from the start of wave 1 to the end of wave 3 |
| Corrective wave C | Often equal to wave A, or 1.618 times it |

### Worked example

Wave 1 runs from 100 to 120, a 20-point move.

- **Wave 2 at 50%:** 120 − 20 × 0.5 = 110.00.
- **Wave 2 at 61.8%:** 120 − 20 × 0.618 = 107.64.
- **Wave 3 at 1.618 × wave 1:** if wave 2 ended at 110, wave 3 targets 110 + 20 × 1.618 = 142.36. If wave 2 ended at 107.64, the target is 107.64 + 32.36 = 140.00.

### The neutral view

Elliott wave is one of the most debated methods in technical analysis. Its supporters see it as a map of crowd psychology. Its critics point out that wave counts often change after the fact, that two skilled analysts can count the same chart differently, and that the theory is hard to test because a count can be revised to fit what happened. The Fibonacci guidelines inherit all of that. They are only as good as the count they hang on.

If you use them, the same rules apply as for any Fibonacci tool: define the count and the swing in advance, note the guideline, and see what happens. Do not judge them on charts where you already know the ending.

## 10. Trading with Fibonacci levels

This section turns levels into trade plans. Every example is in R. One R is the risk on the trade:

> 1R = (side-correct fill price − first stop price) × position size

"Side-correct" means a long trade is filled at the ask and stopped at the bid, and a short trade is filled at the bid and stopped at the ask. The spread is part of the risk, not something to ignore. A clean stop, filled exactly at the stop price, loses exactly 1R. Commission, slippage and gaps come on top of that. Stops only tighten once the trade is on: they move towards the price, never away from it. See [does spread count towards your stop loss](/answers/does-spread-count-towards-stop-loss/) and [position size from your stop loss](/answers/position-size-from-stop-loss/) for the background.

The numbers below are made up for the examples. They are not results.

### Entries

Common ways traders use a retracement level for entry:

- **Limit order at the level.** Place a buy limit at, say, the 61.8% retracement. You get the best price if it fills, but you also fill when price slices straight through.
- **Wait for a reaction.** Wait for price to reach the level and then show a sign of turning: a strong close back above it, a [bullish engulfing](/bullish-engulfing/) candle, or a break of a small down-trend line. You give up some price for some evidence.
- **Zone entry.** Treat the area between two levels (for example 0.5 to 0.618) as a zone and scale in. This admits that nobody knows which line, if any, will hold.

None of these is better in general. They trade off price against evidence.

### Stops beyond the swing

The textbook stop for a retracement entry sits beyond the start of the swing being measured. For a pullback in an up move, that is below the swing low. The logic is plain: if price goes below the swing low, the move that the retracement was measuring has been fully undone. The idea of "buying a pullback" is wrong.

Some traders use a tighter stop just beyond the next Fibonacci level (for example, below 0.786 when entering at 0.618). That makes 1R smaller, so the same money risk buys a bigger position. It also means more stop-outs from normal noise. The [stop losses and risk guide](/guide/stop-losses-and-risk-guide/) covers these trade-offs in depth, and [why your stop loss keeps getting hit](/answers/why-does-my-stop-loss-keep-getting-hit/) covers the common causes.

For harmonic patterns, the textbook stop is beyond X (for the Gartley and bat) or beyond the far end of the D range (for the butterfly and crab).

### Targets

Common targets are:

- The end of the swing (the previous high, in a long trade).
- An extension: 1.272 or 1.618 of the swing.
- For harmonic patterns, retracements of the C-to-D or A-to-D leg, such as 0.382 and 0.618, or a return to A or C. These are conventions in the published books, not tested rules.

### Worked example: a long at the 61.8% retracement

The share rose from 100 to 150. A trader places a buy limit at the 61.8% retracement, 119.10. The ask touches 119.10 and the order fills there. The first stop is a sell stop at 99.50, just below the swing low. The position size is 50 shares.

- Risk per share = 119.10 − 99.50 = 19.60
- 1R = 19.60 × 50 = **980**

Now four possible outcomes.

| Outcome | Exit price | Profit or loss | In R |
|---|---|---|---|
| Clean stop | 99.50 (stop fills exactly) | (99.50 − 119.10) × 50 = −980 | −1.00R |
| Gap through the stop | Opens at 97.00, fills there | (97.00 − 119.10) × 50 = −1,105 | −1.13R |
| Target at the old high | Sells at 150.00 (bid) | (150.00 − 119.10) × 50 = +1,545 | +1.58R |
| Stop tightened, then hit | Stop raised to 112.00 and hit cleanly | (112.00 − 119.10) × 50 = −355 | −0.36R |

Commission comes on top. If the broker charges 2 per side, a round trip costs 4. That is 4 ÷ 980 = 0.004R. Small here, but larger for small positions and for frequent traders.

A few points stand out:

- **The clean stop is exactly −1R.** That is the definition. If your losses are regularly bigger than 1R on clean stops, your R is being measured wrong.
- **The gap costs more than 1R.** A stop order is a request to trade once the stop price is reached. If the market opens below it, you get the next available price. See [what happens to a stop loss when the market gaps](/answers/stop-loss-when-market-gaps/).
- **The target pays 1.58R.** That ratio comes almost entirely from where the levels sit. From the 61.8% level, the old high is 0.618 of the swing away and the swing low is 0.382 away, so reward to risk is 0.618 ÷ 0.382 = 1.62 before the stop buffer. The buffer below the swing low makes 1R slightly bigger: the reward is 30.90 against a risk of 19.60.
- **The tightened stop loses less than 1R.** That only works because the stop moved up, towards price. Moving a stop down, away from price, would increase the risk beyond 1R. The answer on [whether you should move your stop loss further away](/answers/should-you-move-your-stop-loss-further-away/) covers why that habit causes damage.

### Worked example: the same trade at the 38.2% level

What if the trader had entered at the shallower 38.2% level, 130.90, with the same stop at 99.50?

- Risk per share = 130.90 − 99.50 = 31.40
- With a fixed money risk of 980, the position is 980 ÷ 31.40 = 31.2 shares. Rounding down to 31 shares makes 1R = 31.40 × 31 = 973.40.
- Target at 150.00: reward per share = 19.10. Profit = 19.10 × 31 = 592.10, which is +0.61R.

The shallower entry fills more often (price reaches 38.2% before it reaches 61.8%), but pays much less in R when it works. The deeper entry pays more in R, but fills less often, and when price reaches the deep levels the trend may already be in trouble. Neither is "right". This is a basic trade-off, and the levels make it visible.

### Worked example: a short at a down-move retracement

The currency pair fell from 80 to 60, then bounced. A trader sells at the 61.8% retracement, 72.36, filled at the bid. The stop is a buy stop at 80.20, just above the swing high. Size: 100 units.

- Risk per unit = 80.20 − 72.36 = 7.84
- 1R = 7.84 × 100 = 784
- A clean stop at 80.20 loses (72.36 − 80.20) × 100 = −784, which is −1.00R.
- A target at the swing low, 60.00, filled at the ask, gains (72.36 − 60.00) × 100 = 1,236, which is +1.58R.

The R multiple matches the long example because the levels are the same fractions of the swing. Only the stop buffer differs.

### Worked example: a Gartley in R

From section 8: X = 100, A = 120, D = 104.28. A trader buys at D, filled at the ask at 104.28. The stop sits below X at 99.80. Size: 100 shares.

- Risk per share = 104.28 − 99.80 = 4.48
- 1R = 448
- A common target is the 0.618 retracement of the A-to-D leg. AD is 15.72 points. 0.618 of that is 9.715, rounded to 9.71, so the target is 104.28 + 9.71 = 113.99. Gain = 9.71 × 100 = 971, which is +2.17R.

That looks attractive on paper. The catch is the fill rate and the failure rate. A deep pattern stop is far from many entries, but a pattern that fails at D can fail fast. The R figure on a single plan says nothing about how often it works.

### Risk is decided before the trade

Every example above follows the same order: pick the level, pick the stop, compute 1R, then size the position so 1R is the money you are willing to lose. Fibonacci levels help with the first two steps. They do not change the third. A level that "looks strong" is not a reason to risk more.

## 11. Why levels sometimes seem to work

Many traders say Fibonacci levels work. Many charts show price turning near them. Before treating that as evidence, consider the other explanations. Each of these can make levels look useful even if the ratios themselves have no special power.

### Attention

Fibonacci tools are on almost every platform and taught in almost every course. If many traders watch the same 61.8% level and place orders near it, price may react there for that reason alone. This is sometimes called a self-fulfilling effect. If it exists, it depends on traders agreeing on the swing, which, as section 4 showed, they often do not. It would also be stronger in markets and timeframes where many people draw the same obvious swing.

### Overlap with other levels

A retracement level often sits near a previous high or low, a round number or a moving average (section 5). If price reacts there, which level caused it? Usually you cannot tell. The reaction might have happened without the Fibonacci line at all.

### Many levels cover much of the range

This is the biggest point, and the simplest. A standard retracement tool has five interior levels: 0.236, 0.382, 0.5, 0.618 and 0.786. If you count any pullback that ends within a small distance of a level as a "hit", those small distances add up.

| Tolerance each side of each level | Share of the swing covered by the five levels |
|---|---|
| ±1% of the swing | 10% |
| ±2.5% of the swing | 25% |
| ±5% of the swing | 50% |

With a ±5% tolerance, half of all possible pullback depths count as "at a Fibonacci level". (The five zones do not overlap at that width, because the closest pair of levels, 0.382 and 0.5, are 11.8% apart.) Any pullback that ends at a random depth has about a coin-flip chance of looking like a hit. Add the extension levels, a second swing and a round number, and almost every turn has a nearby level.

### Hindsight

On a historical chart, you can see where a pullback ended. It is easy to choose the swing that puts a level there, and to forget the charts where nothing lined up. Books and social posts show the clean examples. They do not show the many levels that price ignored.

### Pullbacks have to end somewhere

Every pullback in an up move ends at some depth between 0% and 100% (or else the move is undone). Most end somewhere in the middle. So the middle levels, 0.382, 0.5 and 0.618, are where many pullbacks end, almost by definition. That is not the same as those levels causing the turns.

### What would be convincing

Convincing evidence would show that pullbacks end at the Fibonacci depths more often than at nearby depths that are not Fibonacci numbers (say 0.45 or 0.70), using swings chosen by a fixed rule, on data not used to design the test. That is a demanding standard. As far as we are aware, the independent evidence for it is thin and mixed. We have not tested it ourselves. Section 12 shows how you could.

## 12. Testing Fibonacci without fooling yourself

You can test Fibonacci ideas yourself. The main danger is that the tools make it very easy to see what you expect to see. The steps below are designed to stop that. Our [methods page](/methods/) sets out how we approach testing in general.

### Step 1: fix the swing rule

Write down exactly how a swing is found, so a computer could do it. For example: "a swing high is the highest high of the last 20 bars, confirmed when price has fallen 2 × ATR from it". Without this, every test is contaminated by hindsight swing choice (section 4).

### Step 2: fix what counts as a hit

Decide the tolerance before you look (section 11). Decide what "reacting" means. For example: "price comes within 0.25 × ATR of the level, then closes at least 1 × ATR away in the other direction within 5 bars". Vague words like "respected" or "bounced" cannot be tested.

### Step 3: build a random-level baseline

This is the step most people skip, and it is the most important. Pick some depths that are not Fibonacci ratios, such as 0.30, 0.45, 0.55 and 0.70. Run exactly the same test on those. If the Fibonacci levels do no better than the random ones, the ratios are not adding anything. The reactions you saw were reactions to pullbacks in general.

You can also shuffle: pick five random depths between 0.2 and 0.8 for each swing, many times over, and see how often those random sets do as well as the Fibonacci set.

### Step 4: count every swing

Count the swings where price ignored every level, not just the ones where it reacted. With five levels and a tolerance, as section 11 showed, price is always near one. The question is whether it reacts there more than chance.

### Step 5: measure trades in R, net of costs

If you test entries, measure every trade in R, as in section 10. Include the spread, commission, slippage and gaps. A level that looks good before costs can disappear after them, especially on short timeframes.

### Step 6: hold data back

Design the test on one part of the data. Then run it once, unchanged, on a later part you have not looked at. If the result only holds in the data you used to choose the settings, it is likely to be a fitting effect.

### Step 7: count what you tried

If you tried five swing rules, three tolerances and four timeframes, you ran 60 tests. One of them will look good by chance. Report how many you tried, and judge the best result against that number.

### A worked baseline check

Here is how the numbers behave, using only arithmetic. Suppose you test the five standard retracement levels with a ±2.5% tolerance. Section 11's table shows they cover 25% of all possible depths. If pullbacks ended at random depths spread evenly across the swing, about 25% would count as "hits". So a test that finds "price stopped at a Fibonacci level in 25% of swings" has found nothing at all. Only a figure clearly above the random baseline, on held-back data, would be interesting.

Real pullback depths are not spread evenly, so the true baseline has to be measured on your data, using the random levels from step 3. The arithmetic simply shows why the baseline cannot be skipped.

### Harmonic patterns need extra care

Harmonic tests have more choices: tolerance on each leg, which patterns to include, what to do when one shape fits two names, where the stop goes, and which target to use. Each choice is a chance to fit the past. Fix them all before testing. A pattern scanner helps, because it applies the same rules every time, but check its definitions against the source you are testing.

## 13. Common mistakes

These are the mistakes that come up most often with Fibonacci tools. Most of them come back to the same root: choices made after seeing the result.

- **Choosing the swing after the turn.** Moving the anchors until a level lines up with a past turn. Any swing can be made to "work" on a past chart.
- **Mixing wicks and closes.** Using whichever version fits better on each chart. Pick one rule.
- **Treating levels as lines, not areas.** Expecting price to turn at exactly 119.10, then calling a turn at 118.90 a failure, or a turn at 121.00 a success. Decide your tolerance in advance.
- **Ignoring how much of the range the levels cover.** Five retracement levels plus a few extensions cover much of the chart. Being "near a level" is common, not special.
- **Calling 0.5 a Fibonacci ratio.** It is a useful level, but it has a different history. That matters when you weigh claims about "natural" ratios.
- **Using the wrong extension tool.** Mixing up two-point and three-point extensions, so the 1.618 "target" is 30 points from where someone else meant it.
- **Drawing on an unfinished swing.** Treating levels as fixed while the swing end is still moving.
- **Stacking tools until something lines up.** Adding fans, arcs, time zones and several swings until there is "confluence" somewhere. More tools mean more coincidences.
- **Renaming a failed harmonic pattern.** When a Gartley fails, calling it a butterfly instead. Decide the pattern before D, and accept the outcome.
- **Putting the stop at the level.** Placing a stop exactly at the next Fibonacci line, where many others may place theirs, with no buffer for the spread or normal noise.
- **Widening the stop.** Moving the stop further away when price nears it, because "the 0.786 might hold". That raises the risk above 1R. Stops only tighten.
- **Ignoring costs.** Judging a level by gross results. Spread, commission, slippage and gaps all count.
- **Trusting the textbook examples.** Books show patterns that worked. They rarely show the ones that did not.

## 14. Comparison table and FAQ

### Comparison of Fibonacci tools

| Tool | Inputs | Objective? | Main use | Main weakness |
|---|---|---|---|---|
| [Retracement](/fibonacci-retracement/) | Two swing points | Arithmetic yes; swing choice no | Pullback entry areas | Swing choice; many levels cover much of the range |
| Two-point [extension](/fibonacci-extension/) | Two swing points | Arithmetic yes; swing choice no | Targets beyond the swing | Confused with three-point version |
| Three-point extension or [projection](/fibonacci-projection/) | Three swing points | Arithmetic yes; swing choice no | Targets for the next leg | Pullback end moves until confirmed |
| [Time zones](/fibonacci-time-zones/) | One start bar | Arithmetic yes; start bar no | Watching for turns in time | Lines bunch early and spread late; easy to fit |
| [Fan](/fibonacci-fan/) | Two swing points plus chart scale | Partly: depends on scale | Sloping support or resistance | Changes with zoom and scale |
| [Arcs](/fibonacci-arcs/) | Two swing points plus chart scale | Least objective | Mixing price and time | Strongly scale-dependent |
| [Channel](/fibonacci-channel/) | Trend line plus a width point | Partly | Sloping bands | Trend line choice |
| [Fibonacci pivots](/fibonacci-pivot-points/) | Previous high, low, close | Yes, given session times | Intraday levels | Range is an arbitrary unit |
| [Harmonic patterns](/harmonic-patterns/) | Four or five swing points | Ratios yes; tolerance and naming no | Defined reversal zone and stop | Tolerance; many names fit one shape |
| [Elliott wave](/elliott-wave/) guidelines | A wave count | No: counts are revised | Wave targets | Depends on a count that can change |

### FAQ

**Are Fibonacci levels based on anything real?**

The ratios are real mathematics: they come from the Fibonacci sequence and the golden ratio. Whether markets respond to them is a separate question about markets. The evidence that they do, beyond what chance and trader attention would explain, is thin and mixed. Treat them as a standard way to divide a move, not as natural laws.

**Which Fibonacci retracement level is most important?**

Traders most often watch 0.382, 0.5 and 0.618, because they mark moderate pullbacks and many pullbacks end in that middle area. That is partly because the middle of the range is where pullbacks usually end anyway. No level has been shown to matter in general. Which one you watch should follow from your plan, decided before price arrives.

**Is 0.5 a Fibonacci ratio?**

No. It does not come from the Fibonacci sequence or the golden ratio. It is on retracement tools because traders use it, influenced by Dow Theory's idea that markets often retrace about half a move, and by W. D. Gann's work with halves. It is a fair level to watch. It just has a different origin.

**What is the difference between a retracement and an extension?**

A retracement measures a pullback inside a move, between its start and end. An extension measures beyond the move, as a multiple of it. Retracements are mainly used for entries in a trend. Extensions are mainly used for targets. Both use the same arithmetic on a chosen swing.

**Should I draw Fibonacci levels on wicks or closes?**

Most textbooks and platforms use the extremes (wicks) by default, because that is where price actually traded. Closes filter out spikes. The levels can differ by more than a typical stop. The important thing is to pick one rule and use it every time, including when you look back at past trades.

**What timeframe works best for Fibonacci?**

There is no tested best timeframe. Swings on higher timeframes are seen by more traders and took longer to form, so many traders give them more weight. Shorter timeframes produce more swings, more levels and higher costs relative to the moves. Choose the timeframe you trade from, and define the swing rule for that timeframe.

**Where should the stop go on a Fibonacci trade?**

The textbook place is beyond the start of the swing being measured: below the swing low for a long pullback trade, above the swing high for a short one. Some traders use a tighter stop beyond the next level. Either way, size the position so the distance from the side-correct fill to the stop equals the money you are prepared to lose, and only tighten it afterwards.

**Do harmonic patterns work?**

The ratios define the patterns precisely, which makes them testable. The published books describe how to trade them, but independent testing is limited and depends heavily on tolerances and definitions. Many completions fail. Treat them as defined setups with a clear invalidation point, and test them on your own data before trusting them.

**What is Fibonacci confluence?**

It is where a Fibonacci level lines up with another level: a previous high or low, a round number, a moving average, a pivot, or a Fibonacci level from another swing. Confluence with levels that do not depend on your own drawing is more meaningful. Decide in advance how close two levels must be to count.

**Do Fibonacci levels work the same way in crypto, forex and stocks?**

The arithmetic is identical in every market. What differs is how the swings form, how costs compare with the moves, and when a "day" starts and ends. Crypto trades all the time, so daily highs and lows depend on the chosen session close. No market has been shown to respect the levels more than another.

**How do Fibonacci levels relate to Elliott wave?**

Elliott wave analysts use Fibonacci ratios as guidelines for wave sizes: wave 2 often retracing 50% or 61.8% of wave 1, wave 3 often 1.618 times wave 1, and so on. These come from Frost and Prechter's 1978 book. They are tendencies, not rules, and they depend on the wave count being right.

**Can I test Fibonacci levels myself?**

Yes. Fix the swing rule, fix what counts as a hit, and compare the Fibonacci levels with random, non-Fibonacci depths using the same rules. Count every swing, measure trades in R after costs, and keep some data back for a single final check. Section 12 sets out the steps.

## Sources

- Leonardo of Pisa (Fibonacci) (1202). *Liber Abaci*.
- Gartley, H. M. (1935). *Profits in the Stock Market*. Later reprinted by Lambert-Gann Publishing.
- Elliott, Ralph Nelson (1938). *The Wave Principle*.
- Frost, A. J. and Prechter, Robert R. (1978). *Elliott Wave Principle: Key to Market Behavior*. New Classics Library.
- Pesavento, Larry (1997). *Fibonacci Ratios with Pattern Recognition*. Traders Press.
- Murphy, John J. (1999). *Technical Analysis of the Financial Markets*. New York Institute of Finance.
- Carney, Scott M. (2010). *Harmonic Trading, Volume One: Profiting from the Natural Order of the Financial Markets*. FT Press.
- Kirkpatrick, Charles D. and Dahlquist, Julie R. (2010). *Technical Analysis: The Complete Resource for Financial Market Technicians*, 2nd edition. FT Press.
