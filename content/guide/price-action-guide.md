---
slug: price-action-guide
title: "Price action and market structure: the complete guide"
description: How to read bars and swings, define trends and ranges, judge breaks of structure, test smart money terms fairly and plan trades in R from structure.
query: price action trading
publish: 2027-09-20
reviewed: 17 November 2026
cluster: [price-action, market-structure, swing-highs-lows, williams-fractals, break-of-structure, change-of-character, market-structure-shift, order-block, breaker-block, mitigation-block, fair-value-gap, liquidity-sweep, equal-highs-lows, premium-discount, displacement, optimal-trade-entry, smart-money-concepts, pin-bar, inside-bar, outside-bar, fakey-pattern, measured-move, multiple-time-frame-analysis]
value: [table, example, verdict]
chart: market-structure
---

Price action trading means making decisions from the price chart itself. You read the bars, the swings and the levels. You use few indicators, or none. The idea is simple: every indicator is built from price, so why not read the source directly?

That idea is sound as far as it goes. An indicator cannot know anything that the bars do not hold. A moving average is a smoothed close. An oscillator is a rescaled change in price. Reading the raw bars removes a layer of delay and a layer of settings.

But price action has its own problem, and it is a big one. Much of it is subjective. Two traders can look at the same chart and label different swings, different trends and different "key" bars. A rule that lives only in the reader's eye cannot be tested, and a method that cannot be tested cannot be checked. Most of this guide is about turning loose chart-reading into rules that two people would apply the same way.

The guide covers the whole subject in one place. It starts with what price action is and how swings are defined. It then works through trend and range, breaks of structure and changes of character, pullbacks and measured moves, the classic bar setups, multiple timeframes, the vocabulary of smart money concepts (SMC), liquidity and stop runs, and how to plan entries, stops and targets in R. It ends with how the method behaves across markets, how to test it without fooling yourself, the common mistakes, a comparison table and an FAQ.

The short version, before the detail: market structure is a useful way to describe what price has done. Swing highs and lows, trends and ranges can all be defined objectively. Many popular labels, including most SMC terms, are new names for older ideas such as support, resistance, gaps and false breakouts. Each one can be tested once it is written as a rule. Very few people write them as rules.

We have not run a price action backtest of our own, so this guide contains no test results of ours. It contains the standard, widely published definitions, worked examples you can check with a calculator, a worked swing-labelling exercise, tables and honest verdicts. Where a number comes from a choice we made for an example, we say so. Nothing here is a recommendation to buy or sell anything.

## 1. What price action trading is

[Price action](/price-action/) is the movement of price over time, as shown by bars or candles. Price action trading is any approach that bases its decisions mainly on that movement. The usual inputs are:

- **The bars themselves:** their open, high, low and close, their size and where they close in their range.
- **Swings:** the turning points where price stopped rising and started falling, or the reverse.
- **Levels:** prices where the market turned before, such as [support and resistance](/support-and-resistance/).
- **Structure:** the pattern the swings make together. Rising highs and lows, falling highs and lows, or a sideways range.

Some price action traders use no indicators at all. Many use one or two, such as a moving average for context or the [average true range (ATR)](/atr/) for sizing stops. The label is loose. What unites the group is that the chart, not an indicator, makes the decision.

### Where the idea comes from

Reading price directly is the oldest form of technical analysis. Charles Dow's writing in the late 1800s and early 1900s described trends as a series of rising or falling peaks and troughs. That idea became [Dow theory](/dow-theory/). Richard Wyckoff, writing in the early 1900s, described how price and volume behave around ranges, tests and false breaks. That became the [Wyckoff method](/wyckoff-method/). Japanese rice traders read single candles and small groups of candles long before either, which is the root of candlestick analysis.

Modern price action teaching borrows from all three. Pin bars and inside bars are bar-reading. Higher highs and higher lows are Dow. Springs, upthrusts and stop runs are Wyckoff. The newest layer, smart money concepts, renames many of these ideas again. Section 8 covers that in detail.

### What price action can and cannot do

Price action can describe what the market has done in a clear, compact way. "Price made a higher high and then a higher low" says a lot in one sentence. It can give you places to put stops that make sense, such as just beyond the last swing. It can tell you when a trend has stopped behaving like a trend.

Price action cannot see the future any better than any other method. A pin bar is a bar with a long wick. It records that price went somewhere and came back. It does not record why, and it does not promise what happens next. A higher low is only a higher low once price has moved away from it. Until then, it is just the latest low.

### Price action versus indicators

People often frame this as a contest. It is not really one. An indicator is a fixed formula applied to price. Price action is a set of reading rules applied to price. Both have inputs, both have rules, and both can be tested once the rules are written down.

The real trade-offs look like this:

| Question | Price action | Indicators |
|---|---|---|
| Lag | Low; you read the bar as it closes | Varies; most smoothing adds delay |
| Settings | Hidden in the reading rules (what counts as a swing, a level, a close beyond) | Visible as numbers (period, threshold) |
| Objectivity | Low unless rules are written down | High; the formula gives one answer |
| Easy to test | Only once labels are made mechanical | Usually yes |
| Risk of hindsight | High; swings look obvious afterwards | Lower, though repainting tools exist |
| Context | Rich; the chart shows levels and history | Narrow; one number at a time |

Notice the settings row. Price action has settings. They are just not printed on the screen. "A swing high is a bar with two lower highs on each side" is a setting. "A break counts only on a close" is a setting. Treat them as you would treat an RSI period: choose them before you look, write them down and keep them fixed.

The [candlestick patterns](/guide/candlestick-patterns/) and [chart patterns](/guide/chart-patterns/) pillars cover the bar and pattern side of price action in more depth. This guide focuses on structure: swings, trends, breaks and the vocabulary that has grown up around them.

## 2. Swing structure

Everything in market structure rests on one building block: the swing. If the swings are labelled badly, every trend, break and target built on them is wrong too. So it is worth being precise.

### What a swing high and a swing low are

A [swing high](/swing-highs-lows/) is a bar whose high is above the highs of the bars around it. A swing low is a bar whose low is below the lows of the bars around it. That is the whole idea. The only question is how many bars count as "around it".

The most common objective rule is the fractal rule, popularised by Bill Williams as [Williams fractals](/williams-fractals/). In its standard form:

- **Swing high (up fractal):** a bar whose high is higher than the highs of the two bars before it and the two bars after it.
- **Swing low (down fractal):** a bar whose low is lower than the lows of the two bars before it and the two bars after it.

That is a five-bar window with the swing in the middle. Some traders use one bar each side (a three-bar window). Some use three or more. A wider window finds fewer, larger swings. A narrower window finds more, smaller ones. None is correct in general. The choice depends on what scale of move you care about.

### Ties and how platforms handle them

What if two highs are equal? The strict rule above says the middle bar must be higher than its neighbours, so a tie means no swing. Some platforms allow a tie on one side, or let the later of two equal highs count. This changes the swings you see, sometimes a lot on low-priced or slow markets where equal highs are common. If you compare your labels with someone else's, check the tie rule first.

### The confirmation lag

Here is the part many traders skip. A fractal swing high needs two bars after it. So you cannot know that bar 10 was a swing high until bar 12 has closed. Until then, bar 10 is just a high that might or might not hold.

This is not a flaw in the rule. It is the honest cost of defining a turning point. A turn only exists once price has turned. But it matters a great deal when you test a method. A chart drawn today shows every swing as if it were known at the time. It was not. Each one was confirmed two bars late (for a two-bar rule). Section 12 comes back to this, because it is one of the main ways price action tests go wrong.

