---
slug: most-volatile-forex-session
title: "Which forex session is most volatile?"
description: For most major pairs the London and New York overlap is the busiest window. Session times in UK time, why it moves, and how to measure it.
query: most volatile forex session
pillar: volatility-guide
publish: 2028-03-13
reviewed: 17 November 2026
guides: [atr, average-daily-range, opening-range-breakout]
siblings: [how-to-filter-trades-by-volatility, how-to-trade-high-volatility-markets]
value: [table, example, verdict]
---

For most major currency pairs, the busiest window is the overlap of the London and New York sessions, roughly 13:00 to 17:00 UK time. The London session as a whole is usually busier than the Asian session, though pairs that include the yen or the Australian dollar can be livelier in Asian hours than other pairs.

## The sessions in UK time

The forex market trades around the clock on weekdays, passing between financial centres. Session times are conventions, not official opening hours, and sources differ by an hour or so.

| Session | Approximate UK time | Notes |
|---|---|---|
| Sydney | 22:00 to 07:00 | The week opens here on Sunday evening UK time |
| Tokyo | 00:00 to 09:00 | Yen pairs most active |
| London | 08:00 to 17:00 | The largest single centre for currency trading |
| New York | 13:00 to 22:00 | US data releases usually at 13:30 UK time |
| London and New York overlap | 13:00 to 17:00 | Two biggest centres open together |

The UK and US change their clocks on different dates in spring and autumn, so for a few weeks each year the overlap starts or ends an hour differently. Check the dates each year.

## Why the overlap tends to move most

- **Two big centres at once.** The Bank for International Settlements' triennial survey has long listed the UK and the US as the two largest centres for currency trading. When both are open, more orders meet.
- **Scheduled news.** Many major US releases land at 13:30 UK time, and European and UK data come out during the London morning.
- **Fixes.** The widely used WM/Reuters 4pm London benchmark fix falls inside the overlap and can bring a burst of orders around it.

None of this sets a direction. Busy hours mean bigger bars, in both directions, and often tighter spreads outside of news spikes.

## Measure it on your own pair

Volatility by session is easy to measure, and worth doing for the exact pair and period you trade. The method:

1. Load hourly bars for the pair.
2. For each hour, take the true range (or high minus low).
3. Group hours by session and average them, over many weeks.
4. Compare the averages, and repeat for different years.

**Worked illustration.** Five days of made-up average hourly ranges, in pips, for one pair, to show the arithmetic only:

| Window (UK time) | Day 1 | Day 2 | Day 3 | Day 4 | Day 5 | Average |
|---|---|---|---|---|---|---|
| Asia (00:00 to 07:00) | 18 | 22 | 15 | 20 | 25 | 20.0 |
| London morning (08:00 to 12:00) | 35 | 41 | 30 | 38 | 44 | 37.6 |
| Overlap (13:00 to 17:00) | 48 | 39 | 55 | 42 | 51 | 47.0 |
| Late New York (17:00 to 22:00) | 20 | 26 | 18 | 24 | 22 | 22.0 |

In this illustration the overlap averages 47 pips an hour against 20 in Asian hours. Five days is far too few to rely on; a real check needs months of data. This is the same idea as [ATR](/atr/) and [average daily range](/average-daily-range/), applied by hour instead of by day.

## What this means for trading plans

| Plan | Session consideration |
|---|---|
| Breakout trading | Breakouts of the Asian range at the London open are a common setup; the [opening range breakout](/opening-range-breakout/) idea is the same |
| Range trading | Quieter hours often suit fading the edges of a range |
| Stops | A stop sized on Asian-hour ranges can sit inside normal noise once London opens |
| Costs | Spreads tend to be widest in thin hours, such as the late New York and early Sydney handover |

Whatever the session, 1R is the distance from your side-correct fill to the first stop, times size. In a thin hour the spread is wider, so the side-correct fill already sits further from the mid price. A clean stop-out is -1R; slippage on news and gaps at the weekly open come on top, as does commission. Stops only tighten after entry.

## Common mistakes

- Using session times without adjusting for daylight-saving changes.
- Assuming every pair behaves like EUR/USD. Yen and Australian dollar pairs differ.
- Placing tight stops just before a scheduled release.
- Treating "most volatile" as "best to trade". Bigger moves mean bigger stops and smaller size.

## Verdict

For most major pairs, the London and New York overlap, about 13:00 to 17:00 UK time, is the busiest window, with the London session busier than Asia overall. Confirm it on your own pair by averaging range by hour, and plan stops, size and costs around the session you trade.

More in [the volatility guide](/guide/volatility-guide/).
