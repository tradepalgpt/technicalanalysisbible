---
slug: support-and-resistance-guide
title: "Support and resistance: the complete guide to key levels"
description: How to draw support and resistance, judge a level's strength, use round numbers, pivots and session levels, and trade bounces, breaks and retests.
query: support and resistance
publish: 2027-05-17
reviewed: 16 November 2026
cluster: [support-and-resistance, key-levels, swing-highs-lows, role-reversal, round-numbers, previous-day-high-low, weekly-monthly-open, session-open, initial-balance, price-gaps, pivot-points, camarilla-pivots, woodie-pivots, demark-pivots, fibonacci-pivot-points, supply-and-demand-zones, order-block, equal-highs-lows, volume-profile, vwap, anchored-vwap, trendline, false-breakout, breakout-retest, fibonacci-retracement]
value: [table, example, verdict]
chart: support-and-resistance
---

Support is a price area where falling prices have stopped before. Resistance is a price area where rising prices have stalled before. This guide explains why those areas sometimes matter again, how to draw them, how to judge their strength, and how the many named level methods fit together: round numbers, session levels, pivot points, supply and demand zones and volume-based levels.

The short version, before the detail: a level is a place where traders remember something happened, and where some of them have left orders. That is all. It is not a wall. Price can stop at it, pause at it, or go straight through it. Most of the skill is not finding levels, which is easy, but deciding which few levels are worth caring about and what you will do when price gets there. A chart with thirty lines on it tells you nothing, because price is always near one of them.

We have not run a level backtest of our own, so this guide contains no test results of ours. What it does contain is the standard methods, the arithmetic behind the calculated levels, worked examples you can check, and honest notes on where each method is weak. Fibonacci levels have their own pillar later in the series; they get one short section here with links.

## What support and resistance are

Picture a share that falls from 60 to 50, bounces to 56, falls back to 50 again and bounces again. Anyone watching now has a reference point. Buyers who missed the first bounce may leave orders near 50. Sellers who are short may take profits near 50. Traders who bought at 50 and watched it work may buy there again. The level 50 has become support: an area where demand has shown up before and might show up again.

Resistance is the same idea above price. A share that rallies to 70, falls to 64, rallies to 70 again and falls again has resistance at 70. Holders who bought near 70 the first time and sat through the fall may sell to get their money back. Short sellers may start positions there. Traders who saw the turn may take profits on longs just below it.

Three points follow from this explanation, and the rest of the guide builds on them.

- **Levels are about people and orders, not geometry.** A line on a chart does nothing. It matters only if enough traders are looking at the same area and acting there.
- **Levels are zones, not exact prices.** Orders are spread out. Some traders buy at 50.00, some at 50.20, some at 49.85 with a stop at 49.50. The reaction happens across a band.
- **Levels get used up.** Every time price returns to a level, some of the orders waiting there get filled. A level that has been hit many times may have fewer orders left, not more.

### Support and resistance in one table

| Term | Where it sits | What traders expect | What it actually is |
|---|---|---|---|
| Support | Below current price | Falling price may slow, stop or bounce | An area where buying has appeared before |
| Resistance | Above current price | Rising price may slow, stall or turn | An area where selling has appeared before |
| Role reversal | Old level, now on the other side | Broken resistance acts as support, and the reverse | Traders who missed the break, or were trapped by it, acting at the old level |
| Key level | Either side | A level many traders are watching | Any level with enough attention to cause a reaction |
| Zone | Either side | Reaction anywhere inside a band | A more honest way to draw any level |

### Where the idea comes from

Nobody invented support and resistance. The idea is as old as price charts. It is set out in Edwards and Magee's *Technical Analysis of Stock Trends*, first published in 1948, and in almost every later textbook. Edwards and Magee explained levels mainly in terms of traders' memories: people who bought at a price remember it, and act when price returns.

There is also academic work. Carol Osler, then at the Federal Reserve Bank of New York, studied support and resistance levels published by firms for currency traders. Her paper, "Support for Resistance: Technical Analysis and Intraday Exchange Rates" (2000), found that intraday trends were interrupted at the published levels more often than at randomly chosen levels. A later paper of hers in the *Journal of Finance* (2003) looked at the stop-loss and take-profit orders a bank held for currency clients and found they clustered around round numbers, which gives a mechanical reason why round numbers can act as levels. We are not quoting figures from either paper. The point is narrower: there is a plausible order-based reason why levels can matter, and some evidence that published levels did matter in that market and period. It does not follow that any line you draw will hold.

## Why levels work when they work

There are four common explanations. They are not exclusive; most traders think all four play a part.

### 1. Resting orders

The most mechanical explanation. Traders leave limit orders to buy below the market and sell above it. Those orders cluster near obvious prices: past highs and lows, round numbers, the previous day's range. When price arrives, the orders absorb some of the movement. A cluster of buy orders under the market is support in the most literal sense.

Stop orders sit near levels too, but on the other side. A trader long from 50 might place a stop at 49.40. If price falls to 49.40, the stop turns into a market sell order and adds to the fall. That is why a level that breaks can produce a quick move: the orders that defended it have been filled, and the stops behind it have been triggered.