### Higher highs, higher lows and their opposites

Once you have swings, you compare each one with the one before of the same kind:

- **Higher high (HH):** a swing high above the previous swing high.
- **Lower high (LH):** a swing high below the previous swing high.
- **Higher low (HL):** a swing low above the previous swing low.
- **Lower low (LL):** a swing low below the previous swing low.

An uptrend, in Dow's terms, is a run of higher highs and higher lows. A downtrend is a run of lower highs and lower lows. Anything mixed is a range or a transition. Section 3 builds on this.

### Worked swing labelling

Here is a made-up series of 17 daily bars, built for this example. It is not real market data. We apply the standard two-bar fractal rule: a swing high needs a higher high than the two bars on each side, and a swing low needs a lower low than the two bars on each side.

| Bar | High | Low | Bar | High | Low |
|---|---|---|---|---|---|
| 1 | 101.0 | 99.8 | 10 | 106.1 | 104.3 |
| 2 | 102.5 | 100.9 | 11 | 104.6 | 103.0 |
| 3 | 104.0 | 102.2 | 12 | 103.9 | 102.4 |
| 4 | 103.2 | 101.5 | 13 | 105.0 | 103.2 |
| 5 | 102.0 | 100.6 | 14 | 108.3 | 106.0 |
| 6 | 101.4 | 99.9 | 15 | 109.5 | 107.4 |
| 7 | 102.8 | 100.8 | 16 | 108.0 | 106.1 |
| 8 | 105.2 | 103.1 | 17 | 106.2 | 104.5 |
| 9 | 107.0 | 105.0 | | | |

Running the rule over every bar that has two bars on each side (bars 3 to 15) finds five swings:

| Swing | Bar | Price | Confirmed after bar | Label |
|---|---|---|---|---|
| Swing high | 3 | 104.0 | 5 | First high (nothing to compare) |
| Swing low | 6 | 99.9 | 8 | First low (nothing to compare) |
| Swing high | 9 | 107.0 | 11 | Higher high (107.0 > 104.0) |
| Swing low | 12 | 102.4 | 14 | Higher low (102.4 > 99.9) |
| Swing high | 15 | 109.5 | 17 | Higher high (109.5 > 107.0) |

Check one by hand. Bar 9 has a high of 107.0. The two bars before it have highs of 102.8 and 105.2. The two after have 106.1 and 104.6. All four are lower, so bar 9 is a swing high. Bar 12 has a low of 102.4. Its neighbours have lows of 104.3, 103.0, 103.2 and 106.0. All four are higher, so bar 12 is a swing low.

Now look at the "confirmed after bar" column. Bar 12's low was the lowest point of the pullback. But on the close of bar 12 itself, nobody knew that. Bar 13 could have gone lower. Only after bar 14 closed did the rule confirm bar 12 as a swing low. A trader who "bought the higher low at 102.4" on a chart drawn later is describing a fill that the rule could not have produced in real time.

Notice also bar 1 and bar 2. Bar 1's low of 99.8 is lower than bar 6's low of 99.9. But bar 1 has no two bars before it, so the rule cannot test it. Edges of a data series always have this problem. Swings near the start and the end of a chart are missing or unconfirmed.

The made-up series reads as a clean uptrend: HH, HL, HH. Real data is rarely this tidy. Small swings appear inside larger ones, ties occur, and gaps skip over levels. But the method is the same, and it gives one answer for one rule.

### Other ways to define swings

The fractal rule is not the only one. Common alternatives:

- **Percentage or point reversal:** a swing is confirmed when price moves a set percentage or distance away from the last extreme. A 3% rule on a daily chart ignores smaller wiggles. Many zigzag-style tools work this way.
- **ATR reversal:** the same, but the distance is a multiple of ATR, so it adapts to volatility.
- **Close-only swings:** swings are found on closing prices rather than highs and lows. This ignores wicks, which some traders prefer.
- **Discretionary swings:** the trader marks what looks "significant". This is the most common method in practice and the hardest to test.

Each gives a different set of swings from the same chart. That is fine. What is not fine is switching between them depending on which one makes the current chart look better.

### Internal and external structure

Some traders split swings into two scales. External (or major) structure uses the larger swings, the ones that define the main trend. Internal (or minor) structure uses the smaller swings inside a single leg. A downtrend can have internal higher highs inside a pullback while the external structure is still bearish.

This is the same idea as using two swing rules at once, say a two-bar fractal for internal and a five-bar fractal for external. Writing it that way makes it testable. Leaving it as "major" and "minor" by eye does not.

## 3. Trend, range and transition

With swings labelled, you can describe the state of the market. There are three broad states.

### Uptrend

An uptrend is a series of higher highs and higher lows. In the worked example, price makes HH, HL, HH. That is an uptrend by the swing rule.

You can add conditions to make the definition stricter. For example: at least two higher highs and two higher lows in a row. Or the last swing low must be above a moving average. Each condition is a setting. Write it down.

### Downtrend

A downtrend is the mirror image: lower highs and lower lows. A trend stays a downtrend, by the swing rule, until either a higher high forms or a pattern of mixed swings takes over.

### Range

A range is a period where price moves sideways between a rough ceiling and floor. The swings do not progress. You might see a lower high then a higher low, then a higher high that fails to hold, then a lower low that fails to hold. The [range trading](/range-trading/) guide covers how traders work within a range.

Ranges are hard to define objectively from swings alone, because they are defined by the absence of progress. Some rules that help:

- **Swing overlap:** the last N swing highs all sit within a band of, say, 1 ATR, and so do the last N swing lows.
- **Directional measures:** an [ADX](/adx/) reading below a chosen level, or a high [choppiness index](/choppiness-index/), suggests a lack of trend. These are indicators, so a strict price action trader may not use them, but they are objective.
- **Channel width:** a [Donchian channel](/donchian-channels/) over N bars that stays narrow compared with ATR.

### Transition

The most useful state to recognise, and the hardest, is transition: a trend that is ending or pausing. Classic signs are:

- In an uptrend, a swing high that fails to exceed the last one (a lower high).
- In an uptrend, a swing low that breaks below the last higher low.
- A big move against the trend after a long run, often with larger bars than the trend itself.

None of these is decisive alone. A single lower high inside an uptrend is often just a pause. Dow theory, in its classic form, waits for both: a lower high and then a break of the prior low, before calling the trend over. That double condition reduces false alarms at the cost of a later signal.

### How structure changes

Here is the typical sequence when an uptrend turns into a downtrend, in swing terms:

1. Higher high, higher low, higher high (uptrend).
2. Price fails to make a new high. The next swing high is lower (first warning).
3. Price falls below the last higher low (structure broken on the downside).
4. Price rallies but makes another lower high.
5. Price makes a lower low. Downtrend by the swing rule.

Step 3 is where the "change of character" label is usually applied. Step 5 confirms the new trend. Between steps 2 and 5, the market is in transition. Many trades placed in this zone fail, because neither the old trend nor the new one is in control.

### Why trend definitions disagree

Ask three traders whether a chart is trending and you may get three answers. One uses daily swings, one uses weekly, one uses a moving average. They can all be right on their own terms. A market can be in a daily downtrend inside a weekly uptrend. That is not a contradiction. It is two scales. Section 7 covers how to handle it.

## 4. Break of structure and change of character

