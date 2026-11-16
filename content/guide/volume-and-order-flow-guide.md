---
slug: volume-and-order-flow-guide
title: "Volume and order flow: the complete guide"
description: What volume really measures, how OBV, VWAP and volume profile are built, what order flow and delta show, and where volume data misleads traders.
query: volume trading
publish: 2027-08-09
reviewed: 16 November 2026
cluster: [volume, relative-volume, tick-volume, on-balance-volume, accumulation-distribution, chaikin-money-flow, money-flow-index, vwap, anchored-vwap, vwma, volume-profile, market-profile, volume-delta, cumulative-volume-delta, footprint-chart, volume-climax, volume-spread-analysis, wyckoff-method]
value: [table, example, verdict]
chart: on-balance-volume
---

Volume is the number of units that changed hands in a period. A share, a futures contract, a coin, a lot. Price tells you where trades happened. Volume tells you how much trading happened there. Put the two together and you get a rough picture of how much interest stood behind a move.

That is the promise of volume analysis, and it is a real one. It is also easy to oversell. Volume does not tell you who bought or who sold, because every trade has a buyer and a seller. It does not tell you what big players intend. And in some markets, spot forex above all, the "volume" on your chart is not traded volume at all. It is a count of price changes.

This guide covers the whole subject in one place. It starts with what volume is and where the number comes from. It then works through raw volume bars, the cumulative indicators such as [on-balance volume](/on-balance-volume/), the volume-weighted prices such as [VWAP](/vwap/), [volume profile](/volume-profile/), and the order-flow tools: the order book, delta, footprint charts and the tape. It ends with the data traps, how to test a volume idea without fooling yourself, the common mistakes, a comparison table and an FAQ.

The short version, before the detail: volume is a measure of participation, not of direction. It is most useful where it is real and central, as in exchange-traded stocks and futures. It is weakest where it is a proxy, as in spot forex tick volume, or where it is fragmented and partly fake, as in parts of the crypto market. Every volume tool in this guide is a way of weighting or summing the same raw number. None of them can add information that the raw data does not hold.

We have not run a volume backtest of our own, so this guide contains no test results of ours. It contains the standard, widely published methods, the formulas, worked examples you can check with a calculator, and honest verdicts on each tool. Where a number comes from a choice we made for an example, we say so. Nothing here is a recommendation to buy or sell anything.

## 1. What volume is

Volume is a count. In a given bar, it is the total quantity traded. On a daily share chart, a volume bar of 1.2 million means 1.2 million shares changed hands that day. On a futures chart, it means contracts. On a crypto chart, it usually means coins (or sometimes the value in dollars, depending on the platform).

### Every trade has two sides

The single most important fact about volume is this: every unit traded was bought by one person and sold by another. A day with 1.2 million shares traded is a day with 1.2 million shares bought and 1.2 million shares sold. There is no such thing as "buying volume" in the sense of more buying than selling.

When people say "buyers were in control", they mean something narrower. They mean that the trades tended to happen at the ask price, where an impatient buyer pays up, rather than at the bid, where an impatient seller gives way. That is the idea behind order flow and delta, which section 6 covers. It is a statement about who was in a hurry, not about how many units were bought.

Keep this in mind whenever a chart label says "buy volume" or "sell volume". Some tools split volume by whether the bar closed up or down. Others split it by whether each trade hit the bid or the ask. Those are estimates of aggression, built on rules. They are not counts of buyers and sellers.

### Shares, contracts and lots

The unit depends on the market:

- **Stocks:** shares. A volume of 500,000 means 500,000 shares.
- **Futures:** contracts. One contract of a stock index future can control a large notional amount, so 50,000 contracts can be far more money than 50,000 shares.
- **Options:** contracts, usually each on 100 shares in US markets.
- **Crypto:** coins, or the quote currency value. Check which one your platform shows.
- **Forex:** lots, but only on venues that report them. Retail charts of spot forex usually show tick volume instead (see below).

Because units differ, raw volume numbers cannot be compared across markets. 1 million shares of a low-priced stock is a small amount of money. 1 million shares of a high-priced stock is a large one. Within one market and one instrument, raw volume compares fine. Across instruments, you need relative measures, such as [relative volume](/relative-volume/), or money values.

### Exchange volume and broker volume

Shares and futures trade on exchanges. Each exchange reports every trade. A data vendor adds up the reports, so the volume you see is (close to) the real total traded on those venues.

Even here, there are gaps. US shares trade on many exchanges and also off-exchange, in dark pools and through wholesalers. A "consolidated" feed adds these up. A feed from a single exchange does not. Two charts of the same share can show different volumes because one shows only one venue. Section 11 returns to this.

Futures are cleaner. Most futures contracts trade on one exchange, so the volume on a futures chart is close to the whole market for that contract. That is one reason futures traders lean on volume and order flow more than spot forex traders.

### Why spot forex has no central volume

Spot forex is not traded on one exchange. It trades between banks, through electronic networks, through retail brokers and through many other venues. There is no central tape that adds all of this up in real time. So no retail chart of EUR/USD can show the true total traded.

What forex charts usually show is [tick volume](/tick-volume/): the number of times the price changed during the bar, as seen by your broker's feed. If the price ticked 3,000 times in an hour, the bar shows 3,000. It counts updates, not units.

Tick volume is a proxy. It tends to rise when markets are busy, because busy markets move more often. Where both can be compared, as in futures, the two often rise and fall together, because busy markets update more often. But a proxy is not the thing itself, and the link varies by broker, by feed and by time of day. Two brokers can show different tick volume for the same hour, because they filter quotes differently. Treat forex tick volume as "how busy was my broker's feed", not as "how much was traded".

Currency futures, traded on an exchange, do have real volume. Some forex traders look at the futures volume as a guide to the spot market. That is reasonable as a rough guide to activity, with two caveats: futures are a small slice of all currency trading, and the futures price includes an interest-rate difference, so its levels do not match spot exactly.

## 2. Reading raw volume

Raw [volume](/volume/) is usually shown as a column chart under the price. Each column is one bar's volume. Many platforms colour the column green if the bar closed up and red if it closed down. That colour is a display choice, not a split of buying and selling.

### What to look at first

Before any indicator, raw volume answers three plain questions:

1. **Is this bar busy or quiet compared with normal?** A bar is only "high volume" relative to something.
2. **Did the busy bars come with big price moves or small ones?** Effort and result, in the language of section 9.
3. **Where in the trend did the busy bars appear?** At the start, in the middle, or at an extreme.

That is most of what raw volume can tell you. The rest of this guide is mostly ways of answering these three questions with more structure.

### Relative volume

[Relative volume](/relative-volume/) (often called RVOL) compares the current volume with a normal level. The simplest form divides today's volume by the average volume of the last N days.

> Relative volume = current volume ÷ average volume over the last N periods

If a share trades 1,800,000 shares today and its 20-day average is 1,200,000, relative volume is 1,800,000 ÷ 1,200,000 = 1.5. Today is 50% busier than normal.

There are two common versions, and platforms differ:

| Version | What it compares | Good for | Weakness |
|---|---|---|---|
| Full-day RVOL | Today's whole volume against the average whole day | End-of-day review | Not known until the close |
| Time-of-day RVOL | Volume so far today against the average volume by this time of day | Intraday use | Needs intraday history; sensitive to the period chosen |

