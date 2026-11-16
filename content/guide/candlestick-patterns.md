---
slug: candlestick-patterns
title: "Candlestick patterns: the complete guide"
description: How to read candlestick patterns, from single candles to three-bar stars, with context rules, entries, stops and our own test results.
query: candlestick patterns
publish: 2026-11-30
reviewed: 16 November 2026
cluster: [candlestick-chart, hammer, hanging-man, inverted-hammer, shooting-star, doji, marubozu, spinning-top, bullish-engulfing, bearish-engulfing, bullish-harami, bearish-harami, piercing-line, dark-cloud-cover, tweezer-tops, tweezer-bottoms, morning-star, evening-star, three-white-soldiers, three-black-crows]
value: [data, table, example, verdict]
chart: candlestick-chart
---

Candlestick patterns are shapes made by one, two or three price bars that traders read as signs of who is in control: buyers or sellers. This guide explains how to read a single candle, walks through the main single, two-candle and three-candle patterns, shows why the surrounding chart matters more than the shape, and reports what happened when we tested 45 pattern detectors against random entries.

The short version, before the detail: candlesticks are an excellent way to *read* a chart and a weak way to *predict* one on their own. In our tests most patterns did no better than entering at random. A few looked interesting enough to test further. None has yet earned anything stronger than the label "exploratory". That is not a reason to ignore candlesticks. It is a reason to use them the way experienced traders do: as a description of what just happened at a place on the chart that already matters.

## What a candlestick shows

A candlestick is a way of drawing one period of trading. The period can be one minute, one hour, one day or one week; the drawing is the same. Each candle records four prices:

- **Open:** the first traded price of the period.
- **High:** the highest price reached.
- **Low:** the lowest price reached.
- **Close:** the last traded price of the period.

The thick part of the candle is the **body**. It runs from the open to the close. The thin lines above and below the body are the **shadows**, also called wicks or tails. The upper shadow runs from the top of the body to the high; the lower shadow runs from the bottom of the body to the low.

The colour of the body tells you the direction of the period:

- If the close is above the open, price rose during the period. Traditionally the body is hollow or white; most platforms now draw it green.
- If the close is below the open, price fell. Traditionally the body is filled or black; most platforms draw it red.

That is all a candle contains. It does not show volume, it does not show the order in which the high and low were made, and it does not show what happened inside the period. A daily candle that opened at 100, fell to 95, rallied to 108 and closed at 106 looks exactly like one that rallied to 108 first, fell to 95, and then recovered to 106. This matters later, when we talk about stops and backtests.

The [candlestick chart](/candlestick-chart/) guide covers the drawing itself in more detail, and the [OHLC bar chart](/ohlc-bar-chart/) guide shows the same four prices drawn as a vertical line with ticks. The information is identical. Candles are popular because the body makes the open-to-close move easy to see at a glance.

### Where candlesticks come from

Candlestick charting comes from Japan, where rice traders recorded prices in a similar way from the 1700s. The method is traditionally linked to the rice merchant Munehisa Homma, though how much of today's pattern list goes back to him is uncertain. Candlesticks reached most Western traders through Steve Nison's *Japanese Candlestick Charting Techniques* (1991). Many of the pattern names in use today, and the rules for them, come from that book and the ones that followed it. Thomas Bulkowski's *Encyclopedia of Candlestick Charts* (2008) is the best-known attempt to count how often each pattern was followed by the move its name suggests.

### One bar is one period

A candle only means something in relation to its period. A "long" candle on a 5-minute chart may be smaller in price terms than a "small" candle on a daily chart. A hammer on a weekly chart took five trading days to form; a hammer on a 1-minute chart took sixty seconds. They share a name, not a meaning. When this guide says "long" or "small", it means long or small compared with recent candles on the same chart, not an absolute size.

A useful habit is to compare every candle with the **average range** of the last 10 to 20 candles. The [average daily range](/average-daily-range/) and [ATR](/atr/) guides explain two common ways to measure that. A body that is twice the average range is a strong move. A body that is a tenth of it is a pause.

## How to read a single candle

Before learning named patterns, learn to read one candle as a story of the period. Every candle answers three questions:

1. **Who won the period?** The colour and the size of the body. A large green body means buyers moved price a long way from where it opened. A large red body means sellers did.
2. **Was the win clean?** The shadows. Long shadows mean price travelled a long way and was pushed back. A candle with no shadows moved in one direction and closed at the extreme.
3. **Where did it close?** The close compared with the range. A close in the top quarter of the range means buyers held control into the end of the period. A close in the bottom quarter means sellers did.

Almost every candle falls into one of five shapes. Named patterns are mostly these five shapes in particular places.

### 1. The marubozu: one side in full control

A [marubozu](/marubozu/) is a long body with little or no shadow at either end. A green marubozu opened at or near its low and closed at or near its high: buyers controlled the whole period. A red marubozu is the opposite. "Marubozu" is often translated as "close-cropped" or "bald", describing the missing shadows. It is a candle of strength, not reversal. Its meaning depends on whether it continues a move or breaks out of a range.

### 2. The spinning top: a contest with no winner

A [spinning top](/spinning-top/) has a small body roughly in the middle of the range, with shadows on both sides. Price moved both ways and closed near where it opened. It signals hesitation. In a strong trend, one spinning top is usually just a pause. Several in a row at a key level suggest the trend is losing push.

### 3. The doji: open and close almost equal

A [doji](/doji/) is the extreme case of a small body: the open and close are equal or nearly so, leaving a line instead of a box. How "nearly" is not fixed. Many traders and many pieces of software use a body of 5 to 10% of the candle's range as the limit; our detector uses its own default, described in the guide. There are several types:

- **Long-legged doji:** long shadows on both sides; a big fight and a draw. See [long-legged doji](/long-legged-doji/).
- **Dragonfly doji:** open, close and high together at the top, with a long lower shadow. Sellers pushed price down; buyers took it all back. See [dragonfly doji](/dragonfly-doji/).
- **Gravestone doji:** open, close and low together at the bottom, with a long upper shadow. Buyers pushed price up; sellers took it all back. See [gravestone doji](/gravestone-doji/).
- **Four-price doji:** open, high, low and close all equal. Rare on liquid markets and usually a sign of very thin trading.

### 4. Hammer-type candles: rejection of lower prices

A small body near the top of the range with a long lower shadow, at least about twice the body, and little or no upper shadow. Price fell during the period and was pushed back up. When this shape appears after a fall it is called a [hammer](/hammer/). When the same shape appears after a rise it is called a [hanging man](/hanging-man/). The shape is identical; only the trend before it differs. The [pin bar](/pin-bar/), a term from price action trading, describes the same family with a stricter emphasis on the long tail.

### 5. Shooting-star-type candles: rejection of higher prices

The mirror image: a small body near the bottom of the range with a long upper shadow and little or no lower shadow. Price rose during the period and was pushed back down. After a rise it is a [shooting star](/shooting-star/). After a fall it is an [inverted hammer](/inverted-hammer/).

### Reading the five shapes together

| Shape | Body | Shadows | What it says about the period |
|---|---|---|---|
| Marubozu | Long | None or tiny | One side controlled the whole period |
| Spinning top | Small, mid-range | Both sides | Hesitation, neither side in control |
| Doji | Almost none | Varies | Open and close matched; a draw |
| Hammer-type | Small, at the top | Long lower | Lower prices rejected |
| Shooting-star-type | Small, at the bottom | Long upper | Higher prices rejected |

Notice that none of these descriptions says "price will go up" or "price will go down". A candle records what happened. Everything after that is a guess, and the rest of this guide is about making that guess better informed.

## Single-candle patterns

Single-candle patterns are the five shapes above, given names according to where they appear. They are the most common patterns, and because they are common they are also the noisiest.

### The doji family

A doji after a long run of green candles, especially at a level where price has turned before, suggests that buying has stalled. A doji after a long fall suggests selling has stalled. A doji in the middle of a sideways range says very little; it is just another quiet day.

Many traders treat a doji as a warning rather than a signal. The usual rule is to wait for the next candle: a close below the doji's low after an uptrend, or above its high after a downtrend, before acting. The doji guide explains the confirmation rules.

The doji is also the building block of several longer patterns: the [morning doji star](/morning-doji-star/), [evening doji star](/evening-doji-star/), [harami cross](/harami-cross/) and [abandoned baby](/abandoned-baby/). In each of these, the doji is the "pause" candle between a move and its reversal.

### Hammer and hanging man

A hammer is the single most searched candlestick pattern, and its story is easy to tell: sellers pushed price well below the open, buyers stepped in, and the candle closed near its high. After a fall, that rejection of lower prices is read as a sign that selling is running out.

The hanging man is the same candle after a rise. The story is darker: even though the candle closed near its high, the long lower shadow shows that sellers were able to push price a long way down within the period. If they can do it once, they may do it again. Most writers treat the hanging man as a weaker signal than the hammer and want firmer confirmation before acting on it. Our [hammer vs hanging man comparison](/compare/hammer-vs-hanging-man/) sets out the differences side by side.

### Inverted hammer and shooting star

The inverted hammer appears after a fall. Buyers pushed price up during the period, sellers pushed it back, and the candle closed near its low. That sounds bearish, and the inverted hammer is a less intuitive signal than the hammer. The bullish reading is that buyers showed up at all after a fall; if the next candle opens and closes above the inverted hammer's body, they are taking over.

The shooting star appears after a rise and is easier to read: buyers tried to push higher, failed, and price closed near the low. It is the bearish counterpart of the hammer.

### Marubozu and belt hold

A long marubozu after a quiet range can mark the start of a move. A marubozu at the end of a long, stretched trend can mark exhaustion: the last buyers or sellers piling in.

A [belt hold](/belt-hold/) is a close relative. A bullish belt hold opens at its low (no lower shadow) after a decline and closes much higher, leaving a long green body. A bearish belt hold opens at its high after a rise and closes much lower. The name describes a sumo move: grabbing the opponent's belt and pushing straight out of the ring.

### Single-candle patterns at a glance

| Pattern | Shape | Comes after | Reading |
|---|---|---|---|
| Hammer | Long lower shadow, small body at top | A fall | Bullish reversal |
| Hanging man | Same as hammer | A rise | Bearish warning |
| Inverted hammer | Long upper shadow, small body at bottom | A fall | Bullish reversal (needs confirmation) |
| Shooting star | Same as inverted hammer | A rise | Bearish reversal |
| Dragonfly doji | Doji at the top of a long lower shadow | A fall | Bullish |
| Gravestone doji | Doji at the bottom of a long upper shadow | A rise | Bearish |
| Bullish belt hold | Opens at the low, long green body | A fall | Bullish |
| Bearish belt hold | Opens at the high, long red body | A rise | Bearish |
| Marubozu | Long body, no shadows | Anywhere | Strength in the body's direction |

## Two-candle patterns

Two-candle patterns compare one candle with the one before it. Because they need two specific candles in a row, they are rarer than single candles. They also tell a more complete story: the first candle shows the trend still running, and the second shows something changing.

### Engulfing patterns

A [bullish engulfing](/bullish-engulfing/) pattern is a red candle followed by a green candle whose body completely covers ("engulfs") the red body. The second candle opens at or below the first one's close and closes above its open. In one period buyers erased the whole of the previous period's selling and more.

A [bearish engulfing](/bearish-engulfing/) is the mirror: a green candle followed by a larger red body that covers it.