### 2. Memory and regret

Edwards and Magee's explanation. Traders who bought at 70 and watched price fall to 60 often want to get out at break-even. When price returns to 70, they sell. Traders who sold at 50 and watched price rise feel they sold too early and buy if price returns to 50. These are behaviours, not laws, but they are common enough that most traders can recognise them in themselves.

### 3. Attention

A level that everyone can see attracts attention. If enough traders watch the same price, their actions near it can make the level matter even if there was no original reason for it. This is the "self-fulfilling" explanation. It has a limit: when everyone expects a bounce at the same price, the trade is crowded, and crowded trades are where false breaks happen. Some traders deliberately push price through an obvious level to trigger the stops behind it.

### 4. Value

Some levels mark a price where a lot of trading happened. If many shares changed hands at 50, then 50 was a price both sides accepted. When price returns, it may find the same acceptance again. This is the thinking behind [volume profile](/volume-profile/) and, in a different form, [VWAP](/vwap/).

### Why levels fail

Every reason a level works is also a reason it can fail.

- Resting orders get filled. After enough tests, the orders are gone.
- Traders who were waiting to get out at break-even have got out, and the level loses its sellers.
- Attention invites stop runs. Price pokes through the obvious line to trigger stops, then often comes back.
- News changes value. A level built on last month's earnings means little after this month's results.

The honest summary: levels are places where a reaction is more likely than at a random price, according to the published research we know of and to long trader experience. They are not places where a reaction is certain. A plan that assumes the level holds, without a stop beyond it, is not a plan.

## Drawing horizontal levels

Most level work is drawing horizontal lines or zones from past turning points. There is no single right way, but there is a widely used routine.

### Step 1: start on a higher timeframe

Open the weekly chart first, then the daily, then the timeframe you trade. Levels from higher timeframes are built from more trading and are watched by more people, so they usually matter more. A level on a five-minute chart that does not line up with anything on the hourly or daily chart is usually a minor level.

Mark the levels from the higher timeframe first. Then, on the lower timeframe, only add levels that fall between them and that you will actually use.

### Step 2: find clear swing points

A swing high is a bar with lower highs on each side of it. A swing low is a bar with higher lows on each side. See [swing highs and lows](/swing-highs-lows/) for the usual rules (the most common is two bars on each side, as in Williams fractals). The clearer the swing, the better the level: a sharp turn with a big move away from it is more useful than a small wobble.

Look for places where several swings line up, or where a swing high and a later swing low sit near the same price. A price that was resistance and then later support is often a strong level, because both sides have reacted there.

### Step 3: draw a zone, not a line

Take the cluster of turning points and mark the band they cover. A common rule: draw from the highest close to the highest wick for resistance (or lowest close to lowest wick for support) across the swings that form the level. If that band is very wide, the level is loose and less useful.

Another common rule uses [ATR](/atr/), the average true range. Make the zone a fraction of the current ATR wide, often between a quarter and a half of one ATR on the timeframe you are using. That scales the zone to how much the market normally moves. A zone that is narrower than normal noise will be broken by noise.

**Worked example.** A share's daily ATR(14) is 1.20. Three swing highs sit at 49.90, 50.05 and 50.20, and the highest closes on those days were 49.70, 49.80 and 49.75.

- Close-to-wick method: zone from 49.70 to 50.20, half a point wide.
- ATR method: half of 1.20 is 0.60, so a zone of 0.60 centred on the cluster, roughly 49.75 to 50.35.

Both methods give a zone of about 50 to 60 pence. Either is reasonable. A single line at 50.00 would be "broken" by any of the three original highs, which tells you a line is the wrong tool.

### Step 4: wicks or closes?

This is one of the most argued points in level drawing. There is no correct answer, only trade-offs.

- **Wicks** show the extreme price actually traded. They capture where orders were filled. But a single news spike can leave a wick that nobody cares about later.
- **Closes or bodies** show where the bar settled. They ignore spikes and are less noisy. But they hide where the extreme orders were.

Most experienced chartists use both: the zone runs from the bodies to the wicks. Our answer post on [wicks or bodies](/answers/wicks-or-closes-for-support-and-resistance/) works through an example.

### Step 5: delete

The most useful step is the last. Look at your chart and remove every level you would not act on. A clean chart usually has two to four levels near price on your trading timeframe, plus the major higher-timeframe levels. If price is between two levels that are close together, there is no room for a trade anyway.

| Keep | Delete |
|---|---|
| Levels with a clear reaction and a move away | Levels from small wobbles inside a range |
| Levels that line up with a higher timeframe | Levels only visible on one low timeframe |
| The nearest level above and below price | Levels far from price that you will not reach this week |
| Levels at round numbers or session extremes | Duplicate lines a few ticks apart (merge them into one zone) |

## How strong is a level?

Traders use a short list of features to judge how much weight to give a level. None of them is a rule. Together they are a reasonable way to rank levels in your own head.

### Touches

More touches usually mean more traders have noticed the level. Two touches make a level; three are often taken as confirmation. But each touch also fills some of the orders waiting there. A level tested five times in a week is often about to break, not about to hold. The classic ascending triangle, for example, is a flat resistance that keeps getting tested by higher lows until it gives way.