Time-of-day matters because volume is not spread evenly through a session. In most stock markets, volume is heavy near the open, lighter in the middle of the day, and heavy again near the close. Comparing 30 minutes of trading with a whole day's average makes every morning look quiet. A time-of-day version compares like with like.

Choice of N also matters. A 20-day average reacts to recent news. A 50-day average is steadier. Neither is "correct". Pick one, write it down, and do not change it to suit the chart in front of you.

### Volume on breakouts

The most quoted volume rule is that a breakout should come on high volume. The reasoning is that a break through a well-watched level on light trading may simply mean no one was there to defend it, and the move may fade. A break with heavy participation suggests that many traders acted on the move.

That reasoning is sound as a description. As a filter, it has two problems. First, "high" needs a definition: a relative volume threshold, written down in advance. Second, high-volume breakouts fail too, and low-volume breakouts sometimes run. Volume shifts the odds a little, if it does anything, in a given market. It does not sort breakouts into good and bad. Our answer on [what volume tells you about a breakout](/answers/what-does-volume-tell-you-about-a-breakout/) goes through this in more detail, and section 10 covers patterns.

### Climaxes

A [volume climax](/volume-climax/) is a bar with exceptionally high volume, often the highest for many weeks, usually with a wide price range. It tends to appear after an extended move.

A selling climax comes after a fall: a wide down bar on huge volume, often followed by a bounce. A buying climax comes after a rise: a wide up bar on huge volume, often followed by a stall. The classic reading is that the climax marks the point where the last eager sellers (or buyers) acted all at once, leaving fewer behind to push price further.

That reading is plausible. It is also easy to apply with hindsight. In real time, you do not know whether today's record volume is a climax or the first day of a bigger move. A climax is only clear once price has stopped going the same way. Treat it as a reason to pay attention, not as a signal on its own.

### Dry-ups

The opposite of a climax is a dry-up: volume falling well below normal, often during a pause or a pullback. The common reading is that a pullback on shrinking volume shows little interest in pushing price back, which some traders see as a healthy pause in a trend. A rally on shrinking volume, in a downtrend, is read the same way in reverse.

Dry-ups also happen for dull reasons: holidays, the summer lull, a big news event later in the week that everyone is waiting for. Before reading meaning into a quiet stretch, check the calendar.

## 3. Cumulative volume indicators

Cumulative volume indicators add volume up over time, with a sign. Each bar's volume (or part of it) is added if the bar looks like buying pressure and subtracted if it looks like selling pressure. The running total becomes a line. The rule for "looks like buying" is what separates one indicator from another.

### On-balance volume (OBV)

[On-balance volume](/on-balance-volume/) was popularised by Joseph Granville in the 1960s. It is the simplest cumulative volume line.

The rule:

- If today's close is above yesterday's close, add today's volume.
- If today's close is below yesterday's close, subtract today's volume.
- If the close is unchanged, OBV is unchanged.

The starting value is arbitrary, often zero. Only the shape of the line matters, not its level.

**Worked OBV calculation.** Here is a made-up share over seven days. Day 0 is the starting point.

| Day | Close | Change | Volume | OBV |
|---|---|---|---|---|
| 0 | 20.00 | – | – | 0 |
| 1 | 20.50 | up | 1,000 | 1,000 |
| 2 | 20.30 | down | 1,500 | −500 |
| 3 | 20.30 | flat | 800 | −500 |
| 4 | 20.80 | up | 2,000 | 1,500 |
| 5 | 21.20 | up | 2,500 | 4,000 |
| 6 | 21.00 | down | 1,200 | 2,800 |

Check a few rows. Day 2 closed down, so its 1,500 is subtracted from 1,000, giving −500. Day 3 closed flat, so OBV stays at −500, and the 800 shares traded that day are ignored. Day 4 closed up, so −500 + 2,000 = 1,500.

Notice what OBV does with day 6. The close dipped by only 0.20, yet the whole 1,200 was subtracted. That is the main weakness of OBV: a tiny change in the close moves the whole bar's volume. A day that closes down one cent counts the same as a day that collapses.

How traders read OBV:

- **Confirmation:** price and OBV making new highs together.
- **Divergence:** price makes a new high but OBV does not, or the reverse. Section 9 discusses divergence and its limits.
- **Breakouts in OBV itself:** some traders draw trend lines on the OBV line and watch for breaks.

Verdict: OBV is simple and widely available, and it is a fair way to see whether volume has tended to come on up days or down days. Its all-or-nothing rule makes it noisy. It depends entirely on the close, so it is sensitive to how the platform defines the session close.

### Accumulation/distribution

The [accumulation/distribution line](/accumulation-distribution/) (A/D), associated with Marc Chaikin, fixes OBV's all-or-nothing problem. Instead of looking at close against close, it looks at where the close sits within the bar's own range.

First, the money flow multiplier:

> Multiplier = ((close − low) − (high − close)) ÷ (high − low)

The multiplier runs from +1 (close at the high) to −1 (close at the low). A close in the exact middle gives 0.

Then:

> Money flow volume = multiplier × volume

> A/D line = previous A/D + money flow volume

Take a bar with high 50, low 46, close 49 and volume 10,000. The close is 3 above the low and 1 below the high. Multiplier = (3 − 1) ÷ 4 = 0.5. Money flow volume = 0.5 × 10,000 = 5,000. So 5,000 is added to the line.

Because it ignores the previous close, A/D can disagree with OBV. A bar that gaps up and then closes near its low adds volume to OBV (close above yesterday's close) but subtracts from A/D (close near the bar's low). Neither is wrong. They measure different things. A/D also ignores gaps entirely, which is a weakness in markets that gap often.

Some platforms offer the [Williams accumulation/distribution](/williams-accumulation-distribution/) instead, which uses a different rule. Check the name and the formula, not just the label "A/D".

### Chaikin money flow

[Chaikin money flow](/chaikin-money-flow/) (CMF) takes the same money flow volume and turns it into a bounded oscillator over a window. The common default is 20 or 21 periods.

> CMF = sum of money flow volume over N bars ÷ sum of volume over N bars

**Worked CMF over three bars** (N = 3, small for the example):

| Bar | High | Low | Close | Volume | Multiplier | Money flow volume |
|---|---|---|---|---|---|---|
| 1 | 50 | 46 | 49 | 10,000 | 0.5 | 5,000 |
| 2 | 51 | 48 | 48.5 | 8,000 | −0.667 | −5,333 |
| 3 | 52 | 49 | 51.5 | 12,000 | 0.667 | 8,000 |
| Total | | | | 30,000 | | 7,667 |

Bar 2: the close of 48.5 is 0.5 above the low and 2.5 below the high, so the multiplier is (0.5 − 2.5) ÷ 3 = −0.667 (rounded). CMF = 7,667 ÷ 30,000 = 0.256 (rounded). A positive CMF means that, over the window, closes tended to sit in the upper part of their bars, weighted by volume.

CMF reads between −1 and +1. Values near zero are common. Some traders use a small band around zero (such as ±0.05) as "no signal". That band is a convention, not a tested threshold.

The [Chaikin oscillator](/chaikin-oscillator/) is a related tool: the difference between a fast and a slow exponential moving average of the A/D line. It turns the A/D line into a momentum measure.

