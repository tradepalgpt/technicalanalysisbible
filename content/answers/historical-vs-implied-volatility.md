---
slug: historical-vs-implied-volatility
title: "Historical vs implied volatility: what is the difference?"
description: Historical volatility measures how much price has moved; implied volatility is what option prices expect. Formulas, a worked example and how to read the gap.
query: historical vs implied volatility
pillar: volatility-guide
publish: 2028-02-28
reviewed: 17 November 2026
guides: [historical-volatility, implied-volatility, standard-deviation, vix]
siblings: [what-is-the-vix, what-is-volatility-in-trading]
value: [chart, table, example, verdict]
chart: historical-volatility
---

Historical volatility measures how much a market has actually moved, from past prices. Implied volatility is the level of future volatility that current option prices are pricing in, so it is the market's forecast rather than a measurement.

## Historical volatility

[Historical volatility](/historical-volatility/), also called realised or statistical volatility, is the annualised [standard deviation](/standard-deviation/) of returns over a past window, often 20 or 30 trading days.

1. Take each day's return, usually the log of today's close divided by yesterday's (simple percent changes give almost the same answer for small moves).
2. Find the standard deviation of those returns.
3. Multiply by the square root of the number of periods in a year: about 252 for trading days.

**Worked example.** If the standard deviation of daily returns over the last 20 days is 1.2%, historical volatility is 1.2% x square root of 252 = about **19.0%** a year.

It is fact, not opinion: anyone with the same prices and window gets the same number. Its weakness is that it only looks back.

## Implied volatility

[Implied volatility](/implied-volatility/) comes from option prices. An option pricing model, such as Black-Scholes (Fischer Black and Myron Scholes, 1973), takes inputs including the share price, strike, time to expiry and interest rates, and produces a fair price if you also give it a volatility. Implied volatility runs this backwards: it is the volatility figure that makes the model's price match the price the option actually trades at.

So implied volatility is what option buyers and sellers are collectively paying for. It goes up when demand for protection rises, often around earnings, central bank meetings or market stress.

**Worked example.** A share at 100 with an implied volatility of 25% a year. To turn that into an expected one-standard-deviation move over 30 calendar days, scale by the square root of time:

100 x 0.25 x square root of (30 / 365) = about **7.17**

The options are pricing a typical 30-day move of around 7 either way. That is a one-standard-deviation band under the model's assumptions, not a limit; larger moves happen.

## Side by side

| | Historical volatility | Implied volatility |
|---|---|---|
| Direction in time | Backward-looking | Forward-looking |
| Source | Past prices of the market itself | Option prices |
| Who can calculate it | Anyone with price data | Needs option prices and a model |
| Changes when | Prices move | Option prices change, even if the market itself is quiet |
| Typical use | Describing past behaviour, sizing, stops | Gauging expected moves and how much options cost |
| Index example | 20-day realised volatility of the S&P 500 | The [VIX](/vix/), from S&P 500 options |

## Reading the gap

Traders often compare the two. If implied volatility is well above recent historical volatility, options are pricing a busier future than the recent past, for example ahead of a known event. If implied is below historical, options are pricing calmer times than the market has just had. A gap describes what is priced in; it is not a forecast that one will move to meet the other, and it is not a trading signal by itself.

This site does not cover options strategies. For chart traders, implied volatility is mostly useful as context: a known event with high implied volatility warns that the next bars may be much wider than recent ATR suggests.

## Common mistakes

- Treating implied volatility as a direction forecast. It covers moves both ways.
- Comparing historical volatility from 10 days with implied volatility for 90 days. Match the windows.
- Mixing calendar days and trading days when scaling. Be consistent.
- Assuming a one-standard-deviation move is the most price can move.

## Verdict

Historical volatility is what happened, measured from prices. Implied volatility is what option prices expect, backed out of a model. Use historical volatility to describe a market and plan risk; use implied volatility as a forward-looking warning of how wide things may get, especially around events.

More in [the volatility guide](/guide/volatility-guide/).
