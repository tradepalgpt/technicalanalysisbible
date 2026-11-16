---
slug: how-to-calculate-rsi
title: How do you calculate RSI by hand or in Excel?
description: Calculate RSI step by step with Wilder's smoothing, plus spreadsheet formulas you can paste into Excel or Google Sheets and check against your chart.
query: how to calculate rsi in excel
pillar: rsi-and-momentum-oscillators
publish: 2027-03-15
reviewed: 16 November 2026
guides: [rsi, exponential-moving-average, simple-moving-average]
siblings: [why-rsi-differs-between-tradingview-and-mt5, stochastic-rsi-vs-rsi-difference]
value: [table, example, verdict]
---

To calculate RSI, split each close-to-close change into a gain or a loss, average each over 14 bars, smooth them with Wilder's method, then compute 100 - 100 / (1 + average gain / average loss). In a spreadsheet that takes four helper columns and one formula per column.

## The steps

1. **Change** = this close - previous close.
2. **Gain** = the change if positive, otherwise 0.
3. **Loss** = minus the change if negative, otherwise 0. (Losses are stored as positive numbers.)
4. **First average gain** = simple average of the first 14 gains. Same for losses.
5. **Every later average** = (previous average x 13 + today's value) / 14. This is Wilder's smoothing.
6. **RS** = average gain / average loss.
7. **RSI** = 100 - 100 / (1 + RS). If the average loss is 0, RSI is 100.

The [RSI](/rsi/) guide explains what each step means. This post is about doing it.

## A small example you can check by hand

A full 14-bar example fills a page, so here is a 5-period RSI on eight closes. Replace every 4 with 13 and every 5 with 14 for the standard version.

| Bar | Close | Change | Gain | Loss | Avg gain | Avg loss | RSI |
|---|---|---|---|---|---|---|---|
| 1 | 50.00 | | | | | | |
| 2 | 50.60 | +0.60 | 0.60 | 0 | | | |
| 3 | 50.30 | -0.30 | 0 | 0.30 | | | |
| 4 | 50.90 | +0.60 | 0.60 | 0 | | | |
| 5 | 51.20 | +0.30 | 0.30 | 0 | | | |
| 6 | 50.70 | -0.50 | 0 | 0.50 | 0.300 | 0.160 | 65.22 |
| 7 | 51.10 | +0.40 | 0.40 | 0 | 0.320 | 0.128 | 71.43 |
| 8 | 50.80 | -0.30 | 0 | 0.30 | 0.256 | 0.1624 | 61.19 |

Working for each RSI row:

- **Bar 6.** Average gain = (0.60 + 0 + 0.60 + 0.30 + 0) / 5 = 0.300. Average loss = (0 + 0.30 + 0 + 0 + 0.50) / 5 = 0.160. RS = 1.875. RSI = 100 - 100 / 2.875 = **65.22**.
- **Bar 7.** Average gain = (0.300 x 4 + 0.40) / 5 = 1.60 / 5 = 0.320. Average loss = (0.160 x 4 + 0) / 5 = 0.128. RS = 2.5. RSI = 100 - 100 / 3.5 = **71.43**.
- **Bar 8.** Average gain = (0.320 x 4 + 0) / 5 = 0.256. Average loss = (0.128 x 4 + 0.30) / 5 = 0.812 / 5 = 0.1624. RS = 1.576. RSI = 100 - 100 / 2.576 = **61.19**. Keep full precision in a spreadsheet; rounding the averages at each step drifts the result by a few hundredths.

## Spreadsheet formulas (14-period)

Put dates in column A and closes in column B, with headers in row 1 and the first close in B2. Then:

| Column | Header | Formula in the first row it applies | Fill down from |
|---|---|---|---|
| C | Change | `=B3-B2` in C3 | C3 |
| D | Gain | `=MAX(C3,0)` in D3 | D3 |
| E | Loss | `=MAX(-C3,0)` in E3 | E3 |
| F | Avg gain | `=AVERAGE(D3:D16)` in F16 | (first value only) |
| G | Avg loss | `=AVERAGE(E3:E16)` in G16 | (first value only) |
| F | Avg gain | `=(F16*13+D17)/14` in F17 | F17 |
| G | Avg loss | `=(G16*13+E17)/14` in G17 | G17 |
| H | RSI | `=IF(G16=0,100,100-100/(1+F16/G16))` in H16 | H16 |

Row 16 holds the first RSI because rows 3 to 16 are the first 14 changes. Everything from row 17 down uses Wilder's smoothing. The same formulas work in Google Sheets and LibreOffice.

## Checking against your chart

Your spreadsheet will usually not match your charting platform exactly on the first try. That is normal. Check these in order:

1. **Same closes.** Copy the closes from the same platform and timeframe. Daily closes differ between data sources, and that is the biggest cause of mismatches.
2. **Enough history.** Wilder's smoothing remembers its starting value for a long time. On a 14-period RSI, the start's weight after k bars is (13/14) to the power k: about 2.5 per cent after 50 bars and under 0.1 per cent after 100. Start your sheet at least 100 bars before the date you want to compare.
3. **Same smoothing.** Some platforms and code libraries smooth with an ordinary exponential average or a simple average instead of Wilder's. Those give different numbers. [Why does RSI differ between TradingView and MT5?](/answers/why-rsi-differs-between-tradingview-and-mt5/) covers the platforms.

## Two shortcuts that give the wrong answer

**Using an ordinary EMA.** An [exponential moving average](/exponential-moving-average/) over 14 bars uses a factor of 2/15. Wilder's smoothing uses 1/14, about half as large. If you use a spreadsheet's EMA formula with 14 periods, your RSI will react faster and differ from the standard. Wilder's 14-period smoothing is the same as an EMA over 27 periods, so an EMA with period 27 does give Wilder's result (apart from the start).

**Using a rolling simple average.** `=AVERAGE(D3:D16)` filled all the way down, with no smoothing, is a [simple moving average](/simple-moving-average/) of gains. It gives a valid indicator, sometimes called Cutler's RSI, but not Wilder's. It jumps when old values drop out of the window.

On the eight bars above, bar 7 comes out at 71.43 with Wilder's smoothing, 75.76 with a 5-period EMA (factor 1/3, same starting value) and 61.90 with a simple average of the last five changes. Same closes, three answers almost 14 points apart.

## Verdict

RSI is one of the few indicators you can fully calculate and check by hand in minutes, which is a good reason to do it once. The spreadsheet takes four helper columns. If your result does not match your chart, the cause is almost always the price data, the history length or the smoothing method, in that order, and not the formula.