Two of the most widely used labels in modern price action are break of structure (BOS) and change of character (CHoCH, sometimes written CHOCH). Both describe price moving beyond a prior swing. Where they differ is in which swing, and what it means.

### Break of structure

A [break of structure](/break-of-structure/) is usually defined as price moving beyond the most recent swing in the direction of the existing trend. In an uptrend, a BOS is a move above the last swing high. In a downtrend, it is a move below the last swing low.

In other words, a BOS is a new higher high in an uptrend or a new lower low in a downtrend. It is the trend continuing. The label is new. The idea is Dow's.

### Change of character

A [change of character](/change-of-character/) is usually defined as the first break against the existing trend. In an uptrend, a CHoCH is a move below the last higher low. In a downtrend, it is a move above the last lower high.

It is the first sign, by the swing rule, that the trend may be ending. It is the same as step 3 in the sequence above. Some teachers use [market structure shift](/market-structure-shift/) (MSS) as a near-synonym. Others reserve MSS for a CHoCH that comes with a strong move, often called [displacement](/displacement/).

### Where definitions differ

The terms sound precise. They are not standardised. Teachers differ on at least four points:

| Question | Common answers |
|---|---|
| Which swing must be broken? | The last swing on a fixed fractal rule; the last "significant" swing by eye; the last internal or external swing |
| Wick or close? | Any trade beyond the level; a close beyond it; a close beyond it by a set margin |
| Which timeframe? | The chart you trade; one timeframe up; any |
| Does the break need follow-through? | No; yes, a strong bar (displacement); yes, a second close beyond |

Each combination gives a different set of breaks on the same chart. So "price broke structure" means little until you say which rule you used.

### Close versus wick

The wick-or-close question is the one that matters most in practice. Take a swing high at 107.0. A bar trades up to 107.3 and closes at 106.6.

- On a wick rule, structure broke. Price traded above 107.0.
- On a close rule, it did not. The bar closed back below.

A wick rule reacts sooner and catches more breaks. It also catches more false breaks, where price pokes through and returns. A close rule is slower and filters some of those out, but it can leave you entering well after the level, with a wider stop. Neither is better in general. The [wicks or closes for support and resistance](/answers/wicks-or-closes-for-support-and-resistance/) answer covers the same choice for levels.

A middle option is a close beyond the level by a margin: for example, a close more than 0.25 ATR above the swing high. This filters tiny breaks. It is also one more setting.

### BOS and CHoCH on the worked example

Go back to the 17-bar example. Suppose the closes of the key bars were as follows (again made up for this example): bar 8 closed at 104.9, and bar 14 closed at 108.1.

- **First BOS up:** the first swing high is 104.0 at bar 3. Bar 8 trades to 105.2 and closes at 104.9. Both the wick and the close are above 104.0. On either rule, bar 8 is a break of structure to the upside.
- **Second BOS up:** the next swing high is 107.0 at bar 9. Bar 14 trades to 108.3 and closes at 108.1. Again, both rules agree.

But there is a catch on bar 8. Was the swing high at bar 3 confirmed when bar 8 broke it? Yes, it was confirmed after bar 5. And the swing low at bar 6 was confirmed after bar 8 closed. So at the close of bar 8, a trader using the two-bar rule could see a confirmed swing high broken, but could not yet see a confirmed higher low behind it. That is normal. The order in which swings confirm shapes what the rules let you know at each moment.

For a CHoCH, we would need a move below the last confirmed higher low, 102.4 at bar 12. Bar 17's low is 104.5, so no CHoCH has happened by the end of the series. If bar 18 closed at, say, 102.0, that would be a CHoCH on a close rule.

### What is testable

BOS and CHoCH are among the most testable ideas in this guide. Fix a swing rule, fix a wick or close rule, fix a timeframe, and a computer can mark every break without judgement. You can then ask simple questions: after a close-based CHoCH on the daily chart, how often did price go on to make a lower low within 20 bars, compared with a random day? We have not run that test. It can be done.

## 5. Pullbacks and impulses

Trends rarely move in a straight line. They move in legs. A leg in the direction of the trend is often called an impulse. A leg against it is a pullback (or retracement, or correction).

### Measuring pullback depth

Pullback depth is the size of the pullback as a share of the impulse before it. In an uptrend:

> Pullback depth = (swing high − pullback low) ÷ (swing high − swing low before the impulse)

In the worked example, the impulse runs from the swing low at 99.9 (bar 6) to the swing high at 107.0 (bar 9). That is 7.1 points. The pullback then falls to 102.4 (bar 12), which is 4.6 points below the high.

> Depth = 4.6 ÷ 7.1 = 0.648, or about 65%

So the pullback gave back about 65% of the impulse. Price held 35% of the gain.

### How deep is normal?

There is no standard answer, and no figure we can give you from our own data. Depth depends on the market, the timeframe, the volatility and how strong the trend is. In general terms, traders describe pullbacks as shallow (under about a third of the impulse), moderate (around a third to two-thirds) and deep (over about two-thirds). A pullback that gives back the whole impulse is no longer a pullback by the swing rule. It has made a lower low (or an equal low), and the uptrend is in question.

Those bands are descriptive, not tested thresholds. If you want to know how deep pullbacks run in the market you trade, measure them. Label swings with a fixed rule over a few years of data and record the depth of every pullback. The spread of results is your answer for that market.

### Fibonacci, briefly

Many traders measure pullbacks with Fibonacci ratios, most often 38.2%, 50% and 61.8%. These are the standard [Fibonacci retracement](/fibonacci-retracement/) levels. In the worked example, the 61.8% retracement of the 99.9 to 107.0 impulse sits at 107.0 − 0.618 × 7.1 = 102.61, close to the actual low of 102.4. Whether such ratios mark pullback ends more often than any other set of evenly spread levels is a fair question to test. A later pillar covers Fibonacci tools in full, and the [Fibonacci retracement](/fibonacci-retracement/) guide explains how the levels are drawn.

### Impulses

An impulse is a strong move in the trend direction. Traders look at a few features:

- **Bar size:** impulse bars are often larger than the bars in the pullback before.
- **Overlap:** in a strong impulse, each bar's low is near or above the previous bar's close. Little overlap means little two-way trade.
- **Closes:** impulse bars tend to close near their extremes.
- **Speed:** the impulse covers more distance per bar than the pullback did.

SMC traders call a strong impulse "displacement". It is the same thing. A strong impulse can leave a gap between bars, which leads to the fair value gap idea in section 8.

### Measured moves

A [measured move](/measured-move/) projects the size of one leg onto the next. In an uptrend:

> Target = pullback low + (impulse high − impulse low)

In the worked example: impulse 99.9 to 107.0 is 7.1 points. Pullback low is 102.4.

> Target = 102.4 + 7.1 = 109.5

In the example, bar 15 peaks at exactly 109.5. That is because the made-up data happened to land there. Do not read anything into it. Real legs are rarely equal. The measured move is an old and widely taught idea, sometimes called AB = CD. It gives a reference point, not a forecast. Traders often use it as one possible target, alongside prior levels.

### Impulse and pullback ratios

A related idea compares the time and speed of impulse and pullback. A trend that is healthy, in this reading, moves fast in the trend direction and slowly against it. When pullbacks start to take as long as impulses, or move as fast, the trend may be tiring. This is a useful description. It is also hard to make into a firm rule, because "as fast" needs a definition. Points per bar is one option.

## 6. Key price action bars and setups