So "touches" works best as a reason to notice a level, not as a reason to trust it more and more. Our answer post on [how many touches make a level](/answers/how-many-touches-make-a-support-level/) has a fuller table.

### Age

A level from last week is fresh in traders' minds. A level from five years ago may still matter, especially on a weekly chart and especially at an all-time high or low, but many of the traders who acted there are gone. Recent levels on the trading timeframe, and old levels on high timeframes, are the usual combination.

### Size of the reaction

A level where price turned sharply and moved a long way is more notable than one where it paused. A big reaction shows there was a real imbalance of orders.

### Timeframe

Covered above: weekly and daily levels usually outrank hourly ones.

### How price left it

If price left a level quickly, on large range bars or with a gap, there may still be unfilled orders there. If price drifted away slowly, most of the orders may already have been filled. This is the thinking behind [supply and demand zones](/supply-and-demand-zones/).

### Confluence

When several independent methods point to the same area, more traders are likely to be watching it. A swing high that is also a round number and also near the previous week's high is a better candidate than a swing high alone. Confluence has a trap: if you draw enough methods, everything is near something. Use a short, fixed list of methods so confluence means something.

| Feature | Stronger | Weaker |
|---|---|---|
| Touches | 2 to 3 clear tests | 1 test, or 5+ tests in a short time |
| Age | Recent on your timeframe; old on weekly | Old on a low timeframe |
| Reaction | Sharp turn, large move away | Small pause |
| Timeframe | Weekly, daily | 1 to 5 minute only |
| How it was left | Fast, wide bars, gap | Slow drift |
| Confluence | Two or three methods agree | One method, or "everything lines up" |

## Role reversal: when support becomes resistance

Role reversal is the idea that a broken level changes sides. Broken resistance becomes support; broken support becomes resistance. It is one of the oldest ideas in charting and one of the most used. See the [role reversal](/role-reversal/) guide for the detail.

### Why it happens

Take resistance at 70 that breaks. Price rises to 75 and falls back to 70.

- Traders who sold short at 70 are now losing. Some buy back at 70 to get out at break-even. That is buying.
- Traders who missed the breakout get a second chance at 70. That is buying.
- Traders who sold their longs at 70 before the break, and watched price run, want back in. That is buying.

All three groups push in the same direction at the old level. The reverse applies when support breaks.

### The retest

The return to the old level is called the retest. Some traders enter on the retest instead of the break, because the stop can sit just beyond the old level and the retest shows whether the break was real. See [breakout retest](/breakout-retest/).

The cost is missed trades. Strong breakouts often do not come back. A trader who only takes retests will miss many of the biggest moves. Our existing answer, [should you wait for a retest after a breakout?](/answers/should-you-wait-for-a-retest-after-a-breakout/), covers the trade-off.

### When role reversal fails

- **The break was false.** Price closed above 70 once, then fell straight back into the old range. The level never really changed sides. See [false breakout](/false-breakout/).
- **The retest goes too deep.** If price returns to 70 and closes well below it, the break has failed and the old resistance is back.
- **Too much time passes.** A level that broke six months ago may no longer be in many traders' minds.

**Worked example.** A share has resistance at 69.80 to 70.20. It closes at 71.40 on strong volume. Over the next four days it drifts back to 70.30, holds above the zone on a closing basis, and closes at 70.90 on the fifth day after a bullish engulfing bar. A trader buys at 70.90 with a stop at 69.60, below the old zone. Risk is 1.30 (1R). The next resistance is the recent high at 72.80, about 1.5R away. That is the honest target, not "the trend".

## Round numbers and psychological levels

Round numbers are prices like 1.1000 in EUR/USD, 100 in a share, 5,000 in an index or 50,000 in Bitcoin. They matter because people like them. Orders cluster at round numbers, as Osler's work on currency orders found, and news headlines are written around them. See [round numbers](/round-numbers/).

### Levels of roundness

Not all round numbers are equal.

| Market | Major round | Minor round | Least important |
|---|---|---|---|
| EUR/USD and similar | 1.1000, 1.2000 ("big figures") | 1.1050 ("half figures") | 1.1020, 1.1080 |
| USD/JPY | 150.00 | 150.50 | 150.20 |
| A share near 100 | 100 | 95, 105 | 98, 102 |
| A share near 10 | 10.00 | 9.50, 10.50 | 9.80 |
| An index near 5,000 | 5,000 | 4,900, 5,100 | 4,950 |
| Bitcoin near 50,000 | 50,000 | 45,000, 55,000 | 49,000 |

"Big figure" and "half figure" are standard forex dealer terms. Some traders add quarter levels (1.1025, 1.1075). The more levels you add, the less each one means.

### The level before the level

Because so many orders sit right at the round number, some traders leave their own orders just before it. A buyer who wants to be filled before the crowd puts a limit at 1.1005 instead of 1.1000. A seller places a take-profit at 1.0995 instead of 1.1000. The result is that price often reacts a few points before a round number, or pushes a few points through it before reversing.

Practical consequences:

- Do not put a limit order exactly on a round number if you want to be filled. Put it a little before.
- Do not put a stop exactly beyond a round number. Put it far enough beyond that an ordinary poke through will not take it out.

### Round numbers and new highs

Round numbers matter most when price has not been there before, or not for a long time. When a share first approaches 100, there is no chart history above, and the round number is the only obvious reference. Once price has traded around 100 for months, the swing points there matter more than the roundness.

## Session and calendar levels

Some levels come from the calendar rather than from swing points. They are objective: two traders using the same data get the same level. That makes them popular with day traders.

### Previous day's high and low

The high and low of the last full session. Price that breaks the previous day's high has done something the market refused to do yesterday. Price that rejects it has respected yesterday's range. See [previous day high and low](/previous-day-high-low/).

The catch: "the previous day" depends on your data. In forex, it depends on the daily close time (usually 5pm New York for most brokers, but not all). In futures, it depends on whether you use the full session or the regular trading hours only. In shares, pre-market and after-hours trading can change the high and low. Two platforms can show different levels for the same market.

### Weekly and monthly opens

The opening price of the current week or month. Price above the weekly open means the week is up so far. Some traders use the open as a dividing line: favour longs above, shorts below. See [weekly and monthly open](/weekly-monthly-open/).

### Session opens and the initial balance

The open of the day session, or of the London or New York session in forex, gives an intraday reference. The [initial balance](/initial-balance/), from Market Profile, is the range of the first hour of the day session. A break of the initial balance is a common intraday breakout signal; a failure to break it suggests a range day. See also [session open](/session-open/).

### Gaps

A gap leaves an empty space on the chart. The edges of the gap often act as support or resistance later. See [price gaps](/price-gaps/) and our answer on [whether gaps always fill](/answers/do-gaps-always-fill/).

| Level | How it is set | Who watches it | Main weakness |
|---|---|---|---|
| Previous day high/low | Yesterday's extremes | Day traders in all markets | Depends on session and close time |
| Weekly/monthly open | First price of the period | Swing and day traders | Only a reference; little order logic |
| Session open | First price of a session | Day traders | Many sessions in 24-hour markets |
| Initial balance | First hour's range | Futures and index day traders | Needs a clear session start |
| Gap edges | Space between two bars | Share and index traders | Rare in 24-hour markets |

## Pivot points

Pivot points are levels calculated from the previous period's high, low and close (and in some versions the open). They were used by floor traders on futures exchanges, which is why the standard version is called floor pivots. They are objective and easy to calculate, and many platforms plot them automatically. See [pivot points](/pivot-points/).

### Standard (floor) pivots

The formulas, using the previous day's high (H), low (L) and close (C):

- Pivot P = (H + L + C) / 3
- R1 = 2P − L
- S1 = 2P − H
- R2 = P + (H − L)
- S2 = P − (H − L)
- R3 = H + 2 × (P − L)
- S3 = L − 2 × (H − P)

**Worked example.** EUR/USD yesterday: high 1.0950, low 1.0850, close 1.0920. The range is 0.0100 (100 pips).

- P = (1.0950 + 1.0850 + 1.0920) / 3 = 3.2720 / 3 = **1.0907**
- R1 = 2 × 1.09067 − 1.0850 = **1.0963**
- S1 = 2 × 1.09067 − 1.0950 = **1.0863**
- R2 = 1.09067 + 0.0100 = **1.1007**
- S2 = 1.09067 − 0.0100 = **1.0807**
- R3 = 1.0950 + 2 × (1.09067 − 1.0850) = **1.1063**
- S3 = 1.0850 − 2 × (1.0950 − 1.09067) = **1.0763**

Notice that R2 lands near the big figure 1.1000. Calculated levels that sit near round numbers or swing points are the ones traders tend to watch more.

### Woodie, Camarilla, DeMark and Fibonacci pivots

The variations change the weighting or the spacing.

- **[Woodie pivots](/woodie-pivots/)** weight the close twice: P = (H + L + 2C) / 4. With the numbers above, P = (1.0950 + 1.0850 + 2.1840) / 4 = **1.0910**. R1 = 2P − L = **1.0970**; S1 = 2P − H = **1.0870**. Some versions use today's open instead of the previous close; platforms differ.
- **[Camarilla pivots](/camarilla-pivots/)** build levels from the previous close, spaced by fractions of the range multiplied by 1.1. R3 = C + range × 1.1 / 4 and R4 = C + range × 1.1 / 2, with S3 and S4 mirrored. With the numbers above: R3 = 1.0920 + 0.00275 = **1.0948**, R4 = 1.0920 + 0.0055 = **1.0975**, S3 = **1.0893**, S4 = **1.0865**. The Camarilla levels sit closer to price than floor pivots. A common reading is to fade moves into R3 or S3 and to treat a break of R4 or S4 as a breakout.
- **[DeMark pivots](/demark-pivots/)** use the relationship between the open and close. If the close was above the open, X = 2H + L + C; if below, X = H + 2L + C; if equal, X = H + L + 2C. Then P = X / 4, R1 = X / 2 − L, S1 = X / 2 − H. With an open of 1.0880 (close above open): X = 4.3670, P = **1.0918**, R1 = **1.0985**, S1 = **1.0885**. DeMark pivots give one level above and one below, not three.
- **[Fibonacci pivot points](/fibonacci-pivot-points/)** use the floor pivot P and space levels at 0.382, 0.618 and 1.000 of the range. R1 = **1.0945**, R2 = **1.0968**, R3 = **1.1007**; S1 = **1.0868**, S2 = **1.0845**, S3 = **1.0807**.

