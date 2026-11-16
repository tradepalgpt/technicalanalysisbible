---
slug: what-is-tick-volume
title: "What is tick volume and is it reliable?"
description: Tick volume counts price changes, not units traded. How it is built, why it differs between brokers, and when it is a usable stand-in for real volume.
query: what is tick volume
pillar: volume-and-order-flow-guide
publish: 2027-09-15
reviewed: 16 November 2026
guides: [tick-volume, volume, tick-charts]
siblings: [does-volume-matter-in-forex, what-is-relative-volume]
value: [table, example, verdict]
---

Tick volume is the number of price changes in a bar, not the number of shares, contracts or currency units traded. It is a fair guide to how busy a market was, but it says nothing about trade size and differs from one data feed to another.

## How tick volume is built

A "tick" here means one update to the price. Every time the quoted price changes, the platform adds one to the bar's counter. At the end of the bar, the count is shown as the volume bar.

[Tick volume](/tick-volume/) is the default on most retail forex and CFD platforms, because those markets have no central exchange to report real [volume](/volume/). Some platforms also offer "real volume" for exchange-traded instruments, where the feed carries it.

Do not confuse tick volume with [tick charts](/tick-charts/). A tick chart draws a new bar every set number of trades or ticks. Tick volume is a count shown under a normal time-based bar.

## A small worked example

Suppose three trades happen in one minute on an exchange:

| Event | Trade size | Price change? |
|---|---|---|
| Trade at 100.00 | 5,000 units | First price of the bar: counted |
| Trade at 100.00 | 20 units | No change: often not counted |
| Trade at 100.01 | 100 units | Yes: counted |

Real volume for the minute is 5,000 + 20 + 100 = 5,120 units. Tick volume, counting price changes, is 2. A minute with forty tiny trades that each moved the price by one step would show a tick volume of 40 and a real volume far below 5,120.

Exact counting rules vary. Some feeds count every quote update, some count trades, and some count only changes in the bid. That is the main reason two brokers show different numbers for the same bar.

## Is it reliable?

It depends what you ask of it.

| Question | Does tick volume help? | Why |
|---|---|---|
| Was this hour busier than usual? | Mostly yes | Busy markets update prices more often |
| How much was traded? | No | Size is missing |
| Were buyers or sellers more aggressive? | No | A tick has no side |
| Is this the same on another platform? | No | Each feed counts differently |
| Can I compare it within one feed over time? | Yes, with care | Feed changes and holidays can distort it |

Studies in markets where both measures are available have generally found that tick counts and traded volume rise and fall together through a day. That supports using tick volume as an activity gauge. It does not make it a substitute for size, and the strength of the link varies by market and feed.

## When tick volume goes wrong

- **Feed changes.** If a broker changes its liquidity sources, tick counts can step up or down overnight with no change in the market.
- **Spread widening.** Around news, quotes flicker fast. Tick counts jump even if little is traded.
- **Quiet sessions and holidays.** Low counts reflect the calendar, not a lack of interest in a price.
- **Cross-platform tests.** A volume rule tested on one broker's tick data may behave differently on another's.

## How to use it sensibly

1. Use [relative volume](/answers/what-is-relative-volume/) rather than raw counts: compare a bar with the same time of day on earlier days.
2. Keep to one data feed for any study or rule, and note which feed it was.
3. Use it for questions about activity, such as "was the breakout bar busier than normal?", not for questions about size or direction.
4. Where an exchange-traded version exists, such as currency futures, look at its real volume when size matters.
5. Be wary of indicators that multiply price by volume, such as VWAP, on tick data. They still plot, but the weights are activity counts, not money traded.

## Verdict

Tick volume is a reasonable activity gauge and a poor size gauge. Within one feed, it shows when the market is busy and when it is quiet. Across feeds, or for anything that needs real buying and selling, it is unreliable. Use it for context and comparison with itself, and do not read more into it than it measures.