Single bars and small groups of bars are the most familiar part of price action. Each pattern below has a standard, widely taught definition. Each is covered in more depth in its own guide and in the [candlestick patterns](/guide/candlestick-patterns/) pillar.

### Pin bars

A [pin bar](/pin-bar/) (short for Pinocchio bar, a name popularised by price action teachers) is a bar with a long wick on one side and a small body near the other end. A bullish pin bar has a long lower wick. A bearish pin bar has a long upper wick. It records that price pushed hard in one direction during the bar and was pushed back before the close.

A common objective definition: the wick on the long side is at least two-thirds of the bar's total range, and the body sits in the opposite third. Some teachers use a wick of at least twice the body, or three times. The candlestick equivalents are the hammer and shooting star family; the [hammer vs hanging man](/answers/difference-between-hammer-and-hanging-man/) answer shows why the same shape can carry different names.

Worked example: a bar with high 50.00, low 48.00, open 49.70 and close 49.80. The range is 2.00. The lower wick is the distance from the low to the lower of open and close: 49.70 − 48.00 = 1.70. That is 1.70 ÷ 2.00 = 85% of the range. The body is 0.10 and sits in the top 15% of the bar. On a two-thirds rule, this is a bullish pin bar.

Where it forms matters more than its shape. A pin bar at a level that has turned price before is read differently from one in the middle of nowhere. A long lower wick shows that sellers pushed price down and buyers pushed it back, during that bar. The [long lower wick](/answers/what-does-a-long-lower-wick-mean/) answer explains why that alone does not tell you what happens next.

### Inside bars

An [inside bar](/inside-bar/) is a bar whose high is at or below the previous bar's high and whose low is at or above the previous bar's low. The previous bar is called the mother bar. An inside bar shows a pause: the market traded within yesterday's range.

The common trade idea is a break of the mother bar's range. A move above the mother bar's high is read as a continuation up; a move below its low as a continuation down. Platforms and teachers differ on whether equal highs or lows still count as "inside". Write down which you use.

Inside bars are frequent on most charts, so a filter is common: trade only in the trend direction, or only near a level, or only when the inside bar is small compared with ATR. A related idea is [NR7](/nr7/), the narrowest range of the last seven bars, which is another way to find a quiet bar before a possible expansion.

### Outside bars and engulfing patterns

An [outside bar](/outside-bar/) is the opposite: its high is above the previous bar's high and its low is below the previous bar's low. It covers the whole range of the bar before. It shows a bar where both sides pushed further than the day before.

An engulfing pattern is a related but different test. A [bullish engulfing](/bullish-engulfing/) pattern is a down candle followed by an up candle whose body covers the first candle's body. A [bearish engulfing](/bearish-engulfing/) pattern is the mirror. Engulfing compares bodies (open to close). Outside bars compare ranges (high to low). A bar can be one and not the other.

| Pattern | What is compared | Bullish form | Bearish form |
|---|---|---|---|
| Outside bar | Full range (high and low) | Outside bar closing near its high | Outside bar closing near its low |
| Engulfing | Bodies (open and close) | Up body covers prior down body | Down body covers prior up body |

### The fakey

The [fakey pattern](/fakey-pattern/) combines an inside bar with a false break. Price forms an inside bar, breaks out of the mother bar's range in one direction, then reverses and closes back inside, or breaks the other side. The trade idea is in the direction of the reversal. It is a small-scale false breakout, the same idea covered in [false breakouts](/false-breakout/) and in the Wyckoff [spring and upthrust](/wyckoff-spring-upthrust/).

### Setups need context

All of these bars are common. On a daily chart of a busy market, you will find many inside bars and pin bars every year. Their shape alone carries little information. Price action teachers almost always add context: trend direction, a nearby level, a prior swing. That context is what turns a common bar into a possible setup.

The trouble is that context is usually described loosely. "At a key level" needs a definition: which levels, how near, how many touches. The [support and resistance](/guide/support-and-resistance-guide/) pillar covers ways to define levels objectively. Without that, the setup cannot be tested, and two traders will disagree on which pin bars count.

The [do candlestick patterns work](/answers/do-candlestick-patterns-work/) answer covers what published research says about single-bar patterns in general. The short version is that results are mixed and depend heavily on context and costs.

## 7. Multiple timeframes

The same market looks different on different timeframes. A daily uptrend can contain an hourly downtrend. A weekly range can contain a daily trend. Using more than one timeframe on purpose is called [multiple time frame analysis](/multiple-time-frame-analysis/), or top-down analysis when you start from the highest.

### Top-down reading

The usual process has three steps:

1. **Higher timeframe:** find the main trend and the major levels. For a swing trader, this might be the weekly chart.
2. **Trading timeframe:** find the structure you plan to trade. For the same trader, the daily chart.
3. **Lower timeframe:** time the entry and place the stop more precisely. Perhaps the four-hour or hourly chart.

A common rule of thumb is a ratio of about four to six between timeframes. Weekly to daily is five trading days. Daily to hourly is around six to eight in many markets. Four-hour to fifteen-minute is sixteen. These ratios are a convention, not a law. Alexander Elder's triple screen method is one well-known published version of the idea.

### Alignment

Timeframes are aligned when they agree. The weekly is in an uptrend, the daily is in an uptrend, and the hourly has just made a higher low. Many traders only trade when the higher timeframe and the trading timeframe agree. The logic is that you trade with the larger flow and use the smaller timeframe only for timing.

Alignment cuts the number of trades. It also tends to place entries after pullbacks on the lower timeframe, which can give tighter stops. Whether it improves results in a given market is a testable question. It is not a given.

### Conflicts

Timeframes often disagree. A daily uptrend with an hourly downtrend is a normal state of affairs. It is usually a pullback in the larger trend. The question is whether the pullback ends and the daily trend resumes, or whether the pullback turns into a daily change of character.

There are a few common ways to handle conflict:

- **Wait:** take no trade until the lower timeframe turns back in the direction of the higher one (for example, an hourly change of character up inside a daily uptrend).
- **Trade the higher timeframe only:** ignore the lower timeframe's trend and use it only for the stop.
- **Trade the lower timeframe with smaller targets:** accept that you are trading against the larger trend, and aim for the next higher-timeframe level rather than a big move.

Each is a rule. Pick one and keep it.

### The risk of too many timeframes

Adding timeframes adds ways to justify any trade. With five charts open, one of them will almost always agree with what you want to do. Two or three timeframes, chosen in advance with fixed ratios, is the usual advice. The [which timeframe for support and resistance](/answers/which-timeframe-for-support-and-resistance/) answer covers the same choice for levels.

### Session and bar boundaries

Higher-timeframe bars depend on when the bar starts. A daily bar on a platform that closes the day at 5pm New York time is different from one that closes at midnight UTC. Weekly bars differ if one platform includes a short Sunday session and another does not. These differences change highs, lows and therefore swings. In 24-hour markets such as forex and crypto, this is a real source of disagreement between charts.

## 8. Smart money concepts, described neutrally

[Smart money concepts](/smart-money-concepts/) (SMC) is a vocabulary for reading price that became widespread online from the late 2010s. Much of it traces to a few online educators, and the teaching often goes under the name ICT, after one of them. SMC is not a single fixed method. Different teachers define the same terms in different ways.

The core story SMC tells is that large participants, such as banks and funds, need to fill big orders. To do that, they need other traders on the opposite side. So, the story goes, price is pushed towards places where many stop orders and pending orders sit, and the large orders are filled there. Price action is then read as traces of that process.