| Pivot type | Centre | Levels | Spacing | Typical use |
|---|---|---|---|---|
| Floor (standard) | (H + L + C) / 3 | R1 to R3, S1 to S3 | From P and range | General intraday reference |
| Woodie | (H + L + 2C) / 4 | R1, R2, S1, S2 | From P and range | Gives more weight to the close |
| Camarilla | Previous close | R1 to R4, S1 to S4 | Range × 1.1 / 12, 6, 4, 2 | Fade at R3/S3, break at R4/S4 |
| DeMark | X / 4, X depends on open vs close | R1, S1 | From X | One level each side |
| Fibonacci | (H + L + C) / 3 | R1 to R3, S1 to S3 | 0.382, 0.618, 1.000 × range | Pivot traders who like Fibonacci ratios |

### Why pivots differ between platforms

Pivot levels depend completely on the high, low and close used. Those depend on the session. A forex broker that closes its daily bar at 5pm New York gives different pivots from one that closes at midnight UTC. Futures pivots differ depending on whether overnight trading is included. Some platforms round the result; some do not. If you trade pivots, check what your platform uses, and remember that other traders may be looking at slightly different numbers.

### Pivots versus drawn levels

Pivots are objective but ignore chart history. Drawn levels are subjective but reflect where orders actually sat. Many day traders use pivots as a map and then pay most attention where a pivot lands near a swing point or round number. Our answer on [pivot points vs support and resistance](/answers/pivot-points-vs-support-and-resistance/) compares them directly.

## Supply and demand zones and newer level ideas

### Supply and demand zones

[Supply and demand zones](/supply-and-demand-zones/) are a way of drawing levels that focuses on where price left an area quickly. The usual shape: price moves sideways in a small base for a few bars, then breaks away sharply. The base is the zone. The idea is that the sharp move away left orders unfilled, and price may react when it returns.

Common rules:

- The move away should be strong: large range bars, ideally several in a row.
- The base should be short: a few bars, not a long range.
- A fresh zone (not yet revisited) is preferred. Each return uses up orders.

How it differs from classic support and resistance: classic levels often come from repeated touches; supply and demand zones often come from a single sharp departure, and prefer zones that have not been touched again. The two approaches overlap more than their followers admit. Our answer on [supply and demand zones vs support and resistance](/answers/supply-and-demand-zones-vs-support-and-resistance/) sets out the differences.

### Order blocks, liquidity and equal highs and lows

Newer trading communities use their own names for level ideas.

- An **[order block](/order-block/)** is usually the last opposite-coloured candle before a strong move. It is close to the supply and demand zone idea, defined by one bar instead of a base.
- **[Equal highs and lows](/equal-highs-lows/)** are double tops and bottoms at almost the same price. Classic charting calls them resistance and support. The newer reading is that stops cluster just beyond them, so price may run through them to trigger the stops before turning, a [liquidity sweep](/liquidity-sweep/).

Our view: these are mostly new names for old ideas, plus one useful emphasis, which is that obvious levels attract stop orders and stop runs. That emphasis is worth keeping, whatever you call it.

## Volume-based levels

The methods above all use price only. Some levels use volume as well.

### Volume profile

[Volume profile](/volume-profile/) plots how much volume traded at each price over a period, as a sideways histogram. Three features are commonly used:

- **Point of control (POC):** the price with the most volume.
- **Value area:** the band containing about 70% of the volume (the common default; platforms let you change it).
- **High and low volume nodes:** prices with a lot of trading, which often act like support and resistance, and prices with little trading, which price often moves through quickly.

Volume profile answers a different question from swing levels. Swing levels show where price turned. Volume profile shows where price was accepted. Often they agree; when they do not, the volume picture may show a level that swing points miss. Our answer on [volume profile vs support and resistance](/answers/volume-profile-vs-support-and-resistance/) has a worked example.

A caveat for forex: spot forex has no central volume. Volume profile in forex uses tick volume (the number of price changes), which is a rough stand-in. It can still be useful, but it is not the same as exchange volume.

### VWAP and anchored VWAP

[VWAP](/vwap/) is the volume-weighted average price for the session. Institutions use it as a benchmark for their fills, which gives it a reason to matter intraday. [Anchored VWAP](/anchored-vwap/) starts the calculation from a chosen bar, such as an earnings gap or a major low, and shows the average price paid since then. Both act as moving levels rather than fixed ones.

### A note on Fibonacci levels

[Fibonacci retracement](/fibonacci-retracement/) levels (23.6%, 38.2%, 50%, 61.8%, 78.6% of a prior move) and extensions are among the most widely plotted levels of all. They have their own pillar later in this series. For this guide, two points are enough: they are calculated from a swing the trader chooses, so they are only as objective as that choice, and they are most often used where they line up with a horizontal level. See also [Fibonacci confluence](/fibonacci-confluence/).