Definitions vary. Some sources require the second body to engulf the first candle's whole range, shadows included; most require only the body. Some require the second candle to open beyond the first one's close, which is common on stocks (which can gap overnight) and rare on 24-hour markets like forex and crypto, where each open is usually the previous close. That one detail changes how often the pattern appears on different markets.

### Harami patterns

A harami is the opposite of an engulfing pattern: a long candle followed by a small candle whose body sits inside the first body. "Harami" is Japanese for pregnant: the large first candle is the mother, the small second one the baby.

A [bullish harami](/bullish-harami/) is a long red candle followed by a small green (or any colour) body inside it, after a fall. A [bearish harami](/bearish-harami/) is a long green candle followed by a small body inside it, after a rise. When the small candle is a doji, the pattern is a [harami cross](/harami-cross/).

The harami says something different from an engulfing pattern. Engulfing says "the other side took over". Harami says "the move stopped". The second candle shows a sudden drop in range and momentum, not a reversal. Harami patterns are usually read as needing confirmation from the third candle, which is exactly what the [three inside up/down](/three-inside-up-down/) pattern formalises.

### Piercing line and dark cloud cover

A [piercing line](/piercing-line/) is a long red candle followed by a green candle that opens below the red candle's close (classically below its low) and closes above the midpoint of the red body, but not above its open. It is like a bullish engulfing pattern that got halfway there.

[Dark cloud cover](/dark-cloud-cover/) is the bearish mirror: a long green candle, then a red candle that opens above the green one's close (classically above its high) and closes below the midpoint of the green body.

Because both patterns classically need a gap at the open, they are mostly stock-market patterns. On markets that trade around the clock they are rare unless you relax the rule. Our [bullish engulfing vs piercing line comparison](/compare/bullish-engulfing-vs-piercing-line/) looks at the two side by side.

### Tweezers

[Tweezer tops](/tweezer-tops/) are two candles with matching highs after a rise, usually a green candle followed by a red one. Price tested the same high twice and failed both times. [Tweezer bottoms](/tweezer-bottoms/) are two candles with matching lows after a fall. "Matching" means equal or very close; how close is a setting, and different software uses different tolerances, which makes tweezers one of the patterns whose count varies most between platforms.

### Kicker

The [kicker pattern](/kicker-pattern/) is two candles of opposite colour with a gap between them. A bullish kicker is a red candle followed by a green candle that opens above the red candle's open and keeps going. Price did not just reverse; it jumped. Kickers usually follow news and are rare outside stocks, since they need an opening gap.

### Counterattack lines

[Counterattack lines](/counterattack-lines/) are two candles of opposite colour that close at the same or nearly the same price. A bullish counterattack is a long red candle followed by a green candle that opens much lower but rallies to close at the red candle's close. It is a weaker cousin of the piercing line: the buyers clawed back the gap but did not push into the red body.

### Homing pigeon

A [homing pigeon](/homing-pigeon/) is two red candles in a downtrend, where the second body sits inside the first. It looks like a bearish harami's colours on a bullish pattern: the second candle is still red, but the shrinking range suggests selling is fading. It is usually classed as a bullish reversal with low reliability.

### Two-candle patterns at a glance

| Pattern | Candle 1 | Candle 2 | Reading |
|---|---|---|---|
| Bullish engulfing | Red | Green body covers red body | Buyers took over |
| Bearish engulfing | Green | Red body covers green body | Sellers took over |
| Bullish harami | Long red | Small body inside | Selling stalled |
| Bearish harami | Long green | Small body inside | Buying stalled |
| Piercing line | Long red | Opens below, closes above midpoint | Buyers half took over |
| Dark cloud cover | Long green | Opens above, closes below midpoint | Sellers half took over |
| Tweezer tops | Any | Same high as candle 1 | High rejected twice |
| Tweezer bottoms | Any | Same low as candle 1 | Low rejected twice |
| Kicker | One colour | Gap and opposite colour | Sharp change, often news |
| Counterattack | One colour | Opposite colour, same close | Gap clawed back |
| Homing pigeon | Long red | Smaller red inside | Selling fading |

## Three-candle and longer patterns

Longer patterns are rarer again, and they include their own confirmation: the third candle is the one that shows the turn. That is why many writers rank them as more reliable. It is also why they come late: by the time a three-candle pattern completes, a good part of the move it describes has often already happened.

### Morning star and evening star

A [morning star](/morning-star/) has three candles after a fall:

1. A long red candle: sellers in control.
2. A small-bodied candle (the "star") that gaps below or sits below the first body: the selling stalls.
3. A long green candle that closes well into the first candle's body, usually above its midpoint: buyers take over.

An [evening star](/evening-star/) is the mirror after a rise. When the middle candle is a doji, the patterns are called the [morning doji star](/morning-doji-star/) and [evening doji star](/evening-doji-star/). On markets that rarely gap, many traders and platforms relax the gap rule; strictly defined stars are rare outside stocks. Our [morning star vs abandoned baby comparison](/compare/morning-star-vs-abandoned-baby/) covers the strictest version.

### Abandoned baby

The [abandoned baby](/abandoned-baby/) is a morning or evening doji star where the doji is completely isolated by gaps: its whole range, shadows included, sits beyond the ranges of the candles either side. It is the "island" version of a star. It is very rare on liquid markets. In our first study across 10 large US stocks and funds over almost five years, the detector found none at all.

### Three white soldiers and three black crows

[Three white soldiers](/three-white-soldiers/) are three long green candles in a row, each opening within the previous body and closing near its high, at a new high for the run. After a fall or a long base, they show buyers taking control over several periods. [Three black crows](/three-black-crows/) are the bearish mirror.