Parts of that story describe real market mechanics. Large orders do need liquidity. Stop orders do cluster near obvious levels. When a cluster of stops triggers, it can push price briefly beyond a level. But the story's claims about intent cannot be seen on a chart. A chart shows prices and, in some markets, volume. It does not show who traded or why. This guide treats SMC terms as labels for price patterns, describes each one, notes the older idea it resembles and says what is testable.

### Order blocks

An [order block](/order-block/) is usually defined as the last opposite-coloured candle before a strong move that breaks structure. A bullish order block is the last down candle before a strong rally. A bearish order block is the last up candle before a strong fall. The zone, usually the candle's full range or its body, is then watched as a place where price may react if it returns.

In the worked example, bar 6 is the low of the pullback before the impulse up. If bar 6 had closed lower than it opened, the SMC reading would mark its range, 99.9 to 101.4, as a bullish order block.

**Older idea it resembles:** the base of a [supply and demand zone](/supply-and-demand-zones/), and more broadly, support that formed where a strong move began. The [supply and demand zones vs support and resistance](/answers/supply-and-demand-zones-vs-support-and-resistance/) answer covers that comparison.

**What is testable:** with a fixed definition of "strong move" (for example, a move that breaks the last swing high on a close within N bars) and a fixed zone (the candle's full range), a computer can mark every order block. You can then ask how often price returned to the zone and how it behaved there, compared with random zones of the same size and distance.

Related terms: a [breaker block](/breaker-block/) is an order block that failed (price traded through it) and is then watched from the other side, the same idea as support turning into resistance. A [mitigation block](/mitigation-block/) is a similar failed-swing zone. Definitions vary between teachers.

### Fair value gaps

A [fair value gap](/fair-value-gap/) (FVG) is a three-bar pattern. In a bullish FVG, the low of the third bar is above the high of the first bar. The space between them, which the middle bar covered in one move, is the gap. A bearish FVG is the mirror: the high of the third bar is below the low of the first.

In the worked example, bar 7 has a high of 102.8 and bar 9 has a low of 105.0. Bar 8 jumped through the space between.

> Bullish FVG = bar 7 high to bar 9 low = 102.8 to 105.0, a gap of 2.2 points

The SMC reading is that price moved through this zone too fast for two-way trade, and may return to "fill" or "rebalance" it. Some teachers watch the midpoint, here (102.8 + 105.0) ÷ 2 = 103.9. In the example, bar 12 dipped to 102.4, through the whole gap and below it.

**Older idea it resembles:** a gap, and the idea that gaps tend to fill. A traditional [price gap](/price-gaps/) is a space between one bar's high and the next bar's low, where no trade happened at all. A fair value gap is a looser version: trade did happen across the zone, but only in one bar. Classic chart work has long looked at strong bars and gaps as signs of imbalance; the [gap fill](/gap-fill/) guide and the [do gaps always fill](/answers/do-gaps-always-fill/) answer cover the older idea.

**What is testable:** the definition is fully mechanical. Three bars, one comparison. FVGs are among the easiest SMC ideas to test. They are also very common, especially on lower timeframes, so any test needs a baseline: how often does price return to a random zone of the same size, the same distance away?

### Liquidity sweeps

A [liquidity sweep](/liquidity-sweep/) is a move just beyond a prior high or low that then reverses. The SMC reading is that price "took" the stop orders resting beyond the level before turning. Section 9 covers this in detail.

**Older idea it resembles:** the [false breakout](/false-breakout/), the Wyckoff spring and upthrust, and the fakey. All describe price poking through a level and failing.

**What is testable:** fully, once you fix the level (for example, the last confirmed swing high), how far beyond counts (any trade, or a set margin) and how soon the reversal must come (a close back inside on the same bar, or within N bars).

### Premium and discount

[Premium and discount](/premium-discount/) zones split a price range in half. Take a swing low and a swing high. The midpoint is called equilibrium. Above it is premium; below it is discount. The SMC teaching is to buy in discount and sell in premium, within the current range.

In the worked example, the range from 99.9 to 107.0 has an equilibrium of:

> (99.9 + 107.0) ÷ 2 = 103.45

The pullback low at 102.4 sits below that, in discount. On this reading, the pullback reached a "buy" area.

**Older idea it resembles:** the 50% retracement, a level used in Dow theory and by W. D. Gann long before SMC. Buying the lower half of a range in an uptrend is also standard range-trading logic. The [optimal trade entry](/optimal-trade-entry/) (OTE) term, used by some SMC teachers, is usually a band of Fibonacci retracement levels within the discount zone; definitions vary.

**What is testable:** fully, with a fixed swing rule. The open question is the same as for any retracement level: does the 50% line behave differently from any other line? That needs a baseline.

### Inducement

Inducement is used for a minor swing that forms before price reaches a zone the SMC trader is watching. The reading is that traders who enter early at the minor swing will have their stops taken before price reaches the "real" zone. Definitions vary more than for most SMC terms.

**Older idea it resembles:** a minor false break or a stop run in front of a larger level. It is also close to the trading-floor advice not to enter at the first obvious level.

**What is testable:** only once both the minor swing and the "real" zone are defined by rule. In most teaching, inducement is identified after the fact, once price has swept the minor swing and reacted at the zone. That makes it very hard to test fairly.

### Other SMC terms

You will meet more terms. A short list:

- **Displacement:** a strong, fast impulse. Older idea: a wide-range bar or momentum thrust.
- **Market structure shift:** a change of character, often with displacement.
- **[Equal highs and lows](/equal-highs-lows/):** two or more swings at about the same price, read as a liquidity pool. Older idea: double tops and bottoms, and resistance or support with several touches.
- **[Kill zones](/kill-zones/):** time windows, usually around the London and New York opens, when SMC teachers expect larger moves. Older idea: session volatility patterns, which are well known in forex.
- **Order flow (in SMC usage):** a sequence of order blocks holding in one direction. This is different from the exchange order flow (bid and ask volume) covered in the [volume and order flow](/guide/volume-and-order-flow-guide/) pillar.

### A fair summary of SMC

SMC gives traders a detailed vocabulary for structure, gaps and false breaks. Many of its ideas are older ideas renamed, and that is not in itself a criticism. A new name can make an old idea easier to teach. The weaker parts are the claims about intent, which no chart can show, and the loose definitions, which make many claims hard to test. The stronger parts are the mechanical ones: BOS, CHoCH, fair value gaps and sweeps of a defined swing. Those can be tested like any other rule.

## 9. Liquidity and stop runs

"Liquidity" in SMC and price action teaching usually means resting orders: stop-losses and pending entry orders sitting at known prices. This is narrower than the usual market meaning, which is how easily you can trade a size without moving the price much.

### Where stop orders tend to sit

Traders are taught to place stops just beyond swing highs and lows, and beyond support and resistance. So it is reasonable to expect stop orders to cluster there. The exact amounts are not public in most markets. In some futures and stock markets, part of the order book is visible, but stop orders usually are not shown until they trigger. So "liquidity above the highs" is a reasonable inference, not an observed fact.

### Equal highs and lows

When two or more swing highs form at about the same price, they make an obvious line. Many traders draw resistance there and place stops just above. SMC calls this a liquidity pool or "buy-side liquidity". The mirror below equal lows is "sell-side liquidity".

"About the same price" needs a tolerance. A common choice is a fraction of ATR, or a small percentage. For example, swing highs of 150.20 and 150.25 differ by 0.05, which is 0.05 ÷ 150.20 = 0.033% of price. On a tolerance of 0.1%, they count as equal. On a tolerance of 0.01%, they do not. As always, the tolerance is a setting.

### Stop runs and false breaks

A stop run is a move beyond a level that triggers the stops resting there, followed by a reversal. On a chart, it looks like a [false breakout](/false-breakout/): price trades through a high, cannot hold, and falls back below. The [what is a false breakout](/answers/what-is-a-false-breakout/) answer covers the definition and the usual filters.

Stop runs happen for plain mechanical reasons. A cluster of buy-stops above a high triggers in a burst. That burst lifts price beyond the level for a moment. If there is no new buying behind it, price drops back. No one needs to plan this for it to happen. The order book alone can produce it.

The popular claim that "institutions hunt your stops" goes further. It says that large players push price to the stops on purpose. That may happen at times. But it is not visible on a chart, and a stop run can be explained without it. This guide treats deliberate stop-hunting as a possible explanation, not a fact.

### Telling a sweep from a breakout

The hard part is in real time. When price trades above a high, it might be a sweep that fails, or the start of a real breakout. At the moment it happens, the two look the same. They only differ by what happens next.

Rules that try to tell them apart:

- **Close rule:** a sweep closes back inside the level on the same bar or the next. A breakout closes beyond it.
- **Distance rule:** a sweep reaches only a small distance beyond, say under 0.5 ATR. A breakout goes further.
- **Retest rule:** after a breakout, price returns to the level and holds it from the other side. The [should you wait for a retest after a breakout](/answers/should-you-wait-for-a-retest-after-a-breakout/) answer covers this.
- **Volume rule:** in markets with real volume, some traders look for a breakout on strong volume and a sweep on weak follow-through. The [what volume tells you about a breakout](/answers/what-does-volume-tell-you-about-a-breakout/) answer covers the evidence and its limits.

None of these turns a sweep into a certainty. They change the timing of the decision and the price you pay for it. A close rule waits a whole bar and enters further from the level.

### The other side: your own stop

The same logic applies to your own stops. A stop placed exactly at an obvious swing low sits with everyone else's. Some traders add a buffer beyond the swing, often a fraction of ATR, so that a small sweep does not stop them out. This widens the stop and, for a fixed risk, cuts the position size. It is a trade-off, not a free improvement. The [why does my stop loss keep getting hit](/answers/why-does-my-stop-loss-keep-getting-hit/) answer and the [stop losses and risk](/guide/stop-losses-and-risk-guide/) pillar cover stop placement in full.

## 10. Entries, stops and targets from structure

Structure gives natural places for entries, stops and targets. This section shows how that works and measures the results in R.

### What R means here

R is the amount you risk on a trade, measured from your actual fill to your first stop.

> 1R = (distance from the side-correct fill price to the first stop) × size

"Side-correct" means the real price you would pay. A long fills at the ask; a short fills at the bid. So the spread is already inside the fill price, and inside 1R. A clean stop-out, where the stop fills exactly at its price, is exactly −1R.

Commission, slippage and gaps are not part of 1R. They are shown on top. If a stop fills worse than its price because of slippage or a gap, the loss is larger than 1R. 1R does not change. The [what is 1R in trading](/answers/what-is-1r-in-trading/) and [does spread count towards stop loss](/answers/does-spread-count-towards-stop-loss/) answers cover the definitions.

Stops only tighten. Once a trade is open, the stop may move closer to the price in the trade's favour, never further away. 1R stays fixed at the first stop, whatever the stop does later. The [should you move your stop loss further away](/answers/should-you-move-your-stop-loss-further-away/) answer explains why.

### Where structure puts entries

Common structure-based entries:

- **Pullback to a higher low:** in an uptrend, enter as price turns up from a pullback, often on a lower-timeframe change of character or a bar setup.
- **Break of structure:** enter as price breaks the last swing high (wick or close rule). This enters with momentum but often far from the stop.
- **Retest:** after a break, enter when price returns to the broken level and holds. See [breakout retest](/breakout-retest/).
- **Failed break:** enter in the other direction after a sweep of a swing high or low fails.

Each has a different typical distance to the stop, and so a different size for the same risk.

### Where structure puts stops

A [structure stop](/structure-stop/) goes beyond the swing that would prove the idea wrong. For a long from a higher low, that is below the higher low. If price trades below it, the swing rule says the uptrend is in doubt, which was the reason for the trade.

Many traders add a buffer: a few ticks, a fraction of ATR, or the spread. The [where to put a stop loss near support](/answers/where-to-put-a-stop-loss-near-support/) answer covers the choices.

### Where structure puts targets

Targets often come from structure too:

- **Prior swing high or low:** the next obvious level in the trade's direction.
- **Measured move:** the size of the last impulse projected from the pullback.
- **Multiple of R:** a fixed 2R or 3R, regardless of structure.
- **Trailing stop:** no fixed target; the stop follows new swings. See [trailing stop](/trailing-stop/).

### Worked example: a long from a higher low

This is a made-up trade to show the arithmetic. It is not a recommendation and not a test result.

A share is in a daily uptrend by the two-bar swing rule. It pulls back to a higher low near 44.50 and turns up. The trader buys on the next bar.

- **Fill:** 45.20, at the ask.
- **First stop:** 44.40, below the higher low plus a small buffer.
- **Size:** 300 shares.
- **1R:** (45.20 − 44.40) × 300 = 0.80 × 300 = 240.
- **Target:** 46.80, the prior swing high, which is 1.60 above the fill, or 2R.
- **Commission:** 3 per side, so 6 round trip. That is 6 ÷ 240 = 0.025R per trade, shown on top.

| Outcome | Exit price | Profit or loss | Result in R | Commission (extra) |
|---|---|---|---|---|
| Clean stop-out | 44.40 | −240 | −1.0R | −0.025R |
| Stop with 0.06 slippage | 44.34 | −258 | −1.075R | −0.025R |
| Overnight gap below the stop, opens at 43.90 | 43.90 | −390 | −1.625R | −0.025R |
| Target hit at prior swing high | 46.80 | +480 | +2.0R | −0.025R |

Check the gap row: (43.90 − 45.20) × 300 = −1.30 × 300 = −390, and −390 ÷ 240 = −1.625R. The stop was at 44.40, but the market opened below it, so the stop filled at the open. 1R did not change. The loss was larger than 1R. That is why gaps and slippage are always shown on top. The [stop loss when the market gaps](/answers/stop-loss-when-market-gaps/) answer covers this case.

### Tightening the stop as structure develops

Suppose the trade moves up. Price makes a new swing high, then pulls back to a new higher low at about 45.00, which the swing rule confirms two bars later. The trader moves the stop up to 44.90, below the new higher low.

This is a tightening. The stop moved in the trade's favour. 1R stays at 240, measured from the first stop.

| Outcome after tightening | Exit price | Profit or loss | Result in R | Commission (extra) |
|---|---|---|---|---|
| Stopped at the new stop | 44.90 | −90 | −0.375R | −0.025R |
| Closed by hand at 46.00 | 46.00 | +240 | +1.0R | −0.025R |

Check the first row: (44.90 − 45.20) × 300 = −0.30 × 300 = −90, and −90 ÷ 240 = −0.375R. The tighter stop cut the possible loss. It also raised the chance of being stopped out by a normal wiggle. That is the trade-off of trailing stops by structure.

The stop never moves below 44.40. If the trader felt the need to widen it, the honest choice would be to close the trade and plan a new one, with a new 1R.

### Worked example: a short after a change of character

A second made-up example. A crypto coin has been in an uptrend on the four-hour chart. Price breaks below the last higher low on a close, a change of character, then rallies back towards the broken level and stalls. The trader sells short.

- **Fill:** 2,400, at the bid.
- **First stop:** 2,460, above the lower high that formed on the rally.
- **Size:** 2 coins.
- **1R:** (2,460 − 2,400) × 2 = 60 × 2 = 120.
- **Target:** 2,280, the next swing low below, which is 120 below the fill per coin, or 2R.
- **Fees:** 0.1% of value per side, as an example rate. Entry: 2,400 × 2 × 0.001 = 4.80. Exit at the target: 2,280 × 2 × 0.001 = 4.56. Total 9.36, or 9.36 ÷ 120 = 0.078R at the target. Fees change slightly with the exit price.

| Outcome | Exit price | Profit or loss | Result in R |
|---|---|---|---|
| Clean stop-out | 2,460 | −120 | −1.0R |
| Stop with 5 slippage | 2,465 | −130 | −1.083R |
| Partial move, closed at 2,340 | 2,340 | +120 | +1.0R |
| Target hit | 2,280 | +240 | +2.0R |

Fees of about 0.08R come on top of each row. For a short, profit is (fill − exit) × size. At 2,280: (2,400 − 2,280) × 2 = 240, or +2.0R. Perpetual futures also charge or pay a funding rate while a position is open. That would be shown on top too.

If the trader later moves the stop, it may only move down on a short. It is never raised above 2,460.

### What decides results

Notice what structure did in these examples. It set the stop, the target and the moment of entry. It did not decide the size; the stop distance and the chosen risk did that. The [position size from stop loss](/answers/position-size-from-stop-loss/) answer covers the sum.

Whether a structure-based plan makes money over many trades depends on how often the target is reached before the stop, how large the average win is in R, and costs. The [expectancy](/answers/what-is-expectancy-in-trading/) answer shows how to combine those. No chart pattern sets those numbers in advance. Only a fair test on enough trades can estimate them.

## 11. Price action across markets and timeframes

Price action reads the same way on any chart. But markets differ in ways that change what the bars mean.

### Stocks

Single stocks trade in sessions, with gaps overnight and at weekends. Gaps break the link between one bar and the next. A swing low can be skipped entirely by a gap down, and a stop can fill well beyond its price, as the worked example showed. Earnings and news cause large gaps a few times a year for most shares.

Stocks also have real, centralised volume (spread across venues, but reported), which some price action traders use alongside bars. Daily and weekly charts of liquid shares usually give clean swings. Thinly traded shares give ragged bars and wide spreads, which makes small structure unreliable.

### Forex

Spot forex trades around the clock on weekdays, with no central exchange. There are few gaps during the week; the main gap risk is the weekend. Bars depend on the platform's day boundary, as section 7 noted. Swings and levels can differ between platforms because of this and because price feeds differ slightly between brokers.

Sessions matter. Volatility tends to be lower in the Asian session for many pairs and higher around the London and New York opens. Swings formed in a quiet session can be swept easily in the next. This is the plain mechanical basis for the SMC idea of kill zones. Round numbers also attract orders in forex; the [round numbers in forex](/answers/round-numbers-in-forex/) answer covers that.

### Futures

Futures trade on exchanges with real volume and a visible order book in many contracts. They often trade nearly 24 hours, but liquidity is concentrated in the main session. Many traders use session-only charts for structure, which changes the swings compared with all-hours charts.

Futures contracts expire, so long-term charts are joined from several contracts. The join method (back-adjusted or not) changes old swing prices. If you test structure over years of futures data, the adjustment method matters.

### Crypto

Crypto trades 24 hours a day, every day. There are no weekend gaps on the main venues, but there are sharp moves and thin hours. Prices differ slightly between exchanges, so swings and wicks can differ too. Long wicks from brief liquidations are common. Some of these spikes appear on one exchange and not on others.

That has a direct effect on wick-based rules. A swing high set by a one-minute spike on a single venue may not exist on another venue's chart. Close-based rules are less affected.

### Low timeframes and noise

On low timeframes, such as one-minute and five-minute charts, there are many more swings, many more fair value gaps and many more inside bars. Each is less meaningful. A one-minute swing high may be one large order. Spread is also a larger share of each move, so costs eat a bigger slice of each R. A 2-point spread on a 10-point stop is a fifth of the risk; on a 100-point stop, it is a fiftieth.

The same rule tested on a daily and a five-minute chart is really two different strategies with different cost burdens. Neither timeframe is "best". Higher timeframes give fewer, cleaner swings and lower costs per trade. Lower timeframes give more trades and faster feedback, with more noise.

### A summary across markets

| Market | Gaps | Real volume | Main structure risk |
|---|---|---|---|
| Stocks | Overnight, weekend, news | Yes | Gaps through stops and swings |
| Forex | Weekend only, mostly | No central figure | Day boundary and feed differences |
| Futures | Session and weekend | Yes | Contract rolls; all-hours vs session charts |
| Crypto | Rare on main venues | Varies by venue; some unreliable | Venue-specific wicks and spikes |

## 12. Testing price action without fooling yourself

Price action is unusually easy to fool yourself with. The chart is in front of you, the swings look obvious and the good trades jump out. This section covers the main traps and how to avoid them. Our [methods](/methods/) page sets out how we test ideas in general.

### Subjective labelling

If a human labels the swings, levels or setups, the labels carry the human's knowledge of what happened next. You cannot unsee a chart. A swing that "obviously" mattered was often chosen because price reacted there. A swing where price did not react is easy to overlook.

The fix is to write the labelling rule first and apply it by code, or at least by a fixed checklist, without looking at what came after each bar. If two people apply the rule to the same chart, they should get the same labels.

### Hindsight swings

Even with a fixed rule, swings are confirmed late. The two-bar fractal confirms a swing two bars after it forms. A test that lets a trade use a swing at the moment it formed is using information from the future. This is called look-ahead bias.

Check every rule for this. In the worked example, the higher low at bar 12 could only be used from the close of bar 14 onwards. An entry "at the higher low" at 102.4 is not possible under that rule. A test must enter at the earliest price available after confirmation.

### Repainting fractals and indicators

Some tools change their past values as new bars arrive. A zigzag tool that redraws its last leg is one example. A swing tool that marks a high the moment it appears, then removes it when a higher high comes, is another. On a finished chart, these tools look perfect, because every mark you see is the final one.

Before testing any structure tool, check whether it repaints. One simple way: note its marks on the latest bar, wait several bars and compare. If old marks moved or vanished, the tool repaints. A test must use the values the tool showed at the time.

### Fill assumptions

Price action entries are often at exact levels: "buy at the higher low", "sell at the order block". In a test, assuming a fill at the exact price is generous. A limit order at a level may not fill if price only touches it. A stop order at a level often fills worse than its price. A fair test assumes side-correct fills (ask for buys, bid for sells), adds slippage on stops and handles gaps as they would happen.

On daily bars, another trap is not knowing the order of events within a bar. If one bar touches both the stop and the target, which came first? A daily bar cannot say. A cautious test assumes the stop came first.

### Too many choices

Price action has many settings: swing window, wick or close, timeframe, buffer, tolerance for equal highs, context rules. Try enough combinations and some will look good on past data by chance. This is the same problem as tuning an indicator. The defence is the same: decide settings in advance, count every variant tried, keep a later period unseen for a final check, and compare with random entries. Our publishing rules apply these standards to any figure we publish.

### What a fair test needs

| Need | Why |
|---|---|
| Written, mechanical rules | So the labels do not depend on what happened next |
| Swing confirmation delay | So no trade uses a swing before it was known |
| Non-repainting tools | So past signals match what was shown at the time |
| Side-correct fills, slippage and gaps | So results match what a trader would get |
| A random-entry baseline | So you can tell an edge from the market's drift |
| An unseen holdout period | So tuning does not pass for a result |
| Enough trades | So one lucky run does not decide the verdict |

A price action idea that passes all of these is worth taking seriously. One that cannot be written as rules cannot be tested, and should be treated as an opinion.

## 13. Common mistakes

These are the mistakes that come up most often with price action and market structure.

- **Labelling swings after the fact.** Marking the "obvious" swing that price reacted to, and ignoring the ones it did not. Use a fixed rule.
- **Ignoring the confirmation delay.** Entering "at the higher low" when the rule could not confirm that low for two more bars.
- **Switching swing rules to suit the chart.** Using a small swing rule when it shows a trend you like and a large one when it does not.
- **Mixing wick and close rules.** Counting a wick through a high as a break when it suits, and waiting for a close when it does not. Pick one.
- **Treating every pin bar or inside bar as a signal.** These bars are common. Without context written as a rule, they are noise.
- **Treating SMC claims about intent as facts.** A chart shows prices. It does not show who traded or why.
- **Using a new term without checking its older equivalent.** An order block is close to a demand zone; a sweep is a false breakout. Older research on the older ideas is relevant.
- **Too many timeframes.** With enough charts, one will always agree with the trade you want.
- **Ignoring the session and day boundary.** Two platforms can show different swings on the same market because their daily bars start at different times.
- **Placing stops exactly at obvious swings.** Small sweeps through the level stop the trade out. A buffer helps, at the cost of a smaller position for the same risk.
- **Widening a stop when price comes close.** Stops only tighten. A wider stop means a new trade with a new 1R, not a rescue of the old one.
- **Folding costs into 1R.** A gap or slippage makes a loss larger than 1R. It does not make 1R larger. Keep them separate so you can see the true cost.
- **Trusting a chart that repaints.** A tool that redraws its past looks perfect on a finished chart and cannot be traded that way.

## 14. Comparison table and FAQ

### Comparison table

This table sets out each main idea in this guide: whether it can be written as an objective rule, the older idea it most resembles and its main weakness.

| Concept | Objective rule available? | Older equivalent | Main weakness |
|---|---|---|---|
| [Swing highs and lows](/swing-highs-lows/) | Yes (fractal, percentage or ATR reversal) | Dow's peaks and troughs | Confirmed late; window choice changes results |
| [Market structure](/market-structure/) (HH, HL, LH, LL) | Yes, once swings are fixed | Dow theory trend definition | Depends entirely on the swing rule |
| Trend vs range | Partly (swing progress, ADX, channel width) | Dow theory; range trading | Ranges are defined by what does not happen |
| [Break of structure](/break-of-structure/) | Yes (swing + wick or close rule) | New high or low in a trend | Not standardised between teachers |
| [Change of character](/change-of-character/) | Yes (swing + wick or close rule) | Dow theory trend reversal signal | Many fail in transition zones |
| Pullback depth | Yes | Retracement | No fixed "normal" depth |
| [Measured move](/measured-move/) | Yes | AB = CD, equal legs | Real legs are rarely equal |
| [Pin bar](/pin-bar/) | Yes (wick share of range) | Hammer, shooting star | Common; needs context to mean much |
| [Inside bar](/inside-bar/) | Yes | Harami (by range), NR bars | Common; breaks often fail |
| [Outside bar](/outside-bar/) | Yes | Key reversal, engulfing (by body) | Wide range means wide stops |
| [Fakey](/fakey-pattern/) | Yes | False breakout of an inside bar | Rarer, so fewer trades to judge it on |
| [Multiple time frame analysis](/multiple-time-frame-analysis/) | Yes, with fixed timeframes | Elder's triple screen | Too many charts justify any trade |
| [Order block](/order-block/) | Partly (definitions vary) | Demand and supply zone base | "Strong move" and zone edges vary |
| [Fair value gap](/fair-value-gap/) | Yes (three-bar rule) | Gaps and imbalance bars | Very common on low timeframes |
| [Liquidity sweep](/liquidity-sweep/) | Yes, once level and reversal are defined | False breakout; Wyckoff spring and upthrust | Same as a breakout until after the fact |
| [Premium and discount](/premium-discount/) | Yes | 50% retracement | Needs a baseline to show it matters |
| Inducement | Rarely | Minor stop run before a level | Usually identified after the fact |
| [Equal highs and lows](/equal-highs-lows/) | Yes, with a tolerance | Double tops and bottoms | Tolerance is a free setting |

### FAQ

**What is price action trading?**

It is trading based mainly on the price chart itself: bars, swings and levels, with few or no indicators. The idea is to read the raw data rather than a formula built from it. It works best when the reading rules are written down, so that the same chart gives the same answer each time.

**How do you identify market structure?**

Label swing highs and lows with a fixed rule, such as a bar with lower highs on two bars either side. Then compare each swing with the last one of the same kind. Higher highs and higher lows mean an uptrend. Lower highs and lower lows mean a downtrend. Mixed swings mean a range or a transition.

**What is the difference between a break of structure and a change of character?**

A break of structure is a move beyond the last swing in the trend's direction, such as a new high in an uptrend. A change of character is the first break against the trend, such as a move below the last higher low. One shows the trend continuing; the other is the first warning that it may end.

**Is smart money concepts just old ideas renamed?**

Largely, yes, though that is not a criticism in itself. Order blocks resemble demand and supply zones. Fair value gaps resemble price gaps and imbalance bars. Liquidity sweeps are false breakouts. Premium and discount uses the 50% level. The claims about what large traders intend cannot be seen on a chart.

**Should a break of structure count on a wick or a close?**

There is no single right answer. A wick rule reacts sooner and catches more false breaks. A close rule is slower and filters some of them out, at the cost of a later entry and often a wider stop. Pick one rule before you look at the chart, and do not switch between them.

**What timeframe is best for price action?**

No timeframe is best for everyone. Higher timeframes give fewer, cleaner swings and lower costs as a share of each trade. Lower timeframes give more trades and more noise, and the spread takes a bigger slice of each R. Many traders read one or two higher timeframes for context and trade on a lower one.

**Can price action be backtested?**

Yes, once it is written as mechanical rules. The main traps are swings that are only confirmed later, tools that repaint, generous fills at exact levels and trying many settings. A fair test uses confirmation delays, side-correct fills, slippage and gaps, a random-entry baseline and an unseen holdout period.

**Is price action better than using indicators?**

Neither is better in general. Price action has less lag and more context, but it is subjective unless written as rules. Indicators are objective but add smoothing and settings. Both are built from the same price data, so neither can know more than the bars hold. The fair comparison is a test of specific rules.

**Where should a stop go on a price action trade?**

Most traders place it beyond the swing that would prove the trade wrong, such as below the last higher low for a long. A small buffer, often a fraction of ATR, can reduce stop-outs from small sweeps. A wider stop means a smaller position for the same risk in R.