## Trading levels: bounce, break, retest and false break

A level is not a trade. It is a place where you have decided in advance what you will do. There are four standard plays.

### The bounce

Price reaches support and turns up, or reaches resistance and turns down. The trader enters with the level, expecting the reaction.

- **Best in:** ranges, and pullbacks within trends (buying support in an uptrend).
- **Worst in:** strong trends against you (buying support in a strong downtrend).
- **Entry:** usually after a sign of the reaction, such as a rejection candle, a close back inside the zone or a shift on a lower timeframe. Buying the first touch with no sign is the riskiest version.
- **Stop:** beyond the zone, with some room for a poke through. A common rule is a fraction of ATR beyond the far edge.
- **Target:** the next level. In a range, that is the other side.

### The break

Price closes through a level and keeps going. The trader enters with the break.

- **Best in:** trends and after long ranges ("the longer the base, the bigger the move" is a common saying, not a measured rule).
- **Entry:** on a close beyond the zone, not a touch. Some traders want rising [volume](/volume/) on the break.
- **Stop:** back inside the zone, or below the breakout bar.
- **Target:** the next level, or a measured move.

### The retest

Covered above under role reversal. Enter when price returns to the broken level and holds on the other side.

### The false break

Price pushes through a level, then closes back inside. Traders who bought the break are trapped. The false-break trader enters against the break, with a stop beyond the extreme of the poke. See [false breakout](/false-breakout/) and our existing answer [what is a false breakout?](/answers/what-is-a-false-breakout/).

| Play | Market state | Entry trigger | Stop | Main risk |
|---|---|---|---|---|
| Bounce | Range, trend pullback | Rejection at the zone | Beyond the zone plus a buffer | The level breaks |
| Break | Trend, end of a long base | Close beyond the zone | Back inside the zone | False break |
| Retest | After a real break | Hold on the other side | Back through the old level | No retest; missed move |
| False break | Range, crowded obvious levels | Close back inside | Beyond the poke's extreme | It was a real break after all |

### Where stops go near levels

The most common mistake with levels is putting the stop exactly where everyone else does: one tick below support. If many traders do that, the stops form a cluster, and a brief poke takes them all out. Two safer habits:

1. Put the stop beyond the whole zone, not beyond the line in the middle.
2. Add a buffer based on volatility, such as a quarter to half of ATR, and accept a smaller position size to keep the risk the same.

Our answer on [where to put a stop loss near support](/answers/where-to-put-a-stop-loss-near-support/) goes through the arithmetic.

### Targets

The most honest target is the next level. If you buy at support and the nearest resistance is 1R away, the trade offers 1R, whatever you hope. Many traders skip trades where the next level is less than about 1.5 to 2 times the risk. That is a sensible filter, not a law.

**Worked example.** A share in a range between 48.00 to 48.40 (support zone) and 53.60 to 54.00 (resistance zone). Daily ATR is 1.00. Price falls into the support zone and prints a hammer that closes at 48.70.

- Entry 48.70.
- Stop: below the zone (48.00) with a quarter-ATR buffer (0.25) = 47.75. Risk 0.95 (1R).
- Target: just below resistance, 53.50. Reward 4.80, about 5R.

Now the same setup with resistance at 50.10. Reward 1.40, about 1.5R. Same level, same entry, very different trade. The level below decides the stop; the level above decides whether the trade is worth taking.

## Backtesting levels without fooling yourself

Levels are among the hardest tools to test honestly. Our general approach is on the [methods page](/methods/). The specific traps:

### Hindsight drawing

When you look at an old chart, you can see which levels held. It is easy to draw those and ignore the ones that failed. A fair test draws levels using only the bars that existed at the time, with a fixed rule, before seeing what happened next.

### Too many levels

If you draw enough lines, price will always be "at a level". Then every bounce looks like a level working. A fair test counts how often price reacted at the levels and compares it with how often it reacted at random prices the same distance away. That is what Osler did with published levels, and it is the right shape for any level test.

### Look-ahead in swing points

A swing high needs bars after it to be confirmed. A two-bar swing high is not known until two bars later. A test that uses the swing high on the bar it formed is using information from the future. The same applies to fractals, zigzag indicators and many "automatic" level tools.

### Session data

Pivots and previous-day levels depend on the session and daily close time. A test on one data feed may not match what you see live on another.

### What we will publish

When we test levels, we will follow our [publishing rules](/methods/): trade counts, markets, date spans, a random baseline beside every result, and "exploratory" labels on anything that does not pass. Until then, this guide makes no performance claims for any level method.

## Putting it together: one chart from start to finish

The sections above describe each tool on its own. This walk-through shows how they combine on one chart, in the order many traders use them. The numbers are an illustration, not a trade record.

The market is a share trading at 72.30. Its daily ATR(14) is 1.60. The trader holds positions for a few days and uses the daily chart, with the weekly chart for context.

### Step 1: the weekly map

On the weekly chart there are two obvious areas. Last year's high sits at 78.40, with closes up to 77.60 in the weeks around it. A major low from the spring sits at 63.20, with closes down to 64.00. Everything between them is the current range. These two zones go on the chart first, and they stay until price closes well beyond them.