Two related patterns describe the soldiers losing steam: the [advance block](/advance-block/) (each green body shrinks, upper shadows grow) and the [deliberation pattern](/deliberation-pattern/) (two long green candles then a small one). Both are read as warnings that the advance is tiring.

### Three inside and three outside

[Three inside up](/three-inside-up-down/) is a bullish harami followed by a third candle that closes above the first candle's body. It is a harami with its confirmation built in. Three inside down is the bearish mirror.

[Three outside up](/three-outside-up-down/) is a bullish engulfing pattern followed by a third candle that closes higher still. Three outside down is the bearish mirror.

### Rising and falling three methods

[Rising three methods](/rising-three-methods/) is a continuation pattern: a long green candle, then three (sometimes two to five) small candles that drift lower but stay within the first candle's range, then another long green candle that closes at a new high. It describes a pause inside an uptrend. [Falling three methods](/falling-three-methods/) is the bearish version. The [mat hold](/mat-hold/) is a similar pattern where the small candles hold above the first candle's body.

### Three-line strike

The [three-line strike](/three-line-strike/) is four candles: three candles in the direction of the trend, then a fourth that opens beyond the third and reverses past the first candle's open, wiping out the whole run in one period. It is described in some sources as a continuation pattern and in others as a reversal, which tells you something about how settled candlestick lore is.

### Longer patterns at a glance

| Pattern | Candles | Direction | Built-in confirmation? |
|---|---|---|---|
| Morning star | 3 | Bullish | Yes, the third candle |
| Evening star | 3 | Bearish | Yes, the third candle |
| Morning / evening doji star | 3 | Bullish / bearish | Yes |
| Abandoned baby | 3 | Either | Yes, with gaps |
| Three white soldiers | 3 | Bullish | The pattern is the move |
| Three black crows | 3 | Bearish | The pattern is the move |
| Three inside up / down | 3 | Either | Yes |
| Three outside up / down | 3 | Either | Yes |
| Rising / falling three methods | 5 | Continuation | Yes, the fifth candle |
| Three-line strike | 4 | Disputed | Not really |

## Context decides everything

If one idea from this guide sticks, make it this: **a candlestick pattern is only as good as the place it appears**. The same hammer means one thing at a long-tested support level after a sharp fall and almost nothing in the middle of a quiet range. Every serious writer on candlesticks, Nison included, says the same. In practice it is the step most often skipped.

There are four parts to context.

### 1. The trend before the pattern

A reversal pattern needs something to reverse. A hammer is defined as appearing after a decline; without the decline it is just a candle with a long lower shadow. But "after a decline" is vague. Over how many candles? By how much?

There is no standard answer. Common rules include:

- price below a short [moving average](/simple-moving-average/), such as the 10 or 20-period average;
- the close lower than it was 5 or 10 candles ago;
- a run of lower highs and lower lows (see [market structure](/market-structure/)).

Our detectors use a simple version: the direction of the last 10 bars. That is a reasonable default, but it means many of the "hammers" in our tests came after shallow dips, not deep falls. A pattern that only matters after a deep fall would look weak under that rule. When you read any statistic about a candlestick pattern, including ours, ask how "after a trend" was defined.

### 2. Location: support, resistance and key levels

A rejection candle at a level where price has turned before carries much more information than one in open space. Good locations include:

- a horizontal [support or resistance](/support-and-resistance/) level, or a [round number](/round-numbers/);
- the [previous day's high or low](/previous-day-high-low/), or the weekly open;
- a [Fibonacci retracement](/fibonacci-retracement/) level of a clear prior move;
- a [moving average](/exponential-moving-average/) that price has respected before;
- the edge of a [Bollinger Band](/bollinger-bands/) or a [VWAP](/vwap/) band.

The idea is [confluence](/confluence/): two independent reasons to expect a turn at the same place. The level says "price may turn here"; the candle says "price is trying to turn here now".

### 3. Volume

A hammer on twice the usual volume says more than a hammer on a quiet holiday session: more traders took part in rejecting the lower prices. A breakout marubozu on rising [volume](/volume/) is more convincing than one on thin volume. [Relative volume](/relative-volume/) compares the current bar's volume with the average for that time and is a simple way to check. On spot forex there is no central volume figure, so traders use [tick volume](/tick-volume/) instead, which is a rough stand-in.

### 4. Timeframe

Higher timeframes carry more weight. A daily hammer took a full day of trading to form and reflects many more decisions than a 5-minute hammer. A common approach is to read the pattern on the timeframe you trade but to check the level and trend on the next one up. The [multiple time frame analysis](/multiple-time-frame-analysis/) and [time frames](/time-frames/) guides explain how.

### Worked example: same candle, two contexts

This is an illustration with round numbers, not a real chart.

A stock has fallen from 120 to 100 over three weeks. It has bounced from 100 twice in the past year. Today it opens at 101, falls to 97, and closes at 100.80. The body is 0.20; the lower shadow is 3.80, about nineteen times the body. Volume is 1.8 times the 20-day average. That is a hammer at a twice-tested support level after a clear fall, on heavy volume. Four parts of context agree.

Now take the same candle, with the same open, high, low and close, on a stock that has drifted sideways between 98 and 104 for two months. It sits in the middle of the range on average volume. The shape is identical. The information is close to zero. Price has simply wandered down and back within one day, as it does in ranges all the time.

A screener would call both of these "hammers". Only one of them is worth your attention.

## Confirmation and entries

Once you have a pattern in a good location, the next questions are when to get in, where the trade is wrong, and where to take profit. None of these are part of the pattern; they are trade rules that you add. Different rules can turn the same pattern into very different results.

### Confirmation

Confirmation means waiting for the next candle to agree with the pattern before acting. For a bullish pattern, typical confirmation rules are:

- the next candle closes above the pattern's close;
- the next candle closes above the pattern's high (stricter);
- the next candle closes above the midpoint of the pattern's range (looser).

The trade-off is simple. Waiting for confirmation filters out some patterns that fail straight away. It also costs you: the confirmation candle's move is no longer available to you, and your stop is now further away, so the same stop means a smaller position or a larger loss in money terms. On a daily chart, a strong confirmation candle can easily use up half of a reasonable target before you have entered.

Three-candle patterns like the morning star and three inside up already contain their confirmation. Adding another confirmation candle on top of those makes the entry very late.

### Entry

There are three common entries:

1. **At the next open** after the pattern completes. Simple, testable, and what our tests use.
2. **On a break of the pattern's high** (for a bullish pattern), with a buy stop order just above it. You only get in if price moves your way, but you pay a worse price.
3. **On a pullback** into the pattern, for example a limit order at the midpoint of the hammer's lower shadow. Better price, but you miss the trades that run straight away.

### Stop placement

The pattern itself gives a natural place for the stop: just beyond its extreme. For a hammer, under its low. For a shooting star, above its high. If price goes beyond the point the pattern rejected, the pattern's story is wrong.

The problem is that the stop's distance depends on the candle's size. A hammer with a long lower shadow gives a wide stop; one with a short shadow gives a tight stop that ordinary noise can hit. An alternative is a stop based on recent volatility, such as one [ATR](/atr/) from the entry or the signal close. That keeps the risk in line with how much the market usually moves.

We tested both, and the choice mattered more than you might expect. With a stop just beyond the pattern, many trades were stopped out on the very day they were entered, because the pattern's extreme was too close to the open. We come back to this below. The [stop loss](/stop-loss/), [structure stop](/structure-stop/) and [ATR stop](/atr-stop/) guides go into the options.

### Targets in R

**R** is the amount you risk on a trade: the distance from entry to stop. A target of 2R means a target twice as far from entry as the stop. Thinking in R lets you compare trades of different sizes and on different markets on the same scale. The [risk-reward ratio](/risk-reward-ratio/) guide explains it further.

Common target choices:

- a fixed multiple of R, such as 1.5R or 2R;
- the next support or resistance level;
- a [trailing stop](/trailing-stop/) that follows price until it turns;
- a [time stop](/time-stop/): out after a set number of bars if nothing has happened.

### Worked example: a hammer trade in R

An illustration with round numbers, not a recommendation.

A daily hammer forms with a low of 48.00 and a close of 50.00. You enter at the next open, 50.20.

- **Stop:** just below the low, at 47.90. Risk (1R) is 50.20 - 47.90 = 2.30.
- **Target:** 2R above entry: 50.20 + (2 x 2.30) = 54.80.
- **Size:** if you risk 200 on the trade, the position is 200 / 2.30 = about 87 shares.

If the stop is hit, you lose about 200 (more if price gaps through it). If the target is hit, you gain about 400. To come out ahead over many such trades, more than one in three needs to reach the target before the stop, after costs. That break-even point is why we report results in R rather than as a share of winners: a pattern that "works" 60% of the time can still lose money if its losers are larger than its winners. The [position sizing](/position-sizing/) guide shows the arithmetic.

## What our tests found

This section reports our own tests. Every figure here comes from the **tuning period** of our studies, the part of the data we used to look for candidates, and is labelled as **exploratory, not a tested result** or **no evidence of an edge**. Read [how we test](/methods/) for the full method and its limits.

### The method in brief

- **Detectors:** 45 candlestick pattern detectors, each with its default settings, applied by code to every daily bar. Three (long-legged doji, mat hold and spinning top) give no direction and could not be tested as trades.
- **Markets:** daily bars for 10 large US stocks and index funds: SPY, QQQ, IWM, Apple, Microsoft, Nvidia, Tesla, Amazon, JPMorgan and Exxon.
- **Period:** trades from January 2021 to October 2025, the tuning period. The most recent 12 months were held back unseen.
- **Trade rules:** entry at the next day's open; target twice the real risk at the fill (2R); out after 20 days if neither stop nor target is hit; spread paid on the way in and out. Every pattern was tested long or short in its usual direction, with two stop rules: just beyond the pattern, and one ATR from the signal close.
- **Variants:** 110 combinations of pattern, side and stop rule were tried. Only the 36 with at least 30 trades were assessed.
- **Comparison:** every result is compared with **random entries** on the same markets, same side, same risk size and same calendar quarter. The "edge over random entry" is the difference between the pattern's result and the random entries' result, in R per trade.

### Known limits

- The 10 markets were chosen knowing they had done well over the period, which flatters buying. SPY and QQQ hold many of the same companies, so this is closer to four or five independent markets than ten.
- Daily bars cannot show whether the stop or target was hit first on a day that touched both; we assume the stop.
- Testing 110 variants means some will look good by luck. We adjust for that with the Benjamini-Hochberg method, and no variant passed after the adjustment.

### What showed no evidence of an edge

The most popular patterns did no better than random entries in this sample. Each figure below is from the tuning period (10 US stocks and funds, January 2021 to October 2025), with the stop one ATR from the signal close, and carries the label **no evidence of an edge**:

| Pattern | Side | Trades | Edge over random entry, R per trade | 95% range | Label |
|---|---|---|---|---|---|
| Hammer | Long | 191 | +0.02 | -0.18 to +0.24 | No evidence of an edge |
| Hanging man | Short | 180 | -0.04 | -0.23 to +0.17 | No evidence of an edge |
| Bullish engulfing | Long | 132 | -0.05 | -0.30 to +0.21 | No evidence of an edge |
| Bearish engulfing | Short | 202 | -0.06 | -0.25 to +0.14 | No evidence of an edge |
| Shooting star | Short | 111 | +0.07 | -0.16 to +0.30 | No evidence of an edge |
| Doji (long after a fall) | Long | 300 | -0.08 | -0.25 to +0.10 | No evidence of an edge |
| Doji (short after a rise) | Short | 507 | +0.09 | -0.03 to +0.22 | No evidence of an edge |

The "95% range" is the spread of plausible values for the edge given the sample. Every one of these ranges includes zero, which means the result is consistent with the pattern adding nothing over random entry. The doji short came closest, with a p of 0.047 before adjustment, but after adjusting for the 36 variants assessed its adjusted p was 0.54: easily explained by luck. ([How we test](/methods/).)

The hammer result is worth dwelling on, because the hammer is the pattern most people learn first. Across 191 trades, it did almost exactly as well as random entries on the same markets in the same quarters. That does not mean hammers are useless. It means that a hammer, found by a rule and traded mechanically with no regard for location, did not add anything in this sample. Context, which our mechanical test ignores, may be where the value is.

### What was exploratory

A handful of variants did better than random entries in the tuning period. None passed the adjustment for the number of variants tried, and some had fewer than the 100 trades our rules need for a headline. They are labelled **exploratory, not a tested result**.

| Pattern | Side, stop | Trades | Edge over random entry, R per trade | 95% range | Label |
|---|---|---|---|---|---|
| Inverted hammer | Long, 1 ATR | 96 | +0.38 | +0.01 to +0.75 | Exploratory, not a tested result |
| Tweezer tops | Short, 1 ATR | 59 | +0.37 | +0.03 to +0.71 | Exploratory, not a tested result |
| Bullish harami | Long, beyond pattern | 58 | +0.27 | -0.14 to +0.71 | Exploratory, not a tested result |
| Bullish engulfing | Long, beyond pattern | 127 | +0.10 | -0.10 to +0.31 | Exploratory, not a tested result |

All four: tuning period, 10 US stocks and funds, January 2021 to October 2025; 110 variants tried. ([How we test](/methods/).)

The two that stood out, the inverted hammer and tweezer tops, were then re-run on 39 different markets: 26 members of the Dow Jones Industrial Average (as of January 2021) that were not in the first study, the 11 Select Sector SPDR funds, gold and bitcoin. This was still the tuning period, and the rules for "holds" were written down before any new data was fetched.

- **Inverted hammer (long, stop 1 ATR):** 420 trades, 39 markets, January 2021 to October 2025, tuning period. Edge over random entry +0.20R per trade (95% range +0.07 to +0.33). **Exploratory, not a tested result.** A test on data held back from both runs has been run and its result is being reviewed before we publish it.
- **Tweezer tops (short, stop 1 ATR):** 215 trades, 39 markets, February 2021 to October 2025, tuning period. Edge over random entry -0.07R per trade (95% range -0.24 to +0.13). **No evidence of an edge** on the wider markets; the first result did not carry over.

The tweezer tops result is a useful lesson. A pattern that looked strong on 59 trades in 10 markets fell apart on 215 trades in 39 others. Small samples flatter.

### The stop-rule lesson

One finding was clear across patterns: **the stop just beyond the pattern was often too tight on daily bars**. With that stop, 82% of hanging man trades and 82% of inverted hammer trades exited on the day they were entered, and 62 to 69% of doji trades did. The pattern's extreme is usually close to the next day's open, and ordinary noise reaches it. A stop based on the market's normal range (one ATR) kept same-day exits at around 20 to 26%. (Tuning period, 10 US stocks and funds, January 2021 to October 2025; exploratory, not a tested result; [how we test](/methods/).)

If you trade single-candle patterns on daily charts with a stop right under the wick, expect many trades to end the day you enter them.

### Too rare to test

Many named patterns barely appeared. Over almost five years of daily bars on 10 markets, our detectors produced fewer than 30 trades for: the morning star (9), evening star (16), morning doji star (3), evening doji star (8), three white soldiers (5), three black crows (3), abandoned baby (0), kicker (7 long, 9 short), piercing line (27), dark cloud cover (23), dragonfly doji (8) and gravestone doji (18). Under our rules we publish no result for any of them. Some of these are among the most written-about patterns. On large, liquid US stocks, strictly defined, they are rare.

### What to take from this

- Most well-known patterns, traded mechanically, did no better than random entry in our sample.
- A few looked interesting; the more we tested them, the smaller the effect became, which is what you would expect if luck played a part.
- How you set the stop changed the results as much as which pattern you traded.
- None of this tests context. A trader who only takes hammers at strong support after a sharp fall is doing something our test did not measure.

## Candlesticks on different markets

The same pattern can behave differently, or appear at different rates, on different markets. Mostly this comes down to one thing: **how the open of each candle is set**.

### Stocks and stock indices

Stock exchanges close overnight, so each daily candle opens at a fresh auction price that can sit well away from the previous close. That is what makes gap-based patterns possible: the classic piercing line, dark cloud cover, morning star, abandoned baby and kicker all need the open to jump away from the prior close. Stock charts are where candlestick rules were written for Western traders, and they fit best there.

Earnings reports, dividends and splits create gaps that have nothing to do with the pattern. A "hammer" on an earnings day is a reaction to news. Many traders skip patterns on those days.

### Forex

The spot currency market trades 24 hours a day, five days a week, with no single exchange. So:

- **Gaps are rare during the week.** Each daily candle usually opens at or near the previous close. Engulfing patterns that require the second candle to open beyond the first close almost never form; most forex traders relax the rule.
- **The daily close is a convention.** Most platforms close the daily candle at 5pm New York time, but some use midnight in another time zone. On those charts the "Sunday candle" can be a small extra bar, and the daily candles have different shapes. Two traders looking at the "same" daily chart can see different patterns.
- **Weekend gaps** appear between Friday's close and Sunday's open, and are the only regular gaps.
- **No central volume.** Tick volume is used instead.

### Crypto

Crypto trades 24 hours a day, seven days a week. There is no natural daily close; most exchanges use midnight UTC, but not all. There are almost no gaps between candles on a single exchange. Weekend sessions are often thinner, and moves on thin liquidity can produce long wicks that look like strong rejection but reflect a few large orders. Prices also differ slightly between exchanges, so a wick on one exchange may not appear on another.

In our wider follow-up, bitcoin produced only 9 inverted hammer trades and 13 tweezer top trades over the tuning period. That is far too few to say anything about crypto on its own.

### Futures

Futures trade nearly 24 hours on most contracts, with a short daily break and a settlement price that may differ from the last trade. Daily candles may be built from the full electronic session or only the day session, which changes their shape. Contracts also roll from one expiry to the next, and a continuous chart that joins them can create artificial gaps.

### Markets at a glance

| Market | Daily gaps | Daily close | Volume | Gap-based patterns |
|---|---|---|---|---|
| Stocks | Common | Exchange close | Real, central | Form as described |
| Forex | Weekend only | Convention (often 5pm New York) | Tick volume only | Rare unless rules relaxed |
| Crypto | Almost none | Convention (often midnight UTC) | Per exchange | Rare unless rules relaxed |
| Futures | Some, at session break | Settlement or session close | Real, central | Depends on session used |

## Common mistakes

### Naming without context

The most common mistake is spotting a named shape and acting on the name. "That's a hammer, so it's bullish." The name describes the candle. Whether it is worth acting on depends on the trend before it, the level it formed at, the volume, and the timeframe. A hammer in the middle of a range is noise.

### Ignoring the timeframe

Patterns on very short timeframes, such as 1 to 5-minute charts, form constantly and mean little on their own. Each candle reflects a handful of orders. The same shape on a daily or weekly chart reflects far more trading. If you trade short timeframes, read candles there for timing, but take the level and the trend from a higher timeframe.

### Treating intraday noise as a signal

On busy charts, many candles have long wicks simply because a large order passed through. A long lower wick on a 1-minute chart at the moment of a news release is a reaction, not a rejection that will last.

### Hindsight pattern-spotting

Looking back at a chart, it is easy to find a hammer at every major low. What you do not see are the dozens of hammers that came before it, each followed by further falls. This is the most dangerous mistake because it feels like evidence. The fix is to count every occurrence, not only the ones that worked. That is what a detector does, and it is why mechanical tests are so much less flattering than chart books.

### Using too tight a stop

As our tests showed, a stop right under the wick of a single candle is often reached the very next day by ordinary movement. If the market's normal daily range is larger than the distance to your stop, the stop is inside the noise.

### Forgetting the definition differs between platforms

How small is a doji's body? How equal are tweezer highs? Does an engulfing pattern need to engulf the shadows? Every platform answers these differently. Two screeners can return different lists of "bullish engulfing" stocks on the same day. Know your platform's rule before trusting its scan.

### Measuring success by win rate

A pattern that is right 60% of the time with small wins and large losses can lose money. A pattern that is right 35% of the time with wins twice the size of losses can make money. Measure results in R, after costs, and compare them with what random entries would have done.

## How to practise

### A pre-trade checklist

Before acting on any candlestick pattern, answer these in order:

1. **Is it a clean example?** Does the candle meet the rule (shadow length, body size, colour), or are you squinting?
2. **Is there a trend to reverse?** For a reversal pattern, is there a clear move before it on this timeframe?
3. **Is it at a level?** Support, resistance, a key moving average, a round number, the prior day's high or low?
4. **Is volume above normal?** Where volume is available.
5. **Does the higher timeframe agree?** Or are you fighting a bigger trend?
6. **Where is the stop, and is it outside the noise?** Compare the distance with the ATR.
7. **Is the target at least 1.5 to 2 times the risk, before the next obstacle?**
8. **Has the confirmation rule been met?** If you use one.

If the answers to 2 and 3 are no, the pattern is close to meaningless whatever its shape.

### Keep a journal

Record every pattern you consider, not only the ones you trade. For each, note the pattern, timeframe, context (trend, level, volume), whether you took it, and what happened in R after 5, 10 and 20 bars. After 50 to 100 entries you will have your own evidence, on your markets and timeframe, and it will tell you more than any book.

### Run a simple test yourself

You can run a basic version of our test with a spreadsheet:

1. Pick one pattern and one market, on daily bars.
2. Write down a precise rule for the pattern and for "after a decline".
3. Go through the chart from left to right, covering future bars, and mark every candle that meets the rule.
4. For each, record entry at the next open, a stop one ATR below the entry, and a 2R target. Note which was hit first within 20 bars.
5. Now pick the same number of random days in the same months and do the same.
6. Compare the average R of the two groups.

If the pattern does no better than the random days, you have learned something useful. If it does better, try it on a different market before believing it.

### Worked example: one journal entry

This is an illustration with round numbers, not a real trade.

| Field | Entry |
|---|---|
| Date and market | A Tuesday, a large US stock, daily chart |
| Pattern | Bullish engulfing |
| Trend before | Five lower closes, from 88 to 81 |
| Level | Prior swing low at 80.50, tested once before |
| Volume | 1.4 times the 20-day average |
| Higher timeframe | Weekly trend still down |
| Decision | Skipped: weekly trend against it |
| After 5 / 10 / 20 bars | +0.6R / +1.1R / -0.4R, measured from a would-be entry at 81.60 with a stop of 1 ATR |

The skipped trade still goes in the journal. After a few months, the entries let you ask useful questions. Did patterns against the weekly trend really do worse than those with it? Did volume make any difference? Did a stop of one ATR survive the first day more often than a stop under the pattern? Your own records, kept honestly and including the trades you skipped, are the closest thing to a test that fits the way you actually trade.

A journal also guards against hindsight. When you review a chart months later, it is easy to remember the patterns that worked. The journal remembers all of them.

## Comparison table of the main patterns

The table below brings the main patterns together. "Our test result" uses the stop one ATR from the signal close unless stated, and every figure is from the tuning period on 10 US stocks and funds, January 2021 to October 2025 ([how we test](/methods/)).

| Pattern | Type | Candles | Direction | Needs confirmation? | Our test result |
|---|---|---|---|---|---|
| [Hammer](/hammer/) | Reversal | 1 | Bullish | Usually | 191 trades, edge +0.02R: no evidence of an edge |
| [Hanging man](/hanging-man/) | Reversal | 1 | Bearish | Yes | 180 trades, edge -0.04R: no evidence of an edge |
| [Inverted hammer](/inverted-hammer/) | Reversal | 1 | Bullish | Yes | 96 trades, edge +0.38R: exploratory, not a tested result; held-back test under review |
| [Shooting star](/shooting-star/) | Reversal | 1 | Bearish | Usually | 111 trades, edge +0.07R: no evidence of an edge |
| [Doji](/doji/) | Indecision | 1 | Either | Yes | 300 long / 507 short trades: no evidence of an edge |
| [Marubozu](/marubozu/) | Strength | 1 | Either | No | 30 to 35 trades per variant: exploratory, not a tested result |
| [Bullish engulfing](/bullish-engulfing/) | Reversal | 2 | Bullish | Often | 132 trades, edge -0.05R: no evidence of an edge |
| [Bearish engulfing](/bearish-engulfing/) | Reversal | 2 | Bearish | Often | 202 trades, edge -0.06R: no evidence of an edge |
| [Bullish harami](/bullish-harami/) | Reversal | 2 | Bullish | Yes | 58 trades, edge +0.23R: exploratory, not a tested result |
| [Bearish harami](/bearish-harami/) | Reversal | 2 | Bearish | Yes | 78 trades, edge -0.04R: no evidence of an edge |
| [Piercing line](/piercing-line/) | Reversal | 2 | Bullish | Often | 27 trades: too few to report |
| [Dark cloud cover](/dark-cloud-cover/) | Reversal | 2 | Bearish | Often | 23 trades: too few to report |
| [Tweezer tops](/tweezer-tops/) | Reversal | 2 | Bearish | Yes | 59 trades, then 215 on 39 markets: no evidence of an edge on the wider markets |
| [Tweezer bottoms](/tweezer-bottoms/) | Reversal | 2 | Bullish | Yes | 33 trades, edge -0.20R: no evidence of an edge |
| [Morning star](/morning-star/) | Reversal | 3 | Bullish | Built in | 9 trades: too few to report |
| [Evening star](/evening-star/) | Reversal | 3 | Bearish | Built in | 16 trades: too few to report |
| [Three white soldiers](/three-white-soldiers/) | Reversal / continuation | 3 | Bullish | Built in | 5 trades: too few to report |
| [Three black crows](/three-black-crows/) | Reversal / continuation | 3 | Bearish | Built in | 3 trades: too few to report |
| [Three outside up](/three-outside-up-down/) | Reversal | 3 | Bullish | Built in | 61 trades, edge +0.12R: exploratory, not a tested result |
| [Three outside down](/three-outside-up-down/) | Reversal | 3 | Bearish | Built in | 80 trades, edge -0.27R: no evidence of an edge |

## FAQ

**Which candlestick pattern is the most reliable?**

No pattern has shown a dependable edge in our tests so far, and published rankings disagree. Three-candle patterns include their own confirmation, so many writers rank them higher, but they are rare and late. In our tuning-period test the inverted hammer did best against random entries, and it is labelled exploratory while a test on held-back data is reviewed. Reliability comes mostly from context: trend, level, volume and timeframe.

**Do candlestick patterns work?**

As descriptions of what buyers and sellers did, yes. As stand-alone predictions, the evidence is weak. In our test of 110 variants on 10 US stocks and funds from January 2021 to October 2025 (tuning period), the best-known patterns showed no evidence of an edge over random entries. Used at strong levels, with sensible stops, they are a useful timing tool. See [Do candlestick patterns work?](/answers/do-candlestick-patterns-work/).

**How many candlestick patterns are there?**

There is no official list. Reference books describe from a few dozen to over 100 named patterns, many of them bullish and bearish mirrors of each other. Our library has 45 detectors. A trader who knows the five basic shapes and a dozen common patterns covers most of what appears on a chart. See [How many candlestick patterns are there?](/answers/how-many-candlestick-patterns-are-there/).

**Do I need confirmation after a candlestick pattern?**

Most writers recommend it for single and two-candle patterns, especially the hanging man and inverted hammer. Confirmation filters out some failures but costs you entry price and widens the stop. Three-candle patterns contain their own confirmation. See [Do you need confirmation after a candlestick pattern?](/answers/do-you-need-confirmation-after-a-candlestick-pattern/).

**What is the best timeframe for candlestick patterns?**

Daily and weekly charts carry more weight because each candle reflects more trading. Very short timeframes produce many patterns that mean little. Many traders find patterns on the daily chart and use a shorter chart only to time the entry. See [What is the best timeframe for candlestick patterns?](/answers/best-timeframe-for-candlestick-patterns/).

**Are candlestick patterns the same on forex and crypto?**

The shapes are the same, but the markets trade around the clock, so gaps between candles are rare and the daily close depends on your platform's time setting. Gap-based patterns rarely form unless the rules are relaxed. See [Do candlestick patterns work in forex?](/answers/do-candlestick-patterns-work-in-forex/) and [Do candlestick patterns work on crypto?](/answers/do-candlestick-patterns-work-on-crypto/).
