---
slug: closing-price-or-typical-price-for-moving-average
title: Should you use closing price or typical price for a moving average?
description: Close, typical price, median price or HL2 for a moving average? How each source is calculated, how much it changes the line, and when each one tends to suit.
query: moving average source price
pillar: moving-averages
publish: 2027-06-04
reviewed: 16 November 2026
guides: [simple-moving-average, williams-alligator, cci, heikin-ashi]
siblings: [vwma-vs-vwap, why-does-my-ema-differ-from-tradingview]
value: [table, example, verdict]
---

The closing price is the standard source for a moving average and the one most other traders use. Typical price (high, low and close divided by 3) and median price (high plus low, divided by 2) give a slightly smoother line that includes the bar's range. The difference is usually small next to the choice of period.

## The common source prices

Most platforms let you choose which price an average is built from.

| Source | Formula | What it represents | Where you see it by default |
|---|---|---|---|
| Close | C | Where the bar ended | Most moving averages; MACD; RSI |
| Median price (HL2) | (H + L) / 2 | Middle of the bar's range | [Williams Alligator](/williams-alligator/) |
| Typical price (HLC3) | (H + L + C) / 3 | Range middle, nudged towards the close | [CCI](/cci/); VWAP on most platforms |
| OHLC4 | (O + H + L + C) / 4 | Average of all four prices | Similar to a [Heikin Ashi](/heikin-ashi/) close |
| Weighted close (HLCC4) | (H + L + 2C) / 4 | Range middle, weighted more to the close | Some platforms offer it as an option |

None of these is more "true" than the others. They are different summaries of the same bar.

## Why the close is the default

The close is the most widely used price for three reasons. It is the last agreed price of the period, so it reflects all the information traded in that period. It is the price used for settlements, fund valuations and most published data. And it is what most other traders and tools use, so your [simple moving average](/simple-moving-average/) on closes matches theirs.

Its weakness is that it ignores the rest of the bar. A day that swung widely and closed flat looks the same as a quiet day that closed flat.

## What the other sources change

Using H, L and sometimes O brings the bar's range into the average. The effects:

- **Slightly smoother.** The high and low pull each bar's input towards its middle, so single wild closes have a little less effect.
- **Slightly different level.** On a bar that closes near its high, typical price sits below the close; on a bar that closes near its low, above.
- **More sensitive to wicks.** A long spike in one bar moves median and typical price, even if the close ignored it.

## A worked example

Three bars, and a 3-period SMA on each source.

| Bar | High | Low | Close | HL2 | HLC3 |
|---|---|---|---|---|---|
| 1 | 104 | 98 | 103 | 101.00 | 101.67 |
| 2 | 106 | 101 | 105 | 103.50 | 104.00 |
| 3 | 108 | 100 | 101 | 104.00 | 103.00 |

- 3-SMA of close = (103 + 105 + 101) / 3 = **103.00**
- 3-SMA of HL2 = (101.00 + 103.50 + 104.00) / 3 = **102.83**
- 3-SMA of HLC3 = (101.67 + 104.00 + 103.00) / 3 = **102.89**

All three are within 0.2 of each other. Bar 3 shows where they part: it reached 108 but closed at 101. The close-based input dropped to 101. The HL2 input stayed at 104, because the range middle was high. If the bars before had all been like bar 3, the sources would differ more.

For comparison, changing the period from 3 to 5 on the same data would typically move the line by much more than switching source. That is the general pattern: source is a fine adjustment, period is a big one.

## When another source tends to suit

- **Matching a tool's design.** If you use the Alligator, its lines are built on median price. If you rebuild CCI, it uses typical price. Using the documented source keeps your values in line with the original.
- **Markets with noisy closes.** In markets where the last trade of the day can be thin or erratic, an average of the range can be steadier.
- **Bar-range strategies.** If your rule is about the middle of each bar (for example, mean reversion within a range), a range-based source matches the idea.

## When it can cause problems

- **Mismatch with other traders.** A 50 SMA of HLC3 is not the 50-day the news quotes.
- **Comparing platforms.** If one chart uses close and another uses HL2, they will never match. Check the source setting before chasing other causes. See [why your EMA differs](/answers/why-does-my-ema-differ-from-tradingview/).
- **Backtesting.** A rule that reads a moving average of typical price at the close of a bar is fine. A rule that uses the bar's high or low before the bar has finished is look-ahead. Make sure your code only uses completed bars.

## What about VWAP?

VWAP uses typical price, weighted by volume, on most platforms. That is a convention of VWAP, not a recommendation for moving averages in general. See [VWMA vs VWAP](/answers/vwma-vs-vwap/).

## Verdict

Use the close unless you have a reason not to: it is standard, matches other traders and is the price most data is built on. Typical or median price gives a slightly smoother line and suits tools designed around them. The choice changes the line far less than the period does, so it is rarely where an edge comes from. More in [the moving averages guide](/guide/moving-averages/).