### Step 2: the daily levels

On the daily chart, three swing points stand out between those extremes:

- a cluster of swing highs at 74.60, 74.85 and 75.10, with closes up to 74.40;
- an old swing low at 69.80 to 70.30 that held twice in the summer;
- a swing high from the spring at 70.10 that price broke in August.

The first becomes a resistance zone from 74.40 to 75.10. That is 0.70 wide, a little under half of one ATR, so it passes the zone-width check from the drawing section. The second and third overlap: an old swing high and later swing lows in almost the same place. That is [role reversal](/role-reversal/) in action, and it makes the 69.80 to 70.30 area the strongest daily support near price.

### Step 3: round numbers and calendar levels

The round number 75 sits inside the resistance zone, which adds to it. The round number 70 sits inside the support zone, which adds to that. This month's open was 71.20, a level some traders will watch, but it lines up with nothing else, so it is marked faintly.

### Step 4: pivots, if you use them

A swing trader may skip daily pivots. Weekly pivots are more relevant at this holding period. Using last week's high of 73.90, low of 70.60 and close of 72.80:

- P = (73.90 + 70.60 + 72.80) / 3 = 217.30 / 3 = **72.43**
- R1 = 2 × 72.433 − 70.60 = **74.27**
- S1 = 2 × 72.433 − 73.90 = **70.97**
- R2 = 72.433 + 3.30 = **75.73**
- S2 = 72.433 − 3.30 = **69.13**

R1 at 74.27 sits just below the resistance zone. S1 at 70.97 sits just above the support zone. The pivots add nothing new; they confirm the drawn levels. That is the usual role of pivots for a swing trader: a cross-check, not the main map.

### Step 5: delete

The chart now has the weekly zones, two daily zones, two round numbers, the monthly open and four weekly pivots. Following the delete step, the trader keeps:

| Keep | Why |
|---|---|
| 74.40 to 75.10 resistance | Swing cluster + round 75 + near weekly R1 |
| 69.80 to 70.30 support | Role reversal + round 70 + near weekly S1 |
| 77.60 to 78.40 weekly resistance | Last year's high: the target if 75 breaks |
| 63.20 to 64.00 weekly support | Spring low: the next area if 70 breaks |

The monthly open and the separate pivot lines are removed. They added clutter, not information.

### Step 6: the plan

With price at 72.30, it sits in the middle of the two daily zones. There is about 2.10 to resistance and 2.00 to support: no room for a trade at a sensible risk. The plan is to wait.

- **If price falls to 69.80 to 70.30** and shows a rejection (a long lower wick, a close back above 70.30), a long trade has a stop under the zone plus a buffer, say 69.20, and a first target at the 74.40 resistance. Risk is about 1.10 to 1.30 depending on the entry, against a reward of around 4.
- **If price closes above 75.10**, the trader waits for a [retest](/breakout-retest/) of the old resistance as support. The target is the weekly zone at 77.60.
- **If price closes below 69.80**, the support has failed. The next area is the weekly low near 64. A trader who was long exits; one who trades breaks may look for a retest of 70 from below.

Nothing here predicts which of these happens. The point is that every outcome has a level, a stop and a target decided before price gets there. That is what levels are for.

### What the example leaves out

Real charts are messier. Swing points do not line up so neatly, round numbers are not always inside zones, and price often drifts sideways between levels for weeks. The process stays the same: higher timeframe first, zones not lines, cross-check with objective levels, delete, then plan each outcome. For how horizontal levels compare with sloping lines, see our answer on [horizontal support vs trendlines](/answers/horizontal-support-vs-trendlines/).

## Common mistakes

1. **Too many lines.** If your chart has more than a handful of levels near price, delete until it does not.
2. **Lines instead of zones.** A thin line is broken by ordinary noise. Draw the band.
3. **Ignoring the trend.** Buying support in a strong downtrend means trading against the dominant flow. Levels work best with the trend or in ranges.
4. **Trusting more touches blindly.** Repeated tests can wear a level down. Watch for each bounce getting smaller.
5. **Stops right beyond the line.** Everyone's stops are there. Go beyond the zone plus a buffer, and size down.
6. **Taking trades with no room.** If the next level is close, the trade has little reward, however good the level.
7. **Forgetting higher timeframes.** A five-minute level just under a daily resistance is not much of a support.
8. **Assuming every platform shows the same levels.** Session times, close times and data feeds change pivots and daily highs and lows.
9. **Adding every named method for confluence.** With enough methods, everything is confluence. Fix a short list.
10. **Treating a level as a signal.** A level tells you where to pay attention. The trade still needs a trigger, a stop and a target.

## Comparison table

