---
title: How we test patterns and indicators
description: The data, detectors, trade rules and statistics behind every figure we publish, and the limits you should know before reading any of them.
reviewed: 16 November 2026
---

Some of our guides and answers include figures from our own tests. This page explains where every one of those figures comes from, so you can judge them for yourself. If a figure on this site does not link here, it is not ours.

## The short version

- We test on real daily price data, with real trading costs, against **random entries** in the same markets and months.
- We report what happened in our sample, never what will happen.
- Most patterns we test show **no evidence of an edge**. We publish that too, because it is useful to know.
- A result only gets called anything stronger than "exploratory" if it passes rules we wrote down before we looked.

## The data

- **Markets:** daily bars for US stocks, US index and sector funds, gold and bitcoin. The first studies used 10 large US names (SPY, QQQ, IWM, Apple, Microsoft, Nvidia, Tesla, Amazon, JPMorgan, Exxon). Follow-up studies added the members of the Dow Jones Industrial Average as of January 2021 and the 11 Select Sector SPDR funds.
- **Period:** January 2021 to October 2026.
- **Adjustment:** prices are split-adjusted but not dividend-adjusted.
- **Costs:** every trade pays a spread on the way in and out (assumed at 0.02 for stocks and 0.01 for funds, not measured).
- **Known biases:** the first 10 names were picked knowing they did well over this period, which flatters buying. Many of these markets move together, so they are fewer independent tests than the count suggests. One stock (Walgreens) is missing because it is no longer listed by our data source; leaving out a stock that fell heavily flatters buying slightly.

## The detectors

Every pattern is found by code, not by eye: the same rules every time, with the default settings described in each guide. A detector only uses the candle in question and the bars before it, never later bars, so it cannot "see the future". Some popular tools do use later bars (the Ichimoku lagging line and Williams fractals, for example); their guides carry a backtesting note explaining how to avoid fooling yourself with them.

## The trade rules

- **Entry:** the next day's open after the pattern completes. Buyers pay the ask, sellers receive the bid.
- **Stop:** either just beyond the pattern, or one average daily range (the mean high-to-low range of the last 14 days) from the signal close. Both are tested.
- **Target:** twice the real risk at the fill (2R). If price gaps past the stop, the loss is booked at the real price, so a loss can be bigger than 1R. If price gaps past the target, the gain counts too.
- **Time limit:** out after 20 days if neither stop nor target is hit.
- **R:** every result is in R, the multiple of the amount risked on the trade. +0.20R per trade means the average trade made a fifth of what it risked, after costs.

## The comparison: random entries

A pattern can look good just because the market went up. So every study is compared with **random entries**: the same markets, the same direction, the same stop size, in the same calendar quarter, at random dates. We repeat that random draw 200 times (2,000 for anything that looks interesting) and ask how often random entries did as well as the pattern. That share is the **p** figure. A p of 0.02 means random entries matched the pattern about 2 times in 100.

Random entries are taken on any day, not only after a fall. So a pattern that fires after a decline is partly tested against "buying after a fall" and partly against the candle itself; we say so wherever it matters.

## Fooling ourselves: the guards

- **Many tries:** when we test 110 variations, some will look good by luck. We adjust for the number of tries (the Benjamini-Hochberg method) and report how many variants we tried.
- **The unseen year:** the most recent 12 months of data are kept back. They are read once, for a result that has already passed its other checks, under a rule written down before the read.
- **Freak trades:** every figure is also shown with the single best trade removed.
- **Daily-bar limits:** on a daily chart we cannot always tell whether the stop or the target was hit first inside one day. We assume the stop, and report how often that happened.

## How to read our labels

| Label | What it means |
|---|---|
| No evidence of an edge | Tested; did no better than random entries |
| Exploratory | Tested once; looked interesting but has not passed all our checks |
| Passed a pre-registered check | Passed a test whose rules we wrote down in advance, with the limits stated beside it |

We do not publish win rates on their own, yearly returns, or the words "proven" or "profitable". A pattern doing well in a past sample does not mean it will do well for you.

## The code

The tests run on our own backtesting engine. Every published figure is stored with a run reference that ties it to the exact data and code version used.