### Money flow index

The [money flow index](/money-flow-index/) (MFI) is often described as a volume-weighted RSI. It uses the typical price, (high + low + close) ÷ 3, and multiplies it by volume to get "raw money flow".

1. Typical price = (high + low + close) ÷ 3.
2. Raw money flow = typical price × volume.
3. If today's typical price is above yesterday's, today's raw money flow is "positive". If below, "negative".
4. Over N periods (commonly 14), money ratio = sum of positive flow ÷ sum of negative flow.
5. MFI = 100 − 100 ÷ (1 + money ratio).

The result runs from 0 to 100, like RSI. Readings above 80 and below 20 are the usual "extreme" lines, compared with 70 and 30 for RSI. Those lines are conventions. The pillar on [RSI and momentum oscillators](/guide/rsi-and-momentum-oscillators/) explains why fixed overbought and oversold lines work poorly in strong trends, and the same applies to MFI.

### Other cumulative and volume-weighted oscillators

There are many relatives. The ones you will meet most often:

- [Price volume trend](/price-volume-trend/): like OBV, but adds volume in proportion to the percentage change in the close, not all or nothing.
- [Force index](/force-index/) and [Elder's force index](/elders-force-index/): price change times volume, usually smoothed.
- [Ease of movement](/ease-of-movement/): how far price moved per unit of volume.
- [Klinger oscillator](/klinger-oscillator/): compares fast and slow averages of a volume-force measure.
- [Negative volume index](/negative-volume-index/) and [positive volume index](/positive-volume-index/): track price only on days when volume falls, or rises.
- [Twiggs money flow](/twiggs-money-flow/): a variant of CMF that uses true range to handle gaps.
- [Volume oscillator](/volume-oscillator/): the gap between a fast and a slow average of volume itself, with no price direction.

They all take two inputs, price and volume, and combine them with a rule. If you use several at once, you are mostly looking at the same information several times. Pick one that suits the market and the question, and learn it well.

## 4. Volume-weighted prices

A volume-weighted price is an average where each price counts in proportion to how much traded there. A price where 10,000 units traded counts ten times as much as a price where 1,000 traded.

### VWAP

The [volume-weighted average price](/vwap/) (VWAP) is the average price paid for every unit traded since a starting point, usually the start of the session.

> VWAP = cumulative (typical price × volume) ÷ cumulative volume

Here, typical price is (high + low + close) ÷ 3 for each bar. Some platforms use the close, or (high + low) ÷ 2, or each trade's own price. With trade-by-trade data the VWAP is exact. With bars it is an estimate, and the typical price is the most common estimate.

**Worked VWAP calculation.** Four intraday bars of a made-up share:

| Bar | High | Low | Close | Volume | Typical price | TP × volume | Cum. TP × vol | Cum. volume | VWAP |
|---|---|---|---|---|---|---|---|---|---|
| 1 | 10.20 | 9.80 | 10.00 | 3,000 | 10.0000 | 30,000.00 | 30,000.00 | 3,000 | 10.0000 |
| 2 | 10.40 | 10.00 | 10.30 | 2,000 | 10.2333 | 20,466.67 | 50,466.67 | 5,000 | 10.0933 |
| 3 | 10.60 | 10.20 | 10.50 | 4,000 | 10.4333 | 41,733.33 | 92,200.00 | 9,000 | 10.2444 |
| 4 | 10.50 | 10.10 | 10.20 | 1,000 | 10.2667 | 10,266.67 | 102,466.67 | 10,000 | 10.2467 |

Check bar 2. Typical price = (10.40 + 10.00 + 10.30) ÷ 3 = 10.2333. Times 2,000 = 20,466.67. Add bar 1's 30,000 to get 50,466.67. Divide by 5,000 and VWAP = 10.0933.

Two things stand out. Bar 3 had the most volume, so it pulled VWAP up the most. And by bar 4, one more bar of 1,000 barely moves VWAP at all (10.2444 to 10.2467). As the session goes on, each new bar is a smaller share of the total, so VWAP gets steadier and slower. Late in the day it is very hard to move.

### Why VWAP matters

VWAP is used heavily by large traders, not because it predicts anything, but because it is a benchmark. A fund buying a large block over a day is often judged on whether it paid more or less than the day's VWAP. Execution algorithms try to trade close to VWAP. So VWAP is a real reference that real orders care about.

For chart traders, the common readings are:

- **Above VWAP, the average buyer of the session is in profit.** Below it, the average buyer is underwater.
- **VWAP as a moving reference:** in a strong trend day, price may hold on one side of VWAP for hours. On a range day, it may cross back and forth.
- **VWAP as a test level:** some traders watch for price to return to VWAP and either hold or fail there.

[VWAP bands](/vwap-bands/) add lines at standard deviations above and below VWAP, measured with volume weights. They work like Bollinger Bands built around VWAP.

### Session resets

Standard VWAP resets at the start of each session. That is simple for a share with one trading session a day. It is less simple for:

- **Futures**, which trade nearly 24 hours. Does the session start at the overnight open, or at the main day-session open? Platforms differ.
- **Forex**, which has no single session. Platforms often reset at a fixed clock time, such as 17:00 New York.
- **Crypto**, which never closes. Platforms usually reset at 00:00 UTC.

Different reset times give different VWAPs. A VWAP reset at midnight UTC and one reset at the US open are two different lines. If you compare your chart with someone else's, check the reset first.

### Anchored VWAP

[Anchored VWAP](/anchored-vwap/) starts the calculation from a point you choose, not from the session open. The formula is the same. Only the starting bar changes.

Common anchors are events: an earnings release, a major high or low, the first day of a new trend, a gap. The idea is that the anchored VWAP shows the average price paid by everyone who traded since that event. If price is above it, the average participant since the event is in profit.

The weakness is the choice of anchor. If you try several anchors and keep the one that "worked", you have fitted the line to the past. Choose the anchor by a rule written down before you look at how price reacted, such as "the day of the last earnings release".

### VWMA

The [volume-weighted moving average](/vwma/) (VWMA) is a moving average with volume weights. It is a rolling window, not a cumulative total.

> VWMA(N) = sum of (close × volume) over N bars ÷ sum of volume over N bars

The differences from VWAP are easy to mix up. VWAP is cumulative from an anchor and never forgets; VWMA uses only the last N bars. VWAP usually uses typical price; VWMA usually uses the close. Our answer on [VWMA vs VWAP](/answers/vwma-vs-vwap/) sets them side by side. The pillar on [moving averages](/guide/moving-averages/) covers how weighted averages differ from simple ones.

A related tool is the [volume-weighted MACD](/volume-weighted-macd/), which builds MACD from VWMAs instead of EMAs.

## 5. Volume profile

A normal volume bar shows how much traded in a period of time. [Volume profile](/volume-profile/) shows how much traded at each price. It turns the volume histogram on its side and lays it along the price axis.

For a chosen range (a day, a week, a swing), the platform adds up the volume traded at each price level, or in each small band of prices, and draws a horizontal bar for each. Long bars show prices where a lot traded. Short bars show prices where little traded.

### Point of control

The point of control (POC) is the price level with the most volume in the profile. It is the price where the most business was done.

Traders treat the POC as a reference. The common reading is that price which spent a lot of time and volume at one level found it "fair", and may return there. That is a description of the past range, not a forecast.

### High and low volume nodes

A high volume node (HVN) is a cluster of levels with heavy volume. A low volume node (LVN) is a gap in the profile, where little traded.

The usual reading: around HVNs, price has tended to slow down and trade back and forth, because many participants have positions there. Through LVNs, price has tended to move quickly, because few did. Some traders treat LVNs as places where price may not linger and HVNs as places where it may. That ties volume profile to the idea of support and resistance. Our answer on [volume profile vs support and resistance](/answers/volume-profile-vs-support-and-resistance/) compares the two, and the pillar on [support and resistance](/guide/support-and-resistance-guide/) covers levels in general.

### The value area

The value area is the range of prices around the POC that holds a set share of the profile's volume, usually 70%. The top is the value area high (VAH). The bottom is the value area low (VAL).

The 70% figure comes from [market profile](/market-profile/), developed by J. Peter Steidlmayer at the Chicago Board of Trade in the 1980s. It is roughly one standard deviation of a normal distribution (about 68%). It is a convention, not a law. Some platforms let you change it.

**How the 70% value area is built.** Here is a made-up daily profile with eight price levels:

| Price | Volume |
|---|---|
| 105 | 200 |
| 104 | 500 |
| 103 | 900 |
| 102 | 1,500 |
| 101 | 1,100 |
| 100 | 700 |
| 99 | 400 |
| 98 | 200 |
| Total | 5,500 |

The POC is 102, with 1,500. The value area target is 70% of 5,500 = 3,850.

There are two common ways to grow the value area from the POC. Platforms do not all use the same one.

**Method A: one level at a time.** Compare the next level above with the next level below. Add the larger. Repeat until the total reaches the target.

| Step | Above | Below | Add | Running total |
|---|---|---|---|---|
| Start | | | 102 (POC) | 1,500 |
| 1 | 103: 900 | 101: 1,100 | 101 | 2,600 |
| 2 | 103: 900 | 100: 700 | 103 | 3,500 |
| 3 | 104: 500 | 100: 700 | 100 | 4,200 |

4,200 is at least 3,850, so we stop. Value area = 100 to 103. It holds 4,200 ÷ 5,500 = 76.4% of the volume.

**Method B: two levels at a time.** This is the traditional market profile method. Compare the sum of the next two levels above with the sum of the next two below. Add the larger pair.

| Step | Above pair | Below pair | Add | Running total |
|---|---|---|---|---|
| Start | | | 102 (POC) | 1,500 |
| 1 | 103 + 104 = 1,400 | 101 + 100 = 1,800 | 101 and 100 | 3,300 |
| 2 | 103 + 104 = 1,400 | 99 + 98 = 600 | 103 and 104 | 4,700 |

4,700 passes 3,850, so we stop. Value area = 100 to 104. It holds 4,700 ÷ 5,500 = 85.5% of the volume.

Same data, two methods, two different value area highs: 103 and 104. With real data and finer price steps, the difference is usually smaller, but it never fully goes away. The "70%" value area is always a little more than 70%, because the last step overshoots. If your VAH differs from someone else's by a tick or two, this is the likely reason.

### Choices that change the profile

Volume profile looks precise. It rests on several choices:

- **The range:** a session, a week, a visible chart range, or a custom swing. A different range gives a different POC.
- **The price step (row size):** coarse rows smooth the profile; fine rows show more nodes, some of them noise.
- **The data:** with bar data, platforms must guess how each bar's volume spread across its range. Some put it all at the close. Some spread it evenly from high to low. Tick data avoids the guess.
- **The volume:** in forex, the profile is built from tick volume, so it is a profile of quote activity, not of traded units.

### Volume profile and market profile

The two are often confused. Market profile, in its original form, uses time: it counts how many 30-minute periods price spent at each level, and draws them as letters (the "TPO" chart). Volume profile uses volume. They often look alike, because price tends to trade more where it spends more time. They can differ on fast days, where a lot of volume trades in a short time. The [market profile](/market-profile/) guide covers the TPO approach.

## 6. Order flow basics

Order flow is the study of the actual orders and trades behind price movement. It goes one layer below the bar chart. Where volume says "10,000 units traded in this bar", order flow tries to say "6,000 of them traded at the ask and 4,000 at the bid".

### The order book

Most exchanges match orders in a central limit order book. The book lists:

- **Bids:** standing orders to buy, at or below a price. The highest bid is the best bid.
- **Asks (offers):** standing orders to sell, at or above a price. The lowest ask is the best ask.

The gap between the best bid and the best ask is the spread. The list of quantities at each price is called market depth, or level 2.

A small example of a book:

| Bid size | Bid | Ask | Ask size |
|---|---|---|---|
| | | 100.03 | 600 |
| | | 100.02 | 400 |
| | | 100.01 | 250 |
| 300 | 100.00 | | |
| 500 | 99.99 | | |
| 900 | 99.98 | | |

Best bid 100.00, best ask 100.01, spread 0.01.

### Market and limit orders

There are two basic ways to trade:

- **A limit order** says "buy at this price or lower" (or "sell at this price or higher"). If it cannot trade at once, it waits in the book. It adds liquidity. It is passive.
- **A market order** says "trade now at the best price available". It takes liquidity from the book. It is aggressive.

Every trade needs both: an aggressive order that crosses the spread, and a passive order that was waiting. In the book above, a market buy of 300 would trade 250 at 100.01 and then 50 at 100.02, because the 250 at 100.01 runs out. The market order "walks the book". The average fill is (250 × 100.01 + 50 × 100.02) ÷ 300 = 100.0117 (rounded). That is slippage in its simplest form.

### Bid volume, ask volume and delta

When a market buy hits the ask, the trade prints at the ask. When a market sell hits the bid, it prints at the bid. Order-flow tools classify each trade this way:

- **Ask volume:** trades at the ask (aggressive buyers).
- **Bid volume:** trades at the bid (aggressive sellers).

[Volume delta](/volume-delta/) is the difference:

> Delta = ask volume − bid volume

A positive delta means aggressive buyers traded more than aggressive sellers in that bar. A negative delta means the reverse. Delta says nothing about the passive side. A bar with large positive delta and no price rise means passive sellers absorbed the buying. Section 7 returns to this.

### Cumulative delta

[Cumulative volume delta](/cumulative-volume-delta/) (CVD) is the running total of delta, usually reset each session.

**Worked delta example.** Three bars:

| Bar | Ask volume | Bid volume | Delta | Cumulative delta |
|---|---|---|---|---|
| 1 | 300 | 250 | +50 | +50 |
| 2 | 450 | 150 | +300 | +350 |
| 3 | 200 | 400 | −200 | +150 |

Bar 3 has negative delta, but cumulative delta is still positive, because bars 1 and 2 had more buying aggression. Like OBV, CVD's level depends on where you start it. Its shape and divergences from price are what traders watch.

### How trades are classified

Real data does not always say which side was aggressive. Vendors use rules:

- **Bid/ask matching:** compare each trade's price with the quote at that moment. At or above the ask counts as a buy; at or below the bid counts as a sell. Trades in between need a further rule.
- **Tick rule:** if the trade price is above the last different price, count it as a buy; if below, a sell.
- **Exchange flags:** some exchanges (many crypto venues, some futures feeds) report the aggressor side directly. This is the most reliable.

Different rules give different deltas for the same market. When quotes and trades arrive out of step, a rule can classify a trade wrongly. Delta on a chart is a good estimate in futures and exchange crypto data with aggressor flags. It is a rougher estimate elsewhere.

Platforms without tick data sometimes show "delta" built from bars: up-bar volume counted as buying, down-bar volume as selling. That is not order flow. It is OBV-style logic with a new label. Check how your platform builds it.

### Footprint charts

A [footprint chart](/footprint-chart/) shows, inside each candle, the volume traded at each price, split into bid and ask. It is a volume profile for every bar, with the delta split added.

A footprint cell might read "120 × 340" at one price: 120 traded at the bid, 340 at the ask. Traders scan footprints for:

- **Imbalances:** where ask volume at one price is much larger than bid volume at the price below (diagonal comparison), or the reverse. Common thresholds are 3 to 1 or 4 to 1. These are conventions.
- **Stacked imbalances:** several imbalances in a row, read as strong one-sided aggression.
- **Absorption:** heavy volume at a level with little price progress.
- **Unfinished auctions:** a bar's high or low with trading on both sides, which some traders read as a level price may revisit.

Footprints need tick data with bid/ask classification. They are most at home in futures and in crypto exchange data. Built from forex tick volume, they show quote activity, not trades.

Related chart types include [equivolume](/equivolume/), where each bar's width reflects its volume, and [tick charts](/tick-charts/), where each bar closes after a set number of trades rather than a set time.

## 7. Tape reading and time and sales

Time and sales is the list of every trade: time, price, size, and often whether it hit the bid or the ask. Reading the tape means watching this list in real time.

Tape reading is the oldest form of order-flow analysis. Before charts were easy to draw, traders watched the ticker tape directly. Richard Wyckoff and others wrote about it in the early 20th century.

### Prints

Each line on the tape is a print. A busy market can print hundreds of times a second, so modern platforms filter and colour the tape: green for trades at the ask, red at the bid, larger font for larger sizes.

What tape readers look for:

- **Pace:** how fast prints arrive. A sudden burst of prints often comes with a fast price move.
- **Size:** unusually large prints compared with normal.
- **Side:** whether large prints are hitting the bid or lifting the ask.
- **Price reaction:** whether price moves after the prints, or not.

### Large trades

A large print draws the eye. The common reading is that it shows a big participant acting. Several things weaken that reading:

- Large orders are usually split into many small ones by algorithms, precisely so they do not show on the tape.
- Some large prints are pre-arranged trades reported to the tape, not trades made on the open book.
- In US shares, some large prints are reported after the fact from off-exchange venues, and may appear at prices away from the current market.
- A large print tells you size, not intent. A big buy may be a fund closing a short, a market maker hedging, or an option trade's hedge.

### Absorption

Absorption is when heavy aggressive volume hits a level and price does not move through it. For example: market sells keep hitting a bid at 100.00, thousands of units trade there, and the bid keeps refilling. A passive buyer is taking everything sellers throw at it.

The common reading is that the passive side is strong, and that if the aggression runs out, price may move away from the level. Some traders see this as one of the more useful order-flow ideas, because it combines volume with a lack of price progress, the same "effort vs result" idea as Wyckoff's (section 9).

The catch is timing. Absorption can continue until it suddenly fails, and then price breaks through quickly. It shows what is happening now. It does not tell you when it will stop.

### Iceberg and hidden orders

An iceberg order shows only part of its size in the book. When the visible part trades, more appears. Absorption is often an iceberg at work. Some platforms try to detect icebergs from patterns of refills. These are estimates.

Order books also contain orders that are placed and pulled quickly. Spoofing, placing orders you do not intend to fill in order to mislead, is illegal in many markets, but it happens. A large bid that vanishes as price approaches is a reminder that the book shows intentions, which can change in a millisecond, not commitments.

### Limits on retail data

Order-flow tools rest on data quality. For most retail traders:

- **Data may be aggregated.** Some feeds bundle trades into snapshots, so the tape is not every trade.
- **Depth may be partial.** Many platforms show only the top few levels of the book.
- **Latency:** professional firms see the book microseconds after it changes. Retail feeds can lag by much more. The book you see may already be gone.
- **Fragmentation:** in US shares and in crypto, one exchange's book is not the whole market.
- **Cost:** full-depth, tick-by-tick data often costs money, and futures exchanges charge fees for real-time data.

None of this makes order flow useless for retail traders. It means that order-flow reads on retail data are best treated as context, not as precise signals, and that the most reliable retail order-flow data is in exchange-traded futures.

## 8. Volume across markets

The same volume tool means different things in different markets, because the data behind it differs. This section goes through the main ones.

### Stocks

Stock volume is real and reported, which makes stocks the natural home of most volume indicators. OBV, A/D, CMF and MFI were all built on share data.

Points to watch:

- **Consolidated vs single-venue:** use consolidated volume where you can. Single-venue volume undercounts, sometimes by a lot.
- **Off-exchange trading:** in US shares, a large share of trading happens off the lit exchanges. It is reported, but it is not visible in the book beforehand.
- **Auctions:** many exchanges open and close with an auction. The closing auction can be a large share of the day's volume. On an intraday chart, it shows as a spike in the final bar. That spike is the mechanics of the market, not a climax.
- **Index events and option expiry:** days when indices rebalance, or when large option series expire, can show huge volume for reasons unrelated to the share's news.
- **Splits:** after a stock split, the number of shares rises. Older volume must be adjusted, or volume will look like it jumped. Most vendors adjust, but not all.

### Futures

Futures volume is real and mostly central, so futures are the best market for order flow. Footprints, delta and the tape work best here.

Points to watch:

- **Contract rolls:** each futures contract expires. Traders move to the next one over several days. During the roll, volume shifts from the old contract to the new one. A chart of one contract shows volume fading to nothing; a chart of the next shows it appearing from nowhere. Continuous charts join contracts and need care (section 11).
- **Day and overnight sessions:** most index futures trade nearly around the clock, with much more volume in the main session. Comparing an overnight bar with a day-session bar makes the overnight bar look dead.
- **Spreads and block trades:** some volume comes from spread trades between contract months, or from pre-arranged blocks. These can show on the tape at prices that look odd.

### Forex

Spot forex charts usually show tick volume, as section 1 explained. That has knock-on effects:

- **OBV, A/D, CMF and MFI on spot forex** are built on tick counts. They measure where quote activity happened, not traded volume.
- **VWAP on spot forex** is really a tick-weighted average price. It can still be a useful reference, but it is not the benchmark that funds trade against in shares.
- **Volume profile on spot forex** is a profile of quote activity by price.
- **Order flow on spot forex** is not available in the true sense to retail traders, because there is no central book. Some brokers show their own clients' positions or orders. That is one broker's customers, not the market.

Our verdict: volume tools on spot forex are measures of activity. They can tell you when the market is busy. They cannot tell you how much traded, and two brokers will not agree exactly.

### Crypto

Crypto has real exchange-reported volume, often with aggressor flags, which sounds ideal. The problems are elsewhere.

- **Fragmentation:** the same coin trades on dozens of exchanges, spot and derivatives. One exchange's volume is a slice. Aggregated volume depends on which exchanges the vendor includes.
- **Wash trading:** a wash trade is a trade where the same party (or parties acting together) is on both sides, creating volume without any real change of ownership. Studies and regulators have reported wash trading on some crypto exchanges, especially less regulated ones. Inflated volume makes everything built on it unreliable.
- **Fee incentives:** some exchanges have offered rewards or rebates for trading activity, which can encourage churn.
- **Derivatives dominance:** for major coins, perpetual futures volume is often much larger than spot. Which volume your chart shows matters.
- **Round-the-clock trading:** no session close means VWAP and profile resets are arbitrary clock times.

A sensible approach in crypto is to use volume from a small number of large, well-known, regulated or audited venues, and to be wary of totals that include every venue a data site can find.

### A summary table

| Market | Volume type on most charts | Central? | Order flow quality | Main caveat |
|---|---|---|---|---|
| Stocks | Real shares traded | Partly (many venues) | Good with consolidated data | Off-exchange trades; single-venue feeds undercount |
| Futures | Real contracts traded | Yes, mostly one exchange | Best available to retail | Contract rolls; session splits |
| Spot forex | Tick volume (quote changes) | No | Not available in the true sense | Varies by broker; a proxy for activity |
| Crypto | Real coins traded, per exchange | No (fragmented) | Good on large venues with aggressor flags | Wash trading; venue choice changes totals |

## 9. Classic volume ideas

Several ideas about volume have been taught for a century or more. This section describes them neutrally: what they say, why people find them sensible, and where they are weak. None of them is a tested result of ours.

### Effort vs result (Wyckoff)

Richard Wyckoff, writing in the early 20th century, framed volume as "effort" and price movement as "result". The [Wyckoff method](/wyckoff-method/) reads the relationship:

- **Effort and result in harmony:** a big up move on high volume, or a small move on low volume. Nothing unusual.
- **Effort without result:** high volume, small price move. Something is absorbing the effort. In an uptrend, heavy volume with little upward progress may mean sellers are meeting the buyers.
- **Result without effort:** a large move on light volume. Few participants are pushing back, but few are pushing either.

Wyckoff also described phases of [accumulation](/wyckoff-accumulation/) and [distribution](/wyckoff-distribution/), and events such as the [spring and upthrust](/wyckoff-spring-upthrust/). These are frameworks for reading a range, not formulas. Different authors label the same chart differently, which makes the method hard to test.

[Volume spread analysis](/volume-spread-analysis/) (VSA) is a later approach built on the same idea. It reads each bar's volume against its spread (range) and close position. It has its own vocabulary of signals. Like Wyckoff, it is a reading discipline. Its definitions vary by teacher.

### Volume confirming trend

The classic Dow Theory idea is that volume should "go with the trend": in an uptrend, volume tends to expand on rallies and shrink on pullbacks. In a downtrend, the reverse.

This is a reasonable description of many trends. As a rule, it has two weaknesses. First, many trends run for long periods with volume doing nothing in particular. Second, "expanding" and "shrinking" need definitions before they can be tested. Without them, any chart can be read as confirming.

### Volume divergence

A volume divergence is when price makes a new extreme but volume, or a volume indicator, does not. For example, price makes a new high on lower volume than the previous high, or OBV fails to make a new high while price does.

The common reading is that the move is losing participation and may be tiring. The weakness is the same as with any divergence: divergences can last a long time, they can appear several times in a row while the trend continues, and in hindsight the one that came before a turn stands out while the ones that did not are forgotten. The [RSI and momentum oscillators](/guide/rsi-and-momentum-oscillators/) pillar covers divergence in general, and the same cautions apply here.

There is also a structural reason for lower volume at later highs. Volume in many markets has long-term trends of its own, and it has seasonal patterns. A new high in August may come on lower volume than one in March simply because August is quieter.

### Volume precedes price

A common saying is that "volume precedes price": that a rise in volume tends to come before a big move. There is a plausible mechanism: news and interest build before price moves far. But it is easy to see in hindsight and hard to use in real time, because volume also rises before moves that come to nothing, and on days with no follow-through at all. We treat it as a description, not as a rule.

### Smart money and dumb money

Some volume tools claim to separate "smart money" from "dumb money". The [negative volume index](/negative-volume-index/), for example, rests on the idea that informed traders act on quiet days. [Smart money concepts](/smart-money-concepts/), a more recent approach, uses price structure rather than volume, and its claims about what institutions are doing cannot be checked from a chart.

Our view is simple. A chart cannot tell you who traded. Volume tools can show where activity happened and how price responded. Labels about who was behind it are stories added on top.

## 10. Volume in patterns and breakouts

Volume is often used as a check on chart patterns and breakouts. The [chart patterns](/guide/chart-patterns/) pillar covers the patterns themselves, and the [support and resistance](/guide/support-and-resistance-guide/) pillar covers the levels. This section covers what volume adds.

### Volume within patterns

Many classic pattern descriptions include a volume pattern:

- **Triangles and flags:** volume often described as shrinking as the pattern forms, then expanding on the breakout.
- **Head and shoulders:** volume often described as lighter on the right shoulder than on the head or left shoulder.
- **Double tops:** the second top often described as coming on lighter volume than the first.

These are the textbook descriptions. In real data, many patterns that complete do not show the textbook volume, and many that fail do. Treat the volume part of a pattern description as one more feature, not as a requirement that decides the trade.

### Volume on the breakout

As section 2 said, the common rule is that a breakout should come on above-normal volume. To use the rule honestly:

1. Define "above normal": for example, relative volume of at least 1.5 on the breakout bar, using a 20-day average. Those numbers are an example, not a recommendation.
2. Decide whether you use the full-day volume (known only at the close) or time-of-day volume (known in real time).
3. Apply the rule to every breakout in your sample, not just the ones you remember.

There is a subtle trap here. If you trade the breakout during the day, you cannot know the day's full volume. If you wait for the close to check volume, your entry is at the close, not at the break. A test that checks the full-day volume and enters at the break price is using information you would not have had. Section 12 covers this look-ahead problem.

### Volume and pullbacks

Some traders prefer to enter on a pullback after a breakout, looking for the pullback to come on lighter volume than the breakout. The reading is that the pullback is profit-taking, not a reversal. It is the dry-up idea from section 2, applied to a specific spot.

### A worked trade example in R

This is a made-up trade to show how volume fits into a plan and how the result is measured. It is not a recommendation and not a test result.

A share has traded in a range with resistance at 50.00. On the breakout day, time-of-day relative volume reaches 1.8 by mid-morning. The trader buys.

- **Fill:** 50.10, at the ask (a long fills at the ask, so the spread is inside the fill price).
- **First stop:** 49.30, below the breakout level and the morning's low.
- **Size:** 500 shares.
- **1R:** (50.10 − 49.30) × 500 = 0.80 × 500 = 400.
- **Target:** 51.70, which is 1.60 above the fill, or 2R.
- **Commission:** 5 per side, so 10 for the round trip.

Here is how four outcomes measure in R. Commission is shown separately, on top. It is 10 ÷ 400 = 0.025R per trade.

| Outcome | Exit price | Profit or loss | Result in R | Commission (extra) |
|---|---|---|---|---|
| Clean stop-out | 49.30 | −400 | −1.0R | −0.025R |
| Stop with 0.05 slippage | 49.25 | −425 | −1.0625R | −0.025R |
| Overnight gap below the stop, opens at 48.90 | 48.90 | −600 | −1.5R | −0.025R |
| Target hit | 51.70 | +800 | +2.0R | −0.025R |

Check the gap row: (48.90 − 50.10) × 500 = −1.20 × 500 = −600, and −600 ÷ 400 = −1.5R. The stop was at 49.30, but the market opened below it, so the stop filled at the open. 1R did not change. The loss was simply larger than 1R. That is why gaps and slippage are shown on top of 1R, never folded into it.

Notice what volume did in this plan. It was one condition for taking the trade. It did not set the stop, the size or the target. The stop came from price structure, the size came from the stop, and the target came from a chosen multiple of R. The [stop losses and risk](/guide/stop-losses-and-risk-guide/) pillar covers that process in full.

### A short example at VWAP

A second made-up example, this time a short. A share opens weak and trades below VWAP all morning. Price rallies back to VWAP at about 101.20 and stalls there, with the rally bars on falling volume. The trader sells short.

- **Fill:** 101.20, at the bid (a short fills at the bid).
- **First stop:** 102.00, above the morning's high.
- **Size:** 250 shares.
- **1R:** (102.00 − 101.20) × 250 = 0.80 × 250 = 200.
- **Commission:** 4 per side, so 8 round trip, which is 8 ÷ 200 = 0.04R.

| Outcome | Exit price | Profit or loss | Result in R | Commission (extra) |
|---|---|---|---|---|
| Clean stop-out | 102.00 | −200 | −1.0R | −0.04R |
| Stop with 0.05 slippage | 102.05 | −212.50 | −1.0625R | −0.04R |
| Partial move, closed at 100.40 | 100.40 | +200 | +1.0R | −0.04R |
| Move to 99.60 | 99.60 | +400 | +2.0R | −0.04R |

For a short, profit is (fill − exit) × size. At 99.60: (101.20 − 99.60) × 250 = 1.60 × 250 = 400, or +2.0R.

If the trader later moves the stop, it may only move down (tighter) on a short. It is never raised above 102.00. 1R stays at 200 whatever happens to the stop afterwards.

## 11. Data pitfalls

Volume analysis is only as good as the data. Many disagreements between traders about "what the volume says" turn out to be disagreements about data.

### Platform differences

The same instrument can show different volume on different platforms because of:

- **Venue coverage:** one exchange vs consolidated, or a different set of crypto exchanges.
- **Session definition:** whether pre-market and after-hours trades are included in the daily bar.
- **Adjustment:** whether volume is adjusted for splits.
- **Bar building:** how the vendor turns ticks into bars, and how late trade reports are handled.
- **Indicator formulas:** typical price vs close in VWAP; how a flat close is treated in OBV; how the value area is grown.

Before comparing your reading with someone else's, check that you are looking at the same data and the same formula.

### Tick volume vs real volume

Tick volume and real volume can move together, but they are not the same. Tick volume depends on how often the broker's feed updates. A broker that filters out small quote changes will show fewer ticks. A broker that changes its feed or its liquidity providers can show a sudden step change in tick volume with no change in the market. If your forex tick volume jumps on a date that matches a broker change, it is the data, not the market.

### Half days and holidays

Shortened sessions (for example, around some public holidays) have less volume because they are shorter. A half-day session can look like a dry-up. A relative volume measure that uses whole-day averages will show it as very low. Either exclude half days from averages or compare them only with other half days.

Holidays in one country affect markets elsewhere. When one major centre is closed, forex and futures volume elsewhere tends to be lighter.

### Futures rolls

Continuous futures charts join contracts together. Two problems arise:

- **Price gaps at the roll:** the next contract usually trades at a different price. Back-adjusted charts shift old prices to remove the gap, which changes historical price levels. Unadjusted charts keep the gap. Volume indicators that use price changes, such as OBV, will see a false move at an unadjusted roll.
- **Volume at the roll:** if the continuous chart switches contracts on a fixed date, volume can show a dip before the switch (the old contract fading) and a jump after. Some vendors switch when the next contract's volume overtakes the old one, which reduces this.

### Session definitions

For instruments that trade nearly 24 hours, "daily volume" depends on where the day starts and ends. A daily bar from 00:00 to 24:00 UTC is a different bar from one that runs 17:00 to 17:00 New York time. The two will have different volumes, highs, lows and closes. OBV, which depends on the close, will differ. VWAP, which depends on the reset, will differ. Use one definition consistently.

### Late and corrected trades

Exchanges sometimes cancel or correct trades after the fact. Off-exchange trades in US shares are reported with a delay. A bar's volume can change after the bar has closed. On historical data this is usually settled. On live data, the last bar's volume may not be final.

### Volume on weekly and monthly bars

Weekly volume is the sum of daily volume. A week with a holiday has fewer days and so less volume. A month with 23 trading days has more volume than one with 19. When comparing weekly or monthly bars, consider average daily volume within the bar rather than the total.

## 12. Testing volume signals without fooling yourself

If you want to know whether a volume idea has helped in the past, you need to test it. Volume makes several common testing errors easier to make. Our [methods page](/methods/) explains the general rules we use for testing; this section covers the traps specific to volume.

### Look-ahead in daily volume

This is the most common error. A daily bar's volume is not known until the session ends. If a test says "on days when volume is above 1.5 times average, buy at the breakout price", it is using the day's full volume to decide on an entry that happened during the day. In real time, at the moment of the break, you did not know the day's final volume.

Three honest fixes:

1. **Enter at the close** of the day when the condition is met, or at the next day's open. Then the volume is known.
2. **Use time-of-day relative volume** from intraday data, measured at the moment of the entry.
3. **Use the previous day's volume** for any decision made during today.

The same trap applies to OBV, A/D, CMF and MFI on the current bar: all of them use the bar's close and volume, which are not final until the bar ends.

### Look-ahead in volume profile

A session's volume profile, POC and value area are only final at the end of the session. A test that uses today's POC to trade today is looking ahead. Use the previous session's profile, or a developing profile that only includes volume up to the moment of the decision.

### Survivorship

A test on today's list of large, liquid shares only includes shares that survived and grew. Shares that were delisted, merged or collapsed are missing. Volume patterns before a collapse (such as heavy volume on falling prices) are exactly what such a test leaves out. Use a dataset that includes delisted shares, or state clearly that yours does not.

### Too many variants

Volume tools have many settings: the averaging window, the threshold, the reset time, the value area percentage, the imbalance ratio. If you try fifty combinations and keep the best, the best one will look good partly by chance. Count every variant you try. Our [methods page](/methods/) explains how we adjust for this when we publish figures.

### Comparing with a baseline

A volume filter should be judged against the same trades without the filter, and against random entries. If breakouts with high volume returned 0.3R on average and all breakouts also returned 0.3R on average, the volume filter did nothing, even though the number looks positive. Those figures are made up to show the logic. Always ask: better than what?

### Data consistency

Test on the same data you would trade on. A test on consolidated share volume says little about a live chart that shows a single venue. A test on one broker's forex tick volume says little about another broker's.

### Costs and R

Measure results in R, with costs on top, as in the worked examples in section 10. A volume filter that cuts trade count may cut costs too, which can make it look better before costs than after, or the reverse. Show both.

## 13. Common mistakes

These are the mistakes we see most often in volume analysis.

- **Reading "buy volume" as a count of buyers.** Every unit traded has a buyer and a seller. Up-bar volume and ask volume are estimates of aggression, not of how many people bought.
- **Treating forex tick volume as traded volume.** It is a count of quote changes from one broker's feed. It measures activity, not size, and it differs between brokers.
- **Comparing a partial bar with full bars.** Volume at 10:30 compared with the average full day will always look low. Use time-of-day relative volume intraday.
- **Using the day's volume to decide an entry made during the day.** That is look-ahead. Either enter at the close or use only what was known at the time.
- **Stacking several volume indicators.** OBV, A/D, CMF and MFI all combine the same price and volume. Agreement between them is not independent confirmation.
- **Ignoring the data source.** Single-venue share volume, unadjusted splits, futures rolls and crypto venue choice can all create "signals" that are just data artefacts.
- **Calling every high-volume bar a climax.** A climax is only clear after price stops. Many record-volume days start larger moves.
- **Trusting a large print as intent.** A large trade shows size, not purpose. Many are hedges, pre-arranged blocks or late reports.
- **Fitting anchored VWAP or profile ranges after the fact.** Choose anchors and ranges by a rule written down first.
- **Letting volume set the stop or the size.** Volume can be a condition for a trade. The stop should come from where the trade idea is wrong, and the size from the stop.
- **Ignoring the calendar.** Holidays, half days, index rebalances, option expiry and summer lulls all change volume for reasons that have nothing to do with the chart.
- **Reading the order book as a promise.** Orders in the book can be pulled in an instant. Only trades are facts.

## 14. Comparison table and FAQ

### Comparison table

| Tool | Inputs | Needs real volume? | Best market | Main weakness |
|---|---|---|---|---|
| Raw volume | Volume | Helps; tick volume shows activity only | Stocks, futures | Needs a "normal" to compare with |
| [Relative volume](/relative-volume/) | Volume, average volume | Helps | Stocks | Depends on window; full-day version is not known until the close |
| [On-balance volume](/on-balance-volume/) | Close, volume | Yes, for meaning | Stocks | All-or-nothing rule; tiny closes move whole volume |
| [Accumulation/distribution](/accumulation-distribution/) | High, low, close, volume | Yes, for meaning | Stocks | Ignores gaps |
| [Chaikin money flow](/chaikin-money-flow/) | High, low, close, volume | Yes, for meaning | Stocks | Hovers near zero; thresholds are conventions |
| [Money flow index](/money-flow-index/) | Typical price, volume | Yes, for meaning | Stocks | Same overbought/oversold trap as RSI in trends |
| [VWAP](/vwap/) | Typical price, volume, session start | Yes, to be a true benchmark | Stocks, futures | Reset time varies; slow late in the session |
| [Anchored VWAP](/anchored-vwap/) | Typical price, volume, anchor | Yes, to be a true benchmark | Stocks, futures | Anchor choice easy to fit after the fact |
| [VWMA](/vwma/) | Close, volume, window | Helps | Stocks | Lags like any moving average |
| [Volume profile](/volume-profile/) | Price, volume, range | Helps; tick volume gives quote profile | Futures, stocks | Range, row size and data choices change the result |
| [Market profile](/market-profile/) | Price, time | No | Futures | Time is not volume; method varies |
| [Volume delta](/volume-delta/) | Trades classified bid/ask | Yes, with tick data | Futures, crypto | Classification errors; bar-based versions are not true delta |
| [Cumulative volume delta](/cumulative-volume-delta/) | Delta, start point | Yes, with tick data | Futures, crypto | Level depends on start; divergences can persist |
| [Footprint chart](/footprint-chart/) | Tick data with bid/ask | Yes | Futures | Costly data; thresholds are conventions |
| Time and sales | Every trade | Yes | Futures, stocks | Fast, fragmented, large orders hidden |
| [Volume spread analysis](/volume-spread-analysis/) | Range, close, volume | Helps | Stocks, futures | Definitions vary by teacher; hard to test |

### Verdict

Volume is worth looking at where it is real. On exchange-traded shares and futures, raw volume, relative volume and VWAP give honest, simple context: how busy the market is, how price responded, and where the average participant stands. Volume profile adds a picture of where business was done. Order flow adds who was in a hurry, at a cost in data and attention, and it is most reliable in futures.

The cumulative indicators, OBV, A/D, CMF and MFI, are all variations on one idea. Use one, understand its rule, and do not count agreement between them as extra evidence.

On spot forex, volume tools measure activity only. On crypto, they are only as good as the venues behind them.

No volume tool tells you who traded or what they intend. All of them describe the past. If you use one as a trade condition, write the rule down, test it against a baseline without look-ahead, and measure the result in R with costs on top.

### FAQ

**Does volume matter in forex?**

Spot forex has no central exchange, so retail charts usually show tick volume: the number of price changes in each bar from your broker's feed. It tends to rise when the market is busy, so it is a rough guide to activity. It is not traded volume, and different brokers show different numbers. Currency futures have real volume, but they are a small part of the market.

**What is the difference between volume and tick volume?**

Volume counts units traded: shares, contracts or coins. Tick volume counts how many times the price changed during the bar. The two often move together, because busy markets update more often, but tick volume does not tell you the size of any trade. It also depends on how the broker filters its feed.

**Is OBV or accumulation/distribution better?**

Neither is better in general. OBV adds or subtracts a whole bar's volume based on the close compared with the previous close. A/D weights volume by where the close sits inside the bar's range, so it ignores gaps. They can disagree on gap days. Pick one, learn its rule, and do not treat agreement between them as two separate confirmations.

**How is VWAP different from a moving average?**

VWAP is cumulative from a starting point, usually the session open, and weights each price by its volume. A moving average uses a fixed window of recent bars and, in its simple form, weights each bar equally. VWMA sits between them: a rolling window with volume weights. VWAP is a benchmark used in trade execution; moving averages are trend tools.

**Why do two platforms show different values for the same indicator?**

Usually because of data or settings: different venues, different session start times, split adjustment, typical price versus close, or different ways of building the value area. Check the data source and the formula before deciding which is right. Often both are correct for their own inputs.

**Should a breakout have high volume?**

Classic texts say breakouts on above-normal volume are more trustworthy, because more traders acted on the move. That is a reasonable description, but high-volume breakouts also fail, and low-volume ones sometimes run. If you use volume as a filter, define the threshold in advance, avoid look-ahead with full-day volume, and compare against breakouts without the filter.

**Can retail traders use order flow?**

Yes, with limits. Exchange-traded futures give retail traders good tick data with bid and ask classification, at a cost. Shares and crypto are fragmented across venues, and spot forex has no central book. Retail feeds are slower than professional ones, and large orders are usually hidden. Order flow is best used as context rather than as a precise signal.

**Is crypto volume reliable?**

It depends on the venue. Large, regulated or audited exchanges report volume that is broadly usable. Some smaller venues have been reported to inflate volume through wash trading. Totals that add up every exchange a data site can find can mislead. Using volume from a few well-known venues is a common way to reduce the problem.
