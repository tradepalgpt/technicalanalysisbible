---
slug: average-daily-range
name: Average Daily Range (ADR)
aka: [ADR, Average Range, Daily Range]
type: volatility
states: [volatility]
weak_states: [breakout]
purposes: [stop, exit]
inventor: Not attributed to one person
year: Unknown
default_settings: "14 days (some traders use 5, 10 or 20)"
pairs_with: [atr, previous-day-high-low, pivot-points, profit-target]
related: [atr, normalized-atr, standard-deviation, historical-volatility, nr7, atr-stop]
compare: [atr-vs-standard-deviation]
glossary: [volatility, lookback-period, timeframe, take-profit, stop-loss, gap]
wave: 2
reviewed: 14 November 2026
---

The Average Daily Range (ADR) is the average distance between the high and the low of each day over the last several days. It tells you how far a market typically travels in one day. Traders use it to size stops, set realistic profit targets and judge whether a move today is already stretched or still has room.

## At a glance

| | |
|---|---|
| Type | Volatility measure |
| Best market states | Volatility (any market where daily range matters) |
| Weak in | Breakout days, which can exceed the average by a wide margin |
| Best uses | Stop placement, profit targets |
| Default settings | 14 days (5, 10 and 20 are also common) |
| Created by | Not attributed to one person |
| Leading or lagging | Lagging (an average of past ranges) |

## What is the Average Daily Range?

Every day has a high and a low. The gap between them is that day's range. The ADR is simply the average of those ranges over a chosen number of days.

If a currency pair has moved 80 pips high to low on average over the last 14 days, then 80 pips is its ADR. A trader who sees the pair has already travelled 75 pips today knows it has used most of a typical day.

The idea is old and has no single inventor. It is used widely in forex, futures and day trading, and sits beside the better-known [ATR](/atr/). The difference matters. ATR uses the "true range", which also counts gaps from the previous close. ADR uses only the high-to-low range inside the day, so it ignores overnight gaps. In markets that trade nearly around the clock, such as forex, the two are often close. In stocks with large opening gaps, they can differ a lot.

## Formula

1. For each day, range = high - low.
2. ADR = sum of the last N daily ranges / N.

**Worked example.** Over five days the ranges are 8, 10, 12, 10 and 10 points.
Total = 8 + 10 + 12 + 10 + 10 = 50
ADR(5) = 50 / 5 = **10 points**

It can also be shown as a percentage: ADR% = ADR / close x 100. If the close is 200, then 10 / 200 x 100 = 5 per cent.

Note: platforms and traders vary. Some average the ranges with a simple average, others with an exponential one. Some measure open to close rather than high to low, and some use a different number of days. Check the definition in the tool you use. Because ADR is usually quoted by traders informally, there is no single official version.

## How to read it

**Typical distance.** If ADR is 10 points, a move of 3 points is small and a move of 12 is large. This gives a yardstick for what is normal.

**Range used up.** Compare today's range so far with the ADR. If price has already covered 90 per cent of the ADR by midday, more movement is still possible, but a continuation is less typical than a pause or pullback. This is a rule of thumb, not a law.

**Rising or falling ADR.** If the ADR is rising, ranges are expanding and volatility is increasing. If it is falling, the market is quieting, which sometimes comes before a larger move. See [NR7](/nr7/) for a way of spotting narrow days.

**Target and stop sizing.** Stops that are much smaller than a typical range are often hit by normal noise. Targets far larger than the ADR need an unusual day to be reached. Many traders compare their idea to a fraction of ADR, such as a stop of one third of ADR. That fraction is a personal choice and not a standard.

**Comparing markets.** Because ADR is in price units, it cannot be compared directly between markets. Convert it to a percentage first.

## Best market states

**Volatility analysis (best).** ADR exists to measure how much a market moves. It is a good yardstick for deciding whether a market is quiet or active compared with its own recent history.

**Ranges (useful).** In a sideways market the day's range is often bounded, so ADR helps to judge how far price might swing between support and resistance.

**Trends (mixed).** On trending days the range can far exceed the average. ADR is a poor ceiling in those conditions.

**Breakouts (weak).** Breakouts frequently produce days well above the ADR. Using ADR as a hard target can make you exit a strong move too early.

**Reversals.** A day that reaches the ADR at a known level can add weight to a reversal idea, but it does not signal one on its own.

## Settings

| Setting | Days | What it does |
|---|---|---|
| Short-term | 5 | Reacts quickly to a change in volatility, noisy |
| Default | 14 | A common balance; matches Wilder's ATR period |
| Long-term | 20 to 30 | Smoother, slower to reflect a new volatility regime |

On intraday charts the same idea can be used with an hourly or session range, but the "daily" in the name refers to the daily bar. Shorter windows respond faster to news days. Longer ones stay steadier.

## Common mistakes

- Treating the ADR as a ceiling. Many days will beat it.
- Mixing it up with ATR and not realising that gaps are ignored.
- Comparing ADR in points between different markets instead of using a percentage.
- Using the average blindly after a news event has distorted one day's range. One huge day can lift the average for the whole window.
- Setting a stop tighter than normal noise because the target looks neat.
- Forgetting session differences: the "day" can end at different times on different platforms, which changes the high and low.

## Pairs well with

- **[ATR](/atr/)**: the gap-aware cousin, handy for checking that both measures agree.
- **[Previous day high and low](/previous-day-high-low/)**: shows where yesterday's range sits relative to today's ADR.
- **[Pivot points](/pivot-points/)**: gives levels inside the expected range.
- **[Profit target](/profit-target/)**: ADR offers a reasonable limit for how far to aim.

## Sources

- Wilder, J. Welles Jr. (1978). *New Concepts in Technical Trading Systems*. Trend Research. (The true range and ATR, which ADR is often compared with.)
- Murphy, John J. (1999). *Technical Analysis of the Financial Markets*. New York Institute of Finance.

## FAQ

**What is a good ADR?**
There is no good or bad figure. ADR only describes how far a market normally moves in a day. A higher number means a more volatile market. Compare it with the same market's own history, not with other markets.

**What is the difference between ADR and ATR?**
ADR averages the high-to-low range inside each day. ATR averages the true range, which also includes gaps from the previous close. In round-the-clock markets they are close. In stocks that gap at the open, ATR is usually larger.

**How do you use ADR for stop loss?**
Some traders set a stop as a fraction of the ADR so it is wide enough to avoid normal noise. The fraction is a personal choice. The stop should still sit at a price level where the trade idea is proven wrong.

**How many days should ADR use?**
Fourteen days is a common default, with five, ten and twenty also used. Short windows react quickly. Long ones are steadier. Test your choice on the market you trade.

**Can price move more than the ADR in a day?**
Yes. ADR is an average, so about half of days will be larger. Breakouts, news and strong trends often produce days well above it.