| Method | Inputs | Objective or subjective | Recalculates | Best use | Main weakness |
|---|---|---|---|---|---|
| [Horizontal support and resistance](/support-and-resistance/) | Past swing points | Subjective | When you redraw | Ranges, stops, targets | Drawing varies by trader |
| [Swing highs and lows](/swing-highs-lows/) | Bar highs and lows | Objective with a fixed rule | Each new swing | Raw material for levels | Confirmed only after the fact |
| [Role reversal](/role-reversal/) | A broken level | Subjective | After each break | Retest entries | False breaks |
| [Round numbers](/round-numbers/) | Price only | Objective | Never | New highs, forex big figures | Too many if you include minor ones |
| [Previous day high/low](/previous-day-high-low/) | Yesterday's range | Objective | Daily | Day trading | Session definitions differ |
| [Weekly/monthly open](/weekly-monthly-open/) | Period open | Objective | Weekly/monthly | Bias filter | Weak order logic |
| [Initial balance](/initial-balance/) | First hour's range | Objective | Daily | Range or trend day read | Needs a clear session |
| [Price gaps](/price-gaps/) | Gap edges | Objective | When gaps form | Share and index levels | Rare in 24-hour markets |
| [Pivot points](/pivot-points/) | H, L, C | Objective | Daily (or weekly, monthly) | Intraday map | Ignores chart history |
| [Camarilla pivots](/camarilla-pivots/) | H, L, C | Objective | Daily | Range fades, R4/S4 breaks | Levels very close together |
| [Supply and demand zones](/supply-and-demand-zones/) | Base before a sharp move | Subjective | As zones form and are used | Fresh-zone entries | Hindsight drawing |
| [Order block](/order-block/) | Last opposite candle | Semi-objective | As moves form | Same as above | Many candidates on any chart |
| [Equal highs and lows](/equal-highs-lows/) | Matching extremes | Semi-objective | As they form | Stop-run awareness | Run or hold: hard to tell in advance |
| [Volume profile](/volume-profile/) | Price and volume | Objective once the range is chosen | Per profile | Acceptance and value | Tick volume only in spot forex |
| [VWAP](/vwap/) / [anchored VWAP](/anchored-vwap/) | Price and volume | Objective once anchored | Every bar | Intraday mean, institutional benchmark | Anchor choice is subjective |
| [Fibonacci retracement](/fibonacci-retracement/) | A chosen swing | Subjective swing, objective ratios | When the swing changes | Pullback areas with confluence | See the Fibonacci pillar |

## Verdict

Support and resistance is the one idea in technical analysis that almost every trader uses, whatever else they use. That is partly why it matters: when enough people watch the same areas and leave orders there, reactions are more likely there than at random prices. The published research we know of supports a modest version of that claim in currency markets. Nothing supports the stronger version, that any line you draw will hold.

The useful version of level trading is simple. Start from higher timeframes. Draw a few zones from clear swing points, round numbers and session extremes. Delete the rest. Decide in advance whether you are trading a bounce, a break, a retest or a false break. Put the stop beyond the zone with a buffer, and the target at the next level. If the next level is too close, skip the trade.

The calculated levels, pivots and their variants, are good maps for day traders because they are objective, but they gain most of their value when they line up with levels the chart already shows. Newer names, such as order blocks and liquidity, mostly relabel old ideas, with one useful emphasis: obvious levels attract stops, and stops attract runs. Volume-based levels add a view of where trading was accepted, which price-only levels cannot show.

None of this predicts. A level tells you where to pay attention and where your risk ends. The decision still comes from what price does when it gets there.

## FAQ

**What is the difference between support and resistance?**
Support is an area below price where falling prices have stopped before. Resistance is an area above price where rising prices have stalled before. They are the same idea on opposite sides of price, and a level can switch from one to the other when it breaks.

**How do you find strong support and resistance?**
Start on the weekly and daily charts. Look for clear swing points with a big move away, prices where both highs and lows have turned, round numbers and session extremes. A level where two or three of those agree is usually more watched than one that rests on a single swing.

**Is support and resistance a line or a zone?**
A zone. Orders are spread around a level, so reactions happen across a band. Draw from the bodies to the wicks of the turning bars, or use a fraction of ATR as the width. A single line will look "broken" by ordinary noise.

**Does support become resistance?**
Often, after a clear break. Traders trapped on the wrong side and traders who missed the break both act at the old level. It fails when the break was false, when the retest closes well back through the level, or when too much time has passed.

**How many times can a level be tested before it breaks?**
There is no fixed number. Each test fills some of the orders waiting at the level. Bounces that get smaller each time, and tests that come faster and faster, suggest the level is weakening.

**Are pivot points better than drawn levels?**
They are more objective and quicker to plot, which suits day traders. They ignore chart history, though. Many traders use pivots as a map and pay most attention where a pivot lines up with a drawn level or a round number.

**Do support and resistance levels work in all markets?**
The idea applies to any market where traders watch the same prices and leave orders: shares, indices, futures, forex and crypto. What changes is session structure, data quality and how often each market trends or ranges.

**Should I trade the bounce or the break?**
That depends on the market state. Bounces suit ranges and pullbacks in trends. Breaks suit trends and the end of long bases. Decide which you expect before price reaches the level, not when it is there.

**Can support and resistance indicators draw levels for me?**
Some can, using swing points, fractals or pivots. They are consistent but often draw too many levels or confirm them late. Check how a tool finds its levels and whether it repaints before relying on it. Our answer on [support and resistance indicators](/answers/support-and-resistance-indicator/) covers the common types.
