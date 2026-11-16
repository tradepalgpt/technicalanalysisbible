---
slug: moving-averages-on-crypto-do-the-usual-periods-apply
title: "Moving averages on crypto: do the usual periods apply?"
description: Do the usual moving average periods work on crypto? How a 24/7 market changes what 50 and 200 mean, why daily closes differ by platform, and how to adjust.
query: moving averages crypto
pillar: moving-averages
publish: 2027-05-28
reviewed: 16 November 2026
guides: [simple-moving-average, time-frames, historical-volatility]
siblings: [does-the-200-day-moving-average-work, why-does-my-ema-differ-from-tradingview]
value: [table, example, verdict]
---

The usual periods can be used on crypto, but they do not mean the same thing. Crypto trades every day, so a 200-day [simple moving average](/simple-moving-average/) covers about six and a half months instead of about ten. The daily close time also varies by platform, so averages differ between charts.

## Bars are not trading days

Stock market periods were set on charts that skip weekends and holidays (see [time frames](/time-frames/)). A 200-day simple average on a stock covers 200 trading sessions, roughly ten calendar months. Crypto trades 24 hours a day, 7 days a week. A 200-bar daily average on crypto covers 200 calendar days.

| Period | Stocks (about 252 sessions a year) | Crypto (365 bars a year) |
|---|---|---|
| 20 daily bars | About 4 weeks | About 3 weeks |
| 50 daily bars | About 10 weeks | About 7 weeks |
| 100 daily bars | About 5 months | About 3.3 months |
| 200 daily bars | About 10 months | About 6.6 months |
| 20 weekly bars | About 5 months | About 5 months |

The weekly row is the same in both, because a week is a week. That is one reason some crypto traders lean on weekly averages, such as the 20-week or 50-week, for long-term context.

## Matching calendar time

If you want a crypto average that covers the same calendar span as a stock's 200-day, scale by 365 / 252, about 1.45:

- Stock 50-day ≈ crypto 72-day
- Stock 200-day ≈ crypto 290-day

Whether you should do this depends on what you want. If you care about calendar time (the trend of "the last ten months"), scale. If you care about the number of price observations, keep the period. If you care about matching the line that crypto commentators and other traders are looking at, use the plain 50 and 200, because those are what they quote.

There is no evidence we know of that one choice works better. The point is to know which one you are using and why.

## The daily close problem

Stocks close at a fixed time on their exchange. Crypto has no close. Each platform picks a time to end the daily bar. Midnight UTC is common, but not universal; some platforms use local time zones or other conventions.

A daily bar that ends at midnight UTC and one that ends at 17:00 New York contain different hours. Their closes differ, sometimes by a lot on volatile days. Every average built on them differs too. Unlike an EMA seed difference, this gap does not fade with more history. See [why your EMA differs between platforms](/answers/why-does-my-ema-differ-from-tradingview/).

The same applies to weekly bars: some end on Sunday at midnight UTC, others at different times.

## Volatility changes how averages behave

Crypto is often more volatile than large stocks. [Historical volatility](/historical-volatility/) on major coins has usually been several times that of a broad stock index. That affects averages in three ways:

1. **Price strays further from the line.** A move of 15% away from a 50-day is ordinary in some crypto phases and extreme for a large stock. Distance rules copied from stocks need resizing.
2. **Whipsaws are larger.** A false cross costs more in a volatile market, because stops sit further away.
3. **Envelopes need wider bands.** A 2.5% envelope that suits an index can sit inside a single day's range on a coin.

Using volatility-scaled tools (ATR-based zones, Bollinger or Keltner bands) handles this more naturally than fixed percentages.

## A worked example

A trader uses the 50-day SMA as a pullback zone on a large stock, with a zone of 1% either side. They want to apply the same idea to a coin.

- Stock: price 200, 50-day SMA 190, ATR 3 (1.5% of price). Zone of 1% = 188.10 to 191.90. About two-thirds of an ATR either side.
- Coin: price 60, 50-day SMA 54, ATR 3 (5% of price). A 1% zone = 53.46 to 54.54, about a fifth of an ATR either side. Far too tight; ordinary noise would break it.
- Using ATR instead: two-thirds of an ATR on the coin = 2.00, so the zone is 52 to 56.

The idea is the same, but the zone scales with how much the market actually moves.

## History length and young coins

A 200-day average needs 200 days of history before it exists. Many coins have short histories, and some trade on only a few venues for their first months. For a young coin, long averages are either missing or built on thin, patchy data. Shorter averages, or weekly views once enough data exists, are more practical.

## Verdict

The usual periods can be used on crypto, and many crypto traders do use the 50 and 200 because others watch them. Just know that the same number covers less calendar time, that daily closes vary by platform, and that higher volatility calls for zones scaled to ATR rather than fixed percentages. More in [the moving averages guide](/guide/moving-averages/).
